import './App.css';
import Catalog from './components/Catalog/Catalog'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container mb80">
        <Catalog/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
