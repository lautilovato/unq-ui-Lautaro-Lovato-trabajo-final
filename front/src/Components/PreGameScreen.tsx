interface PreGameScreenProps {
  onStart: () => void;
}

function PreGameScreen({ onStart }: PreGameScreenProps) {
  return (
    <div className="w-full flex flex-col items-center py-8 gap-6 animate-fade-in text-center">
      <h2 className="text-3xl font-extrabold text-white tracking-widest uppercase">¡Prepárate!</h2>

      <p className="text-white/80">El contador se iniciará en cuanto envíes tu primera palabra.</p>

      <button
        onClick={onStart}
        className="w-full mt-4 bg-accent text-primary font-bold py-3 px-6 border-2 border-accent hover:bg-transparent hover:text-accent transition-all tracking-widest uppercase shadow-lg"
      >
        ¡A Jugar!
      </button>
    </div>
  );
}

export default PreGameScreen;