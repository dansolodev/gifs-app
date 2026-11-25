import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
    const { counter, handledAdd, handledSubstract, handleReset } = useCounter(2)

    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <h1>Counter: {counter}</h1>

            <div
                style={{ display: 'flex', gap: '10px' }}
            >
                <button onClick={handledAdd}>+1</button>
                <button onClick={handledSubstract}>-1</button>
                <button onClick={handleReset}>Reset</button>
            </div>

        </div>
    );
};