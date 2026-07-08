interface WordChainProps {
  words: string[];
}

function WordChain({ words }: WordChainProps) {
  return (
    <div className="w-full min-h-[120px] max-h-[200px] overflow-y-auto bg-white/5 p-4 border border-white/10 flex flex-wrap gap-2 content-start">
      {words.length === 0 ? (
        <p className="text-white/50 text-sm w-full text-center italic mt-8">
          Ingresa cualquier palabra para comenzar.
        </p>
      ) : (
        words.map((word, index) => (
          <div key={`${word}-${index}`} className="flex items-center gap-2">
            <span className="bg-accent text-primary px-3 py-1 font-bold uppercase text-sm rounded-sm">
              {word}
            </span>
            {index < words.length - 1 && <span className="text-white/50">→</span>}
          </div>
        ))
      )}
    </div>
  );
}

export default WordChain;