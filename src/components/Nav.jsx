import './Nav.css'
import {Link} from 'react-router-dom'
const Nav = () => {
    const user = null;
    return(
        <div className='navbar'>
            <Link to='/home'>HOME</Link>
            <Link to='/guides'>EXPLORE</Link>
            <Link to='/signup'>LOGIN</Link>

            {
                user && (
                    <Link to='/create'>CREATE</Link>
                )
            }
            <Link to='/account' className='link'><div className='account'></div></Link>
        </div>
    )
}

export default Nav