import os
import boto3

HTML_CONTENT = r"""<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Химия · справочные таблицы</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #f0f5fa; font-family: 'Segoe UI', Roboto, system-ui, -apple-system, sans-serif; padding: 30px 20px; color: #1a2b3c; }
        .container { max-width: 1400px; margin: 0 auto; }
        h1 { font-size: 2.5rem; font-weight: 400; letter-spacing: -0.5px; margin-bottom: 0.5rem; border-left: 8px solid #2b6f9b; padding-left: 25px; color: #0a3144; }
        .subtitle { font-size: 1.1rem; color: #2f5e7a; margin-bottom: 40px; font-weight: 300; padding-left: 33px; }
        .section-card { background: white; border-radius: 28px; box-shadow: 0 12px 30px rgba(0,30,50,0.1); margin-bottom: 45px; padding: 30px 25px; transition: box-shadow 0.2s; border: 1px solid rgba(150, 190, 220, 0.3); }
        .section-card:hover { box-shadow: 0 18px 40px rgba(17, 67, 99, 0.15); }
        .section-title { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; border-bottom: 2px dashed #9fc5e4; padding-bottom: 15px; }
        .section-title span { background: #1f567d; color: white; width: 48px; height: 48px; display: inline-flex; align-items: center; justify-content: center; border-radius: 30px; font-size: 1.8rem; font-weight: 500; box-shadow: 0 6px 12px #a6c8e4; }
        .section-title h2 { font-size: 2rem; font-weight: 350; color: #144a6f; }
        .note { background: #e8f0fe; border-radius: 20px; padding: 14px 22px; margin: 15px 0 25px 0; font-size: 0.95rem; color: #025b8c; border-left: 6px solid #2a86c7; }
        .table-responsive { overflow-x: auto; margin: 20px 0 10px; border-radius: 20px; border: 1px solid #cbdbe9; background: #f9fcff; }
        table { width: 100%; border-collapse: collapse; font-size: 0.9rem; min-width: 700px; }
        th { background: #1d618b; color: white; font-weight: 500; padding: 12px 10px; white-space: nowrap; }
        td { padding: 10px 12px; border-bottom: 1px solid #dde7f0; vertical-align: middle; }
        tr:last-child td { border-bottom: none; }
        tr:nth-child(even) { background: #f3f9ff; }
        .periodic-table td { font-size: 0.8rem; padding: 6px 4px; text-align: center; border: 1px solid #b4cde0; }
        .periodic-table th { background: #3a6d8c; font-size: 0.8rem; padding: 6px 2px; text-align: center; }
        .badge { background: #2a6b96; color: white; border-radius: 30px; padding: 2px 12px; font-size: 0.8rem; display: inline-block; margin-right: 8px; }
        .gas-full-table { font-size: 0.8rem; }
        .gas-full-table td:nth-child(3), .gas-full-table td:nth-child(4), .gas-full-table td:nth-child(5) { font-family: 'Courier New', monospace; background: #f4faff; white-space: nowrap; }
        .chem-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; margin: 20px 0; }
        .chem-item { background: #ecf5fc; border-radius: 20px; padding: 15px 20px; border-left: 6px solid #3079ab; box-shadow: 0 4px 8px #cdddec; }
        .chem-item strong { font-size: 1.2rem; color: #0d3d5e; display: block; margin-bottom: 5px; }
        .acids-layout { display: flex; flex-wrap: wrap; gap: 30px; align-items: flex-start; }
        .acid-list { flex: 1 1 300px; background: #f9fcff; border-radius: 24px; padding: 10px; border: 1px solid #cbdbe9; }
        .acid-list table { min-width: unset; width: 100%; font-size: 0.85rem; }
        .solubility-block { flex: 2 1 500px; }
        .legend { display: flex; flex-wrap: wrap; gap: 20px; background: #e2effb; border-radius: 30px; padding: 15px 25px; margin: 15px 0; }
        .solubility-table td { text-align: center; font-size: 0.8rem; padding: 6px 2px; }
        .freezing-table td { text-align: right; }
        .freezing-table td:first-child { text-align: left; font-weight: 500; }
    </style>
</head>
<body>
<div class="container">
    <h1>&#129514; Химия</h1>
    <div class="subtitle">периодическая система &middot; газы &middot; технологические жидкости &middot; кислоты &middot; солевые растворы</div>

    <div class="section-card">
        <div class="section-title"><span>1</span><h2>Таблица Менделеева</h2></div>
        <div class="table-responsive">
            <table class="periodic-table">
                <thead><tr><th>период</th><th>ряд</th><th>I</th><th>II</th><th>III</th><th>IV</th><th>V</th><th>VI</th><th>VII</th><th>VIII</th></tr></thead>
                <tbody>
                <tr><td>I</td><td>1</td><td>1 H 1,007<br>водород</td><td></td><td></td><td></td><td></td><td></td><td>(H)</td><td>2 He 4,002<br>гелий</td></tr>
                <tr><td>II</td><td>2</td><td>3 Li 6,939<br>литий</td><td>4 Be 9,012<br>берилий</td><td>5 B 10,811<br>бор</td><td>6 C 12,01115<br>углерод</td><td>7 N 14,0067<br>азот</td><td>8 O 15,9994<br>кислород</td><td>9 F 18,9984<br>фтор</td><td>10 Ne 20,183<br>неон</td></tr>
                <tr><td>III</td><td>3</td><td>11 Na 22,9898<br>натрий</td><td>12 Mg 24,312<br>магний</td><td>13 Al 26,9815<br>алюминий</td><td>14 Si 28,086<br>кремний</td><td>15 P 30,9738<br>фосфор</td><td>16 S 32,064<br>сера</td><td>17 Cl 35,453<br>хлор</td><td>18 Ar 39,948<br>аргон</td></tr>
                <tr><td>IV</td><td>4</td><td>19 K 39,102<br>калий</td><td>20 Ca 40,08<br>кальций</td><td>21 Sc 44,956<br>скандий</td><td>22 Ti 47,90<br>титан</td><td>23 V 50,942<br>ванадий</td><td>24 Cr 51,996<br>хром</td><td>25 Mn 54,938<br>марганец</td><td>26 Fe 55,847<br>железо</td></tr>
                <tr><td></td><td>5</td><td>29 Cu 63,546<br>медь</td><td>30 Zn 65,37<br>цинк</td><td>31 Ga 69,72<br>галлий</td><td>32 Ge 72,59<br>германий</td><td>33 As 72,921<br>мышьяк</td><td>34 Se 78,96<br>селен</td><td>35 Br 79,904<br>бром</td><td>36 Kr 83,80<br>криптон</td></tr>
                <tr><td>V</td><td>6</td><td>37 Rb 85,47<br>рубидий</td><td>38 Sr 87,62<br>стронций</td><td>39 Y 88,905<br>иттрий</td><td>40 Zr 91,22<br>цирконий</td><td>41 Nb 92,906<br>ниобий</td><td>42 Mo 95,94<br>молибден</td><td>43 Tc [99]<br>технеций</td><td>44 Ru 101,07<br>рутений</td></tr>
                <tr><td></td><td>7</td><td>47 Ag 107,86<br>серебро</td><td>48 Cd 112,40<br>кадмий</td><td>49 In 114,82<br>индий</td><td>50 Sn 118,69<br>олово</td><td>51 Sb 121,75<br>сурьма</td><td>52 Te 127,60<br>теллур</td><td>53 I 126,90<br>иод</td><td>54 Xe 131,30<br>ксенон</td></tr>
                <tr><td>VI</td><td>8</td><td>55 Cs 132,96<br>цезий</td><td>56 Ba 137,34<br>барий</td><td>57 La 138,8*<br>лантан</td><td>72 Hf 178,49<br>гафний</td><td>73 Ta 180,94<br>тантал</td><td>74 W 183,85<br>вольфрам</td><td>75 Re 186,2<br>рений</td><td>76 Os 190,2<br>осмий</td></tr>
                <tr><td>VII</td><td>9</td><td>79 Au 196,96<br>золото</td><td>80 Hg 200,5<br>ртуть</td><td>81 Tl 204,37<br>таллий</td><td>82 Pb 207,19<br>свинец</td><td>83 Bi 208,98<br>висмут</td><td>84 Po [210]<br>полоний</td><td>85 At [210]<br>астат</td><td>86 Rn [222]<br>радон</td></tr>
                <tr><td>VIII</td><td>10</td><td>87 Fr [223]<br>франций</td><td>88 Ra [226]<br>радий</td><td>89 Ac [227]<br>актиний</td><td>104 Db [261]<br>дубний</td><td>105 Jl [262]<br>жолиотий</td><td>106 Rf [263]<br>резерфордий</td><td>107 Bh [262]<br>борий</td><td>108 Hn [265]<br>ганий</td></tr>
                </tbody>
            </table>
        </div>
        <div class="note">
            <span class="badge">лантаноиды*</span> 58 Ce 140,1 &middot; 59 Pr 140,9 &middot; 60 Nd 144,2 &middot; 61 Pm [145] &middot; 62 Sm 150,35 &middot; 63 Eu 151,96 &middot; 64 Gd 157,25 &middot; 65 Tb 158,92 &middot; 66 Dy 162,50 &middot; 67 Ho 164,93 &middot; 68 Er 167,26 &middot; 69 Tm 168,93 &middot; 70 Yb 173,04 &middot; 71 Lu 174,97
            <br><span class="badge">актиноиды**</span> 90 Th 232,3 &middot; 91 Pa [231] &middot; 92 U 238,03 &middot; 93 Np [237] &middot; 94 Pu [242] &middot; 95 Am [243] &middot; 96 Cm [247] &middot; 97 Bk [247] &middot; 98 Cf [249] &middot; 99 Es [254] &middot; 100 Fm [253] &middot; 101 Md [256] &middot; 102 No [255] &middot; 103 Lr [257]
        </div>
        <div style="display:flex;gap:40px;flex-wrap:wrap;margin-top:10px;">
            <div><b>высшие оксиды</b> R&#8322;O &middot; RO &middot; R&#8322;O&#8323; &middot; RO&#8322; &middot; R&#8322;O&#8325; &middot; RO&#8323; &middot; R&#8322;O&#8327; &middot; RO&#8323;</div>
            <div><b>летучие водородные</b> RH&#8324; &middot; RH&#8323; &middot; RH&#8322; &middot; RH</div>
        </div>
    </div>

    <div class="section-card">
        <div class="section-title"><span>2</span><h2>Плотность газов при н.у.</h2></div>
        <div class="note">p = 0,1013 МПа (760 мм рт. ст.), T = 273,15 K (0 °C).</div>
        <div class="table-responsive">
            <table class="gas-full-table">
                <thead><tr><th>Газ</th><th>Формула</th><th>г/см³</th><th>г/л</th><th>кг/м³</th></tr></thead>
                <tbody>
                <tr><td>Азот</td><td>N&#8322;</td><td>1.251&#8901;10&#8315;&#179;</td><td>1.251</td><td>1.251</td></tr>
                <tr><td>Аммиак</td><td>NH&#8323;</td><td>7,723&#8901;10&#8315;&#8308;</td><td>0.7723</td><td>0.7723</td></tr>
                <tr><td>Аргон</td><td>Ar</td><td>1,784&#8901;10&#8315;&#179;</td><td>1.784</td><td>1.784</td></tr>
                <tr><td>Ацетилен</td><td>C&#8322;H&#8322;</td><td>1,16&#8901;10&#8315;&#179;</td><td>1.16</td><td>1.16</td></tr>
                <tr><td>Бромоводород</td><td>HBr</td><td>3.664&#8901;10&#8315;&#179;</td><td>3.664</td><td>3.664</td></tr>
                <tr><td>Бутан</td><td>C&#8324;H&#8321;&#8320;</td><td>2,7&#8901;10&#8315;&#179;</td><td>2.7</td><td>2.703</td></tr>
                <tr><td>Водород</td><td>H&#8322;</td><td>8,987&#8901;10&#8315;&#8309;</td><td>0.08987</td><td>0.08987</td></tr>
                <tr><td>Гелий</td><td>He</td><td>1,785&#8901;10&#8315;&#8308;</td><td>0.1785</td><td>0.1785</td></tr>
                <tr><td>Диоксид углерода</td><td>CO&#8322;</td><td>1,9768&#8901;10&#8315;&#179;</td><td>1.9768</td><td>1.9768</td></tr>
                <tr><td>Закись азота</td><td>N&#8322;O</td><td>1,978&#8901;10&#8315;&#179;</td><td>1.978</td><td>1.978</td></tr>
                <tr><td>Изобутан</td><td>C&#8324;H&#8321;&#8320;</td><td>2,673&#8901;10&#8315;&#179;</td><td>2.673</td><td>2.673</td></tr>
                <tr><td>Иодоводород</td><td>HI</td><td>5,789&#8901;10&#8315;&#179;</td><td>5.789</td><td>5.789</td></tr>
                <tr><td>Кислород</td><td>O&#8322;</td><td>1,429&#8901;10&#8315;&#179;</td><td>1.429</td><td>1.429</td></tr>
                <tr><td>Криптон</td><td>Kr</td><td>3,74&#8901;10&#8315;&#179;</td><td>3.74</td><td>3.74</td></tr>
                <tr><td>Ксенон</td><td>Xe</td><td>5,89&#8901;10&#8315;&#179;</td><td>5.89</td><td>5.89</td></tr>
                <tr><td>Метан</td><td>CH&#8324;</td><td>7,168&#8901;10&#8315;&#8308;</td><td>0.7168</td><td>0.7168</td></tr>
                <tr><td>Монооксид углерода</td><td>CO</td><td>1,25&#8901;10&#8315;&#179;</td><td>1.25</td><td>1.25</td></tr>
                <tr><td>Неон</td><td>Ne</td><td>0,9&#8901;10&#8315;&#179;</td><td>0.9</td><td>0.9</td></tr>
                <tr><td>Озон</td><td>O&#8323;</td><td>2,14&#8901;10&#8315;&#179;</td><td>2.14</td><td>2.14</td></tr>
                <tr><td>Оксид азота(II)</td><td>NO</td><td>1,3402&#8901;10&#8315;&#179;</td><td>1.3402</td><td>1.3402</td></tr>
                <tr><td>Оксид серы(IV)</td><td>SO&#8322;</td><td>2,9263&#8901;10&#8315;&#179;</td><td>2.9263</td><td>2.9263</td></tr>
                <tr><td>Пропан</td><td>C&#8323;H&#8328;</td><td>2,0037&#8901;10&#8315;&#179;</td><td>2.0037</td><td>2.0037</td></tr>
                <tr><td>Пропилен</td><td>C&#8323;H&#8326;</td><td>1,915&#8901;10&#8315;&#179;</td><td>1.915</td><td>1.915</td></tr>
                <tr><td>Радон</td><td>Rn</td><td>9,81&#8901;10&#8315;&#179;</td><td>9.81</td><td>9.81</td></tr>
                <tr><td>Сероводород</td><td>H&#8322;S</td><td>1,5206&#8901;10&#8315;&#179;</td><td>1.5206</td><td>1.5206</td></tr>
                <tr><td>Фосфин</td><td>PH&#8323;</td><td>1,53&#8901;10&#8315;&#179;</td><td>1.53</td><td>1.53</td></tr>
                <tr><td>Фтор</td><td>F&#8322;</td><td>1,695&#8901;10&#8315;&#179;</td><td>1.695</td><td>1.695</td></tr>
                <tr><td>Хлор</td><td>Cl&#8322;</td><td>3,22&#8901;10&#8315;&#179;</td><td>3.22</td><td>3.22</td></tr>
                <tr><td>Хлороводород</td><td>HCl</td><td>1,6391&#8901;10&#8315;&#179;</td><td>1.6391</td><td>1.6391</td></tr>
                <tr><td>Этан</td><td>C&#8322;H&#8326;</td><td>1,356&#8901;10&#8315;&#179;</td><td>1.356</td><td>1.356</td></tr>
                <tr><td>Этилен</td><td>C&#8322;H&#8324;</td><td>1,26&#8901;10&#8315;&#179;</td><td>1.26</td><td>1.2605</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="section-card">
        <div class="section-title"><span>3</span><h2>Химия для ГНКТ &middot; буровые растворы</h2></div>
        <div class="chem-list">
            <div class="chem-item"><strong>Биолуб LVL&#8482;</strong> смазочная добавка, снижение трения (металл-металл) до 90% при 0,3%. Конц. 2–20 кг/м³. Плотность 0,9±0,1 г/см³.</div>
            <div class="chem-item"><strong>ASP-820</strong> понизитель гидравлического сопротивления (жидкость-металл). 3–5 л/м³, белая непрозрачная жидкость.</div>
            <div class="chem-item"><strong>FRW-400</strong> понизитель трения металл-металл (1–5 л/м³). Маслянистая тёмная жидкость.</div>
            <div class="chem-item"><strong>ОПТИТРОЛ&#174;</strong> полимерный стабилизатор, снижает фильтрацию до 220 °C, 5–30 кг/м³.</div>
            <div class="chem-item"><strong>WG-46 DSH / LDS</strong> гелеобразующие полимеры (гуар). DSH: 3–5 кг/м³ порошок; LDS: 5–8 л/м³ суспензия.</div>
            <div class="chem-item"><strong>WNE-135</strong> диэмульгатор (1–10 л/м³), прозрачная жидкость с запахом спирта.</div>
            <div class="chem-item"><strong>FA-1 / FD-1</strong> пенообразователь (1–20 л/м³) и пеногаситель (1–3 л/м³).</div>
            <div class="chem-item"><strong>CI 250 / AS-CO</strong> ингибиторы коррозии (1–10 л/м³; для кислот 1,5–2 л/м³).</div>
            <div class="chem-item"><strong>Сангид 1802</strong> ингибитор ПГП (метанолсодержащий) для растепления.</div>
            <div class="chem-item"><strong>Азот (N)</strong> 78,16% в воздухе, масса атмосферного азота 4&#183;10&#185;&#8309; т.</div>
        </div>
    </div>

    <div class="section-card">
        <div class="section-title"><span>4</span><h2>Кислоты и растворимость в воде</h2></div>
        <div class="acids-layout">
            <div class="acid-list">
                <table>
                    <thead><tr><th>Формула</th><th>Название</th><th>Анион</th></tr></thead>
                    <tbody>
                        <tr><td>HNO&#8322;</td><td>Азотистая</td><td>NO&#8322;&#8315; нитрит</td></tr>
                        <tr><td>HNO&#8323;</td><td>Азотная</td><td>NO&#8323;&#8315; нитрат</td></tr>
                        <tr><td>HBr</td><td>Бромоводородная</td><td>Br&#8315; бромид</td></tr>
                        <tr><td>H&#8322;SiO&#8323;</td><td>Кремниевая</td><td>SiO&#8323;²&#8315; силикат</td></tr>
                        <tr><td>HMnO&#8324;</td><td>Марганцовая</td><td>MnO&#8324;&#8315; перманганат</td></tr>
                        <tr><td>HCOOH</td><td>Муравьиная</td><td>HCOO&#8315; формиат</td></tr>
                        <tr><td>H&#8323;BO&#8323;</td><td>Борная</td><td>бораты</td></tr>
                        <tr><td>H&#8323;PO&#8324;</td><td>Ортофосфорная</td><td>PO&#8324;³&#8315; фосфат</td></tr>
                        <tr><td>H&#8322;S</td><td>Сероводородная</td><td>S²&#8315; сульфид</td></tr>
                        <tr><td>HF</td><td>Плавиковая</td><td>F&#8315; фторид</td></tr>
                        <tr><td>HCl</td><td>Соляная</td><td>Cl&#8315; хлорид</td></tr>
                        <tr><td>HI</td><td>Иодоводородная</td><td>I&#8315; иодид</td></tr>
                        <tr><td>H&#8322;SO&#8323;</td><td>Сернистая</td><td>SO&#8323;²&#8315; сульфит</td></tr>
                        <tr><td>H&#8322;SO&#8324;</td><td>Серная</td><td>SO&#8324;²&#8315; сульфат</td></tr>
                        <tr><td>H&#8322;CO&#8323;</td><td>Угольная</td><td>CO&#8323;²&#8315; карбонат</td></tr>
                        <tr><td>HClO&#8324;</td><td>Хлорная</td><td>ClO&#8324;&#8315; перхлорат</td></tr>
                        <tr><td>CH&#8323;COOH</td><td>Уксусная</td><td>CH&#8323;COO&#8315; ацетат</td></tr>
                        <tr><td>H&#8322;C&#8322;O&#8324;</td><td>Щавелевая</td><td>C&#8322;O&#8324;²&#8315; оксалат</td></tr>
                        <tr><td>C&#8326;H&#8328;O&#8327;</td><td>Лимонная</td><td>цитраты</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="solubility-block">
                <div class="legend">
                    <span><b>Р</b> – хорошо растворимо</span><span><b>Н</b> – нерастворимо</span><span><b>М</b> – малорастворимо</span>
                    <span><b>Г</b> – гидролиз</span><span><b>РК</b> – раств. в кислотах</span><span><b>НК</b> – не раств. в кислотах</span>
                </div>
                <div class="table-responsive">
                    <table style="font-size:0.8rem;">
                        <thead><tr><th>катион/анион</th><th>OH&#8315;</th><th>F&#8315;</th><th>Cl&#8315;</th><th>Br&#8315;</th><th>I&#8315;</th><th>S²&#8315;</th><th>NO&#8323;&#8315;</th><th>CO&#8323;²&#8315;</th><th>SiO&#8323;²&#8315;</th><th>PO&#8324;³&#8315;</th></tr></thead>
                        <tbody>
                        <tr><td>H&#8314;</td><td>—</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>—</td><td>Р</td><td>—</td><td>—</td><td>Р</td></tr>
                        <tr><td>Na&#8314;</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td></tr>
                        <tr><td>K&#8314;</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td></tr>
                        <tr><td>NH&#8324;&#8314;</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td><td>Р</td></tr>
                        <tr><td>Mg²&#8314;</td><td>Н</td><td>РК</td><td>Р</td><td>Р</td><td>Р</td><td>—</td><td>Р</td><td>Н</td><td>РК</td><td>РК</td></tr>
                        <tr><td>Ca²&#8314;</td><td>М</td><td>НК</td><td>Р</td><td>Р</td><td>Р</td><td>—</td><td>Р</td><td>Н</td><td>РК</td><td>РК</td></tr>
                        <tr><td>Ba²&#8314;</td><td>Р</td><td>РК</td><td>Р</td><td>Р</td><td>Р</td><td>—</td><td>Р</td><td>Н</td><td>НК</td><td>РК</td></tr>
                        <tr><td>Al³&#8314;</td><td>Н</td><td>М</td><td>Р</td><td>Р</td><td>Р</td><td>Г</td><td>Р</td><td>Г</td><td>НК</td><td>РК</td></tr>
                        <tr><td>Fe³&#8314;</td><td>Н</td><td>Р</td><td>Р</td><td>Р</td><td>—</td><td>—</td><td>Р</td><td>Г</td><td>Н</td><td>РК</td></tr>
                        <tr><td>Ag&#8314;</td><td>Н</td><td>Р</td><td>НК</td><td>НК</td><td>НК</td><td>НК</td><td>Р</td><td>Н</td><td>Н</td><td>Н</td></tr>
                        <tr><td>Cu²&#8314;</td><td>Н</td><td>М</td><td>Р</td><td>Р</td><td>—</td><td>Н</td><td>Р</td><td>Г</td><td>Н</td><td>Н</td></tr>
                        <tr><td>Zn²&#8314;</td><td>Н</td><td>М</td><td>Р</td><td>Р</td><td>Р</td><td>РК</td><td>Р</td><td>Н</td><td>Н</td><td>Н</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="section-card">
        <div class="section-title"><span>5</span><h2>Температура замерзания солевых растворов</h2></div>
        <div style="display:flex;gap:20px;flex-wrap:wrap;">
            <div style="flex:1;">
                <h3 style="font-weight:400;color:#1f567d;">NaCl (хлорид натрия)</h3>
                <table class="freezing-table">
                    <thead><tr><th>Плотность 15°C, г/см³</th><th>г NaCl / 100г р-ра</th><th>°C замерзания</th></tr></thead>
                    <tbody>
                    <tr><td>1.01</td><td>1.5</td><td>−0.9</td></tr>
                    <tr><td>1.03</td><td>4.3</td><td>−2.6</td></tr>
                    <tr><td>1.05</td><td>7.0</td><td>−4.4</td></tr>
                    <tr><td>1.07</td><td>9.6</td><td>−6.4</td></tr>
                    <tr><td>1.10</td><td>13.6</td><td>−9.8</td></tr>
                    <tr><td>1.12</td><td>16.2</td><td>−12.2</td></tr>
                    <tr><td>1.14</td><td>18.8</td><td>−15.1</td></tr>
                    <tr><td>1.175</td><td>23.1</td><td>−21.2 (эвтектика)</td></tr>
                    </tbody>
                </table>
            </div>
            <div style="flex:1;">
                <h3 style="font-weight:400;color:#1f567d;">CaCl&#8322; (хлорид кальция)</h3>
                <table class="freezing-table">
                    <thead><tr><th>% масс.</th><th>Плотность 15,5°C</th><th>°C кристаллизации</th></tr></thead>
                    <tbody>
                    <tr><td>5%</td><td>~1.044</td><td>−2.4</td></tr>
                    <tr><td>10%</td><td>~1.087</td><td>−5.4</td></tr>
                    <tr><td>15%</td><td>~1.133</td><td>−10.3</td></tr>
                    <tr><td>20%</td><td>~1.182</td><td>−18.0</td></tr>
                    <tr><td>25%</td><td>~1.233</td><td>−29.4</td></tr>
                    <tr><td>29,9% (эвтектика)</td><td>~1.29</td><td>−55.0</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="note" style="margin-top:15px;">
            Эвтектическая точка NaCl: 23,3% / −21,2°C; CaCl&#8322;: 29,9% / −55°C — самая низкая температура замерзания.
        </div>
    </div>
</div>
</body>
</html>"""


def handler(event: dict, context) -> dict:
    """Загружает HTML-справочник химии в S3."""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )

    key = 'calculators/chemistry-ref-v1.html'
    s3.put_object(
        Bucket='files',
        Key=key,
        Body=HTML_CONTENT.encode('utf-8'),
        ContentType='text/html; charset=utf-8'
    )

    access_key = os.environ['AWS_ACCESS_KEY_ID']
    cdn_url = f'https://cdn.poehali.dev/projects/{access_key}/bucket/{key}'

    import json
    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'status': 'uploaded', 'url': cdn_url})
    }
