import bodyParser from "body-parser";
import express from "express";
import DB from "./src/DB";
import cors from "cors";
import morgan from "morgan";
import OrnamentData from "./src/OrnamentData";

const app = express();
const port = process.env.PORT || 3001;
const db = new DB();

app.use(morgan("tiny"));

app.use(
  cors()
  //   {
  //   origin: "http://localhost:3000/",
  // }
);

app.use(bodyParser.json());

app.get("/ornaments", (req, res) => {
  res.send({ ornaments: db.getOrnaments() });
});

app.post("/ornaments", (req, res) => {
  const userId = req.header("user-id");

  let ornament: OrnamentData = req.body;
  ornament.creatingUser = userId;

  const newOrnament = db.addOrnament(ornament);
  res.send({ newOrnament });
});

app.put("/ornaments/:id", (req, res) => {
  const { id } = req.params;
  const ornament = req.body;
  db.updateOrnament(id, ornament);
  res.send();
});

app.delete("/ornaments/:id", (req, res) => {
  const { id } = req.params;
  db.removeOrnament(id);
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
