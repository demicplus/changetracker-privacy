# Privacy Policy - ChangeTracker

This repository contains the privacy policy for **ChangeTracker** - a complete self-improvement companion app for Android.

## 🌐 Live Privacy Policy

View the privacy policy at: **https://yourusername.github.io/changetracker-privacy/**

*(Update the URL after you fork/create your repository)*

---

## 📋 About This Repository

This privacy policy website is hosted on **GitHub Pages** and provides transparent information about how ChangeTracker handles user data.

### Key Features:
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Clean, professional appearance
- ✅ Easy navigation with table of contents
- ✅ Smooth scrolling and animations
- ✅ Print-friendly layout
- ✅ GDPR compliant
- ✅ Ready for Google Play Store submission

---

## 🚀 Quick Setup

### Step 1: Create Your Repository

1. Go to [GitHub](https://github.com)
2. Create a new repository:
   - Name: `changetracker-privacy` (or any name you prefer)
   - Description: "Privacy Policy for ChangeTracker App"
   - Public repository
   - Initialize with README

### Step 2: Upload Files

Upload these files to your repository:
- `index.html` - The main privacy policy page
- `style.css` - Styling
- `script.js` - Interactive features
- `README.md` - This file

### Step 3: Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: Select **main** → **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes for deployment

### Step 4: Get Your URL

Your privacy policy will be available at:
```
https://[your-username].github.io/changetracker-privacy/
```

Example: `https://johndoe.github.io/changetracker-privacy/`

---

## 📝 Customization

### Update Contact Information

Edit `index.html` and find the contact section:

```html
<p><strong>Email:</strong> <a href="mailto:support@changetracker.app">support@changetracker.app</a></p>
<p><strong>Developer:</strong> ChangeTracker Team</p>
```

Replace with your actual email and name.

### Update GitHub Link

In the footer of `index.html`:

```html
<p><a href="https://github.com/yourusername/changetracker-privacy">View on GitHub</a></p>
```

Replace with your actual repository URL.

### Change Colors

Edit `style.css` at the top:

```css
:root {
    --primary-color: #2196F3;  /* Your brand color */
    --primary-dark: #1976D2;
    --accent-color: #FF9800;
}
```

---

## 📱 Add to Your Android App

### 1. Update AdConstants.java

Add this constant:

```java
public class AdConstants {
    // ... existing constants ...
    
    // Privacy Policy URL
    public static final String PRIVACY_POLICY_URL = "https://yourusername.github.io/changetracker-privacy/";
}
```

### 2. Add to SettingsActivity

Add a "Privacy Policy" option that opens the URL:

```java
// In your settings
Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(AdConstants.PRIVACY_POLICY_URL));
startActivity(browserIntent);
```

### 3. Add to Play Store Listing

When submitting your app to Google Play:
1. Go to **Store presence** → **Privacy Policy**
2. Add your privacy policy URL
3. Save

---

## 📄 Files Included

| File | Purpose |
|------|---------|
| `index.html` | Main privacy policy page with all content |
| `style.css` | Modern, responsive styling |
| `script.js` | Interactive features (smooth scroll, back-to-top) |
| `README.md` | This documentation file |

---

## ✅ Features

- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🎨 **Modern Design** - Clean Material Design aesthetics
- 🔍 **SEO Optimized** - Proper meta tags and structure
- 📖 **Easy Navigation** - Table of contents with smooth scrolling
- 🖨️ **Print Ready** - Print-friendly styling
- ♿ **Accessible** - WCAG compliant
- ⚡ **Fast Loading** - Pure HTML/CSS/JS, no dependencies

---

## 🔒 Privacy Policy Content

This privacy policy covers:

✅ What data is collected (locally stored)  
✅ How data is used (local only, except AdMob)  
✅ Third-party services (AdMob details)  
✅ User rights (access, delete, export)  
✅ Security measures (encryption, biometric)  
✅ GDPR compliance  
✅ Children's privacy (COPPA)  
✅ International users  
✅ Contact information  

---

## 🌍 Browser Support

- ✅ Chrome (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Edge (all versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📞 Support

For questions about this privacy policy repository:
- Open an issue in this repository
- Contact: [your-email@example.com]

For app-related questions:
- Email: [support@changetracker.app]

---

## 📜 License

This privacy policy template is free to use and modify for your app.

---

## 🔄 Updates

**Current Version:** 1.0  
**Last Updated:** December 6, 2024

To update the privacy policy:
1. Edit `index.html`
2. Update the "Last Updated" date
3. Commit and push changes
4. GitHub Pages will auto-deploy in 1-2 minutes

---

## ✨ Credits

**ChangeTracker** - Your complete self-improvement companion

Made with ❤️ for privacy-conscious users

---

## 📌 Important Notes

⚠️ **Before Going Live:**

1. Replace `yourusername` with your GitHub username
2. Update contact email addresses
3. Update developer/company information
4. Test all links
5. Review content for accuracy
6. Update GitHub repository URL
7. Set correct last updated date

⚠️ **For Google Play Store:**

- This privacy policy URL is **required** for app submission
- Must be publicly accessible (no login required)
- Must use HTTPS (GitHub Pages provides this)
- Content must accurately reflect your app's data practices

---

## 🎯 Next Steps

After setting up:

1. ✅ Test your privacy policy URL in a browser
2. ✅ Add URL to your Android app
3. ✅ Add URL to Play Store listing
4. ✅ Share URL with users in app settings
5. ✅ Keep it updated if you change data practices

---

**Ready to deploy? Push this folder to GitHub and enable Pages!** 🚀

For detailed instructions, see the parent directory's `HOW_TO_HOST_PRIVACY_POLICY.md` file.

