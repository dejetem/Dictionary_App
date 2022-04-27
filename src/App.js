import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import HomeCard from "../HomeCard"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>Home</p>
      </div>
    </Provider>
  );
}

export default App;
