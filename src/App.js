import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <h3>React Firebase Auth</h3>
            <div className="login-app">
              <div className="input-box">
                <label htmlFor="name">Username</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <label htmlFor="name">Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <button className="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
