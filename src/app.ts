import cors from "cors";
import express, { Application } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";
// import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
// app.use('/api/v1', router);

app.use("/api/v1", router);

app.use(globalErrorHandler);

// Not found route
app.use(notFound);

export default app;
