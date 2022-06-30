//get all the sections
const sections = [
  document.getElementById("section-bmi"),
  document.getElementById("section-bmr"),
  document.getElementById("section-ideal-weight"),
  document.getElementById("section-calorie")
];

//manage view
const viewManager = (view) => {
  sections.map(sec => {
    sec.classList.replace("block", "hidden");
  })
  let index = 0;
  for (let v of view) {
    if (v) {
      sections[index].classList.replace("hidden", "block");
      break;
    }
    index++;
  };
};
viewManager([true, false, false, false])

const BMITable = [
  {
    category: 'Severe Thinness',
    lower: 0,
    upper: 16,
    color: 'bg-red-400'
  },
  {
    category: 'Moderate Thinness',
    lower: 16,
    upper: 17,
    color: 'bg-red-400'
  },
  {
    category: 'Mild Thinness',
    lower: 17,
    upper: 18.5,
    color: 'bg-yellow-400'
  },
  {
    category: 'Normal',
    lower: 18.5,
    upper: 25,
    color: 'bg-green-400'
  },
  {
    category: 'Overweight',
    lower: 25,
    upper: 30,
    color: 'bg-yellow-400'
  },
  {
    category: 'Obese Class I',
    lower: 30,
    upper: 35,
    color: 'bg-red-400'
  },
  {
    category: 'Obese Class II',
    lower: 35,
    upper: 40,
    color: 'bg-red-400'
  },
  {
    category: 'Obese Class III',
    lower: 40,
    upper: 999999,
    color: 'bg-red-400'
  },
];

const calculateBMI = () => {
  const bmiError = document.getElementById('bmi-error');
  const bmiHeightFeet = +document.getElementById('bmi-height-feet').value;
  const bmiHeightInch = +document.getElementById('bmi-height-inch').value;
  const bmiWeight = +document.getElementById('bmi-weight').value;
  if (!bmiHeightFeet || !bmiHeightInch || !bmiWeight) {
    bmiError.innerText = "Please Fill Required Fields!";
    return;
  } else {
    bmiError.innerText = "";
  }
  const bmiHeight = bmiHeightFeet * 12 + bmiHeightInch;
  const weightInPound = bmiWeight * 2.20462;
  let bmi = (703 * weightInPound) / (bmiHeight * bmiHeight);
  document.getElementById('place-bmi').innerText = bmi.toFixed(1);
  BMITable.map(c => {
    const bmiPlaceholder = document.getElementById("category-bmi");
    if (bmi > c.lower && bmi < c.upper) {
      bmiPlaceholder.innerText = `You BMI is ${c.category} as per WHO recommended`;
      document.getElementById('bmi-result').classList = `${c.color} w-1/2 p-8 rounded-2xl mx-2 flex flex-col justify-center items-center`;
    }
  });
  return;
};

const calculateBMR = () => {
  const bmrError = document.getElementById('bmr-error');
  const bmrAge = +document.getElementById('bmr-age').value;
  const bmrWeight = +document.getElementById('bmr-weight').value;
  const bmrHeightFeet = +document.getElementById('bmr-height-feet').value;
  const bmrHeightInch = +document.getElementById('bmr-height-inch').value;
  const bmrGenderMale = document.getElementById('bmr-gender-male').checked;
  if (!bmrHeightFeet || !bmrHeightInch || !bmrAge || !bmrWeight) {
    bmrError.innerText = "Please Fill Required Fields!";
    return;
  } else {
    bmrError.innerText = "";
  }
  const heightInCm = (bmrHeightFeet * 12 + bmrHeightInch) * 2.54;
  let bmr = 0
  if (bmrGenderMale) bmr = 10 * bmrWeight + 6.25 * heightInCm - 5 * bmrAge + 5;
  else bmr = 10 * bmrWeight + 6.25 * heightInCm - 5 * bmrAge - 161;
  document.getElementById('place-bmr').innerText = bmr;
  return;
};

const calculateIW = () => {
  const iwError = document.getElementById('iw-error');
  const iwHeightFeet = +document.getElementById('iw-height-feet').value;
  const iwHeightInch = +document.getElementById('iw-height-inch').value;
  const iwGenderMale = document.getElementById('iw-gender-male').checked;
  const placeIW = document.getElementById('place-iw');
  if (!iwHeightFeet || !iwHeightInch) {
    iwError.innerText = "Please Fill Required Fields!";
    return;
  } else {
    iwError.innerText = "";
  }
  const iwHeight = iwHeightFeet * 12 + iwHeightInch;
  let man = 50;
  let woman = 45.5;
  if (iwGenderMale) {
    if (iwHeight > 60) man = man + (iwHeight - 66) * 2.3;
    placeIW.innerText = man;
  } else {
    if (iwHeight > 60) woman = woman + (iwHeight - 66) * 2.3;
    placeIW.innerText = woman;
  }
  return;
};

const calculateCalorie = () => {
  const calorieError = document.getElementById('calorie-error');
  const calorieAge = +document.getElementById('calorie-age').value;
  const calorieWeight = +document.getElementById('calorie-weight').value;
  const calorieHeightFeet = +document.getElementById('calorie-height-feet').value;
  const calorieHeightInch = +document.getElementById('calorie-height-inch').value;
  const calorieGenderMale = document.getElementById('calorie-gender-male').checked;
  if (!calorieHeightFeet || !calorieHeightInch || !calorieAge || !calorieWeight) {
    calorieError.innerText = "Please Fill Required Fields!";
    return;
  } else {
    calorieError.innerText = "";
  }
  const heightInCm = (calorieHeightFeet * 12 + calorieHeightInch) * 2.54;
  let calorie = 0
  if (calorieGenderMale) calorie = 10 * calorieWeight + 6.25 * heightInCm - 5 * calorieAge + 5;
  else calorie = 9.247 * calorieWeight + 3.098 * heightInCm - 4.33 * calorieAge + 447.593;
  document.getElementById('place-calorie').innerText = calorie;
  return;
};