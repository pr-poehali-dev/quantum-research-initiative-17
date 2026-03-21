import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const CARD = "4274 3200 4147 9885";

const CardNumber = () => {
  const [copied, setCopied] = useState(false);

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
        {copied ? "Скопировано" : "Копировать"}
      </button>
    </div>
  );
};

const directions = [
  {
    icon: "Users",
    title: "Работа технических редакторов и экспертов",
    description:
      "Привлечение узких специалистов для разбора нестандартных ситуаций и верификации расчётных методик.",
  },
  {
    icon: "Calculator",
    title: "Интерактивные калькуляторы",
    description:
      "Создание инструментов для выбора колонн ГНКТ, расчёта нагрузок и моделирования скважинных операций.",
  },
  {
    icon: "Video",
    title: "Обучающие видео",
    description:
      "Запись материалов с реальными примерами из промысла — от базовых операций до сложных аварийных ситуаций.",
  },
  {
    icon: "Server",
    title: "Техническая поддержка и хостинг",
    description:
      "Обеспечение быстрой и надёжной работы сайта, хранения данных и безотказности инструментов.",
  },
  {
    icon: "MessageSquare",
    title: "Офлайн-встречи и круглые столы",
    description:
      "Организация профильных мероприятий для обмена опытом между специалистами отрасли.",
  },
];

const Support = () => {
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
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
            <Icon name="Heart" size={12} />
            Поддержка проекта
          </div>
          <h1 className="font-serif text-4xl md:text-5xl mb-5 leading-tight">
            Поддержите развитие
            <br />
            coiledtubing.pro
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            Мы стремимся сохранить доступ к качественной информации для всех — от начинающих
            операторов до главных инженеров. Без поддержки со стороны аудитории сложно развивать
            проект в долгосрок, закрывать сложные технические темы и привлекать узких специалистов
            для разбора нестандартных ситуаций.
          </p>
        </div>

        {/* Directions */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl mb-8">Куда идут средства</h2>
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

        {/* Card donation */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl mb-6">Перевод на карту</h2>
          <div className="border border-border rounded-2xl p-6 md:p-8 bg-card">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center shrink-0">
                <Icon name="CreditCard" size={18} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Сбербанк</p>
                <p className="font-medium text-sm">Банковская карта</p>
              </div>
            </div>
            <CardNumber />
            <p className="text-xs text-muted-foreground mt-4">
              В комментарии к переводу можно указать «Поддержка coiledtubing.pro» — это поможет нам отслеживать поступления.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-3">Другие форматы участия</h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-lg mx-auto">
            Экспертное сотрудничество, партнёрство или другие форматы — напишите нам.
          </p>
          <a
            href="mailto:info@coiledtubing.pro?subject=Поддержка проекта coiledtubing.pro"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Icon name="Mail" size={16} />
            Написать на info@coiledtubing.pro
          </a>
        </div>
      </main>

      <footer className="border-t border-border py-6 mt-16">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-muted-foreground">2026 COILEDTUBING.PRO</p>
          <Link to="/contacts" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Контакты
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Support;