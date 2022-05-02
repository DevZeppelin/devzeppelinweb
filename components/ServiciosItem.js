
import Fade from "react-reveal/Fade";

export const ServiciosItem = ({ titulo, icono }) => {
  return (
    <Fade bottom>
      <div className="w-full md:w-1/3 p-4">
        <div className="space-y-4 h-full text-center bg-primary hover:bg-darkGray hover:text-yellow border border-yellow-700 border-opacity-75 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-800 text-indigo-400 mb-4">
            {icono}
          </div>
          <h2 className="text-yellow uppercase">{titulo}</h2>
      
        </div>
      </div>
    </Fade>
  );
};
