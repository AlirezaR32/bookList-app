import './App.css';
import BookContextProvider from './context/BookContext';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookContextProvider>
          <Navbar/>
        </BookContextProvider>
      </header>
    </div>
  );
}

export default App;
