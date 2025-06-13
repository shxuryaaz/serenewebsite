# Serene Model United Nations — Official Website

This is the official website of **Serene MUN**, a Model United Nations platform built to promote diplomacy, dialogue, and development. The website serves as the central hub for event details, delegate registration, and organizational communication.

🌐 **Live Website:** [www.serenemun.org](https://www.serenemun.org)

> **Currently live with over 800+ unique visitors within just 2 weeks of launch.**

---

## Project Highlights

- Fully responsive and interactive React-based website
- Deployed on **Netlify** with continuous deployment via GitHub
- Smooth animations using **Framer Motion**
- Video background powered by locally hosted media
- Interactive Team section with modals for Founder's and President's messages
- Real-time analytics logging:
  - IP address
  - City, region, country
  - Timezone and ISP
  - Timestamp and user agent
- Analytics stored in **Google Sheets** via Google Apps Script
- Google Sheets integration for committee matrix and registration

---

## Tech Stack

| Area            | Technology Used                        |
|-----------------|----------------------------------------|
| Frontend        | React.js, Tailwind CSS, Framer Motion  |
| Deployment      | Netlify                                |
| Analytics       | Google Apps Script, Google Sheets      |
| IP & Location   | IPinfo.io API + Apps Script Web App    |
| Media Handling  | Local video (`bgvideo.mp4` in `/public`) |

---

## Key Features

- Homepage with auto-playing background video
- "What is Serene MUN?" and "Why Participate?" sections for outreach
- Dynamic Team section with modal popups
- Google Sheets embedded for:
  - Committee matrix
  - Delegate registration
- Lightweight, backend-less architecture
- IP-based real-time analytics integrated via Apps Script

---

## Traffic Analytics (First 2 Weeks)

- **Unique Visitors:** 800+
- **Top Countries:** India, Nepal
- **Top Cities:** Delhi, Noida, Ghaziabad
- **Peak Traffic Time:** 7 PM to 10 PM IST

Real-time analytics are recorded in Google Sheets using a custom Apps Script setup, offering transparency and simplicity as an alternative to tools like Google Analytics.

---

## Getting Started Locally

```bash
git clone https://github.com/your-username/serene-mun-website.git
cd serene-mun-website
npm install
npm start
```

Make sure `bgvideo.mp4` is placed in the `/public` directory to render the homepage video correctly.

---

## Deployment

Deployed on **Netlify** with continuous integration. All commits to the `main` branch automatically redeploy the latest version.

🔗 **Live Link:** [www.serenemun.org](https://www.serenemun.org)

---

## Author

**Shaurya Singh**  
Frontend and Blockchain Developer  
Email: [shauryajps@gmail.com](mailto:shauryajps@gmail.com)  
LinkedIn: [https://linkedin.com/in/shauryasingh28](https://linkedin.com/in/shauryasingh28)

---

## Credits

- Serene MUN Core Team – Content, Design Direction
- Google Apps Script – IP + location analytics

---

## Contribution

Contributions are welcome. You may fork the repository and open pull requests to improve UI, enhance features, or add more analytics integrations.
