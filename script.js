// Length Conversion
const lengthConvert = document.getElementById('length-convert');
lengthConvert.addEventListener('click', function() {
  const lengthInput = document.getElementById('length-input').value;
  const lengthFrom = document.getElementById('length-from').value;
  const lengthTo = document.getElementById('length-to').value;

  if (lengthFrom === lengthTo) {
    document.getElementById('length-output').value = lengthInput;
    return;
  }

  const meterValue = {
    m: 1,
    km: 1000,
    mi: 1609.34
  };

  const result = (lengthInput * meterValue[lengthFrom]) / meterValue[lengthTo];

  document.getElementById('length-output').value = result.toFixed(2);
});

// Weight Conversion
const weightConvert = document.getElementById('weight-convert');
weightConvert.addEventListener('click', function() {
  const weightInput = document.getElementById('weight-input').value;
 
const weightFrom = document.getElementById('weight-from').value;
const weightTo = document.getElementById('weight-to').value;

if (weightFrom === weightTo) {
document.getElementById('weight-output').value = weightInput;
return;
}

const kilogramValue = {
kg: 1,
g: 0.001,
lb: 0.453592
};

const result = (weightInput * kilogramValue[weightFrom]) / kilogramValue[weightTo];

document.getElementById('weight-output').value = result.toFixed(2);
});

// Area Conversion
const areaConvert = document.getElementById('area-convert');
areaConvert.addEventListener('click', function() {
const areaInput = document.getElementById('area-input').value;
const areaFrom = document.getElementById('area-from').value;
const areaTo = document.getElementById('area-to').value;

if (areaFrom === areaTo) {
document.getElementById('area-output').value = areaInput;
return;
}

const squareMeterValue = {
m2: 1,
km2: 1000000,
ac: 4046.86
};

const result = (areaInput * squareMeterValue[areaFrom]) / squareMeterValue[areaTo];

document.getElementById('area-output').value = result.toFixed(2);
});

// Volume Conversion
const volumeConvert = document.getElementById('volume-convert');
volumeConvert.addEventListener('click', function() {
const volumeInput = document.getElementById('volume-input').value;
const volumeFrom = document.getElementById('volume-from').value;
const volumeTo = document.getElementById('volume-to').value;

if (volumeFrom === volumeTo) {
document.getElementById('volume-output').value = volumeInput;
return;
}

const literValue = {
l: 1,
ml: 0.001,
gal: 3.78541
};

const result = (volumeInput * literValue[volumeFrom]) / literValue[volumeTo];

document.getElementById('volume-output').value = result.toFixed(2);
});