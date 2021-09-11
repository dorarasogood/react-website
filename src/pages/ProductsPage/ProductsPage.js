import { Products } from './Products';
import './ProductsPage.css';

function ProductsPage() {
  return (
    <div className="productsPageBorder">
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
    </div>
  );
}

export { ProductsPage };