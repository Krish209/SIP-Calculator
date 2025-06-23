import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <div className="my-4 border border-gray-200 overflow-x-auto rounded-lg shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <caption className="sr-only">Data Table</caption>
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-3 sm:px-6 py-2 sm:py-3 text-left text-gray-500 text-xs sm:text-sm uppercase font-medium tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.key} className="px-3 sm:px-6 py-3.5 text-xs sm:text-sm text-primary">
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
