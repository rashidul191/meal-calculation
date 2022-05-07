const errorMsg = document.getElementById("error-meg");
errorMsg.style.display = "none";

// total joma
const totalJomaAndKhoroj = (id) => {
  const totalJomaAndKhoroj = document.getElementById("total-" + id).value;
  const totalJomaAndKhorojNumber = parseFloat(totalJomaAndKhoroj);
  if (isNaN(totalJomaAndKhorojNumber)) {
    errorMsg.style.display = "block";
    return false;
  } else {
    errorMsg.style.display = "none";
    return totalJomaAndKhorojNumber;
  }
};

//
const setTakaAse = document.getElementById("taka-ase");
const setMealRate = document.getElementById("meal-rate");
// const setMealRateRound = document.getElementById("Meal-rate-round");

// Meal Rate calculator
const mealRate = () => {
  const totalJoma = totalJomaAndKhoroj("joma");
  const totalBazar = totalJomaAndKhoroj("bazar");
  const totalMeal = totalJomaAndKhoroj("meal");
  const takaAse = totalJoma - totalBazar;
  setTakaAse.innerText = takaAse;

  const totalMealRate = totalBazar / totalMeal;
  fixedMealRate = totalMealRate.toFixed(3);
  setMealRate.innerText = fixedMealRate;

  // set date and time
  const date = document.getElementById("date");
  document.getElementById("set-date").innerText = date.value;
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
  const memberJomaTaka = parseFloat(jomaTaka.value);
  const memberMeal = parseInt(meal.value);

  if (isNaN(memberMeal) || isNaN(memberJomaTaka)) {
    errorMsg.style.display = "block";
  }
  errorMsg.style.display = "none";

  const memberTotalKhoroj = fixedMealRate * memberMeal;
  const memberTakaPabeDibe = memberJomaTaka - memberTotalKhoroj;
  let pabe = 0;
  let dibe = 0;
  if (memberTakaPabeDibe >= 0) {
    pabe = memberTakaPabeDibe;
  } else {
    dibe = memberTakaPabeDibe * -1;
  }
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th scope="row">${count}</th>
    <td class="fw-bold">${memberName}</td>  
    <td>${memberJomaTaka}</td>
    <td>${memberTotalKhoroj.toFixed(2)}</td>
    <td>${memberMeal}</td>
    <td class="text-danger fw-bold">${Math.ceil(dibe)}</td>
    <td class="text-success fw-bold">${Math.floor(pabe)}</td>
    `;
  tbody.appendChild(tr);

  // clear name , Meal, jomaTaka input filed
  name.value = "";
  meal.value = "";
  jomaTaka.value = "";
};

// year set
const date = new Date();
let year = date.getFullYear();
document.getElementById("year-set").innerText = year;
