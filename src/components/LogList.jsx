
import React from 'react';

export default function LogList({ logs, onDelete }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Your Logs</h2>
      {logs.length === 0 ? (
        <p className="text-gray-600">No logs yet.</p>
      ) : (
        <ul className="space-y-2">
          {logs.map((log, index) => (
            <li
              key={index}
              className="bg-gray-50 p-3 rounded shadow-sm flex justify-between items-start"
            >
              <div>
                <p className="text-gray-800">{log.text}</p>
                <small className="text-gray-500 block">{log.date}</small>
              </div>
              <button
                onClick={() => onDelete(index)}
                className="ml-4 text-red-500 hover:text-red-700 font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
