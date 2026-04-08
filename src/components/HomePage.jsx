import { useCart } from '../context/CartContext.jsx';
import ProductList from '../components/ProductList.jsx';


function HomePage({ products, searchTerm }) {
  const { addToCart } = useCart(); // ← Get from context
  
  // Filter products
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="home-page">
      {searchTerm && (
        <p className="search-results">
          Found {filteredProducts.length} products
        </p>
      )}
      
      <ProductList 
        products={filteredProducts}
        onAddToCart={addToCart}
      />
      
      {filteredProducts.length === 0 && (
        <p className="no-results">No products found</p>
      )}
    </div>
  );
}

export default HomePage;
