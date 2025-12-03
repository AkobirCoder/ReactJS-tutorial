import React, { Fragment, useEffect, useState } from 'react'

const CounterItem = ({counterGenerate}) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const newItem = counterGenerate(8);

        setItem(newItem);

        console.log('Render');
    }, [counterGenerate]);
    
    return (
        <Fragment>
            <ul className='d-flex align-items-center flex-column'>
                {
                    item.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default CounterItem;