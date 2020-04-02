/*
**
** Creates pagination
**
*/

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

createPagination(a, document.getElementById('body'));

function createPagination(items, appendTo, ajax=false) {
	var elem = document.createElement('div');
	elem.innerHTML = "aloo";

	if(ajax === false){
		document.appendTo.appendChild(elem);
	}
	else {

	}
}
