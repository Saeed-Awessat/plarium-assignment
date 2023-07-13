import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { sequelize } from "./util/database";
import { routes as setApplicationRoutes } from "./routes";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req: Request, res: Response, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

//test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

//CRUD routes
setApplicationRoutes(app);

//error handling
app.use((req: Request, res: Response) => {
  res.status(404).end();
});

//sync database
sequelize
  .sync()
  .then((result) => {
    console.log("Database connected");
    app.listen(port);
    console.log(`⚡️[server]: Server is  at http://localhost:${port}`);
  })
  .catch((err) => console.log(err));
