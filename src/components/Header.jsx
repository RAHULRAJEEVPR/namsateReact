import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../Util/UserContext";



const Header = () => {
  const [isLogin,setIsLogin]=useState(false)
  const data=useContext(UserContext)
  console.log(data,"thega");
    return (
      <>
      <div className="header">
      <img
      className="logo"
        src="https://yt3.googleusercontent.com/HipIhegQlrlSzBGZSUtOPYyA2VGbo2qyXmIdYNkodW-HVF01t5CX-MrXoDKnf9R5UErOmCbnbA=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
      <div className="nav-items">
        <ul>
          <li>
        <Link to={"/"}>
            home

        </Link>
          </li>
          <li>
          <Link to={"/about"}>
             about
          </Link>
             </li>
          <li>
          <Link to={"/contact"}>
             contact
          </Link>
             </li>
          
          
          <li>cart</li>

        </ul>
        {isLogin?
        (<button name="Logout" onClick={()=>setIsLogin(false)}>Logout</button>):
      (  <button name="Login" onClick={()=>setIsLogin(true)}>Login</button>)
        }
      </div>
    </div>
      </>
    );
  };
  export default Header