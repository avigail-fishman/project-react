export const container = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "20px", // הגדלת הרווח הכללי מסביב
  fontFamily: "Arial, sans-serif",
  direction: "rtl",
  gap: "20px", // הוספת רווח בין האלמנטים בתוך הקונטיינר
};

export const textSection = {
  flex: 1,
  marginLeft: "20px", // רווח משמעותי בין התמונה לטקסט
  marginRight: "20px", // יצירת רווח מהצד הימני של הדף
};

export const title = {
  fontSize: "28px",
  color: "#6b6b6b",
  marginBottom: "15px", // רווח תחתון מעט גדול יותר
  textAlign: "center", // יישור הכותרת למרכז
};

export const paragraph = {
  fontSize: "18px",
  lineHeight: "1.6", // מרווח בין השורות
  color: "#4f4f4f",
  fontFamily: "'Roboto', sans-serif",
  textAlign: "justify", // יישור טקסט לשני הצדדים
  marginBottom: "10px", // רווח בין פסקאות
  paddingRight: "10px", // רווח פנימי מהצד הימני
};

export const imageSection = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const imageStyle = {
  width: "380px", // הקטנת רוחב התמונה במעט
  height: "360px", // התאמת גובה התמונה
  objectFit: "cover",
  margin: "0", // ביטול רווחים חיצוניים
};
