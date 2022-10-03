import { Header } from "./components/layout/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Analytics from "./components/pages/analytics";


function App() {
  return (
    <div className="m-7">
      <ToastContainer />
      <Header />
      <Analytics/>
    </div>
  );
}

export default App;
