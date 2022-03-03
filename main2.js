const allList = [
  ["ram", "hari", "shyam"],
  ["gew", "gwe", "gwe"],
  ["asg", "sadgwegwe", "sad"],
  ["gew", "gwe", "asgsdge"],
];

function generate_html(nameList) {
  const html = nameList
    .map(function (name) {
      return "<li>" + name + "</li>";
    })
    .join("");

  return "<ul>" + html + "</ul>";
}

document.querySelector(".lists").innerHTML = allList
  .map(function (nameList) {
    return generate_html(nameList);
  })
  .join("");
