# LOLAPI Documentation Website

Modern, responsive documentation website for LOLAPI built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 **Beautiful Design**: Modern UI with gradient accents and smooth animations
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🎯 **Fast**: Static site export for lightning-fast performance
- 🔍 **SEO Friendly**: Optimized for search engines
- ♿ **Accessible**: WCAG-compliant design
- 🌐 **No Dependencies**: Pure HTML/CSS/JS export - no runtime required

## Pages

- **Home**: Hero section with key information, stats, and features
- **API Browser**: Interactive API catalog with search and filtering
- **Documentation**: Guides for detection, mitigation, and data format
- **Getting Started**: Installation and quick start guide
- **Community**: Community guidelines and contribution information
- **Contributing**: Guidelines for submitting new APIs
- **Security**: Responsible disclosure policy
- **License**: MIT License information

## Development

### Prerequisites

- Node.js 16+ (18+ recommended)
- npm or yarn

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The site will auto-reload when you make changes.

### Build & Export

Build the site for production and export to static HTML:

```bash
npm run build
```

This generates an `out/` directory with static files ready for deployment.

The website is configured to deploy to GitHub Pages at:
```
https://TheMagicClaw.github.io/LOLAPI/
```

## Project Structure

```
docs-next/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   ├── page.tsx                # Home page
│   ├── api-browser/page.tsx    # API browser
│   ├── docs/page.tsx           # Documentation
│   ├── getting-started/page.tsx # Getting started
│   ├── community/page.tsx      # Community
│   ├── contributing/page.tsx   # Contributing guidelines
│   ├── security/page.tsx       # Security policy
│   ├── license/page.tsx        # License info
│   ├── not-found.tsx           # 404 page
│   └── components/
│       ├── Header.tsx          # Navigation header
│       └── Footer.tsx          # Footer
├── public/                     # Static assets
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies

```

## Technology Stack

- **Framework**: Next.js 14
- **UI Framework**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build**: Node.js + npm

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when:
- Code is pushed to the `main` branch
- Files in `docs-next/` are modified
- The workflow file is updated

Deployment workflow: `.github/workflows/deploy.yml`

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
    },
  },
}
```

### Content

Edit pages in `app/` to update content. For example:
- `app/page.tsx` - Home page
- `app/api-browser/page.tsx` - API browser
- etc.

### Styling

Global styles are in `app/globals.css`. Component-specific styles use Tailwind CSS classes.

## Performance

- ✅ Static export - no runtime overhead
- ✅ Optimized images
- ✅ Minimal CSS
- ✅ Fast page loads

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors
- Alt text for images

## License

MIT License - See LICENSE file for details

## Contributing

Contributions are welcome! Please see the contributing guidelines at `/community`.

## Support

For issues, questions, or suggestions:
- 📝 Open an issue on GitHub
- 💬 Start a discussion
- 📧 Contact the team

---

Built with ❤️ for the security community
