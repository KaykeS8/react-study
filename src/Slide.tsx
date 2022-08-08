import React from "react";
import { Button } from "@chakra-ui/react";
import styles from "./Slide.module.css";

interface PropsSlide {
  slides: {
    id: string;
    text: string;
  }[];
}

export const Slide = ({ slides }: PropsSlide) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef<any>();

  React.useEffect(() => {
    const { width } = contentRef.current?.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
        ref={contentRef}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <Button onClick={slidePrev}>Anterior</Button>
        <Button onClick={slideNext}>Próximo</Button>
      </nav>
    </section>
  );
};
