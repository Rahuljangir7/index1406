export default function calculation(val, inpVal) {
  const symbols = ["*", "%", "-", "+", String.fromCodePoint(247)]; // Including the division symbol (÷)

  if (val === "AC") return ""; // Clear all
  else if (val === String.fromCodePoint(8592)) {
    return inpVal.substring(0, inpVal.length - 1); // Backspace
  } else if (val === "x" + String.fromCodePoint(178))  {
    if (Number(inpVal)) return (Number(inpVal) ** 2).toString(); // Return square
    return "";
  }

  // Handle operators
  for (let check of symbols) {
    if (check === val) {
      if (inpVal === "") return ""; // Do not allow operators if empty
      else if (inpVal.at(-1) === val) {
        return inpVal.substring(0, inpVal.length - 1); // Remove last operator
      }

      // Remove the last operator if it's a different one
      for (let sym of symbols) {
        if (inpVal.at(-1) === sym) {
          return inpVal.substring(0, inpVal.length - 1) + check; // Replace last operator with current
        }
      }
    }
  }

  // Handle calculation on "="
  if (val === "=") {
    
    let changeDivide = "";
    for (let char of inpVal) {
      if (char === symbols[4]) {
        changeDivide += "/";
      } else {
        changeDivide += char;
      }
    }

    try {
      let result = eval(changeDivide).toString();
      return result;
    } catch (err) {
      return inpVal;
    }
  }

  // Append current input
  return inpVal + val;
}
