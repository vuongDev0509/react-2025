import {Link } from 'react-router-dom';
function Header ({wishlistCount}){
    return(
        <div className="vv-anime-header">
            <div className='container'> 
                <ul className="vv-anime-header__menu">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className='nav-item__wishlist'>
                        <Link to='/wishlist'>My Wishlist<span>{wishlistCount}</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;