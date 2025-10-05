const zh = require("./zh-cn.json");
const en = require("./en.json");
const fs = require("fs");

zh.features.map((item, index) => {
  item.properties.Date = en.features[index].properties.Date;
});

fs.writeFileSync("./zh-cn.json", JSON.stringify(zh, null, 2));
