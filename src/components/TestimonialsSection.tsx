interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: "CT-0088",
    quote:
      "Платформа сэкономила нам массу времени на подготовке к операциям. Расчёт допуска, который раньше занимал полдня, теперь готов за несколько минут — и всё задокументировано.",
    author: "Андрей Власов",
    role: "ГЛАВНЫЙ ИНЖЕНЕР, ЗАПАДНАЯ СИБИРЬ",
  },
  {
    id: "CT-2301",
    quote:
      "Запросили углублённый анализ по проблемной скважине. Специалисты выявили зону риска по усталости трубы, которую мы сами пропустили. Теперь используем платформу постоянно.",
    author: "Марина Соколова",
    role: "ТЕХНОЛОГ, КВО-СЕРВИС",
  },
  {
    id: "CT-7725",
    quote:
      "Наконец-то инструмент, который понимает специфику ГНКТ. Не приходится адаптировать формулы из общих справочников — всё заточено под нашу работу.",
    author: "Дмитрий Карпов",
    role: "РУКОВОДИТЕЛЬ БРИГАДЫ ГНКТ",
  },
  {
    id: "CT-0030",
    quote:
      "Графики работы теперь анализируем прямо на объекте с планшета. Очень удобно при сдаче смены и разборе нештатных ситуаций.",
    author: "Олег Тимофеев",
    role: "СУПЕРВАЙЗЕР, НЕФТЯНОЙ СЕРВИС",
  },
  {
    id: "CT-2134",
    quote: "Минималистичный, но функциональный интерфейс. Всё на виду, ничего лишнего. Для полевого инженера — то что надо.",
    author: "Екатерина Фролова",
    role: "ИНЖЕНЕР-ТЕХНОЛОГ, ГНКТ",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">ОТЗЫВЫ СПЕЦИАЛИСТОВ</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-md leading-tight">
              Инженеры, которые доверяют расчётам
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Реальные отзывы от нефтесервисных специалистов.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">-&gt;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {testimonials.slice(3, 4).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">-&gt;</span>
                </div>
              </div>
            </div>
          ))}

          {/* Join CTA */}
          <div className="bg-secondary/50 border border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center mb-3">
              <span className="text-lg">+</span>
            </div>
            <span className="text-sm font-mono text-muted-foreground">ВАШ ОТЗЫВ ЗДЕСЬ</span>
            <p className="text-sm text-muted-foreground mt-1">Присоединяйтесь к сообществу.</p>
          </div>

          {testimonials.slice(4).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">-&gt;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
