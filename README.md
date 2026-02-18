# Harsh Panchal Portfolio

A modern, terminal-style portfolio built with SvelteKit, featuring a Night Owl dark theme and a clean white + rose red light theme.

## 🚀 Quick Start

```sh
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

That's it! The portfolio will be running locally with hot-reload enabled.

## 📋 Prerequisites

- **Node.js** 18.x or higher
- **npm** 7.x or higher

Check your versions:
```sh
node --version
npm --version
```

## ✨ Features

- 🎨 **Dual Theme Support**: Night Owl (dark) and White + Rose Red (light) themes
- ⌨️ **Terminal Aesthetic**: Monospace font (JetBrains Mono) with terminal-style UI
- ⚡ **SvelteKit**: Modern framework for blazing-fast performance
- 📱 **Responsive Design**: Optimized for all screen sizes
- 🎭 **Typing Animation**: Dynamic hero section with typewriter effect
- 📊 **Experience Timeline**: Vertical timeline showcasing work history
- 🚀 **Featured Projects**: Showcase of key projects

## 💻 Development

## 💻 Development

### Install Dependencies

```sh
npm install
```

This will install all required packages including SvelteKit, Tailwind CSS, and JetBrains Mono font.

### Start Development Server

```sh
npm run dev
```

The site will be available at `http://localhost:5173` with hot-reload enabled. Changes to the code will automatically refresh the browser.

**Open in browser automatically:**
```sh
npm run dev -- --open
```

### Available Scripts

- `npm run dev` - Start development server (default port: 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript and Svelte checks

## 🏗️ Building

To create a production version of your app:

```sh
npm run build
```

This creates an optimized production build in the `.svelte-kit` directory.

You can preview the production build with:

```sh
npm run preview
```

## 🚀 Deployment

This portfolio can be deployed to any static hosting platform that supports SvelteKit:

- **Vercel** (recommended) - Zero config deployment
- **Netlify** - One-click deployment  
- **Cloudflare Pages** - Fast edge deployment
- **GitHub Pages** - Free static hosting

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect SvelteKit and deploy

## 🛠️ Troubleshooting

### Port Already in Use

If port 5173 is already in use, specify a different port:

```sh
npm run dev -- --port 3000
```

### Module Not Found Errors

Clear the cache and reinstall dependencies:

```sh
rm -rf node_modules .svelte-kit
npm install
```

### Build Errors

Make sure you have the correct Node.js version:

```sh
node --version  # Should be 18.x or higher
```

## 📝 Project Structure

```
Harsh-Portfolio/
├── src/
│   ├── routes/           # Pages and layouts
│   │   ├── +layout.svelte  # Main layout with header/footer
│   │   └── +page.svelte    # Home page
│   ├── app.css           # Global styles and themes
│   └── app.html          # HTML template
├── static/
│   └── assets/           # Images, resume, icons
├── package.json          # Dependencies and scripts
└── svelte.config.js      # SvelteKit configuration
```

## 🎨 Customization

### Change Themes

Edit theme colors in `src/app.css`:

```css
[data-theme="dark"] {
  --bg-primary: #011627;    /* Background */
  --text-accent: #c792ea;   /* Accent color */
  /* ... */
}
```

### Update Content

- **Experience**: Edit the `experiences` array in `src/routes/+page.svelte`
- **Projects**: Edit the `projects` array in `src/routes/+page.svelte`
- **Personal Info**: Update text in the hero section

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
