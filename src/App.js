import "./App.css";
import SignIn from "./pages/signInPage/signIn";
import SignUp from "./pages/signUpPage/signUp";
import MeetDetail from "./pages/meetDetailPage/meetDetail";
import Home from "./pages/homePage/home";
import MyPage from "./pages/myPage/myPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
