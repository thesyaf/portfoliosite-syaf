# Syafsite - Personal Portfolio Website

A personal portfolio website for Syafrudin Djamil, showcasing his background, projects, and contact information.

## Features

- **Responsive Design**: Works on both desktop and mobile devices
- **Interactive Navigation**: Smooth transitions between different sections
- **Profile Showcase**: Professional background and current status
- **Project Portfolio**: Display of various coding projects
- **Contact Information**: Easy access to professional links
- **Glitch Effects**: Unique visual effects on interactive elements

## Sections

1. **Home**: Main profile with introduction and interactive elements
2. **History**: Professional background and work experience
3. **Projects**: Portfolio of coding projects and achievements
4. **Contact**: Professional links and contact information

## Technical Details

This application has been converted from a Ruby on Rails application to a static HTML/CSS/JavaScript application for better compatibility and easier deployment.

### Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (jQuery)
- **Styling**: Bootstrap 4.0.0-beta, Custom CSS
- **Server**: Node.js with Express.js
- **Animations**: jQuery UI for smooth transitions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd syafsite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Development Mode

For development with auto-reload:
```bash
npm run dev
```

## Project Structure

```
syafsite/
├── public/                    # Static files served to clients
│   ├── index.html            # Main HTML file
│   ├── images/               # Image assets
│   └── assets/               # CSS and JavaScript files
│       ├── stylesheets/
│       └── javascripts/
├── app/                      # Original Rails app structure (for reference)
├── server.js                 # Node.js server
├── package.json              # Node.js dependencies
└── README.md                 # This file
```

## Customization

### Adding New Sections

1. Add the HTML structure to `public/index.html`
2. Add corresponding CSS styles to `public/assets/stylesheets/application.css`
3. Add JavaScript functionality to `public/assets/javascripts/application.js`

### Styling

The main stylesheet is located at `public/assets/stylesheets/application.css`. Key features include:

- Responsive design with media queries
- Custom animations and transitions
- Glitch effect animations
- Bootstrap integration

### JavaScript Functionality

The main JavaScript file is located at `public/assets/javascripts/application.js` and includes:

- Navigation routing
- Section transitions
- Interactive elements
- Touch and click event handling

## Deployment

### Local Development

```bash
npm start
```

### Production

For production deployment, you can:

1. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js
   ```

2. Deploy to cloud platforms like Heroku, Railway, or Render

3. Use static hosting services by building a static version

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is for personal use and portfolio purposes.

## Contact

For questions or suggestions, please contact Syafrudin Djamil through the contact information provided on the website.
