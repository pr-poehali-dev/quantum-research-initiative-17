import os
import boto3
import json

HTML_CONTENT = r"""<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Калькулятор веса ГНКТ в вертикальном стволе</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: linear-gradient(145deg, #dbe4f0 0%, #eef3f9 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 24px 16px; color: #1e3a5f; }
        .app { max-width: 1000px; width: 100%; margin: 0 auto; box-shadow: 0 25px 50px -12px rgba(0, 30, 60, 0.4); border-radius: 32px; background: transparent; }
        .header { background: white; border-radius: 32px 32px 0 0; padding: 2rem 2.5rem 1.5rem; border-bottom: 1px solid #e0eaf5; }
        .header h1 { font-weight: 500; font-size: 2.2rem; color: #00315e; letter-spacing: -0.5px; margin-bottom: 0.2rem; }
        .card { background: white; padding: 28px 32px 32px; border-radius: 0 0 32px 32px; box-shadow: 0 20px 35px -8px rgba(0, 40, 70, 0.3); }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 30px 40px; }
        @media (max-width:700px){ .grid-2{ grid-template-columns:1fr; } }
        h2 { font-weight: 500; font-size: 1.3rem; color: #1d4c7a; margin: 0 0 16px 0; border-left: 5px solid #7fb4e0; padding-left: 16px; }
        .param-row { display: flex; align-items: center; flex-wrap: wrap; margin-bottom: 16px; gap: 8px; }
        .param-row label { width: 200px; font-weight: 500; color: #26527f; font-size: 0.95rem; }
        .param-row input, .param-row select { flex: 1 1 200px; padding: 9px 16px; border-radius: 40px; border: 1px solid #bed3ec; background: #f9fdff; font-size: 0.95rem; transition: all 0.15s ease; }
        .param-row input:focus, .param-row select:focus { border-color: #4895d6; outline: none; background: white; box-shadow: 0 0 0 4px rgba(72,149,214,0.15); }
        .readonly-value { background: #ebf2fa; padding: 8px 20px; border-radius: 40px; color: #144a73; font-weight: 600; border: 1px solid #b9d2ed; min-width: 120px; text-align: right; display: inline-block; }
        .divider { height: 1px; background: linear-gradient(to right, #c4d8f0, #eef5fc, #c4d8f0); margin: 24px 0 20px; }
        .result-area { background: #f0f8ff; border-radius: 24px; padding: 22px 26px; margin: 28px 0 12px; border: 1px solid #cde1f5; }
        .result-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px dashed #b9d1ea; }
        .result-row:last-child { border-bottom: none; }
        .result-label { color: #1e4e79; font-weight: 500; font-size: 1rem; }
        .result-number { font-weight: 650; color: #003e72; font-size: 1.2rem; text-align: right; min-width: 100px; display: inline-block; }
        .total-block { background: #deecfd; border-radius: 22px; padding: 18px 24px; margin-top: 18px; border-left: 7px solid #f6b83e; }
        .total-block .result-number { font-size: 2rem; font-weight: 700; color: #b13e2c; }
        button { background: linear-gradient(145deg, #1f6193, #1a5280); border: none; color: white; font-weight: 600; padding: 14px 24px; border-radius: 60px; font-size: 1.1rem; width: 100%; cursor: pointer; transition: all 0.15s ease; margin-top: 8px; box-shadow: 0 8px 18px -6px rgba(26, 82, 128, 0.4); }
        button:hover { background: linear-gradient(145deg, #124572, #0e3a60); transform: scale(1.01); }
        .pressure-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; flex: 1; }
        .atm-indicator { background: #cfe3ff; border-radius: 40px; padding: 9px 20px; font-weight: 600; color: #003e7e; font-size: 1rem; border: 1px solid #87b9ec; min-width: 100px; text-align: center; }
        .footer { text-align: center; margin-top: 20px; color: #577ea0; font-size: 0.8rem; background: rgba(255,255,255,0.5); padding: 12px 20px; border-radius: 40px; }
        .formula-breakdown { margin-top: 16px; padding: 16px 20px; background: #e9f0f9; border-radius: 24px; font-size: 0.9rem; border-left: 5px solid #4a8ec7; }
        .formula-breakdown p { margin: 6px 0; }
        .formula-breakdown .formula { font-weight: 700; color: #00315e; font-size: 1rem; background: #d1e2f5; padding: 8px 15px; border-radius: 40px; display: inline-block; margin: 8px 0 12px; }
        .result-unit { color: #2f5b85; margin-left: 6px; }
    </style>
</head>
<body>
<div class="app">
    <div class="header">
        <h1>Калькулятор веса ГНКТ в вертикальном стволе</h1>
    </div>
    <div class="card">
        <div class="grid-2">
            <div>
                <h2>&#10102; Труба и глубины</h2>
                <div class="param-row">
                    <label>Наружный диаметр, мм:</label>
                    <select id="odSelect">
                        <option value="25.4">25.4 мм (1.0")</option>
                        <option value="31.8">31.8 мм (1.25")</option>
                        <option value="38.1" selected>38.1 мм (1.5")</option>
                        <option value="44.5">44.5 мм (1.75")</option>
                        <option value="50.8">50.8 мм (2.0")</option>
                        <option value="60.3">60.3 мм (2.375")</option>
                        <option value="66.7">66.7 мм (2.625")</option>
                        <option value="73.0">73.0 мм (2.875")</option>
                        <option value="82.6">82.6 мм (3.25")</option>
                        <option value="88.9">88.9 мм (3.5")</option>
                    </select>
                </div>
                <div class="param-row">
                    <label>Толщина стенки, мм:</label>
                    <select id="wtSelect"></select>
                </div>
                <div class="param-row">
                    <label>Марка стали:</label>
                    <select id="gradeSelect">
                        <option value="RT70">RT70 (CT70)</option>
                        <option value="RT80">RT80 (CT80)</option>
                        <option value="RT90" selected>RT90 (CT90)</option>
                        <option value="RT100">RT100 (CT100)</option>
                        <option value="RT110">RT110 (CT110)</option>
                    </select>
                </div>
                <div class="param-row">
                    <label>Длина колонны в скважине, м:</label>
                    <input type="number" id="length" value="2500" step="10">
                </div>
                <div class="divider"></div>
                <h2>&#10103; Плотность флюидов</h2>
                <div class="param-row">
                    <label>Плотность флюида ГНКТ, кг/м³:</label>
                    <input type="number" id="densIn" value="1017" step="1">
                </div>
                <div class="param-row">
                    <label>Плотность в стволе скважины, кг/м³:</label>
                    <input type="number" id="densAnn" value="1133" step="1">
                </div>
            </div>
            <div>
                <h2>&#128208; Геометрия трубы</h2>
                <div class="param-row">
                    <label>Внутренний диаметр, мм:</label>
                    <span id="dispID" class="readonly-value">31.3</span>
                </div>
                <div class="param-row">
                    <label>Масса 1 метра, кг/м:</label>
                    <span id="dispMass" class="readonly-value">2.91</span>
                </div>
                <div class="param-row">
                    <label>Площадь металла, м²:</label>
                    <span id="dispAw" class="readonly-value">0.000305</span>
                </div>
                <div class="param-row">
                    <label>Площадь OD сечения, м²:</label>
                    <span id="areaOD" class="readonly-value">0.001140</span>
                </div>
                <div class="divider"></div>
                <h2>&#10133; Дополнительные параметры</h2>
                <div class="param-row">
                    <label>Устьевое давление, атм:</label>
                    <div class="pressure-row">
                        <input type="number" id="whp_atm" value="29.6" step="0.1" style="flex:1;">
                        <span class="atm-indicator" id="kpaIndicator">3000 кПа</span>
                    </div>
                </div>
                <div class="param-row">
                    <label>Вес КНК (инструмента), кг:</label>
                    <input type="number" id="bha_kg" value="10" step="0.1">
                </div>
                <div class="param-row">
                    <label>Сила стриппера, кгс:</label>
                    <input type="number" id="strip_kgf" value="250" step="5">
                </div>
                <div style="text-align: right; color: #2a6230; font-size:0.85rem; margin-top:5px;">1 т = 1000 кгс</div>
            </div>
        </div>
        <button onclick="calculateTons()">Рассчитать вес колонны (тонны)</button>
        <div class="result-area" id="resultBlock">
            <div class="result-row">
                <span class="result-label">Вес ГНКТ в воздухе:</span>
                <span><span class="result-number" id="resWct">5.199</span><span class="result-unit">т</span></span>
            </div>
            <div class="result-row">
                <span class="result-label">Вес флюида внутри ГНКТ:</span>
                <span><span class="result-number" id="resWfluid">2.170</span><span class="result-unit">т</span></span>
            </div>
            <div class="result-row">
                <span class="result-label">Выталкивающая сила (FB):</span>
                <span><span class="result-number" id="resFb">4.079</span><span class="result-unit">т</span></span>
            </div>
            <div class="result-row">
                <span class="result-label">Сила от устьевого давления:</span>
                <span><span class="result-number" id="resFwh">3.420</span><span class="result-unit">т</span></span>
            </div>
            <div class="result-row">
                <span class="result-label">Дифф. давление на конце:</span>
                <span><span class="result-number" id="resFdiff">0.00407</span><span class="result-unit">т</span></span>
            </div>
            <div class="result-row">
                <span class="result-label">Вес КНК + стриппер:</span>
                <span><span class="result-number" id="resAdd">0.260</span><span class="result-unit">т</span></span>
            </div>
            <div class="total-block">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:600; font-size:1.2rem;">ИТОГО вес колонны:</span>
                    <span><span class="result-number" id="totalTons">0.134</span><span style="font-size:1.2rem; color:#003e72; margin-left:5px;">т</span></span>
                </div>
            </div>
        </div>
        <div class="formula-breakdown">
            <div class="formula">W<sub>колонны</sub> = W<sub>CT</sub> + W<sub>fluid</sub> - F<sub>B</sub> + F<sub>diff</sub> - F<sub>wh</sub> + W<sub>BHA</sub> + F<sub>strip</sub></div>
            <p><strong>W<sub>CT</sub></strong> = L x m x 0.981 / 1000</p>
            <p><strong>W<sub>fluid</sub></strong> = V<sub>inside</sub> x rho<sub>in</sub> / 1000</p>
            <p><strong>F<sub>B</sub></strong> = V<sub>displaced</sub> x rho<sub>ann</sub> / 1000</p>
            <p><strong>F<sub>wh</sub></strong> = (P<sub>wh</sub> x A<sub>OD</sub> x 1000) / 981</p>
            <p><strong>F<sub>diff</sub></strong> = (P<sub>wh</sub> x A<sub>OD</sub>) / 981</p>
            <p><strong>W<sub>BHA</sub> + F<sub>strip</sub></strong> = (m<sub>BHA</sub> + F<sub>strip</sub>) / 1000</p>
            <p style="margin-top:8px; font-size:0.8rem; color:#32648c;">L - длина колонны (м), m - масса 1 м трубы (кг/м), rho - плотность (кг/м3), A<sub>OD</sub> - площадь наружного сечения (м2), P<sub>wh</sub> - устьевое давление (кПа).</p>
        </div>
    </div>
    <div class="footer">Результаты в метрических тоннах (т) · 1 т = 1000 кгс</div>
</div>
<script>
const tubeDatabase = {"25.4":{"1.9":{id:21.6,mass:1.10},"2.0":{id:21.4,mass:1.17},"2.1":{id:21.2,mass:1.21},"2.2":{id:21.0,mass:1.26},"2.4":{id:20.6,mass:1.37},"2.6":{id:20.2,mass:1.46},"2.8":{id:19.8,mass:1.55},"3.0":{id:19.4,mass:1.66},"3.2":{id:19.0,mass:1.74},"3.4":{id:18.6,mass:1.85}},"31.8":{"1.9":{id:28.0,mass:1.40},"2.0":{id:27.8,mass:1.49},"2.2":{id:27.4,mass:1.61},"2.4":{id:27.0,mass:1.75},"2.6":{id:26.6,mass:1.86},"2.8":{id:26.2,mass:1.98},"3.0":{id:25.8,mass:2.13},"3.2":{id:25.4,mass:2.24},"3.4":{id:25.0,mass:2.38},"3.7":{id:24.4,mass:2.55},"4.0":{id:23.8,mass:2.72},"4.4":{id:23.0,mass:2.99}},"38.1":{"2.2":{id:33.7,mass:1.96},"2.4":{id:33.3,mass:2.12},"2.6":{id:32.9,mass:2.27},"2.8":{id:32.5,mass:2.41},"3.0":{id:32.1,mass:2.59},"3.2":{id:31.7,mass:2.73},"3.4":{id:31.3,mass:2.91},"3.7":{id:30.7,mass:3.13},"4.0":{id:30.1,mass:3.34},"4.4":{id:29.3,mass:3.69},"4.8":{id:28.5,mass:3.92},"5.2":{id:27.7,mass:4.21}},"44.5":{"2.4":{id:39.7,mass:2.50},"2.6":{id:39.3,mass:2.67},"2.8":{id:38.9,mass:2.85},"3.0":{id:38.5,mass:3.06},"3.2":{id:38.1,mass:3.23},"3.4":{id:37.7,mass:3.45},"3.7":{id:37.1,mass:3.70},"4.0":{id:36.5,mass:3.96},"4.4":{id:35.7,mass:4.39},"4.8":{id:34.9,mass:4.67},"5.2":{id:34.1,mass:5.02},"5.7":{id:33.1,mass:5.44},"6.4":{id:31.7,mass:5.97}},"50.8":{"2.8":{id:45.2,mass:3.28},"3.0":{id:44.8,mass:3.53},"3.2":{id:44.4,mass:3.73},"3.4":{id:44.0,mass:3.98},"3.7":{id:43.4,mass:4.28},"4.0":{id:42.8,mass:4.58},"4.4":{id:42.0,mass:5.08},"4.8":{id:41.2,mass:5.42},"5.2":{id:40.4,mass:5.83},"5.7":{id:39.4,mass:6.33},"6.4":{id:38.0,mass:6.96},"7.0":{id:36.8,mass:7.57},"7.1":{id:36.6,mass:7.69}},"60.3":{"2.8":{id:54.7,mass:3.93},"3.0":{id:54.3,mass:4.24},"3.2":{id:53.9,mass:4.47},"3.4":{id:53.5,mass:4.78},"3.7":{id:52.9,mass:5.14},"4.0":{id:52.3,mass:5.51},"4.4":{id:51.5,mass:6.13},"4.8":{id:50.7,mass:6.54},"5.2":{id:49.9,mass:7.05},"5.7":{id:48.9,mass:7.67},"6.4":{id:47.5,mass:8.45},"7.0":{id:46.3,mass:9.22},"7.1":{id:46.1,mass:9.36},"7.6":{id:45.1,mass:9.90}},"66.7":{"3.7":{id:59.3,mass:5.72},"4.0":{id:58.7,mass:6.13},"4.4":{id:57.9,mass:6.82},"4.8":{id:57.1,mass:7.29},"5.2":{id:56.3,mass:7.86},"5.7":{id:55.3,mass:8.56},"6.4":{id:53.9,mass:9.45},"7.0":{id:52.7,mass:10.32},"7.1":{id:52.5,mass:10.48},"7.6":{id:51.5,mass:11.10}},"73.0":{"3.4":{id:66.2,mass:5.84},"3.7":{id:65.6,mass:6.30},"4.0":{id:65.0,mass:6.75},"4.4":{id:64.2,mass:7.52},"4.8":{id:63.4,mass:8.04},"5.2":{id:62.6,mass:8.67},"5.7":{id:61.6,mass:9.45},"6.4":{id:60.2,mass:10.44},"7.0":{id:59.0,mass:11.41},"7.1":{id:58.8,mass:11.60},"7.6":{id:57.8,mass:12.29}},"82.6":{"3.7":{id:75.2,mass:7.16},"4.0":{id:74.6,mass:7.68},"4.4":{id:73.8,mass:8.56},"4.8":{id:73.0,mass:9.16},"5.2":{id:72.2,mass:9.89},"5.7":{id:71.2,mass:10.78},"6.4":{id:69.8,mass:11.93},"7.0":{id:68.6,mass:13.06},"7.1":{id:68.4,mass:13.27},"7.6":{id:67.4,mass:14.08}},"88.9":{"4.0":{id:80.9,mass:8.30},"4.4":{id:80.1,mass:9.26},"4.8":{id:79.3,mass:9.91},"5.2":{id:78.5,mass:10.70},"5.7":{id:77.5,mass:11.68},"6.4":{id:76.1,mass:12.93},"7.0":{id:74.9,mass:14.16},"7.1":{id:74.7,mass:14.39},"7.6":{id:73.7,mass:15.27}}};
let currentOD=38.1,currentWT="3.4",currentMass=2.91,currentID=31.3;
function populateWT(){let od=document.getElementById('odSelect').value;let wtSel=document.getElementById('wtSelect');wtSel.innerHTML='';let sizes=tubeDatabase[od];if(!sizes)return;let sorted=Object.keys(sizes).sort((a,b)=>parseFloat(a)-parseFloat(b));sorted.forEach(wt=>{let opt=document.createElement('option');opt.value=wt;opt.textContent=wt+' мм (масса '+sizes[wt].mass+' кг/м)';if(od==='38.1'&&wt==='3.4')opt.selected=true;wtSel.appendChild(opt);});updateGeo();}
function updateGeo(){let od=document.getElementById('odSelect').value;let wt=document.getElementById('wtSelect').value;if(!wt)return;let rec=tubeDatabase[od][wt];currentOD=parseFloat(od);currentWT=wt;currentMass=rec.mass;currentID=rec.id;document.getElementById('dispID').innerText=currentID.toFixed(1);document.getElementById('dispMass').innerText=currentMass.toFixed(2);let OD_m=currentOD/1000,ID_m=currentID/1000;let aOD=(Math.PI*OD_m*OD_m)/4;let aID=(Math.PI*ID_m*ID_m)/4;let aWall=aOD-aID;document.getElementById('dispAw').innerText=aWall.toFixed(6);document.getElementById('areaOD').innerText=aOD.toFixed(6);}
function calculateTons(){let L=parseFloat(document.getElementById('length').value)||0;let densIn=parseFloat(document.getElementById('densIn').value)||0;let densAnn=parseFloat(document.getElementById('densAnn').value)||0;let atm=parseFloat(document.getElementById('whp_atm').value)||0;let whp_kpa=atm*101.325;document.getElementById('kpaIndicator').innerText=Math.round(whp_kpa)+' кПа';let bha_kg=parseFloat(document.getElementById('bha_kg').value)||0;let strip_kgf=parseFloat(document.getElementById('strip_kgf').value)||0;let OD_m=currentOD/1000,ID_m=currentID/1000;let areaOD=(Math.PI*OD_m*OD_m)/4;let areaID=(Math.PI*ID_m*ID_m)/4;let volumeInside=areaID*L;let volumeDisplaced=areaOD*L;let Wct_ton=(L*currentMass)/1000;let Wfluid_ton=(volumeInside*densIn)/1000;let Fb_ton=(volumeDisplaced*densAnn)/1000;let Fwh_ton=(whp_kpa*areaOD*1000)/981;let Fdiff_ton=(whp_kpa*areaOD)/981;let add_ton=(bha_kg+strip_kgf)/1000;let total=Wct_ton+Wfluid_ton-Fb_ton+Fdiff_ton-Fwh_ton+add_ton;document.getElementById('resWct').innerText=Wct_ton.toFixed(3);document.getElementById('resWfluid').innerText=Wfluid_ton.toFixed(3);document.getElementById('resFb').innerText=Fb_ton.toFixed(3);document.getElementById('resFwh').innerText=Fwh_ton.toFixed(3);document.getElementById('resFdiff').innerText=Fdiff_ton.toFixed(5);document.getElementById('resAdd').innerText=add_ton.toFixed(3);document.getElementById('totalTons').innerText=total.toFixed(3);}
document.getElementById('odSelect').addEventListener('change',function(){populateWT();calculateTons();});
document.getElementById('wtSelect').addEventListener('change',function(){updateGeo();calculateTons();});
document.getElementById('gradeSelect').addEventListener('change',calculateTons);
document.getElementById('length').addEventListener('input',calculateTons);
document.getElementById('densIn').addEventListener('input',calculateTons);
document.getElementById('densAnn').addEventListener('input',calculateTons);
document.getElementById('whp_atm').addEventListener('input',calculateTons);
document.getElementById('bha_kg').addEventListener('input',calculateTons);
document.getElementById('strip_kgf').addEventListener('input',calculateTons);
window.onload=function(){populateWT();updateGeo();calculateTons();};
</script>
</body>
</html>"""


def handler(event: dict, context) -> dict:
    """Загружает HTML калькулятора веса ГНКТ в S3."""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )

    key = 'calculators/gnkt-weight-vertical-v1.html'
    s3.put_object(
        Bucket='files',
        Key=key,
        Body=HTML_CONTENT.encode('utf-8'),
        ContentType='text/html; charset=utf-8'
    )

    access_key = os.environ['AWS_ACCESS_KEY_ID']
    cdn_url = f'https://cdn.poehali.dev/projects/{access_key}/bucket/{key}'

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'url': cdn_url, 'status': 'uploaded'})
    }
