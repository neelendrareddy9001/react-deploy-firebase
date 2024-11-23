import Login from "./Components/Login";
import Register from "./Components/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="auth-wrapper">
          <Login />
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
