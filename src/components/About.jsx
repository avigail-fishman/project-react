import { container, imageSection, imageStyle, paragraph, textSection, title } from "../css/aboutCss";

function About() {
  return (
    <div style={container}>
      <div style={textSection}>
        <h1 style={title}>מדברים אליכם בפרחים</h1>
        <p style={paragraph}>
          נעים להכיר, אנחנו אתר הפרחים של ישראל, לרכישה ומשלוח בפריסה ארצית. אצלנו תמצאו מגוון זרי פרחים,
          עציצים ומארזים שמתאימים לכל הזדמנות ולכל אירוע.
        </p>
        <p style={paragraph}>
          זרי הפרחים המושקעים והמרהיבים שלנו נשזרו במיוחד עבורכם במקצועיות וברגישות על ידי מיטב השוזרים,
          והם משלבים בתוכם פרחים טריים שזה עתה נקטפו.
        </p>
        <p style={paragraph}>
          זרי הפרחים שלנו מגיעים בשלוש מידות שונות: רגיל, בינוני וגדול, והם ניתנים גם להרכבה על פי העדפות
          הלקוח בהתאמה אישית מלאה.
        </p>
        <p style={paragraph}>
          המטרה שלנו היא לאפשר לכם לרגש ולשמח את האנשים בחייכם עם הזר המושלם, שמגיע בדיוק ברגע הנכון
          ויוצר אפקט “וואו” שאי אפשר להתעלם ממנו.
        </p>
      </div>
      <div style={imageSection}>
        <img
          src="/images/pictures.png"
          alt="Flower Shop"
          style={imageStyle}
        />
      </div>
    </div>
  );
}

export default About;
