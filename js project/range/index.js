const rangevalue = document.querySelector(".slider-container .price-slider");
const rangeInputvalue = document.querySelectorAll(".range-input input");
let priceGap = 1000;
const priceInputvalue = document.querySelectorAll(".price-input input");

for (let i = 0; i < priceInputvalue.length; i++) {
  priceInputvalue[i].addEventListener("input", (e) => {
    let minp = parseInt(priceInputvalue[0].value);
    let maxp = parseInt(priceInputvalue[1].value);
    let diff = minp - maxp;

    if (minp < 0) {
      alert("Minimum");
      priceInputvalue[0].value = 0;
      minp = 0;
    }

    if (maxp > 10000) {
      alert("Maximum");
      priceInputvalue[1].value = 10000;
      maxp = 10000;
    }

    if (minp > maxp - priceGap) {
      priceInputvalue[0].value = maxp - priceGap;
      minp = maxp - priceGap;

      if (minp < 0) {
        priceInputvalue[0].value = 0;
        minp = 0;
      }
    }

    if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
      if (e.target.className === "min-input") {
        rangeInputvalue[0].value = minp;
        let value1 = rangeInputvalue[0].max;
        rangevalue.style.left = `${(minp / value1) * 100}%`;
      } else {
        rangeInputvalue[1].value = maxp;
        let value2 = rangeInputvalue[1].max;
        rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
      }
    }
  });

  for (let i = 0; i < rangeInputvalue.length; i++) {
    rangeInputvalue[i].addEventListener("input", (e) => {
      let minval = parseInt(rangeInputvalue[0].value);
      let maxval = parseInt(rangeInputvalue[1].value);

      let diff = maxval - minval;

      if (diff < priceGap) {
        if (e.target.className === "min-range") {
          rangeInputvalue[0].value = maxval - priceGap;
        } else {
          rangeInputvalue[1].value = minval + priceGap;
        }
      } else {
        priceInputvalue[0].value = minval;
        priceInputvalue[1].value = maxval;
        rangevalue.style.left = `${(minval / rangeInputvalue[0].max) * 100}%`;
        rangevalue.style.right = `${
          100 - (maxval / rangeInputvalue[1].max) * 100
        }%`;
      }
    });
  }
}