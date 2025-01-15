export const videoContainerStyle = {
  width: '100%',
  height: 'calc(63vh - 40px)', // המקטע של הסרטון נשאר בגובה מלא אך מחסיר את גובה ה-header
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
};

export const videoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute', 
  top: 0,
  left: 0,
};

export const textOverlayContainerStyle = {
  position: 'absolute', 
  zIndex: 2, 
  textAlign: 'center',
  color: '#ffffff',
  fontFamily: "'Roboto', sans-serif",
  top: '50%', // ממקם את הטקסט בדיוק במרכז הגובה של הסרטון
  transform: 'translateY(-50%)', // ממרכז את הטקסט בצורה מושלמת
};

export const h2Style = {
  fontSize: '32px', 
  margin: '0', 
  fontWeight: '300',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
};

export const h1Style = {
  fontSize: '48px', 
  margin: '10px 0 0', 
  fontWeight: '700',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
};
