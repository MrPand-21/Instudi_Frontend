'use client'
import { useMedia } from 'use-media';

const useTheme = (): boolean => {
    const prefersDarkTheme = useMedia('(prefers-color-scheme: dark)');
    return prefersDarkTheme;
};

export default useTheme;