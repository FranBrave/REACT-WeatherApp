import './styles/App.scss';

import Header from './components/Header';
import Weather from './components/Weather';



const App = () => {
  return (
    <div className="App">

      <Header/>
      <Weather/>
    </div>
  );
}

export default App;
