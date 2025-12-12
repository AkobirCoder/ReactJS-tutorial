import useInputValidation from "./custom-hook/UseInputValidation";

const MyButton = ({children}) => {
    return (
        <button className="mt-3 btn btn-success">{children}</button>
    );
}

const SimpleStateManagement = () => {
    const firstName = useInputValidation('');
    const lastName = useInputValidation('');

    return (
        <div className="container mb-5">
            <code>simple State management:</code>
            <div className="w-50 p-5 mt-5 mx-auto border rounded-3">
                <h1 className="fs-3 fw-light text-center">
                    simple State management
                </h1>
                <p className="text-center fs-3">Register</p>
                <div className="d-flex gap-3">
                    <input 
                        type="text"
                        className={`form-control ${firstName.validateColor}`}
                        placeholder="Firstname"
                        value={firstName.value}
                        onChange={firstName.onChange}
                    />
                    <input 
                        type="text"
                        className={`form-control ${lastName.validateColor}`}
                        placeholder="Lastname"
                        value={lastName.value}
                        onChange={lastName.onChange}
                    />
                </div>
                <MyButton>my data</MyButton>
                <MyButton>Salom</MyButton>
            </div>
            <hr />
        </div>
    );
}

export default SimpleStateManagement;