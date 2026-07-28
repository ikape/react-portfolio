# Isaac Ikape — Portfolio

Personal portfolio site, built with Next.js (App Router), TypeScript, and Tailwind CSS.

**Live:** [ikape.vercel.app](https://ikape.vercel.app)

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- [react-icons](https://react-icons.github.io/react-icons/) for tech-stack/social icons
- [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/react) for unit tests
- [Playwright](https://playwright.dev) for end-to-end smoke tests

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Content (experience, projects, skills) lives in typed data files under `src/data/` — update those rather than the section components directly.

## Testing

```bash
npm test          # unit tests (Vitest)
npm run test:e2e  # end-to-end smoke tests (Playwright)
```

## Deployment

Deployed on [Vercel](https://vercel.com), auto-deploying from `main`.
