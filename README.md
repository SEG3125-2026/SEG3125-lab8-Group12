# uoDecks

uoDecks is Group 12's SEG 3125 Lab 8 React web app. It implements the Lab 7 flashcard concept for uOttawa students with four clear interactive processes:

- Exploring: browse, search, and filter decks
- Following instructions / Production: guided deck creation and editing
- Absorbing information: interactive study mode
- Analyzing results: post-session score breakdown

## Tech Stack

- React 19
- Vite 5
- React Router
- Local storage persistence for decks, recent activity, and study sessions

## Key UX Features

- Landing and About pages that follow the Lab 7 visual direction
- Searchable browse experience with recent decks for recognition over recall
- Create/edit flow with validation, inline hints, undo for deleted cards, and cancel confirmation
- Study mode with progress feedback, keyboard shortcuts, repeat controls, and exit freedom
- Results page with accuracy summary and per-card review
- Error prevention and recovery through validation, confirmation modals, undo toasts, and a custom 404 screen

## Heuristic Coverage

The application intentionally exposes all ten heuristics from Lab 7:

- Consistency: shared layout, visual system, and action placement
- Familiar language: deck, card, reveal, study, browse, category
- Simple design: focused study screen and clean panels
- User control and freedom: back, cancel, and repeat controls
- Flexibility and efficiency: search, category chips, and keyboard shortcuts
- Recognition rather than recall: recent decks and visible categories
- Visibility of system status: progress bar, score panel, deck counts, and toasts
- Error prevention: validation and delete confirmation
- Error recovery: undo toasts and friendly fallback pages
- Help and guidance: builder hints and shortcut reminders

## Database Design Document

The Lab 9 preparation document is in [docs/database-design.md](./docs/database-design.md).

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Deployment Note

`vercel.json` includes an SPA rewrite so React Router routes work correctly on Vercel.
