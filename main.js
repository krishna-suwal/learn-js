const nameList = ["Ram", "David", "Krishna"];

const html = nameList
  .map(function (name) {
    return "<li>" + name + "</li>";
  })
  .join("");

console.log("<ul>" + html + "</ul>");
