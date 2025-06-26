# Portfolio Website - Lucky Singh Yaduvanshi

A modern, responsive portfolio website with separated HTML, CSS, and JavaScript for better maintainability and easy certification management.

## 🚀 Features

- **Separated Architecture**: Clean separation of HTML, CSS, and JavaScript
- **Responsive Design**: Works perfectly on all devices
- **Easy Certification Management**: Add new certifications and tools through admin panel
- **Modern UI**: Beautiful design with smooth animations
- **Modular Code**: Easy to maintain and extend
- **Data Persistence**: Saves your additions using browser localStorage
- **Export/Import**: Backup and restore your portfolio data

## 📁 File Structure

```
portfolio/
├── index_new.html          # New improved portfolio (use this)
├── index.html              # Original portfolio (backup)
├── admin.html              # Admin panel for managing content
├── assets/
│   ├── css/
│   │   └── styles.css      # All CSS styles
│   ├── js/
│   │   ├── main.js         # Main JavaScript functionality
│   │   └── portfolio-config.js  # Data management and configuration
│   └── img/
│       └── logos/          # Logo images for tools and certifications
│           ├── azure.png
│           ├── chatgpt.png
│           ├── cisco.png
│           ├── coursera.png
│           ├── cursor.png
│           ├── docker.png
│           ├── github-copilot.png
│           ├── github.png
│           ├── google.png
│           ├── huggingface.png
│           ├── microsoft.png
│           ├── msoffice.png
│           ├── powerbi.png
│           ├── vscode.png
│           └── wordpress.png
└── README.md               # This file
```

## 🎯 How to Add New Certifications

### Method 1: Using Admin Panel (Recommended)

1. Open `admin.html` in your browser
2. Click on the "Certifications" tab
3. Click "Add Certification" button
4. Fill in the form:
   - **Title**: Name of the certification
   - **Issuer**: Organization that issued the certification
   - **Logo File Name**: Name of the logo file (place file in `assets/img/logos/`)
   - **Date**: Year or date received
   - **Description**: Brief description of what you learned
   - **Credential ID**: (Optional) Certificate ID for verification
   - **Verification URL**: (Optional) Link to verify the certificate

5. Click "Save Certification"

### Method 2: Using Code

Add new certifications by modifying the `portfolio-config.js` file:

```javascript
// Add this to the certifications array in portfolio-config.js
{
    title: 'Your New Certification',
    issuer: 'Certification Provider',
    logo: 'provider-logo.png',
    date: '2024',
    description: 'What you learned from this certification',
    credentialId: 'CERT-ID-123',
    verificationUrl: 'https://verify-link.com'
}
```

## 🛠️ How to Add New Tools

### Method 1: Using Admin Panel (Recommended)

1. Open `admin.html` in your browser
2. Click on the "Tools" tab
3. Click "Add Tool" button
4. Fill in the form:
   - **Name**: Tool name
   - **Logo File Name**: Logo file name (place in `assets/img/logos/`)
   - **Category**: Select appropriate category
   - **Proficiency**: Your skill level (0-100%)

### Method 2: Using Code

Add new tools in `portfolio-config.js`:

```javascript
// Add this to the tools array
{
    name: 'New Tool',
    logo: 'tool-logo.png',
    proficiency: 85,
    category: 'Development'
}
```

## 📋 Available Categories for Tools

- Development
- Version Control
- Analytics
- AI Tools
- Cloud
- DevOps
- CMS
- Design
- Other

## 🖼️ Adding Logo Images

1. Place logo images in the `assets/img/logos/` folder
2. Use common image formats: PNG, JPG, SVG
3. Recommended size: 64x64 pixels or larger
4. Use descriptive file names (e.g., `microsoft.png`, `vscode.png`)

## 💾 Data Management

### Export Data
- Use the admin panel to export all your portfolio data as JSON
- This creates a backup you can save anywhere

### Import Data
- Upload a previously exported JSON file to restore your data
- Useful for moving between devices or backing up

### Reset Data
- Resets all data to the original default state
- Use with caution - this cannot be undone

## 🎨 Customization

### Colors
Modify CSS variables in `assets/css/styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #1e293b;  /* Secondary color */
    --accent-color: #f97316;     /* Accent color */
}
```

### Personal Information
Update personal details in `portfolio-config.js`:

```javascript
personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    phone: "+1234567890",
    // ... other details
}
```

## 🚀 Deployment

1. Upload all files to your web server
2. Ensure the directory structure is preserved
3. Point your domain to `index_new.html` (or rename it to `index.html`)
4. Test the admin panel functionality

## 🔧 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop computers
- Tablets
- Smartphones
- All screen sizes

## 🆘 Troubleshooting

### Images Not Loading
- Check file paths in `assets/img/logos/`
- Ensure image files exist
- Verify file names match exactly (case-sensitive)

### Admin Panel Not Working
- Ensure JavaScript is enabled
- Check browser console for errors
- Clear browser cache and reload

### Data Not Saving
- Check if localStorage is enabled
- Try using the export/import feature as backup

## 🤝 Contributing

To add new features or improvements:

1. Modify the appropriate files
2. Test thoroughly
3. Update this README if needed
4. Create backups before major changes

## 📄 License

This portfolio template is free to use and modify for personal or commercial projects.

## 📞 Support

For questions or issues, contact:
- Email: luckyaduvanshi5@gmail.com
- Phone: +91-9667907515

---

**Enjoy your new portfolio! 🎉**
