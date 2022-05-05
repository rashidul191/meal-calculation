// total joma
const totalJomaFun = () => {
  const totalJoma = document.getElementById("total-joma");
  const totalJomaNumber = parseFloat(totalJoma.value);
  return totalJomaNumber;
};
// total bazar
const totalBazarFun = () => {
  const totalBazar = document.getElementById("total-bazar");
  const totalBazarNumber = parseFloat(totalBazar.value);
  return totalBazarNumber;
};

// total Meal rate
const totalMealFun = () => {
  const totalMeal = document.getElementById("total-meal");
  const totalMealNumber = parseFloat(totalMeal.value);
  return totalMealNumber;
};

//
const setTakaAse = document.getElementById("taka-ase");
const setMealRate = document.getElementById("meal-rate");
// const setMealRateRound = document.getElementById("Meal-rate-round");

// Meal Rate calculator
const mealRate = () => {
  const totalJoma = totalJomaFun();
  const totalBazar = totalBazarFun();
  const totalMeal = totalMealFun();

  const takaAse = totalJoma - totalBazar;
  setTakaAse.innerText = takaAse;

  const totalMealRate = totalBazar / totalMeal;
   fixedMealRate = totalMealRate.toFixed(3);
  setMealRate.innerText = fixedMealRate;
//   MealRateRound = Math.round(totalMealRate);
//   setMealRateRound.innerText = MealRateRound;
};

// get member information
const name = document.getElementById("name");
const meal = document.getElementById("meal");
const jomaTaka = document.getElementById("joma-taka");
const tbody = document.getElementById("member-info");
let count = 0;
// add new member
const addMember = () => {
  count++;
  const memberName = name.value;
  const memberMeal = parseInt(meal.value);
  const memberJomaTaka = parseFloat(jomaTaka.value);
  //console.log(memberJomaTaka, memberMeal, memberName , count);

  //console.log(fixedMealRate);

  const memberTotalKhoroj = Math.round(fixedMealRate * memberMeal);
  const memberTakaPabeDibe = memberJomaTaka - memberTotalKhoroj;
  let pabe = 0;
  let dibe = 0;
  if (memberTakaPabeDibe >= 0) {
    pabe = memberTakaPabeDibe;
  }else{
      dibe = memberTakaPabeDibe * -1;
  }
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th scope="row">${count}</th>
    <td class="fw-bold">${memberName}</td>
    <td>${memberMeal}</td>
    <td>${memberJomaTaka}</td>
    <td>${memberTotalKhoroj}</td>
    <td class="text-danger fw-bold">${dibe}</td>
    <td class="text-success fw-bold">${pabe}</td>
    `;
  tbody.appendChild(tr);

  // clear name , Meal, jomaTaka input filed
  name.value = '';
  meal.value = '';
  jomaTaka.value = '';

};

// year set
const date = new Date();
let year = date.getFullYear();
document.getElementById("year-set").innerText = year;
