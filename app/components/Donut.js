// import { useState, useEffect } from "react";

// const Donut = ({ percent }) => {
//   const [offset, setOffset] = useState(0);
//   const circumference = 440;
//   const strokeDashoffset = circumference - (percent / 100) * circumference;

//   useEffect(() => {
//     setOffset(strokeDashoffset);
//   }, [setOffset, strokeDashoffset]);

//   return (
//     <svg className="w-240 h-240">
//       <defs>
//         <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#307FE2" />
//           <stop offset="100%" stopColor="#FCD34D" />
//         </linearGradient>
//       </defs>
//       <circle
//         className="stroke-current"
//         cx="120"
//         cy="120"
//         r="70"
//         strokeWidth="4"
//         fill="transparent"
//         stroke={`url(#gradient) ${percent}% #FCD34D`} // apply the gradient to the stroke and change the stroke color to #FCD34D when the progress is complete
//         strokeDasharray={`${percent} ${100 - percent}`}
//         strokeDashoffset={offset}
//         transform="rotate(-90 120 120)"
//       />
//       <text
//         className="text-3xl font-semibold text-center"
//         x="31%"
//         y="33%"
//         dy=".3em"
//       >
//         {percent}%
//       </text>
//     </svg>
//   );
// };

// export default Donut;
import React from "react";

const CircularProgressBar = ({ percent }) => {
  const radius = 70;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  const gradientId = `gradient-${percent}`;
  const gradientStyle = {
    stroke: `linear-gradient(90deg, #4F46E5, #F472B6)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <svg height={radius * 2} width={radius * 2}>
      <defs>
        <linearGradient id={gradientId}>
          <stop offset="6%" stopColor="##307FE2" />
          <stop offset="100%" stopColor="##307FE2" />
        </linearGradient>
      </defs>
      <circle
        stroke={`url(#${gradientId})`}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{
          strokeDashoffset: offset,
          stroke: `url(#gradient)`,
        }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x={radius / 1.5}
        y={radius * 1.1}
        className="text-2xl text-gray-700 font-bold text-center"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
