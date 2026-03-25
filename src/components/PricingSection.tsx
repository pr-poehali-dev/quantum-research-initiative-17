import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/context/LanguageContext";

const PricingSection = () => {
  const { t } = useLang();

  const tiers = [
    {
      name: t("КАЛЬКУЛЯТОРЫ", "CALCULATORS"),
      price: t("Бесплатно", "Free"),
      description: t(
        "Онлайн-инструменты для оперативных расчётов прямо в браузере.",
        "Online tools for quick in-browser calculations."
      ),
      features: [] as string[],
      cta: t("ОТКРЫТЬ КАЛЬКУЛЯТОРЫ", "OPEN CALCULATORS"),
      popular: false,
      to: "/tools" as const,
    },
    {
      name: t("ДОПУСК В СКВАЖИНУ", "CT RUN PERMIT"),
      price: t("По заявке", "On request"),
      priceNote: t("индивидуально", "custom"),
      description: t(
        "Углублённый инженерный анализ допуска ГНКТ для вашей скважины.",
        "In-depth engineering run permit analysis for your well."
      ),
      features: [
        t("Полный расчёт допуска ГНКТ", "Full CT run permit calculation"),
        t("Анализ усталостного ресурса трубы", "Pipe fatigue life analysis"),
        t("Оценка рисков по типу операции", "Operation-type risk assessment"),
        t("Анализ истории эксплуатации", "Service history analysis"),
        t("Письменное заключение с рекомендациями", "Written report with recommendations"),
        t("Консультация инженера-эксперта", "Expert engineer consultation"),
      ],
      cta: t("НАПИСАТЬ НА ПОЧТУ", "SEND AN EMAIL"),
      popular: true,
      to: "/contacts" as const,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">
            {t("ТАРИФЫ", "PRICING")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
            {t("Считайте бесплатно,", "Calculate for free,")}
            <br />
            {t("получайте экспертизу", "get expert analysis")}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-[#fffef0] px-3 py-1 rounded shadow-sm rotate-[-2deg] border border-amber-100">
              <span className="text-xs font-mono">{t("КАЛЬКУЛЯТОРЫ_БЕСПЛАТНО", "CALCULATORS_FREE")}</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t(
                "Калькуляторы доступны всем. Экспертиза графиков работ и расчёт допуска — по заявке.",
                "Calculators are available to everyone. Work log analysis and run permit — on request."
              )}
            </p>
            <div className="bg-[#fffef0] px-3 py-1 rounded shadow-sm rotate-[2deg] border border-amber-100">
              <span className="text-xs font-mono">{t("НАДЁЖНО", "RELIABLE")}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-card border rounded-2xl p-8 relative flex flex-col ${
                tier.popular ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap">
                  {t("ПЛАТНАЯ УСЛУГА", "PAID SERVICE")}
                </div>
              )}

              <div className="mb-6">
                <span className="text-xs font-mono text-muted-foreground">{tier.name}</span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-serif">{tier.price}</span>
                  {"priceNote" in tier && tier.priceNote && (
                    <span className="text-muted-foreground text-sm">/ {tier.priceNote}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
              </div>

              <div className="space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-accent-foreground" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={tier.to}
                className={`w-full py-3 rounded-full text-sm font-medium transition-colors mt-8 text-center block ${
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
