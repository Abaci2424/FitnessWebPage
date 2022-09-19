document.bmiForm.hesapla.onclick = () => {
  calculateBmi();
};

function calculateBmi() {
  let weight = document.bmiForm.weight.value;
  let height = document.bmiForm.height.value;

  if (weight > 0 && height > 0) {
    let finalBmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    document.bmiForm.bmi.value = finalBmi;

    if (finalBmi < 18.5) {
      document.bmiForm.meaning.value = "İdeal kilonun altında";
    }
    if (finalBmi > 18.5 && finalBmi < 25) {
      document.bmiForm.meaning.value = "İdeal kiloda";
    }
    if (finalBmi > 25) {
      document.bmiForm.meaning.value = "İdeal kilonun üstünde";
    }
  } else {
    document.bmiForm.meaning.value = " İdeal kilonun çok üstünde ";
  }
}
