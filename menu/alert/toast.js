function ShowToast() {
	var sToast = document.getElementById('toast_container');
		sToast.setAttribute('style', 'visibility:visible; animation:animation_toast 3s linear 1;');

	var mToast = document.getElementById('toast_message');
	    mToast.innerHTML = "This is a toast message one";

	setTimeout(HideToast, 3000);
}

function ShowToastTwo() {
	var sToast = document.getElementById('toast_container');
		sToast.setAttribute('style', 'visibility:visible; animation:animation_toast 3s linear 1;');

	var mToast = document.getElementById('toast_message');
	    mToast.innerHTML = "This is a toast message two";

	setTimeout(HideToast, 3000);
}

function HideToast() {
	var sToast = document.getElementById('toast_container');
		sToast.setAttribute('style', 'visibility:hidden; animation:animation_toast 3s linear 1;');

	var mToast = document.getElementById('toast_message');
	    mToast.innerHTML = "This is a toast message";
}