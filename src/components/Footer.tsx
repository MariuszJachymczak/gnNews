import { useEffect, useState } from "react";

interface FooterProps {
  totalResults: number;
}

const Footer = ({ totalResults }: FooterProps) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="fixed-bottom bg-dark text-light py-2 text-end">
      <span>{currentTime}</span>
      <p>Number of Articles: {totalResults}</p>
    </footer>
  );
};

export default Footer;
