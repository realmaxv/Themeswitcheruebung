import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
