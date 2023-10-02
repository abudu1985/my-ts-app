import React from "react";
import './styles.css';
function createData(name, calories, fat, carbs, protein, sodium) {
  return { name, calories, fat, carbs, protein, sodium };
}
const headers = ['Calories', 'Fat', 'Carbs', 'Protein', 'Sodium'];
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 2.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 1.8),
  createData('Eclair', 262, 16.0, 24, 6.0, 1.5),
  createData('Cupcake', 305, 3.7, 67, 4.3, 1.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.4),
];

console.log('qwe 1111111111')

const ResponsiveTable = () => {
  return (
      <div className="lists-container">
        <h2>Dessert (100g serving)</h2>
        {rows.map((row, i) => (
          <div key={row.name}>
            <h3>{row.name}</h3>
            <dl>
              {headers.map((header, i) => (
                <>
                  <dt>
                    {header !== 'Calories' ? `${header} (g)` : 'Calories'}
                  </dt>
                  <dd>{row[header.toLowerCase()]}</dd>
                </>
              ))}
            </dl>
          </div>
        ))}
      </div>
  );
}

export default ResponsiveTable