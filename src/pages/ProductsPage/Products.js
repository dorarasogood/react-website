import './Products.css';
import Button from 'react-bootstrap/Button';
import appleImg from './apple.jpg';

function Products() {
  return (
    <div className="productsBox">
      <Button  id="productsButton">
        <div className="buttonInnerBox">
          {/* <div className="productsImgBox"> */}
            <img src={appleImg} alt="apple" className="productsImg"/>
          {/* </div> */}
          <div className="productsName">蘋果</div>
          {/* <div className="productsName">11日午後、東京 千代田区でタクシー</div> */}
          {/* ABCDEFGHIJKLMNOPQRSTU<br/>
          width: 21 char<br/>
          height: 6 row<br/>
          456<br/>
          456<br/> */}
        </div>
      </Button>
      <div className="productsPrice">3000NTD</div>
    </div>
  );
}

export { Products };