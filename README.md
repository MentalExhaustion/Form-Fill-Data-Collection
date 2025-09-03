# Data Collection App

A responsive web application for data collection with GPS tracking and Firebase integration.

## Features

- 🔐 Google Authentication
- 📝 Data Entry Forms with Validation
- 📍 GPS Location Detection
- 🔥 Firebase Firestore Integration
- 👨‍💼 Admin Panel for Data Management
- 📊 CSV Export Functionality
- 📱 Responsive Design

## Tech Stack

- HTML5, CSS3, JavaScript (ES6+)
- Firebase (Authentication, Firestore)
- Tailwind CSS
- HTML5 Geolocation API

## Live Demo

Visit: `https://yourusername.github.io/form-fill-app`

## Setup Instructions

1. Clone the repository
2. Configure Firebase (see below)
3. Deploy to GitHub Pages

## Firebase Configuration

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication (Google provider)
3. Create Firestore database
4. Update Firebase config in `main.js`

## File Structure

```
├── login.html              # Authentication page
├── data_entry_form.html     # Main data entry form
├── submission_confirmation.html # Success page
├── admin 1.html            # Admin submissions list
├── admin 2.html            # Submission details
├── admin 3.html            # Delete confirmation
├── main.js                 # Firebase configuration
└── firebase-config.js      # Firebase utilities
```

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main/master)
4. Access via: `https://username.github.io/repository-name`

## Usage

1. **Login**: Use Google authentication
2. **Data Entry**: Fill form with GPS location
3. **Admin Panel**: View/manage submissions
4. **Export**: Download data as CSV

## Security Notes

- Firebase rules configured for authenticated users only
- GPS requires HTTPS (GitHub Pages provides this)
- Admin access restricted to logged-in users

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

GPS features require HTTPS and user permission.