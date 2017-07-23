$(window).on("resize", function () {
	if (window.matchMedia('(max-width: 700px)').matches) {
		$(function () {
			window.CP.stopExecutionOnTimeout(2);
			var $container = $('#pgthumbs');
			$container.imagesLoaded(function () {
				window.CP.stopExecutionOnTimeout(1);
				$container.masonry({
					columnWidth: function (containerWidth) {
						return containerWidth / 2;
					}
				});
			});
		});
	}
	else if (window.matchMedia('(max-width: 1400px)').matches) {
		$(function () {
			window.CP.stopExecutionOnTimeout(2);
			var $container = $('#pgthumbs');
			$container.imagesLoaded(function () {
				window.CP.stopExecutionOnTimeout(1);
				$container.masonry({
					columnWidth: function (containerWidth) {
						return containerWidth / 3;
					}
				});
			});
		});
	}
	else {
		$(function () {
			window.CP.stopExecutionOnTimeout(2);
			var $container = $('#pgthumbs');
			$container.imagesLoaded(function () {
				window.CP.stopExecutionOnTimeout(1);
				$container.masonry({
					columnWidth: function (containerWidth) {
						return containerWidth / 4;
					}
				});
			});
		});
	}
}).resize();