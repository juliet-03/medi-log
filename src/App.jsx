import React, { useEffect, useState } from 'react';
import LogForm from './components/LogForm';
import LogList from './components/LogList';

export default function App() {
  const [logs, setLogs] = useState([]);

  // Load logs from localStorage on first load
  useEffect(() => {
    const saved = localStorage.getItem('medilogs');
    if (saved) setLogs(JSON.parse(saved));
  }, []);

  // Save logs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('medilogs', JSON.stringify(logs));
  }, [logs]);

  const addLog = (newLog) => {
    setLogs([...logs, newLog]);
  };

  const deleteLog = (indexToDelete) => {
    setLogs(logs.filter((_, i) => i !== indexToDelete));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">MediLog 📒</h1>
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-4">
        <LogForm onAddLog={addLog} />
        <LogList logs={logs} onDelete={deleteLog} />
      </div>
    </div>
  );
}
