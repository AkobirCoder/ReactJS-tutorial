import { useCallback, useState } from "react";
import CounterItem from "./useCallbackHook-counter-item/Counter-item";

const UseCallbackHook = () => {
    const [counter, setCounter] = useState(0);
    const [active, setActive] = useState(true);
    // const [direction, setDirection] = useState('increment');

    const colors = {
        fontWeight: "bold",
        color: active ? 'green' : 'red',
    }

    const onIncrement = () => {
        // setDirection('increment');
        setCounter((prevState) => prevState + 1);
    }

    const onDecrement = () => {
        // setDirection('decrement');
        setCounter((prevState) => prevState - 1);
    }

    const onToggle = () => {
        setActive(prevState => !prevState);
    }

    // const counterGenerate = useCallback((count) => { // useCallback hookida uning callback function qismiga attribut berish mumkin va bu attribut hook o'zgaruvchi sifatida saqlangan funksiyaning parametriga ham beriladi.
    //     return new Array(counter).fill('').map((_, index) => {
    //         // return `Counter number ${index + 1}`;
    //         return `Counter number ${index + count}`;
    //     });
    // }, [counter]);

    // const counterGenerate = useCallback((count) => {
    //     return new Array(counter).fill('').map((_, index) => {
    //         return direction === 'increment'
    //             ? `Counter number: ${index + count}`
    //             : `Counter number: ${index + count - 1}`
    //     });
    // }, [counter, direction]);

    const counterGenerate = useCallback((count, type) => {
        return new Array(Math.max(counter, 0)).fill('').map((_, index) => {
            if (type === 'inc') {
                return `Counter number ${index + count}`;
                
            }

            return `Counter number ${index + count - 1}`;
        });
    }, [counter]);

    // console.log(counterGenerate());

    // useCallback hooki ham xuddi useEffect hooki kabi deps(qaramlar) beriladi va xuddi shu berilgan deps asosida hook vazifasini bajaradi.

    return (
        <div className="container mb-5">
            <code>useCallback hook:</code>
            <div className="w-75 p-5 mt-5 mx-auto border rounded-3">
                <h1 className="fs-3 fw-light text-center">useCallback hook</h1>
                <p style={colors} className="text-center">User activated {counter}</p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success mx-2" type="button" onClick={onIncrement}>
                        Increase
                    </button>
                    <button className="btn btn-danger mx-2" type="button" onClick={onDecrement}>
                        Decrement
                    </button>
                    <button className="btn btn-warning mx-2" type="button" onClick={onToggle}>
                        Toggle
                    </button>
                </div>
                <div className="mt-4">
                    <CounterItem counterGenerate={counterGenerate} />
                </div>
            </div>
            <hr />
        </div>
    );
}

export default UseCallbackHook;