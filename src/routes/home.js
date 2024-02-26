const express = require("express");
const router = express.Router();

// URLアクセス時
router.get("/", async (req, res) => {
  const body = await load();
  res.render("home", { title: "sample viewer", body: body });
});

// リクエスト受信時
router.post("/", async (req, res) => {
  console.log(JSON.stringify(req.body.test));
  res.json({ result: `${req.body.test}＆レスポンス` });
});

const load = async () => {
  try {
    const test = {
      name: "安井",
      furigana: "やすい",
      gender: "男",
      age: "28",
      address: "東京",
      job: "エンジニア",
      tel: "03-0000-1111",
      email: "xxxxx@gmail,com",
    };
    console.log(JSON.stringify(test));
    return [test];
  } catch (error) {
    console.log(error);
  }
};

module.exports = router;
