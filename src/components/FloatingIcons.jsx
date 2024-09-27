import React from "react";
import { useTheme } from "../components/ThemeContext";
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
  Smartphone,
  Tablet,
  Cpu,
  HardDrive,
  Printer,
  Mouse,
  Headphones,
  Camera,
  Mic,
  Speaker,
  Tv,
  Radio,
  Bluetooth,
  Cast,
  Rss,
  Share2,
  Link,
  Paperclip,
  File,
  Folder,
  Upload,
  Download,
  Send,
  Inbox,
  Mail,
  MessageSquare,
  Phone,
  Video,
  Image,
  Music,
  Film,
  Play,
  Pause,
  FastForward,
  Rewind,
  SkipBack,
  SkipForward,
  Volume2,
  Layers,
  Bell,
  Calendar,
} from "lucide-react";

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
  Smartphone,
  Tablet,
  Cpu,
  HardDrive,
  Printer,
  Mouse,
  Headphones,
  Camera,
  Mic,
  Speaker,
  Tv,
  Radio,
  Bluetooth,
  Cast,
  Rss,
  Share2,
  Link,
  Paperclip,
  File,
  Folder,
  Upload,
  Download,
  Send,
  Inbox,
  Mail,
  MessageSquare,
  Phone,
  Video,
  Image,
  Music,
  Film,
  Play,
  Pause,
  FastForward,
  Rewind,
  SkipBack,
  SkipForward,
  Volume2,
  Layers,
  Bell,
  Calendar,
];

// Function to generate random positions without overlap
const generateUniquePositions = (count) => {
  const positions = [];
  const safeDistance = 10; // Reduced safe distance to fit more icons

  while (positions.length < count) {
    const top = Math.random() * 90 + 5; // Ensure icons are not too close to the edges
    const left = Math.random() * 90 + 5;
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

const FloatingIcon = ({ Icon, top, left, delay, isDarkMode }) => (
  <div
    className={`absolute ${
      isDarkMode ? "text-white" : "text-gray-900"
    } opacity-20 animate-float`}
    style={{
      top: `${top}%`,
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: "3s",
    }}
  >
    <Icon size={24} /> {/* Reduced icon size */}
  </div>
);

const FloatingIcons = () => {
  const { isDarkMode } = useTheme();
  const positions = generateUniquePositions(iconComponents.length);

  return (
    <>
      {iconComponents.map((Icon, index) => (
        <FloatingIcon
          key={index}
          Icon={Icon}
          top={positions[index].top}
          left={positions[index].left}
          delay={Math.random() * 2}
          isDarkMode={isDarkMode}
        />
      ))}
    </>
  );
};

export default FloatingIcons;
