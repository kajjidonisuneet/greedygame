import { Header } from "./components/layout/header";
import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Analytics from "./components/pages/analytics";

function App() {
  return (
    <div className="m-7">
      <ToastContainer />
      <Header />
      <Switch>
        <Route path="/analytics" component={Analytics} />
        <Redirect from="/" exact to="/analytics" />
      </Switch>
    </div>
  );
}

export default App;
