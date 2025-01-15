export const footerStyle = {
  backgroundColor: '#ffffff', // רקע לבן
  color: '#000000', // טקסט שחור
  display: 'flex',
  justifyContent: 'space-evenly', // פיזור שווה של האלמנטים
  alignItems: 'center', // יישור אנכי של התוכן
  flexWrap: 'wrap', // עיטוף אם יש חוסר מקום
  marginTop: 'auto', // שמירה על מיקום מתאים
  width: '100%', // רוחב מלא
  padding: '20px 0', // ריווח פנימי
  boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)', // צל למעלה
};

export const followStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '30px',
  fontFamily: "'Roboto', sans-serif", // גופן מודרני
};

export const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // למרכז את כל הטקסט בעמודה
  margin: '10px', // ריווח בין עמודות
  listStyleType: 'none', // הסרת הנקודות מה-li
  fontFamily: "'Roboto', sans-serif", // גופן מודרני
};

export const liStyle = {
  padding: '10px', // ריווח פנימי
  transition: 'background-color 0.3s ease, color 0.3s ease', // מעבר חלק
  borderRadius: '8px', // עיגול קל לפינות
};

export const liHoverStyle = {
  backgroundColor: '#D8B0B1', // רקע ורוד בהיר בעת מעבר
  color: '#000000', // טקסט שחור
};

export const copyrightBarStyle = {
  backgroundColor: '#D8B0B1', // רקע לבן
  color: '#000000', // טקסט שחור
  textAlign: 'center',
  padding: '7px 0', // ריווח פנימי
  fontFamily: "'Roboto', sans-serif", // גופן מודרני
  boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)', // צל למעלה
};
export const separatorStyle = {
  backgroundColor: '#D8B0B1', // צבע ורוד
  height: '5px', // גובה הפס
  width: '100%', // רוחב מלא
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // צל עדין
};
