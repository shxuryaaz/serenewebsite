import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [scale, setScale] = useState(0.95);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setScale(1);
      setOpacity(1);
    }, 100);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#152238] flex items-center justify-center">
      <div
        className="w-96 h-96 transition-all duration-1000 ease-out"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity
        }}
      >
        <img
          src="/serene.png"
          alt="Serene MUN Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
