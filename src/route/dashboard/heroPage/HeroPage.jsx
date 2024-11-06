import { LazyLoadImage } from 'react-lazy-load-image-component';
import shoeWhite from './asset/shoeWhite.webp';

const HeroPage = () => {
    
    return (
        <div className=' bg-white'>
            <LazyLoadImage
                src={shoeWhite} 
                alt=''
                effect='blue' 
            />
        </div>
    )
}

export default HeroPage