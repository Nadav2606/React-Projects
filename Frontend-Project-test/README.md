# Game Tracker

A frontend-only React project built with Vite. It displays 20 PC games, supports search, genre filtering, sorting, favorites saved in LocalStorage, game detail pages and YouTube trailer links. The filtering controls live directly in `HomePage`, and all styling uses CSS Modules.

## React requirements

- `useState`: search, filter, sorting and favorites.
- `useEffect`: saving favorites and focusing the search input.
- `useRef`: direct access to the search input.
- Props: data and event handlers passed through reusable components.
- React Router DOM: home, favorites and game-details pages.

## Run locally

```bash
npm install
npm run dev
```

## Adding images

Place images in `src/assets/images`. Import them in `src/data.js`, then replace the relevant `image: null` value. Example:

```js
import redDeadCover from "./assets/images/red-dead-redemption-2.jpg";
```

Then assign `image: redDeadCover` to that game object.
