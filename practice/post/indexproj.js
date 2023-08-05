import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 8000;
let band="";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
  // Assuming you want to log the request body, use req.body instead of res.body
  console.log(req.body);
  band=req.body['name']+" "+req.body["Sname"]
  // Assuming you want to send a response for the post request
  res.send(`<h1>WELCOME</h1><br><h1>${band}</h1>`);
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
