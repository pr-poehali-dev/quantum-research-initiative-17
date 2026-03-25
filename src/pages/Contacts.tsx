import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useLang } from "@/context/LanguageContext";

const Contacts = () => {
  const { lang, setLang, t } = useLang();

  const topics = [
    t("Технические замечания и ошибки в материалах", "Technical comments and errors in materials"),
    t("Предложения по новым темам и калькуляторам", "Suggestions for new topics and calculators"),
    t("Сотрудничество и экспертные комментарии", "Collaboration and expert commentary"),
    t("Вопросы по использованию инструментов", "Questions about using the tools"),
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
        <h1 className="font-serif text-4xl mb-2">{t("Контакты", "Contacts")}</h1>
        <p className="text-muted-foreground text-sm mb-12">
          {t("Пишите напрямую — отвечаем в рабочее время", "Write directly — we respond during business hours")}
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-xl mb-5">{t("Связаться с нами", "Get in touch")}</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={18} className="text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{t("Электронная почта", "Email")}</p>
                    <a
                      href="mailto:info@coiledtubing.pro"
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      info@coiledtubing.pro
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      {t(
                        "Технические вопросы, предложения по сотрудничеству, обратная связь по проекту",
                        "Technical questions, collaboration proposals, project feedback"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Globe" size={18} className="text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{t("Сайт", "Website")}</p>
                    <a
                      href="https://coiledtubing.pro"
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      coiledtubing.pro
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-xl mb-4">{t("По каким вопросам писать", "What to write about")}</h2>
              <ul className="space-y-3">
                {topics.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-secondary/40 border border-border rounded-2xl p-6">
              <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center mb-4">
                <Icon name="Clock" size={18} className="text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-2">{t("Время ответа", "Response time")}</h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  "Стараемся отвечать в течение 1–2 рабочих дней. Если вопрос срочный — укажите это в теме письма.",
                  "We aim to respond within 1–2 business days. If urgent — indicate this in the email subject line."
                )}
              </p>
            </div>

            <div className="bg-secondary/40 border border-border rounded-2xl p-6">
              <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center mb-4">
                <Icon name="Heart" size={18} className="text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-2">{t("Поддержать проект", "Support the project")}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t(
                  "Хотите помочь развитию независимого технического ресурса для отрасли?",
                  "Want to help develop an independent technical resource for the industry?"
                )}
              </p>
              <Link
                to="/support"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                {t("Узнать как поддержать", "Learn how to support")}
                <Icon name="ArrowRight" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-6 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs text-muted-foreground">2026 COILEDTUBING.PRO</p>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
