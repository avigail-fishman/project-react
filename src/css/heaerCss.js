export const logoStyle = {
  width: "120px", // גודל לוגו יותר מרשים
  height: "auto",
};

export const headerStyle = {
  backgroundColor: "#388e3c", // ירוק כהה ומרשים יותר
  padding: "20px 40px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // צל חזק יותר
  position: "sticky",
  top: 0,
  zIndex: 1000,
  borderBottom: "5px solid #f1f1f1", // קו תחתון עדין
};

export const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const linkStyle = {
  textDecoration: "none",
  color: "#f4f4f4", // צבע בהיר יותר
  fontWeight: "bold",
  fontSize: "20px", // גודל פונט יותר גדול
  margin: "0 20px", // ריווח רחב יותר בין הקישורים
  transition: "color 0.3s ease, transform 0.3s ease", // מעבר חלק יותר
  fontFamily: "'Roboto', sans-serif", // גופן מודרני
};

export const linkHoverStyle = {
  color: "#ffb74d", // גוון אורני כתום (חמים)
  transform: "scale(1.1)", // הגדלה קלה
};
