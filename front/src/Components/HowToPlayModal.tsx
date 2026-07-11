interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function HowToPlayModal({ isOpen, onClose }: HowToPlayModalProps) {
  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-primary border-2 border-white p-8 sm:p-10 max-w-2xl w-full shadow-2xl flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-accent transition-colors"
          aria-label="Cerrar modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-accent tracking-widest uppercase mb-6 text-center">
          ¿Cómo se juega?
        </h2>

        <div className="text-white/90 space-y-4 font-light tracking-wide text-center sm:text-left">
          <p>
            El objetivo de "Palabras Encadenadas" es simple: formar la cadena de palabras más larga posible antes de que se agote el tiempo.
          </p>
          <ul className="list-disc list-inside space-y-3 text-left bg-white/5 p-4 my-4 border border-white/10">
            <li>Empiezas escribiendo cualquier palabra válida en español.</li>
            <li>La siguiente palabra debe comenzar con la <strong>última letra</strong> de la palabra anterior.</li>
            <li>Tienes <strong>15 segundos</strong> para escribir cada palabra. ¡No dejes que el tiempo se agote!</li>
            <li>No puedes repetir palabras que ya se han usado en la partida.</li>
            <li>Tu puntuación es la suma de las longitudes de todas las palabras que has encadenado.</li>
          </ul>
          <p className="font-bold text-white text-center">¡Demuestra tu agilidad mental y tu vocabulario!</p>
        </div>
      </div>
    </div>
  );
}

export default HowToPlayModal;