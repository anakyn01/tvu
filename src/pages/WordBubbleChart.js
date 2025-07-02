// src/components/EmotionBubbleChart.js

import React, { useEffect, useState } from 'react';

const words = [
  { text: '좋다', value: 80, color: '#2196f3' },
  { text: '바라다', value: 65, color: '#4caf50' },
  { text: '성공', value: 70, color: '#2196f3' },
  { text: '논의하다', value: 55, color: '#4caf50' },
  { text: '의심되다', value: 50, color: '#f44336' },
  { text: '잘하다', value: 75, color: '#2196f3' },
  { text: '어렵다', value: 45, color: '#f44336' },
  { text: '훌륭한 활동', value: 60, color: '#4caf50' },
  { text: '종결한', value: 42, color: '#f44336' },
  { text: '강조하다', value: 35, color: '#f44336' },
];

const generatePositionedBubbles = () => {
  const width = 600;
  const height = 400;
  const bubbles = [];

  words.forEach((word, index) => {
    const radius = word.value * 0.5;
    let x, y;
    let tries = 0;
    let overlaps = true;

    while (overlaps && tries < 1000) {
      x = Math.random() * (width - radius * 2) + radius;
      y = Math.random() * (height - radius * 2) + radius;
      overlaps = false;

      for (let b of bubbles) {
        const dx = x - b.x;
        const dy = y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < radius + b.radius + 10) {
          overlaps = true;
          break;
        }
      }

      tries++;
    }

    bubbles.push({ ...word, x, y, radius });
  });

  return bubbles;
};

const EmotionBubbleChart = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    setBubbles(generatePositionedBubbles());
  }, []);

  return (
    <div className="my-4 bg-white p-4 rounded shadow">
      <h5 className="fw-bold mb-3">감성 키워드 워드버블</h5>
      <svg width="100%" height="400" viewBox="0 0 600 400">
        {bubbles.map((b, i) => (
          <g key={i}>
            <circle cx={b.x} cy={b.y} r={b.radius} fill={b.color} opacity="0.3" />
            <text
              x={b.x}
              y={b.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={b.radius * 0.4}
              fill="#000"
              fontWeight="bold"
            >
              {b.text}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default EmotionBubbleChart;
