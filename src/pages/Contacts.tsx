import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://functions.poehali.dev/59868fe4-42bb-4f45-b384-cf520c3a2692", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

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
        <p className="text-muted-foreground text-sm mb-12">Свяжитесь с нами — ответим в течение 24 часов</p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Контактная информация */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-xl mb-4">Реквизиты</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={18} className="text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Электронная почта</p>
                    <a href="mailto:info@coiledtubing.pro" className="text-sm hover:text-primary transition-colors">
                      info@coiledtubing.pro
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Globe" size={18} className="text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Сайт</p>
                    <a href="https://coiledtubing.pro" className="text-sm hover:text-primary transition-colors">
                      coiledtubing.pro
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-xl mb-4">Специализация</h2>
              <ul className="space-y-2">
                {[
                  "Расчёт допуска ГНКТ в скважину",
                  "Углублённый инженерный анализ",
                  "Симуляция траектории скважины",
                  "Экспертные заключения",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Форма */}
          <div>
            <h2 className="font-serif text-xl mb-6">Написать нам</h2>

            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={24} className="text-primary" />
                </div>
                <p className="font-medium text-lg mb-1">Сообщение отправлено!</p>
                <p className="text-muted-foreground text-sm">Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Имя *</label>
                  <input
                    required
                    type="text"
                    placeholder="Иван Петров"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Телефон *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+7 900 000 00 00"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <input
                    type="email"
                    placeholder="ivan@company.ru"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Сообщение</label>
                  <textarea
                    placeholder="Опишите вашу задачу..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-primary-foreground py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Отправляем..." : "Отправить сообщение"}
                </button>
              </form>
            )}
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
