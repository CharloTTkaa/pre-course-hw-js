const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
  const flagColors = colors.filter(color => color === "черный" || color === "красный" || color === "желтый");
  const flagFormula = flagColors.join("-");
  return flagFormula;
}

console.log(createColorString()); 
