import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HowToPlayModal from '../Components/HowToPlayModal';

function Home() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-4 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat bg-fixed"> 
      
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-primary/65"></div>

      {/* PRINCIPAL CONTAINER */}
      <div className="relative z-10 w-full max-w-md bg-primary border-2 border-white p-8 sm:p-10 flex flex-col items-center shadow-2xl">
        
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-widest mb-4 text-white text-center uppercase leading-tight">
          Palabras
          <span className="block text-accent">Encadenadas</span>
        </h1>
        
        <p className="text-sm text-white/80 mb-10 text-center font-light tracking-wide">
          Forma la cadena más larga antes de que se agote el tiempo.
        </p>

        {/* ACTIONS BUTTONS */}
        <div className="w-full flex flex-col gap-5">
          
          <button 
            onClick={() => navigate('/game')}
            className="w-full bg-transparent hover:bg-accent text-accent hover:text-primary font-bold py-3 px-6 border-2 border-accent transition-all tracking-widest uppercase shadow-lg"
          >
            Jugar
          </button>
          
          <button 
            onClick={() => navigate('/leaderboard')}
            className="w-full bg-transparent hover:bg-white text-white hover:text-primary font-bold py-3 px-6 border-2 border-white transition-all tracking-widest uppercase"
          >
            Leaderboard
          </button>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 text-xs text-white/70 hover:text-accent transition-colors tracking-widest uppercase underline underline-offset-4"
        >
          ¿Cómo se juega?
        </button>
      </div>

      <HowToPlayModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Home