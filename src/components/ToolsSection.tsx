import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useLang } from "@/context/LanguageContext";

const tools = [
  {
    id: "СИМУЛЯТОР_V2.2",
    idEn: "SIM_V2.2",
    nameRu: "Симулятор траектории скважины с автоконвертером",
    nameEn: "Wellbore Trajectory Simulator with Auto-Converter",
    version: "V.2.2",
    icon: "Route",
    descRu: "Моделирование траектории ствола скважины с автоматическим конвертером единиц измерения.",
    descEn: "Wellbore trajectory modeling with automatic unit conversion.",
  },
  {
    id: "КАЛЬКУЛЯТОР_ГНКТ",
    idEn: "CT_CALC",
    nameRu: "Калькулятор ГНКТ",
    nameEn: "CT Calculator",
    version: "General",
    icon: "Calculator",
    descRu: "Универсальный расчётный инструмент для операций с гибкими насосно-компрессорными трубами.",
    descEn: "Universal calculation tool for coiled tubing operations.",
  },
  {
    id: "ВМЕСТИМОСТЬ_V1",
    idEn: "VOL_V1",
    nameRu: "Калькулятор вместимости и массы ГНКТ (СИ)",
    nameEn: "CT Volume & Mass Calculator (SI)",
    version: "V.1",
    icon: "Weight",
    descRu: "Расчёт внутренней вместимости и массы ГНКТ в системе единиц СИ.",
    descEn: "Calculation of CT internal volume and mass in SI units.",
  },
  {
    id: "ВЕС_ГНКТ_V1",
    idEn: "WT_V1",
    nameRu: "Калькулятор веса ГНКТ в вертикальном стволе",
    nameEn: "CT Weight in Vertical Wellbore Calculator",
    version: "V.1",
    icon: "ArrowDownToLine",
    descRu: "Расчёт веса колонны ГНКТ с учётом выталкивающей силы, давления, флюидов и КНК.",
    descEn: "CT string weight calculation with buoyancy, pressure, fluids and BHA.",
  },
  {
    id: "ГПП_V1",
    idEn: "HPJ_V1",
    nameRu: "Гидропескоструйная перфорация на ГНКТ",
    nameEn: "Hydro-Jet Perforation on CT",
    version: "V.1",
    icon: "Zap",
    descRu: "Расчёт проппанта и геля по станциям, шага перфорации, объёма ГТ с выгрузкой PDF-отчёта.",
    descEn: "Proppant and gel calculation by stage, perforation spacing, CT volume with PDF export.",
  },
  {
    id: "ХИМИЯ_V1",
    idEn: "CHEM_V1",
    nameRu: "Химия · справочные таблицы",
    nameEn: "Chemistry · Reference Tables",
    version: "V.1",
    icon: "FlaskConical",
    descRu: "Таблица Менделеева, плотность газов, химия ГНКТ, кислоты, растворимость, солевые растворы.",
    descEn: "Periodic table, gas density, CT chemistry, acids, solubility, brine solutions.",
  },
];

const ToolsSection = () => {
  const { lang, t } = useLang();

  return (
    <section id="tools" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">
              {t("ИНСТРУМЕНТЫ", "TOOLS")}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-lg leading-tight">
              {t("Онлайн-инструменты для инженеров", "Online Tools for Engineers")}
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            {t(
              "Готовые калькуляторы и симуляторы для оперативных расчётов прямо в браузере.",
              "Ready-to-use calculators and simulators for quick in-browser engineering calculations."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-mono text-muted-foreground">
                  {t("ИНСТРУМЕНТ", "TOOL")}
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  {lang === "ru" ? tool.id : tool.idEn}
                </span>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6 mb-6 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Icon name={tool.icon} size={36} className="text-foreground" />
                  <span className="text-[10px] font-mono text-muted-foreground">{tool.version}</span>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {lang === "ru" ? tool.nameRu : tool.nameEn}
              </h3>
              <p className="text-sm text-muted-foreground flex-1">
                {lang === "ru" ? tool.descRu : tool.descEn}
              </p>

              <Link
                to="/tools"
                className="mt-6 w-full border border-border rounded-xl py-2.5 text-xs font-mono tracking-wider hover:bg-secondary transition-colors text-center block"
              >
                {t("ОТКРЫТЬ", "OPEN")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
