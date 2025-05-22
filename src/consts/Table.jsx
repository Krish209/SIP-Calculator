import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-3 sm:px-4 py-2 text-left text-sm font-semibold"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.key} className="px-3 sm:px-4 py-2.5 text-sm text-primary">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
