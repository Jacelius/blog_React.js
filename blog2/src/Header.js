import Button from '@material-ui/core/Button';
import './css/Header.css';


function Header() {
  return (
    <div className="Header">
      <div className="Nav"> 
          <div className="nameText"> 
            Silas Paaske Nielsen
          </div>
          <div className="navButtons">
            <Button color="inherit"> Projects </Button>
            <Button color="inherit"> About me </Button>

          </div>          
        </div>
    </div>
  );
}

export default Header;
