$(document).ready(function(){

	// ==============================================================*/
	// Remove loading class to "note" document is ready
	// ==============================================================*/

	$('body').removeClass('loading');

	// ==============================================================*/
	// SVG 4 Everybody
	// ==============================================================*/
	svg4everybody();

	// ==============================================================*/
	// Duplicated select field content to make a more visually 
	// adjustable type
	// ==============================================================*/
	customSelects();

	// ==============================================================*/
	// Sort table columns (still in the works)
	// ==============================================================*/
	columnSort();

	// ==============================================================*/
	// Create node and insert SVG file after the body
	// ==============================================================*/

	// Remove local file and uncomment below once on the dev server

	// $.get("./img/spritemap.svg", function(data) {
	//   var div = document.createElement("div");
	//   div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
	//   document.body.insertBefore(div, document.body.childNodes[0]);
	// });

})
//# sourceMappingURL=maps/scripts.js.map
