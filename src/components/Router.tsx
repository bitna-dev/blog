import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/home";
import PostList from "pages/posts";
import Detail from "pages/posts/detail";
import Create from "pages/posts/create";
import PostEdit from "pages/posts/edit";
import Profile from "pages/profile";
import LoginPage from "pages/login";
import SignupPage from "pages/signup";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<PostList />}></Route>
        <Route path="/posts/:id" element={<Detail />}></Route>
        <Route path="/posts/new" element={<Create />}></Route>
        <Route path="/posts/edit/:id" element={<PostEdit />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        {/* 위에서 정하지않은 페이지일 경우 */}
        <Route path="/*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </>
  );
}
