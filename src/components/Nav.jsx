import './Nav.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {FaSun, FaMoon, FaBiohazard, FaWalking} from 'react-icons/fa'

const Nav = (props) => {
    const user = null;
    const [isDark, setIsDark] = useState(false)

    function handleClick() {
        setIsDark(!isDark)
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
                            <div className='toggle' onClick={handleClick}>{isDark?<FaSun style={{color:"white"}}/>:<FaMoon/>}</div>
                        </>
                    )
                }

                {
                    user && (
                        <>
                            <Link to='/create'>CREATE</Link>
                            <div className='toggle' onClick={handleClick}>{isDark?<FaSun style={{color:"white"}}/>:<FaMoon/>}</div>
                            <Link to='/account'><div className='account'><FaBiohazard/></div></Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Nav