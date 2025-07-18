/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/deloitte/mdg/sales/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
