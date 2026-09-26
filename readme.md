# Portfolio (legacy)

The source for my original web developer portfolio site: a single-page React app with a project showcase, an about section, and contact links.

> **This site has been replaced.** My current portfolio is at **https://www.shanehobson.me**, and its source is in [shanehobson/portfoliov2](https://github.com/shanehobson/portfoliov2).
>
> This version was built in 2018, updated through 2021, and is no longer maintained.

## What's here

- A single-page layout with a full-screen header, then Portfolio, About, and Contact sections. Navigation uses smooth scrolling (`react-scroll`).
- Project cards with screenshots or demo videos, descriptions, and links to live sites and source code. Projects include Contract Generator, Invoice Generator, LoaderGallery.com, Workout Tracker, a blog content management system, Hobson Electric, Knecht Insurance, and a poker blinds tracker.
- Contact links for email, LinkedIn, and GitHub
- An Express server that serves the static build and falls back to `index.html` for client-side routes, set up for Heroku deployment (`heroku-postbuild`)

## Tech stack

- React 15 and React Router 4
- Sass
- Webpack 3 and Babel 6
- Express

## Getting started

The build depends on `node-sass` 4.x, so it needs an older Node.js release.

```bash
npm install

# Development server
npm run dev-server

# Production build to public/dist
npm run build:prod

# Serve the build (defaults to port 3000)
npm start
```

`server/server.js` reads one environment variable, `PORT`, which is optional.

## Project structure

```
src/
  components/
    portfolio-items/   # One component per showcased project
    About.js, Contact.js, HeaderContent.js, NavBar.js, Portfolio.js
  styles/              # Sass partials
public/
  images/, video/      # Screenshots and demo videos
server/server.js       # Express static server
```

## Related

- Current site: https://www.shanehobson.me
- Current source: [shanehobson/portfoliov2](https://github.com/shanehobson/portfoliov2)
