
	var $scene = $('#scene');

	// Resize handler.
	(lockInit = function() {
		resize();
	})();

	function resize() {
		$scene[0].style.width = window.innerWidth + 'px';
		$scene[0].style.height = window.innerHeight + 'px';		
	}
	
window.onresize = function(){
	resize();
}
