import React from "react";
import Sidebar from "../../components/nav/Sidebar";
import "./modules/components/Home.css";
import Topbar from "../../components/top/Topbar";
import { useState, useEffect } from "react";

const Home = () => {
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else if (currentHour >= 18 && currentHour < 24) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <div className="home">
      <div className="sidebar">
        <Sidebar />
      </div>
      <article className="article">
        <div className="topbar">
          <Topbar currentPage="Home" />{" "}
        </div>
        <div className="greetings">
          <p>{greeting}</p>
        </div>
        <div className="content">
          <div>
            <p>
              Watch the following video to understand your new Employee Self
              Service portal quickly.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
