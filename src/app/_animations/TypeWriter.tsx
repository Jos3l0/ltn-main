"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number; // Velocidad de escritura en ms
  delay?: number; // Retraso inicial antes de comenzar a escribir
  cursor?: boolean; // Mostrar cursor o no
  onComplete?: () => void; // Callback cuando termina de escribir
  className?: string;
}

const TypeWriter = ({
  text,
  speed = 50,
  delay = 0,
  cursor = true,
  onComplete,
  className = "",
}: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset cuando cambia el texto
    setDisplayedText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  useEffect(() => {
    // No continuar si ya hemos completado el texto
    if (currentIndex >= text.length) {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
      return;
    }

    // Retraso inicial antes de comenzar
    const initialTimeout = setTimeout(
      () => {
        // Timer para añadir caracteres uno por uno
        const timer = setTimeout(() => {
          setDisplayedText((current) => current + text[currentIndex]);
          setCurrentIndex((current) => current + 1);
        }, speed);

        return () => clearTimeout(timer);
      },
      currentIndex === 0 ? delay : 0
    );

    return () => clearTimeout(initialTimeout);
  }, [currentIndex, delay, onComplete, speed, text]);

  // Clase CSS para el cursor parpadeante, solo si cursor=true y no ha terminado
  const cursorClass = cursor
    ? isComplete
      ? "after:content-['|'] after:ml-1 after:animate-blink after:opacity-0"
      : "after:content-['|'] after:ml-1 after:animate-blink"
    : "";

  return <span className={`${className} ${cursorClass}`}>{displayedText}</span>;
};

export default TypeWriter;
