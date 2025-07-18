# Portfolio Website

A simple, modern portfolio website built with HTML, CSS, and JavaScript. Features a responsive design with a resume page and certificates/images gallery.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Resume Page**: Display your professional resume with download and print functionality
- **Certificates Gallery**: Upload and display your certificates and achievements
- **Mobile-Friendly Navigation**: Hamburger menu for mobile devices
- **Image Modal**: Click on certificates to view them in full size

## How to Use

### 1. Getting Started

1. Open `index.html` in your web browser
2. The website will load with the home page displayed
3. Use the navigation menu to switch between pages

### 2. Customizing Your Information

#### Personal Information
Edit the `index.html` file to update your personal information:

```html
<!-- In the resume section -->
<div class="resume-header">
    <h3>Your Name</h3>  <!-- Change this to your name -->
    <p>Professional Title</p>  <!-- Change this to your title -->
    <div class="contact-info">
        <p><i class="fas fa-envelope"></i> email@example.com</p>  <!-- Your email -->
        <p><i class="fas fa-phone"></i> +1 234 567 890</p>  <!-- Your phone -->
        <p><i class="fas fa-map-marker-alt"></i> City, Country</p>  <!-- Your location -->
    </div>
</div>
```

#### Resume Content
Update the resume sections with your actual information:

- **Education**: Add your degrees, universities, and graduation dates
- **Experience**: Add your work history, job titles, and achievements
- **Skills**: Update the skill tags with your actual skills

#### Home Page
Update the hero section with your personal message:

```html
<div class="hero-content">
    <h1 class="hero-title">Welcome to My Portfolio</h1>  <!-- Your title -->
    <p class="hero-subtitle">I'm a passionate professional showcasing my skills and achievements</p>  <!-- Your description -->
</div>
```

### 3. Adding Your Certificates

1. Go to the "Certificates" page
2. Click on the upload area
3. Select your certificate images (JPG, PNG, etc.)
4. The images will be displayed in the gallery
5. Click on any certificate to view it in full size

### 4. Customizing Colors and Styling

Edit the `styles.css` file to change colors and styling:

```css
/* Primary color (blue) */
.btn-primary {
    background-color: #2563eb;  /* Change this to your preferred color */
}

/* Secondary color */
.nav-logo h2 {
    color: #2563eb;  /* Change this to match your primary color */
}
```

### 5. Hosting Your Portfolio

#### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your portfolio will be available at `https://yourusername.github.io/repositoryname`

#### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Your site will be deployed instantly

#### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Features in Detail

### Resume Page
- Professional layout with sections for education, experience, and skills
- Download button to save as HTML file
- Print button for physical copies
- Responsive design that looks great on all devices

### Certificates Page
- Grid layout for displaying certificates
- Upload functionality for adding new certificates
- Click to view full-size images
- Modal popup for better viewing experience
- Automatic date stamping for uploaded files

### Navigation
- Smooth transitions between pages
- Mobile-friendly hamburger menu
- Active state indicators
- Keyboard navigation support

## Customization Tips

1. **Add Your Photo**: Replace the placeholder icon with your actual photo
2. **Change Fonts**: Update the Google Fonts link in the HTML head
3. **Add More Pages**: Create additional sections in the HTML and add navigation links
4. **Add Animations**: Enhance the CSS with more hover effects and transitions
5. **Add Contact Form**: Include a contact section with a form for inquiries

## Troubleshooting

### Images Not Loading
- Make sure image files are in the same folder as your HTML file
- Check that file paths are correct
- Ensure image files are not corrupted

### Styling Issues
- Clear your browser cache
- Check that the CSS file is properly linked
- Verify that all CSS rules are properly closed

### Upload Not Working
- Make sure you're using a modern browser
- Check that JavaScript is enabled
- Try refreshing the page

## Support

If you need help customizing your portfolio or encounter any issues, feel free to modify the code according to your needs. The code is well-commented and structured for easy customization.

## License

This portfolio template is free to use for personal and commercial projects. 