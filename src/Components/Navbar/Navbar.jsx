import { useState, useContext, useRef } from 'react'
import './Navbar.css'
import { ShopContext } from '../../Context/ShopContext'
import logo from '../Assets/logo.png'
import login from '../Assets/login.png';
import listmenu from '../Assets/menu.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const navbar = useRef();

  const showNavbar = () => {
      navbar.current.classList.toggle("show");
  }

  return (
    <div className='navbar'>
      <Link to='/'style={{textDecoration: 'none'}}><div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div></Link>
      <ul className="nav-menu" ref={navbar}>
        <li onClick={() => { setMenu("shop") }}><Link style={{textDecoration: 'none', color: '#000'}} to='/'>Shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={()=> {setMenu("men")}}><Link style={{textDecoration: 'none', color: '#000'}} to='/men'>Men</Link> {menu === "men" ? <hr/> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none', color: '#000' }} to='/kids'>Kids</Link>  {menu === "kids" ? <hr /> : <></>}</li>
        <li onClick={()=> {setMenu("accessories")}}><Link style={{textDecoration: 'none', color: '#000'}} to='/accessories'>Accessories</Link> {menu === "accessories" ? <hr/> : <></>}</li>
        
      </ul>
      <div className='nav-login-cart'>
        <img className='menu-icon' src={listmenu} onClick={() => showNavbar()} alt='' />
        <Link to='/login'><img src={login} alt=''/></Link>
        <Link to='/cart' className='cart-icon'>
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        
        </Link>
      </div>
    </div>
  )
}

export default Navbar
