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

const calculateBMI = ()=>{
  const bmiHeightFeet = document.getElementById('bmi-height-feet').value;
  console.log(bmiHeightFeet);
return ;
};