import { useState, useEffect } from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null); // Estado inicial como `null`

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);

    checkIsDesktop(); // Realizar la comprobación inicial al montar el componente
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  return isDesktop;
};

export default useIsDesktop;
