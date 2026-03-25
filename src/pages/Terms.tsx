import { Link } from "react-router-dom";
import { useLang } from "@/context/LanguageContext";

const Terms = () => {
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
          {t("Условия использования сайта", "Terms of Use")}
        </h1>
        <p className="text-muted-foreground text-sm mb-12">
          CoiledTubing.pro<br />
          {t("Дата вступления в силу: 20.03.2026", "Effective date: 20.03.2026")}
        </p>

        <p className="text-muted-foreground mb-10">
          {t(
            "Настоящие Условия использования регулируют отношения между администрацией сайта CoiledTubing.pro и любым лицом, использующим сайт и его сервисы. Использование сайта означает ваше полное и безоговорочное согласие с настоящими Условиями.",
            "These Terms of Use govern the relationship between the CoiledTubing.pro site administration and any person using the site and its services. Using the site constitutes your full and unconditional agreement with these Terms."
          )}
        </p>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("1. Общие положения", "1. General Provisions")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>{t("1.1. Сайт CoiledTubing.pro — онлайн-платформа для инженерных расчетов, связанных с гибкими насосно-компрессорными трубами (ГНКТ), включая калькуляторы допуска, симуляторы траекторий, а также заказ услуг углубленной инженерной экспертизы.", "1.1. CoiledTubing.pro is an online platform for coiled tubing (CT) engineering calculations, including run permit calculators, trajectory simulators, and in-depth engineering expert analysis services.")}</p>
            <p>{t("1.2. Настоящие Условия являются публичной офертой. Используя сайт, вы подтверждаете, что обладаете необходимой квалификацией для корректной интерпретации результатов расчетов.", "1.2. These Terms constitute a public offer. By using the site, you confirm that you have the qualifications to correctly interpret calculation results.")}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("2. Использование сервисов сайта", "2. Use of Site Services")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p><span className="text-foreground font-medium">{t("2.1. Бесплатные инструменты.", "2.1. Free tools.")}</span> {t("Все онлайн-калькуляторы предоставляются на условиях «как есть» (as is). Администрация не несет ответственности за возможные ошибки в расчетах или их интерпретацию.", "All online calculators are provided on an \"as is\" basis. The administration is not responsible for possible calculation errors or their interpretation.")}</p>
            <p><span className="text-foreground font-medium">{t("2.2. Промышленные данные.", "2.2. Industrial data.")}</span> {t("Вводя данные в формы на сайте, вы подтверждаете, что имеете право на их использование и они не нарушают коммерческую тайну третьих лиц.", "By entering data into site forms, you confirm that you have the right to use this data and it does not violate third parties' trade secrets.")}</p>
            <p><span className="text-foreground font-medium">{t("2.3. Заявки на услуги.", "2.3. Service requests.")}</span> {t("Для получения услуги углублённого анализа необходимо оставить заявку с достоверной контактной информацией.", "To receive in-depth analysis services, you must submit a request with accurate contact information.")}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("3. Интеллектуальная собственность", "3. Intellectual Property")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>{t("3.1. Все материалы сайта, включая тексты, графику, логотипы, интерфейс, программный код калькуляторов, являются интеллектуальной собственностью Администрации.", "3.1. All site materials, including texts, graphics, logos, interface and calculator code, are the intellectual property of the Administration.")}</p>
            <p>{t("3.2. Запрещается копировать, модифицировать или декомпилировать расчетные алгоритмы, а также использовать материалы сайта в коммерческих целях без письменного разрешения.", "3.2. It is prohibited to copy, modify or decompile calculation algorithms, or use site materials for commercial purposes without written permission.")}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("4. Ответственность и ограничение гарантий", "4. Liability and Warranty Disclaimer")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>{t("4.1. Все расчеты носят рекомендательный и оценочный характер. Окончательное решение о возможности проведения операции принимает квалифицированный специалист.", "4.1. All calculations are advisory and estimative. The final decision on the feasibility of an operation is made by a qualified specialist.")}</p>
            <p>{t("4.2. Администрация не несет ответственности за любые прямые или косвенные убытки, возникшие в результате использования сервисов сайта.", "4.2. The Administration is not liable for any direct or indirect losses arising from the use of site services.")}</p>
            <p>{t("4.3. Администрация не гарантирует бесперебойную работу сайта и вправе изменять функционал без предварительного уведомления.", "4.3. The Administration does not guarantee uninterrupted site operation and may change functionality without prior notice.")}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("5. Стоимость услуг и оплата", "5. Service Pricing and Payment")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>{t("5.1. Использование базовых онлайн-инструментов является бесплатным.", "5.1. Use of basic online tools is free.")}</p>
            <p>{t("5.2. Услуги углубленного анализа являются платными. Стоимость согласовывается индивидуально.", "5.2. In-depth analysis services are paid. Pricing is agreed individually.")}</p>
            <p>{t("5.3. Оплата услуг производится на условиях 100% предоплаты, если иное не указано в счете.", "5.3. Payment is made on a 100% prepayment basis unless otherwise specified in the invoice.")}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">{t("6. Прочие условия", "6. Miscellaneous")}</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>{t("6.1. Настоящие Условия регулируются законодательством Российской Федерации.", "6.1. These Terms are governed by the laws of the Russian Federation.")}</p>
            <p>{t("6.2. Все споры стороны стремятся урегулировать путем переговоров.", "6.2. All disputes shall be resolved through negotiations.")}</p>
            <p>{t("6.3. Администрация вправе вносить изменения в Условия в любое время. Актуальная версия всегда доступна на сайте.", "6.3. The Administration may amend these Terms at any time. The current version is always available on the site.")}</p>
            <p>
              {t("6.4. По всем вопросам:", "6.4. For all inquiries:")}{" "}
              <a href="mailto:info@coiledtubing.pro" className="text-primary hover:underline">info@coiledtubing.pro</a>
            </p>
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

export default Terms;
