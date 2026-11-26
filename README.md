# next.js-code

A modern UI starter template built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, **shadcn/ui (`@base-ui/react`)**, and **Motion Primitives**.

> **Build Faster. Design Better. Ship with Next.js, Tailwind CSS, shadcn/ui & Motion.**

---

## Tech Stack

- **Framework:** [Next.js 16.3.3](https://nextjs.org) (App Router, React Server Components)
- **Runtime:** [React 19.2.8](https://react.dev) + TypeScript 5
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/postcss`, `oklch()` CSS variables, `tw-animate-css`, `tailwind-scrollbar`)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com) (`base-vega` style) powered by [`@base-ui/react`](https://base-ui.com)
- **Animations:** [Motion v13](https://motion.dev) (`motion/react`) & [Motion Primitives](https://motion-primitives.com)
- **Theming:** [`next-themes`](https://github.com/pacocoursey/next-themes) (Light / Dark / System mode)
- **Icons:** [`lucide-react`](https://lucide.dev)

---

## Project Structure

```text
├── app/
│   ├── layout.tsx              # Root layout with ThemeProvider, Navbar & Footer
│   ├── page.tsx                # Home page
│   ├── not-found.tsx           # Custom 404 Not Found page
│   └── globals.css             # Tailwind CSS v4 @theme inline & oklch() tokens
├── components/
│   ├── assets/                 # Brand assets (brandlogo.png)
│   ├── motion-primitives/      # Reusable Motion components
│   │   ├── animated-background.tsx
│   │   ├── cursor.tsx
│   │   ├── magnetic.tsx
│   │   ├── morphing-dialog.tsx
│   │   ├── text-effect.tsx
│   │   ├── text-loop.tsx
│   │   └── useClickOutside.tsx
│   ├── templates/              # Layout & page sections
│   │   ├── navbar.tsx          # Responsive sticky navbar with mobile Sheet menu
│   │   └── footer.tsx          # Footer with TextLoop & animated ThemeSwitch
│   ├── themes/
│   │   └── theme-provider.tsx  # next-themes wrapper
│   └── ui/                     # shadcn/ui + Base UI components
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── navigation-menu.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       └── toast.tsx
└── lib/
    └── utils.ts                # cn() class merging helper
```

---

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint checks |
