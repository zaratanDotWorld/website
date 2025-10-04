# Website Roadmap

## Performance & Build

- [ ] Migrate all `.jsx` files to `.tsx` for TypeScript support
- [ ] Upgrade React from 18.2.0 to 19.x
- [ ] Add `sizes` prop to Image component in `pages/index.jsx:97`
- [ ] Run `npm audit` and fix security vulnerabilities
- [ ] Add production build optimization checks

## Code Quality

- [ ] Replace anonymous default exports with named functions in `pages/index.jsx:14`
- [ ] Replace anonymous default export with named function in `pages/_app.jsx:13`
- [ ] Remove all `<br>` tags and replace with CSS margin/padding in `pages/index.jsx:17,37,85`
- [ ] Replace `<hr>` elements with CSS borders or semantic section dividers in `pages/index.jsx:53,73`
- [ ] Change `<Navbar></Navbar>` to self-closing `<Navbar />` in `components/layout.jsx:7`
- [ ] Change `<Footer></Footer>` to self-closing `<Footer />` in `components/layout.jsx:9`

## Modern Next.js Features

- [ ] Evaluate migration from Pages Router to App Router
- [ ] Replace `<Head>` component with Next.js 15 Metadata API in `pages/_app.jsx`
- [ ] Replace external Google Fonts link with `next/font` optimization
- [ ] Add React Server Components where applicable
- [ ] Implement streaming and Suspense boundaries

## SEO & Accessibility

- [ ] Add meta description tags to all pages
- [ ] Improve alt text for image in `pages/index.jsx:99` (currently "Image of a Zaratan, source: Midjourney")
- [ ] Wrap content sections in semantic HTML (`<article>`, `<section>`) in `pages/index.jsx`
- [ ] Add Open Graph meta tags for social sharing
- [ ] Add structured data (JSON-LD) for organization/local business
- [ ] Ensure proper heading hierarchy (h1 → h2 → h3)
- [ ] Add `lang` attribute to HTML document
- [ ] Test with Lighthouse accessibility audit

## Configuration

- [ ] Add `outputFileTracingRoot` to `next.config.js` to silence workspace root warning
- [ ] Add `eslint` and `prettier` configurations
- [ ] Add `.nvmrc` file for Node version consistency
- [ ] Create `tsconfig.json` for TypeScript migration

## Optional Enhancements

- [ ] Add loading states with React Suspense
- [ ] Implement error boundaries for better error handling
- [ ] Add 404 and 500 error pages
- [ ] Consider adding a sitemap.xml generator
- [ ] Add robots.txt file
- [ ] Implement CSS modules or Tailwind instead of global CSS
- [ ] Add unit tests with Jest/Vitest
- [ ] Add E2E tests with Playwright
