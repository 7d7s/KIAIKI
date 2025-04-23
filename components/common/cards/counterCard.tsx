"use client"
import React, { useEffect, useState } from 'react';

type CounterCardProps = {
  value: number;
  suffix?: string;
//   label: string;
  duration?: number;
};

const CounterCard: React.FC<CounterCardProps> = ({
  value,
  suffix = '',
//   label,
  duration = 2500,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 30;
    const totalIncrements = duration / incrementTime;
    const increment = value / totalIncrements;

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [value, duration]);

  return (
    <div className="transition-transform duration-300">
      <h2 className="md:text-6xl text-4xl font-bold text-primary-accent">
        {count}
        {suffix}
      </h2>
      {/* <p className="text-gray-700 mt-2">{label}</p> */}
    </div>
  );
};

export default CounterCard;