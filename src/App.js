import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import Register from "./Components/Register";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Register />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
