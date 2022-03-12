// # Function
// parameters: list of text, text formatter
// does: applies the formatter for each text
// returns: formatted list of text

function apply_formatter(list, formatter) {
  let formattedList = [];

  for (let i = 0; i < list.length; i++) {
    const text = list[i];

    const newText = formatter(text);

    formattedList.push(newText);
  }
  return formattedList;
}

const newList = apply_formatter(["ram", "david"], function (text) {
  return text.toUpperCase();
});

console.log(newList);
