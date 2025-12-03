import { useState } from "react";

const UseCallbackHook = () => {
    const [counter, setCounter] = useState(0);
    const [active, setActive] = useState(true);

    const colors = {
        fontWeight: "bold",
        color: active ? 'green' : 'red',
    }

    const onIncrement = () => {
        setCounter((prevState) => prevState + 1);
    }

    const onToggle = () => {
        setActive(prevState => !prevState);
    }

    return (
        <div className="container">
            <code>useCallback hook:</code>
            <div className="w-75 p-5 mt-5 mx-auto border rounded-3">
                <h1 className="fs-3 fw-light text-center">useCallback hook</h1>
                <p style={colors} className="text-center">User activated {counter}</p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success mx-2" type="button" onClick={onIncrement}>
                        Increase
                    </button>
                    <button className="btn btn-warning mx-2" type="button" onClick={onToggle}>
                        Toggle
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UseCallbackHook;