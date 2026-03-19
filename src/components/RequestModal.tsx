import { useState } from "react";
import Icon from "@/components/ui/icon";

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequestModal = ({ isOpen, onClose }: RequestModalProps) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (!isOpen) return null;

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-card border border-border rounded-2xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        <h2 className="font-serif text-2xl mb-1">Оставить заявку</h2>
        <p className="text-muted-foreground text-sm mb-6">
          Специалист свяжется с вами в течение 24 часов
        </p>

        {status === "success" ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={24} className="text-primary" />
            </div>
            <p className="font-medium text-lg mb-1">Заявка отправлена!</p>
            <p className="text-muted-foreground text-sm">Мы свяжемся с вами в ближайшее время.</p>
            <button
              onClick={onClose}
              className="mt-6 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Закрыть
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
                rows={3}
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
              {status === "loading" ? "Отправляем..." : "Отправить заявку"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RequestModal;