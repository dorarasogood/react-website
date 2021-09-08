import Toggle from "react-toggle";
// import "react-toggle/style.css";
import './ThemeToggle.css';

function CheckedIcon() {
  return (
    <div>
      &#x1F319;
    </div>
  );
}

function UncheckedIcon() {
  return (
    <div>
      &#x2600;
    </div>
  );
}

function ThemeToggle(props) {
  return (
    <div>
      <Toggle 
        checked={props.darkMode}
        onChange={props.onChange}
        icons={{
          checked: <CheckedIcon />,
          unchecked: <UncheckedIcon />
        }}
        aria-label="Theme toggle"
      />
    </div>
  );
}

export { ThemeToggle };