import './Table.scss';
import Week from '../Week/Week';
import Header from "../Header/Header";
import React from "react";

const Table = () => {

  const timeRanges = [
    '8:00 - 9:35',
    '9:45 - 11:20',
    '11:30 - 13:05',
    '13:25 - 15:00',
    '15:10 - 16:45',
    '16:55 - 18:30'
  ];

  return (
      <table className="table">
        <thead>
          <Header/>
        </thead>
        <tbody>
          {
            timeRanges.map(t => (
              <tr key={t}>
                <th>{t}</th>
                <Week/>
              </tr>
            ))
          }
        </tbody>
      </table>
  );
};

export default Table;