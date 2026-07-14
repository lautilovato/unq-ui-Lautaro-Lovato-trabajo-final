import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-4 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="absolute inset-0 bg-primary/65"></div>

      <div className="relative z-10 w-full max-w-md bg-primary border-2 border-white p-8 sm:p-10 flex flex-col items-center shadow-2xl text-center">
        <h1 className="text-8xl font-black text-accent mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-widest mb-4 text-white uppercase">
          Página no encontrada
        </h2>
        <p className="text-sm text-white/80 mb-10 font-light tracking-wide">
          La página que estás buscando no existe o fue movida.
        </p>
        <Link to="/" className="w-full max-w-xs bg-transparent hover:bg-accent text-accent hover:text-primary font-bold py-3 px-6 border-2 border-accent transition-all tracking-widest uppercase shadow-lg">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFound;