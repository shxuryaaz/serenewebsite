# Serene Model United Nations — Official Website

This is the official website of **Serene MUN**, a Model United Nations platform built to promote diplomacy, dialogue, and development. The website serves as the central hub for event details, delegate registration, and organizational communication.

> **Currently live with over 800+ unique visitors within just 2 weeks of launch.**

---

## Project Highlights

- Fully responsive and interactive React-based website
- Deployed on **Netlify** with continuous deployment via GitHub
- Clean, smooth animations using **Framer Motion**
- Custom video background embedded from local assets
- Team section with interactive modals for leadership messages
- Real-time analytics system logging IP addresses, geolocation, user agent, and timestamp using **Google Apps Script**
- Analytics data stored securely in Google Sheets
- Integrated with public Google Sheets for committee matrix and registration forms

---

## Tech Stack

| Area            | Technology Used                        |
|-----------------|----------------------------------------|
| Frontend        | React.js, Tailwind CSS, Framer Motion  |
| Deployment      | Netlify                               |
| Analytics       | Google Apps Script, Google Sheets      |
| IP & Location   | IPinfo.io API + Apps Script Web App    |
| Media Handling  | Local video (`bgvideo.mp4` in `/public`) |

---

## Key Features

- Homepage with embedded auto-playing video background
- "What is Serene MUN" and "Why Participate?" sections with structured content
- Interactive modals for Founder's and President's messages
- Matrix and Registration linked from embedded Google Sheets
- Google Apps Script analytics capturing:
  - IP Address
  - City, Region, Country
  - Timezone, ISP/Organization
  - Timestamp and user agent
- Backend-less, lightweight architecture for ease of deployment and scalability

---

## Traffic Analytics (First 2 Weeks)

- **Unique Visitors:** 800+
- **Top Countries:** India, USA, UK, UAE, Singapore
- **Peak Hours:** 7 PM to 10 PM IST
- **Top Cities:** Delhi, Mumbai, Bangalore

All analytics are logged in real-time to a secure Google Sheet, offering a lightweight alternative to traditional analytics tools like Google Analytics.

---

## Getting Started Locally

To run the project locally:

```bash
git clone https://github.com/your-username/serene-mun-website.git
cd serene-mun-website
npm install
npm start
```

Ensure that `bgvideo.mp4` is placed inside the `public/` folder to render the homepage video properly.

---

## Deployment

This project is deployed using [Netlify](https://www.netlify.com/), with automatic deployment triggered on every push to the `main` branch of the GitHub repository.

---

## Author

**Shaurya Singh**  
Frontend and Blockchain Developer  
Email: [your.email@example.com]  
LinkedIn: [https://linkedin.com/in/your-profile]

---

## Credits

- Serene MUN Core Team – Content and Vision
- Google Apps Script – Real-time analytics backend

---

## Contribution

Suggestions and contributions are welcome. If you'd like to improve the UI, enhance analytics, or integrate Firebase-based registration, feel free to fork the repository and submit a pull request.
