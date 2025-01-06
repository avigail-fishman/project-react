export const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row-reverse",
  gap: "10px",
};
export const cardContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid #ddd",
  padding: "10px",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  margin: "10px",
  textAlign: "center",
};

export const cardImageStyle = {
  maxWidth: "100%",
  borderRadius: "8px",
  marginBottom: "10px",
};

export const cardLinkStyle = {
  color: "#007bff",
  textDecoration: "none",
  marginTop: "10px",
  fontWeight: "bold",
};

export const productsContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)", // 3 עמודות
  gap: "20px", // רווחים בין הקלפים
  margin: "20px",
};

// עיצוב בסיסי
export const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

export const modalStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "400px",
  textAlign: "center",
  position: "relative",
};

export const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "red",
  color: "white",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  width: "30px",
  height: "30px",
};
export const btnMdl={
  padding: "10px",
  cursor: "pointer" 
  };
  export const imgCrd={ width: "100%", height: "150px", objectFit: "cover" };
  export const divStyle={ border: "1px solid #ccc", padding: "20px", margin: "10px" };

