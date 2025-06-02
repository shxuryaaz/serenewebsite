export async function handler(event: any) {
  const ip = event.headers['x-forwarded-for'] || 'Unknown IP';
  const userAgent = event.headers['user-agent'] || 'Unknown Agent';
  const timestamp = new Date().toISOString();

  const data = {
    ip,
    userAgent,
    timestamp
  };

  const webhookURL = "YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL"; // replace this

  try {
    await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Logged successfully" })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to log traffic" })
    };
  }
}
