import React, { useState } from 'react';

export default function LogForm({ onAddLog }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newLog = {
      text,
      date: new Date().toLocaleString(),
    };

    onAddLog(newLog);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="w-full p-2 border rounded resize-none mb-2"
        rows="3"
        placeholder="Type your log entry..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Add Log
      </button>
    </form>
  );
}


