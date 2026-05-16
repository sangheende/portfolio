import { useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP); 

const HeroKeyword = ({ type, content }) => {
    const container = useRef();

    useGSAP(() => {
	// gsap code here...
	gsap.to('.keyword__item', { x: 360 }); // <-- automatically reverted
},{ scope: container }); 
    return <div ref={container} className={`keyword__item ${type}`}>
        {type === 'img'
            ? <img src={`../img/hero/${content}`} alt={content} />
            : content
        }
    </div>
}

export default HeroKeyword