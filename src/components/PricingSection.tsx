import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "КАЛЬКУЛЯТОРЫ",
    price: "Бесплатно",
    description: "Онлайн-инструменты для оперативных расчётов прямо в браузере.",
    features: [],
    cta: "ОТКРЫТЬ КАЛЬКУЛЯТОРЫ",
  },
  {
    name: "ДОПУСК В СКВАЖИНУ",
    price: "По заявке",
    priceNote: "индивидуально",
    description: "Углублённый инженерный анализ допуска ГНКТ для вашей скважины.",
    features: [
      "Полный расчёт допуска ГНКТ",
      "Анализ усталостного ресурса трубы",
      "Оценка рисков по типу операции",
      "Анализ истории эксплуатации",
      "Письменное заключение с рекомендациями",
      "Консультация инженера-эксперта",
    ],
    cta: "ОСТАВИТЬ ЗАЯВКУ",
    popular: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">ТАРИФЫ</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
            Считайте бесплатно,
            <br />
            получайте экспертизу
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-[#fffef0] px-3 py-1 rounded shadow-sm rotate-[-2deg] border border-amber-100">
              <span className="text-xs font-mono">КАЛЬКУЛЯТОРЫ_БЕСПЛАТНО</span>
            </div>
            <p className="text-muted-foreground text-sm">Калькуляторы доступны всем. Экспертиза графиков работ и расчёт допуска — по заявке.</p>
            <div className="bg-[#fffef0] px-3 py-1 rounded shadow-sm rotate-[2deg] border border-amber-100">
              <span className="text-xs font-mono">НАДЁЖНО</span>
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
                  ПЛАТНАЯ УСЛУГА
                </div>
              )}

              <div className="mb-6">
                <span className="text-xs font-mono text-muted-foreground">{tier.name}</span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-serif">{tier.price}</span>
                  {tier.priceNote && (
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

              <button
                className={`w-full py-3 rounded-full text-sm font-medium transition-colors mt-8 ${
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;