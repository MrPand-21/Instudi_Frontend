'use client'
import { useEffect, useState } from 'react';
import logger from '../logger';

export function useWindowWidth() {

    const [windowWidth, setWindowWidth] = useState(0);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
        }
        logger("zorttt")
    }, []);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
}