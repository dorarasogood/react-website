import './Products.css';
import Button from 'react-bootstrap/Button'

function Products() {
  return (
    // <button id="productsButton">
    //   <div>
    //     456<br/>
    //     456<br/>
    //     456<br/>
    //   </div>
    // </button>
    <div>
    <Button>
      <div>
        123<br/>
        123<br/>
        123<br/>
      </div>
    </Button>
    <Button id="productsButton">
      <div>
        456<br/>
        456<br/>
        456<br/>
      </div>
    </Button>
    </div>
  );
}

export { Products };