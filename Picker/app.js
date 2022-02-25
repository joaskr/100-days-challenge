const body = document.querySelector(".body");
const picker = document.getElementById("color-picker");
const header = document.getElementById("color-header");

const fetchPalette = async (red, green, blue) => {
  var url = "http://colormind.io/api/";
  var data = {
    model: "default",
    input: [[red, green, blue], "N", "N", "N", "N"],
  };
  var http = new XMLHttpRequest();

  http.onreadystatechange = await function () {
    if (http.readyState == 4 && http.status == 200) {
      var palette = JSON.parse(http.responseText).result;
      palette.forEach((color, id) => {
        let fetchedColor = `${color[0]}, ${color[1]}, ${color[2]}`;
        let fetchedColorRGB = "rgb(" + fetchedColor + ")";
        const divName = "colorDiv" + id;
        const pName = "colorText" + id;
        document.getElementById(divName).style.backgroundColor =
          fetchedColorRGB;
        document.getElementById(pName).innerHTML = fetchedColorRGB;
      });
    }
  };

  http.open("POST", url, true);
  http.send(JSON.stringify(data));
};

const setPickerValue = () => {
  const pickerValue = picker.value;
  let red = parseInt(pickerValue[1] + pickerValue[2], 16);
  let green = parseInt(pickerValue[3] + pickerValue[4], 16);
  let blue = parseInt(pickerValue[5] + pickerValue[6], 16);
  let rgbColor = `${red}, ${green}, ${blue}`;
  header.innerHTML = "rgb(" + rgbColor + ")";
  fetchPalette(red, green, blue);
};

picker.addEventListener("change", setPickerValue);
document.addEventListener("DOMContentLoaded", setPickerValue);
