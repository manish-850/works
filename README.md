# WØRKS - Creative Portfolio Website

An award-winning, visually stunning portfolio website showcasing creative work and professional services. This website features smooth animations, interactive elements, and a modern design that has earned recognition on Awwwards.

## ✨ Features

- **Immersive Loading Animation** - Custom loading screen with video background and animated overlays
- **Smooth Scrolling** - Powered by Locomotive Scroll for premium user experience
- **Interactive Portfolio Grid** - Hover effects reveal project details and background images
- **Dynamic Gallery** - Masonry-style image gallery with overlay text animations
- **Custom Typography** - Premium FreightBigPro font family for distinctive branding
- **Responsive Design** - Optimized for all devices and screen sizes
- **GSAP Animations** - Professional-grade animations and transitions
- **Modern UI/UX** - Award-winning design principles and interactions

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling, animations, and responsive design
- **JavaScript (ES6+)** - Interactive functionality and animations
- **GSAP** - High-performance animation library
- **Locomotive Scroll** - Smooth scrolling and scroll-triggered animations
- **Remix Icons** - Modern icon library
- **Custom Fonts** - FreightBigPro typography system

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for proper video/font loading)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ui-works-studio.git
   cd ui-works-studio
   ```

2. **Set up local server** (choose one):
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js:**
   ```bash
   npx http-server
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   Navigate to `http://localhost:8000`

## 📁 Project Structure

```
ui-works-studio/
├── index.html              # Main HTML file
├── style.css               # Main stylesheet
├── script.js               # JavaScript functionality
├── img/                    # Image assets
│   ├── video.mp4          # Loading screen video
│   ├── 1.webp             # Portfolio images
│   ├── 2.webp
│   ├── 3.webp
│   ├── 4.jpg
│   └── 5.webp
├── font/                   # Custom fonts
│   ├── FreightBigProLight-Regular.woff2
│   └── FreightBigProLight-Italic.woff2
└── README.md              # Project documentation
```

## 🎨 Key Components

### Loading Animation
- Custom video background with overlays
- GSAP timeline animations
- Smooth transition to main content

### Portfolio Section
- Interactive project tiles
- Dynamic background image changes on hover
- Scrolling text animations for services

### Gallery
- Responsive masonry layout
- Hover overlays with descriptive text
- Smooth image transitions

### Footer
- Newsletter subscription
- Social media links
- "Back to Top" functionality

## 🔧 Customization

### Adding New Portfolio Items
Edit the portfolio section in `index.html`:
```html
<div class="elem" data-img="path/to/your/image.webp">
    <h2>Your Project Name</h2>
    <!-- Moving text elements -->
</div>
```

### Modifying Gallery Images
Update the array in `script.js`:
```javascript
var arr = [
    { text: "Your description", src: "path/to/image.jpg" },
    // Add more items...
];
```

### Color Scheme
Main colors used:
- **Yellow**: `#f5e418`
- **Black**: `#000000`
- **White**: `#ffffff`

## 📱 Browser Support

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+

## 🏆 Awards & Recognition

- **Awwwards** - Site of the Day Nominee
- Featured for innovative design and user experience

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

- **Email**: hello@works.studio
- **Website**: [UI Works Studio](https://ui-works.studio)

## 🙏 Acknowledgments

- **Locomotive Scroll** - For smooth scrolling functionality
- **GSAP** - For professional animations
- **Unsplash** - For gallery placeholder images
- **RemixIcon** - For iconography
- **Awwwards Community** - For inspiration and recognition

---

<div align="center">
  <p>Made with ❤️ by Manish</p>
  <p>© 2025 UI Works Studio. All rights reserved.</p>
</div>
