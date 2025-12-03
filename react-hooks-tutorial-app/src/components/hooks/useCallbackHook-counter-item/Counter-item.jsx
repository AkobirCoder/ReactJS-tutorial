import React, { useEffect, useState } from 'react'

const CounterItem = ({counterGenerate}) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const newItem = counterGenerate();

        setItem(newItem);
    }, [counterGenerate]);
    
    return (
        <div>
            <ul className='d-flex align-items-center flex-column'>
                {
                    item.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default CounterItem;