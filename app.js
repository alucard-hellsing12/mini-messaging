import express from "express";
import path from "node:path";
import indexRouter from "./routes/index.js";
import newRouter from "./routes/new.js";

const app = express();
app.set("views",path.join(import.meta.dirname,"views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended : true}));

app.use("/",indexRouter);
app.use("/new",newRouter);

app.listen(3000);