"use client";

import { useState, useEffect, useRef } from "react";

interface NumberCounterProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  onComplete?: () => void;
  className?: string;
  threshold?: number; // Umbral de visibilidad para Intersection Observer
}

const NumberCounter = ({
  end,
  start = 0,
  duration = 4000,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = ",",
  onComplete,
  className = "",
  threshold = 0.1, // Por defecto, cuando el 10% del elemento es visible
}: NumberCounterProps) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<number>(start);
  const startTimeRef = useRef<number | null>(null);
  const requestRef = useRef<number | null>(null);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Formatea el número según las opciones
  const formatNumber = (value: number): string => {
    const fixed = value.toFixed(decimals);
    const parts = fixed.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return `${prefix}${parts.join(".")}${suffix}`;
  };

  // Configurar Intersection Observer para detectar visibilidad
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Una vez que detectamos visibilidad, podemos desconectar el observer
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // Iniciar la animación solo cuando el elemento sea visible
  useEffect(() => {
    if (!isVisible) return;

    // Resetea el contador
    setCount(start);
    countRef.current = start;
    startTimeRef.current = null;

    // Cancela animación previa si existe
    if (requestRef.current !== null) {
      cancelAnimationFrame(requestRef.current);
    }

    // Aplica el retraso si es necesario
    const delayTimeout = setTimeout(() => {
      // Función de animación
      const animate = (timestamp: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }

        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);

        // Función de easing para hacer la animación más natural
        const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
        const easedProgress = easeOutQuart(progress);

        // Calcula el valor actual
        const currentValue = start + (end - start) * easedProgress;
        countRef.current = currentValue;
        setCount(currentValue);

        // Continúa la animación o finaliza
        if (progress < 1) {
          requestRef.current = requestAnimationFrame(animate);
        } else {
          // Asegura que el valor final sea exactamente el especificado
          setCount(end);
          if (onComplete) {
            onComplete();
          }
        }
      };

      // Inicia la animación
      requestRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVisible, start, end, duration, delay, onComplete]);

  return (
    <span ref={elementRef} className={className}>
      {formatNumber(count)}
    </span>
  );
};

export default NumberCounter;
