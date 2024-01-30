import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}

export default App;
