import Footer from "./components/Footer";
import RouteManager from "./routeManager/RouteManager";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <RouteManager />
      <Footer />
    </div>
  );
}

export default App;
