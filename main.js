/ ------------- DOM Elements -------------
const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const resultEl = document.getElementById("result");
const btn       = document.getElementById("calcBtn");

// ------------- Events -------------
btn.addEventListener("click", calculateBMI);

// Also submit with Enter key inside inputs
[heightEl, weightEl].forEach(inp => {
  inp.addEventListener("keypress", e => {
    if (e.key === "Enter") calculateBMI();
  });
});

// ------------- Logic -------------
function calculateBMI() {
  const h = parseFloat(heightEl.value);
  const w = parseFloat(weightEl.value);

  // Basic validation
  if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
    showResult("⚠️ Enter valid numbers!", "#d40000");
    return;
  }

  const bmi = w / (h * h);
  const bmiStr = bmi.toFixed(2);

  let status = "";
  if      (bmi < 18.5) status = "Underweight";
  else if (bmi < 24.9) status = "Normal weight";
  else if (bmi < 29.9) status = "Overweight";
  else                 status = "Obese";

  showResult(Your BMI is ${bmiStr} (${status}), "#0f8f00");
}

// Helper to update UI
function showResult(msg, color){
  resultEl.textContent = msg;
  resultEl.style.color = color;
}