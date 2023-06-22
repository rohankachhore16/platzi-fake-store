import Axios from "axios";
import "./App.css";
import Login from "./components/pages/auth/login";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { useSelector } from "react-redux";
import {Toaster} from "react-hot-toast"
const RoutesComponent = ({ token }) => {
  if (token) {
    return <Routes isLoggedIn={true} />;
  } else {
    return <Routes isLoggedIn={false} />;
  }
};

function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  Axios.defaults.baseURL = baseUrl;
  const { token } = useSelector((state) => state?.auth);
  
  return (
    <>
      <Router>
        <RoutesComponent token={token} />
      </Router>
      <Toaster />

    </>
  );
}

export default App;
