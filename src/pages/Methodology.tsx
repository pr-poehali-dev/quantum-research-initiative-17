import { Link } from "react-router-dom";
import { useLang } from "@/context/LanguageContext";

const Methodology = () => {
  const { lang, setLang, t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-4">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <div className="w-5 h-5 border-2 border-foreground rounded-sm flex items-center justify-center">
              <span className="text-[10px] font-mono">CT</span>
            </div>
            <span className="font-serif">CoiledTubing.pro</span>
          </Link>
          <button
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
            className="text-xs font-mono border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            {lang === "ru" ? "EN" : "RU"}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl mb-2">{t("Методология расчётов", "Calculation Methodology")}</h1>
        <p className="text-muted-foreground text-sm mb-12">
          {t("Используемые источники и допущения", "Sources and assumptions used")}
        </p>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("1. Общие положения", "1. General Provisions")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              {t(
                "Все алгоритмы, формулы и методики расчета, реализованные в онлайн-инструментах сайта CoiledTubing.pro, основаны на общедоступных научно-технических источниках, отраслевых стандартах и классических учебных пособиях по механике сплошных сред и нефтегазовому делу.",
                "All algorithms, formulas and calculation methods implemented in CoiledTubing.pro online tools are based on publicly available scientific and technical sources, industry standards and classic textbooks on continuum mechanics and petroleum engineering."
              )}
            </p>
            <p>
              {t(
                "Мы не используем проприетарные алгоритмы коммерческого программного обеспечения и не претендуем на полное воспроизведение специализированного ПО для моделирования операций с ГНКТ.",
                "We do not use proprietary algorithms from commercial software and do not claim to fully replicate specialized CT operation simulation software."
              )}
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-6">{t("2. Источники методологии", "2. Methodology Sources")}</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-medium mb-3">
                {t("2.1. Отраслевые стандарты и рекомендации (API, ISO)", "2.1. Industry Standards and Recommendations (API, ISO)")}
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "API RP 5C7",
                    desc: t(
                      "Рекомендуемая практика для эксплуатации гибких насосно-компрессорных труб (Coiled Tubing Operations — Recommended Practices). Описывает общепринятые подходы к расчету допускаемых нагрузок, усталости и циклических нагружений.",
                      "Recommended Practice for Coiled Tubing Operations. Describes accepted approaches to calculating allowable loads, fatigue and cyclic loading."
                    ),
                  },
                  {
                    title: "API Specification 5ST",
                    desc: t(
                      "Спецификация на гибкие насосно-компрессорные трубы. Используется для справочных данных по геометрии труб (наружный диаметр, толщина стенки, масса) и механическим свойствам материалов.",
                      "Specification for Coiled Tubing. Used for reference data on pipe geometry (OD, wall thickness, weight) and mechanical properties."
                    ),
                  },
                  {
                    title: "ISO 13628",
                    desc: t(
                      "Стандарты для систем подводной добычи и подводного оборудования, включая аспекты, связанные с ГНКТ.",
                      "Standards for subsea production systems and equipment, including CT-related aspects."
                    ),
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
              <h3 className="font-medium mb-3">
                {t("2.2. Научная и учебно-техническая литература", "2.2. Scientific and Technical Literature")}
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "World Oil's Coiled Tubing Handbook",
                    desc: t(
                      "Фундаментальное руководство, содержащее основные уравнения для расчета сил трения, давлений и напряжений в колонне ГНКТ.",
                      "A fundamental guide containing the key equations for calculating friction forces, pressures and stresses in a CT string."
                    ),
                  },
                  {
                    title: "«Coiled Tubing and Other Stimulation Techniques» (M.J. Economides)",
                    desc: t(
                      "Учебное пособие, широко используемое в университетах, содержащее главы по механике ГНКТ и моделированию.",
                      "A widely used university textbook containing chapters on CT mechanics and modeling."
                    ),
                  },
                  {
                    title: "SPE Publications",
                    desc: t(
                      "Технические статьи, посвящённые вопросам усталости труб ГНКТ, симуляции траекторий и предельных нагрузок (SPE 46058, SPE 54473 и др.).",
                      "Technical papers on CT pipe fatigue, trajectory simulation and limit loads (SPE 46058, SPE 54473, etc.)."
                    ),
                  },
                  {
                    title: t(
                      "Курсы сопротивления материалов и механики деформируемого твёрдого тела",
                      "Strength of Materials and Solid Mechanics courses"
                    ),
                    desc: t(
                      "Используются для базовых расчетов напряжений, моментов и коэффициентов запаса прочности.",
                      "Used for basic stress, moment and safety factor calculations."
                    ),
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
              <h3 className="font-medium mb-3">
                {t("2.3. Общеинженерные справочники", "2.3. General Engineering References")}
              </h3>
              <p className="text-muted-foreground text-sm border-l-2 border-border pl-4">
                {t(
                  "Справочные данные по плотности технологических жидкостей, коэффициентам трения стали о породу/обсадную колонну и другие физические константы взяты из открытых инженерных справочников (Perry's Chemical Engineers' Handbook).",
                  "Reference data on process fluid density, steel-to-rock/casing friction coefficients and other physical constants are taken from open engineering references (Perry's Chemical Engineers' Handbook)."
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("3. Ограничения и допущения", "3. Limitations and Assumptions")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              {t(
                "3.1. Все расчеты являются оценочными и основаны на упрощённых моделях, принятых в академической и отраслевой литературе.",
                "3.1. All calculations are estimations based on simplified models accepted in academic and industry literature."
              )}
            </p>
            <p>
              {t(
                "3.2. Калькуляторы не учитывают специфические геологические отклонения, локальные дефекты трубы, историю предыдущих нагружений, влияние коррозионной среды и ряд других факторов, которые могут быть учтены только в полномасштабном инженерном симуляторе или при физическом обследовании оборудования.",
                "3.2. Calculators do not account for specific geological deviations, local pipe defects, prior loading history, corrosive environment effects and other factors that can only be considered in a full-scale engineering simulator or during physical equipment inspection."
              )}
            </p>
            <p>
              {t(
                "3.3. Расчет усталости (если применимо) базируется на моделях линейного накопления повреждений (правило Пальмгрена-Майнера) — стандартное допущение для предварительной оценки.",
                "3.3. Fatigue calculation (where applicable) is based on linear damage accumulation models (Palmgren-Miner rule) — a standard assumption for preliminary assessment."
              )}
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("4. Отказ от ответственности", "4. Disclaimer")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              {t(
                "4.1. Инструменты CoiledTubing.pro предназначены исключительно для предварительной оценки и образовательных целей. Они не заменяют профессиональный инженерный анализ, выполненный с использованием сертифицированного коммерческого ПО и с учётом всей полноты исходных данных.",
                "4.1. CoiledTubing.pro tools are intended solely for preliminary assessment and educational purposes. They do not replace professional engineering analysis performed using certified commercial software and with complete input data."
              )}
            </p>
            <p>
              {t(
                "4.2. Администрация сайта не несёт ответственности за любой ущерб, возникший в результате использования результатов расчётов. Окончательное решение о допуске оборудования и проведении работ принимается квалифицированным специалистом на месте проведения работ.",
                "4.2. The site administration is not liable for any damage resulting from the use of calculation results. The final decision on equipment run permit and operations is made by a qualified specialist on site."
              )}
            </p>
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
