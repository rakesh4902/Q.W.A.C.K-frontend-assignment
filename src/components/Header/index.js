import { CgLogIn } from "react-icons/cg";
import './index.css'

const Header = ()=>(
    <div className='header'>
        <div className='left-side'>
        <a href="https://www.qwackedu.com/"><img src="https://i.ibb.co/XYsDpcR/logo-2a487917892639ad5b74.png" alt="logo" className='app-logo'/></a>
        <ul className='left-side'>
            <a href="https://www.qwackedu.com/" ><li className='nav-text'>Home</li> </a>
            <a href="https://www.qwackedu.com/worksheets" ><li className='nav-text'>Worksheets</li></a>
            <a href="/" ><li className='nav-text'>Vocabulary</li></a>
            <a href="https://www.qwackedu.com/quiz" ><li className='nav-text'>Quiz</li></a>
            <a href="https://www.qwackedu.com/competition" ><li className='nav-text'>Competition</li></a>
            <a href="https://www.qwackedu.com/AboutUs" ><li className='nav-text'>About us</li></a></ul>
        </div>
        <a href="https://www.qwackedu.com/loginp"><div className='right-side'>
            <button className='login-btn'><CgLogIn size={25} style={{ marginTop:'8px' }} /><p className="login-text">Login</p></button>
        </div></a>
    </div>
)


export default Header