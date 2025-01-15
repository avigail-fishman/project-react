export const appContainer = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  fontFamily: "'Arial', sans-serif",
};

export const mainContent = {
  flex: 1,
};
export const cartPopup = {
  position: "fixed",
  top: 0,
  right: 0,
  width: "350px",
  height: "100%",
  backgroundColor: "white",
  color: "#333",
  zIndex: 1000,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
};

export const cartPopupHeader = {
  backgroundColor: "#D8B0B1", // ורוד
  color: "white",
  padding: "15px",
  textAlign: "center",
  fontWeight: "bold",
  position: "relative",
};

export const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "18px",
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
};

export const cartPopupContent = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const cartTitle = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "20px 0",
};

export const cartItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  fontSize: "18px",
  borderBottom: "1px solid #eee",
  padding: "10px 0",
};

export const cartItemButton = {
  backgroundColor: "#D8B0B1",
  color: "white",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
  borderRadius: "5px",
};

export const cartTotal = {
  fontSize: "20px",
  fontWeight: "bold",
  marginTop: "20px",
  textAlign: "center",
  color: "#D8B0B1",
};

export const cartLinkButton = {
  backgroundColor: "#D8B0B1",
  color: "white",
  border: "none",
  padding: "10px 15px",
  cursor: "pointer",
  borderRadius: "5px",
  textDecoration: "none",
  display: "inline-block",
  marginTop: "20px",
};