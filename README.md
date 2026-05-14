# FTP-YYC Landing

Static landing website for FTP-YYC, Filipino Tech Professionals of YYC.

Preview: https://ftp-yyc-landing.vercel.app/

## Preview

![FTP-YYC homepage preview](src/images/Main%20-%20Homepage.png)

## Stack

- Static HTML pages
- Tailwind CSS v4 using `@tailwindcss/cli`
- Vanilla JavaScript for mobile menu, dropdowns, and header scroll state
- Google Fonts for typography
- Local image and icon assets under `src/images`
- Font Awesome assets under `src/fontawesome`
- Hosted on Vercel as a static site

## Project Structure

```text
.
├── src/
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   ├── events.html
│   ├── insight-list.html
│   ├── insight-inner.html
│   ├── event-inner.html
│   ├── input.css
│   ├── output.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   └── fontawesome/
├── screenshots/
├── package.json
└── README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Build the Tailwind output CSS:

```bash
npm run build
```

Watch Tailwind changes while editing:

```bash
npm run tw:build
```

Open `src/index.html` in a browser to preview the site locally. If you prefer using a local static server, serve the `src` directory.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run build` | Compiles `src/input.css` to `src/output.css` once. |
| `npm run tw:build` | Runs Tailwind in watch mode and updates `src/output.css` as files change. |

## Styling Notes

Global design tokens and reusable utility classes live in `src/input.css`.

The compiled stylesheet is `src/output.css`, which is the file linked by the HTML pages. After changing Tailwind classes or custom CSS, run `npm run build` before deploying.

## Deployment

The preview is deployed on Vercel:

https://ftp-yyc-landing.vercel.app/

Recommended Vercel settings:

- Build Command: `npm run build`
- Output Directory: `src`
- Install Command: `npm install`

## Main Pages

- `src/index.html` - homepage
- `src/about.html` - community, mission, and team page
- `src/events.html` - events listing
- `src/contact.html` - join, volunteer, and partner page
- `src/insight-list.html` - insights listing
- `src/insight-inner.html` - insight detail page
- `src/event-inner.html` - event detail page
