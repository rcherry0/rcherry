
document.getElementById("smsForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const statusDiv = document.getElementById("status");

  statusDiv.textContent = "Sending...";

  try {
    const response = await fetch("https://your-render-backend-url.onrender.com/send-sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ phone, message })
    });

    const data = await response.json();
    statusDiv.textContent = data.success ? "✅ SMS sent!" : `❌ Error: ${data.error}`;
  } catch (err) {
    statusDiv.textContent = "❌ Failed to connect to server.";
  }
});
