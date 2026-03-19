import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
              <span>ГНКТ РАСЧЁТНАЯ ПЛАТФОРМА V1.0</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-balance">
              Расчёты ГНКТ,
              <br />
              которым можно доверять.
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">
              Профессиональные инструменты для расчёта допуска, анализа графиков и оценки работы гибких насосно-компрессорных труб.
            </p>

            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              Открыть инструменты
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative bg-secondary/50 rounded-3xl p-8 border border-border/50">
              {/* Top labels */}
              <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-4">
                <span>№01 — РАСЧЁТНЫЙ_МОДУЛЬ</span>
                <span>ЗАЩИЩЁННОЕ_СОЕДИНЕНИЕ</span>
              </div>

              {/* Sticky note */}
              <div className="absolute -left-4 top-20 bg-[#fffef0] p-3 rounded shadow-sm rotate-[-3deg] border border-amber-100 w-40">
                <p className="text-xs font-mono text-foreground/80">ПАРАМЕТРЫ</p>
                <p className="text-sm font-serif italic mt-1">«OD: 2⅞", Грейд TS-90»</p>
              </div>

              {/* Calculator mockup */}
              <div className="bg-[#2d3e4a] rounded-2xl p-6 my-6 mx-auto max-w-sm">
                <div className="flex justify-between text-[8px] text-white/70 font-mono mb-2 px-2">
                  <span>РАСЧЁТ ДОПУСКА ГНКТ</span>
                  <span>ДАТА_АНАЛИЗА</span>
                </div>
                <div className="text-[10px] text-white/80 font-mono mb-4 px-2">
                  <p>Объект: Скважина №247</p>
                  <p>Тип операции: КВО / промывка</p>
                </div>
                <div className="bg-[#1e2e38] rounded-xl p-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[9px] text-white/60 font-mono">
                      <span>Давление на устье</span>
                      <span className="text-green-400">12.4 МПа</span>
                    </div>
                    <div className="flex justify-between text-[9px] text-white/60 font-mono">
                      <span>Нагрузка на трубу</span>
                      <span className="text-green-400">68 кН</span>
                    </div>
                    <div className="flex justify-between text-[9px] text-white/60 font-mono">
                      <span>Коэффициент запаса</span>
                      <span className="text-yellow-400">1.42</span>
                    </div>
                    <div className="mt-2 h-1.5 bg-[#2d3e4a] rounded-full">
                      <div className="h-full w-3/5 bg-green-500 rounded-full" />
                    </div>
                    <div className="text-[9px] text-white/40 font-mono text-right">ДОПУСК: 60%</div>
                  </div>
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="absolute -right-2 top-32 space-y-2">
                <div className="bg-card border border-border rounded-xl p-3 shadow-sm max-w-[180px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-secondary rounded-full" />
                    <span className="text-xs font-medium">Инженер</span>
                    <span className="text-[10px] text-muted-foreground">КИП</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Расчёт готов,</p>
                </div>

                <div className="bg-card border border-border rounded-xl p-3 shadow-sm max-w-[200px]">
                  <p className="text-xs text-muted-foreground">
                    допуск подтверждён. Можно приступать к операции на скважине...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;