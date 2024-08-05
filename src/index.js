module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsMap = new Map(bracketsConfig);
  let openBrackets = new Set(bracketsConfig.map(pair => pair[0]));
  let closeBrackets = new Set(bracketsConfig.map(pair => pair[1]));

  for (let char of str) {
    if(openBrackets.has(char)) {
      if (closeBrackets.has(char) && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (closeBrackets.has(char)) {
      if (stack.length === 0 || bracketsMap.get(stack.pop()) !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
