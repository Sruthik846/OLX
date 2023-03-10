import React,{useContext} from 'react';
import {useHistory} from 'react-router-dom'

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Create from '../../Pages/Create';

function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? user.displayName : 'Login'}</span>

          <hr />
        </div>
        {/* only shows the logout when the user is logged in */}
        {user && <span onClick={(()=>{
          firebase.auth().signOut()
          history.push('/login')
        })}>Logout</span>}  
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>
            <Link to='/create'>SELL</Link>
          <Router>
          <Route path='/create' >
            <Create />
            </Route>
          </Router>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
