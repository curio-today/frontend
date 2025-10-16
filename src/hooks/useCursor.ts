import { useState } from "react";

type Cursor<TCurrentIndex = number | null> = {
    moveUp: () => void,
    moveDown: () => void,

    currentIndex: TCurrentIndex,
}

export const useCursor = <T extends unknown[]>(array: T): Cursor => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const arrayLastIndex = array.length - 1;

    return {
        moveUp: () => setCurrentIndex(prev => {
            if (prev === null || prev === 0) return arrayLastIndex;
            return prev + 1;
        }),
        moveDown: () => setCurrentIndex(prev => {
            if (prev === null || prev === arrayLastIndex) return 0;
            return prev - 1;
        }),

        currentIndex,
    }
}


export default useCursor;