import { Routes, Route, Link } from 'react-router-dom';
function Header (){
    return(
        <div className="vv-anime-header">
            <div className='container'> 
                <ul className="vv-anime-header__menu">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/wishlist'>My Wishlist</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;