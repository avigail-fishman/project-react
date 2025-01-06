import {
  footerStyle,
  homeContainerStyle,
  imageStyle,
  followStyle,
  columnStyle,
  iconsStyle,
  copyrightBarStyle,
} from "../css/homeCss";

function Home() {
  return (
    <div style={homeContainerStyle}>
      <img src="/images/home.jpg" alt="Flower Shop" style={imageStyle} />

      <footer style={footerStyle}>
        {/* עוקבים */}
        <div style={followStyle}>
          <p>עקבו אחרינו</p>
          <div>
            <span style={iconsStyle}>🌸</span>
            <span style={iconsStyle}>🌺</span>
            <span style={iconsStyle}>🌼</span>
          </div>
        </div>

        {/* עמודות */}
        <div style={columnStyle}>
          <li>פריט 1</li>
          <li>פריט 2</li>
          <li>פריט 3</li>
          <li>פריט 4</li>
        </div>
        <div style={columnStyle}>
          <li>פריט 1</li>
          <li>פריט 2</li>
          <li>פריט 3</li>
          <li>פריט 4</li>
        </div>
        <div style={columnStyle}>
          <li>פריט 1</li>
          <li>פריט 2</li>
          <li>פריט 3</li>
          <li>פריט 4</li>
        </div>
        <div style={columnStyle}>
          <li>פריט 1</li>
          <li>פריט 2</li>
          <li>פריט 3</li>
          <li>פריט 4</li>
        </div>
      </footer>

      {/* פס הזכויות */}
      <div style={copyrightBarStyle}>
        © כל הזכויות שמורות | חנות פרחים
      </div>
    </div>
  );
}

export default Home;
