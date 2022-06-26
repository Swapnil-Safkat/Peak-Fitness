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
    bmiError.innerText = "Please complete all the fields!";
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
      document.getElementById('bmi-result').classList= `${c.color} w-1/2 p-8 rounded-2xl mx-2 flex flex-col justify-center items-center`;
    }
  });
  return;
};