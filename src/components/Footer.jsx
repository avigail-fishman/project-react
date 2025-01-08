import { columnStyle, copyrightBarStyle, followStyle, footerStyle, iconsStyle } from "../css/footerCss";

function Footer() {

    return (<>
        <footer style={footerStyle}>
            {/* עוקבים */}
            <div style={followStyle}>
                <p>עקבו אחרינו</p>
                <div>
                    {/* <IconBadge4k stroke={1.5} /> */}
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
            © M & A | כל הזכויות שמורות
        </div>

    </>
    );
}
export default Footer;