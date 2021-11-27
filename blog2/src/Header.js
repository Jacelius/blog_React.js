import './Header.css';
import Button from '@material-ui/core/Button';

function Header() {
  return (
    <div className="Header">
      <div className="Nav"> 
          <div className="nameText"> 
            Silas Paaske 
          </div>
          <div className="navButtons">
            <Button> Projects </Button>
            <Button> About me </Button>

          </div>          
        </div>
    </div>
  );
}

export default Header;
