function formatIfElse(codeLine) {
  const parts = codeLine.split(/([{}])/);
  let formattedCode = "";
  let indentLevel = 0;

  function addIndent(level) {
    return "    ".repeat(level);
  }

  parts.forEach((part) => {
    if (part === "{") {
      formattedCode += part + "\n" + addIndent(indentLevel + 1);
      indentLevel++;
    } else if (part === "}") {
      indentLevel--;
      formattedCode += "\n" + addIndent(indentLevel) + part;
    } else {
      formattedCode += addIndent(indentLevel) + part.trim() + " ";
    }
  });

  return formattedCode;
}

const data =
  "const format = (m) => { const n =10 ; if (m+n>10) { if (m+n>20) { console.log('over 20'); if (m+n>30) { console.log('over 30') if (m+n>40) { console.log('over 40') } } } } }";
const a = "if (a==1) { return a } else { return b }";

console.log(formatIfElse(data));
