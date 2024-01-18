import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItem from "../components/FetchItem";
import "bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus=useSelector(state=>state.fetchStatus);

  return (
    <>
     <FetchItem/>
      <Header />
     {fetchStatus.fetchDone ? <Outlet/>:<LoadingSpinner/>}
      <Footer />
    </>
  );
}

export default App;
