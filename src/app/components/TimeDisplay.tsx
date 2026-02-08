import { useState, useEffect } from 'react';

export function TimeDisplay() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed top-6 left-6 z-50 font-mono tracking-wider text-[14px]"
      style={{
        color: '#00ff66',
        textShadow: '0 0 8px rgba(0, 255, 102, 0.5)',
        opacity: 0.6,
      }}
    >
      {time}
    </div>
  );
}
