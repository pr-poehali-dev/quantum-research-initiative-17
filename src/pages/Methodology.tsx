import { Link } from "react-router-dom";

const Methodology = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-4">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <div className="w-5 h-5 border-2 border-foreground rounded-sm flex items-center justify-center">
              <span className="text-[10px] font-mono">CT</span>
            </div>
            <span className="font-serif">CoiledTubing.pro</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl mb-2">Методология расчётов</h1>
        <p className="text-muted-foreground text-sm mb-12">Используемые источники и допущения</p>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">1. Общие положения</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>Все алгоритмы, формулы и методики расчета, реализованные в онлайн-инструментах сайта CoiledTubing.pro, основаны на общедоступных научно-технических источниках, отраслевых стандартах и классических учебных пособиях по механике сплошных сред и нефтегазовому делу.</p>
            <p>Мы не используем проприетарные алгоритмы коммерческого программного обеспечения и не претендуем на полное воспроизведение специализированного ПО для моделирования операций с ГНКТ.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-6">2. Источники методологии</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-medium mb-3">2.1. Отраслевые стандарты и рекомендации (API, ISO)</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "API RP 5C7",
                    desc: "Рекомендуемая практика для эксплуатации гибких насосно-компрессорных труб (Coiled Tubing Operations — Recommended Practices). Описывает общепринятые подходы к расчету допускаемых нагрузок, усталости и циклических нагружений.",
                  },
                  {
                    title: "API Specification 5ST",
                    desc: "Спецификация на гибкие насосно-компрессорные трубы. Используется для справочных данных по геометрии труб (наружный диаметр, толщина стенки, масса) и механическим свойствам материалов.",
                  },
                  {
                    title: "ISO 13628 (серия)",
                    desc: "Стандарты для систем подводной добычи и подводного оборудования, включая аспекты, связанные с ГНКТ.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-border pl-4">
                    <p className="text-sm font-medium mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">2.2. Научная и учебно-техническая литература</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "World Oil's Coiled Tubing Handbook",
                    desc: "Фундаментальное руководство, содержащее основные уравнения для расчета сил трения, давлений и напряжений в колонне ГНКТ.",
                  },
                  {
                    title: "«Coiled Tubing and Other Stimulation Techniques» (под ред. M.J. Economides)",
                    desc: "Учебное пособие, широко используемое в университетах, содержащее главы по механике ГНКТ и моделированию.",
                  },
                  {
                    title: "Публикации SPE (Society of Petroleum Engineers)",
                    desc: "Технические статьи, посвящённые вопросам усталости труб ГНКТ, симуляции траекторий и предельных нагрузок (SPE 46058, SPE 54473 и др.).",
                  },
                  {
                    title: "Курсы сопротивления материалов и механики деформируемого твёрдого тела",
                    desc: "Используются для базовых расчетов напряжений, моментов и коэффициентов запаса прочности.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-border pl-4">
                    <p className="text-sm font-medium mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">2.3. Общеинженерные справочники</h3>
              <p className="text-muted-foreground text-sm border-l-2 border-border pl-4">
                Справочные данные по плотности технологических жидкостей, коэффициентам трения стали о породу/обсадную колонну и другие физические константы взяты из открытых инженерных справочников (Perry's Chemical Engineers' Handbook).
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">3. Ограничения и допущения</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>3.1. Все расчеты являются оценочными и основаны на упрощённых моделях, принятых в академической и отраслевой литературе.</p>
            <p>3.2. Калькуляторы не учитывают специфические геологические отклонения, локальные дефекты трубы, историю предыдущих нагружений, влияние коррозионной среды и ряд других факторов, которые могут быть учтены только в полномасштабном инженерном симуляторе или при физическом обследовании оборудования.</p>
            <p>3.3. Расчет усталости (если применимо) базируется на моделях линейного накопления повреждений (правило Пальмгрена-Майнера) — стандартное допущение для предварительной оценки.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">4. Отказ от ответственности</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>4.1. Инструменты CoiledTubing.pro предназначены исключительно для предварительной оценки и образовательных целей. Они не заменяют профессиональный инженерный анализ, выполненный с использованием сертифицированного коммерческого ПО и с учётом всей полноты исходных данных.</p>
            <p>4.2. Администрация сайта не несёт ответственности за любой ущерб, возникший в результате использования результатов расчётов. Окончательное решение о допуске оборудования и проведении работ принимается квалифицированным специалистом на месте проведения работ.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6 mt-4">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs text-muted-foreground">2026 COILEDTUBING.PRO</p>
        </div>
      </footer>
    </div>
  );
};

export default Methodology;
