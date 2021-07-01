import './Header.scss';

const Header = () => {
  return (
    <tr>
      <th className="group">ММИО</th>
      <th className="days">Понедельник</th>
      <th className="days">Вторник</th>
      <th className="days">Среда</th>
      <th className="days">Четверг</th>
      <th className="days">Пятница</th>
      <th className="days">Суббота</th>
    </tr>
  );
};

export default Header;