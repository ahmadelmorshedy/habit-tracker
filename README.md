# Daily Deeds

A small habit tracker. It shows the handful of things you want to do every day,
so you can see them all in one place.

Built step by step as part of a mentored track.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Continuous integration

`.github/workflows/ci.yml` builds the project on GitHub's machines on every
push. It checks out the repository, installs Node, runs `npm ci` and then
`npm run build`.

`npm ci` rather than `npm install` on purpose: it installs exactly what
`package-lock.json` specifies and fails if the lock file and `package.json`
disagree. An install that quietly picks different versions than the ones I
tested would not be checking anything.

## Where it is up to

Step 1: a static page showing the tracker's name, what it does, and three
habits. No forms, no data files, no interactivity yet.

Step 2: continuous integration, so the build is verified somewhere that has
none of my local setup.
