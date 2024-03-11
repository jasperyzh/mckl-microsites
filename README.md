# MCKL Microsites

## list of microsites

- https://mckl.edu.my/open-day/
- https://mckl.edu.my/scholarship/
- https://mckl.edu.my/social-work/
- https://mckl.edu.my/acca/
- https://mckl.edu.my/digital-programme/
- https://mckl.edu.my/business-programme/
- https://mckl.edu.my/short-courses/


- http://stagingmckl.fishermen-analytics.com/open-day/
- http://stagingmckl.fishermen-analytics.com/scholarship/
- http://stagingmckl.fishermen-analytics.com/social-work/
- http://stagingmckl.fishermen-analytics.com/acca/
- http://stagingmckl.fishermen-analytics.com/digital-programme/
- http://stagingmckl.fishermen-analytics.com/business-programme/
- http://stagingmckl.fishermen-analytics.com/short-courses/

- http://localhost:3000/open-day/
- http://localhost:3000/scholarship/
- http://localhost:3000/social-work/
- http://localhost:3000/acca/
- http://localhost:3000/digital-programme/
- http://localhost:3000/business-programme/
- http://localhost:3000/short-courses/
- http://localhost:3000/short-courses/free-courses

## log
230717 - new zoho setup for form data; after issue with the zoho' webform
- [ ] Data Backup - formdata to send to both zohocrm and client's own googlesheet as backup
- [ ] Automated Test Submissions - a test submission whenever microsites are updated
- [x] Regular Audits - scheduled to send a leads report to relevant party

230212
- gh_actions Deploy /dist/ via FTP to stagingmckl.fishermen-analytics.com
- added tailwindcss to dev
- updated open-day

## 🚀 Project Structure
Inside Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
...
...
...
```

## commands
All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |
