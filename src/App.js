import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
