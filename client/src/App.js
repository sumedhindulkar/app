import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/posts");
      setPosts(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <Main />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;
