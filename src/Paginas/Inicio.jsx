import SVG from '../SVG/SVG';
import Separador from '../Componentes/Separador';
import Header from '../Componentes/Header';

const Inicio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
        <div className='flex flex-col items-center justify-start w-full grow bg-gradient-to-b from-[#069FD6] to-[#5EFADB]'>
          <Separador className='h-[120px]'/>
          {/* Header */}
          <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
          {/* Main Content */}
          <div className='flex items-center justify-center grow w-full'>
              <SVG.KarmeleFill width='302' height='95' className='shadow-[0px_4px_4px_0px_#3A59D1]'/>
          </div>
        </div>
    </>
  );
};

export default Inicio;