var values = document.getElementById("colorscontent");
var startColor = "#ffffff";
document.body.style.backgroundColor = startColor;

var colorPicker = new iro.ColorPicker("#picker", {
	color: startColor,
	borderWidth: 5,
	borderColor: "#fff",
});

colorPicker.on('color:change', function(color) {
	values.innerHTML = [
		"hex: " + color.hexString,
		"rgb: " + color.rgbString,
		"hsl: " + color.hslString,
	].join("<br>");
	if(color.hsl.l < 33 || (color.hsl.l < 60 && (color.hsl.h < 45 || color.hsl.h > 196))) {
		document.getElementById('colorscontent').style.color = '#fff';
	} else {
		document.getElementById('colorscontent').style.color = '#2f3640';
	}
	document.body.style.backgroundColor = color.hexString;
});

function reordenar() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = width / height;

    if (ratio > 1) {
		const newHeight = height - 16
		const pickerwidth = (newHeight/ 3) * 2
		document.getElementById("container").style.height = newHeight + "px";
		document.getElementById("container").style.width = newHeight + "px";
		colorPicker.resize(pickerwidth);
    } else {
        const newWidth = width - 16
		const pickerwidth = (newWidth / 3) * 2
		document.getElementById("container").style.width = newWidth + "px";
		document.getElementById("container").style.height = newWidth + "px";
		colorPicker.resize(pickerwidth);
    }
}

window.addEventListener("DOMContentLoaded", reordenar);

window.addEventListener("resize", reordenar);
