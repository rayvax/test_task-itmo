## How to run

To run in development mode:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Some important notes

- NextJS 13 have a feature to use 'async-await' in FC, but some hooks (e.g useTranslations) are not working in async functions. The workaround is to make a separate FC that have all of the content (e.g. HomeContent in this project).
- Most of the components are NextJS 13 Server components, so Redux is used without hooks
