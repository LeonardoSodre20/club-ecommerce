import React from "react";

const useAnimation = () => {
  const [translate, setTranslate] = React.useState<boolean>(false);

  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleTranslateContentForCenter = () => {
    setTranslate(!translate);
    if (!translate) {
      const cardRect = cardRef.current?.getBoundingClientRect();
      const cardWidth = cardRect?.width || 0;
      const cardHeight = cardRect?.height || 0;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const translateX = windowWidth / 2 - cardWidth / 2 - cardRect!.left;
      const translateY = windowHeight / 2 - cardHeight / 2 - cardRect!.top;
      cardRef.current!.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.5)`;
      cardRef.current!.style.boxShadow = "0 4px 4px 4px rgba(0, 0, 0, 0.25)";
      cardRef.current!.style.border = "2px solid rgba(0, 0, 0, 0.5)";
      cardRef.current!.style.zIndex = "1000000";
    } else {
      cardRef.current!.style.transform = "";
      cardRef.current!.style.boxShadow = "";
      cardRef.current!.style.border = "";
      cardRef.current!.style.zIndex = "";
    }
  };

  return {
    cardRef,
    handleTranslateContentForCenter,
  };
};

export { useAnimation };
