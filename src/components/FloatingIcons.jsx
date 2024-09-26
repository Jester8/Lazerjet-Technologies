import React from "react";
import {
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Settings,
  Laptop,
  Monitor,
  Wifi,
  Server,
  Globe,
  Keyboard,
} from "lucide-react"; // New icons added

const iconComponents = [
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Settings,
  Laptop,
  Monitor,
  Wifi,
  Server,
  Globe,
  Keyboard,
];

// Function to generate random positions without overlap
const generateUniquePositions = (count) => {
  const positions = [];
  const safeDistance = 15;

  while (positions.length < count) {
    const top = Math.random() * 80;
    const left = Math.random() * 80;
    let isSafe = true;

    for (let pos of positions) {
      const distance = Math.sqrt(
        Math.pow(top - pos.top, 2) + Math.pow(left - pos.left, 2)
      );
      if (distance < safeDistance) {
        isSafe = false;
        break;
      }
    }

    if (isSafe) {
      positions.push({ top, left });
    }
  }

  return positions;
};

const FloatingIcon = ({ Icon, top, left, delay }) => (
  <div
    className="absolute text-gray-300 opacity-20 animate-float"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: "2s",
    }}
  >
    <Icon size={34} /> {/* Icon size */}
  </div>
);

const FloatingIcons = () => {
  const positions = generateUniquePositions(iconComponents.length);

  return (
    <>
      {iconComponents.map((Icon, index) => (
        <FloatingIcon
          key={index}
          Icon={Icon}
          top={positions[index].top} // Use unique non-overlapping positions
          left={positions[index].left}
          delay={Math.random() * 1} // Faster delays
        />
      ))}
    </>
  );
};

export default FloatingIcons;
