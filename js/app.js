// error massage
const errorMsg = document.getElementById("error-meg");

// total joma
const totalJomaAndKhoroj = (id) => {
  const totalJomaAndKhoroj = document.getElementById("total-" + id).value;
  if (totalJomaAndKhoroj == "") {
    errorMsg.innerText = "Error !!! input is empty, please try again";
    return;
  } else {
    const totalJomaAndKhorojNumber = parseFloat(totalJomaAndKhoroj);
    if (totalJomaAndKhorojNumber >= 0) {
      errorMsg.style.display = "none";
      return totalJomaAndKhorojNumber;
    } else {
      errorMsg.innerText = "Error !!! it's not a valid input, please try again";
      return 0;
    }
  }
};

// output on meal rate and taka ase.
const setTakaAse = document.getElementById("taka-ase");
const setMealRate = document.getElementById("meal-rate");

// Meal Rate calculator
const mealRate = () => {
  const totalJoma = totalJomaAndKhoroj("joma");
  const totalBazar = totalJomaAndKhoroj("bazar");
  const totalMeal = totalJomaAndKhoroj("meal");
  const takaAse = totalJoma - totalBazar;
  setTakaAse.innerText = takaAse;
  const totalMealRate = totalBazar / totalMeal;
  fixedMealRate = totalMealRate.toFixed(2);
  setMealRate.innerText = fixedMealRate;

  // set date and time
  const date = document.getElementById("date");
  document.getElementById("set-date").innerText = date.value;
  date.value = "";
};

let count = 0;
// add new member
const addMember = () => {
  // get member information
  const name = document.getElementById("name");
  const jomaTaka = document.getElementById("joma-taka");
  const meal = document.getElementById("meal");
  const tbody = document.getElementById("member-info");

  const totalJoma = totalJomaAndKhoroj("joma");
  const totalMeal = totalJomaAndKhoroj("meal");
  const memberName = name.value;
  const memberJomaTaka = parseFloat(jomaTaka.value);
  const memberMeal = parseInt(meal.value);
  let pabe = 0;
  let dibe = 0;
  if (name.value == "" || jomaTaka.value == "" || meal.value == "") {
    errorMsg.innerText = "Error!!! member info input is empty, please try again";
    return;
  } else if (totalJoma >= memberJomaTaka && totalMeal >= memberMeal) {
    const memberTotalKhoroj = fixedMealRate * memberMeal;
    const memberTakaPabeDibe = memberJomaTaka - memberTotalKhoroj;
    count++;

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
  } else {   
    // error massage
    const errorMsg = document.getElementById("error-meg");
    errorMsg.innerText = "Error !!! it's not a valid input, please try again";
    return;
  }
};

// year set
const date = new Date();
let year = date.getFullYear();
document.getElementById("year-set").innerText = year;
