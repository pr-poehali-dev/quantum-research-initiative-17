import { Link } from "react-router-dom";
import { useLang } from "@/context/LanguageContext";

const Privacy = () => {
  const { lang, setLang, t } = useLang();

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
        <h1 className="font-serif text-4xl mb-2">
          {t("Политика конфиденциальности", "Privacy Policy")}
        </h1>
        <p className="text-muted-foreground text-sm mb-12">
          {t(
            "Сайта CoiledTubing.pro (далее — Оператор)\nДата вступления в силу: 20.03.2026",
            "CoiledTubing.pro (hereinafter — Operator)\nEffective date: 20.03.2026"
          )}
        </p>

        <p className="text-muted-foreground mb-10">
          {t(
            "Настоящая Политика конфиденциальности действует в отношении всей информации, которую сайт CoiledTubing.pro может получить о Пользователе во время использования им Сайта, его сервисов, программ и продуктов. Использование сервисов Сайта означает безоговорочное согласие Пользователя с настоящей Политикой.",
            "This Privacy Policy applies to all information that CoiledTubing.pro may obtain about the User while using the Site, its services, programs and products. Using the Site's services constitutes the User's unconditional agreement with this Policy."
          )}
        </p>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("1. Общие положения", "1. General Provisions")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>{t("1.1. Настоящая Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и Общим регламентом по защите данных (GDPR) Европейского Союза.", "1.1. This Policy was developed in accordance with Federal Law No. 152-FZ of 27.07.2006 «On Personal Data» and the General Data Protection Regulation (GDPR) of the European Union.")}</p>
            <p>{t("1.2. Оператор ставит своей важнейшей целью соблюдение прав и свобод человека при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни.", "1.2. The Operator's primary goal is to respect human rights and freedoms when processing personal data, including the right to privacy.")}</p>
            <p>{t("1.3. Мы осознаём критическую важность конфиденциальности данных, связанных с бурением и эксплуатацией скважин, и обязуемся защищать их наравне с личными данными инженеров.", "1.3. We recognize the critical importance of confidentiality of drilling and well operation data, and commit to protecting it on par with engineers' personal data.")}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("2. Состав обрабатываемой информации", "2. Types of Information Processed")}</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t("2.1. Персональные данные, предоставляемые при заполнении форм:", "2.1. Personal data provided when filling out forms:")}</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("ФИО;", "Full name;")}</li>
              <li>{t("адрес электронной почты;", "email address;")}</li>
              <li>{t("номер контактного телефона;", "contact phone number;")}</li>
              <li>{t("наименование компании и должность (если указаны).", "company name and position (if provided).")}</li>
            </ul>
            <p>{t("2.2. Технические данные, собираемые автоматически:", "2.2. Technical data collected automatically:")}</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("IP-адрес;", "IP address;")}</li>
              <li>{t("информация о браузере и типе устройства;", "browser and device type information;")}</li>
              <li>{t("данные об активности на Сайте.", "site activity data.")}</li>
            </ul>
            <p>{t("2.3. Промысловые и инженерные данные, вводимые в расчетные модули (параметры скважины, характеристики ГНКТ). Эти данные не являются персональными, но относятся к коммерческой тайне Пользователя.", "2.3. Field and engineering data entered into calculation modules (well parameters, CT characteristics). This data is not personal but constitutes the User's trade secret.")}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("3. Цели сбора и обработки информации", "3. Purposes of Collection and Processing")}</h2>
          <div className="text-muted-foreground">
            <p className="mb-3">{t("3.1. Информация обрабатывается исключительно в следующих целях:", "3.1. Information is processed solely for the following purposes:")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("Идентификация Пользователя для оказания услуг.", "User identification for service delivery.")}</li>
              <li>{t("Обратная связь с Пользователем.", "Communication with the User.")}</li>
              <li>{t("Предоставление бесплатных инструментов. Введённые параметры используются только для вычисления результата и не сохраняются после закрытия вкладки.", "Providing free tools. Entered parameters are used only to compute the result and are not stored after the tab is closed.")}</li>
              <li>{t("Улучшение качества работы Сайта.", "Improving the Site's performance.")}</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("4. Правовые основания обработки", "4. Legal Basis for Processing")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>{t("4.1. Оператор обрабатывает персональные данные только в случае их заполнения и отправки Пользователем через формы на Сайте.", "4.1. The Operator processes personal data only when the User fills out and submits forms on the Site.")}</p>
            <p>{t("4.2. Оператор обрабатывает обезличенные данные о Пользователе, если это разрешено в настройках браузера (включено сохранение cookie и использование JavaScript).", "4.2. The Operator processes anonymized User data if permitted in browser settings (cookies and JavaScript enabled).")}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("5. Хранение и передача информации", "5. Storage and Transfer of Information")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>{t("5.1. Мы принимаем все необходимые меры для защиты персональных и промысловых данных от неправомерного доступа.", "5.1. We take all necessary measures to protect personal and field data from unauthorized access.")}</p>
            <p>{t("5.2. Гарантируем, что никакая информация из онлайн-калькуляторов не передается третьим лицам. Персональные данные из заявок используются только для связи и подготовки отчета.", "5.2. We guarantee that no information from online calculators is shared with third parties. Personal data from requests is used only for communication and report preparation.")}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("6. Файлы Cookie", "6. Cookies")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>{t("6.1. Сайт использует файлы cookie для персонализации и сбора статистики.", "6.1. The Site uses cookies for personalization and analytics.")}</p>
            <p>{t("6.2. Пользователь может запретить установку cookie в настройках браузера.", "6.2. The User can disable cookies in browser settings.")}</p>
            <p>{t("6.3. Счётчики (Яндекс.Метрика) собирают технические данные в обезличенном виде.", "6.3. Counters (Yandex.Metrica) collect technical data in anonymized form.")}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("7. Заключительные положения", "7. Final Provisions")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>{t("7.1. По вопросам обработки персональных данных обращайтесь: info@coiledtubing.pro.", "7.1. For questions regarding personal data processing, contact: info@coiledtubing.pro.")}</p>
            <p>{t("7.2. Оператор вправе вносить изменения в Политику без согласия Пользователя. Новая редакция вступает в силу с момента размещения на Сайте.", "7.2. The Operator may amend this Policy without the User's consent. The new version takes effect upon publication on the Site.")}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs text-muted-foreground">2026 COILEDTUBING.PRO</p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
