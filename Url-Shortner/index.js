const express = require("express");
const urlRoute = require("./routes/url");
const staticRoute=require("./routes/staticRouter");
const URL = require("./models/url");
const { connectMongoDb } = require("./connect");
const path=require('path')
const app = express();

const PORT = 5000;
connectMongoDb(
  "mongodb+srv://saumya007:saumya7103@cluster0.r0l6c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/test",async(req,res)=>{
  const allUrls=await URL.find({});
  return res.render('home',{
    urls:allUrls,
  })
});
app.use("/url", urlRoute);

app.use("/", staticRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});
app.listen(PORT, () => console.log("Server Started at", PORT));
