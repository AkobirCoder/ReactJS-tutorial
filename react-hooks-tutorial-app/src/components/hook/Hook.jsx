import './Hook.css';

const User = ({firstName, lastName, link}) => {
    return (
        <div>
            <div>
                <h1>Mening ismim - {firstName}, familiyam - {lastName}.</h1>
                <a href={link} target='_blank' rel='noreferrer'>
                    Mening Telegram profilim.
                </a>
            </div>
        </div>
    );
}

export default User;