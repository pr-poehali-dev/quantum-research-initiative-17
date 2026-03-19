import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-4">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <div className="w-5 h-5 border-2 border-foreground rounded-sm flex items-center justify-center">
              <span className="text-[10px] font-mono">CT</span>
            </div>
            <span className="font-serif">CoiledTubing.pro</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <p className="text-xs font-mono text-muted-foreground mb-3">О ПЛАТФОРМЕ</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
            CoiledTubing.pro
          </h1>
          <p className="text-xl text-muted-foreground">
            Инженерные расчёты ГНКТ, которым можно доверять
          </p>
        </div>

        {/* Миссия */}
        <section className="mb-16 border-l-2 border-primary pl-6">
          <h2 className="font-serif text-2xl mb-4">Наша миссия</h2>
          <p className="text-muted-foreground mb-4">
            Сделать профессиональные инженерные расчёты для операций с гибкими насосно-компрессорными трубами доступными каждому специалисту — быстро, точно и без лишних сложностей.
          </p>
          <p className="text-muted-foreground">
            Мы создаём инструменты, которые помогают инженерам-технологам и буровикам принимать взвешенные решения, снижать риски аварийности и повышать эффективность работ на скважинах.
          </p>
        </section>

        {/* Что такое платформа */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-4">Что такое CoiledTubing.pro?</h2>
          <p className="text-muted-foreground mb-6">
            CoiledTubing.pro — это специализированная расчётная платформа, разработанная инженерами-практиками для коллег по цеху. Мы объединили в одном месте ключевые инструменты, необходимые для планирования и контроля операций с ГНКТ.
          </p>
          <div className="grid gap-4">
            {[
              { icon: "Calculator", text: "Модули экспресс-расчётов для быстрой оценки параметров" },
              { icon: "BarChart2", text: "Инструменты визуализации графиков работы и нагрузок" },
              { icon: "ClipboardList", text: "Сервис углублённой экспертизы с подготовкой официальных заключений" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-4 bg-secondary/30 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center shrink-0">
                  <Icon name={item.icon as "Calculator"} size={16} className="text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ценности */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-8">Наши ценности</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "Target",
                title: "Точность",
                text: "Все алгоритмы базируются на открытых отраслевых стандартах (API RP 5C7, API 5ST), классических учебных пособиях и актуальных публикациях SPE.",
              },
              {
                icon: "Unlock",
                title: "Доступность",
                text: "Базовые инструменты платформы бесплатны. Мы верим, что предварительная инженерная оценка не должна требовать дорогостоящих лицензий.",
              },
              {
                icon: "Shield",
                title: "Конфиденциальность",
                text: "Данные ваших скважин — ваша коммерческая тайна. Информация, введённая в калькуляторы, не сохраняется и не передаётся третьим лицам.",
              },
              {
                icon: "Award",
                title: "Профессионализм",
                text: "За каждым расчётом стоит понимание реальных процессов в стволе скважины. Мы не просто выводим цифры — мы помогаем их интерпретировать.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border rounded-xl p-6">
                <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center mb-4">
                  <Icon name={item.icon as "Target"} size={18} className="text-muted-foreground" />
                </div>
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Для кого */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-8">Для кого эта платформа</h2>
          <div className="space-y-3">
            {[
              { role: "Инженеры-технологи", desc: "для быстрой проверки допусков и режимов работы" },
              { role: "Мастера ГНКТ", desc: "для оперативного контроля параметров на месте" },
              { role: "Специалисты по ГНКТ", desc: "для углублённого анализа графиков и циклов" },
              { role: "Студенты и преподаватели", desc: "для изучения методик расчёта и моделирования" },
            ].map((item) => (
              <div key={item.role} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                <span className="font-medium">{item.role}</span>
                <span className="text-sm text-muted-foreground text-right">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-secondary/30 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl mb-3">Готовы начать?</h2>
          <p className="text-muted-foreground text-sm mb-6">Попробуйте инструменты бесплатно или оставьте заявку на экспертизу</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Открыть инструменты
            </Link>
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-2.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-6 mt-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs text-muted-foreground">2026 COILEDTUBING.PRO</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
