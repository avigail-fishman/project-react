export const logoStyle = {
  width: '120px',
  height: 'auto',
};

export const headerStyle = {
  backgroundColor: '#ffffff', // רקע לבן לכל ה-Header
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // צל קל
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  width: '100%',
};

export const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const linkStyle = {
  textDecoration: 'none',
  color: '#000000', // טקסט שחור
  fontWeight: 'bold',
  fontSize: '20px',
  margin: '0 20px',
  padding: '10px 20px', // ריווח פנימי כדי ליצור ריבוע ברור יותר
  transition: 'background-color 0.3s ease, color 0.3s ease',
  fontFamily: "'Roboto', sans-serif",
  borderRadius: '8px', // קצוות מעוגלים לריבוע
};

export const linkHoverStyle = {
  backgroundColor: '#D8B0B1', // צבע ורוד בהיר
  color: '#000000', // טקסט נשאר שחור
};
