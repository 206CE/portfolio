import React, { useState, useEffect } from 'react';

const HexCounter: React.FC = () => {
  const [symbol, setSymbol] = useState<string>('E');
  const [hex, setHex] = useState<number>(0x0e);
  const [highlight, setHighlight] = useState<boolean>(false);

  const delay = (currentHex: number): number => {
    if (currentHex === 0x0e || currentHex === 0xce || currentHex === 0x8ce) return 2000;
    if (currentHex < 0x50) return 90;
    if (currentHex < 0xce) return 50;
    if (currentHex < 0x800) return 15;
    return 5;
  };

  useEffect(() => {
    const update = () => {
      const newHex = hex + 1;

      switch (newHex) {
        case 0x0e:
          setSymbol('E');
          setHighlight(true);
          break;
        case 0xce:
          setSymbol('CE');
          setHighlight(true);
          break;
        case 0x8ce:
          setSymbol('8CE');
          setHighlight(true);
          break;
        default:
          setHighlight(false);
      }

      setHex(newHex);

      if (newHex <= 0x8d0) {
        setTimeout(update, delay(newHex));
      }
    };

    const timeoutId = setTimeout(update, delay(hex));
    return () => clearTimeout(timeoutId);
  }, [hex]);

  const hexStr = `0x${hex.toString(16).toUpperCase()}`;

  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#aaa',
    fontFamily: "'Orbitron', sans-serif",
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#0f0f0f',
    margin: 0,
  };

  const symbolStyle: React.CSSProperties = {
    fontSize: '5rem',
    color: '#fcd34d',
    opacity: 1,
    transition: 'all 0.5s ease',
    fontWeight: highlight ? 'bold' : 'normal',
    textShadow: highlight ? '0 0 10px #fcd34d' : 'none',
  };

  const hexCounterStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    color: highlight ? '#fcd34d' : '#555',
    transition: 'all 0.3s ease',
    fontWeight: highlight ? 'bold' : 'normal',
    textShadow: highlight ? '0 0 10px #fcd34d' : 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={symbolStyle}>{symbol}</div>
      <div style={hexCounterStyle}>{hexStr}</div>
    </div>
  );
};

export default HexCounter;
