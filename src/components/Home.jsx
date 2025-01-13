import { useContext } from "react";
import { homeContainerStyle, homeImageStyle, welcomeTextStyle } from "../css/homeCss";
import MyConext from "../context/context";

function Home() {
  
  return (
    <div style={homeContainerStyle}>
      <h1 style={welcomeTextStyle}>ברוכים הבאים לחנות הפרחים שלנו</h1>
      <img src="/images/home.jpg" alt="Flower Shop" style={homeImageStyle} />
    </div>
  );
}

export default Home;
