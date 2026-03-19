import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 border-2 border-foreground rounded-sm flex items-center justify-center">
                <span className="text-[10px] font-mono">CT</span>
              </div>
              <span className="font-serif">CoiledTubing.pro</span>
            </Link>
            <p className="text-xs font-mono text-muted-foreground">
              РАСЧЁТЫ ГНКТ
              <br />
              ПЛАТФОРМА V1.0
            </p>
            <p className="text-xs font-mono text-muted-foreground mt-4">ВСЕ СИСТЕМЫ РАБОТАЮТ</p>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-4">НАВИГАЦИЯ</h4>
            <ul className="space-y-2">
              {["Инструменты", "Тарифы", "Отзывы"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  О платформе
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-4">ДОКУМЕНТЫ</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm hover:text-primary transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-primary transition-colors">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="text-sm hover:text-primary transition-colors">
                  Методология расчётов
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Status */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-muted-foreground mb-4">СТАТУС</h4>
            <div className="bg-secondary/50 rounded-xl p-4 font-mono text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">coiledtubing.pro</span>
              </div>
              <div className="space-y-1">
                <p className="text-primary">РАСЧЁТНЫЙ МОДУЛЬ [АКТИВЕН]</p>
                <p className="text-muted-foreground">Все системы работают штатно</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">2026 COILEDTUBING.PRO</p>
          <p className="text-xs text-muted-foreground">ПРОФЕССИОНАЛЬНЫЕ ИНСТРУМЕНТЫ ДЛЯ НЕФТЕСЕРВИСА.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;