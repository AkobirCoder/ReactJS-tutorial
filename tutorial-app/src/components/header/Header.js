import '../app/App.css';
import './Header.css';
import logo from '../../logo.svg';

const Header = () => {
    const text = 'Hello Akobir';

    const getText = (name)=> {
        return (
            <div>
                <h1>{text}</h1>
                <h2>Hi, {name}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sit 
                    autem deleniti nihil corrupti est adipisci enim quasi ea dolorem.
                </p>
            </div>
        );
    }

    return (
        <div>{getText('Akobir')}</div>
    );
}

const Navbar = () => {
    return (
        <div 
            style={{
                display: "flex", 
                textAlign: "justify",
                alignItems: "center"
            }}
        >
            <img className='App-logo' src={logo} alt="logo" />
            <p style={
                {marginRight: "6rem"}
            }>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, 
                fugit delectus! Veritatis officiis, rerum velit ipsum saepe quos 
                consequuntur aut autem, corrupti laborum natus totam suscipit repudiandae 
                adipisci? Ad sed minima, praesentium debitis maxime obcaecati, magni vel 
                repellendus beatae magnam, nemo eligendi dolor! Laboriosam rerum recusandae, nulla non at provident!
            </p>
        </div>
    );
}

// export default Header;
// export default Navbar; bitta fayldan faqat bitta componentni `export default` qilib export qilish mumkin

export {Header, Navbar};