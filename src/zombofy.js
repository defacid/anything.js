var zombofy = function () {
	addRealFunctionalityOnTheFly();
	var interval = setInterval(function(){
		if (typeof $ == "function") {
	    	$('body').append('<div id="zombocontainer"><style>.ball,.spinner{height:100px;width:100px}.spinner{z-index: 999999999;position: fixed;top: 50%;left: 50%;margin-left: -100px;margin-top: -100px;}.ball{left:50%;top:50%;background:rgba(0,255,0,.5);border-radius:50%;float:left;position:absolute}.ball-1{background:rgba(255,0,0,.5);top:0;left:50%;animation:ball1 1s 0s ease infinite;z-index:1}.ball-2{background:rgba(0,255,0,.5);top:50%;left:100%;animation:ball2 1s 0s ease infinite;z-index:2}.ball-3{background:rgba(0,0,255,.5);top:100%;left:50%;animation:ball3 1s 0s ease infinite;z-index:1}.ball-4{background:rgba(255,255,0,.5);top:50%;left:0;animation:ball4 1s 0s ease infinite;z-index:2}.ball-5{background:rgba(255,0,0,.5);top:25;left:75%;animation:ball1 1s 0s ease infinite;z-index:1}.ball-6{background:rgba(0,255,0,.5);top:75%;left:125%;animation:ball2 1s 0s ease infinite;z-index:2}.ball-7{background:rgba(0,0,255,.5);top:100%;left:50%;animation:ball3 1s 0s ease infinite;z-index:1}.ball-8{background:rgba(255,255,0,.5);top:50%;left:0;animation:ball4 1s 0s ease infinite;z-index:2}@keyframes ball1{50%{top:-100%;left:200%;background:rgba(127,127,0,.5)}100%{top:50%;left:100%;background:rgba(0,255,0,.5);z-index:2}}@keyframes ball2{50%{top:200%;left:200%;background:rgba(0,255,255,.5)}100%{top:100%;left:50%;background:rgba(0,0,255,.5);z-index:1}}@keyframes ball3{50%{top:200%;left:-100%;background:rgba(255,0,255,.5)}100%{top:50%;left:0;background:rgba(255,255,0,.5);z-index:2}}@keyframes ball4{50%{top:-100%;left:-100%;background:rgba(255,127,0,.5)}100%{top:0;left:50%;background:rgba(255,0,0,.5);z-index:1}} header{position: fixed;bottom: 20px;left: 20px;z-index: 99999;}</style></div> <div class="spinner"> <div class="ball"></div> <div class="ball ball-1"></div> <div class="ball ball-2"></div> <div class="ball ball-3"></div> <div class="ball ball-4"></div> </div> <header> <span id=\'red\'>Z</span> <span id=\'orange\'>o</span> <span id=\'blue\'>m</span> <span id=\'purple\'>b</span> <span id=\'aqua\'>o</span> <span id=\'blue\'>.</span> <span id=\'orange\'>c</span> <span id=\'green\'>o</span> <span id=\'blue\'>m</span> </header></div>');
	    	clearInterval(interval);

			var mp3 = "http://www.filedropper.com/processing/filedownload.php?id=zombocom";
			var snd = new Audio(mp3);
			var f = document.createDocumentFragment();
			f.appendChild(snd);
			snd.addEventListener('ended', function() {
				f.removeChild(snd);
			});
			snd.play();
	    }
	}, 5);
};

anything.prototype.zombofy = zombofy;