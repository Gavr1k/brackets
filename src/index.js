module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  }

  var stack = [];



  for (let char of str) 
  {
    bracketsConfig.forEach(el => {
      if (stack[stack.length - 1] == el[0] && char == el[1]) 
      {
        stack.pop();
      } 
      else if (char == el[0]) 
      {
          stack.push(char);
      }
    });
    
  }
  return (stack.length === 0);
}
