import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useLang } from "@/context/LanguageContext";

const CARD = "4274 3200 4147 9885";

const CardNumber = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useLang();

  const handleCopy = () => {
    navigator.clipboard.writeText(CARD.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xl md:text-2xl tracking-widest select-all">{CARD}</span>
      <button
        onClick={handleCopy}
        className="ml-auto shrink-0 flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-lg px-3 py-1.5 hover:bg-secondary transition-colors"
      >
        <Icon name={copied ? "Check" : "Copy"} size={13} />
        {copied ? t("Скопировано", "Copied") : t("Копировать", "Copy")}
      </button>
    </div>
  );
};

const Support = () => {
  const { lang, setLang, t } = useLang();

  const directions = [
    {
      icon: "Users",
      title: t("Работа технических редакторов и экспертов", "Technical editors and expert work"),
      description: t(
        "Привлечение узких специалистов для разбора нестандартных ситуаций и верификации расчётных методик.",
        "Engaging specialists to analyze non-standard situations and verify calculation methods."
      ),
    },
    {
      icon: "Calculator",
      title: t("Интерактивные калькуляторы", "Interactive calculators"),
      description: t(
        "Создание инструментов для выбора колонн ГНКТ, расчёта нагрузок и моделирования скважинных операций.",
        "Building tools for CT string selection, load calculation and wellbore operation simulation."
      ),
    },
    {
      icon: "Video",
      title: t("Обучающие видео", "Training videos"),
      description: t(
        "Запись материалов с реальными примерами из промысла — от базовых операций до сложных аварийных ситуаций.",
        "Recording materials with real field examples — from basic operations to complex emergency situations."
      ),
    },
    {
      icon: "Server",
      title: t("Техническая поддержка и хостинг", "Technical support and hosting"),
      description: t(
        "Обеспечение быстрой и надёжной работы сайта, хранения данных и безотказности инструментов.",
        "Ensuring fast and reliable website operation, data storage and tool uptime."
      ),
    },
    {
      icon: "MessageSquare",
      title: t("Офлайн-встречи и круглые столы", "Offline meetups and roundtables"),
      description: t(
        "Организация профильных мероприятий для обмена опытом между специалистами отрасли.",
        "Organizing industry events for knowledge sharing among specialists."
      ),
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
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
            <Icon name="Heart" size={12} />
            {t("Поддержка проекта", "Support the project")}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl mb-5 leading-tight">
            {t("Поддержите развитие", "Support the development of")}
            <br />
            coiledtubing.pro
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            {t(
              "Мы стремимся сохранить доступ к качественной информации для всех — от начинающих операторов до главных инженеров. Без поддержки со стороны аудитории сложно развивать проект в долгосрок, закрывать сложные технические темы и привлекать узких специалистов для разбора нестандартных ситуаций.",
              "We strive to keep quality information accessible for everyone — from junior operators to chief engineers. Without audience support it is hard to develop the project long-term, cover complex technical topics and engage specialists for non-standard situations."
            )}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="font-serif text-2xl mb-8">{t("Куда идут средства", "Where the funds go")}</h2>
          <div className="space-y-4">
            {directions.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 border border-border rounded-2xl p-6 hover:bg-secondary/30 transition-colors"
              >
                <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name={item.icon as never} size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-serif text-2xl mb-6">{t("Перевод на карту", "Card transfer")}</h2>
          <div className="border border-border rounded-2xl p-6 md:p-8 bg-card">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center shrink-0">
                <Icon name="CreditCard" size={18} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t("Сбербанк", "Sberbank")}</p>
                <p className="font-medium text-sm">{t("Банковская карта", "Bank card")}</p>
              </div>
            </div>
            <CardNumber />
            <p className="text-xs text-muted-foreground mt-4">
              {t(
                "В комментарии к переводу можно указать «Поддержка coiledtubing.pro» — это поможет нам отслеживать поступления.",
                "In the transfer comment you can write «Support coiledtubing.pro» — this helps us track incoming donations."
              )}
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-3">
            {t("Другие форматы участия", "Other ways to participate")}
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-lg mx-auto">
            {t(
              "Экспертное сотрудничество, партнёрство или другие форматы — напишите нам.",
              "Expert collaboration, partnership or other formats — write to us."
            )}
          </p>
          <a
            href="mailto:info@coiledtubing.pro?subject=Поддержка проекта coiledtubing.pro"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Icon name="Mail" size={16} />
            info@coiledtubing.pro
          </a>
        </div>
      </main>

      <footer className="border-t border-border py-6 mt-16">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-muted-foreground">2026 COILEDTUBING.PRO</p>
          <Link to="/contacts" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            {t("Контакты", "Contacts")}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Support;
