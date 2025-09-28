import React from "react";

function AboutUS() {
  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      <p style={{ textAlign: "center", color: "#555" }}>
        Welcome to our website. We are dedicated to providing the best experience for our users.
      </p>

      {/* Content Section */}
      <div style={{ marginTop: "30px", lineHeight: "1.6", color: "#333" }}>
        <p>
          Our website is designed to offer a seamless and user-friendly experience. We focus on quality, innovation, and continuous improvement to ensure that our users receive the best service possible.
        </p>
        <p>
          We strive to build trust with our users by providing reliable and accurate information. Our team works hard to enhance functionality, optimize performance, and create a platform that meets your needs.
        </p>
        <p>
          Thank you for visiting our website. We value your feedback and look forward to serving you better every day.
        </p>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: "50px", textAlign: "center", color: "#777" }}>
        &copy; 2023 Your Company. All Rights Reserved.
      </footer>
    </div>
  );
}

export default AboutUS;
