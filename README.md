# Gao Yiping — portfolio

Personal software-engineering portfolio built with React and deployed to GitHub Pages at [yipinggao.com](https://www.yipinggao.com).

## Run locally

```bash
npm install
npm start
```

The local site opens at `http://localhost:3000`.

## Production check

```bash
npm run build
```

The optimized site is written to `build/`.

## Publish to GitHub Pages

1. Commit and push the source changes to `main`.
2. Run `npm run deploy` from this directory.
3. The deploy script builds the site and publishes `build/` to the `gh-pages` branch.
4. In GitHub, confirm **Settings → Pages → Build and deployment** is set to deploy from the `gh-pages` branch and `/ (root)`.
5. Keep the custom domain set to `www.yipinggao.com` and enable **Enforce HTTPS**.

The tracked `public/CNAME` file preserves the custom domain on every deployment. If the existing Namecheap DNS records already serve `www.yipinggao.com`, no Namecheap changes are required for normal code updates.
