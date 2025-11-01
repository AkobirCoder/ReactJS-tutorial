import './Field.css';

const Field = () => {
    const placeholder = 'Typing...';
    const typeInput = 'text';

    return (
        <input type={typeInput} placeholder={placeholder} />
    );
}

export default Field;