// https://www.omnicalculator.com/other/vertical-exaggeration

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const verticalexaggerationRadio = document.getElementById('verticalexaggerationRadio');
const verticalscaleRadio = document.getElementById('verticalscaleRadio');
const horizontalscaleRadio = document.getElementById('horizontalscaleRadio');

let verticalexaggeration;
let verticalscale = v1;
let horizontalscale = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

verticalexaggerationRadio.addEventListener('click', function() {
  variable1.textContent = 'Vertical scale';
  variable2.textContent = 'Horizontal scale';
  verticalscale = v1;
  horizontalscale = v2;
  result.textContent = '';
});

verticalscaleRadio.addEventListener('click', function() {
  variable1.textContent = 'Vertical exaggeration';
  variable2.textContent = 'Horizontal scale';
  verticalexaggeration = v1;
  horizontalscale = v2;
  result.textContent = '';
});

horizontalscaleRadio.addEventListener('click', function() {
  variable1.textContent = 'Vertical exaggeration';
  variable2.textContent = 'Vertical scale';
  verticalexaggeration = v1;
  verticalscale = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(verticalexaggerationRadio.checked)
    result.textContent = `Vertical exaggeration = ${computeverticalexaggeration().toFixed(2)}`;

  else if(verticalscaleRadio.checked)
    result.textContent = `Vertical scale = ${computeverticalscale().toFixed(2)}`;

  else if(horizontalscaleRadio.checked)
    result.textContent = `Horizontal scale = ${computehorizontalscale().toFixed(2)}`;
})

// calculation

function computeverticalexaggeration() {
  return Number(verticalscale.value) / Number(horizontalscale.value);
}

function computeverticalscale() {
  return Number(verticalexaggeration.value) * Number(horizontalscale.value);
}

function computehorizontalscale() {
  return Number(verticalscale.value) / Number(verticalexaggeration.value);
}