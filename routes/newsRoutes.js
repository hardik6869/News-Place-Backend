const express = require("express");
const NewsItemModel = require("../models/newsItem");
const router = express.Router();

router.post("/addnews", async (req, res) => {
  try {
    const newitem = new NewsItemModel(req.body);
    await newitem.save();
    res.send(" News Added Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/getallnewsitems", async (req, res) => {
  try {
    const data = await NewsItemModel.find();
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/getnewsitemsbyuserid", async (req, res) => {
  try {
    const data = await NewsItemModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/getnewsitemsbyid", async (req, res) => {
  try {
    const data = await NewsItemModel.findOne({ _id: req.body.newsid });
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/editnewsitem", async (req, res) => {
  try {
    await NewsItemModel({ _id: req.body.newsid }).updateOne(req.body);
    res.send("News Updated Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/deletenewsitem", async (req, res) => {
  try {
    await NewsItemModel.findOneAndDelete({ _id: req.body.newsid });
    res.send("News Deleted Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/newsartical", async (req, res) => {
  try {
    const data = await NewsItemModel.findOne({ _id: req.body.newsid });
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
