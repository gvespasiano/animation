(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animateassign_atlas_1", frames: [[0,414,599,53],[0,290,599,60],[0,352,599,60],[0,0,288,288],[290,0,253,254]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["animateassign_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["animateassign_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["animateassign_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Artboard1 = function() {
	this.initialize(ss["animateassign_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.FavIcon = function() {
	this.initialize(ss["animateassign_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Artboard1();
	this.instance.setTransform(-39.9,-47.5,0.3048,0.3048,4.9542);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-47.5,95.1,95.1);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FavIcon();
	this.instance.setTransform(-38.55,-38.7,0.3049,0.3049);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-38.7,77.1,77.5);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FavIcon();
	this.instance.setTransform(-38.55,-38.7,0.3049,0.3049);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-38.7,77.1,77.5);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AlyFzQiaiaAAjZQAAjYCaiaQCaiaDYAAQDZAACaCaQCaCaAADYQAADZiaCaQiaCajZAAQjYAAiaiag");
	this.shape.setTransform(52.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,105);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Txt
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0.05,11.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(0.05,11.45,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(0.05,13.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

	// BttnBack
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25053F").s().p("A2pETQgyAAAAgyIAAnBQAAgyAyAAMAtTAAAQAyAAAAAyIAAHBQAAAygyAAg");
	this.shape.setTransform(149.975,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252F67").s().p("A2pETQgyAAAAgyIAAnBQAAgyAyAAMAtTAAAQAyAAAAAyIAAHBQAAAygyAAg");
	this.shape_1.setTransform(149.975,27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#252F67").s().p("A1oEHQgwAAAAgwIAAmtQAAgwAwAAMArRAAAQAwAAAAAwIAAGtQAAAwgwAAg");
	this.shape_2.setTransform(149.975,27.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252F67").s().p("A4ZGlQgyABAAgyIAArnQAAgxAyAAMAwzAAAQAyAAAAAxIAALnQAAAygygBg");
	this.shape_3.setTransform(150.025,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-14.1,322.3,84.3);


// stage content:
(lib.animateassign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {EndSquash:1,startanti:81};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,80];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.startanti.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('startanti');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.startsquash.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('EndSquash');
		});
	}
	this.frame_80 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80).call(this.frame_80).wait(104));

	// Button_three
	this.startease = new lib.Symbol1();
	this.startease.name = "startease";
	this.startease.setTransform(828.9,604.9);
	new cjs.ButtonHelper(this.startease, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.startease).to({_off:true},180).wait(4));

	// Button_two
	this.startanti = new lib.Symbol1();
	this.startanti.name = "startanti";
	this.startanti.setTransform(466.45,604.9);
	new cjs.ButtonHelper(this.startanti, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.startanti).to({_off:true},180).wait(4));

	// Button_One
	this.startsquash = new lib.Symbol1();
	this.startsquash.name = "startsquash";
	this.startsquash.setTransform(257.5,632.4,1,1,0,0,0,150,27.5);
	new cjs.ButtonHelper(this.startsquash, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.startsquash).to({_off:true},180).wait(4));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAh3AhIQgyAAAAgyMAAAhArQAAgyAyAAMAswAAAQAzAAAAAyMAAABArQAAAygzAAgEgWxAhIQgxAAAAgyMAAAhArQAAgyAxAAMAswAAAQAyAAAAAyMAAABArQAAAygyAAgEhOnAhIQgxAAAAgyMAAAhArQAAgyAxAAMAsxAAAQAyAAAAAyMAAABArQAAAygyAAg");
	mask.setTransform(617.2,366.325);

	// Layer_13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am/LEQgyAAAAgyIAA0jQAAgyAyAAIN/AAQAyAAAAAyIAAUjQAAAygyAAg");
	this.shape.setTransform(879.975,505.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},181).wait(3));

	// Antic
	this.instance = new lib.Tween13("synched",0);
	this.instance.setTransform(524.15,543.65);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(81).to({_off:false},0).to({x:555.25,y:543.3},9).wait(2).to({startPosition:0},0).to({rotation:-14.9983,y:537.9},5).to({regX:0.3,regY:0.2,scaleX:1.022,scaleY:0.7569,rotation:-14.9985,x:547.05,y:544.95},2).to({regY:0.3,scaleX:0.8752,scaleY:0.7523,rotation:0,skewX:-12.7079,skewY:-17.6547,x:609.8,y:496.3},6).to({regX:0.4,scaleX:0.9994,scaleY:0.9994,skewX:0,skewY:0,x:673.5,y:543.35},6).to({regX:0.5,regY:0.4,scaleY:0.7885,x:679.85,y:550.95},1).to({regX:0.4,regY:0.6,scaleY:0.9993,x:692.1,y:543.3},2).to({scaleY:0.9926,x:703.25,y:537.15},1).to({regX:0.5,scaleX:0.9993,scaleY:0.9858,x:714.5,y:544.3},1).to({regY:0.7,scaleY:0.8858,x:725.6,y:548.85},1).to({regX:0.6,regY:1.5,scaleY:0.9995,x:736.8,y:544.85},1).to({regX:0.7,regY:1.6,scaleY:0.9243,x:747.95,y:547.05},1).to({scaleY:0.9244,x:759,y:546.7},1).to({regX:0.4,regY:0.4,scaleX:0.9994,scaleY:0.9252,x:814.25,y:545},5).to({_off:true},9).wait(50));

	// SquashStretch_copy
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(68.55,620.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(377.55,357.9,0.7161,1.4435,0,0,0,0,0.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({rotation:-14.9983,x:201,y:502.5},7).to({rotation:-2.9993,x:333.45,y:384.2},7).to({_off:true,regY:0.2,scaleX:0.7161,scaleY:1.4435,rotation:0,x:377.55,y:357.9},2).wait(166));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},2).to({regX:0.1,scaleX:0.8039,scaleY:1.3394,x:346.35,y:329.2},2).to({regY:0.1,scaleX:1.2431,scaleY:0.8186,x:189.9,y:186.1},9).to({regX:0,regY:0,scaleX:0.7978,scaleY:1.2821,x:139.8,y:239.9},5).to({scaleX:0.7879,scaleY:1.1814,x:258.6,y:329.05},9).to({scaleX:0.78,scaleY:1.1008,x:353.65,y:400.35},7).to({regX:0.1,regY:0.1,scaleX:0.6772,scaleY:1.4444,x:381.4,y:413.4},2).to({scaleX:0.9978,scaleY:0.9939,x:319.85,y:479.2},9).to({regX:0.2,regY:0.2,scaleX:0.998,x:270.6,y:531.95},7).to({regX:0.1,regY:0,scaleX:1.3845,scaleY:0.8593,x:258.35,y:545.1},4).to({regX:0.2,regY:0.2,scaleX:0.9982,scaleY:0.9942,x:258.4,y:539.4},7).wait(2).to({alpha:0},0).to({_off:true},99).wait(4));

	// SquashStretch
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.setTransform(257.5,101.85,0.7962,1,0,0,0,52.6,52.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({regY:52.6,scaleY:0.5581,y:549.15},6).to({regX:52.8,regY:52.7,scaleY:0.9664,x:257.65,y:459.9},2).to({regX:52.6,regY:52.5,scaleY:1,x:257.5,y:390.15},2).to({scaleY:0.7276,y:540.2},4).to({regY:52.6,scaleY:0.8471,y:475.05},2).to({y:534},2).to({_off:true},160).wait(4));

	// Stages
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EAhFghHMAuVAAAMAAABCPMguVAAAgEgXighHMAuTAAAMAAABCPMguTAAAgEhPYghHMAuUAAAMAAABCPMguUAAAg");
	this.shape_1.setTransform(617.2,366.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},180).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1140.1,675.1);
// library properties:
lib.properties = {
	id: '35CC9212E37145C2922865A23810FEEC',
	width: 1240,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animateassign_atlas_1.png", id:"animateassign_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['35CC9212E37145C2922865A23810FEEC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;