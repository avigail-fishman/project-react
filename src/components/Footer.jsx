import React from 'react';
import {
  footerStyle,
  followStyle,
  columnStyle,
  copyrightBarStyle,
  separatorStyle,
  liStyle,
  liHoverStyle, // ייבוא סגנון הפס
} from '../css/footerCss';

import { IconBrandInstagram, IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';

function Footer() {
  return (
    <>
      {/* פס ורוד */}
      <div style={separatorStyle}></div>

      <footer style={footerStyle}>
        {/* עוקבים */}
        <div style={followStyle}>
          <p>עקבו אחרינו</p>
          <div>
            <IconBrandInstagram size={28} stroke={1.5} style={{ margin: '0 10px' }} />
            <IconBrandFacebook size={28} stroke={1.5} style={{ margin: '0 10px' }} />
            <IconBrandTwitter size={28} stroke={1.5} style={{ margin: '0 10px' }} />
          </div>
        </div>

        {/* עמודות */}
        <div style={columnStyle}>
          <li style={liStyle} onMouseEnter={(e) => e.target.style.backgroundColor = liHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>אודות</li>
          <li style={liStyle} onMouseEnter={(e) => e.target.style.backgroundColor = liHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>יצירת קשר</li>
          <li style={liStyle} onMouseEnter={(e) => e.target.style.backgroundColor = liHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>התחברות</li>
          <li style={liStyle} onMouseEnter={(e) => e.target.style.backgroundColor = liHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>הרשמה</li>
        </div>
        <div style={columnStyle}>
          <li style={liStyle} onMouseEnter={(e) => e.target.style.backgroundColor = liHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>טלפון : 02-6518214</li>
          <li style={liStyle} onMouseEnter={(e) => e.target.style.backgroundColor = liHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>כתובת: שדרות הנציב 5</li>
          <li style={liStyle} onMouseEnter={(e) => e.target.style.backgroundColor = liHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>mandaflower@gamil.com : כתובת מייל</li>
          <li style={liStyle} onMouseEnter={(e) => e.target.style.backgroundColor = liHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>mandaflower.co.il : בקרו אותנו</li>
        </div>
      </footer>

      {/* פס זכויות יוצרים */}
      <div style={copyrightBarStyle}>
        <p>כל הזכויות שמורות M&A</p>
      </div>
    </>
  );
}

export default Footer;
