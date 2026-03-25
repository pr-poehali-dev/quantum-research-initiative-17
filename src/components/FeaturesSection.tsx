import { Check, Lock, TrendingUp } from "lucide-react";
import Icon from "@/components/ui/icon";
import { useLang } from "@/context/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLang();

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">
              {t("МОДУЛИ_СИСТЕМЫ", "SYSTEM_MODULES")}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-lg leading-tight">
              {t(
                "Почему инженеры выбирают CoiledTubing.pro",
                "Why engineers choose CoiledTubing.pro"
              )}
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            {t(
              "Точность инженерного расчёта встречает современные цифровые инструменты.",
              "Engineering calculation accuracy meets modern digital tools."
            )}
          </p>
        </div>

        {/* Top row features */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Допуск */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">{t("ФУНКЦИЯ", "FEATURE")}</span>
              <span className="text-xs font-mono text-muted-foreground">{t("РАСЧЁТ_ДОПУСКА", "RUN_PERMIT")}</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-muted-foreground w-20">{t("НАГРУЗКА", "LOAD")}</span>
                  <div className="flex-1 h-2 bg-border rounded-full">
                    <div className="w-[65%] h-full bg-foreground rounded-full" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">65%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-muted-foreground w-20">{t("ДАВЛЕНИЕ", "PRESSURE")}</span>
                  <div className="flex-1 h-2 bg-border rounded-full">
                    <div className="w-[48%] h-full bg-foreground rounded-full" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">48%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-muted-foreground w-20">{t("УСТАЛОСТЬ", "FATIGUE")}</span>
                  <div className="flex-1 h-2 bg-border rounded-full">
                    <div className="w-[30%] h-full bg-accent-foreground/40 rounded-full" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">30%</span>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">{t("Расчёт допуска ГНКТ", "CT Run Permit Calculation")}</h3>
            <p className="text-sm text-muted-foreground">
              {t(
                "Комплексная оценка по нагрузке, давлению и накопленной усталости трубы.",
                "Comprehensive assessment of load, pressure and accumulated pipe fatigue."
              )}
            </p>
          </div>

          {/* Анализ графиков */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">{t("ФУНКЦИЯ", "FEATURE")}</span>
              <span className="text-xs font-mono text-muted-foreground">{t("ГРАФИКИ_РАБОТЫ", "WORK_LOGS")}</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6">
              <div className="flex items-end gap-1 h-16">
                {[40, 65, 50, 80, 55, 90, 70, 85, 60, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-foreground/20"
                    style={{ height: `${h}%` }}
                  >
                    {i === 6 && (
                      <div className="w-full h-full rounded-sm bg-foreground/60" />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] font-mono text-muted-foreground">{t("ЦИКЛЫ", "CYCLES")}</span>
                <span className="text-[10px] font-mono text-accent-foreground bg-accent px-2 py-0.5 rounded">{t("АНАЛИЗ", "ANALYSIS")}</span>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">{t("Анализ графиков работы", "Work Log Analysis")}</h3>
            <p className="text-sm text-muted-foreground">
              {t(
                "Визуализация и интерпретация данных по циклам работы ГНКТ.",
                "Visualization and interpretation of CT work cycle data."
              )}
            </p>
          </div>

          {/* Безопасность */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">{t("ФУНКЦИЯ", "FEATURE")}</span>
              <span className="text-xs font-mono text-muted-foreground">{t("КОНТРОЛЬ_ДАННЫХ", "DATA_CONTROL")}</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-accent flex items-center justify-center">
                  <Lock className="w-6 h-6 text-foreground" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">{t("Конфиденциальность данных", "Data Confidentiality")}</h3>
            <p className="text-sm text-muted-foreground">
              {t(
                "Все данные скважин и операций защищены. Никакой передачи третьим лицам.",
                "All well and operation data is protected. No third-party sharing."
              )}
            </p>
          </div>
        </div>

        {/* Bottom row features */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex gap-6">
              <div className="bg-secondary/50 rounded-xl p-4 flex-shrink-0">
                <div className="relative w-20 h-20 rounded-full border-4 border-accent flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">{t("ЭФФЕКТ", "EFFECT")}</span>
                </div>
                <h3 className="font-semibold text-2xl mb-1">
                  {t("До 40% снижение аварийности", "Up to 40% failure reduction")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Точный расчёт допуска позволяет предотвратить преждевременный отказ трубы и незапланированные простои.",
                    "Accurate run permit calculation helps prevent premature pipe failure and unplanned downtime."
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">{t("ГЛУБИНА", "DEPTH")}</span>
                </div>
                <h3 className="font-semibold text-2xl mb-1">{t("Углублённый анализ", "In-depth Analysis")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Оставьте заявку — специалисты проведут полный инженерный анализ вашей ГНКТ с отчётом и рекомендациями.",
                    "Submit a request — our specialists will perform a full engineering analysis of your CT string with a report and recommendations."
                  )}
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 flex-shrink-0 flex items-center">
                <div className="text-center">
                  <Icon name="FileSearch" size={32} className="text-muted-foreground mx-auto mb-1" />
                  <span className="text-[10px] font-mono text-muted-foreground">{t("ЭКСПЕРТИЗА", "EXPERTISE")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
