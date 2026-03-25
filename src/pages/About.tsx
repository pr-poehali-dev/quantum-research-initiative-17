import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useLang } from "@/context/LanguageContext";

const About = () => {
  const { lang, setLang, t } = useLang();

  const features = [
    {
      icon: "Calculator",
      text: t(
        "Модули экспресс-расчётов для быстрой оценки параметров",
        "Express calculation modules for quick parameter assessment"
      ),
    },
    {
      icon: "BarChart2",
      text: t(
        "Инструменты визуализации графиков работы и нагрузок",
        "Work log and load visualization tools"
      ),
    },
    {
      icon: "ClipboardList",
      text: t(
        "Сервис углублённой экспертизы с подготовкой официальных заключений",
        "In-depth expert analysis service with official reports"
      ),
    },
  ];

  const values = [
    {
      icon: "Target",
      title: t("Точность", "Accuracy"),
      text: t(
        "Все алгоритмы базируются на открытых отраслевых стандартах (API RP 5C7, API 5ST), классических учебных пособиях и актуальных публикациях SPE.",
        "All algorithms are based on open industry standards (API RP 5C7, API 5ST), classic textbooks and current SPE publications."
      ),
    },
    {
      icon: "Unlock",
      title: t("Доступность", "Accessibility"),
      text: t(
        "Базовые инструменты платформы бесплатны. Мы верим, что предварительная инженерная оценка не должна требовать дорогостоящих лицензий.",
        "Basic platform tools are free. We believe preliminary engineering assessment should not require expensive licenses."
      ),
    },
    {
      icon: "Shield",
      title: t("Конфиденциальность", "Confidentiality"),
      text: t(
        "Данные ваших скважин — ваша коммерческая тайна. Информация, введённая в калькуляторы, не сохраняется и не передаётся третьим лицам.",
        "Your well data is your trade secret. Information entered into calculators is not stored or shared with third parties."
      ),
    },
    {
      icon: "Award",
      title: t("Профессионализм", "Professionalism"),
      text: t(
        "За каждым расчётом стоит понимание реальных процессов в стволе скважины. Мы не просто выводим цифры — мы помогаем их интерпретировать.",
        "Every calculation is backed by understanding of real wellbore processes. We don't just show numbers — we help interpret them."
      ),
    },
  ];

  const audience = [
    {
      role: t("Инженеры-технологи", "Process Engineers"),
      desc: t("для быстрой проверки допусков и режимов работы", "for quick run permit checks and operating parameters"),
    },
    {
      role: t("Мастера ГНКТ", "CT Supervisors"),
      desc: t("для оперативного контроля параметров на месте", "for real-time parameter monitoring on site"),
    },
    {
      role: t("Специалисты по ГНКТ", "CT Specialists"),
      desc: t("для углублённого анализа графиков и циклов", "for in-depth work log and cycle analysis"),
    },
    {
      role: t("Студенты и преподаватели", "Students & Educators"),
      desc: t("для изучения методик расчёта и моделирования", "for learning calculation methods and simulation"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-4">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <div className="w-5 h-5 border-2 border-foreground rounded-sm flex items-center justify-center">
              <span className="text-[10px] font-mono">CT</span>
            </div>
            <span className="font-serif">CoiledTubing.pro</span>
          </Link>
          <button
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
            className="text-xs font-mono border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            {lang === "ru" ? "EN" : "RU"}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-16">
          <p className="text-xs font-mono text-muted-foreground mb-3">{t("О ПЛАТФОРМЕ", "ABOUT")}</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">CoiledTubing.pro</h1>
          <p className="text-xl text-muted-foreground">
            {t("Инженерные расчёты ГНКТ, которым можно доверять", "CT engineering calculations you can trust")}
          </p>
        </div>

        <section className="mb-16 border-l-2 border-primary pl-6">
          <h2 className="font-serif text-2xl mb-4">{t("Наша миссия", "Our Mission")}</h2>
          <p className="text-muted-foreground mb-4">
            {t(
              "Сделать профессиональные инженерные расчёты для операций с гибкими насосно-компрессорными трубами доступными каждому специалисту — быстро, точно и без лишних сложностей.",
              "To make professional engineering calculations for coiled tubing operations accessible to every specialist — fast, accurate and without unnecessary complexity."
            )}
          </p>
          <p className="text-muted-foreground">
            {t(
              "Мы создаём инструменты, которые помогают инженерам-технологам и буровикам принимать взвешенные решения, снижать риски аварийности и повышать эффективность работ на скважинах.",
              "We build tools that help process engineers and drillers make informed decisions, reduce incident risks and improve well operation efficiency."
            )}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-4">{t("Что такое CoiledTubing.pro?", "What is CoiledTubing.pro?")}</h2>
          <p className="text-muted-foreground mb-6">
            {t(
              "CoiledTubing.pro — это специализированная расчётная платформа, разработанная инженерами-практиками для коллег по цеху. Мы объединили в одном месте ключевые инструменты, необходимые для планирования и контроля операций с ГНКТ.",
              "CoiledTubing.pro is a specialized calculation platform developed by practicing engineers for their colleagues. We have brought together in one place the key tools needed for planning and monitoring CT operations."
            )}
          </p>
          <div className="grid gap-4">
            {features.map((item) => (
              <div key={item.text} className="flex items-start gap-4 bg-secondary/30 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center shrink-0">
                  <Icon name={item.icon as "Calculator"} size={16} className="text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-8">{t("Наши ценности", "Our Values")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((item) => (
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

        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-8">{t("Для кого эта платформа", "Who is this platform for")}</h2>
          <div className="space-y-3">
            {audience.map((item) => (
              <div key={item.role} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                <span className="font-medium">{item.role}</span>
                <span className="text-sm text-muted-foreground text-right">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-secondary/30 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl mb-3">{t("Готовы начать?", "Ready to start?")}</h2>
          <p className="text-muted-foreground text-sm mb-6">
            {t(
              "Попробуйте инструменты бесплатно или оставьте заявку на экспертизу",
              "Try the tools for free or submit a request for expert analysis"
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/tools"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {t("Открыть инструменты", "Open tools")}
            </Link>
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-2.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
            >
              {t("Связаться с нами", "Contact us")}
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
