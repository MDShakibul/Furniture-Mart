import './App.css';
import Products from './components/Products/Products';
import Theory from './components/Theory/Theory';

function App() {
  return (
    <div className="App">
        <h1>Furniture Mart</h1>
        <Products></Products>
        <h1>Theory Question</h1>
        <Theory></Theory>
    </div>
  );
}

export default App;
