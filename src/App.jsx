import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Login from './Components/Login';
import Counter from './Components/Counter';
import TodoList from './Components/TodoList';
import { ThemeProvider } from './Components/ThemeProvider'; // Import the ThemeProvider
import Toolbar from './Components/Toolbar';
import ColorPicker from './Components/ColorPicker';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Contact from './Components/Contact';
import CursorFollower from './Components/CursorInteraction';
import { useTheme } from './Components/ThemeProvider'; // Import useTheme

const AppContent = () => {
  const { theme } = useTheme(); // Access the theme using useTheme

  const appStyles = {
    backgroundColor: theme === 'dark' ? 'lightgrey' : 'white',
    color: theme === 'dark' ? 'black' : 'black'
  };

  return (
    <div className="App" style={appStyles}>
      <NavBar /> {/* Add the NavBar here */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/toolbar" element={<Toolbar />} />
        <Route path="/colorpicker" element={<ColorPicker />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cursor/interaction" element={<CursorFollower />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent /> {/* Use the AppContent to access theme */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
