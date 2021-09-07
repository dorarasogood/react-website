import Form from 'react-bootstrap/Form';
import './I18nSelect.css';

const i18nObj = {
  "tw": "正體中文 (繁體)",
  "en": "English (US)",
  "jp": "日本語"
}

function I18nSelect(props) {
  //被選到的語言放在第一個選項
  let options = [
    <option 
      key={props.selected} 
      value={props.selected}
      data-testid="selectedOption">
        {i18nObj[props.selected]}
    </option>];

  //重新產生options
  for(let language in i18nObj){
    if(language !== props.selected)
      options.push(<option key={language} value={language}>{i18nObj[language]}</option>);
  }

  return(
    <Form.Select id="i18nSelector" onChange={props.onChange} aria-label="Default select example">
      {options}
    </Form.Select>
  );
}

export { I18nSelect };