import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

Sentry.init({
    dsn: "https://60e82c643ea54ad5be965c70f468e5f5@o4504162293972992.ingest.sentry.io/4504162297970689",
    integrations: [new BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>
);
