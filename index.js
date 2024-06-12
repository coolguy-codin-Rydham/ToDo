import { ListItemSecondaryAction } from "@material-ui/core";
import express from "express";
// import ejs from "ejs";
const app = express();
const port = 3000;

let newItems = []

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  const cury = today.toLocaleDateString("en-US", options);
  res.render("list", { day: cury, items:newItems });
});

app.post("/", (req, res, next)=>{
    newItems.push(req.body.newItem)
    res.redirect("/")
})

app.listen(port, () => {
  console.log("Listening at http://localhost:" + port);
});
