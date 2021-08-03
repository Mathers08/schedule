import React from "react";
import './Header.scss';

const Header = () => {

  const days = [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
  ]

  return (
    <tr>
      <th className="group">ММИО</th>
        {days.map(day => (
          <th key={day} className="days">
            {day}
          </th>
        ))}
    </tr>
  );
};

export default Header;