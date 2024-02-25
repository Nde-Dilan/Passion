import { useState,useEffect } from "react";
//treshold -> seuil
export const useScrollTop = (treshold=10) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{

        const handleScroll = () => {
            if(window.scrollY > treshold){
                console.log(window.scrollY)
                setScrolled(true);
            }else{
                console.log("window.scrollY: "+window.scrollY)
                setScrolled(false);
            }
        }

        window.addEventListener('scroll',handleScroll);

        return () => window.removeEventListener('scroll',handleScroll);

    },[treshold])

    return scrolled;
}