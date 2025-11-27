const fs = require("node:fs");
const url = "http://ivanfa71.beget.tech/sitemap.xml";
(async () => {
  const result = await fetch(url);
  let data = await result.text();
  console.log("data: ", data);

  fs.writeFile("./sitemap2.xml", data, (err) => {
    if (err) console.error(err);
    else {
      console.log("File writen!");
    }
  });
})();