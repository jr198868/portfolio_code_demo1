import './App.css';
import Arithmetic from './components/arithmetic/Arithmetic';
import Header from './components/header/header';
import Description from './components/description/description'


function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Arithmetic />
    </div>
  );
}

export default App;
