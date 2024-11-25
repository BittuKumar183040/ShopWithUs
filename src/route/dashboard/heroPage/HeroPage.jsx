import shoeThumb from './asset/shoeThumb.jpg';

const HeroPage = () => {
    
    return (
        <div className=' flex justify-center items-center overflow-hidden bg-slate-600 relative'>
            <img src={shoeThumb} alt='' className=' object-cover h-72 w-full object-center' />
            <img src={shoeThumb} alt='' className=' absolute object-cover h-72 w-full opacity-50 animate-ping' />
        </div>
    )
}

export default HeroPage