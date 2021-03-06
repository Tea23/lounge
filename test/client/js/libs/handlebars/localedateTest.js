"use strict";

const expect = require("chai").expect;
const localedate = require("../../../../../client/js/libs/handlebars/localedate");

describe("localedate Handlebars helper", function() {
	it("should render a human-readable date", function() {
		// 12PM in UTC time
		const date = new Date("2014-05-22T12:00:00Z");

		// Offset between UTC and local timezone
		const offset = date.getTimezoneOffset() * 60 * 1000;

		// Pretend local timezone is UTC by moving the clock of that offset
		const time = date.getTime() + offset;

		expect(localedate(time)).to.equal("22 May 2014");
	});
});
