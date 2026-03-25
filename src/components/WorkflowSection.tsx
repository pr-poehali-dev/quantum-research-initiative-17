import { useLang } from "@/context/LanguageContext";

const WorkflowSection = () => {
  const { t } = useLang();

  const steps = [
    {
      number: "01",
      title: t("Введите параметры", "Enter Parameters"),
      description: t(
        "Укажите размер трубы, тип операции, давление и глубину скважины.",
        "Enter pipe size, operation type, pressure and well depth."
      ),
      visual: "params" as const,
    },
    {
      number: "02",
      title: t("Автоматический расчёт", "Automatic Calculation"),
      description: t(
        "Система рассчитывает допуск и коэффициенты запаса прочности.",
        "The system calculates run permit and safety factors."
      ),
      visual: "calc" as const,
    },
    {
      number: "03",
      title: t("Результат и рекомендации", "Results & Recommendations"),
      description: t(
        "Получите готовый отчёт с визуализацией и выводами по безопасности.",
        "Get a ready report with visualization and safety conclusions."
      ),
      visual: "report" as const,
    },
    {
      number: "04",
      title: t("Заявка на экспертизу", "Request Expert Review"),
      description: t(
        "Нужен углублённый анализ? Оставьте заявку — специалист свяжется с вами.",
        "Need an in-depth analysis? Submit a request — a specialist will contact you."
      ),
      visual: "request" as const,
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">
              {t("КАК ЭТО РАБОТАЕТ", "HOW IT WORKS")}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-md leading-tight">
              {t(
                "От параметров до заключения — за минуты.",
                "From parameters to conclusion — in minutes."
              )}
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            {t("Без лишних шагов. Только данные и результат.", "No extra steps. Just data and results.")}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-card border border-border rounded-2xl p-6 h-full">
                {/* Visual placeholder */}
                <div className="aspect-square bg-secondary/50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  {step.visual === "params" && (
                    <div className="bg-[#fffef0] p-4 rounded shadow-sm rotate-[-2deg] border border-amber-100 w-4/5">
                      <p className="text-xs font-mono text-muted-foreground">{t("ПАРАМЕТРЫ", "PARAMETERS")}</p>
                      <p className="text-xs font-mono mt-2 text-foreground/70">OD: 2⅞"</p>
                      <p className="text-xs font-mono text-foreground/70">TS-90</p>
                      <p className="text-xs font-mono text-foreground/70">P: 680 {t("МПа", "MPa")}</p>
                    </div>
                  )}
                  {step.visual === "calc" && (
                    <div className="space-y-2 w-full px-4">
                      <div className="h-2 bg-border rounded w-3/4" />
                      <div className="h-2 bg-border rounded w-full" />
                      <div className="h-2 bg-border rounded w-2/3" />
                      <div className="flex gap-1 mt-4">
                        <div className="w-3 h-3 rounded-full bg-accent" />
                        <div className="flex-1 h-3 bg-border rounded" />
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-2 bg-green-200 rounded-full">
                          <div className="w-3/5 h-full bg-green-500 rounded-full" />
                        </div>
                        <span className="text-[9px] font-mono text-muted-foreground">60%</span>
                      </div>
                    </div>
                  )}
                  {step.visual === "report" && (
                    <div className="bg-card border border-border rounded-lg p-3 shadow-sm w-4/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-muted-foreground">{t("ОТЧЁТ", "REPORT")}</span>
                        <span className="text-[10px] font-mono text-green-600">{t("ГОТОВ", "READY")}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1.5 bg-border rounded w-full" />
                        <div className="h-1.5 bg-border rounded w-4/5" />
                        <div className="h-1.5 bg-green-200 rounded w-3/4" />
                      </div>
                    </div>
                  )}
                  {step.visual === "request" && (
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 bg-accent/50 rounded-full px-4 py-2">
                        <span className="text-xs font-mono">{t("ОТПРАВИТЬ ЗАЯВКУ", "SUBMIT REQUEST")}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">{step.number}</span>
                </div>
                <h3 className="font-medium text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
