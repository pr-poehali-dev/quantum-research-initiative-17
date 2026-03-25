import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useLang } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tools = [
  {
    id: "SIM_V2.2",
    idRu: "СИМУЛЯТОР_V2.2",
    nameRu: "Симулятор траектории скважины с автоконвертером",
    nameEn: "Wellbore Trajectory Simulator with Auto-Converter",
    version: "V.2.2",
    icon: "Route",
    descRu: "Моделирование траектории ствола скважины с автоматическим конвертером единиц измерения.",
    descEn: "Wellbore trajectory modeling with automatic unit conversion.",
    tagRu: "Траектория",
    tagEn: "Trajectory",
    url: "https://cdn.poehali.dev/projects/71bcf9c1-98c4-4154-aa8d-eaa13d80a086/bucket/calculators/simulator-v2.2.html",
  },
  {
    id: "CT_CALC",
    idRu: "КАЛЬКУЛЯТОР_ГНКТ",
    nameRu: "Калькулятор ГНКТ",
    nameEn: "CT Calculator",
    version: "General",
    icon: "Calculator",
    descRu: "Универсальный расчётный инструмент для операций с гибкими насосно-компрессорными трубами.",
    descEn: "Universal calculation tool for coiled tubing operations.",
    tagRu: "Общий",
    tagEn: "General",
    url: "https://cdn.poehali.dev/projects/71bcf9c1-98c4-4154-aa8d-eaa13d80a086/bucket/calculators/gnkt-general.html",
  },
  {
    id: "VOL_V1",
    idRu: "ВМЕСТИМОСТЬ_V1",
    nameRu: "Калькулятор вместимости и массы ГНКТ (СИ)",
    nameEn: "CT Volume & Mass Calculator (SI)",
    version: "V.1",
    icon: "Weight",
    descRu: "Расчёт внутренней вместимости и массы ГНКТ в системе единиц СИ.",
    descEn: "Calculation of CT internal volume and mass in SI units.",
    tagRu: "Вместимость",
    tagEn: "Volume",
    url: "https://cdn.poehali.dev/projects/71bcf9c1-98c4-4154-aa8d-eaa13d80a086/bucket/calculators/gnkt-volume-si-v1.html",
  },
  {
    id: "WT_V1",
    idRu: "ВЕС_ГНКТ_V1",
    nameRu: "Калькулятор веса ГНКТ в вертикальном стволе",
    nameEn: "CT Weight in Vertical Wellbore Calculator",
    version: "V.1",
    icon: "ArrowDownToLine",
    descRu: "Расчёт веса колонны ГНКТ с учётом выталкивающей силы, давления, флюидов и КНК.",
    descEn: "CT string weight calculation with buoyancy, pressure, fluids and BHA.",
    tagRu: "Вес",
    tagEn: "Weight",
    url: "https://cdn.poehali.dev/projects/71bcf9c1-98c4-4154-aa8d-eaa13d80a086/bucket/calculators/gnkt-weight-vertical-v1.html",
  },
  {
    id: "HPJ_V1",
    idRu: "ГПП_V1",
    nameRu: "Гидропескоструйная перфорация на ГНКТ",
    nameEn: "Hydro-Jet Perforation on CT",
    version: "V.1",
    icon: "Zap",
    descRu: "Расчёт проппанта и геля по станциям, шага перфорации, объёма ГТ с выгрузкой PDF-отчёта.",
    descEn: "Proppant and gel calculation by stage, perforation spacing, CT volume with PDF export.",
    tagRu: "Перфорация",
    tagEn: "Perforation",
    url: "https://cdn.poehali.dev/projects/71bcf9c1-98c4-4154-aa8d-eaa13d80a086/bucket/calculators/gnkt-gpp-v1.html",
  },
  {
    id: "CHEM_V1",
    idRu: "ХИМИЯ_V1",
    nameRu: "Химия · справочные таблицы",
    nameEn: "Chemistry · Reference Tables",
    version: "V.1",
    icon: "FlaskConical",
    descRu: "Таблица Менделеева, плотность газов, химия ГНКТ, кислоты, растворимость, солевые растворы.",
    descEn: "Periodic table, gas density, CT chemistry, acids, solubility, brine solutions.",
    tagRu: "Справочник",
    tagEn: "Reference",
    url: "https://cdn.poehali.dev/projects/71bcf9c1-98c4-4154-aa8d-eaa13d80a086/bucket/calculators/chemistry-ref-v1.html",
  },
];

const Tools = () => {
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <Icon name="ArrowLeft" size={14} />
            {t("На главную", "Back to home")}
          </Link>

          {/* Header */}
          <div className="mb-14">
            <span className="text-xs font-mono text-muted-foreground tracking-wider">
              {t("ИНСТРУМЕНТЫ", "TOOLS")}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">
              {t("Онлайн-инструменты для инженеров", "Online Tools for Engineers")}
            </h1>
            <p className="text-muted-foreground text-sm mt-4 max-w-lg">
              {t(
                "Готовые калькуляторы и симуляторы для оперативных расчётов прямо в браузере.",
                "Ready-to-use calculators and simulators for quick in-browser engineering calculations."
              )}
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-mono text-muted-foreground">
                    {t("ИНСТРУМЕНТ", "TOOL")}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {lang === "ru" ? tool.idRu : tool.id}
                  </span>
                </div>

                <div className="bg-secondary/50 rounded-xl p-6 mb-6 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <Icon name={tool.icon} size={36} className="text-foreground" />
                    <span className="text-[10px] font-mono text-muted-foreground">{tool.version}</span>
                  </div>
                </div>

                <div className="mb-2 flex items-center gap-2">
                  <span className="text-[10px] font-mono bg-secondary text-muted-foreground px-2 py-0.5 rounded-full">
                    {lang === "ru" ? tool.tagRu : tool.tagEn}
                  </span>
                </div>

                <h3 className="font-semibold text-base mb-2 leading-snug">
                  {lang === "ru" ? tool.nameRu : tool.nameEn}
                </h3>
                <p className="text-sm text-muted-foreground flex-1">
                  {lang === "ru" ? tool.descRu : tool.descEn}
                </p>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full border border-border rounded-xl py-2.5 text-xs font-mono tracking-wider hover:bg-secondary transition-colors text-center block"
                >
                  {t("ОТКРЫТЬ", "OPEN")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tools;
