function randomIntBetween(a, b) {
	return Math.floor(Math.random()*(b-a+1)+a);
}

function generateRandomSparklingFrames(steps, minOpacity, maxOpacity)
{
	var opacity = [],
	percent = [];
	for(i=0; i < steps; i++) {
		do {
			opacity[i] = Math.random().toFixed(2);
		} while (opacity[i] < minOpacity || opacity[i] > maxOpacity);
		percent[i] = randomIntBetween(1,99);
	}
	percent.sort();

	rule = "0% { opacity: " + opacity[0] + "} ";
	for(i=0; i < steps; i++) {
		rule += percent[i]+"% { opacity: " + opacity[i] + "} ";
	}
	rule += "100% { opacity: " + opacity[0] + "} ";

	return rule;
}

function insertStarRule(name, numSteps, minOpacity, maxOpacity, animationTimeMin, animationTimeMax) {
		    CSS = document.styleSheets[0]; // take the default style sheet

		    if (CSS.insertRule) {
		    	try {
		    		CSS.insertRule("@-webkit-keyframes " + name + "{ " + generateRandomSparklingFrames(numSteps, minOpacity, maxOpacity) + "}", CSS.cssRules.length);
		    		CSS.insertRule("." + name + " { -webkit-animation: " + name + " " + randomIntBetween(animationTimeMin, animationTimeMax) + "s infinite }", CSS.cssRules.length);
		    	} catch (e) {}
		    	try {
		    		CSS.insertRule("@keyframes " + name + "{ " + generateRandomSparklingFrames(numSteps, minOpacity, maxOpacity) + "}", CSS.cssRules.length);
		    		CSS.insertRule("." + name + " {animation: " + name + " " + randomIntBetween(animationTimeMin, animationTimeMax) + "s infinite }", CSS.cssRules.length);
		    	} catch (e) {}
		    }

		    if(CSS.addRule) {
		    	try {
		    		CSS.addRule("@-webkit-keyframes " + name, generateRandomSparklingFrames(numSteps, minOpacity, maxOpacity));
		    		CSS.addRule("." + name, "-webkit-animation: " + name + " " + randomIntBetween(animationTimeMin, animationTimeMax) + "s infinite");
		    	} catch (e) {}
		    	try {
		    		CSS.addRule("@keyframes " + name, generateRandomSparklingFrames(numSteps, minOpacity, maxOpacity));
		    		CSS.addRule("." + name, "animation: " + name + " " + randomIntBetween(animationTimeMin, animationTimeMax) + "s infinite");
		    	} catch (e) {}
		    }
		}

		var w = $("#wrapper").width(),
		h = $("#wrapper").height(),
		starsCount = 60;

		for(n = 1; n <= starsCount; n++)
			insertStarRule("s" + n, 5, .1, .9, 1, 1);

		for(i = 0; i < starsCount; i++)
		{
			var size = randomIntBetween(1,4),
			x = Math.min(randomIntBetween(1,w), w-size-5),
			y = Math.min(randomIntBetween(1,h), h-size-5),
			elem = $("<div class='star'></div>");

			elem.css({"top": y, "left": x, "width": size, "height": size});
			elem.addClass("s"+randomIntBetween(1,starsCount));
			$("#wrapper").append(elem);
		}