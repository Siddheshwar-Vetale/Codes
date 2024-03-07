const SelectState = (value) => {
  countrySelector = document.getElementById("country");
  stateselector = document.getElementById("state");
  state.innerHTML = "Select State";
  if (countrySelector.value == "india") {
    var optionArray = [
      "Select City",
      "Maharashtra",
      "Delhi",
      "Karnataka",
      "Tamilnadu",
    ];
  } else if (countrySelector.value == "us") {
    var optionArray = [
      "Select State",
      "Alaska",
      "California",
      "Arizona",
    ];
  }
  for (var option in optionArray) {
    var pair = optionArray[option];
    var newOption = document.createElement("option");
    newOption.innerHTML = pair;
    stateselector.options.add(newOption);
  }
};
