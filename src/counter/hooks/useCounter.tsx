import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const handledAdd = () => {
        setCounter(counter + 1);
    };

    const handledSubstract = () => {
        setCounter(prevState => prevState - 1);
    };

    const handleReset = () => {
        setCounter(initialValue)
    };

    return {
        // Props
        counter,

        // Methods / Actions
        handledAdd,
        handledSubstract,
        handleReset
    }

};
