# NexaCore website

Next.js 14 / React website with a homepage and six service pages.

## Run locally

Install Node.js 20 or newer and npm. Extract the ZIP into a folder, open a terminal in that folder, then run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000 (or the URL printed in the terminal).

## Production

```sh
npm run build
npm start
```

Internet access is needed to install dependencies and download the Google font during the build. This is a Next.js source project, not a standalone HTML file.

## Content and styling

- Business details, services and projects: `lib/data.js`
- Service descriptions: `lib/service-details.js`
- Service imagery, credits and headlines: `lib/service-visuals.js`
- Homepage: `app/page.js`
- Service page template: `app/services/[slug]/page.js`
- Styles: `app/globals.css` and `app/services/services.css`
- Images and logos: `public/`
- Stock photo sources: `IMAGE-CREDITS.md`

Before publishing, replace the placeholder phone and WhatsApp numbers in `lib/data.js` and verify the email address. The contact form opens WhatsApp with a pre-filled message; the visitor sends it in WhatsApp. It does not send email or store submissions.

The archive excludes `node_modules`, `.next` and `.next-dev`. Dependencies and build output are recreated by the commands above. Development output uses `.next-dev` so production builds do not overwrite the development cache.
