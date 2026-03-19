import { ArrowRight, BarChart2, Calculator, ClipboardList, Settings, Users } from "lucide-react";

interface CTASectionProps {
  onOpenModal: () => void;
}

const CTASection = ({ onOpenModal }: CTASectionProps) => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-card border border-border rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Decorative corner icons */}
          <div className="absolute top-8 left-8 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <Calculator className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute top-8 right-8 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <BarChart2 className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute bottom-8 left-8 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <ClipboardList className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute bottom-8 right-8 w-10 h-10 border border-border rounded-lg flex items-center justify-center">
            <Users className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute top-1/2 right-16 -translate-y-1/2 w-10 h-10 border border-border rounded-lg hidden md:flex items-center justify-center">
            <Settings className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="absolute bottom-1/3 left-16 w-10 h-10 border border-border rounded-lg hidden md:flex items-center justify-center">
            <span className="text-muted-foreground text-lg">+</span>
          </div>

          {/* Main content */}
          <div className="text-center max-w-2xl mx-auto relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
              Ваши операции,
              <br />
              рассчитаны безупречно.
            </h2>
            <p className="text-muted-foreground mb-8">
              Присоединяйтесь к специалистам, которые уже используют точные расчёты ГНКТ для безопасной и эффективной работы.
            </p>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Оставить заявку на анализ
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
