import { I18nSelect } from '../I18nSelect/I18nSelect';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { Link } from "react-router-dom";
import './TopBanner.css'
import Button from 'react-bootstrap/Button'

function TopBanner(props) {
  return(
    <div className="settingLocation">
      <div className="logoLocation">
        pic
      </div>

      <div>
        <div className="up">
          <div className="themeLocation">
            <ThemeToggle 
              darkMode = {props.darkMode}
              onChange = {props.themeToggleChange}
            />
          </div>
          <div className="i18nLocation">
            <I18nSelect
              selected = {props.i18n}
              onChange = {props.i18nChange}
            />
          </div>
        </div>
        {/* <div align="right" className="down">
          <Link to="/signin"><Button variant="success">Sign in</Button>{' '}</Link>
          <Link to="/signup"><Button variant="outline-primary">Sign up</Button>{' '}</Link>
        </div> */}
      </div>
      
    </div>
  );
}

export { TopBanner };
