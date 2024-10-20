import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const LineContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CurvedLine = ({ startX, startY, controlX, controlY, endX, endY, color }) => {
  return (
    <path
      d={`M${startX},${startY} C${controlX},${controlY} ${controlX},${controlY} ${endX},${endY}`}
      stroke={color}
      fill="transparent"
      strokeWidth={2} // Adjust as needed
    />
  );
};

const CursorAnimation = () => {
  const [lines, setLines] = useState([]);
  const lineContainerRef = useRef(null);

  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const newLines = [...lines];

    // Define control points for the curve
    const controlX = x + 50; // Example control point
    const controlY = y - 50; // Example control point
    const endX = x + 100; // End point of the line
    const endY = y; // Same Y position to keep it level

    newLines.push({
      startX: x,
      startY: y,
      controlX,
      controlY,
      endX,
      endY,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    });

    setLines(newLines);

    // Remove old lines if there are too many
    if (newLines.length > 100) {
      newLines.shift();
      setLines(newLines);
    }
  };

  useEffect(() => {
    lineContainerRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      lineContainerRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <LineContainer ref={lineContainerRef}>
      {lines.map((line, index) => (
        <CurvedLine
          key={index}
          startX={line.startX}
          startY={line.startY}
          controlX={line.controlX}
          controlY={line.controlY}
          endX={line.endX}
          endY={line.endY}
          color={line.color}
        />
      ))}
    </LineContainer>
  );
};

export default CursorAnimation;
