import '../styles/App.css';
import Header from './Header';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <Header />

      <div class="row">
        <div class="col s12 m6 push-m3">

          <Weather />
              
        </div>
      </div>

    </div>
  );
}

export default App;
