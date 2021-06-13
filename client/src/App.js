import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from './redux/action/auth/auth.action';
import AllRoute from './allRoutes';
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();
  const user = {
    email:"nayi@gmail.com",
    password:"nakumukha"
  }

  //  useEffect(()=>{
  //  dispatch(login(user))
  //   console.log(dispatch)
  //  },[dispatch])

  return (
    <AllRoute/>
  );
}

export default App;

