import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes></Routes>
        <Footer></Footer>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
