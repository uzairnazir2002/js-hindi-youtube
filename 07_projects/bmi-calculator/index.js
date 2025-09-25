const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");


  if (isNaN(height) && isNaN(weight)) {
    result.innerHTML = `<span>Please enter a valid height and weight.</span>`;
    return;
  }

  if (isNaN(height) || height <= 0) {
    result.innerHTML = `<span>Please enter a valid height.</span>`;
    return;
  }

  
  if (isNaN(weight) || weight <= 0) {
    result.innerHTML = `<span>Please enter a valid weight.</span>`;
    return;
  }


  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.6) {
    result.innerHTML = `<span>Your BMI is ${bmi} (Underweight)</span>`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    result.innerHTML = `<span>Your BMI is ${bmi} (Normal range)</span>`;
  } else {
    result.innerHTML = `<span>Your BMI is ${bmi} (Overweight)</span>`;
  }

  console.log("BMI:", bmi);
});
