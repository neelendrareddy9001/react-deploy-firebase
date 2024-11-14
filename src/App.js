import Login from "./Components/Login";
import Register from "./Components/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Login />
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
