import express from "express";
import cors from "cors";
import uploadRouter from "./routes/upload";
import { errorHandler } from "./middewares/error-middleware";
import { handle404Error } from "./middewares/error404Handler";
import { envConfig } from "./config/congifs";

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => res.json({ status: "get" }));
app.use("/bulkUpload", uploadRouter);

app.use(errorHandler);

app.use(handle404Error);

const port = envConfig.port;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
