# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing projects, certifications, and professional information with smooth animations and interactive elements.

![Portfolio Preview](https://via.placeholder.com/800x400/1a1a2e/00d4ff?text=Portfolio+Website+Preview)

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Project Showcase**: Display your projects with images, descriptions, and links
- **Certifications Section**: Showcase your professional certifications and credentials
- **Contact Form**: Functional contact form with EmailJS integration
- **Social Media Integration**: Links to your social media profiles
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

### Frontend

- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

### Development Tools

- **ESLint** - Code linting and formatting
- **Vite Plugin React** - React integration for Vite
- **EmailJS** - Email service for contact forms

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add your EmailJS configuration:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
portfolio-website/
├── public/                 # Static assets
│   ├── portfolio_logo.png
│   ├── profile.jpg
│   └── ... (other images)
├── src/
│   ├── components/         # Reusable React components
│   │   ├── HeroSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── Certificates.jsx
│   │   └── ...
│   ├── constants/          # Data constants
│   │   ├── projectsData.js
│   │   ├── certificatesData.js
│   │   └── ...
│   ├── pages/              # Page components
│   │   └── Home.jsx
│   ├── common/             # Shared components
│   │   ├── NavBar.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             # Main app component
│   └── main.jsx            # App entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Customization

### Adding Projects

Edit `src/constants/projectsData.js` to add new projects:

```javascript
{
  id: 1,
  title: "Project Name",
  description: "Project description",
  image: "/project-image.jpg",
  technologies: ["React", "Node.js"],
  githubUrl: "https://github.com/username/project",
  liveUrl: "https://project-demo.com",
  category: "Front-End"
}
```

### Adding Certifications

Update `src/constants/certificatesData.js`:

```javascript
{
  id: 1,
  title: "Certificate Name",
  issuer: "Issuing Organization",
  description: "Certificate description",
  image: "/certificate-image.png",
  date_issued: "2024-01-01",
  verify_url: "https://verify-certificate.com",
  languages: ["Python"]
}
```

### Styling Customization

- **Colors**: Modify Tailwind CSS classes in components
- **Animations**: Adjust Framer Motion properties in component files
- **Layout**: Update Tailwind classes for responsive design

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Netlify/Vercel

1. Push your code to GitHub
2. Connect your repository to Netlify or Vercel
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to GitHub Pages

1. Install gh-pages package:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deploy script to package.json:

   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run build
   npm run deploy
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write clear, concise commit messages
- Test your changes thoroughly
- Update documentation as needed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Your Name**

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Portfolio: [Your Website](https://yourwebsite.com)

---

If you found this project helpful, please give it a star on GitHub!
