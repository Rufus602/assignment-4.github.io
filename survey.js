
const form = document.getElementById("surveyForm");
const nameInput = form.elements["name"];
const ageInput = form.elements["age"];
const genderInput = form.elements["gender"];
const countryInput = form.elements["country"];
const referralInput = form.elements["referral"];


form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  
  const name = nameInput.value;
  const age = ageInput.value;
  const gender = genderInput.value;
  const country = countryInput.value;
  const referral = referralInput.value;

 
  const confirmMessage = `Please confirm the following information:
    Name: ${name}
    Age: ${age}
    Gender: ${gender}
    Country: ${country}
    How did you find us: ${referral}
  `;
  if (confirm(confirmMessage)) {
    alert("Thank you for submitting the form!");
  }
});
