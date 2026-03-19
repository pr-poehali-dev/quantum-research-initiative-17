import Icon from "@/components/ui/icon";

const tools = [
  {
    id: "СИМУЛЯТОР_V2.2",
    name: "Симулятор траектории скважины с автоконвертером",
    version: "V.2.2",
    icon: "Route",
    description: "Моделирование траектории ствола скважины с автоматическим конвертером единиц измерения.",
    url: "https://cdn.poehali.dev/projects/71bcf9c1-98c4-4154-aa8d-eaa13d80a086/bucket/calculators/simulator-v2.2.html",
  },
  {
    id: "КАЛЬКУЛЯТОР_ГНКТ",
    name: "Калькулятор ГНКТ",
    version: "Общий",
    icon: "Calculator",
    description: "Универсальный расчётный инструмент для операций с гибкими насосно-компрессорными трубами.",
    url: "https://cdn.poehali.dev/projects/71bcf9c1-98c4-4154-aa8d-eaa13d80a086/bucket/calculators/gnkt-general.html",
  },
  {
    id: "ВМЕСТИМОСТЬ_V1",
    name: "Калькулятор вместимости и массы ГНКТ (СИ)",
    version: "V.1",
    icon: "Weight",
    description: "Расчёт внутренней вместимости и массы ГНКТ в системе единиц СИ.",
    url: "https://cdn.poehali.dev/projects/71bcf9c1-98c4-4154-aa8d-eaa13d80a086/bucket/calculators/gnkt-volume-si-v1.html",
  },
  {
    id: "ВЕС_ГНКТ_V1",
    name: "Калькулятор веса ГНКТ в вертикальном стволе",
    version: "V.1",
    icon: "ArrowDownToLine",
    description: "Расчёт веса колонны ГНКТ с учётом выталкивающей силы, давления, флюидов и КНК.",
    url: "https://cdn.poehali.dev/projects/71bcf9c1-98c4-4154-aa8d-eaa13d80a086/bucket/calculators/gnkt-weight-vertical-v1.html",
  },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">ИНСТРУМЕНТЫ</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-lg leading-tight">
              Онлайн-инструменты для инженеров
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Готовые калькуляторы и симуляторы для оперативных расчётов прямо в браузере.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-mono text-muted-foreground">ИНСТРУМЕНТ</span>
                <span className="text-xs font-mono text-muted-foreground">{tool.id}</span>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6 mb-6 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Icon name={tool.icon} size={36} className="text-foreground" />
                  <span className="text-[10px] font-mono text-muted-foreground">{tool.version}</span>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
              <p className="text-sm text-muted-foreground flex-1">{tool.description}</p>

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full border border-border rounded-xl py-2.5 text-xs font-mono tracking-wider hover:bg-secondary transition-colors text-center block"
              >
                ОТКРЫТЬ
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;