import { Check, Lock, TrendingUp } from "lucide-react";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">МОДУЛИ_СИСТЕМЫ</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-lg leading-tight">
              Почему инженеры выбирают CoiledTubing.pro
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Точность инженерного расчёта встречает современные цифровые инструменты.
          </p>
        </div>

        {/* Top row features */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Допуск */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">ФУНКЦИЯ</span>
              <span className="text-xs font-mono text-muted-foreground">РАСЧЁТ_ДОПУСКА</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-muted-foreground w-20">НАГРУЗКА</span>
                  <div className="flex-1 h-2 bg-border rounded-full">
                    <div className="w-[65%] h-full bg-foreground rounded-full" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">65%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-muted-foreground w-20">ДАВЛЕНИЕ</span>
                  <div className="flex-1 h-2 bg-border rounded-full">
                    <div className="w-[48%] h-full bg-foreground rounded-full" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">48%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-muted-foreground w-20">УСТАЛОСТЬ</span>
                  <div className="flex-1 h-2 bg-border rounded-full">
                    <div className="w-[30%] h-full bg-accent-foreground/40 rounded-full" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">30%</span>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Расчёт допуска ГНКТ</h3>
            <p className="text-sm text-muted-foreground">
              Комплексная оценка по нагрузке, давлению и накопленной усталости трубы.
            </p>
          </div>

          {/* Анализ графиков */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">ФУНКЦИЯ</span>
              <span className="text-xs font-mono text-muted-foreground">ГРАФИКИ_РАБОТЫ</span>
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
                <span className="text-[10px] font-mono text-muted-foreground">ЦИКЛЫ</span>
                <span className="text-[10px] font-mono text-accent-foreground bg-accent px-2 py-0.5 rounded">АНАЛИЗ</span>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Анализ графиков работы</h3>
            <p className="text-sm text-muted-foreground">Визуализация и интерпретация данных по циклам работы ГНКТ.</p>
          </div>

          {/* Безопасность */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">ФУНКЦИЯ</span>
              <span className="text-xs font-mono text-muted-foreground">КОНТРОЛЬ_ДАННЫХ</span>
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
            <h3 className="font-semibold text-lg mb-2">Конфиденциальность данных</h3>
            <p className="text-sm text-muted-foreground">
              Все данные скважин и операций защищены. Никакой передачи третьим лицам.
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
                  <span className="text-xs font-mono text-muted-foreground">ЭФФЕКТ</span>
                </div>
                <h3 className="font-semibold text-2xl mb-1">До 40% снижение аварийности</h3>
                <p className="text-sm text-muted-foreground">
                  Точный расчёт допуска позволяет предотвратить преждевременный отказ трубы и незапланированные простои.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">ГЛУБИНА</span>
                </div>
                <h3 className="font-semibold text-2xl mb-1">Углублённый анализ</h3>
                <p className="text-sm text-muted-foreground">
                  Оставьте заявку — специалисты проведут полный инженерный анализ вашей ГНКТ с отчётом и рекомендациями.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 flex-shrink-0 flex items-center">
                <div className="text-center">
                  <Icon name="FileSearch" size={32} className="text-muted-foreground mx-auto mb-1" />
                  <span className="text-[10px] font-mono text-muted-foreground">ЭКСПЕРТИЗА</span>
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
