import "./App.css";
import BookContextProvider from "./context/BookContext";
import Navbar from "./components/navbar";
import Booklist from "./components/booklist";
import BookForm from "./components/bookForm";

function App() {
  return (
    <div className="App">
      <div className="main_box">
        <BookContextProvider>
          <Navbar />
          <Booklist />
          <BookForm/>
        </BookContextProvider>
      </div>
    </div>
  );
}

export default App;
