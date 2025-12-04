import React, { Fragment, useEffect, useState } from 'react'

const CounterItem = ({counterGenerate}) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const newItem = counterGenerate(1, 'inc');

        setItem(newItem);

        console.log('Render');
    }, [counterGenerate]);
    
    return (
        <Fragment>
            <ul className='w-50 mx-auto list-group'>
                {
                    item.map((item) => (
                        <li className='list-group-item text-center' key={item}>{item}</li>
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default CounterItem;