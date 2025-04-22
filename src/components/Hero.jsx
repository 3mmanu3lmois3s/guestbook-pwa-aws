// src/components/Hero.jsx
export default function Hero() {
    return (
      <div
        className="hero relative h-72 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://picsum.photos/1600/900?random=1')",
        }}
      >
        {/* Overlay semitransparente negro */}
        <div className="absolute inset-0 bg-black/40"></div>
  
        <div className="hero-content z-10 text-center text-white px-4">
          <div className="max-w-lg">
            <h1 className="mb-4 text-4xl md:text-6xl font-heading">
              Bienvenido
            </h1>
            <p className="mb-6 text-lg md:text-xl font-body">
              Comparte tu experiencia en nuestro hotel 5 estrellas
            </p>
            <a href="#form" className="btn btn-secondary btn-lg">
              Dejar un mensaje
            </a>
          </div>
        </div>
      </div>
    );
  }
  