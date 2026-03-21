import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Contacts = () => {
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
        <h1 className="font-serif text-4xl mb-2">Контакты</h1>
        <p className="text-muted-foreground text-sm mb-12">
          Пишите напрямую — отвечаем в рабочее время
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-xl mb-5">Связаться с нами</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={18} className="text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Электронная почта</p>
                    <a
                      href="mailto:info@coiledtubing.pro"
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      info@coiledtubing.pro
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Технические вопросы, предложения по сотрудничеству, обратная связь по проекту
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Globe" size={18} className="text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Сайт</p>
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
              <h2 className="font-serif text-xl mb-4">По каким вопросам писать</h2>
              <ul className="space-y-3">
                {[
                  "Технические замечания и ошибки в материалах",
                  "Предложения по новым темам и калькуляторам",
                  "Сотрудничество и экспертные комментарии",
                  "Вопросы по использованию инструментов",
                ].map((item) => (
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
              <h3 className="font-medium mb-2">Время ответа</h3>
              <p className="text-sm text-muted-foreground">
                Стараемся отвечать в течение 1–2 рабочих дней. Если вопрос срочный — укажите это в теме письма.
              </p>
            </div>

            <div className="bg-secondary/40 border border-border rounded-2xl p-6">
              <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center mb-4">
                <Icon name="Heart" size={18} className="text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-2">Поддержать проект</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Хотите помочь развитию независимого технического ресурса для отрасли?
              </p>
              <Link
                to="/support"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Узнать как поддержать
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
