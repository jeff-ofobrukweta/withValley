This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project takes a **modular and atomic approach** to UI development using:

- **Next.js App Router** for routing and performance-enhanced rendering.
- **Tailwind CSS** for rapid utility-based styling.
- **shadcn/ui** components for accessibility-compliant primitives and dialog modals.
- **Lucide-react** for consistent and scalable SVG icons.

**Component Structure and Rationale**

- **Reusable**: All components are built with reusability in mind.
- **Isolated Styles**: Gradients and borders use custom Tailwind config or inline styles for maximum visual control.
- **Composable**: Components like `BaseModal` accept `children` as props and manage state externally.

**Assumptions and Edge Case Handling**

- **Tag Pills**: All tags are assumed to have a `label` and `icon`. When icons are missing, layout still renders cleanly.
- **Gradient Borders**: Since Tailwind doesn’t support gradient borders natively, `p-[1px]` gradient wrappers are used around white cards to simulate the effect.
- **Modal Sizing**: Modals default to full height & width and are right-aligned. They also support arbitrary children for flexibility.
- **Content Overflow**: Scroll behavior is managed via internal `<div>` wrappers rather than on the `Dialog` component itself, to preserve modal boundaries.

**Accessibility Considerations**

- All dialogs use **shadcn/ui's Dialog** component, which includes:
  - ARIA roles
  - Focus traps
  - Keyboard navigation support
- Buttons use clear **focus outlines** and `hover:opacity` transitions.
- Icons are paired with **descriptive text** for improved screen reader clarity.
- Modal close buttons are accessible via the `Esc` key and are visually discoverable.

**Performance Considerations**

- **Stateless UI components** are used where possible to reduce unnecessary re-renders.
- **Dialogs** are conditionally rendered on trigger, not mounted by default.
- Avoided unnecessary **animation layers** and expensive layout shifts.
- **Tailwind CSS** purging ensures minimal CSS payload.
- Components like `TagGroup` and `MessageCard` can optionally use `React.memo` for additional optimization.

**What I'd Refactor With More Time**

- Extract Tailwind **colors and spacing into design tokens** to enable easier theming and scaling.
- Add **unit and integration tests** using Vitest or Jest for core UI interactions (e.g., modal open/close, tag selection).
- Introduce **global state management** (e.g., Jotai or Zustand) for better scalability.
- Improve **icon fallback logic** in the tag system for better robustness.
- Use **accessibility audit tools** like Axe or Lighthouse to catch minor ARIA issues.
- Polish **modal transitions and animations** using Framer Motion for smoother UX.



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
