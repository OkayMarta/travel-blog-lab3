import React from 'react';
import { NavLink } from 'react-router-dom'; // Імпортуємо NavLink для активних посилань

// Компонент навігаційного меню
function Navigation() {
  // Функція для визначення CSS класу активного посилання
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? 'active' : ''; // Додаємо клас 'active', якщо посилання активне
  };

  return (
    <nav className="navigation">
      <ul>
        {/* Використовуємо NavLink замість Link для стилізації активного посилання */}
        {/* Функція getNavLinkClass передається в className для визначення класу */}
        <li><NavLink to="/" className={getNavLinkClass}>Головна</NavLink></li>
        <li><NavLink to="/publications" className={getNavLinkClass}>Публікації</NavLink></li>
        <li><NavLink to="/articles" className={getNavLinkClass}>Статті</NavLink></li>
      </ul>
    </nav>
  );
}

// Експорт компонента за замовчуванням
export default Navigation;