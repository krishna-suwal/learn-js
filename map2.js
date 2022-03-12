const nameLists = [
  ["a", "b", "c"],
  ["g", "f", "ge"],
  ["a", "we", "d"],
  ["w", "w", "ge"],
];

function generateHtml(nameList) {
  return (
    "<strong>" +
    nameList
      .map(function (name) {
        return "<div>" + name + "</div>";
      })
      .join("") +
    "</strong>"
  );
}

function generateAllHtml(name) {
  return name
    .map(function (list) {
      return generateHtml(list);
    })
    .join("");
}

document.querySelector(".lists").innerHTML = generateAllHtml(nameLists);
