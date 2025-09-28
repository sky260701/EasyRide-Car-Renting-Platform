import React from "react";

function ContactUs() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f9f9f9", padding: "20px" }}>
      <div style={{ maxWidth: "600px", width: "100%", background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px", color: "#333" }}>Contact Us</h1>

        {/* Contact Information */}
        <div style={{ marginBottom: "20px", fontSize: "16px", color: "#555" }}>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> support@yourwebsite.com</p>
          <p><strong>Address:</strong> 123 Business Street, Pune, India</p>
        </div>

        {/* Contact Form */}
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Your Name</label>
            <input type="text" placeholder="Enter your name" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Your Email</label>
            <input type="email" placeholder="Enter your email" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Subject</label>
            <input type="text" placeholder="Enter subject" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Message</label>
            <textarea rows="5" placeholder="Type your message" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}></textarea>
          </div>

          <button type="submit" style={{ width: "100%", padding: "12px", background: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
