import React from "react";

export default function WelcomeModal({ username, onClose }) {
  // Video source
  const videoSrc = "https://cdn.pixabay.com/video/2023/11/11/188742-883619742_large.mp4";

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={videoBackgroundStyle}
        />
        <div style={contentStyle}>
          {/* <h2 style={{ color: "#fff", marginBottom: "20px" }}>Welcome, {username}!</h2> */}
          <p style={{ color: "limegreen", fontWeight: "bold", marginBottom: "10px" }}>
            You have successfully logged in.
          </p>
          <button onClick={onClose} style={buttonStyle}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.2)", // lighter overlay behind modal
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalStyle = {
  position: "relative",
  backgroundColor: "transparent",
  borderRadius: "12px",
  padding: "40px 50px",
  width: "700px",
  maxWidth: "95vw",
  height: "450px",
  color: "#fff",
  textAlign: "center",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  overflow: "hidden",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // space between content and button
  alignItems: "center",
};

const videoBackgroundStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  filter: "brightness(1.5) opacity(0.5)",
  zIndex: 0,
};

const contentStyle = {
  position: "relative",
  zIndex: 1,
  padding: "20px 40px",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent:"flex-end",
  alignItems: "centerx",
  // Removed flexGrow and justifyContent so content stacks naturally
};

const buttonStyle = {
  marginTop: "20px",
  padding: "12px 30px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#28a745",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
  zIndex: 1,
};