import BookList from "./components2/BookList";
import Navbar from "./components2/Navbar";
import ThemeToggle from "./components2/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";


function App() {
  
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <BookContextProvider>
            <BookList/>
          </BookContextProvider>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
