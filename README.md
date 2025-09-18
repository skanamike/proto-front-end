# proto-front-end

This repository contains a small front-end prototype. The repository is set up to match the workspace structure exactly:

- `index.html` — entry HTML file
- `assets/` — built JS/CSS assets
- `proto-front-end/` — additional project files kept as a plain directory

What I added

- `.gitattributes` — enforces consistent LF line endings for text files to avoid LF/CRLF warnings on Windows.
- `README.md` — this file.

How to use

There is no build system included — the repo is a static front-end prototype. To preview locally, open `index.html` in your browser or serve the directory with a static server, for example:

```powershell
# using Python 3
python -m http.server 8000

# or with Node.js (install http-server globally first)
npx http-server -p 8000
```

Contributing

If you make changes, please keep the repository structure and add appropriate files to `assets/` when rebuilding assets.

Line endings

This repo includes a `.gitattributes` file to normalize line endings across platforms. If you see warnings about LF/CRLF, run the following to refresh files with the repository settings:

```powershell
git add --renormalize .
git commit -m "Normalize line endings"
```

License

Add a LICENSE file if you want to set repository licensing. There is no license file included by default.
