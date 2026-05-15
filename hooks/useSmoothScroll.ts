import { useCallback } from "react";

export function useSmoothScroll() {
  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      
      let targetPosition = 0;
      
      if (path !== "#top") {
        const targetId = path.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        } else {
          return;
        }
      }

      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1500; // 1.5 seconds for a nice slow cinematic scroll
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function (ease-in-out cubic) for a buttery smooth stop
        const ease = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  }, []);

  return scrollTo;
}
