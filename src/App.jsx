import Hero from "./components/hero";
import Navigation from "./components/navigation";
import ProductsShop from "./components/productsShop";
import CartActionButton from "./components/cartActionButton";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Hero />

      <ProductsShop />

      <CartActionButton />
    </div>
  );
}

export default App;
