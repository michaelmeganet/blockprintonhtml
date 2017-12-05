		if (window.matchMedia) {
                var mediaQueryList = window.matchMedia('print');
                mediaQueryList.addListener(function(mql) {
                    if (mql.matches) {
                        beforePrint();
                    } else {
                        afterPrint();
                    }
                });
            }

		function beforePrint() {
		    $("#AllContent").hide();
		    $(".PrintMessage").show();
		}

		function afterPrint() {
		    $(".PrintMessage").hide();
		    $("#AllContent").show();
		}
		window.onbeforeprint = beforePrint;
        window.onafterprint = afterPrint;