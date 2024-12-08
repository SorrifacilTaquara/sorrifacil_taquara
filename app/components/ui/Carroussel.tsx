import { useState, useEffect, useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface VideoSlide {
  src: string;
  type: string; // Exemplo: "video/mp4"
}

interface CarouselProps {
  slides: VideoSlide[];
}

const VideoCarousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Avança para o próximo vídeo
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Volta para o vídeo anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Lógica para tocar/parar vídeos com base no índice ativo
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (isVisible && index === currentIndex) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0; // Reinicia o vídeo
        }
      }
    });
  }, [currentIndex, isVisible]);

  // Configura o Intersection Observer para detectar visibilidade
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // O carrossel precisa estar pelo menos 50% visível
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div ref={carouselRef} className="carousel-container">
      {/* Botão para voltar */}
      <button onClick={prevSlide} className="prev-btn">
        <ArrowBackIosIcon />
      </button>

      {/* Slides de vídeos */}
      <div className="slides-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{
              transform: `translateX(${-currentIndex * 100}%)`,
            }}
          >
            <video
              ref={(el) => {
                if (el) {
                  videoRefs.current[index] = el;
                }
              }}
              src={slide.src}
              controls
              muted={isVisible}
              className="video-element"
              onEnded={nextSlide} // Avança automaticamente após o vídeo terminar
            />
          </div>
        ))}
      </div>

      {/* Botão para avançar */}
      <button onClick={nextSlide} className="next-btn">
        <ArrowForwardIosIcon />
      </button>

      {/* Indicadores */}
      <div className="indicators">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={index === currentIndex ? "active" : ""}></button>
        ))}
      </div>

      {/* Estilos */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          overflow: hidden;
          width: 25rem;
          height: 30rem;
          pointer-events: auto; /* Garante que cliques sejam detectados */
        }

        .slides-wrapper {
          display: flex;
          align-items: center;
          transition: transform 0.5s ease-in-out;
        }

        .slide {
          min-width: 100%;
          /* margin-left: 3.65rem; */
        }
        .slide:first-child {
          margin-left: 3.65rem;
        }

        .video-element {
          height: 30rem;
          border: 1rem solid white;
          position: relative;
          z-index: 5; /* Está acima do fundo, mas abaixo dos botões */
        }

        /* .prev-btn,
        .next-btn {
          position: absolute;
          top: 50%;
          z-index: 100;
          transform: translateY(-50%);
          color: white;
          border: none;
          cursor: pointer;
        } */

        .prev-btn,
        .next-btn {
          position: absolute;
          top: 50%;
          z-index: 10; /* Certifique-se de que está acima dos vídeos */
          transform: translateY(-50%);

          color: white;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
        }

        .prev-btn {
          left: 10px;
        }

        .next-btn {
          right: 10px;
        }

        .indicators {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin-top: 10px;
        }

        .indicators button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: lightgray;
          cursor: pointer;
        }

        .indicators button.active {
          background: gray;
        }
      `}</style>
    </div>
  );
};

export default VideoCarousel;
