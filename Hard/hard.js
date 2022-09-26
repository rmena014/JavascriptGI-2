const jerry = { height: 10, mass: 45 };
const tom = { height: 9, mass: 8 };

function formulaBMI(mass, height) {
  return mass / (height * height);
}

let bmiCompare =
  formulaBMI(jerry.mass, jerry.height) > formulaBMI(tom.mass, tom.height);

console.log(`Is Jerry's BMI greater than Toms? ${bmiCompare}`);
