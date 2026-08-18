# Final portfolio correction checklist

Completed the requested final correction pass. The reference developer content is removed from the source, the hero now uses the animated PK Codes robot with reduced-motion handling, authentic screenshots are staged for Waka, Beacon, Airville, and You're Enough, Airville is included, Heralds is represented without an invented screenshot because no official public URL was discoverable, service cards remain CSS-atmospheric, and desktop/mobile checks plus type/build validation pass.

## New screenshot art direction

- [x] Preserve the current Waka-inspired dark cinematic project-card style.
- [x] Blend authentic Waka, Beacon, and You're Enough screenshots into dark compositions with sharp centers, feathered edges, and restrained green glow.
- [x] Keep Airville as a clean, direct authentic screenshot presentation.
- [x] Verify project screenshot recognizability and responsive behavior after refinement.

## Secure authenticated project screenshot correction

- [x] Open Beacon and determine whether a secure authenticated session is available.
- [x] Capture only the post-login Beacon dashboard; never record, hard-code, or publish credentials.
- [x] Check You're Enough for an accessible authenticated/product experience and use it only if securely available.
- [x] Replace login-page visuals and preserve cinematic framing; keep Airville unchanged.

## Premium scroll animation pass

- [x] Add smooth anchor scrolling and a minimal top scroll-progress indicator.
- [x] Add sticky-nav scrolled state with blur, opacity, and compact transition.
- [x] Add viewport reveal choreography with staggered groups across sections.
- [x] Add subtle hero entrance, robot idle motion, card hover depth, and restrained project parallax.
- [x] Respect prefers-reduced-motion and verify desktop/mobile performance.

## Social icon update

- [x] Replace the social-row email icon with the official Instagram icon and profile link.
- [x] Preserve GitHub, LinkedIn, X, and contact-section email behavior.
- [x] Verify new-tab behavior, aria-label, hover styling, and production build.

## Vercel deployment repair

- [x] Audit whether any frontend code imports or requires server/index.ts, Express, APIs, auth, or database access.
- [x] Confirm the repository root contains package.json, client/index.html, vite.config.ts, and the intended Vite entrypoint.
- [x] If static-only, remove server/index.ts and unused Express/server build dependencies and add correct Vercel static configuration.
- [x] Verify the production output and preview behavior, then push the fix to the GitHub main branch.

## Production asset delivery repair

- [x] Inspect live console and network failures for images and the robot visual.
- [x] Compare source asset references, filename casing, public placement, and final dist output.
- [x] Identify whether the robot is a static image, CSS animation, or external runtime and verify its requests/configuration.
- [x] Fix broken production asset delivery, verify the live site, and redeploy.

## Reported live deployment mismatch

- [x] Verify local HEAD, remote `user_github`, and GitHub `main` contain the unique robot asset reference.
- [x] Compare cache-busted live HTML and image responses against the repository version.
- [x] Apply a durable fix if the deployed site is stale or the storage asset is wrong.
- [x] Push the confirmed fix to GitHub main, redeploy, and recheck the public URL.

## Vercel production robot rendering issue

- [ ] Inspect `pk-codes-portfolio.vercel.app` directly, including the actual bundle, image response, and computed hero styles.
- [ ] Determine whether Vercel is applying a different asset URL, content type, CSS compositing rule, or stale asset.
- [ ] Apply and validate a Vercel-safe hero rendering fix.
- [ ] Push/redeploy and verify the Vercel production URL on desktop and mobile.
