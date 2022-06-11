var ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "main",
    repo: "https://github.com/mluo24/mluo24.github.io.git",
  },
  function (err) {
    if (err) console.log(err)
    else console.log("deployed")
  }
)
