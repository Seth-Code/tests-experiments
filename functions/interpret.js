var interpret = function (command) {
  const parseOs = command.replaceAll("()", "o");
  return parseOs.replaceAll("(al)", "al");
};
console.log(interpret("G()()()()(al)"));
