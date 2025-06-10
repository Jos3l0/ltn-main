"use client";

import { ReactElement, useEffect, useRef, useState } from "react";

type AnimationDirection = "up" | "down" | "left" | "right";
type AnimationType = "fade" | "slide" | "scale" | "blur";

interface AnimateProps {
  children: ReactElement;
  type?: AnimationType;
  direction?: AnimationDirection;
  delay?: number;
  threshold?: number;
  distance?: number;
  duration?: number;
}

const Animate = ({
  children,
  type = "fade",
  direction = "up",
  delay = 0,
  threshold = 0.2,
  distance = 50,
  duration = 0.5,
}: AnimateProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  // Calcula la transformación basada en el tipo y dirección
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `translateY(${distance}px)`;
        case "down":
          return `translateY(-${distance}px)`;
        case "left":
          return `translateX(-${distance}px)`;
        case "right":
          return `translateX(${distance}px)`;
        default:
          return `translateY(${distance}px)`;
      }
    }
    return type === "scale" ? "scale(1)" : "translate(0)";
  };

  // Calcula transformación inicial para scale
  const getInitialTransform = () => {
    if (type === "scale") {
      return isVisible ? "scale(1)" : "scale(0.8)";
    }
    return getTransform();
  };

  // Calcula el filtro para efecto blur
  const getFilter = () => {
    if (type === "blur") {
      return isVisible ? "blur(0)" : "blur(10px)";
    }
    return "none";
  };

  // Determina las propiedades para la transición CSS
  const getTransitionProperties = () => {
    const properties = ["opacity"];

    if (type === "fade" || type === "slide") {
      properties.push("transform");
    }

    if (type === "scale") {
      properties.push("transform");
    }

    if (type === "blur") {
      properties.push("filter");
    }

    return properties.join(", ");
  };

  // Estilos para la animación
  const animateStyle = {
    opacity: isVisible ? 1 : 0,
    transform: getInitialTransform(),
    filter: getFilter(),
    transition: `${getTransitionProperties()} ${duration}s ease-out`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={ref} style={animateStyle}>
      {children}
    </div>
  );
};

export default Animate;
