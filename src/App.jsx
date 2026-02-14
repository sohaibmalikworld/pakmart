import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
