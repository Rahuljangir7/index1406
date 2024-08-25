import './header.css';
import Button from '../../utility/button/Button';
 
 const Header = () => {
   return (
     <>
        <header>
            <div className="header-contant">
                <h1>STAY HEALTHY <br /> STAY SAFE</h1>
                <Button name={"call now"} />
            </div>
        </header>
     </>
   )
 }
 
 export default Header