# Deezer Music App

This is a Deezer web app that explores the deezer database.

Hosted Link: [Deezer Music App](https://deezer-mecha.netlify.app/)

## Technologies used

1. Yarn
2. React JS
3. Typescript
4. Tailwind UI
5. React Testing Library

## Setting up locally

- Clone the repo
- `cd` into the project's folder: `cd deezer-music-app`
- Install dependencies:  `yarn install`
- Start the app: `yarn start`

App is now available at: [http://localhost:3000/](http://localhost:3000).


## API reference
This app cosumes data from a Node JS API that I made as a wrapper for the  Deezer API. It is housed [here](https://github.com/brian-mecha/deezer-music-api).

## Project Structure
```
├── README.md
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── static
│       ├── css
│       │   ├── main.124af387.css
│       │   └── main.124af387.css.map
│       └── js
│           ├── 787.d6452b40.chunk.js
│           ├── 787.d6452b40.chunk.js.map
│           ├── main.68f878f5.js
│           ├── main.68f878f5.js.LICENSE.txt
│           └── main.68f878f5.js.map
├── coverage
│   ├── clover.xml
│   ├── coverage-final.json
│   ├── lcov-report
│   │   ├── base.css
│   │   ├── block-navigation.js
│   │   ├── favicon.png
│   │   ├── index.html
│   │   ├── prettify.css
│   │   ├── prettify.js
│   │   ├── sort-arrow-sprite.png
│   │   ├── sorter.js
│   │   └── src
│   │       ├── App.tsx.html
│   │       ├── components
│   │       │   ├── Album.tsx.html
│   │       │   ├── Artist.tsx.html
│   │       │   ├── Badge.tsx.html
│   │       │   ├── NavBar.tsx.html
│   │       │   ├── Navigation.tsx.html
│   │       │   ├── Routes.tsx.html
│   │       │   ├── Spinner.tsx.html
│   │       │   ├── Track.tsx.html
│   │       │   └── index.html
│   │       ├── helpers
│   │       │   ├── index.html
│   │       │   └── useStateWithCallback.ts.html
│   │       ├── index.html
│   │       ├── index.tsx.html
│   │       ├── pages
│   │       │   ├── 404Page.tsx.html
│   │       │   ├── ArtistDetailPage.tsx.html
│   │       │   ├── HomePage.tsx.html
│   │       │   └── index.html
│   │       ├── reportWebVitals.ts.html
│   │       └── stores
│   │           ├── ApiService.ts.html
│   │           ├── Artist
│   │           │   ├── ArtistStore.ts.html
│   │           │   └── index.html
│   │           ├── RootStore.ts.html
│   │           ├── StoreProvider.tsx.html
│   │           └── index.html
│   └── lcov.info
├── node_modules  [815 entries exceeds filelimit, not opening dir]
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── Album.tsx
│   │   ├── Artist.tsx
│   │   ├── Badge.tsx
│   │   ├── NavBar.tsx
│   │   ├── Navigation.tsx
│   │   ├── Routes.tsx
│   │   ├── Spinner.tsx
│   │   └── Track.tsx
│   ├── helpers
│   │   └── useStateWithCallback.ts
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── pages
│   │   ├── 404Page.tsx
│   │   ├── ArtistDetailPage.tsx
│   │   └── HomePage.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   ├── stores
│   │   ├── ApiService.ts
│   │   ├── Artist
│   │   │   └── ArtistStore.ts
│   │   ├── RootStore.ts
│   │   └── StoreProvider.tsx
│   └── tests
│       ├── App.test.tsx
│       ├── components
│       │   ├── Album.test.tsx
│       │   ├── Artist.test.tsx
│       │   ├── NavBar.test.tsx
│       │   ├── Navigation.test.tsx
│       │   └── Track.test.tsx
│       └── pages
│           ├── 404Page.test.tsx
│           ├── ArtistDetailPage.test.tsx
│           └── HomePage.test.tsx
├── tailwind.config.js
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```

## App Screeshot
### Landing Page

<img width="1678" alt="Screenshot 2022-08-22 at 3 58 29 AM" src="https://user-images.githubusercontent.com/25217873/185821786-cce5eff0-53be-4977-a47d-ab86c2f4a04a.png">

### Search
![search_deezer](https://user-images.githubusercontent.com/25217873/185822321-3cd88737-87bf-4dcf-aaf9-f3205f7494f4.gif)

### Artist Page
![Screenshot 2022-08-22 at 4 32 13 AM](https://user-images.githubusercontent.com/25217873/185821931-7d05ada5-2830-43b1-a72b-9368e40df758.png)

![Screenshot 2022-08-22 at 4 32 34 AM](https://user-images.githubusercontent.com/25217873/185821950-dff95b68-b3d5-489e-a89d-5e2e02bdf086.png)


## Test Coverage
<img width="1206" alt="Screenshot 2022-08-22 at 3 43 27 AM" src="https://user-images.githubusercontent.com/25217873/185821730-a6b7bba2-fa96-48d6-85c1-8e296cd5abf7.png">
