import * as express from 'express';
import {  handleGlobalErrors } from '@surveychimp/surveychimp-lib';
import surveyRouter from './routes/surveyRouter';
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

const app = express();

Sentry.init({
  dsn: "https://f9ae4c2c18724015ba217a0a3a7f877d@o4504162293972992.ingest.sentry.io/4504162297970688",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

//Required to parse json body
app.use(express.json());

//Routers
app.use(surveyRouter);
app.use(Sentry.Handlers.errorHandler());

//Global error handler
app.use(handleGlobalErrors);

export default app;