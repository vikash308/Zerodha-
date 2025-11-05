import React from "react";
import { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  let url = process.env.FRONTEND_URL;
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const name = params.get("name");

    if (token) {

      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      window.history.replaceState({}, document.title, "/");
    }
    if(!localStorage.getItem("token")){
      window.location.href = `${url}`;
    }
  }, []);
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
