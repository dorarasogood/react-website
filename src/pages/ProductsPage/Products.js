import './Products.css';
import Button from 'react-bootstrap/Button';

function Products(props) {
  return (
    <div className="productsBox">
      <Button  id="productsButton">
        <div className="buttonInnerBox">
            <img src={props.imgSrc} alt={props.name} className="productsImg"/>
          <div className="productsName">{props.name}</div>
        </div>
      </Button>
      <div className="productsPrice">{props.price+" "+props.currency}</div>
    </div>
  );
}

export { Products };