import './Nav.css'
import '../index.css'
import {Link} from 'react-router-dom'
import {FaSun, FaMoon, FaBiohazard, FaWalking} from 'react-icons/fa'

const Nav = (props) => {
    const user = "Tom";

    function handleClick() {    
        props.passup(!props.theme)
    }

    return(
        <div className='navbar'>
            <div className='nav-menu'>
                <Link to='/home' className='nav-main'><FaWalking className='icon'/> TWBE200</Link>
                <Link to='/guides'>EXPLORE</Link>
                

                {
                    !user && (
                        <>
                            <Link to='/signup'>LOGIN</Link>
                            <div className='toggle' onClick={handleClick}>{props.theme?<FaSun style={{color:"white"}}/>:<FaMoon/>}</div>
                        </>
                    )
                }

                {
                    user && (
                        <>
                            <Link to='/create'>CREATE</Link>
                            <div className='toggle' onClick={handleClick}>{props.theme?<FaSun style={{color:"white"}}/>:<FaMoon/>}</div>
                            <Link to='/account'><div className='account'><FaBiohazard style={{color:"red"}}/></div></Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Nav