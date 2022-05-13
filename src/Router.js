import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./user/SignIn";
import Screen2 from "./user/SignUpScreen/Screen2";
import Screen3 from "./user/SignUpScreen/Screen3";
import Screen4 from "./user/SignUpScreen/Screen4";
import SignUp from "./user/SignUp";
import Home from "./home/Home"
import Chat from "./chat/Chat"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SignUp />} />
        <Route path="/signup/registration" exact element={<Screen2 />} />
        <Route path="/signup/regform" exact element={<Screen3 />} />
        <Route path="/signup" exact element={<Screen4 />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
