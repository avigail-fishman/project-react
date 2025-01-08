export const cardContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ddd", // מסגרת רכה
    padding: "20px",
    borderRadius: "12px", // פינות מעוגלות
    backgroundColor: "#ffffff", // רקע לבן למוצר
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // צל עדין מסביב למוצר
    margin: "0",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out", // אנימציה של שינוי גודל במעבר עכבר
  };
  
  export const cardContainerHoverStyle = {
    transform: "scale(1.05)", // הגדלה קלה בעת העכבר
  };
  
  export const cardImageStyle = {
    maxWidth: "100%",
    borderRadius: "8px",
    marginBottom: "15px",
    height: "200px", // גובה קבוע לתמונה
    objectFit: "cover", // חיתוך טוב של התמונה בתוך הריבוע
  };
  
  export const cardButtonStyle = {
    backgroundColor: "#ff91af", // צבע ורוד בהיר
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };
  
  export const cardButtonHoverStyle = {
    backgroundColor: "#ff6384", // צבע ורוד כהה במעבר עכבר
    transform: "scale(1.05)", // הגדלה קלה של כפתור בעת העכבר
  };
  
  export const imgCrd = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px", // פינות מעוגלות לתמונה
  };
  
  export const divStyle = {
    border: "1px solid #ddd", 
    padding: "20px",
    borderRadius: "12px", 
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease",
  };
  export const productsContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 עמודות
    gap: "20px", // רווחים בין המוצרים
    margin: "20px",
    justifyItems: "center", // מוודא שהמוצרים מיושרים למרכז
  };
    