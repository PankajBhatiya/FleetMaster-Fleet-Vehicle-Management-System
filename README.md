# FleetMaster

## Run locally

From the project root, install the root launcher once and then start both the API and web app:

```bash
npm install
npm start
```

Open http://localhost:5173 in your browser. The API health check is available at http://localhost:5000/api/health.

MongoDB must be running locally. Image uploads are optional: add valid ImageKit credentials to `Backend/.env` only if you need the upload feature.
