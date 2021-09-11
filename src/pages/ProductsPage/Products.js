import './Products.css';
import Button from 'react-bootstrap/Button';
import appleImg from './apple.jpg';

function Products() {
  return (
    <div className="productsBox">
      <Button  id="productsButton">
        <div>
          {/* <div className="productsImgBox"> */}
            <img src={appleImg} alt="apple" className="productsImg"/>
          {/* </div> */}
          <div>123</div>
          ABCDEFGHIJKLMNOPQRSTU<br/>
          width: 21 char<br/>
          height: 6 row<br/>
          456<br/>
          456<br/>
        </div>
      </Button>
    </div>
  );
}

export { Products };