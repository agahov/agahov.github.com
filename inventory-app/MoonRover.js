(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { }
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new haxe.ds.StringMap();
	ApplicationMain.urlLoaders = new haxe.ds.StringMap();
	ApplicationMain.total = 0;
	flash.Lib.get_current().loaderInfo = flash.display.LoaderInfo.create(null);
	try {
		if(Reflect.hasField(js.Browser.window,"winParameters")) flash.Lib.get_current().loaderInfo.parameters = (Reflect.field(js.Browser.window,"winParameters"))();
		flash.Lib.get_current().get_stage().loaderInfo = flash.Lib.get_current().loaderInfo;
	} catch( e ) {
	}
	ApplicationMain.preloader = new NMEPreloader();
	flash.Lib.get_current().addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var loader = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/animation/rover_mini.png",loader);
	ApplicationMain.total++;
	var loader1 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/animation/wheel_mini.png",loader1);
	ApplicationMain.total++;
	var loader2 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/antenna/antenna1.png",loader2);
	ApplicationMain.total++;
	var loader3 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/antenna/antenna2.png",loader3);
	ApplicationMain.total++;
	var loader4 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/antenna/antenna3.png",loader4);
	ApplicationMain.total++;
	var loader5 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/antenna/antenna4.png",loader5);
	ApplicationMain.total++;
	var loader6 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/bg/far_bg.png",loader6);
	ApplicationMain.total++;
	var loader7 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/bg/near_bg.png",loader7);
	ApplicationMain.total++;
	var loader8 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/case/case1.png",loader8);
	ApplicationMain.total++;
	var loader9 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/case/case2.png",loader9);
	ApplicationMain.total++;
	var loader10 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/case/case3.png",loader10);
	ApplicationMain.total++;
	var loader11 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/case/case4.png",loader11);
	ApplicationMain.total++;
	var loader12 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/energy/energy1.png",loader12);
	ApplicationMain.total++;
	var loader13 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/energy/energy2.png",loader13);
	ApplicationMain.total++;
	var loader14 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/energy/energy3.png",loader14);
	ApplicationMain.total++;
	var loader15 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/energy/energy4.png",loader15);
	ApplicationMain.total++;
	var loader16 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/engine/engine1.png",loader16);
	ApplicationMain.total++;
	var loader17 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/engine/engine2.png",loader17);
	ApplicationMain.total++;
	var loader18 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/engine/engine3.png",loader18);
	ApplicationMain.total++;
	var loader19 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/engine/engine4.png",loader19);
	ApplicationMain.total++;
	var loader20 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/antenna/antenna1.png",loader20);
	ApplicationMain.total++;
	var loader21 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/antenna/antenna2.png",loader21);
	ApplicationMain.total++;
	var loader22 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/antenna/antenna3.png",loader22);
	ApplicationMain.total++;
	var loader23 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/antenna/antenna4.png",loader23);
	ApplicationMain.total++;
	var loader24 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/bg/far_bg.png",loader24);
	ApplicationMain.total++;
	var loader25 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/bg/near_bg.png",loader25);
	ApplicationMain.total++;
	var loader26 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/case/case1.png",loader26);
	ApplicationMain.total++;
	var loader27 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/case/case2.png",loader27);
	ApplicationMain.total++;
	var loader28 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/case/case3.png",loader28);
	ApplicationMain.total++;
	var loader29 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/case/case4.png",loader29);
	ApplicationMain.total++;
	var loader30 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/energy/energy1.png",loader30);
	ApplicationMain.total++;
	var loader31 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/energy/energy2.png",loader31);
	ApplicationMain.total++;
	var loader32 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/energy/energy3.png",loader32);
	ApplicationMain.total++;
	var loader33 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/energy/energy4.png",loader33);
	ApplicationMain.total++;
	var loader34 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/engine/engine1.png",loader34);
	ApplicationMain.total++;
	var loader35 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/engine/engine2.png",loader35);
	ApplicationMain.total++;
	var loader36 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/engine/engine3.png",loader36);
	ApplicationMain.total++;
	var loader37 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/engine/engine4.png",loader37);
	ApplicationMain.total++;
	var loader38 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/manus/manus1.png",loader38);
	ApplicationMain.total++;
	var loader39 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/manus/manus2.png",loader39);
	ApplicationMain.total++;
	var loader40 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/manus/manus3.png",loader40);
	ApplicationMain.total++;
	var loader41 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/manus/manus4.png",loader41);
	ApplicationMain.total++;
	var loader42 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/radar/radar1.png",loader42);
	ApplicationMain.total++;
	var loader43 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/radar/radar2.png",loader43);
	ApplicationMain.total++;
	var loader44 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/radar/radar3.png",loader44);
	ApplicationMain.total++;
	var loader45 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/radar/radar4.png",loader45);
	ApplicationMain.total++;
	var loader46 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/scheme/scheme1.png",loader46);
	ApplicationMain.total++;
	var loader47 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/scheme/scheme2.png",loader47);
	ApplicationMain.total++;
	var loader48 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/scheme/scheme3.png",loader48);
	ApplicationMain.total++;
	var loader49 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/scheme/scheme4.png",loader49);
	ApplicationMain.total++;
	var loader50 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/ui/arrow_left_gray.png",loader50);
	ApplicationMain.total++;
	var loader51 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/ui/arrow_left_yellow.png",loader51);
	ApplicationMain.total++;
	var loader52 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/ui/arrow_right_gray.png",loader52);
	ApplicationMain.total++;
	var loader53 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/ui/arrow_right_yellow.png",loader53);
	ApplicationMain.total++;
	var loader54 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/wheels/wheels1.png",loader54);
	ApplicationMain.total++;
	var loader55 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/wheels/wheels2.png",loader55);
	ApplicationMain.total++;
	var loader56 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/wheels/wheels3.png",loader56);
	ApplicationMain.total++;
	var loader57 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/icon/wheels/wheels4.png",loader57);
	ApplicationMain.total++;
	var loader58 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/label/label1.png",loader58);
	ApplicationMain.total++;
	var loader59 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/label/label2.png",loader59);
	ApplicationMain.total++;
	var loader60 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/label/label3.png",loader60);
	ApplicationMain.total++;
	var loader61 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/label/label4.png",loader61);
	ApplicationMain.total++;
	var loader62 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/label/label5.png",loader62);
	ApplicationMain.total++;
	var loader63 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/manus/manus1.png",loader63);
	ApplicationMain.total++;
	var loader64 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/manus/manus2.png",loader64);
	ApplicationMain.total++;
	var loader65 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/manus/manus3.png",loader65);
	ApplicationMain.total++;
	var loader66 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/manus/manus4.png",loader66);
	ApplicationMain.total++;
	var loader67 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/radar/radar1.png",loader67);
	ApplicationMain.total++;
	var loader68 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/radar/radar2.png",loader68);
	ApplicationMain.total++;
	var loader69 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/radar/radar3.png",loader69);
	ApplicationMain.total++;
	var loader70 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/radar/radar4.png",loader70);
	ApplicationMain.total++;
	var loader71 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/scheme/scheme1.png",loader71);
	ApplicationMain.total++;
	var loader72 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/scheme/scheme2.png",loader72);
	ApplicationMain.total++;
	var loader73 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/scheme/scheme3.png",loader73);
	ApplicationMain.total++;
	var loader74 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/scheme/scheme4.png",loader74);
	ApplicationMain.total++;
	var loader75 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/ui/arrow_left_gray.png",loader75);
	ApplicationMain.total++;
	var loader76 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/ui/arrow_left_yellow.png",loader76);
	ApplicationMain.total++;
	var loader77 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/ui/arrow_right_gray.png",loader77);
	ApplicationMain.total++;
	var loader78 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/ui/arrow_right_yellow.png",loader78);
	ApplicationMain.total++;
	var loader79 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/wheels/wheels1.png",loader79);
	ApplicationMain.total++;
	var loader80 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/wheels/wheels2.png",loader80);
	ApplicationMain.total++;
	var loader81 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/wheels/wheels3.png",loader81);
	ApplicationMain.total++;
	var loader82 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/wheels/wheels4.png",loader82);
	ApplicationMain.total++;
	var loader83 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/youtoo/light_off.png",loader83);
	ApplicationMain.total++;
	var loader84 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/youtoo/light_on.png",loader84);
	ApplicationMain.total++;
	var loader85 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/1x/youtoo/youtoo_mini.png",loader85);
	ApplicationMain.total++;
	var resourcePrefix = "__ASSET__:bitmap_";
	var _g = 0, _g1 = haxe.Resource.listNames();
	while(_g < _g1.length) {
		var resourceName = _g1[_g];
		++_g;
		if(StringTools.startsWith(resourceName,resourcePrefix)) {
			var type = Type.resolveClass(StringTools.replace(resourceName.substring(resourcePrefix.length),"_","."));
			if(type != null) {
				ApplicationMain.total++;
				var instance = Type.createInstance(type,[0,0,true,16777215,ApplicationMain.bitmapClass_onComplete]);
			}
		}
	}
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader86 = ApplicationMain.loaders.get(path);
			loader86.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader86.load(new flash.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path = $it1.next();
			var urlLoader = ApplicationMain.urlLoaders.get(path);
			urlLoader.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader.load(new flash.net.URLRequest(path));
		}
	}
}
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
}
ApplicationMain.bitmapClass_onComplete = function(instance) {
	ApplicationMain.completed++;
	var classType = Type.getClass(instance);
	classType.preload = instance;
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	flash.Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Reflect.field(Main,"main") == null) {
		var mainDisplayObj = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(mainDisplayObj,flash.display.DisplayObject)) flash.Lib.get_current().addChild(mainDisplayObj);
	} else Reflect.field(Main,"main").apply(Main,[]);
}
var flash = {}
flash.events = {}
flash.events.IEventDispatcher = function() { }
$hxClasses["flash.events.IEventDispatcher"] = flash.events.IEventDispatcher;
flash.events.IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
flash.events.IEventDispatcher.prototype = {
	__class__: flash.events.IEventDispatcher
}
flash.events.EventDispatcher = function(target) {
	if(target != null) this.__target = target; else this.__target = this;
	this.__eventMap = [];
};
$hxClasses["flash.events.EventDispatcher"] = flash.events.EventDispatcher;
flash.events.EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
flash.events.EventDispatcher.__interfaces__ = [flash.events.IEventDispatcher];
flash.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
flash.events.EventDispatcher.prototype = {
	willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,toString: function() {
		return "[ " + this.__name__ + " ]";
	}
	,setList: function(type,list) {
		this.__eventMap[type] = list;
	}
	,removeEventListener: function(type,listener,inCapture) {
		if(inCapture == null) inCapture = false;
		if(!this.existList(type)) return;
		var list = this.getList(type);
		var capture = inCapture == null?false:inCapture;
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
	,hasEventListener: function(type) {
		return this.existList(type);
	}
	,getList: function(type) {
		return this.__eventMap[type];
	}
	,existList: function(type) {
		return this.__eventMap != null && this.__eventMap[type] != undefined;
	}
	,dispatchEvent: function(event) {
		if(event.target == null) event.target = this.__target;
		var capture = event.eventPhase == flash.events.EventPhase.CAPTURING_PHASE;
		if(this.existList(event.type)) {
			var list = this.getList(event.type);
			var idx = 0;
			while(idx < list.length) {
				var listener = list[idx];
				if(listener.mUseCapture == capture) {
					listener.dispatchEvent(event);
					if(event.__getIsCancelledNow()) return true;
				}
				if(idx < list.length && listener != list[idx]) {
				} else idx++;
			}
			return true;
		}
		return false;
	}
	,addEventListener: function(type,inListener,useCapture,inPriority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(inPriority == null) inPriority = 0;
		if(useCapture == null) useCapture = false;
		var capture = useCapture == null?false:useCapture;
		var priority = inPriority == null?0:inPriority;
		var list = this.getList(type);
		if(!this.existList(type)) {
			list = [];
			this.setList(type,list);
		}
		list.push(new flash.events.Listener(inListener,capture,priority));
		list.sort(flash.events.EventDispatcher.compareListeners);
	}
	,__class__: flash.events.EventDispatcher
}
flash.display = {}
flash.display.IBitmapDrawable = function() { }
$hxClasses["flash.display.IBitmapDrawable"] = flash.display.IBitmapDrawable;
flash.display.IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
flash.display.IBitmapDrawable.prototype = {
	__class__: flash.display.IBitmapDrawable
}
flash.display.DisplayObject = function() {
	flash.events.EventDispatcher.call(this,null);
	this.___id = flash.utils.Uuid.uuid();
	this.set_parent(null);
	this.set_transform(new flash.geom.Transform(this));
	this.__x = 0.0;
	this.__y = 0.0;
	this.__scaleX = 1.0;
	this.__scaleY = 1.0;
	this.__rotation = 0.0;
	this.__width = 0.0;
	this.__height = 0.0;
	this.set_visible(true);
	this.alpha = 1.0;
	this.__filters = new Array();
	this.__boundsRect = new flash.geom.Rectangle();
	this.__scrollRect = null;
	this.__mask = null;
	this.__maskingObj = null;
	this.set___combinedVisible(this.get_visible());
};
$hxClasses["flash.display.DisplayObject"] = flash.display.DisplayObject;
flash.display.DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash.display.DisplayObject.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.DisplayObject.__super__ = flash.events.EventDispatcher;
flash.display.DisplayObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__srUpdateDivs: function() {
		var gfx = this.__getGraphics();
		if(gfx == null || this.parent == null) return;
		if(this.__scrollRect == null) {
			if(this._srAxes != null && gfx.__surface.parentNode == this._srAxes && this._srWindow.parentNode != null) this._srWindow.parentNode.replaceChild(gfx.__surface,this._srWindow);
			return;
		}
		if(this._srWindow == null) {
			this._srWindow = js.Browser.document.createElement("div");
			this._srAxes = js.Browser.document.createElement("div");
			this._srWindow.style.setProperty("position","absolute","");
			this._srWindow.style.setProperty("left","0px","");
			this._srWindow.style.setProperty("top","0px","");
			this._srWindow.style.setProperty("width","0px","");
			this._srWindow.style.setProperty("height","0px","");
			this._srWindow.style.setProperty("overflow","hidden","");
			this._srAxes.style.setProperty("position","absolute","");
			this._srAxes.style.setProperty("left","0px","");
			this._srAxes.style.setProperty("top","0px","");
			this._srWindow.appendChild(this._srAxes);
		}
		var pnt = this.parent.localToGlobal(new flash.geom.Point(this.get_x(),this.get_y()));
		this._srWindow.style.left = pnt.x + "px";
		this._srWindow.style.top = pnt.y + "px";
		this._srWindow.style.width = this.__scrollRect.width + "px";
		this._srWindow.style.height = this.__scrollRect.height + "px";
		this._srAxes.style.left = -pnt.x - this.__scrollRect.x + "px";
		this._srAxes.style.top = -pnt.y - this.__scrollRect.y + "px";
		if(gfx.__surface.parentNode != this._srAxes && gfx.__surface.parentNode != null) {
			gfx.__surface.parentNode.insertBefore(this._srWindow,gfx.__surface);
			flash.Lib.__removeSurface(gfx.__surface);
			this._srAxes.appendChild(gfx.__surface);
		}
	}
	,__getSrWindow: function() {
		return this._srWindow;
	}
	,set_width: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var w = this.__boundsRect.width;
		if(this.__scaleX * w != inValue) {
			if(w == 0) {
				this.__scaleX = 1;
				this.__invalidateMatrix(true);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				w = this.__boundsRect.width;
			}
			if(w <= 0) return 0;
			this.__scaleX = inValue / w;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_width: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__width;
	}
	,set_y: function(inValue) {
		if(this.__y != inValue) {
			this.__y = inValue;
			this.__invalidateMatrix(true);
			if(this.parent != null) this.parent.__invalidateBounds();
		}
		return inValue;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_x: function(inValue) {
		if(this.__x != inValue) {
			this.__x = inValue;
			this.__invalidateMatrix(true);
			if(this.parent != null) this.parent.__invalidateBounds();
		}
		return inValue;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_visible: function(inValue) {
		if(this.__visible != inValue) {
			this.__visible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.__visible;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_transform: function(inValue) {
		this.transform = inValue;
		this.__x = this.transform.get_matrix().tx;
		this.__y = this.transform.get_matrix().ty;
		this.__invalidateMatrix(true);
		return inValue;
	}
	,get__topmostSurface: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return gfx.__surface;
		return null;
	}
	,get_stage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return flash.Lib.__getStage();
		return null;
	}
	,set_scrollRect: function(inValue) {
		this.__scrollRect = inValue;
		this.__srUpdateDivs();
		return inValue;
	}
	,get_scrollRect: function() {
		if(this.__scrollRect == null) return null;
		return this.__scrollRect.clone();
	}
	,set_scaleY: function(inValue) {
		if(this.__scaleY != inValue) {
			this.__scaleY = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleX: function(inValue) {
		if(this.__scaleX != inValue) {
			this.__scaleX = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_rotation: function(inValue) {
		if(this.__rotation != inValue) {
			this.__rotation = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_parent: function(inValue) {
		if(inValue == this.parent) return inValue;
		this.__invalidateMatrix();
		if(this.parent != null) {
			HxOverrides.remove(this.parent.__children,this);
			this.parent.__invalidateBounds();
		}
		if(inValue != null) {
			inValue.___renderFlags |= 64;
			if(inValue.parent != null) inValue.parent.___renderFlags |= 64;
		}
		if(this.parent == null && inValue != null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.ADDED,true,false);
			this.dispatchEvent(evt);
		} else if(this.parent != null && inValue == null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.REMOVED,true,false);
			this.dispatchEvent(evt);
		} else this.parent = inValue;
		return inValue;
	}
	,set___combinedVisible: function(inValue) {
		if(this.__combinedVisible != inValue) {
			this.__combinedVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.__combinedVisible;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new flash.geom.Point(0,this.get_stage().get_mouseY())).y;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new flash.geom.Point(this.get_stage().get_mouseX(),0)).x;
	}
	,get__matrixInvalid: function() {
		return (this.___renderFlags & 4) != 0;
	}
	,get__matrixChainInvalid: function() {
		return (this.___renderFlags & 8) != 0;
	}
	,set_mask: function(inValue) {
		if(this.__mask != null) this.__mask.__maskingObj = null;
		this.__mask = inValue;
		if(this.__mask != null) this.__mask.__maskingObj = this;
		return this.__mask;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_height: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var h = this.__boundsRect.height;
		if(this.__scaleY * h != inValue) {
			if(h == 0) {
				this.__scaleY = 1;
				this.__invalidateMatrix(true);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				h = this.__boundsRect.height;
			}
			if(h <= 0) return 0;
			this.__scaleY = inValue / h;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_height: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__height;
	}
	,set_filters: function(filters) {
		var oldFilterCount = this.__filters == null?0:this.__filters.length;
		if(filters == null) {
			this.__filters = null;
			if(oldFilterCount > 0) this.invalidateGraphics();
		} else {
			this.__filters = new Array();
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				this.__filters.push(filter.clone());
			}
			this.invalidateGraphics();
		}
		return filters;
	}
	,get__boundsInvalid: function() {
		var gfx = this.__getGraphics();
		if(gfx == null) return (this.___renderFlags & 64) != 0; else return (this.___renderFlags & 64) != 0 || gfx.boundsDirty;
	}
	,get_filters: function() {
		if(this.__filters == null) return [];
		var result = new Array();
		var _g = 0, _g1 = this.__filters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			result.push(filter.clone());
		}
		return result;
	}
	,get__bottommostSurface: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return gfx.__surface;
		return null;
	}
	,__validateMatrix: function() {
		var parentMatrixInvalid = (this.___renderFlags & 8) != 0 && this.parent != null;
		if((this.___renderFlags & 4) != 0 || parentMatrixInvalid) {
			if(parentMatrixInvalid) this.parent.__validateMatrix();
			var m = this.transform.get_matrix();
			if((this.___renderFlags & 16) != 0) this.___renderFlags &= -5;
			if((this.___renderFlags & 4) != 0) {
				m.identity();
				m.scale(this.__scaleX,this.__scaleY);
				var rad = this.__rotation * flash.geom.Transform.DEG_TO_RAD;
				if(rad != 0.0) m.rotate(rad);
				m.translate(this.__x,this.__y);
				this.transform._matrix.copy(m);
				m;
			}
			var cm = this.transform.__getFullMatrix(null);
			var fm = this.parent == null?m:this.parent.transform.__getFullMatrix(m);
			this._fullScaleX = fm._sx;
			this._fullScaleY = fm._sy;
			if(cm.a != fm.a || cm.b != fm.b || cm.c != fm.c || cm.d != fm.d || cm.tx != fm.tx || cm.ty != fm.ty) {
				this.transform.__setFullMatrix(fm);
				this.___renderFlags |= 32;
			}
			this.___renderFlags &= -29;
		}
	}
	,__unifyChildrenWithDOM: function(lastMoveObj) {
		var gfx = this.__getGraphics();
		if(gfx != null && lastMoveObj != null && this != lastMoveObj) {
			var ogfx = lastMoveObj.__getGraphics();
			if(ogfx != null) flash.Lib.__setSurfaceZIndexAfter(this.__scrollRect == null?gfx.__surface:this._srWindow,lastMoveObj.__scrollRect == null?ogfx.__surface:lastMoveObj == this.parent?ogfx.__surface:lastMoveObj._srWindow);
		}
		if(gfx == null) return lastMoveObj; else return this;
	}
	,__testFlag: function(mask) {
		return (this.___renderFlags & mask) != 0;
	}
	,__setMatrix: function(inValue) {
		this.transform._matrix.copy(inValue);
		return inValue;
	}
	,__setFullMatrix: function(inValue) {
		return this.transform.__setFullMatrix(inValue);
	}
	,__setFlagToValue: function(mask,value) {
		if(value) this.___renderFlags |= mask; else this.___renderFlags &= ~mask;
	}
	,__setFlag: function(mask) {
		this.___renderFlags |= mask;
	}
	,__setDimensions: function() {
		if(this.scale9Grid != null) {
			this.__boundsRect.width *= this.__scaleX;
			this.__boundsRect.height *= this.__scaleY;
			this.__width = this.__boundsRect.width;
			this.__height = this.__boundsRect.height;
		} else {
			this.__width = this.__boundsRect.width * this.__scaleX;
			this.__height = this.__boundsRect.height * this.__scaleY;
		}
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		var gfx = this.__getGraphics();
		if(gfx == null) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(gfx.__render(inMask,this.__filters,1,1)) {
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
			this.__applyFilters(gfx.__surface);
			this.___renderFlags |= 32;
		}
		var fullAlpha = (this.parent != null?this.parent.__combinedAlpha:1) * this.alpha;
		if(inMask != null) {
			var m = this.getSurfaceTransform(gfx);
			flash.Lib.__drawToSurface(gfx.__surface,inMask,m,fullAlpha,clipRect);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(gfx);
				flash.Lib.__setSurfaceTransform(gfx.__surface,m);
				this.___renderFlags &= -33;
				this.__srUpdateDivs();
			}
			flash.Lib.__setSurfaceOpacity(gfx.__surface,fullAlpha);
		}
	}
	,__removeFromStage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null && flash.Lib.__isOnStage(gfx.__surface)) {
			flash.Lib.__removeSurface(gfx.__surface);
			var evt = new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,__matrixOverridden: function() {
		this.__x = this.transform.get_matrix().tx;
		this.__y = this.transform.get_matrix().ty;
		this.___renderFlags |= 16;
		this.___renderFlags |= 4;
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
	}
	,__isOnStage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null && flash.Lib.__isOnStage(gfx.__surface)) return true;
		return false;
	}
	,__invalidateMatrix: function(local) {
		if(local == null) local = false;
		if(local) this.___renderFlags |= 4; else this.___renderFlags |= 8;
	}
	,__invalidateBounds: function() {
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
	}
	,__getSurface: function() {
		var gfx = this.__getGraphics();
		var surface = null;
		if(gfx != null) surface = gfx.__surface;
		return surface;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var gfx = this.__getGraphics();
		if(gfx != null) {
			gfx.__render();
			var extX = gfx.__extent.x;
			var extY = gfx.__extent.y;
			var local = this.globalToLocal(point);
			if(local.x - extX <= 0 || local.y - extY <= 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return null;
			if(gfx.__hitTest(local.x,local.y)) return this;
		}
		return null;
	}
	,__getMatrix: function() {
		return this.transform.get_matrix();
	}
	,__getInteractiveObjectStack: function(outStack) {
		var io = this;
		if(io != null) outStack.push(io);
		if(this.parent != null) this.parent.__getInteractiveObjectStack(outStack);
	}
	,__getGraphics: function() {
		return null;
	}
	,__getFullMatrix: function(localMatrix) {
		return this.transform.__getFullMatrix(localMatrix);
	}
	,__fireEvent: function(event) {
		var stack = [];
		if(this.parent != null) this.parent.__getInteractiveObjectStack(stack);
		var l = stack.length;
		if(l > 0) {
			event.__setPhase(flash.events.EventPhase.CAPTURING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.__dispatchEvent(event);
				if(event.__getIsCancelled()) return;
			}
		}
		event.__setPhase(flash.events.EventPhase.AT_TARGET);
		event.currentTarget = this;
		this.__dispatchEvent(event);
		if(event.__getIsCancelled()) return;
		if(event.bubbles) {
			event.__setPhase(flash.events.EventPhase.BUBBLING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.__dispatchEvent(event);
				if(event.__getIsCancelled()) return;
			}
		}
	}
	,__dispatchEvent: function(event) {
		if(event.target == null) event.target = this;
		event.currentTarget = this;
		return flash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
	}
	,__contains: function(child) {
		return false;
	}
	,__clearFlag: function(mask) {
		this.___renderFlags &= ~mask;
	}
	,__broadcast: function(event) {
		this.__dispatchEvent(event);
	}
	,__applyFilters: function(surface) {
		if(this.__filters != null) {
			var _g = 0, _g1 = this.__filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				filter.__applyFilter(surface);
			}
		}
	}
	,__addToStage: function(newParent,beforeSibling) {
		var gfx = this.__getGraphics();
		if(gfx == null) return;
		if(newParent.__getGraphics() != null) {
			flash.Lib.__setSurfaceId(gfx.__surface,this.___id);
			if(beforeSibling != null && beforeSibling.__getGraphics() != null) flash.Lib.__appendSurface(gfx.__surface,beforeSibling.get__bottommostSurface()); else {
				var stageChildren = [];
				var _g = 0, _g1 = newParent.__children;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					if(child.get_stage() != null) stageChildren.push(child);
				}
				if(stageChildren.length < 1) flash.Lib.__appendSurface(gfx.__surface,null,newParent.get__topmostSurface()); else {
					var nextSibling = stageChildren[stageChildren.length - 1];
					var container;
					while(js.Boot.__instanceof(nextSibling,flash.display.DisplayObjectContainer)) {
						container = js.Boot.__cast(nextSibling , flash.display.DisplayObjectContainer);
						if(container.__children.length > 0) nextSibling = container.__children[container.__children.length - 1]; else break;
					}
					if(nextSibling.__getGraphics() != gfx) flash.Lib.__appendSurface(gfx.__surface,null,nextSibling.get__topmostSurface()); else flash.Lib.__appendSurface(gfx.__surface);
				}
			}
			flash.Lib.__setSurfaceTransform(gfx.__surface,this.getSurfaceTransform(gfx));
		} else if(newParent.name == "Stage") flash.Lib.__appendSurface(gfx.__surface);
		if(this.__isOnStage()) {
			this.__srUpdateDivs();
			var evt = new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			var gfx = this.__getGraphics();
			if(gfx == null) {
				this.__boundsRect.x = this.get_x();
				this.__boundsRect.y = this.get_y();
				this.__boundsRect.width = 0;
				this.__boundsRect.height = 0;
			} else {
				this.__boundsRect = gfx.__extent.clone();
				if(this.scale9Grid != null) {
					this.__boundsRect.width *= this.__scaleX;
					this.__boundsRect.height *= this.__scaleY;
					this.__width = this.__boundsRect.width;
					this.__height = this.__boundsRect.height;
				} else {
					this.__width = this.__boundsRect.width * this.__scaleX;
					this.__height = this.__boundsRect.height * this.__scaleY;
				}
				gfx.boundsDirty = false;
			}
			this.___renderFlags &= -65;
		}
	}
	,toString: function() {
		return "[DisplayObject name=" + this.name + " id=" + this.___id + "]";
	}
	,setSurfaceVisible: function(inValue) {
		var gfx = this.__getGraphics();
		if(gfx != null && gfx.__surface != null) flash.Lib.__setSurfaceVisible(gfx.__surface,inValue);
	}
	,localToGlobal: function(point) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		return this.transform.__getFullMatrix(null).transformPoint(point);
	}
	,invalidateGraphics: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) {
			gfx.__changed = true;
			gfx.__clearNextCycle = true;
		}
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		var boundingBox = shapeFlag == null?true:!shapeFlag;
		if(!boundingBox) return this.__getObjectUnderPoint(new flash.geom.Point(x,y)) != null; else {
			var gfx = this.__getGraphics();
			if(gfx != null) {
				var extX = gfx.__extent.x;
				var extY = gfx.__extent.y;
				var local = this.globalToLocal(new flash.geom.Point(x,y));
				if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return false; else return true;
			}
			return false;
		}
	}
	,hitTestObject: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	}
	,handleGraphicsUpdated: function(gfx) {
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		this.__applyFilters(gfx.__surface);
		this.___renderFlags |= 32;
	}
	,globalToLocal: function(inPos) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		return this.transform.__getFullMatrix(null).invert().transformPoint(inPos);
	}
	,getSurfaceTransform: function(gfx) {
		var extent = gfx.__extentWithFilters;
		var fm = this.transform.__getFullMatrix(null);
		fm.__translateTransformed(extent.get_topLeft());
		return fm;
	}
	,getScreenBounds: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__boundsRect.clone();
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,getBounds: function(targetCoordinateSpace) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.get__boundsInvalid()) this.validateBounds();
		var m = this.transform.__getFullMatrix(null);
		if(targetCoordinateSpace != null) m.concat(targetCoordinateSpace.transform.__getFullMatrix(null).invert());
		var rect = this.__boundsRect.transform(m);
		return rect;
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		var oldAlpha = this.alpha;
		this.alpha = 1;
		this.__render(inSurface,clipRect);
		this.alpha = oldAlpha;
	}
	,dispatchEvent: function(event) {
		var result = this.__dispatchEvent(event);
		if(event.__getIsCancelled()) return true;
		if(event.bubbles && this.parent != null) this.parent.dispatchEvent(event);
		return result;
	}
	,__class__: flash.display.DisplayObject
	,__properties__: {set_filters:"set_filters",get_filters:"get_filters",set_height:"set_height",get_height:"get_height",set_mask:"set_mask",get_mask:"get_mask",get_mouseX:"get_mouseX",get_mouseY:"get_mouseY",set_parent:"set_parent",set_rotation:"set_rotation",get_rotation:"get_rotation",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",get_stage:"get_stage",set_transform:"set_transform",set_visible:"set_visible",get_visible:"get_visible",set_width:"set_width",get_width:"get_width",set_x:"set_x",get_x:"get_x",set_y:"set_y",get_y:"get_y",set___combinedVisible:"set___combinedVisible",get__bottommostSurface:"get__bottommostSurface",get__boundsInvalid:"get__boundsInvalid",get__matrixChainInvalid:"get__matrixChainInvalid",get__matrixInvalid:"get__matrixInvalid",get__topmostSurface:"get__topmostSurface"}
});
flash.display.InteractiveObject = function() {
	flash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.set_tabIndex(0);
};
$hxClasses["flash.display.InteractiveObject"] = flash.display.InteractiveObject;
flash.display.InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash.display.InteractiveObject.__super__ = flash.display.DisplayObject;
flash.display.InteractiveObject.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_tabIndex: function(inIndex) {
		return this.__tabIndex = inIndex;
	}
	,get_tabIndex: function() {
		return this.__tabIndex;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.mouseEnabled) return null; else return flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,toString: function() {
		return "[InteractiveObject name=" + this.name + " id=" + this.___id + "]";
	}
	,__class__: flash.display.InteractiveObject
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_tabIndex:"set_tabIndex",get_tabIndex:"get_tabIndex"})
});
flash.display.DisplayObjectContainer = function() {
	this.__children = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	flash.display.InteractiveObject.call(this);
	this.__combinedAlpha = this.alpha;
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash.display.DisplayObjectContainer;
flash.display.DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash.display.DisplayObjectContainer.__super__ = flash.display.InteractiveObject;
flash.display.DisplayObjectContainer.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_scrollRect: function(inValue) {
		inValue = flash.display.InteractiveObject.prototype.set_scrollRect.call(this,inValue);
		this.__unifyChildrenWithDOM();
		return inValue;
	}
	,set_visible: function(inVal) {
		this.set___combinedVisible(this.parent != null?this.parent.__combinedVisible && inVal:inVal);
		return flash.display.InteractiveObject.prototype.set_visible.call(this,inVal);
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,set___combinedVisible: function(inVal) {
		if(inVal != this.__combinedVisible) {
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.set___combinedVisible(child.get_visible() && inVal);
			}
		}
		return flash.display.InteractiveObject.prototype.set___combinedVisible.call(this,inVal);
	}
	,set_filters: function(filters) {
		flash.display.InteractiveObject.prototype.set_filters.call(this,filters);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_filters(filters);
		}
		return filters;
	}
	,__unifyChildrenWithDOM: function(lastMoveObj) {
		var obj = flash.display.InteractiveObject.prototype.__unifyChildrenWithDOM.call(this,lastMoveObj);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			obj = child.__unifyChildrenWithDOM(obj);
			if(child.get_scrollRect() != null) obj = child;
		}
		return obj;
	}
	,__swapSurface: function(c1,c2) {
		if(this.__children[c1] == null) throw "Null element at index " + c1 + " length " + this.__children.length;
		if(this.__children[c2] == null) throw "Null element at index " + c2 + " length " + this.__children.length;
		var gfx1 = this.__children[c1].__getGraphics();
		var gfx2 = this.__children[c2].__getGraphics();
		if(gfx1 != null && gfx2 != null) {
			var surface1 = this.__children[c1].__scrollRect == null?gfx1.__surface:this.__children[c1].__getSrWindow();
			var surface2 = this.__children[c2].__scrollRect == null?gfx2.__surface:this.__children[c2].__getSrWindow();
			if(surface1 != null && surface2 != null) flash.Lib.__swapSurface(surface1,surface2);
		}
	}
	,__render: function(inMask,clipRect) {
		if(!this.__visible) return;
		if(clipRect == null && this.__scrollRect != null) clipRect = this.__scrollRect;
		flash.display.InteractiveObject.prototype.__render.call(this,inMask,clipRect);
		this.__combinedAlpha = this.parent != null?this.parent.__combinedAlpha * this.alpha:this.alpha;
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__visible) {
				if(clipRect != null) {
					if((child.___renderFlags & 4) != 0 || (child.___renderFlags & 8) != 0) child.__validateMatrix();
				}
				child.__render(inMask,clipRect);
			}
		}
		if(this.__addedChildren) {
			this.__unifyChildrenWithDOM();
			this.__addedChildren = false;
		}
	}
	,__removeFromStage: function() {
		flash.display.InteractiveObject.prototype.__removeFromStage.call(this);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__removeFromStage();
		}
	}
	,__removeChild: function(child) {
		HxOverrides.remove(this.__children,child);
		child.__removeFromStage();
		child.set_parent(null);
		return child;
	}
	,__invalidateMatrix: function(local) {
		if(local == null) local = false;
		if(!((this.___renderFlags & 8) != 0) && !((this.___renderFlags & 4) != 0)) {
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__invalidateMatrix();
			}
		}
		flash.display.InteractiveObject.prototype.__invalidateMatrix.call(this,local);
	}
	,__getObjectsUnderPoint: function(point,stack) {
		var l = this.__children.length - 1;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.__children[l - i].__getObjectUnderPoint(point);
			if(result != null) stack.push(result);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var l = this.__children.length - 1;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = null;
			if(this.mouseEnabled) result = this.__children[l - i].__getObjectUnderPoint(point);
			if(result != null) return this.mouseChildren?result:this;
		}
		return flash.display.InteractiveObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__contains: function(child) {
		if(child == null) return false;
		if(this == child) return true;
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c == child || c.__contains(child)) return true;
		}
		return false;
	}
	,__broadcast: function(event) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__broadcast(event);
		}
		this.dispatchEvent(event);
	}
	,__addToStage: function(newParent,beforeSibling) {
		flash.display.InteractiveObject.prototype.__addToStage.call(this,newParent,beforeSibling);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__getGraphics() == null || !child.__isOnStage()) child.__addToStage(this);
		}
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.InteractiveObject.prototype.validateBounds.call(this);
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				if(obj.get_visible()) {
					var r = obj.getBounds(this);
					if(r.width != 0 || r.height != 0) {
						if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
					}
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[DisplayObjectContainer name=" + this.name + " id=" + this.___id + "]";
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.__children[child1];
		this.__children[child1] = this.__children[child2];
		this.__children[child2] = swap;
		swap = null;
	}
	,swapChildren: function(child1,child2) {
		var c1 = -1;
		var c2 = -1;
		var swap;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == child1) c1 = i; else if(this.__children[i] == child2) c2 = i;
		}
		if(c1 != -1 && c2 != -1) {
			swap = this.__children[c1];
			this.__children[c1] = this.__children[c2];
			this.__children[c2] = swap;
			swap = null;
			this.__swapSurface(c1,c2);
			child1.__unifyChildrenWithDOM();
			child2.__unifyChildrenWithDOM();
		}
	}
	,setChildIndex: function(child,index) {
		if(index > this.__children.length) throw "Invalid index position " + index;
		var oldIndex = this.getChildIndex(child);
		if(oldIndex < 0) {
			var msg = "setChildIndex : object " + child.name + " not found.";
			if(child.parent == this) {
				var realindex = -1;
				var _g1 = 0, _g = this.__children.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.__children[i] == child) {
						realindex = i;
						break;
					}
				}
				if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in __children array!";
			}
			throw msg;
		}
		if(index < oldIndex) {
			var i = oldIndex;
			while(i > index) {
				this.swapChildren(this.__children[i],this.__children[i - 1]);
				i--;
			}
		} else if(oldIndex < index) {
			var i = oldIndex;
			while(i < index) {
				this.swapChildren(this.__children[i],this.__children[i + 1]);
				i++;
			}
		}
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__removeChild(this.__children[index]);
		throw "removeChildAt(" + index + ") : none found?";
	}
	,removeChild: function(inChild) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == inChild) return (function($this) {
				var $r;
				HxOverrides.remove($this.__children,child);
				child.__removeFromStage();
				child.set_parent(null);
				$r = child;
				return $r;
			}(this));
		}
		throw "removeChild : none found?";
	}
	,getObjectsUnderPoint: function(point) {
		var result = new Array();
		this.__getObjectsUnderPoint(point,result);
		return result;
	}
	,getChildIndex: function(inChild) {
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == inChild) return i;
		}
		return -1;
	}
	,getChildByName: function(inName) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.name == inName) return child;
		}
		return null;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		throw "getChildAt : index out of bounds " + index + "/" + this.__children.length;
		return null;
	}
	,contains: function(child) {
		return this.__contains(child);
	}
	,addChildAt: function(object,index) {
		if(index > this.__children.length || index < 0) throw "Invalid index position " + index;
		this.__addedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,index);
			return object;
		}
		if(index == this.__children.length) return this.addChild(object); else {
			if(this.__isOnStage()) object.__addToStage(this,this.__children[index]);
			this.__children.splice(index,0,object);
			object.set_parent(this);
		}
		return object;
	}
	,addChild: function(object) {
		if(object == null) throw "DisplayObjectContainer asked to add null child object";
		if(object == this) throw "Adding to self";
		this.__addedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,this.__children.length - 1);
			return object;
		}
		object.set_parent(this);
		if(this.__isOnStage()) object.__addToStage(this);
		if(this.__children == null) this.__children = new Array();
		this.__children.push(object);
		return object;
	}
	,__class__: flash.display.DisplayObjectContainer
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
flash.display.Sprite = function() {
	flash.display.DisplayObjectContainer.call(this);
	this.__graphics = new flash.display.Graphics();
	this.buttonMode = false;
};
$hxClasses["flash.display.Sprite"] = flash.display.Sprite;
flash.display.Sprite.__name__ = ["flash","display","Sprite"];
flash.display.Sprite.__super__ = flash.display.DisplayObjectContainer;
flash.display.Sprite.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	set_useHandCursor: function(cursor) {
		if(cursor == this.useHandCursor) return cursor;
		if(this.__cursorCallbackOver != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OVER,this.__cursorCallbackOver);
		if(this.__cursorCallbackOut != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OUT,this.__cursorCallbackOut);
		if(!cursor) flash.Lib.__setCursor(flash._Lib.CursorType.Default); else {
			this.__cursorCallbackOver = function(_) {
				flash.Lib.__setCursor(flash._Lib.CursorType.Pointer);
			};
			this.__cursorCallbackOut = function(_) {
				flash.Lib.__setCursor(flash._Lib.CursorType.Default);
			};
			this.addEventListener(flash.events.MouseEvent.ROLL_OVER,this.__cursorCallbackOver);
			this.addEventListener(flash.events.MouseEvent.ROLL_OUT,this.__cursorCallbackOut);
		}
		this.useHandCursor = cursor;
		return cursor;
	}
	,get_graphics: function() {
		return this.__graphics;
	}
	,get_dropTarget: function() {
		return this.__dropTarget;
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[Sprite name=" + this.name + " id=" + this.___id + "]";
	}
	,stopDrag: function() {
		if(this.__isOnStage()) {
			this.get_stage().__stopDrag(this);
			var l = this.parent.__children.length - 1;
			var obj = this.get_stage();
			var _g1 = 0, _g = this.parent.__children.length;
			while(_g1 < _g) {
				var i = _g1++;
				var result = this.parent.__children[l - i].__getObjectUnderPoint(new flash.geom.Point(this.get_stage().get_mouseX(),this.get_stage().get_mouseY()));
				if(result != null) obj = result;
			}
			if(obj != this) this.__dropTarget = obj; else this.__dropTarget = this.get_stage();
		}
	}
	,startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.__isOnStage()) this.get_stage().__startDrag(this,lockCenter,bounds);
	}
	,__class__: flash.display.Sprite
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{get_dropTarget:"get_dropTarget",get_graphics:"get_graphics",set_useHandCursor:"set_useHandCursor"})
});
var Main = function() {
	flash.display.Sprite.call(this);
	flash.text.Font.registerFont(DefaultFont);
	this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.initialize));
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.__super__ = flash.display.Sprite;
Main.prototype = $extend(flash.display.Sprite.prototype,{
	activate: function() {
	}
	,init: function() {
		this.activate();
	}
	,openPage: function(id) {
		if(id > this._pages.length - 1) id = 0;
		if(id < 0) id = this._pages.length - 1;
		this._pages[id].open();
	}
	,pageCloseHandler: function(id) {
		console.log(id);
		this.openPage(id);
	}
	,createPages: function() {
		this._pages = new Array();
		var preIntraductionPage = new gakhov.moonRover.page.PreInrtraductionPage();
		preIntraductionPage.id = 0;
		this._pages.push(preIntraductionPage);
		var intraductionPage = new gakhov.moonRover.page.IntraductionPage();
		intraductionPage.id = 1;
		this._pages.push(intraductionPage);
		var casePage = new gakhov.moonRover.page.WizardPage();
		casePage.id = 2;
		casePage.partType = gakhov.moonRover.rover.PartType.CASE;
		this._pages.push(casePage);
		var weelsPage = new gakhov.moonRover.page.WizardPage();
		weelsPage.id = 3;
		weelsPage.partType = gakhov.moonRover.rover.PartType.WHEELS;
		this._pages.push(weelsPage);
		var antennaPage = new gakhov.moonRover.page.WizardPage();
		antennaPage.id = 4;
		antennaPage.partType = gakhov.moonRover.rover.PartType.ANTENNA;
		this._pages.push(antennaPage);
		var energyPage = new gakhov.moonRover.page.WizardPage();
		energyPage.id = 5;
		energyPage.partType = gakhov.moonRover.rover.PartType.ENERGY;
		this._pages.push(energyPage);
		var manusPage = new gakhov.moonRover.page.WizardPage();
		manusPage.id = 6;
		manusPage.partType = gakhov.moonRover.rover.PartType.MANUS;
		this._pages.push(manusPage);
		var radarPage = new gakhov.moonRover.page.WizardPage();
		radarPage.id = 7;
		radarPage.partType = gakhov.moonRover.rover.PartType.RADAR;
		this._pages.push(radarPage);
		var schemePage = new gakhov.moonRover.page.WizardPage();
		schemePage.id = 8;
		schemePage.partType = gakhov.moonRover.rover.PartType.SCHEME;
		this._pages.push(schemePage);
		var enginePage = new gakhov.moonRover.page.WizardPage();
		enginePage.id = 9;
		enginePage.partType = gakhov.moonRover.rover.PartType.ENGINE;
		this._pages.push(enginePage);
		var testingPage = new gakhov.moonRover.page.TestingPage();
		testingPage.id = 10;
		this._pages.push(testingPage);
		var animationPage = new gakhov.moonRover.page.AnimationPage();
		animationPage.id = 11;
		this._pages.push(animationPage);
		var _g = 0, _g1 = this._pages;
		while(_g < _g1.length) {
			var page = _g1[_g];
			++_g;
			page.init(this,this._model);
			page.addCloseHandler($bind(this,this.pageCloseHandler));
		}
	}
	,intraductionHandler: function(event) {
	}
	,create: function() {
		this._roverBackground = new flash.display.Sprite();
		this._roverBackground.get_graphics().beginFill(12632256);
		this._roverBackground.get_graphics().drawRect(0,0,gakhov.moonRover.core.Global.get_realWidth() * 0.75,gakhov.moonRover.core.Global.get_realHeight() - 80);
		this._roverBackground.get_graphics().endFill();
		this._roverBackground.set_x(100);
		this._roverBackground.set_y(30);
		this.addChild(this._roverBackground);
		this._rover = new gakhov.moonRover.rover.Rover();
		this._rover.create();
		this._rover.set_x(this._roverBackground.get_width() / 2);
		this._rover.set_y(this._roverBackground.get_height() / 2);
		this._roverBackground.addChild(this._rover);
		this._model = new gakhov.moonRover.core.Model();
		this._model.rover = this._rover;
		this._model.roverBg = this._roverBackground;
		this.createPages();
		this.openPage(0);
	}
	,initialize: function(event) {
		console.log("initialize");
		this.get_stage().align = flash.display.StageAlign.TOP_LEFT;
		this.get_stage().scaleMode = flash.display.StageScaleMode.NO_SCALE;
		this.get_stage().set_frameRate(12);
		gakhov.moonRover.core.Global.setStageSize(this.get_stage().get_stageWidth(),this.get_stage().get_stageHeight());
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.initialize));
		this.create();
		this.init();
	}
	,__class__: Main
});
var DocumentClass = function() {
	Main.call(this);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	get_stage: function() {
		return flash.Lib.get_current().get_stage();
	}
	,__class__: DocumentClass
});
var openfl = {}
openfl.AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl.AssetLibrary;
openfl.AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl.AssetLibrary.prototype = {
	loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadMovieClip: function(id,handler) {
		handler(this.getMovieClip(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadBitmapData: function(id,handler) {
		handler(this.getBitmapData(id));
	}
	,load: function(handler) {
		handler(this);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,getSound: function(id) {
		return null;
	}
	,getPath: function(id) {
		return null;
	}
	,getMusic: function(id) {
		return this.getSound(id);
	}
	,getMovieClip: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,exists: function(id,type) {
		return false;
	}
	,__class__: openfl.AssetLibrary
}
var DefaultAssetLibrary = function() {
	openfl.AssetLibrary.call(this);
	DefaultAssetLibrary.path.set("assets/1x/animation/rover_mini.png","assets/1x/animation/rover_mini.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/animation/rover_mini.png",value);
	DefaultAssetLibrary.path.set("assets/1x/animation/wheel_mini.png","assets/1x/animation/wheel_mini.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/animation/wheel_mini.png",value);
	DefaultAssetLibrary.path.set("assets/1x/antenna/antenna1.png","assets/1x/antenna/antenna1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/antenna/antenna1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/antenna/antenna2.png","assets/1x/antenna/antenna2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/antenna/antenna2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/antenna/antenna3.png","assets/1x/antenna/antenna3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/antenna/antenna3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/antenna/antenna4.png","assets/1x/antenna/antenna4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/antenna/antenna4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/bg/far_bg.png","assets/1x/bg/far_bg.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/bg/far_bg.png",value);
	DefaultAssetLibrary.path.set("assets/1x/bg/near_bg.png","assets/1x/bg/near_bg.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/bg/near_bg.png",value);
	DefaultAssetLibrary.path.set("assets/1x/case/case1.png","assets/1x/case/case1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/case/case1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/case/case2.png","assets/1x/case/case2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/case/case2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/case/case3.png","assets/1x/case/case3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/case/case3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/case/case4.png","assets/1x/case/case4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/case/case4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/energy/energy1.png","assets/1x/energy/energy1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/energy/energy1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/energy/energy2.png","assets/1x/energy/energy2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/energy/energy2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/energy/energy3.png","assets/1x/energy/energy3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/energy/energy3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/energy/energy4.png","assets/1x/energy/energy4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/energy/energy4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/engine/engine1.png","assets/1x/engine/engine1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/engine/engine1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/engine/engine2.png","assets/1x/engine/engine2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/engine/engine2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/engine/engine3.png","assets/1x/engine/engine3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/engine/engine3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/engine/engine4.png","assets/1x/engine/engine4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/engine/engine4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/antenna/antenna1.png","assets/1x/icon/antenna/antenna1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/antenna/antenna1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/antenna/antenna2.png","assets/1x/icon/antenna/antenna2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/antenna/antenna2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/antenna/antenna3.png","assets/1x/icon/antenna/antenna3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/antenna/antenna3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/antenna/antenna4.png","assets/1x/icon/antenna/antenna4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/antenna/antenna4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/bg/far_bg.png","assets/1x/icon/bg/far_bg.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/bg/far_bg.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/bg/near_bg.png","assets/1x/icon/bg/near_bg.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/bg/near_bg.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/case/case1.png","assets/1x/icon/case/case1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/case/case1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/case/case2.png","assets/1x/icon/case/case2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/case/case2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/case/case3.png","assets/1x/icon/case/case3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/case/case3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/case/case4.png","assets/1x/icon/case/case4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/case/case4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/energy/energy1.png","assets/1x/icon/energy/energy1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/energy/energy1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/energy/energy2.png","assets/1x/icon/energy/energy2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/energy/energy2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/energy/energy3.png","assets/1x/icon/energy/energy3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/energy/energy3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/energy/energy4.png","assets/1x/icon/energy/energy4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/energy/energy4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/engine/engine1.png","assets/1x/icon/engine/engine1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/engine/engine1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/engine/engine2.png","assets/1x/icon/engine/engine2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/engine/engine2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/engine/engine3.png","assets/1x/icon/engine/engine3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/engine/engine3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/engine/engine4.png","assets/1x/icon/engine/engine4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/engine/engine4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/manus/manus1.png","assets/1x/icon/manus/manus1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/manus/manus1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/manus/manus2.png","assets/1x/icon/manus/manus2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/manus/manus2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/manus/manus3.png","assets/1x/icon/manus/manus3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/manus/manus3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/manus/manus4.png","assets/1x/icon/manus/manus4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/manus/manus4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/radar/radar1.png","assets/1x/icon/radar/radar1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/radar/radar1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/radar/radar2.png","assets/1x/icon/radar/radar2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/radar/radar2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/radar/radar3.png","assets/1x/icon/radar/radar3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/radar/radar3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/radar/radar4.png","assets/1x/icon/radar/radar4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/radar/radar4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/scheme/scheme1.png","assets/1x/icon/scheme/scheme1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/scheme/scheme1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/scheme/scheme2.png","assets/1x/icon/scheme/scheme2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/scheme/scheme2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/scheme/scheme3.png","assets/1x/icon/scheme/scheme3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/scheme/scheme3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/scheme/scheme4.png","assets/1x/icon/scheme/scheme4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/scheme/scheme4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/ui/arrow_left_gray.png","assets/1x/icon/ui/arrow_left_gray.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/ui/arrow_left_gray.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/ui/arrow_left_yellow.png","assets/1x/icon/ui/arrow_left_yellow.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/ui/arrow_left_yellow.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/ui/arrow_right_gray.png","assets/1x/icon/ui/arrow_right_gray.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/ui/arrow_right_gray.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/ui/arrow_right_yellow.png","assets/1x/icon/ui/arrow_right_yellow.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/ui/arrow_right_yellow.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/wheels/wheels1.png","assets/1x/icon/wheels/wheels1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/wheels/wheels1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/wheels/wheels2.png","assets/1x/icon/wheels/wheels2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/wheels/wheels2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/wheels/wheels3.png","assets/1x/icon/wheels/wheels3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/wheels/wheels3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/icon/wheels/wheels4.png","assets/1x/icon/wheels/wheels4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/icon/wheels/wheels4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/label/label1.png","assets/1x/label/label1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/label/label1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/label/label2.png","assets/1x/label/label2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/label/label2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/label/label3.png","assets/1x/label/label3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/label/label3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/label/label4.png","assets/1x/label/label4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/label/label4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/label/label5.png","assets/1x/label/label5.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/label/label5.png",value);
	DefaultAssetLibrary.path.set("assets/1x/manus/manus1.png","assets/1x/manus/manus1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/manus/manus1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/manus/manus2.png","assets/1x/manus/manus2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/manus/manus2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/manus/manus3.png","assets/1x/manus/manus3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/manus/manus3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/manus/manus4.png","assets/1x/manus/manus4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/manus/manus4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/radar/radar1.png","assets/1x/radar/radar1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/radar/radar1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/radar/radar2.png","assets/1x/radar/radar2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/radar/radar2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/radar/radar3.png","assets/1x/radar/radar3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/radar/radar3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/radar/radar4.png","assets/1x/radar/radar4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/radar/radar4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/scheme/scheme1.png","assets/1x/scheme/scheme1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/scheme/scheme1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/scheme/scheme2.png","assets/1x/scheme/scheme2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/scheme/scheme2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/scheme/scheme3.png","assets/1x/scheme/scheme3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/scheme/scheme3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/scheme/scheme4.png","assets/1x/scheme/scheme4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/scheme/scheme4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/ui/arrow_left_gray.png","assets/1x/ui/arrow_left_gray.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/ui/arrow_left_gray.png",value);
	DefaultAssetLibrary.path.set("assets/1x/ui/arrow_left_yellow.png","assets/1x/ui/arrow_left_yellow.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/ui/arrow_left_yellow.png",value);
	DefaultAssetLibrary.path.set("assets/1x/ui/arrow_right_gray.png","assets/1x/ui/arrow_right_gray.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/ui/arrow_right_gray.png",value);
	DefaultAssetLibrary.path.set("assets/1x/ui/arrow_right_yellow.png","assets/1x/ui/arrow_right_yellow.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/ui/arrow_right_yellow.png",value);
	DefaultAssetLibrary.path.set("assets/1x/wheels/wheels1.png","assets/1x/wheels/wheels1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/wheels/wheels1.png",value);
	DefaultAssetLibrary.path.set("assets/1x/wheels/wheels2.png","assets/1x/wheels/wheels2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/wheels/wheels2.png",value);
	DefaultAssetLibrary.path.set("assets/1x/wheels/wheels3.png","assets/1x/wheels/wheels3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/wheels/wheels3.png",value);
	DefaultAssetLibrary.path.set("assets/1x/wheels/wheels4.png","assets/1x/wheels/wheels4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/wheels/wheels4.png",value);
	DefaultAssetLibrary.path.set("assets/1x/youtoo/light_off.png","assets/1x/youtoo/light_off.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/youtoo/light_off.png",value);
	DefaultAssetLibrary.path.set("assets/1x/youtoo/light_on.png","assets/1x/youtoo/light_on.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/youtoo/light_on.png",value);
	DefaultAssetLibrary.path.set("assets/1x/youtoo/youtoo_mini.png","assets/1x/youtoo/youtoo_mini.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/1x/youtoo/youtoo_mini.png",value);
	DefaultAssetLibrary.className.set("assets/fonts/Iceland-Regular.ttf",__ASSET__assets_fonts_iceland_regular_ttf);
	var value = Reflect.field(openfl.AssetType,"font".toUpperCase());
	DefaultAssetLibrary.type.set("assets/fonts/Iceland-Regular.ttf",value);
	DefaultAssetLibrary.className.set("RegularFont",__ASSET__assets_fonts_iceland_regular_ttf1);
	var value = Reflect.field(openfl.AssetType,"font".toUpperCase());
	DefaultAssetLibrary.type.set("RegularFont",value);
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = openfl.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl.AssetLibrary.prototype,{
	loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadBytes: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.net.URLLoader();
			loader.addEventListener(flash.events.Event.COMPLETE,function(event) {
				var bytes = new flash.utils.ByteArray();
				bytes.writeUTFBytes(event.currentTarget.data);
				bytes.position = 0;
				handler(bytes);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBytes(id));
	}
	,loadBitmapData: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.display.Loader();
			loader.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,function(event) {
				handler((js.Boot.__cast(event.currentTarget.content , flash.display.Bitmap)).bitmapData);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBitmapData(id));
	}
	,isLocal: function(id,type) {
		return true;
	}
	,getSound: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,getPath: function(id) {
		return DefaultAssetLibrary.path.get(id);
	}
	,getMusic: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(DefaultAssetLibrary.className.get(id),[]) , flash.text.Font);
	}
	,getBytes: function(id) {
		var bytes = null;
		var data = ApplicationMain.urlLoaders.get(DefaultAssetLibrary.path.get(id)).data;
		if(js.Boot.__instanceof(data,String)) {
			bytes = new flash.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,flash.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getBitmapData: function(id) {
		return (js.Boot.__cast(ApplicationMain.loaders.get(DefaultAssetLibrary.path.get(id)).contentLoaderInfo.content , flash.display.Bitmap)).bitmapData;
	}
	,exists: function(id,type) {
		var assetType = DefaultAssetLibrary.type.get(id);
		if(assetType != null) {
			if(assetType == type || (type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) && (assetType == openfl.AssetType.MUSIC || assetType == openfl.AssetType.SOUND)) return true;
			if(type == openfl.AssetType.BINARY || type == null) return true;
		}
		return false;
	}
	,__class__: DefaultAssetLibrary
});
flash.text = {}
flash.text.Font = function() {
	this.__metrics = [];
	this.__fontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	if(flash.text.Font.__fontData == null) {
		flash.text.Font.__fontData = [];
		flash.text.Font.__fontData["Bitstream_Vera_Sans"] = haxe.Unserializer.run(flash.text.Font.DEFAULT_FONT_DATA);
	}
	if(className == "flash.text.Font") this.set_fontName("Bitstream_Vera_Sans"); else this.set_fontName(className.split(".").pop());
};
$hxClasses["flash.text.Font"] = flash.text.Font;
flash.text.Font.__name__ = ["flash","text","Font"];
flash.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return flash.text.Font.__registeredFonts.slice();
}
flash.text.Font.__ofResource = function(resourceName,fontName) {
	if(fontName == null) fontName = "";
	var data = haxe.Unserializer.run(haxe.Resource.getString(resourceName));
	if(data == null) {
	} else {
		if(fontName == "") {
			flash.text.Font.__fontData[resourceName] = data.hash;
			fontName = data.fontName;
		}
		flash.text.Font.__fontData[data.fontName] = data.hash;
	}
	return fontName;
}
flash.text.Font.registerFont = function(font) {
	var instance = js.Boot.__cast(Type.createInstance(font,[]) , flash.text.Font);
	if(instance != null) {
		if(Reflect.hasField(font,"resourceName")) instance.set_fontName(flash.text.Font.__ofResource(Reflect.field(font,"resourceName")));
		flash.text.Font.__registeredFonts.push(instance);
	}
}
flash.text.Font.prototype = {
	set_fontName: function(name) {
		if(name == "_sans" || name == "_serif" || name == "_typewriter") name = "Bitstream_Vera_Sans";
		this.fontName = name;
		if(flash.text.Font.__fontData[this.fontName] == null) try {
			flash.text.Font.__ofResource(name);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		if(flash.text.Font.__fontData[this.fontName] != null) try {
			this.__glyphData = flash.text.Font.__fontData[this.fontName];
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		return name;
	}
	,__setScale: function(scale) {
		this.__fontScale = scale / 1024;
	}
	,__render: function(graphics,inChar,inX,inY,inOutline) {
		var index = 0;
		var glyph = this.__glyphData.get(inChar);
		if(glyph == null) return;
		var commands = glyph.commands;
		var data = glyph.data;
		var _g = 0;
		while(_g < commands.length) {
			var c = commands[_g];
			++_g;
			switch(c) {
			case 1:
				graphics.moveTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			case 2:
				graphics.lineTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			case 3:
				graphics.curveTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale,inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			}
		}
	}
	,__getAdvance: function(inGlyph,height) {
		var m = this.__metrics[inGlyph];
		if(m == null) {
			var glyph = this.__glyphData.get(inGlyph);
			if(glyph == null) return 0;
			this.__metrics[inGlyph] = m = glyph._width * this.__fontScale | 0;
		}
		if(m == null) return 0;
		return m;
	}
	,hasGlyph: function(str) {
		return this.__glyphData.exists(HxOverrides.cca(str,0));
	}
	,__class__: flash.text.Font
	,__properties__: {set_fontName:"set_fontName"}
}
var __ASSET__assets_fonts_iceland_regular_ttf = function() {
	flash.text.Font.call(this);
};
$hxClasses["__ASSET__assets_fonts_iceland_regular_ttf"] = __ASSET__assets_fonts_iceland_regular_ttf;
__ASSET__assets_fonts_iceland_regular_ttf.__name__ = ["__ASSET__assets_fonts_iceland_regular_ttf"];
__ASSET__assets_fonts_iceland_regular_ttf.__super__ = flash.text.Font;
__ASSET__assets_fonts_iceland_regular_ttf.prototype = $extend(flash.text.Font.prototype,{
	__class__: __ASSET__assets_fonts_iceland_regular_ttf
});
var __ASSET__assets_fonts_iceland_regular_ttf1 = function() {
	flash.text.Font.call(this);
};
$hxClasses["__ASSET__assets_fonts_iceland_regular_ttf1"] = __ASSET__assets_fonts_iceland_regular_ttf1;
__ASSET__assets_fonts_iceland_regular_ttf1.__name__ = ["__ASSET__assets_fonts_iceland_regular_ttf1"];
__ASSET__assets_fonts_iceland_regular_ttf1.__super__ = flash.text.Font;
__ASSET__assets_fonts_iceland_regular_ttf1.prototype = $extend(flash.text.Font.prototype,{
	__class__: __ASSET__assets_fonts_iceland_regular_ttf1
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,__class__: EReg
}
var HxOverrides = function() { }
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,__class__: List
}
var DefaultFont = function() {
	flash.text.Font.call(this);
};
$hxClasses["DefaultFont"] = DefaultFont;
DefaultFont.__name__ = ["DefaultFont"];
DefaultFont.__super__ = flash.text.Font;
DefaultFont.prototype = $extend(flash.text.Font.prototype,{
	__class__: DefaultFont
});
var IMap = function() { }
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
var NMEPreloader = function() {
	flash.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new flash.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new flash.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash.display.Sprite;
NMEPreloader.prototype = $extend(flash.display.Sprite.prototype,{
	onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
	}
	,onInit: function() {
	}
	,getWidth: function() {
		var width = 480;
		if(width > 0) return width; else return flash.Lib.get_current().get_stage().get_stageWidth();
	}
	,getHeight: function() {
		var height = 320;
		if(height > 0) return height; else return flash.Lib.get_current().get_stage().get_stageHeight();
	}
	,getBackgroundColor: function() {
		return 10066329;
	}
	,__class__: NMEPreloader
});
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isEnumValue = function(v) {
	return v != null && v.__enum__ != null;
}
Reflect.deleteField = function(o,field) {
	if(!Reflect.hasField(o,field)) return false;
	delete(o[field]);
	return true;
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return x <= 0?0:Math.floor(Math.random() * x);
}
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	return o.__class__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
var haxe = {}
haxe.Timer = function() { }
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
}
flash.Lib = function(rootElement,width,height) {
	this.mKilled = false;
	this.__scr = rootElement;
	if(this.__scr == null) throw "Root element not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	if(this.__scr.style.getPropertyValue("width") != "100%") this.__scr.style.width = width + "px";
	if(this.__scr.style.getPropertyValue("height") != "100%") this.__scr.style.height = height + "px";
};
$hxClasses["flash.Lib"] = flash.Lib;
flash.Lib.__name__ = ["flash","Lib"];
flash.Lib.__properties__ = {get_current:"get_current"}
flash.Lib.addCallback = function(functionName,closure) {
	flash.Lib.mMe.__scr[functionName] = closure;
}
flash.Lib["as"] = function(v,c) {
	return js.Boot.__instanceof(v,c)?v:null;
}
flash.Lib.attach = function(name) {
	return new flash.display.MovieClip();
}
flash.Lib.getTimer = function() {
	return (haxe.Timer.stamp() - flash.Lib.starttime) * 1000 | 0;
}
flash.Lib.getURL = function(request,target) {
	if(target == null) target = "_blank";
	window.open(request.url,target);
}
flash.Lib.preventDefaultTouchMove = function() {
	js.Browser.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
}
flash.Lib.Run = function(tgt,width,height) {
	flash.Lib.mMe = new flash.Lib(tgt,width,height);
	var _g1 = 0, _g = tgt.attributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var attr = tgt.attributes.item(i);
		if(StringTools.startsWith(attr.name,"data-")) {
			if(attr.name == "data-" + "framerate") flash.Lib.__getStage().set_frameRate(Std.parseFloat(attr.value));
		}
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_DIV_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	if(Reflect.hasField(js.Browser.window,"on" + "devicemotion")) js.Browser.window.addEventListener("devicemotion",($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	if(Reflect.hasField(js.Browser.window,"on" + "orientationchange")) js.Browser.window.addEventListener("orientationchange",($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	var _g = 0, _g1 = flash.Lib.HTML_WINDOW_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		js.Browser.window.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),false);
	}
	if(tgt.style.backgroundColor != null && tgt.style.backgroundColor != "") flash.Lib.__getStage().set_backgroundColor(flash.Lib.__parseColor(tgt.style.backgroundColor,function(res,pos,cur) {
		return pos == 0?res | cur << 16:pos == 1?res | cur << 8:pos == 2?res | cur:(function($this) {
			var $r;
			throw "pos should be 0-2";
			return $r;
		}(this));
	})); else flash.Lib.__getStage().set_backgroundColor(16777215);
	flash.Lib.get_current().get_graphics().beginFill(flash.Lib.__getStage().get_backgroundColor());
	flash.Lib.get_current().get_graphics().drawRect(0,0,width,height);
	flash.Lib.__setSurfaceId(flash.Lib.get_current().get_graphics().__surface,"Root MovieClip");
	flash.Lib.__getStage().__updateNextWake();
	return flash.Lib.mMe;
}
flash.Lib.setUserScalable = function(isScalable) {
	if(isScalable == null) isScalable = true;
	var meta = js.Browser.document.createElement("meta");
	meta.name = "viewport";
	meta.content = "user-scalable=" + (isScalable?"yes":"no");
}
flash.Lib.trace = function(arg) {
	if(window.console != null) window.console.log(arg);
}
flash.Lib.__appendSurface = function(surface,before,after) {
	if(flash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		surface.style.setProperty("transform-origin","0 0","");
		surface.style.setProperty("-moz-transform-origin","0 0","");
		surface.style.setProperty("-webkit-transform-origin","0 0","");
		surface.style.setProperty("-o-transform-origin","0 0","");
		surface.style.setProperty("-ms-transform-origin","0 0","");
		try {
			if(surface.localName == "canvas") surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		if(before != null) before.parentNode.insertBefore(surface,before); else if(after != null && after.nextSibling != null) after.parentNode.insertBefore(surface,after.nextSibling); else flash.Lib.mMe.__scr.appendChild(surface);
	}
}
flash.Lib.__appendText = function(surface,container,text,wrap,isHtml) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(js.Browser.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
}
flash.Lib.__bootstrap = function() {
	if(flash.Lib.mMe == null) {
		var target = js.Browser.document.getElementById("haxe:openfl");
		if(target == null) target = js.Browser.document.createElement("div");
		var agent = navigator.userAgent;
		if(agent.indexOf("BlackBerry") > -1 && target.style.height == "100%") target.style.height = screen.height + "px";
		if(agent.indexOf("Android") > -1) {
			var version = Std.parseFloat(HxOverrides.substr(agent,agent.indexOf("Android") + 8,3));
			if(version <= 2.3) flash.Lib.mForce2DTransform = true;
		}
		flash.Lib.Run(target,flash.Lib.__getWidth(),flash.Lib.__getHeight());
	}
}
flash.Lib.__copyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["left","top","transform","transform-origin","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
flash.Lib.__createSurfaceAnimationCSS = function(surface,data,template,templateFunc,fps,discrete,infinite) {
	if(infinite == null) infinite = false;
	if(discrete == null) discrete = false;
	if(fps == null) fps = 25;
	if(surface.id == null || surface.id == "") {
		flash.Lib.trace("Failed to create a CSS Style tag for a surface without an id attribute");
		return null;
	}
	var style = null;
	if(surface.getAttribute("data-openfl-anim") != null) style = js.Browser.document.getElementById(surface.getAttribute("data-openfl-anim")); else {
		style = flash.Lib.mMe.__scr.appendChild(js.Browser.document.createElement("style"));
		style.sheet.id = "__openfl_anim_" + surface.id + "__";
		surface.setAttribute("data-openfl-anim",style.sheet.id);
	}
	var keyframeStylesheetRule = "";
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		var perc = i / (data.length - 1) * 100;
		var frame = data[i];
		keyframeStylesheetRule += perc + "% { " + template.execute(templateFunc(frame)) + " } ";
	}
	var animationDiscreteRule = discrete?"steps(::steps::, end)":"";
	var animationInfiniteRule = infinite?"infinite":"";
	var animationTpl = "";
	var _g = 0, _g1 = ["animation","-moz-animation","-webkit-animation","-o-animation","-ms-animation"];
	while(_g < _g1.length) {
		var prefix = _g1[_g];
		++_g;
		animationTpl += prefix + ": ::id:: ::duration::s " + animationDiscreteRule + " " + animationInfiniteRule + "; ";
	}
	var animationStylesheetRule = new haxe.Template(animationTpl).execute({ id : surface.id, duration : data.length / fps, steps : 1});
	var rules = style.sheet.rules != null?style.sheet.rules:style.sheet.cssRules;
	var _g = 0, _g1 = ["","-moz-","-webkit-","-o-","-ms-"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		try {
			style.sheet.insertRule("@" + variant + "keyframes " + surface.id + " {" + keyframeStylesheetRule + "}",rules.length);
		} catch( e ) {
		}
	}
	style.sheet.insertRule("#" + surface.id + " { " + animationStylesheetRule + " } ",rules.length);
	return style;
}
flash.Lib.__designMode = function(mode) {
	js.Browser.document.designMode = mode?"on":"off";
}
flash.Lib.__disableFullScreen = function() {
}
flash.Lib.__disableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		flash.Lib.trace("Disable right click not supported in this browser.");
	}
}
flash.Lib.__drawClippedImage = function(surface,tgtCtx,clipRect) {
	if(clipRect != null) {
		if(clipRect.x < 0) {
			clipRect.width += clipRect.x;
			clipRect.x = 0;
		}
		if(clipRect.y < 0) {
			clipRect.height += clipRect.y;
			clipRect.y = 0;
		}
		if(clipRect.width > surface.width - clipRect.x) clipRect.width = surface.width - clipRect.x;
		if(clipRect.height > surface.height - clipRect.y) clipRect.height = surface.height - clipRect.y;
		tgtCtx.drawImage(surface,clipRect.x,clipRect.y,clipRect.width,clipRect.height,clipRect.x,clipRect.y,clipRect.width,clipRect.height);
	} else tgtCtx.drawImage(surface,0,0);
}
flash.Lib.__drawSurfaceRect = function(surface,tgt,x,y,rect) {
	var tgtCtx = tgt.getContext("2d");
	tgt.width = rect.width;
	tgt.height = rect.height;
	tgtCtx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
	tgt.style.left = x + "px";
	tgt.style.top = y + "px";
}
flash.Lib.__drawToSurface = function(surface,tgt,matrix,alpha,clipRect,smoothing) {
	if(smoothing == null) smoothing = true;
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	tgtCtx.globalAlpha = alpha;
	flash.Lib.__setImageSmoothing(tgtCtx,smoothing);
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			flash.Lib.__drawClippedImage(surface,tgtCtx,clipRect);
			tgtCtx.restore();
		} else flash.Lib.__drawClippedImage(surface,tgtCtx,clipRect);
	}
}
flash.Lib.__enableFullScreen = function() {
	if(flash.Lib.mMe != null) {
		var origWidth = flash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = flash.Lib.mMe.__scr.style.getPropertyValue("height");
		flash.Lib.mMe.__scr.style.setProperty("width","100%","");
		flash.Lib.mMe.__scr.style.setProperty("height","100%","");
		flash.Lib.__disableFullScreen = function() {
			flash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			flash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
flash.Lib.__enableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		flash.Lib.trace("Enable right click not supported in this browser.");
	}
}
flash.Lib.__fullScreenHeight = function() {
	return js.Browser.window.innerHeight;
}
flash.Lib.__fullScreenWidth = function() {
	return js.Browser.window.innerWidth;
}
flash.Lib.__getHeight = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:openfl");
	return tgt != null && tgt.clientHeight > 0?tgt.clientHeight:500;
}
flash.Lib.__getStage = function() {
	if(flash.Lib.mStage == null) {
		var width = flash.Lib.__getWidth();
		var height = flash.Lib.__getHeight();
		flash.Lib.mStage = new flash.display.Stage(width,height);
	}
	return flash.Lib.mStage;
}
flash.Lib.__getWidth = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:openfl");
	return tgt != null && tgt.clientWidth > 0?tgt.clientWidth:500;
}
flash.Lib.__isOnStage = function(surface) {
	var p = surface;
	while(p != null && p != flash.Lib.mMe.__scr) p = p.parentNode;
	return p == flash.Lib.mMe.__scr;
}
flash.Lib.__parseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		return col;
	} else if(hex.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = "0x" + hex.matched(pos) & 255;
			v = cb(col,pos - 1,v);
		}
		return col;
	} else throw "Cannot parse color '" + str + "'.";
}
flash.Lib.__removeSurface = function(surface) {
	if(flash.Lib.mMe.__scr != null) {
		var anim = surface.getAttribute("data-openfl-anim");
		if(anim != null) {
			var style = js.Browser.document.getElementById(anim);
			if(style != null) flash.Lib.mMe.__scr.removeChild(style);
		}
		if(surface.parentNode != null) surface.parentNode.removeChild(surface);
	}
	return surface;
}
flash.Lib.__setSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
flash.Lib.__setSurfaceClipping = function(surface,rect) {
}
flash.Lib.__setSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
flash.Lib.__setSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
flash.Lib.__setSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
flash.Lib.__setSurfaceTransform = function(surface,matrix) {
	if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1 && surface.getAttribute("data-openfl-anim") == null) {
		surface.style.left = matrix.tx + "px";
		surface.style.top = matrix.ty + "px";
		surface.style.setProperty("transform","","");
		surface.style.setProperty("-moz-transform","","");
		surface.style.setProperty("-webkit-transform","","");
		surface.style.setProperty("-o-transform","","");
		surface.style.setProperty("-ms-transform","","");
	} else {
		surface.style.left = "0px";
		surface.style.top = "0px";
		surface.style.setProperty("transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-moz-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + "px, " + matrix.ty + "px)","");
		if(!flash.Lib.mForce2DTransform) surface.style.setProperty("-webkit-transform","matrix3d(" + matrix.a + ", " + matrix.b + ", " + "0, 0, " + matrix.c + ", " + matrix.d + ", " + "0, 0, 0, 0, 1, 0, " + matrix.tx + ", " + matrix.ty + ", " + "0, 1" + ")",""); else surface.style.setProperty("-webkit-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-o-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-ms-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
	}
}
flash.Lib.__setSurfaceZIndexAfter = function(surface1,surface2) {
	if(surface1 != null && surface2 != null) {
		if(surface1.parentNode != surface2.parentNode && surface2.parentNode != null) surface2.parentNode.appendChild(surface1);
		if(surface2.parentNode != null) {
			var nextSibling = surface2.nextSibling;
			if(surface1.previousSibling != surface2) {
				var swap = flash.Lib.__removeSurface(surface1);
				if(nextSibling == null) surface2.parentNode.appendChild(swap); else surface2.parentNode.insertBefore(swap,nextSibling);
			}
		}
	}
}
flash.Lib.__swapSurface = function(surface1,surface2) {
	var parent1 = surface1.parentNode;
	var parent2 = surface2.parentNode;
	if(parent1 != null && parent2 != null) {
		if(parent1 == parent2) {
			var next1 = surface1.nextSibling;
			var next2 = surface2.nextSibling;
			if(next1 == surface2) parent1.insertBefore(surface2,surface1); else if(next2 == surface1) parent1.insertBefore(surface1,surface2); else {
				parent1.replaceChild(surface2,surface1);
				if(next2 != null) parent1.insertBefore(surface1,next2); else parent1.appendChild(surface1);
			}
		} else {
			var next2 = surface2.nextSibling;
			parent1.replaceChild(surface2,surface1);
			if(next2 != null) parent2.insertBefore(surface1,next2); else parent2.appendChild(surface1);
		}
	}
}
flash.Lib.__setContentEditable = function(surface,contentEditable) {
	if(contentEditable == null) contentEditable = true;
	surface.setAttribute("contentEditable",contentEditable?"true":"false");
}
flash.Lib.__setCursor = function(type) {
	if(flash.Lib.mMe != null) flash.Lib.mMe.__scr.style.cursor = (function($this) {
		var $r;
		switch( (type)[1] ) {
		case 0:
			$r = "pointer";
			break;
		case 1:
			$r = "text";
			break;
		default:
			$r = "default";
		}
		return $r;
	}(this));
}
flash.Lib.__setImageSmoothing = function(context,enabled) {
	var _g = 0, _g1 = ["imageSmoothingEnabled","mozImageSmoothingEnabled","webkitImageSmoothingEnabled"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		context[variant] = enabled;
	}
}
flash.Lib.__setSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.__setSurfaceId = function(surface,name) {
	var regex = new EReg("[^a-zA-Z0-9\\-]","g");
	surface.id = regex.replace(name,"_");
}
flash.Lib.__setSurfaceRotation = function(surface,rotate) {
	surface.style.setProperty("transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-moz-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-webkit-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-o-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-ms-transform","rotate(" + rotate + "deg)","");
}
flash.Lib.__setSurfaceScale = function(surface,scale) {
	surface.style.setProperty("transform","scale(" + scale + ")","");
	surface.style.setProperty("-moz-transform","scale(" + scale + ")","");
	surface.style.setProperty("-webkit-transform","scale(" + scale + ")","");
	surface.style.setProperty("-o-transform","scale(" + scale + ")","");
	surface.style.setProperty("-ms-transform","scale(" + scale + ")","");
}
flash.Lib.__setSurfaceSpritesheetAnimation = function(surface,spec,fps) {
	if(spec.length == 0) return surface;
	var div = js.Browser.document.createElement("div");
	div.style.backgroundImage = "url(" + surface.toDataURL("image/png") + ")";
	div.id = surface.id;
	var keyframeTpl = new haxe.Template("background-position: ::left::px ::top::px; width: ::width::px; height: ::height::px; ");
	var templateFunc = function(frame) {
		return { left : -frame.x, top : -frame.y, width : frame.width, height : frame.height};
	};
	flash.Lib.__createSurfaceAnimationCSS(div,spec,keyframeTpl,templateFunc,fps,true,true);
	if(flash.Lib.__isOnStage(surface)) {
		flash.Lib.__appendSurface(div);
		flash.Lib.__copyStyle(surface,div);
		flash.Lib.__swapSurface(surface,div);
		flash.Lib.__removeSurface(surface);
	} else flash.Lib.__copyStyle(surface,div);
	return div;
}
flash.Lib.__setSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
flash.Lib.__setTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.__surfaceHitTest = function(surface,x,y) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
}
flash.Lib.get_current = function() {
	if(flash.Lib.mMainClassRoot == null) {
		flash.Lib.mMainClassRoot = new flash.display.MovieClip();
		flash.Lib.mCurrent = flash.Lib.mMainClassRoot;
		flash.Lib.__getStage().addChild(flash.Lib.mCurrent);
	}
	return flash.Lib.mMainClassRoot;
}
flash.Lib.prototype = {
	__class__: flash.Lib
}
flash._Lib = {}
flash._Lib.CursorType = $hxClasses["flash._Lib.CursorType"] = { __ename__ : true, __constructs__ : ["Pointer","Text","Default"] }
flash._Lib.CursorType.Pointer = ["Pointer",0];
flash._Lib.CursorType.Pointer.toString = $estr;
flash._Lib.CursorType.Pointer.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Text = ["Text",1];
flash._Lib.CursorType.Text.toString = $estr;
flash._Lib.CursorType.Text.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Default = ["Default",2];
flash._Lib.CursorType.Default.toString = $estr;
flash._Lib.CursorType.Default.__enum__ = flash._Lib.CursorType;
flash._Vector = {}
flash._Vector.Vector_Impl_ = function() { }
$hxClasses["flash._Vector.Vector_Impl_"] = flash._Vector.Vector_Impl_;
flash._Vector.Vector_Impl_.__name__ = ["flash","_Vector","Vector_Impl_"];
flash._Vector.Vector_Impl_.__properties__ = {set_fixed:"set_fixed",get_fixed:"get_fixed",set_length:"set_length",get_length:"get_length"}
flash._Vector.Vector_Impl_._new = function(length,fixed) {
	return new Array();
}
flash._Vector.Vector_Impl_.concat = function(this1,a) {
	return this1.concat(a);
}
flash._Vector.Vector_Impl_.copy = function(this1) {
	return this1.slice();
}
flash._Vector.Vector_Impl_.iterator = function(this1) {
	return HxOverrides.iter(this1);
}
flash._Vector.Vector_Impl_.join = function(this1,sep) {
	return this1.join(sep);
}
flash._Vector.Vector_Impl_.pop = function(this1) {
	return this1.pop();
}
flash._Vector.Vector_Impl_.push = function(this1,x) {
	return this1.push(x);
}
flash._Vector.Vector_Impl_.reverse = function(this1) {
	this1.reverse();
}
flash._Vector.Vector_Impl_.shift = function(this1) {
	return this1.shift();
}
flash._Vector.Vector_Impl_.unshift = function(this1,x) {
	this1.unshift(x);
}
flash._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	return this1.slice(pos,end);
}
flash._Vector.Vector_Impl_.sort = function(this1,f) {
	this1.sort(f);
}
flash._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	return this1.splice(pos,len);
}
flash._Vector.Vector_Impl_.toString = function(this1) {
	return this1.toString();
}
flash._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from, _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1[i] == x) return i;
	}
	return -1;
}
flash._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1[i] == x) return i;
		i--;
	}
	return -1;
}
flash._Vector.Vector_Impl_.ofArray = function(a) {
	return flash._Vector.Vector_Impl_.concat(flash._Vector.Vector_Impl_._new(),a);
}
flash._Vector.Vector_Impl_.convert = function(v) {
	return v;
}
flash._Vector.Vector_Impl_.fromArray = function(a) {
	return a;
}
flash._Vector.Vector_Impl_.toArray = function(this1) {
	return this1;
}
flash._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
}
flash._Vector.Vector_Impl_.set_length = function(this1,value) {
	if(value < this1.length) this1 = this1.slice(0,value);
	while(value > this1.length) this1.push(null);
	return value;
}
flash._Vector.Vector_Impl_.get_fixed = function(this1) {
	return false;
}
flash._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return value;
}
flash.accessibility = {}
flash.accessibility.AccessibilityProperties = function() {
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
};
$hxClasses["flash.accessibility.AccessibilityProperties"] = flash.accessibility.AccessibilityProperties;
flash.accessibility.AccessibilityProperties.__name__ = ["flash","accessibility","AccessibilityProperties"];
flash.accessibility.AccessibilityProperties.prototype = {
	__class__: flash.accessibility.AccessibilityProperties
}
flash.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if(inSmoothing == null) inSmoothing = false;
	flash.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	if(inBitmapData != null) {
		this.set_bitmapData(inBitmapData);
		if(this.bitmapData.__referenceCount == 1) this.__graphics = new flash.display.Graphics(this.bitmapData.___textureBuffer);
	}
	if(this.pixelSnapping == null) this.pixelSnapping = flash.display.PixelSnapping.AUTO;
	if(this.__graphics == null) this.__graphics = new flash.display.Graphics();
	if(this.bitmapData != null) this.__render();
};
$hxClasses["flash.display.Bitmap"] = flash.display.Bitmap;
flash.display.Bitmap.__name__ = ["flash","display","Bitmap"];
flash.display.Bitmap.__super__ = flash.display.DisplayObject;
flash.display.Bitmap.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_bitmapData: function(inBitmapData) {
		if(inBitmapData != this.bitmapData) {
			if(this.bitmapData != null) {
				this.bitmapData.__referenceCount--;
				if(this.__graphics.__surface == this.bitmapData.___textureBuffer) flash.Lib.__setSurfaceOpacity(this.bitmapData.___textureBuffer,0);
			}
			if(inBitmapData != null) inBitmapData.__referenceCount++;
		}
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		this.bitmapData = inBitmapData;
		return inBitmapData;
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		if(this.bitmapData == null) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.bitmapData.___textureBuffer != this.__graphics.__surface) {
			var imageDataLease = this.bitmapData.__lease;
			if(imageDataLease != null && (this.__currentLease == null || imageDataLease.seed != this.__currentLease.seed || imageDataLease.time != this.__currentLease.time)) {
				var srcCanvas = this.bitmapData.___textureBuffer;
				this.__graphics.__surface.width = srcCanvas.width;
				this.__graphics.__surface.height = srcCanvas.height;
				this.__graphics.clear();
				flash.Lib.__drawToSurface(srcCanvas,this.__graphics.__surface);
				this.__currentLease = imageDataLease.clone();
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				this.__applyFilters(this.__graphics.__surface);
				this.___renderFlags |= 32;
			}
		}
		if(inMask != null) {
			this.__applyFilters(this.__graphics.__surface);
			var m = this.getBitmapSurfaceTransform(this.__graphics);
			flash.Lib.__drawToSurface(this.__graphics.__surface,inMask,m,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha,clipRect,this.smoothing);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getBitmapSurfaceTransform(this.__graphics);
				flash.Lib.__setSurfaceTransform(this.__graphics.__surface,m);
				this.___renderFlags &= -33;
			}
			if(!this.__init) {
				flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,0);
				this.__init = true;
			} else flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.bitmapData != null) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.get_width() / this.get_scaleX() || local.y > this.get_height() / this.get_scaleY()) return null; else return this;
		} else return flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.DisplayObject.prototype.validateBounds.call(this);
			if(this.bitmapData != null) {
				var r = new flash.geom.Rectangle(0,0,this.bitmapData.get_width(),this.bitmapData.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[Bitmap name=" + this.name + " id=" + this.___id + "]";
	}
	,getBitmapSurfaceTransform: function(gfx) {
		var extent = gfx.__extentWithFilters;
		var fm = this.transform.__getFullMatrix(null);
		fm.__translateTransformed(extent.get_topLeft());
		return fm;
	}
	,__class__: flash.display.Bitmap
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
flash.display.BitmapData = function(width,height,transparent,inFillColor) {
	if(inFillColor == null) inFillColor = -1;
	if(transparent == null) transparent = true;
	this.__locked = false;
	this.__referenceCount = 0;
	this.__leaseNum = 0;
	this.__lease = new flash.display.ImageDataLease();
	this.__lease.set(this.__leaseNum++,new Date().getTime());
	this.___textureBuffer = js.Browser.document.createElement("canvas");
	this.___textureBuffer.width = width;
	this.___textureBuffer.height = height;
	this.___id = flash.utils.Uuid.uuid();
	flash.Lib.__setSurfaceId(this.___textureBuffer,this.___id);
	this.__transparent = transparent;
	this.rect = new flash.geom.Rectangle(0,0,width,height);
	if(this.__transparent) {
		this.__transparentFiller = js.Browser.document.createElement("canvas");
		this.__transparentFiller.width = width;
		this.__transparentFiller.height = height;
		var ctx = this.__transparentFiller.getContext("2d");
		ctx.fillStyle = "rgba(0,0,0,0);";
		ctx.fill();
	}
	if(inFillColor != null && width > 0 && height > 0) {
		if(!this.__transparent) inFillColor |= -16777216;
		this.__initColor = inFillColor;
		this.__fillRect(this.rect,inFillColor);
	}
};
$hxClasses["flash.display.BitmapData"] = flash.display.BitmapData;
flash.display.BitmapData.__name__ = ["flash","display","BitmapData"];
flash.display.BitmapData.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.BitmapData.getRGBAPixels = function(bitmapData) {
	var p = bitmapData.getPixels(new flash.geom.Rectangle(0,0,bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0,bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0));
	var num = (bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0) * (bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0);
	p.position = 0;
	var _g = 0;
	while(_g < num) {
		var i = _g++;
		var pos = p.position;
		var alpha = p.readByte();
		var red = p.readByte();
		var green = p.readByte();
		var blue = p.readByte();
		p.position = pos;
		p.writeByte(red);
		p.writeByte(green);
		p.writeByte(blue);
		p.writeByte(alpha);
	}
	return p;
}
flash.display.BitmapData.loadFromBase64 = function(base64,type,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.__loadFromBase64(base64,type,onload);
	return bitmapData;
}
flash.display.BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.__loadFromBytes(bytes,inRawAlpha,onload);
	return bitmapData;
}
flash.display.BitmapData.__base64Encode = function(bytes) {
	var blob = "";
	var codex = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	bytes.position = 0;
	while(bytes.position < bytes.length) {
		var by1 = 0, by2 = 0, by3 = 0;
		by1 = bytes.readByte();
		if(bytes.position < bytes.length) by2 = bytes.readByte();
		if(bytes.position < bytes.length) by3 = bytes.readByte();
		var by4 = 0, by5 = 0, by6 = 0, by7 = 0;
		by4 = by1 >> 2;
		by5 = (by1 & 3) << 4 | by2 >> 4;
		by6 = (by2 & 15) << 2 | by3 >> 6;
		by7 = by3 & 63;
		blob += codex.charAt(by4);
		blob += codex.charAt(by5);
		if(bytes.position < bytes.length) blob += codex.charAt(by6); else blob += "=";
		if(bytes.position < bytes.length) blob += codex.charAt(by7); else blob += "=";
	}
	return blob;
}
flash.display.BitmapData.__createFromHandle = function(inHandle) {
	var result = new flash.display.BitmapData(0,0);
	result.___textureBuffer = inHandle;
	return result;
}
flash.display.BitmapData.__isJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
}
flash.display.BitmapData.__isPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
}
flash.display.BitmapData.prototype = {
	get_width: function() {
		if(this.___textureBuffer != null) return this.___textureBuffer.width; else return 0;
	}
	,get_transparent: function() {
		return this.__transparent;
	}
	,get_height: function() {
		if(this.___textureBuffer != null) return this.___textureBuffer.height; else return 0;
	}
	,__onLoad: function(data,e) {
		var canvas = data.texture;
		var width = data.image.width;
		var height = data.image.height;
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(data.image,0,0,width,height);
		data.bitmapData.width = width;
		data.bitmapData.height = height;
		data.bitmapData.rect = new flash.geom.Rectangle(0,0,width,height);
		data.bitmapData.__buildLease();
		if(data.inLoader != null) {
			var e1 = new flash.events.Event(flash.events.Event.COMPLETE);
			e1.target = data.inLoader;
			data.inLoader.dispatchEvent(e1);
		}
	}
	,__loadFromFile: function(inFilename,inLoader) {
		var _g = this;
		var image = js.Browser.document.createElement("img");
		if(inLoader != null) {
			var data = { image : image, texture : this.___textureBuffer, inLoader : inLoader, bitmapData : this};
			image.addEventListener("load",(function(f,a1) {
				return function(e) {
					return f(a1,e);
				};
			})($bind(this,this.__onLoad),data),false);
			image.addEventListener("error",function(e) {
				if(!image.complete) _g.__onLoad(data,e);
			},false);
		}
		image.src = inFilename;
		if(image.complete) {
		}
	}
	,__incrNumRefBitmaps: function() {
		this.__assignedBitmaps++;
	}
	,__getNumRefBitmaps: function() {
		return this.__assignedBitmaps;
	}
	,__loadFromBytes: function(bytes,inRawAlpha,onload) {
		var _g = this;
		var type = "";
		if(flash.display.BitmapData.__isPNG(bytes)) type = "image/png"; else if(flash.display.BitmapData.__isJPG(bytes)) type = "image/jpeg"; else throw new flash.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		if(inRawAlpha != null) this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,function(_) {
			var ctx = _g.___textureBuffer.getContext("2d");
			var pixels = ctx.getImageData(0,0,_g.___textureBuffer.width,_g.___textureBuffer.height);
			var _g2 = 0, _g1 = inRawAlpha.length;
			while(_g2 < _g1) {
				var i = _g2++;
				pixels.data[i * 4 + 3] = inRawAlpha.readUnsignedByte();
			}
			ctx.putImageData(pixels,0,0);
			if(onload != null) onload(_g);
		}); else this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,onload);
	}
	,__loadFromBase64: function(base64,type,onload) {
		var _g = this;
		var img = js.Browser.document.createElement("img");
		var canvas = this.___textureBuffer;
		var drawImage = function(_) {
			canvas.width = img.width;
			canvas.height = img.height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img,0,0);
			_g.rect = new flash.geom.Rectangle(0,0,canvas.width,canvas.height);
			if(onload != null) onload(_g);
		};
		img.addEventListener("load",drawImage,false);
		img.src = "data:" + type + ";base64," + base64;
	}
	,__getLease: function() {
		return this.__lease;
	}
	,__fillRect: function(rect,color) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a = this.__transparent?color >>> 24:255;
		if(!this.__locked) {
			var style = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
			ctx.fillStyle = style;
			ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.__imageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.__imageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.__imageData.data[s + offsetX] = r;
					this.__imageData.data[s + offsetX + 1] = g;
					this.__imageData.data[s + offsetX + 2] = b;
					this.__imageData.data[s + offsetX + 3] = a;
				}
			}
			this.__imageDataChanged = true;
		}
	}
	,__decrNumRefBitmaps: function() {
		this.__assignedBitmaps--;
	}
	,__clearCanvas: function() {
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.clearRect(0,0,this.___textureBuffer.width,this.___textureBuffer.height);
	}
	,__buildLease: function() {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	}
	,unlock: function(changeRect) {
		this.__locked = false;
		var ctx = this.___textureBuffer.getContext("2d");
		if(this.__imageDataChanged) {
			if(changeRect != null) ctx.putImageData(this.__imageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.__imageData,0,0);
		}
		var _g = 0, _g1 = this.__copyPixelList;
		while(_g < _g1.length) {
			var copyCache = _g1[_g];
			++_g;
			if(this.__transparent && copyCache.transparentFiller != null) {
				var trpCtx = copyCache.transparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight);
				ctx.putImageData(trpData,copyCache.destX,copyCache.destY);
			}
			ctx.drawImage(copyCache.handle,copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight,copyCache.destX,copyCache.destY,copyCache.sourceWidth,copyCache.sourceHeight);
		}
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		console.log("BitmapData.threshold not implemented");
		return 0;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.clipRect(rect);
		if(rect == null) return;
		var len = Math.round(4 * rect.width * rect.height);
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				imageData.data[i] = byteArray.readByte();
			}
			ctx.putImageData(imageData,rect.x,rect.y);
		} else {
			var offset = Math.round(4 * this.__imageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.__imageData.width * 4) > boundR - 1) pos += this.__imageData.width * 4 - boundR;
				this.__imageData.data[pos] = byteArray.readByte();
				pos++;
			}
			this.__imageDataChanged = true;
		}
	}
	,setPixel32: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return;
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.__transparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.__imageData.width + x * 4;
			this.__imageData.data[offset] = (color & 16711680) >>> 16;
			this.__imageData.data[offset + 1] = (color & 65280) >>> 8;
			this.__imageData.data[offset + 2] = color & 255;
			if(this.__transparent) this.__imageData.data[offset + 3] = (color & -16777216) >>> 24; else this.__imageData.data[offset + 3] = 255;
			this.__imageDataChanged = true;
		}
	}
	,setPixel: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return;
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.__transparent) imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.__imageData.width + x * 4;
			this.__imageData.data[offset] = (color & 16711680) >>> 16;
			this.__imageData.data[offset + 1] = (color & 65280) >>> 8;
			this.__imageData.data[offset + 2] = color & 255;
			if(this.__transparent) this.__imageData.data[offset + 3] = 255;
			this.__imageDataChanged = true;
		}
	}
	,scroll: function(x,y) {
		throw "bitmapData.scroll is currently not supported for HTML5";
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		var generator = new flash.display._BitmapData.MinstdGenerator(randomSeed);
		var ctx = this.___textureBuffer.getContext("2d");
		var imageData = null;
		if(this.__locked) imageData = this.__imageData; else imageData = ctx.createImageData(this.___textureBuffer.width,this.___textureBuffer.height);
		var _g1 = 0, _g = this.___textureBuffer.width * this.___textureBuffer.height;
		while(_g1 < _g) {
			var i = _g1++;
			if(grayScale) imageData.data[i * 4] = imageData.data[i * 4 + 1] = imageData.data[i * 4 + 2] = low + generator.nextValue() % (high - low + 1); else {
				imageData.data[i * 4] = (channelOptions & 1) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 1] = (channelOptions & 2) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 2] = (channelOptions & 4) == 0?0:low + generator.nextValue() % (high - low + 1);
			}
			imageData.data[i * 4 + 3] = (channelOptions & 8) == 0?255:low + generator.nextValue() % (high - low + 1);
		}
		if(this.__locked) this.__imageDataChanged = true; else ctx.putImageData(imageData,0,0);
	}
	,lock: function() {
		this.__locked = true;
		var ctx = this.___textureBuffer.getContext("2d");
		this.__imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
		this.__imageDataChanged = false;
		this.__copyPixelList = [];
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		var type = Type.getClassName(Type.getClass(secondObject));
		firstAlphaThreshold = firstAlphaThreshold & -1;
		var me = this;
		var doHitTest = function(imageData) {
			if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) return false;
			var _g = secondObject.__proto__.__class__.__name__[2];
			switch(_g) {
			case "Rectangle":
				var rect = secondObject;
				rect.x -= firstPoint.x;
				rect.y -= firstPoint.y;
				rect = me.clipRect(me.rect);
				if(me.rect == null) return false;
				var boundingBox = new flash.geom.Rectangle(0,0,me.___textureBuffer != null?me.___textureBuffer.width:0,me.___textureBuffer != null?me.___textureBuffer.height:0);
				if(!rect.intersects(boundingBox)) return false;
				var diff = rect.intersection(boundingBox);
				var offset = 4 * (Math.round(diff.x) + Math.round(diff.y) * imageData.width) + 3;
				var pos = offset;
				var boundR = Math.round(4 * (diff.x + diff.width));
				while(pos < offset + Math.round(4 * (diff.width + imageData.width * diff.height))) {
					if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
					if(imageData.data[pos] - firstAlphaThreshold >= 0) return true;
					pos += 4;
				}
				return false;
			case "Point":
				var point = secondObject;
				var x = point.x - firstPoint.x;
				var y = point.y - firstPoint.y;
				if(x < 0 || y < 0 || x >= (me.___textureBuffer != null?me.___textureBuffer.width:0) || y >= (me.___textureBuffer != null?me.___textureBuffer.height:0)) return false;
				if(imageData.data[Math.round(4 * (y * (me.___textureBuffer != null?me.___textureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) return true;
				return false;
			case "Bitmap":
				throw "bitmapData.hitTest with a second object of type Bitmap is currently not supported for HTML5";
				return false;
			case "BitmapData":
				throw "bitmapData.hitTest with a second object of type BitmapData is currently not supported for HTML5";
				return false;
			default:
				throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
				return false;
			}
		};
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			return doHitTest(imageData);
		} else return doHitTest(this.__imageData);
	}
	,handle: function() {
		return this.___textureBuffer;
	}
	,getPixels: function(rect) {
		var len = Math.round(4 * rect.width * rect.height);
		var byteArray = new flash.utils.ByteArray();
		if(byteArray.allocated < len) byteArray.___resizeBuffer(byteArray.allocated = Math.max(len,byteArray.allocated * 2) | 0); else if(byteArray.allocated > len) byteArray.___resizeBuffer(byteArray.allocated = len);
		byteArray.length = len;
		len;
		rect = this.clipRect(rect);
		if(rect == null) return byteArray;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				byteArray.writeByte(imagedata.data[i]);
			}
		} else {
			var offset = Math.round(4 * this.__imageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.__imageData.width * 4) > boundR - 1) pos += this.__imageData.width * 4 - boundR;
				byteArray.writeByte(this.__imageData.data[pos]);
				pos++;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,getPixel32: function(x,y) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return 0;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			return this.getInt32(0,ctx.getImageData(x,y,1,1).data);
		} else return this.getInt32(4 * y * this.___textureBuffer.width + x * 4,this.__imageData.data);
	}
	,getPixel: function(x,y) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return 0;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(x,y,1,1);
			return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
		} else {
			var offset = 4 * y * (this.___textureBuffer != null?this.___textureBuffer.width:0) + x * 4;
			return this.__imageData.data[offset] << 16 | this.__imageData.data[offset + 1] << 8 | this.__imageData.data[offset + 2];
		}
	}
	,getInt32: function(offset,data) {
		return (this.__transparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		var me = this;
		var doGetColorBoundsRect = function(data) {
			var minX = me.___textureBuffer != null?me.___textureBuffer.width:0, maxX = 0, minY = me.___textureBuffer != null?me.___textureBuffer.height:0, maxY = 0, i = 0;
			while(i < data.length) {
				var value = me.getInt32(i,data);
				if(findColor) {
					if((value & mask) == color) {
						var x = Math.round(i % ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4) / 4);
						var y = Math.round(i / ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4));
						if(x < minX) minX = x;
						if(x > maxX) maxX = x;
						if(y < minY) minY = y;
						if(y > maxY) maxY = y;
					}
				} else if((value & mask) != color) {
					var x = Math.round(i % ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4) / 4);
					var y = Math.round(i / ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4));
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
				i += 4;
			}
			if(minX < maxX && minY < maxY) return new flash.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new flash.geom.Rectangle(0,0,me.___textureBuffer != null?me.___textureBuffer.width:0,me.___textureBuffer != null?me.___textureBuffer.height:0);
		};
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			return doGetColorBoundsRect(imageData.data);
		} else return doGetColorBoundsRect(this.__imageData.data);
	}
	,floodFill: function(x,y,color) {
		var wasLocked = this.__locked;
		if(!this.__locked) this.lock();
		var queue = new Array();
		queue.push(new flash.geom.Point(x,y));
		var old = this.getPixel32(x,y);
		var iterations = 0;
		var search = new Array();
		var _g1 = 0, _g = (this.___textureBuffer != null?this.___textureBuffer.width:0) + 1;
		while(_g1 < _g) {
			var i = _g1++;
			var column = new Array();
			var _g3 = 0, _g2 = (this.___textureBuffer != null?this.___textureBuffer.height:0) + 1;
			while(_g3 < _g2) {
				var i1 = _g3++;
				column.push(false);
			}
			search.push(column);
		}
		var currPoint, newPoint;
		while(queue.length > 0) {
			currPoint = queue.shift();
			++iterations;
			var x1 = currPoint.x | 0;
			var y1 = currPoint.y | 0;
			if(x1 < 0 || x1 >= (this.___textureBuffer != null?this.___textureBuffer.width:0)) continue;
			if(y1 < 0 || y1 >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) continue;
			search[x1][y1] = true;
			if(this.getPixel32(x1,y1) == old) {
				this.setPixel32(x1,y1,color);
				if(!search[x1 + 1][y1]) queue.push(new flash.geom.Point(x1 + 1,y1));
				if(!search[x1][y1 + 1]) queue.push(new flash.geom.Point(x1,y1 + 1));
				if(x1 > 0 && !search[x1 - 1][y1]) queue.push(new flash.geom.Point(x1 - 1,y1));
				if(y1 > 0 && !search[x1][y1 - 1]) queue.push(new flash.geom.Point(x1,y1 - 1));
			}
		}
		if(!wasLocked) this.unlock();
	}
	,fillRect: function(rect,color) {
		if(rect == null) return;
		if(rect.width <= 0 || rect.height <= 0) return;
		if(rect.x == 0 && rect.y == 0 && rect.width == this.___textureBuffer.width && rect.height == this.___textureBuffer.height) {
			if(this.__transparent) {
				if(color >>> 24 == 0 || color == this.__initColor) return this.__clearCanvas();
			} else if((color | -16777216) == (this.__initColor | -16777216)) return this.__clearCanvas();
		}
		return this.__fillRect(rect,color);
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = inSurface.getContext("2d");
		if(matrix != null) {
			ctx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else {
				flash.Lib.__setImageSmoothing(ctx,smoothing);
				ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			}
			ctx.drawImage(this.___textureBuffer,0,0);
			ctx.restore();
		} else ctx.drawImage(this.___textureBuffer,0,0);
		if(inColorTransform != null) this.colorTransform(new flash.geom.Rectangle(0,0,this.___textureBuffer.width,this.___textureBuffer.height),inColorTransform);
	}
	,draw: function(source,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		source.drawToSurface(this.___textureBuffer,matrix,inColorTransform,blendMode,clipRect,smoothing);
		if(inColorTransform != null) {
			var rect = new flash.geom.Rectangle();
			var object = source;
			rect.x = matrix != null?matrix.tx:0;
			rect.y = matrix != null?matrix.ty:0;
			try {
				rect.width = Reflect.getProperty(source,"width");
				rect.height = Reflect.getProperty(source,"height");
			} catch( e ) {
				rect.width = this.___textureBuffer.width;
				rect.height = this.___textureBuffer.height;
			}
			this.colorTransform(rect,inColorTransform);
		}
	}
	,dispose: function() {
		this.__clearCanvas();
		this.___textureBuffer = null;
		this.__leaseNum = 0;
		this.__lease = null;
		this.__imageData = null;
	}
	,destroy: function() {
		this.___textureBuffer = null;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(sourceBitmapData.___textureBuffer == null || this.___textureBuffer == null || sourceBitmapData.___textureBuffer.width == 0 || sourceBitmapData.___textureBuffer.height == 0 || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.___textureBuffer.width) sourceRect.width = sourceBitmapData.___textureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.___textureBuffer.height) sourceRect.height = sourceBitmapData.___textureBuffer.height - sourceRect.y;
		if(alphaBitmapData != null && alphaBitmapData.__transparent) {
			if(alphaPoint == null) alphaPoint = new flash.geom.Point();
			var bitmapData = new flash.display.BitmapData(sourceBitmapData.___textureBuffer != null?sourceBitmapData.___textureBuffer.width:0,sourceBitmapData.___textureBuffer != null?sourceBitmapData.___textureBuffer.height:0,true);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point(sourceRect.x,sourceRect.y));
			bitmapData.copyChannel(alphaBitmapData,new flash.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new flash.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = bitmapData;
		}
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			if(!mergeAlpha) {
				if(this.__transparent && sourceBitmapData.__transparent) {
					var trpCtx = sourceBitmapData.__transparentFiller.getContext("2d");
					var trpData = trpCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
					ctx.putImageData(trpData,destPoint.x,destPoint.y);
				}
			}
			ctx.drawImage(sourceBitmapData.___textureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		} else this.__copyPixelList[this.__copyPixelList.length] = { handle : sourceBitmapData.___textureBuffer, transparentFiller : mergeAlpha?null:sourceBitmapData.__transparentFiller, sourceX : sourceRect.x, sourceY : sourceRect.y, sourceWidth : sourceRect.width, sourceHeight : sourceRect.height, destX : destPoint.x, destY : destPoint.y};
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		this.rect = this.clipRect(this.rect);
		if(this.rect == null) return;
		if(destChannel == 8 && !this.__transparent) return;
		if(sourceBitmapData.___textureBuffer == null || this.___textureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.___textureBuffer.width) sourceRect.width = sourceBitmapData.___textureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.___textureBuffer.height) sourceRect.height = sourceBitmapData.___textureBuffer.height - sourceRect.y;
		var doChannelCopy = function(imageData) {
			var srcCtx = sourceBitmapData.___textureBuffer.getContext("2d");
			var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
			var destIdx = -1;
			if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
			var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
			var setPos = function(val) {
				if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
				imageData.data[pos] = val;
				pos += 4;
			};
			var srcIdx = -1;
			if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			while(srcIdx < srcImageData.data.length) {
				setPos(srcImageData.data[srcIdx]);
				srcIdx += 4;
			}
		};
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			doChannelCopy(imageData);
			ctx.putImageData(imageData,0,0);
		} else {
			doChannelCopy(this.__imageData);
			this.__imageDataChanged = true;
		}
	}
	,compare: function(inBitmapTexture) {
		throw "bitmapData.compare is currently not supported for HTML5";
		return 0;
	}
	,colorTransform: function(rect,colorTransform) {
		if(rect == null) return;
		rect = this.clipRect(rect);
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var offsetX;
			var _g1 = 0, _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				imagedata.data[offsetX + 1] = imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				imagedata.data[offsetX + 2] = imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				imagedata.data[offsetX + 3] = imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
			ctx.putImageData(imagedata,rect.x,rect.y);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.__imageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.__imageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.__imageData.data[s + offsetX] = this.__imageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
					this.__imageData.data[s + offsetX + 1] = this.__imageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
					this.__imageData.data[s + offsetX + 2] = this.__imageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
					this.__imageData.data[s + offsetX + 3] = this.__imageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
				}
			}
			this.__imageDataChanged = true;
		}
	}
	,clone: function() {
		var bitmapData = new flash.display.BitmapData(this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0,this.__transparent);
		var rect = new flash.geom.Rectangle(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
		bitmapData.setPixels(rect,this.getPixels(rect));
		bitmapData.__lease.set(bitmapData.__leaseNum++,new Date().getTime());
		return bitmapData;
	}
	,clipRect: function(r) {
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= (this.___textureBuffer != null?this.___textureBuffer.width:0)) {
			r.width -= r.x + r.width - (this.___textureBuffer != null?this.___textureBuffer.width:0);
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) {
			r.height -= r.y + r.height - (this.___textureBuffer != null?this.___textureBuffer.height:0);
			if(r.height <= 0) return null;
		}
		return r;
	}
	,clear: function(color) {
		this.fillRect(this.rect,color);
	}
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(sourceBitmapData == this && sourceRect.x == destPoint.x && sourceRect.y == destPoint.y) filter.__applyFilter(this.___textureBuffer,sourceRect); else {
			var bitmapData = new flash.display.BitmapData(sourceRect.width | 0,sourceRect.height | 0);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point());
			filter.__applyFilter(bitmapData.___textureBuffer);
			this.copyPixels(bitmapData,bitmapData.rect,destPoint);
		}
	}
	,__class__: flash.display.BitmapData
	,__properties__: {get_height:"get_height",get_transparent:"get_transparent",get_width:"get_width"}
}
flash.display.ImageDataLease = function() {
};
$hxClasses["flash.display.ImageDataLease"] = flash.display.ImageDataLease;
flash.display.ImageDataLease.__name__ = ["flash","display","ImageDataLease"];
flash.display.ImageDataLease.prototype = {
	set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,clone: function() {
		var leaseClone = new flash.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,__class__: flash.display.ImageDataLease
}
flash.display._BitmapData = {}
flash.display._BitmapData.MinstdGenerator = function(seed) {
	if(seed == 0) this.value = 1; else this.value = seed;
};
$hxClasses["flash.display._BitmapData.MinstdGenerator"] = flash.display._BitmapData.MinstdGenerator;
flash.display._BitmapData.MinstdGenerator.__name__ = ["flash","display","_BitmapData","MinstdGenerator"];
flash.display._BitmapData.MinstdGenerator.prototype = {
	nextValue: function() {
		var lo = 16807 * (this.value & 65535);
		var hi = 16807 * (this.value >>> 16);
		lo += (hi & 32767) << 16;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		lo += hi >>> 15;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		return this.value = lo;
	}
	,__class__: flash.display._BitmapData.MinstdGenerator
}
flash.display.BitmapDataChannel = function() { }
$hxClasses["flash.display.BitmapDataChannel"] = flash.display.BitmapDataChannel;
flash.display.BitmapDataChannel.__name__ = ["flash","display","BitmapDataChannel"];
flash.display.BlendMode = $hxClasses["flash.display.BlendMode"] = { __ename__ : true, __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
flash.display.BlendMode.ADD = ["ADD",0];
flash.display.BlendMode.ADD.toString = $estr;
flash.display.BlendMode.ADD.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ALPHA = ["ALPHA",1];
flash.display.BlendMode.ALPHA.toString = $estr;
flash.display.BlendMode.ALPHA.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DARKEN = ["DARKEN",2];
flash.display.BlendMode.DARKEN.toString = $estr;
flash.display.BlendMode.DARKEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
flash.display.BlendMode.DIFFERENCE.toString = $estr;
flash.display.BlendMode.DIFFERENCE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ERASE = ["ERASE",4];
flash.display.BlendMode.ERASE.toString = $estr;
flash.display.BlendMode.ERASE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
flash.display.BlendMode.HARDLIGHT.toString = $estr;
flash.display.BlendMode.HARDLIGHT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.INVERT = ["INVERT",6];
flash.display.BlendMode.INVERT.toString = $estr;
flash.display.BlendMode.INVERT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LAYER = ["LAYER",7];
flash.display.BlendMode.LAYER.toString = $estr;
flash.display.BlendMode.LAYER.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
flash.display.BlendMode.LIGHTEN.toString = $estr;
flash.display.BlendMode.LIGHTEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
flash.display.BlendMode.MULTIPLY.toString = $estr;
flash.display.BlendMode.MULTIPLY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.NORMAL = ["NORMAL",10];
flash.display.BlendMode.NORMAL.toString = $estr;
flash.display.BlendMode.NORMAL.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.OVERLAY = ["OVERLAY",11];
flash.display.BlendMode.OVERLAY.toString = $estr;
flash.display.BlendMode.OVERLAY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SCREEN = ["SCREEN",12];
flash.display.BlendMode.SCREEN.toString = $estr;
flash.display.BlendMode.SCREEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
flash.display.BlendMode.SUBTRACT.toString = $estr;
flash.display.BlendMode.SUBTRACT.__enum__ = flash.display.BlendMode;
flash.display.CapsStyle = $hxClasses["flash.display.CapsStyle"] = { __ename__ : true, __constructs__ : ["NONE","ROUND","SQUARE"] }
flash.display.CapsStyle.NONE = ["NONE",0];
flash.display.CapsStyle.NONE.toString = $estr;
flash.display.CapsStyle.NONE.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.ROUND = ["ROUND",1];
flash.display.CapsStyle.ROUND.toString = $estr;
flash.display.CapsStyle.ROUND.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.SQUARE = ["SQUARE",2];
flash.display.CapsStyle.SQUARE.toString = $estr;
flash.display.CapsStyle.SQUARE.__enum__ = flash.display.CapsStyle;
flash.display.GradientType = $hxClasses["flash.display.GradientType"] = { __ename__ : true, __constructs__ : ["RADIAL","LINEAR"] }
flash.display.GradientType.RADIAL = ["RADIAL",0];
flash.display.GradientType.RADIAL.toString = $estr;
flash.display.GradientType.RADIAL.__enum__ = flash.display.GradientType;
flash.display.GradientType.LINEAR = ["LINEAR",1];
flash.display.GradientType.LINEAR.toString = $estr;
flash.display.GradientType.LINEAR.__enum__ = flash.display.GradientType;
flash.display.Graphics = function(inSurface) {
	flash.Lib.__bootstrap();
	if(inSurface == null) {
		this.__surface = js.Browser.document.createElement("canvas");
		this.__surface.width = 0;
		this.__surface.height = 0;
	} else this.__surface = inSurface;
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.boundsDirty = true;
	this.__clearLine();
	this.mLineJobs = [];
	this.__changed = true;
	this.nextDrawIndex = 0;
	this.__extent = new flash.geom.Rectangle();
	this.__extentWithFilters = new flash.geom.Rectangle();
	this._padding = 0.0;
	this.__clearNextCycle = true;
};
$hxClasses["flash.display.Graphics"] = flash.display.Graphics;
flash.display.Graphics.__name__ = ["flash","display","Graphics"];
flash.display.Graphics.__detectIsPointInPathMode = function() {
	var canvas = js.Browser.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return flash.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?flash.display.PointInPathMode.USER_SPACE:flash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
flash.display.Graphics.prototype = {
	__render: function(maskHandle,filters,sx,sy,clip0,clip1,clip2,clip3) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(!this.__changed) return false;
		this.closePolygon(true);
		var padding = this._padding;
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(Reflect.hasField(filter,"blurX")) padding += Math.max(Reflect.field(filter,"blurX"),Reflect.field(filter,"blurY")) * 4;
			}
		}
		this.__expandFilteredExtent(-(padding * sx) / 2,-(padding * sy) / 2);
		if(this.__clearNextCycle) {
			this.nextDrawIndex = 0;
			this.__clearCanvas();
			this.__clearNextCycle = false;
		}
		if(this.__extentWithFilters.width - this.__extentWithFilters.x > this.__surface.width || this.__extentWithFilters.height - this.__extentWithFilters.y > this.__surface.height) this.__adjustSurface(sx,sy);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(clip0 != null) {
			ctx.beginPath();
			ctx.moveTo(clip0.x * sx,clip0.y * sy);
			ctx.lineTo(clip1.x * sx,clip1.y * sy);
			ctx.lineTo(clip2.x * sx,clip2.y * sy);
			ctx.lineTo(clip3.x * sx,clip3.y * sy);
			ctx.closePath();
			ctx.clip();
		}
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(js.Boot.__instanceof(filter,flash.filters.DropShadowFilter)) filter.__applyFilter(this.__surface,null,true);
			}
		}
		var len = this.mDrawList.length;
		ctx.save();
		if(this.__extentWithFilters.x != 0 || this.__extentWithFilters.y != 0) ctx.translate(-this.__extentWithFilters.x * sx,-this.__extentWithFilters.y * sy);
		if(sx != 1 || sy != 0) ctx.scale(sx,sy);
		var doStroke = false;
		var _g = this.nextDrawIndex;
		while(_g < len) {
			var i = _g++;
			var d = this.mDrawList[len - 1 - i];
			if(d.tileJob != null) this.__drawTiles(d.tileJob.sheet,d.tileJob.drawList,d.tileJob.flags); else {
				if(d.lineJobs.length > 0) {
					var _g1 = 0, _g2 = d.lineJobs;
					while(_g1 < _g2.length) {
						var lj = _g2[_g1];
						++_g1;
						ctx.lineWidth = lj.thickness;
						switch(lj.joints) {
						case 0:
							ctx.lineJoin = "round";
							break;
						case 4096:
							ctx.lineJoin = "miter";
							break;
						case 8192:
							ctx.lineJoin = "bevel";
							break;
						}
						switch(lj.caps) {
						case 256:
							ctx.lineCap = "round";
							break;
						case 512:
							ctx.lineCap = "square";
							break;
						case 0:
							ctx.lineCap = "butt";
							break;
						}
						ctx.miterLimit = lj.miter_limit;
						if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
						ctx.beginPath();
						var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
						while(_g4 < _g3) {
							var i1 = _g4++;
							var p = d.points[i1];
							switch(p.type) {
							case 0:
								ctx.moveTo(p.x,p.y);
								break;
							case 2:
								ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
								break;
							default:
								ctx.lineTo(p.x,p.y);
							}
						}
						ctx.closePath();
						doStroke = true;
					}
				} else {
					ctx.beginPath();
					var _g1 = 0, _g2 = d.points;
					while(_g1 < _g2.length) {
						var p = _g2[_g1];
						++_g1;
						switch(p.type) {
						case 0:
							ctx.moveTo(p.x,p.y);
							break;
						case 2:
							ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
							break;
						default:
							ctx.lineTo(p.x,p.y);
						}
					}
					ctx.closePath();
				}
				var fillColour = d.fillColour;
				var fillAlpha = d.fillAlpha;
				var g = d.solidGradient;
				var bitmap = d.bitmap;
				if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else if(bitmap != null && (bitmap.flags & 16) > 0) {
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					if((bitmap.flags & 65536) == 0) {
						ctx.mozImageSmoothingEnabled = false;
						ctx.webkitImageSmoothingEnabled = false;
					}
					ctx.fillStyle = ctx.createPattern(bitmap.texture_buffer,"repeat");
				} else ctx.fillStyle = this.createCanvasColor(fillColour,Math.min(1.0,Math.max(0.0,fillAlpha)));
				ctx.fill();
				if(doStroke) ctx.stroke();
				ctx.save();
				if(bitmap != null && (bitmap.flags & 16) == 0) {
					ctx.clip();
					var img = bitmap.texture_buffer;
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					ctx.drawImage(img,0,0);
				}
				ctx.restore();
			}
		}
		ctx.restore();
		this.__changed = false;
		this.nextDrawIndex = len > 0?len - 1:0;
		this.mDrawList = [];
		return true;
	}
	,__mediaSurface: function(surface) {
		this.__surface = surface;
	}
	,__invalidate: function() {
		this.__changed = true;
		this.__clearNextCycle = true;
	}
	,__hitTest: function(inX,inY) {
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(ctx.isPointInPath(inX,inY)) return true; else if(this.mDrawList.length == 0 && this.__extent.width > 0 && this.__extent.height > 0) return true;
		return false;
	}
	,__expandStandardExtent: function(x,y,thickness) {
		if(thickness == null) thickness = 0;
		if(this._padding > 0) {
			this.__extent.width -= this._padding;
			this.__extent.height -= this._padding;
		}
		if(thickness != null && thickness > this._padding) this._padding = thickness;
		var maxX, minX, maxY, minY;
		minX = this.__extent.x;
		minY = this.__extent.y;
		maxX = this.__extent.width + minX;
		maxY = this.__extent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.__extent.x = minX;
		this.__extent.y = minY;
		this.__extent.width = maxX - minX + this._padding;
		this.__extent.height = maxY - minY + this._padding;
		this.boundsDirty = true;
	}
	,__expandFilteredExtent: function(x,y) {
		var maxX, minX, maxY, minY;
		minX = this.__extent.x;
		minY = this.__extent.y;
		maxX = this.__extent.width + minX;
		maxY = this.__extent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.__extentWithFilters.x = minX;
		this.__extentWithFilters.y = minY;
		this.__extentWithFilters.width = maxX - minX;
		this.__extentWithFilters.height = maxY - minY;
	}
	,__drawTiles: function(sheet,tileData,flags) {
		if(flags == null) flags = 0;
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		var itemCount = totalCount / numValues | 0;
		var index = 0;
		var rect = null;
		var center = null;
		var previousTileID = -1;
		var surface = sheet.__bitmap.___textureBuffer;
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) while(index < totalCount) {
			var tileID = tileData[index + 2] | 0;
			if(tileID != previousTileID) {
				rect = sheet.__tileRects[tileID];
				center = sheet.__centerPoints[tileID];
				previousTileID = tileID;
			}
			if(rect != null && center != null) {
				ctx.save();
				ctx.translate(tileData[index],tileData[index + 1]);
				if(useRotation) ctx.rotate(tileData[index + rotationIndex]);
				var scale = 1.0;
				if(useScale) scale = tileData[index + scaleIndex];
				if(useTransform) ctx.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
				if(useAlpha) ctx.globalAlpha = tileData[index + alphaIndex];
				ctx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
				ctx.restore();
			}
			index += numValues;
		}
	}
	,__drawEllipse: function(x,y,rx,ry) {
		this.moveTo(x + rx,y);
		this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
		this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
		this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
		this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
	}
	,__clearLine: function() {
		this.mCurrentLine = new flash.display.LineJob(null,-1,-1,0.0,0.0,0,1,0,256,3,3.0);
	}
	,__clearCanvas: function() {
		if(this.__surface != null) {
			var ctx = (function($this) {
				var $r;
				try {
					$r = $this.__surface.getContext("2d");
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(ctx != null) ctx.clearRect(0,0,this.__surface.width,this.__surface.height);
		}
	}
	,__adjustSurface: function(sx,sy) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(Reflect.field(this.__surface,"getContext") != null) {
			var width = Math.ceil((this.__extentWithFilters.width - this.__extentWithFilters.x) * sx);
			var height = Math.ceil((this.__extentWithFilters.height - this.__extentWithFilters.y) * sy);
			if(width <= 5000 && height <= 5000) {
				var dstCanvas = js.Browser.document.createElement("canvas");
				dstCanvas.width = width;
				dstCanvas.height = height;
				flash.Lib.__drawToSurface(this.__surface,dstCanvas);
				if(flash.Lib.__isOnStage(this.__surface)) {
					flash.Lib.__appendSurface(dstCanvas);
					flash.Lib.__copyStyle(this.__surface,dstCanvas);
					flash.Lib.__swapSurface(this.__surface,dstCanvas);
					flash.Lib.__removeSurface(this.__surface);
					if(this.__surface.id != null) flash.Lib.__setSurfaceId(dstCanvas,this.__surface.id);
				}
				this.__surface = dstCanvas;
			}
		}
	}
	,moveTo: function(inX,inY) {
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY);
		if(!this.mFilling) this.closePolygon(false); else {
			this.addLineSegment();
			this.mLastMoveID = this.mPoints.length;
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
		}
	}
	,lineTo: function(inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,1));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
		if(!this.mFilling) this.closePolygon(false);
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		this.addLineSegment();
		if(thickness == null) {
			this.__clearLine();
			return;
		} else {
			this.mCurrentLine.grad = null;
			this.mCurrentLine.thickness = thickness;
			this.mCurrentLine.colour = color == null?0:color;
			this.mCurrentLine.alpha = alpha == null?1.0:alpha;
			this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
			this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:16384;
		}
		if(caps != null) {
			switch( (caps)[1] ) {
			case 1:
				this.mCurrentLine.caps = 256;
				break;
			case 2:
				this.mCurrentLine.caps = 512;
				break;
			case 0:
				this.mCurrentLine.caps = 0;
				break;
			}
		}
		this.mCurrentLine.scale_mode = 3;
		if(scaleMode != null) {
			switch( (scaleMode)[1] ) {
			case 2:
				this.mCurrentLine.scale_mode = 3;
				break;
			case 3:
				this.mCurrentLine.scale_mode = 1;
				break;
			case 0:
				this.mCurrentLine.scale_mode = 2;
				break;
			case 1:
				this.mCurrentLine.scale_mode = 0;
				break;
			}
		}
		this.mCurrentLine.joints = 0;
		if(joints != null) {
			switch( (joints)[1] ) {
			case 1:
				this.mCurrentLine.joints = 0;
				break;
			case 0:
				this.mCurrentLine.joints = 4096;
				break;
			case 2:
				this.mCurrentLine.joints = 8192;
				break;
			}
		}
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.mCurrentLine.grad = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,getContext: function() {
		try {
			return this.__surface.getContext("2d");
		} catch( e ) {
			return null;
		}
	}
	,flush: function() {
		this.closePolygon(true);
	}
	,endFill: function() {
		this.closePolygon(true);
	}
	,drawTiles: function(sheet,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.__expandStandardExtent(flash.Lib.get_current().get_stage().get_stageWidth(),flash.Lib.get_current().get_stage().get_stageHeight());
		this.addDrawable(new flash.display.Drawable(null,null,null,null,null,null,new flash.display.TileJob(sheet,tileData,flags)));
		this.__changed = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
		if(ry == -1) ry = rx;
		rx *= 0.5;
		ry *= 0.5;
		var w = width * 0.5;
		x += w;
		if(rx > w) rx = w;
		var lw = w - rx;
		var w_ = lw + rx * Math.sin(Math.PI / 4);
		var cw_ = lw + rx * Math.tan(Math.PI / 8);
		var h = height * 0.5;
		y += h;
		if(ry > h) ry = h;
		var lh = h - ry;
		var h_ = lh + ry * Math.sin(Math.PI / 4);
		var ch_ = lh + ry * Math.tan(Math.PI / 8);
		this.closePolygon(false);
		this.moveTo(x + w,y + lh);
		this.curveTo(x + w,y + ch_,x + w_,y + h_);
		this.curveTo(x + cw_,y + h,x + lw,y + h);
		this.lineTo(x - lw,y + h);
		this.curveTo(x - cw_,y + h,x - w_,y + h_);
		this.curveTo(x - w,y + ch_,x - w,y + lh);
		this.lineTo(x - w,y - lh);
		this.curveTo(x - w,y - ch_,x - w_,y - h_);
		this.curveTo(x - cw_,y - h,x - lw,y - h);
		this.lineTo(x + lw,y - h);
		this.curveTo(x + cw_,y - h,x + w_,y - h_);
		this.curveTo(x + w,y - ch_,x + w,y - lh);
		this.lineTo(x + w,y + lh);
		this.closePolygon(false);
	}
	,drawRect: function(x,y,width,height) {
		this.closePolygon(false);
		this.moveTo(x,y);
		this.lineTo(x + width,y);
		this.lineTo(x + width,y + height);
		this.lineTo(x,y + height);
		this.lineTo(x,y);
		this.closePolygon(false);
	}
	,drawGraphicsData: function(points) {
		var $it0 = ((function(_e) {
			return function() {
				return $iterator(flash._Vector.Vector_Impl_)(_e);
			};
		})(points))();
		while( $it0.hasNext() ) {
			var data = $it0.next();
			if(data == null) this.mFilling = true; else switch(data.__graphicsDataType) {
			case flash.display.GraphicsDataType.STROKE:
				var stroke = data;
				if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.__graphicsFillType) {
				case flash.display.GraphicsFillType.SOLID_FILL:
					var fill = stroke.fill;
					this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
					break;
				case flash.display.GraphicsFillType.GRADIENT_FILL:
					var fill = stroke.fill;
					this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
					break;
				}
				break;
			case flash.display.GraphicsDataType.PATH:
				var path = data;
				var j = 0;
				var _g1 = 0, _g = flash._Vector.Vector_Impl_.get_length(path.commands);
				while(_g1 < _g) {
					var i = _g1++;
					var command = path.commands[i];
					switch(command) {
					case 1:
						this.moveTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 2:
						this.lineTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 3:
						this.curveTo(path.data[j],path.data[j + 1],path.data[j + 2],path.data[j + 3]);
						j = j + 4;
						break;
					}
				}
				break;
			case flash.display.GraphicsDataType.SOLID:
				var fill = data;
				this.beginFill(fill.color,fill.alpha);
				break;
			case flash.display.GraphicsDataType.GRADIENT:
				var fill = data;
				this.beginGradientFill(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
				break;
			}
		}
	}
	,drawEllipse: function(x,y,rx,ry) {
		this.closePolygon(false);
		rx /= 2;
		ry /= 2;
		this.__drawEllipse(x + rx,y + ry,rx,ry);
		this.closePolygon(false);
	}
	,drawCircle: function(x,y,rad) {
		this.closePolygon(false);
		this.__drawEllipse(x,y,rad,rad);
		this.closePolygon(false);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(inX,inY,inCX,inCY,2));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
	}
	,createGradient: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		var points = new Array();
		var _g1 = 0, _g = colors.length;
		while(_g1 < _g) {
			var i = _g1++;
			points.push(new flash.display.GradPoint(colors[i],alphas[i],ratios[i]));
		}
		var flags = 0;
		if(type == flash.display.GradientType.RADIAL) flags |= 1;
		if(spreadMethod == flash.display.SpreadMethod.REPEAT) flags |= 2; else if(spreadMethod == flash.display.SpreadMethod.REFLECT) flags |= 4;
		if(matrix == null) {
			matrix = new flash.geom.Matrix();
			matrix.createGradientBox(25,25);
		} else matrix = matrix.clone();
		var focal = focalPointRatio == null?0:focalPointRatio;
		return new flash.display.Grad(points,matrix,flags,focal);
	}
	,createCanvasGradient: function(ctx,g) {
		var gradient;
		var matrix = g.matrix;
		if((g.flags & 1) == 0) {
			var p1 = matrix.transformPoint(new flash.geom.Point(-819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(819.2,0));
			gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
		} else {
			var p1 = matrix.transformPoint(new flash.geom.Point(g.focal * 819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(0,819.2));
			gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
		}
		var _g = 0, _g1 = g.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			var color = this.createCanvasColor(point.col,point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos,color);
		}
		return gradient;
	}
	,createCanvasColor: function(color,alpha) {
		var r = (16711680 & color) >> 16;
		var g = (65280 & color) >> 8;
		var b = 255 & color;
		return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
	}
	,closePolygon: function(inCancelFill) {
		var l = this.mPoints.length;
		if(l > 0) {
			if(l > 1) {
				if(this.mFilling && l > 2) {
					if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
				}
				this.addLineSegment();
				var drawable = new flash.display.Drawable(this.mPoints,this.mFillColour,this.mFillAlpha,this.mSolidGradient,this.mBitmap,this.mLineJobs,null);
				this.addDrawable(drawable);
			}
			this.mLineJobs = [];
			this.mPoints = [];
		}
		if(inCancelFill) {
			this.mFillAlpha = 0;
			this.mSolidGradient = null;
			this.mBitmap = null;
			this.mFilling = false;
		}
		this.__changed = true;
	}
	,clear: function() {
		this.__clearLine();
		this.mPenX = 0.0;
		this.mPenY = 0.0;
		this.mDrawList = new Array();
		this.nextDrawIndex = 0;
		this.mPoints = [];
		this.mSolidGradient = null;
		this.mFilling = false;
		this.mFillColour = 0;
		this.mFillAlpha = 0.0;
		this.mLastMoveID = 0;
		this.__clearNextCycle = true;
		this.boundsDirty = true;
		this.__extent.x = 0.0;
		this.__extent.y = 0.0;
		this.__extent.width = 0.0;
		this.__extent.height = 0.0;
		this._padding = 0.0;
		this.mLineJobs = [];
	}
	,blit: function(inTexture) {
		this.closePolygon(true);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) ctx.drawImage(inTexture.___textureBuffer,this.mPenX,this.mPenY);
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.closePolygon(true);
		this.mFilling = true;
		this.mBitmap = null;
		this.mSolidGradient = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,beginFill: function(color,alpha) {
		this.closePolygon(true);
		this.mFillColour = color;
		this.mFillAlpha = alpha == null?1.0:alpha;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.mBitmap = null;
	}
	,beginBitmapFill: function(bitmap,matrix,in_repeat,in_smooth) {
		if(in_smooth == null) in_smooth = false;
		if(in_repeat == null) in_repeat = true;
		this.closePolygon(true);
		var repeat = in_repeat == null?true:in_repeat;
		var smooth = in_smooth == null?false:in_smooth;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.__expandStandardExtent(bitmap.___textureBuffer != null?bitmap.___textureBuffer.width:0,bitmap.___textureBuffer != null?bitmap.___textureBuffer.height:0);
		this.mBitmap = { texture_buffer : bitmap.___textureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?16:0) | (smooth?65536:0)};
	}
	,addLineSegment: function() {
		if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new flash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
		this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	}
	,addDrawable: function(inDrawable) {
		if(inDrawable == null) return;
		this.mDrawList.unshift(inDrawable);
	}
	,__class__: flash.display.Graphics
}
flash.display.Drawable = function(inPoints,inFillColour,inFillAlpha,inSolidGradient,inBitmap,inLineJobs,inTileJob) {
	this.points = inPoints;
	this.fillColour = inFillColour;
	this.fillAlpha = inFillAlpha;
	this.solidGradient = inSolidGradient;
	this.bitmap = inBitmap;
	this.lineJobs = inLineJobs;
	this.tileJob = inTileJob;
};
$hxClasses["flash.display.Drawable"] = flash.display.Drawable;
flash.display.Drawable.__name__ = ["flash","display","Drawable"];
flash.display.Drawable.prototype = {
	__class__: flash.display.Drawable
}
flash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
};
$hxClasses["flash.display.GfxPoint"] = flash.display.GfxPoint;
flash.display.GfxPoint.__name__ = ["flash","display","GfxPoint"];
flash.display.GfxPoint.prototype = {
	__class__: flash.display.GfxPoint
}
flash.display.Grad = function(inPoints,inMatrix,inFlags,inFocal) {
	this.points = inPoints;
	this.matrix = inMatrix;
	this.flags = inFlags;
	this.focal = inFocal;
};
$hxClasses["flash.display.Grad"] = flash.display.Grad;
flash.display.Grad.__name__ = ["flash","display","Grad"];
flash.display.Grad.prototype = {
	__class__: flash.display.Grad
}
flash.display.GradPoint = function(inCol,inAlpha,inRatio) {
	this.col = inCol;
	this.alpha = inAlpha;
	this.ratio = inRatio;
};
$hxClasses["flash.display.GradPoint"] = flash.display.GradPoint;
flash.display.GradPoint.__name__ = ["flash","display","GradPoint"];
flash.display.GradPoint.prototype = {
	__class__: flash.display.GradPoint
}
flash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
};
$hxClasses["flash.display.LineJob"] = flash.display.LineJob;
flash.display.LineJob.__name__ = ["flash","display","LineJob"];
flash.display.LineJob.prototype = {
	__class__: flash.display.LineJob
}
flash.display.PointInPathMode = $hxClasses["flash.display.PointInPathMode"] = { __ename__ : true, __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
flash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
flash.display.PointInPathMode.USER_SPACE.toString = $estr;
flash.display.PointInPathMode.USER_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
flash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
flash.display.PointInPathMode.DEVICE_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.TileJob = function(sheet,drawList,flags) {
	this.sheet = sheet;
	this.drawList = drawList;
	this.flags = flags;
};
$hxClasses["flash.display.TileJob"] = flash.display.TileJob;
flash.display.TileJob.__name__ = ["flash","display","TileJob"];
flash.display.TileJob.prototype = {
	__class__: flash.display.TileJob
}
flash.display.IGraphicsFill = function() { }
$hxClasses["flash.display.IGraphicsFill"] = flash.display.IGraphicsFill;
flash.display.IGraphicsFill.__name__ = ["flash","display","IGraphicsFill"];
flash.display.IGraphicsFill.prototype = {
	__class__: flash.display.IGraphicsFill
}
flash.display.IGraphicsData = function() { }
$hxClasses["flash.display.IGraphicsData"] = flash.display.IGraphicsData;
flash.display.IGraphicsData.__name__ = ["flash","display","IGraphicsData"];
flash.display.IGraphicsData.prototype = {
	__class__: flash.display.IGraphicsData
}
flash.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.__graphicsDataType = flash.display.GraphicsDataType.GRADIENT;
	this.__graphicsFillType = flash.display.GraphicsFillType.GRADIENT_FILL;
};
$hxClasses["flash.display.GraphicsGradientFill"] = flash.display.GraphicsGradientFill;
flash.display.GraphicsGradientFill.__name__ = ["flash","display","GraphicsGradientFill"];
flash.display.GraphicsGradientFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsGradientFill.prototype = {
	__class__: flash.display.GraphicsGradientFill
}
flash.display.IGraphicsPath = function() { }
$hxClasses["flash.display.IGraphicsPath"] = flash.display.IGraphicsPath;
flash.display.IGraphicsPath.__name__ = ["flash","display","IGraphicsPath"];
flash.display.GraphicsPath = function(commands,data,winding) {
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.__graphicsDataType = flash.display.GraphicsDataType.PATH;
};
$hxClasses["flash.display.GraphicsPath"] = flash.display.GraphicsPath;
flash.display.GraphicsPath.__name__ = ["flash","display","GraphicsPath"];
flash.display.GraphicsPath.__interfaces__ = [flash.display.IGraphicsPath,flash.display.IGraphicsData];
flash.display.GraphicsPath.prototype = {
	moveTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,1);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,lineTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,2);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,3);
			flash._Vector.Vector_Impl_.push(this.data,anchorX);
			flash._Vector.Vector_Impl_.push(this.data,anchorY);
			flash._Vector.Vector_Impl_.push(this.data,controlX);
			flash._Vector.Vector_Impl_.push(this.data,controlY);
		}
	}
	,__class__: flash.display.GraphicsPath
}
flash.display.GraphicsPathCommand = function() { }
$hxClasses["flash.display.GraphicsPathCommand"] = flash.display.GraphicsPathCommand;
flash.display.GraphicsPathCommand.__name__ = ["flash","display","GraphicsPathCommand"];
flash.display.GraphicsPathWinding = $hxClasses["flash.display.GraphicsPathWinding"] = { __ename__ : true, __constructs__ : ["EVEN_ODD","NON_ZERO"] }
flash.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
flash.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
flash.display.GraphicsPathWinding.EVEN_ODD.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
flash.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
flash.display.GraphicsPathWinding.NON_ZERO.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsSolidFill = function(color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.__graphicsDataType = flash.display.GraphicsDataType.SOLID;
	this.__graphicsFillType = flash.display.GraphicsFillType.SOLID_FILL;
};
$hxClasses["flash.display.GraphicsSolidFill"] = flash.display.GraphicsSolidFill;
flash.display.GraphicsSolidFill.__name__ = ["flash","display","GraphicsSolidFill"];
flash.display.GraphicsSolidFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsSolidFill.prototype = {
	__class__: flash.display.GraphicsSolidFill
}
flash.display.IGraphicsStroke = function() { }
$hxClasses["flash.display.IGraphicsStroke"] = flash.display.IGraphicsStroke;
flash.display.IGraphicsStroke.__name__ = ["flash","display","IGraphicsStroke"];
flash.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.0;
	this.caps = caps != null?caps:null;
	this.fill = fill;
	this.joints = joints != null?joints:null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode != null?scaleMode:null;
	this.thickness = thickness;
	this.__graphicsDataType = flash.display.GraphicsDataType.STROKE;
};
$hxClasses["flash.display.GraphicsStroke"] = flash.display.GraphicsStroke;
flash.display.GraphicsStroke.__name__ = ["flash","display","GraphicsStroke"];
flash.display.GraphicsStroke.__interfaces__ = [flash.display.IGraphicsStroke,flash.display.IGraphicsData];
flash.display.GraphicsStroke.prototype = {
	__class__: flash.display.GraphicsStroke
}
flash.display.GraphicsDataType = $hxClasses["flash.display.GraphicsDataType"] = { __ename__ : true, __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
flash.display.GraphicsDataType.STROKE = ["STROKE",0];
flash.display.GraphicsDataType.STROKE.toString = $estr;
flash.display.GraphicsDataType.STROKE.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.SOLID = ["SOLID",1];
flash.display.GraphicsDataType.SOLID.toString = $estr;
flash.display.GraphicsDataType.SOLID.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
flash.display.GraphicsDataType.GRADIENT.toString = $estr;
flash.display.GraphicsDataType.GRADIENT.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.PATH = ["PATH",3];
flash.display.GraphicsDataType.PATH.toString = $estr;
flash.display.GraphicsDataType.PATH.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsFillType = $hxClasses["flash.display.GraphicsFillType"] = { __ename__ : true, __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
flash.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
flash.display.GraphicsFillType.SOLID_FILL.toString = $estr;
flash.display.GraphicsFillType.SOLID_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
flash.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
flash.display.GraphicsFillType.GRADIENT_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.InterpolationMethod = $hxClasses["flash.display.InterpolationMethod"] = { __ename__ : true, __constructs__ : ["RGB","LINEAR_RGB"] }
flash.display.InterpolationMethod.RGB = ["RGB",0];
flash.display.InterpolationMethod.RGB.toString = $estr;
flash.display.InterpolationMethod.RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
flash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
flash.display.InterpolationMethod.LINEAR_RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.JointStyle = $hxClasses["flash.display.JointStyle"] = { __ename__ : true, __constructs__ : ["MITER","ROUND","BEVEL"] }
flash.display.JointStyle.MITER = ["MITER",0];
flash.display.JointStyle.MITER.toString = $estr;
flash.display.JointStyle.MITER.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.ROUND = ["ROUND",1];
flash.display.JointStyle.ROUND.toString = $estr;
flash.display.JointStyle.ROUND.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.BEVEL = ["BEVEL",2];
flash.display.JointStyle.BEVEL.toString = $estr;
flash.display.JointStyle.BEVEL.__enum__ = flash.display.JointStyle;
flash.display.LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : true, __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
flash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
flash.display.LineScaleMode.HORIZONTAL.toString = $estr;
flash.display.LineScaleMode.HORIZONTAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NONE = ["NONE",1];
flash.display.LineScaleMode.NONE.toString = $estr;
flash.display.LineScaleMode.NONE.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NORMAL = ["NORMAL",2];
flash.display.LineScaleMode.NORMAL.toString = $estr;
flash.display.LineScaleMode.NORMAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
flash.display.LineScaleMode.VERTICAL.toString = $estr;
flash.display.LineScaleMode.VERTICAL.__enum__ = flash.display.LineScaleMode;
flash.display.Loader = function() {
	flash.display.Sprite.call(this);
	this.contentLoaderInfo = flash.display.LoaderInfo.create(this);
};
$hxClasses["flash.display.Loader"] = flash.display.Loader;
flash.display.Loader.__name__ = ["flash","display","Loader"];
flash.display.Loader.__super__ = flash.display.Sprite;
flash.display.Loader.prototype = $extend(flash.display.Sprite.prototype,{
	handleLoad: function(e) {
		e.currentTarget = this;
		this.content.__invalidateBounds();
		this.content.__render(null,null);
		this.contentLoaderInfo.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad));
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.Sprite.prototype.validateBounds.call(this);
			if(this.mImage != null) {
				var r = new flash.geom.Rectangle(0,0,this.mImage.get_width(),this.mImage.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[Loader name=" + this.name + " id=" + this.___id + "]";
	}
	,loadBytes: function(buffer) {
		var _g = this;
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			flash.display.BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new flash.display.Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				var evt = new flash.events.Event(flash.events.Event.COMPLETE);
				evt.currentTarget = _g;
				_g.contentLoaderInfo.dispatchEvent(evt);
			});
		} catch( e ) {
			console.log("Error " + Std.string(e));
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
		}
	}
	,load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		if(request.contentType == null && request.contentType != "") this.contentLoaderInfo.contentType = (function($this) {
			var $r;
			switch(extension) {
			case "swf":
				$r = "application/x-shockwave-flash";
				break;
			case "jpg":case "jpeg":
				$r = (function($this) {
					var $r;
					transparent = false;
					$r = "image/jpeg";
					return $r;
				}($this));
				break;
			case "png":
				$r = "image/png";
				break;
			case "gif":
				$r = "image/gif";
				break;
			default:
				$r = "application/x-www-form-urlencoded";
			}
			return $r;
		}(this)); else this.contentLoaderInfo.contentType = request.contentType;
		this.mImage = new flash.display.BitmapData(0,0,transparent);
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			this.mImage.__loadFromFile(request.url,this.contentLoaderInfo);
			this.content = new flash.display.Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			console.log("Error " + Std.string(e));
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new flash.display.Shape();
			this.addChild(this.mShape);
		}
	}
	,__class__: flash.display.Loader
});
flash.display.LoaderInfo = function() {
	flash.events.EventDispatcher.call(this);
	this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash.display.LoaderInfo;
flash.display.LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
flash.display.LoaderInfo.create = function(ldr) {
	var li = new flash.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
}
flash.display.LoaderInfo.__super__ = flash.events.EventDispatcher;
flash.display.LoaderInfo.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__class__: flash.display.LoaderInfo
});
flash.display.MovieClip = function() {
	flash.display.Sprite.call(this);
	this.enabled = true;
	this.__currentFrame = 0;
	this.__totalFrames = 0;
	this.loaderInfo = flash.display.LoaderInfo.create(null);
};
$hxClasses["flash.display.MovieClip"] = flash.display.MovieClip;
flash.display.MovieClip.__name__ = ["flash","display","MovieClip"];
flash.display.MovieClip.__super__ = flash.display.Sprite;
flash.display.MovieClip.prototype = $extend(flash.display.Sprite.prototype,{
	get_totalFrames: function() {
		return this.__totalFrames;
	}
	,get_framesLoaded: function() {
		return this.__totalFrames;
	}
	,get_currentFrame: function() {
		return this.__currentFrame;
	}
	,toString: function() {
		return "[MovieClip name=" + this.name + " id=" + this.___id + "]";
	}
	,stop: function() {
	}
	,prevFrame: function() {
	}
	,play: function() {
	}
	,nextFrame: function() {
	}
	,gotoAndStop: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,gotoAndPlay: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,__class__: flash.display.MovieClip
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_currentFrame:"get_currentFrame",get_framesLoaded:"get_framesLoaded",get_totalFrames:"get_totalFrames"})
});
flash.display.PixelSnapping = $hxClasses["flash.display.PixelSnapping"] = { __ename__ : true, __constructs__ : ["NEVER","AUTO","ALWAYS"] }
flash.display.PixelSnapping.NEVER = ["NEVER",0];
flash.display.PixelSnapping.NEVER.toString = $estr;
flash.display.PixelSnapping.NEVER.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.AUTO = ["AUTO",1];
flash.display.PixelSnapping.AUTO.toString = $estr;
flash.display.PixelSnapping.AUTO.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
flash.display.PixelSnapping.ALWAYS.toString = $estr;
flash.display.PixelSnapping.ALWAYS.__enum__ = flash.display.PixelSnapping;
flash.display.Shape = function() {
	flash.display.DisplayObject.call(this);
	this.__graphics = new flash.display.Graphics();
};
$hxClasses["flash.display.Shape"] = flash.display.Shape;
flash.display.Shape.__name__ = ["flash","display","Shape"];
flash.display.Shape.__super__ = flash.display.DisplayObject;
flash.display.Shape.prototype = $extend(flash.display.DisplayObject.prototype,{
	get_graphics: function() {
		return this.__graphics;
	}
	,__getObjectUnderPoint: function(point) {
		if(this.parent == null) return null;
		if(this.parent.mouseEnabled && flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point) == this) return this.parent; else return null;
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[Shape name=" + this.name + " id=" + this.___id + "]";
	}
	,__class__: flash.display.Shape
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
flash.display.SpreadMethod = $hxClasses["flash.display.SpreadMethod"] = { __ename__ : true, __constructs__ : ["REPEAT","REFLECT","PAD"] }
flash.display.SpreadMethod.REPEAT = ["REPEAT",0];
flash.display.SpreadMethod.REPEAT.toString = $estr;
flash.display.SpreadMethod.REPEAT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.REFLECT = ["REFLECT",1];
flash.display.SpreadMethod.REFLECT.toString = $estr;
flash.display.SpreadMethod.REFLECT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.PAD = ["PAD",2];
flash.display.SpreadMethod.PAD.toString = $estr;
flash.display.SpreadMethod.PAD.__enum__ = flash.display.SpreadMethod;
flash.events.Event = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.__isCancelled = false;
	this.__isCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = flash.events.EventPhase.AT_TARGET;
};
$hxClasses["flash.events.Event"] = flash.events.Event;
flash.events.Event.__name__ = ["flash","events","Event"];
flash.events.Event.prototype = {
	__setPhase: function(phase) {
		this.eventPhase = phase;
	}
	,__getIsCancelledNow: function() {
		return this.__isCancelledNow;
	}
	,__getIsCancelled: function() {
		return this.__isCancelled;
	}
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.Event(type,this.bubbles,this.cancelable);
		if(targ != null) result.target = targ;
		return result;
	}
	,toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,stopPropagation: function() {
		this.__isCancelled = true;
	}
	,stopImmediatePropagation: function() {
		this.__isCancelled = true;
		this.__isCancelledNow = true;
	}
	,clone: function() {
		return new flash.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,__class__: flash.events.Event
}
flash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["flash.events.MouseEvent"] = flash.events.MouseEvent;
flash.events.MouseEvent.__name__ = ["flash","events","MouseEvent"];
flash.events.MouseEvent.__create = function(type,event,local,target) {
	var __mouseDown = false;
	var delta = 2;
	if(type == flash.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == flash.events.MouseEvent.MOUSE_DOWN) __mouseDown = event.which != null?event.which == 1:event.button != null?event.button == 0:false; else if(type == flash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) __mouseDown = false; else if(event.button != null) {
				if(event.button == 0) __mouseDown = false; else __mouseDown = false;
			}
		}
	}
	var pseudoEvent = new flash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,__mouseDown,delta);
	pseudoEvent.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	pseudoEvent.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
flash.events.MouseEvent.__super__ = flash.events.Event;
flash.events.MouseEvent.prototype = $extend(flash.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: flash.events.MouseEvent
});
flash.display.Stage = function(width,height) {
	flash.display.DisplayObjectContainer.call(this);
	this.__focusObject = null;
	this.__focusObjectActivated = false;
	this.__windowWidth = width;
	this.__windowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = flash.display.StageScaleMode.SHOW_ALL;
	this.__stageMatrix = new flash.geom.Matrix();
	this.tabEnabled = true;
	this.set_frameRate(0.0);
	this.set_backgroundColor(16777215);
	this.name = "Stage";
	this.loaderInfo = flash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.__windowWidth);
	this.loaderInfo.parameters.height = Std.string(this.__windowHeight);
	this.__pointInPathMode = flash.display.Graphics.__detectIsPointInPathMode();
	this.__mouseOverObjects = [];
	this.set_showDefaultContextMenu(true);
	this.__touchInfo = [];
	this.__uIEventsQueue = new Array(1000);
	this.__uIEventsQueueIndex = 0;
};
$hxClasses["flash.display.Stage"] = flash.display.Stage;
flash.display.Stage.__name__ = ["flash","display","Stage"];
flash.display.Stage.getOrientation = function() {
	var rotation = window.orientation;
	var orientation = flash.display.Stage.OrientationPortrait;
	switch(rotation) {
	case -90:
		orientation = flash.display.Stage.OrientationLandscapeLeft;
		break;
	case 180:
		orientation = flash.display.Stage.OrientationPortraitUpsideDown;
		break;
	case 90:
		orientation = flash.display.Stage.OrientationLandscapeRight;
		break;
	default:
		orientation = flash.display.Stage.OrientationPortrait;
	}
	return orientation;
}
flash.display.Stage.__super__ = flash.display.DisplayObjectContainer;
flash.display.Stage.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	get_stageWidth: function() {
		return this.__windowWidth;
	}
	,get_stageHeight: function() {
		return this.__windowHeight;
	}
	,get_stage: function() {
		return flash.Lib.__getStage();
	}
	,set_showDefaultContextMenu: function(showDefaultContextMenu) {
		if(showDefaultContextMenu != this.__showDefaultContextMenu && this.__showDefaultContextMenu != null) {
			if(!showDefaultContextMenu) flash.Lib.__disableRightClick(); else flash.Lib.__enableRightClick();
		}
		this.__showDefaultContextMenu = showDefaultContextMenu;
		return showDefaultContextMenu;
	}
	,get_showDefaultContextMenu: function() {
		return this.__showDefaultContextMenu;
	}
	,set_quality: function(inQuality) {
		return this.quality = inQuality;
	}
	,get_quality: function() {
		return this.quality != null?this.quality:flash.display.StageQuality.BEST;
	}
	,get_mouseY: function() {
		return this._mouseY;
	}
	,get_mouseX: function() {
		return this._mouseX;
	}
	,get_fullScreenHeight: function() {
		return js.Browser.window.innerHeight;
	}
	,get_fullScreenWidth: function() {
		return js.Browser.window.innerWidth;
	}
	,set_frameRate: function(speed) {
		if(speed == 0) {
			var window = js.Browser.window;
			var __requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if(__requestAnimationFrame == null) speed = 60;
		}
		if(speed != 0) this.__interval = 1000.0 / speed | 0;
		this.__frameRate = speed;
		this.__updateNextWake();
		return speed;
	}
	,get_frameRate: function() {
		return this.__frameRate;
	}
	,set_focus: function(inObj) {
		this.__onFocus(inObj);
		return this.__focusObject;
	}
	,get_focus: function() {
		return this.__focusObject;
	}
	,set_displayState: function(displayState) {
		if(displayState != this.displayState && this.displayState != null) {
			switch( (displayState)[1] ) {
			case 0:
				flash.Lib.__disableFullScreen();
				break;
			case 1:
			case 2:
				flash.Lib.__enableFullScreen();
				break;
			}
		}
		this.displayState = displayState;
		return displayState;
	}
	,get_displayState: function() {
		return this.displayState;
	}
	,set_color: function(col) {
		return this.__backgroundColour = col;
	}
	,get_color: function() {
		return this.__backgroundColour;
	}
	,set_backgroundColor: function(col) {
		return this.__backgroundColour = col;
	}
	,get_backgroundColor: function() {
		return this.__backgroundColour;
	}
	,__onTouch: function(event,touch,type,touchInfo,isPrimaryTouchPoint) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(touch.pageX - rect.left,touch.pageY - rect.top);
		var obj = this.__getObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.TouchEvent.__create(type,event,touch,local,obj);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.__checkInOuts(evt,stack,touchInfo);
			obj.__fireEvent(evt);
			var mouseType = (function($this) {
				var $r;
				switch(type) {
				case "touchBegin":
					$r = flash.events.MouseEvent.MOUSE_DOWN;
					break;
				case "touchEnd":
					$r = flash.events.MouseEvent.MOUSE_UP;
					break;
				default:
					$r = (function($this) {
						var $r;
						if($this.__dragObject != null) $this.__drag(point);
						$r = flash.events.MouseEvent.MOUSE_MOVE;
						return $r;
					}($this));
				}
				return $r;
			}(this));
			obj.__fireEvent(flash.events.MouseEvent.__create(mouseType,evt,local,obj));
		} else {
			var evt = flash.events.TouchEvent.__create(type,event,touch,point,null);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.__checkInOuts(evt,stack,touchInfo);
		}
	}
	,__onResize: function(inW,inH) {
		this.__windowWidth = inW;
		this.__windowHeight = inH;
		var event = new flash.events.Event(flash.events.Event.RESIZE);
		event.target = this;
		this.__broadcast(event);
	}
	,__onMouse: function(event,type) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(event.clientX - rect.left,event.clientY - rect.top);
		if(this.__dragObject != null) this.__drag(point);
		var obj = this.__getObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.MouseEvent.__create(type,event,local,obj);
			this.__checkInOuts(evt,stack);
			if(type == flash.events.MouseEvent.MOUSE_DOWN) this.__onFocus(stack[stack.length - 1]);
			obj.__fireEvent(evt);
		} else {
			var evt = flash.events.MouseEvent.__create(type,event,point,null);
			this.__checkInOuts(evt,stack);
		}
	}
	,__onFocus: function(target) {
		if(target != this.__focusObject) {
			if(this.__focusObject != null) this.__focusObject.__fireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_OUT,true,false,this.__focusObject,false,0));
			target.__fireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_IN,true,false,target,false,0));
			this.__focusObject = target;
		}
	}
	,__onKey: function(code,pressed,inChar,ctrl,alt,shift,keyLocation) {
		var stack = new Array();
		if(this.__focusObject == null) this.__getInteractiveObjectStack(stack); else this.__focusObject.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			var obj = stack[0];
			var evt = new flash.events.KeyboardEvent(pressed?flash.events.KeyboardEvent.KEY_DOWN:flash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,keyLocation,ctrl,alt,shift);
			obj.__fireEvent(evt);
		}
	}
	,__handleOrientationChange: function() {
	}
	,__handleAccelerometer: function(evt) {
		flash.display.Stage.__acceleration.x = evt.accelerationIncludingGravity.x;
		flash.display.Stage.__acceleration.y = evt.accelerationIncludingGravity.y;
		flash.display.Stage.__acceleration.z = evt.accelerationIncludingGravity.z;
	}
	,__updateNextWake: function() {
		if(this.__frameRate == 0) {
			var __requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			__requestAnimationFrame($bind(this,this.__updateNextWake));
			this.__stageRender();
		} else {
			js.Browser.window.clearInterval(this.__timer);
			this.__timer = js.Browser.window.setInterval($bind(this,this.__stageRender),this.__interval);
		}
	}
	,__stopDrag: function(sprite) {
		this.__dragBounds = null;
		this.__dragObject = null;
	}
	,__startDrag: function(sprite,lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		this.__dragBounds = bounds == null?null:bounds.clone();
		this.__dragObject = sprite;
		if(this.__dragObject != null) {
			var mouse = new flash.geom.Point(this._mouseX,this._mouseY);
			var p = this.__dragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			if(lockCenter) {
				var bounds1 = sprite.getBounds(this);
				this.__dragOffsetX = this.__dragObject.get_x() - (bounds1.width / 2 + bounds1.x);
				this.__dragOffsetY = this.__dragObject.get_y() - (bounds1.height / 2 + bounds1.y);
			} else {
				this.__dragOffsetX = this.__dragObject.get_x() - mouse.x;
				this.__dragOffsetY = this.__dragObject.get_y() - mouse.y;
			}
		}
	}
	,__stageRender: function(_) {
		if(!this.__stageActive) {
			this.__onResize(this.__windowWidth,this.__windowHeight);
			var event = new flash.events.Event(flash.events.Event.ACTIVATE);
			event.target = this;
			this.__broadcast(event);
			this.__stageActive = true;
		}
		var _g1 = 0, _g = this.__uIEventsQueueIndex;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__uIEventsQueue[i] != null) this.__processStageEvent(this.__uIEventsQueue[i]);
		}
		this.__uIEventsQueueIndex = 0;
		var event = new flash.events.Event(flash.events.Event.ENTER_FRAME);
		this.__broadcast(event);
		if(this.__invalid) {
			var event1 = new flash.events.Event(flash.events.Event.RENDER);
			this.__broadcast(event1);
		}
		this.__renderAll();
	}
	,__renderToCanvas: function(canvas) {
		canvas.width = canvas.width;
		this.__render(canvas);
	}
	,__renderAll: function() {
		this.__render(null,null);
	}
	,__queueStageEvent: function(evt) {
		this.__uIEventsQueue[this.__uIEventsQueueIndex++] = evt;
	}
	,__processStageEvent: function(evt) {
		evt.stopPropagation();
		switch(evt.type) {
		case "resize":
			this.__onResize(flash.Lib.__getWidth(),flash.Lib.__getHeight());
			break;
		case "focus":
			this.__onFocus(this);
			if(!this.__focusObjectActivated) {
				this.__focusObjectActivated = true;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.ACTIVATE));
			}
			break;
		case "blur":
			if(this.__focusObjectActivated) {
				this.__focusObjectActivated = false;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.DEACTIVATE));
			}
			break;
		case "mousemove":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_MOVE);
			break;
		case "mousedown":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_DOWN);
			break;
		case "mouseup":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_UP);
			break;
		case "click":
			this.__onMouse(evt,flash.events.MouseEvent.CLICK);
			break;
		case "mousewheel":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_WHEEL);
			break;
		case "dblclick":
			this.__onMouse(evt,flash.events.MouseEvent.DOUBLE_CLICK);
			break;
		case "keydown":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
			this.__onKey(keyCode,true,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "keyup":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
			this.__onKey(keyCode,false,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "touchstart":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = new flash.display._Stage.TouchInfo();
			this.__touchInfo[evt1.changedTouches[0].identifier] = touchInfo;
			this.__onTouch(evt1,evt1.changedTouches[0],"touchBegin",touchInfo,false);
			break;
		case "touchmove":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.__touchInfo[evt1.changedTouches[0].identifier];
			this.__onTouch(evt1,evt1.changedTouches[0],"touchMove",touchInfo,true);
			break;
		case "touchend":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.__touchInfo[evt1.changedTouches[0].identifier];
			this.__onTouch(evt1,evt1.changedTouches[0],"touchEnd",touchInfo,true);
			this.__touchInfo[evt1.changedTouches[0].identifier] = null;
			break;
		case "devicemotion":
			var evt1 = evt;
			this.__handleAccelerometer(evt1);
			break;
		case "orientationchange":
			this.__handleOrientationChange();
			break;
		default:
		}
	}
	,__isOnStage: function() {
		return true;
	}
	,__drag: function(point) {
		var p = this.__dragObject.parent;
		if(p != null) point = p.globalToLocal(point);
		var x = point.x + this.__dragOffsetX;
		var y = point.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) x = this.__dragBounds.x; else if(x > this.__dragBounds.get_right()) x = this.__dragBounds.get_right();
			if(y < this.__dragBounds.y) y = this.__dragBounds.y; else if(y > this.__dragBounds.get_bottom()) y = this.__dragBounds.get_bottom();
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__checkInOuts: function(event,stack,touchInfo) {
		var prev = touchInfo == null?this.__mouseOverObjects:touchInfo.touchOverObjects;
		var changeEvents = touchInfo == null?flash.display.Stage.__mouseChanges:flash.display.Stage.__touchChanges;
		var new_n = stack.length;
		var new_obj = new_n > 0?stack[new_n - 1]:null;
		var old_n = prev.length;
		var old_obj = old_n > 0?prev[old_n - 1]:null;
		if(new_obj != old_obj) {
			if(old_obj != null) old_obj.__fireEvent(event.__createSimilar(changeEvents[0],new_obj,old_obj));
			if(new_obj != null) new_obj.__fireEvent(event.__createSimilar(changeEvents[1],old_obj,new_obj));
			var common = 0;
			while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
			var rollOut = event.__createSimilar(changeEvents[2],new_obj,old_obj);
			var i = old_n - 1;
			while(i >= common) {
				prev[i].dispatchEvent(rollOut);
				i--;
			}
			var rollOver = event.__createSimilar(changeEvents[3],old_obj);
			var i1 = new_n - 1;
			while(i1 >= common) {
				stack[i1].dispatchEvent(rollOver);
				i1--;
			}
			if(touchInfo == null) this.__mouseOverObjects = stack; else touchInfo.touchOverObjects = stack;
		}
	}
	,toString: function() {
		return "[Stage id=" + this.___id + "]";
	}
	,invalidate: function() {
		this.__invalid = true;
	}
	,__class__: flash.display.Stage
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{set_backgroundColor:"set_backgroundColor",get_backgroundColor:"get_backgroundColor",set_color:"set_color",get_color:"get_color",set_displayState:"set_displayState",get_displayState:"get_displayState",set_focus:"set_focus",get_focus:"get_focus",set_frameRate:"set_frameRate",get_frameRate:"get_frameRate",get_fullScreenHeight:"get_fullScreenHeight",get_fullScreenWidth:"get_fullScreenWidth",set_quality:"set_quality",get_quality:"get_quality",set_showDefaultContextMenu:"set_showDefaultContextMenu",get_showDefaultContextMenu:"get_showDefaultContextMenu",get_stageHeight:"get_stageHeight",get_stageWidth:"get_stageWidth"})
});
flash.display._Stage = {}
flash.display._Stage.TouchInfo = function() {
	this.touchOverObjects = [];
};
$hxClasses["flash.display._Stage.TouchInfo"] = flash.display._Stage.TouchInfo;
flash.display._Stage.TouchInfo.__name__ = ["flash","display","_Stage","TouchInfo"];
flash.display._Stage.TouchInfo.prototype = {
	__class__: flash.display._Stage.TouchInfo
}
flash.display.StageAlign = $hxClasses["flash.display.StageAlign"] = { __ename__ : true, __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
flash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
flash.display.StageAlign.TOP_RIGHT.toString = $estr;
flash.display.StageAlign.TOP_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
flash.display.StageAlign.TOP_LEFT.toString = $estr;
flash.display.StageAlign.TOP_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP = ["TOP",2];
flash.display.StageAlign.TOP.toString = $estr;
flash.display.StageAlign.TOP.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.RIGHT = ["RIGHT",3];
flash.display.StageAlign.RIGHT.toString = $estr;
flash.display.StageAlign.RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.LEFT = ["LEFT",4];
flash.display.StageAlign.LEFT.toString = $estr;
flash.display.StageAlign.LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
flash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
flash.display.StageAlign.BOTTOM_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
flash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
flash.display.StageAlign.BOTTOM_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM = ["BOTTOM",7];
flash.display.StageAlign.BOTTOM.toString = $estr;
flash.display.StageAlign.BOTTOM.__enum__ = flash.display.StageAlign;
flash.display.StageDisplayState = $hxClasses["flash.display.StageDisplayState"] = { __ename__ : true, __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] }
flash.display.StageDisplayState.NORMAL = ["NORMAL",0];
flash.display.StageDisplayState.NORMAL.toString = $estr;
flash.display.StageDisplayState.NORMAL.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
flash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = flash.display.StageDisplayState;
flash.display.StageQuality = function() { }
$hxClasses["flash.display.StageQuality"] = flash.display.StageQuality;
flash.display.StageQuality.__name__ = ["flash","display","StageQuality"];
flash.display.StageScaleMode = $hxClasses["flash.display.StageScaleMode"] = { __ename__ : true, __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
flash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
flash.display.StageScaleMode.SHOW_ALL.toString = $estr;
flash.display.StageScaleMode.SHOW_ALL.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
flash.display.StageScaleMode.NO_SCALE.toString = $estr;
flash.display.StageScaleMode.NO_SCALE.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
flash.display.StageScaleMode.NO_BORDER.toString = $estr;
flash.display.StageScaleMode.NO_BORDER.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
flash.display.StageScaleMode.EXACT_FIT.toString = $estr;
flash.display.StageScaleMode.EXACT_FIT.__enum__ = flash.display.StageScaleMode;
flash.errors = {}
flash.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash.errors.Error;
flash.errors.Error.__name__ = ["flash","errors","Error"];
flash.errors.Error.prototype = {
	toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,__class__: flash.errors.Error
}
flash.errors.IOError = function(message) {
	if(message == null) message = "";
	flash.errors.Error.call(this,message);
};
$hxClasses["flash.errors.IOError"] = flash.errors.IOError;
flash.errors.IOError.__name__ = ["flash","errors","IOError"];
flash.errors.IOError.__super__ = flash.errors.Error;
flash.errors.IOError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.IOError
});
flash.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash.events.TextEvent;
flash.events.TextEvent.__name__ = ["flash","events","TextEvent"];
flash.events.TextEvent.__super__ = flash.events.Event;
flash.events.TextEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.TextEvent
});
flash.events.ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	flash.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
	this.errorID = id;
};
$hxClasses["flash.events.ErrorEvent"] = flash.events.ErrorEvent;
flash.events.ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
flash.events.ErrorEvent.__super__ = flash.events.TextEvent;
flash.events.ErrorEvent.prototype = $extend(flash.events.TextEvent.prototype,{
	__class__: flash.events.ErrorEvent
});
flash.events.Listener = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = flash.events.Listener.sIDs++;
};
$hxClasses["flash.events.Listener"] = flash.events.Listener;
flash.events.Listener.__name__ = ["flash","events","Listener"];
flash.events.Listener.prototype = {
	Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,dispatchEvent: function(event) {
		this.mListner(event);
	}
	,__class__: flash.events.Listener
}
flash.events.EventPhase = function() { }
$hxClasses["flash.events.EventPhase"] = flash.events.EventPhase;
flash.events.EventPhase.__name__ = ["flash","events","EventPhase"];
flash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if(inKeyCode == null) inKeyCode = 0;
	if(inShiftKey == null) inShiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
};
$hxClasses["flash.events.FocusEvent"] = flash.events.FocusEvent;
flash.events.FocusEvent.__name__ = ["flash","events","FocusEvent"];
flash.events.FocusEvent.__super__ = flash.events.Event;
flash.events.FocusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.FocusEvent
});
flash.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash.events.HTTPStatusEvent;
flash.events.HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
flash.events.HTTPStatusEvent.__super__ = flash.events.Event;
flash.events.HTTPStatusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.HTTPStatusEvent
});
flash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["flash.events.IOErrorEvent"] = flash.events.IOErrorEvent;
flash.events.IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
flash.events.IOErrorEvent.__super__ = flash.events.Event;
flash.events.IOErrorEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.IOErrorEvent
});
flash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(inShiftKey == null) inShiftKey = false;
	if(inAltKey == null) inAltKey = false;
	if(inCtrlKey == null) inCtrlKey = false;
	if(inKeyLocation == null) inKeyLocation = 0;
	if(inKeyCode == null) inKeyCode = 0;
	if(inCharCode == null) inCharCode = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.altKey = inAltKey == null?false:inAltKey;
	this.charCode = inCharCode == null?0:inCharCode;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
	this.commandKey = commandKeyValue;
	this.controlKey = controlKeyValue;
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
};
$hxClasses["flash.events.KeyboardEvent"] = flash.events.KeyboardEvent;
flash.events.KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
flash.events.KeyboardEvent.__super__ = flash.events.Event;
flash.events.KeyboardEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.KeyboardEvent
});
flash.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash.events.ProgressEvent;
flash.events.ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
flash.events.ProgressEvent.__super__ = flash.events.Event;
flash.events.ProgressEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.ProgressEvent
});
flash.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash.events.SecurityErrorEvent;
flash.events.SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
flash.events.SecurityErrorEvent.__super__ = flash.events.ErrorEvent;
flash.events.SecurityErrorEvent.prototype = $extend(flash.events.ErrorEvent.prototype,{
	__class__: flash.events.SecurityErrorEvent
});
flash.events.TimerEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.TimerEvent"] = flash.events.TimerEvent;
flash.events.TimerEvent.__name__ = ["flash","events","TimerEvent"];
flash.events.TimerEvent.__super__ = flash.events.Event;
flash.events.TimerEvent.prototype = $extend(flash.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__class__: flash.events.TimerEvent
});
flash.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["flash.events.TouchEvent"] = flash.events.TouchEvent;
flash.events.TouchEvent.__name__ = ["flash","events","TouchEvent"];
flash.events.TouchEvent.__create = function(type,event,touch,local,target) {
	var evt = new flash.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	evt.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	evt.target = target;
	return evt;
}
flash.events.TouchEvent.__super__ = flash.events.Event;
flash.events.TouchEvent.prototype = $extend(flash.events.Event.prototype,{
	__createSimilar: function(type,related,targ) {
		var result = new flash.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: flash.events.TouchEvent
});
flash.filters = {}
flash.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
$hxClasses["flash.filters.BitmapFilter"] = flash.filters.BitmapFilter;
flash.filters.BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash.filters.BitmapFilter.prototype = {
	__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
	}
	,__preFilter: function(surface) {
	}
	,clone: function() {
		return new flash.filters.BitmapFilter(this._mType);
	}
	,__class__: flash.filters.BitmapFilter
}
flash.filters.ColorMatrixFilter = function(matrix) {
	flash.filters.BitmapFilter.call(this,"ColorMatrixFilter");
	this.matrix = matrix;
};
$hxClasses["flash.filters.ColorMatrixFilter"] = flash.filters.ColorMatrixFilter;
flash.filters.ColorMatrixFilter.__name__ = ["flash","filters","ColorMatrixFilter"];
flash.filters.ColorMatrixFilter.__super__ = flash.filters.BitmapFilter;
flash.filters.ColorMatrixFilter.prototype = $extend(flash.filters.BitmapFilter.prototype,{
	__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
		if(rect == null) rect = new flash.geom.Rectangle(0,0,surface.width,surface.height);
		var ctx = surface.getContext("2d");
		var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
		var offsetX;
		var _g1 = 0, _g = imagedata.data.length >> 2;
		while(_g1 < _g) {
			var i = _g1++;
			offsetX = i * 4;
			var srcR = imagedata.data[offsetX];
			var srcG = imagedata.data[offsetX + 1];
			var srcB = imagedata.data[offsetX + 2];
			var srcA = imagedata.data[offsetX + 3];
			imagedata.data[offsetX] = this.matrix[0] * srcR + this.matrix[1] * srcG + this.matrix[2] * srcB + this.matrix[3] * srcA + this.matrix[4] | 0;
			imagedata.data[offsetX + 1] = this.matrix[5] * srcR + this.matrix[6] * srcG + this.matrix[7] * srcB + this.matrix[8] * srcA + this.matrix[9] | 0;
			imagedata.data[offsetX + 2] = this.matrix[10] * srcR + this.matrix[11] * srcG + this.matrix[12] * srcB + this.matrix[13] * srcA + this.matrix[14] | 0;
			imagedata.data[offsetX + 3] = this.matrix[15] * srcR + this.matrix[16] * srcG + this.matrix[17] * srcB + this.matrix[18] * srcA + this.matrix[19] | 0;
		}
		ctx.putImageData(imagedata,rect.x,rect.y);
	}
	,clone: function() {
		return new flash.filters.ColorMatrixFilter(this.matrix);
	}
	,__class__: flash.filters.ColorMatrixFilter
});
flash.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
	if(in_hideObject == null) in_hideObject = false;
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 4.0;
	if(in_blurX == null) in_blurX = 4.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	if(in_angle == null) in_angle = 45.0;
	if(in_distance == null) in_distance = 4.0;
	flash.filters.BitmapFilter.call(this,"DropShadowFilter");
	this.distance = in_distance;
	this.angle = in_angle;
	this.color = in_color;
	this.alpha = in_alpha;
	this.blurX = in_blurX;
	this.blurY = in_blurX;
	this.strength = in_strength;
	this.quality = in_quality;
	this.inner = in_inner;
	this.knockout = in_knockout;
	this.hideObject = in_hideObject;
	this.___cached = false;
};
$hxClasses["flash.filters.DropShadowFilter"] = flash.filters.DropShadowFilter;
flash.filters.DropShadowFilter.__name__ = ["flash","filters","DropShadowFilter"];
flash.filters.DropShadowFilter.__super__ = flash.filters.BitmapFilter;
flash.filters.DropShadowFilter.prototype = $extend(flash.filters.BitmapFilter.prototype,{
	__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
		if(!this.___cached || refreshCache) {
			var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
			var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
			var blurRadius = Math.max(this.blurX,this.blurY);
			var context = surface.getContext("2d");
			context.shadowOffsetX = distanceX;
			context.shadowOffsetY = distanceY;
			context.shadowBlur = blurRadius;
			context.shadowColor = "rgba(" + (this.color >> 16 & 255) + "," + (this.color >> 8 & 255) + "," + (this.color & 255) + "," + this.alpha + ")";
			this.___cached = true;
		}
	}
	,clone: function() {
		return new flash.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,__class__: flash.filters.DropShadowFilter
});
flash.geom = {}
flash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if(inAlphaOffset == null) inAlphaOffset = 0;
	if(inBlueOffset == null) inBlueOffset = 0;
	if(inGreenOffset == null) inGreenOffset = 0;
	if(inRedOffset == null) inRedOffset = 0;
	if(inAlphaMultiplier == null) inAlphaMultiplier = 1;
	if(inBlueMultiplier == null) inBlueMultiplier = 1;
	if(inGreenMultiplier == null) inGreenMultiplier = 1;
	if(inRedMultiplier == null) inRedMultiplier = 1;
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
};
$hxClasses["flash.geom.ColorTransform"] = flash.geom.ColorTransform;
flash.geom.ColorTransform.__name__ = ["flash","geom","ColorTransform"];
flash.geom.ColorTransform.prototype = {
	set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,__class__: flash.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
}
flash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if(in_ty == null) in_ty = 0;
	if(in_tx == null) in_tx = 0;
	if(in_d == null) in_d = 1;
	if(in_c == null) in_c = 0;
	if(in_b == null) in_b = 0;
	if(in_a == null) in_a = 1;
	this.a = in_a;
	this.b = in_b;
	this.c = in_c;
	this.d = in_d;
	this.set_tx(in_tx);
	this.set_ty(in_ty);
	this._sx = 1.0;
	this._sy = 1.0;
};
$hxClasses["flash.geom.Matrix"] = flash.geom.Matrix;
flash.geom.Matrix.__name__ = ["flash","geom","Matrix"];
flash.geom.Matrix.prototype = {
	set_ty: function(inValue) {
		this.ty = inValue;
		return this.ty;
	}
	,set_tx: function(inValue) {
		this.tx = inValue;
		return this.tx;
	}
	,__translateTransformed: function(inPos) {
		this.set_tx(inPos.x * this.a + inPos.y * this.c + this.tx);
		this.set_ty(inPos.x * this.b + inPos.y * this.d + this.ty);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,__transformY: function(inPos) {
		return inPos.x * this.b + inPos.y * this.d + this.ty;
	}
	,__transformX: function(inPos) {
		return inPos.x * this.a + inPos.y * this.c + this.tx;
	}
	,translate: function(inDX,inDY) {
		var m = new flash.geom.Matrix();
		m.set_tx(inDX);
		m.set_ty(inDY);
		this.concat(m);
	}
	,transformPoint: function(inPos) {
		return new flash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,to3DString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", " + "0, 1" + ")";
	}
	,setRotation: function(inTheta,inScale) {
		if(inScale == null) inScale = 1;
		var scale = inScale;
		this.a = Math.cos(inTheta) * scale;
		this.c = Math.sin(inTheta) * scale;
		this.b = -this.c;
		this.d = this.a;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,scale: function(inSX,inSY) {
		this._sx = inSX;
		this._sy = inSY;
		this.a *= inSX;
		this.b *= inSY;
		this.c *= inSX;
		this.d *= inSY;
		var _g = this;
		_g.set_tx(_g.tx * inSX);
		var _g = this;
		_g.set_ty(_g.ty * inSY);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,rotate: function(inTheta) {
		var cos = Math.cos(inTheta);
		var sin = Math.sin(inTheta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.set_ty(this.tx * sin + this.ty * cos);
		this.set_tx(tx1);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,mult: function(m) {
		var result = this.clone();
		result.concat(m);
		return result;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.set_tx(-this.tx);
			this.set_ty(-this.ty);
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.set_ty(-this.b * this.tx - this.d * this.ty);
			this.set_tx(tx1);
		}
		this._sx /= this._sx;
		this._sy /= this._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
		return this;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.set_tx(0);
		this.set_ty(0);
		this._sx = 1.0;
		this._sy = 1.0;
	}
	,createGradientBox: function(in_width,in_height,rotation,in_tx,in_ty) {
		if(in_ty == null) in_ty = 0;
		if(in_tx == null) in_tx = 0;
		if(rotation == null) rotation = 0;
		this.a = in_width / 1638.4;
		this.d = in_height / 1638.4;
		if(rotation != null && rotation != 0.0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.set_tx(in_tx != null?in_tx + in_width / 2:in_width / 2);
		this.set_ty(in_ty != null?in_ty + in_height / 2:in_height / 2);
	}
	,copy: function(m) {
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.set_tx(m.tx);
		this.set_ty(m.ty);
		this._sx = m._sx;
		this._sy = m._sy;
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.set_ty(this.tx * m.b + this.ty * m.d + m.ty);
		this.set_tx(tx1);
		this._sx *= m._sx;
		this._sy *= m._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,clone: function() {
		var m = new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		m._sx = this._sx;
		m._sy = this._sy;
		return m;
	}
	,cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,__class__: flash.geom.Matrix
	,__properties__: {set_tx:"set_tx",set_ty:"set_ty"}
}
flash.geom.Point = function(inX,inY) {
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
};
$hxClasses["flash.geom.Point"] = flash.geom.Point;
flash.geom.Point.__name__ = ["flash","geom","Point"];
flash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
flash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new flash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
flash.geom.Point.polar = function(len,angle) {
	return new flash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
flash.geom.Point.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,subtract: function(v) {
		return new flash.geom.Point(this.x - v.x,this.y - v.y);
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,clone: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,add: function(v) {
		return new flash.geom.Point(v.x + this.x,v.y + this.y);
	}
	,__class__: flash.geom.Point
	,__properties__: {get_length:"get_length"}
}
flash.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if(inHeight == null) inHeight = 0;
	if(inWidth == null) inWidth = 0;
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
};
$hxClasses["flash.geom.Rectangle"] = flash.geom.Rectangle;
flash.geom.Rectangle.__name__ = ["flash","geom","Rectangle"];
flash.geom.Rectangle.prototype = {
	set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,get_topLeft: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_top: function() {
		return this.y;
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_size: function() {
		return new flash.geom.Point(this.width,this.height);
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_left: function() {
		return this.x;
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_bottomRight: function() {
		return new flash.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,union: function(toUnion) {
		var x0 = this.x > toUnion.x?toUnion.x:this.x;
		var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
		var y0 = this.y > toUnion.y?toUnion.y:this.y;
		var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new flash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,intersects: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return false;
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		return y1 > y0;
	}
	,intersection: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return new flash.geom.Rectangle();
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		if(y1 <= y0) return new flash.geom.Rectangle();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) this.set_right(r.get_right());
		if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	}
	,equals: function(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,contains: function(inX,inY) {
		return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
	}
	,clone: function() {
		return new flash.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,__class__: flash.geom.Rectangle
	,__properties__: {set_bottom:"set_bottom",get_bottom:"get_bottom",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_left:"set_left",get_left:"get_left",set_right:"set_right",get_right:"get_right",set_size:"set_size",get_size:"get_size",set_top:"set_top",get_top:"get_top",set_topLeft:"set_topLeft",get_topLeft:"get_topLeft"}
}
flash.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new flash.geom.Matrix();
	this._fullMatrix = new flash.geom.Matrix();
	this.set_colorTransform(new flash.geom.ColorTransform());
};
$hxClasses["flash.geom.Transform"] = flash.geom.Transform;
flash.geom.Transform.__name__ = ["flash","geom","Transform"];
flash.geom.Transform.prototype = {
	get_pixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,set_matrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.__matrixOverridden();
		return this._matrix;
	}
	,get_matrix: function() {
		return this._matrix.clone();
	}
	,get_concatenatedMatrix: function() {
		return this.__getFullMatrix(this._matrix);
	}
	,set_colorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,__setMatrix: function(inValue) {
		this._matrix.copy(inValue);
	}
	,__setFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,__getFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) m = localMatrix.mult(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,__class__: flash.geom.Transform
	,__properties__: {set_colorTransform:"set_colorTransform",get_concatenatedMatrix:"get_concatenatedMatrix",set_matrix:"set_matrix",get_matrix:"get_matrix",get_pixelBounds:"get_pixelBounds"}
}
flash.media = {}
flash.media.Sound = function(stream,context) {
	flash.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	this.__soundChannels = new haxe.ds.IntMap();
	this.__soundIdx = 0;
	if(stream != null) this.load(stream,context);
};
$hxClasses["flash.media.Sound"] = flash.media.Sound;
flash.media.Sound.__name__ = ["flash","media","Sound"];
flash.media.Sound.__canPlayMime = function(mime) {
	var audio = js.Browser.document.createElement("audio");
	var playable = function(ok) {
		if(ok != "" && ok != "no") return true; else return false;
	};
	return playable(audio.canPlayType(mime,null));
}
flash.media.Sound.__canPlayType = function(extension) {
	var mime = flash.media.Sound.__mimeForExtension(extension);
	if(mime == null) return false;
	return flash.media.Sound.__canPlayMime(mime);
}
flash.media.Sound.__mimeForExtension = function(extension) {
	var mime = null;
	switch(extension) {
	case "mp3":
		mime = "audio/mpeg";
		break;
	case "ogg":
		mime = "audio/ogg; codecs=\"vorbis\"";
		break;
	case "wav":
		mime = "audio/wav; codecs=\"1\"";
		break;
	case "aac":
		mime = "audio/mp4; codecs=\"mp4a.40.2\"";
		break;
	default:
		mime = null;
	}
	return mime;
}
flash.media.Sound.__super__ = flash.events.EventDispatcher;
flash.media.Sound.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__onSoundLoaded: function(evt) {
		this.__removeEventListeners();
		var evt1 = new flash.events.Event(flash.events.Event.COMPLETE);
		this.dispatchEvent(evt1);
	}
	,__onSoundLoadError: function(evt) {
		this.__removeEventListeners();
		var evt1 = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		this.dispatchEvent(evt1);
	}
	,__removeEventListeners: function() {
		this.__soundCache.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.__onSoundLoaded),false);
		this.__soundCache.removeEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.__onSoundLoadError),false);
	}
	,__load: function(stream,context,mime) {
		if(mime == null) mime = "";
		this.__streamUrl = stream.url;
		try {
			this.__soundCache = new flash.net.URLLoader();
			this.__addEventListeners();
			this.__soundCache.load(stream);
		} catch( e ) {
		}
	}
	,__addEventListeners: function() {
		this.__soundCache.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.__onSoundLoaded));
		this.__soundCache.addEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.__onSoundLoadError));
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(this.__streamUrl == null) return null;
		var self = this;
		var curIdx = this.__soundIdx;
		var removeRef = function() {
			self.__soundChannels.remove(curIdx);
		};
		var channel = flash.media.SoundChannel.__create(this.__streamUrl,startTime,loops,sndTransform,removeRef);
		this.__soundChannels.set(curIdx,channel);
		this.__soundIdx++;
		var audio = channel.__audio;
		return channel;
	}
	,load: function(stream,context) {
		this.__load(stream,context);
	}
	,close: function() {
	}
	,__class__: flash.media.Sound
});
flash.media.SoundChannel = function() {
	flash.events.EventDispatcher.call(this,this);
	this.ChannelId = -1;
	this.leftPeak = 0.;
	this.position = 0.;
	this.rightPeak = 0.;
	this.__audioCurrentLoop = 1;
	this.__audioTotalLoops = 1;
};
$hxClasses["flash.media.SoundChannel"] = flash.media.SoundChannel;
flash.media.SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash.media.SoundChannel.__create = function(src,startTime,loops,sndTransform,removeRef) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	var channel = new flash.media.SoundChannel();
	channel.__audio = js.Browser.document.createElement("audio");
	channel.__removeRef = removeRef;
	channel.__audio.addEventListener("ended",$bind(channel,channel.__onSoundChannelFinished),false);
	channel.__audio.addEventListener("seeked",$bind(channel,channel.__onSoundSeeked),false);
	channel.__audio.addEventListener("stalled",$bind(channel,channel.__onStalled),false);
	channel.__audio.addEventListener("progress",$bind(channel,channel.__onProgress),false);
	if(loops > 0) {
		channel.__audioTotalLoops = loops;
		channel.__audio.loop = true;
	}
	channel.__startTime = startTime;
	if(startTime > 0.) {
		var onLoad = null;
		onLoad = function(_) {
			channel.__audio.currentTime = channel.__startTime;
			channel.__audio.play();
			channel.__audio.removeEventListener("canplaythrough",onLoad,false);
		};
		channel.__audio.addEventListener("canplaythrough",onLoad,false);
	} else channel.__audio.autoplay = true;
	channel.__audio.src = src;
	return channel;
}
flash.media.SoundChannel.__super__ = flash.events.EventDispatcher;
flash.media.SoundChannel.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_soundTransform: function(v) {
		this.__audio.volume = v.volume;
		return this.soundTransform = v;
	}
	,__onStalled: function(evt) {
		if(this.__audio != null) this.__audio.load();
	}
	,__onSoundSeeked: function(evt) {
		if(this.__audioCurrentLoop >= this.__audioTotalLoops) {
			this.__audio.loop = false;
			this.stop();
		} else this.__audioCurrentLoop++;
	}
	,__onSoundChannelFinished: function(evt) {
		if(this.__audioCurrentLoop >= this.__audioTotalLoops) {
			this.__audio.removeEventListener("ended",$bind(this,this.__onSoundChannelFinished),false);
			this.__audio.removeEventListener("seeked",$bind(this,this.__onSoundSeeked),false);
			this.__audio.removeEventListener("stalled",$bind(this,this.__onStalled),false);
			this.__audio.removeEventListener("progress",$bind(this,this.__onProgress),false);
			this.__audio = null;
			var evt1 = new flash.events.Event(flash.events.Event.SOUND_COMPLETE);
			evt1.target = this;
			this.dispatchEvent(evt1);
			if(this.__removeRef != null) this.__removeRef();
		} else {
			this.__audio.currentTime = this.__startTime;
			this.__audio.play();
		}
	}
	,__onProgress: function(evt) {
	}
	,stop: function() {
		if(this.__audio != null) {
			this.__audio.pause();
			this.__audio = null;
			if(this.__removeRef != null) this.__removeRef();
		}
	}
	,__class__: flash.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform"}
});
flash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["flash.media.SoundLoaderContext"] = flash.media.SoundLoaderContext;
flash.media.SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
flash.media.SoundLoaderContext.prototype = {
	__class__: flash.media.SoundLoaderContext
}
flash.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["flash.media.SoundTransform"] = flash.media.SoundTransform;
flash.media.SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash.media.SoundTransform.prototype = {
	__class__: flash.media.SoundTransform
}
flash.net = {}
flash.net.URLLoader = function(request) {
	flash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(flash.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["flash.net.URLLoader"] = flash.net.URLLoader;
flash.net.URLLoader.__name__ = ["flash","net","URLLoader"];
flash.net.URLLoader.__super__ = flash.events.EventDispatcher;
flash.net.URLLoader.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_dataFormat: function(inputVal) {
		if(inputVal == flash.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(js.Browser.window,"ArrayBuffer")) this.dataFormat = flash.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,onStatus: function(status) {
		var evt = new flash.events.HTTPStatusEvent(flash.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new flash.events.SecurityErrorEvent(flash.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new flash.events.ProgressEvent(flash.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new flash.events.Event(flash.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			this.data = flash.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new flash.events.Event(flash.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,flash.utils.ByteArray)) {
			var data1 = data;
			var _g = this;
			switch( (_g.dataFormat)[1] ) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,flash.net.URLVariables)) {
			var data1 = data;
			var _g = 0, _g1 = Reflect.fields(data1);
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri.length != 0) uri += "&";
				uri += StringTools.urlEncode(p) + "=" + StringTools.urlEncode(Reflect.field(data1,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g1 = 0;
		while(_g1 < requestHeaders.length) {
			var header = requestHeaders[_g1];
			++_g1;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s = (function($this) {
				var $r;
				try {
					$r = subject.status;
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,getData: function() {
		return null;
	}
	,close: function() {
	}
	,__class__: flash.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
flash.net.URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : true, __constructs__ : ["BINARY","TEXT","VARIABLES"] }
flash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
flash.net.URLLoaderDataFormat.BINARY.toString = $estr;
flash.net.URLLoaderDataFormat.BINARY.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
flash.net.URLLoaderDataFormat.TEXT.toString = $estr;
flash.net.URLLoaderDataFormat.TEXT.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
flash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
flash.net.URLLoaderDataFormat.VARIABLES.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = flash.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash.net.URLRequest;
flash.net.URLRequest.__name__ = ["flash","net","URLRequest"];
flash.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == flash.net.URLRequestMethod.GET || this.data == null) return res;
		if(js.Boot.__instanceof(this.data,String) || js.Boot.__instanceof(this.data,flash.utils.ByteArray)) {
			res = res.slice();
			res.push(new flash.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: flash.net.URLRequest
}
flash.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash.net.URLRequestHeader;
flash.net.URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash.net.URLRequestHeader.prototype = {
	__class__: flash.net.URLRequestHeader
}
flash.net.URLRequestMethod = function() { }
$hxClasses["flash.net.URLRequestMethod"] = flash.net.URLRequestMethod;
flash.net.URLRequestMethod.__name__ = ["flash","net","URLRequestMethod"];
flash.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["flash.net.URLVariables"] = flash.net.URLVariables;
flash.net.URLVariables.__name__ = ["flash","net","URLVariables"];
flash.net.URLVariables.prototype = {
	toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(StringTools.urlEncode(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g = 0;
		while(_g < fields1.length) {
			var f = fields1[_g];
			++_g;
			var eq = f.indexOf("=");
			if(eq > 0) this[StringTools.urlDecode(HxOverrides.substr(f,0,eq))] = StringTools.urlDecode(HxOverrides.substr(f,eq + 1,null)); else if(eq != 0) this[StringTools.urlDecode(f)] = "";
		}
	}
	,__class__: flash.net.URLVariables
}
flash.system = {}
flash.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.ApplicationDomain"] = flash.system.ApplicationDomain;
flash.system.ApplicationDomain.__name__ = ["flash","system","ApplicationDomain"];
flash.system.ApplicationDomain.prototype = {
	hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,__class__: flash.system.ApplicationDomain
}
flash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	if(applicationDomain != null) this.applicationDomain = applicationDomain; else this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.LoaderContext"] = flash.system.LoaderContext;
flash.system.LoaderContext.__name__ = ["flash","system","LoaderContext"];
flash.system.LoaderContext.prototype = {
	__class__: flash.system.LoaderContext
}
flash.system.SecurityDomain = function() {
};
$hxClasses["flash.system.SecurityDomain"] = flash.system.SecurityDomain;
flash.system.SecurityDomain.__name__ = ["flash","system","SecurityDomain"];
flash.system.SecurityDomain.prototype = {
	__class__: flash.system.SecurityDomain
}
flash.text.AntiAliasType = function() { }
$hxClasses["flash.text.AntiAliasType"] = flash.text.AntiAliasType;
flash.text.AntiAliasType.__name__ = ["flash","text","AntiAliasType"];
flash.text.FontStyle = $hxClasses["flash.text.FontStyle"] = { __ename__ : true, __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
flash.text.FontStyle.REGULAR = ["REGULAR",0];
flash.text.FontStyle.REGULAR.toString = $estr;
flash.text.FontStyle.REGULAR.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.ITALIC = ["ITALIC",1];
flash.text.FontStyle.ITALIC.toString = $estr;
flash.text.FontStyle.ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
flash.text.FontStyle.BOLD_ITALIC.toString = $estr;
flash.text.FontStyle.BOLD_ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD = ["BOLD",3];
flash.text.FontStyle.BOLD.toString = $estr;
flash.text.FontStyle.BOLD.__enum__ = flash.text.FontStyle;
flash.text.FontType = $hxClasses["flash.text.FontType"] = { __ename__ : true, __constructs__ : ["EMBEDDED","DEVICE"] }
flash.text.FontType.EMBEDDED = ["EMBEDDED",0];
flash.text.FontType.EMBEDDED.toString = $estr;
flash.text.FontType.EMBEDDED.__enum__ = flash.text.FontType;
flash.text.FontType.DEVICE = ["DEVICE",1];
flash.text.FontType.DEVICE.toString = $estr;
flash.text.FontType.DEVICE.__enum__ = flash.text.FontType;
flash.text.GridFitType = $hxClasses["flash.text.GridFitType"] = { __ename__ : true, __constructs__ : ["NONE","PIXEL","SUBPIXEL"] }
flash.text.GridFitType.NONE = ["NONE",0];
flash.text.GridFitType.NONE.toString = $estr;
flash.text.GridFitType.NONE.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.PIXEL = ["PIXEL",1];
flash.text.GridFitType.PIXEL.toString = $estr;
flash.text.GridFitType.PIXEL.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
flash.text.GridFitType.SUBPIXEL.toString = $estr;
flash.text.GridFitType.SUBPIXEL.__enum__ = flash.text.GridFitType;
flash.text.TextField = function() {
	flash.display.InteractiveObject.call(this);
	this.mWidth = 100;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.__graphics = new flash.display.Graphics();
	this.mFace = flash.text.TextField.mDefaultFont;
	this.mAlign = flash.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.scrollH = 0;
	this.scrollV = 1;
	this.mType = flash.text.TextFieldType.DYNAMIC;
	this.set_autoSize("NONE");
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.__inputEnabled = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.set_defaultTextFormat(new flash.text.TextFormat());
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = flash.text.GridFitType.PIXEL;
	this.sharpness = 0;
};
$hxClasses["flash.text.TextField"] = flash.text.TextField;
flash.text.TextField.__name__ = ["flash","text","TextField"];
flash.text.TextField.__super__ = flash.display.InteractiveObject;
flash.text.TextField.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_wordWrap: function(inWordWrap) {
		this.wordWrap = inWordWrap;
		this.Rebuild();
		return this.get_wordWrap();
	}
	,get_wordWrap: function() {
		return this.wordWrap;
	}
	,set_width: function(inValue) {
		if(this.parent != null) this.parent.__invalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mWidth) {
			this.mWidth = inValue;
			this.Rebuild();
		}
		return this.mWidth;
	}
	,get_width: function() {
		return Math.max(this.mWidth,this.getBounds(this.get_stage()).width);
	}
	,set_type: function(inType) {
		this.mType = inType;
		this.__inputEnabled = this.mType == flash.text.TextFieldType.INPUT;
		if(this.mHTMLMode) {
			if(this.__inputEnabled) flash.Lib.__setContentEditable(this.__graphics.__surface,true); else flash.Lib.__setContentEditable(this.__graphics.__surface,false);
		} else if(this.__inputEnabled) {
			this.set_htmlText(StringTools.replace(this.mText,"\n","<BR />"));
			flash.Lib.__setContentEditable(this.__graphics.__surface,true);
		}
		this.tabEnabled = this.get_type() == flash.text.TextFieldType.INPUT;
		this.Rebuild();
		return inType;
	}
	,get_type: function() {
		return this.mType;
	}
	,get_textHeight: function() {
		return this.mMaxHeight;
	}
	,get_textWidth: function() {
		return this.mMaxWidth;
	}
	,set_textColor: function(inCol) {
		this.mTextColour = inCol;
		this.RebuildText();
		return inCol;
	}
	,get_textColor: function() {
		return this.mTextColour;
	}
	,set_text: function(inText) {
		this.mText = Std.string(inText);
		this.mHTMLMode = false;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.mText;
	}
	,get_text: function() {
		if(this.mHTMLMode) this.ConvertHTMLToText(false);
		return this.mText;
	}
	,set_scrollV: function(value) {
		return this.scrollV = value;
	}
	,get_scrollV: function() {
		return this.scrollV;
	}
	,set_scrollH: function(value) {
		return this.scrollH = value;
	}
	,get_scrollH: function() {
		return this.scrollH;
	}
	,get_numLines: function() {
		return 0;
	}
	,set_multiline: function(value) {
		return this.multiline = value;
	}
	,get_multiline: function() {
		return this.multiline;
	}
	,get_maxScrollV: function() {
		return 0;
	}
	,get_maxScrollH: function() {
		return 0;
	}
	,set_htmlText: function(inHTMLText) {
		this.mParagraphs = new Array();
		this.mHTMLText = inHTMLText;
		if(!this.mHTMLMode) {
			var domElement = js.Browser.document.createElement("div");
			if(this.background || this.border) {
				domElement.style.width = this.mWidth + "px";
				domElement.style.height = this.mHeight + "px";
			}
			if(this.background) domElement.style.backgroundColor = "#" + StringTools.hex(this.backgroundColor,6);
			if(this.border) domElement.style.border = "1px solid #" + StringTools.hex(this.borderColor,6);
			domElement.style.color = "#" + StringTools.hex(this.mTextColour,6);
			domElement.style.fontFamily = this.mFace;
			domElement.style.fontSize = this.mTextHeight + "px";
			domElement.style.textAlign = Std.string(this.mAlign);
			var wrapper = domElement;
			wrapper.innerHTML = inHTMLText;
			var destination = new flash.display.Graphics(wrapper);
			var __surface = this.__graphics.__surface;
			if(flash.Lib.__isOnStage(__surface)) {
				flash.Lib.__appendSurface(wrapper);
				flash.Lib.__copyStyle(__surface,wrapper);
				flash.Lib.__swapSurface(__surface,wrapper);
				flash.Lib.__removeSurface(__surface);
			}
			this.__graphics = destination;
			this.__graphics.__extent.width = wrapper.width;
			this.__graphics.__extent.height = wrapper.height;
		} else this.__graphics.__surface.innerHTML = inHTMLText;
		this.mHTMLMode = true;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.mHTMLText;
	}
	,get_htmlText: function() {
		return this.mHTMLText;
	}
	,set_height: function(inValue) {
		if(this.parent != null) this.parent.__invalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mHeight) {
			this.mHeight = inValue;
			this.Rebuild();
		}
		return this.mHeight;
	}
	,get_height: function() {
		return Math.max(this.mHeight,this.getBounds(this.get_stage()).height);
	}
	,set_defaultTextFormat: function(inFmt) {
		this.setTextFormat(inFmt);
		this._defaultTextFormat = inFmt;
		return inFmt;
	}
	,get_defaultTextFormat: function() {
		return this._defaultTextFormat;
	}
	,get_caretPos: function() {
		return this.mInsertPos;
	}
	,get_bottomScrollV: function() {
		return 0;
	}
	,set_borderColor: function(inBorderCol) {
		this.borderColor = inBorderCol;
		this.Rebuild();
		return inBorderCol;
	}
	,set_border: function(inBorder) {
		this.border = inBorder;
		this.Rebuild();
		return inBorder;
	}
	,set_backgroundColor: function(inCol) {
		this.backgroundColor = inCol;
		this.Rebuild();
		return inCol;
	}
	,set_background: function(inBack) {
		this.background = inBack;
		this.Rebuild();
		return inBack;
	}
	,set_autoSize: function(inAutoSize) {
		this.autoSize = inAutoSize;
		this.Rebuild();
		return inAutoSize;
	}
	,get_autoSize: function() {
		return this.autoSize;
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.__graphics.__render(inMask,this.__filters,1,1)) {
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
			this.__applyFilters(this.__graphics.__surface);
			this.___renderFlags |= 32;
		}
		if(!this.mHTMLMode && inMask != null) {
			var m = this.getSurfaceTransform(this.__graphics);
			flash.Lib.__drawToSurface(this.__graphics.__surface,inMask,m,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha,clipRect,this.gridFitType != flash.text.GridFitType.PIXEL);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(this.__graphics);
				flash.Lib.__setSurfaceTransform(this.__graphics.__surface,m);
				this.___renderFlags &= -33;
			}
			flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.mText.length > 1) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.mMaxWidth || local.y > this.mMaxHeight) return null; else return this;
		} else return flash.display.InteractiveObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[TextField name=" + this.name + " id=" + this.___id + "]";
	}
	,setTextFormat: function(inFmt,beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		if(inFmt.font != null) this.mFace = inFmt.font;
		if(inFmt.size != null) this.mTextHeight = inFmt.size | 0;
		if(inFmt.align != null) this.mAlign = inFmt.align;
		if(inFmt.color != null) this.mTextColour = inFmt.color;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.getTextFormat();
	}
	,setSelection: function(beginIndex,endIndex) {
	}
	,RenderRow: function(inRow,inY,inCharIdx,inAlign,inInsert) {
		if(inInsert == null) inInsert = 0;
		var h = 0;
		var w = 0;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			if(chr.fh > h) h = chr.fh;
			w += chr.adv;
		}
		if(w > this.mMaxWidth) this.mMaxWidth = w;
		var full_height = h * 1.2 | 0;
		var align_x = 0;
		var insert_x = 0;
		if(inInsert != null) {
			if(this.autoSize != "NONE") {
				this.scrollH = 0;
				insert_x = inInsert;
			} else {
				insert_x = inInsert - this.scrollH;
				if(insert_x < 0) this.scrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.scrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
				if(this.scrollH < 0) this.scrollH = 0;
			}
		}
		if(this.autoSize == "NONE" && w <= this.mLimitRenderX) {
			if(inAlign == flash.text.TextFormatAlign.CENTER) align_x = Math.round(this.mWidth) - w >> 1; else if(inAlign == flash.text.TextFormatAlign.RIGHT) align_x = Math.round(this.mWidth) - w;
		}
		var x_list = new Array();
		this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx - 1, mX : x_list});
		var cache_sel_font = null;
		var cache_normal_font = null;
		var x = align_x - this.scrollH;
		var x0 = x;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			var adv = chr.adv;
			if(x + adv > this.mLimitRenderX) break;
			x_list.push(x);
			if(x >= 0) {
				var font = chr.font;
				if(chr.sel) {
					this.__graphics.lineStyle();
					this.__graphics.beginFill(2105440);
					this.__graphics.drawRect(x,inY,adv,full_height);
					this.__graphics.endFill();
					if(cache_normal_font == chr.font) font = cache_sel_font; else {
						font = flash.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
						cache_sel_font = font;
						cache_normal_font = chr.font;
					}
				}
				font.RenderChar(this.__graphics,chr.chr,x,inY + (h - chr.fh) | 0);
			}
			x += adv;
		}
		x += this.scrollH;
		return full_height;
	}
	,RebuildText: function() {
		this.mParagraphs = [];
		if(!this.mHTMLMode) {
			var font = flash.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
			var paras = this.mText.split("\n");
			var _g = 0;
			while(_g < paras.length) {
				var paragraph = paras[_g];
				++_g;
				this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph + "\n"}]});
			}
		}
		this.Rebuild();
	}
	,Rebuild: function() {
		if(this.mHTMLMode) return;
		this.mLineInfo = [];
		this.__graphics.clear();
		if(this.background) {
			this.__graphics.beginFill(this.backgroundColor);
			this.__graphics.drawRect(0,0,this.get_width(),this.get_height());
			this.__graphics.endFill();
		}
		this.__graphics.lineStyle(this.mTextColour);
		var insert_x = null;
		this.mMaxWidth = 0;
		var wrap = this.mLimitRenderX = this.get_wordWrap() && !this.__inputEnabled?this.mWidth | 0:999999;
		var char_idx = 0;
		var h = 0;
		var s0 = this.mSelStart;
		var s1 = this.mSelEnd;
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var row = [];
			var row_width = 0;
			var last_word_break = 0;
			var last_word_break_width = 0;
			var last_word_char_idx = 0;
			var start_idx = char_idx;
			var tx = 0;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				var text = span.text;
				var font = span.font;
				var fh = font.get_height();
				last_word_break = row.length;
				last_word_break_width = row_width;
				last_word_char_idx = char_idx;
				var _g5 = 0, _g4 = text.length;
				while(_g5 < _g4) {
					var ch = _g5++;
					var g = HxOverrides.cca(text,ch);
					var adv = font.__getAdvance(g);
					if(g == 32) {
						last_word_break = row.length;
						last_word_break_width = tx;
						last_word_char_idx = char_idx;
					}
					if(tx + adv > wrap) {
						if(last_word_break > 0) {
							var row_end = row.splice(last_word_break,row.length - last_word_break);
							h += this.RenderRow(row,h,start_idx,paragraph.align);
							row = row_end;
							tx -= last_word_break_width;
							start_idx = last_word_char_idx;
							last_word_break = 0;
							last_word_break_width = 0;
							last_word_char_idx = 0;
							if(row_end.length > 0 && row_end[0].chr == 32) {
								row_end.shift();
								start_idx++;
							}
						} else {
							h += this.RenderRow(row,h,char_idx,paragraph.align);
							row = [];
							tx = 0;
							start_idx = char_idx;
						}
					}
					row.push({ font : font, chr : g, x : tx, fh : fh, sel : char_idx >= s0 && char_idx < s1, adv : adv});
					tx += adv;
					char_idx++;
				}
			}
			if(row.length > 0) {
				h += this.RenderRow(row,h,start_idx,paragraph.align,insert_x);
				insert_x = null;
			}
		}
		var w = this.mMaxWidth;
		if(h < this.mTextHeight) h = this.mTextHeight;
		this.mMaxHeight = h;
		var _g = this;
		switch(_g.autoSize) {
		case "LEFT":
			break;
		case "RIGHT":
			var x0 = this.get_x() + this.get_width();
			this.set_x(this.mWidth - x0);
			break;
		case "CENTER":
			var x0 = this.get_x() + this.get_width() / 2;
			this.set_x(this.mWidth / 2 - x0);
			break;
		default:
			if(this.get_wordWrap()) this.set_height(h);
		}
		if(this.border) {
			this.__graphics.endFill();
			this.__graphics.lineStyle(1,this.borderColor,1,true);
			this.__graphics.drawRect(.5,.5,this.get_width() - .5,this.get_height() - .5);
		}
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return new flash.text.TextFormat(this.mFace,this.mTextHeight,this.mTextColour);
	}
	,getLineIndexAtPoint: function(inX,inY) {
		if(this.mLineInfo.length < 1) return -1;
		if(inY <= 0) return 0;
		var _g1 = 0, _g = this.mLineInfo.length;
		while(_g1 < _g) {
			var l = _g1++;
			if(this.mLineInfo[l].mY0 > inY) return l == 0?0:l - 1;
		}
		return this.mLineInfo.length - 1;
	}
	,getCharIndexAtPoint: function(inX,inY) {
		var li = this.getLineIndexAtPoint(inX,inY);
		if(li < 0) return -1;
		var line = this.mLineInfo[li];
		var idx = line.mIndex;
		var _g = 0, _g1 = line.mX;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(x > inX) return idx;
			idx++;
		}
		return idx;
	}
	,getCharBoundaries: function(a) {
		return null;
	}
	,DecodeColour: function(col) {
		return Std.parseInt("0x" + HxOverrides.substr(col,1,null));
	}
	,ConvertHTMLToText: function(inUnSetHTML) {
		this.mText = "";
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				this.mText += span.text;
			}
		}
		if(inUnSetHTML) {
			this.mHTMLMode = false;
			this.RebuildText();
		}
	}
	,appendText: function(newText) {
		var _g = this;
		_g.set_text(_g.get_text() + newText);
	}
	,__class__: flash.text.TextField
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{set_autoSize:"set_autoSize",set_background:"set_background",set_backgroundColor:"set_backgroundColor",set_border:"set_border",set_borderColor:"set_borderColor",get_bottomScrollV:"get_bottomScrollV",get_caretPos:"get_caretPos",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",get_maxScrollH:"get_maxScrollH",get_maxScrollV:"get_maxScrollV",get_numLines:"get_numLines",set_text:"set_text",get_text:"get_text",set_textColor:"set_textColor",get_textColor:"get_textColor",get_textHeight:"get_textHeight",get_textWidth:"get_textWidth",set_type:"set_type",get_type:"get_type",set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap"})
});
flash.text.FontInstanceMode = $hxClasses["flash.text.FontInstanceMode"] = { __ename__ : true, __constructs__ : ["fimSolid"] }
flash.text.FontInstanceMode.fimSolid = ["fimSolid",0];
flash.text.FontInstanceMode.fimSolid.toString = $estr;
flash.text.FontInstanceMode.fimSolid.__enum__ = flash.text.FontInstanceMode;
flash.text.FontInstance = function(inFont,inHeight) {
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
};
$hxClasses["flash.text.FontInstance"] = flash.text.FontInstance;
flash.text.FontInstance.__name__ = ["flash","text","FontInstance"];
flash.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = flash.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new flash.text.Font();
	font.__setScale(inHeight);
	font.set_fontName(inFace);
	if(font == null) return null;
	f = new flash.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	flash.text.FontInstance.mSolidFonts.set(id,f);
	return f;
}
flash.text.FontInstance.prototype = {
	get_height: function() {
		return this.mHeight;
	}
	,__getAdvance: function(inChar) {
		if(this.mFont == null) return 0;
		return this.mFont.__getAdvance(inChar,this.mHeight);
	}
	,toString: function() {
		return "FontInstance:" + Std.string(this.mFont) + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
	}
	,RenderChar: function(inGraphics,inGlyph,inX,inY) {
		inGraphics.__clearLine();
		inGraphics.beginFill(this.mColour,this.mAlpha);
		this.mFont.__render(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
		inGraphics.endFill();
	}
	,SetSolid: function(inCol,inAlpha) {
		this.mColour = inCol;
		this.mAlpha = inAlpha;
		this.mMode = flash.text.FontInstanceMode.fimSolid;
	}
	,GetFace: function() {
		return this.mFont.fontName;
	}
	,__class__: flash.text.FontInstance
	,__properties__: {get_height:"get_height"}
}
flash.text.TextFieldAutoSize = function() { }
$hxClasses["flash.text.TextFieldAutoSize"] = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.__name__ = ["flash","text","TextFieldAutoSize"];
flash.text.TextFieldType = function() { }
$hxClasses["flash.text.TextFieldType"] = flash.text.TextFieldType;
flash.text.TextFieldType.__name__ = ["flash","text","TextFieldType"];
flash.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
};
$hxClasses["flash.text.TextFormat"] = flash.text.TextFormat;
flash.text.TextFormat.__name__ = ["flash","text","TextFormat"];
flash.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new flash.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.display = this.display;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__class__: flash.text.TextFormat
}
flash.text.TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : true, __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
flash.text.TextFormatAlign.LEFT = ["LEFT",0];
flash.text.TextFormatAlign.LEFT.toString = $estr;
flash.text.TextFormatAlign.LEFT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
flash.text.TextFormatAlign.RIGHT.toString = $estr;
flash.text.TextFormatAlign.RIGHT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
flash.text.TextFormatAlign.JUSTIFY.toString = $estr;
flash.text.TextFormatAlign.JUSTIFY.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.CENTER = ["CENTER",3];
flash.text.TextFormatAlign.CENTER.toString = $estr;
flash.text.TextFormatAlign.CENTER.__enum__ = flash.text.TextFormatAlign;
flash.ui = {}
flash.ui.Keyboard = function() { }
$hxClasses["flash.ui.Keyboard"] = flash.ui.Keyboard;
flash.ui.Keyboard.__name__ = ["flash","ui","Keyboard"];
flash.ui.Keyboard.isAccessible = function() {
	return false;
}
flash.ui.Keyboard.__convertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 18;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
}
flash.ui.Keyboard.__convertWebkitCode = function(code) {
	var _g = code.toLowerCase();
	switch(_g) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 18;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
}
flash.utils = {}
flash.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this.___resizeBuffer(this.allocated);
};
$hxClasses["flash.utils.ByteArray"] = flash.utils.ByteArray;
flash.utils.ByteArray.__name__ = ["flash","utils","ByteArray"];
flash.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new flash.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
}
flash.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new flash.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
}
flash.utils.ByteArray.prototype = {
	set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Math.max(value,this.allocated * 2) | 0); else if(this.allocated > value) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,get_endian: function() {
		return this.littleEndian?"littleEndian":"bigEndian";
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,__getBuffer: function() {
		return this.data.buffer;
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,__get: function(pos) {
		return this.data.getUint8(pos);
	}
	,__fromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Write error - Out of bounds");
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c2 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this.___resizeBuffer(this.allocated = Math.max(len,this.allocated * 2) | 0); else if(this.allocated > len) this.___resizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.data;
			data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Read error - Out of bounds");
		if(offset == null) offset = 0;
		if(length == null) length = this.length;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = Math.max(lengthToEnsure,bytes.allocated * 2) | 0); else if(bytes.allocated > lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,clear: function() {
		if(this.allocated < 0) this.___resizeBuffer(this.allocated = Math.max(0,this.allocated * 2) | 0); else if(this.allocated > 0) this.___resizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
	}
	,__class__: flash.utils.ByteArray
	,__properties__: {get_bytesAvailable:"get_bytesAvailable",set_endian:"set_endian",get_endian:"get_endian",set_length:"set_length"}
}
flash.utils.Endian = function() { }
$hxClasses["flash.utils.Endian"] = flash.utils.Endian;
flash.utils.Endian.__name__ = ["flash","utils","Endian"];
flash.utils.Timer = function(delay,repeatCount) {
	if(repeatCount == null) repeatCount = 0;
	flash.events.EventDispatcher.call(this);
	this.running = false;
	this.set_delay(delay);
	this.set_repeatCount(repeatCount);
	this.currentCount = 0;
};
$hxClasses["flash.utils.Timer"] = flash.utils.Timer;
flash.utils.Timer.__name__ = ["flash","utils","Timer"];
flash.utils.Timer.__super__ = flash.events.EventDispatcher;
flash.utils.Timer.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_repeatCount: function(v) {
		if(this.running && v != 0 && v <= this.currentCount) this.stop();
		this.repeatCount = v;
		return v;
	}
	,set_delay: function(v) {
		if(v != this.delay) {
			var wasRunning = this.running;
			if(this.running) this.stop();
			this.delay = v;
			if(wasRunning) this.start();
		}
		return v;
	}
	,__onInterval: function() {
		this.currentCount++;
		if(this.repeatCount > 0 && this.currentCount >= this.repeatCount) {
			this.stop();
			this.dispatchEvent(new flash.events.TimerEvent("timer"));
			this.dispatchEvent(new flash.events.TimerEvent("timerComplete"));
		} else this.dispatchEvent(new flash.events.TimerEvent("timer"));
	}
	,stop: function() {
		if(this.timerId != null) {
			window.clearInterval(this.timerId);
			this.timerId = null;
		}
		this.running = false;
	}
	,start: function() {
		if(this.running) return;
		this.running = true;
		this.timerId = window.setInterval($bind(this,this.__onInterval),this.delay | 0);
	}
	,reset: function() {
		this.stop();
		this.currentCount = 0;
	}
	,__class__: flash.utils.Timer
	,__properties__: {set_delay:"set_delay",set_repeatCount:"set_repeatCount"}
});
flash.utils.Uuid = function() { }
$hxClasses["flash.utils.Uuid"] = flash.utils.Uuid;
flash.utils.Uuid.__name__ = ["flash","utils","Uuid"];
flash.utils.Uuid.random = function(size) {
	if(size == null) size = 32;
	var nchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
	var uid = new StringBuf();
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		uid.b += Std.string("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.random() * nchars | 0));
	}
	return uid.b;
}
flash.utils.Uuid.uuid = function() {
	return flash.utils.Uuid.random(8) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(12);
}
var gakhov = {}
gakhov.moonRover = {}
gakhov.moonRover.core = {}
gakhov.moonRover.core.AssetButton = function() {
	this.isActive = true;
	flash.display.Sprite.call(this);
};
$hxClasses["gakhov.moonRover.core.AssetButton"] = gakhov.moonRover.core.AssetButton;
gakhov.moonRover.core.AssetButton.__name__ = ["gakhov","moonRover","core","AssetButton"];
gakhov.moonRover.core.AssetButton.__super__ = flash.display.Sprite;
gakhov.moonRover.core.AssetButton.prototype = $extend(flash.display.Sprite.prototype,{
	destroy: function() {
		this.destroyGrayscale();
		motion.Actuate.reset();
		if(this.asset != null) {
			this.removeChild(this.asset);
			this.asset.bitmapData.dispose();
			this.asset.set_bitmapData(null);
			this.asset = null;
		}
	}
	,run: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.SELECT));
		this.mouseEnabled = true;
	}
	,clickEffect: function(event) {
		motion.Actuate.tween(event.target,0.15,{ scaleX : 0.9, scaleY : 0.9}).repeat(1).reflect().onComplete($bind(this,this.run));
		this.mouseEnabled = false;
	}
	,getGrayscaleBitmap: function(asset) {
		if(asset == null) {
			console.log("error asset is null");
			return null;
		}
		var grayBmp = new flash.display.BitmapData(asset.get_width() | 0,asset.get_height() | 0,true,0);
		grayBmp.draw(asset);
		var rc = 1 / 3;
		var gc = 1 / 3;
		var bc = 1 / 3;
		var grayscaleFilter = new flash.filters.ColorMatrixFilter([rc,gc,bc,0,0,rc,gc,bc,0,0,rc,gc,bc,0,0,0,0,0,1,0]);
		grayBmp.applyFilter(grayBmp,grayBmp.rect,new flash.geom.Point(),grayscaleFilter);
		return new flash.display.Bitmap(grayBmp);
	}
	,destroyGrayscale: function() {
		if(this._grayscaleAsset == null) return;
		this.removeChild(this._grayscaleAsset);
		this.asset.set_visible(true);
		this._grayscaleAsset.bitmapData.dispose();
		this._grayscaleAsset.set_bitmapData(null);
		this._grayscaleAsset = null;
	}
	,grayscaleAsset: function() {
		if(this._grayscaleAsset == null) {
			this._grayscaleAsset = this.getGrayscaleBitmap(this.asset);
			this._grayscaleAsset.set_x(-this._grayscaleAsset.get_width() / 2);
			this._grayscaleAsset.set_y(-this._grayscaleAsset.get_height() / 2);
		}
		this.asset.set_visible(false);
		this.addChild(this._grayscaleAsset);
	}
	,set_activate: function(value) {
		this.isActive = value;
		if(this.isActive) {
			this.mouseEnabled = true;
			this.alpha = 1;
		} else {
			this.mouseEnabled = false;
			this.alpha = 0.3;
		}
		return this.isActive;
	}
	,get_activate: function() {
		return this.isActive;
	}
	,createWithAsset: function(aAsset) {
	}
	,create: function(assetPath) {
		this.asset = gakhov.moonRover.utils.Utils.createBitmapByAssetName(assetPath);
		this.asset.set_x(-this.asset.get_width() / 2);
		this.asset.set_y(-this.asset.get_height() / 2);
		this.addChild(this.asset);
		this.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickEffect));
	}
	,__class__: gakhov.moonRover.core.AssetButton
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{set_activate:"set_activate",get_activate:"get_activate"})
});
gakhov.moonRover.core.Global = function() {
};
$hxClasses["gakhov.moonRover.core.Global"] = gakhov.moonRover.core.Global;
gakhov.moonRover.core.Global.__name__ = ["gakhov","moonRover","core","Global"];
gakhov.moonRover.core.Global.__properties__ = {get_assetsSizeScale:"get_assetsSizeScale",get_realHeight:"get_realHeight",get_realWidth:"get_realWidth",set_scale:"set_scale",get_scale:"get_scale"}
gakhov.moonRover.core.Global.setStageSize = function(stageWidth,stageHeight) {
	gakhov.moonRover.core.Global._stageWidth = stageWidth;
	gakhov.moonRover.core.Global._stageHeight = stageHeight;
	var scaleX = gakhov.moonRover.core.Global._stageWidth / gakhov.moonRover.core.Global.width;
	var scaleY = gakhov.moonRover.core.Global._stageHeight / gakhov.moonRover.core.Global.height;
	if(gakhov.moonRover.core.Global.height * scaleX > gakhov.moonRover.core.Global._stageHeight) gakhov.moonRover.core.Global.set_scale(scaleY); else gakhov.moonRover.core.Global.set_scale(scaleX);
	gakhov.moonRover.core.Global._realHeight = gakhov.moonRover.core.Global.height * gakhov.moonRover.core.Global.get_scale();
	gakhov.moonRover.core.Global._realWidth = gakhov.moonRover.core.Global.width * gakhov.moonRover.core.Global.get_scale();
}
gakhov.moonRover.core.Global.get_realWidth = function() {
	return gakhov.moonRover.core.Global._realWidth;
}
gakhov.moonRover.core.Global.get_realHeight = function() {
	return gakhov.moonRover.core.Global._realHeight;
}
gakhov.moonRover.core.Global.get_scale = function() {
	return gakhov.moonRover.core.Global._scale;
}
gakhov.moonRover.core.Global.get_assetsSizeScale = function() {
	return gakhov.moonRover.core.Global._assetsSizeScale;
}
gakhov.moonRover.core.Global.set_scale = function(value) {
	gakhov.moonRover.core.Global._scale = value;
	gakhov.moonRover.core.Global._assetsPath = "assets/1x/";
	gakhov.moonRover.core.Global._assetsSizeScale = gakhov.moonRover.core.Global._scale;
	return gakhov.moonRover.core.Global._scale;
	if(gakhov.moonRover.core.Global.get_scale() <= 0.5) {
		gakhov.moonRover.core.Global._assetsPath = "assets/0_5x/";
		gakhov.moonRover.core.Global._assetsSizeScale = gakhov.moonRover.core.Global.get_scale() * 2;
	}
	if(gakhov.moonRover.core.Global.get_scale() > 0.5 && gakhov.moonRover.core.Global.get_scale() <= 1) {
		gakhov.moonRover.core.Global._assetsPath = "assets/1x/";
		gakhov.moonRover.core.Global._assetsSizeScale = gakhov.moonRover.core.Global.get_scale();
	}
	if(gakhov.moonRover.core.Global.get_scale() > 1) {
		gakhov.moonRover.core.Global._assetsPath = "assets/2x/";
		gakhov.moonRover.core.Global._assetsSizeScale = gakhov.moonRover.core.Global.get_scale() / 2;
	}
	return gakhov.moonRover.core.Global._scale;
}
gakhov.moonRover.core.Global.getAssetsPath = function() {
	return gakhov.moonRover.core.Global._assetsPath;
}
gakhov.moonRover.core.Global.prototype = {
	__class__: gakhov.moonRover.core.Global
}
gakhov.moonRover.core.Model = function() {
};
$hxClasses["gakhov.moonRover.core.Model"] = gakhov.moonRover.core.Model;
gakhov.moonRover.core.Model.__name__ = ["gakhov","moonRover","core","Model"];
gakhov.moonRover.core.Model.prototype = {
	__class__: gakhov.moonRover.core.Model
}
gakhov.moonRover.core.Page = function() {
};
$hxClasses["gakhov.moonRover.core.Page"] = gakhov.moonRover.core.Page;
gakhov.moonRover.core.Page.__name__ = ["gakhov","moonRover","core","Page"];
gakhov.moonRover.core.Page.prototype = {
	destroy: function() {
		if(this._nextBtn != null) {
			this._nextBtn.set_activate(false);
			this._scene.removeChild(this._nextBtn);
			this._nextBtn.removeEventListener(flash.events.Event.SELECT,$bind(this,this.nextPageHandler));
			this._nextBtn.destroy();
			this._nextBtn = null;
		}
		if(this._previousBtn != null) {
			this._previousBtn.set_activate(false);
			this._previousBtn.removeEventListener(flash.events.Event.SELECT,$bind(this,this.previousPageHandler));
			this._scene.removeChild(this._previousBtn);
			this._previousBtn.destroy();
			this._previousBtn = null;
		}
	}
	,close: function(param) {
		this.destroy();
		if(Type.enumEq(param,gakhov.moonRover.core.PageCommand.NEXT_PAGE)) this.signalClose.dispatch(this.id + 1); else this.signalClose.dispatch(this.id - 1);
	}
	,previousPageHandler: function(event) {
		this.close(gakhov.moonRover.core.PageCommand.PREVIOUS_PAGE);
	}
	,nextPageHandler: function(event) {
		this.close(gakhov.moonRover.core.PageCommand.NEXT_PAGE);
	}
	,createPreviousBtn: function() {
		this._previousBtn = new gakhov.moonRover.core.AssetButton();
		this._previousBtn.create("ui/arrow_left_yellow.png");
		this._previousBtn.set_x(196);
		this._previousBtn.set_y(gakhov.moonRover.core.Global.get_realHeight() - this._previousBtn.get_height() / 2 - 5);
		this._previousBtn.addEventListener(flash.events.Event.SELECT,$bind(this,this.previousPageHandler));
		this._scene.addChild(this._previousBtn);
	}
	,isChoosed: function() {
		return true;
	}
	,createNextBtn: function() {
		this._nextBtn = new gakhov.moonRover.core.AssetButton();
		this._nextBtn.create("ui/arrow_right_yellow.png");
		this._nextBtn.set_x(387);
		this._nextBtn.set_y(gakhov.moonRover.core.Global.get_realHeight() - this._nextBtn.get_height() / 2 - 5);
		this._nextBtn.set_activate(this.isChoosed());
		this._nextBtn.addEventListener(flash.events.Event.SELECT,$bind(this,this.nextPageHandler));
		this._scene.addChild(this._nextBtn);
	}
	,open: function() {
	}
	,addCloseHandler: function(handler) {
		this.signalClose.add(handler);
	}
	,init: function(aScene,aModel) {
		this._scene = aScene;
		this._model = aModel;
		this.signalClose = new msignal.Signal1();
	}
	,__class__: gakhov.moonRover.core.Page
}
gakhov.moonRover.core.PageCommand = $hxClasses["gakhov.moonRover.core.PageCommand"] = { __ename__ : true, __constructs__ : ["NEXT_PAGE","PREVIOUS_PAGE"] }
gakhov.moonRover.core.PageCommand.NEXT_PAGE = ["NEXT_PAGE",0];
gakhov.moonRover.core.PageCommand.NEXT_PAGE.toString = $estr;
gakhov.moonRover.core.PageCommand.NEXT_PAGE.__enum__ = gakhov.moonRover.core.PageCommand;
gakhov.moonRover.core.PageCommand.PREVIOUS_PAGE = ["PREVIOUS_PAGE",1];
gakhov.moonRover.core.PageCommand.PREVIOUS_PAGE.toString = $estr;
gakhov.moonRover.core.PageCommand.PREVIOUS_PAGE.__enum__ = gakhov.moonRover.core.PageCommand;
gakhov.moonRover.core.TextButton = function() {
	this.pandding = 10;
	flash.display.Sprite.call(this);
};
$hxClasses["gakhov.moonRover.core.TextButton"] = gakhov.moonRover.core.TextButton;
gakhov.moonRover.core.TextButton.__name__ = ["gakhov","moonRover","core","TextButton"];
gakhov.moonRover.core.TextButton.__super__ = flash.display.Sprite;
gakhov.moonRover.core.TextButton.prototype = $extend(flash.display.Sprite.prototype,{
	destroy: function() {
		this.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickEffect));
		this.get_graphics().clear();
		this.removeChild(this.tf);
		this.tf = null;
	}
	,run: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.SELECT));
	}
	,draw: function(color) {
		this.get_graphics().beginFill(color);
		this.get_graphics().lineStyle(1,4473924);
		this.get_graphics().drawRoundRect(-this.tf.get_width() / 2 - this.pandding,-this.tf.get_height() / 2 - this.pandding,this.tf.get_width() + 2 * this.pandding,this.tf.get_height() + 2 * this.pandding,12,12);
	}
	,unlock: function() {
		this.draw(61166);
		this.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickEffect));
	}
	,lock: function() {
		this.draw(15658734);
		this.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickEffect));
	}
	,clickEffect: function(event) {
		motion.Actuate.tween(this,0.15,{ scaleX : 0.95, scaleY : 0.95}).repeat(1).reflect().onComplete($bind(this,this.run));
	}
	,create: function(label) {
		if(label == null) label = "restartGame";
		this.tf = gakhov.moonRover.utils.Utils.createLabel(40,12288);
		this.tf.set_text(label);
		this.tf.set_x(-this.tf.get_width() / 2);
		this.tf.set_y(-this.tf.get_height() / 2);
		this.tf.mouseEnabled = false;
		this.addChild(this.tf);
		this.pandding = 10 * gakhov.moonRover.core.Global.get_scale();
		this.unlock();
	}
	,__class__: gakhov.moonRover.core.TextButton
});
gakhov.moonRover.page = {}
gakhov.moonRover.page.AnimationPage = function() {
	gakhov.moonRover.core.Page.call(this);
};
$hxClasses["gakhov.moonRover.page.AnimationPage"] = gakhov.moonRover.page.AnimationPage;
gakhov.moonRover.page.AnimationPage.__name__ = ["gakhov","moonRover","page","AnimationPage"];
gakhov.moonRover.page.AnimationPage.__super__ = gakhov.moonRover.core.Page;
gakhov.moonRover.page.AnimationPage.prototype = $extend(gakhov.moonRover.core.Page.prototype,{
	close: function(pageCommand) {
	}
	,over: function() {
		this._message = gakhov.moonRover.utils.Utils.createBitmapByAssetName("label/label4.png");
		this._message.set_x((gakhov.moonRover.core.Global.get_realWidth() - this._message.get_width()) / 2);
		this._message.set_y((gakhov.moonRover.core.Global.get_realHeight() - this._message.get_height()) / 2);
		this._scene.addChild(this._message);
	}
	,open: function() {
		this._model.rover.set_visible(false);
		this._model.roverBg.set_visible(false);
		this._bg = new gakhov.moonRover.page.Bg();
		this._bg.create();
		this._scene.addChild(this._bg);
		this._roverMini = new gakhov.moonRover.page.RoverMini();
		this._roverMini.create();
		this._roverMini.set_x(238);
		this._roverMini.set_y(255);
		this._scene.addChild(this._roverMini);
		this._bg.move();
		this._roverMini.move();
		motion.Actuate.timer(27).onComplete($bind(this,this.over));
	}
	,__class__: gakhov.moonRover.page.AnimationPage
});
gakhov.moonRover.page.Youtoo = function() {
	flash.display.Sprite.call(this);
};
$hxClasses["gakhov.moonRover.page.Youtoo"] = gakhov.moonRover.page.Youtoo;
gakhov.moonRover.page.Youtoo.__name__ = ["gakhov","moonRover","page","Youtoo"];
gakhov.moonRover.page.Youtoo.__super__ = flash.display.Sprite;
gakhov.moonRover.page.Youtoo.prototype = $extend(flash.display.Sprite.prototype,{
	rotate: function() {
		motion.Actuate.tween(this._body,1,{ rotation : 0});
	}
	,light: function() {
		this._lightOn.set_visible(!this._lightOn.get_visible());
		this._lightOff.set_visible(!this._lightOn.get_visible());
	}
	,move: function() {
		motion.Actuate.timer(0.4).repeat(5).onRepeat($bind(this,this.light)).onComplete($bind(this,this.rotate));
	}
	,create: function() {
		this._body = new gakhov.moonRover.page.AnimationPart();
		this._body.addSkin(gakhov.moonRover.utils.Utils.createBitmapByAssetName("youtoo/youtoo_mini.png"));
		this.addChild(this._body);
		this._lightOn = new gakhov.moonRover.page.AnimationPart();
		this._lightOn.addSkin(gakhov.moonRover.utils.Utils.createBitmapByAssetName("youtoo/light_on.png"));
		this._lightOn.set_x(8);
		this._lightOn.set_y(-1);
		this._body.addChild(this._lightOn);
		this._lightOn.set_visible(false);
		this._lightOff = new gakhov.moonRover.page.AnimationPart();
		this._lightOff.addSkin(gakhov.moonRover.utils.Utils.createBitmapByAssetName("youtoo/light_off.png"));
		this._lightOff.set_x(8);
		this._lightOff.set_y(-1);
		this._body.addChild(this._lightOff);
		this._body.set_rotation(15);
	}
	,__class__: gakhov.moonRover.page.Youtoo
});
gakhov.moonRover.page.RoverMini = function() {
	flash.display.Sprite.call(this);
};
$hxClasses["gakhov.moonRover.page.RoverMini"] = gakhov.moonRover.page.RoverMini;
gakhov.moonRover.page.RoverMini.__name__ = ["gakhov","moonRover","page","RoverMini"];
gakhov.moonRover.page.RoverMini.__super__ = flash.display.Sprite;
gakhov.moonRover.page.RoverMini.prototype = $extend(flash.display.Sprite.prototype,{
	jumping: function() {
	}
	,go: function() {
	}
	,move2: function() {
		motion.Actuate.tween(this._body,0.2,{ y : -2}).ease(motion.easing.Elastic.get_easeInOut()).repeat(10).reverse();
	}
	,move: function() {
		motion.Actuate.tween(this._wheel1,2,{ rotation : -360}).repeat(9).ease(motion.easing.Linear.get_easeNone());
		motion.Actuate.tween(this._wheel2,2,{ rotation : -360}).repeat(9).ease(motion.easing.Linear.get_easeNone());
		motion.Actuate.tween(this._wheel1,1,{ y : this._wheel1.get_y() - 3}).ease(motion.easing.Back.get_easeOut()).repeat(15).reverse();
		motion.Actuate.tween(this._wheel2,1,{ y : this._wheel2.get_y() - 3}).ease(motion.easing.Back.get_easeOut()).repeat(15).reverse();
		motion.Actuate.tween(this._body,1,{ y : -3}).ease(motion.easing.Back.get_easeOut()).repeat(15).reverse();
		motion.Actuate.timer(21).onComplete($bind(this,this.move2));
	}
	,create: function() {
		this._body = new gakhov.moonRover.page.AnimationPart();
		this._body.addSkin(gakhov.moonRover.utils.Utils.createBitmapByAssetName("animation/rover_mini.png"));
		this._wheel1 = new gakhov.moonRover.page.AnimationPart();
		this._wheel1.addSkin(gakhov.moonRover.utils.Utils.createBitmapByAssetName("animation/wheel_mini.png"));
		this._wheel1.set_x(-5);
		this._wheel1.set_y(35);
		this._wheel2 = new gakhov.moonRover.page.AnimationPart();
		this._wheel2.addSkin(gakhov.moonRover.utils.Utils.createBitmapByAssetName("animation/wheel_mini.png"));
		this._wheel2.set_x(30);
		this._wheel2.set_y(35);
		this.addChild(this._body);
		this.addChild(this._wheel1);
		this.addChild(this._wheel2);
	}
	,__class__: gakhov.moonRover.page.RoverMini
});
gakhov.moonRover.page.Bg = function() {
	flash.display.Sprite.call(this);
};
$hxClasses["gakhov.moonRover.page.Bg"] = gakhov.moonRover.page.Bg;
gakhov.moonRover.page.Bg.__name__ = ["gakhov","moonRover","page","Bg"];
gakhov.moonRover.page.Bg.__super__ = flash.display.Sprite;
gakhov.moonRover.page.Bg.prototype = $extend(flash.display.Sprite.prototype,{
	move2: function() {
		this._youtoo.move();
	}
	,move: function() {
		motion.Actuate.tween(this._farBg,20,{ x : 0}).ease(motion.easing.Linear.get_easeNone());
		motion.Actuate.tween(this._nearBg,20,{ x : 0}).ease(motion.easing.Linear.get_easeNone());
		motion.Actuate.timer(24).onComplete($bind(this,this.move2));
	}
	,create: function() {
		this._farBg = gakhov.moonRover.utils.Utils.createBitmapByAssetName("bg/far_bg.png");
		this._farBg.set_y(0);
		this._farBg.set_x(gakhov.moonRover.core.Global.get_realWidth() - this._farBg.get_width());
		this.addChild(this._farBg);
		this._nearBg = gakhov.moonRover.utils.Utils.createSpriteByAssetName("bg/near_bg.png");
		this._nearBg.set_y(gakhov.moonRover.core.Global.height - this._nearBg.get_height());
		this._nearBg.set_x(gakhov.moonRover.core.Global.get_realWidth() - this._nearBg.get_width());
		this.addChild(this._nearBg);
		this._youtoo = new gakhov.moonRover.page.Youtoo();
		this._youtoo.create();
		this._youtoo.set_x(185);
		this._youtoo.set_y(35);
		this._nearBg.addChild(this._youtoo);
	}
	,__class__: gakhov.moonRover.page.Bg
});
gakhov.moonRover.page.AnimationPart = function() {
	flash.display.Sprite.call(this);
};
$hxClasses["gakhov.moonRover.page.AnimationPart"] = gakhov.moonRover.page.AnimationPart;
gakhov.moonRover.page.AnimationPart.__name__ = ["gakhov","moonRover","page","AnimationPart"];
gakhov.moonRover.page.AnimationPart.__super__ = flash.display.Sprite;
gakhov.moonRover.page.AnimationPart.prototype = $extend(flash.display.Sprite.prototype,{
	addSkin: function(bitmap) {
		this._skin = bitmap;
		this._skin.set_x(-this._skin.get_width() / 2);
		this._skin.set_y(-this._skin.get_height() / 2);
		this.addChild(this._skin);
	}
	,__class__: gakhov.moonRover.page.AnimationPart
});
gakhov.moonRover.page.IntraductionPage = function() {
	gakhov.moonRover.core.Page.call(this);
};
$hxClasses["gakhov.moonRover.page.IntraductionPage"] = gakhov.moonRover.page.IntraductionPage;
gakhov.moonRover.page.IntraductionPage.__name__ = ["gakhov","moonRover","page","IntraductionPage"];
gakhov.moonRover.page.IntraductionPage.__super__ = gakhov.moonRover.core.Page;
gakhov.moonRover.page.IntraductionPage.prototype = $extend(gakhov.moonRover.core.Page.prototype,{
	close: function(param) {
		console.log("-------- Intraduction page");
		this._startBtn.removeEventListener(flash.events.Event.SELECT,$bind(this,this.nextPageHandler));
		this._scene.removeChild(this._startBtn);
		this._startBtn.destroy();
		gakhov.moonRover.core.Page.prototype.close.call(this,param);
	}
	,open: function() {
		console.log("+++++++ Intraduction page");
		this._model.roverBg.set_visible(false);
		this._model.rover.set_visible(false);
		this._startBtn = new gakhov.moonRover.core.AssetButton();
		this._startBtn.create("label/label1.png");
		this._startBtn.addEventListener(flash.events.Event.SELECT,$bind(this,this.nextPageHandler));
		this._startBtn.set_x(gakhov.moonRover.core.Global.get_realWidth() / 2);
		this._startBtn.set_y(gakhov.moonRover.core.Global.get_realHeight() / 2);
		this._scene.addChild(this._startBtn);
		this.createNextBtn();
	}
	,__class__: gakhov.moonRover.page.IntraductionPage
});
gakhov.moonRover.page.PreInrtraductionPage = function() {
	gakhov.moonRover.core.Page.call(this);
};
$hxClasses["gakhov.moonRover.page.PreInrtraductionPage"] = gakhov.moonRover.page.PreInrtraductionPage;
gakhov.moonRover.page.PreInrtraductionPage.__name__ = ["gakhov","moonRover","page","PreInrtraductionPage"];
gakhov.moonRover.page.PreInrtraductionPage.__super__ = gakhov.moonRover.core.Page;
gakhov.moonRover.page.PreInrtraductionPage.prototype = $extend(gakhov.moonRover.core.Page.prototype,{
	close: function(param) {
		console.log("-------- Intraduction page");
		this._detailBtn.removeEventListener(flash.events.Event.SELECT,$bind(this,this.nextPageHandler));
		this._scene.removeChild(this._detailBtn);
		this._detailBtn.destroy();
		gakhov.moonRover.core.Page.prototype.close.call(this,param);
	}
	,goToUrlHandler: function(event) {
		flash.Lib.getURL(new flash.net.URLRequest("http://przdnk-v-krbk.livejournal.com/27267.html"),"_top");
	}
	,open: function() {
		this._model.roverBg.set_visible(false);
		this._model.rover.set_visible(false);
		this._detailBtn = new gakhov.moonRover.core.AssetButton();
		this._detailBtn.create("label/label5.png");
		this._detailBtn.addEventListener(flash.events.Event.SELECT,$bind(this,this.goToUrlHandler));
		this._detailBtn.set_x(gakhov.moonRover.core.Global.get_realWidth() / 2);
		this._detailBtn.set_y(gakhov.moonRover.core.Global.get_realHeight() / 2);
		this._scene.addChild(this._detailBtn);
		this.createNextBtn();
	}
	,__class__: gakhov.moonRover.page.PreInrtraductionPage
});
gakhov.moonRover.page.TestingPage = function() {
	this._repeatCount = 10;
	gakhov.moonRover.core.Page.call(this);
};
$hxClasses["gakhov.moonRover.page.TestingPage"] = gakhov.moonRover.page.TestingPage;
gakhov.moonRover.page.TestingPage.__name__ = ["gakhov","moonRover","page","TestingPage"];
gakhov.moonRover.page.TestingPage.__super__ = gakhov.moonRover.core.Page;
gakhov.moonRover.page.TestingPage.prototype = $extend(gakhov.moonRover.core.Page.prototype,{
	close: function(pageCommand) {
		this._lineBg.get_graphics().clear();
		this._line.get_graphics().clear();
		this._scene.removeChild(this._lineBg);
		this._scene.removeChild(this._line);
		this._lineBg = null;
		this._line = null;
		this._model.rover.alpha = 1;
		if(this._message != null) {
			this._scene.removeChild(this._message);
			this._message.bitmapData.dispose();
			this._message = null;
		}
		gakhov.moonRover.core.Page.prototype.close.call(this,pageCommand);
	}
	,stopTesting: function() {
		motion.Actuate.reset();
		this._model.rover.alpha = 0.3;
		if(this._model.rover.isRight()) {
			this._nextBtn.set_activate(true);
			this._previousBtn.set_activate(true);
			this._message = gakhov.moonRover.utils.Utils.createBitmapByAssetName("label/label3.png");
		} else {
			this._previousBtn.set_activate(true);
			this._message = gakhov.moonRover.utils.Utils.createBitmapByAssetName("label/label2.png");
		}
		this._message.set_x(this._model.roverBg.get_x() + (this._model.roverBg.get_width() - this._message.get_width()) / 2);
		this._message.set_y(this._model.roverBg.get_y() + (this._model.roverBg.get_height() - this._message.get_height()) / 2);
		this._scene.addChild(this._message);
	}
	,draw: function() {
		this._drawIretator++;
		this._line.get_graphics().beginFill(52275,1);
		this._line.get_graphics().lineStyle(0,16777215);
		this._line.get_graphics().drawRect(0,0,this.lineWidth,-this.lineHeight * (this._drawIretator / this._repeatCount));
	}
	,startTesting: function() {
		this._drawIretator = 0;
		if(this._model.rover.isRight()) motion.Actuate.timer(0.1).repeat(this._repeatCount).onRepeat($bind(this,this.draw)).onComplete($bind(this,this.stopTesting)); else motion.Actuate.timer(0.1).repeat(this._repeatCount - 3).onRepeat($bind(this,this.draw)).onComplete($bind(this,this.stopTesting));
	}
	,createLineBg: function() {
		this.left = 20;
		this.top = gakhov.moonRover.core.Global.get_realHeight() - 20;
		this.lineWidth = 40;
		this.lineHeight = gakhov.moonRover.core.Global.get_realHeight() - 40;
		this._lineBg = new flash.display.Shape();
		this._lineBg.get_graphics().beginFill(10066329,0);
		this._lineBg.get_graphics().lineStyle(3,16777215);
		this._lineBg.get_graphics().drawRect(0,0,this.lineWidth,-this.lineHeight);
		this._lineBg.set_x(this.left);
		this._lineBg.set_y(this.top);
		this._scene.addChild(this._lineBg);
		this._line = new flash.display.Shape();
		this._line.get_graphics().beginFill(52275,1);
		this._line.get_graphics().lineStyle(0,16777215);
		this._line.get_graphics().drawRect(0,0,this.lineWidth,-this.lineHeight * 0.1);
		this._line.set_x(this.left);
		this._line.set_y(this.top);
		this._scene.addChild(this._line);
	}
	,open: function() {
		this.createLineBg();
		this.createNextBtn();
		this.createPreviousBtn();
		this._nextBtn.set_activate(false);
		this._previousBtn.set_activate(false);
		this.startTesting();
	}
	,__class__: gakhov.moonRover.page.TestingPage
});
gakhov.moonRover.page.WizardPage = function() {
	gakhov.moonRover.core.Page.call(this);
};
$hxClasses["gakhov.moonRover.page.WizardPage"] = gakhov.moonRover.page.WizardPage;
gakhov.moonRover.page.WizardPage.__name__ = ["gakhov","moonRover","page","WizardPage"];
gakhov.moonRover.page.WizardPage.__super__ = gakhov.moonRover.core.Page;
gakhov.moonRover.page.WizardPage.prototype = $extend(gakhov.moonRover.core.Page.prototype,{
	close: function(param) {
		var _g = 0, _g1 = this._icons;
		while(_g < _g1.length) {
			var icon = _g1[_g];
			++_g;
			icon.removeEventListener(flash.events.Event.SELECT,$bind(this,this.iconSelectHandler));
			this._scene.removeChild(icon);
			icon.destroy();
			icon = null;
		}
		this._icons.splice(0,this._icons.length);
		gakhov.moonRover.core.Page.prototype.close.call(this,param);
	}
	,iconSelectHandler: function(event) {
		var icon = event.target;
		this._model.rover.addPart(this.partType,Std.string(icon.id));
		this._nextBtn.set_activate(true);
	}
	,open: function() {
		this._model.roverBg.set_visible(true);
		this._model.rover.set_visible(true);
		var top = 30;
		var left = 10;
		var currentY = top;
		var padding = 2;
		this._icons = new Array();
		var icon;
		var _g = 1;
		while(_g < 5) {
			var i = _g++;
			var bitmapSkin = gakhov.moonRover.utils.Utils.createBitmapIconByTypeAndId(this.partType,Std.string(i),true);
			icon = new gakhov.moonRover.page.Icon();
			icon.create(bitmapSkin,i);
			icon.set_x(left);
			icon.set_y(currentY);
			currentY += icon.get_height() + padding;
			icon.addEventListener(flash.events.Event.SELECT,$bind(this,this.iconSelectHandler));
			this._icons.push(icon);
			this._scene.addChild(icon);
		}
		this.createNextBtn();
		if(this._model.rover.isPartChoose(this.partType)) this._nextBtn.set_activate(false);
		this.createPreviousBtn();
	}
	,__class__: gakhov.moonRover.page.WizardPage
});
gakhov.moonRover.page.Icon = function() {
	this.id = 0;
	this._h = 60;
	this._w = 80;
	flash.display.Sprite.call(this);
};
$hxClasses["gakhov.moonRover.page.Icon"] = gakhov.moonRover.page.Icon;
gakhov.moonRover.page.Icon.__name__ = ["gakhov","moonRover","page","Icon"];
gakhov.moonRover.page.Icon.__super__ = flash.display.Sprite;
gakhov.moonRover.page.Icon.prototype = $extend(flash.display.Sprite.prototype,{
	run: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.SELECT));
		this.mouseEnabled = true;
	}
	,clickEffect: function(event) {
		motion.Actuate.tween(event.target,0.15,{ scaleX : 0.9, scaleY : 0.9}).repeat(1).reflect().onComplete($bind(this,this.run));
		this.mouseEnabled = false;
	}
	,destroy: function() {
		this.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickEffect));
		this.get_graphics().clear();
		this.removeChild(this._bitmap);
		this._bitmap.bitmapData.dispose();
		this._bitmap = null;
	}
	,create: function(bitmap,aId) {
		this.id = aId;
		this.get_graphics().beginFill(13421772,0.2);
		this.get_graphics().drawRect(0,0,this._w,this._h);
		this.get_graphics().endFill();
		this._bitmap = bitmap;
		this._bitmap.set_x((this._w - this._bitmap.get_width()) / 2);
		this._bitmap.set_y((this._h - this._bitmap.get_height()) / 2);
		this.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickEffect));
		this.addChild(this._bitmap);
	}
	,__class__: gakhov.moonRover.page.Icon
});
gakhov.moonRover.rover = {}
gakhov.moonRover.rover.Rover = function() {
	flash.display.Sprite.call(this);
};
$hxClasses["gakhov.moonRover.rover.Rover"] = gakhov.moonRover.rover.Rover;
gakhov.moonRover.rover.Rover.__name__ = ["gakhov","moonRover","rover","Rover"];
gakhov.moonRover.rover.Rover.__super__ = flash.display.Sprite;
gakhov.moonRover.rover.Rover.prototype = $extend(flash.display.Sprite.prototype,{
	createParts: function() {
		this._parts = new haxe.ds.EnumValueMap();
		var caseItem = new gakhov.moonRover.rover.Part();
		caseItem.set_x(0);
		caseItem.set_y(0);
		this._parts.set(gakhov.moonRover.rover.PartType.CASE,caseItem);
		this.addChild(caseItem);
		var weels = new gakhov.moonRover.rover.Part();
		weels.set_x(0);
		weels.set_y(60);
		this._parts.set(gakhov.moonRover.rover.PartType.WHEELS,weels);
		this.addChild(weels);
		var antenna = new gakhov.moonRover.rover.Part();
		antenna.set_x(-5);
		antenna.set_y(-60);
		this._parts.set(gakhov.moonRover.rover.PartType.ANTENNA,antenna);
		this.addChild(antenna);
		var energy = new gakhov.moonRover.rover.Part();
		energy.set_x(38);
		energy.set_y(-50);
		this._parts.set(gakhov.moonRover.rover.PartType.ENERGY,energy);
		this.addChild(energy);
		var manus = new gakhov.moonRover.rover.Part();
		manus.set_x(-94);
		manus.set_y(5);
		this._parts.set(gakhov.moonRover.rover.PartType.MANUS,manus);
		this.addChild(manus);
		var radar = new gakhov.moonRover.rover.Part();
		radar.set_x(-55);
		radar.set_y(-40);
		this._parts.set(gakhov.moonRover.rover.PartType.RADAR,radar);
		this.addChild(radar);
		var scheme = new gakhov.moonRover.rover.Part();
		scheme.set_x(8);
		scheme.set_y(3);
		this._parts.set(gakhov.moonRover.rover.PartType.SCHEME,scheme);
		this.addChild(scheme);
		var engine = new gakhov.moonRover.rover.Part();
		engine.set_x(70);
		engine.set_y(15);
		this._parts.set(gakhov.moonRover.rover.PartType.ENGINE,engine);
		this.addChild(engine);
	}
	,isRight: function() {
		if(this._parts.get(gakhov.moonRover.rover.PartType.CASE).skinId != "1") return false;
		if(this._parts.get(gakhov.moonRover.rover.PartType.WHEELS).skinId != "2") return false;
		if(this._parts.get(gakhov.moonRover.rover.PartType.ANTENNA).skinId != "4") return false;
		if(this._parts.get(gakhov.moonRover.rover.PartType.ENERGY).skinId != "3") return false;
		if(this._parts.get(gakhov.moonRover.rover.PartType.MANUS).skinId != "1") return false;
		if(this._parts.get(gakhov.moonRover.rover.PartType.RADAR).skinId != "1") return false;
		if(this._parts.get(gakhov.moonRover.rover.PartType.SCHEME).skinId != "4") return false;
		if(this._parts.get(gakhov.moonRover.rover.PartType.ENGINE).skinId != "3") return false;
		return true;
	}
	,isPartChoose: function(partType) {
		return this._parts.get(partType).skinId == "0";
	}
	,addPart: function(partType,skinId) {
		console.log("addpart: " + Std.string(partType) + "  skinId: " + skinId);
		var skin = gakhov.moonRover.utils.Utils.createBitmapByTypeAndId(partType,skinId);
		var part = this._parts.get(partType);
		part.addSkin(skin,skinId);
	}
	,create: function() {
		this.createParts();
	}
	,__class__: gakhov.moonRover.rover.Rover
});
gakhov.moonRover.rover.PartType = $hxClasses["gakhov.moonRover.rover.PartType"] = { __ename__ : true, __constructs__ : ["CASE","WHEELS","ANTENNA","ENERGY","MANUS","RADAR","SCHEME","ENGINE"] }
gakhov.moonRover.rover.PartType.CASE = ["CASE",0];
gakhov.moonRover.rover.PartType.CASE.toString = $estr;
gakhov.moonRover.rover.PartType.CASE.__enum__ = gakhov.moonRover.rover.PartType;
gakhov.moonRover.rover.PartType.WHEELS = ["WHEELS",1];
gakhov.moonRover.rover.PartType.WHEELS.toString = $estr;
gakhov.moonRover.rover.PartType.WHEELS.__enum__ = gakhov.moonRover.rover.PartType;
gakhov.moonRover.rover.PartType.ANTENNA = ["ANTENNA",2];
gakhov.moonRover.rover.PartType.ANTENNA.toString = $estr;
gakhov.moonRover.rover.PartType.ANTENNA.__enum__ = gakhov.moonRover.rover.PartType;
gakhov.moonRover.rover.PartType.ENERGY = ["ENERGY",3];
gakhov.moonRover.rover.PartType.ENERGY.toString = $estr;
gakhov.moonRover.rover.PartType.ENERGY.__enum__ = gakhov.moonRover.rover.PartType;
gakhov.moonRover.rover.PartType.MANUS = ["MANUS",4];
gakhov.moonRover.rover.PartType.MANUS.toString = $estr;
gakhov.moonRover.rover.PartType.MANUS.__enum__ = gakhov.moonRover.rover.PartType;
gakhov.moonRover.rover.PartType.RADAR = ["RADAR",5];
gakhov.moonRover.rover.PartType.RADAR.toString = $estr;
gakhov.moonRover.rover.PartType.RADAR.__enum__ = gakhov.moonRover.rover.PartType;
gakhov.moonRover.rover.PartType.SCHEME = ["SCHEME",6];
gakhov.moonRover.rover.PartType.SCHEME.toString = $estr;
gakhov.moonRover.rover.PartType.SCHEME.__enum__ = gakhov.moonRover.rover.PartType;
gakhov.moonRover.rover.PartType.ENGINE = ["ENGINE",7];
gakhov.moonRover.rover.PartType.ENGINE.toString = $estr;
gakhov.moonRover.rover.PartType.ENGINE.__enum__ = gakhov.moonRover.rover.PartType;
gakhov.moonRover.rover.Part = function() {
	this.skinId = "0";
	flash.display.Sprite.call(this);
};
$hxClasses["gakhov.moonRover.rover.Part"] = gakhov.moonRover.rover.Part;
gakhov.moonRover.rover.Part.__name__ = ["gakhov","moonRover","rover","Part"];
gakhov.moonRover.rover.Part.__super__ = flash.display.Sprite;
gakhov.moonRover.rover.Part.prototype = $extend(flash.display.Sprite.prototype,{
	addSkin: function(aSkin,aSkinId) {
		if(this.skin != null) {
			this.removeChild(this.skin);
			this.skin = null;
		}
		this.skin = aSkin;
		this.skinId = aSkinId;
		this.skin.set_x(-this.skin.get_width() / 2);
		this.skin.set_y(-this.skin.get_height() / 2);
		this.addChild(this.skin);
	}
	,__class__: gakhov.moonRover.rover.Part
});
openfl.AssetCache = function() {
	this.enabled = true;
	this.bitmapData = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.sound = new haxe.ds.StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl.AssetCache;
openfl.AssetCache.__name__ = ["openfl","AssetCache"];
openfl.AssetCache.prototype = {
	clear: function() {
		this.bitmapData = new haxe.ds.StringMap();
		this.font = new haxe.ds.StringMap();
		this.sound = new haxe.ds.StringMap();
	}
	,__class__: openfl.AssetCache
}
openfl.Assets = function() { }
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.exists = function(id,type) {
	openfl.Assets.initialize();
	if(type == null) type = openfl.AssetType.BINARY;
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
}
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(library.isLocal(symbolName,openfl.AssetType.IMAGE)) {
				var bitmapData = library.getBitmapData(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.bitmapData.set(id,bitmapData);
				return bitmapData;
			} else console.log("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			if(library.isLocal(symbolName,openfl.AssetType.BINARY)) return library.getBytes(symbolName); else console.log("[openfl.Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) return openfl.Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(library.isLocal(symbolName,openfl.AssetType.FONT)) {
				var font = library.getFont(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.font.set(id,font);
				return font;
			} else console.log("[openfl.Assets] Font asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return openfl.Assets.libraries.get(name);
}
openfl.Assets.getMovieClip = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			if(library.isLocal(symbolName,openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName); else console.log("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getMusic = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(library.isLocal(symbolName,openfl.AssetType.MUSIC)) {
				var sound = library.getMusic(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound);
				return sound;
			} else console.log("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getPath = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else console.log("[openfl.Assets] There is no asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(library.isLocal(symbolName,openfl.AssetType.SOUND)) {
				var sound = library.getSound(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound);
				return sound;
			} else console.log("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
}
openfl.Assets.getText = function(id) {
	var bytes = openfl.Assets.getBytes(id);
	if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
}
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		openfl.Assets.registerLibrary("default",new DefaultAssetLibrary());
		openfl.Assets.initialized = true;
	}
}
openfl.Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled) {
		if(type == openfl.AssetType.IMAGE || type == null) {
			if(openfl.Assets.cache.bitmapData.exists(id)) return true;
		}
		if(type == openfl.AssetType.FONT || type == null) {
			if(openfl.Assets.cache.font.exists(id)) return true;
		}
		if(type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC || type == null) {
			if(openfl.Assets.cache.sound.exists(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
}
openfl.Assets.isValidBitmapData = function(bitmapData) {
	return true;
}
openfl.Assets.isValidSound = function(sound) {
	return true;
}
openfl.Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) {
			handler(bitmapData);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadBitmapData(symbolName,function(bitmapData) {
				openfl.Assets.cache.bitmapData.set(id,bitmapData);
				handler(bitmapData);
			}); else library.loadBitmapData(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
}
openfl.Assets.loadBytes = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			library.loadBytes(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
}
openfl.Assets.loadFont = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) {
		handler(openfl.Assets.cache.font.get(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadFont(symbolName,function(font) {
				openfl.Assets.cache.font.set(id,font);
				handler(font);
			}); else library.loadFont(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
}
openfl.Assets.loadLibrary = function(name,handler) {
	openfl.Assets.initialize();
	var data = openfl.Assets.getText("libraries/" + name + ".dat");
	if(data != null && data != "") {
		var unserializer = new haxe.Unserializer(data);
		unserializer.setResolver({ resolveEnum : openfl.Assets.resolveEnum, resolveClass : openfl.Assets.resolveClass});
		var library = unserializer.unserialize();
		openfl.Assets.libraries.set(name,library);
		library.load(handler);
	} else console.log("[openfl.Assets] There is no asset library named \"" + name + "\"");
}
openfl.Assets.loadMusic = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadMusic(symbolName,function(sound) {
				openfl.Assets.cache.sound.set(id,sound);
				handler(sound);
			}); else library.loadMusic(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
}
openfl.Assets.loadMovieClip = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			library.loadMovieClip(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
}
openfl.Assets.loadSound = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadSound(symbolName,function(sound) {
				openfl.Assets.cache.sound.set(id,sound);
				handler(sound);
			}); else library.loadSound(symbolName,handler);
			return;
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
}
openfl.Assets.loadText = function(id,handler) {
	openfl.Assets.initialize();
	var callback = function(bytes) {
		if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
	};
	openfl.Assets.loadBytes(id,callback);
}
openfl.Assets.registerLibrary = function(name,library) {
	if(openfl.Assets.libraries.exists(name)) openfl.Assets.unloadLibrary(name);
	openfl.Assets.libraries.set(name,library);
}
openfl.Assets.resolveClass = function(name) {
	return Type.resolveClass(name);
}
openfl.Assets.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	return value;
}
openfl.Assets.unloadLibrary = function(name) {
	openfl.Assets.initialize();
	var keys = openfl.Assets.cache.bitmapData.keys();
	while( keys.hasNext() ) {
		var key = keys.next();
		var libraryName = key.substring(0,key.indexOf(":"));
		var symbolName = HxOverrides.substr(key,key.indexOf(":") + 1,null);
		if(libraryName == name) openfl.Assets.cache.bitmapData.remove(key);
	}
	openfl.Assets.libraries.remove(name);
}
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : true, __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] }
openfl.AssetType.BINARY = ["BINARY",0];
openfl.AssetType.BINARY.toString = $estr;
openfl.AssetType.BINARY.__enum__ = openfl.AssetType;
openfl.AssetType.FONT = ["FONT",1];
openfl.AssetType.FONT.toString = $estr;
openfl.AssetType.FONT.__enum__ = openfl.AssetType;
openfl.AssetType.IMAGE = ["IMAGE",2];
openfl.AssetType.IMAGE.toString = $estr;
openfl.AssetType.IMAGE.__enum__ = openfl.AssetType;
openfl.AssetType.MOVIE_CLIP = ["MOVIE_CLIP",3];
openfl.AssetType.MOVIE_CLIP.toString = $estr;
openfl.AssetType.MOVIE_CLIP.__enum__ = openfl.AssetType;
openfl.AssetType.MUSIC = ["MUSIC",4];
openfl.AssetType.MUSIC.toString = $estr;
openfl.AssetType.MUSIC.__enum__ = openfl.AssetType;
openfl.AssetType.SOUND = ["SOUND",5];
openfl.AssetType.SOUND.toString = $estr;
openfl.AssetType.SOUND.__enum__ = openfl.AssetType;
openfl.AssetType.TEMPLATE = ["TEMPLATE",6];
openfl.AssetType.TEMPLATE.toString = $estr;
openfl.AssetType.TEMPLATE.__enum__ = openfl.AssetType;
openfl.AssetType.TEXT = ["TEXT",7];
openfl.AssetType.TEXT.toString = $estr;
openfl.AssetType.TEXT.__enum__ = openfl.AssetType;
gakhov.moonRover.utils = {}
gakhov.moonRover.utils.Utils = function() {
};
$hxClasses["gakhov.moonRover.utils.Utils"] = gakhov.moonRover.utils.Utils;
gakhov.moonRover.utils.Utils.__name__ = ["gakhov","moonRover","utils","Utils"];
gakhov.moonRover.utils.Utils.createBitmapDataByAssetName = function(assetName,cache,aScale,w,h) {
	if(h == null) h = 0;
	if(w == null) w = 0;
	if(aScale == null) aScale = 1;
	if(cache == null) cache = false;
	var bitmapData = openfl.Assets.getBitmapData(gakhov.moonRover.core.Global.getAssetsPath() + assetName,cache);
	var scale = aScale;
	scale = gakhov.moonRover.utils.Utils.measure(w,h,bitmapData);
	var matrix = new flash.geom.Matrix();
	matrix.scale(scale,scale);
	var smallBMD = new flash.display.BitmapData((bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0) * scale | 0,(bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0) * scale | 0,true,0);
	smallBMD.draw(bitmapData,matrix,null,null,null,true);
	return smallBMD;
}
gakhov.moonRover.utils.Utils.measure = function(w,h,bitmap) {
	if(w == 0 && h == 0) return 1;
	var dw = Math.abs(w - (bitmap.___textureBuffer != null?bitmap.___textureBuffer.width:0));
	var dh = Math.abs(h - (bitmap.___textureBuffer != null?bitmap.___textureBuffer.height:0));
	if(dw > (bitmap.___textureBuffer != null?bitmap.___textureBuffer.width:0)) return w / (bitmap.___textureBuffer != null?bitmap.___textureBuffer.width:0); else return h / (bitmap.___textureBuffer != null?bitmap.___textureBuffer.height:0);
}
gakhov.moonRover.utils.Utils.createBitmapByAssetName = function(assetName,cache,scale,w,h) {
	if(h == null) h = 0;
	if(w == null) w = 0;
	if(scale == null) scale = 1;
	if(cache == null) cache = false;
	var bitmap = new flash.display.Bitmap(gakhov.moonRover.utils.Utils.createBitmapDataByAssetName(assetName,cache,scale,w,h),flash.display.PixelSnapping.AUTO,true);
	return bitmap;
}
gakhov.moonRover.utils.Utils.createBitmapByTypeAndId = function(partType,id,cache,scale,w,h) {
	if(h == null) h = 0;
	if(w == null) w = 0;
	if(scale == null) scale = 1;
	if(cache == null) cache = false;
	var partName = Std.string(partType).toLowerCase();
	var skinPath = partName + "/" + partName + id + ".png";
	return gakhov.moonRover.utils.Utils.createBitmapByAssetName(skinPath,cache,scale,w,h);
}
gakhov.moonRover.utils.Utils.createBitmapIconByTypeAndId = function(partType,id,cache,scale,w,h) {
	if(h == null) h = 0;
	if(w == null) w = 0;
	if(scale == null) scale = 1;
	if(cache == null) cache = false;
	var partName = Std.string(partType).toLowerCase();
	var skinPath = "icon/" + partName + "/" + partName + id + ".png";
	return gakhov.moonRover.utils.Utils.createBitmapByAssetName(skinPath,cache,scale,w,h);
}
gakhov.moonRover.utils.Utils.createSpriteByAssetName = function(assetName,cache,scale,w,h) {
	if(h == null) h = 0;
	if(w == null) w = 0;
	if(scale == null) scale = 1;
	if(cache == null) cache = false;
	var bitmap = gakhov.moonRover.utils.Utils.createBitmapByAssetName(assetName,cache,scale);
	var sprite;
	sprite = new flash.display.Sprite();
	sprite.addChild(bitmap);
	return sprite;
}
gakhov.moonRover.utils.Utils.createTextField = function(fontSize,textColor) {
	var font = openfl.Assets.getFont("BoldFont");
	var fontSize1 = gakhov.moonRover.core.Global.get_scale() * fontSize | 0;
	var format = new flash.text.TextFormat(font.fontName,fontSize1,textColor);
	var textField = new flash.text.TextField();
	textField.set_defaultTextFormat(format);
	textField.selectable = false;
	textField.embedFonts = true;
	textField.set_autoSize("LEFT");
	textField.multiline = true;
	textField.set_wordWrap(true);
	textField.antiAliasType = flash.text.AntiAliasType.ADVANCED;
	return textField;
}
gakhov.moonRover.utils.Utils.createLabel = function(fontSize,textColor) {
	var fontSize1 = gakhov.moonRover.core.Global.get_scale() * fontSize | 0;
	var format = new flash.text.TextFormat("icelandFont");
	var textField = new flash.text.TextField();
	textField.set_defaultTextFormat(format);
	textField.selectable = false;
	textField.embedFonts = true;
	textField.set_autoSize("LEFT");
	textField.multiline = false;
	textField.set_wordWrap(false);
	textField.antiAliasType = flash.text.AntiAliasType.ADVANCED;
	return textField;
}
gakhov.moonRover.utils.Utils.mixAA = function(array) {
	var item;
	var _g1 = 0, _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		item = array[i];
		var randomIndex = Std.random(array.length);
		array[i] = array[randomIndex];
		array[randomIndex] = item;
	}
	return array;
}
gakhov.moonRover.utils.Utils.colorToGray = function(sprite) {
	var grayBmp = new flash.display.BitmapData(sprite.get_width() | 0,sprite.get_height() | 0,true,0);
	grayBmp.draw(sprite);
	var rc = 1 / 3;
	var gc = 1 / 3;
	var bc = 1 / 3;
	var grayscaleFilter = new flash.filters.ColorMatrixFilter([rc,gc,bc,0,0,rc,gc,bc,0,0,rc,gc,bc,0,0,0,0,0,1,0]);
	grayBmp.applyFilter(grayBmp,grayBmp.rect,new flash.geom.Point(),grayscaleFilter);
	return new flash.display.Bitmap(grayBmp);
}
gakhov.moonRover.utils.Utils.prototype = {
	__class__: gakhov.moonRover.utils.Utils
}
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.CallStack = function() { }
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
}
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
}
haxe.CallStack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = $e[2];
		b.b += "module ";
		b.b += Std.string(m);
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += Std.string(file);
		b.b += " line ";
		b.b += Std.string(line);
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b += Std.string(cname);
		b.b += ".";
		b.b += Std.string(meth);
		break;
	case 4:
		var n = $e[2];
		b.b += "local function #";
		b.b += Std.string(n);
		break;
	}
}
haxe.Resource = function() { }
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.listNames = function() {
	var names = new Array();
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	return names;
}
haxe.Resource.getString = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.Unserializer.run(x.data);
			return b.toString();
		}
	}
	return null;
}
haxe._Template = {}
haxe._Template.TemplateExpr = $hxClasses["haxe._Template.TemplateExpr"] = { __ename__ : true, __constructs__ : ["OpVar","OpExpr","OpIf","OpStr","OpBlock","OpForeach","OpMacro"] }
haxe._Template.TemplateExpr.OpVar = function(v) { var $x = ["OpVar",0,v]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpExpr = function(expr) { var $x = ["OpExpr",1,expr]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpIf = function(expr,eif,eelse) { var $x = ["OpIf",2,expr,eif,eelse]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpStr = function(str) { var $x = ["OpStr",3,str]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpBlock = function(l) { var $x = ["OpBlock",4,l]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpForeach = function(expr,loop) { var $x = ["OpForeach",5,expr,loop]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpMacro = function(name,params) { var $x = ["OpMacro",6,name,params]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe.Template = function(str) {
	var tokens = this.parseTokens(str);
	this.expr = this.parseBlock(tokens);
	if(!tokens.isEmpty()) throw "Unexpected '" + Std.string(tokens.first().s) + "'";
};
$hxClasses["haxe.Template"] = haxe.Template;
haxe.Template.__name__ = ["haxe","Template"];
haxe.Template.prototype = {
	run: function(e) {
		var $e = (e);
		switch( $e[1] ) {
		case 0:
			var v = $e[2];
			this.buf.b += Std.string(Std.string(this.resolve(v)));
			break;
		case 1:
			var e1 = $e[2];
			this.buf.b += Std.string(Std.string(e1()));
			break;
		case 2:
			var eelse = $e[4], eif = $e[3], e1 = $e[2];
			var v = e1();
			if(v == null || v == false) {
				if(eelse != null) this.run(eelse);
			} else this.run(eif);
			break;
		case 3:
			var str = $e[2];
			this.buf.b += Std.string(str);
			break;
		case 4:
			var l = $e[2];
			var $it0 = l.iterator();
			while( $it0.hasNext() ) {
				var e1 = $it0.next();
				this.run(e1);
			}
			break;
		case 5:
			var loop = $e[3], e1 = $e[2];
			var v = e1();
			try {
				var x = $iterator(v)();
				if(x.hasNext == null) throw null;
				v = x;
			} catch( e2 ) {
				try {
					if(v.hasNext == null) throw null;
				} catch( e3 ) {
					throw "Cannot iter on " + Std.string(v);
				}
			}
			this.stack.push(this.context);
			var v1 = v;
			while( v1.hasNext() ) {
				var ctx = v1.next();
				this.context = ctx;
				this.run(loop);
			}
			this.context = this.stack.pop();
			break;
		case 6:
			var params = $e[3], m = $e[2];
			var v = Reflect.field(this.macros,m);
			var pl = new Array();
			var old = this.buf;
			pl.push($bind(this,this.resolve));
			var $it1 = params.iterator();
			while( $it1.hasNext() ) {
				var p = $it1.next();
				var $e = (p);
				switch( $e[1] ) {
				case 0:
					var v1 = $e[2];
					pl.push(this.resolve(v1));
					break;
				default:
					this.buf = new StringBuf();
					this.run(p);
					pl.push(this.buf.b);
				}
			}
			this.buf = old;
			try {
				this.buf.b += Std.string(Std.string(v.apply(this.macros,pl)));
			} catch( e1 ) {
				var plstr = (function($this) {
					var $r;
					try {
						$r = pl.join(",");
					} catch( e2 ) {
						$r = "???";
					}
					return $r;
				}(this));
				var msg = "Macro call " + m + "(" + plstr + ") failed (" + Std.string(e1) + ")";
				throw msg;
			}
			break;
		}
	}
	,makeExpr2: function(l) {
		var p = l.pop();
		if(p == null) throw "<eof>";
		if(p.s) return this.makeConst(p.p);
		switch(p.p) {
		case "(":
			var e1 = this.makeExpr(l);
			var p1 = l.pop();
			if(p1 == null || p1.s) throw p1.p;
			if(p1.p == ")") return e1;
			var e2 = this.makeExpr(l);
			var p2 = l.pop();
			if(p2 == null || p2.p != ")") throw p2.p;
			return (function($this) {
				var $r;
				switch(p1.p) {
				case "+":
					$r = function() {
						return e1() + e2();
					};
					break;
				case "-":
					$r = function() {
						return e1() - e2();
					};
					break;
				case "*":
					$r = function() {
						return e1() * e2();
					};
					break;
				case "/":
					$r = function() {
						return e1() / e2();
					};
					break;
				case ">":
					$r = function() {
						return e1() > e2();
					};
					break;
				case "<":
					$r = function() {
						return e1() < e2();
					};
					break;
				case ">=":
					$r = function() {
						return e1() >= e2();
					};
					break;
				case "<=":
					$r = function() {
						return e1() <= e2();
					};
					break;
				case "==":
					$r = function() {
						return e1() == e2();
					};
					break;
				case "!=":
					$r = function() {
						return e1() != e2();
					};
					break;
				case "&&":
					$r = function() {
						return e1() && e2();
					};
					break;
				case "||":
					$r = function() {
						return e1() || e2();
					};
					break;
				default:
					$r = (function($this) {
						var $r;
						throw "Unknown operation " + p1.p;
						return $r;
					}($this));
				}
				return $r;
			}(this));
		case "!":
			var e = this.makeExpr(l);
			return function() {
				var v = e();
				return v == null || v == false;
			};
		case "-":
			var e3 = this.makeExpr(l);
			return function() {
				return -e3();
			};
		}
		throw p.p;
	}
	,makeExpr: function(l) {
		return this.makePath(this.makeExpr2(l),l);
	}
	,makePath: function(e,l) {
		var p = l.first();
		if(p == null || p.p != ".") return e;
		l.pop();
		var field = l.pop();
		if(field == null || !field.s) throw field.p;
		var f = field.p;
		haxe.Template.expr_trim.match(f);
		f = haxe.Template.expr_trim.matched(1);
		return this.makePath(function() {
			return Reflect.field(e(),f);
		},l);
	}
	,makeConst: function(v) {
		haxe.Template.expr_trim.match(v);
		v = haxe.Template.expr_trim.matched(1);
		if(HxOverrides.cca(v,0) == 34) {
			var str = HxOverrides.substr(v,1,v.length - 2);
			return function() {
				return str;
			};
		}
		if(haxe.Template.expr_int.match(v)) {
			var i = Std.parseInt(v);
			return function() {
				return i;
			};
		}
		if(haxe.Template.expr_float.match(v)) {
			var f = Std.parseFloat(v);
			return function() {
				return f;
			};
		}
		var me = this;
		return function() {
			return me.resolve(v);
		};
	}
	,parseExpr: function(data) {
		var l = new List();
		var expr = data;
		while(haxe.Template.expr_splitter.match(data)) {
			var p = haxe.Template.expr_splitter.matchedPos();
			var k = p.pos + p.len;
			if(p.pos != 0) l.add({ p : HxOverrides.substr(data,0,p.pos), s : true});
			var p1 = haxe.Template.expr_splitter.matched(0);
			l.add({ p : p1, s : p1.indexOf("\"") >= 0});
			data = haxe.Template.expr_splitter.matchedRight();
		}
		if(data.length != 0) l.add({ p : data, s : true});
		var e;
		try {
			e = this.makeExpr(l);
			if(!l.isEmpty()) throw l.first().p;
		} catch( s ) {
			if( js.Boot.__instanceof(s,String) ) {
				throw "Unexpected '" + s + "' in " + expr;
			} else throw(s);
		}
		return function() {
			try {
				return e();
			} catch( exc ) {
				throw "Error : " + Std.string(exc) + " in " + expr;
			}
		};
	}
	,parse: function(tokens) {
		var t = tokens.pop();
		var p = t.p;
		if(t.s) return haxe._Template.TemplateExpr.OpStr(p);
		if(t.l != null) {
			var pe = new List();
			var _g = 0, _g1 = t.l;
			while(_g < _g1.length) {
				var p1 = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p1)));
			}
			return haxe._Template.TemplateExpr.OpMacro(p,pe);
		}
		if(HxOverrides.substr(p,0,3) == "if ") {
			p = HxOverrides.substr(p,3,p.length - 3);
			var e = this.parseExpr(p);
			var eif = this.parseBlock(tokens);
			var t1 = tokens.first();
			var eelse;
			if(t1 == null) throw "Unclosed 'if'";
			if(t1.p == "end") {
				tokens.pop();
				eelse = null;
			} else if(t1.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t1 = tokens.pop();
				if(t1 == null || t1.p != "end") throw "Unclosed 'else'";
			} else {
				t1.p = HxOverrides.substr(t1.p,4,t1.p.length - 4);
				eelse = this.parse(tokens);
			}
			return haxe._Template.TemplateExpr.OpIf(e,eif,eelse);
		}
		if(HxOverrides.substr(p,0,8) == "foreach ") {
			p = HxOverrides.substr(p,8,p.length - 8);
			var e = this.parseExpr(p);
			var efor = this.parseBlock(tokens);
			var t1 = tokens.pop();
			if(t1 == null || t1.p != "end") throw "Unclosed 'foreach'";
			return haxe._Template.TemplateExpr.OpForeach(e,efor);
		}
		if(haxe.Template.expr_splitter.match(p)) return haxe._Template.TemplateExpr.OpExpr(this.parseExpr(p));
		return haxe._Template.TemplateExpr.OpVar(p);
	}
	,parseBlock: function(tokens) {
		var l = new List();
		while(true) {
			var t = tokens.first();
			if(t == null) break;
			if(!t.s && (t.p == "end" || t.p == "else" || HxOverrides.substr(t.p,0,7) == "elseif ")) break;
			l.add(this.parse(tokens));
		}
		if(l.length == 1) return l.first();
		return haxe._Template.TemplateExpr.OpBlock(l);
	}
	,parseTokens: function(data) {
		var tokens = new List();
		while(haxe.Template.splitter.match(data)) {
			var p = haxe.Template.splitter.matchedPos();
			if(p.pos > 0) tokens.add({ p : HxOverrides.substr(data,0,p.pos), s : true, l : null});
			if(HxOverrides.cca(data,p.pos) == 58) {
				tokens.add({ p : HxOverrides.substr(data,p.pos + 2,p.len - 4), s : false, l : null});
				data = haxe.Template.splitter.matchedRight();
				continue;
			}
			var parp = p.pos + p.len;
			var npar = 1;
			while(npar > 0) {
				var c = HxOverrides.cca(data,parp);
				if(c == 40) npar++; else if(c == 41) npar--; else if(c == null) throw "Unclosed macro parenthesis";
				parp++;
			}
			var params = HxOverrides.substr(data,p.pos + p.len,parp - (p.pos + p.len) - 1).split(",");
			tokens.add({ p : haxe.Template.splitter.matched(2), s : false, l : params});
			data = HxOverrides.substr(data,parp,data.length - parp);
		}
		if(data.length > 0) tokens.add({ p : data, s : true, l : null});
		return tokens;
	}
	,resolve: function(v) {
		if(Reflect.hasField(this.context,v)) return Reflect.field(this.context,v);
		var $it0 = this.stack.iterator();
		while( $it0.hasNext() ) {
			var ctx = $it0.next();
			if(Reflect.hasField(ctx,v)) return Reflect.field(ctx,v);
		}
		if(v == "__current__") return this.context;
		return Reflect.field(haxe.Template.globals,v);
	}
	,execute: function(context,macros) {
		this.macros = macros == null?{ }:macros;
		this.context = context;
		this.stack = new List();
		this.buf = new StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	,__class__: haxe.Template
}
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype = {
	unserialize: function() {
		var _g = this.buf.charCodeAt(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = StringTools.urlDecode(s);
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) throw "Invalid reference";
			return this.cache[n];
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
			return this.scache[n];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl)[index];
			if(tag == null) throw "Unknown enum index " + name + "@" + index;
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h = new haxe.ds.IntMap();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				h.set(i,this.unserialize());
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) throw "Invalid IntMap format";
			return h;
		case 77:
			var h = new haxe.ds.ObjectMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 118:
			var d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i + (len - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) throw "Invalid custom data";
			return o;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!js.Boot.__instanceof(k,String)) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_) {
			return null;
		}}; else this.resolver = r;
	}
	,__class__: haxe.Unserializer
}
haxe.ds = {}
haxe.ds.BalancedTree = function() {
};
$hxClasses["haxe.ds.BalancedTree"] = haxe.ds.BalancedTree;
haxe.ds.BalancedTree.__name__ = ["haxe","ds","BalancedTree"];
haxe.ds.BalancedTree.prototype = {
	compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
	,balance: function(l,k,v,r) {
		var hl = l == null?0:l._height;
		var hr = r == null?0:r._height;
		return hl > hr + 2?(function($this) {
			var $r;
			var _this = l.left;
			$r = _this == null?0:_this._height;
			return $r;
		}(this)) >= (function($this) {
			var $r;
			var _this = l.right;
			$r = _this == null?0:_this._height;
			return $r;
		}(this))?new haxe.ds.TreeNode(l.left,l.key,l.value,new haxe.ds.TreeNode(l.right,k,v,r)):new haxe.ds.TreeNode(new haxe.ds.TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe.ds.TreeNode(l.right.right,k,v,r)):hr > hl + 2?(function($this) {
			var $r;
			var _this = r.right;
			$r = _this == null?0:_this._height;
			return $r;
		}(this)) > (function($this) {
			var $r;
			var _this = r.left;
			$r = _this == null?0:_this._height;
			return $r;
		}(this))?new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left),r.key,r.value,r.right):new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe.ds.TreeNode(r.left.right,r.key,r.value,r.right)):new haxe.ds.TreeNode(l,k,v,r,(hl > hr?hl:hr) + 1);
	}
	,setLoop: function(k,v,node) {
		if(node == null) return new haxe.ds.TreeNode(null,k,v,null);
		var c = this.compare(k,node.key);
		return c == 0?new haxe.ds.TreeNode(node.left,k,v,node.right,node == null?0:node._height):c < 0?(function($this) {
			var $r;
			var nl = $this.setLoop(k,v,node.left);
			$r = $this.balance(nl,node.key,node.value,node.right);
			return $r;
		}(this)):(function($this) {
			var $r;
			var nr = $this.setLoop(k,v,node.right);
			$r = $this.balance(node.left,node.key,node.value,nr);
			return $r;
		}(this));
	}
	,get: function(k) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(k,node.key);
			if(c == 0) return node.value;
			if(c < 0) node = node.left; else node = node.right;
		}
		return null;
	}
	,set: function(k,v) {
		this.root = this.setLoop(k,v,this.root);
	}
	,__class__: haxe.ds.BalancedTree
}
haxe.ds.TreeNode = function(l,k,v,r,h) {
	if(h == null) h = -1;
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) this._height = ((function($this) {
		var $r;
		var _this = $this.left;
		$r = _this == null?0:_this._height;
		return $r;
	}(this)) > (function($this) {
		var $r;
		var _this = $this.right;
		$r = _this == null?0:_this._height;
		return $r;
	}(this))?(function($this) {
		var $r;
		var _this = $this.left;
		$r = _this == null?0:_this._height;
		return $r;
	}(this)):(function($this) {
		var $r;
		var _this = $this.right;
		$r = _this == null?0:_this._height;
		return $r;
	}(this))) + 1; else this._height = h;
};
$hxClasses["haxe.ds.TreeNode"] = haxe.ds.TreeNode;
haxe.ds.TreeNode.__name__ = ["haxe","ds","TreeNode"];
haxe.ds.TreeNode.prototype = {
	__class__: haxe.ds.TreeNode
}
haxe.ds.EnumValueMap = function() {
	haxe.ds.BalancedTree.call(this);
};
$hxClasses["haxe.ds.EnumValueMap"] = haxe.ds.EnumValueMap;
haxe.ds.EnumValueMap.__name__ = ["haxe","ds","EnumValueMap"];
haxe.ds.EnumValueMap.__interfaces__ = [IMap];
haxe.ds.EnumValueMap.__super__ = haxe.ds.BalancedTree;
haxe.ds.EnumValueMap.prototype = $extend(haxe.ds.BalancedTree.prototype,{
	compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) return ld;
		var _g1 = 0, _g = a1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var v1 = a1[i], v2 = a2[i];
			var d = Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)?this.compare(v1,v2):Reflect.compare(v1,v2);
			if(d != 0) return d;
		}
		return 0;
	}
	,compare: function(k1,k2) {
		var d = k1[1] - k2[1];
		if(d != 0) return d;
		var p1 = k1.slice(2);
		var p2 = k2.slice(2);
		if(p1.length == 0 && p2.length == 0) return 0;
		return this.compareArgs(p1,p2);
	}
	,__class__: haxe.ds.EnumValueMap
});
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,__class__: haxe.ds.IntMap
}
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		var id = key.__id__;
		if(!this.h.hasOwnProperty(id)) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key.__id__);
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,set: function(key,value) {
		var id = key.__id__ != null?key.__id__:key.__id__ = ++haxe.ds.ObjectMap.count;
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,__class__: haxe.ds.ObjectMap
}
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,__class__: haxe.ds.StringMap
}
haxe.io = {}
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.prototype = {
	toString: function() {
		return this.readString(0,this.length);
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,__class__: haxe.io.Bytes
}
haxe.io.Eof = function() { }
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
}
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
var js = {}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					if(cl == Array) return o.__enum__ == null;
					return true;
				}
				if(js.Boot.__interfLoop(o.__class__,cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Browser = function() { }
$hxClasses["js.Browser"] = js.Browser;
js.Browser.__name__ = ["js","Browser"];
var motion = {}
motion.actuators = {}
motion.actuators.IGenericActuator = function() { }
$hxClasses["motion.actuators.IGenericActuator"] = motion.actuators.IGenericActuator;
motion.actuators.IGenericActuator.__name__ = ["motion","actuators","IGenericActuator"];
motion.actuators.IGenericActuator.prototype = {
	__class__: motion.actuators.IGenericActuator
}
motion.actuators.GenericActuator = function(target,duration,properties) {
	this._autoVisible = true;
	this._delay = 0;
	this._reflect = false;
	this._repeat = 0;
	this._reverse = false;
	this._smartRotation = false;
	this._snapping = false;
	this.special = false;
	this.target = target;
	this.properties = properties;
	this.duration = duration;
	this._ease = motion.Actuate.defaultEase;
};
$hxClasses["motion.actuators.GenericActuator"] = motion.actuators.GenericActuator;
motion.actuators.GenericActuator.__name__ = ["motion","actuators","GenericActuator"];
motion.actuators.GenericActuator.__interfaces__ = [motion.actuators.IGenericActuator];
motion.actuators.GenericActuator.prototype = {
	stop: function(properties,complete,sendEvent) {
	}
	,snapping: function(value) {
		if(value == null) value = true;
		this._snapping = value;
		this.special = true;
		return this;
	}
	,smartRotation: function(value) {
		if(value == null) value = true;
		this._smartRotation = value;
		this.special = true;
		return this;
	}
	,reverse: function(value) {
		if(value == null) value = true;
		this._reverse = value;
		this.special = true;
		return this;
	}
	,resume: function() {
	}
	,repeat: function(times) {
		if(times == null) times = -1;
		this._repeat = times;
		return this;
	}
	,reflect: function(value) {
		if(value == null) value = true;
		this._reflect = value;
		this.special = true;
		return this;
	}
	,pause: function() {
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		return this;
	}
	,onRepeat: function(handler,parameters) {
		this._onRepeat = handler;
		if(parameters == null) this._onRepeatParams = []; else this._onRepeatParams = parameters;
		return this;
	}
	,onComplete: function(handler,parameters) {
		this._onComplete = handler;
		if(parameters == null) this._onCompleteParams = []; else this._onCompleteParams = parameters;
		if(this.duration == 0) this.complete();
		return this;
	}
	,move: function() {
	}
	,ease: function(easing) {
		this._ease = easing;
		return this;
	}
	,delay: function(duration) {
		this._delay = duration;
		return this;
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		if(sendEvent) {
			this.change();
			if(this._onComplete != null) this.callMethod(this._onComplete,this._onCompleteParams);
		}
		motion.Actuate.unload(this);
	}
	,change: function() {
		if(this._onUpdate != null) this.callMethod(this._onUpdate,this._onUpdateParams);
	}
	,callMethod: function(method,params) {
		if(params == null) params = [];
		return method.apply(method,params);
	}
	,autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		return this;
	}
	,apply: function() {
		var _g = 0, _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(Reflect.hasField(this.target,i)) this.target[i] = Reflect.field(this.properties,i); else Reflect.setProperty(this.target,i,Reflect.field(this.properties,i));
		}
	}
	,__class__: motion.actuators.GenericActuator
}
motion.actuators.SimpleActuator = function(target,duration,properties) {
	this.active = true;
	this.propertyDetails = new Array();
	this.sendChange = false;
	this.paused = false;
	this.cacheVisible = false;
	this.initialized = false;
	this.setVisible = false;
	this.toggleVisible = false;
	this.startTime = flash.Lib.getTimer() / 1000;
	motion.actuators.GenericActuator.call(this,target,duration,properties);
	if(!motion.actuators.SimpleActuator.addedEvent) {
		motion.actuators.SimpleActuator.addedEvent = true;
		flash.Lib.get_current().get_stage().addEventListener(flash.events.Event.ENTER_FRAME,motion.actuators.SimpleActuator.stage_onEnterFrame);
	}
};
$hxClasses["motion.actuators.SimpleActuator"] = motion.actuators.SimpleActuator;
motion.actuators.SimpleActuator.__name__ = ["motion","actuators","SimpleActuator"];
motion.actuators.SimpleActuator.stage_onEnterFrame = function(event) {
	var currentTime = flash.Lib.getTimer() / 1000;
	var actuator;
	var j = 0;
	var cleanup = false;
	var _g1 = 0, _g = motion.actuators.SimpleActuator.actuatorsLength;
	while(_g1 < _g) {
		var i = _g1++;
		actuator = motion.actuators.SimpleActuator.actuators[j];
		if(actuator.active) {
			if(currentTime > actuator.timeOffset) actuator.update(currentTime);
			j++;
		} else {
			motion.actuators.SimpleActuator.actuators.splice(j,1);
			--motion.actuators.SimpleActuator.actuatorsLength;
		}
	}
}
motion.actuators.SimpleActuator.__super__ = motion.actuators.GenericActuator;
motion.actuators.SimpleActuator.prototype = $extend(motion.actuators.GenericActuator.prototype,{
	update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var i;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g1 = 0, _g = this.detailsLength;
				while(_g1 < _g) {
					var i1 = _g1++;
					details = this.propertyDetails[i1];
					this.setProperty(details,details.start + details.change * easing);
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g1 = 0, _g = this.detailsLength;
				while(_g1 < _g) {
					var i1 = _g1++;
					details = this.propertyDetails[i1];
					if(this._smartRotation && (details.propertyName == "rotation" || details.propertyName == "rotationX" || details.propertyName == "rotationY" || details.propertyName == "rotationZ")) {
						var rotation = details.change % 360;
						if(rotation > 180) rotation -= 360; else if(rotation < -180) rotation += 360;
						endValue = details.start + rotation * easing;
					} else endValue = details.start + details.change * easing;
					if(!this._snapping) {
						if(details.isField) details.target[details.propertyName] = endValue; else Reflect.setProperty(details.target,details.propertyName,endValue);
					} else this.setProperty(details,Math.round(endValue));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._onRepeat != null) this.callMethod(this._onRepeat,this._onRepeatParams);
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,stop: function(properties,complete,sendEvent) {
		if(this.active) {
			if(properties == null) {
				this.active = false;
				if(complete) this.apply();
				this.complete(sendEvent);
				return;
			}
			var _g = 0, _g1 = Reflect.fields(properties);
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				if(Reflect.hasField(this.properties,i)) {
					this.active = false;
					if(complete) this.apply();
					this.complete(sendEvent);
					return;
				}
			}
		}
	}
	,setProperty: function(details,value) {
		if(details.isField) details.target[details.propertyName] = value; else Reflect.setProperty(details.target,details.propertyName,value);
	}
	,setField: function(target,propertyName,value) {
		if(Reflect.hasField(target,propertyName)) target[propertyName] = value; else Reflect.setProperty(target,propertyName,value);
	}
	,resume: function() {
		if(this.paused) {
			this.paused = false;
			this.timeOffset += (flash.Lib.getTimer() - this.pauseTime) / 1000;
		}
	}
	,pause: function() {
		this.paused = true;
		this.pauseTime = flash.Lib.getTimer();
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		this.sendChange = true;
		return this;
	}
	,move: function() {
		this.toggleVisible = Reflect.hasField(this.properties,"alpha") && js.Boot.__instanceof(this.target,flash.display.DisplayObject);
		if(this.toggleVisible && this.properties.alpha != 0 && !this.getField(this.target,"visible")) {
			this.setVisible = true;
			this.cacheVisible = this.getField(this.target,"visible");
			this.setField(this.target,"visible",true);
		}
		this.timeOffset = this.startTime;
		motion.actuators.SimpleActuator.actuators.push(this);
		++motion.actuators.SimpleActuator.actuatorsLength;
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0, _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var isField = true;
			if(Reflect.hasField(this.target,i)) start = Reflect.field(this.target,i); else {
				isField = false;
				start = Reflect.getProperty(this.target,i);
			}
			if(js.Boot.__instanceof(start,Float)) {
				details = new motion.actuators.PropertyDetails(this.target,i,start,this.getField(this.properties,i) - start,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,getField: function(target,propertyName) {
		var value = null;
		if(Reflect.hasField(target,propertyName)) value = Reflect.field(target,propertyName); else value = Reflect.getProperty(target,propertyName);
		return value;
	}
	,delay: function(duration) {
		this._delay = duration;
		this.timeOffset = this.startTime + duration;
		return this;
	}
	,autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		if(!value) {
			this.toggleVisible = false;
			if(this.setVisible) this.setField(this.target,"visible",this.cacheVisible);
		}
		return this;
	}
	,__class__: motion.actuators.SimpleActuator
});
motion.easing = {}
motion.easing.Expo = function() { }
$hxClasses["motion.easing.Expo"] = motion.easing.Expo;
motion.easing.Expo.__name__ = ["motion","easing","Expo"];
motion.easing.Expo.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Expo.get_easeIn = function() {
	return new motion.easing.ExpoEaseIn();
}
motion.easing.Expo.get_easeInOut = function() {
	return new motion.easing.ExpoEaseInOut();
}
motion.easing.Expo.get_easeOut = function() {
	return new motion.easing.ExpoEaseOut();
}
motion.easing.IEasing = function() { }
$hxClasses["motion.easing.IEasing"] = motion.easing.IEasing;
motion.easing.IEasing.__name__ = ["motion","easing","IEasing"];
motion.easing.IEasing.prototype = {
	__class__: motion.easing.IEasing
}
motion.easing.ExpoEaseOut = function() {
};
$hxClasses["motion.easing.ExpoEaseOut"] = motion.easing.ExpoEaseOut;
motion.easing.ExpoEaseOut.__name__ = ["motion","easing","ExpoEaseOut"];
motion.easing.ExpoEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseOut.prototype = {
	ease: function(t,b,c,d) {
		return t == d?b + c:c * (1 - Math.pow(2,-10 * t / d)) + b;
	}
	,calculate: function(k) {
		return k == 1?1:1 - Math.pow(2,-10 * k);
	}
	,__class__: motion.easing.ExpoEaseOut
}
motion.Actuate = function() { }
$hxClasses["motion.Actuate"] = motion.Actuate;
motion.Actuate.__name__ = ["motion","Actuate"];
motion.Actuate.apply = function(target,properties,customActuator) {
	motion.Actuate.stop(target,properties);
	if(customActuator == null) customActuator = motion.Actuate.defaultActuator;
	var actuator = Type.createInstance(customActuator,[target,0,properties]);
	actuator.apply();
	return actuator;
}
motion.Actuate.effects = function(target,duration,overwrite) {
	if(overwrite == null) overwrite = true;
	return new motion._Actuate.EffectsOptions(target,duration,overwrite);
}
motion.Actuate.getLibrary = function(target,allowCreation) {
	if(allowCreation == null) allowCreation = true;
	if(!motion.Actuate.targetLibraries.exists(target) && allowCreation) motion.Actuate.targetLibraries.set(target,new Array());
	return motion.Actuate.targetLibraries.get(target);
}
motion.Actuate.motionPath = function(target,duration,properties,overwrite) {
	if(overwrite == null) overwrite = true;
	return motion.Actuate.tween(target,duration,properties,overwrite,motion.actuators.MotionPathActuator);
}
motion.Actuate.pause = function(target) {
	if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).pause(); else {
		var library = motion.Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator = library[_g];
				++_g;
				actuator.pause();
			}
		}
	}
}
motion.Actuate.pauseAll = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.pause();
		}
	}
}
motion.Actuate.reset = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var i = library.length - 1;
		while(i >= 0) {
			library[i].stop(null,false,false);
			i--;
		}
	}
	motion.Actuate.targetLibraries = new haxe.ds.ObjectMap();
}
motion.Actuate.resume = function(target) {
	if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).resume(); else {
		var library = motion.Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator = library[_g];
				++_g;
				actuator.resume();
			}
		}
	}
}
motion.Actuate.resumeAll = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.resume();
		}
	}
}
motion.Actuate.stop = function(target,properties,complete,sendEvent) {
	if(sendEvent == null) sendEvent = true;
	if(complete == null) complete = false;
	if(target != null) {
		if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).stop(null,complete,sendEvent); else {
			var library = motion.Actuate.getLibrary(target,false);
			if(library != null) {
				if(js.Boot.__instanceof(properties,String)) {
					var temp = { };
					Reflect.setField(temp,properties,null);
					properties = temp;
				} else if(js.Boot.__instanceof(properties,Array)) {
					var temp = { };
					var _g = 0, _g1 = js.Boot.__cast(properties , Array);
					while(_g < _g1.length) {
						var property = _g1[_g];
						++_g;
						Reflect.setField(temp,property,null);
					}
					properties = temp;
				}
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(properties,complete,sendEvent);
					i--;
				}
			}
		}
	}
}
motion.Actuate.timer = function(duration,customActuator) {
	return motion.Actuate.tween(new motion._Actuate.TweenTimer(0),duration,new motion._Actuate.TweenTimer(1),false,customActuator);
}
motion.Actuate.transform = function(target,duration,overwrite) {
	if(overwrite == null) overwrite = true;
	if(duration == null) duration = 0;
	return new motion._Actuate.TransformOptions(target,duration,overwrite);
}
motion.Actuate.tween = function(target,duration,properties,overwrite,customActuator) {
	if(overwrite == null) overwrite = true;
	if(target != null) {
		if(duration > 0) {
			if(customActuator == null) customActuator = motion.Actuate.defaultActuator;
			var actuator = Type.createInstance(customActuator,[target,duration,properties]);
			var library = motion.Actuate.getLibrary(actuator.target);
			if(overwrite) {
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(actuator.properties,false,false);
					i--;
				}
			}
			library.push(actuator);
			actuator.move();
			return actuator;
		} else return motion.Actuate.apply(target,properties,customActuator);
	}
	return null;
}
motion.Actuate.unload = function(actuator) {
	var target = actuator.target;
	if(motion.Actuate.targetLibraries.h.hasOwnProperty(target.__id__)) {
		HxOverrides.remove(motion.Actuate.targetLibraries.h[target.__id__],actuator);
		if(motion.Actuate.targetLibraries.h[target.__id__].length == 0) motion.Actuate.targetLibraries.remove(target);
	}
}
motion.Actuate.update = function(target,duration,start,end,overwrite) {
	if(overwrite == null) overwrite = true;
	var properties = { start : start, end : end};
	return motion.Actuate.tween(target,duration,properties,overwrite,motion.actuators.MethodActuator);
}
motion._Actuate = {}
motion._Actuate.EffectsOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
};
$hxClasses["motion._Actuate.EffectsOptions"] = motion._Actuate.EffectsOptions;
motion._Actuate.EffectsOptions.__name__ = ["motion","_Actuate","EffectsOptions"];
motion._Actuate.EffectsOptions.prototype = {
	filter: function(reference,properties) {
		properties.filter = reference;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.FilterActuator);
	}
	,__class__: motion._Actuate.EffectsOptions
}
motion._Actuate.TransformOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
};
$hxClasses["motion._Actuate.TransformOptions"] = motion._Actuate.TransformOptions;
motion._Actuate.TransformOptions.__name__ = ["motion","_Actuate","TransformOptions"];
motion._Actuate.TransformOptions.prototype = {
	sound: function(volume,pan) {
		var properties = { };
		if(volume != null) properties.soundVolume = volume;
		if(pan != null) properties.soundPan = pan;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.TransformActuator);
	}
	,color: function(value,strength,alpha) {
		if(strength == null) strength = 1;
		if(value == null) value = 0;
		var properties = { colorValue : value, colorStrength : strength};
		if(alpha != null) properties.colorAlpha = alpha;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.TransformActuator);
	}
	,__class__: motion._Actuate.TransformOptions
}
motion._Actuate.TweenTimer = function(progress) {
	this.progress = progress;
};
$hxClasses["motion._Actuate.TweenTimer"] = motion._Actuate.TweenTimer;
motion._Actuate.TweenTimer.__name__ = ["motion","_Actuate","TweenTimer"];
motion._Actuate.TweenTimer.prototype = {
	__class__: motion._Actuate.TweenTimer
}
motion.MotionPath = function() {
	this._x = new motion.ComponentPath();
	this._y = new motion.ComponentPath();
	this._rotation = null;
};
$hxClasses["motion.MotionPath"] = motion.MotionPath;
motion.MotionPath.__name__ = ["motion","MotionPath"];
motion.MotionPath.prototype = {
	get_y: function() {
		return this._y;
	}
	,get_x: function() {
		return this._x;
	}
	,get_rotation: function() {
		if(this._rotation == null) this._rotation = new motion.RotationPath(this._x,this._y);
		return this._rotation;
	}
	,line: function(x,y,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion.LinearPath(x,strength));
		this._y.addPath(new motion.LinearPath(y,strength));
		return this;
	}
	,bezier: function(x,y,controlX,controlY,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion.BezierPath(x,controlX,strength));
		this._y.addPath(new motion.BezierPath(y,controlY,strength));
		return this;
	}
	,__class__: motion.MotionPath
	,__properties__: {get_rotation:"get_rotation",get_x:"get_x",get_y:"get_y"}
}
motion.IComponentPath = function() { }
$hxClasses["motion.IComponentPath"] = motion.IComponentPath;
motion.IComponentPath.__name__ = ["motion","IComponentPath"];
motion.IComponentPath.prototype = {
	__class__: motion.IComponentPath
}
motion.ComponentPath = function() {
	this.paths = new Array();
	this.start = 0;
	this.totalStrength = 0;
};
$hxClasses["motion.ComponentPath"] = motion.ComponentPath;
motion.ComponentPath.__name__ = ["motion","ComponentPath"];
motion.ComponentPath.__interfaces__ = [motion.IComponentPath];
motion.ComponentPath.prototype = {
	get_end: function() {
		if(this.paths.length > 0) {
			var path = this.paths[this.paths.length - 1];
			return path.end;
		} else return this.start;
	}
	,calculate: function(k) {
		if(this.paths.length == 1) return this.paths[0].calculate(this.start,k); else {
			var ratio = k * this.totalStrength;
			var lastEnd = this.start;
			var _g = 0, _g1 = this.paths;
			while(_g < _g1.length) {
				var path = _g1[_g];
				++_g;
				if(ratio > path.strength) {
					ratio -= path.strength;
					lastEnd = path.end;
				} else return path.calculate(lastEnd,ratio / path.strength);
			}
		}
		return 0;
	}
	,addPath: function(path) {
		this.paths.push(path);
		this.totalStrength += path.strength;
	}
	,__class__: motion.ComponentPath
	,__properties__: {get_end:"get_end"}
}
motion.BezierPath = function(end,control,strength) {
	this.end = end;
	this.control = control;
	this.strength = strength;
};
$hxClasses["motion.BezierPath"] = motion.BezierPath;
motion.BezierPath.__name__ = ["motion","BezierPath"];
motion.BezierPath.prototype = {
	calculate: function(start,k) {
		return (1 - k) * (1 - k) * start + 2 * (1 - k) * k * this.control + k * k * this.end;
	}
	,__class__: motion.BezierPath
}
motion.LinearPath = function(end,strength) {
	motion.BezierPath.call(this,end,0,strength);
};
$hxClasses["motion.LinearPath"] = motion.LinearPath;
motion.LinearPath.__name__ = ["motion","LinearPath"];
motion.LinearPath.__super__ = motion.BezierPath;
motion.LinearPath.prototype = $extend(motion.BezierPath.prototype,{
	calculate: function(start,k) {
		return start + k * (this.end - start);
	}
	,__class__: motion.LinearPath
});
motion.RotationPath = function(x,y) {
	this.step = 0.01;
	this._x = x;
	this._y = y;
	this.offset = 0;
	this.start = this.calculate(0.0);
};
$hxClasses["motion.RotationPath"] = motion.RotationPath;
motion.RotationPath.__name__ = ["motion","RotationPath"];
motion.RotationPath.__interfaces__ = [motion.IComponentPath];
motion.RotationPath.prototype = {
	get_end: function() {
		return this.calculate(1.0);
	}
	,calculate: function(k) {
		var dX = this._x.calculate(k) - this._x.calculate(k + this.step);
		var dY = this._y.calculate(k) - this._y.calculate(k + this.step);
		var angle = Math.atan2(dY,dX) * (180 / Math.PI);
		angle = (angle + this.offset) % 360;
		return angle;
	}
	,__class__: motion.RotationPath
	,__properties__: {get_end:"get_end"}
}
motion.actuators.FilterActuator = function(target,duration,properties) {
	this.filterIndex = -1;
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
	if(js.Boot.__instanceof(properties.filter,Class)) {
		this.filterClass = properties.filter;
		var _g = 0, _g1 = (js.Boot.__cast(target , flash.display.DisplayObject)).get_filters();
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(filter,this.filterClass)) this.filter = filter;
		}
	} else {
		this.filterIndex = properties.filter;
		this.filter = (js.Boot.__cast(target , flash.display.DisplayObject)).get_filters()[this.filterIndex];
	}
};
$hxClasses["motion.actuators.FilterActuator"] = motion.actuators.FilterActuator;
motion.actuators.FilterActuator.__name__ = ["motion","actuators","FilterActuator"];
motion.actuators.FilterActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.FilterActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		var filters = (js.Boot.__cast(this.target , flash.display.DisplayObject)).get_filters();
		if(this.filterIndex > -1) Reflect.setField(filters,this.properties.filter,this.filter); else {
			var _g1 = 0, _g = filters.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(js.Boot.__instanceof(filters[i],this.filterClass)) filters[i] = this.filter;
			}
		}
		this.setField(this.target,"filters",filters);
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0, _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") {
				start = this.getField(this.filter,propertyName);
				details = new motion.actuators.PropertyDetails(this.filter,propertyName,start,Reflect.field(this.properties,propertyName) - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,apply: function() {
		var _g = 0, _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") this.filter[propertyName] = Reflect.field(this.properties,propertyName);
		}
		var filters = this.getField(this.target,"filters");
		Reflect.setField(filters,this.properties.filter,this.filter);
		this.setField(this.target,"filters",filters);
	}
	,__class__: motion.actuators.FilterActuator
});
motion.actuators.MethodActuator = function(target,duration,properties) {
	this.currentParameters = new Array();
	this.tweenProperties = { };
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
	if(!Reflect.hasField(properties,"start")) this.properties.start = new Array();
	if(!Reflect.hasField(properties,"end")) this.properties.end = this.properties.start;
	var _g1 = 0, _g = this.properties.start.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.currentParameters.push(null);
	}
};
$hxClasses["motion.actuators.MethodActuator"] = motion.actuators.MethodActuator;
motion.actuators.MethodActuator.__name__ = ["motion","actuators","MethodActuator"];
motion.actuators.MethodActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.MethodActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		if(this.active) {
			var _g1 = 0, _g = this.properties.start.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
			}
			this.callMethod(this.target,this.currentParameters);
		}
	}
	,initialize: function() {
		var details;
		var propertyName;
		var start;
		var _g1 = 0, _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			propertyName = "param" + i;
			start = this.properties.start[i];
			this.tweenProperties[propertyName] = start;
			if(js.Boot.__instanceof(start,Float) || js.Boot.__instanceof(start,Int)) {
				details = new motion.actuators.PropertyDetails(this.tweenProperties,propertyName,start,this.properties.end[i] - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		var _g1 = 0, _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
		}
		this.callMethod(this.target,this.currentParameters);
		motion.actuators.SimpleActuator.prototype.complete.call(this,sendEvent);
	}
	,apply: function() {
		this.callMethod(this.target,this.properties.end);
	}
	,__class__: motion.actuators.MethodActuator
});
motion.actuators.MotionPathActuator = function(target,duration,properties) {
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.MotionPathActuator"] = motion.actuators.MotionPathActuator;
motion.actuators.MotionPathActuator.__name__ = ["motion","actuators","MotionPathActuator"];
motion.actuators.MotionPathActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.MotionPathActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g = 0, _g1 = this.propertyDetails;
				while(_g < _g1.length) {
					var details1 = _g1[_g];
					++_g;
					if(details1.isField) details1.target[details1.propertyName] = (js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing); else Reflect.setProperty(details1.target,details1.propertyName,(js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing));
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g = 0, _g1 = this.propertyDetails;
				while(_g < _g1.length) {
					var details1 = _g1[_g];
					++_g;
					if(!this._snapping) {
						if(details1.isField) details1.target[details1.propertyName] = (js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing); else Reflect.setProperty(details1.target,details1.propertyName,(js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing));
					} else if(details1.isField) details1.target[details1.propertyName] = Math.round((js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details1.target,details1.propertyName,Math.round((js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing)));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,initialize: function() {
		var details;
		var path;
		var _g = 0, _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			path = js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath);
			if(path != null) {
				var isField = true;
				if(Reflect.hasField(this.target,propertyName)) path.start = Reflect.field(this.target,propertyName); else {
					isField = false;
					path.start = Reflect.getProperty(this.target,propertyName);
				}
				details = new motion.actuators.PropertyPathDetails(this.target,propertyName,path,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,apply: function() {
		var _g = 0, _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(Reflect.hasField(this.target,propertyName)) this.target[propertyName] = (js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath)).get_end(); else Reflect.setProperty(this.target,propertyName,(js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath)).get_end());
		}
	}
	,__class__: motion.actuators.MotionPathActuator
});
motion.actuators.PropertyDetails = function(target,propertyName,start,change,isField) {
	if(isField == null) isField = true;
	this.target = target;
	this.propertyName = propertyName;
	this.start = start;
	this.change = change;
	this.isField = isField;
};
$hxClasses["motion.actuators.PropertyDetails"] = motion.actuators.PropertyDetails;
motion.actuators.PropertyDetails.__name__ = ["motion","actuators","PropertyDetails"];
motion.actuators.PropertyDetails.prototype = {
	__class__: motion.actuators.PropertyDetails
}
motion.actuators.PropertyPathDetails = function(target,propertyName,path,isField) {
	if(isField == null) isField = true;
	motion.actuators.PropertyDetails.call(this,target,propertyName,0,0,isField);
	this.path = path;
};
$hxClasses["motion.actuators.PropertyPathDetails"] = motion.actuators.PropertyPathDetails;
motion.actuators.PropertyPathDetails.__name__ = ["motion","actuators","PropertyPathDetails"];
motion.actuators.PropertyPathDetails.__super__ = motion.actuators.PropertyDetails;
motion.actuators.PropertyPathDetails.prototype = $extend(motion.actuators.PropertyDetails.prototype,{
	__class__: motion.actuators.PropertyPathDetails
});
motion.actuators.TransformActuator = function(target,duration,properties) {
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.TransformActuator"] = motion.actuators.TransformActuator;
motion.actuators.TransformActuator.__name__ = ["motion","actuators","TransformActuator"];
motion.actuators.TransformActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.TransformActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.tweenColorTransform);
		}
		if(this.endSoundTransform != null) this.setField(this.target,"soundTransform",this.tweenSoundTransform);
	}
	,initializeSound: function() {
		if(this.getField(this.target,"soundTransform") == null) this.setField(this.target,"soundTransform",new flash.media.SoundTransform());
		var start = this.getField(this.target,"soundTransform");
		this.endSoundTransform = this.getField(this.target,"soundTransform");
		this.tweenSoundTransform = new flash.media.SoundTransform();
		if(Reflect.hasField(this.properties,"soundVolume")) {
			this.endSoundTransform.volume = this.properties.soundVolume;
			this.propertyDetails.push(new motion.actuators.PropertyDetails(this.tweenSoundTransform,"volume",start.volume,this.endSoundTransform.volume - start.volume));
		}
		if(Reflect.hasField(this.properties,"soundPan")) {
			this.endSoundTransform.pan = this.properties.soundPan;
			this.propertyDetails.push(new motion.actuators.PropertyDetails(this.tweenSoundTransform,"pan",start.pan,this.endSoundTransform.pan - start.pan));
		}
	}
	,initializeColor: function() {
		this.endColorTransform = new flash.geom.ColorTransform();
		var color = this.properties.colorValue;
		var strength = this.properties.colorStrength;
		if(strength < 1) {
			var multiplier;
			var offset;
			if(strength < 0.5) {
				multiplier = 1;
				offset = strength * 2;
			} else {
				multiplier = 1 - (strength - 0.5) * 2;
				offset = 1;
			}
			this.endColorTransform.redMultiplier = multiplier;
			this.endColorTransform.greenMultiplier = multiplier;
			this.endColorTransform.blueMultiplier = multiplier;
			this.endColorTransform.redOffset = offset * (color >> 16 & 255);
			this.endColorTransform.greenOffset = offset * (color >> 8 & 255);
			this.endColorTransform.blueOffset = offset * (color & 255);
		} else {
			this.endColorTransform.redMultiplier = 0;
			this.endColorTransform.greenMultiplier = 0;
			this.endColorTransform.blueMultiplier = 0;
			this.endColorTransform.redOffset = color >> 16 & 255;
			this.endColorTransform.greenOffset = color >> 8 & 255;
			this.endColorTransform.blueOffset = color & 255;
		}
		var propertyNames = ["redMultiplier","greenMultiplier","blueMultiplier","redOffset","greenOffset","blueOffset"];
		if(Reflect.hasField(this.properties,"colorAlpha")) {
			this.endColorTransform.alphaMultiplier = this.properties.colorAlpha;
			propertyNames.push("alphaMultiplier");
		} else this.endColorTransform.alphaMultiplier = this.getField(this.target,"alpha");
		var transform = this.getField(this.target,"transform");
		var begin = this.getField(transform,"colorTransform");
		this.tweenColorTransform = new flash.geom.ColorTransform();
		var details;
		var start;
		var _g = 0;
		while(_g < propertyNames.length) {
			var propertyName = propertyNames[_g];
			++_g;
			start = this.getField(begin,propertyName);
			details = new motion.actuators.PropertyDetails(this.tweenColorTransform,propertyName,start,this.getField(this.endColorTransform,propertyName) - start);
			this.propertyDetails.push(details);
		}
	}
	,initialize: function() {
		if(Reflect.hasField(this.properties,"colorValue") && js.Boot.__instanceof(this.target,flash.display.DisplayObject)) this.initializeColor();
		if(Reflect.hasField(this.properties,"soundVolume") || Reflect.hasField(this.properties,"soundPan")) this.initializeSound();
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,apply: function() {
		this.initialize();
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.endColorTransform);
		}
		if(this.endSoundTransform != null) this.setField(this.target,"soundTransform",this.endSoundTransform);
	}
	,__class__: motion.actuators.TransformActuator
});
motion.easing.Back = function() { }
$hxClasses["motion.easing.Back"] = motion.easing.Back;
motion.easing.Back.__name__ = ["motion","easing","Back"];
motion.easing.Back.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Back.get_easeIn = function() {
	return new motion.easing.BackEaseIn(1.70158);
}
motion.easing.Back.get_easeInOut = function() {
	return new motion.easing.BackEaseInOut(1.70158);
}
motion.easing.Back.get_easeOut = function() {
	return new motion.easing.BackEaseOut(1.70158);
}
motion.easing.BackEaseIn = function(s) {
	this.s = s;
};
$hxClasses["motion.easing.BackEaseIn"] = motion.easing.BackEaseIn;
motion.easing.BackEaseIn.__name__ = ["motion","easing","BackEaseIn"];
motion.easing.BackEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.BackEaseIn.prototype = {
	ease: function(t,b,c,d) {
		return c * (t /= d) * t * ((this.s + 1) * t - this.s) + b;
	}
	,calculate: function(k) {
		return k * k * ((this.s + 1) * k - this.s);
	}
	,__class__: motion.easing.BackEaseIn
}
motion.easing.BackEaseInOut = function(s) {
	this.s = s;
};
$hxClasses["motion.easing.BackEaseInOut"] = motion.easing.BackEaseInOut;
motion.easing.BackEaseInOut.__name__ = ["motion","easing","BackEaseInOut"];
motion.easing.BackEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.BackEaseInOut.prototype = {
	ease: function(t,b,c,d) {
		if((t /= d / 2) < 1) return c / 2 * (t * t * (((this.s *= 1.525) + 1) * t - this.s)) + b;
		return c / 2 * ((t -= 2) * t * (((this.s *= 1.525) + 1) * t + this.s) + 2) + b;
	}
	,calculate: function(k) {
		if((k /= 0.5) < 1) return 0.5 * (k * k * (((this.s *= 1.525) + 1) * k - this.s));
		return 0.5 * ((k -= 2) * k * (((this.s *= 1.525) + 1) * k + this.s) + 2);
	}
	,__class__: motion.easing.BackEaseInOut
}
motion.easing.BackEaseOut = function(s) {
	this.s = s;
};
$hxClasses["motion.easing.BackEaseOut"] = motion.easing.BackEaseOut;
motion.easing.BackEaseOut.__name__ = ["motion","easing","BackEaseOut"];
motion.easing.BackEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.BackEaseOut.prototype = {
	ease: function(t,b,c,d) {
		return c * ((t = t / d - 1) * t * ((this.s + 1) * t + this.s) + 1) + b;
	}
	,calculate: function(k) {
		return (k = k - 1) * k * ((this.s + 1) * k + this.s) + 1;
	}
	,__class__: motion.easing.BackEaseOut
}
motion.easing.Elastic = function() { }
$hxClasses["motion.easing.Elastic"] = motion.easing.Elastic;
motion.easing.Elastic.__name__ = ["motion","easing","Elastic"];
motion.easing.Elastic.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Elastic.get_easeIn = function() {
	return new motion.easing.ElasticEaseIn(0.1,0.4);
}
motion.easing.Elastic.get_easeInOut = function() {
	return new motion.easing.ElasticEaseInOut(0.1,0.4);
}
motion.easing.Elastic.get_easeOut = function() {
	return new motion.easing.ElasticEaseOut(0.1,0.4);
}
motion.easing.ElasticEaseIn = function(a,p) {
	this.a = a;
	this.p = p;
};
$hxClasses["motion.easing.ElasticEaseIn"] = motion.easing.ElasticEaseIn;
motion.easing.ElasticEaseIn.__name__ = ["motion","easing","ElasticEaseIn"];
motion.easing.ElasticEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.ElasticEaseIn.prototype = {
	ease: function(t,b,c,d) {
		if(t == 0) return b;
		if((t /= d) == 1) return b + c;
		var s;
		if(this.a < Math.abs(c)) {
			this.a = c;
			s = this.p / 4;
		} else s = this.p / (2 * Math.PI) * Math.asin(c / this.a);
		return -(this.a * Math.pow(2,10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / this.p)) + b;
	}
	,calculate: function(k) {
		if(k == 0) return 0;
		if(k == 1) return 1;
		var s;
		if(this.a < 1) {
			this.a = 1;
			s = this.p / 4;
		} else s = this.p / (2 * Math.PI) * Math.asin(1 / this.a);
		return -(this.a * Math.pow(2,10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / this.p));
	}
	,__class__: motion.easing.ElasticEaseIn
}
motion.easing.ElasticEaseInOut = function(a,p) {
	this.a = a;
	this.p = p;
};
$hxClasses["motion.easing.ElasticEaseInOut"] = motion.easing.ElasticEaseInOut;
motion.easing.ElasticEaseInOut.__name__ = ["motion","easing","ElasticEaseInOut"];
motion.easing.ElasticEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ElasticEaseInOut.prototype = {
	ease: function(t,b,c,d) {
		if(t == 0) return b;
		if((t /= d / 2) == 2) return b + c;
		var s;
		if(this.a < Math.abs(c)) {
			this.a = c;
			s = this.p / 4;
		} else s = this.p / (2 * Math.PI) * Math.asin(c / this.a);
		if(t < 1) return -0.5 * (this.a * Math.pow(2,10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / this.p)) + b;
		return this.a * Math.pow(2,-10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / this.p) * 0.5 + c + b;
	}
	,calculate: function(k) {
		if(k == 0) return 0;
		if((k /= 0.5) == 2) return 1;
		var p = 0.3 * 1.5;
		var a = 1;
		var s = p / 4;
		if(k < 1) return -0.5 * (Math.pow(2,10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
		return Math.pow(2,-10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
	}
	,__class__: motion.easing.ElasticEaseInOut
}
motion.easing.ElasticEaseOut = function(a,p) {
	this.a = a;
	this.p = p;
};
$hxClasses["motion.easing.ElasticEaseOut"] = motion.easing.ElasticEaseOut;
motion.easing.ElasticEaseOut.__name__ = ["motion","easing","ElasticEaseOut"];
motion.easing.ElasticEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ElasticEaseOut.prototype = {
	ease: function(t,b,c,d) {
		if(t == 0) return b;
		if((t /= d) == 1) return b + c;
		var s;
		if(this.a < Math.abs(c)) {
			this.a = c;
			s = this.p / 4;
		} else s = this.p / (2 * Math.PI) * Math.asin(c / this.a);
		return this.a * Math.pow(2,-10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / this.p) + c + b;
	}
	,calculate: function(k) {
		if(k == 0) return 0;
		if(k == 1) return 1;
		var s;
		if(this.a < 1) {
			this.a = 1;
			s = this.p / 4;
		} else s = this.p / (2 * Math.PI) * Math.asin(1 / this.a);
		return this.a * Math.pow(2,-10 * k) * Math.sin((k - s) * (2 * Math.PI) / this.p) + 1;
	}
	,__class__: motion.easing.ElasticEaseOut
}
motion.easing.ExpoEaseIn = function() {
};
$hxClasses["motion.easing.ExpoEaseIn"] = motion.easing.ExpoEaseIn;
motion.easing.ExpoEaseIn.__name__ = ["motion","easing","ExpoEaseIn"];
motion.easing.ExpoEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseIn.prototype = {
	ease: function(t,b,c,d) {
		return t == 0?b:c * Math.pow(2,10 * (t / d - 1)) + b;
	}
	,calculate: function(k) {
		return k == 0?0:Math.pow(2,10 * (k - 1));
	}
	,__class__: motion.easing.ExpoEaseIn
}
motion.easing.ExpoEaseInOut = function() {
};
$hxClasses["motion.easing.ExpoEaseInOut"] = motion.easing.ExpoEaseInOut;
motion.easing.ExpoEaseInOut.__name__ = ["motion","easing","ExpoEaseInOut"];
motion.easing.ExpoEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseInOut.prototype = {
	ease: function(t,b,c,d) {
		if(t == 0) return b;
		if(t == d) return b + c;
		if((t /= d / 2.0) < 1.0) return c / 2 * Math.pow(2,10 * (t - 1)) + b;
		return c / 2 * (2 - Math.pow(2,-10 * --t)) + b;
	}
	,calculate: function(k) {
		if(k == 0) return 0;
		if(k == 1) return 1;
		if((k /= 0.5) < 1.0) return 0.5 * Math.pow(2,10 * (k - 1));
		return 0.5 * (2 - Math.pow(2,-10 * --k));
	}
	,__class__: motion.easing.ExpoEaseInOut
}
motion.easing.Linear = function() { }
$hxClasses["motion.easing.Linear"] = motion.easing.Linear;
motion.easing.Linear.__name__ = ["motion","easing","Linear"];
motion.easing.Linear.__properties__ = {get_easeNone:"get_easeNone"}
motion.easing.Linear.get_easeNone = function() {
	return new motion.easing.LinearEaseNone();
}
motion.easing.LinearEaseNone = function() {
};
$hxClasses["motion.easing.LinearEaseNone"] = motion.easing.LinearEaseNone;
motion.easing.LinearEaseNone.__name__ = ["motion","easing","LinearEaseNone"];
motion.easing.LinearEaseNone.__interfaces__ = [motion.easing.IEasing];
motion.easing.LinearEaseNone.prototype = {
	ease: function(t,b,c,d) {
		return c * t / d + b;
	}
	,calculate: function(k) {
		return k;
	}
	,__class__: motion.easing.LinearEaseNone
}
var msignal = {}
msignal.Signal = function(valueClasses) {
	if(valueClasses == null) valueClasses = [];
	this.valueClasses = valueClasses;
	this.slots = msignal.SlotList.NIL;
	this.priorityBased = false;
};
$hxClasses["msignal.Signal"] = msignal.Signal;
msignal.Signal.__name__ = ["msignal","Signal"];
msignal.Signal.prototype = {
	get_numListeners: function() {
		return this.slots.get_length();
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return null;
	}
	,registrationPossible: function(listener,once) {
		if(!this.slots.nonEmpty) return true;
		var existingSlot = this.slots.find(listener);
		if(existingSlot == null) return true;
		if(existingSlot.once != once) throw "You cannot addOnce() then add() the same listener without removing the relationship first.";
		return false;
	}
	,registerListener: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		if(this.registrationPossible(listener,once)) {
			var newSlot = this.createSlot(listener,once,priority);
			if(!this.priorityBased && priority != 0) this.priorityBased = true;
			if(!this.priorityBased && priority == 0) this.slots = this.slots.prepend(newSlot); else this.slots = this.slots.insertWithPriority(newSlot);
			return newSlot;
		}
		return this.slots.find(listener);
	}
	,removeAll: function() {
		this.slots = msignal.SlotList.NIL;
	}
	,remove: function(listener) {
		var slot = this.slots.find(listener);
		if(slot == null) return null;
		this.slots = this.slots.filterNot(listener);
		return slot;
	}
	,addOnceWithPriority: function(listener,priority) {
		if(priority == null) priority = 0;
		return this.registerListener(listener,true,priority);
	}
	,addWithPriority: function(listener,priority) {
		if(priority == null) priority = 0;
		return this.registerListener(listener,false,priority);
	}
	,addOnce: function(listener) {
		return this.registerListener(listener,true);
	}
	,add: function(listener) {
		return this.registerListener(listener);
	}
	,__class__: msignal.Signal
	,__properties__: {get_numListeners:"get_numListeners"}
}
msignal.Signal0 = function() {
	msignal.Signal.call(this);
};
$hxClasses["msignal.Signal0"] = msignal.Signal0;
msignal.Signal0.__name__ = ["msignal","Signal0"];
msignal.Signal0.__super__ = msignal.Signal;
msignal.Signal0.prototype = $extend(msignal.Signal.prototype,{
	createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return new msignal.Slot0(this,listener,once,priority);
	}
	,dispatch: function() {
		var slotsToProcess = this.slots;
		while(slotsToProcess.nonEmpty) {
			slotsToProcess.head.execute();
			slotsToProcess = slotsToProcess.tail;
		}
	}
	,__class__: msignal.Signal0
});
msignal.Signal1 = function(type) {
	msignal.Signal.call(this,[type]);
};
$hxClasses["msignal.Signal1"] = msignal.Signal1;
msignal.Signal1.__name__ = ["msignal","Signal1"];
msignal.Signal1.__super__ = msignal.Signal;
msignal.Signal1.prototype = $extend(msignal.Signal.prototype,{
	createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return new msignal.Slot1(this,listener,once,priority);
	}
	,dispatch: function(value) {
		var slotsToProcess = this.slots;
		while(slotsToProcess.nonEmpty) {
			slotsToProcess.head.execute(value);
			slotsToProcess = slotsToProcess.tail;
		}
	}
	,__class__: msignal.Signal1
});
msignal.Signal2 = function(type1,type2) {
	msignal.Signal.call(this,[type1,type2]);
};
$hxClasses["msignal.Signal2"] = msignal.Signal2;
msignal.Signal2.__name__ = ["msignal","Signal2"];
msignal.Signal2.__super__ = msignal.Signal;
msignal.Signal2.prototype = $extend(msignal.Signal.prototype,{
	createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return new msignal.Slot2(this,listener,once,priority);
	}
	,dispatch: function(value1,value2) {
		var slotsToProcess = this.slots;
		while(slotsToProcess.nonEmpty) {
			slotsToProcess.head.execute(value1,value2);
			slotsToProcess = slotsToProcess.tail;
		}
	}
	,__class__: msignal.Signal2
});
msignal.Slot = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	this.signal = signal;
	this.set_listener(listener);
	this.once = once;
	this.priority = priority;
	this.enabled = true;
};
$hxClasses["msignal.Slot"] = msignal.Slot;
msignal.Slot.__name__ = ["msignal","Slot"];
msignal.Slot.prototype = {
	set_listener: function(value) {
		if(value == null) throw "listener cannot be null";
		return this.listener = value;
	}
	,remove: function() {
		this.signal.remove(this.listener);
	}
	,__class__: msignal.Slot
	,__properties__: {set_listener:"set_listener"}
}
msignal.Slot0 = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	msignal.Slot.call(this,signal,listener,once,priority);
};
$hxClasses["msignal.Slot0"] = msignal.Slot0;
msignal.Slot0.__name__ = ["msignal","Slot0"];
msignal.Slot0.__super__ = msignal.Slot;
msignal.Slot0.prototype = $extend(msignal.Slot.prototype,{
	execute: function() {
		if(!this.enabled) return;
		if(this.once) this.remove();
		this.listener();
	}
	,__class__: msignal.Slot0
});
msignal.Slot1 = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	msignal.Slot.call(this,signal,listener,once,priority);
};
$hxClasses["msignal.Slot1"] = msignal.Slot1;
msignal.Slot1.__name__ = ["msignal","Slot1"];
msignal.Slot1.__super__ = msignal.Slot;
msignal.Slot1.prototype = $extend(msignal.Slot.prototype,{
	execute: function(value1) {
		if(!this.enabled) return;
		if(this.once) this.remove();
		if(this.param != null) value1 = this.param;
		this.listener(value1);
	}
	,__class__: msignal.Slot1
});
msignal.Slot2 = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	msignal.Slot.call(this,signal,listener,once,priority);
};
$hxClasses["msignal.Slot2"] = msignal.Slot2;
msignal.Slot2.__name__ = ["msignal","Slot2"];
msignal.Slot2.__super__ = msignal.Slot;
msignal.Slot2.prototype = $extend(msignal.Slot.prototype,{
	execute: function(value1,value2) {
		if(!this.enabled) return;
		if(this.once) this.remove();
		if(this.param1 != null) value1 = this.param1;
		if(this.param2 != null) value2 = this.param2;
		this.listener(value1,value2);
	}
	,__class__: msignal.Slot2
});
msignal.SlotList = function(head,tail) {
	this.nonEmpty = false;
	if(head == null && tail == null) {
		if(msignal.SlotList.NIL != null) throw "Parameters head and tail are null. Use the NIL element instead.";
		this.nonEmpty = false;
	} else if(head == null) throw "Parameter head cannot be null."; else {
		this.head = head;
		this.tail = tail == null?msignal.SlotList.NIL:tail;
		this.nonEmpty = true;
	}
};
$hxClasses["msignal.SlotList"] = msignal.SlotList;
msignal.SlotList.__name__ = ["msignal","SlotList"];
msignal.SlotList.prototype = {
	find: function(listener) {
		if(!this.nonEmpty) return null;
		var p = this;
		while(p.nonEmpty) {
			if(Reflect.compareMethods(p.head.listener,listener)) return p.head;
			p = p.tail;
		}
		return null;
	}
	,contains: function(listener) {
		if(!this.nonEmpty) return false;
		var p = this;
		while(p.nonEmpty) {
			if(Reflect.compareMethods(p.head.listener,listener)) return true;
			p = p.tail;
		}
		return false;
	}
	,filterNot: function(listener) {
		if(!this.nonEmpty || listener == null) return this;
		if(Reflect.compareMethods(this.head.listener,listener)) return this.tail;
		var wholeClone = new msignal.SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			if(Reflect.compareMethods(current.head.listener,listener)) {
				subClone.tail = current.tail;
				return wholeClone;
			}
			subClone = subClone.tail = new msignal.SlotList(current.head);
			current = current.tail;
		}
		return this;
	}
	,insertWithPriority: function(slot) {
		if(!this.nonEmpty) return new msignal.SlotList(slot);
		var priority = slot.priority;
		if(priority >= this.head.priority) return this.prepend(slot);
		var wholeClone = new msignal.SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			if(priority > current.head.priority) {
				subClone.tail = current.prepend(slot);
				return wholeClone;
			}
			subClone = subClone.tail = new msignal.SlotList(current.head);
			current = current.tail;
		}
		subClone.tail = new msignal.SlotList(slot);
		return wholeClone;
	}
	,append: function(slot) {
		if(slot == null) return this;
		if(!this.nonEmpty) return new msignal.SlotList(slot);
		if(this.tail == msignal.SlotList.NIL) return new msignal.SlotList(slot).prepend(this.head);
		var wholeClone = new msignal.SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			subClone = subClone.tail = new msignal.SlotList(current.head);
			current = current.tail;
		}
		subClone.tail = new msignal.SlotList(slot);
		return wholeClone;
	}
	,prepend: function(slot) {
		return new msignal.SlotList(slot,this);
	}
	,get_length: function() {
		if(!this.nonEmpty) return 0;
		if(this.tail == msignal.SlotList.NIL) return 1;
		var result = 0;
		var p = this;
		while(p.nonEmpty) {
			++result;
			p = p.tail;
		}
		return result;
	}
	,__class__: msignal.SlotList
	,__properties__: {get_length:"get_length"}
}
openfl.AssetData = function() {
};
$hxClasses["openfl.AssetData"] = openfl.AssetData;
openfl.AssetData.__name__ = ["openfl","AssetData"];
openfl.AssetData.prototype = {
	__class__: openfl.AssetData
}
openfl.display = {}
openfl.display.Tilesheet = function(image) {
	this.__bitmap = image;
	this.__centerPoints = new Array();
	this.__tileRects = new Array();
	this.__tileUVs = new Array();
};
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	getTileUVs: function(index) {
		return this.__tileUVs[index];
	}
	,getTileRect: function(index) {
		return this.__tileRects[index];
	}
	,getTileCenter: function(index) {
		return this.__centerPoints[index];
	}
	,drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
	}
	,addTileRect: function(rectangle,centerPoint) {
		this.__tileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new flash.geom.Point();
		this.__centerPoints.push(centerPoint);
		this.__tileUVs.push(new flash.geom.Rectangle(rectangle.get_left() / this.__bitmap.get_width(),rectangle.get_top() / this.__bitmap.get_height(),rectangle.get_right() / this.__bitmap.get_width(),rectangle.get_bottom() / this.__bitmap.get_height()));
		return this.__tileRects.length - 1;
	}
	,__class__: openfl.display.Tilesheet
}
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = $hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
haxe.Resource.content = [{ name : "__ASSET__assets_fonts_iceland_regular_ttf", data : "s134298:b3k0Omhhc2hxOjExMW95Njphc2NlbnRkNzY4eTQ6ZGF0YWFkNDMwLjA4ZDk1Mi4zMTlkNDMwLjA4ZDk4Mi4wMTZkNDA5LjA4OGQxMDAzLjAwOGQzODguMDk2ZDEwMjRkMzU4LjRkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDk1Mi4zMTlkMzU4LjRkOTYyLjU2ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2aHk2Ol93aWR0aGQ1MDEuNzZ5NDp4TWF4ZDQzMC4wOHk0OnhNaW5kNzEuNjh5NDp5TWF4ZDM1OC40eTQ6eU1pbmQweTc6X2hlaWdodGQyODYuNzJ5NzpsZWFkaW5nZC0zMC43Mnk3OmRlc2NlbnRkMjI1LjI4eTg6Y2hhckNvZGVpMTExeTE1OmxlZnRzaWRlQmVhcmluZ2Q3MS42OHkxMjphZHZhbmNlV2lkdGhkNTAxLjc2eTg6Y29tbWFuZHNhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaGc6MjIzb1IxZDc2OFIyYWQ0NDAuMzJkOTUyLjMxOWQ0NDAuMzJkOTgyLjAxNmQ0MTkuMzI4ZDEwMDMuMDA4ZDM5OC4zMzZkMTAyNGQzNjguNjRkMTAyNGQxNzQuMDhkMTAyNGQyMzUuNTJkOTYyLjU2ZDM2OC42NGQ5NjIuNTZkMzY4LjY0ZDcyNy4wNGQyMzUuNTJkNzI3LjA0ZDI5Ni45NmQ2NjUuNTk5ZDI5Ni45NmQ1MTJkMTUzLjZkNTEyZDE1My42ZDEwMjRkODEuOTJkMTAyNGQ4MS45MmQ1MjIuMjRkODEuOTJkNDkyLjU0NGQxMDIuOTEyZDQ3MS41NTJkMTIzLjkwNGQ0NTAuNTU5ZDE1My42ZDQ1MC41NTlkMjk2Ljk2ZDQ1MC41NTlkMzI2LjY1NmQ0NTAuNTU5ZDM0Ny42NDhkNDcxLjU1MmQzNjguNjRkNDkyLjU0NGQzNjguNjRkNTIyLjI0ZDM2OC42NGQ2MTQuNGQzMTcuNDRkNjY1LjU5OWQzNjguNjRkNjY1LjU5OWQzOTguMzM2ZDY2NS41OTlkNDE5LjMyOGQ2ODYuNTkyZDQ0MC4zMmQ3MDcuNTg0ZDQ0MC4zMmQ3MzcuMjhkNDQwLjMyZDk1Mi4zMTloUjNkNTEyUjRkNDQwLjMyUjVkODEuOTJSNmQ1NzMuNDRSN2QwUjhkNDkxLjUyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMjNSMTJkODEuOTJSMTNkNTEyUjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTNpM2kyaGc6MTEwb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkNzE2LjhkMTk0LjU2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDEwMjRoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQzNTguNFI3ZDBSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTExMFIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmhnOjIyMm9SMWQ3NjhSMmFkNTIyLjI0ZDg4MC42NGQ1MjIuMjRkOTA5LjMxMmQ1MDAuNzM2ZDkzMC44MTZkNDc5LjIzMmQ5NTIuMzE5ZDQ1MC41NmQ5NTIuMzE5ZDE3NC4wOGQ5NTIuMzE5ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDU5My45MmQ0NTAuNTZkNTkzLjkyZDQ3OS4yMzJkNTkzLjkyZDUwMC43MzZkNjE1LjQyNGQ1MjIuMjRkNjM2LjkyOGQ1MjIuMjRkNjY1LjU5OWQ1MjIuMjRkODgwLjY0ZDQ0MC4zMmQ4ODAuNjRkNDQwLjMyZDY2NS41OTlkMTc0LjA4ZDY2NS41OTlkMTc0LjA4ZDk0Mi4wOGQyMzUuNTJkODgwLjY0ZDQ0MC4zMmQ4ODAuNjRoUjNkNTkzLjkyUjRkNTIyLjI0UjVkOTIuMTZSNmQ1MDEuNzZSN2QwUjhkNDA5LjZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyMlIxMmQ5Mi4xNlIxM2Q1OTMuOTJSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaTJoZzoxMDlvUjFkNzY4UjJhZDY3NS44NGQxMDI0ZDYwNC4xNmQxMDI0ZDYwNC4xNmQ3MjcuMDRkNDA5LjZkNzI3LjA0ZDQwOS42ZDEwMjRkMzM3LjkyZDEwMjRkMzM3LjkyZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkNzE2LjhkMTk0LjU2ZDY2NS41OTlkMzM3LjkyZDY2NS41OTlkNDAwLjM4NGQ2NjUuNTk5ZDQwOC41NzZkNzE3LjgyNGQ0NjAuOGQ2NjUuNTk5ZDYwNC4xNmQ2NjUuNTk5ZDYzMy44NTZkNjY1LjU5OWQ2NTQuODQ4ZDY4Ni41OTJkNjc1Ljg0ZDcwNy41ODRkNjc1Ljg0ZDczNy4yOGQ2NzUuODRkMTAyNGhSM2Q3NDcuNTJSNGQ2NzUuODRSNWQ3MS42OFI2ZDM1OC40UjdkMFI4ZDI4Ni43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTA5UjEyZDcxLjY4UjEzZDc0Ny41MlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kyaTJpM2kzaTJoZzoyMjFvUjFkNzY4UjJhZDUwMS43NmQ4MDguOTZkNTAxLjc2ZDgzOC42NTZkNDgwLjc2OGQ4NTkuNjQ4ZDQ1OS43NzZkODgwLjY0ZDQzMC4wOGQ4ODAuNjRkMzI3LjY4ZDg4MC42NGQzMjcuNjhkMTAyNGQyNDUuNzZkMTAyNGQyNDUuNzZkODgwLjY0ZDE0My4zNmQ4ODAuNjRkMTEzLjY2NGQ4ODAuNjRkOTIuNjcyZDg1OS42NDhkNzEuNjhkODM4LjY1NmQ3MS42OGQ4MDguOTZkNzEuNjhkNTIyLjI0ZDE1My42ZDUyMi4yNGQxNTMuNmQ4MDguOTZkNDE5Ljg0ZDgwOC45NmQ0MTkuODRkNTIyLjI0ZDUwMS43NmQ1MjIuMjRkNTAxLjc2ZDgwOC45NmQ0MDkuNmQzMDcuMTk5ZDMwNy4yZDQ1MC41NTlkMjM1LjUyZDQ1MC41NTlkMzM3LjkyZDMwNy4xOTlkNDA5LjZkMzA3LjE5OWhSM2Q1NDIuNzJSNGQ1MDEuNzZSNWQ3MS42OFI2ZDcxNi44UjdkMFI4ZDY0NS4xMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjIxUjEyZDcxLjY4UjEzZDU0Mi43MlIxNGFpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwOG9SMWQ3NjhSMmFkMTUzLjZkMTAyNGQ4MS45MmQxMDI0ZDgxLjkyZDUwMS43NmQxNTMuNmQ0MzAuMDhkMTUzLjZkMTAyNGhSM2QyMzUuNTJSNGQxNTMuNlI1ZDgxLjkyUjZkNTkzLjkyUjdkMFI4ZDUxMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTA4UjEyZDgxLjkyUjEzZDIzNS41MlIxNGFpMWkyaTJpMmkyaGc6MjIwb1IxZDc2OFIyYWQ1MjIuMjRkMTAyNGQ0NDAuMzJkMTAyNGQ0NDAuMzJkOTYyLjU2ZDM3OC44OGQxMDI0ZDE2My44NGQxMDI0ZDEzNC4xNDRkMTAyNGQxMTMuMTUyZDEwMDMuMDA4ZDkyLjE2ZDk4Mi4wMTZkOTIuMTZkOTUyLjMxOWQ5Mi4xNmQ1MjIuMjRkMTc0LjA4ZDUyMi4yNGQxNzQuMDhkOTUyLjMxOWQ0NDAuMzJkOTUyLjMxOWQ0NDAuMzJkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDA5LjZkNDUwLjU1OWQzNDMuMDRkNDUwLjU1OWQzNDMuMDRkMzY4LjY0ZDQwOS42ZDM2OC42NGQ0MDkuNmQ0NTAuNTU5ZDI3MS4zNmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMjA0LjhkMzY4LjY0ZDI3MS4zNmQzNjguNjRkMjcxLjM2ZDQ1MC41NTloUjNkNTgzLjY4UjRkNTIyLjI0UjVkOTIuMTZSNmQ2NTUuMzZSN2QwUjhkNTYzLjJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyMFIxMmQ5Mi4xNlIxM2Q1ODMuNjhSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTA3b1IxZDc2OFIyYWQ0NjAuOGQ2NjUuNTk5ZDI5Ny45ODRkODA3LjkzNmQyOTcuOTg0ZDgxOC4xNzVkMzY4LjY0ZDgxOC4xNzVkMzk4LjMzNmQ4MTguMTc1ZDQxOS4zMjhkODM5LjE2OGQ0NDAuMzJkODYwLjE2ZDQ0MC4zMmQ4ODkuODU2ZDQ0MC4zMmQxMDI0ZDM2OC42NGQxMDI0ZDM2OC42NGQ4NzAuNGQxNTMuNmQ4NzAuNGQxNTMuNmQxMDI0ZDgxLjkyZDEwMjRkODEuOTJkNTAxLjc2ZDE1My42ZDQzMC4wOGQxNTMuNmQ4NjEuMTg0ZDM3My43NmQ2NjUuNTk5ZDQ2MC44ZDY2NS41OTloUjNkNTAxLjc2UjRkNDYwLjhSNWQ4MS45MlI2ZDU5My45MlI3ZDBSOGQ1MTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEwN1IxMmQ4MS45MlIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIxOW9SMWQ3NjhSMmFkNTIyLjI0ZDEwMjRkNDQwLjMyZDEwMjRkNDQwLjMyZDk2Mi41NmQzNzguODhkMTAyNGQxNjMuODRkMTAyNGQxMzQuMTQ0ZDEwMjRkMTEzLjE1MmQxMDAzLjAwOGQ5Mi4xNmQ5ODIuMDE2ZDkyLjE2ZDk1Mi4zMTlkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDk1Mi4zMTlkNDQwLjMyZDk1Mi4zMTlkNDQwLjMyZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQxMDI0ZDQyNC45NmQ0NTAuNTU5ZDM1My4yOGQ0NTAuNTU5ZDMxMi4zMmQzNTguNGQzMDIuMDhkMzU4LjRkMjYxLjEyZDQ1MC41NTlkMTg5LjQ0ZDQ1MC41NTlkMjcxLjM2ZDMxNy40MzlkMzQzLjA0ZDMxNy40MzlkNDI0Ljk2ZDQ1MC41NTloUjNkNTgzLjY4UjRkNTIyLjI0UjVkOTIuMTZSNmQ3MDYuNTZSN2QwUjhkNjE0LjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIxOVIxMmQ5Mi4xNlIxM2Q1ODMuNjhSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjEwNm9SMWQ3NjhSMmFkMTQ4LjQ4ZDYwNC4xNmQ3Ni44ZDYwNC4xNmQ3Ni44ZDUyMi4yNGQxNDguNDhkNTIyLjI0ZDE0OC40OGQ2MDQuMTZkMTQ4LjQ4ZDExNjcuMzZkMTQ4LjQ4ZDExOTcuMDU2ZDEyNy40ODhkMTIxOC4wNDhkMTA2LjQ5NmQxMjM5LjA0ZDc2LjhkMTIzOS4wNGQtMzUuODRkMTIzOS4wNGQyNi42MjRkMTE3Ny42ZDc2LjhkMTE3Ny42ZDc2LjhkNzE2LjhkMTQ4LjQ4ZDY0NS4xMmQxNDguNDhkMTE2Ny4zNmhSM2QyMjUuMjhSNGQxNDguNDhSNWQtMzUuODRSNmQ1MDEuNzZSN2QtMjE1LjA0UjhkNTM3LjZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEwNlIxMmQtMzUuODRSMTNkMjI1LjI4UjE0YWkxaTJpMmkyaTJpMWkzaTNpMmkyaTJpMmkyaTJoZzoyMThvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ5NjIuNTZkMzc4Ljg4ZDEwMjRkMTYzLjg0ZDEwMjRkMTM0LjE0NGQxMDI0ZDExMy4xNTJkMTAwMy4wMDhkOTIuMTZkOTgyLjAxNmQ5Mi4xNmQ5NTIuMzE5ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkMTAyNGQ0MzAuMDhkMzA3LjE5OWQzMjcuNjhkNDUwLjU1OWQyNTZkNDUwLjU1OWQzNTguNGQzMDcuMTk5ZDQzMC4wOGQzMDcuMTk5aFIzZDU4My42OFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzE2LjhSN2QwUjhkNjI0LjY0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMThSMTJkOTIuMTZSMTNkNTgzLjY4UjE0YWkxaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTA1b1IxZDc2OFIyYWQxNDMuMzZkNjA0LjE2ZDcxLjY4ZDYwNC4xNmQ3MS42OGQ1MjIuMjRkMTQzLjM2ZDUyMi4yNGQxNDMuMzZkNjA0LjE2ZDE0My4zNmQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkNzE2LjhkMTQzLjM2ZDY0NS4xMmQxNDMuMzZkMTAyNGhSM2QyMTUuMDRSNGQxNDMuMzZSNWQ3MS42OFI2ZDUwMS43NlI3ZDBSOGQ0MzAuMDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEwNVIxMmQ3MS42OFIxM2QyMTUuMDRSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMTdvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ5NjIuNTZkMzc4Ljg4ZDEwMjRkMTYzLjg0ZDEwMjRkMTM0LjE0NGQxMDI0ZDExMy4xNTJkMTAwMy4wMDhkOTIuMTZkOTgyLjAxNmQ5Mi4xNmQ5NTIuMzE5ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkMTAyNGQzNTMuMjhkNDUwLjU1OWQyODEuNmQ0NTAuNTU5ZDE3OS4yZDMwNy4xOTlkMjUwLjg4ZDMwNy4xOTlkMzUzLjI4ZDQ1MC41NTloUjNkNTgzLjY4UjRkNTIyLjI0UjVkOTIuMTZSNmQ3MTYuOFI3ZDBSOGQ2MjQuNjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIxN1IxMmQ5Mi4xNlIxM2Q1ODMuNjhSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDRvUjFkNzY4UjJhZDQ0MC4zMmQxMDI0ZDM2OC42NGQxMDI0ZDM2OC42NGQ3MjcuMDRkMTUzLjZkNzI3LjA0ZDE1My42ZDEwMjRkODEuOTJkMTAyNGQ4MS45MmQ1MDEuNzZkMTUzLjZkNDMwLjA4ZDE1My42ZDcxNi44ZDIwNC44ZDY2NS41OTlkMzY4LjY0ZDY2NS41OTlkMzk4LjMzNmQ2NjUuNTk5ZDQxOS4zMjhkNjg2LjU5MmQ0NDAuMzJkNzA3LjU4NGQ0NDAuMzJkNzM3LjI4ZDQ0MC4zMmQxMDI0aFIzZDUxMlI0ZDQ0MC4zMlI1ZDgxLjkyUjZkNTkzLjkyUjdkMFI4ZDUxMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTA0UjEyZDgxLjkyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaGc6MjE2b1IxZDc2OFIyYWQ1NTIuOTZkNTMyLjQ4ZDUwOS45NTJkNTgxLjYzMmQ1MjIuMjRkNTkzLjkyZDUyMi4yNGQ5NTIuMzE5ZDUyMi4yNGQ5ODIuMDE2ZDUwMC43MzZkMTAwMy4wMDhkNDc5LjIzMmQxMDI0ZDQ1MC41NmQxMDI0ZDE2My44NGQxMDI0ZDE1MC41MjhkMTAxMC42ODhkMTA3LjUyZDEwNjcuMDA4ZDYxLjQ0ZDEwMTcuODU2ZDEwMy40MjRkOTYzLjU4NGQ5Mi4xNmQ5NTIuMzE5ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDYxLjgyNGQ1MzMuNTAzZDUwNC44MzJkNDg0LjM1MmQ1NTIuOTZkNTMyLjQ4ZDQwMS40MDhkNjA0LjE2ZDQwMS40MDhkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3OC41OTJkMTg0LjMyZDg3OC41OTJkNDAxLjQwOGQ2MDQuMTZkNDQwLjMyZDk1Mi4zMTlkNDQwLjMyZDY2NC41NzZkNDMwLjA4ZDY2NC41NzZkMjA4Ljg5NmQ5NDIuMDhkMjA4Ljg5NmQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5aFIzZDYxNC40UjRkNTUyLjk2UjVkNjEuNDRSNmQ1MzkuNjQ4UjdkLTQzLjAwOFI4ZDQ3OC4yMDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIxNlIxMmQ2MS40NFIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkxaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmhnOjEwM29SMWQ3NjhSMmFkNDcxLjA0ZDY2NS41OTlkNDA5LjZkNzI3LjA0ZDE1My42ZDcyNy4wNGQxNTMuNmQ5NjIuNTZkMzY4LjY0ZDk2Mi41NmQzNjguNjRkNzU3Ljc2ZDQ0MC4zMmQ3NTcuNzZkNDQwLjMyZDExNjcuMzZkNDQwLjMyZDExOTcuMDU2ZDQxOS4zMjhkMTIxOC4wNDhkMzk4LjMzNmQxMjM5LjA0ZDM2OC42NGQxMjM5LjA0ZDcxLjY4ZDEyMzkuMDRkMTMzLjEyZDExNzcuNmQzNjguNjRkMTE3Ny42ZDM2OC42NGQ5NzEuNzc2ZDMwNy4yZDEwMjRkMTUzLjZkMTAyNGQxMjMuOTA0ZDEwMjRkMTAyLjkxMmQxMDAzLjAwOGQ4MS45MmQ5ODIuMDE2ZDgxLjkyZDk1Mi4zMTlkODEuOTJkNzM3LjI4ZDgxLjkyZDcwNy41ODRkMTAyLjkxMmQ2ODYuNTkyZDEyMy45MDRkNjY1LjU5OWQxNTMuNmQ2NjUuNTk5ZDQ3MS4wNGQ2NjUuNTk5aFIzZDUxNy4xMlI0ZDQ3MS4wNFI1ZDcxLjY4UjZkMzU4LjRSN2QtMjE1LjA0UjhkMjg2LjcyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMDNSMTJkNzEuNjhSMTNkNTE3LjEyUjE0YWkxaTJpMmkyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaGc6MjE1b1IxZDc2OFIyYWQ0MTkuODRkOTQ2LjE3NmQzNjkuNjY0ZDk5Ni4zNTJkMjY2LjI0ZDg5NC45NzZkMTYyLjgxNmQ5OTYuMzUyZDExMi42NGQ5NDYuMTc2ZDIxNS4wNGQ4NDQuOGQxMTIuNjRkNzQzLjQyNGQxNjIuODE2ZDY5My4yNDhkMjY2LjI0ZDc5NC42MjRkMzY5LjY2NGQ2OTMuMjQ4ZDQxOS44NGQ3NDMuNDI0ZDMxNy40NGQ4NDQuOGQ0MTkuODRkOTQ2LjE3NmhSM2Q1MzIuNDhSNGQ0MTkuODRSNWQxMTIuNjRSNmQzMzAuNzUyUjdkMjcuNjQ4UjhkMjE4LjExMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjE1UjEyZDExMi42NFIxM2Q1MzIuNDhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxMDJvUjFkNzY4UjJhZDM4OS4xMmQ0NTAuNTU5ZDMyNi42NTZkNTEyZDE1My42ZDUxMmQxNTMuNmQ3MDYuNTZkMTk1LjU4NGQ2NjUuNTk5ZDM3OC44OGQ2NjUuNTk5ZDMxNi40MTZkNzI3LjA0ZDE1My42ZDcyNy4wNGQxNTMuNmQxMDI0ZDgxLjkyZDEwMjRkODEuOTJkNTIyLjI0ZDgxLjkyZDQ5Mi41NDRkMTAyLjkxMmQ0NzEuNTUyZDEyMy45MDRkNDUwLjU1OWQxNTMuNmQ0NTAuNTU5ZDM4OS4xMmQ0NTAuNTU5aFIzZDM3My43NlI0ZDM4OS4xMlI1ZDgxLjkyUjZkNTczLjQ0UjdkMFI4ZDQ5MS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTAyUjEyZDgxLjkyUjEzZDM3My43NlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaGc6MjE0b1IxZDc2OFIyYWQ1MTcuMTJkOTUyLjMxOWQ1MTcuMTJkOTgyLjAxNmQ0OTYuMTI4ZDEwMDMuMDA4ZDQ3NS4xMzZkMTAyNGQ0NDUuNDRkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkNTkzLjkyZDg3LjA0ZDU2NC4yMjNkMTA4LjAzMmQ1NDMuMjMyZDEyOS4wMjRkNTIyLjI0ZDE1OC43MmQ1MjIuMjRkNDQ1LjQ0ZDUyMi4yNGQ0NzUuMTM2ZDUyMi4yNGQ0OTYuMTI4ZDU0My4yMzJkNTE3LjEyZDU2NC4yMjNkNTE3LjEyZDU5My45MmQ1MTcuMTJkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDU5My45MmQxNjguOTZkNTkzLjkyZDE2OC45NmQ5NTIuMzE5ZDQzNS4yZDk1Mi4zMTlkNDA5LjZkNDUwLjU1OWQzNDMuMDRkNDUwLjU1OWQzNDMuMDRkMzY4LjY0ZDQwOS42ZDM2OC42NGQ0MDkuNmQ0NTAuNTU5ZDI3MS4zNmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMjA0LjhkMzY4LjY0ZDI3MS4zNmQzNjguNjRkMjcxLjM2ZDQ1MC41NTloUjNkNjA0LjE2UjRkNTE3LjEyUjVkODcuMDRSNmQ2NTUuMzZSN2QwUjhkNTY4LjMyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMTRSMTJkODcuMDRSMTNkNjA0LjE2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTAxb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDgwOC45NmQzNTguNGQ4ODAuNjRkMTUzLjZkODgwLjY0ZDIxNS4wNGQ4MTkuMmQzNTguNGQ4MTkuMmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDQzMC4wOGQ5NjIuNTZkNDMwLjA4ZDEwMjRoUjNkNDcxLjA0UjRkNDMwLjA4UjVkNzEuNjhSNmQzNTguNFI3ZDBSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEwMVIxMmQ3MS42OFIxM2Q0NzEuMDRSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIxM29SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDk1Mi4zMTlkNDM1LjJkOTUyLjMxOWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQxNC43MmQzMjAuNTExZDQxNC43MmQzMzcuOTE5ZDQwOC41NzZkNDAwLjM4NGQ0MDYuNTI4ZDQyMi45MTJkMzkxLjE2OGQ0MzguMjcxZDM3NS44MDhkNDUzLjYzMWQzNTUuMzI4ZDQ1My42MzFkMzIwLjUxMmQ0NTMuNjMxZDI5Ny45ODRkNDI5LjA1NmQyMzkuNjE2ZDM2NC41NDRkMjMwLjRkNDQ5LjUzNWQxNzkuMmQ0NDkuNTM1ZDE3OS4yZDQ0MS4zNDNkMTgwLjczNmQ0MjEuMzc2ZDE4Mi4yNzJkNDAxLjQwOGQxODYuMzY4ZDM2OC42NGQxODguNDE2ZDM0Ny4xMzVkMjA0LjhkMzMyLjI4OGQyMjEuMTg0ZDMxNy40MzlkMjQyLjY4OGQzMTcuNDM5ZDI3NC40MzJkMzE3LjQzOWQyOTUuOTM2ZDMzOS45NjdkMzU3LjM3NmQ0MDQuNDhkMzYzLjUyZDMyMC41MTFkNDE0LjcyZDMyMC41MTFoUjNkNjA0LjE2UjRkNTE3LjEyUjVkODcuMDRSNmQ3MDYuNTZSN2QwUjhkNjE5LjUyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMTNSMTJkODcuMDRSMTNkNjA0LjE2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTJpMmkyaGc6MTAwb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNzM3LjI4ZDcxLjY4ZDcwNy41ODRkOTIuNjcyZDY4Ni41OTJkMTEzLjY2NGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDM1OC40ZDY2NS41OTlkMzU4LjRkNTAxLjc2ZDQzMC4wOGQ0MzAuMDhkNDMwLjA4ZDEwMjRkMzU4LjRkOTYyLjU2ZDM1OC40ZDY3NS44MzlkMzA3LjJkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZoUjNkNTEyUjRkNDMwLjA4UjVkNzEuNjhSNmQ1OTMuOTJSN2QwUjhkNTIyLjI0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMDBSMTJkNzEuNjhSMTNkNTEyUjE0YWkxaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaTJoZzoyMTJvUjFkNzY4UjJhZDUxNy4xMmQ5NTIuMzE5ZDUxNy4xMmQ5ODIuMDE2ZDQ5Ni4xMjhkMTAwMy4wMDhkNDc1LjEzNmQxMDI0ZDQ0NS40NGQxMDI0ZDE1OC43MmQxMDI0ZDEyOS4wMjRkMTAyNGQxMDguMDMyZDEwMDMuMDA4ZDg3LjA0ZDk4Mi4wMTZkODcuMDRkOTUyLjMxOWQ4Ny4wNGQ1OTMuOTJkODcuMDRkNTY0LjIyM2QxMDguMDMyZDU0My4yMzJkMTI5LjAyNGQ1MjIuMjRkMTU4LjcyZDUyMi4yNGQ0NDUuNDRkNTIyLjI0ZDQ3NS4xMzZkNTIyLjI0ZDQ5Ni4xMjhkNTQzLjIzMmQ1MTcuMTJkNTY0LjIyM2Q1MTcuMTJkNTkzLjkyZDUxNy4xMmQ5NTIuMzE5ZDQzNS4yZDk1Mi4zMTlkNDM1LjJkNTkzLjkyZDE2OC45NmQ1OTMuOTJkMTY4Ljk2ZDk1Mi4zMTlkNDM1LjJkOTUyLjMxOWQ0MjQuOTZkNDUwLjU1OWQzNTMuMjhkNDUwLjU1OWQzMTIuMzJkMzU4LjRkMzAyLjA4ZDM1OC40ZDI2MS4xMmQ0NTAuNTU5ZDE4OS40NGQ0NTAuNTU5ZDI3MS4zNmQzMTcuNDM5ZDM0My4wNGQzMTcuNDM5ZDQyNC45NmQ0NTAuNTU5aFIzZDYwNC4xNlI0ZDUxNy4xMlI1ZDg3LjA0UjZkNzA2LjU2UjdkMFI4ZDYxOS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjEyUjEyZDg3LjA0UjEzZDYwNC4xNlIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJoZzo5OW9SMWQ3NjhSMmFkMzc4Ljg4ZDY2NS41OTlkMzE2LjQxNmQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQxMDI0ZDE0My4zNmQxMDI0ZDExMy42NjRkMTAyNGQ5Mi42NzJkMTAwMy4wMDhkNzEuNjhkOTgyLjAxNmQ3MS42OGQ5NTIuMzE5ZDcxLjY4ZDczNy4yOGQ3MS42OGQ3MDcuNTg0ZDkyLjY3MmQ2ODYuNTkyZDExMy42NjRkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQzNzguODhkNjY1LjU5OWhSM2QzNzguODhSNGQzNzguODhSNWQ3MS42OFI2ZDM1OC40UjdkMFI4ZDI4Ni43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpOTlSMTJkNzEuNjhSMTNkMzc4Ljg4UjE0YWkxaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaGc6MjExb1IxZDc2OFIyYWQ1MTcuMTJkOTUyLjMxOWQ1MTcuMTJkOTgyLjAxNmQ0OTYuMTI4ZDEwMDMuMDA4ZDQ3NS4xMzZkMTAyNGQ0NDUuNDRkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkNTkzLjkyZDg3LjA0ZDU2NC4yMjNkMTA4LjAzMmQ1NDMuMjMyZDEyOS4wMjRkNTIyLjI0ZDE1OC43MmQ1MjIuMjRkNDQ1LjQ0ZDUyMi4yNGQ0NzUuMTM2ZDUyMi4yNGQ0OTYuMTI4ZDU0My4yMzJkNTE3LjEyZDU2NC4yMjNkNTE3LjEyZDU5My45MmQ1MTcuMTJkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDU5My45MmQxNjguOTZkNTkzLjkyZDE2OC45NmQ5NTIuMzE5ZDQzNS4yZDk1Mi4zMTlkNDE5Ljg0ZDMwNy4xOTlkMzE3LjQ0ZDQ1MC41NTlkMjQ1Ljc2ZDQ1MC41NTlkMzQ4LjE2ZDMwNy4xOTlkNDE5Ljg0ZDMwNy4xOTloUjNkNjA0LjE2UjRkNTE3LjEyUjVkODcuMDRSNmQ3MTYuOFI3ZDBSOGQ2MjkuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIxMVIxMmQ4Ny4wNFIxM2Q2MDQuMTZSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk4b1IxZDc2OFIyYWQ0NDAuMzJkOTUyLjMxOWQ0NDAuMzJkOTgyLjAxNmQ0MTkuMzI4ZDEwMDMuMDA4ZDM5OC4zMzZkMTAyNGQzNjguNjRkMTAyNGQxNTMuNmQxMDI0ZDE1My42ZDk2My41ODRkODEuOTJkMTAzNC4yNGQ4MS45MmQ1MDEuNzZkMTUzLjZkNDMwLjA4ZDE1My42ZDcxNi44ZDIwNC44ZDY2NS41OTlkMzY4LjY0ZDY2NS41OTlkMzk4LjMzNmQ2NjUuNTk5ZDQxOS4zMjhkNjg2LjU5MmQ0NDAuMzJkNzA3LjU4NGQ0NDAuMzJkNzM3LjI4ZDQ0MC4zMmQ5NTIuMzE5ZDM2OC42NGQ5NjIuNTZkMzY4LjY0ZDcyNy4wNGQxNTMuNmQ3MjcuMDRkMTUzLjZkOTYyLjU2ZDM2OC42NGQ5NjIuNTZoUjNkNTEyUjRkNDQwLjMyUjVkODEuOTJSNmQ1OTMuOTJSN2QtMTAuMjRSOGQ1MTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTk4UjEyZDgxLjkyUjEzZDUxMlIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmhnOjIxMG9SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDk1Mi4zMTlkNDM1LjJkOTUyLjMxOWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDM1My4yOGQ0NTAuNTU5ZDI4MS42ZDQ1MC41NTlkMTc5LjJkMzA3LjE5OWQyNTAuODhkMzA3LjE5OWQzNTMuMjhkNDUwLjU1OWhSM2Q2MDQuMTZSNGQ1MTcuMTJSNWQ4Ny4wNFI2ZDcxNi44UjdkMFI4ZDYyOS43NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjEwUjEyZDg3LjA0UjEzZDYwNC4xNlIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6OTdvUjFkNzY4UjJhZDQxNC43MmQxMDI0ZDM0My4wNGQxMDI0ZDM0My4wNGQ5NzEuNzc2ZDI4MS42ZDEwMjRkMTI4ZDEwMjRkOTguMzA0ZDEwMjRkNzcuMzEyZDEwMDMuMDA4ZDU2LjMyZDk4Mi4wMTZkNTYuMzJkOTUyLjMxOWQ1Ni4zMmQ4ODAuNjRkNTYuMzJkODUwLjk0NGQ3Ny4zMTJkODI5Ljk1MmQ5OC4zMDRkODA4Ljk2ZDEyOGQ4MDguOTZkMzMyLjhkODA4Ljk2ZDI3MS4zNmQ4NjkuMzc2ZDEyOGQ4NjkuMzc2ZDEyOGQ5NjIuNTZkMzQzLjA0ZDk2Mi41NmQzNDMuMDRkNzI3LjA0ZDU2LjMyZDcyNy4wNGQxMTcuNzZkNjY1LjU5OWQzNDMuMDRkNjY1LjU5OWQzNzIuNzM2ZDY2NS41OTlkMzkzLjcyOGQ2ODYuNTkyZDQxNC43MmQ3MDcuNTg0ZDQxNC43MmQ3MzcuMjhkNDE0LjcyZDEwMjRoUjNkNDg2LjRSNGQ0MTQuNzJSNWQ1Ni4zMlI2ZDM1OC40UjdkMFI4ZDMwMi4wOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpOTdSMTJkNTYuMzJSMTNkNDg2LjRSMTRhaTFpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJoZzoyMDlvUjFkNzY4UjJhZDUyMi4yNGQxMDIyLjk3NmQzNzguODhkMTAyMi45NzZkMTg0LjMyZDU5OC4wMTZkMTQzLjM2ZDU5OC4wMTZkMTc0LjA4ZDY0OS4yMTZkMTc0LjA4ZDEwMjIuOTc2ZDkyLjE2ZDEwMjIuOTc2ZDkyLjE2ZDUyMS4yMTZkMjM2LjU0NGQ1MjEuMjE2ZDQzMC4wOGQ5NDYuMTc2ZDQ3MS4wNGQ5NDYuMTc2ZDQ0MC4zMmQ4OTQuOTc2ZDQ0MC4zMmQ1MjEuMjE2ZDUyMi4yNGQ1MjEuMjE2ZDUyMi4yNGQxMDIyLjk3NmQ0NDAuMzJkMzIwLjUxMWQ0NDAuMzJkMzM3LjkxOWQ0MzQuMTc2ZDQwMC4zODRkNDMyLjEyOGQ0MjIuOTEyZDQxNi43NjhkNDM4LjI3MWQ0MDEuNDA4ZDQ1My42MzFkMzgwLjkyOGQ0NTMuNjMxZDM0Ni4xMTJkNDUzLjYzMWQzMjMuNTg0ZDQyOS4wNTZkMjY1LjIxNmQzNjQuNTQ0ZDI1NmQ0NDkuNTM1ZDIwNC44ZDQ0OS41MzVkMjA0LjhkNDQxLjM0M2QyMDYuMzM2ZDQyMS4zNzZkMjA3Ljg3MmQ0MDEuNDA4ZDIxMS45NjhkMzY4LjY0ZDIxNC4wMTZkMzQ3LjEzNWQyMzAuNGQzMzIuMjg4ZDI0Ni43ODRkMzE3LjQzOWQyNjguMjg4ZDMxNy40MzlkMzAwLjAzMmQzMTcuNDM5ZDMyMS41MzZkMzM5Ljk2N2QzODIuOTc2ZDQwNC40OGQzODkuMTJkMzIwLjUxMWQ0NDAuMzJkMzIwLjUxMWhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzA2LjU2UjdkMS4wMjRSOGQ2MTQuNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA5UjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTJpMmkyaGc6OTZvUjFkNzY4UjJhZDE1My42ZDU5My45MmQ4MS45MmQ1OTMuOTJkLTIwLjQ4ZDQ1MC41NTlkNTEuMmQ0NTAuNTU5ZDE1My42ZDU5My45MmhSM2QxNTMuNlI0ZDE1My42UjVkLTIwLjQ4UjZkNTczLjQ0UjdkNDMwLjA4UjhkNTkzLjkyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk5NlIxMmQtMjAuNDhSMTNkMTUzLjZSMTRhaTFpMmkyaTJpMmhnOjIwOG9SMWQ3NjhSMmFkNTM3LjZkOTUyLjMxOWQ1MzcuNmQ5ODAuOTkyZDUxNi4wOTZkMTAwMi40OTZkNDk0LjU5MmQxMDI0ZDQ2NS45MmQxMDI0ZDEwNy41MmQxMDI0ZDEwNy41MmQ4MDguOTZkMzUuODRkODA4Ljk2ZDM1Ljg0ZDczNy4yOGQxMDcuNTJkNzM3LjI4ZDEwNy41MmQ2NjUuNTk5ZDE3OS4yZDU5My45MmQxMDcuNTJkNTkzLjkyZDEwNy41MmQ1MjIuMjRkNDY1LjkyZDUyMi4yNGQ0OTQuNTkyZDUyMi4yNGQ1MTYuMDk2ZDU0My43NDNkNTM3LjZkNTY1LjI0OGQ1MzcuNmQ1OTMuOTJkNTM3LjZkOTUyLjMxOWQ0NTUuNjhkOTUyLjMxOWQ0NTUuNjhkNTkzLjkyZDE4OS40NGQ1OTMuOTJkMTg5LjQ0ZDczNy4yOGQzMjIuNTZkNzM3LjI4ZDI1MC44OGQ4MDguOTZkMTg5LjQ0ZDgwOC45NmQxODkuNDRkMTAxMy43NmQyNTAuODhkOTUyLjMxOWQ0NTUuNjhkOTUyLjMxOWhSM2Q2MjQuNjRSNGQ1MzcuNlI1ZDM1Ljg0UjZkNTAxLjc2UjdkMFI4ZDQ2NS45MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA4UjEyZDM1Ljg0UjEzZDYyNC42NFIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaGc6OTVvUjFkNzY4UjJhZDQ3Ni4xNmQxMTY3LjM2ZC01LjEyZDExNjcuMzZkLTUuMTJkMTA5NS42OGQ0NzYuMTZkMTA5NS42OGQ0NzYuMTZkMTE2Ny4zNmhSM2Q0NzEuMDRSNGQ0NzYuMTZSNWQtNS4xMlI2ZC03MS42OFI3ZC0xNDMuMzZSOGQtNjYuNTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTk1UjEyZC01LjEyUjEzZDQ3MS4wNFIxNGFpMWkyaTJpMmkyaGc6MjA3b1IxZDc2OFIyYWQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQxMDI0ZDI0MC42NGQ0NTAuNTU5ZDE3NC4wOGQ0NTAuNTU5ZDE3NC4wOGQzNjguNjRkMjQwLjY0ZDM2OC42NGQyNDAuNjRkNDUwLjU1OWQxMDIuNGQ0NTAuNTU5ZDM1Ljg0ZDQ1MC41NTlkMzUuODRkMzY4LjY0ZDEwMi40ZDM2OC42NGQxMDIuNGQ0NTAuNTU5aFIzZDI2Ni4yNFI0ZDI0MC42NFI1ZDM1Ljg0UjZkNjU1LjM2UjdkMFI4ZDYxOS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA3UjEyZDM1Ljg0UjEzZDI2Ni4yNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5NG9SMWQ3NjhSMmFkNDc3LjE4NGQ2MjIuNTkyZDQyNS45ODRkNjczLjc5MWQyNjIuMTQ0ZDQ2Ny45NjdkMTA2LjQ5NmQ2NzMuNzkxZDU1LjI5NmQ2MjIuNTkyZDI2MS4xMmQzNjYuNTkyZDQ3Ny4xODRkNjIyLjU5MmhSM2Q1MzIuNDhSNGQ0NzcuMTg0UjVkNTUuMjk2UjZkNjU3LjQwOFI3ZDM1MC4yMDhSOGQ2MDIuMTEyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk5NFIxMmQ1NS4yOTZSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaGc6MjA2b1IxZDc2OFIyYWQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQxMDI0ZDI1MC44OGQ0NTAuNTU5ZDE3OS4yZDQ1MC41NTlkMTM4LjI0ZDM1OC40ZDEyOGQzNTguNGQ4Ny4wNGQ0NTAuNTU5ZDE1LjM2ZDQ1MC41NTlkOTcuMjhkMzE3LjQzOWQxNjguOTZkMzE3LjQzOWQyNTAuODhkNDUwLjU1OWhSM2QyNjYuMjRSNGQyNTAuODhSNWQxNS4zNlI2ZDcwNi41NlI3ZDBSOGQ2OTEuMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA2UjEyZDE1LjM2UjEzZDI2Ni4yNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6OTNvUjFkNzY4UjJhZDcxLjY4ZDEwMzQuMjRkMTQzLjM2ZDEwMzQuMjRkMTQzLjM2ZDUxMmQ3MS42OGQ1MTJkNzEuNjhkNDUwLjU1OWQyMTUuMDRkNDUwLjU1OWQyMTUuMDRkMTA5NS42OGQ3MS42OGQxMDk1LjY4ZDcxLjY4ZDEwMzQuMjRoUjNkMzI3LjY4UjRkMjE1LjA0UjVkNzEuNjhSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTkzUjEyZDcxLjY4UjEzZDMyNy42OFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDVvUjFkNzY4UjJhZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDEwMjRkMjU2ZDMwNy4xOTlkMTUzLjZkNDUwLjU1OWQ4MS45MmQ0NTAuNTU5ZDE4NC4zMmQzMDcuMTk5ZDI1NmQzMDcuMTk5aFIzZDI2Ni4yNFI0ZDI1NlI1ZDgxLjkyUjZkNzE2LjhSN2QwUjhkNjM0Ljg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMDVSMTJkODEuOTJSMTNkMjY2LjI0UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6OTJvUjFkNzY4UjJhZDMxLjc0NGQ0NTAuNTU5ZDMxNy40NGQxMDk1LjY4ZDI0MS42NjRkMTA5NS42OGQtNDAuOTZkNDUwLjU1OWQzMS43NDRkNDUwLjU1OWhSM2QzMTcuNDRSNGQzMTcuNDRSNWQtNDAuOTZSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ2MTQuNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpOTJSMTJkLTQwLjk2UjEzZDMxNy40NFIxNGFpMWkyaTJpMmkyaGc6MjA0b1IxZDc2OFIyYWQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQxMDI0ZDE4OS40NGQ0NTAuNTU5ZDExNy43NmQ0NTAuNTU5ZDE1LjM2ZDMwNy4xOTlkODcuMDRkMzA3LjE5OWQxODkuNDRkNDUwLjU1OWhSM2QyNjYuMjRSNGQxODkuNDRSNWQxNS4zNlI2ZDcxNi44UjdkMFI4ZDcwMS40NFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA0UjEyZDE1LjM2UjEzZDI2Ni4yNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjkxb1IxZDc2OFIyYWQyNTZkMTA5NS42OGQxMTIuNjRkMTA5NS42OGQxMTIuNjRkNDUwLjU1OWQyNTZkNDUwLjU1OWQyNTZkNTEyZDE4NC4zMmQ1MTJkMTg0LjMyZDEwMzQuMjRkMjU2ZDEwMzQuMjRkMjU2ZDEwOTUuNjhoUjNkMzI3LjY4UjRkMjU2UjVkMTEyLjY0UjZkNTczLjQ0UjdkLTcxLjY4UjhkNDYwLjhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTkxUjEyZDExMi42NFIxM2QzMjcuNjhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaGc6MjAzb1IxZDc2OFIyYWQ0NTAuNTZkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NS41OTlkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDUwLjU2ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ3OTguNzJkMjM1LjUyZDczNy4yOGQ0NTAuNTZkNzM3LjI4ZDQ1MC41NmQ4MDguOTZkMTc0LjA4ZDgwOC45NmQxNzQuMDhkOTUyLjMxOWQ0NTAuNTZkOTUyLjMxOWQ0NTAuNTZkMTAyNGQzODcuMDcyZDQ1MC41NTlkMzIwLjUxMmQ0NTAuNTU5ZDMyMC41MTJkMzY4LjY0ZDM4Ny4wNzJkMzY4LjY0ZDM4Ny4wNzJkNDUwLjU1OWQyNDguODMyZDQ1MC41NTlkMTgyLjI3MmQ0NTAuNTU5ZDE4Mi4yNzJkMzY4LjY0ZDI0OC44MzJkMzY4LjY0ZDI0OC44MzJkNDUwLjU1OWhSM2Q1MTJSNGQ0NTAuNTZSNWQ5Mi4xNlI2ZDY1NS4zNlI3ZDBSOGQ1NjMuMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjAzUjEyZDkyLjE2UjEzZDUxMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5MG9SMWQ3NjhSMmFkNDg2LjRkMTAyNGQ1Ni4zMmQxMDI0ZDU2LjMyZDkzNi45NmQzOTkuMzZkNTkzLjkyZDU2LjMyZDU5My45MmQ1Ni4zMmQ1MjIuMjRkNDg2LjRkNTIyLjI0ZDQ4Ni40ZDYxMC4zMDRkMTQzLjM2ZDk1Mi4zMTlkNDg2LjRkOTUyLjMxOWQ0ODYuNGQxMDI0aFIzZDU0Mi43MlI0ZDQ4Ni40UjVkNTYuMzJSNmQ1MDEuNzZSN2QwUjhkNDQ1LjQ0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk5MFIxMmQ1Ni4zMlIxM2Q1NDIuNzJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIwMm9SMWQ3NjhSMmFkNDUwLjU2ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkOTIuMTZkNTkzLjkyZDkyLjE2ZDUyMi4yNGQ0NTAuNTZkNTIyLjI0ZDQ1MC41NmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkNzk4LjcyZDIzNS41MmQ3MzcuMjhkNDUwLjU2ZDczNy4yOGQ0NTAuNTZkODA4Ljk2ZDE3NC4wOGQ4MDguOTZkMTc0LjA4ZDk1Mi4zMTlkNDUwLjU2ZDk1Mi4zMTlkNDUwLjU2ZDEwMjRkMzg5LjEyZDQ1MC41NTlkMzE3LjQ0ZDQ1MC41NTlkMjc2LjQ4ZDM1OC40ZDI2Ni4yNGQzNTguNGQyMjUuMjhkNDUwLjU1OWQxNTMuNmQ0NTAuNTU5ZDIzNS41MmQzMTcuNDM5ZDMwNy4yZDMxNy40MzlkMzg5LjEyZDQ1MC41NTloUjNkNTEyUjRkNDUwLjU2UjVkOTIuMTZSNmQ3MDYuNTZSN2QwUjhkNjE0LjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIwMlIxMmQ5Mi4xNlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjg5b1IxZDc2OFIyYWQ1MDEuNzZkODA4Ljk2ZDUwMS43NmQ4MzguNjU2ZDQ4MC43NjhkODU5LjY0OGQ0NTkuNzc2ZDg4MC42NGQ0MzAuMDhkODgwLjY0ZDMyNy42OGQ4ODAuNjRkMzI3LjY4ZDEwMjRkMjQ1Ljc2ZDEwMjRkMjQ1Ljc2ZDg4MC42NGQxNDMuMzZkODgwLjY0ZDExMy42NjRkODgwLjY0ZDkyLjY3MmQ4NTkuNjQ4ZDcxLjY4ZDgzOC42NTZkNzEuNjhkODA4Ljk2ZDcxLjY4ZDUyMi4yNGQxNTMuNmQ1MjIuMjRkMTUzLjZkODA4Ljk2ZDQxOS44NGQ4MDguOTZkNDE5Ljg0ZDUyMi4yNGQ1MDEuNzZkNTIyLjI0ZDUwMS43NmQ4MDguOTZoUjNkNTczLjQ0UjRkNTAxLjc2UjVkNzEuNjhSNmQ1MDEuNzZSN2QwUjhkNDMwLjA4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4OVIxMmQ3MS42OFIxM2Q1NzMuNDRSMTRhaTFpM2kzaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmhnOjIwMW9SMWQ3NjhSMmFkNDUwLjU2ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkOTIuMTZkNTkzLjkyZDkyLjE2ZDUyMi4yNGQ0NTAuNTZkNTIyLjI0ZDQ1MC41NmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkNzk4LjcyZDIzNS41MmQ3MzcuMjhkNDUwLjU2ZDczNy4yOGQ0NTAuNTZkODA4Ljk2ZDE3NC4wOGQ4MDguOTZkMTc0LjA4ZDk1Mi4zMTlkNDUwLjU2ZDk1Mi4zMTlkNDUwLjU2ZDEwMjRkMzk5LjM2ZDMwNy4xOTlkMjk2Ljk2ZDQ1MC41NTlkMjI1LjI4ZDQ1MC41NTlkMzI3LjY4ZDMwNy4xOTlkMzk5LjM2ZDMwNy4xOTloUjNkNTEyUjRkNDUwLjU2UjVkOTIuMTZSNmQ3MTYuOFI3ZDBSOGQ2MjQuNjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIwMVIxMmQ5Mi4xNlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzo4OG9SMWQ3NjhSMmFkNDkxLjUyZDEwMjRkMzk1LjI2NGQxMDI0ZDI1Mi45MjhkODE5LjJkMjQyLjY4OGQ4MTkuMmQxMDguNTQ0ZDEwMjRkMTAuMjRkMTAyNGQxOTUuNTg0ZDc2Mi44OGQyMC40OGQ1MjIuMjRkMTE4Ljc4NGQ1MjIuMjRkMjQ5Ljg1NmQ3MTUuNzc2ZDI2MC4wOTZkNzE1Ljc3NmQzODUuMDI0ZDUyMi4yNGQ0ODEuMjhkNTIyLjI0ZDMwOC4yMjRkNzYyLjg4ZDQ5MS41MmQxMDI0aFIzZDUwMS43NlI0ZDQ5MS41MlI1ZDEwLjI0UjZkNTAxLjc2UjdkMFI4ZDQ5MS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpODhSMTJkMTAuMjRSMTNkNTAxLjc2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIwMG9SMWQ3NjhSMmFkNDUwLjU2ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkOTIuMTZkNTkzLjkyZDkyLjE2ZDUyMi4yNGQ0NTAuNTZkNTIyLjI0ZDQ1MC41NmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkNzk4LjcyZDIzNS41MmQ3MzcuMjhkNDUwLjU2ZDczNy4yOGQ0NTAuNTZkODA4Ljk2ZDE3NC4wOGQ4MDguOTZkMTc0LjA4ZDk1Mi4zMTlkNDUwLjU2ZDk1Mi4zMTlkNDUwLjU2ZDEwMjRkMzMyLjhkNDUwLjU1OWQyNjEuMTJkNDUwLjU1OWQxNTguNzJkMzA3LjE5OWQyMzAuNGQzMDcuMTk5ZDMzMi44ZDQ1MC41NTloUjNkNTEyUjRkNDUwLjU2UjVkOTIuMTZSNmQ3MTYuOFI3ZDBSOGQ2MjQuNjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIwMFIxMmQ5Mi4xNlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzo4N29SMWQ3NjhSMmFkNzQyLjRkNTIyLjI0ZDYyOS43NmQxMDI0ZDQ5MS41MmQxMDI0ZDM5NC4yNGQ2NTYuMzg0ZDM4NGQ2NTYuMzg0ZDI4Ni43MmQxMDI0ZDE0OC40OGQxMDI0ZDM1Ljg0ZDUyMi4yNGQxMjhkNTIyLjI0ZDIwOS45MmQ5NTQuMzY3ZDIzMC40ZDk1NC4zNjdkMzQ4LjE2ZDUyMi4yNGQ0MzAuMDhkNTIyLjI0ZDU0Ny44NGQ5NTQuMzY3ZDU2OC4zMmQ5NTQuMzY3ZDY1MC4yNGQ1MjIuMjRkNzQyLjRkNTIyLjI0aFIzZDc3OC4yNFI0ZDc0Mi40UjVkMzUuODRSNmQ1MDEuNzZSN2QwUjhkNDY1LjkyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4N1IxMmQzNS44NFIxM2Q3NzguMjRSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE5OW9SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMzA3LjJkMTAyNGQzMDcuMmQxMDc2LjIyNGQzNDguMTZkMTA3Ni4yMjRkMzc3Ljg1NmQxMDc2LjIyNGQzOTguODQ4ZDEwOTYuNzA0ZDQxOS44NGQxMTE3LjE4NGQ0MTkuODRkMTE0Ni44OGQ0MTkuODRkMTE2Ny4zNmQ0MTkuODRkMTE5Ny4wNTZkMzk4Ljg0OGQxMjE4LjA0OGQzNzcuODU2ZDEyMzkuMDRkMzQ4LjE2ZDEyMzkuMDRkMTg0LjMyZDEyMzkuMDRkMjQ1Ljc2ZDExNzcuNmQzNDguMTZkMTE3Ny42ZDM0OC4xNmQxMTI2LjRkMjQ1Ljc2ZDExMjYuNGQyNDUuNzZkMTA3My4xNTJkMjk2Ljk2ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDY2NS41OTlkNDM1LjJkNjY1LjU5OWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDg4MC42NGQ1MTcuMTJkODgwLjY0ZDUxNy4xMmQ5NTIuMzE5aFIzZDU3OC41NlI0ZDUxNy4xMlI1ZDg3LjA0UjZkNTAxLjc2UjdkLTIxNS4wNFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTk5UjEyZDg3LjA0UjEzZDU3OC41NlIxNGFpMWkzaTNpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJoZzo4Nm9SMWQ3NjhSMmFkNTQyLjcyZDUyMi4yNGQzNTEuMjMyZDEwMjRkMjE4LjExMmQxMDI0ZDMwLjcyZDUyMi4yNGQxMjIuODhkNTIyLjI0ZDI3Ni40OGQ5NTQuMzY3ZDI5Ni45NmQ5NTQuMzY3ZDQ1MC41NmQ1MjIuMjRkNTQyLjcyZDUyMi4yNGhSM2Q1NzMuNDRSNGQ1NDIuNzJSNWQzMC43MlI2ZDUwMS43NlI3ZDBSOGQ0NzEuMDRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTg2UjEyZDMwLjcyUjEzZDU3My40NFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoxOThvUjFkNzY4UjJhZDY2NS42ZDEwMjRkMzY4LjY0ZDEwMjRkMzY4LjY0ZDg4MC42NGQxNzQuMDhkODgwLjY0ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTkzLjkyZDkyLjE2ZDU2NC4yMjNkMTEzLjE1MmQ1NDMuMjMyZDEzNC4xNDRkNTIyLjI0ZDE2My44NGQ1MjIuMjRkNjY1LjZkNTIyLjI0ZDY2NS42ZDU5My45MmQ0NTAuNTZkNTkzLjkyZDQ1MC41NmQ3OTguNzJkNTEyZDczNy4yOGQ2NjUuNmQ3MzcuMjhkNjY1LjZkODA4Ljk2ZDQ1MC41NmQ4MDguOTZkNDUwLjU2ZDk1Mi4zMTlkNjY1LjZkOTUyLjMxOWQ2NjUuNmQxMDI0ZDM2OC42NGQ4MDguOTZkMzY4LjY0ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ4NzAuNGQyMzUuNTJkODA4Ljk2ZDM2OC42NGQ4MDguOTZoUjNkNzI3LjA0UjRkNjY1LjZSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTk4UjEyZDkyLjE2UjEzZDcyNy4wNFIxNGFpMWkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaGc6ODVvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ5NjIuNTZkMzc4Ljg4ZDEwMjRkMTYzLjg0ZDEwMjRkMTM0LjE0NGQxMDI0ZDExMy4xNTJkMTAwMy4wMDhkOTIuMTZkOTgyLjAxNmQ5Mi4xNmQ5NTIuMzE5ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkMTAyNGhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4NVIxMmQ5Mi4xNlIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaGc6MTk3b1IxZDc2OFIyYWQ1MjIuMjRkMTAyNGQ0NDAuMzJkMTAyNGQ0NDAuMzJkODgwLjY0ZDE3NC4wOGQ4ODAuNjRkMTc0LjA4ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTY0LjIyM2QxMTMuMTUyZDU0My4yMzJkMTM0LjE0NGQ1MjIuMjRkMTYzLjg0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQxMDI0ZDQ0MC4zMmQ4MDguOTZkNDQwLjMyZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ4NzAuNGQyMzUuNTJkODA4Ljk2ZDQ0MC4zMmQ4MDguOTZkNDA5LjZkMzk2LjI4OGQ0MDkuNmQ0MjIuOTEyZDM5MC4xNDRkNDQyLjM2N2QzNTkuNDI0ZDQ3NC4xMTFkMzQ4LjE2ZDQ4NS4zNzZkMzI1LjYzMmQ0ODUuMzc2ZDMwMS4wNTZkNDg1LjM3NmQyNzguNTI4ZDQ4NS4zNzZkMjY3LjI2NGQ0NzQuMTExZDIzNi41NDRkNDQyLjM2N2QyMTcuMDg4ZDQyMi45MTJkMjE3LjA4OGQzOTYuMjg4ZDIxNy4wODhkMzY5LjY2NGQyMzYuNTQ0ZDM1MC4yMDdkMjY3LjI2NGQzMTguNDYzZDI4Ni43MmQyOTYuOTZkMzEzLjM0NGQyOTYuOTZkMzM4Ljk0NGQyOTYuOTZkMzU5LjQyNGQzMTguNDYzZDM5MC4xNDRkMzUwLjIwN2Q0MDkuNmQzNjkuNjY0ZDQwOS42ZDM5Ni4yODhkMzY0LjU0NGQzOTYuMjg4ZDMxMy4zNDRkMzQ1LjA4N2QyNjIuMTQ0ZDM5Ni4yODhkMzEzLjM0NGQ0NDcuNDg3ZDM2NC41NDRkMzk2LjI4OGhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzI3LjA0UjdkMFI4ZDYzNC44OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTk3UjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTNpM2kyaTJpMWkyaTJpMmkyaTJpMWkzaTJpM2kyaTNpMmkzaTNpMmkzaTNpMmkzaTFpMmkyaTJpMmhnOjg0b1IxZDc2OFIyYWQzODRkNTkzLjkyZDIzNS41MmQ1OTMuOTJkMjM1LjUyZDEwMjRkMTUzLjZkMTAyNGQxNTMuNmQ1OTMuOTJkNS4xMmQ1OTMuOTJkNS4xMmQ1MjIuMjRkMzg0ZDUyMi4yNGQzODRkNTkzLjkyaFIzZDM4OS4xMlI0ZDM4NFI1ZDUuMTJSNmQ1MDEuNzZSN2QwUjhkNDk2LjY0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4NFIxMmQ1LjEyUjEzZDM4OS4xMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoxOTZvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmQ0MTcuNzkyZDQ1MC41NTlkMzUxLjIzMmQ0NTAuNTU5ZDM1MS4yMzJkMzY4LjY0ZDQxNy43OTJkMzY4LjY0ZDQxNy43OTJkNDUwLjU1OWQyNzkuNTUyZDQ1MC41NTlkMjEyLjk5MmQ0NTAuNTU5ZDIxMi45OTJkMzY4LjY0ZDI3OS41NTJkMzY4LjY0ZDI3OS41NTJkNDUwLjU1OWhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNjU1LjM2UjdkMFI4ZDU2My4yUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxOTZSMTJkOTIuMTZSMTNkNjE0LjRSMTRhaTFpMmkyaTJpMmkyaTJpM2kzaTJpMmkxaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODNvUjFkNzY4UjJhZDQzMC4wOGQ5NTIuMzE5ZDQzMC4wOGQ5ODIuMDE2ZDQwOS4wODhkMTAwMy4wMDhkMzg4LjA5NmQxMDI0ZDM1OC40ZDEwMjRkNzEuNjhkMTAyNGQ3MS42OGQ5NTIuMzE5ZDM0OC4xNmQ5NTIuMzE5ZDM0OC4xNmQ4MDguOTZkMTQzLjM2ZDgwOC45NmQxMTMuNjY0ZDgwOC45NmQ5Mi42NzJkNzg3Ljk2OGQ3MS42OGQ3NjYuOTc2ZDcxLjY4ZDczNy4yOGQ3MS42OGQ1OTMuOTJkNzEuNjhkNTY0LjIyM2Q5Mi42NzJkNTQzLjIzMmQxMTMuNjY0ZDUyMi4yNGQxNDMuMzZkNTIyLjI0ZDQzMC4wOGQ1MjIuMjRkNDMwLjA4ZDU5My45MmQxNTMuNmQ1OTMuOTJkMTUzLjZkNzM3LjI4ZDM1OC40ZDczNy4yOGQzODguMDk2ZDczNy4yOGQ0MDkuMDg4ZDc1OC4yNzFkNDMwLjA4ZDc3OS4yNjRkNDMwLjA4ZDgwOC45NmQ0MzAuMDhkOTUyLjMxOWhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDUwMS43NlI3ZDBSOGQ0MzAuMDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTgzUjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpM2kzaTJoZzoxOTVvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmQ0MjcuMDA4ZDMyMC41MTFkNDI3LjAwOGQzMzcuOTE5ZDQyMC44NjRkNDAwLjM4NGQ0MTguODE2ZDQyMi45MTJkNDAzLjQ1NmQ0MzguMjcxZDM4OC4wOTZkNDUzLjYzMWQzNjcuNjE2ZDQ1My42MzFkMzMyLjhkNDUzLjYzMWQzMTAuMjcyZDQyOS4wNTZkMjUxLjkwNGQzNjQuNTQ0ZDI0Mi42ODhkNDQ5LjUzNWQxOTEuNDg4ZDQ0OS41MzVkMTkxLjQ4OGQ0NDEuMzQzZDE5My4wMjRkNDIxLjM3NmQxOTQuNTZkNDAxLjQwOGQxOTguNjU2ZDM2OC42NGQyMDAuNzA0ZDM0Ny4xMzVkMjE3LjA4OGQzMzIuMjg4ZDIzMy40NzJkMzE3LjQzOWQyNTQuOTc2ZDMxNy40MzlkMjg2LjcyZDMxNy40MzlkMzA4LjIyNGQzMzkuOTY3ZDM2OS42NjRkNDA0LjQ4ZDM3NS44MDhkMzIwLjUxMWQ0MjcuMDA4ZDMyMC41MTFoUjNkNjE0LjRSNGQ1MjIuMjRSNWQ5Mi4xNlI2ZDcwNi41NlI3ZDBSOGQ2MTQuNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTk1UjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTNpM2kyaTJpMWkyaTJpMmkyaTJpMWkzaTNpM2kzaTJpMmkyaTNpM2kzaTNpM2kyaTJpMmhnOjgyb1IxZDc2OFIyYWQ1MzIuNDhkMTAyNGQ0MjguMDMyZDEwMjRkMjE1LjA0ZDgwOC45NmQ0NDAuMzJkODA4Ljk2ZDQ0MC4zMmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NC41NzZkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDc5LjIzMmQ1MjIuMjRkNTAwLjczNmQ1NDMuNzQzZDUyMi4yNGQ1NjUuMjQ4ZDUyMi4yNGQ1OTMuOTJkNTIyLjI0ZDc4OC40OGQ1MjIuMjRkODcwLjRkNDUwLjU2ZDg3MC40ZDM4OS4xMmQ4NzAuNGQzODkuMTJkODgxLjY2NGQ1MzIuNDhkMTAyNGhSM2Q1ODguOFI0ZDUzMi40OFI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4MlIxMmQ5Mi4xNlIxM2Q1ODguOFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTJpMmkyaGc6MTk0b1IxZDc2OFIyYWQ1MjIuMjRkMTAyNGQ0NDAuMzJkMTAyNGQ0NDAuMzJkODgwLjY0ZDE3NC4wOGQ4ODAuNjRkMTc0LjA4ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTY0LjIyM2QxMTMuMTUyZDU0My4yMzJkMTM0LjE0NGQ1MjIuMjRkMTYzLjg0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQxMDI0ZDQ0MC4zMmQ4MDguOTZkNDQwLjMyZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ4NzAuNGQyMzUuNTJkODA4Ljk2ZDQ0MC4zMmQ4MDguOTZkNDM1LjJkNDUwLjU1OWQzNjMuNTJkNDUwLjU1OWQzMjIuNTZkMzU4LjRkMzEyLjMyZDM1OC40ZDI3MS4zNmQ0NTAuNTU5ZDE5OS42OGQ0NTAuNTU5ZDI4MS42ZDMxNy40MzlkMzUzLjI4ZDMxNy40MzlkNDM1LjJkNDUwLjU1OWhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzA2LjU2UjdkMFI4ZDYxNC40UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxOTRSMTJkOTIuMTZSMTNkNjE0LjRSMTRhaTFpMmkyaTJpMmkyaTJpM2kzaTJpMmkxaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjgxb1IxZDc2OFIyYWQ1MTcuMTJkOTUyLjMxOWQ1MTcuMTJkOTgyLjAxNmQ0OTYuMTI4ZDEwMDMuMDA4ZDQ3NS4xMzZkMTAyNGQ0NDUuNDRkMTAyNGQzNjMuNTJkMTAyNGQzNjMuNTJkMTA5NS42OGQyOTEuODRkMTA5NS42OGQyOTEuODRkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkNTkzLjkyZDg3LjA0ZDU2NC4yMjNkMTA4LjAzMmQ1NDMuMjMyZDEyOS4wMjRkNTIyLjI0ZDE1OC43MmQ1MjIuMjRkNDQ1LjQ0ZDUyMi4yNGQ0NzUuMTM2ZDUyMi4yNGQ0OTYuMTI4ZDU0My4yMzJkNTE3LjEyZDU2NC4yMjNkNTE3LjEyZDU5My45MmQ1MTcuMTJkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDU5My45MmQxNjguOTZkNTkzLjkyZDE2OC45NmQ5NTIuMzE5ZDI5MS44NGQ5NTIuMzE5ZDM2My41MmQ4NzkuNjE2ZDM2My41MmQ5NTIuMzE5ZDQzNS4yZDk1Mi4zMTloUjNkNjA0LjE2UjRkNTE3LjEyUjVkODcuMDRSNmQ1MDEuNzZSN2QtNzEuNjhSOGQ0MTQuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTgxUjEyZDg3LjA0UjEzZDYwNC4xNlIxNGFpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkyaTJpMmhnOjE5M29SMWQ3NjhSMmFkNTIyLjI0ZDEwMjRkNDQwLjMyZDEwMjRkNDQwLjMyZDg4MC42NGQxNzQuMDhkODgwLjY0ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTkzLjkyZDkyLjE2ZDU2NC4yMjNkMTEzLjE1MmQ1NDMuMjMyZDEzNC4xNDRkNTIyLjI0ZDE2My44NGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkMTAyNGQ0NDAuMzJkODA4Ljk2ZDQ0MC4zMmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkODcwLjRkMjM1LjUyZDgwOC45NmQ0NDAuMzJkODA4Ljk2ZDQ0MC4zMmQzMDcuMTk5ZDMzNy45MmQ0NTAuNTU5ZDI2Ni4yNGQ0NTAuNTU5ZDM2OC42NGQzMDcuMTk5ZDQ0MC4zMmQzMDcuMTk5aFIzZDYxNC40UjRkNTIyLjI0UjVkOTIuMTZSNmQ3MTYuOFI3ZDBSOGQ2MjQuNjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE5M1IxMmQ5Mi4xNlIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkyaTJpMmkzaTNpMmkyaTFpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjgwb1IxZDc2OFIyYWQ1MjIuMjRkODA4Ljk2ZDUyMi4yNGQ4MzcuNjMyZDUwMC43MzZkODU5LjEzNmQ0NzkuMjMyZDg4MC42NGQ0NTAuNTZkODgwLjY0ZDE3NC4wOGQ4ODAuNjRkMTc0LjA4ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkOTIuMTZkNTkzLjkyZDkyLjE2ZDUyMi4yNGQ0NTAuNTZkNTIyLjI0ZDQ3OS4yMzJkNTIyLjI0ZDUwMC43MzZkNTQzLjc0M2Q1MjIuMjRkNTY1LjI0OGQ1MjIuMjRkNTkzLjkyZDUyMi4yNGQ4MDguOTZkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmhSM2Q1OTkuMDRSNGQ1MjIuMjRSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpODBSMTJkOTIuMTZSMTNkNTk5LjA0UjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaTJoZzoxOTJvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmQzNjMuNTJkNDUwLjU1OWQyOTEuODRkNDUwLjU1OWQxODkuNDRkMzA3LjE5OWQyNjEuMTJkMzA3LjE5OWQzNjMuNTJkNDUwLjU1OWhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzE2LjhSN2QwUjhkNjI0LjY0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxOTJSMTJkOTIuMTZSMTNkNjE0LjRSMTRhaTFpMmkyaTJpMmkyaTJpM2kzaTJpMmkxaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzo3OW9SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDk1Mi4zMTlkNDM1LjJkOTUyLjMxOWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5aFIzZDYwNC4xNlI0ZDUxNy4xMlI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNzlSMTJkODcuMDRSMTNkNjA0LjE2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjE5MW9SMWQ3NjhSMmFkODEuOTJkOTUyLjMxOWQ4MS45MmQ5MjIuNjI0ZDEwMi45MTJkOTAxLjYzMmQxMjMuOTA0ZDg4MC42NGQxNTMuNmQ4ODAuNjRkMjI1LjI4ZDg4MC42NGQyMjUuMjhkODA4Ljk2ZDMwNy4yZDgwOC45NmQzMDcuMmQ4ODAuNjRkMzA3LjJkOTEwLjMzNmQyODYuMjA4ZDkzMS4zMjhkMjY1LjIxNmQ5NTIuMzE5ZDIzNS41MmQ5NTIuMzE5ZDE2My44NGQ5NTIuMzE5ZDE2My44NGQxMDk1LjY4ZDM1OC40ZDEwOTUuNjhkMzU4LjRkMTAyNGQ0NDAuMzJkMTAyNGQ0NDAuMzJkMTA5NS42OGQ0NDAuMzJkMTEyNS4zNzZkNDE5LjMyOGQxMTQ2LjM2OGQzOTguMzM2ZDExNjcuMzZkMzY4LjY0ZDExNjcuMzZkMTUzLjZkMTE2Ny4zNmQxMjMuOTA0ZDExNjcuMzZkMTAyLjkxMmQxMTQ2LjM2OGQ4MS45MmQxMTI1LjM3NmQ4MS45MmQxMDk1LjY4ZDgxLjkyZDk1Mi4zMTlkMjE1LjA0ZDY2NS41OTlkMzA3LjJkNjY1LjU5OWQzMDcuMmQ3NDcuNTJkMjE1LjA0ZDc0Ny41MmQyMTUuMDRkNjY1LjU5OWhSM2Q0NjAuOFI0ZDQ0MC4zMlI1ZDgxLjkyUjZkMzU4LjRSN2QtMTQzLjM2UjhkMjc2LjQ4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxOTFSMTJkODEuOTJSMTNkNDYwLjhSMTRhaTFpM2kzaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjc4b1IxZDc2OFIyYWQ1MjIuMjRkMTAyMi45NzZkMzc4Ljg4ZDEwMjIuOTc2ZDE4NC4zMmQ1OTguMDE2ZDE0My4zNmQ1OTguMDE2ZDE3NC4wOGQ2NDkuMjE2ZDE3NC4wOGQxMDIyLjk3NmQ5Mi4xNmQxMDIyLjk3NmQ5Mi4xNmQ1MjEuMjE2ZDIzNi41NDRkNTIxLjIxNmQ0MzAuMDhkOTQ2LjE3NmQ0NzEuMDRkOTQ2LjE3NmQ0NDAuMzJkODk0Ljk3NmQ0NDAuMzJkNTIxLjIxNmQ1MjIuMjRkNTIxLjIxNmQ1MjIuMjRkMTAyMi45NzZoUjNkNjE0LjRSNGQ1MjIuMjRSNWQ5Mi4xNlI2ZDUwMi43ODRSN2QxLjAyNFI4ZDQxMC42MjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTc4UjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE5MG9SMWQ3NjhSMmFkNjA0LjE2ZDczOC4zMDRkNDYwLjhkODgxLjY2NGQ0NjAuOGQ4OTAuODhkNTIxLjIxNmQ4OTAuODhkNTkxLjg3MmQ4MjEuMjQ4ZDYwMi4xMTJkODIxLjI0OGQ2MDIuMTEyZDEwMjRkNTI4LjM4NGQxMDI0ZDUyOC4zODRkOTUyLjMxOWQzODRkOTUyLjMxOWQzODRkODY2LjMwNGQ1MDkuOTUyZDczNy4yOGQ2MDQuMTZkNzM4LjMwNGQyNjguMjg4ZDY2NS41OTlkMjY4LjI4OGQ2OTUuMjk2ZDI0Ny4yOTZkNzE2LjI4OGQyMjYuMzA0ZDczNy4yOGQxOTYuNjA4ZDczNy4yOGQ1MS4yZDczNy4yOGQ1MS4yZDY3NS44MzlkMTc5LjJkNjc1LjgzOWQxNzkuMmQ2NTIuMjg4ZDExOC43ODRkNTkxLjg3MmQxOTEuNDg4ZDUxNy4xMmQxOTEuNDg4ZDUxMmQ1MS4yZDUxMmQ1MS4yZDQ1MC41NTlkMjY4LjI4OGQ0NTAuNTU5ZDI2OC4yODhkNTE4LjE0NGQxOTQuNTZkNTkxLjg3MmQyNjguMjg4ZDU5My45MmQyNjguMjg4ZDY2NS41OTlkNDcwLjAxNmQ0NTAuNTU5ZDIxOC4xMTJkMTAyNGQxNDIuMzM2ZDEwMjRkMzk3LjMxMmQ0NTAuNTU5ZDQ3MC4wMTZkNDUwLjU1OWhSM2Q2NTUuMzZSNGQ2MDQuMTZSNWQ1MS4yUjZkNTczLjQ0UjdkMFI4ZDUyMi4yNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTkwUjEyZDUxLjJSMTNkNjU1LjM2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpMWkyaTJpMmkyaGc6NzdvUjFkNzY4UjJhZDU5My45MmQxMDIyLjk3NmQ1MTJkMTAyMi45NzZkNTEyZDY0Ni4xNDRkNTQyLjcyZDU5NC45NDRkNDk2LjY0ZDU5NC45NDRkMzcwLjY4OGQ4ODAuNjRkMzExLjI5NmQ4ODAuNjRkMTg5LjQ0ZDU5NC45NDRkMTQzLjM2ZDU5NC45NDRkMTc0LjA4ZDY0Ni4xNDRkMTc0LjA4ZDEwMjIuOTc2ZDkyLjE2ZDEwMjIuOTc2ZDkyLjE2ZDUyMi4yNGQyMzguNTkyZDUyMi4yNGQzMzkuOTY4ZDc2MS44NTZkMzUwLjIwOGQ3NjEuODU2ZDQ1MS41ODRkNTIyLjI0ZDU5My45MmQ1MjIuMjRkNTkzLjkyZDEwMjIuOTc2aFIzZDY4Ni4wOFI0ZDU5My45MlI1ZDkyLjE2UjZkNTAxLjc2UjdkMS4wMjRSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNzdSMTJkOTIuMTZSMTNkNjg2LjA4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTg5b1IxZDc2OFIyYWQ2MTkuNTJkMTAyNGQ0MDIuNDMyZDEwMjRkNDAyLjQzMmQ5MzYuOTZkNTQ3Ljg0ZDgzNi42MDhkNTQ3Ljg0ZDc5OC43MmQ0MDIuNDMyZDc5OC43MmQ0MDIuNDMyZDczNy4yOGQ1NDcuODRkNzM3LjI4ZDU3Ny41MzZkNzM3LjI4ZDU5OC41MjhkNzU4LjI3MWQ2MTkuNTJkNzc5LjI2NGQ2MTkuNTJkODA4Ljk2ZDYxOS41MmQ4NTUuMDRkNDc5LjIzMmQ5NTIuMzE5ZDQ3OS4yMzJkOTYyLjU2ZDYxOS41MmQ5NjIuNTZkNjE5LjUyZDEwMjRkMjQ4LjgzMmQ3MzcuMjhkMTc1LjEwNGQ3MzcuMjhkMTc1LjEwNGQ1MjIuMjRkMTY0Ljg2NGQ1MjIuMjRkMTA4LjU0NGQ1OTMuOTJkMzAuNzJkNTkzLjkyZDE0Ni40MzJkNDUwLjU1OWQyNDguODMyZDQ1MC41NTlkMjQ4LjgzMmQ3MzcuMjhkNDkwLjQ5NmQ0NTAuNTU5ZDIzOC41OTJkMTAyNGQxNjIuODE2ZDEwMjRkNDE3Ljc5MmQ0NTAuNTU5ZDQ5MC40OTZkNDUwLjU1OWhSM2Q2NTUuMzZSNGQ2MTkuNTJSNWQzMC43MlI2ZDU3My40NFI3ZDBSOGQ1NDIuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4OVIxMmQzMC43MlIxM2Q2NTUuMzZSMTRhaTFpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjc2b1IxZDc2OFIyYWQ0NTAuNTZkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQ5NTIuMzE5ZDM2OC42NGQ5NTIuMzE5ZDM2OC42NGQ4ODAuNjRkNDUwLjU2ZDg4MC42NGQ0NTAuNTZkMTAyNGhSM2Q0NjAuOFI0ZDQ1MC41NlI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk3NlIxMmQ5Mi4xNlIxM2Q0NjAuOFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoxODhvUjFkNzY4UjJhZDYwNC4xNmQ3MzguMzA0ZDQ2MC44ZDg4MS42NjRkNDYwLjhkODkwLjg4ZDUyMS4yMTZkODkwLjg4ZDU5MS44NzJkODIxLjI0OGQ2MDIuMTEyZDgyMS4yNDhkNjAyLjExMmQxMDI0ZDUyOC4zODRkMTAyNGQ1MjguMzg0ZDk1Mi4zMTlkMzg0ZDk1Mi4zMTlkMzg0ZDg2Ni4zMDRkNTA5Ljk1MmQ3MzcuMjhkNjA0LjE2ZDczOC4zMDRkMjQ4LjgzMmQ3MzcuMjhkMTc1LjEwNGQ3MzcuMjhkMTc1LjEwNGQ1MjIuMjRkMTY0Ljg2NGQ1MjIuMjRkMTA4LjU0NGQ1OTMuOTJkMzAuNzJkNTkzLjkyZDE0Ni40MzJkNDUwLjU1OWQyNDguODMyZDQ1MC41NTlkMjQ4LjgzMmQ3MzcuMjhkNDkwLjQ5NmQ0NTAuNTU5ZDIzOC41OTJkMTAyNGQxNjIuODE2ZDEwMjRkNDE3Ljc5MmQ0NTAuNTU5ZDQ5MC40OTZkNDUwLjU1OWhSM2Q2NTUuMzZSNGQ2MDQuMTZSNWQzMC43MlI2ZDU3My40NFI3ZDBSOGQ1NDIuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4OFIxMmQzMC43MlIxM2Q2NTUuMzZSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6NzVvUjFkNzY4UjJhZDU0Ny44NGQ1MjIuMjRkMzIwLjUxMmQ3MzQuMjA4ZDMyMC41MTJkNzQ0LjQ0OGQ0NTAuNTZkNzQ0LjQ0OGQ0ODAuMjU2ZDc0NC40NDhkNTAxLjI0OGQ3NjUuNDRkNTIyLjI0ZDc4Ni40MzJkNTIyLjI0ZDgxNi4xMjdkNTIyLjI0ZDEwMjRkNDQwLjMyZDEwMjRkNDQwLjMyZDgwOC45NmQxNzQuMDhkODA4Ljk2ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDc5NS42NDhkNDQ2LjQ2NGQ1MjIuMjRkNTQ3Ljg0ZDUyMi4yNGhSM2Q1OTMuOTJSNGQ1NDcuODRSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNzVSMTJkOTIuMTZSMTNkNTkzLjkyUjE0YWkxaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODdvUjFkNzY4UjJhZDE3NC4wOGQ4NDQuOGQ1MS4yZDcyMi45NDRkOTIuMTZkNjcyLjc2OGQyNjYuMjRkODQ0LjhkOTIuMTZkMTAxNi44MzJkNTEuMmQ5NjUuNjMyZDE3NC4wOGQ4NDQuOGQzNzguODhkODQ0LjhkMjU2ZDcyMi45NDRkMjk2Ljk2ZDY3Mi43NjhkNDcxLjA0ZDg0NC44ZDI5Ni45NmQxMDE2LjgzMmQyNTZkOTY1LjYzMmQzNzguODhkODQ0LjhoUjNkNTIyLjI0UjRkNDcxLjA0UjVkNTEuMlI2ZDM1MS4yMzJSN2Q3LjE2OFI4ZDMwMC4wMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4N1IxMmQ1MS4yUjEzZDUyMi4yNFIxNGFpMWkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaGc6NzRvUjFkNzY4UjJhZDQxOS44NGQ5NTIuMzE5ZDQxOS44NGQ5NzQuODQ4ZDM5OS4zNmQ5OTguNGQzNzYuODMyZDEwMjRkMzQ4LjE2ZDEwMjRkMTMzLjEyZDEwMjRkMTA0LjQ0OGQxMDI0ZDgyLjk0NGQxMDAyLjQ5NmQ2MS40NGQ5ODAuOTkyZDYxLjQ0ZDk1Mi4zMTlkNjEuNDRkODgwLjY0ZDE0My4zNmQ4ODAuNjRkMTQzLjM2ZDk1Mi4zMTlkMzM3LjkyZDk1Mi4zMTlkMzM3LjkyZDU5My45MmQ2MS40NGQ1OTMuOTJkNjEuNDRkNTIyLjI0ZDQxOS44NGQ1MjIuMjRkNDE5Ljg0ZDk1Mi4zMTloUjNkNTEyUjRkNDE5Ljg0UjVkNjEuNDRSNmQ1MDEuNzZSN2QwUjhkNDQwLjMyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk3NFIxMmQ2MS40NFIxM2Q1MTJSMTRhaTFpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTg2b1IxZDc2OFIyYWQzNTMuMjhkNzM3LjI4ZDM1My4yOGQ3NjYuOTc2ZDMzMi4yODhkNzg3Ljk2OGQzMTEuMjk2ZDgwOC45NmQyODEuNmQ4MDguOTZkMTM4LjI0ZDgwOC45NmQxMDguNTQ0ZDgwOC45NmQ4Ny41NTJkNzg3Ljk2OGQ2Ni41NmQ3NjYuOTc2ZDY2LjU2ZDczNy4yOGQ2Ni41NmQ1OTMuOTJkNjYuNTZkNTY0LjIyM2Q4Ny41NTJkNTQzLjIzMmQxMDguNTQ0ZDUyMi4yNGQxMzguMjRkNTIyLjI0ZDI4MS42ZDUyMi4yNGQzMTEuMjk2ZDUyMi4yNGQzMzIuMjg4ZDU0My4yMzJkMzUzLjI4ZDU2NC4yMjNkMzUzLjI4ZDU5My45MmQzNTMuMjhkNzM3LjI4ZDM1My4yOGQ5NTIuMzE5ZDY2LjU2ZDk1Mi4zMTlkNjYuNTZkODkwLjg4ZDM1My4yOGQ4OTAuODhkMzUzLjI4ZDk1Mi4zMTlkMjgxLjZkNzQ3LjUyZDI4MS42ZDU4My42OGQxMzguMjRkNTgzLjY4ZDEzOC4yNGQ3NDcuNTJkMjgxLjZkNzQ3LjUyaFIzZDQxOS44NFI0ZDM1My4yOFI1ZDY2LjU2UjZkNTAxLjc2UjdkNzEuNjhSOGQ0MzUuMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTg2UjEyZDY2LjU2UjEzZDQxOS44NFIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NzNvUjFkNzY4UjJhZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDEwMjRoUjNkMjY2LjI0UjRkMTc0LjA4UjVkOTIuMTZSNmQ1MDEuNzZSN2QwUjhkNDA5LjZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTczUjEyZDkyLjE2UjEzZDI2Ni4yNFIxNGFpMWkyaTJpMmkyaGc6MTg1b1IxZDc2OFIyYWQyNTkuMDcyZDczNy4yOGQxODUuMzQ0ZDczNy4yOGQxODUuMzQ0ZDUyMi4yNGQxNzUuMTA0ZDUyMi4yNGQxMTguNzg0ZDU5My45MmQ0MC45NmQ1OTMuOTJkMTU2LjY3MmQ0NTAuNTU5ZDI1OS4wNzJkNDUwLjU1OWQyNTkuMDcyZDczNy4yOGhSM2QzMjAuNTEyUjRkMjU5LjA3MlI1ZDQwLjk2UjZkNTczLjQ0UjdkMjg2LjcyUjhkNTMyLjQ4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxODVSMTJkNDAuOTZSMTNkMzIwLjUxMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzo3Mm9SMWQ3NjhSMmFkNTIyLjI0ZDEwMjRkNDQwLjMyZDEwMjRkNDQwLjMyZDgwOC45NmQxNzQuMDhkODA4Ljk2ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDc5OC43MmQyMzUuNTJkNzM3LjI4ZDQ0MC4zMmQ3MzcuMjhkNDQwLjMyZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQxMDI0aFIzZDYxNC40UjRkNTIyLjI0UjVkOTIuMTZSNmQ1MDEuNzZSN2QwUjhkNDA5LjZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTcyUjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODRvUjFkNzY4UjJhZDI2Ni4yNGQxMTY3LjM2ZDI2Ni4yNGQxMTk3LjA1NmQyNDUuMjQ4ZDEyMTguMDQ4ZDIyNC4yNTZkMTIzOS4wNGQxOTQuNTZkMTIzOS4wNGQzMC43MmQxMjM5LjA0ZDkyLjE2ZDExNzcuNmQxOTQuNTZkMTE3Ny42ZDE5NC41NmQxMTI2LjRkOTIuMTZkMTEyNi40ZDkyLjE2ZDEwNzMuMTUyZDE1My42ZDEwMTMuNzZkMTUzLjZkMTA3Ni4yMjRkMTk0LjU2ZDEwNzYuMjI0ZDIyNC4yNTZkMTA3Ni4yMjRkMjQ1LjI0OGQxMDk2LjcwNGQyNjYuMjRkMTExNy4xODRkMjY2LjI0ZDExNDYuODhkMjY2LjI0ZDExNjcuMzZoUjNkMjg2LjcyUjRkMjY2LjI0UjVkMzAuNzJSNmQxMC4yNFI3ZC0yMTUuMDRSOGQtMjAuNDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4NFIxMmQzMC43MlIxM2QyODYuNzJSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaGc6NzFvUjFkNzY4UjJhZDUxNy4xMmQxMDI0ZDQzNS4yZDEwMjRkNDM1LjJkOTYyLjU2ZDM3My43NmQxMDI0ZDE1OC43MmQxMDI0ZDEzMC4wNDhkMTAyNGQxMDguNTQ0ZDEwMDIuNDk2ZDg3LjA0ZDk4MC45OTJkODcuMDRkOTUyLjMxOWQ4Ny4wNGQ1OTMuOTJkODcuMDRkNTY1LjI0OGQxMDguNTQ0ZDU0My43NDNkMTMwLjA0OGQ1MjIuMjRkMTU4LjcyZDUyMi4yNGQ1MTcuMTJkNTIyLjI0ZDUxNy4xMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDgwOC45NmQzMDIuMDhkODA4Ljk2ZDM3My43NmQ3MzcuMjhkNTE3LjEyZDczNy4yOGQ1MTcuMTJkMTAyNGhSM2Q1ODMuNjhSNGQ1MTcuMTJSNWQ4Ny4wNFI2ZDUwMS43NlI3ZDBSOGQ0MTQuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTcxUjEyZDg3LjA0UjEzZDU4My42OFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTgzb1IxZDc2OFIyYWQxNzQuMDhkODE5LjJkODEuOTJkODE5LjJkODEuOTJkNzM3LjI4ZDE3NC4wOGQ3MzcuMjhkMTc0LjA4ZDgxOS4yaFIzZDI1NlI0ZDE3NC4wOFI1ZDgxLjkyUjZkMjg2LjcyUjdkMjA0LjhSOGQyMDQuOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTgzUjEyZDgxLjkyUjEzZDI1NlIxNGFpMWkyaTJpMmkyaGc6NzBvUjFkNzY4UjJhZDQ1MC41NmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NS41OTlkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDUwLjU2ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ4NzAuNGQyMzUuNTJkODA4Ljk2ZDQ1MC41NmQ4MDguOTZkNDUwLjU2ZDg4MC42NGhSM2Q1MDEuNzZSNGQ0NTAuNTZSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNzBSMTJkOTIuMTZSMTNkNTAxLjc2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4Mm9SMWQ3NjhSMmFkNTAxLjc2ZDUyMi4yNGQ0NDAuMzJkNTgzLjY4ZDQ0MC4zMmQxMTE2LjE2ZDM3OC44OGQxMTc3LjZkMzc4Ljg4ZDU4My42OGQyODYuNzJkNTgzLjY4ZDI4Ni43MmQxMTE2LjE2ZDIyNS4yOGQxMTc3LjZkMjI1LjI4ZDg4MC42NGQxNzQuMDhkODgwLjY0ZDE0NC4zODRkODgwLjY0ZDEyMy4zOTJkODU5LjY0OGQxMDIuNGQ4MzguNjU2ZDEwMi40ZDgwOC45NmQxMDIuNGQ1OTMuOTJkMTAyLjRkNTY0LjIyM2QxMjMuMzkyZDU0My4yMzJkMTQ0LjM4NGQ1MjIuMjRkMTc0LjA4ZDUyMi4yNGQ1MDEuNzZkNTIyLjI0aFIzZDU2My4yUjRkNTAxLjc2UjVkMTAyLjRSNmQ1MDEuNzZSN2QtMTUzLjZSOGQzOTkuMzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4MlIxMmQxMDIuNFIxM2Q1NjMuMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmhnOjY5b1IxZDc2OFIyYWQ0NTAuNTZkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NS41OTlkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDUwLjU2ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ3OTguNzJkMjM1LjUyZDczNy4yOGQ0NTAuNTZkNzM3LjI4ZDQ1MC41NmQ4MDguOTZkMTc0LjA4ZDgwOC45NmQxNzQuMDhkOTUyLjMxOWQ0NTAuNTZkOTUyLjMxOWQ0NTAuNTZkMTAyNGhSM2Q1MTJSNGQ0NTAuNTZSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjlSMTJkOTIuMTZSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODFvUjFkNzY4UjJhZDQ0MC4zMmQxMDI0ZDM2OC42NGQxMDI0ZDM2OC42NGQ5NzIuOGQzMTcuNDRkMTAyNGQxNTMuNmQxMDI0ZDE1My42ZDEyMzkuMDRkODEuOTJkMTIzOS4wNGQ4MS45MmQ2NjUuNTk5ZDE1My42ZDY2NS41OTlkMTUzLjZkOTYyLjU2ZDM2OC42NGQ5NjIuNTZkMzY4LjY0ZDY2NS41OTlkNDQwLjMyZDY2NS41OTlkNDQwLjMyZDEwMjRoUjNkNTEyUjRkNDQwLjMyUjVkODEuOTJSNmQzNTguNFI3ZC0yMTUuMDRSOGQyNzYuNDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4MVIxMmQ4MS45MlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjY4b1IxZDc2OFIyYWQ1MjIuMjRkOTUyLjMxOWQ1MjIuMjRkOTgwLjk5MmQ1MDAuNzM2ZDEwMDIuNDk2ZDQ3OS4yMzJkMTAyNGQ0NTAuNTZkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NS41OTlkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDc5LjIzMmQ1MjIuMjRkNTAwLjczNmQ1NDMuNzQzZDUyMi4yNGQ1NjUuMjQ4ZDUyMi4yNGQ1OTMuOTJkNTIyLjI0ZDk1Mi4zMTlkNDQwLjMyZDk1Mi4zMTlkNDQwLjMyZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQxMDEzLjc2ZDIzNS41MmQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5aFIzZDYwOS4yOFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk2OFIxMmQ5Mi4xNlIxM2Q2MDkuMjhSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmkyaGc6MTgwb1IxZDc2OFIyYWQxNjMuODRkNDUwLjU1OWQ2MS40NGQ1OTMuOTJkLTEwLjI0ZDU5My45MmQ5Mi4xNmQ0NTAuNTU5ZDE2My44NGQ0NTAuNTU5aFIzZDE1My42UjRkMTYzLjg0UjVkLTEwLjI0UjZkNTczLjQ0UjdkNDMwLjA4UjhkNTgzLjY4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxODBSMTJkLTEwLjI0UjEzZDE1My42UjE0YWkxaTJpMmkyaTJoZzo2N29SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDY2NS41OTlkNDM1LjJkNjY1LjU5OWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDg4MC42NGQ1MTcuMTJkODgwLjY0ZDUxNy4xMmQ5NTIuMzE5aFIzZDU3OC41NlI0ZDUxNy4xMlI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjdSMTJkODcuMDRSMTNkNTc4LjU2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmhnOjE3OW9SMWQ3NjhSMmFkMjczLjQwOGQ2NjUuNTk5ZDI3My40MDhkNjk1LjI5NmQyNTIuNDE2ZDcxNi4yODhkMjMxLjQyNGQ3MzcuMjhkMjAxLjcyOGQ3MzcuMjhkNTYuMzJkNzM3LjI4ZDU2LjMyZDY3NS44MzlkMTg0LjMyZDY3NS44MzlkMTg0LjMyZDY1Mi4yODhkMTIzLjkwNGQ1OTEuODcyZDE5Ni42MDhkNTE3LjEyZDE5Ni42MDhkNTEyZDU2LjMyZDUxMmQ1Ni4zMmQ0NTAuNTU5ZDI3My40MDhkNDUwLjU1OWQyNzMuNDA4ZDUxOC4xNDRkMTk5LjY4ZDU5MS44NzJkMjczLjQwOGQ1OTMuOTJkMjczLjQwOGQ2NjUuNTk5aFIzZDMyOS43MjhSNGQyNzMuNDA4UjVkNTYuMzJSNmQ1NzMuNDRSN2QyODYuNzJSOGQ1MTcuMTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE3OVIxMmQ1Ni4zMlIxM2QzMjkuNzI4UjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaGc6NjZvUjFkNzY4UjJhZDUyMi4yNGQ5NTIuMzE5ZDUyMi4yNGQ5ODIuMDE2ZDUwMS4yNDhkMTAwMy4wMDhkNDgwLjI1NmQxMDI0ZDQ1MC41NmQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNjY1LjU5OWQxNjMuODRkNTkzLjkyZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1MjIuMjRkMzc4Ljg4ZDUyMi4yNGQ0MDguNTc2ZDUyMi4yNGQ0MjkuNTY4ZDU0My4yMzJkNDUwLjU2ZDU2NC4yMjNkNDUwLjU2ZDU5My45MmQ0NTAuNTZkNzM3LjI4ZDQ1Mi42MDhkNzM3LjI4ZDQ4Mi4zMDRkNzM3LjI4ZDUwMi4yNzJkNzU4LjI3MWQ1MjIuMjRkNzc5LjI2NGQ1MjIuMjRkODA4Ljk2ZDUyMi4yNGQ5NTIuMzE5ZDM2OC42NGQ3MzcuMjhkMzY4LjY0ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ3OTguNzJkMjM1LjUyZDczNy4yOGQzNjguNjRkNzM3LjI4ZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ4MDguOTZkMTc0LjA4ZDgwOC45NmQxNzQuMDhkOTUyLjMxOWQ0NDAuMzJkOTUyLjMxOWhSM2Q1OTMuOTJSNGQ1MjIuMjRSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjZSMTJkOTIuMTZSMTNkNTkzLjkyUjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTNpM2kyaTFpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjE3OG9SMWQ3NjhSMmFkMjczLjQwOGQ3MzcuMjhkNTYuMzJkNzM3LjI4ZDU2LjMyZDY1MC4yNGQyMDEuNzI4ZDU0OS44ODdkMjAxLjcyOGQ1MTJkNTYuMzJkNTEyZDU2LjMyZDQ1MC41NTlkMjAxLjcyOGQ0NTAuNTU5ZDIzMS40MjRkNDUwLjU1OWQyNTIuNDE2ZDQ3MS41NTJkMjczLjQwOGQ0OTIuNTQ0ZDI3My40MDhkNTIyLjI0ZDI3My40MDhkNTY4LjMxOWQxMzMuMTJkNjY1LjU5OWQxMzMuMTJkNjc1LjgzOWQyNzMuNDA4ZDY3NS44MzlkMjczLjQwOGQ3MzcuMjhoUjNkMzI5LjcyOFI0ZDI3My40MDhSNWQ1Ni4zMlI2ZDU3My40NFI3ZDI4Ni43MlI4ZDUxNy4xMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTc4UjEyZDU2LjMyUjEzZDMyOS43MjhSMTRhaTFpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaGc6NjVvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk2NVIxMmQ5Mi4xNlIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkyaTJpMmkzaTNpMmkyaTFpMmkyaTJpMmkyaGc6MTc3b1IxZDc2OFIyYWQ0NDUuNDRkMTAyMi45NzZkODcuMDRkMTAyMi45NzZkODcuMDRkOTUxLjI5NmQ0NDUuNDRkOTUxLjI5NmQ0NDUuNDRkMTAyMi45NzZkNDQ1LjQ0ZDgwOC45NmQzMDIuMDhkODA4Ljk2ZDMwMi4wOGQ5NTIuMzE5ZDIzMC40ZDk1Mi4zMTlkMjMwLjRkODA4Ljk2ZDg3LjA0ZDgwOC45NmQ4Ny4wNGQ3MzcuMjhkMjMwLjRkNzM3LjI4ZDIzMC40ZDU5My45MmQzMDIuMDhkNTkzLjkyZDMwMi4wOGQ3MzcuMjhkNDQ1LjQ0ZDczNy4yOGQ0NDUuNDRkODA4Ljk2aFIzZDUzMi40OFI0ZDQ0NS40NFI1ZDg3LjA0UjZkNDMwLjA4UjdkMS4wMjRSOGQzNDMuMDRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE3N1IxMmQ4Ny4wNFIxM2Q1MzIuNDhSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6NjRvUjFkNzY4UjJhZDcxNi44ZDk1Mi4zMTlkNzE2LjhkOTgyLjAxNmQ2OTUuODA4ZDEwMDMuMDA4ZDY3NC44MTZkMTAyNGQ2NDUuMTJkMTAyNGQ1MDIuNzg0ZDEwMjRkNDc3LjE4NGQxMDI0ZDQ2MC44ZDEwMDguNjRkNDQ0LjQxNmQ5OTMuMjhkNDQzLjM5MmQ5NjguNzA0ZDM2OC42NGQxMDI0ZDI1NmQxMDI0ZDIyOS4zNzZkMTAyNGQyMTIuOTkyZDEwMDcuNjE2ZDE5Ni42MDhkOTkxLjIzMmQxOTYuNjA4ZDk2NS42MzJkMTk2LjYwOGQ5NTcuNDRkMTk3LjYzMmQ5NTIuMzE5ZDIxMS45NjhkODgwLjY0ZDIxOC4xMTJkODUwLjk0NGQyNDMuMmQ4MjkuOTUyZDI2OC4yODhkODA4Ljk2ZDI5Ny45ODRkODA4Ljk2ZDQ3Mi4wNjRkODA4Ljk2ZDM5OC4zMzZkODcwLjRkMjg1LjY5NmQ4NzAuNGQyNjcuMjY0ZDk2Mi41NmQ0NDMuMzkyZDk2Mi41NmQ0NDMuMzkyZDk1NS4zOTJkNDQ0LjQxNmQ5NTIuMzE5ZDQ0Ny40ODhkOTM2Ljk2ZDQ4Ny40MjRkNzI3LjA0ZDIzMS40MjRkNzI3LjA0ZDMwNS4xNTJkNjY1LjU5OWQ0OTkuNzEyZDY2NS41OTlkNTI1LjMxMmQ2NjUuNTk5ZDU0MS42OTZkNjgxLjk4M2Q1NTguMDhkNjk4LjM2N2Q1NTguMDhkNzIzLjk2OGQ1NTguMDhkNzMyLjE2ZDU1Ny4wNTZkNzM3LjI4ZDUxNC4wNDhkOTYyLjU2ZDY1NS4zNmQ5NjIuNTZkNjU1LjM2ZDUyMi4yNGQxMTIuNjRkNTIyLjI0ZDExMi42NGQxMTY3LjM2ZDcwNS41MzZkMTE2Ny4zNmQ2MjIuNTkyZDEyMjguOGQxMzMuMTJkMTIyOC44ZDExNy43NmQxMjI4LjhkMTAyLjkxMmQxMjIzLjE2OGQ4OC4wNjRkMTIxNy41MzZkNzYuOGQxMjA3LjI5NmQ2NS41MzZkMTE5Ny4wNTZkNTguMzY4ZDExODQuMjU2ZDUxLjJkMTE3MS40NTZkNTEuMmQxMTU3LjEyZDUxLjJkNTMyLjQ4ZDUxLjJkNTAyLjc4NGQ3Mi4xOTJkNDgxLjc5MmQ5My4xODRkNDYwLjc5OWQxMjIuODhkNDYwLjc5OWQ2NDUuMTJkNDYwLjc5OWQ2NzQuODE2ZDQ2MC43OTlkNjk1LjgwOGQ0ODEuNzkyZDcxNi44ZDUwMi43ODRkNzE2LjhkNTMyLjQ4ZDcxNi44ZDk1Mi4zMTloUjNkNzY4UjRkNzE2LjhSNWQ1MS4yUjZkNTYzLjJSN2QtMjA0LjhSOGQ1MTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTY0UjEyZDUxLjJSMTNkNzY4UjE0YWkxaTNpM2kyaTNpM2kyaTJpM2kzaTNpMmkzaTNpMmkyaTJpMmkyaTNpMmkyaTJpMmkyaTNpM2kzaTJpMmkyaTJpMmkyaTJpMmkzaTNpM2kzaTJpM2kzaTJpM2kzaTJoZzoxNzZvUjFkNzY4UjJhZDI5Ni45NmQ1OTMuOTJkMjk2Ljk2ZDYyMy42MTZkMjc1Ljk2OGQ2NDQuNjA4ZDI1NC45NzZkNjY1LjU5OWQyMjUuMjhkNjY1LjU5OWQxNTMuNmQ2NjUuNTk5ZDEyMy45MDRkNjY1LjU5OWQxMDIuOTEyZDY0NC42MDhkODEuOTJkNjIzLjYxNmQ4MS45MmQ1OTMuOTJkODEuOTJkNTIyLjI0ZDgxLjkyZDQ5Mi41NDRkMTAyLjkxMmQ0NzEuNTUyZDEyMy45MDRkNDUwLjU1OWQxNTMuNmQ0NTAuNTU5ZDIyNS4yOGQ0NTAuNTU5ZDI1NC45NzZkNDUwLjU1OWQyNzUuOTY4ZDQ3MS41NTJkMjk2Ljk2ZDQ5Mi41NDRkMjk2Ljk2ZDUyMi4yNGQyOTYuOTZkNTkzLjkyZDIzNS41MmQ2MDQuMTZkMjM1LjUyZDUxMmQxNDMuMzZkNTEyZDE0My4zNmQ2MDQuMTZkMjM1LjUyZDYwNC4xNmhSM2QzNzguODhSNGQyOTYuOTZSNWQ4MS45MlI2ZDU3My40NFI3ZDM1OC40UjhkNDkxLjUyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNzZSMTJkODEuOTJSMTNkMzc4Ljg4UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjYzb1IxZDc2OFIyYWQ0NDAuMzJkNzM3LjI4ZDQ0MC4zMmQ3NjYuOTc2ZDQxOS4zMjhkNzg3Ljk2OGQzOTguMzM2ZDgwOC45NmQzNjguNjRkODA4Ljk2ZDI5Ni45NmQ4MDguOTZkMjk2Ljk2ZDg4MC42NGQyMTUuMDRkODgwLjY0ZDIxNS4wNGQ4MDguOTZkMjE1LjA0ZDc3OS4yNjRkMjM2LjAzMmQ3NTguMjcxZDI1Ny4wMjRkNzM3LjI4ZDI4Ni43MmQ3MzcuMjhkMzU4LjRkNzM3LjI4ZDM1OC40ZDU5My45MmQxNjMuODRkNTkzLjkyZDE2My44NGQ2NjUuNTk5ZDgxLjkyZDY2NS41OTlkODEuOTJkNTkzLjkyZDgxLjkyZDU2NC4yMjNkMTAyLjkxMmQ1NDMuMjMyZDEyMy45MDRkNTIyLjI0ZDE1My42ZDUyMi4yNGQzNjguNjRkNTIyLjI0ZDM5OC4zMzZkNTIyLjI0ZDQxOS4zMjhkNTQzLjIzMmQ0NDAuMzJkNTY0LjIyM2Q0NDAuMzJkNTkzLjkyZDQ0MC4zMmQ3MzcuMjhkMzA3LjJkMTAyNGQyMTUuMDRkMTAyNGQyMTUuMDRkOTQyLjA4ZDMwNy4yZDk0Mi4wOGQzMDcuMmQxMDI0aFIzZDUyMi4yNFI0ZDQ0MC4zMlI1ZDgxLjkyUjZkNTAxLjc2UjdkMFI4ZDQxOS44NFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjNSMTJkODEuOTJSMTNkNTIyLjI0UjE0YWkxaTNpM2kyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJoZzoxNzVvUjFkNzY4UjJhZDIxNS4wNGQ1OTMuOTJkMzAuNzJkNTkzLjkyZDMwLjcyZDUyMi4yNGQyMTUuMDRkNTIyLjI0ZDIxNS4wNGQ1OTMuOTJoUjNkMjQ1Ljc2UjRkMjE1LjA0UjVkMzAuNzJSNmQ1MDEuNzZSN2Q0MzAuMDhSOGQ0NzEuMDRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE3NVIxMmQzMC43MlIxM2QyNDUuNzZSMTRhaTFpMmkyaTJpMmhnOjYyb1IxZDc2OFIyYWQyNTZkODExLjAwOGQ1MS4yZDY0Ni4xNDRkMTAxLjM3NmQ1OTUuOTY4ZDM1OC40ZDgxMS4wMDhkMTAxLjM3NmQxMDE2LjgzMmQ1MS4yZDk2Ni42NTZkMjU2ZDgxMS4wMDhoUjNkNDcxLjA0UjRkMzU4LjRSNWQ1MS4yUjZkNDI4LjAzMlI3ZDcuMTY4UjhkMzc2LjgzMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjJSMTJkNTEuMlIxM2Q0NzEuMDRSMTRhaTFpMmkyaTJpMmkyaTJoZzoxNzRvUjFkNzY4UjJhZDY2NS42ZDgwOC45NmQ2NjUuNmQ4MzguNjU2ZDY0NC42MDhkODU5LjY0OGQ2MjMuNjE2ZDg4MC42NGQ1OTMuOTJkODgwLjY0ZDE4NC4zMmQ4ODAuNjRkMTY4Ljk2ZDg4MC42NGQxNTQuMTEyZDg3NS4wMDhkMTM5LjI2NGQ4NjkuMzc2ZDEyOGQ4NTkuMTM2ZDExNi43MzZkODQ4Ljg5NmQxMDkuNTY4ZDgzNi4wOTZkMTAyLjRkODIzLjI5NmQxMDIuNGQ4MDguOTZkMTAyLjRkMzc4Ljg4ZDEwMi40ZDM0OS4xODNkMTIzLjM5MmQzMjguMTkyZDE0NC4zODRkMzA3LjE5OWQxNzQuMDhkMzA3LjE5OWQ1OTMuOTJkMzA3LjE5OWQ2MjMuNjE2ZDMwNy4xOTlkNjQ0LjYwOGQzMjguMTkyZDY2NS42ZDM0OS4xODNkNjY1LjZkMzc4Ljg4ZDY2NS42ZDgwOC45NmQ2MDQuMTZkODE5LjJkNjA0LjE2ZDM2OC42NGQxNjMuODRkMzY4LjY0ZDE2My44NGQ4MTkuMmQ2MDQuMTZkODE5LjJkNTM0LjUyOGQ3MzcuMjhkNDUwLjU2ZDczNy4yOGQzMTcuNDRkNjA0LjE2ZDMxNy40NGQ3MzcuMjhkMjQ1Ljc2ZDczNy4yOGQyNDUuNzZkNTcyLjQxNWQzMDcuMmQ1MTJkMjQ1Ljc2ZDUxMmQyNDUuNzZkNDUwLjU1OWQ0NjAuOGQ0NTAuNTU5ZDQ4OS40NzJkNDUwLjU1OWQ1MTAuOTc2ZDQ3Mi4wNjNkNTMyLjQ4ZDQ5My41NjhkNTMyLjQ4ZDUyMi4yNGQ1MzIuNDhkNTgzLjY4ZDUzMi40OGQ2MTguNDk2ZDUwNy45MDRkNjM2LjkyOGQ0ODcuNDI0ZDY1MS4yNjRkNDYwLjhkNjUxLjI2NGQ0NTIuNjA4ZDY1MS4yNjRkNDUyLjYwOGQ2NjEuNTA0ZDUzNC41MjhkNzM3LjI4ZDQ2MC44ZDYwNC4xNmQ0NjAuOGQ1MTJkMzE3LjQ0ZDUxMmQzMTcuNDRkNjA0LjE2ZDQ2MC44ZDYwNC4xNmhSM2Q3NjhSNGQ2NjUuNlI1ZDEwMi40UjZkNzE2LjhSN2QxNDMuMzZSOGQ2MTQuNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTc0UjEyZDEwMi40UjEzZDc2OFIxNGFpMWkzaTNpMmkzaTNpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTFpMmkyaTJpMmhnOjYxb1IxZDc2OFIyYWQ0NDUuNDRkODA4Ljk2ZDg3LjA0ZDgwOC45NmQ4Ny4wNGQ3MzcuMjhkNDQ1LjQ0ZDczNy4yOGQ0NDUuNDRkODA4Ljk2ZDQ0NS40NGQ5NTIuMzE5ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkODgwLjY0ZDQ0NS40NGQ4ODAuNjRkNDQ1LjQ0ZDk1Mi4zMTloUjNkNTMyLjQ4UjRkNDQ1LjQ0UjVkODcuMDRSNmQyODYuNzJSN2Q3MS42OFI4ZDE5OS42OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjFSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTczb1IxZDc2OFIyYWQyNjYuMjRkODA4Ljk2ZDE5NC41NmQ4ODAuNjRkMjAuNDhkODgwLjY0ZDkyLjE2ZDgwOC45NmQyNjYuMjRkODA4Ljk2aFIzZDI4Ni43MlI0ZDI2Ni4yNFI1ZDIwLjQ4UjZkMjE1LjA0UjdkMTQzLjM2UjhkMTk0LjU2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNzNSMTJkMjAuNDhSMTNkMjg2LjcyUjE0YWkxaTJpMmkyaTJoZzo2MG9SMWQ3NjhSMmFkNDE5Ljg0ZDk2Ni42NTZkMzY5LjY2NGQxMDE2LjgzMmQxMTIuNjRkODExLjAwOGQzNjkuNjY0ZDU5NS45NjhkNDE5Ljg0ZDY0Ni4xNDRkMjE1LjA0ZDgxMS4wMDhkNDE5Ljg0ZDk2Ni42NTZoUjNkNTMyLjQ4UjRkNDE5Ljg0UjVkMTEyLjY0UjZkNDI4LjAzMlI3ZDcuMTY4UjhkMzE1LjM5MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjBSMTJkMTEyLjY0UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTJpMmhnOjE3Mm9SMWQ3NjhSMmFkNDQwLjMyZDk1Mi4zMTlkMzY4LjY0ZDk1Mi4zMTlkMzY4LjY0ZDgwOC45NmQ4Ny4wNGQ4MDguOTZkODcuMDRkNzM3LjI4ZDQ0MC4zMmQ3MzcuMjhkNDQwLjMyZDk1Mi4zMTloUjNkNTMyLjQ4UjRkNDQwLjMyUjVkODcuMDRSNmQyODYuNzJSN2Q3MS42OFI4ZDE5OS42OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTcyUjEyZDg3LjA0UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTJpMmhnOjU5b1IxZDc2OFIyYWQ0MjcuMDA4ZDExMDUuOTJkMzY1LjU2OGQxMTc3LjZkMzY1LjU2OGQxMDI0ZDMyNC42MDhkMTAyNGQzMjQuNjA4ZDk0Mi4wOGQzNTUuMzI4ZDk0Mi4wOGQzODUuMDI0ZDk0Mi4wOGQ0MDYuMDE2ZDk2My4wNzJkNDI3LjAwOGQ5ODQuMDY0ZDQyNy4wMDhkMTAxMy43NmQ0MjcuMDA4ZDExMDUuOTJkMTU0LjYyNGQ3NDcuNTJkNjIuNDY0ZDc0Ny41MmQ2Mi40NjRkNjY1LjU5OWQxNTQuNjI0ZDY2NS41OTlkMTU0LjYyNGQ3NDcuNTJoUjNkMjM1LjUyUjRkMTY0Ljg2NFI1ZDYyLjQ2NFI2ZDM1OC40UjdkLTE1My42UjhkMjk1LjkzNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTlSMTJkNjIuNDY0UjEzZDIzNS41MlIxNGFpMWkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaGc6MTcxb1IxZDc2OFIyYWQ0NzEuMDRkOTY1LjYzMmQ0MzAuMDhkMTAxNi44MzJkMjU2ZDg0NC44ZDQzMC4wOGQ2NzIuNzY4ZDQ3MS4wNGQ3MjIuOTQ0ZDM0OC4xNmQ4NDQuOGQ0NzEuMDRkOTY1LjYzMmQyNjYuMjRkOTY1LjYzMmQyMjUuMjhkMTAxNi44MzJkNTEuMmQ4NDQuOGQyMjUuMjhkNjcyLjc2OGQyNjYuMjRkNzIyLjk0NGQxNDMuMzZkODQ0LjhkMjY2LjI0ZDk2NS42MzJoUjNkNTIyLjI0UjRkNDcxLjA0UjVkNTEuMlI2ZDM1MS4yMzJSN2Q3LjE2OFI4ZDMwMC4wMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE3MVIxMmQ1MS4yUjEzZDUyMi4yNFIxNGFpMWkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaGc6NThvUjFkNzY4UjJhZDQyNy4wMDhkMTAyNGQzMzQuODQ4ZDEwMjRkMzM0Ljg0OGQ5NDIuMDhkNDI3LjAwOGQ5NDIuMDhkNDI3LjAwOGQxMDI0ZDE2NC44NjRkNzQ3LjUyZDcyLjcwNGQ3NDcuNTJkNzIuNzA0ZDY2NS41OTlkMTY0Ljg2NGQ2NjUuNTk5ZDE2NC44NjRkNzQ3LjUyaFIzZDIzNS41MlI0ZDE2NC44NjRSNWQ3Mi43MDRSNmQzNTguNFI3ZDBSOGQyODUuNjk2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk1OFIxMmQ3Mi43MDRSMTNkMjM1LjUyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTcwb1IxZDc2OFIyYWQzNDMuMDRkODA4Ljk2ZDI3MS4zNmQ4MDguOTZkMjcxLjM2ZDc1Ni43MzZkMjA5LjkyZDgwOC45NmQxMzMuMTJkODA4Ljk2ZDEwMy40MjRkODA4Ljk2ZDgyLjQzMmQ3ODcuOTY4ZDYxLjQ0ZDc2Ni45NzZkNjEuNDRkNzM3LjI4ZDYxLjQ0ZDcwNy41ODRkODIuNDMyZDY4Ni41OTJkMTAzLjQyNGQ2NjUuNTk5ZDEzMy4xMmQ2NjUuNTk5ZDIwOC44OTZkNjY1LjU5OWQxNDguNDhkNzI2LjAxNmQxNDguNDhkNzQ3LjUyZDI3MS4zNmQ3NDcuNTJkMjcxLjM2ZDU4My42OGQ1MS4yZDU4My42OGQxMTIuNjRkNTIyLjI0ZDI3MS4zNmQ1MjIuMjRkMzAxLjA1NmQ1MjIuMjRkMzIyLjA0OGQ1NDMuMjMyZDM0My4wNGQ1NjQuMjIzZDM0My4wNGQ1OTMuOTJkMzQzLjA0ZDgwOC45NmQzNDMuMDRkOTUyLjMxOWQ1Ni4zMmQ5NTIuMzE5ZDU2LjMyZDg5MC44OGQzNDMuMDRkODkwLjg4ZDM0My4wNGQ5NTIuMzE5aFIzZDQwOS42UjRkMzQzLjA0UjVkNTEuMlI2ZDUwMS43NlI3ZDcxLjY4UjhkNDUwLjU2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNzBSMTJkNTEuMlIxM2Q0MDkuNlIxNGFpMWkyaTJpMmkyaTNpM2kzaTNpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmhnOjU3b1IxZDc2OFIyYWQ2MS40NGQ1OTMuOTJkNjEuNDRkNTY0LjIyM2Q4Mi40MzJkNTQzLjIzMmQxMDMuNDI0ZDUyMi4yNGQxMzMuMTJkNTIyLjI0ZDM1OC40ZDUyMi4yNGQzODguMDk2ZDUyMi4yNGQ0MDkuMDg4ZDU0My4yMzJkNDMwLjA4ZDU2NC4yMjNkNDMwLjA4ZDU5My45MmQ0MzAuMDhkOTUyLjMxOWQ0MzAuMDhkOTgyLjAxNmQ0MDkuMDg4ZDEwMDMuMDA4ZDM4OC4wOTZkMTAyNGQzNTguNGQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkOTUyLjMxOWQzNDguMTZkOTUyLjMxOWQzNDguMTZkODE5LjJkMTMzLjEyZDgxOS4yZDEwMy40MjRkODE5LjJkODIuNDMyZDc5OC4yMDhkNjEuNDRkNzc3LjIxNmQ2MS40NGQ3NDcuNTJkNjEuNDRkNTkzLjkyZDE0My4zNmQ1OTMuOTJkMTQzLjM2ZDc0Ny41MmQzNDguMTZkNzQ3LjUyZDM0OC4xNmQ1OTMuOTJkMTQzLjM2ZDU5My45MmhSM2Q1MzIuNDhSNGQ0MzAuMDhSNWQ2MS40NFI2ZDUwMS43NlI3ZDBSOGQ0NDAuMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTU3UjEyZDYxLjQ0UjEzZDUzMi40OFIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmhnOjE2OW9SMWQ3NjhSMmFkODI5LjQ0ZDEwOTUuNjhkODI5LjQ0ZDExMjUuMzc2ZDgwOC40NDhkMTE0Ni4zNjhkNzg3LjQ1NmQxMTY3LjM2ZDc1Ny43NmQxMTY3LjM2ZDE4NC4zMmQxMTY3LjM2ZDE2OC45NmQxMTY3LjM2ZDE1NC4xMTJkMTE2MS43MjhkMTM5LjI2NGQxMTU2LjA5NmQxMjhkMTE0NS44NTZkMTE2LjczNmQxMTM1LjYxNmQxMDkuNTY4ZDExMjIuODE2ZDEwMi40ZDExMTAuMDE2ZDEwMi40ZDEwOTUuNjhkMTAyLjRkNDUwLjU1OWQxMDIuNGQ0MjAuODY0ZDEyMy4zOTJkMzk5Ljg3MWQxNDQuMzg0ZDM3OC44OGQxNzQuMDhkMzc4Ljg4ZDc1Ny43NmQzNzguODhkNzg3LjQ1NmQzNzguODhkODA4LjQ0OGQzOTkuODcxZDgyOS40NGQ0MjAuODY0ZDgyOS40NGQ0NTAuNTU5ZDgyOS40NGQxMDk1LjY4ZDc2OGQxMTA1LjkyZDc2OGQ0NDAuMzE5ZDE2My44NGQ0NDAuMzE5ZDE2My44NGQxMTA1LjkyZDc2OGQxMTA1LjkyZDY3NS44NGQ5NTIuMzE5ZDY3NS44NGQ5ODIuMDE2ZDY1NC44NDhkMTAwMy4wMDhkNjMzLjg1NmQxMDI0ZDYwNC4xNmQxMDI0ZDMzNy45MmQxMDI0ZDMwOC4yMjRkMTAyNGQyODcuMjMyZDEwMDMuMDA4ZDI2Ni4yNGQ5ODIuMDE2ZDI2Ni4yNGQ5NTIuMzE5ZDI2Ni4yNGQ1OTMuOTJkMjY2LjI0ZDU2NC4yMjNkMjg3LjIzMmQ1NDMuMjMyZDMwOC4yMjRkNTIyLjI0ZDMzNy45MmQ1MjIuMjRkNjA0LjE2ZDUyMi4yNGQ2MzMuODU2ZDUyMi4yNGQ2NTQuODQ4ZDU0My4yMzJkNjc1Ljg0ZDU2NC4yMjNkNjc1Ljg0ZDU5My45MmQ2NzUuODRkNjY1LjU5OWQ1OTMuOTJkNjY1LjU5OWQ1OTMuOTJkNTkzLjkyZDM0OC4xNmQ1OTMuOTJkMzQ4LjE2ZDk1Mi4zMTlkNTkzLjkyZDk1Mi4zMTlkNTkzLjkyZDg4MC42NGQ2NzUuODRkODgwLjY0ZDY3NS44NGQ5NTIuMzE5aFIzZDkzMS44NFI0ZDgyOS40NFI1ZDEwMi40UjZkNjQ1LjEyUjdkLTE0My4zNlI4ZDU0Mi43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTY5UjEyZDEwMi40UjEzZDkzMS44NFIxNGFpMWkzaTNpMmkzaTNpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaGc6NTZvUjFkNzY4UjJhZDQ1NS42OGQ5NTIuMzE5ZDQ1NS42OGQ5ODIuMDE2ZDQzNC42ODhkMTAwMy4wMDhkNDEzLjY5NmQxMDI0ZDM4NGQxMDI0ZDE0OC40OGQxMDI0ZDExOC43ODRkMTAyNGQ5Ny43OTJkMTAwMy4wMDhkNzYuOGQ5ODIuMDE2ZDc2LjhkOTUyLjMxOWQ3Ni44ZDc5OC43MmQ3Ni44ZDc3My4xMmQ5My42OTZkNzU1LjcxMmQxMTAuNTkyZDczOC4zMDRkMTM4LjI0ZDczOC4zMDRkMTM4LjI0ZDU5My45MmQxMzguMjRkNTY0LjIyM2QxNTQuNjI0ZDU0My4yMzJkMTcxLjAwOGQ1MjIuMjRkMTk5LjY4ZDUyMi4yNGQzMzIuOGQ1MjIuMjRkMzYxLjQ3MmQ1MjIuMjRkMzc3Ljg1NmQ1NDMuMjMyZDM5NC4yNGQ1NjQuMjIzZDM5NC4yNGQ1OTMuOTJkMzk0LjI0ZDczOC4zMDRkNDIxLjg4OGQ3MzguMzA0ZDQzOC43ODRkNzU1LjJkNDU1LjY4ZDc3Mi4wOTZkNDU1LjY4ZDc5OC43MmQ0NTUuNjhkOTUyLjMxOWQzMjcuNjhkNzM3LjI4ZDMyNy42OGQ1OTMuOTJkMjA0LjhkNTkzLjkyZDIwNC44ZDczNy4yOGQzMjcuNjhkNzM3LjI4ZDM3My43NmQ5NTIuMzE5ZDM3My43NmQ3OTguNzJkMTU4LjcyZDc5OC43MmQxNTguNzJkOTUyLjMxOWQzNzMuNzZkOTUyLjMxOWhSM2Q1MzIuNDhSNGQ0NTUuNjhSNWQ3Ni44UjZkNTAxLjc2UjdkMFI4ZDQyNC45NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTZSMTJkNzYuOFIxM2Q1MzIuNDhSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE2OG9SMWQ3NjhSMmFkMjI1LjI4ZDU5My45MmQxNTguNzJkNTkzLjkyZDE1OC43MmQ1MTJkMjI1LjI4ZDUxMmQyMjUuMjhkNTkzLjkyZDg3LjA0ZDU5My45MmQyMC40OGQ1OTMuOTJkMjAuNDhkNTEyZDg3LjA0ZDUxMmQ4Ny4wNGQ1OTMuOTJoUjNkMjQ1Ljc2UjRkMjI1LjI4UjVkMjAuNDhSNmQ1MTJSN2Q0MzAuMDhSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE2OFIxMmQyMC40OFIxM2QyNDUuNzZSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo1NW9SMWQ3NjhSMmFkNDQ1LjQ0ZDc4OS41MDRkMjA5LjkyZDEwMjRkMTA1LjQ3MmQxMDI0ZDM2My41MmQ3NjQuOTI4ZDM2My41MmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkNjY1LjU5OWQ4Ny4wNGQ2NjUuNTk5ZDg3LjA0ZDUyMi4yNGQ0NDUuNDRkNTIyLjI0ZDQ0NS40NGQ3ODkuNTA0aFIzZDUzMi40OFI0ZDQ0NS40NFI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTVSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNjdvUjFkNzY4UjJhZDQwOS42ZDUyMi4yNGQzMzYuODk2ZDU5My45MmQxODkuNDRkNTkzLjkyZDE4OS40NGQ2MjMuNjE2ZDM2OC42NGQ4MDAuNzY4ZDM5Ni4yODhkODI4LjQxNWQzOTYuMjg4ZDg1NC4wMTZkMzk2LjI4OGQ4NjYuMzA0ZDM5NS4yNjRkODcwLjRkMzk1LjI2NGQ4NzMuOTg0ZDM5NS4yNjRkODc3LjU2OGQzOTUuMjY0ZDg3OS42MTZkMzk1LjI2NGQ5NjIuNTZkMzE5LjQ4OGQxMDQyLjQzMmQzNjcuNjE2ZDEwOTAuNTZkMzg5LjEyZDExMTIuMDY0ZDM4OS4xMmQxMTQxLjc2ZDM4OS4xMmQxMTY3LjM2ZDM4OS4xMmQxMTk3LjA1NmQzNjguNjRkMTIxOC4wNDhkMzQ4LjE2ZDEyMzkuMDRkMzE3LjQ0ZDEyMzkuMDRkOTIuMTZkMTIzOS4wNGQxNjQuODY0ZDExNjcuMzZkMzEyLjMyZDExNjcuMzZkMzEyLjMyZDExMzcuNjY0ZDEzMy4xMmQ5NjAuNTEyZDEwNS40NzJkOTMyLjg2NGQxMDUuNDcyZDkwNy4yNjRkMTA1LjQ3MmQ4OTQuOTc2ZDEwNi40OTZkODkwLjg4ZDEwNi40OTZkODg3LjI5NmQxMDYuNDk2ZDg4My43MTJkMTA2LjQ5NmQ4ODEuNjY0ZDEwNi40OTZkNzk4LjcyZDE4Mi4yNzJkNzE4Ljg0OGQxMzQuMTQ0ZDY3MC43MmQxMTIuNjRkNjQ5LjIxNmQxMTIuNjRkNjE5LjUyZDExMi42NGQ1OTMuOTJkMTEyLjY0ZDU2NC4yMjNkMTMzLjEyZDU0My4yMzJkMTUzLjZkNTIyLjI0ZDE4NC4zMmQ1MjIuMjRkNDA5LjZkNTIyLjI0ZDMxOC40NjRkMTA0MS40MDdkMzE4LjQ2NGQ4NTUuMDRkMTgzLjI5NmQ3MTkuODcyZDE4My4yOTZkOTA2LjI0ZDMxOC40NjRkMTA0MS40MDdoUjNkNTAxLjc2UjRkNDA5LjZSNWQ5Mi4xNlI2ZDUwMS43NlI3ZC0yMTUuMDRSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTY3UjEyZDkyLjE2UjEzZDUwMS43NlIxNGFpMWkyaTJpMmkyaTNpMmkzaTNpMmkyaTJpM2kyaTNpM2kyaTJpMmkyaTJpM2kyaTNpM2kyaTJpMmkzaTJpM2kzaTJpMWkyaTJpMmkyaGc6NTRvUjFkNzY4UjJhZDQ1NS42OGQ5NTIuMzE5ZDQ1NS42OGQ5ODIuMDE2ZDQzNC42ODhkMTAwMy4wMDhkNDEzLjY5NmQxMDI0ZDM4NGQxMDI0ZDE1OC43MmQxMDI0ZDEyOS4wMjRkMTAyNGQxMDguMDMyZDEwMDMuMDA4ZDg3LjA0ZDk4Mi4wMTZkODcuMDRkOTUyLjMxOWQ4Ny4wNGQ1OTMuOTJkODcuMDRkNTY0LjIyM2QxMDguMDMyZDU0My4yMzJkMTI5LjAyNGQ1MjIuMjRkMTU4LjcyZDUyMi4yNGQ0NDUuNDRkNTIyLjI0ZDQ0NS40NGQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkNzI3LjA0ZDM4NGQ3MjcuMDRkNDEzLjY5NmQ3MjcuMDRkNDM0LjY4OGQ3NDguMDMxZDQ1NS42OGQ3NjkuMDI0ZDQ1NS42OGQ3OTguNzJkNDU1LjY4ZDk1Mi4zMTlkMzczLjc2ZDk1Mi4zMTlkMzczLjc2ZDc5OC43MmQxNjguOTZkNzk4LjcyZDE2OC45NmQ5NTIuMzE5ZDM3My43NmQ5NTIuMzE5aFIzZDUzMi40OFI0ZDQ1NS42OFI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTRSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaGc6MTY2b1IxZDc2OFIyYWQxNzQuMDhkNjY1LjU5OWQxMDIuNGQ2NjUuNTk5ZDEwMi40ZDQ1MC41NTlkMTc0LjA4ZDQ1MC41NTlkMTc0LjA4ZDY2NS41OTlkMTc0LjA4ZDEwOTUuNjhkMTAyLjRkMTA5NS42OGQxMDIuNGQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTA5NS42OGhSM2QyNzYuNDhSNGQxNzQuMDhSNWQxMDIuNFI2ZDU3My40NFI3ZC03MS42OFI4ZDQ3MS4wNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTY2UjEyZDEwMi40UjEzZDI3Ni40OFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjUzb1IxZDc2OFIyYWQ0NDUuNDRkOTUyLjMxOWQ0NDUuNDRkOTgyLjAxNmQ0MjQuNDQ4ZDEwMDMuMDA4ZDQwMy40NTZkMTAyNGQzNzMuNzZkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkODgwLjY0ZDE2OC45NmQ4ODAuNjRkMTY4Ljk2ZDk1Mi4zMTlkMzYzLjUyZDk1Mi4zMTlkMzYzLjUyZDc0Ny41MmQ4Ny4wNGQ3NDcuNTJkODcuMDRkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDQ1LjQ0ZDU5My45MmQxNTguNzJkNTkzLjkyZDE1OC43MmQ2NzUuODM5ZDM3My43NmQ2NzUuODM5ZDQwMy40NTZkNjc1LjgzOWQ0MjQuNDQ4ZDY5Ni44MzJkNDQ1LjQ0ZDcxNy44MjRkNDQ1LjQ0ZDc0Ny41MmQ0NDUuNDRkOTUyLjMxOWhSM2Q1MzIuNDhSNGQ0NDUuNDRSNWQ4Ny4wNFI2ZDUwMS43NlI3ZDBSOGQ0MTQuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTUzUjEyZDg3LjA0UjEzZDUzMi40OFIxNGFpMWkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJoZzoxNjVvUjFkNzY4UjJhZDQ5MS41MmQ1MjIuMjRkMzY4LjY0ZDc0Ny41MmQ0ODEuMjhkNzQ3LjUyZDQxOS44NGQ4MDguOTZkMzIyLjU2ZDgwOC45NmQzMjIuNTZkODkwLjg4ZDQ4MS4yOGQ4OTAuODhkNDE5Ljg0ZDk1Mi4zMTlkMzIyLjU2ZDk1Mi4zMTlkMzIyLjU2ZDEwMjRkMjQwLjY0ZDEwMjRkMjQwLjY0ZDk1Mi4zMTlkODEuOTJkOTUyLjMxOWQxNDMuMzZkODkwLjg4ZDI0MC42NGQ4OTAuODhkMjQwLjY0ZDgwOC45NmQ4MS45MmQ4MDguOTZkMTQzLjM2ZDc0Ny41MmQxOTQuNTZkNzQ3LjUyZDcxLjY4ZDUyMi4yNGQxNTMuNmQ1MjIuMjRkMjc2LjQ4ZDc1Ny43NmQyODYuNzJkNzU3Ljc2ZDQwOS42ZDUyMi4yNGQ0OTEuNTJkNTIyLjI0aFIzZDUzMi40OFI0ZDQ5MS41MlI1ZDcxLjY4UjZkNTAxLjc2UjdkMFI4ZDQzMC4wOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTY1UjEyZDcxLjY4UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjUyb1IxZDc2OFIyYWQ0NTUuNjhkNTIyLjI0ZDE1OC43MmQ4MTUuMTA0ZDE1OC43MmQ4ODAuNjRkMzYzLjUyZDg4MC42NGQzNjMuNTJkNzA2LjU2ZDQ0NS40NGQ2MjQuNjRkNDQ1LjQ0ZDEwMjRkMzYzLjUyZDEwMjRkMzYzLjUyZDk1Mi4zMTlkODcuMDRkOTUyLjMxOWQ4Ny4wNGQ4MTMuMDU2ZDg3LjA0ZDgwMC43NjhkODcuNTUyZDc5My42ZDg4LjA2NGQ3ODYuNDMyZDkwLjExMmQ3ODAuOGQ5Mi4xNmQ3NzUuMTY4ZDk2LjI1NmQ3NzAuNTZkMTAwLjM1MmQ3NjUuOTUyZDEwNi40OTZkNzU4Ljc4NGQzNDAuOTkyZDUyMi4yNGQ0NTUuNjhkNTIyLjI0aFIzZDUzMi40OFI0ZDQ1NS42OFI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTJSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTNpM2kyaTJoZzoxNjRvUjFkNzY4UjJhZDQ1MC41NmQ5NDEuMDU2ZDQwMC4zODRkOTkxLjIzMmQzNDIuMDE2ZDkzNC45MTJkMzI4LjcwNGQ5NDguMjI0ZDMyMC41MTJkOTU2LjQxNWQzMTIuMzJkOTY0LjYwOGQzMDguMjI0ZDk2Ni42NTZkMjg4Ljc2OGQ5ODAuOTkyZDI2Ni4yNGQ5ODAuOTkyZDI0My43MTJkOTgwLjk5MmQyMjMuMjMyZDk2Ni42NTZkMjE5LjEzNmQ5NjQuNjA4ZDIxMC45NDRkOTU2LjQxNWQyMDIuNzUyZDk0OC4yMjRkMTg5LjQ0ZDkzNC45MTJkMTMyLjA5NmQ5OTEuMjMyZDgxLjkyZDk0MS4wNTZkMTM5LjI2NGQ4ODQuNzM2ZDEwOS41NjhkODU1LjA0ZDEwNi40OTZkODUwLjk0NGQ5Mi4xNmQ4MzEuNDg4ZDkyLjE2ZDgwOC45NmQ5Mi4xNmQ3ODYuNDMyZDEwNi40OTZkNzY1Ljk1MmQxMDguNTQ0ZDc2Mi44OGQxMTYuMjI0ZDc1NC42ODhkMTIzLjkwNGQ3NDYuNDk2ZDEzOC4yNGQ3MzMuMTg0ZDgxLjkyZDY3Ni44NjRkMTMyLjA5NmQ2MjYuNjg4ZDE4OS40NGQ2ODEuOTgzZDIwMi43NTJkNjY4LjY3MmQyMTAuOTQ0ZDY2MC40OGQyMTkuMTM2ZDY1Mi4yODhkMjIzLjIzMmQ2NTAuMjRkMjQyLjY4OGQ2MzUuOTA0ZDI2NS4yMTZkNjM1LjkwNGQyODguNzY4ZDYzNS45MDRkMzA5LjI0OGQ2NTAuMjRkMzEzLjM0NGQ2NTMuMzEyZDMyMS41MzZkNjYxLjUwNGQzMjkuNzI4ZDY2OS42OTVkMzQzLjA0ZDY4My4wMDhkNDAwLjM4NGQ2MjYuNjg4ZDQ1MC41NmQ2NzYuODY0ZDM5My4yMTZkNzMzLjE4NGQ0MDcuNTUyZDc0Ni40OTZkNDE1LjIzMmQ3NTQuNjg4ZDQyMi45MTJkNzYyLjg4ZDQyNC45NmQ3NjUuOTUyZDQzOS4yOTZkNzg2LjQzMmQ0MzkuMjk2ZDgwNy45MzZkNDM5LjI5NmQ4MzAuNDY0ZDQyNC45NmQ4NTAuOTQ0ZDQyMi45MTJkODU0LjAxNmQ0MTUuMjMyZDg2Mi4yMDhkNDA3LjU1MmQ4NzAuNGQzOTMuMjE2ZDg4My43MTJkNDUwLjU2ZDk0MS4wNTZkMzgwLjkyOGQ4MDguOTZkMjY1LjIxNmQ2OTMuMjQ4ZDE1MC41MjhkODA4Ljk2ZDI2NS4yMTZkOTIzLjY0OGQzODAuOTI4ZDgwOC45NmhSM2Q1MzIuNDhSNGQ0NTAuNTZSNWQ4MS45MlI2ZDM5Ny4zMTJSN2QzMi43NjhSOGQzMTUuMzkyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNjRSMTJkODEuOTJSMTNkNTMyLjQ4UjE0YWkxaTJpMmkzaTNpM2kzaTNpM2kyaTJpMmkzaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTNpMmkxaTJpMmkyaTJoZzo1MW9SMWQ3NjhSMmFkNDQ1LjQ0ZDk1Mi4zMTlkNDQ1LjQ0ZDk4Mi4wMTZkNDI0LjQ0OGQxMDAzLjAwOGQ0MDMuNDU2ZDEwMjRkMzczLjc2ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDg4MC42NGQxNjguOTZkODgwLjY0ZDE2OC45NmQ5NTIuMzE5ZDM2My41MmQ5NTIuMzE5ZDM2My41MmQ4MDguOTZkMjMwLjRkODA4Ljk2ZDIzMC40ZDc0OS41NjhkMzczLjc2ZDYwNC4xNmQzNzMuNzZkNTkzLjkyZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1MjIuMjRkNDQ1LjQ0ZDUyMi4yNGQ0NDUuNDRkNjI1LjY2NGQzMzMuODI0ZDczNy4yOGQzMzMuODI0ZDc0Ny41MmQzMzMuODI0ZDc0Ni40OTZkMzQ1LjA4OGQ3NDYuNDk2ZDM1MC4yMDhkNzQ2LjQ5NmQzNTcuMzc2ZDc0Ni40OTZkMzY0LjU0NGQ3NDYuNDk2ZDM3My43NmQ3NDcuNTJkNDAzLjQ1NmQ3NDguNTQ0ZDQyNC40NDhkNzY5LjUzNmQ0NDUuNDRkNzkwLjUyOGQ0NDUuNDRkODE5LjJkNDQ1LjQ0ZDk1Mi4zMTloUjNkNTMyLjQ4UjRkNDQ1LjQ0UjVkODcuMDRSNmQ1MDEuNzZSN2QwUjhkNDE0LjcyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk1MVIxMmQ4Ny4wNFIxM2Q1MzIuNDhSMTRhaTFpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kzaTNpM2kyaGc6MTYzb1IxZDc2OFIyYWQ0NjAuOGQ5NTIuMzE5ZDQ2MC44ZDk4Mi4wMTZkNDM5LjgwOGQxMDAzLjAwOGQ0MTguODE2ZDEwMjRkMzg5LjEyZDEwMjRkMTAyLjRkMTAyNGQxMDIuNGQ5NTIuMzE5ZDE3NC4wOGQ5NTIuMzE5ZDE3NC4wOGQ4MDguOTZkMTAyLjRkODA4Ljk2ZDEwMi40ZDc0Ny41MmQxNTcuNjk2ZDc0Ny41MmQxNTcuNjk2ZDczNy4yOGQxMjhkNzA4LjYwOGQxMDIuNGQ2ODMuMDA4ZDEwMi40ZDY1NS4zNmQxMDIuNGQ1OTMuOTJkMTAyLjRkNTY0LjIyM2QxMjMuMzkyZDU0My4yMzJkMTQ0LjM4NGQ1MjIuMjRkMTc0LjA4ZDUyMi4yNGQzODkuMTJkNTIyLjI0ZDQxOC44MTZkNTIyLjI0ZDQzOS44MDhkNTQzLjIzMmQ0NjAuOGQ1NjQuMjIzZDQ2MC44ZDU5My45MmQ0NjAuOGQ2NjUuNTk5ZDM3OC44OGQ2NjUuNTk5ZDM3OC44OGQ1OTMuOTJkMTg0LjMyZDU5My45MmQxODQuMzJkNjc1LjgzOWQyNTZkNzQ3LjUyZDM0OC4xNmQ3NDcuNTJkMjg1LjY5NmQ4MDguOTZkMjU2ZDgwOC45NmQyNTZkOTUyLjMxOWQzNzguODhkOTUyLjMxOWQzNzguODhkODgwLjY0ZDQ2MC44ZDg4MC42NGQ0NjAuOGQ5NTIuMzE5aFIzZDUzMi40OFI0ZDQ2MC44UjVkMTAyLjRSNmQ1MDEuNzZSN2QwUjhkMzk5LjM2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNjNSMTJkMTAyLjRSMTNkNTMyLjQ4UjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjUwb1IxZDc2OFIyYWQ0NDUuNDRkMTAyNGQ4Ny4wNGQxMDI0ZDg3LjA0ZDkxNi40OGQzNjMuNTJkNzEzLjcyOGQzNjMuNTJkNTkzLjkyZDE2OC45NmQ1OTMuOTJkMTY4Ljk2ZDY2NS41OTlkODcuMDRkNjY1LjU5OWQ4Ny4wNGQ1OTMuOTJkODcuMDRkNTY0LjIyM2QxMDguMDMyZDU0My4yMzJkMTI5LjAyNGQ1MjIuMjRkMTU4LjcyZDUyMi4yNGQzNzMuNzZkNTIyLjI0ZDQwMy40NTZkNTIyLjI0ZDQyNC40NDhkNTQzLjIzMmQ0NDUuNDRkNTY0LjIyM2Q0NDUuNDRkNTkzLjkyZDQ0NS40NGQ3NDIuNGQxNzQuMDhkOTQyLjA4ZDE3NC4wOGQ5NTIuMzE5ZDQ0NS40NGQ5NTIuMzE5ZDQ0NS40NGQxMDI0aFIzZDUzMi40OFI0ZDQ0NS40NFI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTBSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaGc6MTYyb1IxZDc2OFIyYWQ0MzAuMDhkNjY1LjU5OWQzNjcuNjE2ZDcyNy4wNGQzMDcuMmQ3MjcuMDRkMzA3LjJkOTYyLjU2ZDM5OS4zNmQ5NjIuNTZkMzk5LjM2ZDEwMjRkMzA3LjJkMTAyNGQyNDUuNzZkMTA4NS40NGQyNDUuNzZkMTAyNGQxNjMuODRkMTAyNGQxMzQuMTQ0ZDEwMjRkMTEzLjE1MmQxMDAzLjAwOGQ5Mi4xNmQ5ODIuMDE2ZDkyLjE2ZDk1Mi4zMTlkOTIuMTZkNzM3LjI4ZDkyLjE2ZDcwNy41ODRkMTEzLjE1MmQ2ODYuNTkyZDEzNC4xNDRkNjY1LjU5OWQxNjMuODRkNjY1LjU5OWQyNDUuNzZkNjY1LjU5OWQzMDcuMmQ2MDQuMTZkMzA3LjJkNjY1LjU5OWQ0MzAuMDhkNjY1LjU5OWQyNDUuNzZkOTYyLjU2ZDI0NS43NmQ3MjcuMDRkMTYzLjg0ZDcyNy4wNGQxNjMuODRkOTYyLjU2ZDI0NS43NmQ5NjIuNTZoUjNkNDQwLjMyUjRkNDMwLjA4UjVkOTIuMTZSNmQ0MTkuODRSN2QtNjEuNDRSOGQzMjcuNjhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE2MlIxMmQ5Mi4xNlIxM2Q0NDAuMzJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDlvUjFkNzY4UjJhZDQ0NS40NGQxMDI0ZDg3LjA0ZDEwMjRkODcuMDRkOTUyLjMxOWQyOTEuODRkOTUyLjMxOWQyOTEuODRkNjA5LjI4ZDI4MS42ZDYwOS4yOGQxMTcuNzZkNzczLjEyZDY2LjU2ZDcyMC44OTZkMjY1LjIxNmQ1MjIuMjRkMzczLjc2ZDUyMi4yNGQzNzMuNzZkOTUyLjMxOWQ0NDUuNDRkOTUyLjMxOWQ0NDUuNDRkMTAyNGhSM2Q1MzIuNDhSNGQ0NDUuNDRSNWQ2Ni41NlI2ZDUwMS43NlI3ZDBSOGQ0MzUuMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNDlSMTJkNjYuNTZSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTYxb1IxZDc2OFIyYWQ5Mi4xNmQ4ODguODMyZDE3NC4wOGQ4MDguOTZkMTc0LjA4ZDExNjcuMzZkOTIuMTZkMTE2Ny4zNmQ5Mi4xNmQ4ODguODMyZDkyLjE2ZDY2NS41OTlkMTg0LjMyZDY2NS41OTlkMTg0LjMyZDc0Ny41MmQ5Mi4xNmQ3NDcuNTJkOTIuMTZkNjY1LjU5OWhSM2QyODYuNzJSNGQxODQuMzJSNWQ5Mi4xNlI2ZDM1OC40UjdkLTE0My4zNlI4ZDI2Ni4yNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTYxUjEyZDkyLjE2UjEzZDI4Ni43MlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ4b1IxZDc2OFIyYWQ0NDUuNDRkOTUyLjMxOWQ0NDUuNDRkOTgyLjAxNmQ0MjQuNDQ4ZDEwMDMuMDA4ZDQwMy40NTZkMTAyNGQzNzMuNzZkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkNTkzLjkyZDg3LjA0ZDU2NC4yMjNkMTA4LjAzMmQ1NDMuMjMyZDEyOS4wMjRkNTIyLjI0ZDE1OC43MmQ1MjIuMjRkMzczLjc2ZDUyMi4yNGQ0MDMuNDU2ZDUyMi4yNGQ0MjQuNDQ4ZDU0My4yMzJkNDQ1LjQ0ZDU2NC4yMjNkNDQ1LjQ0ZDU5My45MmQ0NDUuNDRkOTUyLjMxOWQzNjMuNTJkOTUyLjMxOWQzNjMuNTJkNTkzLjkyZDE2OC45NmQ1OTMuOTJkMTY4Ljk2ZDk1Mi4zMTlkMzYzLjUyZDk1Mi4zMTloUjNkNTMyLjQ4UjRkNDQ1LjQ0UjVkODcuMDRSNmQ1MDEuNzZSN2QwUjhkNDE0LjcyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0OFIxMmQ4Ny4wNFIxM2Q1MzIuNDhSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaGc6MTYwb1IxZDc2OFIyYWhSM2QyMDQuOFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNjBSMTJkMFIxM2QyMDQuOFIxNGFoZzo0N29SMWQ3NjhSMmFkMzM3LjkyZDQ1MC41NTlkNTUuMjk2ZDEwOTUuNjhkLTIwLjQ4ZDEwOTUuNjhkMjY1LjIxNmQ0NTAuNTU5ZDMzNy45MmQ0NTAuNTU5aFIzZDMxNy40NFI0ZDMzNy45MlI1ZC0yMC40OFI2ZDU3My40NFI3ZC03MS42OFI4ZDU5My45MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNDdSMTJkLTIwLjQ4UjEzZDMxNy40NFIxNGFpMWkyaTJpMmkyaGc6MTU5b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1OVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDZvUjFkNzY4UjJhZDE3NC4wOGQxMDI0ZDgxLjkyZDEwMjRkODEuOTJkOTQyLjA4ZDE3NC4wOGQ5NDIuMDhkMTc0LjA4ZDEwMjRoUjNkMjU2UjRkMTc0LjA4UjVkODEuOTJSNmQ4MS45MlI3ZDBSOGQwUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0NlIxMmQ4MS45MlIxM2QyNTZSMTRhaTFpMmkyaTJpMmhnOjE1OG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNThSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ1b1IxZDc2OFIyYWQyNjYuMjRkODA4Ljk2ZDE5NC41NmQ4ODAuNjRkMjAuNDhkODgwLjY0ZDkyLjE2ZDgwOC45NmQyNjYuMjRkODA4Ljk2aFIzZDI4Ni43MlI0ZDI2Ni4yNFI1ZDIwLjQ4UjZkMjE1LjA0UjdkMTQzLjM2UjhkMTk0LjU2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0NVIxMmQyMC40OFIxM2QyODYuNzJSMTRhaTFpMmkyaTJpMmhnOjE1N29SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNTdSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ0b1IxZDc2OFIyYWQxODQuMzJkMTEwNS45MmQxMjIuODhkMTE3Ny42ZDEyMi44OGQxMDI0ZDgxLjkyZDEwMjRkODEuOTJkOTQyLjA4ZDExMi42NGQ5NDIuMDhkMTQyLjMzNmQ5NDIuMDhkMTYzLjMyOGQ5NjMuMDcyZDE4NC4zMmQ5ODQuMDY0ZDE4NC4zMmQxMDEzLjc2ZDE4NC4zMmQxMTA1LjkyaFIzZDI2Ni4yNFI0ZDE4NC4zMlI1ZDgxLjkyUjZkODEuOTJSN2QtMTUzLjZSOGQwUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0NFIxMmQ4MS45MlIxM2QyNjYuMjRSMTRhaTFpMmkyaTJpMmkyaTNpM2kyaGc6MTU2b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1NlIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDNvUjFkNzY4UjJhZDQ0NS40NGQ4ODAuNjRkMzAyLjA4ZDg4MC42NGQzMDIuMDhkMTAyNGQyMzAuNGQxMDI0ZDIzMC40ZDg4MC42NGQ4Ny4wNGQ4ODAuNjRkODcuMDRkODA4Ljk2ZDIzMC40ZDgwOC45NmQyMzAuNGQ2NjUuNTk5ZDMwMi4wOGQ2NjUuNTk5ZDMwMi4wOGQ4MDguOTZkNDQ1LjQ0ZDgwOC45NmQ0NDUuNDRkODgwLjY0aFIzZDUzMi40OFI0ZDQ0NS40NFI1ZDg3LjA0UjZkMzU4LjRSN2QwUjhkMjcxLjM2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0M1IxMmQ4Ny4wNFIxM2Q1MzIuNDhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNTVvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTU1UjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0Mm9SMWQ3NjhSMmFkNDE1Ljc0NGQ1MzUuNTUxZDM1MC4yMDhkNjAxLjA4OGQzNTAuMjA4ZDUxNC4wNDhkNDE1Ljc0NGQ0NDguNTExZDQxNS43NDRkNTM1LjU1MWQzMzQuODQ4ZDU0My43NDNkMjczLjQwOGQ0ODIuMzA0ZDI3My40MDhkMzkwLjE0NGQzMzQuODQ4ZDQ1MS41ODNkMzM0Ljg0OGQ1NDMuNzQzZDQ3NS4xMzZkNTkyLjg5NmQ0MTMuNjk2ZDY1NC4zMzZkMzIxLjUzNmQ2NTQuMzM2ZDM4Mi45NzZkNTkyLjg5NmQ0NzUuMTM2ZDU5Mi44OTZkMjgyLjYyNGQ1MTUuMDcyZDE5NS41ODRkNTE1LjA3MmQxMzAuMDQ4ZDQ0OS41MzVkMjE3LjA4OGQ0NDkuNTM1ZDI4Mi42MjRkNTE1LjA3MmQ0MjcuMDA4ZDczOC4zMDRkMzM5Ljk2OGQ3MzguMzA0ZDI3NC40MzJkNjcyLjc2OGQzNjEuNDcyZDY3Mi43NjhkNDI3LjAwOGQ3MzguMzA0ZDIyNS4yOGQ1MzEuNDU2ZDE2My44NGQ1OTIuODk2ZDcxLjY4ZDU5Mi44OTZkMTMzLjEyZDUzMS40NTZkMjI1LjI4ZDUzMS40NTZkMjczLjQwOGQ3OTMuNmQyMTEuOTY4ZDczMi4xNmQyMTEuOTY4ZDY0MGQyNzMuNDA4ZDcwMS40NGQyNzMuNDA4ZDc5My42ZDE5Ni42MDhkNTgzLjY4ZDE5Ni42MDhkNjY5LjY5NWQxMzEuMDcyZDczNS4yMzJkMTMxLjA3MmQ2NDguMTkyZDE5Ni42MDhkNTgzLjY4aFIzZDU0Ni44MTZSNGQ0NzUuMTM2UjVkNzEuNjhSNmQ2MzMuODU2UjdkMjMwLjRSOGQ1NjIuMTc2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0MlIxMmQ3MS42OFIxM2Q1NDYuODE2UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTU0b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1NFIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDFvUjFkNzY4UjJhZDcxLjY4ZDEwMzQuMjRkMTQzLjM2ZDEwMzQuMjRkMTQzLjM2ZDUxMmQ3MS42OGQ1MTJkNzEuNjhkNDUwLjU1OWQxNDMuMzZkNDUwLjU1OWQxNzMuMDU2ZDQ1MC41NTlkMTk0LjA0OGQ0NzEuNTUyZDIxNS4wNGQ0OTIuNTQ0ZDIxNS4wNGQ1MjIuMjRkMjE1LjA0ZDEwMjRkMjE1LjA0ZDEwNTMuNjk2ZDE5NC4wNDhkMTA3NC42ODhkMTczLjA1NmQxMDk1LjY4ZDE0My4zNmQxMDk1LjY4ZDcxLjY4ZDEwOTUuNjhkNzEuNjhkMTAzNC4yNGhSM2QzMjcuNjhSNGQyMTUuMDRSNWQ3MS42OFI2ZDU3My40NFI3ZC03MS42OFI4ZDUwMS43NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNDFSMTJkNzEuNjhSMTNkMzI3LjY4UjE0YWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaGc6MTUzb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1M1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDBvUjFkNzY4UjJhZDI1NmQxMDk1LjY4ZDE4NC4zMmQxMDk1LjY4ZDE1NC42MjRkMTA5NS42OGQxMzMuNjMyZDEwNzQuNjg4ZDExMi42NGQxMDUzLjY5NmQxMTIuNjRkMTAyNGQxMTIuNjRkNTIyLjI0ZDExMi42NGQ0OTIuNTQ0ZDEzMy42MzJkNDcxLjU1MmQxNTQuNjI0ZDQ1MC41NTlkMTg0LjMyZDQ1MC41NTlkMjU2ZDQ1MC41NTlkMjU2ZDUxMmQxODQuMzJkNTEyZDE4NC4zMmQxMDM0LjI0ZDI1NmQxMDM0LjI0ZDI1NmQxMDk1LjY4aFIzZDMyNy42OFI0ZDI1NlI1ZDExMi42NFI2ZDU3My40NFI3ZC03MS42OFI4ZDQ2MC44UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0MFIxMmQxMTIuNjRSMTNkMzI3LjY4UjE0YWkxaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaGc6MTUyb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1MlIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzlvUjFkNzY4UjJhZDE2My44NGQ2MTYuNDQ4ZDkyLjE2ZDY4Ni4wNzlkOTIuMTZkNDUwLjU1OWQxNjMuODRkNDUwLjU1OWQxNjMuODRkNjE2LjQ0OGhSM2QyNDUuNzZSNGQxNjMuODRSNWQ5Mi4xNlI2ZDU3My40NFI3ZDMzNy45MlI4ZDQ4MS4yOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMzlSMTJkOTIuMTZSMTNkMjQ1Ljc2UjE0YWkxaTJpMmkyaTJoZzoxNTFvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTUxUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozOG9SMWQ3NjhSMmFkNTkzLjkyZDEwMjRkNTAxLjc2ZDEwMjRkNDQ5LjUzNmQ5NzMuODI0ZDM5OS4zNmQxMDI0ZDE3NC4wOGQxMDI0ZDE0NC4zODRkMTAyNGQxMjMuMzkyZDEwMDMuMDA4ZDEwMi40ZDk4Mi4wMTZkMTAyLjRkOTUyLjMxOWQxMDIuNGQ4MjkuNDRkMTAyLjRkODE0LjA3OWQxMDguMDMyZDgwMC4yNTZkMTEzLjY2NGQ3ODYuNDMyZDEyMy45MDRkNzc1LjY4ZDEzNC4xNDRkNzY0LjkyOGQxNDYuOTQ0ZDc1OC43ODRkMTU5Ljc0NGQ3NTIuNjRkMTc0LjA4ZDc1Mi42NGQyMjUuMjhkNzUyLjY0ZDE4OS40NGQ3MTguODQ4ZDE2My44NGQ2OTMuMjQ4ZDE2My44NGQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkMTYzLjg0ZDU2NC4yMjNkMTg0LjgzMmQ1NDMuMjMyZDIwNS44MjRkNTIyLjI0ZDIzNS41MmQ1MjIuMjRkMzc4Ljg4ZDUyMi4yNGQ0MDguNTc2ZDUyMi4yNGQ0MjkuNTY4ZDU0My4yMzJkNDUwLjU2ZDU2NC4yMjNkNDUwLjU2ZDU5My45MmQ0NTAuNTZkNjY1LjU5OWQzNzguODhkNjY1LjU5OWQzNzguODhkNTgzLjY4ZDIzNS41MmQ1ODMuNjhkMjM1LjUyZDY2NS41OTlkMzUzLjI4ZDc4My4zNmQzOTAuMTQ0ZDc0Ny41MmQ1NDIuNzJkNzQ3LjUyZDQ4MC4yNTZkODA4Ljk2ZDM3OC44OGQ4MDguOTZkNTkzLjkyZDEwMjRkNDM5LjI5NmQ5NjIuNTZkMjgyLjYyNGQ4MDguOTZkMTc0LjA4ZDgwOC45NmQxNzQuMDhkOTYyLjU2ZDQzOS4yOTZkOTYyLjU2aFIzZDYxNC40UjRkNTkzLjkyUjVkMTAyLjRSNmQ1MDEuNzZSN2QwUjhkMzk5LjM2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkzOFIxMmQxMDIuNFIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kzaTNpMmkyaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjE1MG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNTBSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjM3b1IxZDc2OFIyYWQ2MzQuODhkOTUyLjMxOWQ2MzQuODhkOTgyLjAxNmQ2MTMuODg4ZDEwMDMuMDA4ZDU5Mi44OTZkMTAyNGQ1NjMuMmQxMDI0ZDQ5MS41MmQxMDI0ZDQ2MS44MjRkMTAyNGQ0NDAuODMyZDEwMDMuMDA4ZDQxOS44NGQ5ODIuMDE2ZDQxOS44NGQ5NTIuMzE5ZDQxOS44NGQ4MDguOTZkNDE5Ljg0ZDc3OS4yNjRkNDQwLjgzMmQ3NTguMjcxZDQ2MS44MjRkNzM3LjI4ZDQ5MS41MmQ3MzcuMjhkNTYzLjJkNzM3LjI4ZDU5Mi44OTZkNzM3LjI4ZDYxMy44ODhkNzU4LjI3MWQ2MzQuODhkNzc5LjI2NGQ2MzQuODhkODA4Ljk2ZDYzNC44OGQ5NTIuMzE5ZDUxMC45NzZkNDUwLjU1OWQyNTkuMDcyZDEwMjRkMTgzLjI5NmQxMDI0ZDQzOC4yNzJkNDUwLjU1OWQ1MTAuOTc2ZDQ1MC41NTlkMjc2LjQ4ZDY2NS41OTlkMjc2LjQ4ZDY5NS4yOTZkMjU1LjQ4OGQ3MTYuMjg4ZDIzNC40OTZkNzM3LjI4ZDIwNC44ZDczNy4yOGQxMzMuMTJkNzM3LjI4ZDEwMy40MjRkNzM3LjI4ZDgyLjQzMmQ3MTYuMjg4ZDYxLjQ0ZDY5NS4yOTZkNjEuNDRkNjY1LjU5OWQ2MS40NGQ1MjIuMjRkNjEuNDRkNDkyLjU0NGQ4Mi40MzJkNDcxLjU1MmQxMDMuNDI0ZDQ1MC41NTlkMTMzLjEyZDQ1MC41NTlkMjA0LjhkNDUwLjU1OWQyMzQuNDk2ZDQ1MC41NTlkMjU1LjQ4OGQ0NzEuNTUyZDI3Ni40OGQ0OTIuNTQ0ZDI3Ni40OGQ1MjIuMjRkMjc2LjQ4ZDY2NS41OTlkNTczLjQ0ZDk2Mi41NmQ1NzMuNDRkNzk4LjcyZDQ4MS4yOGQ3OTguNzJkNDgxLjI4ZDk2Mi41NmQ1NzMuNDRkOTYyLjU2ZDIxNS4wNGQ2NzUuODM5ZDIxNS4wNGQ1MTJkMTIyLjg4ZDUxMmQxMjIuODhkNjc1LjgzOWQyMTUuMDRkNjc1LjgzOWhSM2Q2OTYuMzJSNGQ2MzQuODhSNWQ2MS40NFI2ZDU3My40NFI3ZDBSOGQ1MTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTM3UjEyZDYxLjQ0UjEzZDY5Ni4zMlIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ5b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE0OVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzZvUjFkNzY4UjJhZDQ2MC44ZDUyMi4yNGQzODkuMTJkNTkzLjkyZDI5Ni45NmQ1OTMuOTJkMjk2Ljk2ZDczNy4yOGQzNzguODhkNzM3LjI4ZDQwOC41NzZkNzM3LjI4ZDQyOS41NjhkNzU4LjI3MWQ0NTAuNTZkNzc5LjI2NGQ0NTAuNTZkODA4Ljk2ZDQ1MC41NmQ5NTIuMzE5ZDQ1MC41NmQ5ODIuMDE2ZDQyOS41NjhkMTAwMy4wMDhkNDA4LjU3NmQxMDI0ZDM3OC44OGQxMDI0ZDI5Ni45NmQxMDI0ZDIzNS41MmQxMDg1LjQ0ZDIzNS41MmQxMDI0ZDcxLjY4ZDEwMjRkMTQzLjM2ZDk1Mi4zMTlkMjM1LjUyZDk1Mi4zMTlkMjM1LjUyZDgwOC45NmQxNTMuNmQ4MDguOTZkMTIzLjkwNGQ4MDguOTZkMTAyLjkxMmQ3ODcuOTY4ZDgxLjkyZDc2Ni45NzZkODEuOTJkNzM3LjI4ZDgxLjkyZDU5My45MmQ4MS45MmQ1NjQuMjIzZDEwMi45MTJkNTQzLjIzMmQxMjMuOTA0ZDUyMi4yNGQxNTMuNmQ1MjIuMjRkMjM1LjUyZDUyMi4yNGQyOTYuOTZkNDYwLjc5OWQyOTYuOTZkNTIyLjI0ZDQ2MC44ZDUyMi4yNGQyMzUuNTJkNzM3LjI4ZDIzNS41MmQ1OTMuOTJkMTUzLjZkNTkzLjkyZDE1My42ZDczNy4yOGQyMzUuNTJkNzM3LjI4ZDM3OC44OGQ5NTIuMzE5ZDM3OC44OGQ4MDguOTZkMjk2Ljk2ZDgwOC45NmQyOTYuOTZkOTUyLjMxOWQzNzguODhkOTUyLjMxOWhSM2Q1MzIuNDhSNGQ0NjAuOFI1ZDcxLjY4UjZkNTYzLjJSN2QtNjEuNDRSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTM2UjEyZDcxLjY4UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0OG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNDhSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjM1b1IxZDc2OFIyYWQ1MjMuMjY0ZDY2NS41OTlkNDQ5LjUzNmQ3MjcuMDRkNDE4LjgxNmQ3MjcuMDRkMzkxLjE2OGQ4NzAuNGQ0ODMuMzI4ZDg3MC40ZDQwOS42ZDkzMS44NGQzNzguODhkOTMxLjg0ZDM3Mi43MzZkOTYyLjU2ZDMwMC4wMzJkMTAyNGQzMTcuNDRkOTMxLjg0ZDE3NC4wOGQ5MzEuODRkMTY3LjkzNmQ5NjIuNTZkOTUuMjMyZDEwMjRkMTEyLjY0ZDkzMS44NGQyMC40OGQ5MzEuODRkOTQuMjA4ZDg3MC40ZDEyNC45MjhkODcwLjRkMTUyLjU3NmQ3MjcuMDRkNjAuNDE2ZDcyNy4wNGQxMzQuMTQ0ZDY2NS41OTlkMTY0Ljg2NGQ2NjUuNTk5ZDE2OS45ODRkNjM0Ljg4ZDI0My43MTJkNTczLjQ0ZDIyNi4zMDRkNjY1LjU5OWQzNjkuNjY0ZDY2NS41OTlkMzc0Ljc4NGQ2MzQuODhkNDQ4LjUxMmQ1NzMuNDRkNDMxLjEwNGQ2NjUuNTk5ZDUyMy4yNjRkNjY1LjU5OWQzNTcuMzc2ZDcyNy4wNGQyMTQuMDE2ZDcyNy4wNGQxODYuMzY4ZDg3MC40ZDMyOS43MjhkODcwLjRkMzU3LjM3NmQ3MjcuMDRoUjNkNTMyLjQ4UjRkNTIzLjI2NFI1ZDIwLjQ4UjZkNDUwLjU2UjdkMFI4ZDQzMC4wOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMzVSMTJkMjAuNDhSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ3b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE0N1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzRvUjFkNzY4UjJhZDE2My44NGQ2MTYuNDQ4ZDkyLjE2ZDY4Ni4wNzlkOTIuMTZkNDUwLjU1OWQxNjMuODRkNDUwLjU1OWQxNjMuODRkNjE2LjQ0OGQzMTcuNDRkNjE2LjQ0OGQyNDUuNzZkNjg2LjA3OWQyNDUuNzZkNDUwLjU1OWQzMTcuNDRkNDUwLjU1OWQzMTcuNDRkNjE2LjQ0OGhSM2QzOTkuMzZSNGQzMTcuNDRSNWQ5Mi4xNlI2ZDU3My40NFI3ZDMzNy45MlI4ZDQ4MS4yOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMzRSMTJkOTIuMTZSMTNkMzk5LjM2UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ2b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE0NlIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzNvUjFkNzY4UjJhZDE4NC4zMmQ4MDAuNzY4ZDEwMi40ZDg4MC42NGQxMDIuNGQ1MjIuMjRkMTg0LjMyZDUyMi4yNGQxODQuMzJkODAwLjc2OGQxODQuMzJkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDk0Mi4wOGQxODQuMzJkOTQyLjA4ZDE4NC4zMmQxMDI0aFIzZDI4Ni43MlI0ZDE4NC4zMlI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkzM1IxMmQ5Mi4xNlIxM2QyODYuNzJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDVvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQ1UjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozMm9SMWQ3NjhSMmFoUjNkMjA0LjhSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMzJSMTJkMFIxM2QyMDQuOFIxNGFoZzoxNDRvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQ0UjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDNvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQzUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNTVvUjFkNzY4UjJhZDQzMC4wOGQxMTY3LjM2ZDQzMC4wOGQxMTk3LjA1NmQ0MDkuMDg4ZDEyMTguMDQ4ZDM4OC4wOTZkMTIzOS4wNGQzNTguNGQxMjM5LjA0ZDYxLjQ0ZDEyMzkuMDRkMTIyLjg4ZDExNzcuNmQzNTguNGQxMTc3LjZkMzU4LjRkOTcyLjhkMzA3LjJkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY2NS41OTlkNDMwLjA4ZDY2NS41OTlkNDMwLjA4ZDExNjcuMzZkMzUzLjI4ZDU5My45MmQyODYuNzJkNTkzLjkyZDI4Ni43MmQ1MTJkMzUzLjI4ZDUxMmQzNTMuMjhkNTkzLjkyZDIxNS4wNGQ1OTMuOTJkMTQ4LjQ4ZDU5My45MmQxNDguNDhkNTEyZDIxNS4wNGQ1MTJkMjE1LjA0ZDU5My45MmhSM2Q1MDYuODhSNGQ0MzAuMDhSNWQ2MS40NFI2ZDUxMlI3ZC0yMTUuMDRSOGQ0NTAuNTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI1NVIxMmQ2MS40NFIxM2Q1MDYuODhSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDJvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQyUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNTRvUjFkNzY4UjJhZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ5ODIuMDE2ZDQxOS4zMjhkMTAwMy4wMDhkMzk4LjMzNmQxMDI0ZDM2OC42NGQxMDI0ZDE1My42ZDEwMjRkMTUzLjZkMTIzOS4wNGQ4MS45MmQxMjM5LjA0ZDgxLjkyZDUwMS43NmQxNTMuNmQ0MzAuMDhkMTUzLjZkNzE2LjhkMjA0LjhkNjY1LjU5OWQzNjguNjRkNjY1LjU5OWQzOTguMzM2ZDY2NS41OTlkNDE5LjMyOGQ2ODYuNTkyZDQ0MC4zMmQ3MDcuNTg0ZDQ0MC4zMmQ3MzcuMjhkNDQwLjMyZDk1Mi4zMTlkMzY4LjY0ZDk2Mi41NmQzNjguNjRkNzI3LjA0ZDE1My42ZDcyNy4wNGQxNTMuNmQxMDEzLjc2ZDIwNC44ZDk2Mi41NmQzNjguNjRkOTYyLjU2aFIzZDUxMlI0ZDQ0MC4zMlI1ZDgxLjkyUjZkNTkzLjkyUjdkLTIxNS4wNFI4ZDUxMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjU0UjEyZDgxLjkyUjEzZDUxMlIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmkyaGc6MTQxb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE0MVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjUzb1IxZDc2OFIyYWQ0MzAuMDhkMTE2Ny4zNmQ0MzAuMDhkMTE5Ny4wNTZkNDA5LjA4OGQxMjE4LjA0OGQzODguMDk2ZDEyMzkuMDRkMzU4LjRkMTIzOS4wNGQ2MS40NGQxMjM5LjA0ZDEyMi44OGQxMTc3LjZkMzU4LjRkMTE3Ny42ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMTY3LjM2ZDM3OC44OGQ0NTAuNTU5ZDI3Ni40OGQ1OTMuOTJkMjA0LjhkNTkzLjkyZDMwNy4yZDQ1MC41NTlkMzc4Ljg4ZDQ1MC41NTloUjNkNTA2Ljg4UjRkNDMwLjA4UjVkNjEuNDRSNmQ1NzMuNDRSN2QtMjE1LjA0UjhkNTEyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyNTNSMTJkNjEuNDRSMTNkNTA2Ljg4UjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDBvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQwUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNTJvUjFkNzY4UjJhZDQzMC4wOGQxMDI0ZDM1OC40ZDEwMjRkMzU4LjRkOTcyLjhkMzA3LjJkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY2NS41OTlkNDMwLjA4ZDY2NS41OTlkNDMwLjA4ZDEwMjRkMzUzLjI4ZDU5My45MmQyODYuNzJkNTkzLjkyZDI4Ni43MmQ1MTJkMzUzLjI4ZDUxMmQzNTMuMjhkNTkzLjkyZDIxNS4wNGQ1OTMuOTJkMTQ4LjQ4ZDU5My45MmQxNDguNDhkNTEyZDIxNS4wNGQ1MTJkMjE1LjA0ZDU5My45MmhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDUxMlI3ZDBSOGQ0NDAuMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI1MlIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTM5b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzOVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjUxb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMDI0ZDM2OC42NGQ1OTMuOTJkMjk2Ljk2ZDU5My45MmQyNTZkNTAxLjc2ZDI0NS43NmQ1MDEuNzZkMjA0LjhkNTkzLjkyZDEzMy4xMmQ1OTMuOTJkMjE1LjA0ZDQ2MC43OTlkMjg2LjcyZDQ2MC43OTlkMzY4LjY0ZDU5My45MmhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDU2My4yUjdkMFI4ZDQ5MS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjUxUjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MTM4b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzOFIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjUwb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMDI0ZDM3OC44OGQ0NTAuNTU5ZDI3Ni40OGQ1OTMuOTJkMjA0LjhkNTkzLjkyZDMwNy4yZDQ1MC41NTlkMzc4Ljg4ZDQ1MC41NTloUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1NzMuNDRSN2QwUjhkNTAxLjc2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyNTBSMTJkNzEuNjhSMTNkNTAxLjc2UjE0YWkxaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTM3b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzN1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQ5b1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMDI0ZDMwNy4yZDU5My45MmQyMzUuNTJkNTkzLjkyZDEzMy4xMmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMzA3LjJkNTkzLjkyaFIzZDUwMS43NlI0ZDQzMC4wOFI1ZDcxLjY4UjZkNTczLjQ0UjdkMFI4ZDUwMS43NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjQ5UjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNm9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMzZSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0OG9SMWQ3NjhSMmFkNDc2LjE2ZDY5MS4yZDQ0MC4zMmQ3MjYuMDE2ZDQ1MS41ODRkNzM3LjI4ZDQ1MS41ODRkOTUyLjMxOWQ0NTEuNTg0ZDk4Mi4wMTZkNDMwLjA4ZDEwMDMuMDA4ZDQwOC41NzZkMTAyNGQzNzkuOTA0ZDEwMjRkMTYyLjgxNmQxMDI0ZDE1MS41NTJkMTAxMi43MzZkMTEyLjY0ZDEwNTEuNjQ4ZDY2LjU2ZDEwMDIuNDk2ZDEwMy40MjRkOTY0LjYwOGQ5MS4xMzZkOTUyLjMxOWQ5MS4xMzZkNzM3LjI4ZDkxLjEzNmQ3MDcuNTg0ZDExMi4xMjhkNjg2LjU5MmQxMzMuMTJkNjY1LjU5OWQxNjIuODE2ZDY2NS41OTlkMzc5LjkwNGQ2NjUuNTk5ZDM5Mi4xOTJkNjc4LjkxMmQ0MjguMDMyZDY0My4wNzJkNDc2LjE2ZDY5MS4yZDM0NS4wODhkNzM3LjI4ZDM0NS4wODhkNzI3LjA0ZDE2Mi44MTZkNzI3LjA0ZDE2Mi44MTZkOTA3LjI2NGQxNzMuMDU2ZDkwNy4yNjRkMzQ1LjA4OGQ3MzcuMjhkMzc5LjkwNGQ5NjIuNTZkMzc5LjkwNGQ3ODcuNDU2ZDM2OS42NjRkNzg3LjQ1NmQyMDIuNzUyZDk1Mi4zMTlkMjAyLjc1MmQ5NjIuNTZkMzc5LjkwNGQ5NjIuNTZoUjNkNTQyLjcyUjRkNDc2LjE2UjVkNjYuNTZSNmQzODAuOTI4UjdkLTI3LjY0OFI4ZDMxNC4zNjhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0OFIxMmQ2Ni41NlIxM2Q1NDIuNzJSMTRhaTFpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaTJpMWkyaTJpMmkyaTJoZzoxMzVvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTM1UjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNDdvUjFkNzY4UjJhZDMxMi4zMmQxMDI0ZDIyMC4xNmQxMDI0ZDIyMC4xNmQ5NDIuMDhkMzEyLjMyZDk0Mi4wOGQzMTIuMzJkMTAyNGQzMTIuMzJkNzQ3LjUyZDIyMC4xNmQ3NDcuNTJkMjIwLjE2ZDY2NS41OTlkMzEyLjMyZDY2NS41OTlkMzEyLjMyZDc0Ny41MmhSM2Q1MzIuNDhSNGQ0NDUuNDRSNWQ4Ny4wNFI2ZDM1OC40UjdkMFI4ZDI3MS4zNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjQ3UjEyZDg3LjA0UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMzRSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0Nm9SMWQ3NjhSMmFkNDMwLjA4ZDk1Mi4zMTlkNDMwLjA4ZDk4Mi4wMTZkNDA5LjA4OGQxMDAzLjAwOGQzODguMDk2ZDEwMjRkMzU4LjRkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDk1Mi4zMTlkMzU4LjRkOTYyLjU2ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1My4yOGQ1OTMuOTJkMjg2LjcyZDU5My45MmQyODYuNzJkNTEyZDM1My4yOGQ1MTJkMzUzLjI4ZDU5My45MmQyMTUuMDRkNTkzLjkyZDE0OC40OGQ1OTMuOTJkMTQ4LjQ4ZDUxMmQyMTUuMDRkNTEyZDIxNS4wNGQ1OTMuOTJoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1MTJSN2QwUjhkNDQwLjMyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyNDZSMTJkNzEuNjhSMTNkNTAxLjc2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTMzb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzM1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQ1b1IxZDc2OFIyYWQ0MzAuMDhkOTUyLjMxOWQ0MzAuMDhkOTgyLjAxNmQ0MDkuMDg4ZDEwMDMuMDA4ZDM4OC4wOTZkMTAyNGQzNTguNGQxMDI0ZDE0My4zNmQxMDI0ZDExMy42NjRkMTAyNGQ5Mi42NzJkMTAwMy4wMDhkNzEuNjhkOTgyLjAxNmQ3MS42OGQ5NTIuMzE5ZDcxLjY4ZDczNy4yOGQ3MS42OGQ3MDcuNTg0ZDkyLjY3MmQ2ODYuNTkyZDExMy42NjRkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQzNTguNGQ2NjUuNTk5ZDM4OC4wOTZkNjY1LjU5OWQ0MDkuMDg4ZDY4Ni41OTJkNDMwLjA4ZDcwNy41ODRkNDMwLjA4ZDczNy4yOGQ0MzAuMDhkOTUyLjMxOWQzNTguNGQ5NjIuNTZkMzU4LjRkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZkMzY4LjY0ZDQ2My44NzFkMzY4LjY0ZDQ4MS4yOGQzNjIuNDk2ZDU0My43NDNkMzYwLjQ0OGQ1NjYuMjcxZDM0NS4wODhkNTgxLjYzMmQzMjkuNzI4ZDU5Ni45OTJkMzA5LjI0OGQ1OTYuOTkyZDI3NC40MzJkNTk2Ljk5MmQyNTEuOTA0ZDU3Mi40MTVkMTkzLjUzNmQ1MDcuOTA0ZDE4NC4zMmQ1OTIuODk2ZDEzMy4xMmQ1OTIuODk2ZDEzMy4xMmQ1ODQuNzA0ZDEzNC42NTZkNTY0LjczNmQxMzYuMTkyZDU0NC43NjhkMTQwLjI4OGQ1MTJkMTQyLjMzNmQ0OTAuNDk2ZDE1OC43MmQ0NzUuNjQ4ZDE3NS4xMDRkNDYwLjc5OWQxOTYuNjA4ZDQ2MC43OTlkMjI4LjM1MmQ0NjAuNzk5ZDI0OS44NTZkNDgzLjMyOGQzMTEuMjk2ZDU0Ny44MzlkMzE3LjQ0ZDQ2My44NzFkMzY4LjY0ZDQ2My44NzFoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1NjMuMlI3ZDBSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0NVIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpM2kzaTNpM2kyaTJpMmkzaTNpM2kzaTNpMmkyaTJoZzoxMzJvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTMyUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNDRvUjFkNzY4UjJhZDQzMC4wOGQ5NTIuMzE5ZDQzMC4wOGQ5ODIuMDE2ZDQwOS4wODhkMTAwMy4wMDhkMzg4LjA5NmQxMDI0ZDM1OC40ZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNzM3LjI4ZDcxLjY4ZDcwNy41ODRkOTIuNjcyZDY4Ni41OTJkMTEzLjY2NGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDM1OC40ZDY2NS41OTlkMzg4LjA5NmQ2NjUuNTk5ZDQwOS4wODhkNjg2LjU5MmQ0MzAuMDhkNzA3LjU4NGQ0MzAuMDhkNzM3LjI4ZDQzMC4wOGQ5NTIuMzE5ZDM1OC40ZDk2Mi41NmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNjguNjRkNTkzLjkyZDI5Ni45NmQ1OTMuOTJkMjU2ZDUwMS43NmQyNDUuNzZkNTAxLjc2ZDIwNC44ZDU5My45MmQxMzMuMTJkNTkzLjkyZDIxNS4wNGQ0NjAuNzk5ZDI4Ni43MmQ0NjAuNzk5ZDM2OC42NGQ1OTMuOTJoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1NjMuMlI3ZDBSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0NFIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MTMxb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzMVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQzb1IxZDc2OFIyYWQ0MzAuMDhkOTUyLjMxOWQ0MzAuMDhkOTgyLjAxNmQ0MDkuMDg4ZDEwMDMuMDA4ZDM4OC4wOTZkMTAyNGQzNTguNGQxMDI0ZDE0My4zNmQxMDI0ZDExMy42NjRkMTAyNGQ5Mi42NzJkMTAwMy4wMDhkNzEuNjhkOTgyLjAxNmQ3MS42OGQ5NTIuMzE5ZDcxLjY4ZDczNy4yOGQ3MS42OGQ3MDcuNTg0ZDkyLjY3MmQ2ODYuNTkyZDExMy42NjRkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQzNTguNGQ2NjUuNTk5ZDM4OC4wOTZkNjY1LjU5OWQ0MDkuMDg4ZDY4Ni41OTJkNDMwLjA4ZDcwNy41ODRkNDMwLjA4ZDczNy4yOGQ0MzAuMDhkOTUyLjMxOWQzNTguNGQ5NjIuNTZkMzU4LjRkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZkMzc4Ljg4ZDQ1MC41NTlkMjc2LjQ4ZDU5My45MmQyMDQuOGQ1OTMuOTJkMzA3LjJkNDUwLjU1OWQzNzguODhkNDUwLjU1OWhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDU3My40NFI3ZDBSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0M1IxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzMG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMzBSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0Mm9SMWQ3NjhSMmFkNDMwLjA4ZDk1Mi4zMTlkNDMwLjA4ZDk4Mi4wMTZkNDA5LjA4OGQxMDAzLjAwOGQzODguMDk2ZDEwMjRkMzU4LjRkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDk1Mi4zMTlkMzU4LjRkOTYyLjU2ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDMwNy4yZDU5My45MmQyMzUuNTJkNTkzLjkyZDEzMy4xMmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMzA3LjJkNTkzLjkyaFIzZDUwMS43NlI0ZDQzMC4wOFI1ZDcxLjY4UjZkNTczLjQ0UjdkMFI4ZDUwMS43NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjQyUjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTI5b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyOVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQxb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkNzE2LjhkMTk0LjU2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDEwMjRkMzczLjc2ZDQ2My44NzFkMzczLjc2ZDQ4MS4yOGQzNjcuNjE2ZDU0My43NDNkMzY1LjU2OGQ1NjYuMjcxZDM1MC4yMDhkNTgxLjYzMmQzMzQuODQ4ZDU5Ni45OTJkMzE0LjM2OGQ1OTYuOTkyZDI3OS41NTJkNTk2Ljk5MmQyNTcuMDI0ZDU3Mi40MTVkMTk4LjY1NmQ1MDcuOTA0ZDE4OS40NGQ1OTIuODk2ZDEzOC4yNGQ1OTIuODk2ZDEzOC4yNGQ1ODQuNzA0ZDEzOS43NzZkNTY0LjczNmQxNDEuMzEyZDU0NC43NjhkMTQ1LjQwOGQ1MTJkMTQ3LjQ1NmQ0OTAuNDk2ZDE2My44NGQ0NzUuNjQ4ZDE4MC4yMjRkNDYwLjc5OWQyMDEuNzI4ZDQ2MC43OTlkMjMzLjQ3MmQ0NjAuNzk5ZDI1NC45NzZkNDgzLjMyOGQzMTYuNDE2ZDU0Ny44MzlkMzIyLjU2ZDQ2My44NzFkMzczLjc2ZDQ2My44NzFoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1NjMuMlI3ZDBSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0MVIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTJpMmkyaGc6MTI4b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyOFIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQwb1IxZDc2OFIyYWQ0MjQuOTZkOTUyLjMxOWQ0MjQuOTZkOTgyLjAxNmQ0MDMuOTY4ZDEwMDMuMDA4ZDM4Mi45NzZkMTAyNGQzNTMuMjhkMTAyNGQxMzguMjRkMTAyNGQxMDguNTQ0ZDEwMjRkODcuNTUyZDEwMDMuMDA4ZDY2LjU2ZDk4Mi4wMTZkNjYuNTZkOTUyLjMxOWQ2Ni41NmQ4MTkuMmQ2Ni41NmQ3ODkuNTA0ZDg3LjU1MmQ3NjguNTEyZDEwOC41NDRkNzQ3LjUyZDEzOC4yNGQ3NDcuNTJkMzUzLjI4ZDc0Ny41MmQzNTMuMjhkNzEzLjcyOGQyNDIuNjg4ZDYxMC4zMDRkMTM4LjI0ZDcwNS41MzZkMTM4LjI0ZDYyNS42NjRkMTk5LjY4ZDU3MC4zNjdkMTM4LjI0ZDUxMmQxMzguMjRkNDMwLjA4ZDI0NC43MzZkNTI5LjQwOGQzNTUuMzI4ZDQzMC4wOGQzNTUuMzI4ZDUwNi44OGQyODYuNzJkNTY5LjM0NGQzOTkuMzZkNjczLjc5MWQ0MjQuOTZkNjk2LjMxOWQ0MjQuOTZkNzI3LjA0ZDQyNC45NmQ5NTIuMzE5ZDM1My4yOGQ3NTcuNzZkMzAxLjA1NmQ4MDguOTZkMTM4LjI0ZDgwOC45NmQxMzguMjRkOTYyLjU2ZDM1My4yOGQ5NjIuNTZkMzUzLjI4ZDc1Ny43NmhSM2Q0OTYuNjRSNGQ0MjQuOTZSNWQ2Ni41NlI2ZDU5My45MlI3ZDBSOGQ1MjcuMzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0MFIxMmQ2Ni41NlIxM2Q0OTYuNjRSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kyaTFpMmkyaTJpMmkyaGc6MTI3b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyN1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjM5b1IxZDc2OFIyYWQxNDMuMzZkMTAyNGQ3MS42OGQxMDI0ZDcxLjY4ZDcxNi44ZDE0My4zNmQ2NDUuMTJkMTQzLjM2ZDEwMjRkNDgzLjMyOGQ1OTMuOTJkNDE2Ljc2OGQ1OTMuOTJkNDE2Ljc2OGQ1MTJkNDgzLjMyOGQ1MTJkNDgzLjMyOGQ1OTMuOTJkMzQ1LjA4OGQ1OTMuOTJkMjc4LjUyOGQ1OTMuOTJkMjc4LjUyOGQ1MTJkMzQ1LjA4OGQ1MTJkMzQ1LjA4OGQ1OTMuOTJoUjNkMjE1LjA0UjRkMjIxLjE4NFI1ZDE2LjM4NFI2ZDUxMlI3ZDBSOGQ0OTUuNjE2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMzlSMTJkMTYuMzg0UjEzZDIxNS4wNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjZvUjFkNzY4UjJhZDQzMC4wOGQ4MDguOTZkNDMwLjA4ZDgzOC42NTZkNDA5LjA4OGQ4NTkuNjQ4ZDM4OC4wOTZkODgwLjY0ZDM1OC40ZDg4MC42NGQzMjUuNjMyZDg4MC42NGQyOTUuOTM2ZDg4MC42NGQyNzQuNDMyZDg1OS4xMzZkMjE0LjAxNmQ3OTguNzJkMTYzLjg0ZDc5OC43MmQxNjMuODRkODgwLjY0ZDEwMi40ZDg4MC42NGQxMDIuNGQ4MDguOTZkMTAyLjRkNzc4LjI0ZDEyMy4zOTJkNzU3Ljc2ZDE0NC4zODRkNzM3LjI4ZDE3NC4wOGQ3MzcuMjhkMjA3Ljg3MmQ3MzcuMjhkMjM3LjU2OGQ3MzcuMjhkMjU5LjA3MmQ3NTguNzg0ZDMxOS40ODhkODE5LjJkMzY4LjY0ZDgxOS4yZDM2OC42NGQ3MzcuMjhkNDMwLjA4ZDczNy4yOGQ0MzAuMDhkODA4Ljk2aFIzZDUzMi40OFI0ZDQzMC4wOFI1ZDEwMi40UjZkMjg2LjcyUjdkMTQzLjM2UjhkMTg0LjMyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMjZSMTJkMTAyLjRSMTNkNTMyLjQ4UjE0YWkxaTNpM2kyaTNpMmkyaTJpMmkyaTNpM2kyaTNpMmkyaTJpMmkyaGc6MjM4b1IxZDc2OFIyYWQxNDMuMzZkMTAyNGQ3MS42OGQxMDI0ZDcxLjY4ZDcxNi44ZDE0My4zNmQ2NDUuMTJkMTQzLjM2ZDEwMjRkMjI1LjI4ZDU5My45MmQxNTMuNmQ1OTMuOTJkMTEyLjY0ZDUwMS43NmQxMDIuNGQ1MDEuNzZkNjEuNDRkNTkzLjkyZC0xMC4yNGQ1OTMuOTJkNzEuNjhkNDYwLjc5OWQxNDMuMzZkNDYwLjc5OWQyMjUuMjhkNTkzLjkyaFIzZDIxNS4wNFI0ZDIyNS4yOFI1ZC0xMC4yNFI2ZDU2My4yUjdkMFI4ZDU3My40NFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjM4UjEyZC0xMC4yNFIxM2QyMTUuMDRSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjEyNW9SMWQ3NjhSMmFkNzEuNjhkMTAzNC4yNGQxNDMuMzZkMTAzNC4yNGQxNDMuMzZkODE1LjEwNGQxODQuMzJkNzc0LjE0NGQxNDMuMzZkNzMzLjE4NGQxNDMuMzZkNTEyZDcxLjY4ZDUxMmQ3MS42OGQ0NTAuNTU5ZDE0My4zNmQ0NTAuNTU5ZDE3Mi4wMzJkNDUwLjU1OWQxOTMuNTM2ZDQ3Mi4wNjNkMjE1LjA0ZDQ5My41NjhkMjE1LjA0ZDUyMi4yNGQyMTUuMDRkNzM3LjI4ZDI3Ni40OGQ3MzcuMjhkMjc2LjQ4ZDgwOC45NmQyMTUuMDRkODA4Ljk2ZDIxNS4wNGQxMDI0ZDIxNS4wNGQxMDUyLjY3MmQxOTMuNTM2ZDEwNzQuMTc2ZDE3Mi4wMzJkMTA5NS42OGQxNDMuMzZkMTA5NS42OGQ3MS42OGQxMDk1LjY4ZDcxLjY4ZDEwMzQuMjRoUjNkMzI3LjY4UjRkMjc2LjQ4UjVkNzEuNjhSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyNVIxMmQ3MS42OFIxM2QzMjcuNjhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpM2kzaTJpMmhnOjIzN29SMWQ3NjhSMmFkMTQzLjM2ZDEwMjRkNzEuNjhkMTAyNGQ3MS42OGQ3MTYuOGQxNDMuMzZkNjQ1LjEyZDE0My4zNmQxMDI0ZDIyNS4yOGQ0NTAuNTU5ZDEyMi44OGQ1OTMuOTJkNTEuMmQ1OTMuOTJkMTUzLjZkNDUwLjU1OWQyMjUuMjhkNDUwLjU1OWhSM2QyMTUuMDRSNGQyMjUuMjhSNWQ1MS4yUjZkNTczLjQ0UjdkMFI4ZDUyMi4yNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjM3UjEyZDUxLjJSMTNkMjE1LjA0UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTI0b1IxZDc2OFIyYWQxNzQuMDhkMTA5NS42OGQxMDIuNGQxMDk1LjY4ZDEwMi40ZDQ1MC41NTlkMTc0LjA4ZDQ1MC41NTlkMTc0LjA4ZDEwOTUuNjhoUjNkMjc2LjQ4UjRkMTc0LjA4UjVkMTAyLjRSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ0NzEuMDRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyNFIxMmQxMDIuNFIxM2QyNzYuNDhSMTRhaTFpMmkyaTJpMmhnOjIzNm9SMWQ3NjhSMmFkMzkwLjE0NGQxMDI0ZDMxOC40NjRkMTAyNGQzMTguNDY0ZDcxNi44ZDM5MC4xNDRkNjQ1LjEyZDM5MC4xNDRkMTAyNGQ0MTEuNjQ4ZDU5My45MmQzMzkuOTY4ZDU5My45MmQyMzcuNTY4ZDQ1MC41NTlkMzA5LjI0OGQ0NTAuNTU5ZDQxMS42NDhkNTkzLjkyaFIzZDIxNS4wNFI0ZDE0OS41MDRSNWQtMjQuNTc2UjZkNTczLjQ0UjdkMFI4ZDU5OC4wMTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzNlIxMmQtMjQuNTc2UjEzZDIxNS4wNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyM29SMWQ3NjhSMmFkMjU2ZDEwOTUuNjhkMTg0LjMyZDEwOTUuNjhkMTU1LjY0OGQxMDk1LjY4ZDEzNC4xNDRkMTA3NC4xNzZkMTEyLjY0ZDEwNTIuNjcyZDExMi42NGQxMDI0ZDExMi42NGQ4MDguOTZkNTEuMmQ4MDguOTZkNTEuMmQ3MzcuMjhkMTEyLjY0ZDczNy4yOGQxMTIuNjRkNTIyLjI0ZDExMi42NGQ0OTMuNTY4ZDEzNC4xNDRkNDcyLjA2M2QxNTUuNjQ4ZDQ1MC41NTlkMTg0LjMyZDQ1MC41NTlkMjU2ZDQ1MC41NTlkMjU2ZDUxMmQxODQuMzJkNTEyZDE4NC4zMmQ3MzMuMTg0ZDE0My4zNmQ3NzQuMTQ0ZDE4NC4zMmQ4MTUuMTA0ZDE4NC4zMmQxMDM0LjI0ZDI1NmQxMDM0LjI0ZDI1NmQxMDk1LjY4aFIzZDMyNy42OFI0ZDI1NlI1ZDUxLjJSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ1MjIuMjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyM1IxMmQ1MS4yUjEzZDMyNy42OFIxNGFpMWkyaTNpM2kyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjM1b1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDgwOC45NmQzNTguNGQ4ODAuNjRkMTUzLjZkODgwLjY0ZDIxNS4wNGQ4MTkuMmQzNTguNGQ4MTkuMmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDQzMC4wOGQ5NjIuNTZkNDMwLjA4ZDEwMjRkMzUzLjI4ZDU5My45MmQyODYuNzJkNTkzLjkyZDI4Ni43MmQ1MTJkMzUzLjI4ZDUxMmQzNTMuMjhkNTkzLjkyZDIxNS4wNGQ1OTMuOTJkMTQ4LjQ4ZDU5My45MmQxNDguNDhkNTEyZDIxNS4wNGQ1MTJkMjE1LjA0ZDU5My45MmhSM2Q0NzEuMDRSNGQ0MzAuMDhSNWQ3MS42OFI2ZDUxMlI3ZDBSOGQ0NDAuMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzNVIxMmQ3MS42OFIxM2Q0NzEuMDRSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTIyb1IxZDc2OFIyYWQzNDguMTZkMTAyNGQ0MC45NmQxMDI0ZDQwLjk2ZDk1Mi4zMTlkMjY2LjI0ZDczNy4yOGQyNjYuMjRkNzI3LjA0ZDQwLjk2ZDcyNy4wNGQ0MC45NmQ2NjUuNTk5ZDM0OC4xNmQ2NjUuNTk5ZDM0OC4xNmQ3MzcuMjhkMTIyLjg4ZDk1Mi4zMTlkMTIyLjg4ZDk2Mi41NmQzNDguMTZkOTYyLjU2ZDM0OC4xNmQxMDI0aFIzZDM4OS4xMlI0ZDM0OC4xNlI1ZDQwLjk2UjZkMzU4LjRSN2QwUjhkMzE3LjQ0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMjJSMTJkNDAuOTZSMTNkMzg5LjEyUjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjM0b1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDgwOC45NmQzNTguNGQ4ODAuNjRkMTUzLjZkODgwLjY0ZDIxNS4wNGQ4MTkuMmQzNTguNGQ4MTkuMmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDQzMC4wOGQ5NjIuNTZkNDMwLjA4ZDEwMjRkMzY4LjY0ZDU5My45MmQyOTYuOTZkNTkzLjkyZDI1NmQ1MDEuNzZkMjQ1Ljc2ZDUwMS43NmQyMDQuOGQ1OTMuOTJkMTMzLjEyZDU5My45MmQyMTUuMDRkNDYwLjc5OWQyODYuNzJkNDYwLjc5OWQzNjguNjRkNTkzLjkyaFIzZDQ3MS4wNFI0ZDQzMC4wOFI1ZDcxLjY4UjZkNTYzLjJSN2QwUjhkNDkxLjUyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMzRSMTJkNzEuNjhSMTNkNDcxLjA0UjE0YWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJoZzoxMjFvUjFkNzY4UjJhZDQzMC4wOGQxMTY3LjM2ZDQzMC4wOGQxMTk3LjA1NmQ0MDkuMDg4ZDEyMTguMDQ4ZDM4OC4wOTZkMTIzOS4wNGQzNTguNGQxMjM5LjA0ZDYxLjQ0ZDEyMzkuMDRkMTIyLjg4ZDExNzcuNmQzNTguNGQxMTc3LjZkMzU4LjRkOTcyLjhkMzA3LjJkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY2NS41OTlkNDMwLjA4ZDY2NS41OTlkNDMwLjA4ZDExNjcuMzZoUjNkNTA2Ljg4UjRkNDMwLjA4UjVkNjEuNDRSNmQzNTguNFI3ZC0yMTUuMDRSOGQyOTYuOTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyMVIxMmQ2MS40NFIxM2Q1MDYuODhSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaGc6MjMzb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDgwOC45NmQzNTguNGQ4ODAuNjRkMTUzLjZkODgwLjY0ZDIxNS4wNGQ4MTkuMmQzNTguNGQ4MTkuMmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDQzMC4wOGQ5NjIuNTZkNDMwLjA4ZDEwMjRkMzc4Ljg4ZDQ1MC41NTlkMjc2LjQ4ZDU5My45MmQyMDQuOGQ1OTMuOTJkMzA3LjJkNDUwLjU1OWQzNzguODhkNDUwLjU1OWhSM2Q0NzEuMDRSNGQ0MzAuMDhSNWQ3MS42OFI2ZDU3My40NFI3ZDBSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzM1IxMmQ3MS42OFIxM2Q0NzEuMDRSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjBvUjFkNzY4UjJhZDM4OS4xMmQxMDI0ZDMwMS4wNTZkMTAyNGQyMDMuNzc2ZDg4Mi42ODhkMTkzLjUzNmQ4ODIuNjg4ZDk2LjI1NmQxMDI0ZDEwLjI0ZDEwMjRkMTUyLjU3NmQ4MzUuNTg0ZDIwLjQ4ZDY2NS41OTlkMTA2LjQ5NmQ2NjUuNTk5ZDE5NS41ODRkNzkyLjU3NmQyMDUuODI0ZDc5Mi41NzZkMjkwLjgxNmQ2NjUuNTk5ZDM3OC44OGQ2NjUuNTk5ZDI0NC43MzZkODM1LjU4NGQzODkuMTJkMTAyNGhSM2QzOTkuMzZSNGQzODkuMTJSNWQxMC4yNFI2ZDM1OC40UjdkMFI4ZDM0OC4xNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTIwUjEyZDEwLjI0UjEzZDM5OS4zNlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoyMzJvUjFkNzY4UjJhZDQzMC4wOGQxMDI0ZDE0My4zNmQxMDI0ZDExMy42NjRkMTAyNGQ5Mi42NzJkMTAwMy4wMDhkNzEuNjhkOTgyLjAxNmQ3MS42OGQ5NTIuMzE5ZDcxLjY4ZDczNy4yOGQ3MS42OGQ3MDcuNTg0ZDkyLjY3MmQ2ODYuNTkyZDExMy42NjRkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQzNTguNGQ2NjUuNTk5ZDM4OC4wOTZkNjY1LjU5OWQ0MDkuMDg4ZDY4Ni41OTJkNDMwLjA4ZDcwNy41ODRkNDMwLjA4ZDczNy4yOGQ0MzAuMDhkODA4Ljk2ZDM1OC40ZDg4MC42NGQxNTMuNmQ4ODAuNjRkMjE1LjA0ZDgxOS4yZDM1OC40ZDgxOS4yZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQ5NjIuNTZkNDMwLjA4ZDk2Mi41NmQ0MzAuMDhkMTAyNGQzMDcuMmQ1OTMuOTJkMjM1LjUyZDU5My45MmQxMzMuMTJkNDUwLjU1OWQyMDQuOGQ0NTAuNTU5ZDMwNy4yZDU5My45MmhSM2Q0NzEuMDRSNGQ0MzAuMDhSNWQ3MS42OFI2ZDU3My40NFI3ZDBSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzMlIxMmQ3MS42OFIxM2Q0NzEuMDRSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMTlvUjFkNzY4UjJhZDU4My42OGQ2NjUuNTk5ZDQ4NS4zNzZkMTAyNGQzNzIuNzM2ZDEwMjRkMzE3LjQ0ZDc3OS4yNjRkMzA3LjJkNzc5LjI2NGQyNDkuODU2ZDEwMjRkMTM3LjIxNmQxMDI0ZDQwLjk2ZDY2NS41OTlkMTE3Ljc2ZDY2NS41OTlkMTg0LjMyZDk2NC42MDhkMjA0LjhkOTY0LjYwOGQyNzguNTI4ZDY2NS41OTlkMzUwLjIwOGQ2NjUuNTk5ZDQxOS44NGQ5NjQuNjA4ZDQ0MC4zMmQ5NjQuNjA4ZDUwNi44OGQ2NjUuNTk5ZDU4My42OGQ2NjUuNTk5aFIzZDYyNC42NFI0ZDU4My42OFI1ZDQwLjk2UjZkMzU4LjRSN2QwUjhkMzE3LjQ0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMTlSMTJkNDAuOTZSMTNkNjI0LjY0UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoyMzFvUjFkNzY4UjJhZDM3OC44OGQ2NjUuNTk5ZDMxNi40MTZkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZkMzU4LjRkMTAyNGQyMzAuNGQxMDI0ZDIzMC40ZDEwNzYuMjI0ZDI3MS4zNmQxMDc2LjIyNGQzMDEuMDU2ZDEwNzYuMjI0ZDMyMi4wNDhkMTA5Ni43MDRkMzQzLjA0ZDExMTcuMTg0ZDM0My4wNGQxMTQ2Ljg4ZDM0My4wNGQxMTY3LjM2ZDM0My4wNGQxMTk3LjA1NmQzMjIuMDQ4ZDEyMTguMDQ4ZDMwMS4wNTZkMTIzOS4wNGQyNzEuMzZkMTIzOS4wNGQxMDcuNTJkMTIzOS4wNGQxNjguOTZkMTE3Ny42ZDI3MS4zNmQxMTc3LjZkMjcxLjM2ZDExMjYuNGQxNjguOTZkMTEyNi40ZDE2OC45NmQxMDczLjE1MmQyMjAuMTZkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzc4Ljg4ZDY2NS41OTloUjNkMzc4Ljg4UjRkMzc4Ljg4UjVkNzEuNjhSNmQzNTguNFI3ZC0yMTUuMDRSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzMVIxMmQ3MS42OFIxM2QzNzguODhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJoZzoxMThvUjFkNzY4UjJhZDQwNC40OGQ2NjUuNTk5ZDI2NS4yMTZkMTAyNGQxNjAuNzY4ZDEwMjRkMjUuNmQ2NjUuNTk5ZDEwNy41MmQ2NjUuNTk5ZDIwNC44ZDk2NC42MDhkMjI1LjI4ZDk2NC42MDhkMzIyLjU2ZDY2NS41OTlkNDA0LjQ4ZDY2NS41OTloUjNkNDMwLjA4UjRkNDA0LjQ4UjVkMjUuNlI2ZDM1OC40UjdkMFI4ZDMzMi44UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMThSMTJkMjUuNlIxM2Q0MzAuMDhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaGc6MjMwb1IxZDc2OFIyYWQ2NTAuMjRkODA4Ljk2ZDU3OC41NmQ4ODAuNjRkMzk5LjM2ZDg4MC42NGQ0NjAuOGQ4MjAuMjIzZDU3OC41NmQ4MjAuMjIzZDU3OC41NmQ3MjcuMDRkMzg5LjEyZDcyNy4wNGQzODkuMTJkOTYyLjU2ZDY0MGQ5NjIuNTZkNjQwZDEwMjRkMzg5LjEyZDEwMjRkMzY0LjU0NGQxMDI0ZDM0NS4wODhkMTAwOC42NGQzMjUuNjMyZDk5My4yOGQzMTkuNDg4ZDk2OS43MjhkMjU2ZDEwMjRkMTI4ZDEwMjRkOTguMzA0ZDEwMjRkNzcuMzEyZDEwMDMuMDA4ZDU2LjMyZDk4Mi4wMTZkNTYuMzJkOTUyLjMxOWQ1Ni4zMmQ4ODAuNjRkNTYuMzJkODUwLjk0NGQ3Ny4zMTJkODI5Ljk1MmQ5OC4zMDRkODA4Ljk2ZDEyOGQ4MDguOTZkMzA3LjJkODA4Ljk2ZDI0NS43NmQ4NjkuMzc2ZDEyOGQ4NjkuMzc2ZDEyOGQ5NjIuNTZkMzE4LjQ2NGQ5NjIuNTZkMzE3LjQ0ZDk1OS40ODhkMzE3LjQ0ZDk1Mi4zMTlkMzE3LjQ0ZDcyNy4wNGQ1Ni4zMmQ3MjcuMDRkMTE3Ljc2ZDY2NS41OTlkMzE3LjQ0ZDY2NS41OTlkMzUzLjI4ZDcwMS40NGQzODkuMTJkNjY1LjU5OWQ1NzguNTZkNjY1LjU5OWQ2MDguMjU2ZDY2NS41OTlkNjI5LjI0OGQ2ODYuNTkyZDY1MC4yNGQ3MDcuNTg0ZDY1MC4yNGQ3MzcuMjhkNjUwLjI0ZDgwOC45NmhSM2Q2ODAuOTZSNGQ2NTAuMjRSNWQ1Ni4zMlI2ZDM1OC40UjdkMFI4ZDMwMi4wOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjMwUjEyZDU2LjMyUjEzZDY4MC45NlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkzaTJpMmkyaTJpMmkyaTJpM2kzaTJoZzoxMTdvUjFkNzY4UjJhZDQzMC4wOGQxMDI0ZDM1OC40ZDEwMjRkMzU4LjRkOTcyLjhkMzA3LjJkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY2NS41OTlkNDMwLjA4ZDY2NS41OTlkNDMwLjA4ZDEwMjRoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQzNTguNFI3ZDBSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTExN1IxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmhnOjIyOW9SMWQ3NjhSMmFkNDE0LjcyZDEwMjRkMzQzLjA0ZDEwMjRkMzQzLjA0ZDk3MS43NzZkMjgxLjZkMTAyNGQxMjhkMTAyNGQ5OC4zMDRkMTAyNGQ3Ny4zMTJkMTAwMy4wMDhkNTYuMzJkOTgyLjAxNmQ1Ni4zMmQ5NTIuMzE5ZDU2LjMyZDg4MC42NGQ1Ni4zMmQ4NTAuOTQ0ZDc3LjMxMmQ4MjkuOTUyZDk4LjMwNGQ4MDguOTZkMTI4ZDgwOC45NmQzMzIuOGQ4MDguOTZkMjcxLjM2ZDg2OS4zNzZkMTI4ZDg2OS4zNzZkMTI4ZDk2Mi41NmQzNDMuMDRkOTYyLjU2ZDM0My4wNGQ3MjcuMDRkNTYuMzJkNzI3LjA0ZDExNy43NmQ2NjUuNTk5ZDM0My4wNGQ2NjUuNTk5ZDM3Mi43MzZkNjY1LjU5OWQzOTMuNzI4ZDY4Ni41OTJkNDE0LjcyZDcwNy41ODRkNDE0LjcyZDczNy4yOGQ0MTQuNzJkMTAyNGQzNDMuMDRkMjQ3LjgwOGQzNDMuMDRkMjc0LjQzMmQzMjMuNTg0ZDI5My44ODhkMjkyLjg2NGQzMjUuNjMxZDI4MS42ZDMzNi44OTVkMjU5LjA3MmQzMzYuODk1ZDIzNC40OTZkMzM2Ljg5NWQyMTEuOTY4ZDMzNi44OTVkMjAwLjcwNGQzMjUuNjMxZDE2OS45ODRkMjkzLjg4OGQxNTAuNTI4ZDI3NC40MzJkMTUwLjUyOGQyNDcuODA4ZDE1MC41MjhkMjIxLjE4M2QxNjkuOTg0ZDIwMS43MjdkMjAwLjcwNGQxNjkuOTg0ZDIyMC4xNmQxNDguNDhkMjQ2Ljc4NGQxNDguNDhkMjcyLjM4NGQxNDguNDhkMjkyLjg2NGQxNjkuOTg0ZDMyMy41ODRkMjAxLjcyN2QzNDMuMDRkMjIxLjE4M2QzNDMuMDRkMjQ3LjgwOGQyOTcuOTg0ZDI0Ny44MDhkMjQ2Ljc4NGQxOTYuNjA3ZDE5NS41ODRkMjQ3LjgwOGQyNDYuNzg0ZDI5OS4wMDhkMjk3Ljk4NGQyNDcuODA4aFIzZDQ4Ni40UjRkNDE0LjcyUjVkNTYuMzJSNmQ2MTMuMzc2UjdkMFI4ZDU1Ny4wNTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyOVIxMmQ1Ni4zMlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTNpMmkzaTJpM2kyaTNpM2kyaTNpM2kyaTNpMWkyaTJpMmkyaGc6MTE2b1IxZDc2OFIyYWQzMDcuMmQxMDI0ZDE2My44NGQxMDI0ZDEzNC4xNDRkMTAyNGQxMTMuMTUyZDEwMDMuMDA4ZDkyLjE2ZDk4Mi4wMTZkOTIuMTZkOTUyLjMxOWQ5Mi4xNmQ3MjcuMDRkLTEwLjI0ZDcyNy4wNGQ1MS4yZDY2NS41OTlkOTIuMTZkNjY1LjU5OWQ5Mi4xNmQ1OTMuOTJkMTYzLjg0ZDUyMi4yNGQxNjMuODRkNjY1LjU5OWQzMDcuMmQ2NjUuNTk5ZDMwNy4yZDcyNy4wNGQxNjMuODRkNzI3LjA0ZDE2My44NGQ5NjIuNTZkMzA3LjJkOTYyLjU2ZDMwNy4yZDEwMjRoUjNkMzM3LjkyUjRkMzA3LjJSNWQtMTAuMjRSNmQ1MDEuNzZSN2QwUjhkNTEyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMTZSMTJkLTEwLjI0UjEzZDMzNy45MlIxNGFpMWkyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjI4b1IxZDc2OFIyYWQ0MTQuNzJkMTAyNGQzNDMuMDRkMTAyNGQzNDMuMDRkOTcxLjc3NmQyODEuNmQxMDI0ZDEyOGQxMDI0ZDk4LjMwNGQxMDI0ZDc3LjMxMmQxMDAzLjAwOGQ1Ni4zMmQ5ODIuMDE2ZDU2LjMyZDk1Mi4zMTlkNTYuMzJkODgwLjY0ZDU2LjMyZDg1MC45NDRkNzcuMzEyZDgyOS45NTJkOTguMzA0ZDgwOC45NmQxMjhkODA4Ljk2ZDMzMi44ZDgwOC45NmQyNzEuMzZkODY5LjM3NmQxMjhkODY5LjM3NmQxMjhkOTYyLjU2ZDM0My4wNGQ5NjIuNTZkMzQzLjA0ZDcyNy4wNGQ1Ni4zMmQ3MjcuMDRkMTE3Ljc2ZDY2NS41OTlkMzQzLjA0ZDY2NS41OTlkMzcyLjczNmQ2NjUuNTk5ZDM5My43MjhkNjg2LjU5MmQ0MTQuNzJkNzA3LjU4NGQ0MTQuNzJkNzM3LjI4ZDQxNC43MmQxMDI0ZDM1My4yOGQ1OTMuOTJkMjg2LjcyZDU5My45MmQyODYuNzJkNTEyZDM1My4yOGQ1MTJkMzUzLjI4ZDU5My45MmQyMTUuMDRkNTkzLjkyZDE0OC40OGQ1OTMuOTJkMTQ4LjQ4ZDUxMmQyMTUuMDRkNTEyZDIxNS4wNGQ1OTMuOTJoUjNkNDg2LjRSNGQ0MTQuNzJSNWQ1Ni4zMlI2ZDUxMlI3ZDBSOGQ0NTUuNjhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyOFIxMmQ1Ni4zMlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE1b1IxZDc2OFIyYWQzNjMuNTJkNjY1LjU5OWQzMDEuMDU2ZDcyNy4wNGQxMjhkNzI3LjA0ZDEyOGQ4MDguOTZkMjcxLjM2ZDgwOC45NmQzMDEuMDU2ZDgwOC45NmQzMjIuMDQ4ZDgyOS45NTJkMzQzLjA0ZDg1MC45NDRkMzQzLjA0ZDg4MC42NGQzNDMuMDRkOTUyLjMxOWQzNDMuMDRkOTgyLjAxNmQzMjIuMDQ4ZDEwMDMuMDA4ZDMwMS4wNTZkMTAyNGQyNzEuMzZkMTAyNGQ1Ni4zMmQxMDI0ZDU2LjMyZDk2Mi41NmQyNzEuMzZkOTYyLjU2ZDI3MS4zNmQ4NzAuNGQxMjhkODcwLjRkOTguMzA0ZDg3MC40ZDc3LjMxMmQ4NDkuNDA4ZDU2LjMyZDgyOC40MTVkNTYuMzJkNzk4LjcyZDU2LjMyZDczNy4yOGQ1Ni4zMmQ3MDcuNTg0ZDc3LjMxMmQ2ODYuNTkyZDk4LjMwNGQ2NjUuNTk5ZDEyOGQ2NjUuNTk5ZDM2My41MmQ2NjUuNTk5aFIzZDM5OS4zNlI0ZDM2My41MlI1ZDU2LjMyUjZkMzU4LjRSN2QwUjhkMzAyLjA4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMTVSMTJkNTYuMzJSMTNkMzk5LjM2UjE0YWkxaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmhnOjIyN29SMWQ3NjhSMmFkNDE0LjcyZDEwMjRkMzQzLjA0ZDEwMjRkMzQzLjA0ZDk3MS43NzZkMjgxLjZkMTAyNGQxMjhkMTAyNGQ5OC4zMDRkMTAyNGQ3Ny4zMTJkMTAwMy4wMDhkNTYuMzJkOTgyLjAxNmQ1Ni4zMmQ5NTIuMzE5ZDU2LjMyZDg4MC42NGQ1Ni4zMmQ4NTAuOTQ0ZDc3LjMxMmQ4MjkuOTUyZDk4LjMwNGQ4MDguOTZkMTI4ZDgwOC45NmQzMzIuOGQ4MDguOTZkMjcxLjM2ZDg2OS4zNzZkMTI4ZDg2OS4zNzZkMTI4ZDk2Mi41NmQzNDMuMDRkOTYyLjU2ZDM0My4wNGQ3MjcuMDRkNTYuMzJkNzI3LjA0ZDExNy43NmQ2NjUuNTk5ZDM0My4wNGQ2NjUuNTk5ZDM3Mi43MzZkNjY1LjU5OWQzOTMuNzI4ZDY4Ni41OTJkNDE0LjcyZDcwNy41ODRkNDE0LjcyZDczNy4yOGQ0MTQuNzJkMTAyNGQzNTguNGQ0NjMuODcxZDM1OC40ZDQ4MS4yOGQzNTIuMjU2ZDU0My43NDNkMzUwLjIwOGQ1NjYuMjcxZDMzNC44NDhkNTgxLjYzMmQzMTkuNDg4ZDU5Ni45OTJkMjk5LjAwOGQ1OTYuOTkyZDI2NC4xOTJkNTk2Ljk5MmQyNDEuNjY0ZDU3Mi40MTVkMTgzLjI5NmQ1MDcuOTA0ZDE3NC4wOGQ1OTIuODk2ZDEyMi44OGQ1OTIuODk2ZDEyMi44OGQ1ODQuNzA0ZDEyNC40MTZkNTY0LjczNmQxMjUuOTUyZDU0NC43NjhkMTMwLjA0OGQ1MTJkMTMyLjA5NmQ0OTAuNDk2ZDE0OC40OGQ0NzUuNjQ4ZDE2NC44NjRkNDYwLjc5OWQxODYuMzY4ZDQ2MC43OTlkMjE4LjExMmQ0NjAuNzk5ZDIzOS42MTZkNDgzLjMyOGQzMDEuMDU2ZDU0Ny44MzlkMzA3LjJkNDYzLjg3MWQzNTguNGQ0NjMuODcxaFIzZDQ4Ni40UjRkNDE0LjcyUjVkNTYuMzJSNmQ1NjMuMlI3ZDBSOGQ1MDYuODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyN1IxMmQ1Ni4zMlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTJpMmkyaGc6MTE0b1IxZDc2OFIyYWQzNTguNGQ4MDguOTZkMjg2LjcyZDgwOC45NmQyODYuNzJkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDEwMjRkNzEuNjhkMTAyNGQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ3MTYuOGQxOTQuNTZkNjY1LjU5OWQyODYuNzJkNjY1LjU5OWQzMTYuNDE2ZDY2NS41OTlkMzM3LjQwOGQ2ODYuNTkyZDM1OC40ZDcwNy41ODRkMzU4LjRkNzM3LjI4ZDM1OC40ZDgwOC45NmhSM2QzOTkuMzZSNGQzNTguNFI1ZDcxLjY4UjZkMzU4LjRSN2QwUjhkMjg2LjcyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMTRSMTJkNzEuNjhSMTNkMzk5LjM2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJoZzoyMjZvUjFkNzY4UjJhZDQxNC43MmQxMDI0ZDM0My4wNGQxMDI0ZDM0My4wNGQ5NzEuNzc2ZDI4MS42ZDEwMjRkMTI4ZDEwMjRkOTguMzA0ZDEwMjRkNzcuMzEyZDEwMDMuMDA4ZDU2LjMyZDk4Mi4wMTZkNTYuMzJkOTUyLjMxOWQ1Ni4zMmQ4ODAuNjRkNTYuMzJkODUwLjk0NGQ3Ny4zMTJkODI5Ljk1MmQ5OC4zMDRkODA4Ljk2ZDEyOGQ4MDguOTZkMzMyLjhkODA4Ljk2ZDI3MS4zNmQ4NjkuMzc2ZDEyOGQ4NjkuMzc2ZDEyOGQ5NjIuNTZkMzQzLjA0ZDk2Mi41NmQzNDMuMDRkNzI3LjA0ZDU2LjMyZDcyNy4wNGQxMTcuNzZkNjY1LjU5OWQzNDMuMDRkNjY1LjU5OWQzNzIuNzM2ZDY2NS41OTlkMzkzLjcyOGQ2ODYuNTkyZDQxNC43MmQ3MDcuNTg0ZDQxNC43MmQ3MzcuMjhkNDE0LjcyZDEwMjRkMzY4LjY0ZDU5My45MmQyOTYuOTZkNTkzLjkyZDI1NmQ1MDEuNzZkMjQ1Ljc2ZDUwMS43NmQyMDQuOGQ1OTMuOTJkMTMzLjEyZDU5My45MmQyMTUuMDRkNDYwLjc5OWQyODYuNzJkNDYwLjc5OWQzNjguNjRkNTkzLjkyaFIzZDQ4Ni40UjRkNDE0LjcyUjVkNTYuMzJSNmQ1NjMuMlI3ZDBSOGQ1MDYuODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyNlIxMmQ1Ni4zMlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjExM29SMWQ3NjhSMmFkNDMwLjA4ZDExNzcuNmQzNTguNGQxMjQ5LjI4ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNzM3LjI4ZDcxLjY4ZDcwNy41ODRkOTIuNjcyZDY4Ni41OTJkMTEzLjY2NGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMTc3LjZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY3NS44MzlkMzA3LjJkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQzNTguNFI3ZC0yMjUuMjhSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTExM1IxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTFpMmkyaTJpMmkyaGc6MjI1b1IxZDc2OFIyYWQ0MTQuNzJkMTAyNGQzNDMuMDRkMTAyNGQzNDMuMDRkOTcxLjc3NmQyODEuNmQxMDI0ZDEyOGQxMDI0ZDk4LjMwNGQxMDI0ZDc3LjMxMmQxMDAzLjAwOGQ1Ni4zMmQ5ODIuMDE2ZDU2LjMyZDk1Mi4zMTlkNTYuMzJkODgwLjY0ZDU2LjMyZDg1MC45NDRkNzcuMzEyZDgyOS45NTJkOTguMzA0ZDgwOC45NmQxMjhkODA4Ljk2ZDMzMi44ZDgwOC45NmQyNzEuMzZkODY5LjM3NmQxMjhkODY5LjM3NmQxMjhkOTYyLjU2ZDM0My4wNGQ5NjIuNTZkMzQzLjA0ZDcyNy4wNGQ1Ni4zMmQ3MjcuMDRkMTE3Ljc2ZDY2NS41OTlkMzQzLjA0ZDY2NS41OTlkMzcyLjczNmQ2NjUuNTk5ZDM5My43MjhkNjg2LjU5MmQ0MTQuNzJkNzA3LjU4NGQ0MTQuNzJkNzM3LjI4ZDQxNC43MmQxMDI0ZDM2OC42NGQ0NTAuNTU5ZDI2Ni4yNGQ1OTMuOTJkMTk0LjU2ZDU5My45MmQyOTYuOTZkNDUwLjU1OWQzNjguNjRkNDUwLjU1OWhSM2Q0ODYuNFI0ZDQxNC43MlI1ZDU2LjMyUjZkNTczLjQ0UjdkMFI4ZDUxNy4xMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjI1UjEyZDU2LjMyUjEzZDQ4Ni40UjE0YWkxaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmhnOjExMm9SMWQ3NjhSMmFkNDMwLjA4ZDk1Mi4zMTlkNDMwLjA4ZDk4Mi4wMTZkNDA5LjA4OGQxMDAzLjAwOGQzODguMDk2ZDEwMjRkMzU4LjRkMTAyNGQxNDMuMzZkMTAyNGQxNDMuMzZkMTIzOS4wNGQ3MS42OGQxMjM5LjA0ZDcxLjY4ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMTQzLjM2ZDcxNi44ZDE5NC41NmQ2NjUuNTk5ZDM1OC40ZDY2NS41OTlkMzg4LjA5NmQ2NjUuNTk5ZDQwOS4wODhkNjg2LjU5MmQ0MzAuMDhkNzA3LjU4NGQ0MzAuMDhkNzM3LjI4ZDQzMC4wOGQ5NTIuMzE5ZDM1OC40ZDk2Mi41NmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkMTAxMy43NmQxOTQuNTZkOTYyLjU2ZDM1OC40ZDk2Mi41NmhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDM1OC40UjdkLTIxNS4wNFI4ZDI4Ni43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTEyUjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmkyaGc6MjI0b1IxZDc2OFIyYWQ0MTQuNzJkMTAyNGQzNDMuMDRkMTAyNGQzNDMuMDRkOTcxLjc3NmQyODEuNmQxMDI0ZDEyOGQxMDI0ZDk4LjMwNGQxMDI0ZDc3LjMxMmQxMDAzLjAwOGQ1Ni4zMmQ5ODIuMDE2ZDU2LjMyZDk1Mi4zMTlkNTYuMzJkODgwLjY0ZDU2LjMyZDg1MC45NDRkNzcuMzEyZDgyOS45NTJkOTguMzA0ZDgwOC45NmQxMjhkODA4Ljk2ZDMzMi44ZDgwOC45NmQyNzEuMzZkODY5LjM3NmQxMjhkODY5LjM3NmQxMjhkOTYyLjU2ZDM0My4wNGQ5NjIuNTZkMzQzLjA0ZDcyNy4wNGQ1Ni4zMmQ3MjcuMDRkMTE3Ljc2ZDY2NS41OTlkMzQzLjA0ZDY2NS41OTlkMzcyLjczNmQ2NjUuNTk5ZDM5My43MjhkNjg2LjU5MmQ0MTQuNzJkNzA3LjU4NGQ0MTQuNzJkNzM3LjI4ZDQxNC43MmQxMDI0ZDMwNy4yZDU5My45MmQyMzUuNTJkNTkzLjkyZDEzMy4xMmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMzA3LjJkNTkzLjkyaFIzZDQ4Ni40UjRkNDE0LjcyUjVkNTYuMzJSNmQ1NzMuNDRSN2QwUjhkNTE3LjEyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMjRSMTJkNTYuMzJSMTNkNDg2LjRSMTRhaTFpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaGdoeTg6Zm9udE5hbWV5NzpJY2VsYW5kZw"},{ name : "__ASSET__assets_fonts_iceland_regular_ttf1", data : "s134298:b3k0Omhhc2hxOjExMW95Njphc2NlbnRkNzY4eTQ6ZGF0YWFkNDMwLjA4ZDk1Mi4zMTlkNDMwLjA4ZDk4Mi4wMTZkNDA5LjA4OGQxMDAzLjAwOGQzODguMDk2ZDEwMjRkMzU4LjRkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDk1Mi4zMTlkMzU4LjRkOTYyLjU2ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2aHk2Ol93aWR0aGQ1MDEuNzZ5NDp4TWF4ZDQzMC4wOHk0OnhNaW5kNzEuNjh5NDp5TWF4ZDM1OC40eTQ6eU1pbmQweTc6X2hlaWdodGQyODYuNzJ5NzpsZWFkaW5nZC0zMC43Mnk3OmRlc2NlbnRkMjI1LjI4eTg6Y2hhckNvZGVpMTExeTE1OmxlZnRzaWRlQmVhcmluZ2Q3MS42OHkxMjphZHZhbmNlV2lkdGhkNTAxLjc2eTg6Y29tbWFuZHNhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaGc6MjIzb1IxZDc2OFIyYWQ0NDAuMzJkOTUyLjMxOWQ0NDAuMzJkOTgyLjAxNmQ0MTkuMzI4ZDEwMDMuMDA4ZDM5OC4zMzZkMTAyNGQzNjguNjRkMTAyNGQxNzQuMDhkMTAyNGQyMzUuNTJkOTYyLjU2ZDM2OC42NGQ5NjIuNTZkMzY4LjY0ZDcyNy4wNGQyMzUuNTJkNzI3LjA0ZDI5Ni45NmQ2NjUuNTk5ZDI5Ni45NmQ1MTJkMTUzLjZkNTEyZDE1My42ZDEwMjRkODEuOTJkMTAyNGQ4MS45MmQ1MjIuMjRkODEuOTJkNDkyLjU0NGQxMDIuOTEyZDQ3MS41NTJkMTIzLjkwNGQ0NTAuNTU5ZDE1My42ZDQ1MC41NTlkMjk2Ljk2ZDQ1MC41NTlkMzI2LjY1NmQ0NTAuNTU5ZDM0Ny42NDhkNDcxLjU1MmQzNjguNjRkNDkyLjU0NGQzNjguNjRkNTIyLjI0ZDM2OC42NGQ2MTQuNGQzMTcuNDRkNjY1LjU5OWQzNjguNjRkNjY1LjU5OWQzOTguMzM2ZDY2NS41OTlkNDE5LjMyOGQ2ODYuNTkyZDQ0MC4zMmQ3MDcuNTg0ZDQ0MC4zMmQ3MzcuMjhkNDQwLjMyZDk1Mi4zMTloUjNkNTEyUjRkNDQwLjMyUjVkODEuOTJSNmQ1NzMuNDRSN2QwUjhkNDkxLjUyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMjNSMTJkODEuOTJSMTNkNTEyUjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTNpM2kyaGc6MTEwb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkNzE2LjhkMTk0LjU2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDEwMjRoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQzNTguNFI3ZDBSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTExMFIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmhnOjIyMm9SMWQ3NjhSMmFkNTIyLjI0ZDg4MC42NGQ1MjIuMjRkOTA5LjMxMmQ1MDAuNzM2ZDkzMC44MTZkNDc5LjIzMmQ5NTIuMzE5ZDQ1MC41NmQ5NTIuMzE5ZDE3NC4wOGQ5NTIuMzE5ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDU5My45MmQ0NTAuNTZkNTkzLjkyZDQ3OS4yMzJkNTkzLjkyZDUwMC43MzZkNjE1LjQyNGQ1MjIuMjRkNjM2LjkyOGQ1MjIuMjRkNjY1LjU5OWQ1MjIuMjRkODgwLjY0ZDQ0MC4zMmQ4ODAuNjRkNDQwLjMyZDY2NS41OTlkMTc0LjA4ZDY2NS41OTlkMTc0LjA4ZDk0Mi4wOGQyMzUuNTJkODgwLjY0ZDQ0MC4zMmQ4ODAuNjRoUjNkNTkzLjkyUjRkNTIyLjI0UjVkOTIuMTZSNmQ1MDEuNzZSN2QwUjhkNDA5LjZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyMlIxMmQ5Mi4xNlIxM2Q1OTMuOTJSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaTJoZzoxMDlvUjFkNzY4UjJhZDY3NS44NGQxMDI0ZDYwNC4xNmQxMDI0ZDYwNC4xNmQ3MjcuMDRkNDA5LjZkNzI3LjA0ZDQwOS42ZDEwMjRkMzM3LjkyZDEwMjRkMzM3LjkyZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkNzE2LjhkMTk0LjU2ZDY2NS41OTlkMzM3LjkyZDY2NS41OTlkNDAwLjM4NGQ2NjUuNTk5ZDQwOC41NzZkNzE3LjgyNGQ0NjAuOGQ2NjUuNTk5ZDYwNC4xNmQ2NjUuNTk5ZDYzMy44NTZkNjY1LjU5OWQ2NTQuODQ4ZDY4Ni41OTJkNjc1Ljg0ZDcwNy41ODRkNjc1Ljg0ZDczNy4yOGQ2NzUuODRkMTAyNGhSM2Q3NDcuNTJSNGQ2NzUuODRSNWQ3MS42OFI2ZDM1OC40UjdkMFI4ZDI4Ni43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTA5UjEyZDcxLjY4UjEzZDc0Ny41MlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kyaTJpM2kzaTJoZzoyMjFvUjFkNzY4UjJhZDUwMS43NmQ4MDguOTZkNTAxLjc2ZDgzOC42NTZkNDgwLjc2OGQ4NTkuNjQ4ZDQ1OS43NzZkODgwLjY0ZDQzMC4wOGQ4ODAuNjRkMzI3LjY4ZDg4MC42NGQzMjcuNjhkMTAyNGQyNDUuNzZkMTAyNGQyNDUuNzZkODgwLjY0ZDE0My4zNmQ4ODAuNjRkMTEzLjY2NGQ4ODAuNjRkOTIuNjcyZDg1OS42NDhkNzEuNjhkODM4LjY1NmQ3MS42OGQ4MDguOTZkNzEuNjhkNTIyLjI0ZDE1My42ZDUyMi4yNGQxNTMuNmQ4MDguOTZkNDE5Ljg0ZDgwOC45NmQ0MTkuODRkNTIyLjI0ZDUwMS43NmQ1MjIuMjRkNTAxLjc2ZDgwOC45NmQ0MDkuNmQzMDcuMTk5ZDMwNy4yZDQ1MC41NTlkMjM1LjUyZDQ1MC41NTlkMzM3LjkyZDMwNy4xOTlkNDA5LjZkMzA3LjE5OWhSM2Q1NDIuNzJSNGQ1MDEuNzZSNWQ3MS42OFI2ZDcxNi44UjdkMFI4ZDY0NS4xMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjIxUjEyZDcxLjY4UjEzZDU0Mi43MlIxNGFpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwOG9SMWQ3NjhSMmFkMTUzLjZkMTAyNGQ4MS45MmQxMDI0ZDgxLjkyZDUwMS43NmQxNTMuNmQ0MzAuMDhkMTUzLjZkMTAyNGhSM2QyMzUuNTJSNGQxNTMuNlI1ZDgxLjkyUjZkNTkzLjkyUjdkMFI4ZDUxMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTA4UjEyZDgxLjkyUjEzZDIzNS41MlIxNGFpMWkyaTJpMmkyaGc6MjIwb1IxZDc2OFIyYWQ1MjIuMjRkMTAyNGQ0NDAuMzJkMTAyNGQ0NDAuMzJkOTYyLjU2ZDM3OC44OGQxMDI0ZDE2My44NGQxMDI0ZDEzNC4xNDRkMTAyNGQxMTMuMTUyZDEwMDMuMDA4ZDkyLjE2ZDk4Mi4wMTZkOTIuMTZkOTUyLjMxOWQ5Mi4xNmQ1MjIuMjRkMTc0LjA4ZDUyMi4yNGQxNzQuMDhkOTUyLjMxOWQ0NDAuMzJkOTUyLjMxOWQ0NDAuMzJkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDA5LjZkNDUwLjU1OWQzNDMuMDRkNDUwLjU1OWQzNDMuMDRkMzY4LjY0ZDQwOS42ZDM2OC42NGQ0MDkuNmQ0NTAuNTU5ZDI3MS4zNmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMjA0LjhkMzY4LjY0ZDI3MS4zNmQzNjguNjRkMjcxLjM2ZDQ1MC41NTloUjNkNTgzLjY4UjRkNTIyLjI0UjVkOTIuMTZSNmQ2NTUuMzZSN2QwUjhkNTYzLjJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyMFIxMmQ5Mi4xNlIxM2Q1ODMuNjhSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTA3b1IxZDc2OFIyYWQ0NjAuOGQ2NjUuNTk5ZDI5Ny45ODRkODA3LjkzNmQyOTcuOTg0ZDgxOC4xNzVkMzY4LjY0ZDgxOC4xNzVkMzk4LjMzNmQ4MTguMTc1ZDQxOS4zMjhkODM5LjE2OGQ0NDAuMzJkODYwLjE2ZDQ0MC4zMmQ4ODkuODU2ZDQ0MC4zMmQxMDI0ZDM2OC42NGQxMDI0ZDM2OC42NGQ4NzAuNGQxNTMuNmQ4NzAuNGQxNTMuNmQxMDI0ZDgxLjkyZDEwMjRkODEuOTJkNTAxLjc2ZDE1My42ZDQzMC4wOGQxNTMuNmQ4NjEuMTg0ZDM3My43NmQ2NjUuNTk5ZDQ2MC44ZDY2NS41OTloUjNkNTAxLjc2UjRkNDYwLjhSNWQ4MS45MlI2ZDU5My45MlI3ZDBSOGQ1MTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEwN1IxMmQ4MS45MlIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIxOW9SMWQ3NjhSMmFkNTIyLjI0ZDEwMjRkNDQwLjMyZDEwMjRkNDQwLjMyZDk2Mi41NmQzNzguODhkMTAyNGQxNjMuODRkMTAyNGQxMzQuMTQ0ZDEwMjRkMTEzLjE1MmQxMDAzLjAwOGQ5Mi4xNmQ5ODIuMDE2ZDkyLjE2ZDk1Mi4zMTlkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDk1Mi4zMTlkNDQwLjMyZDk1Mi4zMTlkNDQwLjMyZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQxMDI0ZDQyNC45NmQ0NTAuNTU5ZDM1My4yOGQ0NTAuNTU5ZDMxMi4zMmQzNTguNGQzMDIuMDhkMzU4LjRkMjYxLjEyZDQ1MC41NTlkMTg5LjQ0ZDQ1MC41NTlkMjcxLjM2ZDMxNy40MzlkMzQzLjA0ZDMxNy40MzlkNDI0Ljk2ZDQ1MC41NTloUjNkNTgzLjY4UjRkNTIyLjI0UjVkOTIuMTZSNmQ3MDYuNTZSN2QwUjhkNjE0LjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIxOVIxMmQ5Mi4xNlIxM2Q1ODMuNjhSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjEwNm9SMWQ3NjhSMmFkMTQ4LjQ4ZDYwNC4xNmQ3Ni44ZDYwNC4xNmQ3Ni44ZDUyMi4yNGQxNDguNDhkNTIyLjI0ZDE0OC40OGQ2MDQuMTZkMTQ4LjQ4ZDExNjcuMzZkMTQ4LjQ4ZDExOTcuMDU2ZDEyNy40ODhkMTIxOC4wNDhkMTA2LjQ5NmQxMjM5LjA0ZDc2LjhkMTIzOS4wNGQtMzUuODRkMTIzOS4wNGQyNi42MjRkMTE3Ny42ZDc2LjhkMTE3Ny42ZDc2LjhkNzE2LjhkMTQ4LjQ4ZDY0NS4xMmQxNDguNDhkMTE2Ny4zNmhSM2QyMjUuMjhSNGQxNDguNDhSNWQtMzUuODRSNmQ1MDEuNzZSN2QtMjE1LjA0UjhkNTM3LjZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEwNlIxMmQtMzUuODRSMTNkMjI1LjI4UjE0YWkxaTJpMmkyaTJpMWkzaTNpMmkyaTJpMmkyaTJoZzoyMThvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ5NjIuNTZkMzc4Ljg4ZDEwMjRkMTYzLjg0ZDEwMjRkMTM0LjE0NGQxMDI0ZDExMy4xNTJkMTAwMy4wMDhkOTIuMTZkOTgyLjAxNmQ5Mi4xNmQ5NTIuMzE5ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkMTAyNGQ0MzAuMDhkMzA3LjE5OWQzMjcuNjhkNDUwLjU1OWQyNTZkNDUwLjU1OWQzNTguNGQzMDcuMTk5ZDQzMC4wOGQzMDcuMTk5aFIzZDU4My42OFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzE2LjhSN2QwUjhkNjI0LjY0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMThSMTJkOTIuMTZSMTNkNTgzLjY4UjE0YWkxaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTA1b1IxZDc2OFIyYWQxNDMuMzZkNjA0LjE2ZDcxLjY4ZDYwNC4xNmQ3MS42OGQ1MjIuMjRkMTQzLjM2ZDUyMi4yNGQxNDMuMzZkNjA0LjE2ZDE0My4zNmQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkNzE2LjhkMTQzLjM2ZDY0NS4xMmQxNDMuMzZkMTAyNGhSM2QyMTUuMDRSNGQxNDMuMzZSNWQ3MS42OFI2ZDUwMS43NlI3ZDBSOGQ0MzAuMDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEwNVIxMmQ3MS42OFIxM2QyMTUuMDRSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMTdvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ5NjIuNTZkMzc4Ljg4ZDEwMjRkMTYzLjg0ZDEwMjRkMTM0LjE0NGQxMDI0ZDExMy4xNTJkMTAwMy4wMDhkOTIuMTZkOTgyLjAxNmQ5Mi4xNmQ5NTIuMzE5ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkMTAyNGQzNTMuMjhkNDUwLjU1OWQyODEuNmQ0NTAuNTU5ZDE3OS4yZDMwNy4xOTlkMjUwLjg4ZDMwNy4xOTlkMzUzLjI4ZDQ1MC41NTloUjNkNTgzLjY4UjRkNTIyLjI0UjVkOTIuMTZSNmQ3MTYuOFI3ZDBSOGQ2MjQuNjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIxN1IxMmQ5Mi4xNlIxM2Q1ODMuNjhSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDRvUjFkNzY4UjJhZDQ0MC4zMmQxMDI0ZDM2OC42NGQxMDI0ZDM2OC42NGQ3MjcuMDRkMTUzLjZkNzI3LjA0ZDE1My42ZDEwMjRkODEuOTJkMTAyNGQ4MS45MmQ1MDEuNzZkMTUzLjZkNDMwLjA4ZDE1My42ZDcxNi44ZDIwNC44ZDY2NS41OTlkMzY4LjY0ZDY2NS41OTlkMzk4LjMzNmQ2NjUuNTk5ZDQxOS4zMjhkNjg2LjU5MmQ0NDAuMzJkNzA3LjU4NGQ0NDAuMzJkNzM3LjI4ZDQ0MC4zMmQxMDI0aFIzZDUxMlI0ZDQ0MC4zMlI1ZDgxLjkyUjZkNTkzLjkyUjdkMFI4ZDUxMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTA0UjEyZDgxLjkyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaGc6MjE2b1IxZDc2OFIyYWQ1NTIuOTZkNTMyLjQ4ZDUwOS45NTJkNTgxLjYzMmQ1MjIuMjRkNTkzLjkyZDUyMi4yNGQ5NTIuMzE5ZDUyMi4yNGQ5ODIuMDE2ZDUwMC43MzZkMTAwMy4wMDhkNDc5LjIzMmQxMDI0ZDQ1MC41NmQxMDI0ZDE2My44NGQxMDI0ZDE1MC41MjhkMTAxMC42ODhkMTA3LjUyZDEwNjcuMDA4ZDYxLjQ0ZDEwMTcuODU2ZDEwMy40MjRkOTYzLjU4NGQ5Mi4xNmQ5NTIuMzE5ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDYxLjgyNGQ1MzMuNTAzZDUwNC44MzJkNDg0LjM1MmQ1NTIuOTZkNTMyLjQ4ZDQwMS40MDhkNjA0LjE2ZDQwMS40MDhkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3OC41OTJkMTg0LjMyZDg3OC41OTJkNDAxLjQwOGQ2MDQuMTZkNDQwLjMyZDk1Mi4zMTlkNDQwLjMyZDY2NC41NzZkNDMwLjA4ZDY2NC41NzZkMjA4Ljg5NmQ5NDIuMDhkMjA4Ljg5NmQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5aFIzZDYxNC40UjRkNTUyLjk2UjVkNjEuNDRSNmQ1MzkuNjQ4UjdkLTQzLjAwOFI4ZDQ3OC4yMDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIxNlIxMmQ2MS40NFIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkxaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmhnOjEwM29SMWQ3NjhSMmFkNDcxLjA0ZDY2NS41OTlkNDA5LjZkNzI3LjA0ZDE1My42ZDcyNy4wNGQxNTMuNmQ5NjIuNTZkMzY4LjY0ZDk2Mi41NmQzNjguNjRkNzU3Ljc2ZDQ0MC4zMmQ3NTcuNzZkNDQwLjMyZDExNjcuMzZkNDQwLjMyZDExOTcuMDU2ZDQxOS4zMjhkMTIxOC4wNDhkMzk4LjMzNmQxMjM5LjA0ZDM2OC42NGQxMjM5LjA0ZDcxLjY4ZDEyMzkuMDRkMTMzLjEyZDExNzcuNmQzNjguNjRkMTE3Ny42ZDM2OC42NGQ5NzEuNzc2ZDMwNy4yZDEwMjRkMTUzLjZkMTAyNGQxMjMuOTA0ZDEwMjRkMTAyLjkxMmQxMDAzLjAwOGQ4MS45MmQ5ODIuMDE2ZDgxLjkyZDk1Mi4zMTlkODEuOTJkNzM3LjI4ZDgxLjkyZDcwNy41ODRkMTAyLjkxMmQ2ODYuNTkyZDEyMy45MDRkNjY1LjU5OWQxNTMuNmQ2NjUuNTk5ZDQ3MS4wNGQ2NjUuNTk5aFIzZDUxNy4xMlI0ZDQ3MS4wNFI1ZDcxLjY4UjZkMzU4LjRSN2QtMjE1LjA0UjhkMjg2LjcyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMDNSMTJkNzEuNjhSMTNkNTE3LjEyUjE0YWkxaTJpMmkyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaGc6MjE1b1IxZDc2OFIyYWQ0MTkuODRkOTQ2LjE3NmQzNjkuNjY0ZDk5Ni4zNTJkMjY2LjI0ZDg5NC45NzZkMTYyLjgxNmQ5OTYuMzUyZDExMi42NGQ5NDYuMTc2ZDIxNS4wNGQ4NDQuOGQxMTIuNjRkNzQzLjQyNGQxNjIuODE2ZDY5My4yNDhkMjY2LjI0ZDc5NC42MjRkMzY5LjY2NGQ2OTMuMjQ4ZDQxOS44NGQ3NDMuNDI0ZDMxNy40NGQ4NDQuOGQ0MTkuODRkOTQ2LjE3NmhSM2Q1MzIuNDhSNGQ0MTkuODRSNWQxMTIuNjRSNmQzMzAuNzUyUjdkMjcuNjQ4UjhkMjE4LjExMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjE1UjEyZDExMi42NFIxM2Q1MzIuNDhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxMDJvUjFkNzY4UjJhZDM4OS4xMmQ0NTAuNTU5ZDMyNi42NTZkNTEyZDE1My42ZDUxMmQxNTMuNmQ3MDYuNTZkMTk1LjU4NGQ2NjUuNTk5ZDM3OC44OGQ2NjUuNTk5ZDMxNi40MTZkNzI3LjA0ZDE1My42ZDcyNy4wNGQxNTMuNmQxMDI0ZDgxLjkyZDEwMjRkODEuOTJkNTIyLjI0ZDgxLjkyZDQ5Mi41NDRkMTAyLjkxMmQ0NzEuNTUyZDEyMy45MDRkNDUwLjU1OWQxNTMuNmQ0NTAuNTU5ZDM4OS4xMmQ0NTAuNTU5aFIzZDM3My43NlI0ZDM4OS4xMlI1ZDgxLjkyUjZkNTczLjQ0UjdkMFI4ZDQ5MS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTAyUjEyZDgxLjkyUjEzZDM3My43NlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaGc6MjE0b1IxZDc2OFIyYWQ1MTcuMTJkOTUyLjMxOWQ1MTcuMTJkOTgyLjAxNmQ0OTYuMTI4ZDEwMDMuMDA4ZDQ3NS4xMzZkMTAyNGQ0NDUuNDRkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkNTkzLjkyZDg3LjA0ZDU2NC4yMjNkMTA4LjAzMmQ1NDMuMjMyZDEyOS4wMjRkNTIyLjI0ZDE1OC43MmQ1MjIuMjRkNDQ1LjQ0ZDUyMi4yNGQ0NzUuMTM2ZDUyMi4yNGQ0OTYuMTI4ZDU0My4yMzJkNTE3LjEyZDU2NC4yMjNkNTE3LjEyZDU5My45MmQ1MTcuMTJkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDU5My45MmQxNjguOTZkNTkzLjkyZDE2OC45NmQ5NTIuMzE5ZDQzNS4yZDk1Mi4zMTlkNDA5LjZkNDUwLjU1OWQzNDMuMDRkNDUwLjU1OWQzNDMuMDRkMzY4LjY0ZDQwOS42ZDM2OC42NGQ0MDkuNmQ0NTAuNTU5ZDI3MS4zNmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMjA0LjhkMzY4LjY0ZDI3MS4zNmQzNjguNjRkMjcxLjM2ZDQ1MC41NTloUjNkNjA0LjE2UjRkNTE3LjEyUjVkODcuMDRSNmQ2NTUuMzZSN2QwUjhkNTY4LjMyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMTRSMTJkODcuMDRSMTNkNjA0LjE2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTAxb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDgwOC45NmQzNTguNGQ4ODAuNjRkMTUzLjZkODgwLjY0ZDIxNS4wNGQ4MTkuMmQzNTguNGQ4MTkuMmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDQzMC4wOGQ5NjIuNTZkNDMwLjA4ZDEwMjRoUjNkNDcxLjA0UjRkNDMwLjA4UjVkNzEuNjhSNmQzNTguNFI3ZDBSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEwMVIxMmQ3MS42OFIxM2Q0NzEuMDRSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIxM29SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDk1Mi4zMTlkNDM1LjJkOTUyLjMxOWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQxNC43MmQzMjAuNTExZDQxNC43MmQzMzcuOTE5ZDQwOC41NzZkNDAwLjM4NGQ0MDYuNTI4ZDQyMi45MTJkMzkxLjE2OGQ0MzguMjcxZDM3NS44MDhkNDUzLjYzMWQzNTUuMzI4ZDQ1My42MzFkMzIwLjUxMmQ0NTMuNjMxZDI5Ny45ODRkNDI5LjA1NmQyMzkuNjE2ZDM2NC41NDRkMjMwLjRkNDQ5LjUzNWQxNzkuMmQ0NDkuNTM1ZDE3OS4yZDQ0MS4zNDNkMTgwLjczNmQ0MjEuMzc2ZDE4Mi4yNzJkNDAxLjQwOGQxODYuMzY4ZDM2OC42NGQxODguNDE2ZDM0Ny4xMzVkMjA0LjhkMzMyLjI4OGQyMjEuMTg0ZDMxNy40MzlkMjQyLjY4OGQzMTcuNDM5ZDI3NC40MzJkMzE3LjQzOWQyOTUuOTM2ZDMzOS45NjdkMzU3LjM3NmQ0MDQuNDhkMzYzLjUyZDMyMC41MTFkNDE0LjcyZDMyMC41MTFoUjNkNjA0LjE2UjRkNTE3LjEyUjVkODcuMDRSNmQ3MDYuNTZSN2QwUjhkNjE5LjUyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMTNSMTJkODcuMDRSMTNkNjA0LjE2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTJpMmkyaGc6MTAwb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNzM3LjI4ZDcxLjY4ZDcwNy41ODRkOTIuNjcyZDY4Ni41OTJkMTEzLjY2NGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDM1OC40ZDY2NS41OTlkMzU4LjRkNTAxLjc2ZDQzMC4wOGQ0MzAuMDhkNDMwLjA4ZDEwMjRkMzU4LjRkOTYyLjU2ZDM1OC40ZDY3NS44MzlkMzA3LjJkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZoUjNkNTEyUjRkNDMwLjA4UjVkNzEuNjhSNmQ1OTMuOTJSN2QwUjhkNTIyLjI0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMDBSMTJkNzEuNjhSMTNkNTEyUjE0YWkxaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaTJoZzoyMTJvUjFkNzY4UjJhZDUxNy4xMmQ5NTIuMzE5ZDUxNy4xMmQ5ODIuMDE2ZDQ5Ni4xMjhkMTAwMy4wMDhkNDc1LjEzNmQxMDI0ZDQ0NS40NGQxMDI0ZDE1OC43MmQxMDI0ZDEyOS4wMjRkMTAyNGQxMDguMDMyZDEwMDMuMDA4ZDg3LjA0ZDk4Mi4wMTZkODcuMDRkOTUyLjMxOWQ4Ny4wNGQ1OTMuOTJkODcuMDRkNTY0LjIyM2QxMDguMDMyZDU0My4yMzJkMTI5LjAyNGQ1MjIuMjRkMTU4LjcyZDUyMi4yNGQ0NDUuNDRkNTIyLjI0ZDQ3NS4xMzZkNTIyLjI0ZDQ5Ni4xMjhkNTQzLjIzMmQ1MTcuMTJkNTY0LjIyM2Q1MTcuMTJkNTkzLjkyZDUxNy4xMmQ5NTIuMzE5ZDQzNS4yZDk1Mi4zMTlkNDM1LjJkNTkzLjkyZDE2OC45NmQ1OTMuOTJkMTY4Ljk2ZDk1Mi4zMTlkNDM1LjJkOTUyLjMxOWQ0MjQuOTZkNDUwLjU1OWQzNTMuMjhkNDUwLjU1OWQzMTIuMzJkMzU4LjRkMzAyLjA4ZDM1OC40ZDI2MS4xMmQ0NTAuNTU5ZDE4OS40NGQ0NTAuNTU5ZDI3MS4zNmQzMTcuNDM5ZDM0My4wNGQzMTcuNDM5ZDQyNC45NmQ0NTAuNTU5aFIzZDYwNC4xNlI0ZDUxNy4xMlI1ZDg3LjA0UjZkNzA2LjU2UjdkMFI4ZDYxOS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjEyUjEyZDg3LjA0UjEzZDYwNC4xNlIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJoZzo5OW9SMWQ3NjhSMmFkMzc4Ljg4ZDY2NS41OTlkMzE2LjQxNmQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQxMDI0ZDE0My4zNmQxMDI0ZDExMy42NjRkMTAyNGQ5Mi42NzJkMTAwMy4wMDhkNzEuNjhkOTgyLjAxNmQ3MS42OGQ5NTIuMzE5ZDcxLjY4ZDczNy4yOGQ3MS42OGQ3MDcuNTg0ZDkyLjY3MmQ2ODYuNTkyZDExMy42NjRkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQzNzguODhkNjY1LjU5OWhSM2QzNzguODhSNGQzNzguODhSNWQ3MS42OFI2ZDM1OC40UjdkMFI4ZDI4Ni43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpOTlSMTJkNzEuNjhSMTNkMzc4Ljg4UjE0YWkxaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaGc6MjExb1IxZDc2OFIyYWQ1MTcuMTJkOTUyLjMxOWQ1MTcuMTJkOTgyLjAxNmQ0OTYuMTI4ZDEwMDMuMDA4ZDQ3NS4xMzZkMTAyNGQ0NDUuNDRkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkNTkzLjkyZDg3LjA0ZDU2NC4yMjNkMTA4LjAzMmQ1NDMuMjMyZDEyOS4wMjRkNTIyLjI0ZDE1OC43MmQ1MjIuMjRkNDQ1LjQ0ZDUyMi4yNGQ0NzUuMTM2ZDUyMi4yNGQ0OTYuMTI4ZDU0My4yMzJkNTE3LjEyZDU2NC4yMjNkNTE3LjEyZDU5My45MmQ1MTcuMTJkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDU5My45MmQxNjguOTZkNTkzLjkyZDE2OC45NmQ5NTIuMzE5ZDQzNS4yZDk1Mi4zMTlkNDE5Ljg0ZDMwNy4xOTlkMzE3LjQ0ZDQ1MC41NTlkMjQ1Ljc2ZDQ1MC41NTlkMzQ4LjE2ZDMwNy4xOTlkNDE5Ljg0ZDMwNy4xOTloUjNkNjA0LjE2UjRkNTE3LjEyUjVkODcuMDRSNmQ3MTYuOFI3ZDBSOGQ2MjkuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIxMVIxMmQ4Ny4wNFIxM2Q2MDQuMTZSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk4b1IxZDc2OFIyYWQ0NDAuMzJkOTUyLjMxOWQ0NDAuMzJkOTgyLjAxNmQ0MTkuMzI4ZDEwMDMuMDA4ZDM5OC4zMzZkMTAyNGQzNjguNjRkMTAyNGQxNTMuNmQxMDI0ZDE1My42ZDk2My41ODRkODEuOTJkMTAzNC4yNGQ4MS45MmQ1MDEuNzZkMTUzLjZkNDMwLjA4ZDE1My42ZDcxNi44ZDIwNC44ZDY2NS41OTlkMzY4LjY0ZDY2NS41OTlkMzk4LjMzNmQ2NjUuNTk5ZDQxOS4zMjhkNjg2LjU5MmQ0NDAuMzJkNzA3LjU4NGQ0NDAuMzJkNzM3LjI4ZDQ0MC4zMmQ5NTIuMzE5ZDM2OC42NGQ5NjIuNTZkMzY4LjY0ZDcyNy4wNGQxNTMuNmQ3MjcuMDRkMTUzLjZkOTYyLjU2ZDM2OC42NGQ5NjIuNTZoUjNkNTEyUjRkNDQwLjMyUjVkODEuOTJSNmQ1OTMuOTJSN2QtMTAuMjRSOGQ1MTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTk4UjEyZDgxLjkyUjEzZDUxMlIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmhnOjIxMG9SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDk1Mi4zMTlkNDM1LjJkOTUyLjMxOWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDM1My4yOGQ0NTAuNTU5ZDI4MS42ZDQ1MC41NTlkMTc5LjJkMzA3LjE5OWQyNTAuODhkMzA3LjE5OWQzNTMuMjhkNDUwLjU1OWhSM2Q2MDQuMTZSNGQ1MTcuMTJSNWQ4Ny4wNFI2ZDcxNi44UjdkMFI4ZDYyOS43NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjEwUjEyZDg3LjA0UjEzZDYwNC4xNlIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6OTdvUjFkNzY4UjJhZDQxNC43MmQxMDI0ZDM0My4wNGQxMDI0ZDM0My4wNGQ5NzEuNzc2ZDI4MS42ZDEwMjRkMTI4ZDEwMjRkOTguMzA0ZDEwMjRkNzcuMzEyZDEwMDMuMDA4ZDU2LjMyZDk4Mi4wMTZkNTYuMzJkOTUyLjMxOWQ1Ni4zMmQ4ODAuNjRkNTYuMzJkODUwLjk0NGQ3Ny4zMTJkODI5Ljk1MmQ5OC4zMDRkODA4Ljk2ZDEyOGQ4MDguOTZkMzMyLjhkODA4Ljk2ZDI3MS4zNmQ4NjkuMzc2ZDEyOGQ4NjkuMzc2ZDEyOGQ5NjIuNTZkMzQzLjA0ZDk2Mi41NmQzNDMuMDRkNzI3LjA0ZDU2LjMyZDcyNy4wNGQxMTcuNzZkNjY1LjU5OWQzNDMuMDRkNjY1LjU5OWQzNzIuNzM2ZDY2NS41OTlkMzkzLjcyOGQ2ODYuNTkyZDQxNC43MmQ3MDcuNTg0ZDQxNC43MmQ3MzcuMjhkNDE0LjcyZDEwMjRoUjNkNDg2LjRSNGQ0MTQuNzJSNWQ1Ni4zMlI2ZDM1OC40UjdkMFI4ZDMwMi4wOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpOTdSMTJkNTYuMzJSMTNkNDg2LjRSMTRhaTFpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJoZzoyMDlvUjFkNzY4UjJhZDUyMi4yNGQxMDIyLjk3NmQzNzguODhkMTAyMi45NzZkMTg0LjMyZDU5OC4wMTZkMTQzLjM2ZDU5OC4wMTZkMTc0LjA4ZDY0OS4yMTZkMTc0LjA4ZDEwMjIuOTc2ZDkyLjE2ZDEwMjIuOTc2ZDkyLjE2ZDUyMS4yMTZkMjM2LjU0NGQ1MjEuMjE2ZDQzMC4wOGQ5NDYuMTc2ZDQ3MS4wNGQ5NDYuMTc2ZDQ0MC4zMmQ4OTQuOTc2ZDQ0MC4zMmQ1MjEuMjE2ZDUyMi4yNGQ1MjEuMjE2ZDUyMi4yNGQxMDIyLjk3NmQ0NDAuMzJkMzIwLjUxMWQ0NDAuMzJkMzM3LjkxOWQ0MzQuMTc2ZDQwMC4zODRkNDMyLjEyOGQ0MjIuOTEyZDQxNi43NjhkNDM4LjI3MWQ0MDEuNDA4ZDQ1My42MzFkMzgwLjkyOGQ0NTMuNjMxZDM0Ni4xMTJkNDUzLjYzMWQzMjMuNTg0ZDQyOS4wNTZkMjY1LjIxNmQzNjQuNTQ0ZDI1NmQ0NDkuNTM1ZDIwNC44ZDQ0OS41MzVkMjA0LjhkNDQxLjM0M2QyMDYuMzM2ZDQyMS4zNzZkMjA3Ljg3MmQ0MDEuNDA4ZDIxMS45NjhkMzY4LjY0ZDIxNC4wMTZkMzQ3LjEzNWQyMzAuNGQzMzIuMjg4ZDI0Ni43ODRkMzE3LjQzOWQyNjguMjg4ZDMxNy40MzlkMzAwLjAzMmQzMTcuNDM5ZDMyMS41MzZkMzM5Ljk2N2QzODIuOTc2ZDQwNC40OGQzODkuMTJkMzIwLjUxMWQ0NDAuMzJkMzIwLjUxMWhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzA2LjU2UjdkMS4wMjRSOGQ2MTQuNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA5UjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTJpMmkyaGc6OTZvUjFkNzY4UjJhZDE1My42ZDU5My45MmQ4MS45MmQ1OTMuOTJkLTIwLjQ4ZDQ1MC41NTlkNTEuMmQ0NTAuNTU5ZDE1My42ZDU5My45MmhSM2QxNTMuNlI0ZDE1My42UjVkLTIwLjQ4UjZkNTczLjQ0UjdkNDMwLjA4UjhkNTkzLjkyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk5NlIxMmQtMjAuNDhSMTNkMTUzLjZSMTRhaTFpMmkyaTJpMmhnOjIwOG9SMWQ3NjhSMmFkNTM3LjZkOTUyLjMxOWQ1MzcuNmQ5ODAuOTkyZDUxNi4wOTZkMTAwMi40OTZkNDk0LjU5MmQxMDI0ZDQ2NS45MmQxMDI0ZDEwNy41MmQxMDI0ZDEwNy41MmQ4MDguOTZkMzUuODRkODA4Ljk2ZDM1Ljg0ZDczNy4yOGQxMDcuNTJkNzM3LjI4ZDEwNy41MmQ2NjUuNTk5ZDE3OS4yZDU5My45MmQxMDcuNTJkNTkzLjkyZDEwNy41MmQ1MjIuMjRkNDY1LjkyZDUyMi4yNGQ0OTQuNTkyZDUyMi4yNGQ1MTYuMDk2ZDU0My43NDNkNTM3LjZkNTY1LjI0OGQ1MzcuNmQ1OTMuOTJkNTM3LjZkOTUyLjMxOWQ0NTUuNjhkOTUyLjMxOWQ0NTUuNjhkNTkzLjkyZDE4OS40NGQ1OTMuOTJkMTg5LjQ0ZDczNy4yOGQzMjIuNTZkNzM3LjI4ZDI1MC44OGQ4MDguOTZkMTg5LjQ0ZDgwOC45NmQxODkuNDRkMTAxMy43NmQyNTAuODhkOTUyLjMxOWQ0NTUuNjhkOTUyLjMxOWhSM2Q2MjQuNjRSNGQ1MzcuNlI1ZDM1Ljg0UjZkNTAxLjc2UjdkMFI4ZDQ2NS45MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA4UjEyZDM1Ljg0UjEzZDYyNC42NFIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaGc6OTVvUjFkNzY4UjJhZDQ3Ni4xNmQxMTY3LjM2ZC01LjEyZDExNjcuMzZkLTUuMTJkMTA5NS42OGQ0NzYuMTZkMTA5NS42OGQ0NzYuMTZkMTE2Ny4zNmhSM2Q0NzEuMDRSNGQ0NzYuMTZSNWQtNS4xMlI2ZC03MS42OFI3ZC0xNDMuMzZSOGQtNjYuNTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTk1UjEyZC01LjEyUjEzZDQ3MS4wNFIxNGFpMWkyaTJpMmkyaGc6MjA3b1IxZDc2OFIyYWQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQxMDI0ZDI0MC42NGQ0NTAuNTU5ZDE3NC4wOGQ0NTAuNTU5ZDE3NC4wOGQzNjguNjRkMjQwLjY0ZDM2OC42NGQyNDAuNjRkNDUwLjU1OWQxMDIuNGQ0NTAuNTU5ZDM1Ljg0ZDQ1MC41NTlkMzUuODRkMzY4LjY0ZDEwMi40ZDM2OC42NGQxMDIuNGQ0NTAuNTU5aFIzZDI2Ni4yNFI0ZDI0MC42NFI1ZDM1Ljg0UjZkNjU1LjM2UjdkMFI4ZDYxOS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA3UjEyZDM1Ljg0UjEzZDI2Ni4yNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5NG9SMWQ3NjhSMmFkNDc3LjE4NGQ2MjIuNTkyZDQyNS45ODRkNjczLjc5MWQyNjIuMTQ0ZDQ2Ny45NjdkMTA2LjQ5NmQ2NzMuNzkxZDU1LjI5NmQ2MjIuNTkyZDI2MS4xMmQzNjYuNTkyZDQ3Ny4xODRkNjIyLjU5MmhSM2Q1MzIuNDhSNGQ0NzcuMTg0UjVkNTUuMjk2UjZkNjU3LjQwOFI3ZDM1MC4yMDhSOGQ2MDIuMTEyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk5NFIxMmQ1NS4yOTZSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaGc6MjA2b1IxZDc2OFIyYWQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQxMDI0ZDI1MC44OGQ0NTAuNTU5ZDE3OS4yZDQ1MC41NTlkMTM4LjI0ZDM1OC40ZDEyOGQzNTguNGQ4Ny4wNGQ0NTAuNTU5ZDE1LjM2ZDQ1MC41NTlkOTcuMjhkMzE3LjQzOWQxNjguOTZkMzE3LjQzOWQyNTAuODhkNDUwLjU1OWhSM2QyNjYuMjRSNGQyNTAuODhSNWQxNS4zNlI2ZDcwNi41NlI3ZDBSOGQ2OTEuMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA2UjEyZDE1LjM2UjEzZDI2Ni4yNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6OTNvUjFkNzY4UjJhZDcxLjY4ZDEwMzQuMjRkMTQzLjM2ZDEwMzQuMjRkMTQzLjM2ZDUxMmQ3MS42OGQ1MTJkNzEuNjhkNDUwLjU1OWQyMTUuMDRkNDUwLjU1OWQyMTUuMDRkMTA5NS42OGQ3MS42OGQxMDk1LjY4ZDcxLjY4ZDEwMzQuMjRoUjNkMzI3LjY4UjRkMjE1LjA0UjVkNzEuNjhSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTkzUjEyZDcxLjY4UjEzZDMyNy42OFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDVvUjFkNzY4UjJhZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDEwMjRkMjU2ZDMwNy4xOTlkMTUzLjZkNDUwLjU1OWQ4MS45MmQ0NTAuNTU5ZDE4NC4zMmQzMDcuMTk5ZDI1NmQzMDcuMTk5aFIzZDI2Ni4yNFI0ZDI1NlI1ZDgxLjkyUjZkNzE2LjhSN2QwUjhkNjM0Ljg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMDVSMTJkODEuOTJSMTNkMjY2LjI0UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6OTJvUjFkNzY4UjJhZDMxLjc0NGQ0NTAuNTU5ZDMxNy40NGQxMDk1LjY4ZDI0MS42NjRkMTA5NS42OGQtNDAuOTZkNDUwLjU1OWQzMS43NDRkNDUwLjU1OWhSM2QzMTcuNDRSNGQzMTcuNDRSNWQtNDAuOTZSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ2MTQuNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpOTJSMTJkLTQwLjk2UjEzZDMxNy40NFIxNGFpMWkyaTJpMmkyaGc6MjA0b1IxZDc2OFIyYWQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQxMDI0ZDE4OS40NGQ0NTAuNTU5ZDExNy43NmQ0NTAuNTU5ZDE1LjM2ZDMwNy4xOTlkODcuMDRkMzA3LjE5OWQxODkuNDRkNDUwLjU1OWhSM2QyNjYuMjRSNGQxODkuNDRSNWQxNS4zNlI2ZDcxNi44UjdkMFI4ZDcwMS40NFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA0UjEyZDE1LjM2UjEzZDI2Ni4yNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjkxb1IxZDc2OFIyYWQyNTZkMTA5NS42OGQxMTIuNjRkMTA5NS42OGQxMTIuNjRkNDUwLjU1OWQyNTZkNDUwLjU1OWQyNTZkNTEyZDE4NC4zMmQ1MTJkMTg0LjMyZDEwMzQuMjRkMjU2ZDEwMzQuMjRkMjU2ZDEwOTUuNjhoUjNkMzI3LjY4UjRkMjU2UjVkMTEyLjY0UjZkNTczLjQ0UjdkLTcxLjY4UjhkNDYwLjhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTkxUjEyZDExMi42NFIxM2QzMjcuNjhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaGc6MjAzb1IxZDc2OFIyYWQ0NTAuNTZkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NS41OTlkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDUwLjU2ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ3OTguNzJkMjM1LjUyZDczNy4yOGQ0NTAuNTZkNzM3LjI4ZDQ1MC41NmQ4MDguOTZkMTc0LjA4ZDgwOC45NmQxNzQuMDhkOTUyLjMxOWQ0NTAuNTZkOTUyLjMxOWQ0NTAuNTZkMTAyNGQzODcuMDcyZDQ1MC41NTlkMzIwLjUxMmQ0NTAuNTU5ZDMyMC41MTJkMzY4LjY0ZDM4Ny4wNzJkMzY4LjY0ZDM4Ny4wNzJkNDUwLjU1OWQyNDguODMyZDQ1MC41NTlkMTgyLjI3MmQ0NTAuNTU5ZDE4Mi4yNzJkMzY4LjY0ZDI0OC44MzJkMzY4LjY0ZDI0OC44MzJkNDUwLjU1OWhSM2Q1MTJSNGQ0NTAuNTZSNWQ5Mi4xNlI2ZDY1NS4zNlI3ZDBSOGQ1NjMuMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjAzUjEyZDkyLjE2UjEzZDUxMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5MG9SMWQ3NjhSMmFkNDg2LjRkMTAyNGQ1Ni4zMmQxMDI0ZDU2LjMyZDkzNi45NmQzOTkuMzZkNTkzLjkyZDU2LjMyZDU5My45MmQ1Ni4zMmQ1MjIuMjRkNDg2LjRkNTIyLjI0ZDQ4Ni40ZDYxMC4zMDRkMTQzLjM2ZDk1Mi4zMTlkNDg2LjRkOTUyLjMxOWQ0ODYuNGQxMDI0aFIzZDU0Mi43MlI0ZDQ4Ni40UjVkNTYuMzJSNmQ1MDEuNzZSN2QwUjhkNDQ1LjQ0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk5MFIxMmQ1Ni4zMlIxM2Q1NDIuNzJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIwMm9SMWQ3NjhSMmFkNDUwLjU2ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkOTIuMTZkNTkzLjkyZDkyLjE2ZDUyMi4yNGQ0NTAuNTZkNTIyLjI0ZDQ1MC41NmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkNzk4LjcyZDIzNS41MmQ3MzcuMjhkNDUwLjU2ZDczNy4yOGQ0NTAuNTZkODA4Ljk2ZDE3NC4wOGQ4MDguOTZkMTc0LjA4ZDk1Mi4zMTlkNDUwLjU2ZDk1Mi4zMTlkNDUwLjU2ZDEwMjRkMzg5LjEyZDQ1MC41NTlkMzE3LjQ0ZDQ1MC41NTlkMjc2LjQ4ZDM1OC40ZDI2Ni4yNGQzNTguNGQyMjUuMjhkNDUwLjU1OWQxNTMuNmQ0NTAuNTU5ZDIzNS41MmQzMTcuNDM5ZDMwNy4yZDMxNy40MzlkMzg5LjEyZDQ1MC41NTloUjNkNTEyUjRkNDUwLjU2UjVkOTIuMTZSNmQ3MDYuNTZSN2QwUjhkNjE0LjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIwMlIxMmQ5Mi4xNlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjg5b1IxZDc2OFIyYWQ1MDEuNzZkODA4Ljk2ZDUwMS43NmQ4MzguNjU2ZDQ4MC43NjhkODU5LjY0OGQ0NTkuNzc2ZDg4MC42NGQ0MzAuMDhkODgwLjY0ZDMyNy42OGQ4ODAuNjRkMzI3LjY4ZDEwMjRkMjQ1Ljc2ZDEwMjRkMjQ1Ljc2ZDg4MC42NGQxNDMuMzZkODgwLjY0ZDExMy42NjRkODgwLjY0ZDkyLjY3MmQ4NTkuNjQ4ZDcxLjY4ZDgzOC42NTZkNzEuNjhkODA4Ljk2ZDcxLjY4ZDUyMi4yNGQxNTMuNmQ1MjIuMjRkMTUzLjZkODA4Ljk2ZDQxOS44NGQ4MDguOTZkNDE5Ljg0ZDUyMi4yNGQ1MDEuNzZkNTIyLjI0ZDUwMS43NmQ4MDguOTZoUjNkNTczLjQ0UjRkNTAxLjc2UjVkNzEuNjhSNmQ1MDEuNzZSN2QwUjhkNDMwLjA4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4OVIxMmQ3MS42OFIxM2Q1NzMuNDRSMTRhaTFpM2kzaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmhnOjIwMW9SMWQ3NjhSMmFkNDUwLjU2ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkOTIuMTZkNTkzLjkyZDkyLjE2ZDUyMi4yNGQ0NTAuNTZkNTIyLjI0ZDQ1MC41NmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkNzk4LjcyZDIzNS41MmQ3MzcuMjhkNDUwLjU2ZDczNy4yOGQ0NTAuNTZkODA4Ljk2ZDE3NC4wOGQ4MDguOTZkMTc0LjA4ZDk1Mi4zMTlkNDUwLjU2ZDk1Mi4zMTlkNDUwLjU2ZDEwMjRkMzk5LjM2ZDMwNy4xOTlkMjk2Ljk2ZDQ1MC41NTlkMjI1LjI4ZDQ1MC41NTlkMzI3LjY4ZDMwNy4xOTlkMzk5LjM2ZDMwNy4xOTloUjNkNTEyUjRkNDUwLjU2UjVkOTIuMTZSNmQ3MTYuOFI3ZDBSOGQ2MjQuNjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIwMVIxMmQ5Mi4xNlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzo4OG9SMWQ3NjhSMmFkNDkxLjUyZDEwMjRkMzk1LjI2NGQxMDI0ZDI1Mi45MjhkODE5LjJkMjQyLjY4OGQ4MTkuMmQxMDguNTQ0ZDEwMjRkMTAuMjRkMTAyNGQxOTUuNTg0ZDc2Mi44OGQyMC40OGQ1MjIuMjRkMTE4Ljc4NGQ1MjIuMjRkMjQ5Ljg1NmQ3MTUuNzc2ZDI2MC4wOTZkNzE1Ljc3NmQzODUuMDI0ZDUyMi4yNGQ0ODEuMjhkNTIyLjI0ZDMwOC4yMjRkNzYyLjg4ZDQ5MS41MmQxMDI0aFIzZDUwMS43NlI0ZDQ5MS41MlI1ZDEwLjI0UjZkNTAxLjc2UjdkMFI4ZDQ5MS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpODhSMTJkMTAuMjRSMTNkNTAxLjc2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIwMG9SMWQ3NjhSMmFkNDUwLjU2ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkOTIuMTZkNTkzLjkyZDkyLjE2ZDUyMi4yNGQ0NTAuNTZkNTIyLjI0ZDQ1MC41NmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkNzk4LjcyZDIzNS41MmQ3MzcuMjhkNDUwLjU2ZDczNy4yOGQ0NTAuNTZkODA4Ljk2ZDE3NC4wOGQ4MDguOTZkMTc0LjA4ZDk1Mi4zMTlkNDUwLjU2ZDk1Mi4zMTlkNDUwLjU2ZDEwMjRkMzMyLjhkNDUwLjU1OWQyNjEuMTJkNDUwLjU1OWQxNTguNzJkMzA3LjE5OWQyMzAuNGQzMDcuMTk5ZDMzMi44ZDQ1MC41NTloUjNkNTEyUjRkNDUwLjU2UjVkOTIuMTZSNmQ3MTYuOFI3ZDBSOGQ2MjQuNjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIwMFIxMmQ5Mi4xNlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzo4N29SMWQ3NjhSMmFkNzQyLjRkNTIyLjI0ZDYyOS43NmQxMDI0ZDQ5MS41MmQxMDI0ZDM5NC4yNGQ2NTYuMzg0ZDM4NGQ2NTYuMzg0ZDI4Ni43MmQxMDI0ZDE0OC40OGQxMDI0ZDM1Ljg0ZDUyMi4yNGQxMjhkNTIyLjI0ZDIwOS45MmQ5NTQuMzY3ZDIzMC40ZDk1NC4zNjdkMzQ4LjE2ZDUyMi4yNGQ0MzAuMDhkNTIyLjI0ZDU0Ny44NGQ5NTQuMzY3ZDU2OC4zMmQ5NTQuMzY3ZDY1MC4yNGQ1MjIuMjRkNzQyLjRkNTIyLjI0aFIzZDc3OC4yNFI0ZDc0Mi40UjVkMzUuODRSNmQ1MDEuNzZSN2QwUjhkNDY1LjkyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4N1IxMmQzNS44NFIxM2Q3NzguMjRSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE5OW9SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMzA3LjJkMTAyNGQzMDcuMmQxMDc2LjIyNGQzNDguMTZkMTA3Ni4yMjRkMzc3Ljg1NmQxMDc2LjIyNGQzOTguODQ4ZDEwOTYuNzA0ZDQxOS44NGQxMTE3LjE4NGQ0MTkuODRkMTE0Ni44OGQ0MTkuODRkMTE2Ny4zNmQ0MTkuODRkMTE5Ny4wNTZkMzk4Ljg0OGQxMjE4LjA0OGQzNzcuODU2ZDEyMzkuMDRkMzQ4LjE2ZDEyMzkuMDRkMTg0LjMyZDEyMzkuMDRkMjQ1Ljc2ZDExNzcuNmQzNDguMTZkMTE3Ny42ZDM0OC4xNmQxMTI2LjRkMjQ1Ljc2ZDExMjYuNGQyNDUuNzZkMTA3My4xNTJkMjk2Ljk2ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDY2NS41OTlkNDM1LjJkNjY1LjU5OWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDg4MC42NGQ1MTcuMTJkODgwLjY0ZDUxNy4xMmQ5NTIuMzE5aFIzZDU3OC41NlI0ZDUxNy4xMlI1ZDg3LjA0UjZkNTAxLjc2UjdkLTIxNS4wNFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTk5UjEyZDg3LjA0UjEzZDU3OC41NlIxNGFpMWkzaTNpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJoZzo4Nm9SMWQ3NjhSMmFkNTQyLjcyZDUyMi4yNGQzNTEuMjMyZDEwMjRkMjE4LjExMmQxMDI0ZDMwLjcyZDUyMi4yNGQxMjIuODhkNTIyLjI0ZDI3Ni40OGQ5NTQuMzY3ZDI5Ni45NmQ5NTQuMzY3ZDQ1MC41NmQ1MjIuMjRkNTQyLjcyZDUyMi4yNGhSM2Q1NzMuNDRSNGQ1NDIuNzJSNWQzMC43MlI2ZDUwMS43NlI3ZDBSOGQ0NzEuMDRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTg2UjEyZDMwLjcyUjEzZDU3My40NFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoxOThvUjFkNzY4UjJhZDY2NS42ZDEwMjRkMzY4LjY0ZDEwMjRkMzY4LjY0ZDg4MC42NGQxNzQuMDhkODgwLjY0ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTkzLjkyZDkyLjE2ZDU2NC4yMjNkMTEzLjE1MmQ1NDMuMjMyZDEzNC4xNDRkNTIyLjI0ZDE2My44NGQ1MjIuMjRkNjY1LjZkNTIyLjI0ZDY2NS42ZDU5My45MmQ0NTAuNTZkNTkzLjkyZDQ1MC41NmQ3OTguNzJkNTEyZDczNy4yOGQ2NjUuNmQ3MzcuMjhkNjY1LjZkODA4Ljk2ZDQ1MC41NmQ4MDguOTZkNDUwLjU2ZDk1Mi4zMTlkNjY1LjZkOTUyLjMxOWQ2NjUuNmQxMDI0ZDM2OC42NGQ4MDguOTZkMzY4LjY0ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ4NzAuNGQyMzUuNTJkODA4Ljk2ZDM2OC42NGQ4MDguOTZoUjNkNzI3LjA0UjRkNjY1LjZSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTk4UjEyZDkyLjE2UjEzZDcyNy4wNFIxNGFpMWkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaGc6ODVvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ5NjIuNTZkMzc4Ljg4ZDEwMjRkMTYzLjg0ZDEwMjRkMTM0LjE0NGQxMDI0ZDExMy4xNTJkMTAwMy4wMDhkOTIuMTZkOTgyLjAxNmQ5Mi4xNmQ5NTIuMzE5ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkMTAyNGhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4NVIxMmQ5Mi4xNlIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaGc6MTk3b1IxZDc2OFIyYWQ1MjIuMjRkMTAyNGQ0NDAuMzJkMTAyNGQ0NDAuMzJkODgwLjY0ZDE3NC4wOGQ4ODAuNjRkMTc0LjA4ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTY0LjIyM2QxMTMuMTUyZDU0My4yMzJkMTM0LjE0NGQ1MjIuMjRkMTYzLjg0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQxMDI0ZDQ0MC4zMmQ4MDguOTZkNDQwLjMyZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ4NzAuNGQyMzUuNTJkODA4Ljk2ZDQ0MC4zMmQ4MDguOTZkNDA5LjZkMzk2LjI4OGQ0MDkuNmQ0MjIuOTEyZDM5MC4xNDRkNDQyLjM2N2QzNTkuNDI0ZDQ3NC4xMTFkMzQ4LjE2ZDQ4NS4zNzZkMzI1LjYzMmQ0ODUuMzc2ZDMwMS4wNTZkNDg1LjM3NmQyNzguNTI4ZDQ4NS4zNzZkMjY3LjI2NGQ0NzQuMTExZDIzNi41NDRkNDQyLjM2N2QyMTcuMDg4ZDQyMi45MTJkMjE3LjA4OGQzOTYuMjg4ZDIxNy4wODhkMzY5LjY2NGQyMzYuNTQ0ZDM1MC4yMDdkMjY3LjI2NGQzMTguNDYzZDI4Ni43MmQyOTYuOTZkMzEzLjM0NGQyOTYuOTZkMzM4Ljk0NGQyOTYuOTZkMzU5LjQyNGQzMTguNDYzZDM5MC4xNDRkMzUwLjIwN2Q0MDkuNmQzNjkuNjY0ZDQwOS42ZDM5Ni4yODhkMzY0LjU0NGQzOTYuMjg4ZDMxMy4zNDRkMzQ1LjA4N2QyNjIuMTQ0ZDM5Ni4yODhkMzEzLjM0NGQ0NDcuNDg3ZDM2NC41NDRkMzk2LjI4OGhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzI3LjA0UjdkMFI4ZDYzNC44OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTk3UjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTNpM2kyaTJpMWkyaTJpMmkyaTJpMWkzaTJpM2kyaTNpMmkzaTNpMmkzaTNpMmkzaTFpMmkyaTJpMmhnOjg0b1IxZDc2OFIyYWQzODRkNTkzLjkyZDIzNS41MmQ1OTMuOTJkMjM1LjUyZDEwMjRkMTUzLjZkMTAyNGQxNTMuNmQ1OTMuOTJkNS4xMmQ1OTMuOTJkNS4xMmQ1MjIuMjRkMzg0ZDUyMi4yNGQzODRkNTkzLjkyaFIzZDM4OS4xMlI0ZDM4NFI1ZDUuMTJSNmQ1MDEuNzZSN2QwUjhkNDk2LjY0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4NFIxMmQ1LjEyUjEzZDM4OS4xMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoxOTZvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmQ0MTcuNzkyZDQ1MC41NTlkMzUxLjIzMmQ0NTAuNTU5ZDM1MS4yMzJkMzY4LjY0ZDQxNy43OTJkMzY4LjY0ZDQxNy43OTJkNDUwLjU1OWQyNzkuNTUyZDQ1MC41NTlkMjEyLjk5MmQ0NTAuNTU5ZDIxMi45OTJkMzY4LjY0ZDI3OS41NTJkMzY4LjY0ZDI3OS41NTJkNDUwLjU1OWhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNjU1LjM2UjdkMFI4ZDU2My4yUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxOTZSMTJkOTIuMTZSMTNkNjE0LjRSMTRhaTFpMmkyaTJpMmkyaTJpM2kzaTJpMmkxaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODNvUjFkNzY4UjJhZDQzMC4wOGQ5NTIuMzE5ZDQzMC4wOGQ5ODIuMDE2ZDQwOS4wODhkMTAwMy4wMDhkMzg4LjA5NmQxMDI0ZDM1OC40ZDEwMjRkNzEuNjhkMTAyNGQ3MS42OGQ5NTIuMzE5ZDM0OC4xNmQ5NTIuMzE5ZDM0OC4xNmQ4MDguOTZkMTQzLjM2ZDgwOC45NmQxMTMuNjY0ZDgwOC45NmQ5Mi42NzJkNzg3Ljk2OGQ3MS42OGQ3NjYuOTc2ZDcxLjY4ZDczNy4yOGQ3MS42OGQ1OTMuOTJkNzEuNjhkNTY0LjIyM2Q5Mi42NzJkNTQzLjIzMmQxMTMuNjY0ZDUyMi4yNGQxNDMuMzZkNTIyLjI0ZDQzMC4wOGQ1MjIuMjRkNDMwLjA4ZDU5My45MmQxNTMuNmQ1OTMuOTJkMTUzLjZkNzM3LjI4ZDM1OC40ZDczNy4yOGQzODguMDk2ZDczNy4yOGQ0MDkuMDg4ZDc1OC4yNzFkNDMwLjA4ZDc3OS4yNjRkNDMwLjA4ZDgwOC45NmQ0MzAuMDhkOTUyLjMxOWhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDUwMS43NlI3ZDBSOGQ0MzAuMDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTgzUjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpM2kzaTJoZzoxOTVvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmQ0MjcuMDA4ZDMyMC41MTFkNDI3LjAwOGQzMzcuOTE5ZDQyMC44NjRkNDAwLjM4NGQ0MTguODE2ZDQyMi45MTJkNDAzLjQ1NmQ0MzguMjcxZDM4OC4wOTZkNDUzLjYzMWQzNjcuNjE2ZDQ1My42MzFkMzMyLjhkNDUzLjYzMWQzMTAuMjcyZDQyOS4wNTZkMjUxLjkwNGQzNjQuNTQ0ZDI0Mi42ODhkNDQ5LjUzNWQxOTEuNDg4ZDQ0OS41MzVkMTkxLjQ4OGQ0NDEuMzQzZDE5My4wMjRkNDIxLjM3NmQxOTQuNTZkNDAxLjQwOGQxOTguNjU2ZDM2OC42NGQyMDAuNzA0ZDM0Ny4xMzVkMjE3LjA4OGQzMzIuMjg4ZDIzMy40NzJkMzE3LjQzOWQyNTQuOTc2ZDMxNy40MzlkMjg2LjcyZDMxNy40MzlkMzA4LjIyNGQzMzkuOTY3ZDM2OS42NjRkNDA0LjQ4ZDM3NS44MDhkMzIwLjUxMWQ0MjcuMDA4ZDMyMC41MTFoUjNkNjE0LjRSNGQ1MjIuMjRSNWQ5Mi4xNlI2ZDcwNi41NlI3ZDBSOGQ2MTQuNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTk1UjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTNpM2kyaTJpMWkyaTJpMmkyaTJpMWkzaTNpM2kzaTJpMmkyaTNpM2kzaTNpM2kyaTJpMmhnOjgyb1IxZDc2OFIyYWQ1MzIuNDhkMTAyNGQ0MjguMDMyZDEwMjRkMjE1LjA0ZDgwOC45NmQ0NDAuMzJkODA4Ljk2ZDQ0MC4zMmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NC41NzZkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDc5LjIzMmQ1MjIuMjRkNTAwLjczNmQ1NDMuNzQzZDUyMi4yNGQ1NjUuMjQ4ZDUyMi4yNGQ1OTMuOTJkNTIyLjI0ZDc4OC40OGQ1MjIuMjRkODcwLjRkNDUwLjU2ZDg3MC40ZDM4OS4xMmQ4NzAuNGQzODkuMTJkODgxLjY2NGQ1MzIuNDhkMTAyNGhSM2Q1ODguOFI0ZDUzMi40OFI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4MlIxMmQ5Mi4xNlIxM2Q1ODguOFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTJpMmkyaGc6MTk0b1IxZDc2OFIyYWQ1MjIuMjRkMTAyNGQ0NDAuMzJkMTAyNGQ0NDAuMzJkODgwLjY0ZDE3NC4wOGQ4ODAuNjRkMTc0LjA4ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTY0LjIyM2QxMTMuMTUyZDU0My4yMzJkMTM0LjE0NGQ1MjIuMjRkMTYzLjg0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQxMDI0ZDQ0MC4zMmQ4MDguOTZkNDQwLjMyZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ4NzAuNGQyMzUuNTJkODA4Ljk2ZDQ0MC4zMmQ4MDguOTZkNDM1LjJkNDUwLjU1OWQzNjMuNTJkNDUwLjU1OWQzMjIuNTZkMzU4LjRkMzEyLjMyZDM1OC40ZDI3MS4zNmQ0NTAuNTU5ZDE5OS42OGQ0NTAuNTU5ZDI4MS42ZDMxNy40MzlkMzUzLjI4ZDMxNy40MzlkNDM1LjJkNDUwLjU1OWhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzA2LjU2UjdkMFI4ZDYxNC40UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxOTRSMTJkOTIuMTZSMTNkNjE0LjRSMTRhaTFpMmkyaTJpMmkyaTJpM2kzaTJpMmkxaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjgxb1IxZDc2OFIyYWQ1MTcuMTJkOTUyLjMxOWQ1MTcuMTJkOTgyLjAxNmQ0OTYuMTI4ZDEwMDMuMDA4ZDQ3NS4xMzZkMTAyNGQ0NDUuNDRkMTAyNGQzNjMuNTJkMTAyNGQzNjMuNTJkMTA5NS42OGQyOTEuODRkMTA5NS42OGQyOTEuODRkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkNTkzLjkyZDg3LjA0ZDU2NC4yMjNkMTA4LjAzMmQ1NDMuMjMyZDEyOS4wMjRkNTIyLjI0ZDE1OC43MmQ1MjIuMjRkNDQ1LjQ0ZDUyMi4yNGQ0NzUuMTM2ZDUyMi4yNGQ0OTYuMTI4ZDU0My4yMzJkNTE3LjEyZDU2NC4yMjNkNTE3LjEyZDU5My45MmQ1MTcuMTJkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDU5My45MmQxNjguOTZkNTkzLjkyZDE2OC45NmQ5NTIuMzE5ZDI5MS44NGQ5NTIuMzE5ZDM2My41MmQ4NzkuNjE2ZDM2My41MmQ5NTIuMzE5ZDQzNS4yZDk1Mi4zMTloUjNkNjA0LjE2UjRkNTE3LjEyUjVkODcuMDRSNmQ1MDEuNzZSN2QtNzEuNjhSOGQ0MTQuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTgxUjEyZDg3LjA0UjEzZDYwNC4xNlIxNGFpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkyaTJpMmhnOjE5M29SMWQ3NjhSMmFkNTIyLjI0ZDEwMjRkNDQwLjMyZDEwMjRkNDQwLjMyZDg4MC42NGQxNzQuMDhkODgwLjY0ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTkzLjkyZDkyLjE2ZDU2NC4yMjNkMTEzLjE1MmQ1NDMuMjMyZDEzNC4xNDRkNTIyLjI0ZDE2My44NGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkMTAyNGQ0NDAuMzJkODA4Ljk2ZDQ0MC4zMmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkODcwLjRkMjM1LjUyZDgwOC45NmQ0NDAuMzJkODA4Ljk2ZDQ0MC4zMmQzMDcuMTk5ZDMzNy45MmQ0NTAuNTU5ZDI2Ni4yNGQ0NTAuNTU5ZDM2OC42NGQzMDcuMTk5ZDQ0MC4zMmQzMDcuMTk5aFIzZDYxNC40UjRkNTIyLjI0UjVkOTIuMTZSNmQ3MTYuOFI3ZDBSOGQ2MjQuNjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE5M1IxMmQ5Mi4xNlIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkyaTJpMmkzaTNpMmkyaTFpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjgwb1IxZDc2OFIyYWQ1MjIuMjRkODA4Ljk2ZDUyMi4yNGQ4MzcuNjMyZDUwMC43MzZkODU5LjEzNmQ0NzkuMjMyZDg4MC42NGQ0NTAuNTZkODgwLjY0ZDE3NC4wOGQ4ODAuNjRkMTc0LjA4ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkOTIuMTZkNTkzLjkyZDkyLjE2ZDUyMi4yNGQ0NTAuNTZkNTIyLjI0ZDQ3OS4yMzJkNTIyLjI0ZDUwMC43MzZkNTQzLjc0M2Q1MjIuMjRkNTY1LjI0OGQ1MjIuMjRkNTkzLjkyZDUyMi4yNGQ4MDguOTZkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmhSM2Q1OTkuMDRSNGQ1MjIuMjRSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpODBSMTJkOTIuMTZSMTNkNTk5LjA0UjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaTJoZzoxOTJvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmQzNjMuNTJkNDUwLjU1OWQyOTEuODRkNDUwLjU1OWQxODkuNDRkMzA3LjE5OWQyNjEuMTJkMzA3LjE5OWQzNjMuNTJkNDUwLjU1OWhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzE2LjhSN2QwUjhkNjI0LjY0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxOTJSMTJkOTIuMTZSMTNkNjE0LjRSMTRhaTFpMmkyaTJpMmkyaTJpM2kzaTJpMmkxaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzo3OW9SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDk1Mi4zMTlkNDM1LjJkOTUyLjMxOWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5aFIzZDYwNC4xNlI0ZDUxNy4xMlI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNzlSMTJkODcuMDRSMTNkNjA0LjE2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjE5MW9SMWQ3NjhSMmFkODEuOTJkOTUyLjMxOWQ4MS45MmQ5MjIuNjI0ZDEwMi45MTJkOTAxLjYzMmQxMjMuOTA0ZDg4MC42NGQxNTMuNmQ4ODAuNjRkMjI1LjI4ZDg4MC42NGQyMjUuMjhkODA4Ljk2ZDMwNy4yZDgwOC45NmQzMDcuMmQ4ODAuNjRkMzA3LjJkOTEwLjMzNmQyODYuMjA4ZDkzMS4zMjhkMjY1LjIxNmQ5NTIuMzE5ZDIzNS41MmQ5NTIuMzE5ZDE2My44NGQ5NTIuMzE5ZDE2My44NGQxMDk1LjY4ZDM1OC40ZDEwOTUuNjhkMzU4LjRkMTAyNGQ0NDAuMzJkMTAyNGQ0NDAuMzJkMTA5NS42OGQ0NDAuMzJkMTEyNS4zNzZkNDE5LjMyOGQxMTQ2LjM2OGQzOTguMzM2ZDExNjcuMzZkMzY4LjY0ZDExNjcuMzZkMTUzLjZkMTE2Ny4zNmQxMjMuOTA0ZDExNjcuMzZkMTAyLjkxMmQxMTQ2LjM2OGQ4MS45MmQxMTI1LjM3NmQ4MS45MmQxMDk1LjY4ZDgxLjkyZDk1Mi4zMTlkMjE1LjA0ZDY2NS41OTlkMzA3LjJkNjY1LjU5OWQzMDcuMmQ3NDcuNTJkMjE1LjA0ZDc0Ny41MmQyMTUuMDRkNjY1LjU5OWhSM2Q0NjAuOFI0ZDQ0MC4zMlI1ZDgxLjkyUjZkMzU4LjRSN2QtMTQzLjM2UjhkMjc2LjQ4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxOTFSMTJkODEuOTJSMTNkNDYwLjhSMTRhaTFpM2kzaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjc4b1IxZDc2OFIyYWQ1MjIuMjRkMTAyMi45NzZkMzc4Ljg4ZDEwMjIuOTc2ZDE4NC4zMmQ1OTguMDE2ZDE0My4zNmQ1OTguMDE2ZDE3NC4wOGQ2NDkuMjE2ZDE3NC4wOGQxMDIyLjk3NmQ5Mi4xNmQxMDIyLjk3NmQ5Mi4xNmQ1MjEuMjE2ZDIzNi41NDRkNTIxLjIxNmQ0MzAuMDhkOTQ2LjE3NmQ0NzEuMDRkOTQ2LjE3NmQ0NDAuMzJkODk0Ljk3NmQ0NDAuMzJkNTIxLjIxNmQ1MjIuMjRkNTIxLjIxNmQ1MjIuMjRkMTAyMi45NzZoUjNkNjE0LjRSNGQ1MjIuMjRSNWQ5Mi4xNlI2ZDUwMi43ODRSN2QxLjAyNFI4ZDQxMC42MjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTc4UjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE5MG9SMWQ3NjhSMmFkNjA0LjE2ZDczOC4zMDRkNDYwLjhkODgxLjY2NGQ0NjAuOGQ4OTAuODhkNTIxLjIxNmQ4OTAuODhkNTkxLjg3MmQ4MjEuMjQ4ZDYwMi4xMTJkODIxLjI0OGQ2MDIuMTEyZDEwMjRkNTI4LjM4NGQxMDI0ZDUyOC4zODRkOTUyLjMxOWQzODRkOTUyLjMxOWQzODRkODY2LjMwNGQ1MDkuOTUyZDczNy4yOGQ2MDQuMTZkNzM4LjMwNGQyNjguMjg4ZDY2NS41OTlkMjY4LjI4OGQ2OTUuMjk2ZDI0Ny4yOTZkNzE2LjI4OGQyMjYuMzA0ZDczNy4yOGQxOTYuNjA4ZDczNy4yOGQ1MS4yZDczNy4yOGQ1MS4yZDY3NS44MzlkMTc5LjJkNjc1LjgzOWQxNzkuMmQ2NTIuMjg4ZDExOC43ODRkNTkxLjg3MmQxOTEuNDg4ZDUxNy4xMmQxOTEuNDg4ZDUxMmQ1MS4yZDUxMmQ1MS4yZDQ1MC41NTlkMjY4LjI4OGQ0NTAuNTU5ZDI2OC4yODhkNTE4LjE0NGQxOTQuNTZkNTkxLjg3MmQyNjguMjg4ZDU5My45MmQyNjguMjg4ZDY2NS41OTlkNDcwLjAxNmQ0NTAuNTU5ZDIxOC4xMTJkMTAyNGQxNDIuMzM2ZDEwMjRkMzk3LjMxMmQ0NTAuNTU5ZDQ3MC4wMTZkNDUwLjU1OWhSM2Q2NTUuMzZSNGQ2MDQuMTZSNWQ1MS4yUjZkNTczLjQ0UjdkMFI4ZDUyMi4yNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTkwUjEyZDUxLjJSMTNkNjU1LjM2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpMWkyaTJpMmkyaGc6NzdvUjFkNzY4UjJhZDU5My45MmQxMDIyLjk3NmQ1MTJkMTAyMi45NzZkNTEyZDY0Ni4xNDRkNTQyLjcyZDU5NC45NDRkNDk2LjY0ZDU5NC45NDRkMzcwLjY4OGQ4ODAuNjRkMzExLjI5NmQ4ODAuNjRkMTg5LjQ0ZDU5NC45NDRkMTQzLjM2ZDU5NC45NDRkMTc0LjA4ZDY0Ni4xNDRkMTc0LjA4ZDEwMjIuOTc2ZDkyLjE2ZDEwMjIuOTc2ZDkyLjE2ZDUyMi4yNGQyMzguNTkyZDUyMi4yNGQzMzkuOTY4ZDc2MS44NTZkMzUwLjIwOGQ3NjEuODU2ZDQ1MS41ODRkNTIyLjI0ZDU5My45MmQ1MjIuMjRkNTkzLjkyZDEwMjIuOTc2aFIzZDY4Ni4wOFI0ZDU5My45MlI1ZDkyLjE2UjZkNTAxLjc2UjdkMS4wMjRSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNzdSMTJkOTIuMTZSMTNkNjg2LjA4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTg5b1IxZDc2OFIyYWQ2MTkuNTJkMTAyNGQ0MDIuNDMyZDEwMjRkNDAyLjQzMmQ5MzYuOTZkNTQ3Ljg0ZDgzNi42MDhkNTQ3Ljg0ZDc5OC43MmQ0MDIuNDMyZDc5OC43MmQ0MDIuNDMyZDczNy4yOGQ1NDcuODRkNzM3LjI4ZDU3Ny41MzZkNzM3LjI4ZDU5OC41MjhkNzU4LjI3MWQ2MTkuNTJkNzc5LjI2NGQ2MTkuNTJkODA4Ljk2ZDYxOS41MmQ4NTUuMDRkNDc5LjIzMmQ5NTIuMzE5ZDQ3OS4yMzJkOTYyLjU2ZDYxOS41MmQ5NjIuNTZkNjE5LjUyZDEwMjRkMjQ4LjgzMmQ3MzcuMjhkMTc1LjEwNGQ3MzcuMjhkMTc1LjEwNGQ1MjIuMjRkMTY0Ljg2NGQ1MjIuMjRkMTA4LjU0NGQ1OTMuOTJkMzAuNzJkNTkzLjkyZDE0Ni40MzJkNDUwLjU1OWQyNDguODMyZDQ1MC41NTlkMjQ4LjgzMmQ3MzcuMjhkNDkwLjQ5NmQ0NTAuNTU5ZDIzOC41OTJkMTAyNGQxNjIuODE2ZDEwMjRkNDE3Ljc5MmQ0NTAuNTU5ZDQ5MC40OTZkNDUwLjU1OWhSM2Q2NTUuMzZSNGQ2MTkuNTJSNWQzMC43MlI2ZDU3My40NFI3ZDBSOGQ1NDIuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4OVIxMmQzMC43MlIxM2Q2NTUuMzZSMTRhaTFpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjc2b1IxZDc2OFIyYWQ0NTAuNTZkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQ5NTIuMzE5ZDM2OC42NGQ5NTIuMzE5ZDM2OC42NGQ4ODAuNjRkNDUwLjU2ZDg4MC42NGQ0NTAuNTZkMTAyNGhSM2Q0NjAuOFI0ZDQ1MC41NlI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk3NlIxMmQ5Mi4xNlIxM2Q0NjAuOFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoxODhvUjFkNzY4UjJhZDYwNC4xNmQ3MzguMzA0ZDQ2MC44ZDg4MS42NjRkNDYwLjhkODkwLjg4ZDUyMS4yMTZkODkwLjg4ZDU5MS44NzJkODIxLjI0OGQ2MDIuMTEyZDgyMS4yNDhkNjAyLjExMmQxMDI0ZDUyOC4zODRkMTAyNGQ1MjguMzg0ZDk1Mi4zMTlkMzg0ZDk1Mi4zMTlkMzg0ZDg2Ni4zMDRkNTA5Ljk1MmQ3MzcuMjhkNjA0LjE2ZDczOC4zMDRkMjQ4LjgzMmQ3MzcuMjhkMTc1LjEwNGQ3MzcuMjhkMTc1LjEwNGQ1MjIuMjRkMTY0Ljg2NGQ1MjIuMjRkMTA4LjU0NGQ1OTMuOTJkMzAuNzJkNTkzLjkyZDE0Ni40MzJkNDUwLjU1OWQyNDguODMyZDQ1MC41NTlkMjQ4LjgzMmQ3MzcuMjhkNDkwLjQ5NmQ0NTAuNTU5ZDIzOC41OTJkMTAyNGQxNjIuODE2ZDEwMjRkNDE3Ljc5MmQ0NTAuNTU5ZDQ5MC40OTZkNDUwLjU1OWhSM2Q2NTUuMzZSNGQ2MDQuMTZSNWQzMC43MlI2ZDU3My40NFI3ZDBSOGQ1NDIuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4OFIxMmQzMC43MlIxM2Q2NTUuMzZSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6NzVvUjFkNzY4UjJhZDU0Ny44NGQ1MjIuMjRkMzIwLjUxMmQ3MzQuMjA4ZDMyMC41MTJkNzQ0LjQ0OGQ0NTAuNTZkNzQ0LjQ0OGQ0ODAuMjU2ZDc0NC40NDhkNTAxLjI0OGQ3NjUuNDRkNTIyLjI0ZDc4Ni40MzJkNTIyLjI0ZDgxNi4xMjdkNTIyLjI0ZDEwMjRkNDQwLjMyZDEwMjRkNDQwLjMyZDgwOC45NmQxNzQuMDhkODA4Ljk2ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDc5NS42NDhkNDQ2LjQ2NGQ1MjIuMjRkNTQ3Ljg0ZDUyMi4yNGhSM2Q1OTMuOTJSNGQ1NDcuODRSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNzVSMTJkOTIuMTZSMTNkNTkzLjkyUjE0YWkxaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODdvUjFkNzY4UjJhZDE3NC4wOGQ4NDQuOGQ1MS4yZDcyMi45NDRkOTIuMTZkNjcyLjc2OGQyNjYuMjRkODQ0LjhkOTIuMTZkMTAxNi44MzJkNTEuMmQ5NjUuNjMyZDE3NC4wOGQ4NDQuOGQzNzguODhkODQ0LjhkMjU2ZDcyMi45NDRkMjk2Ljk2ZDY3Mi43NjhkNDcxLjA0ZDg0NC44ZDI5Ni45NmQxMDE2LjgzMmQyNTZkOTY1LjYzMmQzNzguODhkODQ0LjhoUjNkNTIyLjI0UjRkNDcxLjA0UjVkNTEuMlI2ZDM1MS4yMzJSN2Q3LjE2OFI4ZDMwMC4wMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4N1IxMmQ1MS4yUjEzZDUyMi4yNFIxNGFpMWkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaGc6NzRvUjFkNzY4UjJhZDQxOS44NGQ5NTIuMzE5ZDQxOS44NGQ5NzQuODQ4ZDM5OS4zNmQ5OTguNGQzNzYuODMyZDEwMjRkMzQ4LjE2ZDEwMjRkMTMzLjEyZDEwMjRkMTA0LjQ0OGQxMDI0ZDgyLjk0NGQxMDAyLjQ5NmQ2MS40NGQ5ODAuOTkyZDYxLjQ0ZDk1Mi4zMTlkNjEuNDRkODgwLjY0ZDE0My4zNmQ4ODAuNjRkMTQzLjM2ZDk1Mi4zMTlkMzM3LjkyZDk1Mi4zMTlkMzM3LjkyZDU5My45MmQ2MS40NGQ1OTMuOTJkNjEuNDRkNTIyLjI0ZDQxOS44NGQ1MjIuMjRkNDE5Ljg0ZDk1Mi4zMTloUjNkNTEyUjRkNDE5Ljg0UjVkNjEuNDRSNmQ1MDEuNzZSN2QwUjhkNDQwLjMyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk3NFIxMmQ2MS40NFIxM2Q1MTJSMTRhaTFpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTg2b1IxZDc2OFIyYWQzNTMuMjhkNzM3LjI4ZDM1My4yOGQ3NjYuOTc2ZDMzMi4yODhkNzg3Ljk2OGQzMTEuMjk2ZDgwOC45NmQyODEuNmQ4MDguOTZkMTM4LjI0ZDgwOC45NmQxMDguNTQ0ZDgwOC45NmQ4Ny41NTJkNzg3Ljk2OGQ2Ni41NmQ3NjYuOTc2ZDY2LjU2ZDczNy4yOGQ2Ni41NmQ1OTMuOTJkNjYuNTZkNTY0LjIyM2Q4Ny41NTJkNTQzLjIzMmQxMDguNTQ0ZDUyMi4yNGQxMzguMjRkNTIyLjI0ZDI4MS42ZDUyMi4yNGQzMTEuMjk2ZDUyMi4yNGQzMzIuMjg4ZDU0My4yMzJkMzUzLjI4ZDU2NC4yMjNkMzUzLjI4ZDU5My45MmQzNTMuMjhkNzM3LjI4ZDM1My4yOGQ5NTIuMzE5ZDY2LjU2ZDk1Mi4zMTlkNjYuNTZkODkwLjg4ZDM1My4yOGQ4OTAuODhkMzUzLjI4ZDk1Mi4zMTlkMjgxLjZkNzQ3LjUyZDI4MS42ZDU4My42OGQxMzguMjRkNTgzLjY4ZDEzOC4yNGQ3NDcuNTJkMjgxLjZkNzQ3LjUyaFIzZDQxOS44NFI0ZDM1My4yOFI1ZDY2LjU2UjZkNTAxLjc2UjdkNzEuNjhSOGQ0MzUuMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTg2UjEyZDY2LjU2UjEzZDQxOS44NFIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NzNvUjFkNzY4UjJhZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDEwMjRoUjNkMjY2LjI0UjRkMTc0LjA4UjVkOTIuMTZSNmQ1MDEuNzZSN2QwUjhkNDA5LjZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTczUjEyZDkyLjE2UjEzZDI2Ni4yNFIxNGFpMWkyaTJpMmkyaGc6MTg1b1IxZDc2OFIyYWQyNTkuMDcyZDczNy4yOGQxODUuMzQ0ZDczNy4yOGQxODUuMzQ0ZDUyMi4yNGQxNzUuMTA0ZDUyMi4yNGQxMTguNzg0ZDU5My45MmQ0MC45NmQ1OTMuOTJkMTU2LjY3MmQ0NTAuNTU5ZDI1OS4wNzJkNDUwLjU1OWQyNTkuMDcyZDczNy4yOGhSM2QzMjAuNTEyUjRkMjU5LjA3MlI1ZDQwLjk2UjZkNTczLjQ0UjdkMjg2LjcyUjhkNTMyLjQ4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxODVSMTJkNDAuOTZSMTNkMzIwLjUxMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzo3Mm9SMWQ3NjhSMmFkNTIyLjI0ZDEwMjRkNDQwLjMyZDEwMjRkNDQwLjMyZDgwOC45NmQxNzQuMDhkODA4Ljk2ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDc5OC43MmQyMzUuNTJkNzM3LjI4ZDQ0MC4zMmQ3MzcuMjhkNDQwLjMyZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQxMDI0aFIzZDYxNC40UjRkNTIyLjI0UjVkOTIuMTZSNmQ1MDEuNzZSN2QwUjhkNDA5LjZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTcyUjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODRvUjFkNzY4UjJhZDI2Ni4yNGQxMTY3LjM2ZDI2Ni4yNGQxMTk3LjA1NmQyNDUuMjQ4ZDEyMTguMDQ4ZDIyNC4yNTZkMTIzOS4wNGQxOTQuNTZkMTIzOS4wNGQzMC43MmQxMjM5LjA0ZDkyLjE2ZDExNzcuNmQxOTQuNTZkMTE3Ny42ZDE5NC41NmQxMTI2LjRkOTIuMTZkMTEyNi40ZDkyLjE2ZDEwNzMuMTUyZDE1My42ZDEwMTMuNzZkMTUzLjZkMTA3Ni4yMjRkMTk0LjU2ZDEwNzYuMjI0ZDIyNC4yNTZkMTA3Ni4yMjRkMjQ1LjI0OGQxMDk2LjcwNGQyNjYuMjRkMTExNy4xODRkMjY2LjI0ZDExNDYuODhkMjY2LjI0ZDExNjcuMzZoUjNkMjg2LjcyUjRkMjY2LjI0UjVkMzAuNzJSNmQxMC4yNFI3ZC0yMTUuMDRSOGQtMjAuNDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4NFIxMmQzMC43MlIxM2QyODYuNzJSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaGc6NzFvUjFkNzY4UjJhZDUxNy4xMmQxMDI0ZDQzNS4yZDEwMjRkNDM1LjJkOTYyLjU2ZDM3My43NmQxMDI0ZDE1OC43MmQxMDI0ZDEzMC4wNDhkMTAyNGQxMDguNTQ0ZDEwMDIuNDk2ZDg3LjA0ZDk4MC45OTJkODcuMDRkOTUyLjMxOWQ4Ny4wNGQ1OTMuOTJkODcuMDRkNTY1LjI0OGQxMDguNTQ0ZDU0My43NDNkMTMwLjA0OGQ1MjIuMjRkMTU4LjcyZDUyMi4yNGQ1MTcuMTJkNTIyLjI0ZDUxNy4xMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDgwOC45NmQzMDIuMDhkODA4Ljk2ZDM3My43NmQ3MzcuMjhkNTE3LjEyZDczNy4yOGQ1MTcuMTJkMTAyNGhSM2Q1ODMuNjhSNGQ1MTcuMTJSNWQ4Ny4wNFI2ZDUwMS43NlI3ZDBSOGQ0MTQuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTcxUjEyZDg3LjA0UjEzZDU4My42OFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTgzb1IxZDc2OFIyYWQxNzQuMDhkODE5LjJkODEuOTJkODE5LjJkODEuOTJkNzM3LjI4ZDE3NC4wOGQ3MzcuMjhkMTc0LjA4ZDgxOS4yaFIzZDI1NlI0ZDE3NC4wOFI1ZDgxLjkyUjZkMjg2LjcyUjdkMjA0LjhSOGQyMDQuOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTgzUjEyZDgxLjkyUjEzZDI1NlIxNGFpMWkyaTJpMmkyaGc6NzBvUjFkNzY4UjJhZDQ1MC41NmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NS41OTlkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDUwLjU2ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ4NzAuNGQyMzUuNTJkODA4Ljk2ZDQ1MC41NmQ4MDguOTZkNDUwLjU2ZDg4MC42NGhSM2Q1MDEuNzZSNGQ0NTAuNTZSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNzBSMTJkOTIuMTZSMTNkNTAxLjc2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4Mm9SMWQ3NjhSMmFkNTAxLjc2ZDUyMi4yNGQ0NDAuMzJkNTgzLjY4ZDQ0MC4zMmQxMTE2LjE2ZDM3OC44OGQxMTc3LjZkMzc4Ljg4ZDU4My42OGQyODYuNzJkNTgzLjY4ZDI4Ni43MmQxMTE2LjE2ZDIyNS4yOGQxMTc3LjZkMjI1LjI4ZDg4MC42NGQxNzQuMDhkODgwLjY0ZDE0NC4zODRkODgwLjY0ZDEyMy4zOTJkODU5LjY0OGQxMDIuNGQ4MzguNjU2ZDEwMi40ZDgwOC45NmQxMDIuNGQ1OTMuOTJkMTAyLjRkNTY0LjIyM2QxMjMuMzkyZDU0My4yMzJkMTQ0LjM4NGQ1MjIuMjRkMTc0LjA4ZDUyMi4yNGQ1MDEuNzZkNTIyLjI0aFIzZDU2My4yUjRkNTAxLjc2UjVkMTAyLjRSNmQ1MDEuNzZSN2QtMTUzLjZSOGQzOTkuMzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4MlIxMmQxMDIuNFIxM2Q1NjMuMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmhnOjY5b1IxZDc2OFIyYWQ0NTAuNTZkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NS41OTlkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDUwLjU2ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ3OTguNzJkMjM1LjUyZDczNy4yOGQ0NTAuNTZkNzM3LjI4ZDQ1MC41NmQ4MDguOTZkMTc0LjA4ZDgwOC45NmQxNzQuMDhkOTUyLjMxOWQ0NTAuNTZkOTUyLjMxOWQ0NTAuNTZkMTAyNGhSM2Q1MTJSNGQ0NTAuNTZSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjlSMTJkOTIuMTZSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODFvUjFkNzY4UjJhZDQ0MC4zMmQxMDI0ZDM2OC42NGQxMDI0ZDM2OC42NGQ5NzIuOGQzMTcuNDRkMTAyNGQxNTMuNmQxMDI0ZDE1My42ZDEyMzkuMDRkODEuOTJkMTIzOS4wNGQ4MS45MmQ2NjUuNTk5ZDE1My42ZDY2NS41OTlkMTUzLjZkOTYyLjU2ZDM2OC42NGQ5NjIuNTZkMzY4LjY0ZDY2NS41OTlkNDQwLjMyZDY2NS41OTlkNDQwLjMyZDEwMjRoUjNkNTEyUjRkNDQwLjMyUjVkODEuOTJSNmQzNTguNFI3ZC0yMTUuMDRSOGQyNzYuNDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4MVIxMmQ4MS45MlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjY4b1IxZDc2OFIyYWQ1MjIuMjRkOTUyLjMxOWQ1MjIuMjRkOTgwLjk5MmQ1MDAuNzM2ZDEwMDIuNDk2ZDQ3OS4yMzJkMTAyNGQ0NTAuNTZkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NS41OTlkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDc5LjIzMmQ1MjIuMjRkNTAwLjczNmQ1NDMuNzQzZDUyMi4yNGQ1NjUuMjQ4ZDUyMi4yNGQ1OTMuOTJkNTIyLjI0ZDk1Mi4zMTlkNDQwLjMyZDk1Mi4zMTlkNDQwLjMyZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQxMDEzLjc2ZDIzNS41MmQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5aFIzZDYwOS4yOFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk2OFIxMmQ5Mi4xNlIxM2Q2MDkuMjhSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmkyaGc6MTgwb1IxZDc2OFIyYWQxNjMuODRkNDUwLjU1OWQ2MS40NGQ1OTMuOTJkLTEwLjI0ZDU5My45MmQ5Mi4xNmQ0NTAuNTU5ZDE2My44NGQ0NTAuNTU5aFIzZDE1My42UjRkMTYzLjg0UjVkLTEwLjI0UjZkNTczLjQ0UjdkNDMwLjA4UjhkNTgzLjY4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxODBSMTJkLTEwLjI0UjEzZDE1My42UjE0YWkxaTJpMmkyaTJoZzo2N29SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDY2NS41OTlkNDM1LjJkNjY1LjU5OWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDg4MC42NGQ1MTcuMTJkODgwLjY0ZDUxNy4xMmQ5NTIuMzE5aFIzZDU3OC41NlI0ZDUxNy4xMlI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjdSMTJkODcuMDRSMTNkNTc4LjU2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmhnOjE3OW9SMWQ3NjhSMmFkMjczLjQwOGQ2NjUuNTk5ZDI3My40MDhkNjk1LjI5NmQyNTIuNDE2ZDcxNi4yODhkMjMxLjQyNGQ3MzcuMjhkMjAxLjcyOGQ3MzcuMjhkNTYuMzJkNzM3LjI4ZDU2LjMyZDY3NS44MzlkMTg0LjMyZDY3NS44MzlkMTg0LjMyZDY1Mi4yODhkMTIzLjkwNGQ1OTEuODcyZDE5Ni42MDhkNTE3LjEyZDE5Ni42MDhkNTEyZDU2LjMyZDUxMmQ1Ni4zMmQ0NTAuNTU5ZDI3My40MDhkNDUwLjU1OWQyNzMuNDA4ZDUxOC4xNDRkMTk5LjY4ZDU5MS44NzJkMjczLjQwOGQ1OTMuOTJkMjczLjQwOGQ2NjUuNTk5aFIzZDMyOS43MjhSNGQyNzMuNDA4UjVkNTYuMzJSNmQ1NzMuNDRSN2QyODYuNzJSOGQ1MTcuMTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE3OVIxMmQ1Ni4zMlIxM2QzMjkuNzI4UjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaGc6NjZvUjFkNzY4UjJhZDUyMi4yNGQ5NTIuMzE5ZDUyMi4yNGQ5ODIuMDE2ZDUwMS4yNDhkMTAwMy4wMDhkNDgwLjI1NmQxMDI0ZDQ1MC41NmQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNjY1LjU5OWQxNjMuODRkNTkzLjkyZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1MjIuMjRkMzc4Ljg4ZDUyMi4yNGQ0MDguNTc2ZDUyMi4yNGQ0MjkuNTY4ZDU0My4yMzJkNDUwLjU2ZDU2NC4yMjNkNDUwLjU2ZDU5My45MmQ0NTAuNTZkNzM3LjI4ZDQ1Mi42MDhkNzM3LjI4ZDQ4Mi4zMDRkNzM3LjI4ZDUwMi4yNzJkNzU4LjI3MWQ1MjIuMjRkNzc5LjI2NGQ1MjIuMjRkODA4Ljk2ZDUyMi4yNGQ5NTIuMzE5ZDM2OC42NGQ3MzcuMjhkMzY4LjY0ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ3OTguNzJkMjM1LjUyZDczNy4yOGQzNjguNjRkNzM3LjI4ZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ4MDguOTZkMTc0LjA4ZDgwOC45NmQxNzQuMDhkOTUyLjMxOWQ0NDAuMzJkOTUyLjMxOWhSM2Q1OTMuOTJSNGQ1MjIuMjRSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjZSMTJkOTIuMTZSMTNkNTkzLjkyUjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTNpM2kyaTFpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjE3OG9SMWQ3NjhSMmFkMjczLjQwOGQ3MzcuMjhkNTYuMzJkNzM3LjI4ZDU2LjMyZDY1MC4yNGQyMDEuNzI4ZDU0OS44ODdkMjAxLjcyOGQ1MTJkNTYuMzJkNTEyZDU2LjMyZDQ1MC41NTlkMjAxLjcyOGQ0NTAuNTU5ZDIzMS40MjRkNDUwLjU1OWQyNTIuNDE2ZDQ3MS41NTJkMjczLjQwOGQ0OTIuNTQ0ZDI3My40MDhkNTIyLjI0ZDI3My40MDhkNTY4LjMxOWQxMzMuMTJkNjY1LjU5OWQxMzMuMTJkNjc1LjgzOWQyNzMuNDA4ZDY3NS44MzlkMjczLjQwOGQ3MzcuMjhoUjNkMzI5LjcyOFI0ZDI3My40MDhSNWQ1Ni4zMlI2ZDU3My40NFI3ZDI4Ni43MlI4ZDUxNy4xMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTc4UjEyZDU2LjMyUjEzZDMyOS43MjhSMTRhaTFpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaGc6NjVvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk2NVIxMmQ5Mi4xNlIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkyaTJpMmkzaTNpMmkyaTFpMmkyaTJpMmkyaGc6MTc3b1IxZDc2OFIyYWQ0NDUuNDRkMTAyMi45NzZkODcuMDRkMTAyMi45NzZkODcuMDRkOTUxLjI5NmQ0NDUuNDRkOTUxLjI5NmQ0NDUuNDRkMTAyMi45NzZkNDQ1LjQ0ZDgwOC45NmQzMDIuMDhkODA4Ljk2ZDMwMi4wOGQ5NTIuMzE5ZDIzMC40ZDk1Mi4zMTlkMjMwLjRkODA4Ljk2ZDg3LjA0ZDgwOC45NmQ4Ny4wNGQ3MzcuMjhkMjMwLjRkNzM3LjI4ZDIzMC40ZDU5My45MmQzMDIuMDhkNTkzLjkyZDMwMi4wOGQ3MzcuMjhkNDQ1LjQ0ZDczNy4yOGQ0NDUuNDRkODA4Ljk2aFIzZDUzMi40OFI0ZDQ0NS40NFI1ZDg3LjA0UjZkNDMwLjA4UjdkMS4wMjRSOGQzNDMuMDRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE3N1IxMmQ4Ny4wNFIxM2Q1MzIuNDhSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6NjRvUjFkNzY4UjJhZDcxNi44ZDk1Mi4zMTlkNzE2LjhkOTgyLjAxNmQ2OTUuODA4ZDEwMDMuMDA4ZDY3NC44MTZkMTAyNGQ2NDUuMTJkMTAyNGQ1MDIuNzg0ZDEwMjRkNDc3LjE4NGQxMDI0ZDQ2MC44ZDEwMDguNjRkNDQ0LjQxNmQ5OTMuMjhkNDQzLjM5MmQ5NjguNzA0ZDM2OC42NGQxMDI0ZDI1NmQxMDI0ZDIyOS4zNzZkMTAyNGQyMTIuOTkyZDEwMDcuNjE2ZDE5Ni42MDhkOTkxLjIzMmQxOTYuNjA4ZDk2NS42MzJkMTk2LjYwOGQ5NTcuNDRkMTk3LjYzMmQ5NTIuMzE5ZDIxMS45NjhkODgwLjY0ZDIxOC4xMTJkODUwLjk0NGQyNDMuMmQ4MjkuOTUyZDI2OC4yODhkODA4Ljk2ZDI5Ny45ODRkODA4Ljk2ZDQ3Mi4wNjRkODA4Ljk2ZDM5OC4zMzZkODcwLjRkMjg1LjY5NmQ4NzAuNGQyNjcuMjY0ZDk2Mi41NmQ0NDMuMzkyZDk2Mi41NmQ0NDMuMzkyZDk1NS4zOTJkNDQ0LjQxNmQ5NTIuMzE5ZDQ0Ny40ODhkOTM2Ljk2ZDQ4Ny40MjRkNzI3LjA0ZDIzMS40MjRkNzI3LjA0ZDMwNS4xNTJkNjY1LjU5OWQ0OTkuNzEyZDY2NS41OTlkNTI1LjMxMmQ2NjUuNTk5ZDU0MS42OTZkNjgxLjk4M2Q1NTguMDhkNjk4LjM2N2Q1NTguMDhkNzIzLjk2OGQ1NTguMDhkNzMyLjE2ZDU1Ny4wNTZkNzM3LjI4ZDUxNC4wNDhkOTYyLjU2ZDY1NS4zNmQ5NjIuNTZkNjU1LjM2ZDUyMi4yNGQxMTIuNjRkNTIyLjI0ZDExMi42NGQxMTY3LjM2ZDcwNS41MzZkMTE2Ny4zNmQ2MjIuNTkyZDEyMjguOGQxMzMuMTJkMTIyOC44ZDExNy43NmQxMjI4LjhkMTAyLjkxMmQxMjIzLjE2OGQ4OC4wNjRkMTIxNy41MzZkNzYuOGQxMjA3LjI5NmQ2NS41MzZkMTE5Ny4wNTZkNTguMzY4ZDExODQuMjU2ZDUxLjJkMTE3MS40NTZkNTEuMmQxMTU3LjEyZDUxLjJkNTMyLjQ4ZDUxLjJkNTAyLjc4NGQ3Mi4xOTJkNDgxLjc5MmQ5My4xODRkNDYwLjc5OWQxMjIuODhkNDYwLjc5OWQ2NDUuMTJkNDYwLjc5OWQ2NzQuODE2ZDQ2MC43OTlkNjk1LjgwOGQ0ODEuNzkyZDcxNi44ZDUwMi43ODRkNzE2LjhkNTMyLjQ4ZDcxNi44ZDk1Mi4zMTloUjNkNzY4UjRkNzE2LjhSNWQ1MS4yUjZkNTYzLjJSN2QtMjA0LjhSOGQ1MTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTY0UjEyZDUxLjJSMTNkNzY4UjE0YWkxaTNpM2kyaTNpM2kyaTJpM2kzaTNpMmkzaTNpMmkyaTJpMmkyaTNpMmkyaTJpMmkyaTNpM2kzaTJpMmkyaTJpMmkyaTJpMmkzaTNpM2kzaTJpM2kzaTJpM2kzaTJoZzoxNzZvUjFkNzY4UjJhZDI5Ni45NmQ1OTMuOTJkMjk2Ljk2ZDYyMy42MTZkMjc1Ljk2OGQ2NDQuNjA4ZDI1NC45NzZkNjY1LjU5OWQyMjUuMjhkNjY1LjU5OWQxNTMuNmQ2NjUuNTk5ZDEyMy45MDRkNjY1LjU5OWQxMDIuOTEyZDY0NC42MDhkODEuOTJkNjIzLjYxNmQ4MS45MmQ1OTMuOTJkODEuOTJkNTIyLjI0ZDgxLjkyZDQ5Mi41NDRkMTAyLjkxMmQ0NzEuNTUyZDEyMy45MDRkNDUwLjU1OWQxNTMuNmQ0NTAuNTU5ZDIyNS4yOGQ0NTAuNTU5ZDI1NC45NzZkNDUwLjU1OWQyNzUuOTY4ZDQ3MS41NTJkMjk2Ljk2ZDQ5Mi41NDRkMjk2Ljk2ZDUyMi4yNGQyOTYuOTZkNTkzLjkyZDIzNS41MmQ2MDQuMTZkMjM1LjUyZDUxMmQxNDMuMzZkNTEyZDE0My4zNmQ2MDQuMTZkMjM1LjUyZDYwNC4xNmhSM2QzNzguODhSNGQyOTYuOTZSNWQ4MS45MlI2ZDU3My40NFI3ZDM1OC40UjhkNDkxLjUyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNzZSMTJkODEuOTJSMTNkMzc4Ljg4UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjYzb1IxZDc2OFIyYWQ0NDAuMzJkNzM3LjI4ZDQ0MC4zMmQ3NjYuOTc2ZDQxOS4zMjhkNzg3Ljk2OGQzOTguMzM2ZDgwOC45NmQzNjguNjRkODA4Ljk2ZDI5Ni45NmQ4MDguOTZkMjk2Ljk2ZDg4MC42NGQyMTUuMDRkODgwLjY0ZDIxNS4wNGQ4MDguOTZkMjE1LjA0ZDc3OS4yNjRkMjM2LjAzMmQ3NTguMjcxZDI1Ny4wMjRkNzM3LjI4ZDI4Ni43MmQ3MzcuMjhkMzU4LjRkNzM3LjI4ZDM1OC40ZDU5My45MmQxNjMuODRkNTkzLjkyZDE2My44NGQ2NjUuNTk5ZDgxLjkyZDY2NS41OTlkODEuOTJkNTkzLjkyZDgxLjkyZDU2NC4yMjNkMTAyLjkxMmQ1NDMuMjMyZDEyMy45MDRkNTIyLjI0ZDE1My42ZDUyMi4yNGQzNjguNjRkNTIyLjI0ZDM5OC4zMzZkNTIyLjI0ZDQxOS4zMjhkNTQzLjIzMmQ0NDAuMzJkNTY0LjIyM2Q0NDAuMzJkNTkzLjkyZDQ0MC4zMmQ3MzcuMjhkMzA3LjJkMTAyNGQyMTUuMDRkMTAyNGQyMTUuMDRkOTQyLjA4ZDMwNy4yZDk0Mi4wOGQzMDcuMmQxMDI0aFIzZDUyMi4yNFI0ZDQ0MC4zMlI1ZDgxLjkyUjZkNTAxLjc2UjdkMFI4ZDQxOS44NFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjNSMTJkODEuOTJSMTNkNTIyLjI0UjE0YWkxaTNpM2kyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJoZzoxNzVvUjFkNzY4UjJhZDIxNS4wNGQ1OTMuOTJkMzAuNzJkNTkzLjkyZDMwLjcyZDUyMi4yNGQyMTUuMDRkNTIyLjI0ZDIxNS4wNGQ1OTMuOTJoUjNkMjQ1Ljc2UjRkMjE1LjA0UjVkMzAuNzJSNmQ1MDEuNzZSN2Q0MzAuMDhSOGQ0NzEuMDRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE3NVIxMmQzMC43MlIxM2QyNDUuNzZSMTRhaTFpMmkyaTJpMmhnOjYyb1IxZDc2OFIyYWQyNTZkODExLjAwOGQ1MS4yZDY0Ni4xNDRkMTAxLjM3NmQ1OTUuOTY4ZDM1OC40ZDgxMS4wMDhkMTAxLjM3NmQxMDE2LjgzMmQ1MS4yZDk2Ni42NTZkMjU2ZDgxMS4wMDhoUjNkNDcxLjA0UjRkMzU4LjRSNWQ1MS4yUjZkNDI4LjAzMlI3ZDcuMTY4UjhkMzc2LjgzMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjJSMTJkNTEuMlIxM2Q0NzEuMDRSMTRhaTFpMmkyaTJpMmkyaTJoZzoxNzRvUjFkNzY4UjJhZDY2NS42ZDgwOC45NmQ2NjUuNmQ4MzguNjU2ZDY0NC42MDhkODU5LjY0OGQ2MjMuNjE2ZDg4MC42NGQ1OTMuOTJkODgwLjY0ZDE4NC4zMmQ4ODAuNjRkMTY4Ljk2ZDg4MC42NGQxNTQuMTEyZDg3NS4wMDhkMTM5LjI2NGQ4NjkuMzc2ZDEyOGQ4NTkuMTM2ZDExNi43MzZkODQ4Ljg5NmQxMDkuNTY4ZDgzNi4wOTZkMTAyLjRkODIzLjI5NmQxMDIuNGQ4MDguOTZkMTAyLjRkMzc4Ljg4ZDEwMi40ZDM0OS4xODNkMTIzLjM5MmQzMjguMTkyZDE0NC4zODRkMzA3LjE5OWQxNzQuMDhkMzA3LjE5OWQ1OTMuOTJkMzA3LjE5OWQ2MjMuNjE2ZDMwNy4xOTlkNjQ0LjYwOGQzMjguMTkyZDY2NS42ZDM0OS4xODNkNjY1LjZkMzc4Ljg4ZDY2NS42ZDgwOC45NmQ2MDQuMTZkODE5LjJkNjA0LjE2ZDM2OC42NGQxNjMuODRkMzY4LjY0ZDE2My44NGQ4MTkuMmQ2MDQuMTZkODE5LjJkNTM0LjUyOGQ3MzcuMjhkNDUwLjU2ZDczNy4yOGQzMTcuNDRkNjA0LjE2ZDMxNy40NGQ3MzcuMjhkMjQ1Ljc2ZDczNy4yOGQyNDUuNzZkNTcyLjQxNWQzMDcuMmQ1MTJkMjQ1Ljc2ZDUxMmQyNDUuNzZkNDUwLjU1OWQ0NjAuOGQ0NTAuNTU5ZDQ4OS40NzJkNDUwLjU1OWQ1MTAuOTc2ZDQ3Mi4wNjNkNTMyLjQ4ZDQ5My41NjhkNTMyLjQ4ZDUyMi4yNGQ1MzIuNDhkNTgzLjY4ZDUzMi40OGQ2MTguNDk2ZDUwNy45MDRkNjM2LjkyOGQ0ODcuNDI0ZDY1MS4yNjRkNDYwLjhkNjUxLjI2NGQ0NTIuNjA4ZDY1MS4yNjRkNDUyLjYwOGQ2NjEuNTA0ZDUzNC41MjhkNzM3LjI4ZDQ2MC44ZDYwNC4xNmQ0NjAuOGQ1MTJkMzE3LjQ0ZDUxMmQzMTcuNDRkNjA0LjE2ZDQ2MC44ZDYwNC4xNmhSM2Q3NjhSNGQ2NjUuNlI1ZDEwMi40UjZkNzE2LjhSN2QxNDMuMzZSOGQ2MTQuNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTc0UjEyZDEwMi40UjEzZDc2OFIxNGFpMWkzaTNpMmkzaTNpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTFpMmkyaTJpMmhnOjYxb1IxZDc2OFIyYWQ0NDUuNDRkODA4Ljk2ZDg3LjA0ZDgwOC45NmQ4Ny4wNGQ3MzcuMjhkNDQ1LjQ0ZDczNy4yOGQ0NDUuNDRkODA4Ljk2ZDQ0NS40NGQ5NTIuMzE5ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkODgwLjY0ZDQ0NS40NGQ4ODAuNjRkNDQ1LjQ0ZDk1Mi4zMTloUjNkNTMyLjQ4UjRkNDQ1LjQ0UjVkODcuMDRSNmQyODYuNzJSN2Q3MS42OFI4ZDE5OS42OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjFSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTczb1IxZDc2OFIyYWQyNjYuMjRkODA4Ljk2ZDE5NC41NmQ4ODAuNjRkMjAuNDhkODgwLjY0ZDkyLjE2ZDgwOC45NmQyNjYuMjRkODA4Ljk2aFIzZDI4Ni43MlI0ZDI2Ni4yNFI1ZDIwLjQ4UjZkMjE1LjA0UjdkMTQzLjM2UjhkMTk0LjU2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNzNSMTJkMjAuNDhSMTNkMjg2LjcyUjE0YWkxaTJpMmkyaTJoZzo2MG9SMWQ3NjhSMmFkNDE5Ljg0ZDk2Ni42NTZkMzY5LjY2NGQxMDE2LjgzMmQxMTIuNjRkODExLjAwOGQzNjkuNjY0ZDU5NS45NjhkNDE5Ljg0ZDY0Ni4xNDRkMjE1LjA0ZDgxMS4wMDhkNDE5Ljg0ZDk2Ni42NTZoUjNkNTMyLjQ4UjRkNDE5Ljg0UjVkMTEyLjY0UjZkNDI4LjAzMlI3ZDcuMTY4UjhkMzE1LjM5MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjBSMTJkMTEyLjY0UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTJpMmhnOjE3Mm9SMWQ3NjhSMmFkNDQwLjMyZDk1Mi4zMTlkMzY4LjY0ZDk1Mi4zMTlkMzY4LjY0ZDgwOC45NmQ4Ny4wNGQ4MDguOTZkODcuMDRkNzM3LjI4ZDQ0MC4zMmQ3MzcuMjhkNDQwLjMyZDk1Mi4zMTloUjNkNTMyLjQ4UjRkNDQwLjMyUjVkODcuMDRSNmQyODYuNzJSN2Q3MS42OFI4ZDE5OS42OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTcyUjEyZDg3LjA0UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTJpMmhnOjU5b1IxZDc2OFIyYWQ0MjcuMDA4ZDExMDUuOTJkMzY1LjU2OGQxMTc3LjZkMzY1LjU2OGQxMDI0ZDMyNC42MDhkMTAyNGQzMjQuNjA4ZDk0Mi4wOGQzNTUuMzI4ZDk0Mi4wOGQzODUuMDI0ZDk0Mi4wOGQ0MDYuMDE2ZDk2My4wNzJkNDI3LjAwOGQ5ODQuMDY0ZDQyNy4wMDhkMTAxMy43NmQ0MjcuMDA4ZDExMDUuOTJkMTU0LjYyNGQ3NDcuNTJkNjIuNDY0ZDc0Ny41MmQ2Mi40NjRkNjY1LjU5OWQxNTQuNjI0ZDY2NS41OTlkMTU0LjYyNGQ3NDcuNTJoUjNkMjM1LjUyUjRkMTY0Ljg2NFI1ZDYyLjQ2NFI2ZDM1OC40UjdkLTE1My42UjhkMjk1LjkzNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTlSMTJkNjIuNDY0UjEzZDIzNS41MlIxNGFpMWkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaGc6MTcxb1IxZDc2OFIyYWQ0NzEuMDRkOTY1LjYzMmQ0MzAuMDhkMTAxNi44MzJkMjU2ZDg0NC44ZDQzMC4wOGQ2NzIuNzY4ZDQ3MS4wNGQ3MjIuOTQ0ZDM0OC4xNmQ4NDQuOGQ0NzEuMDRkOTY1LjYzMmQyNjYuMjRkOTY1LjYzMmQyMjUuMjhkMTAxNi44MzJkNTEuMmQ4NDQuOGQyMjUuMjhkNjcyLjc2OGQyNjYuMjRkNzIyLjk0NGQxNDMuMzZkODQ0LjhkMjY2LjI0ZDk2NS42MzJoUjNkNTIyLjI0UjRkNDcxLjA0UjVkNTEuMlI2ZDM1MS4yMzJSN2Q3LjE2OFI4ZDMwMC4wMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE3MVIxMmQ1MS4yUjEzZDUyMi4yNFIxNGFpMWkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaGc6NThvUjFkNzY4UjJhZDQyNy4wMDhkMTAyNGQzMzQuODQ4ZDEwMjRkMzM0Ljg0OGQ5NDIuMDhkNDI3LjAwOGQ5NDIuMDhkNDI3LjAwOGQxMDI0ZDE2NC44NjRkNzQ3LjUyZDcyLjcwNGQ3NDcuNTJkNzIuNzA0ZDY2NS41OTlkMTY0Ljg2NGQ2NjUuNTk5ZDE2NC44NjRkNzQ3LjUyaFIzZDIzNS41MlI0ZDE2NC44NjRSNWQ3Mi43MDRSNmQzNTguNFI3ZDBSOGQyODUuNjk2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk1OFIxMmQ3Mi43MDRSMTNkMjM1LjUyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTcwb1IxZDc2OFIyYWQzNDMuMDRkODA4Ljk2ZDI3MS4zNmQ4MDguOTZkMjcxLjM2ZDc1Ni43MzZkMjA5LjkyZDgwOC45NmQxMzMuMTJkODA4Ljk2ZDEwMy40MjRkODA4Ljk2ZDgyLjQzMmQ3ODcuOTY4ZDYxLjQ0ZDc2Ni45NzZkNjEuNDRkNzM3LjI4ZDYxLjQ0ZDcwNy41ODRkODIuNDMyZDY4Ni41OTJkMTAzLjQyNGQ2NjUuNTk5ZDEzMy4xMmQ2NjUuNTk5ZDIwOC44OTZkNjY1LjU5OWQxNDguNDhkNzI2LjAxNmQxNDguNDhkNzQ3LjUyZDI3MS4zNmQ3NDcuNTJkMjcxLjM2ZDU4My42OGQ1MS4yZDU4My42OGQxMTIuNjRkNTIyLjI0ZDI3MS4zNmQ1MjIuMjRkMzAxLjA1NmQ1MjIuMjRkMzIyLjA0OGQ1NDMuMjMyZDM0My4wNGQ1NjQuMjIzZDM0My4wNGQ1OTMuOTJkMzQzLjA0ZDgwOC45NmQzNDMuMDRkOTUyLjMxOWQ1Ni4zMmQ5NTIuMzE5ZDU2LjMyZDg5MC44OGQzNDMuMDRkODkwLjg4ZDM0My4wNGQ5NTIuMzE5aFIzZDQwOS42UjRkMzQzLjA0UjVkNTEuMlI2ZDUwMS43NlI3ZDcxLjY4UjhkNDUwLjU2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNzBSMTJkNTEuMlIxM2Q0MDkuNlIxNGFpMWkyaTJpMmkyaTNpM2kzaTNpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmhnOjU3b1IxZDc2OFIyYWQ2MS40NGQ1OTMuOTJkNjEuNDRkNTY0LjIyM2Q4Mi40MzJkNTQzLjIzMmQxMDMuNDI0ZDUyMi4yNGQxMzMuMTJkNTIyLjI0ZDM1OC40ZDUyMi4yNGQzODguMDk2ZDUyMi4yNGQ0MDkuMDg4ZDU0My4yMzJkNDMwLjA4ZDU2NC4yMjNkNDMwLjA4ZDU5My45MmQ0MzAuMDhkOTUyLjMxOWQ0MzAuMDhkOTgyLjAxNmQ0MDkuMDg4ZDEwMDMuMDA4ZDM4OC4wOTZkMTAyNGQzNTguNGQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkOTUyLjMxOWQzNDguMTZkOTUyLjMxOWQzNDguMTZkODE5LjJkMTMzLjEyZDgxOS4yZDEwMy40MjRkODE5LjJkODIuNDMyZDc5OC4yMDhkNjEuNDRkNzc3LjIxNmQ2MS40NGQ3NDcuNTJkNjEuNDRkNTkzLjkyZDE0My4zNmQ1OTMuOTJkMTQzLjM2ZDc0Ny41MmQzNDguMTZkNzQ3LjUyZDM0OC4xNmQ1OTMuOTJkMTQzLjM2ZDU5My45MmhSM2Q1MzIuNDhSNGQ0MzAuMDhSNWQ2MS40NFI2ZDUwMS43NlI3ZDBSOGQ0NDAuMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTU3UjEyZDYxLjQ0UjEzZDUzMi40OFIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmhnOjE2OW9SMWQ3NjhSMmFkODI5LjQ0ZDEwOTUuNjhkODI5LjQ0ZDExMjUuMzc2ZDgwOC40NDhkMTE0Ni4zNjhkNzg3LjQ1NmQxMTY3LjM2ZDc1Ny43NmQxMTY3LjM2ZDE4NC4zMmQxMTY3LjM2ZDE2OC45NmQxMTY3LjM2ZDE1NC4xMTJkMTE2MS43MjhkMTM5LjI2NGQxMTU2LjA5NmQxMjhkMTE0NS44NTZkMTE2LjczNmQxMTM1LjYxNmQxMDkuNTY4ZDExMjIuODE2ZDEwMi40ZDExMTAuMDE2ZDEwMi40ZDEwOTUuNjhkMTAyLjRkNDUwLjU1OWQxMDIuNGQ0MjAuODY0ZDEyMy4zOTJkMzk5Ljg3MWQxNDQuMzg0ZDM3OC44OGQxNzQuMDhkMzc4Ljg4ZDc1Ny43NmQzNzguODhkNzg3LjQ1NmQzNzguODhkODA4LjQ0OGQzOTkuODcxZDgyOS40NGQ0MjAuODY0ZDgyOS40NGQ0NTAuNTU5ZDgyOS40NGQxMDk1LjY4ZDc2OGQxMTA1LjkyZDc2OGQ0NDAuMzE5ZDE2My44NGQ0NDAuMzE5ZDE2My44NGQxMTA1LjkyZDc2OGQxMTA1LjkyZDY3NS44NGQ5NTIuMzE5ZDY3NS44NGQ5ODIuMDE2ZDY1NC44NDhkMTAwMy4wMDhkNjMzLjg1NmQxMDI0ZDYwNC4xNmQxMDI0ZDMzNy45MmQxMDI0ZDMwOC4yMjRkMTAyNGQyODcuMjMyZDEwMDMuMDA4ZDI2Ni4yNGQ5ODIuMDE2ZDI2Ni4yNGQ5NTIuMzE5ZDI2Ni4yNGQ1OTMuOTJkMjY2LjI0ZDU2NC4yMjNkMjg3LjIzMmQ1NDMuMjMyZDMwOC4yMjRkNTIyLjI0ZDMzNy45MmQ1MjIuMjRkNjA0LjE2ZDUyMi4yNGQ2MzMuODU2ZDUyMi4yNGQ2NTQuODQ4ZDU0My4yMzJkNjc1Ljg0ZDU2NC4yMjNkNjc1Ljg0ZDU5My45MmQ2NzUuODRkNjY1LjU5OWQ1OTMuOTJkNjY1LjU5OWQ1OTMuOTJkNTkzLjkyZDM0OC4xNmQ1OTMuOTJkMzQ4LjE2ZDk1Mi4zMTlkNTkzLjkyZDk1Mi4zMTlkNTkzLjkyZDg4MC42NGQ2NzUuODRkODgwLjY0ZDY3NS44NGQ5NTIuMzE5aFIzZDkzMS44NFI0ZDgyOS40NFI1ZDEwMi40UjZkNjQ1LjEyUjdkLTE0My4zNlI4ZDU0Mi43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTY5UjEyZDEwMi40UjEzZDkzMS44NFIxNGFpMWkzaTNpMmkzaTNpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaGc6NTZvUjFkNzY4UjJhZDQ1NS42OGQ5NTIuMzE5ZDQ1NS42OGQ5ODIuMDE2ZDQzNC42ODhkMTAwMy4wMDhkNDEzLjY5NmQxMDI0ZDM4NGQxMDI0ZDE0OC40OGQxMDI0ZDExOC43ODRkMTAyNGQ5Ny43OTJkMTAwMy4wMDhkNzYuOGQ5ODIuMDE2ZDc2LjhkOTUyLjMxOWQ3Ni44ZDc5OC43MmQ3Ni44ZDc3My4xMmQ5My42OTZkNzU1LjcxMmQxMTAuNTkyZDczOC4zMDRkMTM4LjI0ZDczOC4zMDRkMTM4LjI0ZDU5My45MmQxMzguMjRkNTY0LjIyM2QxNTQuNjI0ZDU0My4yMzJkMTcxLjAwOGQ1MjIuMjRkMTk5LjY4ZDUyMi4yNGQzMzIuOGQ1MjIuMjRkMzYxLjQ3MmQ1MjIuMjRkMzc3Ljg1NmQ1NDMuMjMyZDM5NC4yNGQ1NjQuMjIzZDM5NC4yNGQ1OTMuOTJkMzk0LjI0ZDczOC4zMDRkNDIxLjg4OGQ3MzguMzA0ZDQzOC43ODRkNzU1LjJkNDU1LjY4ZDc3Mi4wOTZkNDU1LjY4ZDc5OC43MmQ0NTUuNjhkOTUyLjMxOWQzMjcuNjhkNzM3LjI4ZDMyNy42OGQ1OTMuOTJkMjA0LjhkNTkzLjkyZDIwNC44ZDczNy4yOGQzMjcuNjhkNzM3LjI4ZDM3My43NmQ5NTIuMzE5ZDM3My43NmQ3OTguNzJkMTU4LjcyZDc5OC43MmQxNTguNzJkOTUyLjMxOWQzNzMuNzZkOTUyLjMxOWhSM2Q1MzIuNDhSNGQ0NTUuNjhSNWQ3Ni44UjZkNTAxLjc2UjdkMFI4ZDQyNC45NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTZSMTJkNzYuOFIxM2Q1MzIuNDhSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE2OG9SMWQ3NjhSMmFkMjI1LjI4ZDU5My45MmQxNTguNzJkNTkzLjkyZDE1OC43MmQ1MTJkMjI1LjI4ZDUxMmQyMjUuMjhkNTkzLjkyZDg3LjA0ZDU5My45MmQyMC40OGQ1OTMuOTJkMjAuNDhkNTEyZDg3LjA0ZDUxMmQ4Ny4wNGQ1OTMuOTJoUjNkMjQ1Ljc2UjRkMjI1LjI4UjVkMjAuNDhSNmQ1MTJSN2Q0MzAuMDhSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE2OFIxMmQyMC40OFIxM2QyNDUuNzZSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo1NW9SMWQ3NjhSMmFkNDQ1LjQ0ZDc4OS41MDRkMjA5LjkyZDEwMjRkMTA1LjQ3MmQxMDI0ZDM2My41MmQ3NjQuOTI4ZDM2My41MmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkNjY1LjU5OWQ4Ny4wNGQ2NjUuNTk5ZDg3LjA0ZDUyMi4yNGQ0NDUuNDRkNTIyLjI0ZDQ0NS40NGQ3ODkuNTA0aFIzZDUzMi40OFI0ZDQ0NS40NFI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTVSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNjdvUjFkNzY4UjJhZDQwOS42ZDUyMi4yNGQzMzYuODk2ZDU5My45MmQxODkuNDRkNTkzLjkyZDE4OS40NGQ2MjMuNjE2ZDM2OC42NGQ4MDAuNzY4ZDM5Ni4yODhkODI4LjQxNWQzOTYuMjg4ZDg1NC4wMTZkMzk2LjI4OGQ4NjYuMzA0ZDM5NS4yNjRkODcwLjRkMzk1LjI2NGQ4NzMuOTg0ZDM5NS4yNjRkODc3LjU2OGQzOTUuMjY0ZDg3OS42MTZkMzk1LjI2NGQ5NjIuNTZkMzE5LjQ4OGQxMDQyLjQzMmQzNjcuNjE2ZDEwOTAuNTZkMzg5LjEyZDExMTIuMDY0ZDM4OS4xMmQxMTQxLjc2ZDM4OS4xMmQxMTY3LjM2ZDM4OS4xMmQxMTk3LjA1NmQzNjguNjRkMTIxOC4wNDhkMzQ4LjE2ZDEyMzkuMDRkMzE3LjQ0ZDEyMzkuMDRkOTIuMTZkMTIzOS4wNGQxNjQuODY0ZDExNjcuMzZkMzEyLjMyZDExNjcuMzZkMzEyLjMyZDExMzcuNjY0ZDEzMy4xMmQ5NjAuNTEyZDEwNS40NzJkOTMyLjg2NGQxMDUuNDcyZDkwNy4yNjRkMTA1LjQ3MmQ4OTQuOTc2ZDEwNi40OTZkODkwLjg4ZDEwNi40OTZkODg3LjI5NmQxMDYuNDk2ZDg4My43MTJkMTA2LjQ5NmQ4ODEuNjY0ZDEwNi40OTZkNzk4LjcyZDE4Mi4yNzJkNzE4Ljg0OGQxMzQuMTQ0ZDY3MC43MmQxMTIuNjRkNjQ5LjIxNmQxMTIuNjRkNjE5LjUyZDExMi42NGQ1OTMuOTJkMTEyLjY0ZDU2NC4yMjNkMTMzLjEyZDU0My4yMzJkMTUzLjZkNTIyLjI0ZDE4NC4zMmQ1MjIuMjRkNDA5LjZkNTIyLjI0ZDMxOC40NjRkMTA0MS40MDdkMzE4LjQ2NGQ4NTUuMDRkMTgzLjI5NmQ3MTkuODcyZDE4My4yOTZkOTA2LjI0ZDMxOC40NjRkMTA0MS40MDdoUjNkNTAxLjc2UjRkNDA5LjZSNWQ5Mi4xNlI2ZDUwMS43NlI3ZC0yMTUuMDRSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTY3UjEyZDkyLjE2UjEzZDUwMS43NlIxNGFpMWkyaTJpMmkyaTNpMmkzaTNpMmkyaTJpM2kyaTNpM2kyaTJpMmkyaTJpM2kyaTNpM2kyaTJpMmkzaTJpM2kzaTJpMWkyaTJpMmkyaGc6NTRvUjFkNzY4UjJhZDQ1NS42OGQ5NTIuMzE5ZDQ1NS42OGQ5ODIuMDE2ZDQzNC42ODhkMTAwMy4wMDhkNDEzLjY5NmQxMDI0ZDM4NGQxMDI0ZDE1OC43MmQxMDI0ZDEyOS4wMjRkMTAyNGQxMDguMDMyZDEwMDMuMDA4ZDg3LjA0ZDk4Mi4wMTZkODcuMDRkOTUyLjMxOWQ4Ny4wNGQ1OTMuOTJkODcuMDRkNTY0LjIyM2QxMDguMDMyZDU0My4yMzJkMTI5LjAyNGQ1MjIuMjRkMTU4LjcyZDUyMi4yNGQ0NDUuNDRkNTIyLjI0ZDQ0NS40NGQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkNzI3LjA0ZDM4NGQ3MjcuMDRkNDEzLjY5NmQ3MjcuMDRkNDM0LjY4OGQ3NDguMDMxZDQ1NS42OGQ3NjkuMDI0ZDQ1NS42OGQ3OTguNzJkNDU1LjY4ZDk1Mi4zMTlkMzczLjc2ZDk1Mi4zMTlkMzczLjc2ZDc5OC43MmQxNjguOTZkNzk4LjcyZDE2OC45NmQ5NTIuMzE5ZDM3My43NmQ5NTIuMzE5aFIzZDUzMi40OFI0ZDQ1NS42OFI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTRSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaGc6MTY2b1IxZDc2OFIyYWQxNzQuMDhkNjY1LjU5OWQxMDIuNGQ2NjUuNTk5ZDEwMi40ZDQ1MC41NTlkMTc0LjA4ZDQ1MC41NTlkMTc0LjA4ZDY2NS41OTlkMTc0LjA4ZDEwOTUuNjhkMTAyLjRkMTA5NS42OGQxMDIuNGQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTA5NS42OGhSM2QyNzYuNDhSNGQxNzQuMDhSNWQxMDIuNFI2ZDU3My40NFI3ZC03MS42OFI4ZDQ3MS4wNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTY2UjEyZDEwMi40UjEzZDI3Ni40OFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjUzb1IxZDc2OFIyYWQ0NDUuNDRkOTUyLjMxOWQ0NDUuNDRkOTgyLjAxNmQ0MjQuNDQ4ZDEwMDMuMDA4ZDQwMy40NTZkMTAyNGQzNzMuNzZkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkODgwLjY0ZDE2OC45NmQ4ODAuNjRkMTY4Ljk2ZDk1Mi4zMTlkMzYzLjUyZDk1Mi4zMTlkMzYzLjUyZDc0Ny41MmQ4Ny4wNGQ3NDcuNTJkODcuMDRkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDQ1LjQ0ZDU5My45MmQxNTguNzJkNTkzLjkyZDE1OC43MmQ2NzUuODM5ZDM3My43NmQ2NzUuODM5ZDQwMy40NTZkNjc1LjgzOWQ0MjQuNDQ4ZDY5Ni44MzJkNDQ1LjQ0ZDcxNy44MjRkNDQ1LjQ0ZDc0Ny41MmQ0NDUuNDRkOTUyLjMxOWhSM2Q1MzIuNDhSNGQ0NDUuNDRSNWQ4Ny4wNFI2ZDUwMS43NlI3ZDBSOGQ0MTQuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTUzUjEyZDg3LjA0UjEzZDUzMi40OFIxNGFpMWkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJoZzoxNjVvUjFkNzY4UjJhZDQ5MS41MmQ1MjIuMjRkMzY4LjY0ZDc0Ny41MmQ0ODEuMjhkNzQ3LjUyZDQxOS44NGQ4MDguOTZkMzIyLjU2ZDgwOC45NmQzMjIuNTZkODkwLjg4ZDQ4MS4yOGQ4OTAuODhkNDE5Ljg0ZDk1Mi4zMTlkMzIyLjU2ZDk1Mi4zMTlkMzIyLjU2ZDEwMjRkMjQwLjY0ZDEwMjRkMjQwLjY0ZDk1Mi4zMTlkODEuOTJkOTUyLjMxOWQxNDMuMzZkODkwLjg4ZDI0MC42NGQ4OTAuODhkMjQwLjY0ZDgwOC45NmQ4MS45MmQ4MDguOTZkMTQzLjM2ZDc0Ny41MmQxOTQuNTZkNzQ3LjUyZDcxLjY4ZDUyMi4yNGQxNTMuNmQ1MjIuMjRkMjc2LjQ4ZDc1Ny43NmQyODYuNzJkNzU3Ljc2ZDQwOS42ZDUyMi4yNGQ0OTEuNTJkNTIyLjI0aFIzZDUzMi40OFI0ZDQ5MS41MlI1ZDcxLjY4UjZkNTAxLjc2UjdkMFI4ZDQzMC4wOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTY1UjEyZDcxLjY4UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjUyb1IxZDc2OFIyYWQ0NTUuNjhkNTIyLjI0ZDE1OC43MmQ4MTUuMTA0ZDE1OC43MmQ4ODAuNjRkMzYzLjUyZDg4MC42NGQzNjMuNTJkNzA2LjU2ZDQ0NS40NGQ2MjQuNjRkNDQ1LjQ0ZDEwMjRkMzYzLjUyZDEwMjRkMzYzLjUyZDk1Mi4zMTlkODcuMDRkOTUyLjMxOWQ4Ny4wNGQ4MTMuMDU2ZDg3LjA0ZDgwMC43NjhkODcuNTUyZDc5My42ZDg4LjA2NGQ3ODYuNDMyZDkwLjExMmQ3ODAuOGQ5Mi4xNmQ3NzUuMTY4ZDk2LjI1NmQ3NzAuNTZkMTAwLjM1MmQ3NjUuOTUyZDEwNi40OTZkNzU4Ljc4NGQzNDAuOTkyZDUyMi4yNGQ0NTUuNjhkNTIyLjI0aFIzZDUzMi40OFI0ZDQ1NS42OFI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTJSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTNpM2kyaTJoZzoxNjRvUjFkNzY4UjJhZDQ1MC41NmQ5NDEuMDU2ZDQwMC4zODRkOTkxLjIzMmQzNDIuMDE2ZDkzNC45MTJkMzI4LjcwNGQ5NDguMjI0ZDMyMC41MTJkOTU2LjQxNWQzMTIuMzJkOTY0LjYwOGQzMDguMjI0ZDk2Ni42NTZkMjg4Ljc2OGQ5ODAuOTkyZDI2Ni4yNGQ5ODAuOTkyZDI0My43MTJkOTgwLjk5MmQyMjMuMjMyZDk2Ni42NTZkMjE5LjEzNmQ5NjQuNjA4ZDIxMC45NDRkOTU2LjQxNWQyMDIuNzUyZDk0OC4yMjRkMTg5LjQ0ZDkzNC45MTJkMTMyLjA5NmQ5OTEuMjMyZDgxLjkyZDk0MS4wNTZkMTM5LjI2NGQ4ODQuNzM2ZDEwOS41NjhkODU1LjA0ZDEwNi40OTZkODUwLjk0NGQ5Mi4xNmQ4MzEuNDg4ZDkyLjE2ZDgwOC45NmQ5Mi4xNmQ3ODYuNDMyZDEwNi40OTZkNzY1Ljk1MmQxMDguNTQ0ZDc2Mi44OGQxMTYuMjI0ZDc1NC42ODhkMTIzLjkwNGQ3NDYuNDk2ZDEzOC4yNGQ3MzMuMTg0ZDgxLjkyZDY3Ni44NjRkMTMyLjA5NmQ2MjYuNjg4ZDE4OS40NGQ2ODEuOTgzZDIwMi43NTJkNjY4LjY3MmQyMTAuOTQ0ZDY2MC40OGQyMTkuMTM2ZDY1Mi4yODhkMjIzLjIzMmQ2NTAuMjRkMjQyLjY4OGQ2MzUuOTA0ZDI2NS4yMTZkNjM1LjkwNGQyODguNzY4ZDYzNS45MDRkMzA5LjI0OGQ2NTAuMjRkMzEzLjM0NGQ2NTMuMzEyZDMyMS41MzZkNjYxLjUwNGQzMjkuNzI4ZDY2OS42OTVkMzQzLjA0ZDY4My4wMDhkNDAwLjM4NGQ2MjYuNjg4ZDQ1MC41NmQ2NzYuODY0ZDM5My4yMTZkNzMzLjE4NGQ0MDcuNTUyZDc0Ni40OTZkNDE1LjIzMmQ3NTQuNjg4ZDQyMi45MTJkNzYyLjg4ZDQyNC45NmQ3NjUuOTUyZDQzOS4yOTZkNzg2LjQzMmQ0MzkuMjk2ZDgwNy45MzZkNDM5LjI5NmQ4MzAuNDY0ZDQyNC45NmQ4NTAuOTQ0ZDQyMi45MTJkODU0LjAxNmQ0MTUuMjMyZDg2Mi4yMDhkNDA3LjU1MmQ4NzAuNGQzOTMuMjE2ZDg4My43MTJkNDUwLjU2ZDk0MS4wNTZkMzgwLjkyOGQ4MDguOTZkMjY1LjIxNmQ2OTMuMjQ4ZDE1MC41MjhkODA4Ljk2ZDI2NS4yMTZkOTIzLjY0OGQzODAuOTI4ZDgwOC45NmhSM2Q1MzIuNDhSNGQ0NTAuNTZSNWQ4MS45MlI2ZDM5Ny4zMTJSN2QzMi43NjhSOGQzMTUuMzkyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNjRSMTJkODEuOTJSMTNkNTMyLjQ4UjE0YWkxaTJpMmkzaTNpM2kzaTNpM2kyaTJpMmkzaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTNpMmkxaTJpMmkyaTJoZzo1MW9SMWQ3NjhSMmFkNDQ1LjQ0ZDk1Mi4zMTlkNDQ1LjQ0ZDk4Mi4wMTZkNDI0LjQ0OGQxMDAzLjAwOGQ0MDMuNDU2ZDEwMjRkMzczLjc2ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDg4MC42NGQxNjguOTZkODgwLjY0ZDE2OC45NmQ5NTIuMzE5ZDM2My41MmQ5NTIuMzE5ZDM2My41MmQ4MDguOTZkMjMwLjRkODA4Ljk2ZDIzMC40ZDc0OS41NjhkMzczLjc2ZDYwNC4xNmQzNzMuNzZkNTkzLjkyZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1MjIuMjRkNDQ1LjQ0ZDUyMi4yNGQ0NDUuNDRkNjI1LjY2NGQzMzMuODI0ZDczNy4yOGQzMzMuODI0ZDc0Ny41MmQzMzMuODI0ZDc0Ni40OTZkMzQ1LjA4OGQ3NDYuNDk2ZDM1MC4yMDhkNzQ2LjQ5NmQzNTcuMzc2ZDc0Ni40OTZkMzY0LjU0NGQ3NDYuNDk2ZDM3My43NmQ3NDcuNTJkNDAzLjQ1NmQ3NDguNTQ0ZDQyNC40NDhkNzY5LjUzNmQ0NDUuNDRkNzkwLjUyOGQ0NDUuNDRkODE5LjJkNDQ1LjQ0ZDk1Mi4zMTloUjNkNTMyLjQ4UjRkNDQ1LjQ0UjVkODcuMDRSNmQ1MDEuNzZSN2QwUjhkNDE0LjcyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk1MVIxMmQ4Ny4wNFIxM2Q1MzIuNDhSMTRhaTFpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kzaTNpM2kyaGc6MTYzb1IxZDc2OFIyYWQ0NjAuOGQ5NTIuMzE5ZDQ2MC44ZDk4Mi4wMTZkNDM5LjgwOGQxMDAzLjAwOGQ0MTguODE2ZDEwMjRkMzg5LjEyZDEwMjRkMTAyLjRkMTAyNGQxMDIuNGQ5NTIuMzE5ZDE3NC4wOGQ5NTIuMzE5ZDE3NC4wOGQ4MDguOTZkMTAyLjRkODA4Ljk2ZDEwMi40ZDc0Ny41MmQxNTcuNjk2ZDc0Ny41MmQxNTcuNjk2ZDczNy4yOGQxMjhkNzA4LjYwOGQxMDIuNGQ2ODMuMDA4ZDEwMi40ZDY1NS4zNmQxMDIuNGQ1OTMuOTJkMTAyLjRkNTY0LjIyM2QxMjMuMzkyZDU0My4yMzJkMTQ0LjM4NGQ1MjIuMjRkMTc0LjA4ZDUyMi4yNGQzODkuMTJkNTIyLjI0ZDQxOC44MTZkNTIyLjI0ZDQzOS44MDhkNTQzLjIzMmQ0NjAuOGQ1NjQuMjIzZDQ2MC44ZDU5My45MmQ0NjAuOGQ2NjUuNTk5ZDM3OC44OGQ2NjUuNTk5ZDM3OC44OGQ1OTMuOTJkMTg0LjMyZDU5My45MmQxODQuMzJkNjc1LjgzOWQyNTZkNzQ3LjUyZDM0OC4xNmQ3NDcuNTJkMjg1LjY5NmQ4MDguOTZkMjU2ZDgwOC45NmQyNTZkOTUyLjMxOWQzNzguODhkOTUyLjMxOWQzNzguODhkODgwLjY0ZDQ2MC44ZDg4MC42NGQ0NjAuOGQ5NTIuMzE5aFIzZDUzMi40OFI0ZDQ2MC44UjVkMTAyLjRSNmQ1MDEuNzZSN2QwUjhkMzk5LjM2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNjNSMTJkMTAyLjRSMTNkNTMyLjQ4UjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjUwb1IxZDc2OFIyYWQ0NDUuNDRkMTAyNGQ4Ny4wNGQxMDI0ZDg3LjA0ZDkxNi40OGQzNjMuNTJkNzEzLjcyOGQzNjMuNTJkNTkzLjkyZDE2OC45NmQ1OTMuOTJkMTY4Ljk2ZDY2NS41OTlkODcuMDRkNjY1LjU5OWQ4Ny4wNGQ1OTMuOTJkODcuMDRkNTY0LjIyM2QxMDguMDMyZDU0My4yMzJkMTI5LjAyNGQ1MjIuMjRkMTU4LjcyZDUyMi4yNGQzNzMuNzZkNTIyLjI0ZDQwMy40NTZkNTIyLjI0ZDQyNC40NDhkNTQzLjIzMmQ0NDUuNDRkNTY0LjIyM2Q0NDUuNDRkNTkzLjkyZDQ0NS40NGQ3NDIuNGQxNzQuMDhkOTQyLjA4ZDE3NC4wOGQ5NTIuMzE5ZDQ0NS40NGQ5NTIuMzE5ZDQ0NS40NGQxMDI0aFIzZDUzMi40OFI0ZDQ0NS40NFI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTBSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaGc6MTYyb1IxZDc2OFIyYWQ0MzAuMDhkNjY1LjU5OWQzNjcuNjE2ZDcyNy4wNGQzMDcuMmQ3MjcuMDRkMzA3LjJkOTYyLjU2ZDM5OS4zNmQ5NjIuNTZkMzk5LjM2ZDEwMjRkMzA3LjJkMTAyNGQyNDUuNzZkMTA4NS40NGQyNDUuNzZkMTAyNGQxNjMuODRkMTAyNGQxMzQuMTQ0ZDEwMjRkMTEzLjE1MmQxMDAzLjAwOGQ5Mi4xNmQ5ODIuMDE2ZDkyLjE2ZDk1Mi4zMTlkOTIuMTZkNzM3LjI4ZDkyLjE2ZDcwNy41ODRkMTEzLjE1MmQ2ODYuNTkyZDEzNC4xNDRkNjY1LjU5OWQxNjMuODRkNjY1LjU5OWQyNDUuNzZkNjY1LjU5OWQzMDcuMmQ2MDQuMTZkMzA3LjJkNjY1LjU5OWQ0MzAuMDhkNjY1LjU5OWQyNDUuNzZkOTYyLjU2ZDI0NS43NmQ3MjcuMDRkMTYzLjg0ZDcyNy4wNGQxNjMuODRkOTYyLjU2ZDI0NS43NmQ5NjIuNTZoUjNkNDQwLjMyUjRkNDMwLjA4UjVkOTIuMTZSNmQ0MTkuODRSN2QtNjEuNDRSOGQzMjcuNjhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE2MlIxMmQ5Mi4xNlIxM2Q0NDAuMzJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDlvUjFkNzY4UjJhZDQ0NS40NGQxMDI0ZDg3LjA0ZDEwMjRkODcuMDRkOTUyLjMxOWQyOTEuODRkOTUyLjMxOWQyOTEuODRkNjA5LjI4ZDI4MS42ZDYwOS4yOGQxMTcuNzZkNzczLjEyZDY2LjU2ZDcyMC44OTZkMjY1LjIxNmQ1MjIuMjRkMzczLjc2ZDUyMi4yNGQzNzMuNzZkOTUyLjMxOWQ0NDUuNDRkOTUyLjMxOWQ0NDUuNDRkMTAyNGhSM2Q1MzIuNDhSNGQ0NDUuNDRSNWQ2Ni41NlI2ZDUwMS43NlI3ZDBSOGQ0MzUuMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNDlSMTJkNjYuNTZSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTYxb1IxZDc2OFIyYWQ5Mi4xNmQ4ODguODMyZDE3NC4wOGQ4MDguOTZkMTc0LjA4ZDExNjcuMzZkOTIuMTZkMTE2Ny4zNmQ5Mi4xNmQ4ODguODMyZDkyLjE2ZDY2NS41OTlkMTg0LjMyZDY2NS41OTlkMTg0LjMyZDc0Ny41MmQ5Mi4xNmQ3NDcuNTJkOTIuMTZkNjY1LjU5OWhSM2QyODYuNzJSNGQxODQuMzJSNWQ5Mi4xNlI2ZDM1OC40UjdkLTE0My4zNlI4ZDI2Ni4yNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTYxUjEyZDkyLjE2UjEzZDI4Ni43MlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ4b1IxZDc2OFIyYWQ0NDUuNDRkOTUyLjMxOWQ0NDUuNDRkOTgyLjAxNmQ0MjQuNDQ4ZDEwMDMuMDA4ZDQwMy40NTZkMTAyNGQzNzMuNzZkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkNTkzLjkyZDg3LjA0ZDU2NC4yMjNkMTA4LjAzMmQ1NDMuMjMyZDEyOS4wMjRkNTIyLjI0ZDE1OC43MmQ1MjIuMjRkMzczLjc2ZDUyMi4yNGQ0MDMuNDU2ZDUyMi4yNGQ0MjQuNDQ4ZDU0My4yMzJkNDQ1LjQ0ZDU2NC4yMjNkNDQ1LjQ0ZDU5My45MmQ0NDUuNDRkOTUyLjMxOWQzNjMuNTJkOTUyLjMxOWQzNjMuNTJkNTkzLjkyZDE2OC45NmQ1OTMuOTJkMTY4Ljk2ZDk1Mi4zMTlkMzYzLjUyZDk1Mi4zMTloUjNkNTMyLjQ4UjRkNDQ1LjQ0UjVkODcuMDRSNmQ1MDEuNzZSN2QwUjhkNDE0LjcyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0OFIxMmQ4Ny4wNFIxM2Q1MzIuNDhSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaGc6MTYwb1IxZDc2OFIyYWhSM2QyMDQuOFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNjBSMTJkMFIxM2QyMDQuOFIxNGFoZzo0N29SMWQ3NjhSMmFkMzM3LjkyZDQ1MC41NTlkNTUuMjk2ZDEwOTUuNjhkLTIwLjQ4ZDEwOTUuNjhkMjY1LjIxNmQ0NTAuNTU5ZDMzNy45MmQ0NTAuNTU5aFIzZDMxNy40NFI0ZDMzNy45MlI1ZC0yMC40OFI2ZDU3My40NFI3ZC03MS42OFI4ZDU5My45MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNDdSMTJkLTIwLjQ4UjEzZDMxNy40NFIxNGFpMWkyaTJpMmkyaGc6MTU5b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1OVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDZvUjFkNzY4UjJhZDE3NC4wOGQxMDI0ZDgxLjkyZDEwMjRkODEuOTJkOTQyLjA4ZDE3NC4wOGQ5NDIuMDhkMTc0LjA4ZDEwMjRoUjNkMjU2UjRkMTc0LjA4UjVkODEuOTJSNmQ4MS45MlI3ZDBSOGQwUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0NlIxMmQ4MS45MlIxM2QyNTZSMTRhaTFpMmkyaTJpMmhnOjE1OG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNThSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ1b1IxZDc2OFIyYWQyNjYuMjRkODA4Ljk2ZDE5NC41NmQ4ODAuNjRkMjAuNDhkODgwLjY0ZDkyLjE2ZDgwOC45NmQyNjYuMjRkODA4Ljk2aFIzZDI4Ni43MlI0ZDI2Ni4yNFI1ZDIwLjQ4UjZkMjE1LjA0UjdkMTQzLjM2UjhkMTk0LjU2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0NVIxMmQyMC40OFIxM2QyODYuNzJSMTRhaTFpMmkyaTJpMmhnOjE1N29SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNTdSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ0b1IxZDc2OFIyYWQxODQuMzJkMTEwNS45MmQxMjIuODhkMTE3Ny42ZDEyMi44OGQxMDI0ZDgxLjkyZDEwMjRkODEuOTJkOTQyLjA4ZDExMi42NGQ5NDIuMDhkMTQyLjMzNmQ5NDIuMDhkMTYzLjMyOGQ5NjMuMDcyZDE4NC4zMmQ5ODQuMDY0ZDE4NC4zMmQxMDEzLjc2ZDE4NC4zMmQxMTA1LjkyaFIzZDI2Ni4yNFI0ZDE4NC4zMlI1ZDgxLjkyUjZkODEuOTJSN2QtMTUzLjZSOGQwUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0NFIxMmQ4MS45MlIxM2QyNjYuMjRSMTRhaTFpMmkyaTJpMmkyaTNpM2kyaGc6MTU2b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1NlIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDNvUjFkNzY4UjJhZDQ0NS40NGQ4ODAuNjRkMzAyLjA4ZDg4MC42NGQzMDIuMDhkMTAyNGQyMzAuNGQxMDI0ZDIzMC40ZDg4MC42NGQ4Ny4wNGQ4ODAuNjRkODcuMDRkODA4Ljk2ZDIzMC40ZDgwOC45NmQyMzAuNGQ2NjUuNTk5ZDMwMi4wOGQ2NjUuNTk5ZDMwMi4wOGQ4MDguOTZkNDQ1LjQ0ZDgwOC45NmQ0NDUuNDRkODgwLjY0aFIzZDUzMi40OFI0ZDQ0NS40NFI1ZDg3LjA0UjZkMzU4LjRSN2QwUjhkMjcxLjM2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0M1IxMmQ4Ny4wNFIxM2Q1MzIuNDhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNTVvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTU1UjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0Mm9SMWQ3NjhSMmFkNDE1Ljc0NGQ1MzUuNTUxZDM1MC4yMDhkNjAxLjA4OGQzNTAuMjA4ZDUxNC4wNDhkNDE1Ljc0NGQ0NDguNTExZDQxNS43NDRkNTM1LjU1MWQzMzQuODQ4ZDU0My43NDNkMjczLjQwOGQ0ODIuMzA0ZDI3My40MDhkMzkwLjE0NGQzMzQuODQ4ZDQ1MS41ODNkMzM0Ljg0OGQ1NDMuNzQzZDQ3NS4xMzZkNTkyLjg5NmQ0MTMuNjk2ZDY1NC4zMzZkMzIxLjUzNmQ2NTQuMzM2ZDM4Mi45NzZkNTkyLjg5NmQ0NzUuMTM2ZDU5Mi44OTZkMjgyLjYyNGQ1MTUuMDcyZDE5NS41ODRkNTE1LjA3MmQxMzAuMDQ4ZDQ0OS41MzVkMjE3LjA4OGQ0NDkuNTM1ZDI4Mi42MjRkNTE1LjA3MmQ0MjcuMDA4ZDczOC4zMDRkMzM5Ljk2OGQ3MzguMzA0ZDI3NC40MzJkNjcyLjc2OGQzNjEuNDcyZDY3Mi43NjhkNDI3LjAwOGQ3MzguMzA0ZDIyNS4yOGQ1MzEuNDU2ZDE2My44NGQ1OTIuODk2ZDcxLjY4ZDU5Mi44OTZkMTMzLjEyZDUzMS40NTZkMjI1LjI4ZDUzMS40NTZkMjczLjQwOGQ3OTMuNmQyMTEuOTY4ZDczMi4xNmQyMTEuOTY4ZDY0MGQyNzMuNDA4ZDcwMS40NGQyNzMuNDA4ZDc5My42ZDE5Ni42MDhkNTgzLjY4ZDE5Ni42MDhkNjY5LjY5NWQxMzEuMDcyZDczNS4yMzJkMTMxLjA3MmQ2NDguMTkyZDE5Ni42MDhkNTgzLjY4aFIzZDU0Ni44MTZSNGQ0NzUuMTM2UjVkNzEuNjhSNmQ2MzMuODU2UjdkMjMwLjRSOGQ1NjIuMTc2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0MlIxMmQ3MS42OFIxM2Q1NDYuODE2UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTU0b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1NFIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDFvUjFkNzY4UjJhZDcxLjY4ZDEwMzQuMjRkMTQzLjM2ZDEwMzQuMjRkMTQzLjM2ZDUxMmQ3MS42OGQ1MTJkNzEuNjhkNDUwLjU1OWQxNDMuMzZkNDUwLjU1OWQxNzMuMDU2ZDQ1MC41NTlkMTk0LjA0OGQ0NzEuNTUyZDIxNS4wNGQ0OTIuNTQ0ZDIxNS4wNGQ1MjIuMjRkMjE1LjA0ZDEwMjRkMjE1LjA0ZDEwNTMuNjk2ZDE5NC4wNDhkMTA3NC42ODhkMTczLjA1NmQxMDk1LjY4ZDE0My4zNmQxMDk1LjY4ZDcxLjY4ZDEwOTUuNjhkNzEuNjhkMTAzNC4yNGhSM2QzMjcuNjhSNGQyMTUuMDRSNWQ3MS42OFI2ZDU3My40NFI3ZC03MS42OFI4ZDUwMS43NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNDFSMTJkNzEuNjhSMTNkMzI3LjY4UjE0YWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaGc6MTUzb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1M1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDBvUjFkNzY4UjJhZDI1NmQxMDk1LjY4ZDE4NC4zMmQxMDk1LjY4ZDE1NC42MjRkMTA5NS42OGQxMzMuNjMyZDEwNzQuNjg4ZDExMi42NGQxMDUzLjY5NmQxMTIuNjRkMTAyNGQxMTIuNjRkNTIyLjI0ZDExMi42NGQ0OTIuNTQ0ZDEzMy42MzJkNDcxLjU1MmQxNTQuNjI0ZDQ1MC41NTlkMTg0LjMyZDQ1MC41NTlkMjU2ZDQ1MC41NTlkMjU2ZDUxMmQxODQuMzJkNTEyZDE4NC4zMmQxMDM0LjI0ZDI1NmQxMDM0LjI0ZDI1NmQxMDk1LjY4aFIzZDMyNy42OFI0ZDI1NlI1ZDExMi42NFI2ZDU3My40NFI3ZC03MS42OFI4ZDQ2MC44UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0MFIxMmQxMTIuNjRSMTNkMzI3LjY4UjE0YWkxaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaGc6MTUyb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1MlIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzlvUjFkNzY4UjJhZDE2My44NGQ2MTYuNDQ4ZDkyLjE2ZDY4Ni4wNzlkOTIuMTZkNDUwLjU1OWQxNjMuODRkNDUwLjU1OWQxNjMuODRkNjE2LjQ0OGhSM2QyNDUuNzZSNGQxNjMuODRSNWQ5Mi4xNlI2ZDU3My40NFI3ZDMzNy45MlI4ZDQ4MS4yOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMzlSMTJkOTIuMTZSMTNkMjQ1Ljc2UjE0YWkxaTJpMmkyaTJoZzoxNTFvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTUxUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozOG9SMWQ3NjhSMmFkNTkzLjkyZDEwMjRkNTAxLjc2ZDEwMjRkNDQ5LjUzNmQ5NzMuODI0ZDM5OS4zNmQxMDI0ZDE3NC4wOGQxMDI0ZDE0NC4zODRkMTAyNGQxMjMuMzkyZDEwMDMuMDA4ZDEwMi40ZDk4Mi4wMTZkMTAyLjRkOTUyLjMxOWQxMDIuNGQ4MjkuNDRkMTAyLjRkODE0LjA3OWQxMDguMDMyZDgwMC4yNTZkMTEzLjY2NGQ3ODYuNDMyZDEyMy45MDRkNzc1LjY4ZDEzNC4xNDRkNzY0LjkyOGQxNDYuOTQ0ZDc1OC43ODRkMTU5Ljc0NGQ3NTIuNjRkMTc0LjA4ZDc1Mi42NGQyMjUuMjhkNzUyLjY0ZDE4OS40NGQ3MTguODQ4ZDE2My44NGQ2OTMuMjQ4ZDE2My44NGQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkMTYzLjg0ZDU2NC4yMjNkMTg0LjgzMmQ1NDMuMjMyZDIwNS44MjRkNTIyLjI0ZDIzNS41MmQ1MjIuMjRkMzc4Ljg4ZDUyMi4yNGQ0MDguNTc2ZDUyMi4yNGQ0MjkuNTY4ZDU0My4yMzJkNDUwLjU2ZDU2NC4yMjNkNDUwLjU2ZDU5My45MmQ0NTAuNTZkNjY1LjU5OWQzNzguODhkNjY1LjU5OWQzNzguODhkNTgzLjY4ZDIzNS41MmQ1ODMuNjhkMjM1LjUyZDY2NS41OTlkMzUzLjI4ZDc4My4zNmQzOTAuMTQ0ZDc0Ny41MmQ1NDIuNzJkNzQ3LjUyZDQ4MC4yNTZkODA4Ljk2ZDM3OC44OGQ4MDguOTZkNTkzLjkyZDEwMjRkNDM5LjI5NmQ5NjIuNTZkMjgyLjYyNGQ4MDguOTZkMTc0LjA4ZDgwOC45NmQxNzQuMDhkOTYyLjU2ZDQzOS4yOTZkOTYyLjU2aFIzZDYxNC40UjRkNTkzLjkyUjVkMTAyLjRSNmQ1MDEuNzZSN2QwUjhkMzk5LjM2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkzOFIxMmQxMDIuNFIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kzaTNpMmkyaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjE1MG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNTBSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjM3b1IxZDc2OFIyYWQ2MzQuODhkOTUyLjMxOWQ2MzQuODhkOTgyLjAxNmQ2MTMuODg4ZDEwMDMuMDA4ZDU5Mi44OTZkMTAyNGQ1NjMuMmQxMDI0ZDQ5MS41MmQxMDI0ZDQ2MS44MjRkMTAyNGQ0NDAuODMyZDEwMDMuMDA4ZDQxOS44NGQ5ODIuMDE2ZDQxOS44NGQ5NTIuMzE5ZDQxOS44NGQ4MDguOTZkNDE5Ljg0ZDc3OS4yNjRkNDQwLjgzMmQ3NTguMjcxZDQ2MS44MjRkNzM3LjI4ZDQ5MS41MmQ3MzcuMjhkNTYzLjJkNzM3LjI4ZDU5Mi44OTZkNzM3LjI4ZDYxMy44ODhkNzU4LjI3MWQ2MzQuODhkNzc5LjI2NGQ2MzQuODhkODA4Ljk2ZDYzNC44OGQ5NTIuMzE5ZDUxMC45NzZkNDUwLjU1OWQyNTkuMDcyZDEwMjRkMTgzLjI5NmQxMDI0ZDQzOC4yNzJkNDUwLjU1OWQ1MTAuOTc2ZDQ1MC41NTlkMjc2LjQ4ZDY2NS41OTlkMjc2LjQ4ZDY5NS4yOTZkMjU1LjQ4OGQ3MTYuMjg4ZDIzNC40OTZkNzM3LjI4ZDIwNC44ZDczNy4yOGQxMzMuMTJkNzM3LjI4ZDEwMy40MjRkNzM3LjI4ZDgyLjQzMmQ3MTYuMjg4ZDYxLjQ0ZDY5NS4yOTZkNjEuNDRkNjY1LjU5OWQ2MS40NGQ1MjIuMjRkNjEuNDRkNDkyLjU0NGQ4Mi40MzJkNDcxLjU1MmQxMDMuNDI0ZDQ1MC41NTlkMTMzLjEyZDQ1MC41NTlkMjA0LjhkNDUwLjU1OWQyMzQuNDk2ZDQ1MC41NTlkMjU1LjQ4OGQ0NzEuNTUyZDI3Ni40OGQ0OTIuNTQ0ZDI3Ni40OGQ1MjIuMjRkMjc2LjQ4ZDY2NS41OTlkNTczLjQ0ZDk2Mi41NmQ1NzMuNDRkNzk4LjcyZDQ4MS4yOGQ3OTguNzJkNDgxLjI4ZDk2Mi41NmQ1NzMuNDRkOTYyLjU2ZDIxNS4wNGQ2NzUuODM5ZDIxNS4wNGQ1MTJkMTIyLjg4ZDUxMmQxMjIuODhkNjc1LjgzOWQyMTUuMDRkNjc1LjgzOWhSM2Q2OTYuMzJSNGQ2MzQuODhSNWQ2MS40NFI2ZDU3My40NFI3ZDBSOGQ1MTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTM3UjEyZDYxLjQ0UjEzZDY5Ni4zMlIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ5b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE0OVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzZvUjFkNzY4UjJhZDQ2MC44ZDUyMi4yNGQzODkuMTJkNTkzLjkyZDI5Ni45NmQ1OTMuOTJkMjk2Ljk2ZDczNy4yOGQzNzguODhkNzM3LjI4ZDQwOC41NzZkNzM3LjI4ZDQyOS41NjhkNzU4LjI3MWQ0NTAuNTZkNzc5LjI2NGQ0NTAuNTZkODA4Ljk2ZDQ1MC41NmQ5NTIuMzE5ZDQ1MC41NmQ5ODIuMDE2ZDQyOS41NjhkMTAwMy4wMDhkNDA4LjU3NmQxMDI0ZDM3OC44OGQxMDI0ZDI5Ni45NmQxMDI0ZDIzNS41MmQxMDg1LjQ0ZDIzNS41MmQxMDI0ZDcxLjY4ZDEwMjRkMTQzLjM2ZDk1Mi4zMTlkMjM1LjUyZDk1Mi4zMTlkMjM1LjUyZDgwOC45NmQxNTMuNmQ4MDguOTZkMTIzLjkwNGQ4MDguOTZkMTAyLjkxMmQ3ODcuOTY4ZDgxLjkyZDc2Ni45NzZkODEuOTJkNzM3LjI4ZDgxLjkyZDU5My45MmQ4MS45MmQ1NjQuMjIzZDEwMi45MTJkNTQzLjIzMmQxMjMuOTA0ZDUyMi4yNGQxNTMuNmQ1MjIuMjRkMjM1LjUyZDUyMi4yNGQyOTYuOTZkNDYwLjc5OWQyOTYuOTZkNTIyLjI0ZDQ2MC44ZDUyMi4yNGQyMzUuNTJkNzM3LjI4ZDIzNS41MmQ1OTMuOTJkMTUzLjZkNTkzLjkyZDE1My42ZDczNy4yOGQyMzUuNTJkNzM3LjI4ZDM3OC44OGQ5NTIuMzE5ZDM3OC44OGQ4MDguOTZkMjk2Ljk2ZDgwOC45NmQyOTYuOTZkOTUyLjMxOWQzNzguODhkOTUyLjMxOWhSM2Q1MzIuNDhSNGQ0NjAuOFI1ZDcxLjY4UjZkNTYzLjJSN2QtNjEuNDRSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTM2UjEyZDcxLjY4UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0OG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNDhSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjM1b1IxZDc2OFIyYWQ1MjMuMjY0ZDY2NS41OTlkNDQ5LjUzNmQ3MjcuMDRkNDE4LjgxNmQ3MjcuMDRkMzkxLjE2OGQ4NzAuNGQ0ODMuMzI4ZDg3MC40ZDQwOS42ZDkzMS44NGQzNzguODhkOTMxLjg0ZDM3Mi43MzZkOTYyLjU2ZDMwMC4wMzJkMTAyNGQzMTcuNDRkOTMxLjg0ZDE3NC4wOGQ5MzEuODRkMTY3LjkzNmQ5NjIuNTZkOTUuMjMyZDEwMjRkMTEyLjY0ZDkzMS44NGQyMC40OGQ5MzEuODRkOTQuMjA4ZDg3MC40ZDEyNC45MjhkODcwLjRkMTUyLjU3NmQ3MjcuMDRkNjAuNDE2ZDcyNy4wNGQxMzQuMTQ0ZDY2NS41OTlkMTY0Ljg2NGQ2NjUuNTk5ZDE2OS45ODRkNjM0Ljg4ZDI0My43MTJkNTczLjQ0ZDIyNi4zMDRkNjY1LjU5OWQzNjkuNjY0ZDY2NS41OTlkMzc0Ljc4NGQ2MzQuODhkNDQ4LjUxMmQ1NzMuNDRkNDMxLjEwNGQ2NjUuNTk5ZDUyMy4yNjRkNjY1LjU5OWQzNTcuMzc2ZDcyNy4wNGQyMTQuMDE2ZDcyNy4wNGQxODYuMzY4ZDg3MC40ZDMyOS43MjhkODcwLjRkMzU3LjM3NmQ3MjcuMDRoUjNkNTMyLjQ4UjRkNTIzLjI2NFI1ZDIwLjQ4UjZkNDUwLjU2UjdkMFI4ZDQzMC4wOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMzVSMTJkMjAuNDhSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ3b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE0N1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzRvUjFkNzY4UjJhZDE2My44NGQ2MTYuNDQ4ZDkyLjE2ZDY4Ni4wNzlkOTIuMTZkNDUwLjU1OWQxNjMuODRkNDUwLjU1OWQxNjMuODRkNjE2LjQ0OGQzMTcuNDRkNjE2LjQ0OGQyNDUuNzZkNjg2LjA3OWQyNDUuNzZkNDUwLjU1OWQzMTcuNDRkNDUwLjU1OWQzMTcuNDRkNjE2LjQ0OGhSM2QzOTkuMzZSNGQzMTcuNDRSNWQ5Mi4xNlI2ZDU3My40NFI3ZDMzNy45MlI4ZDQ4MS4yOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMzRSMTJkOTIuMTZSMTNkMzk5LjM2UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ2b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE0NlIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzNvUjFkNzY4UjJhZDE4NC4zMmQ4MDAuNzY4ZDEwMi40ZDg4MC42NGQxMDIuNGQ1MjIuMjRkMTg0LjMyZDUyMi4yNGQxODQuMzJkODAwLjc2OGQxODQuMzJkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDk0Mi4wOGQxODQuMzJkOTQyLjA4ZDE4NC4zMmQxMDI0aFIzZDI4Ni43MlI0ZDE4NC4zMlI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkzM1IxMmQ5Mi4xNlIxM2QyODYuNzJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDVvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQ1UjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozMm9SMWQ3NjhSMmFoUjNkMjA0LjhSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMzJSMTJkMFIxM2QyMDQuOFIxNGFoZzoxNDRvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQ0UjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDNvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQzUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNTVvUjFkNzY4UjJhZDQzMC4wOGQxMTY3LjM2ZDQzMC4wOGQxMTk3LjA1NmQ0MDkuMDg4ZDEyMTguMDQ4ZDM4OC4wOTZkMTIzOS4wNGQzNTguNGQxMjM5LjA0ZDYxLjQ0ZDEyMzkuMDRkMTIyLjg4ZDExNzcuNmQzNTguNGQxMTc3LjZkMzU4LjRkOTcyLjhkMzA3LjJkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY2NS41OTlkNDMwLjA4ZDY2NS41OTlkNDMwLjA4ZDExNjcuMzZkMzUzLjI4ZDU5My45MmQyODYuNzJkNTkzLjkyZDI4Ni43MmQ1MTJkMzUzLjI4ZDUxMmQzNTMuMjhkNTkzLjkyZDIxNS4wNGQ1OTMuOTJkMTQ4LjQ4ZDU5My45MmQxNDguNDhkNTEyZDIxNS4wNGQ1MTJkMjE1LjA0ZDU5My45MmhSM2Q1MDYuODhSNGQ0MzAuMDhSNWQ2MS40NFI2ZDUxMlI3ZC0yMTUuMDRSOGQ0NTAuNTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI1NVIxMmQ2MS40NFIxM2Q1MDYuODhSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDJvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQyUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNTRvUjFkNzY4UjJhZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ5ODIuMDE2ZDQxOS4zMjhkMTAwMy4wMDhkMzk4LjMzNmQxMDI0ZDM2OC42NGQxMDI0ZDE1My42ZDEwMjRkMTUzLjZkMTIzOS4wNGQ4MS45MmQxMjM5LjA0ZDgxLjkyZDUwMS43NmQxNTMuNmQ0MzAuMDhkMTUzLjZkNzE2LjhkMjA0LjhkNjY1LjU5OWQzNjguNjRkNjY1LjU5OWQzOTguMzM2ZDY2NS41OTlkNDE5LjMyOGQ2ODYuNTkyZDQ0MC4zMmQ3MDcuNTg0ZDQ0MC4zMmQ3MzcuMjhkNDQwLjMyZDk1Mi4zMTlkMzY4LjY0ZDk2Mi41NmQzNjguNjRkNzI3LjA0ZDE1My42ZDcyNy4wNGQxNTMuNmQxMDEzLjc2ZDIwNC44ZDk2Mi41NmQzNjguNjRkOTYyLjU2aFIzZDUxMlI0ZDQ0MC4zMlI1ZDgxLjkyUjZkNTkzLjkyUjdkLTIxNS4wNFI4ZDUxMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjU0UjEyZDgxLjkyUjEzZDUxMlIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmkyaGc6MTQxb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE0MVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjUzb1IxZDc2OFIyYWQ0MzAuMDhkMTE2Ny4zNmQ0MzAuMDhkMTE5Ny4wNTZkNDA5LjA4OGQxMjE4LjA0OGQzODguMDk2ZDEyMzkuMDRkMzU4LjRkMTIzOS4wNGQ2MS40NGQxMjM5LjA0ZDEyMi44OGQxMTc3LjZkMzU4LjRkMTE3Ny42ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMTY3LjM2ZDM3OC44OGQ0NTAuNTU5ZDI3Ni40OGQ1OTMuOTJkMjA0LjhkNTkzLjkyZDMwNy4yZDQ1MC41NTlkMzc4Ljg4ZDQ1MC41NTloUjNkNTA2Ljg4UjRkNDMwLjA4UjVkNjEuNDRSNmQ1NzMuNDRSN2QtMjE1LjA0UjhkNTEyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyNTNSMTJkNjEuNDRSMTNkNTA2Ljg4UjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDBvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQwUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNTJvUjFkNzY4UjJhZDQzMC4wOGQxMDI0ZDM1OC40ZDEwMjRkMzU4LjRkOTcyLjhkMzA3LjJkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY2NS41OTlkNDMwLjA4ZDY2NS41OTlkNDMwLjA4ZDEwMjRkMzUzLjI4ZDU5My45MmQyODYuNzJkNTkzLjkyZDI4Ni43MmQ1MTJkMzUzLjI4ZDUxMmQzNTMuMjhkNTkzLjkyZDIxNS4wNGQ1OTMuOTJkMTQ4LjQ4ZDU5My45MmQxNDguNDhkNTEyZDIxNS4wNGQ1MTJkMjE1LjA0ZDU5My45MmhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDUxMlI3ZDBSOGQ0NDAuMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI1MlIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTM5b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzOVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjUxb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMDI0ZDM2OC42NGQ1OTMuOTJkMjk2Ljk2ZDU5My45MmQyNTZkNTAxLjc2ZDI0NS43NmQ1MDEuNzZkMjA0LjhkNTkzLjkyZDEzMy4xMmQ1OTMuOTJkMjE1LjA0ZDQ2MC43OTlkMjg2LjcyZDQ2MC43OTlkMzY4LjY0ZDU5My45MmhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDU2My4yUjdkMFI4ZDQ5MS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjUxUjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MTM4b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzOFIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjUwb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMDI0ZDM3OC44OGQ0NTAuNTU5ZDI3Ni40OGQ1OTMuOTJkMjA0LjhkNTkzLjkyZDMwNy4yZDQ1MC41NTlkMzc4Ljg4ZDQ1MC41NTloUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1NzMuNDRSN2QwUjhkNTAxLjc2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyNTBSMTJkNzEuNjhSMTNkNTAxLjc2UjE0YWkxaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTM3b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzN1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQ5b1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMDI0ZDMwNy4yZDU5My45MmQyMzUuNTJkNTkzLjkyZDEzMy4xMmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMzA3LjJkNTkzLjkyaFIzZDUwMS43NlI0ZDQzMC4wOFI1ZDcxLjY4UjZkNTczLjQ0UjdkMFI4ZDUwMS43NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjQ5UjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNm9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMzZSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0OG9SMWQ3NjhSMmFkNDc2LjE2ZDY5MS4yZDQ0MC4zMmQ3MjYuMDE2ZDQ1MS41ODRkNzM3LjI4ZDQ1MS41ODRkOTUyLjMxOWQ0NTEuNTg0ZDk4Mi4wMTZkNDMwLjA4ZDEwMDMuMDA4ZDQwOC41NzZkMTAyNGQzNzkuOTA0ZDEwMjRkMTYyLjgxNmQxMDI0ZDE1MS41NTJkMTAxMi43MzZkMTEyLjY0ZDEwNTEuNjQ4ZDY2LjU2ZDEwMDIuNDk2ZDEwMy40MjRkOTY0LjYwOGQ5MS4xMzZkOTUyLjMxOWQ5MS4xMzZkNzM3LjI4ZDkxLjEzNmQ3MDcuNTg0ZDExMi4xMjhkNjg2LjU5MmQxMzMuMTJkNjY1LjU5OWQxNjIuODE2ZDY2NS41OTlkMzc5LjkwNGQ2NjUuNTk5ZDM5Mi4xOTJkNjc4LjkxMmQ0MjguMDMyZDY0My4wNzJkNDc2LjE2ZDY5MS4yZDM0NS4wODhkNzM3LjI4ZDM0NS4wODhkNzI3LjA0ZDE2Mi44MTZkNzI3LjA0ZDE2Mi44MTZkOTA3LjI2NGQxNzMuMDU2ZDkwNy4yNjRkMzQ1LjA4OGQ3MzcuMjhkMzc5LjkwNGQ5NjIuNTZkMzc5LjkwNGQ3ODcuNDU2ZDM2OS42NjRkNzg3LjQ1NmQyMDIuNzUyZDk1Mi4zMTlkMjAyLjc1MmQ5NjIuNTZkMzc5LjkwNGQ5NjIuNTZoUjNkNTQyLjcyUjRkNDc2LjE2UjVkNjYuNTZSNmQzODAuOTI4UjdkLTI3LjY0OFI4ZDMxNC4zNjhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0OFIxMmQ2Ni41NlIxM2Q1NDIuNzJSMTRhaTFpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaTJpMWkyaTJpMmkyaTJoZzoxMzVvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTM1UjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNDdvUjFkNzY4UjJhZDMxMi4zMmQxMDI0ZDIyMC4xNmQxMDI0ZDIyMC4xNmQ5NDIuMDhkMzEyLjMyZDk0Mi4wOGQzMTIuMzJkMTAyNGQzMTIuMzJkNzQ3LjUyZDIyMC4xNmQ3NDcuNTJkMjIwLjE2ZDY2NS41OTlkMzEyLjMyZDY2NS41OTlkMzEyLjMyZDc0Ny41MmhSM2Q1MzIuNDhSNGQ0NDUuNDRSNWQ4Ny4wNFI2ZDM1OC40UjdkMFI4ZDI3MS4zNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjQ3UjEyZDg3LjA0UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMzRSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0Nm9SMWQ3NjhSMmFkNDMwLjA4ZDk1Mi4zMTlkNDMwLjA4ZDk4Mi4wMTZkNDA5LjA4OGQxMDAzLjAwOGQzODguMDk2ZDEwMjRkMzU4LjRkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDk1Mi4zMTlkMzU4LjRkOTYyLjU2ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1My4yOGQ1OTMuOTJkMjg2LjcyZDU5My45MmQyODYuNzJkNTEyZDM1My4yOGQ1MTJkMzUzLjI4ZDU5My45MmQyMTUuMDRkNTkzLjkyZDE0OC40OGQ1OTMuOTJkMTQ4LjQ4ZDUxMmQyMTUuMDRkNTEyZDIxNS4wNGQ1OTMuOTJoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1MTJSN2QwUjhkNDQwLjMyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyNDZSMTJkNzEuNjhSMTNkNTAxLjc2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTMzb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzM1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQ1b1IxZDc2OFIyYWQ0MzAuMDhkOTUyLjMxOWQ0MzAuMDhkOTgyLjAxNmQ0MDkuMDg4ZDEwMDMuMDA4ZDM4OC4wOTZkMTAyNGQzNTguNGQxMDI0ZDE0My4zNmQxMDI0ZDExMy42NjRkMTAyNGQ5Mi42NzJkMTAwMy4wMDhkNzEuNjhkOTgyLjAxNmQ3MS42OGQ5NTIuMzE5ZDcxLjY4ZDczNy4yOGQ3MS42OGQ3MDcuNTg0ZDkyLjY3MmQ2ODYuNTkyZDExMy42NjRkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQzNTguNGQ2NjUuNTk5ZDM4OC4wOTZkNjY1LjU5OWQ0MDkuMDg4ZDY4Ni41OTJkNDMwLjA4ZDcwNy41ODRkNDMwLjA4ZDczNy4yOGQ0MzAuMDhkOTUyLjMxOWQzNTguNGQ5NjIuNTZkMzU4LjRkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZkMzY4LjY0ZDQ2My44NzFkMzY4LjY0ZDQ4MS4yOGQzNjIuNDk2ZDU0My43NDNkMzYwLjQ0OGQ1NjYuMjcxZDM0NS4wODhkNTgxLjYzMmQzMjkuNzI4ZDU5Ni45OTJkMzA5LjI0OGQ1OTYuOTkyZDI3NC40MzJkNTk2Ljk5MmQyNTEuOTA0ZDU3Mi40MTVkMTkzLjUzNmQ1MDcuOTA0ZDE4NC4zMmQ1OTIuODk2ZDEzMy4xMmQ1OTIuODk2ZDEzMy4xMmQ1ODQuNzA0ZDEzNC42NTZkNTY0LjczNmQxMzYuMTkyZDU0NC43NjhkMTQwLjI4OGQ1MTJkMTQyLjMzNmQ0OTAuNDk2ZDE1OC43MmQ0NzUuNjQ4ZDE3NS4xMDRkNDYwLjc5OWQxOTYuNjA4ZDQ2MC43OTlkMjI4LjM1MmQ0NjAuNzk5ZDI0OS44NTZkNDgzLjMyOGQzMTEuMjk2ZDU0Ny44MzlkMzE3LjQ0ZDQ2My44NzFkMzY4LjY0ZDQ2My44NzFoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1NjMuMlI3ZDBSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0NVIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpM2kzaTNpM2kyaTJpMmkzaTNpM2kzaTNpMmkyaTJoZzoxMzJvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTMyUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNDRvUjFkNzY4UjJhZDQzMC4wOGQ5NTIuMzE5ZDQzMC4wOGQ5ODIuMDE2ZDQwOS4wODhkMTAwMy4wMDhkMzg4LjA5NmQxMDI0ZDM1OC40ZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNzM3LjI4ZDcxLjY4ZDcwNy41ODRkOTIuNjcyZDY4Ni41OTJkMTEzLjY2NGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDM1OC40ZDY2NS41OTlkMzg4LjA5NmQ2NjUuNTk5ZDQwOS4wODhkNjg2LjU5MmQ0MzAuMDhkNzA3LjU4NGQ0MzAuMDhkNzM3LjI4ZDQzMC4wOGQ5NTIuMzE5ZDM1OC40ZDk2Mi41NmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNjguNjRkNTkzLjkyZDI5Ni45NmQ1OTMuOTJkMjU2ZDUwMS43NmQyNDUuNzZkNTAxLjc2ZDIwNC44ZDU5My45MmQxMzMuMTJkNTkzLjkyZDIxNS4wNGQ0NjAuNzk5ZDI4Ni43MmQ0NjAuNzk5ZDM2OC42NGQ1OTMuOTJoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1NjMuMlI3ZDBSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0NFIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MTMxb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzMVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQzb1IxZDc2OFIyYWQ0MzAuMDhkOTUyLjMxOWQ0MzAuMDhkOTgyLjAxNmQ0MDkuMDg4ZDEwMDMuMDA4ZDM4OC4wOTZkMTAyNGQzNTguNGQxMDI0ZDE0My4zNmQxMDI0ZDExMy42NjRkMTAyNGQ5Mi42NzJkMTAwMy4wMDhkNzEuNjhkOTgyLjAxNmQ3MS42OGQ5NTIuMzE5ZDcxLjY4ZDczNy4yOGQ3MS42OGQ3MDcuNTg0ZDkyLjY3MmQ2ODYuNTkyZDExMy42NjRkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQzNTguNGQ2NjUuNTk5ZDM4OC4wOTZkNjY1LjU5OWQ0MDkuMDg4ZDY4Ni41OTJkNDMwLjA4ZDcwNy41ODRkNDMwLjA4ZDczNy4yOGQ0MzAuMDhkOTUyLjMxOWQzNTguNGQ5NjIuNTZkMzU4LjRkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZkMzc4Ljg4ZDQ1MC41NTlkMjc2LjQ4ZDU5My45MmQyMDQuOGQ1OTMuOTJkMzA3LjJkNDUwLjU1OWQzNzguODhkNDUwLjU1OWhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDU3My40NFI3ZDBSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0M1IxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzMG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMzBSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0Mm9SMWQ3NjhSMmFkNDMwLjA4ZDk1Mi4zMTlkNDMwLjA4ZDk4Mi4wMTZkNDA5LjA4OGQxMDAzLjAwOGQzODguMDk2ZDEwMjRkMzU4LjRkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDk1Mi4zMTlkMzU4LjRkOTYyLjU2ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDMwNy4yZDU5My45MmQyMzUuNTJkNTkzLjkyZDEzMy4xMmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMzA3LjJkNTkzLjkyaFIzZDUwMS43NlI0ZDQzMC4wOFI1ZDcxLjY4UjZkNTczLjQ0UjdkMFI4ZDUwMS43NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjQyUjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTI5b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyOVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQxb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkNzE2LjhkMTk0LjU2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDEwMjRkMzczLjc2ZDQ2My44NzFkMzczLjc2ZDQ4MS4yOGQzNjcuNjE2ZDU0My43NDNkMzY1LjU2OGQ1NjYuMjcxZDM1MC4yMDhkNTgxLjYzMmQzMzQuODQ4ZDU5Ni45OTJkMzE0LjM2OGQ1OTYuOTkyZDI3OS41NTJkNTk2Ljk5MmQyNTcuMDI0ZDU3Mi40MTVkMTk4LjY1NmQ1MDcuOTA0ZDE4OS40NGQ1OTIuODk2ZDEzOC4yNGQ1OTIuODk2ZDEzOC4yNGQ1ODQuNzA0ZDEzOS43NzZkNTY0LjczNmQxNDEuMzEyZDU0NC43NjhkMTQ1LjQwOGQ1MTJkMTQ3LjQ1NmQ0OTAuNDk2ZDE2My44NGQ0NzUuNjQ4ZDE4MC4yMjRkNDYwLjc5OWQyMDEuNzI4ZDQ2MC43OTlkMjMzLjQ3MmQ0NjAuNzk5ZDI1NC45NzZkNDgzLjMyOGQzMTYuNDE2ZDU0Ny44MzlkMzIyLjU2ZDQ2My44NzFkMzczLjc2ZDQ2My44NzFoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1NjMuMlI3ZDBSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0MVIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTJpMmkyaGc6MTI4b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyOFIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQwb1IxZDc2OFIyYWQ0MjQuOTZkOTUyLjMxOWQ0MjQuOTZkOTgyLjAxNmQ0MDMuOTY4ZDEwMDMuMDA4ZDM4Mi45NzZkMTAyNGQzNTMuMjhkMTAyNGQxMzguMjRkMTAyNGQxMDguNTQ0ZDEwMjRkODcuNTUyZDEwMDMuMDA4ZDY2LjU2ZDk4Mi4wMTZkNjYuNTZkOTUyLjMxOWQ2Ni41NmQ4MTkuMmQ2Ni41NmQ3ODkuNTA0ZDg3LjU1MmQ3NjguNTEyZDEwOC41NDRkNzQ3LjUyZDEzOC4yNGQ3NDcuNTJkMzUzLjI4ZDc0Ny41MmQzNTMuMjhkNzEzLjcyOGQyNDIuNjg4ZDYxMC4zMDRkMTM4LjI0ZDcwNS41MzZkMTM4LjI0ZDYyNS42NjRkMTk5LjY4ZDU3MC4zNjdkMTM4LjI0ZDUxMmQxMzguMjRkNDMwLjA4ZDI0NC43MzZkNTI5LjQwOGQzNTUuMzI4ZDQzMC4wOGQzNTUuMzI4ZDUwNi44OGQyODYuNzJkNTY5LjM0NGQzOTkuMzZkNjczLjc5MWQ0MjQuOTZkNjk2LjMxOWQ0MjQuOTZkNzI3LjA0ZDQyNC45NmQ5NTIuMzE5ZDM1My4yOGQ3NTcuNzZkMzAxLjA1NmQ4MDguOTZkMTM4LjI0ZDgwOC45NmQxMzguMjRkOTYyLjU2ZDM1My4yOGQ5NjIuNTZkMzUzLjI4ZDc1Ny43NmhSM2Q0OTYuNjRSNGQ0MjQuOTZSNWQ2Ni41NlI2ZDU5My45MlI3ZDBSOGQ1MjcuMzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0MFIxMmQ2Ni41NlIxM2Q0OTYuNjRSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kyaTFpMmkyaTJpMmkyaGc6MTI3b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyN1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjM5b1IxZDc2OFIyYWQxNDMuMzZkMTAyNGQ3MS42OGQxMDI0ZDcxLjY4ZDcxNi44ZDE0My4zNmQ2NDUuMTJkMTQzLjM2ZDEwMjRkNDgzLjMyOGQ1OTMuOTJkNDE2Ljc2OGQ1OTMuOTJkNDE2Ljc2OGQ1MTJkNDgzLjMyOGQ1MTJkNDgzLjMyOGQ1OTMuOTJkMzQ1LjA4OGQ1OTMuOTJkMjc4LjUyOGQ1OTMuOTJkMjc4LjUyOGQ1MTJkMzQ1LjA4OGQ1MTJkMzQ1LjA4OGQ1OTMuOTJoUjNkMjE1LjA0UjRkMjIxLjE4NFI1ZDE2LjM4NFI2ZDUxMlI3ZDBSOGQ0OTUuNjE2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMzlSMTJkMTYuMzg0UjEzZDIxNS4wNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjZvUjFkNzY4UjJhZDQzMC4wOGQ4MDguOTZkNDMwLjA4ZDgzOC42NTZkNDA5LjA4OGQ4NTkuNjQ4ZDM4OC4wOTZkODgwLjY0ZDM1OC40ZDg4MC42NGQzMjUuNjMyZDg4MC42NGQyOTUuOTM2ZDg4MC42NGQyNzQuNDMyZDg1OS4xMzZkMjE0LjAxNmQ3OTguNzJkMTYzLjg0ZDc5OC43MmQxNjMuODRkODgwLjY0ZDEwMi40ZDg4MC42NGQxMDIuNGQ4MDguOTZkMTAyLjRkNzc4LjI0ZDEyMy4zOTJkNzU3Ljc2ZDE0NC4zODRkNzM3LjI4ZDE3NC4wOGQ3MzcuMjhkMjA3Ljg3MmQ3MzcuMjhkMjM3LjU2OGQ3MzcuMjhkMjU5LjA3MmQ3NTguNzg0ZDMxOS40ODhkODE5LjJkMzY4LjY0ZDgxOS4yZDM2OC42NGQ3MzcuMjhkNDMwLjA4ZDczNy4yOGQ0MzAuMDhkODA4Ljk2aFIzZDUzMi40OFI0ZDQzMC4wOFI1ZDEwMi40UjZkMjg2LjcyUjdkMTQzLjM2UjhkMTg0LjMyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMjZSMTJkMTAyLjRSMTNkNTMyLjQ4UjE0YWkxaTNpM2kyaTNpMmkyaTJpMmkyaTNpM2kyaTNpMmkyaTJpMmkyaGc6MjM4b1IxZDc2OFIyYWQxNDMuMzZkMTAyNGQ3MS42OGQxMDI0ZDcxLjY4ZDcxNi44ZDE0My4zNmQ2NDUuMTJkMTQzLjM2ZDEwMjRkMjI1LjI4ZDU5My45MmQxNTMuNmQ1OTMuOTJkMTEyLjY0ZDUwMS43NmQxMDIuNGQ1MDEuNzZkNjEuNDRkNTkzLjkyZC0xMC4yNGQ1OTMuOTJkNzEuNjhkNDYwLjc5OWQxNDMuMzZkNDYwLjc5OWQyMjUuMjhkNTkzLjkyaFIzZDIxNS4wNFI0ZDIyNS4yOFI1ZC0xMC4yNFI2ZDU2My4yUjdkMFI4ZDU3My40NFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjM4UjEyZC0xMC4yNFIxM2QyMTUuMDRSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjEyNW9SMWQ3NjhSMmFkNzEuNjhkMTAzNC4yNGQxNDMuMzZkMTAzNC4yNGQxNDMuMzZkODE1LjEwNGQxODQuMzJkNzc0LjE0NGQxNDMuMzZkNzMzLjE4NGQxNDMuMzZkNTEyZDcxLjY4ZDUxMmQ3MS42OGQ0NTAuNTU5ZDE0My4zNmQ0NTAuNTU5ZDE3Mi4wMzJkNDUwLjU1OWQxOTMuNTM2ZDQ3Mi4wNjNkMjE1LjA0ZDQ5My41NjhkMjE1LjA0ZDUyMi4yNGQyMTUuMDRkNzM3LjI4ZDI3Ni40OGQ3MzcuMjhkMjc2LjQ4ZDgwOC45NmQyMTUuMDRkODA4Ljk2ZDIxNS4wNGQxMDI0ZDIxNS4wNGQxMDUyLjY3MmQxOTMuNTM2ZDEwNzQuMTc2ZDE3Mi4wMzJkMTA5NS42OGQxNDMuMzZkMTA5NS42OGQ3MS42OGQxMDk1LjY4ZDcxLjY4ZDEwMzQuMjRoUjNkMzI3LjY4UjRkMjc2LjQ4UjVkNzEuNjhSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyNVIxMmQ3MS42OFIxM2QzMjcuNjhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpM2kzaTJpMmhnOjIzN29SMWQ3NjhSMmFkMTQzLjM2ZDEwMjRkNzEuNjhkMTAyNGQ3MS42OGQ3MTYuOGQxNDMuMzZkNjQ1LjEyZDE0My4zNmQxMDI0ZDIyNS4yOGQ0NTAuNTU5ZDEyMi44OGQ1OTMuOTJkNTEuMmQ1OTMuOTJkMTUzLjZkNDUwLjU1OWQyMjUuMjhkNDUwLjU1OWhSM2QyMTUuMDRSNGQyMjUuMjhSNWQ1MS4yUjZkNTczLjQ0UjdkMFI4ZDUyMi4yNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjM3UjEyZDUxLjJSMTNkMjE1LjA0UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTI0b1IxZDc2OFIyYWQxNzQuMDhkMTA5NS42OGQxMDIuNGQxMDk1LjY4ZDEwMi40ZDQ1MC41NTlkMTc0LjA4ZDQ1MC41NTlkMTc0LjA4ZDEwOTUuNjhoUjNkMjc2LjQ4UjRkMTc0LjA4UjVkMTAyLjRSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ0NzEuMDRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyNFIxMmQxMDIuNFIxM2QyNzYuNDhSMTRhaTFpMmkyaTJpMmhnOjIzNm9SMWQ3NjhSMmFkMzkwLjE0NGQxMDI0ZDMxOC40NjRkMTAyNGQzMTguNDY0ZDcxNi44ZDM5MC4xNDRkNjQ1LjEyZDM5MC4xNDRkMTAyNGQ0MTEuNjQ4ZDU5My45MmQzMzkuOTY4ZDU5My45MmQyMzcuNTY4ZDQ1MC41NTlkMzA5LjI0OGQ0NTAuNTU5ZDQxMS42NDhkNTkzLjkyaFIzZDIxNS4wNFI0ZDE0OS41MDRSNWQtMjQuNTc2UjZkNTczLjQ0UjdkMFI4ZDU5OC4wMTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzNlIxMmQtMjQuNTc2UjEzZDIxNS4wNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyM29SMWQ3NjhSMmFkMjU2ZDEwOTUuNjhkMTg0LjMyZDEwOTUuNjhkMTU1LjY0OGQxMDk1LjY4ZDEzNC4xNDRkMTA3NC4xNzZkMTEyLjY0ZDEwNTIuNjcyZDExMi42NGQxMDI0ZDExMi42NGQ4MDguOTZkNTEuMmQ4MDguOTZkNTEuMmQ3MzcuMjhkMTEyLjY0ZDczNy4yOGQxMTIuNjRkNTIyLjI0ZDExMi42NGQ0OTMuNTY4ZDEzNC4xNDRkNDcyLjA2M2QxNTUuNjQ4ZDQ1MC41NTlkMTg0LjMyZDQ1MC41NTlkMjU2ZDQ1MC41NTlkMjU2ZDUxMmQxODQuMzJkNTEyZDE4NC4zMmQ3MzMuMTg0ZDE0My4zNmQ3NzQuMTQ0ZDE4NC4zMmQ4MTUuMTA0ZDE4NC4zMmQxMDM0LjI0ZDI1NmQxMDM0LjI0ZDI1NmQxMDk1LjY4aFIzZDMyNy42OFI0ZDI1NlI1ZDUxLjJSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ1MjIuMjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyM1IxMmQ1MS4yUjEzZDMyNy42OFIxNGFpMWkyaTNpM2kyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjM1b1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDgwOC45NmQzNTguNGQ4ODAuNjRkMTUzLjZkODgwLjY0ZDIxNS4wNGQ4MTkuMmQzNTguNGQ4MTkuMmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDQzMC4wOGQ5NjIuNTZkNDMwLjA4ZDEwMjRkMzUzLjI4ZDU5My45MmQyODYuNzJkNTkzLjkyZDI4Ni43MmQ1MTJkMzUzLjI4ZDUxMmQzNTMuMjhkNTkzLjkyZDIxNS4wNGQ1OTMuOTJkMTQ4LjQ4ZDU5My45MmQxNDguNDhkNTEyZDIxNS4wNGQ1MTJkMjE1LjA0ZDU5My45MmhSM2Q0NzEuMDRSNGQ0MzAuMDhSNWQ3MS42OFI2ZDUxMlI3ZDBSOGQ0NDAuMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzNVIxMmQ3MS42OFIxM2Q0NzEuMDRSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTIyb1IxZDc2OFIyYWQzNDguMTZkMTAyNGQ0MC45NmQxMDI0ZDQwLjk2ZDk1Mi4zMTlkMjY2LjI0ZDczNy4yOGQyNjYuMjRkNzI3LjA0ZDQwLjk2ZDcyNy4wNGQ0MC45NmQ2NjUuNTk5ZDM0OC4xNmQ2NjUuNTk5ZDM0OC4xNmQ3MzcuMjhkMTIyLjg4ZDk1Mi4zMTlkMTIyLjg4ZDk2Mi41NmQzNDguMTZkOTYyLjU2ZDM0OC4xNmQxMDI0aFIzZDM4OS4xMlI0ZDM0OC4xNlI1ZDQwLjk2UjZkMzU4LjRSN2QwUjhkMzE3LjQ0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMjJSMTJkNDAuOTZSMTNkMzg5LjEyUjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjM0b1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDgwOC45NmQzNTguNGQ4ODAuNjRkMTUzLjZkODgwLjY0ZDIxNS4wNGQ4MTkuMmQzNTguNGQ4MTkuMmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDQzMC4wOGQ5NjIuNTZkNDMwLjA4ZDEwMjRkMzY4LjY0ZDU5My45MmQyOTYuOTZkNTkzLjkyZDI1NmQ1MDEuNzZkMjQ1Ljc2ZDUwMS43NmQyMDQuOGQ1OTMuOTJkMTMzLjEyZDU5My45MmQyMTUuMDRkNDYwLjc5OWQyODYuNzJkNDYwLjc5OWQzNjguNjRkNTkzLjkyaFIzZDQ3MS4wNFI0ZDQzMC4wOFI1ZDcxLjY4UjZkNTYzLjJSN2QwUjhkNDkxLjUyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMzRSMTJkNzEuNjhSMTNkNDcxLjA0UjE0YWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJoZzoxMjFvUjFkNzY4UjJhZDQzMC4wOGQxMTY3LjM2ZDQzMC4wOGQxMTk3LjA1NmQ0MDkuMDg4ZDEyMTguMDQ4ZDM4OC4wOTZkMTIzOS4wNGQzNTguNGQxMjM5LjA0ZDYxLjQ0ZDEyMzkuMDRkMTIyLjg4ZDExNzcuNmQzNTguNGQxMTc3LjZkMzU4LjRkOTcyLjhkMzA3LjJkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY2NS41OTlkNDMwLjA4ZDY2NS41OTlkNDMwLjA4ZDExNjcuMzZoUjNkNTA2Ljg4UjRkNDMwLjA4UjVkNjEuNDRSNmQzNTguNFI3ZC0yMTUuMDRSOGQyOTYuOTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyMVIxMmQ2MS40NFIxM2Q1MDYuODhSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaGc6MjMzb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDgwOC45NmQzNTguNGQ4ODAuNjRkMTUzLjZkODgwLjY0ZDIxNS4wNGQ4MTkuMmQzNTguNGQ4MTkuMmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDQzMC4wOGQ5NjIuNTZkNDMwLjA4ZDEwMjRkMzc4Ljg4ZDQ1MC41NTlkMjc2LjQ4ZDU5My45MmQyMDQuOGQ1OTMuOTJkMzA3LjJkNDUwLjU1OWQzNzguODhkNDUwLjU1OWhSM2Q0NzEuMDRSNGQ0MzAuMDhSNWQ3MS42OFI2ZDU3My40NFI3ZDBSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzM1IxMmQ3MS42OFIxM2Q0NzEuMDRSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjBvUjFkNzY4UjJhZDM4OS4xMmQxMDI0ZDMwMS4wNTZkMTAyNGQyMDMuNzc2ZDg4Mi42ODhkMTkzLjUzNmQ4ODIuNjg4ZDk2LjI1NmQxMDI0ZDEwLjI0ZDEwMjRkMTUyLjU3NmQ4MzUuNTg0ZDIwLjQ4ZDY2NS41OTlkMTA2LjQ5NmQ2NjUuNTk5ZDE5NS41ODRkNzkyLjU3NmQyMDUuODI0ZDc5Mi41NzZkMjkwLjgxNmQ2NjUuNTk5ZDM3OC44OGQ2NjUuNTk5ZDI0NC43MzZkODM1LjU4NGQzODkuMTJkMTAyNGhSM2QzOTkuMzZSNGQzODkuMTJSNWQxMC4yNFI2ZDM1OC40UjdkMFI4ZDM0OC4xNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTIwUjEyZDEwLjI0UjEzZDM5OS4zNlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoyMzJvUjFkNzY4UjJhZDQzMC4wOGQxMDI0ZDE0My4zNmQxMDI0ZDExMy42NjRkMTAyNGQ5Mi42NzJkMTAwMy4wMDhkNzEuNjhkOTgyLjAxNmQ3MS42OGQ5NTIuMzE5ZDcxLjY4ZDczNy4yOGQ3MS42OGQ3MDcuNTg0ZDkyLjY3MmQ2ODYuNTkyZDExMy42NjRkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQzNTguNGQ2NjUuNTk5ZDM4OC4wOTZkNjY1LjU5OWQ0MDkuMDg4ZDY4Ni41OTJkNDMwLjA4ZDcwNy41ODRkNDMwLjA4ZDczNy4yOGQ0MzAuMDhkODA4Ljk2ZDM1OC40ZDg4MC42NGQxNTMuNmQ4ODAuNjRkMjE1LjA0ZDgxOS4yZDM1OC40ZDgxOS4yZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQ5NjIuNTZkNDMwLjA4ZDk2Mi41NmQ0MzAuMDhkMTAyNGQzMDcuMmQ1OTMuOTJkMjM1LjUyZDU5My45MmQxMzMuMTJkNDUwLjU1OWQyMDQuOGQ0NTAuNTU5ZDMwNy4yZDU5My45MmhSM2Q0NzEuMDRSNGQ0MzAuMDhSNWQ3MS42OFI2ZDU3My40NFI3ZDBSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzMlIxMmQ3MS42OFIxM2Q0NzEuMDRSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMTlvUjFkNzY4UjJhZDU4My42OGQ2NjUuNTk5ZDQ4NS4zNzZkMTAyNGQzNzIuNzM2ZDEwMjRkMzE3LjQ0ZDc3OS4yNjRkMzA3LjJkNzc5LjI2NGQyNDkuODU2ZDEwMjRkMTM3LjIxNmQxMDI0ZDQwLjk2ZDY2NS41OTlkMTE3Ljc2ZDY2NS41OTlkMTg0LjMyZDk2NC42MDhkMjA0LjhkOTY0LjYwOGQyNzguNTI4ZDY2NS41OTlkMzUwLjIwOGQ2NjUuNTk5ZDQxOS44NGQ5NjQuNjA4ZDQ0MC4zMmQ5NjQuNjA4ZDUwNi44OGQ2NjUuNTk5ZDU4My42OGQ2NjUuNTk5aFIzZDYyNC42NFI0ZDU4My42OFI1ZDQwLjk2UjZkMzU4LjRSN2QwUjhkMzE3LjQ0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMTlSMTJkNDAuOTZSMTNkNjI0LjY0UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoyMzFvUjFkNzY4UjJhZDM3OC44OGQ2NjUuNTk5ZDMxNi40MTZkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZkMzU4LjRkMTAyNGQyMzAuNGQxMDI0ZDIzMC40ZDEwNzYuMjI0ZDI3MS4zNmQxMDc2LjIyNGQzMDEuMDU2ZDEwNzYuMjI0ZDMyMi4wNDhkMTA5Ni43MDRkMzQzLjA0ZDExMTcuMTg0ZDM0My4wNGQxMTQ2Ljg4ZDM0My4wNGQxMTY3LjM2ZDM0My4wNGQxMTk3LjA1NmQzMjIuMDQ4ZDEyMTguMDQ4ZDMwMS4wNTZkMTIzOS4wNGQyNzEuMzZkMTIzOS4wNGQxMDcuNTJkMTIzOS4wNGQxNjguOTZkMTE3Ny42ZDI3MS4zNmQxMTc3LjZkMjcxLjM2ZDExMjYuNGQxNjguOTZkMTEyNi40ZDE2OC45NmQxMDczLjE1MmQyMjAuMTZkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzc4Ljg4ZDY2NS41OTloUjNkMzc4Ljg4UjRkMzc4Ljg4UjVkNzEuNjhSNmQzNTguNFI3ZC0yMTUuMDRSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzMVIxMmQ3MS42OFIxM2QzNzguODhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJoZzoxMThvUjFkNzY4UjJhZDQwNC40OGQ2NjUuNTk5ZDI2NS4yMTZkMTAyNGQxNjAuNzY4ZDEwMjRkMjUuNmQ2NjUuNTk5ZDEwNy41MmQ2NjUuNTk5ZDIwNC44ZDk2NC42MDhkMjI1LjI4ZDk2NC42MDhkMzIyLjU2ZDY2NS41OTlkNDA0LjQ4ZDY2NS41OTloUjNkNDMwLjA4UjRkNDA0LjQ4UjVkMjUuNlI2ZDM1OC40UjdkMFI4ZDMzMi44UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMThSMTJkMjUuNlIxM2Q0MzAuMDhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaGc6MjMwb1IxZDc2OFIyYWQ2NTAuMjRkODA4Ljk2ZDU3OC41NmQ4ODAuNjRkMzk5LjM2ZDg4MC42NGQ0NjAuOGQ4MjAuMjIzZDU3OC41NmQ4MjAuMjIzZDU3OC41NmQ3MjcuMDRkMzg5LjEyZDcyNy4wNGQzODkuMTJkOTYyLjU2ZDY0MGQ5NjIuNTZkNjQwZDEwMjRkMzg5LjEyZDEwMjRkMzY0LjU0NGQxMDI0ZDM0NS4wODhkMTAwOC42NGQzMjUuNjMyZDk5My4yOGQzMTkuNDg4ZDk2OS43MjhkMjU2ZDEwMjRkMTI4ZDEwMjRkOTguMzA0ZDEwMjRkNzcuMzEyZDEwMDMuMDA4ZDU2LjMyZDk4Mi4wMTZkNTYuMzJkOTUyLjMxOWQ1Ni4zMmQ4ODAuNjRkNTYuMzJkODUwLjk0NGQ3Ny4zMTJkODI5Ljk1MmQ5OC4zMDRkODA4Ljk2ZDEyOGQ4MDguOTZkMzA3LjJkODA4Ljk2ZDI0NS43NmQ4NjkuMzc2ZDEyOGQ4NjkuMzc2ZDEyOGQ5NjIuNTZkMzE4LjQ2NGQ5NjIuNTZkMzE3LjQ0ZDk1OS40ODhkMzE3LjQ0ZDk1Mi4zMTlkMzE3LjQ0ZDcyNy4wNGQ1Ni4zMmQ3MjcuMDRkMTE3Ljc2ZDY2NS41OTlkMzE3LjQ0ZDY2NS41OTlkMzUzLjI4ZDcwMS40NGQzODkuMTJkNjY1LjU5OWQ1NzguNTZkNjY1LjU5OWQ2MDguMjU2ZDY2NS41OTlkNjI5LjI0OGQ2ODYuNTkyZDY1MC4yNGQ3MDcuNTg0ZDY1MC4yNGQ3MzcuMjhkNjUwLjI0ZDgwOC45NmhSM2Q2ODAuOTZSNGQ2NTAuMjRSNWQ1Ni4zMlI2ZDM1OC40UjdkMFI4ZDMwMi4wOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjMwUjEyZDU2LjMyUjEzZDY4MC45NlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkzaTJpMmkyaTJpMmkyaTJpM2kzaTJoZzoxMTdvUjFkNzY4UjJhZDQzMC4wOGQxMDI0ZDM1OC40ZDEwMjRkMzU4LjRkOTcyLjhkMzA3LjJkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY2NS41OTlkNDMwLjA4ZDY2NS41OTlkNDMwLjA4ZDEwMjRoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQzNTguNFI3ZDBSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTExN1IxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmhnOjIyOW9SMWQ3NjhSMmFkNDE0LjcyZDEwMjRkMzQzLjA0ZDEwMjRkMzQzLjA0ZDk3MS43NzZkMjgxLjZkMTAyNGQxMjhkMTAyNGQ5OC4zMDRkMTAyNGQ3Ny4zMTJkMTAwMy4wMDhkNTYuMzJkOTgyLjAxNmQ1Ni4zMmQ5NTIuMzE5ZDU2LjMyZDg4MC42NGQ1Ni4zMmQ4NTAuOTQ0ZDc3LjMxMmQ4MjkuOTUyZDk4LjMwNGQ4MDguOTZkMTI4ZDgwOC45NmQzMzIuOGQ4MDguOTZkMjcxLjM2ZDg2OS4zNzZkMTI4ZDg2OS4zNzZkMTI4ZDk2Mi41NmQzNDMuMDRkOTYyLjU2ZDM0My4wNGQ3MjcuMDRkNTYuMzJkNzI3LjA0ZDExNy43NmQ2NjUuNTk5ZDM0My4wNGQ2NjUuNTk5ZDM3Mi43MzZkNjY1LjU5OWQzOTMuNzI4ZDY4Ni41OTJkNDE0LjcyZDcwNy41ODRkNDE0LjcyZDczNy4yOGQ0MTQuNzJkMTAyNGQzNDMuMDRkMjQ3LjgwOGQzNDMuMDRkMjc0LjQzMmQzMjMuNTg0ZDI5My44ODhkMjkyLjg2NGQzMjUuNjMxZDI4MS42ZDMzNi44OTVkMjU5LjA3MmQzMzYuODk1ZDIzNC40OTZkMzM2Ljg5NWQyMTEuOTY4ZDMzNi44OTVkMjAwLjcwNGQzMjUuNjMxZDE2OS45ODRkMjkzLjg4OGQxNTAuNTI4ZDI3NC40MzJkMTUwLjUyOGQyNDcuODA4ZDE1MC41MjhkMjIxLjE4M2QxNjkuOTg0ZDIwMS43MjdkMjAwLjcwNGQxNjkuOTg0ZDIyMC4xNmQxNDguNDhkMjQ2Ljc4NGQxNDguNDhkMjcyLjM4NGQxNDguNDhkMjkyLjg2NGQxNjkuOTg0ZDMyMy41ODRkMjAxLjcyN2QzNDMuMDRkMjIxLjE4M2QzNDMuMDRkMjQ3LjgwOGQyOTcuOTg0ZDI0Ny44MDhkMjQ2Ljc4NGQxOTYuNjA3ZDE5NS41ODRkMjQ3LjgwOGQyNDYuNzg0ZDI5OS4wMDhkMjk3Ljk4NGQyNDcuODA4aFIzZDQ4Ni40UjRkNDE0LjcyUjVkNTYuMzJSNmQ2MTMuMzc2UjdkMFI4ZDU1Ny4wNTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyOVIxMmQ1Ni4zMlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTNpMmkzaTJpM2kyaTNpM2kyaTNpM2kyaTNpMWkyaTJpMmkyaGc6MTE2b1IxZDc2OFIyYWQzMDcuMmQxMDI0ZDE2My44NGQxMDI0ZDEzNC4xNDRkMTAyNGQxMTMuMTUyZDEwMDMuMDA4ZDkyLjE2ZDk4Mi4wMTZkOTIuMTZkOTUyLjMxOWQ5Mi4xNmQ3MjcuMDRkLTEwLjI0ZDcyNy4wNGQ1MS4yZDY2NS41OTlkOTIuMTZkNjY1LjU5OWQ5Mi4xNmQ1OTMuOTJkMTYzLjg0ZDUyMi4yNGQxNjMuODRkNjY1LjU5OWQzMDcuMmQ2NjUuNTk5ZDMwNy4yZDcyNy4wNGQxNjMuODRkNzI3LjA0ZDE2My44NGQ5NjIuNTZkMzA3LjJkOTYyLjU2ZDMwNy4yZDEwMjRoUjNkMzM3LjkyUjRkMzA3LjJSNWQtMTAuMjRSNmQ1MDEuNzZSN2QwUjhkNTEyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMTZSMTJkLTEwLjI0UjEzZDMzNy45MlIxNGFpMWkyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjI4b1IxZDc2OFIyYWQ0MTQuNzJkMTAyNGQzNDMuMDRkMTAyNGQzNDMuMDRkOTcxLjc3NmQyODEuNmQxMDI0ZDEyOGQxMDI0ZDk4LjMwNGQxMDI0ZDc3LjMxMmQxMDAzLjAwOGQ1Ni4zMmQ5ODIuMDE2ZDU2LjMyZDk1Mi4zMTlkNTYuMzJkODgwLjY0ZDU2LjMyZDg1MC45NDRkNzcuMzEyZDgyOS45NTJkOTguMzA0ZDgwOC45NmQxMjhkODA4Ljk2ZDMzMi44ZDgwOC45NmQyNzEuMzZkODY5LjM3NmQxMjhkODY5LjM3NmQxMjhkOTYyLjU2ZDM0My4wNGQ5NjIuNTZkMzQzLjA0ZDcyNy4wNGQ1Ni4zMmQ3MjcuMDRkMTE3Ljc2ZDY2NS41OTlkMzQzLjA0ZDY2NS41OTlkMzcyLjczNmQ2NjUuNTk5ZDM5My43MjhkNjg2LjU5MmQ0MTQuNzJkNzA3LjU4NGQ0MTQuNzJkNzM3LjI4ZDQxNC43MmQxMDI0ZDM1My4yOGQ1OTMuOTJkMjg2LjcyZDU5My45MmQyODYuNzJkNTEyZDM1My4yOGQ1MTJkMzUzLjI4ZDU5My45MmQyMTUuMDRkNTkzLjkyZDE0OC40OGQ1OTMuOTJkMTQ4LjQ4ZDUxMmQyMTUuMDRkNTEyZDIxNS4wNGQ1OTMuOTJoUjNkNDg2LjRSNGQ0MTQuNzJSNWQ1Ni4zMlI2ZDUxMlI3ZDBSOGQ0NTUuNjhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyOFIxMmQ1Ni4zMlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE1b1IxZDc2OFIyYWQzNjMuNTJkNjY1LjU5OWQzMDEuMDU2ZDcyNy4wNGQxMjhkNzI3LjA0ZDEyOGQ4MDguOTZkMjcxLjM2ZDgwOC45NmQzMDEuMDU2ZDgwOC45NmQzMjIuMDQ4ZDgyOS45NTJkMzQzLjA0ZDg1MC45NDRkMzQzLjA0ZDg4MC42NGQzNDMuMDRkOTUyLjMxOWQzNDMuMDRkOTgyLjAxNmQzMjIuMDQ4ZDEwMDMuMDA4ZDMwMS4wNTZkMTAyNGQyNzEuMzZkMTAyNGQ1Ni4zMmQxMDI0ZDU2LjMyZDk2Mi41NmQyNzEuMzZkOTYyLjU2ZDI3MS4zNmQ4NzAuNGQxMjhkODcwLjRkOTguMzA0ZDg3MC40ZDc3LjMxMmQ4NDkuNDA4ZDU2LjMyZDgyOC40MTVkNTYuMzJkNzk4LjcyZDU2LjMyZDczNy4yOGQ1Ni4zMmQ3MDcuNTg0ZDc3LjMxMmQ2ODYuNTkyZDk4LjMwNGQ2NjUuNTk5ZDEyOGQ2NjUuNTk5ZDM2My41MmQ2NjUuNTk5aFIzZDM5OS4zNlI0ZDM2My41MlI1ZDU2LjMyUjZkMzU4LjRSN2QwUjhkMzAyLjA4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMTVSMTJkNTYuMzJSMTNkMzk5LjM2UjE0YWkxaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmhnOjIyN29SMWQ3NjhSMmFkNDE0LjcyZDEwMjRkMzQzLjA0ZDEwMjRkMzQzLjA0ZDk3MS43NzZkMjgxLjZkMTAyNGQxMjhkMTAyNGQ5OC4zMDRkMTAyNGQ3Ny4zMTJkMTAwMy4wMDhkNTYuMzJkOTgyLjAxNmQ1Ni4zMmQ5NTIuMzE5ZDU2LjMyZDg4MC42NGQ1Ni4zMmQ4NTAuOTQ0ZDc3LjMxMmQ4MjkuOTUyZDk4LjMwNGQ4MDguOTZkMTI4ZDgwOC45NmQzMzIuOGQ4MDguOTZkMjcxLjM2ZDg2OS4zNzZkMTI4ZDg2OS4zNzZkMTI4ZDk2Mi41NmQzNDMuMDRkOTYyLjU2ZDM0My4wNGQ3MjcuMDRkNTYuMzJkNzI3LjA0ZDExNy43NmQ2NjUuNTk5ZDM0My4wNGQ2NjUuNTk5ZDM3Mi43MzZkNjY1LjU5OWQzOTMuNzI4ZDY4Ni41OTJkNDE0LjcyZDcwNy41ODRkNDE0LjcyZDczNy4yOGQ0MTQuNzJkMTAyNGQzNTguNGQ0NjMuODcxZDM1OC40ZDQ4MS4yOGQzNTIuMjU2ZDU0My43NDNkMzUwLjIwOGQ1NjYuMjcxZDMzNC44NDhkNTgxLjYzMmQzMTkuNDg4ZDU5Ni45OTJkMjk5LjAwOGQ1OTYuOTkyZDI2NC4xOTJkNTk2Ljk5MmQyNDEuNjY0ZDU3Mi40MTVkMTgzLjI5NmQ1MDcuOTA0ZDE3NC4wOGQ1OTIuODk2ZDEyMi44OGQ1OTIuODk2ZDEyMi44OGQ1ODQuNzA0ZDEyNC40MTZkNTY0LjczNmQxMjUuOTUyZDU0NC43NjhkMTMwLjA0OGQ1MTJkMTMyLjA5NmQ0OTAuNDk2ZDE0OC40OGQ0NzUuNjQ4ZDE2NC44NjRkNDYwLjc5OWQxODYuMzY4ZDQ2MC43OTlkMjE4LjExMmQ0NjAuNzk5ZDIzOS42MTZkNDgzLjMyOGQzMDEuMDU2ZDU0Ny44MzlkMzA3LjJkNDYzLjg3MWQzNTguNGQ0NjMuODcxaFIzZDQ4Ni40UjRkNDE0LjcyUjVkNTYuMzJSNmQ1NjMuMlI3ZDBSOGQ1MDYuODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyN1IxMmQ1Ni4zMlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTJpMmkyaGc6MTE0b1IxZDc2OFIyYWQzNTguNGQ4MDguOTZkMjg2LjcyZDgwOC45NmQyODYuNzJkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDEwMjRkNzEuNjhkMTAyNGQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ3MTYuOGQxOTQuNTZkNjY1LjU5OWQyODYuNzJkNjY1LjU5OWQzMTYuNDE2ZDY2NS41OTlkMzM3LjQwOGQ2ODYuNTkyZDM1OC40ZDcwNy41ODRkMzU4LjRkNzM3LjI4ZDM1OC40ZDgwOC45NmhSM2QzOTkuMzZSNGQzNTguNFI1ZDcxLjY4UjZkMzU4LjRSN2QwUjhkMjg2LjcyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMTRSMTJkNzEuNjhSMTNkMzk5LjM2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJoZzoyMjZvUjFkNzY4UjJhZDQxNC43MmQxMDI0ZDM0My4wNGQxMDI0ZDM0My4wNGQ5NzEuNzc2ZDI4MS42ZDEwMjRkMTI4ZDEwMjRkOTguMzA0ZDEwMjRkNzcuMzEyZDEwMDMuMDA4ZDU2LjMyZDk4Mi4wMTZkNTYuMzJkOTUyLjMxOWQ1Ni4zMmQ4ODAuNjRkNTYuMzJkODUwLjk0NGQ3Ny4zMTJkODI5Ljk1MmQ5OC4zMDRkODA4Ljk2ZDEyOGQ4MDguOTZkMzMyLjhkODA4Ljk2ZDI3MS4zNmQ4NjkuMzc2ZDEyOGQ4NjkuMzc2ZDEyOGQ5NjIuNTZkMzQzLjA0ZDk2Mi41NmQzNDMuMDRkNzI3LjA0ZDU2LjMyZDcyNy4wNGQxMTcuNzZkNjY1LjU5OWQzNDMuMDRkNjY1LjU5OWQzNzIuNzM2ZDY2NS41OTlkMzkzLjcyOGQ2ODYuNTkyZDQxNC43MmQ3MDcuNTg0ZDQxNC43MmQ3MzcuMjhkNDE0LjcyZDEwMjRkMzY4LjY0ZDU5My45MmQyOTYuOTZkNTkzLjkyZDI1NmQ1MDEuNzZkMjQ1Ljc2ZDUwMS43NmQyMDQuOGQ1OTMuOTJkMTMzLjEyZDU5My45MmQyMTUuMDRkNDYwLjc5OWQyODYuNzJkNDYwLjc5OWQzNjguNjRkNTkzLjkyaFIzZDQ4Ni40UjRkNDE0LjcyUjVkNTYuMzJSNmQ1NjMuMlI3ZDBSOGQ1MDYuODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyNlIxMmQ1Ni4zMlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjExM29SMWQ3NjhSMmFkNDMwLjA4ZDExNzcuNmQzNTguNGQxMjQ5LjI4ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNzM3LjI4ZDcxLjY4ZDcwNy41ODRkOTIuNjcyZDY4Ni41OTJkMTEzLjY2NGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMTc3LjZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY3NS44MzlkMzA3LjJkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQzNTguNFI3ZC0yMjUuMjhSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTExM1IxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTFpMmkyaTJpMmkyaGc6MjI1b1IxZDc2OFIyYWQ0MTQuNzJkMTAyNGQzNDMuMDRkMTAyNGQzNDMuMDRkOTcxLjc3NmQyODEuNmQxMDI0ZDEyOGQxMDI0ZDk4LjMwNGQxMDI0ZDc3LjMxMmQxMDAzLjAwOGQ1Ni4zMmQ5ODIuMDE2ZDU2LjMyZDk1Mi4zMTlkNTYuMzJkODgwLjY0ZDU2LjMyZDg1MC45NDRkNzcuMzEyZDgyOS45NTJkOTguMzA0ZDgwOC45NmQxMjhkODA4Ljk2ZDMzMi44ZDgwOC45NmQyNzEuMzZkODY5LjM3NmQxMjhkODY5LjM3NmQxMjhkOTYyLjU2ZDM0My4wNGQ5NjIuNTZkMzQzLjA0ZDcyNy4wNGQ1Ni4zMmQ3MjcuMDRkMTE3Ljc2ZDY2NS41OTlkMzQzLjA0ZDY2NS41OTlkMzcyLjczNmQ2NjUuNTk5ZDM5My43MjhkNjg2LjU5MmQ0MTQuNzJkNzA3LjU4NGQ0MTQuNzJkNzM3LjI4ZDQxNC43MmQxMDI0ZDM2OC42NGQ0NTAuNTU5ZDI2Ni4yNGQ1OTMuOTJkMTk0LjU2ZDU5My45MmQyOTYuOTZkNDUwLjU1OWQzNjguNjRkNDUwLjU1OWhSM2Q0ODYuNFI0ZDQxNC43MlI1ZDU2LjMyUjZkNTczLjQ0UjdkMFI4ZDUxNy4xMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjI1UjEyZDU2LjMyUjEzZDQ4Ni40UjE0YWkxaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmhnOjExMm9SMWQ3NjhSMmFkNDMwLjA4ZDk1Mi4zMTlkNDMwLjA4ZDk4Mi4wMTZkNDA5LjA4OGQxMDAzLjAwOGQzODguMDk2ZDEwMjRkMzU4LjRkMTAyNGQxNDMuMzZkMTAyNGQxNDMuMzZkMTIzOS4wNGQ3MS42OGQxMjM5LjA0ZDcxLjY4ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMTQzLjM2ZDcxNi44ZDE5NC41NmQ2NjUuNTk5ZDM1OC40ZDY2NS41OTlkMzg4LjA5NmQ2NjUuNTk5ZDQwOS4wODhkNjg2LjU5MmQ0MzAuMDhkNzA3LjU4NGQ0MzAuMDhkNzM3LjI4ZDQzMC4wOGQ5NTIuMzE5ZDM1OC40ZDk2Mi41NmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkMTAxMy43NmQxOTQuNTZkOTYyLjU2ZDM1OC40ZDk2Mi41NmhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDM1OC40UjdkLTIxNS4wNFI4ZDI4Ni43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTEyUjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmkyaGc6MjI0b1IxZDc2OFIyYWQ0MTQuNzJkMTAyNGQzNDMuMDRkMTAyNGQzNDMuMDRkOTcxLjc3NmQyODEuNmQxMDI0ZDEyOGQxMDI0ZDk4LjMwNGQxMDI0ZDc3LjMxMmQxMDAzLjAwOGQ1Ni4zMmQ5ODIuMDE2ZDU2LjMyZDk1Mi4zMTlkNTYuMzJkODgwLjY0ZDU2LjMyZDg1MC45NDRkNzcuMzEyZDgyOS45NTJkOTguMzA0ZDgwOC45NmQxMjhkODA4Ljk2ZDMzMi44ZDgwOC45NmQyNzEuMzZkODY5LjM3NmQxMjhkODY5LjM3NmQxMjhkOTYyLjU2ZDM0My4wNGQ5NjIuNTZkMzQzLjA0ZDcyNy4wNGQ1Ni4zMmQ3MjcuMDRkMTE3Ljc2ZDY2NS41OTlkMzQzLjA0ZDY2NS41OTlkMzcyLjczNmQ2NjUuNTk5ZDM5My43MjhkNjg2LjU5MmQ0MTQuNzJkNzA3LjU4NGQ0MTQuNzJkNzM3LjI4ZDQxNC43MmQxMDI0ZDMwNy4yZDU5My45MmQyMzUuNTJkNTkzLjkyZDEzMy4xMmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMzA3LjJkNTkzLjkyaFIzZDQ4Ni40UjRkNDE0LjcyUjVkNTYuMzJSNmQ1NzMuNDRSN2QwUjhkNTE3LjEyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMjRSMTJkNTYuMzJSMTNkNDg2LjRSMTRhaTFpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaGdoeTg6Zm9udE5hbWV5NzpJY2VsYW5kZw"},{ name : "NME_font_DefaultFont", data : "s134298:b3k0Omhhc2hxOjExMW95Njphc2NlbnRkNzY4eTQ6ZGF0YWFkNDMwLjA4ZDk1Mi4zMTlkNDMwLjA4ZDk4Mi4wMTZkNDA5LjA4OGQxMDAzLjAwOGQzODguMDk2ZDEwMjRkMzU4LjRkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDk1Mi4zMTlkMzU4LjRkOTYyLjU2ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2aHk2Ol93aWR0aGQ1MDEuNzZ5NDp4TWF4ZDQzMC4wOHk0OnhNaW5kNzEuNjh5NDp5TWF4ZDM1OC40eTQ6eU1pbmQweTc6X2hlaWdodGQyODYuNzJ5NzpsZWFkaW5nZC0zMC43Mnk3OmRlc2NlbnRkMjI1LjI4eTg6Y2hhckNvZGVpMTExeTE1OmxlZnRzaWRlQmVhcmluZ2Q3MS42OHkxMjphZHZhbmNlV2lkdGhkNTAxLjc2eTg6Y29tbWFuZHNhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaGc6MjIzb1IxZDc2OFIyYWQ0NDAuMzJkOTUyLjMxOWQ0NDAuMzJkOTgyLjAxNmQ0MTkuMzI4ZDEwMDMuMDA4ZDM5OC4zMzZkMTAyNGQzNjguNjRkMTAyNGQxNzQuMDhkMTAyNGQyMzUuNTJkOTYyLjU2ZDM2OC42NGQ5NjIuNTZkMzY4LjY0ZDcyNy4wNGQyMzUuNTJkNzI3LjA0ZDI5Ni45NmQ2NjUuNTk5ZDI5Ni45NmQ1MTJkMTUzLjZkNTEyZDE1My42ZDEwMjRkODEuOTJkMTAyNGQ4MS45MmQ1MjIuMjRkODEuOTJkNDkyLjU0NGQxMDIuOTEyZDQ3MS41NTJkMTIzLjkwNGQ0NTAuNTU5ZDE1My42ZDQ1MC41NTlkMjk2Ljk2ZDQ1MC41NTlkMzI2LjY1NmQ0NTAuNTU5ZDM0Ny42NDhkNDcxLjU1MmQzNjguNjRkNDkyLjU0NGQzNjguNjRkNTIyLjI0ZDM2OC42NGQ2MTQuNGQzMTcuNDRkNjY1LjU5OWQzNjguNjRkNjY1LjU5OWQzOTguMzM2ZDY2NS41OTlkNDE5LjMyOGQ2ODYuNTkyZDQ0MC4zMmQ3MDcuNTg0ZDQ0MC4zMmQ3MzcuMjhkNDQwLjMyZDk1Mi4zMTloUjNkNTEyUjRkNDQwLjMyUjVkODEuOTJSNmQ1NzMuNDRSN2QwUjhkNDkxLjUyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMjNSMTJkODEuOTJSMTNkNTEyUjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTNpM2kyaGc6MTEwb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkNzE2LjhkMTk0LjU2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDEwMjRoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQzNTguNFI3ZDBSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTExMFIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmhnOjIyMm9SMWQ3NjhSMmFkNTIyLjI0ZDg4MC42NGQ1MjIuMjRkOTA5LjMxMmQ1MDAuNzM2ZDkzMC44MTZkNDc5LjIzMmQ5NTIuMzE5ZDQ1MC41NmQ5NTIuMzE5ZDE3NC4wOGQ5NTIuMzE5ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDU5My45MmQ0NTAuNTZkNTkzLjkyZDQ3OS4yMzJkNTkzLjkyZDUwMC43MzZkNjE1LjQyNGQ1MjIuMjRkNjM2LjkyOGQ1MjIuMjRkNjY1LjU5OWQ1MjIuMjRkODgwLjY0ZDQ0MC4zMmQ4ODAuNjRkNDQwLjMyZDY2NS41OTlkMTc0LjA4ZDY2NS41OTlkMTc0LjA4ZDk0Mi4wOGQyMzUuNTJkODgwLjY0ZDQ0MC4zMmQ4ODAuNjRoUjNkNTkzLjkyUjRkNTIyLjI0UjVkOTIuMTZSNmQ1MDEuNzZSN2QwUjhkNDA5LjZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyMlIxMmQ5Mi4xNlIxM2Q1OTMuOTJSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaTJoZzoxMDlvUjFkNzY4UjJhZDY3NS44NGQxMDI0ZDYwNC4xNmQxMDI0ZDYwNC4xNmQ3MjcuMDRkNDA5LjZkNzI3LjA0ZDQwOS42ZDEwMjRkMzM3LjkyZDEwMjRkMzM3LjkyZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkNzE2LjhkMTk0LjU2ZDY2NS41OTlkMzM3LjkyZDY2NS41OTlkNDAwLjM4NGQ2NjUuNTk5ZDQwOC41NzZkNzE3LjgyNGQ0NjAuOGQ2NjUuNTk5ZDYwNC4xNmQ2NjUuNTk5ZDYzMy44NTZkNjY1LjU5OWQ2NTQuODQ4ZDY4Ni41OTJkNjc1Ljg0ZDcwNy41ODRkNjc1Ljg0ZDczNy4yOGQ2NzUuODRkMTAyNGhSM2Q3NDcuNTJSNGQ2NzUuODRSNWQ3MS42OFI2ZDM1OC40UjdkMFI4ZDI4Ni43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTA5UjEyZDcxLjY4UjEzZDc0Ny41MlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kyaTJpM2kzaTJoZzoyMjFvUjFkNzY4UjJhZDUwMS43NmQ4MDguOTZkNTAxLjc2ZDgzOC42NTZkNDgwLjc2OGQ4NTkuNjQ4ZDQ1OS43NzZkODgwLjY0ZDQzMC4wOGQ4ODAuNjRkMzI3LjY4ZDg4MC42NGQzMjcuNjhkMTAyNGQyNDUuNzZkMTAyNGQyNDUuNzZkODgwLjY0ZDE0My4zNmQ4ODAuNjRkMTEzLjY2NGQ4ODAuNjRkOTIuNjcyZDg1OS42NDhkNzEuNjhkODM4LjY1NmQ3MS42OGQ4MDguOTZkNzEuNjhkNTIyLjI0ZDE1My42ZDUyMi4yNGQxNTMuNmQ4MDguOTZkNDE5Ljg0ZDgwOC45NmQ0MTkuODRkNTIyLjI0ZDUwMS43NmQ1MjIuMjRkNTAxLjc2ZDgwOC45NmQ0MDkuNmQzMDcuMTk5ZDMwNy4yZDQ1MC41NTlkMjM1LjUyZDQ1MC41NTlkMzM3LjkyZDMwNy4xOTlkNDA5LjZkMzA3LjE5OWhSM2Q1NDIuNzJSNGQ1MDEuNzZSNWQ3MS42OFI2ZDcxNi44UjdkMFI4ZDY0NS4xMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjIxUjEyZDcxLjY4UjEzZDU0Mi43MlIxNGFpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjEwOG9SMWQ3NjhSMmFkMTUzLjZkMTAyNGQ4MS45MmQxMDI0ZDgxLjkyZDUwMS43NmQxNTMuNmQ0MzAuMDhkMTUzLjZkMTAyNGhSM2QyMzUuNTJSNGQxNTMuNlI1ZDgxLjkyUjZkNTkzLjkyUjdkMFI4ZDUxMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTA4UjEyZDgxLjkyUjEzZDIzNS41MlIxNGFpMWkyaTJpMmkyaGc6MjIwb1IxZDc2OFIyYWQ1MjIuMjRkMTAyNGQ0NDAuMzJkMTAyNGQ0NDAuMzJkOTYyLjU2ZDM3OC44OGQxMDI0ZDE2My44NGQxMDI0ZDEzNC4xNDRkMTAyNGQxMTMuMTUyZDEwMDMuMDA4ZDkyLjE2ZDk4Mi4wMTZkOTIuMTZkOTUyLjMxOWQ5Mi4xNmQ1MjIuMjRkMTc0LjA4ZDUyMi4yNGQxNzQuMDhkOTUyLjMxOWQ0NDAuMzJkOTUyLjMxOWQ0NDAuMzJkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDA5LjZkNDUwLjU1OWQzNDMuMDRkNDUwLjU1OWQzNDMuMDRkMzY4LjY0ZDQwOS42ZDM2OC42NGQ0MDkuNmQ0NTAuNTU5ZDI3MS4zNmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMjA0LjhkMzY4LjY0ZDI3MS4zNmQzNjguNjRkMjcxLjM2ZDQ1MC41NTloUjNkNTgzLjY4UjRkNTIyLjI0UjVkOTIuMTZSNmQ2NTUuMzZSN2QwUjhkNTYzLjJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyMFIxMmQ5Mi4xNlIxM2Q1ODMuNjhSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTA3b1IxZDc2OFIyYWQ0NjAuOGQ2NjUuNTk5ZDI5Ny45ODRkODA3LjkzNmQyOTcuOTg0ZDgxOC4xNzVkMzY4LjY0ZDgxOC4xNzVkMzk4LjMzNmQ4MTguMTc1ZDQxOS4zMjhkODM5LjE2OGQ0NDAuMzJkODYwLjE2ZDQ0MC4zMmQ4ODkuODU2ZDQ0MC4zMmQxMDI0ZDM2OC42NGQxMDI0ZDM2OC42NGQ4NzAuNGQxNTMuNmQ4NzAuNGQxNTMuNmQxMDI0ZDgxLjkyZDEwMjRkODEuOTJkNTAxLjc2ZDE1My42ZDQzMC4wOGQxNTMuNmQ4NjEuMTg0ZDM3My43NmQ2NjUuNTk5ZDQ2MC44ZDY2NS41OTloUjNkNTAxLjc2UjRkNDYwLjhSNWQ4MS45MlI2ZDU5My45MlI3ZDBSOGQ1MTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEwN1IxMmQ4MS45MlIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIxOW9SMWQ3NjhSMmFkNTIyLjI0ZDEwMjRkNDQwLjMyZDEwMjRkNDQwLjMyZDk2Mi41NmQzNzguODhkMTAyNGQxNjMuODRkMTAyNGQxMzQuMTQ0ZDEwMjRkMTEzLjE1MmQxMDAzLjAwOGQ5Mi4xNmQ5ODIuMDE2ZDkyLjE2ZDk1Mi4zMTlkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDk1Mi4zMTlkNDQwLjMyZDk1Mi4zMTlkNDQwLjMyZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQxMDI0ZDQyNC45NmQ0NTAuNTU5ZDM1My4yOGQ0NTAuNTU5ZDMxMi4zMmQzNTguNGQzMDIuMDhkMzU4LjRkMjYxLjEyZDQ1MC41NTlkMTg5LjQ0ZDQ1MC41NTlkMjcxLjM2ZDMxNy40MzlkMzQzLjA0ZDMxNy40MzlkNDI0Ljk2ZDQ1MC41NTloUjNkNTgzLjY4UjRkNTIyLjI0UjVkOTIuMTZSNmQ3MDYuNTZSN2QwUjhkNjE0LjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIxOVIxMmQ5Mi4xNlIxM2Q1ODMuNjhSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjEwNm9SMWQ3NjhSMmFkMTQ4LjQ4ZDYwNC4xNmQ3Ni44ZDYwNC4xNmQ3Ni44ZDUyMi4yNGQxNDguNDhkNTIyLjI0ZDE0OC40OGQ2MDQuMTZkMTQ4LjQ4ZDExNjcuMzZkMTQ4LjQ4ZDExOTcuMDU2ZDEyNy40ODhkMTIxOC4wNDhkMTA2LjQ5NmQxMjM5LjA0ZDc2LjhkMTIzOS4wNGQtMzUuODRkMTIzOS4wNGQyNi42MjRkMTE3Ny42ZDc2LjhkMTE3Ny42ZDc2LjhkNzE2LjhkMTQ4LjQ4ZDY0NS4xMmQxNDguNDhkMTE2Ny4zNmhSM2QyMjUuMjhSNGQxNDguNDhSNWQtMzUuODRSNmQ1MDEuNzZSN2QtMjE1LjA0UjhkNTM3LjZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEwNlIxMmQtMzUuODRSMTNkMjI1LjI4UjE0YWkxaTJpMmkyaTJpMWkzaTNpMmkyaTJpMmkyaTJoZzoyMThvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ5NjIuNTZkMzc4Ljg4ZDEwMjRkMTYzLjg0ZDEwMjRkMTM0LjE0NGQxMDI0ZDExMy4xNTJkMTAwMy4wMDhkOTIuMTZkOTgyLjAxNmQ5Mi4xNmQ5NTIuMzE5ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkMTAyNGQ0MzAuMDhkMzA3LjE5OWQzMjcuNjhkNDUwLjU1OWQyNTZkNDUwLjU1OWQzNTguNGQzMDcuMTk5ZDQzMC4wOGQzMDcuMTk5aFIzZDU4My42OFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzE2LjhSN2QwUjhkNjI0LjY0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMThSMTJkOTIuMTZSMTNkNTgzLjY4UjE0YWkxaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTA1b1IxZDc2OFIyYWQxNDMuMzZkNjA0LjE2ZDcxLjY4ZDYwNC4xNmQ3MS42OGQ1MjIuMjRkMTQzLjM2ZDUyMi4yNGQxNDMuMzZkNjA0LjE2ZDE0My4zNmQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkNzE2LjhkMTQzLjM2ZDY0NS4xMmQxNDMuMzZkMTAyNGhSM2QyMTUuMDRSNGQxNDMuMzZSNWQ3MS42OFI2ZDUwMS43NlI3ZDBSOGQ0MzAuMDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEwNVIxMmQ3MS42OFIxM2QyMTUuMDRSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyMTdvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ5NjIuNTZkMzc4Ljg4ZDEwMjRkMTYzLjg0ZDEwMjRkMTM0LjE0NGQxMDI0ZDExMy4xNTJkMTAwMy4wMDhkOTIuMTZkOTgyLjAxNmQ5Mi4xNmQ5NTIuMzE5ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkMTAyNGQzNTMuMjhkNDUwLjU1OWQyODEuNmQ0NTAuNTU5ZDE3OS4yZDMwNy4xOTlkMjUwLjg4ZDMwNy4xOTlkMzUzLjI4ZDQ1MC41NTloUjNkNTgzLjY4UjRkNTIyLjI0UjVkOTIuMTZSNmQ3MTYuOFI3ZDBSOGQ2MjQuNjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIxN1IxMmQ5Mi4xNlIxM2Q1ODMuNjhSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMDRvUjFkNzY4UjJhZDQ0MC4zMmQxMDI0ZDM2OC42NGQxMDI0ZDM2OC42NGQ3MjcuMDRkMTUzLjZkNzI3LjA0ZDE1My42ZDEwMjRkODEuOTJkMTAyNGQ4MS45MmQ1MDEuNzZkMTUzLjZkNDMwLjA4ZDE1My42ZDcxNi44ZDIwNC44ZDY2NS41OTlkMzY4LjY0ZDY2NS41OTlkMzk4LjMzNmQ2NjUuNTk5ZDQxOS4zMjhkNjg2LjU5MmQ0NDAuMzJkNzA3LjU4NGQ0NDAuMzJkNzM3LjI4ZDQ0MC4zMmQxMDI0aFIzZDUxMlI0ZDQ0MC4zMlI1ZDgxLjkyUjZkNTkzLjkyUjdkMFI4ZDUxMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTA0UjEyZDgxLjkyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaGc6MjE2b1IxZDc2OFIyYWQ1NTIuOTZkNTMyLjQ4ZDUwOS45NTJkNTgxLjYzMmQ1MjIuMjRkNTkzLjkyZDUyMi4yNGQ5NTIuMzE5ZDUyMi4yNGQ5ODIuMDE2ZDUwMC43MzZkMTAwMy4wMDhkNDc5LjIzMmQxMDI0ZDQ1MC41NmQxMDI0ZDE2My44NGQxMDI0ZDE1MC41MjhkMTAxMC42ODhkMTA3LjUyZDEwNjcuMDA4ZDYxLjQ0ZDEwMTcuODU2ZDEwMy40MjRkOTYzLjU4NGQ5Mi4xNmQ5NTIuMzE5ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDYxLjgyNGQ1MzMuNTAzZDUwNC44MzJkNDg0LjM1MmQ1NTIuOTZkNTMyLjQ4ZDQwMS40MDhkNjA0LjE2ZDQwMS40MDhkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3OC41OTJkMTg0LjMyZDg3OC41OTJkNDAxLjQwOGQ2MDQuMTZkNDQwLjMyZDk1Mi4zMTlkNDQwLjMyZDY2NC41NzZkNDMwLjA4ZDY2NC41NzZkMjA4Ljg5NmQ5NDIuMDhkMjA4Ljg5NmQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5aFIzZDYxNC40UjRkNTUyLjk2UjVkNjEuNDRSNmQ1MzkuNjQ4UjdkLTQzLjAwOFI4ZDQ3OC4yMDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIxNlIxMmQ2MS40NFIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkxaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmhnOjEwM29SMWQ3NjhSMmFkNDcxLjA0ZDY2NS41OTlkNDA5LjZkNzI3LjA0ZDE1My42ZDcyNy4wNGQxNTMuNmQ5NjIuNTZkMzY4LjY0ZDk2Mi41NmQzNjguNjRkNzU3Ljc2ZDQ0MC4zMmQ3NTcuNzZkNDQwLjMyZDExNjcuMzZkNDQwLjMyZDExOTcuMDU2ZDQxOS4zMjhkMTIxOC4wNDhkMzk4LjMzNmQxMjM5LjA0ZDM2OC42NGQxMjM5LjA0ZDcxLjY4ZDEyMzkuMDRkMTMzLjEyZDExNzcuNmQzNjguNjRkMTE3Ny42ZDM2OC42NGQ5NzEuNzc2ZDMwNy4yZDEwMjRkMTUzLjZkMTAyNGQxMjMuOTA0ZDEwMjRkMTAyLjkxMmQxMDAzLjAwOGQ4MS45MmQ5ODIuMDE2ZDgxLjkyZDk1Mi4zMTlkODEuOTJkNzM3LjI4ZDgxLjkyZDcwNy41ODRkMTAyLjkxMmQ2ODYuNTkyZDEyMy45MDRkNjY1LjU5OWQxNTMuNmQ2NjUuNTk5ZDQ3MS4wNGQ2NjUuNTk5aFIzZDUxNy4xMlI0ZDQ3MS4wNFI1ZDcxLjY4UjZkMzU4LjRSN2QtMjE1LjA0UjhkMjg2LjcyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMDNSMTJkNzEuNjhSMTNkNTE3LjEyUjE0YWkxaTJpMmkyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaGc6MjE1b1IxZDc2OFIyYWQ0MTkuODRkOTQ2LjE3NmQzNjkuNjY0ZDk5Ni4zNTJkMjY2LjI0ZDg5NC45NzZkMTYyLjgxNmQ5OTYuMzUyZDExMi42NGQ5NDYuMTc2ZDIxNS4wNGQ4NDQuOGQxMTIuNjRkNzQzLjQyNGQxNjIuODE2ZDY5My4yNDhkMjY2LjI0ZDc5NC42MjRkMzY5LjY2NGQ2OTMuMjQ4ZDQxOS44NGQ3NDMuNDI0ZDMxNy40NGQ4NDQuOGQ0MTkuODRkOTQ2LjE3NmhSM2Q1MzIuNDhSNGQ0MTkuODRSNWQxMTIuNjRSNmQzMzAuNzUyUjdkMjcuNjQ4UjhkMjE4LjExMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjE1UjEyZDExMi42NFIxM2Q1MzIuNDhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxMDJvUjFkNzY4UjJhZDM4OS4xMmQ0NTAuNTU5ZDMyNi42NTZkNTEyZDE1My42ZDUxMmQxNTMuNmQ3MDYuNTZkMTk1LjU4NGQ2NjUuNTk5ZDM3OC44OGQ2NjUuNTk5ZDMxNi40MTZkNzI3LjA0ZDE1My42ZDcyNy4wNGQxNTMuNmQxMDI0ZDgxLjkyZDEwMjRkODEuOTJkNTIyLjI0ZDgxLjkyZDQ5Mi41NDRkMTAyLjkxMmQ0NzEuNTUyZDEyMy45MDRkNDUwLjU1OWQxNTMuNmQ0NTAuNTU5ZDM4OS4xMmQ0NTAuNTU5aFIzZDM3My43NlI0ZDM4OS4xMlI1ZDgxLjkyUjZkNTczLjQ0UjdkMFI4ZDQ5MS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTAyUjEyZDgxLjkyUjEzZDM3My43NlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaGc6MjE0b1IxZDc2OFIyYWQ1MTcuMTJkOTUyLjMxOWQ1MTcuMTJkOTgyLjAxNmQ0OTYuMTI4ZDEwMDMuMDA4ZDQ3NS4xMzZkMTAyNGQ0NDUuNDRkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkNTkzLjkyZDg3LjA0ZDU2NC4yMjNkMTA4LjAzMmQ1NDMuMjMyZDEyOS4wMjRkNTIyLjI0ZDE1OC43MmQ1MjIuMjRkNDQ1LjQ0ZDUyMi4yNGQ0NzUuMTM2ZDUyMi4yNGQ0OTYuMTI4ZDU0My4yMzJkNTE3LjEyZDU2NC4yMjNkNTE3LjEyZDU5My45MmQ1MTcuMTJkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDU5My45MmQxNjguOTZkNTkzLjkyZDE2OC45NmQ5NTIuMzE5ZDQzNS4yZDk1Mi4zMTlkNDA5LjZkNDUwLjU1OWQzNDMuMDRkNDUwLjU1OWQzNDMuMDRkMzY4LjY0ZDQwOS42ZDM2OC42NGQ0MDkuNmQ0NTAuNTU5ZDI3MS4zNmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMjA0LjhkMzY4LjY0ZDI3MS4zNmQzNjguNjRkMjcxLjM2ZDQ1MC41NTloUjNkNjA0LjE2UjRkNTE3LjEyUjVkODcuMDRSNmQ2NTUuMzZSN2QwUjhkNTY4LjMyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMTRSMTJkODcuMDRSMTNkNjA0LjE2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTAxb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDgwOC45NmQzNTguNGQ4ODAuNjRkMTUzLjZkODgwLjY0ZDIxNS4wNGQ4MTkuMmQzNTguNGQ4MTkuMmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDQzMC4wOGQ5NjIuNTZkNDMwLjA4ZDEwMjRoUjNkNDcxLjA0UjRkNDMwLjA4UjVkNzEuNjhSNmQzNTguNFI3ZDBSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEwMVIxMmQ3MS42OFIxM2Q0NzEuMDRSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIxM29SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDk1Mi4zMTlkNDM1LjJkOTUyLjMxOWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQxNC43MmQzMjAuNTExZDQxNC43MmQzMzcuOTE5ZDQwOC41NzZkNDAwLjM4NGQ0MDYuNTI4ZDQyMi45MTJkMzkxLjE2OGQ0MzguMjcxZDM3NS44MDhkNDUzLjYzMWQzNTUuMzI4ZDQ1My42MzFkMzIwLjUxMmQ0NTMuNjMxZDI5Ny45ODRkNDI5LjA1NmQyMzkuNjE2ZDM2NC41NDRkMjMwLjRkNDQ5LjUzNWQxNzkuMmQ0NDkuNTM1ZDE3OS4yZDQ0MS4zNDNkMTgwLjczNmQ0MjEuMzc2ZDE4Mi4yNzJkNDAxLjQwOGQxODYuMzY4ZDM2OC42NGQxODguNDE2ZDM0Ny4xMzVkMjA0LjhkMzMyLjI4OGQyMjEuMTg0ZDMxNy40MzlkMjQyLjY4OGQzMTcuNDM5ZDI3NC40MzJkMzE3LjQzOWQyOTUuOTM2ZDMzOS45NjdkMzU3LjM3NmQ0MDQuNDhkMzYzLjUyZDMyMC41MTFkNDE0LjcyZDMyMC41MTFoUjNkNjA0LjE2UjRkNTE3LjEyUjVkODcuMDRSNmQ3MDYuNTZSN2QwUjhkNjE5LjUyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMTNSMTJkODcuMDRSMTNkNjA0LjE2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTJpMmkyaGc6MTAwb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNzM3LjI4ZDcxLjY4ZDcwNy41ODRkOTIuNjcyZDY4Ni41OTJkMTEzLjY2NGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDM1OC40ZDY2NS41OTlkMzU4LjRkNTAxLjc2ZDQzMC4wOGQ0MzAuMDhkNDMwLjA4ZDEwMjRkMzU4LjRkOTYyLjU2ZDM1OC40ZDY3NS44MzlkMzA3LjJkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZoUjNkNTEyUjRkNDMwLjA4UjVkNzEuNjhSNmQ1OTMuOTJSN2QwUjhkNTIyLjI0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMDBSMTJkNzEuNjhSMTNkNTEyUjE0YWkxaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaTJoZzoyMTJvUjFkNzY4UjJhZDUxNy4xMmQ5NTIuMzE5ZDUxNy4xMmQ5ODIuMDE2ZDQ5Ni4xMjhkMTAwMy4wMDhkNDc1LjEzNmQxMDI0ZDQ0NS40NGQxMDI0ZDE1OC43MmQxMDI0ZDEyOS4wMjRkMTAyNGQxMDguMDMyZDEwMDMuMDA4ZDg3LjA0ZDk4Mi4wMTZkODcuMDRkOTUyLjMxOWQ4Ny4wNGQ1OTMuOTJkODcuMDRkNTY0LjIyM2QxMDguMDMyZDU0My4yMzJkMTI5LjAyNGQ1MjIuMjRkMTU4LjcyZDUyMi4yNGQ0NDUuNDRkNTIyLjI0ZDQ3NS4xMzZkNTIyLjI0ZDQ5Ni4xMjhkNTQzLjIzMmQ1MTcuMTJkNTY0LjIyM2Q1MTcuMTJkNTkzLjkyZDUxNy4xMmQ5NTIuMzE5ZDQzNS4yZDk1Mi4zMTlkNDM1LjJkNTkzLjkyZDE2OC45NmQ1OTMuOTJkMTY4Ljk2ZDk1Mi4zMTlkNDM1LjJkOTUyLjMxOWQ0MjQuOTZkNDUwLjU1OWQzNTMuMjhkNDUwLjU1OWQzMTIuMzJkMzU4LjRkMzAyLjA4ZDM1OC40ZDI2MS4xMmQ0NTAuNTU5ZDE4OS40NGQ0NTAuNTU5ZDI3MS4zNmQzMTcuNDM5ZDM0My4wNGQzMTcuNDM5ZDQyNC45NmQ0NTAuNTU5aFIzZDYwNC4xNlI0ZDUxNy4xMlI1ZDg3LjA0UjZkNzA2LjU2UjdkMFI4ZDYxOS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjEyUjEyZDg3LjA0UjEzZDYwNC4xNlIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJoZzo5OW9SMWQ3NjhSMmFkMzc4Ljg4ZDY2NS41OTlkMzE2LjQxNmQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQxMDI0ZDE0My4zNmQxMDI0ZDExMy42NjRkMTAyNGQ5Mi42NzJkMTAwMy4wMDhkNzEuNjhkOTgyLjAxNmQ3MS42OGQ5NTIuMzE5ZDcxLjY4ZDczNy4yOGQ3MS42OGQ3MDcuNTg0ZDkyLjY3MmQ2ODYuNTkyZDExMy42NjRkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQzNzguODhkNjY1LjU5OWhSM2QzNzguODhSNGQzNzguODhSNWQ3MS42OFI2ZDM1OC40UjdkMFI4ZDI4Ni43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpOTlSMTJkNzEuNjhSMTNkMzc4Ljg4UjE0YWkxaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaGc6MjExb1IxZDc2OFIyYWQ1MTcuMTJkOTUyLjMxOWQ1MTcuMTJkOTgyLjAxNmQ0OTYuMTI4ZDEwMDMuMDA4ZDQ3NS4xMzZkMTAyNGQ0NDUuNDRkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkNTkzLjkyZDg3LjA0ZDU2NC4yMjNkMTA4LjAzMmQ1NDMuMjMyZDEyOS4wMjRkNTIyLjI0ZDE1OC43MmQ1MjIuMjRkNDQ1LjQ0ZDUyMi4yNGQ0NzUuMTM2ZDUyMi4yNGQ0OTYuMTI4ZDU0My4yMzJkNTE3LjEyZDU2NC4yMjNkNTE3LjEyZDU5My45MmQ1MTcuMTJkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDU5My45MmQxNjguOTZkNTkzLjkyZDE2OC45NmQ5NTIuMzE5ZDQzNS4yZDk1Mi4zMTlkNDE5Ljg0ZDMwNy4xOTlkMzE3LjQ0ZDQ1MC41NTlkMjQ1Ljc2ZDQ1MC41NTlkMzQ4LjE2ZDMwNy4xOTlkNDE5Ljg0ZDMwNy4xOTloUjNkNjA0LjE2UjRkNTE3LjEyUjVkODcuMDRSNmQ3MTYuOFI3ZDBSOGQ2MjkuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIxMVIxMmQ4Ny4wNFIxM2Q2MDQuMTZSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjk4b1IxZDc2OFIyYWQ0NDAuMzJkOTUyLjMxOWQ0NDAuMzJkOTgyLjAxNmQ0MTkuMzI4ZDEwMDMuMDA4ZDM5OC4zMzZkMTAyNGQzNjguNjRkMTAyNGQxNTMuNmQxMDI0ZDE1My42ZDk2My41ODRkODEuOTJkMTAzNC4yNGQ4MS45MmQ1MDEuNzZkMTUzLjZkNDMwLjA4ZDE1My42ZDcxNi44ZDIwNC44ZDY2NS41OTlkMzY4LjY0ZDY2NS41OTlkMzk4LjMzNmQ2NjUuNTk5ZDQxOS4zMjhkNjg2LjU5MmQ0NDAuMzJkNzA3LjU4NGQ0NDAuMzJkNzM3LjI4ZDQ0MC4zMmQ5NTIuMzE5ZDM2OC42NGQ5NjIuNTZkMzY4LjY0ZDcyNy4wNGQxNTMuNmQ3MjcuMDRkMTUzLjZkOTYyLjU2ZDM2OC42NGQ5NjIuNTZoUjNkNTEyUjRkNDQwLjMyUjVkODEuOTJSNmQ1OTMuOTJSN2QtMTAuMjRSOGQ1MTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTk4UjEyZDgxLjkyUjEzZDUxMlIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmhnOjIxMG9SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDk1Mi4zMTlkNDM1LjJkOTUyLjMxOWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDM1My4yOGQ0NTAuNTU5ZDI4MS42ZDQ1MC41NTlkMTc5LjJkMzA3LjE5OWQyNTAuODhkMzA3LjE5OWQzNTMuMjhkNDUwLjU1OWhSM2Q2MDQuMTZSNGQ1MTcuMTJSNWQ4Ny4wNFI2ZDcxNi44UjdkMFI4ZDYyOS43NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjEwUjEyZDg3LjA0UjEzZDYwNC4xNlIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6OTdvUjFkNzY4UjJhZDQxNC43MmQxMDI0ZDM0My4wNGQxMDI0ZDM0My4wNGQ5NzEuNzc2ZDI4MS42ZDEwMjRkMTI4ZDEwMjRkOTguMzA0ZDEwMjRkNzcuMzEyZDEwMDMuMDA4ZDU2LjMyZDk4Mi4wMTZkNTYuMzJkOTUyLjMxOWQ1Ni4zMmQ4ODAuNjRkNTYuMzJkODUwLjk0NGQ3Ny4zMTJkODI5Ljk1MmQ5OC4zMDRkODA4Ljk2ZDEyOGQ4MDguOTZkMzMyLjhkODA4Ljk2ZDI3MS4zNmQ4NjkuMzc2ZDEyOGQ4NjkuMzc2ZDEyOGQ5NjIuNTZkMzQzLjA0ZDk2Mi41NmQzNDMuMDRkNzI3LjA0ZDU2LjMyZDcyNy4wNGQxMTcuNzZkNjY1LjU5OWQzNDMuMDRkNjY1LjU5OWQzNzIuNzM2ZDY2NS41OTlkMzkzLjcyOGQ2ODYuNTkyZDQxNC43MmQ3MDcuNTg0ZDQxNC43MmQ3MzcuMjhkNDE0LjcyZDEwMjRoUjNkNDg2LjRSNGQ0MTQuNzJSNWQ1Ni4zMlI2ZDM1OC40UjdkMFI4ZDMwMi4wOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpOTdSMTJkNTYuMzJSMTNkNDg2LjRSMTRhaTFpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJoZzoyMDlvUjFkNzY4UjJhZDUyMi4yNGQxMDIyLjk3NmQzNzguODhkMTAyMi45NzZkMTg0LjMyZDU5OC4wMTZkMTQzLjM2ZDU5OC4wMTZkMTc0LjA4ZDY0OS4yMTZkMTc0LjA4ZDEwMjIuOTc2ZDkyLjE2ZDEwMjIuOTc2ZDkyLjE2ZDUyMS4yMTZkMjM2LjU0NGQ1MjEuMjE2ZDQzMC4wOGQ5NDYuMTc2ZDQ3MS4wNGQ5NDYuMTc2ZDQ0MC4zMmQ4OTQuOTc2ZDQ0MC4zMmQ1MjEuMjE2ZDUyMi4yNGQ1MjEuMjE2ZDUyMi4yNGQxMDIyLjk3NmQ0NDAuMzJkMzIwLjUxMWQ0NDAuMzJkMzM3LjkxOWQ0MzQuMTc2ZDQwMC4zODRkNDMyLjEyOGQ0MjIuOTEyZDQxNi43NjhkNDM4LjI3MWQ0MDEuNDA4ZDQ1My42MzFkMzgwLjkyOGQ0NTMuNjMxZDM0Ni4xMTJkNDUzLjYzMWQzMjMuNTg0ZDQyOS4wNTZkMjY1LjIxNmQzNjQuNTQ0ZDI1NmQ0NDkuNTM1ZDIwNC44ZDQ0OS41MzVkMjA0LjhkNDQxLjM0M2QyMDYuMzM2ZDQyMS4zNzZkMjA3Ljg3MmQ0MDEuNDA4ZDIxMS45NjhkMzY4LjY0ZDIxNC4wMTZkMzQ3LjEzNWQyMzAuNGQzMzIuMjg4ZDI0Ni43ODRkMzE3LjQzOWQyNjguMjg4ZDMxNy40MzlkMzAwLjAzMmQzMTcuNDM5ZDMyMS41MzZkMzM5Ljk2N2QzODIuOTc2ZDQwNC40OGQzODkuMTJkMzIwLjUxMWQ0NDAuMzJkMzIwLjUxMWhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzA2LjU2UjdkMS4wMjRSOGQ2MTQuNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA5UjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTJpMmkyaGc6OTZvUjFkNzY4UjJhZDE1My42ZDU5My45MmQ4MS45MmQ1OTMuOTJkLTIwLjQ4ZDQ1MC41NTlkNTEuMmQ0NTAuNTU5ZDE1My42ZDU5My45MmhSM2QxNTMuNlI0ZDE1My42UjVkLTIwLjQ4UjZkNTczLjQ0UjdkNDMwLjA4UjhkNTkzLjkyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk5NlIxMmQtMjAuNDhSMTNkMTUzLjZSMTRhaTFpMmkyaTJpMmhnOjIwOG9SMWQ3NjhSMmFkNTM3LjZkOTUyLjMxOWQ1MzcuNmQ5ODAuOTkyZDUxNi4wOTZkMTAwMi40OTZkNDk0LjU5MmQxMDI0ZDQ2NS45MmQxMDI0ZDEwNy41MmQxMDI0ZDEwNy41MmQ4MDguOTZkMzUuODRkODA4Ljk2ZDM1Ljg0ZDczNy4yOGQxMDcuNTJkNzM3LjI4ZDEwNy41MmQ2NjUuNTk5ZDE3OS4yZDU5My45MmQxMDcuNTJkNTkzLjkyZDEwNy41MmQ1MjIuMjRkNDY1LjkyZDUyMi4yNGQ0OTQuNTkyZDUyMi4yNGQ1MTYuMDk2ZDU0My43NDNkNTM3LjZkNTY1LjI0OGQ1MzcuNmQ1OTMuOTJkNTM3LjZkOTUyLjMxOWQ0NTUuNjhkOTUyLjMxOWQ0NTUuNjhkNTkzLjkyZDE4OS40NGQ1OTMuOTJkMTg5LjQ0ZDczNy4yOGQzMjIuNTZkNzM3LjI4ZDI1MC44OGQ4MDguOTZkMTg5LjQ0ZDgwOC45NmQxODkuNDRkMTAxMy43NmQyNTAuODhkOTUyLjMxOWQ0NTUuNjhkOTUyLjMxOWhSM2Q2MjQuNjRSNGQ1MzcuNlI1ZDM1Ljg0UjZkNTAxLjc2UjdkMFI4ZDQ2NS45MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA4UjEyZDM1Ljg0UjEzZDYyNC42NFIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaGc6OTVvUjFkNzY4UjJhZDQ3Ni4xNmQxMTY3LjM2ZC01LjEyZDExNjcuMzZkLTUuMTJkMTA5NS42OGQ0NzYuMTZkMTA5NS42OGQ0NzYuMTZkMTE2Ny4zNmhSM2Q0NzEuMDRSNGQ0NzYuMTZSNWQtNS4xMlI2ZC03MS42OFI3ZC0xNDMuMzZSOGQtNjYuNTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTk1UjEyZC01LjEyUjEzZDQ3MS4wNFIxNGFpMWkyaTJpMmkyaGc6MjA3b1IxZDc2OFIyYWQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQxMDI0ZDI0MC42NGQ0NTAuNTU5ZDE3NC4wOGQ0NTAuNTU5ZDE3NC4wOGQzNjguNjRkMjQwLjY0ZDM2OC42NGQyNDAuNjRkNDUwLjU1OWQxMDIuNGQ0NTAuNTU5ZDM1Ljg0ZDQ1MC41NTlkMzUuODRkMzY4LjY0ZDEwMi40ZDM2OC42NGQxMDIuNGQ0NTAuNTU5aFIzZDI2Ni4yNFI0ZDI0MC42NFI1ZDM1Ljg0UjZkNjU1LjM2UjdkMFI4ZDYxOS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA3UjEyZDM1Ljg0UjEzZDI2Ni4yNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5NG9SMWQ3NjhSMmFkNDc3LjE4NGQ2MjIuNTkyZDQyNS45ODRkNjczLjc5MWQyNjIuMTQ0ZDQ2Ny45NjdkMTA2LjQ5NmQ2NzMuNzkxZDU1LjI5NmQ2MjIuNTkyZDI2MS4xMmQzNjYuNTkyZDQ3Ny4xODRkNjIyLjU5MmhSM2Q1MzIuNDhSNGQ0NzcuMTg0UjVkNTUuMjk2UjZkNjU3LjQwOFI3ZDM1MC4yMDhSOGQ2MDIuMTEyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk5NFIxMmQ1NS4yOTZSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaGc6MjA2b1IxZDc2OFIyYWQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQxMDI0ZDI1MC44OGQ0NTAuNTU5ZDE3OS4yZDQ1MC41NTlkMTM4LjI0ZDM1OC40ZDEyOGQzNTguNGQ4Ny4wNGQ0NTAuNTU5ZDE1LjM2ZDQ1MC41NTlkOTcuMjhkMzE3LjQzOWQxNjguOTZkMzE3LjQzOWQyNTAuODhkNDUwLjU1OWhSM2QyNjYuMjRSNGQyNTAuODhSNWQxNS4zNlI2ZDcwNi41NlI3ZDBSOGQ2OTEuMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA2UjEyZDE1LjM2UjEzZDI2Ni4yNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6OTNvUjFkNzY4UjJhZDcxLjY4ZDEwMzQuMjRkMTQzLjM2ZDEwMzQuMjRkMTQzLjM2ZDUxMmQ3MS42OGQ1MTJkNzEuNjhkNDUwLjU1OWQyMTUuMDRkNDUwLjU1OWQyMTUuMDRkMTA5NS42OGQ3MS42OGQxMDk1LjY4ZDcxLjY4ZDEwMzQuMjRoUjNkMzI3LjY4UjRkMjE1LjA0UjVkNzEuNjhSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTkzUjEyZDcxLjY4UjEzZDMyNy42OFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoyMDVvUjFkNzY4UjJhZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDEwMjRkMjU2ZDMwNy4xOTlkMTUzLjZkNDUwLjU1OWQ4MS45MmQ0NTAuNTU5ZDE4NC4zMmQzMDcuMTk5ZDI1NmQzMDcuMTk5aFIzZDI2Ni4yNFI0ZDI1NlI1ZDgxLjkyUjZkNzE2LjhSN2QwUjhkNjM0Ljg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMDVSMTJkODEuOTJSMTNkMjY2LjI0UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6OTJvUjFkNzY4UjJhZDMxLjc0NGQ0NTAuNTU5ZDMxNy40NGQxMDk1LjY4ZDI0MS42NjRkMTA5NS42OGQtNDAuOTZkNDUwLjU1OWQzMS43NDRkNDUwLjU1OWhSM2QzMTcuNDRSNGQzMTcuNDRSNWQtNDAuOTZSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ2MTQuNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpOTJSMTJkLTQwLjk2UjEzZDMxNy40NFIxNGFpMWkyaTJpMmkyaGc6MjA0b1IxZDc2OFIyYWQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQxMDI0ZDE4OS40NGQ0NTAuNTU5ZDExNy43NmQ0NTAuNTU5ZDE1LjM2ZDMwNy4xOTlkODcuMDRkMzA3LjE5OWQxODkuNDRkNDUwLjU1OWhSM2QyNjYuMjRSNGQxODkuNDRSNWQxNS4zNlI2ZDcxNi44UjdkMFI4ZDcwMS40NFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjA0UjEyZDE1LjM2UjEzZDI2Ni4yNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjkxb1IxZDc2OFIyYWQyNTZkMTA5NS42OGQxMTIuNjRkMTA5NS42OGQxMTIuNjRkNDUwLjU1OWQyNTZkNDUwLjU1OWQyNTZkNTEyZDE4NC4zMmQ1MTJkMTg0LjMyZDEwMzQuMjRkMjU2ZDEwMzQuMjRkMjU2ZDEwOTUuNjhoUjNkMzI3LjY4UjRkMjU2UjVkMTEyLjY0UjZkNTczLjQ0UjdkLTcxLjY4UjhkNDYwLjhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTkxUjEyZDExMi42NFIxM2QzMjcuNjhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaGc6MjAzb1IxZDc2OFIyYWQ0NTAuNTZkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NS41OTlkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDUwLjU2ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ3OTguNzJkMjM1LjUyZDczNy4yOGQ0NTAuNTZkNzM3LjI4ZDQ1MC41NmQ4MDguOTZkMTc0LjA4ZDgwOC45NmQxNzQuMDhkOTUyLjMxOWQ0NTAuNTZkOTUyLjMxOWQ0NTAuNTZkMTAyNGQzODcuMDcyZDQ1MC41NTlkMzIwLjUxMmQ0NTAuNTU5ZDMyMC41MTJkMzY4LjY0ZDM4Ny4wNzJkMzY4LjY0ZDM4Ny4wNzJkNDUwLjU1OWQyNDguODMyZDQ1MC41NTlkMTgyLjI3MmQ0NTAuNTU5ZDE4Mi4yNzJkMzY4LjY0ZDI0OC44MzJkMzY4LjY0ZDI0OC44MzJkNDUwLjU1OWhSM2Q1MTJSNGQ0NTAuNTZSNWQ5Mi4xNlI2ZDY1NS4zNlI3ZDBSOGQ1NjMuMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjAzUjEyZDkyLjE2UjEzZDUxMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo5MG9SMWQ3NjhSMmFkNDg2LjRkMTAyNGQ1Ni4zMmQxMDI0ZDU2LjMyZDkzNi45NmQzOTkuMzZkNTkzLjkyZDU2LjMyZDU5My45MmQ1Ni4zMmQ1MjIuMjRkNDg2LjRkNTIyLjI0ZDQ4Ni40ZDYxMC4zMDRkMTQzLjM2ZDk1Mi4zMTlkNDg2LjRkOTUyLjMxOWQ0ODYuNGQxMDI0aFIzZDU0Mi43MlI0ZDQ4Ni40UjVkNTYuMzJSNmQ1MDEuNzZSN2QwUjhkNDQ1LjQ0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk5MFIxMmQ1Ni4zMlIxM2Q1NDIuNzJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIwMm9SMWQ3NjhSMmFkNDUwLjU2ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkOTIuMTZkNTkzLjkyZDkyLjE2ZDUyMi4yNGQ0NTAuNTZkNTIyLjI0ZDQ1MC41NmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkNzk4LjcyZDIzNS41MmQ3MzcuMjhkNDUwLjU2ZDczNy4yOGQ0NTAuNTZkODA4Ljk2ZDE3NC4wOGQ4MDguOTZkMTc0LjA4ZDk1Mi4zMTlkNDUwLjU2ZDk1Mi4zMTlkNDUwLjU2ZDEwMjRkMzg5LjEyZDQ1MC41NTlkMzE3LjQ0ZDQ1MC41NTlkMjc2LjQ4ZDM1OC40ZDI2Ni4yNGQzNTguNGQyMjUuMjhkNDUwLjU1OWQxNTMuNmQ0NTAuNTU5ZDIzNS41MmQzMTcuNDM5ZDMwNy4yZDMxNy40MzlkMzg5LjEyZDQ1MC41NTloUjNkNTEyUjRkNDUwLjU2UjVkOTIuMTZSNmQ3MDYuNTZSN2QwUjhkNjE0LjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIwMlIxMmQ5Mi4xNlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjg5b1IxZDc2OFIyYWQ1MDEuNzZkODA4Ljk2ZDUwMS43NmQ4MzguNjU2ZDQ4MC43NjhkODU5LjY0OGQ0NTkuNzc2ZDg4MC42NGQ0MzAuMDhkODgwLjY0ZDMyNy42OGQ4ODAuNjRkMzI3LjY4ZDEwMjRkMjQ1Ljc2ZDEwMjRkMjQ1Ljc2ZDg4MC42NGQxNDMuMzZkODgwLjY0ZDExMy42NjRkODgwLjY0ZDkyLjY3MmQ4NTkuNjQ4ZDcxLjY4ZDgzOC42NTZkNzEuNjhkODA4Ljk2ZDcxLjY4ZDUyMi4yNGQxNTMuNmQ1MjIuMjRkMTUzLjZkODA4Ljk2ZDQxOS44NGQ4MDguOTZkNDE5Ljg0ZDUyMi4yNGQ1MDEuNzZkNTIyLjI0ZDUwMS43NmQ4MDguOTZoUjNkNTczLjQ0UjRkNTAxLjc2UjVkNzEuNjhSNmQ1MDEuNzZSN2QwUjhkNDMwLjA4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4OVIxMmQ3MS42OFIxM2Q1NzMuNDRSMTRhaTFpM2kzaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmhnOjIwMW9SMWQ3NjhSMmFkNDUwLjU2ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkOTIuMTZkNTkzLjkyZDkyLjE2ZDUyMi4yNGQ0NTAuNTZkNTIyLjI0ZDQ1MC41NmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkNzk4LjcyZDIzNS41MmQ3MzcuMjhkNDUwLjU2ZDczNy4yOGQ0NTAuNTZkODA4Ljk2ZDE3NC4wOGQ4MDguOTZkMTc0LjA4ZDk1Mi4zMTlkNDUwLjU2ZDk1Mi4zMTlkNDUwLjU2ZDEwMjRkMzk5LjM2ZDMwNy4xOTlkMjk2Ljk2ZDQ1MC41NTlkMjI1LjI4ZDQ1MC41NTlkMzI3LjY4ZDMwNy4xOTlkMzk5LjM2ZDMwNy4xOTloUjNkNTEyUjRkNDUwLjU2UjVkOTIuMTZSNmQ3MTYuOFI3ZDBSOGQ2MjQuNjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIwMVIxMmQ5Mi4xNlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzo4OG9SMWQ3NjhSMmFkNDkxLjUyZDEwMjRkMzk1LjI2NGQxMDI0ZDI1Mi45MjhkODE5LjJkMjQyLjY4OGQ4MTkuMmQxMDguNTQ0ZDEwMjRkMTAuMjRkMTAyNGQxOTUuNTg0ZDc2Mi44OGQyMC40OGQ1MjIuMjRkMTE4Ljc4NGQ1MjIuMjRkMjQ5Ljg1NmQ3MTUuNzc2ZDI2MC4wOTZkNzE1Ljc3NmQzODUuMDI0ZDUyMi4yNGQ0ODEuMjhkNTIyLjI0ZDMwOC4yMjRkNzYyLjg4ZDQ5MS41MmQxMDI0aFIzZDUwMS43NlI0ZDQ5MS41MlI1ZDEwLjI0UjZkNTAxLjc2UjdkMFI4ZDQ5MS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpODhSMTJkMTAuMjRSMTNkNTAxLjc2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjIwMG9SMWQ3NjhSMmFkNDUwLjU2ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkOTIuMTZkNTkzLjkyZDkyLjE2ZDUyMi4yNGQ0NTAuNTZkNTIyLjI0ZDQ1MC41NmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkNzk4LjcyZDIzNS41MmQ3MzcuMjhkNDUwLjU2ZDczNy4yOGQ0NTAuNTZkODA4Ljk2ZDE3NC4wOGQ4MDguOTZkMTc0LjA4ZDk1Mi4zMTlkNDUwLjU2ZDk1Mi4zMTlkNDUwLjU2ZDEwMjRkMzMyLjhkNDUwLjU1OWQyNjEuMTJkNDUwLjU1OWQxNTguNzJkMzA3LjE5OWQyMzAuNGQzMDcuMTk5ZDMzMi44ZDQ1MC41NTloUjNkNTEyUjRkNDUwLjU2UjVkOTIuMTZSNmQ3MTYuOFI3ZDBSOGQ2MjQuNjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIwMFIxMmQ5Mi4xNlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzo4N29SMWQ3NjhSMmFkNzQyLjRkNTIyLjI0ZDYyOS43NmQxMDI0ZDQ5MS41MmQxMDI0ZDM5NC4yNGQ2NTYuMzg0ZDM4NGQ2NTYuMzg0ZDI4Ni43MmQxMDI0ZDE0OC40OGQxMDI0ZDM1Ljg0ZDUyMi4yNGQxMjhkNTIyLjI0ZDIwOS45MmQ5NTQuMzY3ZDIzMC40ZDk1NC4zNjdkMzQ4LjE2ZDUyMi4yNGQ0MzAuMDhkNTIyLjI0ZDU0Ny44NGQ5NTQuMzY3ZDU2OC4zMmQ5NTQuMzY3ZDY1MC4yNGQ1MjIuMjRkNzQyLjRkNTIyLjI0aFIzZDc3OC4yNFI0ZDc0Mi40UjVkMzUuODRSNmQ1MDEuNzZSN2QwUjhkNDY1LjkyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4N1IxMmQzNS44NFIxM2Q3NzguMjRSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE5OW9SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMzA3LjJkMTAyNGQzMDcuMmQxMDc2LjIyNGQzNDguMTZkMTA3Ni4yMjRkMzc3Ljg1NmQxMDc2LjIyNGQzOTguODQ4ZDEwOTYuNzA0ZDQxOS44NGQxMTE3LjE4NGQ0MTkuODRkMTE0Ni44OGQ0MTkuODRkMTE2Ny4zNmQ0MTkuODRkMTE5Ny4wNTZkMzk4Ljg0OGQxMjE4LjA0OGQzNzcuODU2ZDEyMzkuMDRkMzQ4LjE2ZDEyMzkuMDRkMTg0LjMyZDEyMzkuMDRkMjQ1Ljc2ZDExNzcuNmQzNDguMTZkMTE3Ny42ZDM0OC4xNmQxMTI2LjRkMjQ1Ljc2ZDExMjYuNGQyNDUuNzZkMTA3My4xNTJkMjk2Ljk2ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDY2NS41OTlkNDM1LjJkNjY1LjU5OWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDg4MC42NGQ1MTcuMTJkODgwLjY0ZDUxNy4xMmQ5NTIuMzE5aFIzZDU3OC41NlI0ZDUxNy4xMlI1ZDg3LjA0UjZkNTAxLjc2UjdkLTIxNS4wNFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTk5UjEyZDg3LjA0UjEzZDU3OC41NlIxNGFpMWkzaTNpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJoZzo4Nm9SMWQ3NjhSMmFkNTQyLjcyZDUyMi4yNGQzNTEuMjMyZDEwMjRkMjE4LjExMmQxMDI0ZDMwLjcyZDUyMi4yNGQxMjIuODhkNTIyLjI0ZDI3Ni40OGQ5NTQuMzY3ZDI5Ni45NmQ5NTQuMzY3ZDQ1MC41NmQ1MjIuMjRkNTQyLjcyZDUyMi4yNGhSM2Q1NzMuNDRSNGQ1NDIuNzJSNWQzMC43MlI2ZDUwMS43NlI3ZDBSOGQ0NzEuMDRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTg2UjEyZDMwLjcyUjEzZDU3My40NFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoxOThvUjFkNzY4UjJhZDY2NS42ZDEwMjRkMzY4LjY0ZDEwMjRkMzY4LjY0ZDg4MC42NGQxNzQuMDhkODgwLjY0ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTkzLjkyZDkyLjE2ZDU2NC4yMjNkMTEzLjE1MmQ1NDMuMjMyZDEzNC4xNDRkNTIyLjI0ZDE2My44NGQ1MjIuMjRkNjY1LjZkNTIyLjI0ZDY2NS42ZDU5My45MmQ0NTAuNTZkNTkzLjkyZDQ1MC41NmQ3OTguNzJkNTEyZDczNy4yOGQ2NjUuNmQ3MzcuMjhkNjY1LjZkODA4Ljk2ZDQ1MC41NmQ4MDguOTZkNDUwLjU2ZDk1Mi4zMTlkNjY1LjZkOTUyLjMxOWQ2NjUuNmQxMDI0ZDM2OC42NGQ4MDguOTZkMzY4LjY0ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ4NzAuNGQyMzUuNTJkODA4Ljk2ZDM2OC42NGQ4MDguOTZoUjNkNzI3LjA0UjRkNjY1LjZSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTk4UjEyZDkyLjE2UjEzZDcyNy4wNFIxNGFpMWkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaGc6ODVvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ5NjIuNTZkMzc4Ljg4ZDEwMjRkMTYzLjg0ZDEwMjRkMTM0LjE0NGQxMDI0ZDExMy4xNTJkMTAwMy4wMDhkOTIuMTZkOTgyLjAxNmQ5Mi4xNmQ5NTIuMzE5ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkMTAyNGhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4NVIxMmQ5Mi4xNlIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaGc6MTk3b1IxZDc2OFIyYWQ1MjIuMjRkMTAyNGQ0NDAuMzJkMTAyNGQ0NDAuMzJkODgwLjY0ZDE3NC4wOGQ4ODAuNjRkMTc0LjA4ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTY0LjIyM2QxMTMuMTUyZDU0My4yMzJkMTM0LjE0NGQ1MjIuMjRkMTYzLjg0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQxMDI0ZDQ0MC4zMmQ4MDguOTZkNDQwLjMyZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ4NzAuNGQyMzUuNTJkODA4Ljk2ZDQ0MC4zMmQ4MDguOTZkNDA5LjZkMzk2LjI4OGQ0MDkuNmQ0MjIuOTEyZDM5MC4xNDRkNDQyLjM2N2QzNTkuNDI0ZDQ3NC4xMTFkMzQ4LjE2ZDQ4NS4zNzZkMzI1LjYzMmQ0ODUuMzc2ZDMwMS4wNTZkNDg1LjM3NmQyNzguNTI4ZDQ4NS4zNzZkMjY3LjI2NGQ0NzQuMTExZDIzNi41NDRkNDQyLjM2N2QyMTcuMDg4ZDQyMi45MTJkMjE3LjA4OGQzOTYuMjg4ZDIxNy4wODhkMzY5LjY2NGQyMzYuNTQ0ZDM1MC4yMDdkMjY3LjI2NGQzMTguNDYzZDI4Ni43MmQyOTYuOTZkMzEzLjM0NGQyOTYuOTZkMzM4Ljk0NGQyOTYuOTZkMzU5LjQyNGQzMTguNDYzZDM5MC4xNDRkMzUwLjIwN2Q0MDkuNmQzNjkuNjY0ZDQwOS42ZDM5Ni4yODhkMzY0LjU0NGQzOTYuMjg4ZDMxMy4zNDRkMzQ1LjA4N2QyNjIuMTQ0ZDM5Ni4yODhkMzEzLjM0NGQ0NDcuNDg3ZDM2NC41NDRkMzk2LjI4OGhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzI3LjA0UjdkMFI4ZDYzNC44OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTk3UjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTNpM2kyaTJpMWkyaTJpMmkyaTJpMWkzaTJpM2kyaTNpMmkzaTNpMmkzaTNpMmkzaTFpMmkyaTJpMmhnOjg0b1IxZDc2OFIyYWQzODRkNTkzLjkyZDIzNS41MmQ1OTMuOTJkMjM1LjUyZDEwMjRkMTUzLjZkMTAyNGQxNTMuNmQ1OTMuOTJkNS4xMmQ1OTMuOTJkNS4xMmQ1MjIuMjRkMzg0ZDUyMi4yNGQzODRkNTkzLjkyaFIzZDM4OS4xMlI0ZDM4NFI1ZDUuMTJSNmQ1MDEuNzZSN2QwUjhkNDk2LjY0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4NFIxMmQ1LjEyUjEzZDM4OS4xMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoxOTZvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmQ0MTcuNzkyZDQ1MC41NTlkMzUxLjIzMmQ0NTAuNTU5ZDM1MS4yMzJkMzY4LjY0ZDQxNy43OTJkMzY4LjY0ZDQxNy43OTJkNDUwLjU1OWQyNzkuNTUyZDQ1MC41NTlkMjEyLjk5MmQ0NTAuNTU5ZDIxMi45OTJkMzY4LjY0ZDI3OS41NTJkMzY4LjY0ZDI3OS41NTJkNDUwLjU1OWhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNjU1LjM2UjdkMFI4ZDU2My4yUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxOTZSMTJkOTIuMTZSMTNkNjE0LjRSMTRhaTFpMmkyaTJpMmkyaTJpM2kzaTJpMmkxaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6ODNvUjFkNzY4UjJhZDQzMC4wOGQ5NTIuMzE5ZDQzMC4wOGQ5ODIuMDE2ZDQwOS4wODhkMTAwMy4wMDhkMzg4LjA5NmQxMDI0ZDM1OC40ZDEwMjRkNzEuNjhkMTAyNGQ3MS42OGQ5NTIuMzE5ZDM0OC4xNmQ5NTIuMzE5ZDM0OC4xNmQ4MDguOTZkMTQzLjM2ZDgwOC45NmQxMTMuNjY0ZDgwOC45NmQ5Mi42NzJkNzg3Ljk2OGQ3MS42OGQ3NjYuOTc2ZDcxLjY4ZDczNy4yOGQ3MS42OGQ1OTMuOTJkNzEuNjhkNTY0LjIyM2Q5Mi42NzJkNTQzLjIzMmQxMTMuNjY0ZDUyMi4yNGQxNDMuMzZkNTIyLjI0ZDQzMC4wOGQ1MjIuMjRkNDMwLjA4ZDU5My45MmQxNTMuNmQ1OTMuOTJkMTUzLjZkNzM3LjI4ZDM1OC40ZDczNy4yOGQzODguMDk2ZDczNy4yOGQ0MDkuMDg4ZDc1OC4yNzFkNDMwLjA4ZDc3OS4yNjRkNDMwLjA4ZDgwOC45NmQ0MzAuMDhkOTUyLjMxOWhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDUwMS43NlI3ZDBSOGQ0MzAuMDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTgzUjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpM2kzaTJoZzoxOTVvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmQ0MjcuMDA4ZDMyMC41MTFkNDI3LjAwOGQzMzcuOTE5ZDQyMC44NjRkNDAwLjM4NGQ0MTguODE2ZDQyMi45MTJkNDAzLjQ1NmQ0MzguMjcxZDM4OC4wOTZkNDUzLjYzMWQzNjcuNjE2ZDQ1My42MzFkMzMyLjhkNDUzLjYzMWQzMTAuMjcyZDQyOS4wNTZkMjUxLjkwNGQzNjQuNTQ0ZDI0Mi42ODhkNDQ5LjUzNWQxOTEuNDg4ZDQ0OS41MzVkMTkxLjQ4OGQ0NDEuMzQzZDE5My4wMjRkNDIxLjM3NmQxOTQuNTZkNDAxLjQwOGQxOTguNjU2ZDM2OC42NGQyMDAuNzA0ZDM0Ny4xMzVkMjE3LjA4OGQzMzIuMjg4ZDIzMy40NzJkMzE3LjQzOWQyNTQuOTc2ZDMxNy40MzlkMjg2LjcyZDMxNy40MzlkMzA4LjIyNGQzMzkuOTY3ZDM2OS42NjRkNDA0LjQ4ZDM3NS44MDhkMzIwLjUxMWQ0MjcuMDA4ZDMyMC41MTFoUjNkNjE0LjRSNGQ1MjIuMjRSNWQ5Mi4xNlI2ZDcwNi41NlI3ZDBSOGQ2MTQuNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTk1UjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTNpM2kyaTJpMWkyaTJpMmkyaTJpMWkzaTNpM2kzaTJpMmkyaTNpM2kzaTNpM2kyaTJpMmhnOjgyb1IxZDc2OFIyYWQ1MzIuNDhkMTAyNGQ0MjguMDMyZDEwMjRkMjE1LjA0ZDgwOC45NmQ0NDAuMzJkODA4Ljk2ZDQ0MC4zMmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NC41NzZkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDc5LjIzMmQ1MjIuMjRkNTAwLjczNmQ1NDMuNzQzZDUyMi4yNGQ1NjUuMjQ4ZDUyMi4yNGQ1OTMuOTJkNTIyLjI0ZDc4OC40OGQ1MjIuMjRkODcwLjRkNDUwLjU2ZDg3MC40ZDM4OS4xMmQ4NzAuNGQzODkuMTJkODgxLjY2NGQ1MzIuNDhkMTAyNGhSM2Q1ODguOFI0ZDUzMi40OFI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk4MlIxMmQ5Mi4xNlIxM2Q1ODguOFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTJpMmkyaGc6MTk0b1IxZDc2OFIyYWQ1MjIuMjRkMTAyNGQ0NDAuMzJkMTAyNGQ0NDAuMzJkODgwLjY0ZDE3NC4wOGQ4ODAuNjRkMTc0LjA4ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTY0LjIyM2QxMTMuMTUyZDU0My4yMzJkMTM0LjE0NGQ1MjIuMjRkMTYzLjg0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQxMDI0ZDQ0MC4zMmQ4MDguOTZkNDQwLjMyZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ4NzAuNGQyMzUuNTJkODA4Ljk2ZDQ0MC4zMmQ4MDguOTZkNDM1LjJkNDUwLjU1OWQzNjMuNTJkNDUwLjU1OWQzMjIuNTZkMzU4LjRkMzEyLjMyZDM1OC40ZDI3MS4zNmQ0NTAuNTU5ZDE5OS42OGQ0NTAuNTU5ZDI4MS42ZDMxNy40MzlkMzUzLjI4ZDMxNy40MzlkNDM1LjJkNDUwLjU1OWhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzA2LjU2UjdkMFI4ZDYxNC40UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxOTRSMTJkOTIuMTZSMTNkNjE0LjRSMTRhaTFpMmkyaTJpMmkyaTJpM2kzaTJpMmkxaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjgxb1IxZDc2OFIyYWQ1MTcuMTJkOTUyLjMxOWQ1MTcuMTJkOTgyLjAxNmQ0OTYuMTI4ZDEwMDMuMDA4ZDQ3NS4xMzZkMTAyNGQ0NDUuNDRkMTAyNGQzNjMuNTJkMTAyNGQzNjMuNTJkMTA5NS42OGQyOTEuODRkMTA5NS42OGQyOTEuODRkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkNTkzLjkyZDg3LjA0ZDU2NC4yMjNkMTA4LjAzMmQ1NDMuMjMyZDEyOS4wMjRkNTIyLjI0ZDE1OC43MmQ1MjIuMjRkNDQ1LjQ0ZDUyMi4yNGQ0NzUuMTM2ZDUyMi4yNGQ0OTYuMTI4ZDU0My4yMzJkNTE3LjEyZDU2NC4yMjNkNTE3LjEyZDU5My45MmQ1MTcuMTJkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDU5My45MmQxNjguOTZkNTkzLjkyZDE2OC45NmQ5NTIuMzE5ZDI5MS44NGQ5NTIuMzE5ZDM2My41MmQ4NzkuNjE2ZDM2My41MmQ5NTIuMzE5ZDQzNS4yZDk1Mi4zMTloUjNkNjA0LjE2UjRkNTE3LjEyUjVkODcuMDRSNmQ1MDEuNzZSN2QtNzEuNjhSOGQ0MTQuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTgxUjEyZDg3LjA0UjEzZDYwNC4xNlIxNGFpMWkzaTNpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkyaTJpMmhnOjE5M29SMWQ3NjhSMmFkNTIyLjI0ZDEwMjRkNDQwLjMyZDEwMjRkNDQwLjMyZDg4MC42NGQxNzQuMDhkODgwLjY0ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTkzLjkyZDkyLjE2ZDU2NC4yMjNkMTEzLjE1MmQ1NDMuMjMyZDEzNC4xNDRkNTIyLjI0ZDE2My44NGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkMTAyNGQ0NDAuMzJkODA4Ljk2ZDQ0MC4zMmQ1OTMuOTJkMTc0LjA4ZDU5My45MmQxNzQuMDhkODcwLjRkMjM1LjUyZDgwOC45NmQ0NDAuMzJkODA4Ljk2ZDQ0MC4zMmQzMDcuMTk5ZDMzNy45MmQ0NTAuNTU5ZDI2Ni4yNGQ0NTAuNTU5ZDM2OC42NGQzMDcuMTk5ZDQ0MC4zMmQzMDcuMTk5aFIzZDYxNC40UjRkNTIyLjI0UjVkOTIuMTZSNmQ3MTYuOFI3ZDBSOGQ2MjQuNjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE5M1IxMmQ5Mi4xNlIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkyaTJpMmkzaTNpMmkyaTFpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjgwb1IxZDc2OFIyYWQ1MjIuMjRkODA4Ljk2ZDUyMi4yNGQ4MzcuNjMyZDUwMC43MzZkODU5LjEzNmQ0NzkuMjMyZDg4MC42NGQ0NTAuNTZkODgwLjY0ZDE3NC4wOGQ4ODAuNjRkMTc0LjA4ZDEwMjRkOTIuMTZkMTAyNGQ5Mi4xNmQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkOTIuMTZkNTkzLjkyZDkyLjE2ZDUyMi4yNGQ0NTAuNTZkNTIyLjI0ZDQ3OS4yMzJkNTIyLjI0ZDUwMC43MzZkNTQzLjc0M2Q1MjIuMjRkNTY1LjI0OGQ1MjIuMjRkNTkzLjkyZDUyMi4yNGQ4MDguOTZkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmhSM2Q1OTkuMDRSNGQ1MjIuMjRSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpODBSMTJkOTIuMTZSMTNkNTk5LjA0UjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaTJoZzoxOTJvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmQzNjMuNTJkNDUwLjU1OWQyOTEuODRkNDUwLjU1OWQxODkuNDRkMzA3LjE5OWQyNjEuMTJkMzA3LjE5OWQzNjMuNTJkNDUwLjU1OWhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNzE2LjhSN2QwUjhkNjI0LjY0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxOTJSMTJkOTIuMTZSMTNkNjE0LjRSMTRhaTFpMmkyaTJpMmkyaTJpM2kzaTJpMmkxaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzo3OW9SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDk1Mi4zMTlkNDM1LjJkOTUyLjMxOWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5aFIzZDYwNC4xNlI0ZDUxNy4xMlI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNzlSMTJkODcuMDRSMTNkNjA0LjE2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjE5MW9SMWQ3NjhSMmFkODEuOTJkOTUyLjMxOWQ4MS45MmQ5MjIuNjI0ZDEwMi45MTJkOTAxLjYzMmQxMjMuOTA0ZDg4MC42NGQxNTMuNmQ4ODAuNjRkMjI1LjI4ZDg4MC42NGQyMjUuMjhkODA4Ljk2ZDMwNy4yZDgwOC45NmQzMDcuMmQ4ODAuNjRkMzA3LjJkOTEwLjMzNmQyODYuMjA4ZDkzMS4zMjhkMjY1LjIxNmQ5NTIuMzE5ZDIzNS41MmQ5NTIuMzE5ZDE2My44NGQ5NTIuMzE5ZDE2My44NGQxMDk1LjY4ZDM1OC40ZDEwOTUuNjhkMzU4LjRkMTAyNGQ0NDAuMzJkMTAyNGQ0NDAuMzJkMTA5NS42OGQ0NDAuMzJkMTEyNS4zNzZkNDE5LjMyOGQxMTQ2LjM2OGQzOTguMzM2ZDExNjcuMzZkMzY4LjY0ZDExNjcuMzZkMTUzLjZkMTE2Ny4zNmQxMjMuOTA0ZDExNjcuMzZkMTAyLjkxMmQxMTQ2LjM2OGQ4MS45MmQxMTI1LjM3NmQ4MS45MmQxMDk1LjY4ZDgxLjkyZDk1Mi4zMTlkMjE1LjA0ZDY2NS41OTlkMzA3LjJkNjY1LjU5OWQzMDcuMmQ3NDcuNTJkMjE1LjA0ZDc0Ny41MmQyMTUuMDRkNjY1LjU5OWhSM2Q0NjAuOFI0ZDQ0MC4zMlI1ZDgxLjkyUjZkMzU4LjRSN2QtMTQzLjM2UjhkMjc2LjQ4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxOTFSMTJkODEuOTJSMTNkNDYwLjhSMTRhaTFpM2kzaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjc4b1IxZDc2OFIyYWQ1MjIuMjRkMTAyMi45NzZkMzc4Ljg4ZDEwMjIuOTc2ZDE4NC4zMmQ1OTguMDE2ZDE0My4zNmQ1OTguMDE2ZDE3NC4wOGQ2NDkuMjE2ZDE3NC4wOGQxMDIyLjk3NmQ5Mi4xNmQxMDIyLjk3NmQ5Mi4xNmQ1MjEuMjE2ZDIzNi41NDRkNTIxLjIxNmQ0MzAuMDhkOTQ2LjE3NmQ0NzEuMDRkOTQ2LjE3NmQ0NDAuMzJkODk0Ljk3NmQ0NDAuMzJkNTIxLjIxNmQ1MjIuMjRkNTIxLjIxNmQ1MjIuMjRkMTAyMi45NzZoUjNkNjE0LjRSNGQ1MjIuMjRSNWQ5Mi4xNlI2ZDUwMi43ODRSN2QxLjAyNFI4ZDQxMC42MjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTc4UjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE5MG9SMWQ3NjhSMmFkNjA0LjE2ZDczOC4zMDRkNDYwLjhkODgxLjY2NGQ0NjAuOGQ4OTAuODhkNTIxLjIxNmQ4OTAuODhkNTkxLjg3MmQ4MjEuMjQ4ZDYwMi4xMTJkODIxLjI0OGQ2MDIuMTEyZDEwMjRkNTI4LjM4NGQxMDI0ZDUyOC4zODRkOTUyLjMxOWQzODRkOTUyLjMxOWQzODRkODY2LjMwNGQ1MDkuOTUyZDczNy4yOGQ2MDQuMTZkNzM4LjMwNGQyNjguMjg4ZDY2NS41OTlkMjY4LjI4OGQ2OTUuMjk2ZDI0Ny4yOTZkNzE2LjI4OGQyMjYuMzA0ZDczNy4yOGQxOTYuNjA4ZDczNy4yOGQ1MS4yZDczNy4yOGQ1MS4yZDY3NS44MzlkMTc5LjJkNjc1LjgzOWQxNzkuMmQ2NTIuMjg4ZDExOC43ODRkNTkxLjg3MmQxOTEuNDg4ZDUxNy4xMmQxOTEuNDg4ZDUxMmQ1MS4yZDUxMmQ1MS4yZDQ1MC41NTlkMjY4LjI4OGQ0NTAuNTU5ZDI2OC4yODhkNTE4LjE0NGQxOTQuNTZkNTkxLjg3MmQyNjguMjg4ZDU5My45MmQyNjguMjg4ZDY2NS41OTlkNDcwLjAxNmQ0NTAuNTU5ZDIxOC4xMTJkMTAyNGQxNDIuMzM2ZDEwMjRkMzk3LjMxMmQ0NTAuNTU5ZDQ3MC4wMTZkNDUwLjU1OWhSM2Q2NTUuMzZSNGQ2MDQuMTZSNWQ1MS4yUjZkNTczLjQ0UjdkMFI4ZDUyMi4yNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTkwUjEyZDUxLjJSMTNkNjU1LjM2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpMWkyaTJpMmkyaGc6NzdvUjFkNzY4UjJhZDU5My45MmQxMDIyLjk3NmQ1MTJkMTAyMi45NzZkNTEyZDY0Ni4xNDRkNTQyLjcyZDU5NC45NDRkNDk2LjY0ZDU5NC45NDRkMzcwLjY4OGQ4ODAuNjRkMzExLjI5NmQ4ODAuNjRkMTg5LjQ0ZDU5NC45NDRkMTQzLjM2ZDU5NC45NDRkMTc0LjA4ZDY0Ni4xNDRkMTc0LjA4ZDEwMjIuOTc2ZDkyLjE2ZDEwMjIuOTc2ZDkyLjE2ZDUyMi4yNGQyMzguNTkyZDUyMi4yNGQzMzkuOTY4ZDc2MS44NTZkMzUwLjIwOGQ3NjEuODU2ZDQ1MS41ODRkNTIyLjI0ZDU5My45MmQ1MjIuMjRkNTkzLjkyZDEwMjIuOTc2aFIzZDY4Ni4wOFI0ZDU5My45MlI1ZDkyLjE2UjZkNTAxLjc2UjdkMS4wMjRSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNzdSMTJkOTIuMTZSMTNkNjg2LjA4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTg5b1IxZDc2OFIyYWQ2MTkuNTJkMTAyNGQ0MDIuNDMyZDEwMjRkNDAyLjQzMmQ5MzYuOTZkNTQ3Ljg0ZDgzNi42MDhkNTQ3Ljg0ZDc5OC43MmQ0MDIuNDMyZDc5OC43MmQ0MDIuNDMyZDczNy4yOGQ1NDcuODRkNzM3LjI4ZDU3Ny41MzZkNzM3LjI4ZDU5OC41MjhkNzU4LjI3MWQ2MTkuNTJkNzc5LjI2NGQ2MTkuNTJkODA4Ljk2ZDYxOS41MmQ4NTUuMDRkNDc5LjIzMmQ5NTIuMzE5ZDQ3OS4yMzJkOTYyLjU2ZDYxOS41MmQ5NjIuNTZkNjE5LjUyZDEwMjRkMjQ4LjgzMmQ3MzcuMjhkMTc1LjEwNGQ3MzcuMjhkMTc1LjEwNGQ1MjIuMjRkMTY0Ljg2NGQ1MjIuMjRkMTA4LjU0NGQ1OTMuOTJkMzAuNzJkNTkzLjkyZDE0Ni40MzJkNDUwLjU1OWQyNDguODMyZDQ1MC41NTlkMjQ4LjgzMmQ3MzcuMjhkNDkwLjQ5NmQ0NTAuNTU5ZDIzOC41OTJkMTAyNGQxNjIuODE2ZDEwMjRkNDE3Ljc5MmQ0NTAuNTU5ZDQ5MC40OTZkNDUwLjU1OWhSM2Q2NTUuMzZSNGQ2MTkuNTJSNWQzMC43MlI2ZDU3My40NFI3ZDBSOGQ1NDIuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4OVIxMmQzMC43MlIxM2Q2NTUuMzZSMTRhaTFpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjc2b1IxZDc2OFIyYWQ0NTAuNTZkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDUyMi4yNGQxNzQuMDhkNTIyLjI0ZDE3NC4wOGQ5NTIuMzE5ZDM2OC42NGQ5NTIuMzE5ZDM2OC42NGQ4ODAuNjRkNDUwLjU2ZDg4MC42NGQ0NTAuNTZkMTAyNGhSM2Q0NjAuOFI0ZDQ1MC41NlI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk3NlIxMmQ5Mi4xNlIxM2Q0NjAuOFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzoxODhvUjFkNzY4UjJhZDYwNC4xNmQ3MzguMzA0ZDQ2MC44ZDg4MS42NjRkNDYwLjhkODkwLjg4ZDUyMS4yMTZkODkwLjg4ZDU5MS44NzJkODIxLjI0OGQ2MDIuMTEyZDgyMS4yNDhkNjAyLjExMmQxMDI0ZDUyOC4zODRkMTAyNGQ1MjguMzg0ZDk1Mi4zMTlkMzg0ZDk1Mi4zMTlkMzg0ZDg2Ni4zMDRkNTA5Ljk1MmQ3MzcuMjhkNjA0LjE2ZDczOC4zMDRkMjQ4LjgzMmQ3MzcuMjhkMTc1LjEwNGQ3MzcuMjhkMTc1LjEwNGQ1MjIuMjRkMTY0Ljg2NGQ1MjIuMjRkMTA4LjU0NGQ1OTMuOTJkMzAuNzJkNTkzLjkyZDE0Ni40MzJkNDUwLjU1OWQyNDguODMyZDQ1MC41NTlkMjQ4LjgzMmQ3MzcuMjhkNDkwLjQ5NmQ0NTAuNTU5ZDIzOC41OTJkMTAyNGQxNjIuODE2ZDEwMjRkNDE3Ljc5MmQ0NTAuNTU5ZDQ5MC40OTZkNDUwLjU1OWhSM2Q2NTUuMzZSNGQ2MDQuMTZSNWQzMC43MlI2ZDU3My40NFI3ZDBSOGQ1NDIuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4OFIxMmQzMC43MlIxM2Q2NTUuMzZSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6NzVvUjFkNzY4UjJhZDU0Ny44NGQ1MjIuMjRkMzIwLjUxMmQ3MzQuMjA4ZDMyMC41MTJkNzQ0LjQ0OGQ0NTAuNTZkNzQ0LjQ0OGQ0ODAuMjU2ZDc0NC40NDhkNTAxLjI0OGQ3NjUuNDRkNTIyLjI0ZDc4Ni40MzJkNTIyLjI0ZDgxNi4xMjdkNTIyLjI0ZDEwMjRkNDQwLjMyZDEwMjRkNDQwLjMyZDgwOC45NmQxNzQuMDhkODA4Ljk2ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDc5NS42NDhkNDQ2LjQ2NGQ1MjIuMjRkNTQ3Ljg0ZDUyMi4yNGhSM2Q1OTMuOTJSNGQ1NDcuODRSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNzVSMTJkOTIuMTZSMTNkNTkzLjkyUjE0YWkxaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODdvUjFkNzY4UjJhZDE3NC4wOGQ4NDQuOGQ1MS4yZDcyMi45NDRkOTIuMTZkNjcyLjc2OGQyNjYuMjRkODQ0LjhkOTIuMTZkMTAxNi44MzJkNTEuMmQ5NjUuNjMyZDE3NC4wOGQ4NDQuOGQzNzguODhkODQ0LjhkMjU2ZDcyMi45NDRkMjk2Ljk2ZDY3Mi43NjhkNDcxLjA0ZDg0NC44ZDI5Ni45NmQxMDE2LjgzMmQyNTZkOTY1LjYzMmQzNzguODhkODQ0LjhoUjNkNTIyLjI0UjRkNDcxLjA0UjVkNTEuMlI2ZDM1MS4yMzJSN2Q3LjE2OFI4ZDMwMC4wMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4N1IxMmQ1MS4yUjEzZDUyMi4yNFIxNGFpMWkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaGc6NzRvUjFkNzY4UjJhZDQxOS44NGQ5NTIuMzE5ZDQxOS44NGQ5NzQuODQ4ZDM5OS4zNmQ5OTguNGQzNzYuODMyZDEwMjRkMzQ4LjE2ZDEwMjRkMTMzLjEyZDEwMjRkMTA0LjQ0OGQxMDI0ZDgyLjk0NGQxMDAyLjQ5NmQ2MS40NGQ5ODAuOTkyZDYxLjQ0ZDk1Mi4zMTlkNjEuNDRkODgwLjY0ZDE0My4zNmQ4ODAuNjRkMTQzLjM2ZDk1Mi4zMTlkMzM3LjkyZDk1Mi4zMTlkMzM3LjkyZDU5My45MmQ2MS40NGQ1OTMuOTJkNjEuNDRkNTIyLjI0ZDQxOS44NGQ1MjIuMjRkNDE5Ljg0ZDk1Mi4zMTloUjNkNTEyUjRkNDE5Ljg0UjVkNjEuNDRSNmQ1MDEuNzZSN2QwUjhkNDQwLjMyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk3NFIxMmQ2MS40NFIxM2Q1MTJSMTRhaTFpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTg2b1IxZDc2OFIyYWQzNTMuMjhkNzM3LjI4ZDM1My4yOGQ3NjYuOTc2ZDMzMi4yODhkNzg3Ljk2OGQzMTEuMjk2ZDgwOC45NmQyODEuNmQ4MDguOTZkMTM4LjI0ZDgwOC45NmQxMDguNTQ0ZDgwOC45NmQ4Ny41NTJkNzg3Ljk2OGQ2Ni41NmQ3NjYuOTc2ZDY2LjU2ZDczNy4yOGQ2Ni41NmQ1OTMuOTJkNjYuNTZkNTY0LjIyM2Q4Ny41NTJkNTQzLjIzMmQxMDguNTQ0ZDUyMi4yNGQxMzguMjRkNTIyLjI0ZDI4MS42ZDUyMi4yNGQzMTEuMjk2ZDUyMi4yNGQzMzIuMjg4ZDU0My4yMzJkMzUzLjI4ZDU2NC4yMjNkMzUzLjI4ZDU5My45MmQzNTMuMjhkNzM3LjI4ZDM1My4yOGQ5NTIuMzE5ZDY2LjU2ZDk1Mi4zMTlkNjYuNTZkODkwLjg4ZDM1My4yOGQ4OTAuODhkMzUzLjI4ZDk1Mi4zMTlkMjgxLjZkNzQ3LjUyZDI4MS42ZDU4My42OGQxMzguMjRkNTgzLjY4ZDEzOC4yNGQ3NDcuNTJkMjgxLjZkNzQ3LjUyaFIzZDQxOS44NFI0ZDM1My4yOFI1ZDY2LjU2UjZkNTAxLjc2UjdkNzEuNjhSOGQ0MzUuMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTg2UjEyZDY2LjU2UjEzZDQxOS44NFIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NzNvUjFkNzY4UjJhZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDEwMjRoUjNkMjY2LjI0UjRkMTc0LjA4UjVkOTIuMTZSNmQ1MDEuNzZSN2QwUjhkNDA5LjZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTczUjEyZDkyLjE2UjEzZDI2Ni4yNFIxNGFpMWkyaTJpMmkyaGc6MTg1b1IxZDc2OFIyYWQyNTkuMDcyZDczNy4yOGQxODUuMzQ0ZDczNy4yOGQxODUuMzQ0ZDUyMi4yNGQxNzUuMTA0ZDUyMi4yNGQxMTguNzg0ZDU5My45MmQ0MC45NmQ1OTMuOTJkMTU2LjY3MmQ0NTAuNTU5ZDI1OS4wNzJkNDUwLjU1OWQyNTkuMDcyZDczNy4yOGhSM2QzMjAuNTEyUjRkMjU5LjA3MlI1ZDQwLjk2UjZkNTczLjQ0UjdkMjg2LjcyUjhkNTMyLjQ4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxODVSMTJkNDAuOTZSMTNkMzIwLjUxMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJoZzo3Mm9SMWQ3NjhSMmFkNTIyLjI0ZDEwMjRkNDQwLjMyZDEwMjRkNDQwLjMyZDgwOC45NmQxNzQuMDhkODA4Ljk2ZDE3NC4wOGQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNTIyLjI0ZDE3NC4wOGQ1MjIuMjRkMTc0LjA4ZDc5OC43MmQyMzUuNTJkNzM3LjI4ZDQ0MC4zMmQ3MzcuMjhkNDQwLjMyZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDUyMi4yNGQxMDI0aFIzZDYxNC40UjRkNTIyLjI0UjVkOTIuMTZSNmQ1MDEuNzZSN2QwUjhkNDA5LjZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTcyUjEyZDkyLjE2UjEzZDYxNC40UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODRvUjFkNzY4UjJhZDI2Ni4yNGQxMTY3LjM2ZDI2Ni4yNGQxMTk3LjA1NmQyNDUuMjQ4ZDEyMTguMDQ4ZDIyNC4yNTZkMTIzOS4wNGQxOTQuNTZkMTIzOS4wNGQzMC43MmQxMjM5LjA0ZDkyLjE2ZDExNzcuNmQxOTQuNTZkMTE3Ny42ZDE5NC41NmQxMTI2LjRkOTIuMTZkMTEyNi40ZDkyLjE2ZDEwNzMuMTUyZDE1My42ZDEwMTMuNzZkMTUzLjZkMTA3Ni4yMjRkMTk0LjU2ZDEwNzYuMjI0ZDIyNC4yNTZkMTA3Ni4yMjRkMjQ1LjI0OGQxMDk2LjcwNGQyNjYuMjRkMTExNy4xODRkMjY2LjI0ZDExNDYuODhkMjY2LjI0ZDExNjcuMzZoUjNkMjg2LjcyUjRkMjY2LjI0UjVkMzAuNzJSNmQxMC4yNFI3ZC0yMTUuMDRSOGQtMjAuNDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4NFIxMmQzMC43MlIxM2QyODYuNzJSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaGc6NzFvUjFkNzY4UjJhZDUxNy4xMmQxMDI0ZDQzNS4yZDEwMjRkNDM1LjJkOTYyLjU2ZDM3My43NmQxMDI0ZDE1OC43MmQxMDI0ZDEzMC4wNDhkMTAyNGQxMDguNTQ0ZDEwMDIuNDk2ZDg3LjA0ZDk4MC45OTJkODcuMDRkOTUyLjMxOWQ4Ny4wNGQ1OTMuOTJkODcuMDRkNTY1LjI0OGQxMDguNTQ0ZDU0My43NDNkMTMwLjA0OGQ1MjIuMjRkMTU4LjcyZDUyMi4yNGQ1MTcuMTJkNTIyLjI0ZDUxNy4xMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDgwOC45NmQzMDIuMDhkODA4Ljk2ZDM3My43NmQ3MzcuMjhkNTE3LjEyZDczNy4yOGQ1MTcuMTJkMTAyNGhSM2Q1ODMuNjhSNGQ1MTcuMTJSNWQ4Ny4wNFI2ZDUwMS43NlI3ZDBSOGQ0MTQuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTcxUjEyZDg3LjA0UjEzZDU4My42OFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTgzb1IxZDc2OFIyYWQxNzQuMDhkODE5LjJkODEuOTJkODE5LjJkODEuOTJkNzM3LjI4ZDE3NC4wOGQ3MzcuMjhkMTc0LjA4ZDgxOS4yaFIzZDI1NlI0ZDE3NC4wOFI1ZDgxLjkyUjZkMjg2LjcyUjdkMjA0LjhSOGQyMDQuOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTgzUjEyZDgxLjkyUjEzZDI1NlIxNGFpMWkyaTJpMmkyaGc6NzBvUjFkNzY4UjJhZDQ1MC41NmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NS41OTlkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDUwLjU2ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ4NzAuNGQyMzUuNTJkODA4Ljk2ZDQ1MC41NmQ4MDguOTZkNDUwLjU2ZDg4MC42NGhSM2Q1MDEuNzZSNGQ0NTAuNTZSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNzBSMTJkOTIuMTZSMTNkNTAxLjc2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjE4Mm9SMWQ3NjhSMmFkNTAxLjc2ZDUyMi4yNGQ0NDAuMzJkNTgzLjY4ZDQ0MC4zMmQxMTE2LjE2ZDM3OC44OGQxMTc3LjZkMzc4Ljg4ZDU4My42OGQyODYuNzJkNTgzLjY4ZDI4Ni43MmQxMTE2LjE2ZDIyNS4yOGQxMTc3LjZkMjI1LjI4ZDg4MC42NGQxNzQuMDhkODgwLjY0ZDE0NC4zODRkODgwLjY0ZDEyMy4zOTJkODU5LjY0OGQxMDIuNGQ4MzguNjU2ZDEwMi40ZDgwOC45NmQxMDIuNGQ1OTMuOTJkMTAyLjRkNTY0LjIyM2QxMjMuMzkyZDU0My4yMzJkMTQ0LjM4NGQ1MjIuMjRkMTc0LjA4ZDUyMi4yNGQ1MDEuNzZkNTIyLjI0aFIzZDU2My4yUjRkNTAxLjc2UjVkMTAyLjRSNmQ1MDEuNzZSN2QtMTUzLjZSOGQzOTkuMzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4MlIxMmQxMDIuNFIxM2Q1NjMuMlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmhnOjY5b1IxZDc2OFIyYWQ0NTAuNTZkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NS41OTlkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDUwLjU2ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ3OTguNzJkMjM1LjUyZDczNy4yOGQ0NTAuNTZkNzM3LjI4ZDQ1MC41NmQ4MDguOTZkMTc0LjA4ZDgwOC45NmQxNzQuMDhkOTUyLjMxOWQ0NTAuNTZkOTUyLjMxOWQ0NTAuNTZkMTAyNGhSM2Q1MTJSNGQ0NTAuNTZSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjlSMTJkOTIuMTZSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxODFvUjFkNzY4UjJhZDQ0MC4zMmQxMDI0ZDM2OC42NGQxMDI0ZDM2OC42NGQ5NzIuOGQzMTcuNDRkMTAyNGQxNTMuNmQxMDI0ZDE1My42ZDEyMzkuMDRkODEuOTJkMTIzOS4wNGQ4MS45MmQ2NjUuNTk5ZDE1My42ZDY2NS41OTlkMTUzLjZkOTYyLjU2ZDM2OC42NGQ5NjIuNTZkMzY4LjY0ZDY2NS41OTlkNDQwLjMyZDY2NS41OTlkNDQwLjMyZDEwMjRoUjNkNTEyUjRkNDQwLjMyUjVkODEuOTJSNmQzNTguNFI3ZC0yMTUuMDRSOGQyNzYuNDhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE4MVIxMmQ4MS45MlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjY4b1IxZDc2OFIyYWQ1MjIuMjRkOTUyLjMxOWQ1MjIuMjRkOTgwLjk5MmQ1MDAuNzM2ZDEwMDIuNDk2ZDQ3OS4yMzJkMTAyNGQ0NTAuNTZkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDY2NS41OTlkMTYzLjg0ZDU5My45MmQ5Mi4xNmQ1OTMuOTJkOTIuMTZkNTIyLjI0ZDQ1MC41NmQ1MjIuMjRkNDc5LjIzMmQ1MjIuMjRkNTAwLjczNmQ1NDMuNzQzZDUyMi4yNGQ1NjUuMjQ4ZDUyMi4yNGQ1OTMuOTJkNTIyLjI0ZDk1Mi4zMTlkNDQwLjMyZDk1Mi4zMTlkNDQwLjMyZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQxMDEzLjc2ZDIzNS41MmQ5NTIuMzE5ZDQ0MC4zMmQ5NTIuMzE5aFIzZDYwOS4yOFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk2OFIxMmQ5Mi4xNlIxM2Q2MDkuMjhSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmkyaGc6MTgwb1IxZDc2OFIyYWQxNjMuODRkNDUwLjU1OWQ2MS40NGQ1OTMuOTJkLTEwLjI0ZDU5My45MmQ5Mi4xNmQ0NTAuNTU5ZDE2My44NGQ0NTAuNTU5aFIzZDE1My42UjRkMTYzLjg0UjVkLTEwLjI0UjZkNTczLjQ0UjdkNDMwLjA4UjhkNTgzLjY4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxODBSMTJkLTEwLjI0UjEzZDE1My42UjE0YWkxaTJpMmkyaTJoZzo2N29SMWQ3NjhSMmFkNTE3LjEyZDk1Mi4zMTlkNTE3LjEyZDk4Mi4wMTZkNDk2LjEyOGQxMDAzLjAwOGQ0NzUuMTM2ZDEwMjRkNDQ1LjQ0ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1NjQuMjIzZDEwOC4wMzJkNTQzLjIzMmQxMjkuMDI0ZDUyMi4yNGQxNTguNzJkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDc1LjEzNmQ1MjIuMjRkNDk2LjEyOGQ1NDMuMjMyZDUxNy4xMmQ1NjQuMjIzZDUxNy4xMmQ1OTMuOTJkNTE3LjEyZDY2NS41OTlkNDM1LjJkNjY1LjU5OWQ0MzUuMmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkOTUyLjMxOWQ0MzUuMmQ5NTIuMzE5ZDQzNS4yZDg4MC42NGQ1MTcuMTJkODgwLjY0ZDUxNy4xMmQ5NTIuMzE5aFIzZDU3OC41NlI0ZDUxNy4xMlI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjdSMTJkODcuMDRSMTNkNTc4LjU2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmhnOjE3OW9SMWQ3NjhSMmFkMjczLjQwOGQ2NjUuNTk5ZDI3My40MDhkNjk1LjI5NmQyNTIuNDE2ZDcxNi4yODhkMjMxLjQyNGQ3MzcuMjhkMjAxLjcyOGQ3MzcuMjhkNTYuMzJkNzM3LjI4ZDU2LjMyZDY3NS44MzlkMTg0LjMyZDY3NS44MzlkMTg0LjMyZDY1Mi4yODhkMTIzLjkwNGQ1OTEuODcyZDE5Ni42MDhkNTE3LjEyZDE5Ni42MDhkNTEyZDU2LjMyZDUxMmQ1Ni4zMmQ0NTAuNTU5ZDI3My40MDhkNDUwLjU1OWQyNzMuNDA4ZDUxOC4xNDRkMTk5LjY4ZDU5MS44NzJkMjczLjQwOGQ1OTMuOTJkMjczLjQwOGQ2NjUuNTk5aFIzZDMyOS43MjhSNGQyNzMuNDA4UjVkNTYuMzJSNmQ1NzMuNDRSN2QyODYuNzJSOGQ1MTcuMTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE3OVIxMmQ1Ni4zMlIxM2QzMjkuNzI4UjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaGc6NjZvUjFkNzY4UjJhZDUyMi4yNGQ5NTIuMzE5ZDUyMi4yNGQ5ODIuMDE2ZDUwMS4yNDhkMTAwMy4wMDhkNDgwLjI1NmQxMDI0ZDQ1MC41NmQxMDI0ZDkyLjE2ZDEwMjRkOTIuMTZkNjY1LjU5OWQxNjMuODRkNTkzLjkyZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1MjIuMjRkMzc4Ljg4ZDUyMi4yNGQ0MDguNTc2ZDUyMi4yNGQ0MjkuNTY4ZDU0My4yMzJkNDUwLjU2ZDU2NC4yMjNkNDUwLjU2ZDU5My45MmQ0NTAuNTZkNzM3LjI4ZDQ1Mi42MDhkNzM3LjI4ZDQ4Mi4zMDRkNzM3LjI4ZDUwMi4yNzJkNzU4LjI3MWQ1MjIuMjRkNzc5LjI2NGQ1MjIuMjRkODA4Ljk2ZDUyMi4yNGQ5NTIuMzE5ZDM2OC42NGQ3MzcuMjhkMzY4LjY0ZDU5My45MmQxNzQuMDhkNTkzLjkyZDE3NC4wOGQ3OTguNzJkMjM1LjUyZDczNy4yOGQzNjguNjRkNzM3LjI4ZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ4MDguOTZkMTc0LjA4ZDgwOC45NmQxNzQuMDhkOTUyLjMxOWQ0NDAuMzJkOTUyLjMxOWhSM2Q1OTMuOTJSNGQ1MjIuMjRSNWQ5Mi4xNlI2ZDUwMS43NlI3ZDBSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjZSMTJkOTIuMTZSMTNkNTkzLjkyUjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTNpM2kyaTFpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjE3OG9SMWQ3NjhSMmFkMjczLjQwOGQ3MzcuMjhkNTYuMzJkNzM3LjI4ZDU2LjMyZDY1MC4yNGQyMDEuNzI4ZDU0OS44ODdkMjAxLjcyOGQ1MTJkNTYuMzJkNTEyZDU2LjMyZDQ1MC41NTlkMjAxLjcyOGQ0NTAuNTU5ZDIzMS40MjRkNDUwLjU1OWQyNTIuNDE2ZDQ3MS41NTJkMjczLjQwOGQ0OTIuNTQ0ZDI3My40MDhkNTIyLjI0ZDI3My40MDhkNTY4LjMxOWQxMzMuMTJkNjY1LjU5OWQxMzMuMTJkNjc1LjgzOWQyNzMuNDA4ZDY3NS44MzlkMjczLjQwOGQ3MzcuMjhoUjNkMzI5LjcyOFI0ZDI3My40MDhSNWQ1Ni4zMlI2ZDU3My40NFI3ZDI4Ni43MlI4ZDUxNy4xMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTc4UjEyZDU2LjMyUjEzZDMyOS43MjhSMTRhaTFpMmkyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaGc6NjVvUjFkNzY4UjJhZDUyMi4yNGQxMDI0ZDQ0MC4zMmQxMDI0ZDQ0MC4zMmQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDU5My45MmQ5Mi4xNmQ1NjQuMjIzZDExMy4xNTJkNTQzLjIzMmQxMzQuMTQ0ZDUyMi4yNGQxNjMuODRkNTIyLjI0ZDUyMi4yNGQ1MjIuMjRkNTIyLjI0ZDEwMjRkNDQwLjMyZDgwOC45NmQ0NDAuMzJkNTkzLjkyZDE3NC4wOGQ1OTMuOTJkMTc0LjA4ZDg3MC40ZDIzNS41MmQ4MDguOTZkNDQwLjMyZDgwOC45NmhSM2Q2MTQuNFI0ZDUyMi4yNFI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk2NVIxMmQ5Mi4xNlIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkyaTJpMmkzaTNpMmkyaTFpMmkyaTJpMmkyaGc6MTc3b1IxZDc2OFIyYWQ0NDUuNDRkMTAyMi45NzZkODcuMDRkMTAyMi45NzZkODcuMDRkOTUxLjI5NmQ0NDUuNDRkOTUxLjI5NmQ0NDUuNDRkMTAyMi45NzZkNDQ1LjQ0ZDgwOC45NmQzMDIuMDhkODA4Ljk2ZDMwMi4wOGQ5NTIuMzE5ZDIzMC40ZDk1Mi4zMTlkMjMwLjRkODA4Ljk2ZDg3LjA0ZDgwOC45NmQ4Ny4wNGQ3MzcuMjhkMjMwLjRkNzM3LjI4ZDIzMC40ZDU5My45MmQzMDIuMDhkNTkzLjkyZDMwMi4wOGQ3MzcuMjhkNDQ1LjQ0ZDczNy4yOGQ0NDUuNDRkODA4Ljk2aFIzZDUzMi40OFI0ZDQ0NS40NFI1ZDg3LjA0UjZkNDMwLjA4UjdkMS4wMjRSOGQzNDMuMDRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE3N1IxMmQ4Ny4wNFIxM2Q1MzIuNDhSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6NjRvUjFkNzY4UjJhZDcxNi44ZDk1Mi4zMTlkNzE2LjhkOTgyLjAxNmQ2OTUuODA4ZDEwMDMuMDA4ZDY3NC44MTZkMTAyNGQ2NDUuMTJkMTAyNGQ1MDIuNzg0ZDEwMjRkNDc3LjE4NGQxMDI0ZDQ2MC44ZDEwMDguNjRkNDQ0LjQxNmQ5OTMuMjhkNDQzLjM5MmQ5NjguNzA0ZDM2OC42NGQxMDI0ZDI1NmQxMDI0ZDIyOS4zNzZkMTAyNGQyMTIuOTkyZDEwMDcuNjE2ZDE5Ni42MDhkOTkxLjIzMmQxOTYuNjA4ZDk2NS42MzJkMTk2LjYwOGQ5NTcuNDRkMTk3LjYzMmQ5NTIuMzE5ZDIxMS45NjhkODgwLjY0ZDIxOC4xMTJkODUwLjk0NGQyNDMuMmQ4MjkuOTUyZDI2OC4yODhkODA4Ljk2ZDI5Ny45ODRkODA4Ljk2ZDQ3Mi4wNjRkODA4Ljk2ZDM5OC4zMzZkODcwLjRkMjg1LjY5NmQ4NzAuNGQyNjcuMjY0ZDk2Mi41NmQ0NDMuMzkyZDk2Mi41NmQ0NDMuMzkyZDk1NS4zOTJkNDQ0LjQxNmQ5NTIuMzE5ZDQ0Ny40ODhkOTM2Ljk2ZDQ4Ny40MjRkNzI3LjA0ZDIzMS40MjRkNzI3LjA0ZDMwNS4xNTJkNjY1LjU5OWQ0OTkuNzEyZDY2NS41OTlkNTI1LjMxMmQ2NjUuNTk5ZDU0MS42OTZkNjgxLjk4M2Q1NTguMDhkNjk4LjM2N2Q1NTguMDhkNzIzLjk2OGQ1NTguMDhkNzMyLjE2ZDU1Ny4wNTZkNzM3LjI4ZDUxNC4wNDhkOTYyLjU2ZDY1NS4zNmQ5NjIuNTZkNjU1LjM2ZDUyMi4yNGQxMTIuNjRkNTIyLjI0ZDExMi42NGQxMTY3LjM2ZDcwNS41MzZkMTE2Ny4zNmQ2MjIuNTkyZDEyMjguOGQxMzMuMTJkMTIyOC44ZDExNy43NmQxMjI4LjhkMTAyLjkxMmQxMjIzLjE2OGQ4OC4wNjRkMTIxNy41MzZkNzYuOGQxMjA3LjI5NmQ2NS41MzZkMTE5Ny4wNTZkNTguMzY4ZDExODQuMjU2ZDUxLjJkMTE3MS40NTZkNTEuMmQxMTU3LjEyZDUxLjJkNTMyLjQ4ZDUxLjJkNTAyLjc4NGQ3Mi4xOTJkNDgxLjc5MmQ5My4xODRkNDYwLjc5OWQxMjIuODhkNDYwLjc5OWQ2NDUuMTJkNDYwLjc5OWQ2NzQuODE2ZDQ2MC43OTlkNjk1LjgwOGQ0ODEuNzkyZDcxNi44ZDUwMi43ODRkNzE2LjhkNTMyLjQ4ZDcxNi44ZDk1Mi4zMTloUjNkNzY4UjRkNzE2LjhSNWQ1MS4yUjZkNTYzLjJSN2QtMjA0LjhSOGQ1MTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTY0UjEyZDUxLjJSMTNkNzY4UjE0YWkxaTNpM2kyaTNpM2kyaTJpM2kzaTNpMmkzaTNpMmkyaTJpMmkyaTNpMmkyaTJpMmkyaTNpM2kzaTJpMmkyaTJpMmkyaTJpMmkzaTNpM2kzaTJpM2kzaTJpM2kzaTJoZzoxNzZvUjFkNzY4UjJhZDI5Ni45NmQ1OTMuOTJkMjk2Ljk2ZDYyMy42MTZkMjc1Ljk2OGQ2NDQuNjA4ZDI1NC45NzZkNjY1LjU5OWQyMjUuMjhkNjY1LjU5OWQxNTMuNmQ2NjUuNTk5ZDEyMy45MDRkNjY1LjU5OWQxMDIuOTEyZDY0NC42MDhkODEuOTJkNjIzLjYxNmQ4MS45MmQ1OTMuOTJkODEuOTJkNTIyLjI0ZDgxLjkyZDQ5Mi41NDRkMTAyLjkxMmQ0NzEuNTUyZDEyMy45MDRkNDUwLjU1OWQxNTMuNmQ0NTAuNTU5ZDIyNS4yOGQ0NTAuNTU5ZDI1NC45NzZkNDUwLjU1OWQyNzUuOTY4ZDQ3MS41NTJkMjk2Ljk2ZDQ5Mi41NDRkMjk2Ljk2ZDUyMi4yNGQyOTYuOTZkNTkzLjkyZDIzNS41MmQ2MDQuMTZkMjM1LjUyZDUxMmQxNDMuMzZkNTEyZDE0My4zNmQ2MDQuMTZkMjM1LjUyZDYwNC4xNmhSM2QzNzguODhSNGQyOTYuOTZSNWQ4MS45MlI2ZDU3My40NFI3ZDM1OC40UjhkNDkxLjUyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNzZSMTJkODEuOTJSMTNkMzc4Ljg4UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmhnOjYzb1IxZDc2OFIyYWQ0NDAuMzJkNzM3LjI4ZDQ0MC4zMmQ3NjYuOTc2ZDQxOS4zMjhkNzg3Ljk2OGQzOTguMzM2ZDgwOC45NmQzNjguNjRkODA4Ljk2ZDI5Ni45NmQ4MDguOTZkMjk2Ljk2ZDg4MC42NGQyMTUuMDRkODgwLjY0ZDIxNS4wNGQ4MDguOTZkMjE1LjA0ZDc3OS4yNjRkMjM2LjAzMmQ3NTguMjcxZDI1Ny4wMjRkNzM3LjI4ZDI4Ni43MmQ3MzcuMjhkMzU4LjRkNzM3LjI4ZDM1OC40ZDU5My45MmQxNjMuODRkNTkzLjkyZDE2My44NGQ2NjUuNTk5ZDgxLjkyZDY2NS41OTlkODEuOTJkNTkzLjkyZDgxLjkyZDU2NC4yMjNkMTAyLjkxMmQ1NDMuMjMyZDEyMy45MDRkNTIyLjI0ZDE1My42ZDUyMi4yNGQzNjguNjRkNTIyLjI0ZDM5OC4zMzZkNTIyLjI0ZDQxOS4zMjhkNTQzLjIzMmQ0NDAuMzJkNTY0LjIyM2Q0NDAuMzJkNTkzLjkyZDQ0MC4zMmQ3MzcuMjhkMzA3LjJkMTAyNGQyMTUuMDRkMTAyNGQyMTUuMDRkOTQyLjA4ZDMwNy4yZDk0Mi4wOGQzMDcuMmQxMDI0aFIzZDUyMi4yNFI0ZDQ0MC4zMlI1ZDgxLjkyUjZkNTAxLjc2UjdkMFI4ZDQxOS44NFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjNSMTJkODEuOTJSMTNkNTIyLjI0UjE0YWkxaTNpM2kyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJoZzoxNzVvUjFkNzY4UjJhZDIxNS4wNGQ1OTMuOTJkMzAuNzJkNTkzLjkyZDMwLjcyZDUyMi4yNGQyMTUuMDRkNTIyLjI0ZDIxNS4wNGQ1OTMuOTJoUjNkMjQ1Ljc2UjRkMjE1LjA0UjVkMzAuNzJSNmQ1MDEuNzZSN2Q0MzAuMDhSOGQ0NzEuMDRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE3NVIxMmQzMC43MlIxM2QyNDUuNzZSMTRhaTFpMmkyaTJpMmhnOjYyb1IxZDc2OFIyYWQyNTZkODExLjAwOGQ1MS4yZDY0Ni4xNDRkMTAxLjM3NmQ1OTUuOTY4ZDM1OC40ZDgxMS4wMDhkMTAxLjM3NmQxMDE2LjgzMmQ1MS4yZDk2Ni42NTZkMjU2ZDgxMS4wMDhoUjNkNDcxLjA0UjRkMzU4LjRSNWQ1MS4yUjZkNDI4LjAzMlI3ZDcuMTY4UjhkMzc2LjgzMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjJSMTJkNTEuMlIxM2Q0NzEuMDRSMTRhaTFpMmkyaTJpMmkyaTJoZzoxNzRvUjFkNzY4UjJhZDY2NS42ZDgwOC45NmQ2NjUuNmQ4MzguNjU2ZDY0NC42MDhkODU5LjY0OGQ2MjMuNjE2ZDg4MC42NGQ1OTMuOTJkODgwLjY0ZDE4NC4zMmQ4ODAuNjRkMTY4Ljk2ZDg4MC42NGQxNTQuMTEyZDg3NS4wMDhkMTM5LjI2NGQ4NjkuMzc2ZDEyOGQ4NTkuMTM2ZDExNi43MzZkODQ4Ljg5NmQxMDkuNTY4ZDgzNi4wOTZkMTAyLjRkODIzLjI5NmQxMDIuNGQ4MDguOTZkMTAyLjRkMzc4Ljg4ZDEwMi40ZDM0OS4xODNkMTIzLjM5MmQzMjguMTkyZDE0NC4zODRkMzA3LjE5OWQxNzQuMDhkMzA3LjE5OWQ1OTMuOTJkMzA3LjE5OWQ2MjMuNjE2ZDMwNy4xOTlkNjQ0LjYwOGQzMjguMTkyZDY2NS42ZDM0OS4xODNkNjY1LjZkMzc4Ljg4ZDY2NS42ZDgwOC45NmQ2MDQuMTZkODE5LjJkNjA0LjE2ZDM2OC42NGQxNjMuODRkMzY4LjY0ZDE2My44NGQ4MTkuMmQ2MDQuMTZkODE5LjJkNTM0LjUyOGQ3MzcuMjhkNDUwLjU2ZDczNy4yOGQzMTcuNDRkNjA0LjE2ZDMxNy40NGQ3MzcuMjhkMjQ1Ljc2ZDczNy4yOGQyNDUuNzZkNTcyLjQxNWQzMDcuMmQ1MTJkMjQ1Ljc2ZDUxMmQyNDUuNzZkNDUwLjU1OWQ0NjAuOGQ0NTAuNTU5ZDQ4OS40NzJkNDUwLjU1OWQ1MTAuOTc2ZDQ3Mi4wNjNkNTMyLjQ4ZDQ5My41NjhkNTMyLjQ4ZDUyMi4yNGQ1MzIuNDhkNTgzLjY4ZDUzMi40OGQ2MTguNDk2ZDUwNy45MDRkNjM2LjkyOGQ0ODcuNDI0ZDY1MS4yNjRkNDYwLjhkNjUxLjI2NGQ0NTIuNjA4ZDY1MS4yNjRkNDUyLjYwOGQ2NjEuNTA0ZDUzNC41MjhkNzM3LjI4ZDQ2MC44ZDYwNC4xNmQ0NjAuOGQ1MTJkMzE3LjQ0ZDUxMmQzMTcuNDRkNjA0LjE2ZDQ2MC44ZDYwNC4xNmhSM2Q3NjhSNGQ2NjUuNlI1ZDEwMi40UjZkNzE2LjhSN2QxNDMuMzZSOGQ2MTQuNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTc0UjEyZDEwMi40UjEzZDc2OFIxNGFpMWkzaTNpMmkzaTNpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTFpMmkyaTJpMmhnOjYxb1IxZDc2OFIyYWQ0NDUuNDRkODA4Ljk2ZDg3LjA0ZDgwOC45NmQ4Ny4wNGQ3MzcuMjhkNDQ1LjQ0ZDczNy4yOGQ0NDUuNDRkODA4Ljk2ZDQ0NS40NGQ5NTIuMzE5ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkODgwLjY0ZDQ0NS40NGQ4ODAuNjRkNDQ1LjQ0ZDk1Mi4zMTloUjNkNTMyLjQ4UjRkNDQ1LjQ0UjVkODcuMDRSNmQyODYuNzJSN2Q3MS42OFI4ZDE5OS42OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjFSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTczb1IxZDc2OFIyYWQyNjYuMjRkODA4Ljk2ZDE5NC41NmQ4ODAuNjRkMjAuNDhkODgwLjY0ZDkyLjE2ZDgwOC45NmQyNjYuMjRkODA4Ljk2aFIzZDI4Ni43MlI0ZDI2Ni4yNFI1ZDIwLjQ4UjZkMjE1LjA0UjdkMTQzLjM2UjhkMTk0LjU2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNzNSMTJkMjAuNDhSMTNkMjg2LjcyUjE0YWkxaTJpMmkyaTJoZzo2MG9SMWQ3NjhSMmFkNDE5Ljg0ZDk2Ni42NTZkMzY5LjY2NGQxMDE2LjgzMmQxMTIuNjRkODExLjAwOGQzNjkuNjY0ZDU5NS45NjhkNDE5Ljg0ZDY0Ni4xNDRkMjE1LjA0ZDgxMS4wMDhkNDE5Ljg0ZDk2Ni42NTZoUjNkNTMyLjQ4UjRkNDE5Ljg0UjVkMTEyLjY0UjZkNDI4LjAzMlI3ZDcuMTY4UjhkMzE1LjM5MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNjBSMTJkMTEyLjY0UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTJpMmhnOjE3Mm9SMWQ3NjhSMmFkNDQwLjMyZDk1Mi4zMTlkMzY4LjY0ZDk1Mi4zMTlkMzY4LjY0ZDgwOC45NmQ4Ny4wNGQ4MDguOTZkODcuMDRkNzM3LjI4ZDQ0MC4zMmQ3MzcuMjhkNDQwLjMyZDk1Mi4zMTloUjNkNTMyLjQ4UjRkNDQwLjMyUjVkODcuMDRSNmQyODYuNzJSN2Q3MS42OFI4ZDE5OS42OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTcyUjEyZDg3LjA0UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTJpMmhnOjU5b1IxZDc2OFIyYWQ0MjcuMDA4ZDExMDUuOTJkMzY1LjU2OGQxMTc3LjZkMzY1LjU2OGQxMDI0ZDMyNC42MDhkMTAyNGQzMjQuNjA4ZDk0Mi4wOGQzNTUuMzI4ZDk0Mi4wOGQzODUuMDI0ZDk0Mi4wOGQ0MDYuMDE2ZDk2My4wNzJkNDI3LjAwOGQ5ODQuMDY0ZDQyNy4wMDhkMTAxMy43NmQ0MjcuMDA4ZDExMDUuOTJkMTU0LjYyNGQ3NDcuNTJkNjIuNDY0ZDc0Ny41MmQ2Mi40NjRkNjY1LjU5OWQxNTQuNjI0ZDY2NS41OTlkMTU0LjYyNGQ3NDcuNTJoUjNkMjM1LjUyUjRkMTY0Ljg2NFI1ZDYyLjQ2NFI2ZDM1OC40UjdkLTE1My42UjhkMjk1LjkzNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTlSMTJkNjIuNDY0UjEzZDIzNS41MlIxNGFpMWkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaGc6MTcxb1IxZDc2OFIyYWQ0NzEuMDRkOTY1LjYzMmQ0MzAuMDhkMTAxNi44MzJkMjU2ZDg0NC44ZDQzMC4wOGQ2NzIuNzY4ZDQ3MS4wNGQ3MjIuOTQ0ZDM0OC4xNmQ4NDQuOGQ0NzEuMDRkOTY1LjYzMmQyNjYuMjRkOTY1LjYzMmQyMjUuMjhkMTAxNi44MzJkNTEuMmQ4NDQuOGQyMjUuMjhkNjcyLjc2OGQyNjYuMjRkNzIyLjk0NGQxNDMuMzZkODQ0LjhkMjY2LjI0ZDk2NS42MzJoUjNkNTIyLjI0UjRkNDcxLjA0UjVkNTEuMlI2ZDM1MS4yMzJSN2Q3LjE2OFI4ZDMwMC4wMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE3MVIxMmQ1MS4yUjEzZDUyMi4yNFIxNGFpMWkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaGc6NThvUjFkNzY4UjJhZDQyNy4wMDhkMTAyNGQzMzQuODQ4ZDEwMjRkMzM0Ljg0OGQ5NDIuMDhkNDI3LjAwOGQ5NDIuMDhkNDI3LjAwOGQxMDI0ZDE2NC44NjRkNzQ3LjUyZDcyLjcwNGQ3NDcuNTJkNzIuNzA0ZDY2NS41OTlkMTY0Ljg2NGQ2NjUuNTk5ZDE2NC44NjRkNzQ3LjUyaFIzZDIzNS41MlI0ZDE2NC44NjRSNWQ3Mi43MDRSNmQzNTguNFI3ZDBSOGQyODUuNjk2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk1OFIxMmQ3Mi43MDRSMTNkMjM1LjUyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTcwb1IxZDc2OFIyYWQzNDMuMDRkODA4Ljk2ZDI3MS4zNmQ4MDguOTZkMjcxLjM2ZDc1Ni43MzZkMjA5LjkyZDgwOC45NmQxMzMuMTJkODA4Ljk2ZDEwMy40MjRkODA4Ljk2ZDgyLjQzMmQ3ODcuOTY4ZDYxLjQ0ZDc2Ni45NzZkNjEuNDRkNzM3LjI4ZDYxLjQ0ZDcwNy41ODRkODIuNDMyZDY4Ni41OTJkMTAzLjQyNGQ2NjUuNTk5ZDEzMy4xMmQ2NjUuNTk5ZDIwOC44OTZkNjY1LjU5OWQxNDguNDhkNzI2LjAxNmQxNDguNDhkNzQ3LjUyZDI3MS4zNmQ3NDcuNTJkMjcxLjM2ZDU4My42OGQ1MS4yZDU4My42OGQxMTIuNjRkNTIyLjI0ZDI3MS4zNmQ1MjIuMjRkMzAxLjA1NmQ1MjIuMjRkMzIyLjA0OGQ1NDMuMjMyZDM0My4wNGQ1NjQuMjIzZDM0My4wNGQ1OTMuOTJkMzQzLjA0ZDgwOC45NmQzNDMuMDRkOTUyLjMxOWQ1Ni4zMmQ5NTIuMzE5ZDU2LjMyZDg5MC44OGQzNDMuMDRkODkwLjg4ZDM0My4wNGQ5NTIuMzE5aFIzZDQwOS42UjRkMzQzLjA0UjVkNTEuMlI2ZDUwMS43NlI3ZDcxLjY4UjhkNDUwLjU2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNzBSMTJkNTEuMlIxM2Q0MDkuNlIxNGFpMWkyaTJpMmkyaTNpM2kzaTNpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmhnOjU3b1IxZDc2OFIyYWQ2MS40NGQ1OTMuOTJkNjEuNDRkNTY0LjIyM2Q4Mi40MzJkNTQzLjIzMmQxMDMuNDI0ZDUyMi4yNGQxMzMuMTJkNTIyLjI0ZDM1OC40ZDUyMi4yNGQzODguMDk2ZDUyMi4yNGQ0MDkuMDg4ZDU0My4yMzJkNDMwLjA4ZDU2NC4yMjNkNDMwLjA4ZDU5My45MmQ0MzAuMDhkOTUyLjMxOWQ0MzAuMDhkOTgyLjAxNmQ0MDkuMDg4ZDEwMDMuMDA4ZDM4OC4wOTZkMTAyNGQzNTguNGQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkOTUyLjMxOWQzNDguMTZkOTUyLjMxOWQzNDguMTZkODE5LjJkMTMzLjEyZDgxOS4yZDEwMy40MjRkODE5LjJkODIuNDMyZDc5OC4yMDhkNjEuNDRkNzc3LjIxNmQ2MS40NGQ3NDcuNTJkNjEuNDRkNTkzLjkyZDE0My4zNmQ1OTMuOTJkMTQzLjM2ZDc0Ny41MmQzNDguMTZkNzQ3LjUyZDM0OC4xNmQ1OTMuOTJkMTQzLjM2ZDU5My45MmhSM2Q1MzIuNDhSNGQ0MzAuMDhSNWQ2MS40NFI2ZDUwMS43NlI3ZDBSOGQ0NDAuMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTU3UjEyZDYxLjQ0UjEzZDUzMi40OFIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmhnOjE2OW9SMWQ3NjhSMmFkODI5LjQ0ZDEwOTUuNjhkODI5LjQ0ZDExMjUuMzc2ZDgwOC40NDhkMTE0Ni4zNjhkNzg3LjQ1NmQxMTY3LjM2ZDc1Ny43NmQxMTY3LjM2ZDE4NC4zMmQxMTY3LjM2ZDE2OC45NmQxMTY3LjM2ZDE1NC4xMTJkMTE2MS43MjhkMTM5LjI2NGQxMTU2LjA5NmQxMjhkMTE0NS44NTZkMTE2LjczNmQxMTM1LjYxNmQxMDkuNTY4ZDExMjIuODE2ZDEwMi40ZDExMTAuMDE2ZDEwMi40ZDEwOTUuNjhkMTAyLjRkNDUwLjU1OWQxMDIuNGQ0MjAuODY0ZDEyMy4zOTJkMzk5Ljg3MWQxNDQuMzg0ZDM3OC44OGQxNzQuMDhkMzc4Ljg4ZDc1Ny43NmQzNzguODhkNzg3LjQ1NmQzNzguODhkODA4LjQ0OGQzOTkuODcxZDgyOS40NGQ0MjAuODY0ZDgyOS40NGQ0NTAuNTU5ZDgyOS40NGQxMDk1LjY4ZDc2OGQxMTA1LjkyZDc2OGQ0NDAuMzE5ZDE2My44NGQ0NDAuMzE5ZDE2My44NGQxMTA1LjkyZDc2OGQxMTA1LjkyZDY3NS44NGQ5NTIuMzE5ZDY3NS44NGQ5ODIuMDE2ZDY1NC44NDhkMTAwMy4wMDhkNjMzLjg1NmQxMDI0ZDYwNC4xNmQxMDI0ZDMzNy45MmQxMDI0ZDMwOC4yMjRkMTAyNGQyODcuMjMyZDEwMDMuMDA4ZDI2Ni4yNGQ5ODIuMDE2ZDI2Ni4yNGQ5NTIuMzE5ZDI2Ni4yNGQ1OTMuOTJkMjY2LjI0ZDU2NC4yMjNkMjg3LjIzMmQ1NDMuMjMyZDMwOC4yMjRkNTIyLjI0ZDMzNy45MmQ1MjIuMjRkNjA0LjE2ZDUyMi4yNGQ2MzMuODU2ZDUyMi4yNGQ2NTQuODQ4ZDU0My4yMzJkNjc1Ljg0ZDU2NC4yMjNkNjc1Ljg0ZDU5My45MmQ2NzUuODRkNjY1LjU5OWQ1OTMuOTJkNjY1LjU5OWQ1OTMuOTJkNTkzLjkyZDM0OC4xNmQ1OTMuOTJkMzQ4LjE2ZDk1Mi4zMTlkNTkzLjkyZDk1Mi4zMTlkNTkzLjkyZDg4MC42NGQ2NzUuODRkODgwLjY0ZDY3NS44NGQ5NTIuMzE5aFIzZDkzMS44NFI0ZDgyOS40NFI1ZDEwMi40UjZkNjQ1LjEyUjdkLTE0My4zNlI4ZDU0Mi43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTY5UjEyZDEwMi40UjEzZDkzMS44NFIxNGFpMWkzaTNpMmkzaTNpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaGc6NTZvUjFkNzY4UjJhZDQ1NS42OGQ5NTIuMzE5ZDQ1NS42OGQ5ODIuMDE2ZDQzNC42ODhkMTAwMy4wMDhkNDEzLjY5NmQxMDI0ZDM4NGQxMDI0ZDE0OC40OGQxMDI0ZDExOC43ODRkMTAyNGQ5Ny43OTJkMTAwMy4wMDhkNzYuOGQ5ODIuMDE2ZDc2LjhkOTUyLjMxOWQ3Ni44ZDc5OC43MmQ3Ni44ZDc3My4xMmQ5My42OTZkNzU1LjcxMmQxMTAuNTkyZDczOC4zMDRkMTM4LjI0ZDczOC4zMDRkMTM4LjI0ZDU5My45MmQxMzguMjRkNTY0LjIyM2QxNTQuNjI0ZDU0My4yMzJkMTcxLjAwOGQ1MjIuMjRkMTk5LjY4ZDUyMi4yNGQzMzIuOGQ1MjIuMjRkMzYxLjQ3MmQ1MjIuMjRkMzc3Ljg1NmQ1NDMuMjMyZDM5NC4yNGQ1NjQuMjIzZDM5NC4yNGQ1OTMuOTJkMzk0LjI0ZDczOC4zMDRkNDIxLjg4OGQ3MzguMzA0ZDQzOC43ODRkNzU1LjJkNDU1LjY4ZDc3Mi4wOTZkNDU1LjY4ZDc5OC43MmQ0NTUuNjhkOTUyLjMxOWQzMjcuNjhkNzM3LjI4ZDMyNy42OGQ1OTMuOTJkMjA0LjhkNTkzLjkyZDIwNC44ZDczNy4yOGQzMjcuNjhkNzM3LjI4ZDM3My43NmQ5NTIuMzE5ZDM3My43NmQ3OTguNzJkMTU4LjcyZDc5OC43MmQxNTguNzJkOTUyLjMxOWQzNzMuNzZkOTUyLjMxOWhSM2Q1MzIuNDhSNGQ0NTUuNjhSNWQ3Ni44UjZkNTAxLjc2UjdkMFI4ZDQyNC45NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTZSMTJkNzYuOFIxM2Q1MzIuNDhSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE2OG9SMWQ3NjhSMmFkMjI1LjI4ZDU5My45MmQxNTguNzJkNTkzLjkyZDE1OC43MmQ1MTJkMjI1LjI4ZDUxMmQyMjUuMjhkNTkzLjkyZDg3LjA0ZDU5My45MmQyMC40OGQ1OTMuOTJkMjAuNDhkNTEyZDg3LjA0ZDUxMmQ4Ny4wNGQ1OTMuOTJoUjNkMjQ1Ljc2UjRkMjI1LjI4UjVkMjAuNDhSNmQ1MTJSN2Q0MzAuMDhSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE2OFIxMmQyMC40OFIxM2QyNDUuNzZSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo1NW9SMWQ3NjhSMmFkNDQ1LjQ0ZDc4OS41MDRkMjA5LjkyZDEwMjRkMTA1LjQ3MmQxMDI0ZDM2My41MmQ3NjQuOTI4ZDM2My41MmQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkNjY1LjU5OWQ4Ny4wNGQ2NjUuNTk5ZDg3LjA0ZDUyMi4yNGQ0NDUuNDRkNTIyLjI0ZDQ0NS40NGQ3ODkuNTA0aFIzZDUzMi40OFI0ZDQ0NS40NFI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTVSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNjdvUjFkNzY4UjJhZDQwOS42ZDUyMi4yNGQzMzYuODk2ZDU5My45MmQxODkuNDRkNTkzLjkyZDE4OS40NGQ2MjMuNjE2ZDM2OC42NGQ4MDAuNzY4ZDM5Ni4yODhkODI4LjQxNWQzOTYuMjg4ZDg1NC4wMTZkMzk2LjI4OGQ4NjYuMzA0ZDM5NS4yNjRkODcwLjRkMzk1LjI2NGQ4NzMuOTg0ZDM5NS4yNjRkODc3LjU2OGQzOTUuMjY0ZDg3OS42MTZkMzk1LjI2NGQ5NjIuNTZkMzE5LjQ4OGQxMDQyLjQzMmQzNjcuNjE2ZDEwOTAuNTZkMzg5LjEyZDExMTIuMDY0ZDM4OS4xMmQxMTQxLjc2ZDM4OS4xMmQxMTY3LjM2ZDM4OS4xMmQxMTk3LjA1NmQzNjguNjRkMTIxOC4wNDhkMzQ4LjE2ZDEyMzkuMDRkMzE3LjQ0ZDEyMzkuMDRkOTIuMTZkMTIzOS4wNGQxNjQuODY0ZDExNjcuMzZkMzEyLjMyZDExNjcuMzZkMzEyLjMyZDExMzcuNjY0ZDEzMy4xMmQ5NjAuNTEyZDEwNS40NzJkOTMyLjg2NGQxMDUuNDcyZDkwNy4yNjRkMTA1LjQ3MmQ4OTQuOTc2ZDEwNi40OTZkODkwLjg4ZDEwNi40OTZkODg3LjI5NmQxMDYuNDk2ZDg4My43MTJkMTA2LjQ5NmQ4ODEuNjY0ZDEwNi40OTZkNzk4LjcyZDE4Mi4yNzJkNzE4Ljg0OGQxMzQuMTQ0ZDY3MC43MmQxMTIuNjRkNjQ5LjIxNmQxMTIuNjRkNjE5LjUyZDExMi42NGQ1OTMuOTJkMTEyLjY0ZDU2NC4yMjNkMTMzLjEyZDU0My4yMzJkMTUzLjZkNTIyLjI0ZDE4NC4zMmQ1MjIuMjRkNDA5LjZkNTIyLjI0ZDMxOC40NjRkMTA0MS40MDdkMzE4LjQ2NGQ4NTUuMDRkMTgzLjI5NmQ3MTkuODcyZDE4My4yOTZkOTA2LjI0ZDMxOC40NjRkMTA0MS40MDdoUjNkNTAxLjc2UjRkNDA5LjZSNWQ5Mi4xNlI2ZDUwMS43NlI3ZC0yMTUuMDRSOGQ0MDkuNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTY3UjEyZDkyLjE2UjEzZDUwMS43NlIxNGFpMWkyaTJpMmkyaTNpMmkzaTNpMmkyaTJpM2kyaTNpM2kyaTJpMmkyaTJpM2kyaTNpM2kyaTJpMmkzaTJpM2kzaTJpMWkyaTJpMmkyaGc6NTRvUjFkNzY4UjJhZDQ1NS42OGQ5NTIuMzE5ZDQ1NS42OGQ5ODIuMDE2ZDQzNC42ODhkMTAwMy4wMDhkNDEzLjY5NmQxMDI0ZDM4NGQxMDI0ZDE1OC43MmQxMDI0ZDEyOS4wMjRkMTAyNGQxMDguMDMyZDEwMDMuMDA4ZDg3LjA0ZDk4Mi4wMTZkODcuMDRkOTUyLjMxOWQ4Ny4wNGQ1OTMuOTJkODcuMDRkNTY0LjIyM2QxMDguMDMyZDU0My4yMzJkMTI5LjAyNGQ1MjIuMjRkMTU4LjcyZDUyMi4yNGQ0NDUuNDRkNTIyLjI0ZDQ0NS40NGQ1OTMuOTJkMTY4Ljk2ZDU5My45MmQxNjguOTZkNzI3LjA0ZDM4NGQ3MjcuMDRkNDEzLjY5NmQ3MjcuMDRkNDM0LjY4OGQ3NDguMDMxZDQ1NS42OGQ3NjkuMDI0ZDQ1NS42OGQ3OTguNzJkNDU1LjY4ZDk1Mi4zMTlkMzczLjc2ZDk1Mi4zMTlkMzczLjc2ZDc5OC43MmQxNjguOTZkNzk4LjcyZDE2OC45NmQ5NTIuMzE5ZDM3My43NmQ5NTIuMzE5aFIzZDUzMi40OFI0ZDQ1NS42OFI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTRSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaGc6MTY2b1IxZDc2OFIyYWQxNzQuMDhkNjY1LjU5OWQxMDIuNGQ2NjUuNTk5ZDEwMi40ZDQ1MC41NTlkMTc0LjA4ZDQ1MC41NTlkMTc0LjA4ZDY2NS41OTlkMTc0LjA4ZDEwOTUuNjhkMTAyLjRkMTA5NS42OGQxMDIuNGQ4ODAuNjRkMTc0LjA4ZDg4MC42NGQxNzQuMDhkMTA5NS42OGhSM2QyNzYuNDhSNGQxNzQuMDhSNWQxMDIuNFI2ZDU3My40NFI3ZC03MS42OFI4ZDQ3MS4wNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTY2UjEyZDEwMi40UjEzZDI3Ni40OFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjUzb1IxZDc2OFIyYWQ0NDUuNDRkOTUyLjMxOWQ0NDUuNDRkOTgyLjAxNmQ0MjQuNDQ4ZDEwMDMuMDA4ZDQwMy40NTZkMTAyNGQzNzMuNzZkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkODgwLjY0ZDE2OC45NmQ4ODAuNjRkMTY4Ljk2ZDk1Mi4zMTlkMzYzLjUyZDk1Mi4zMTlkMzYzLjUyZDc0Ny41MmQ4Ny4wNGQ3NDcuNTJkODcuMDRkNTIyLjI0ZDQ0NS40NGQ1MjIuMjRkNDQ1LjQ0ZDU5My45MmQxNTguNzJkNTkzLjkyZDE1OC43MmQ2NzUuODM5ZDM3My43NmQ2NzUuODM5ZDQwMy40NTZkNjc1LjgzOWQ0MjQuNDQ4ZDY5Ni44MzJkNDQ1LjQ0ZDcxNy44MjRkNDQ1LjQ0ZDc0Ny41MmQ0NDUuNDRkOTUyLjMxOWhSM2Q1MzIuNDhSNGQ0NDUuNDRSNWQ4Ny4wNFI2ZDUwMS43NlI3ZDBSOGQ0MTQuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTUzUjEyZDg3LjA0UjEzZDUzMi40OFIxNGFpMWkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJoZzoxNjVvUjFkNzY4UjJhZDQ5MS41MmQ1MjIuMjRkMzY4LjY0ZDc0Ny41MmQ0ODEuMjhkNzQ3LjUyZDQxOS44NGQ4MDguOTZkMzIyLjU2ZDgwOC45NmQzMjIuNTZkODkwLjg4ZDQ4MS4yOGQ4OTAuODhkNDE5Ljg0ZDk1Mi4zMTlkMzIyLjU2ZDk1Mi4zMTlkMzIyLjU2ZDEwMjRkMjQwLjY0ZDEwMjRkMjQwLjY0ZDk1Mi4zMTlkODEuOTJkOTUyLjMxOWQxNDMuMzZkODkwLjg4ZDI0MC42NGQ4OTAuODhkMjQwLjY0ZDgwOC45NmQ4MS45MmQ4MDguOTZkMTQzLjM2ZDc0Ny41MmQxOTQuNTZkNzQ3LjUyZDcxLjY4ZDUyMi4yNGQxNTMuNmQ1MjIuMjRkMjc2LjQ4ZDc1Ny43NmQyODYuNzJkNzU3Ljc2ZDQwOS42ZDUyMi4yNGQ0OTEuNTJkNTIyLjI0aFIzZDUzMi40OFI0ZDQ5MS41MlI1ZDcxLjY4UjZkNTAxLjc2UjdkMFI4ZDQzMC4wOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTY1UjEyZDcxLjY4UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjUyb1IxZDc2OFIyYWQ0NTUuNjhkNTIyLjI0ZDE1OC43MmQ4MTUuMTA0ZDE1OC43MmQ4ODAuNjRkMzYzLjUyZDg4MC42NGQzNjMuNTJkNzA2LjU2ZDQ0NS40NGQ2MjQuNjRkNDQ1LjQ0ZDEwMjRkMzYzLjUyZDEwMjRkMzYzLjUyZDk1Mi4zMTlkODcuMDRkOTUyLjMxOWQ4Ny4wNGQ4MTMuMDU2ZDg3LjA0ZDgwMC43NjhkODcuNTUyZDc5My42ZDg4LjA2NGQ3ODYuNDMyZDkwLjExMmQ3ODAuOGQ5Mi4xNmQ3NzUuMTY4ZDk2LjI1NmQ3NzAuNTZkMTAwLjM1MmQ3NjUuOTUyZDEwNi40OTZkNzU4Ljc4NGQzNDAuOTkyZDUyMi4yNGQ0NTUuNjhkNTIyLjI0aFIzZDUzMi40OFI0ZDQ1NS42OFI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTJSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTNpM2kyaTJoZzoxNjRvUjFkNzY4UjJhZDQ1MC41NmQ5NDEuMDU2ZDQwMC4zODRkOTkxLjIzMmQzNDIuMDE2ZDkzNC45MTJkMzI4LjcwNGQ5NDguMjI0ZDMyMC41MTJkOTU2LjQxNWQzMTIuMzJkOTY0LjYwOGQzMDguMjI0ZDk2Ni42NTZkMjg4Ljc2OGQ5ODAuOTkyZDI2Ni4yNGQ5ODAuOTkyZDI0My43MTJkOTgwLjk5MmQyMjMuMjMyZDk2Ni42NTZkMjE5LjEzNmQ5NjQuNjA4ZDIxMC45NDRkOTU2LjQxNWQyMDIuNzUyZDk0OC4yMjRkMTg5LjQ0ZDkzNC45MTJkMTMyLjA5NmQ5OTEuMjMyZDgxLjkyZDk0MS4wNTZkMTM5LjI2NGQ4ODQuNzM2ZDEwOS41NjhkODU1LjA0ZDEwNi40OTZkODUwLjk0NGQ5Mi4xNmQ4MzEuNDg4ZDkyLjE2ZDgwOC45NmQ5Mi4xNmQ3ODYuNDMyZDEwNi40OTZkNzY1Ljk1MmQxMDguNTQ0ZDc2Mi44OGQxMTYuMjI0ZDc1NC42ODhkMTIzLjkwNGQ3NDYuNDk2ZDEzOC4yNGQ3MzMuMTg0ZDgxLjkyZDY3Ni44NjRkMTMyLjA5NmQ2MjYuNjg4ZDE4OS40NGQ2ODEuOTgzZDIwMi43NTJkNjY4LjY3MmQyMTAuOTQ0ZDY2MC40OGQyMTkuMTM2ZDY1Mi4yODhkMjIzLjIzMmQ2NTAuMjRkMjQyLjY4OGQ2MzUuOTA0ZDI2NS4yMTZkNjM1LjkwNGQyODguNzY4ZDYzNS45MDRkMzA5LjI0OGQ2NTAuMjRkMzEzLjM0NGQ2NTMuMzEyZDMyMS41MzZkNjYxLjUwNGQzMjkuNzI4ZDY2OS42OTVkMzQzLjA0ZDY4My4wMDhkNDAwLjM4NGQ2MjYuNjg4ZDQ1MC41NmQ2NzYuODY0ZDM5My4yMTZkNzMzLjE4NGQ0MDcuNTUyZDc0Ni40OTZkNDE1LjIzMmQ3NTQuNjg4ZDQyMi45MTJkNzYyLjg4ZDQyNC45NmQ3NjUuOTUyZDQzOS4yOTZkNzg2LjQzMmQ0MzkuMjk2ZDgwNy45MzZkNDM5LjI5NmQ4MzAuNDY0ZDQyNC45NmQ4NTAuOTQ0ZDQyMi45MTJkODU0LjAxNmQ0MTUuMjMyZDg2Mi4yMDhkNDA3LjU1MmQ4NzAuNGQzOTMuMjE2ZDg4My43MTJkNDUwLjU2ZDk0MS4wNTZkMzgwLjkyOGQ4MDguOTZkMjY1LjIxNmQ2OTMuMjQ4ZDE1MC41MjhkODA4Ljk2ZDI2NS4yMTZkOTIzLjY0OGQzODAuOTI4ZDgwOC45NmhSM2Q1MzIuNDhSNGQ0NTAuNTZSNWQ4MS45MlI2ZDM5Ny4zMTJSN2QzMi43NjhSOGQzMTUuMzkyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNjRSMTJkODEuOTJSMTNkNTMyLjQ4UjE0YWkxaTJpMmkzaTNpM2kzaTNpM2kyaTJpMmkzaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTNpMmkxaTJpMmkyaTJoZzo1MW9SMWQ3NjhSMmFkNDQ1LjQ0ZDk1Mi4zMTlkNDQ1LjQ0ZDk4Mi4wMTZkNDI0LjQ0OGQxMDAzLjAwOGQ0MDMuNDU2ZDEwMjRkMzczLjc2ZDEwMjRkMTU4LjcyZDEwMjRkMTI5LjAyNGQxMDI0ZDEwOC4wMzJkMTAwMy4wMDhkODcuMDRkOTgyLjAxNmQ4Ny4wNGQ5NTIuMzE5ZDg3LjA0ZDg4MC42NGQxNjguOTZkODgwLjY0ZDE2OC45NmQ5NTIuMzE5ZDM2My41MmQ5NTIuMzE5ZDM2My41MmQ4MDguOTZkMjMwLjRkODA4Ljk2ZDIzMC40ZDc0OS41NjhkMzczLjc2ZDYwNC4xNmQzNzMuNzZkNTkzLjkyZDg3LjA0ZDU5My45MmQ4Ny4wNGQ1MjIuMjRkNDQ1LjQ0ZDUyMi4yNGQ0NDUuNDRkNjI1LjY2NGQzMzMuODI0ZDczNy4yOGQzMzMuODI0ZDc0Ny41MmQzMzMuODI0ZDc0Ni40OTZkMzQ1LjA4OGQ3NDYuNDk2ZDM1MC4yMDhkNzQ2LjQ5NmQzNTcuMzc2ZDc0Ni40OTZkMzY0LjU0NGQ3NDYuNDk2ZDM3My43NmQ3NDcuNTJkNDAzLjQ1NmQ3NDguNTQ0ZDQyNC40NDhkNzY5LjUzNmQ0NDUuNDRkNzkwLjUyOGQ0NDUuNDRkODE5LjJkNDQ1LjQ0ZDk1Mi4zMTloUjNkNTMyLjQ4UjRkNDQ1LjQ0UjVkODcuMDRSNmQ1MDEuNzZSN2QwUjhkNDE0LjcyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk1MVIxMmQ4Ny4wNFIxM2Q1MzIuNDhSMTRhaTFpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kzaTNpM2kyaGc6MTYzb1IxZDc2OFIyYWQ0NjAuOGQ5NTIuMzE5ZDQ2MC44ZDk4Mi4wMTZkNDM5LjgwOGQxMDAzLjAwOGQ0MTguODE2ZDEwMjRkMzg5LjEyZDEwMjRkMTAyLjRkMTAyNGQxMDIuNGQ5NTIuMzE5ZDE3NC4wOGQ5NTIuMzE5ZDE3NC4wOGQ4MDguOTZkMTAyLjRkODA4Ljk2ZDEwMi40ZDc0Ny41MmQxNTcuNjk2ZDc0Ny41MmQxNTcuNjk2ZDczNy4yOGQxMjhkNzA4LjYwOGQxMDIuNGQ2ODMuMDA4ZDEwMi40ZDY1NS4zNmQxMDIuNGQ1OTMuOTJkMTAyLjRkNTY0LjIyM2QxMjMuMzkyZDU0My4yMzJkMTQ0LjM4NGQ1MjIuMjRkMTc0LjA4ZDUyMi4yNGQzODkuMTJkNTIyLjI0ZDQxOC44MTZkNTIyLjI0ZDQzOS44MDhkNTQzLjIzMmQ0NjAuOGQ1NjQuMjIzZDQ2MC44ZDU5My45MmQ0NjAuOGQ2NjUuNTk5ZDM3OC44OGQ2NjUuNTk5ZDM3OC44OGQ1OTMuOTJkMTg0LjMyZDU5My45MmQxODQuMzJkNjc1LjgzOWQyNTZkNzQ3LjUyZDM0OC4xNmQ3NDcuNTJkMjg1LjY5NmQ4MDguOTZkMjU2ZDgwOC45NmQyNTZkOTUyLjMxOWQzNzguODhkOTUyLjMxOWQzNzguODhkODgwLjY0ZDQ2MC44ZDg4MC42NGQ0NjAuOGQ5NTIuMzE5aFIzZDUzMi40OFI0ZDQ2MC44UjVkMTAyLjRSNmQ1MDEuNzZSN2QwUjhkMzk5LjM2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNjNSMTJkMTAyLjRSMTNkNTMyLjQ4UjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmhnOjUwb1IxZDc2OFIyYWQ0NDUuNDRkMTAyNGQ4Ny4wNGQxMDI0ZDg3LjA0ZDkxNi40OGQzNjMuNTJkNzEzLjcyOGQzNjMuNTJkNTkzLjkyZDE2OC45NmQ1OTMuOTJkMTY4Ljk2ZDY2NS41OTlkODcuMDRkNjY1LjU5OWQ4Ny4wNGQ1OTMuOTJkODcuMDRkNTY0LjIyM2QxMDguMDMyZDU0My4yMzJkMTI5LjAyNGQ1MjIuMjRkMTU4LjcyZDUyMi4yNGQzNzMuNzZkNTIyLjI0ZDQwMy40NTZkNTIyLjI0ZDQyNC40NDhkNTQzLjIzMmQ0NDUuNDRkNTY0LjIyM2Q0NDUuNDRkNTkzLjkyZDQ0NS40NGQ3NDIuNGQxNzQuMDhkOTQyLjA4ZDE3NC4wOGQ5NTIuMzE5ZDQ0NS40NGQ5NTIuMzE5ZDQ0NS40NGQxMDI0aFIzZDUzMi40OFI0ZDQ0NS40NFI1ZDg3LjA0UjZkNTAxLjc2UjdkMFI4ZDQxNC43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNTBSMTJkODcuMDRSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaGc6MTYyb1IxZDc2OFIyYWQ0MzAuMDhkNjY1LjU5OWQzNjcuNjE2ZDcyNy4wNGQzMDcuMmQ3MjcuMDRkMzA3LjJkOTYyLjU2ZDM5OS4zNmQ5NjIuNTZkMzk5LjM2ZDEwMjRkMzA3LjJkMTAyNGQyNDUuNzZkMTA4NS40NGQyNDUuNzZkMTAyNGQxNjMuODRkMTAyNGQxMzQuMTQ0ZDEwMjRkMTEzLjE1MmQxMDAzLjAwOGQ5Mi4xNmQ5ODIuMDE2ZDkyLjE2ZDk1Mi4zMTlkOTIuMTZkNzM3LjI4ZDkyLjE2ZDcwNy41ODRkMTEzLjE1MmQ2ODYuNTkyZDEzNC4xNDRkNjY1LjU5OWQxNjMuODRkNjY1LjU5OWQyNDUuNzZkNjY1LjU5OWQzMDcuMmQ2MDQuMTZkMzA3LjJkNjY1LjU5OWQ0MzAuMDhkNjY1LjU5OWQyNDUuNzZkOTYyLjU2ZDI0NS43NmQ3MjcuMDRkMTYzLjg0ZDcyNy4wNGQxNjMuODRkOTYyLjU2ZDI0NS43NmQ5NjIuNTZoUjNkNDQwLjMyUjRkNDMwLjA4UjVkOTIuMTZSNmQ0MTkuODRSN2QtNjEuNDRSOGQzMjcuNjhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE2MlIxMmQ5Mi4xNlIxM2Q0NDAuMzJSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDlvUjFkNzY4UjJhZDQ0NS40NGQxMDI0ZDg3LjA0ZDEwMjRkODcuMDRkOTUyLjMxOWQyOTEuODRkOTUyLjMxOWQyOTEuODRkNjA5LjI4ZDI4MS42ZDYwOS4yOGQxMTcuNzZkNzczLjEyZDY2LjU2ZDcyMC44OTZkMjY1LjIxNmQ1MjIuMjRkMzczLjc2ZDUyMi4yNGQzNzMuNzZkOTUyLjMxOWQ0NDUuNDRkOTUyLjMxOWQ0NDUuNDRkMTAyNGhSM2Q1MzIuNDhSNGQ0NDUuNDRSNWQ2Ni41NlI2ZDUwMS43NlI3ZDBSOGQ0MzUuMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNDlSMTJkNjYuNTZSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MTYxb1IxZDc2OFIyYWQ5Mi4xNmQ4ODguODMyZDE3NC4wOGQ4MDguOTZkMTc0LjA4ZDExNjcuMzZkOTIuMTZkMTE2Ny4zNmQ5Mi4xNmQ4ODguODMyZDkyLjE2ZDY2NS41OTlkMTg0LjMyZDY2NS41OTlkMTg0LjMyZDc0Ny41MmQ5Mi4xNmQ3NDcuNTJkOTIuMTZkNjY1LjU5OWhSM2QyODYuNzJSNGQxODQuMzJSNWQ5Mi4xNlI2ZDM1OC40UjdkLTE0My4zNlI4ZDI2Ni4yNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTYxUjEyZDkyLjE2UjEzZDI4Ni43MlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ4b1IxZDc2OFIyYWQ0NDUuNDRkOTUyLjMxOWQ0NDUuNDRkOTgyLjAxNmQ0MjQuNDQ4ZDEwMDMuMDA4ZDQwMy40NTZkMTAyNGQzNzMuNzZkMTAyNGQxNTguNzJkMTAyNGQxMjkuMDI0ZDEwMjRkMTA4LjAzMmQxMDAzLjAwOGQ4Ny4wNGQ5ODIuMDE2ZDg3LjA0ZDk1Mi4zMTlkODcuMDRkNTkzLjkyZDg3LjA0ZDU2NC4yMjNkMTA4LjAzMmQ1NDMuMjMyZDEyOS4wMjRkNTIyLjI0ZDE1OC43MmQ1MjIuMjRkMzczLjc2ZDUyMi4yNGQ0MDMuNDU2ZDUyMi4yNGQ0MjQuNDQ4ZDU0My4yMzJkNDQ1LjQ0ZDU2NC4yMjNkNDQ1LjQ0ZDU5My45MmQ0NDUuNDRkOTUyLjMxOWQzNjMuNTJkOTUyLjMxOWQzNjMuNTJkNTkzLjkyZDE2OC45NmQ1OTMuOTJkMTY4Ljk2ZDk1Mi4zMTlkMzYzLjUyZDk1Mi4zMTloUjNkNTMyLjQ4UjRkNDQ1LjQ0UjVkODcuMDRSNmQ1MDEuNzZSN2QwUjhkNDE0LjcyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0OFIxMmQ4Ny4wNFIxM2Q1MzIuNDhSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaGc6MTYwb1IxZDc2OFIyYWhSM2QyMDQuOFI0ZDBSNWQwUjZkMFI3ZDBSOGQwUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNjBSMTJkMFIxM2QyMDQuOFIxNGFoZzo0N29SMWQ3NjhSMmFkMzM3LjkyZDQ1MC41NTlkNTUuMjk2ZDEwOTUuNjhkLTIwLjQ4ZDEwOTUuNjhkMjY1LjIxNmQ0NTAuNTU5ZDMzNy45MmQ0NTAuNTU5aFIzZDMxNy40NFI0ZDMzNy45MlI1ZC0yMC40OFI2ZDU3My40NFI3ZC03MS42OFI4ZDU5My45MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNDdSMTJkLTIwLjQ4UjEzZDMxNy40NFIxNGFpMWkyaTJpMmkyaGc6MTU5b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1OVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDZvUjFkNzY4UjJhZDE3NC4wOGQxMDI0ZDgxLjkyZDEwMjRkODEuOTJkOTQyLjA4ZDE3NC4wOGQ5NDIuMDhkMTc0LjA4ZDEwMjRoUjNkMjU2UjRkMTc0LjA4UjVkODEuOTJSNmQ4MS45MlI3ZDBSOGQwUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0NlIxMmQ4MS45MlIxM2QyNTZSMTRhaTFpMmkyaTJpMmhnOjE1OG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNThSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ1b1IxZDc2OFIyYWQyNjYuMjRkODA4Ljk2ZDE5NC41NmQ4ODAuNjRkMjAuNDhkODgwLjY0ZDkyLjE2ZDgwOC45NmQyNjYuMjRkODA4Ljk2aFIzZDI4Ni43MlI0ZDI2Ni4yNFI1ZDIwLjQ4UjZkMjE1LjA0UjdkMTQzLjM2UjhkMTk0LjU2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0NVIxMmQyMC40OFIxM2QyODYuNzJSMTRhaTFpMmkyaTJpMmhnOjE1N29SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNTdSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjQ0b1IxZDc2OFIyYWQxODQuMzJkMTEwNS45MmQxMjIuODhkMTE3Ny42ZDEyMi44OGQxMDI0ZDgxLjkyZDEwMjRkODEuOTJkOTQyLjA4ZDExMi42NGQ5NDIuMDhkMTQyLjMzNmQ5NDIuMDhkMTYzLjMyOGQ5NjMuMDcyZDE4NC4zMmQ5ODQuMDY0ZDE4NC4zMmQxMDEzLjc2ZDE4NC4zMmQxMTA1LjkyaFIzZDI2Ni4yNFI0ZDE4NC4zMlI1ZDgxLjkyUjZkODEuOTJSN2QtMTUzLjZSOGQwUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0NFIxMmQ4MS45MlIxM2QyNjYuMjRSMTRhaTFpMmkyaTJpMmkyaTNpM2kyaGc6MTU2b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1NlIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDNvUjFkNzY4UjJhZDQ0NS40NGQ4ODAuNjRkMzAyLjA4ZDg4MC42NGQzMDIuMDhkMTAyNGQyMzAuNGQxMDI0ZDIzMC40ZDg4MC42NGQ4Ny4wNGQ4ODAuNjRkODcuMDRkODA4Ljk2ZDIzMC40ZDgwOC45NmQyMzAuNGQ2NjUuNTk5ZDMwMi4wOGQ2NjUuNTk5ZDMwMi4wOGQ4MDguOTZkNDQ1LjQ0ZDgwOC45NmQ0NDUuNDRkODgwLjY0aFIzZDUzMi40OFI0ZDQ0NS40NFI1ZDg3LjA0UjZkMzU4LjRSN2QwUjhkMjcxLjM2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0M1IxMmQ4Ny4wNFIxM2Q1MzIuNDhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoxNTVvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTU1UjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzo0Mm9SMWQ3NjhSMmFkNDE1Ljc0NGQ1MzUuNTUxZDM1MC4yMDhkNjAxLjA4OGQzNTAuMjA4ZDUxNC4wNDhkNDE1Ljc0NGQ0NDguNTExZDQxNS43NDRkNTM1LjU1MWQzMzQuODQ4ZDU0My43NDNkMjczLjQwOGQ0ODIuMzA0ZDI3My40MDhkMzkwLjE0NGQzMzQuODQ4ZDQ1MS41ODNkMzM0Ljg0OGQ1NDMuNzQzZDQ3NS4xMzZkNTkyLjg5NmQ0MTMuNjk2ZDY1NC4zMzZkMzIxLjUzNmQ2NTQuMzM2ZDM4Mi45NzZkNTkyLjg5NmQ0NzUuMTM2ZDU5Mi44OTZkMjgyLjYyNGQ1MTUuMDcyZDE5NS41ODRkNTE1LjA3MmQxMzAuMDQ4ZDQ0OS41MzVkMjE3LjA4OGQ0NDkuNTM1ZDI4Mi42MjRkNTE1LjA3MmQ0MjcuMDA4ZDczOC4zMDRkMzM5Ljk2OGQ3MzguMzA0ZDI3NC40MzJkNjcyLjc2OGQzNjEuNDcyZDY3Mi43NjhkNDI3LjAwOGQ3MzguMzA0ZDIyNS4yOGQ1MzEuNDU2ZDE2My44NGQ1OTIuODk2ZDcxLjY4ZDU5Mi44OTZkMTMzLjEyZDUzMS40NTZkMjI1LjI4ZDUzMS40NTZkMjczLjQwOGQ3OTMuNmQyMTEuOTY4ZDczMi4xNmQyMTEuOTY4ZDY0MGQyNzMuNDA4ZDcwMS40NGQyNzMuNDA4ZDc5My42ZDE5Ni42MDhkNTgzLjY4ZDE5Ni42MDhkNjY5LjY5NWQxMzEuMDcyZDczNS4yMzJkMTMxLjA3MmQ2NDguMTkyZDE5Ni42MDhkNTgzLjY4aFIzZDU0Ni44MTZSNGQ0NzUuMTM2UjVkNzEuNjhSNmQ2MzMuODU2UjdkMjMwLjRSOGQ1NjIuMTc2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0MlIxMmQ3MS42OFIxM2Q1NDYuODE2UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTU0b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1NFIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDFvUjFkNzY4UjJhZDcxLjY4ZDEwMzQuMjRkMTQzLjM2ZDEwMzQuMjRkMTQzLjM2ZDUxMmQ3MS42OGQ1MTJkNzEuNjhkNDUwLjU1OWQxNDMuMzZkNDUwLjU1OWQxNzMuMDU2ZDQ1MC41NTlkMTk0LjA0OGQ0NzEuNTUyZDIxNS4wNGQ0OTIuNTQ0ZDIxNS4wNGQ1MjIuMjRkMjE1LjA0ZDEwMjRkMjE1LjA0ZDEwNTMuNjk2ZDE5NC4wNDhkMTA3NC42ODhkMTczLjA1NmQxMDk1LjY4ZDE0My4zNmQxMDk1LjY4ZDcxLjY4ZDEwOTUuNjhkNzEuNjhkMTAzNC4yNGhSM2QzMjcuNjhSNGQyMTUuMDRSNWQ3MS42OFI2ZDU3My40NFI3ZC03MS42OFI4ZDUwMS43NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpNDFSMTJkNzEuNjhSMTNkMzI3LjY4UjE0YWkxaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaGc6MTUzb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1M1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6NDBvUjFkNzY4UjJhZDI1NmQxMDk1LjY4ZDE4NC4zMmQxMDk1LjY4ZDE1NC42MjRkMTA5NS42OGQxMzMuNjMyZDEwNzQuNjg4ZDExMi42NGQxMDUzLjY5NmQxMTIuNjRkMTAyNGQxMTIuNjRkNTIyLjI0ZDExMi42NGQ0OTIuNTQ0ZDEzMy42MzJkNDcxLjU1MmQxNTQuNjI0ZDQ1MC41NTlkMTg0LjMyZDQ1MC41NTlkMjU2ZDQ1MC41NTlkMjU2ZDUxMmQxODQuMzJkNTEyZDE4NC4zMmQxMDM0LjI0ZDI1NmQxMDM0LjI0ZDI1NmQxMDk1LjY4aFIzZDMyNy42OFI0ZDI1NlI1ZDExMi42NFI2ZDU3My40NFI3ZC03MS42OFI4ZDQ2MC44UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWk0MFIxMmQxMTIuNjRSMTNkMzI3LjY4UjE0YWkxaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaGc6MTUyb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE1MlIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzlvUjFkNzY4UjJhZDE2My44NGQ2MTYuNDQ4ZDkyLjE2ZDY4Ni4wNzlkOTIuMTZkNDUwLjU1OWQxNjMuODRkNDUwLjU1OWQxNjMuODRkNjE2LjQ0OGhSM2QyNDUuNzZSNGQxNjMuODRSNWQ5Mi4xNlI2ZDU3My40NFI3ZDMzNy45MlI4ZDQ4MS4yOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMzlSMTJkOTIuMTZSMTNkMjQ1Ljc2UjE0YWkxaTJpMmkyaTJoZzoxNTFvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTUxUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozOG9SMWQ3NjhSMmFkNTkzLjkyZDEwMjRkNTAxLjc2ZDEwMjRkNDQ5LjUzNmQ5NzMuODI0ZDM5OS4zNmQxMDI0ZDE3NC4wOGQxMDI0ZDE0NC4zODRkMTAyNGQxMjMuMzkyZDEwMDMuMDA4ZDEwMi40ZDk4Mi4wMTZkMTAyLjRkOTUyLjMxOWQxMDIuNGQ4MjkuNDRkMTAyLjRkODE0LjA3OWQxMDguMDMyZDgwMC4yNTZkMTEzLjY2NGQ3ODYuNDMyZDEyMy45MDRkNzc1LjY4ZDEzNC4xNDRkNzY0LjkyOGQxNDYuOTQ0ZDc1OC43ODRkMTU5Ljc0NGQ3NTIuNjRkMTc0LjA4ZDc1Mi42NGQyMjUuMjhkNzUyLjY0ZDE4OS40NGQ3MTguODQ4ZDE2My44NGQ2OTMuMjQ4ZDE2My44NGQ2NjUuNTk5ZDE2My44NGQ1OTMuOTJkMTYzLjg0ZDU2NC4yMjNkMTg0LjgzMmQ1NDMuMjMyZDIwNS44MjRkNTIyLjI0ZDIzNS41MmQ1MjIuMjRkMzc4Ljg4ZDUyMi4yNGQ0MDguNTc2ZDUyMi4yNGQ0MjkuNTY4ZDU0My4yMzJkNDUwLjU2ZDU2NC4yMjNkNDUwLjU2ZDU5My45MmQ0NTAuNTZkNjY1LjU5OWQzNzguODhkNjY1LjU5OWQzNzguODhkNTgzLjY4ZDIzNS41MmQ1ODMuNjhkMjM1LjUyZDY2NS41OTlkMzUzLjI4ZDc4My4zNmQzOTAuMTQ0ZDc0Ny41MmQ1NDIuNzJkNzQ3LjUyZDQ4MC4yNTZkODA4Ljk2ZDM3OC44OGQ4MDguOTZkNTkzLjkyZDEwMjRkNDM5LjI5NmQ5NjIuNTZkMjgyLjYyNGQ4MDguOTZkMTc0LjA4ZDgwOC45NmQxNzQuMDhkOTYyLjU2ZDQzOS4yOTZkOTYyLjU2aFIzZDYxNC40UjRkNTkzLjkyUjVkMTAyLjRSNmQ1MDEuNzZSN2QwUjhkMzk5LjM2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkzOFIxMmQxMDIuNFIxM2Q2MTQuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kzaTNpMmkyaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjE1MG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNTBSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjM3b1IxZDc2OFIyYWQ2MzQuODhkOTUyLjMxOWQ2MzQuODhkOTgyLjAxNmQ2MTMuODg4ZDEwMDMuMDA4ZDU5Mi44OTZkMTAyNGQ1NjMuMmQxMDI0ZDQ5MS41MmQxMDI0ZDQ2MS44MjRkMTAyNGQ0NDAuODMyZDEwMDMuMDA4ZDQxOS44NGQ5ODIuMDE2ZDQxOS44NGQ5NTIuMzE5ZDQxOS44NGQ4MDguOTZkNDE5Ljg0ZDc3OS4yNjRkNDQwLjgzMmQ3NTguMjcxZDQ2MS44MjRkNzM3LjI4ZDQ5MS41MmQ3MzcuMjhkNTYzLjJkNzM3LjI4ZDU5Mi44OTZkNzM3LjI4ZDYxMy44ODhkNzU4LjI3MWQ2MzQuODhkNzc5LjI2NGQ2MzQuODhkODA4Ljk2ZDYzNC44OGQ5NTIuMzE5ZDUxMC45NzZkNDUwLjU1OWQyNTkuMDcyZDEwMjRkMTgzLjI5NmQxMDI0ZDQzOC4yNzJkNDUwLjU1OWQ1MTAuOTc2ZDQ1MC41NTlkMjc2LjQ4ZDY2NS41OTlkMjc2LjQ4ZDY5NS4yOTZkMjU1LjQ4OGQ3MTYuMjg4ZDIzNC40OTZkNzM3LjI4ZDIwNC44ZDczNy4yOGQxMzMuMTJkNzM3LjI4ZDEwMy40MjRkNzM3LjI4ZDgyLjQzMmQ3MTYuMjg4ZDYxLjQ0ZDY5NS4yOTZkNjEuNDRkNjY1LjU5OWQ2MS40NGQ1MjIuMjRkNjEuNDRkNDkyLjU0NGQ4Mi40MzJkNDcxLjU1MmQxMDMuNDI0ZDQ1MC41NTlkMTMzLjEyZDQ1MC41NTlkMjA0LjhkNDUwLjU1OWQyMzQuNDk2ZDQ1MC41NTlkMjU1LjQ4OGQ0NzEuNTUyZDI3Ni40OGQ0OTIuNTQ0ZDI3Ni40OGQ1MjIuMjRkMjc2LjQ4ZDY2NS41OTlkNTczLjQ0ZDk2Mi41NmQ1NzMuNDRkNzk4LjcyZDQ4MS4yOGQ3OTguNzJkNDgxLjI4ZDk2Mi41NmQ1NzMuNDRkOTYyLjU2ZDIxNS4wNGQ2NzUuODM5ZDIxNS4wNGQ1MTJkMTIyLjg4ZDUxMmQxMjIuODhkNjc1LjgzOWQyMTUuMDRkNjc1LjgzOWhSM2Q2OTYuMzJSNGQ2MzQuODhSNWQ2MS40NFI2ZDU3My40NFI3ZDBSOGQ1MTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTM3UjEyZDYxLjQ0UjEzZDY5Ni4zMlIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ5b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE0OVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzZvUjFkNzY4UjJhZDQ2MC44ZDUyMi4yNGQzODkuMTJkNTkzLjkyZDI5Ni45NmQ1OTMuOTJkMjk2Ljk2ZDczNy4yOGQzNzguODhkNzM3LjI4ZDQwOC41NzZkNzM3LjI4ZDQyOS41NjhkNzU4LjI3MWQ0NTAuNTZkNzc5LjI2NGQ0NTAuNTZkODA4Ljk2ZDQ1MC41NmQ5NTIuMzE5ZDQ1MC41NmQ5ODIuMDE2ZDQyOS41NjhkMTAwMy4wMDhkNDA4LjU3NmQxMDI0ZDM3OC44OGQxMDI0ZDI5Ni45NmQxMDI0ZDIzNS41MmQxMDg1LjQ0ZDIzNS41MmQxMDI0ZDcxLjY4ZDEwMjRkMTQzLjM2ZDk1Mi4zMTlkMjM1LjUyZDk1Mi4zMTlkMjM1LjUyZDgwOC45NmQxNTMuNmQ4MDguOTZkMTIzLjkwNGQ4MDguOTZkMTAyLjkxMmQ3ODcuOTY4ZDgxLjkyZDc2Ni45NzZkODEuOTJkNzM3LjI4ZDgxLjkyZDU5My45MmQ4MS45MmQ1NjQuMjIzZDEwMi45MTJkNTQzLjIzMmQxMjMuOTA0ZDUyMi4yNGQxNTMuNmQ1MjIuMjRkMjM1LjUyZDUyMi4yNGQyOTYuOTZkNDYwLjc5OWQyOTYuOTZkNTIyLjI0ZDQ2MC44ZDUyMi4yNGQyMzUuNTJkNzM3LjI4ZDIzNS41MmQ1OTMuOTJkMTUzLjZkNTkzLjkyZDE1My42ZDczNy4yOGQyMzUuNTJkNzM3LjI4ZDM3OC44OGQ5NTIuMzE5ZDM3OC44OGQ4MDguOTZkMjk2Ljk2ZDgwOC45NmQyOTYuOTZkOTUyLjMxOWQzNzguODhkOTUyLjMxOWhSM2Q1MzIuNDhSNGQ0NjAuOFI1ZDcxLjY4UjZkNTYzLjJSN2QtNjEuNDRSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTM2UjEyZDcxLjY4UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjE0OG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxNDhSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjM1b1IxZDc2OFIyYWQ1MjMuMjY0ZDY2NS41OTlkNDQ5LjUzNmQ3MjcuMDRkNDE4LjgxNmQ3MjcuMDRkMzkxLjE2OGQ4NzAuNGQ0ODMuMzI4ZDg3MC40ZDQwOS42ZDkzMS44NGQzNzguODhkOTMxLjg0ZDM3Mi43MzZkOTYyLjU2ZDMwMC4wMzJkMTAyNGQzMTcuNDRkOTMxLjg0ZDE3NC4wOGQ5MzEuODRkMTY3LjkzNmQ5NjIuNTZkOTUuMjMyZDEwMjRkMTEyLjY0ZDkzMS44NGQyMC40OGQ5MzEuODRkOTQuMjA4ZDg3MC40ZDEyNC45MjhkODcwLjRkMTUyLjU3NmQ3MjcuMDRkNjAuNDE2ZDcyNy4wNGQxMzQuMTQ0ZDY2NS41OTlkMTY0Ljg2NGQ2NjUuNTk5ZDE2OS45ODRkNjM0Ljg4ZDI0My43MTJkNTczLjQ0ZDIyNi4zMDRkNjY1LjU5OWQzNjkuNjY0ZDY2NS41OTlkMzc0Ljc4NGQ2MzQuODhkNDQ4LjUxMmQ1NzMuNDRkNDMxLjEwNGQ2NjUuNTk5ZDUyMy4yNjRkNjY1LjU5OWQzNTcuMzc2ZDcyNy4wNGQyMTQuMDE2ZDcyNy4wNGQxODYuMzY4ZDg3MC40ZDMyOS43MjhkODcwLjRkMzU3LjM3NmQ3MjcuMDRoUjNkNTMyLjQ4UjRkNTIzLjI2NFI1ZDIwLjQ4UjZkNDUwLjU2UjdkMFI4ZDQzMC4wOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMzVSMTJkMjAuNDhSMTNkNTMyLjQ4UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ3b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE0N1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzRvUjFkNzY4UjJhZDE2My44NGQ2MTYuNDQ4ZDkyLjE2ZDY4Ni4wNzlkOTIuMTZkNDUwLjU1OWQxNjMuODRkNDUwLjU1OWQxNjMuODRkNjE2LjQ0OGQzMTcuNDRkNjE2LjQ0OGQyNDUuNzZkNjg2LjA3OWQyNDUuNzZkNDUwLjU1OWQzMTcuNDRkNDUwLjU1OWQzMTcuNDRkNjE2LjQ0OGhSM2QzOTkuMzZSNGQzMTcuNDRSNWQ5Mi4xNlI2ZDU3My40NFI3ZDMzNy45MlI4ZDQ4MS4yOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMzRSMTJkOTIuMTZSMTNkMzk5LjM2UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTQ2b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE0NlIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MzNvUjFkNzY4UjJhZDE4NC4zMmQ4MDAuNzY4ZDEwMi40ZDg4MC42NGQxMDIuNGQ1MjIuMjRkMTg0LjMyZDUyMi4yNGQxODQuMzJkODAwLjc2OGQxODQuMzJkMTAyNGQ5Mi4xNmQxMDI0ZDkyLjE2ZDk0Mi4wOGQxODQuMzJkOTQyLjA4ZDE4NC4zMmQxMDI0aFIzZDI4Ni43MlI0ZDE4NC4zMlI1ZDkyLjE2UjZkNTAxLjc2UjdkMFI4ZDQwOS42UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkzM1IxMmQ5Mi4xNlIxM2QyODYuNzJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDVvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQ1UjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzozMm9SMWQ3NjhSMmFoUjNkMjA0LjhSNGQwUjVkMFI2ZDBSN2QwUjhkMFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMzJSMTJkMFIxM2QyMDQuOFIxNGFoZzoxNDRvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQ0UjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDNvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQzUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNTVvUjFkNzY4UjJhZDQzMC4wOGQxMTY3LjM2ZDQzMC4wOGQxMTk3LjA1NmQ0MDkuMDg4ZDEyMTguMDQ4ZDM4OC4wOTZkMTIzOS4wNGQzNTguNGQxMjM5LjA0ZDYxLjQ0ZDEyMzkuMDRkMTIyLjg4ZDExNzcuNmQzNTguNGQxMTc3LjZkMzU4LjRkOTcyLjhkMzA3LjJkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY2NS41OTlkNDMwLjA4ZDY2NS41OTlkNDMwLjA4ZDExNjcuMzZkMzUzLjI4ZDU5My45MmQyODYuNzJkNTkzLjkyZDI4Ni43MmQ1MTJkMzUzLjI4ZDUxMmQzNTMuMjhkNTkzLjkyZDIxNS4wNGQ1OTMuOTJkMTQ4LjQ4ZDU5My45MmQxNDguNDhkNTEyZDIxNS4wNGQ1MTJkMjE1LjA0ZDU5My45MmhSM2Q1MDYuODhSNGQ0MzAuMDhSNWQ2MS40NFI2ZDUxMlI3ZC0yMTUuMDRSOGQ0NTAuNTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI1NVIxMmQ2MS40NFIxM2Q1MDYuODhSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDJvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQyUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNTRvUjFkNzY4UjJhZDQ0MC4zMmQ5NTIuMzE5ZDQ0MC4zMmQ5ODIuMDE2ZDQxOS4zMjhkMTAwMy4wMDhkMzk4LjMzNmQxMDI0ZDM2OC42NGQxMDI0ZDE1My42ZDEwMjRkMTUzLjZkMTIzOS4wNGQ4MS45MmQxMjM5LjA0ZDgxLjkyZDUwMS43NmQxNTMuNmQ0MzAuMDhkMTUzLjZkNzE2LjhkMjA0LjhkNjY1LjU5OWQzNjguNjRkNjY1LjU5OWQzOTguMzM2ZDY2NS41OTlkNDE5LjMyOGQ2ODYuNTkyZDQ0MC4zMmQ3MDcuNTg0ZDQ0MC4zMmQ3MzcuMjhkNDQwLjMyZDk1Mi4zMTlkMzY4LjY0ZDk2Mi41NmQzNjguNjRkNzI3LjA0ZDE1My42ZDcyNy4wNGQxNTMuNmQxMDEzLjc2ZDIwNC44ZDk2Mi41NmQzNjguNjRkOTYyLjU2aFIzZDUxMlI0ZDQ0MC4zMlI1ZDgxLjkyUjZkNTkzLjkyUjdkLTIxNS4wNFI4ZDUxMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjU0UjEyZDgxLjkyUjEzZDUxMlIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmkyaGc6MTQxb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTE0MVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjUzb1IxZDc2OFIyYWQ0MzAuMDhkMTE2Ny4zNmQ0MzAuMDhkMTE5Ny4wNTZkNDA5LjA4OGQxMjE4LjA0OGQzODguMDk2ZDEyMzkuMDRkMzU4LjRkMTIzOS4wNGQ2MS40NGQxMjM5LjA0ZDEyMi44OGQxMTc3LjZkMzU4LjRkMTE3Ny42ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMTY3LjM2ZDM3OC44OGQ0NTAuNTU5ZDI3Ni40OGQ1OTMuOTJkMjA0LjhkNTkzLjkyZDMwNy4yZDQ1MC41NTlkMzc4Ljg4ZDQ1MC41NTloUjNkNTA2Ljg4UjRkNDMwLjA4UjVkNjEuNDRSNmQ1NzMuNDRSN2QtMjE1LjA0UjhkNTEyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyNTNSMTJkNjEuNDRSMTNkNTA2Ljg4UjE0YWkxaTNpM2kyaTJpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxNDBvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTQwUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNTJvUjFkNzY4UjJhZDQzMC4wOGQxMDI0ZDM1OC40ZDEwMjRkMzU4LjRkOTcyLjhkMzA3LjJkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY2NS41OTlkNDMwLjA4ZDY2NS41OTlkNDMwLjA4ZDEwMjRkMzUzLjI4ZDU5My45MmQyODYuNzJkNTkzLjkyZDI4Ni43MmQ1MTJkMzUzLjI4ZDUxMmQzNTMuMjhkNTkzLjkyZDIxNS4wNGQ1OTMuOTJkMTQ4LjQ4ZDU5My45MmQxNDguNDhkNTEyZDIxNS4wNGQ1MTJkMjE1LjA0ZDU5My45MmhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDUxMlI3ZDBSOGQ0NDAuMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI1MlIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTM5b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzOVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjUxb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMDI0ZDM2OC42NGQ1OTMuOTJkMjk2Ljk2ZDU5My45MmQyNTZkNTAxLjc2ZDI0NS43NmQ1MDEuNzZkMjA0LjhkNTkzLjkyZDEzMy4xMmQ1OTMuOTJkMjE1LjA0ZDQ2MC43OTlkMjg2LjcyZDQ2MC43OTlkMzY4LjY0ZDU5My45MmhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDU2My4yUjdkMFI4ZDQ5MS41MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjUxUjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MTM4b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzOFIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjUwb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMDI0ZDM3OC44OGQ0NTAuNTU5ZDI3Ni40OGQ1OTMuOTJkMjA0LjhkNTkzLjkyZDMwNy4yZDQ1MC41NTlkMzc4Ljg4ZDQ1MC41NTloUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1NzMuNDRSN2QwUjhkNTAxLjc2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyNTBSMTJkNzEuNjhSMTNkNTAxLjc2UjE0YWkxaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTM3b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzN1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQ5b1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNTguNGQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMDI0ZDMwNy4yZDU5My45MmQyMzUuNTJkNTkzLjkyZDEzMy4xMmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMzA3LjJkNTkzLjkyaFIzZDUwMS43NlI0ZDQzMC4wOFI1ZDcxLjY4UjZkNTczLjQ0UjdkMFI4ZDUwMS43NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjQ5UjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNm9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMzZSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0OG9SMWQ3NjhSMmFkNDc2LjE2ZDY5MS4yZDQ0MC4zMmQ3MjYuMDE2ZDQ1MS41ODRkNzM3LjI4ZDQ1MS41ODRkOTUyLjMxOWQ0NTEuNTg0ZDk4Mi4wMTZkNDMwLjA4ZDEwMDMuMDA4ZDQwOC41NzZkMTAyNGQzNzkuOTA0ZDEwMjRkMTYyLjgxNmQxMDI0ZDE1MS41NTJkMTAxMi43MzZkMTEyLjY0ZDEwNTEuNjQ4ZDY2LjU2ZDEwMDIuNDk2ZDEwMy40MjRkOTY0LjYwOGQ5MS4xMzZkOTUyLjMxOWQ5MS4xMzZkNzM3LjI4ZDkxLjEzNmQ3MDcuNTg0ZDExMi4xMjhkNjg2LjU5MmQxMzMuMTJkNjY1LjU5OWQxNjIuODE2ZDY2NS41OTlkMzc5LjkwNGQ2NjUuNTk5ZDM5Mi4xOTJkNjc4LjkxMmQ0MjguMDMyZDY0My4wNzJkNDc2LjE2ZDY5MS4yZDM0NS4wODhkNzM3LjI4ZDM0NS4wODhkNzI3LjA0ZDE2Mi44MTZkNzI3LjA0ZDE2Mi44MTZkOTA3LjI2NGQxNzMuMDU2ZDkwNy4yNjRkMzQ1LjA4OGQ3MzcuMjhkMzc5LjkwNGQ5NjIuNTZkMzc5LjkwNGQ3ODcuNDU2ZDM2OS42NjRkNzg3LjQ1NmQyMDIuNzUyZDk1Mi4zMTlkMjAyLjc1MmQ5NjIuNTZkMzc5LjkwNGQ5NjIuNTZoUjNkNTQyLjcyUjRkNDc2LjE2UjVkNjYuNTZSNmQzODAuOTI4UjdkLTI3LjY0OFI4ZDMxNC4zNjhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0OFIxMmQ2Ni41NlIxM2Q1NDIuNzJSMTRhaTFpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMWkyaTJpMmkyaTJpMWkyaTJpMmkyaTJoZzoxMzVvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTM1UjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNDdvUjFkNzY4UjJhZDMxMi4zMmQxMDI0ZDIyMC4xNmQxMDI0ZDIyMC4xNmQ5NDIuMDhkMzEyLjMyZDk0Mi4wOGQzMTIuMzJkMTAyNGQzMTIuMzJkNzQ3LjUyZDIyMC4xNmQ3NDcuNTJkMjIwLjE2ZDY2NS41OTlkMzEyLjMyZDY2NS41OTlkMzEyLjMyZDc0Ny41MmhSM2Q1MzIuNDhSNGQ0NDUuNDRSNWQ4Ny4wNFI2ZDM1OC40UjdkMFI4ZDI3MS4zNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjQ3UjEyZDg3LjA0UjEzZDUzMi40OFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzNG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMzRSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0Nm9SMWQ3NjhSMmFkNDMwLjA4ZDk1Mi4zMTlkNDMwLjA4ZDk4Mi4wMTZkNDA5LjA4OGQxMDAzLjAwOGQzODguMDk2ZDEwMjRkMzU4LjRkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDk1Mi4zMTlkMzU4LjRkOTYyLjU2ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1My4yOGQ1OTMuOTJkMjg2LjcyZDU5My45MmQyODYuNzJkNTEyZDM1My4yOGQ1MTJkMzUzLjI4ZDU5My45MmQyMTUuMDRkNTkzLjkyZDE0OC40OGQ1OTMuOTJkMTQ4LjQ4ZDUxMmQyMTUuMDRkNTEyZDIxNS4wNGQ1OTMuOTJoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1MTJSN2QwUjhkNDQwLjMyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyNDZSMTJkNzEuNjhSMTNkNTAxLjc2UjE0YWkxaTNpM2kyaTNpM2kyaTNpM2kyaTNpM2kyaTFpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTMzb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzM1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQ1b1IxZDc2OFIyYWQ0MzAuMDhkOTUyLjMxOWQ0MzAuMDhkOTgyLjAxNmQ0MDkuMDg4ZDEwMDMuMDA4ZDM4OC4wOTZkMTAyNGQzNTguNGQxMDI0ZDE0My4zNmQxMDI0ZDExMy42NjRkMTAyNGQ5Mi42NzJkMTAwMy4wMDhkNzEuNjhkOTgyLjAxNmQ3MS42OGQ5NTIuMzE5ZDcxLjY4ZDczNy4yOGQ3MS42OGQ3MDcuNTg0ZDkyLjY3MmQ2ODYuNTkyZDExMy42NjRkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQzNTguNGQ2NjUuNTk5ZDM4OC4wOTZkNjY1LjU5OWQ0MDkuMDg4ZDY4Ni41OTJkNDMwLjA4ZDcwNy41ODRkNDMwLjA4ZDczNy4yOGQ0MzAuMDhkOTUyLjMxOWQzNTguNGQ5NjIuNTZkMzU4LjRkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZkMzY4LjY0ZDQ2My44NzFkMzY4LjY0ZDQ4MS4yOGQzNjIuNDk2ZDU0My43NDNkMzYwLjQ0OGQ1NjYuMjcxZDM0NS4wODhkNTgxLjYzMmQzMjkuNzI4ZDU5Ni45OTJkMzA5LjI0OGQ1OTYuOTkyZDI3NC40MzJkNTk2Ljk5MmQyNTEuOTA0ZDU3Mi40MTVkMTkzLjUzNmQ1MDcuOTA0ZDE4NC4zMmQ1OTIuODk2ZDEzMy4xMmQ1OTIuODk2ZDEzMy4xMmQ1ODQuNzA0ZDEzNC42NTZkNTY0LjczNmQxMzYuMTkyZDU0NC43NjhkMTQwLjI4OGQ1MTJkMTQyLjMzNmQ0OTAuNDk2ZDE1OC43MmQ0NzUuNjQ4ZDE3NS4xMDRkNDYwLjc5OWQxOTYuNjA4ZDQ2MC43OTlkMjI4LjM1MmQ0NjAuNzk5ZDI0OS44NTZkNDgzLjMyOGQzMTEuMjk2ZDU0Ny44MzlkMzE3LjQ0ZDQ2My44NzFkMzY4LjY0ZDQ2My44NzFoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1NjMuMlI3ZDBSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0NVIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpM2kzaTNpM2kyaTJpMmkzaTNpM2kzaTNpMmkyaTJoZzoxMzJvUjFkNzY4UjJhZDY0LjUxMmQxMDI0ZDY0LjUxMmQyNTZkNDQ4LjUxMmQyNTZkNDQ4LjUxMmQxMDI0ZDY0LjUxMmQxMDI0ZDEyOGQ5NTkuNDg4ZDM4NGQ5NTkuNDg4ZDM4NGQzMTkuNDg3ZDEyOGQzMTkuNDg3ZDEyOGQ5NTkuNDg4aFIzZDUxMlI0ZDQ0OC41MTJSNWQ2NC41MTJSNmQ3NjhSN2QwUjhkNzAzLjQ4OFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTMyUjEyZDY0LjUxMlIxM2Q1MTJSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoyNDRvUjFkNzY4UjJhZDQzMC4wOGQ5NTIuMzE5ZDQzMC4wOGQ5ODIuMDE2ZDQwOS4wODhkMTAwMy4wMDhkMzg4LjA5NmQxMDI0ZDM1OC40ZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNzM3LjI4ZDcxLjY4ZDcwNy41ODRkOTIuNjcyZDY4Ni41OTJkMTEzLjY2NGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDM1OC40ZDY2NS41OTlkMzg4LjA5NmQ2NjUuNTk5ZDQwOS4wODhkNjg2LjU5MmQ0MzAuMDhkNzA3LjU4NGQ0MzAuMDhkNzM3LjI4ZDQzMC4wOGQ5NTIuMzE5ZDM1OC40ZDk2Mi41NmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDM1OC40ZDk2Mi41NmQzNjguNjRkNTkzLjkyZDI5Ni45NmQ1OTMuOTJkMjU2ZDUwMS43NmQyNDUuNzZkNTAxLjc2ZDIwNC44ZDU5My45MmQxMzMuMTJkNTkzLjkyZDIxNS4wNGQ0NjAuNzk5ZDI4Ni43MmQ0NjAuNzk5ZDM2OC42NGQ1OTMuOTJoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1NjMuMlI3ZDBSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0NFIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmkyaTJpMmkyaGc6MTMxb1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEzMVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQzb1IxZDc2OFIyYWQ0MzAuMDhkOTUyLjMxOWQ0MzAuMDhkOTgyLjAxNmQ0MDkuMDg4ZDEwMDMuMDA4ZDM4OC4wOTZkMTAyNGQzNTguNGQxMDI0ZDE0My4zNmQxMDI0ZDExMy42NjRkMTAyNGQ5Mi42NzJkMTAwMy4wMDhkNzEuNjhkOTgyLjAxNmQ3MS42OGQ5NTIuMzE5ZDcxLjY4ZDczNy4yOGQ3MS42OGQ3MDcuNTg0ZDkyLjY3MmQ2ODYuNTkyZDExMy42NjRkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQzNTguNGQ2NjUuNTk5ZDM4OC4wOTZkNjY1LjU5OWQ0MDkuMDg4ZDY4Ni41OTJkNDMwLjA4ZDcwNy41ODRkNDMwLjA4ZDczNy4yOGQ0MzAuMDhkOTUyLjMxOWQzNTguNGQ5NjIuNTZkMzU4LjRkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZkMzc4Ljg4ZDQ1MC41NTlkMjc2LjQ4ZDU5My45MmQyMDQuOGQ1OTMuOTJkMzA3LjJkNDUwLjU1OWQzNzguODhkNDUwLjU1OWhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDU3My40NFI3ZDBSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0M1IxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpM2kzaTJpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEzMG9SMWQ3NjhSMmFkNjQuNTEyZDEwMjRkNjQuNTEyZDI1NmQ0NDguNTEyZDI1NmQ0NDguNTEyZDEwMjRkNjQuNTEyZDEwMjRkMTI4ZDk1OS40ODhkMzg0ZDk1OS40ODhkMzg0ZDMxOS40ODdkMTI4ZDMxOS40ODdkMTI4ZDk1OS40ODhoUjNkNTEyUjRkNDQ4LjUxMlI1ZDY0LjUxMlI2ZDc2OFI3ZDBSOGQ3MDMuNDg4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMzBSMTJkNjQuNTEyUjEzZDUxMlIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjI0Mm9SMWQ3NjhSMmFkNDMwLjA4ZDk1Mi4zMTlkNDMwLjA4ZDk4Mi4wMTZkNDA5LjA4OGQxMDAzLjAwOGQzODguMDk2ZDEwMjRkMzU4LjRkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDk1Mi4zMTlkMzU4LjRkOTYyLjU2ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDMwNy4yZDU5My45MmQyMzUuNTJkNTkzLjkyZDEzMy4xMmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMzA3LjJkNTkzLjkyaFIzZDUwMS43NlI0ZDQzMC4wOFI1ZDcxLjY4UjZkNTczLjQ0UjdkMFI4ZDUwMS43NlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjQyUjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkzaTNpMmkzaTNpMmkzaTNpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTI5b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyOVIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQxb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQzNTguNGQxMDI0ZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQxMDI0ZDcxLjY4ZDEwMjRkNzEuNjhkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQxNDMuMzZkNzE2LjhkMTk0LjU2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDEwMjRkMzczLjc2ZDQ2My44NzFkMzczLjc2ZDQ4MS4yOGQzNjcuNjE2ZDU0My43NDNkMzY1LjU2OGQ1NjYuMjcxZDM1MC4yMDhkNTgxLjYzMmQzMzQuODQ4ZDU5Ni45OTJkMzE0LjM2OGQ1OTYuOTkyZDI3OS41NTJkNTk2Ljk5MmQyNTcuMDI0ZDU3Mi40MTVkMTk4LjY1NmQ1MDcuOTA0ZDE4OS40NGQ1OTIuODk2ZDEzOC4yNGQ1OTIuODk2ZDEzOC4yNGQ1ODQuNzA0ZDEzOS43NzZkNTY0LjczNmQxNDEuMzEyZDU0NC43NjhkMTQ1LjQwOGQ1MTJkMTQ3LjQ1NmQ0OTAuNDk2ZDE2My44NGQ0NzUuNjQ4ZDE4MC4yMjRkNDYwLjc5OWQyMDEuNzI4ZDQ2MC43OTlkMjMzLjQ3MmQ0NjAuNzk5ZDI1NC45NzZkNDgzLjMyOGQzMTYuNDE2ZDU0Ny44MzlkMzIyLjU2ZDQ2My44NzFkMzczLjc2ZDQ2My44NzFoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQ1NjMuMlI3ZDBSOGQ0OTEuNTJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0MVIxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTJpMmkyaGc6MTI4b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyOFIxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjQwb1IxZDc2OFIyYWQ0MjQuOTZkOTUyLjMxOWQ0MjQuOTZkOTgyLjAxNmQ0MDMuOTY4ZDEwMDMuMDA4ZDM4Mi45NzZkMTAyNGQzNTMuMjhkMTAyNGQxMzguMjRkMTAyNGQxMDguNTQ0ZDEwMjRkODcuNTUyZDEwMDMuMDA4ZDY2LjU2ZDk4Mi4wMTZkNjYuNTZkOTUyLjMxOWQ2Ni41NmQ4MTkuMmQ2Ni41NmQ3ODkuNTA0ZDg3LjU1MmQ3NjguNTEyZDEwOC41NDRkNzQ3LjUyZDEzOC4yNGQ3NDcuNTJkMzUzLjI4ZDc0Ny41MmQzNTMuMjhkNzEzLjcyOGQyNDIuNjg4ZDYxMC4zMDRkMTM4LjI0ZDcwNS41MzZkMTM4LjI0ZDYyNS42NjRkMTk5LjY4ZDU3MC4zNjdkMTM4LjI0ZDUxMmQxMzguMjRkNDMwLjA4ZDI0NC43MzZkNTI5LjQwOGQzNTUuMzI4ZDQzMC4wOGQzNTUuMzI4ZDUwNi44OGQyODYuNzJkNTY5LjM0NGQzOTkuMzZkNjczLjc5MWQ0MjQuOTZkNjk2LjMxOWQ0MjQuOTZkNzI3LjA0ZDQyNC45NmQ5NTIuMzE5ZDM1My4yOGQ3NTcuNzZkMzAxLjA1NmQ4MDguOTZkMTM4LjI0ZDgwOC45NmQxMzguMjRkOTYyLjU2ZDM1My4yOGQ5NjIuNTZkMzUzLjI4ZDc1Ny43NmhSM2Q0OTYuNjRSNGQ0MjQuOTZSNWQ2Ni41NlI2ZDU5My45MlI3ZDBSOGQ1MjcuMzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTI0MFIxMmQ2Ni41NlIxM2Q0OTYuNjRSMTRhaTFpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kyaTFpMmkyaTJpMmkyaGc6MTI3b1IxZDc2OFIyYWQ2NC41MTJkMTAyNGQ2NC41MTJkMjU2ZDQ0OC41MTJkMjU2ZDQ0OC41MTJkMTAyNGQ2NC41MTJkMTAyNGQxMjhkOTU5LjQ4OGQzODRkOTU5LjQ4OGQzODRkMzE5LjQ4N2QxMjhkMzE5LjQ4N2QxMjhkOTU5LjQ4OGhSM2Q1MTJSNGQ0NDguNTEyUjVkNjQuNTEyUjZkNzY4UjdkMFI4ZDcwMy40ODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyN1IxMmQ2NC41MTJSMTNkNTEyUjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MjM5b1IxZDc2OFIyYWQxNDMuMzZkMTAyNGQ3MS42OGQxMDI0ZDcxLjY4ZDcxNi44ZDE0My4zNmQ2NDUuMTJkMTQzLjM2ZDEwMjRkNDgzLjMyOGQ1OTMuOTJkNDE2Ljc2OGQ1OTMuOTJkNDE2Ljc2OGQ1MTJkNDgzLjMyOGQ1MTJkNDgzLjMyOGQ1OTMuOTJkMzQ1LjA4OGQ1OTMuOTJkMjc4LjUyOGQ1OTMuOTJkMjc4LjUyOGQ1MTJkMzQ1LjA4OGQ1MTJkMzQ1LjA4OGQ1OTMuOTJoUjNkMjE1LjA0UjRkMjIxLjE4NFI1ZDE2LjM4NFI2ZDUxMlI3ZDBSOGQ0OTUuNjE2UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMzlSMTJkMTYuMzg0UjEzZDIxNS4wNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjZvUjFkNzY4UjJhZDQzMC4wOGQ4MDguOTZkNDMwLjA4ZDgzOC42NTZkNDA5LjA4OGQ4NTkuNjQ4ZDM4OC4wOTZkODgwLjY0ZDM1OC40ZDg4MC42NGQzMjUuNjMyZDg4MC42NGQyOTUuOTM2ZDg4MC42NGQyNzQuNDMyZDg1OS4xMzZkMjE0LjAxNmQ3OTguNzJkMTYzLjg0ZDc5OC43MmQxNjMuODRkODgwLjY0ZDEwMi40ZDg4MC42NGQxMDIuNGQ4MDguOTZkMTAyLjRkNzc4LjI0ZDEyMy4zOTJkNzU3Ljc2ZDE0NC4zODRkNzM3LjI4ZDE3NC4wOGQ3MzcuMjhkMjA3Ljg3MmQ3MzcuMjhkMjM3LjU2OGQ3MzcuMjhkMjU5LjA3MmQ3NTguNzg0ZDMxOS40ODhkODE5LjJkMzY4LjY0ZDgxOS4yZDM2OC42NGQ3MzcuMjhkNDMwLjA4ZDczNy4yOGQ0MzAuMDhkODA4Ljk2aFIzZDUzMi40OFI0ZDQzMC4wOFI1ZDEwMi40UjZkMjg2LjcyUjdkMTQzLjM2UjhkMTg0LjMyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMjZSMTJkMTAyLjRSMTNkNTMyLjQ4UjE0YWkxaTNpM2kyaTNpMmkyaTJpMmkyaTNpM2kyaTNpMmkyaTJpMmkyaGc6MjM4b1IxZDc2OFIyYWQxNDMuMzZkMTAyNGQ3MS42OGQxMDI0ZDcxLjY4ZDcxNi44ZDE0My4zNmQ2NDUuMTJkMTQzLjM2ZDEwMjRkMjI1LjI4ZDU5My45MmQxNTMuNmQ1OTMuOTJkMTEyLjY0ZDUwMS43NmQxMDIuNGQ1MDEuNzZkNjEuNDRkNTkzLjkyZC0xMC4yNGQ1OTMuOTJkNzEuNjhkNDYwLjc5OWQxNDMuMzZkNDYwLjc5OWQyMjUuMjhkNTkzLjkyaFIzZDIxNS4wNFI0ZDIyNS4yOFI1ZC0xMC4yNFI2ZDU2My4yUjdkMFI4ZDU3My40NFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjM4UjEyZC0xMC4yNFIxM2QyMTUuMDRSMTRhaTFpMmkyaTJpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjEyNW9SMWQ3NjhSMmFkNzEuNjhkMTAzNC4yNGQxNDMuMzZkMTAzNC4yNGQxNDMuMzZkODE1LjEwNGQxODQuMzJkNzc0LjE0NGQxNDMuMzZkNzMzLjE4NGQxNDMuMzZkNTEyZDcxLjY4ZDUxMmQ3MS42OGQ0NTAuNTU5ZDE0My4zNmQ0NTAuNTU5ZDE3Mi4wMzJkNDUwLjU1OWQxOTMuNTM2ZDQ3Mi4wNjNkMjE1LjA0ZDQ5My41NjhkMjE1LjA0ZDUyMi4yNGQyMTUuMDRkNzM3LjI4ZDI3Ni40OGQ3MzcuMjhkMjc2LjQ4ZDgwOC45NmQyMTUuMDRkODA4Ljk2ZDIxNS4wNGQxMDI0ZDIxNS4wNGQxMDUyLjY3MmQxOTMuNTM2ZDEwNzQuMTc2ZDE3Mi4wMzJkMTA5NS42OGQxNDMuMzZkMTA5NS42OGQ3MS42OGQxMDk1LjY4ZDcxLjY4ZDEwMzQuMjRoUjNkMzI3LjY4UjRkMjc2LjQ4UjVkNzEuNjhSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyNVIxMmQ3MS42OFIxM2QzMjcuNjhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpM2kzaTJpMmhnOjIzN29SMWQ3NjhSMmFkMTQzLjM2ZDEwMjRkNzEuNjhkMTAyNGQ3MS42OGQ3MTYuOGQxNDMuMzZkNjQ1LjEyZDE0My4zNmQxMDI0ZDIyNS4yOGQ0NTAuNTU5ZDEyMi44OGQ1OTMuOTJkNTEuMmQ1OTMuOTJkMTUzLjZkNDUwLjU1OWQyMjUuMjhkNDUwLjU1OWhSM2QyMTUuMDRSNGQyMjUuMjhSNWQ1MS4yUjZkNTczLjQ0UjdkMFI4ZDUyMi4yNFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjM3UjEyZDUxLjJSMTNkMjE1LjA0UjE0YWkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTI0b1IxZDc2OFIyYWQxNzQuMDhkMTA5NS42OGQxMDIuNGQxMDk1LjY4ZDEwMi40ZDQ1MC41NTlkMTc0LjA4ZDQ1MC41NTlkMTc0LjA4ZDEwOTUuNjhoUjNkMjc2LjQ4UjRkMTc0LjA4UjVkMTAyLjRSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ0NzEuMDRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyNFIxMmQxMDIuNFIxM2QyNzYuNDhSMTRhaTFpMmkyaTJpMmhnOjIzNm9SMWQ3NjhSMmFkMzkwLjE0NGQxMDI0ZDMxOC40NjRkMTAyNGQzMTguNDY0ZDcxNi44ZDM5MC4xNDRkNjQ1LjEyZDM5MC4xNDRkMTAyNGQ0MTEuNjQ4ZDU5My45MmQzMzkuOTY4ZDU5My45MmQyMzcuNTY4ZDQ1MC41NTlkMzA5LjI0OGQ0NTAuNTU5ZDQxMS42NDhkNTkzLjkyaFIzZDIxNS4wNFI0ZDE0OS41MDRSNWQtMjQuNTc2UjZkNTczLjQ0UjdkMFI4ZDU5OC4wMTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzNlIxMmQtMjQuNTc2UjEzZDIxNS4wNFIxNGFpMWkyaTJpMmkyaTFpMmkyaTJpMmhnOjEyM29SMWQ3NjhSMmFkMjU2ZDEwOTUuNjhkMTg0LjMyZDEwOTUuNjhkMTU1LjY0OGQxMDk1LjY4ZDEzNC4xNDRkMTA3NC4xNzZkMTEyLjY0ZDEwNTIuNjcyZDExMi42NGQxMDI0ZDExMi42NGQ4MDguOTZkNTEuMmQ4MDguOTZkNTEuMmQ3MzcuMjhkMTEyLjY0ZDczNy4yOGQxMTIuNjRkNTIyLjI0ZDExMi42NGQ0OTMuNTY4ZDEzNC4xNDRkNDcyLjA2M2QxNTUuNjQ4ZDQ1MC41NTlkMTg0LjMyZDQ1MC41NTlkMjU2ZDQ1MC41NTlkMjU2ZDUxMmQxODQuMzJkNTEyZDE4NC4zMmQ3MzMuMTg0ZDE0My4zNmQ3NzQuMTQ0ZDE4NC4zMmQ4MTUuMTA0ZDE4NC4zMmQxMDM0LjI0ZDI1NmQxMDM0LjI0ZDI1NmQxMDk1LjY4aFIzZDMyNy42OFI0ZDI1NlI1ZDUxLjJSNmQ1NzMuNDRSN2QtNzEuNjhSOGQ1MjIuMjRSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyM1IxMmQ1MS4yUjEzZDMyNy42OFIxNGFpMWkyaTNpM2kyaTJpMmkyaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjM1b1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDgwOC45NmQzNTguNGQ4ODAuNjRkMTUzLjZkODgwLjY0ZDIxNS4wNGQ4MTkuMmQzNTguNGQ4MTkuMmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDQzMC4wOGQ5NjIuNTZkNDMwLjA4ZDEwMjRkMzUzLjI4ZDU5My45MmQyODYuNzJkNTkzLjkyZDI4Ni43MmQ1MTJkMzUzLjI4ZDUxMmQzNTMuMjhkNTkzLjkyZDIxNS4wNGQ1OTMuOTJkMTQ4LjQ4ZDU5My45MmQxNDguNDhkNTEyZDIxNS4wNGQ1MTJkMjE1LjA0ZDU5My45MmhSM2Q0NzEuMDRSNGQ0MzAuMDhSNWQ3MS42OFI2ZDUxMlI3ZDBSOGQ0NDAuMzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzNVIxMmQ3MS42OFIxM2Q0NzEuMDRSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTIyb1IxZDc2OFIyYWQzNDguMTZkMTAyNGQ0MC45NmQxMDI0ZDQwLjk2ZDk1Mi4zMTlkMjY2LjI0ZDczNy4yOGQyNjYuMjRkNzI3LjA0ZDQwLjk2ZDcyNy4wNGQ0MC45NmQ2NjUuNTk5ZDM0OC4xNmQ2NjUuNTk5ZDM0OC4xNmQ3MzcuMjhkMTIyLjg4ZDk1Mi4zMTlkMTIyLjg4ZDk2Mi41NmQzNDguMTZkOTYyLjU2ZDM0OC4xNmQxMDI0aFIzZDM4OS4xMlI0ZDM0OC4xNlI1ZDQwLjk2UjZkMzU4LjRSN2QwUjhkMzE3LjQ0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMjJSMTJkNDAuOTZSMTNkMzg5LjEyUjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjM0b1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDgwOC45NmQzNTguNGQ4ODAuNjRkMTUzLjZkODgwLjY0ZDIxNS4wNGQ4MTkuMmQzNTguNGQ4MTkuMmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDQzMC4wOGQ5NjIuNTZkNDMwLjA4ZDEwMjRkMzY4LjY0ZDU5My45MmQyOTYuOTZkNTkzLjkyZDI1NmQ1MDEuNzZkMjQ1Ljc2ZDUwMS43NmQyMDQuOGQ1OTMuOTJkMTMzLjEyZDU5My45MmQyMTUuMDRkNDYwLjc5OWQyODYuNzJkNDYwLjc5OWQzNjguNjRkNTkzLjkyaFIzZDQ3MS4wNFI0ZDQzMC4wOFI1ZDcxLjY4UjZkNTYzLjJSN2QwUjhkNDkxLjUyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMzRSMTJkNzEuNjhSMTNkNDcxLjA0UjE0YWkxaTJpM2kzaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTJpMWkyaTJpMmkyaTJpMmkyaTJoZzoxMjFvUjFkNzY4UjJhZDQzMC4wOGQxMTY3LjM2ZDQzMC4wOGQxMTk3LjA1NmQ0MDkuMDg4ZDEyMTguMDQ4ZDM4OC4wOTZkMTIzOS4wNGQzNTguNGQxMjM5LjA0ZDYxLjQ0ZDEyMzkuMDRkMTIyLjg4ZDExNzcuNmQzNTguNGQxMTc3LjZkMzU4LjRkOTcyLjhkMzA3LjJkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY2NS41OTlkNDMwLjA4ZDY2NS41OTlkNDMwLjA4ZDExNjcuMzZoUjNkNTA2Ljg4UjRkNDMwLjA4UjVkNjEuNDRSNmQzNTguNFI3ZC0yMTUuMDRSOGQyOTYuOTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTEyMVIxMmQ2MS40NFIxM2Q1MDYuODhSMTRhaTFpM2kzaTJpMmkyaTJpMmkyaTNpM2kyaTJpMmkyaTJpMmkyaGc6MjMzb1IxZDc2OFIyYWQ0MzAuMDhkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzU4LjRkNjY1LjU5OWQzODguMDk2ZDY2NS41OTlkNDA5LjA4OGQ2ODYuNTkyZDQzMC4wOGQ3MDcuNTg0ZDQzMC4wOGQ3MzcuMjhkNDMwLjA4ZDgwOC45NmQzNTguNGQ4ODAuNjRkMTUzLjZkODgwLjY0ZDIxNS4wNGQ4MTkuMmQzNTguNGQ4MTkuMmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkOTYyLjU2ZDQzMC4wOGQ5NjIuNTZkNDMwLjA4ZDEwMjRkMzc4Ljg4ZDQ1MC41NTlkMjc2LjQ4ZDU5My45MmQyMDQuOGQ1OTMuOTJkMzA3LjJkNDUwLjU1OWQzNzguODhkNDUwLjU1OWhSM2Q0NzEuMDRSNGQ0MzAuMDhSNWQ3MS42OFI2ZDU3My40NFI3ZDBSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzM1IxMmQ3MS42OFIxM2Q0NzEuMDRSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMjBvUjFkNzY4UjJhZDM4OS4xMmQxMDI0ZDMwMS4wNTZkMTAyNGQyMDMuNzc2ZDg4Mi42ODhkMTkzLjUzNmQ4ODIuNjg4ZDk2LjI1NmQxMDI0ZDEwLjI0ZDEwMjRkMTUyLjU3NmQ4MzUuNTg0ZDIwLjQ4ZDY2NS41OTlkMTA2LjQ5NmQ2NjUuNTk5ZDE5NS41ODRkNzkyLjU3NmQyMDUuODI0ZDc5Mi41NzZkMjkwLjgxNmQ2NjUuNTk5ZDM3OC44OGQ2NjUuNTk5ZDI0NC43MzZkODM1LjU4NGQzODkuMTJkMTAyNGhSM2QzOTkuMzZSNGQzODkuMTJSNWQxMC4yNFI2ZDM1OC40UjdkMFI4ZDM0OC4xNlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTIwUjEyZDEwLjI0UjEzZDM5OS4zNlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoyMzJvUjFkNzY4UjJhZDQzMC4wOGQxMDI0ZDE0My4zNmQxMDI0ZDExMy42NjRkMTAyNGQ5Mi42NzJkMTAwMy4wMDhkNzEuNjhkOTgyLjAxNmQ3MS42OGQ5NTIuMzE5ZDcxLjY4ZDczNy4yOGQ3MS42OGQ3MDcuNTg0ZDkyLjY3MmQ2ODYuNTkyZDExMy42NjRkNjY1LjU5OWQxNDMuMzZkNjY1LjU5OWQzNTguNGQ2NjUuNTk5ZDM4OC4wOTZkNjY1LjU5OWQ0MDkuMDg4ZDY4Ni41OTJkNDMwLjA4ZDcwNy41ODRkNDMwLjA4ZDczNy4yOGQ0MzAuMDhkODA4Ljk2ZDM1OC40ZDg4MC42NGQxNTMuNmQ4ODAuNjRkMjE1LjA0ZDgxOS4yZDM1OC40ZDgxOS4yZDM1OC40ZDcyNy4wNGQxNDMuMzZkNzI3LjA0ZDE0My4zNmQ5NjIuNTZkNDMwLjA4ZDk2Mi41NmQ0MzAuMDhkMTAyNGQzMDcuMmQ1OTMuOTJkMjM1LjUyZDU5My45MmQxMzMuMTJkNDUwLjU1OWQyMDQuOGQ0NTAuNTU5ZDMwNy4yZDU5My45MmhSM2Q0NzEuMDRSNGQ0MzAuMDhSNWQ3MS42OFI2ZDU3My40NFI3ZDBSOGQ1MDEuNzZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzMlIxMmQ3MS42OFIxM2Q0NzEuMDRSMTRhaTFpMmkzaTNpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpMmkxaTJpMmkyaTJoZzoxMTlvUjFkNzY4UjJhZDU4My42OGQ2NjUuNTk5ZDQ4NS4zNzZkMTAyNGQzNzIuNzM2ZDEwMjRkMzE3LjQ0ZDc3OS4yNjRkMzA3LjJkNzc5LjI2NGQyNDkuODU2ZDEwMjRkMTM3LjIxNmQxMDI0ZDQwLjk2ZDY2NS41OTlkMTE3Ljc2ZDY2NS41OTlkMTg0LjMyZDk2NC42MDhkMjA0LjhkOTY0LjYwOGQyNzguNTI4ZDY2NS41OTlkMzUwLjIwOGQ2NjUuNTk5ZDQxOS44NGQ5NjQuNjA4ZDQ0MC4zMmQ5NjQuNjA4ZDUwNi44OGQ2NjUuNTk5ZDU4My42OGQ2NjUuNTk5aFIzZDYyNC42NFI0ZDU4My42OFI1ZDQwLjk2UjZkMzU4LjRSN2QwUjhkMzE3LjQ0UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMTlSMTJkNDAuOTZSMTNkNjI0LjY0UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaTJoZzoyMzFvUjFkNzY4UjJhZDM3OC44OGQ2NjUuNTk5ZDMxNi40MTZkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZkMzU4LjRkMTAyNGQyMzAuNGQxMDI0ZDIzMC40ZDEwNzYuMjI0ZDI3MS4zNmQxMDc2LjIyNGQzMDEuMDU2ZDEwNzYuMjI0ZDMyMi4wNDhkMTA5Ni43MDRkMzQzLjA0ZDExMTcuMTg0ZDM0My4wNGQxMTQ2Ljg4ZDM0My4wNGQxMTY3LjM2ZDM0My4wNGQxMTk3LjA1NmQzMjIuMDQ4ZDEyMTguMDQ4ZDMwMS4wNTZkMTIzOS4wNGQyNzEuMzZkMTIzOS4wNGQxMDcuNTJkMTIzOS4wNGQxNjguOTZkMTE3Ny42ZDI3MS4zNmQxMTc3LjZkMjcxLjM2ZDExMjYuNGQxNjguOTZkMTEyNi40ZDE2OC45NmQxMDczLjE1MmQyMjAuMTZkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ3MzcuMjhkNzEuNjhkNzA3LjU4NGQ5Mi42NzJkNjg2LjU5MmQxMTMuNjY0ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMzc4Ljg4ZDY2NS41OTloUjNkMzc4Ljg4UjRkMzc4Ljg4UjVkNzEuNjhSNmQzNTguNFI3ZC0yMTUuMDRSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIzMVIxMmQ3MS42OFIxM2QzNzguODhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpM2kzaTJpM2kzaTJoZzoxMThvUjFkNzY4UjJhZDQwNC40OGQ2NjUuNTk5ZDI2NS4yMTZkMTAyNGQxNjAuNzY4ZDEwMjRkMjUuNmQ2NjUuNTk5ZDEwNy41MmQ2NjUuNTk5ZDIwNC44ZDk2NC42MDhkMjI1LjI4ZDk2NC42MDhkMzIyLjU2ZDY2NS41OTlkNDA0LjQ4ZDY2NS41OTloUjNkNDMwLjA4UjRkNDA0LjQ4UjVkMjUuNlI2ZDM1OC40UjdkMFI4ZDMzMi44UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMThSMTJkMjUuNlIxM2Q0MzAuMDhSMTRhaTFpMmkyaTJpMmkyaTJpMmkyaGc6MjMwb1IxZDc2OFIyYWQ2NTAuMjRkODA4Ljk2ZDU3OC41NmQ4ODAuNjRkMzk5LjM2ZDg4MC42NGQ0NjAuOGQ4MjAuMjIzZDU3OC41NmQ4MjAuMjIzZDU3OC41NmQ3MjcuMDRkMzg5LjEyZDcyNy4wNGQzODkuMTJkOTYyLjU2ZDY0MGQ5NjIuNTZkNjQwZDEwMjRkMzg5LjEyZDEwMjRkMzY0LjU0NGQxMDI0ZDM0NS4wODhkMTAwOC42NGQzMjUuNjMyZDk5My4yOGQzMTkuNDg4ZDk2OS43MjhkMjU2ZDEwMjRkMTI4ZDEwMjRkOTguMzA0ZDEwMjRkNzcuMzEyZDEwMDMuMDA4ZDU2LjMyZDk4Mi4wMTZkNTYuMzJkOTUyLjMxOWQ1Ni4zMmQ4ODAuNjRkNTYuMzJkODUwLjk0NGQ3Ny4zMTJkODI5Ljk1MmQ5OC4zMDRkODA4Ljk2ZDEyOGQ4MDguOTZkMzA3LjJkODA4Ljk2ZDI0NS43NmQ4NjkuMzc2ZDEyOGQ4NjkuMzc2ZDEyOGQ5NjIuNTZkMzE4LjQ2NGQ5NjIuNTZkMzE3LjQ0ZDk1OS40ODhkMzE3LjQ0ZDk1Mi4zMTlkMzE3LjQ0ZDcyNy4wNGQ1Ni4zMmQ3MjcuMDRkMTE3Ljc2ZDY2NS41OTlkMzE3LjQ0ZDY2NS41OTlkMzUzLjI4ZDcwMS40NGQzODkuMTJkNjY1LjU5OWQ1NzguNTZkNjY1LjU5OWQ2MDguMjU2ZDY2NS41OTlkNjI5LjI0OGQ2ODYuNTkyZDY1MC4yNGQ3MDcuNTg0ZDY1MC4yNGQ3MzcuMjhkNjUwLjI0ZDgwOC45NmhSM2Q2ODAuOTZSNGQ2NTAuMjRSNWQ1Ni4zMlI2ZDM1OC40UjdkMFI4ZDMwMi4wOFI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjMwUjEyZDU2LjMyUjEzZDY4MC45NlIxNGFpMWkyaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkzaTJpMmkyaTJpMmkyaTJpM2kzaTJoZzoxMTdvUjFkNzY4UjJhZDQzMC4wOGQxMDI0ZDM1OC40ZDEwMjRkMzU4LjRkOTcyLjhkMzA3LjJkMTAyNGQxNDMuMzZkMTAyNGQxMTMuNjY0ZDEwMjRkOTIuNjcyZDEwMDMuMDA4ZDcxLjY4ZDk4Mi4wMTZkNzEuNjhkOTUyLjMxOWQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ5NjIuNTZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY2NS41OTlkNDMwLjA4ZDY2NS41OTlkNDMwLjA4ZDEwMjRoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQzNTguNFI3ZDBSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTExN1IxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkzaTNpMmkyaTJpMmkyaTJpMmhnOjIyOW9SMWQ3NjhSMmFkNDE0LjcyZDEwMjRkMzQzLjA0ZDEwMjRkMzQzLjA0ZDk3MS43NzZkMjgxLjZkMTAyNGQxMjhkMTAyNGQ5OC4zMDRkMTAyNGQ3Ny4zMTJkMTAwMy4wMDhkNTYuMzJkOTgyLjAxNmQ1Ni4zMmQ5NTIuMzE5ZDU2LjMyZDg4MC42NGQ1Ni4zMmQ4NTAuOTQ0ZDc3LjMxMmQ4MjkuOTUyZDk4LjMwNGQ4MDguOTZkMTI4ZDgwOC45NmQzMzIuOGQ4MDguOTZkMjcxLjM2ZDg2OS4zNzZkMTI4ZDg2OS4zNzZkMTI4ZDk2Mi41NmQzNDMuMDRkOTYyLjU2ZDM0My4wNGQ3MjcuMDRkNTYuMzJkNzI3LjA0ZDExNy43NmQ2NjUuNTk5ZDM0My4wNGQ2NjUuNTk5ZDM3Mi43MzZkNjY1LjU5OWQzOTMuNzI4ZDY4Ni41OTJkNDE0LjcyZDcwNy41ODRkNDE0LjcyZDczNy4yOGQ0MTQuNzJkMTAyNGQzNDMuMDRkMjQ3LjgwOGQzNDMuMDRkMjc0LjQzMmQzMjMuNTg0ZDI5My44ODhkMjkyLjg2NGQzMjUuNjMxZDI4MS42ZDMzNi44OTVkMjU5LjA3MmQzMzYuODk1ZDIzNC40OTZkMzM2Ljg5NWQyMTEuOTY4ZDMzNi44OTVkMjAwLjcwNGQzMjUuNjMxZDE2OS45ODRkMjkzLjg4OGQxNTAuNTI4ZDI3NC40MzJkMTUwLjUyOGQyNDcuODA4ZDE1MC41MjhkMjIxLjE4M2QxNjkuOTg0ZDIwMS43MjdkMjAwLjcwNGQxNjkuOTg0ZDIyMC4xNmQxNDguNDhkMjQ2Ljc4NGQxNDguNDhkMjcyLjM4NGQxNDguNDhkMjkyLjg2NGQxNjkuOTg0ZDMyMy41ODRkMjAxLjcyN2QzNDMuMDRkMjIxLjE4M2QzNDMuMDRkMjQ3LjgwOGQyOTcuOTg0ZDI0Ny44MDhkMjQ2Ljc4NGQxOTYuNjA3ZDE5NS41ODRkMjQ3LjgwOGQyNDYuNzg0ZDI5OS4wMDhkMjk3Ljk4NGQyNDcuODA4aFIzZDQ4Ni40UjRkNDE0LjcyUjVkNTYuMzJSNmQ2MTMuMzc2UjdkMFI4ZDU1Ny4wNTZSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyOVIxMmQ1Ni4zMlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTNpMmkzaTJpM2kyaTNpM2kyaTNpM2kyaTNpMWkyaTJpMmkyaGc6MTE2b1IxZDc2OFIyYWQzMDcuMmQxMDI0ZDE2My44NGQxMDI0ZDEzNC4xNDRkMTAyNGQxMTMuMTUyZDEwMDMuMDA4ZDkyLjE2ZDk4Mi4wMTZkOTIuMTZkOTUyLjMxOWQ5Mi4xNmQ3MjcuMDRkLTEwLjI0ZDcyNy4wNGQ1MS4yZDY2NS41OTlkOTIuMTZkNjY1LjU5OWQ5Mi4xNmQ1OTMuOTJkMTYzLjg0ZDUyMi4yNGQxNjMuODRkNjY1LjU5OWQzMDcuMmQ2NjUuNTk5ZDMwNy4yZDcyNy4wNGQxNjMuODRkNzI3LjA0ZDE2My44NGQ5NjIuNTZkMzA3LjJkOTYyLjU2ZDMwNy4yZDEwMjRoUjNkMzM3LjkyUjRkMzA3LjJSNWQtMTAuMjRSNmQ1MDEuNzZSN2QwUjhkNTEyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMTZSMTJkLTEwLjI0UjEzZDMzNy45MlIxNGFpMWkyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkyaTJpMmkyaGc6MjI4b1IxZDc2OFIyYWQ0MTQuNzJkMTAyNGQzNDMuMDRkMTAyNGQzNDMuMDRkOTcxLjc3NmQyODEuNmQxMDI0ZDEyOGQxMDI0ZDk4LjMwNGQxMDI0ZDc3LjMxMmQxMDAzLjAwOGQ1Ni4zMmQ5ODIuMDE2ZDU2LjMyZDk1Mi4zMTlkNTYuMzJkODgwLjY0ZDU2LjMyZDg1MC45NDRkNzcuMzEyZDgyOS45NTJkOTguMzA0ZDgwOC45NmQxMjhkODA4Ljk2ZDMzMi44ZDgwOC45NmQyNzEuMzZkODY5LjM3NmQxMjhkODY5LjM3NmQxMjhkOTYyLjU2ZDM0My4wNGQ5NjIuNTZkMzQzLjA0ZDcyNy4wNGQ1Ni4zMmQ3MjcuMDRkMTE3Ljc2ZDY2NS41OTlkMzQzLjA0ZDY2NS41OTlkMzcyLjczNmQ2NjUuNTk5ZDM5My43MjhkNjg2LjU5MmQ0MTQuNzJkNzA3LjU4NGQ0MTQuNzJkNzM3LjI4ZDQxNC43MmQxMDI0ZDM1My4yOGQ1OTMuOTJkMjg2LjcyZDU5My45MmQyODYuNzJkNTEyZDM1My4yOGQ1MTJkMzUzLjI4ZDU5My45MmQyMTUuMDRkNTkzLjkyZDE0OC40OGQ1OTMuOTJkMTQ4LjQ4ZDUxMmQyMTUuMDRkNTEyZDIxNS4wNGQ1OTMuOTJoUjNkNDg2LjRSNGQ0MTQuNzJSNWQ1Ni4zMlI2ZDUxMlI3ZDBSOGQ0NTUuNjhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyOFIxMmQ1Ni4zMlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTJpMmkyaTJpMWkyaTJpMmkyaGc6MTE1b1IxZDc2OFIyYWQzNjMuNTJkNjY1LjU5OWQzMDEuMDU2ZDcyNy4wNGQxMjhkNzI3LjA0ZDEyOGQ4MDguOTZkMjcxLjM2ZDgwOC45NmQzMDEuMDU2ZDgwOC45NmQzMjIuMDQ4ZDgyOS45NTJkMzQzLjA0ZDg1MC45NDRkMzQzLjA0ZDg4MC42NGQzNDMuMDRkOTUyLjMxOWQzNDMuMDRkOTgyLjAxNmQzMjIuMDQ4ZDEwMDMuMDA4ZDMwMS4wNTZkMTAyNGQyNzEuMzZkMTAyNGQ1Ni4zMmQxMDI0ZDU2LjMyZDk2Mi41NmQyNzEuMzZkOTYyLjU2ZDI3MS4zNmQ4NzAuNGQxMjhkODcwLjRkOTguMzA0ZDg3MC40ZDc3LjMxMmQ4NDkuNDA4ZDU2LjMyZDgyOC40MTVkNTYuMzJkNzk4LjcyZDU2LjMyZDczNy4yOGQ1Ni4zMmQ3MDcuNTg0ZDc3LjMxMmQ2ODYuNTkyZDk4LjMwNGQ2NjUuNTk5ZDEyOGQ2NjUuNTk5ZDM2My41MmQ2NjUuNTk5aFIzZDM5OS4zNlI0ZDM2My41MlI1ZDU2LjMyUjZkMzU4LjRSN2QwUjhkMzAyLjA4UjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMTVSMTJkNTYuMzJSMTNkMzk5LjM2UjE0YWkxaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkzaTNpMmkzaTNpMmhnOjIyN29SMWQ3NjhSMmFkNDE0LjcyZDEwMjRkMzQzLjA0ZDEwMjRkMzQzLjA0ZDk3MS43NzZkMjgxLjZkMTAyNGQxMjhkMTAyNGQ5OC4zMDRkMTAyNGQ3Ny4zMTJkMTAwMy4wMDhkNTYuMzJkOTgyLjAxNmQ1Ni4zMmQ5NTIuMzE5ZDU2LjMyZDg4MC42NGQ1Ni4zMmQ4NTAuOTQ0ZDc3LjMxMmQ4MjkuOTUyZDk4LjMwNGQ4MDguOTZkMTI4ZDgwOC45NmQzMzIuOGQ4MDguOTZkMjcxLjM2ZDg2OS4zNzZkMTI4ZDg2OS4zNzZkMTI4ZDk2Mi41NmQzNDMuMDRkOTYyLjU2ZDM0My4wNGQ3MjcuMDRkNTYuMzJkNzI3LjA0ZDExNy43NmQ2NjUuNTk5ZDM0My4wNGQ2NjUuNTk5ZDM3Mi43MzZkNjY1LjU5OWQzOTMuNzI4ZDY4Ni41OTJkNDE0LjcyZDcwNy41ODRkNDE0LjcyZDczNy4yOGQ0MTQuNzJkMTAyNGQzNTguNGQ0NjMuODcxZDM1OC40ZDQ4MS4yOGQzNTIuMjU2ZDU0My43NDNkMzUwLjIwOGQ1NjYuMjcxZDMzNC44NDhkNTgxLjYzMmQzMTkuNDg4ZDU5Ni45OTJkMjk5LjAwOGQ1OTYuOTkyZDI2NC4xOTJkNTk2Ljk5MmQyNDEuNjY0ZDU3Mi40MTVkMTgzLjI5NmQ1MDcuOTA0ZDE3NC4wOGQ1OTIuODk2ZDEyMi44OGQ1OTIuODk2ZDEyMi44OGQ1ODQuNzA0ZDEyNC40MTZkNTY0LjczNmQxMjUuOTUyZDU0NC43NjhkMTMwLjA0OGQ1MTJkMTMyLjA5NmQ0OTAuNDk2ZDE0OC40OGQ0NzUuNjQ4ZDE2NC44NjRkNDYwLjc5OWQxODYuMzY4ZDQ2MC43OTlkMjE4LjExMmQ0NjAuNzk5ZDIzOS42MTZkNDgzLjMyOGQzMDEuMDU2ZDU0Ny44MzlkMzA3LjJkNDYzLjg3MWQzNTguNGQ0NjMuODcxaFIzZDQ4Ni40UjRkNDE0LjcyUjVkNTYuMzJSNmQ1NjMuMlI3ZDBSOGQ1MDYuODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyN1IxMmQ1Ni4zMlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTNpM2kzaTNpMmkyaTJpM2kzaTNpM2kzaTJpMmkyaGc6MTE0b1IxZDc2OFIyYWQzNTguNGQ4MDguOTZkMjg2LjcyZDgwOC45NmQyODYuNzJkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDEwMjRkNzEuNjhkMTAyNGQ3MS42OGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDE0My4zNmQ3MTYuOGQxOTQuNTZkNjY1LjU5OWQyODYuNzJkNjY1LjU5OWQzMTYuNDE2ZDY2NS41OTlkMzM3LjQwOGQ2ODYuNTkyZDM1OC40ZDcwNy41ODRkMzU4LjRkNzM3LjI4ZDM1OC40ZDgwOC45NmhSM2QzOTkuMzZSNGQzNTguNFI1ZDcxLjY4UjZkMzU4LjRSN2QwUjhkMjg2LjcyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkxMTRSMTJkNzEuNjhSMTNkMzk5LjM2UjE0YWkxaTJpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJoZzoyMjZvUjFkNzY4UjJhZDQxNC43MmQxMDI0ZDM0My4wNGQxMDI0ZDM0My4wNGQ5NzEuNzc2ZDI4MS42ZDEwMjRkMTI4ZDEwMjRkOTguMzA0ZDEwMjRkNzcuMzEyZDEwMDMuMDA4ZDU2LjMyZDk4Mi4wMTZkNTYuMzJkOTUyLjMxOWQ1Ni4zMmQ4ODAuNjRkNTYuMzJkODUwLjk0NGQ3Ny4zMTJkODI5Ljk1MmQ5OC4zMDRkODA4Ljk2ZDEyOGQ4MDguOTZkMzMyLjhkODA4Ljk2ZDI3MS4zNmQ4NjkuMzc2ZDEyOGQ4NjkuMzc2ZDEyOGQ5NjIuNTZkMzQzLjA0ZDk2Mi41NmQzNDMuMDRkNzI3LjA0ZDU2LjMyZDcyNy4wNGQxMTcuNzZkNjY1LjU5OWQzNDMuMDRkNjY1LjU5OWQzNzIuNzM2ZDY2NS41OTlkMzkzLjcyOGQ2ODYuNTkyZDQxNC43MmQ3MDcuNTg0ZDQxNC43MmQ3MzcuMjhkNDE0LjcyZDEwMjRkMzY4LjY0ZDU5My45MmQyOTYuOTZkNTkzLjkyZDI1NmQ1MDEuNzZkMjQ1Ljc2ZDUwMS43NmQyMDQuOGQ1OTMuOTJkMTMzLjEyZDU5My45MmQyMTUuMDRkNDYwLjc5OWQyODYuNzJkNDYwLjc5OWQzNjguNjRkNTkzLjkyaFIzZDQ4Ni40UjRkNDE0LjcyUjVkNTYuMzJSNmQ1NjMuMlI3ZDBSOGQ1MDYuODhSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTIyNlIxMmQ1Ni4zMlIxM2Q0ODYuNFIxNGFpMWkyaTJpMmkyaTNpM2kyaTNpM2kyaTJpMmkyaTJpMmkyaTJpMmkzaTNpMmkxaTJpMmkyaTJpMmkyaTJpMmhnOjExM29SMWQ3NjhSMmFkNDMwLjA4ZDExNzcuNmQzNTguNGQxMjQ5LjI4ZDM1OC40ZDk3Mi44ZDMwNy4yZDEwMjRkMTQzLjM2ZDEwMjRkMTEzLjY2NGQxMDI0ZDkyLjY3MmQxMDAzLjAwOGQ3MS42OGQ5ODIuMDE2ZDcxLjY4ZDk1Mi4zMTlkNzEuNjhkNzM3LjI4ZDcxLjY4ZDcwNy41ODRkOTIuNjcyZDY4Ni41OTJkMTEzLjY2NGQ2NjUuNTk5ZDE0My4zNmQ2NjUuNTk5ZDQzMC4wOGQ2NjUuNTk5ZDQzMC4wOGQxMTc3LjZkMzU4LjRkOTYyLjU2ZDM1OC40ZDY3NS44MzlkMzA3LjJkNzI3LjA0ZDE0My4zNmQ3MjcuMDRkMTQzLjM2ZDk2Mi41NmQzNTguNGQ5NjIuNTZoUjNkNTAxLjc2UjRkNDMwLjA4UjVkNzEuNjhSNmQzNTguNFI3ZC0yMjUuMjhSOGQyODYuNzJSOWQtMzAuNzJSMTBkMjI1LjI4UjExaTExM1IxMmQ3MS42OFIxM2Q1MDEuNzZSMTRhaTFpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTFpMmkyaTJpMmkyaGc6MjI1b1IxZDc2OFIyYWQ0MTQuNzJkMTAyNGQzNDMuMDRkMTAyNGQzNDMuMDRkOTcxLjc3NmQyODEuNmQxMDI0ZDEyOGQxMDI0ZDk4LjMwNGQxMDI0ZDc3LjMxMmQxMDAzLjAwOGQ1Ni4zMmQ5ODIuMDE2ZDU2LjMyZDk1Mi4zMTlkNTYuMzJkODgwLjY0ZDU2LjMyZDg1MC45NDRkNzcuMzEyZDgyOS45NTJkOTguMzA0ZDgwOC45NmQxMjhkODA4Ljk2ZDMzMi44ZDgwOC45NmQyNzEuMzZkODY5LjM3NmQxMjhkODY5LjM3NmQxMjhkOTYyLjU2ZDM0My4wNGQ5NjIuNTZkMzQzLjA0ZDcyNy4wNGQ1Ni4zMmQ3MjcuMDRkMTE3Ljc2ZDY2NS41OTlkMzQzLjA0ZDY2NS41OTlkMzcyLjczNmQ2NjUuNTk5ZDM5My43MjhkNjg2LjU5MmQ0MTQuNzJkNzA3LjU4NGQ0MTQuNzJkNzM3LjI4ZDQxNC43MmQxMDI0ZDM2OC42NGQ0NTAuNTU5ZDI2Ni4yNGQ1OTMuOTJkMTk0LjU2ZDU5My45MmQyOTYuOTZkNDUwLjU1OWQzNjguNjRkNDUwLjU1OWhSM2Q0ODYuNFI0ZDQxNC43MlI1ZDU2LjMyUjZkNTczLjQ0UjdkMFI4ZDUxNy4xMlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMjI1UjEyZDU2LjMyUjEzZDQ4Ni40UjE0YWkxaTJpMmkyaTJpM2kzaTJpM2kzaTJpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmhnOjExMm9SMWQ3NjhSMmFkNDMwLjA4ZDk1Mi4zMTlkNDMwLjA4ZDk4Mi4wMTZkNDA5LjA4OGQxMDAzLjAwOGQzODguMDk2ZDEwMjRkMzU4LjRkMTAyNGQxNDMuMzZkMTAyNGQxNDMuMzZkMTIzOS4wNGQ3MS42OGQxMjM5LjA0ZDcxLjY4ZDY2NS41OTlkMTQzLjM2ZDY2NS41OTlkMTQzLjM2ZDcxNi44ZDE5NC41NmQ2NjUuNTk5ZDM1OC40ZDY2NS41OTlkMzg4LjA5NmQ2NjUuNTk5ZDQwOS4wODhkNjg2LjU5MmQ0MzAuMDhkNzA3LjU4NGQ0MzAuMDhkNzM3LjI4ZDQzMC4wOGQ5NTIuMzE5ZDM1OC40ZDk2Mi41NmQzNTguNGQ3MjcuMDRkMTQzLjM2ZDcyNy4wNGQxNDMuMzZkMTAxMy43NmQxOTQuNTZkOTYyLjU2ZDM1OC40ZDk2Mi41NmhSM2Q1MDEuNzZSNGQ0MzAuMDhSNWQ3MS42OFI2ZDM1OC40UjdkLTIxNS4wNFI4ZDI4Ni43MlI5ZC0zMC43MlIxMGQyMjUuMjhSMTFpMTEyUjEyZDcxLjY4UjEzZDUwMS43NlIxNGFpMWkzaTNpMmkyaTJpMmkyaTJpMmkyaTNpM2kyaTFpMmkyaTJpMmkyaGc6MjI0b1IxZDc2OFIyYWQ0MTQuNzJkMTAyNGQzNDMuMDRkMTAyNGQzNDMuMDRkOTcxLjc3NmQyODEuNmQxMDI0ZDEyOGQxMDI0ZDk4LjMwNGQxMDI0ZDc3LjMxMmQxMDAzLjAwOGQ1Ni4zMmQ5ODIuMDE2ZDU2LjMyZDk1Mi4zMTlkNTYuMzJkODgwLjY0ZDU2LjMyZDg1MC45NDRkNzcuMzEyZDgyOS45NTJkOTguMzA0ZDgwOC45NmQxMjhkODA4Ljk2ZDMzMi44ZDgwOC45NmQyNzEuMzZkODY5LjM3NmQxMjhkODY5LjM3NmQxMjhkOTYyLjU2ZDM0My4wNGQ5NjIuNTZkMzQzLjA0ZDcyNy4wNGQ1Ni4zMmQ3MjcuMDRkMTE3Ljc2ZDY2NS41OTlkMzQzLjA0ZDY2NS41OTlkMzcyLjczNmQ2NjUuNTk5ZDM5My43MjhkNjg2LjU5MmQ0MTQuNzJkNzA3LjU4NGQ0MTQuNzJkNzM3LjI4ZDQxNC43MmQxMDI0ZDMwNy4yZDU5My45MmQyMzUuNTJkNTkzLjkyZDEzMy4xMmQ0NTAuNTU5ZDIwNC44ZDQ1MC41NTlkMzA3LjJkNTkzLjkyaFIzZDQ4Ni40UjRkNDE0LjcyUjVkNTYuMzJSNmQ1NzMuNDRSN2QwUjhkNTE3LjEyUjlkLTMwLjcyUjEwZDIyNS4yOFIxMWkyMjRSMTJkNTYuMzJSMTNkNDg2LjRSMTRhaTFpMmkyaTJpMmkzaTNpMmkzaTNpMmkyaTJpMmkyaTJpMmkyaTJpM2kzaTJpMWkyaTJpMmkyaGdoeTg6Zm9udE5hbWV5NzpJY2VsYW5kZw"}];
msignal.SlotList.NIL = new msignal.SlotList(null,null);
flash.display.DisplayObject.GRAPHICS_INVALID = 2;
flash.display.DisplayObject.MATRIX_INVALID = 4;
flash.display.DisplayObject.MATRIX_CHAIN_INVALID = 8;
flash.display.DisplayObject.MATRIX_OVERRIDDEN = 16;
flash.display.DisplayObject.TRANSFORM_INVALID = 32;
flash.display.DisplayObject.BOUNDS_INVALID = 64;
flash.display.DisplayObject.RENDER_VALIDATE_IN_PROGRESS = 1024;
flash.display.DisplayObject.ALL_RENDER_FLAGS = 98;
DefaultAssetLibrary.className = new haxe.ds.StringMap();
DefaultAssetLibrary.path = new haxe.ds.StringMap();
DefaultAssetLibrary.type = new haxe.ds.StringMap();
flash.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
flash.text.Font.DEFAULT_FONT_SCALE = 9.0;
flash.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
flash.text.Font.DEFAULT_CLASS_NAME = "flash.text.Font";
flash.text.Font.__registeredFonts = new Array();
DefaultFont.resourceName = "NME_font_DefaultFont";
flash.Lib.HTML_ACCELEROMETER_EVENT_TYPE = "devicemotion";
flash.Lib.HTML_ORIENTATION_EVENT_TYPE = "orientationchange";
flash.Lib.DEFAULT_HEIGHT = 500;
flash.Lib.DEFAULT_WIDTH = 500;
flash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseover","mouseout","mousewheel","dblclick","click"];
flash.Lib.HTML_TOUCH_EVENT_TYPES = ["touchstart","touchmove","touchend"];
flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES = ["mousedown","mousemove","mouseup"];
flash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown","resize","blur","focus"];
flash.Lib.NME_IDENTIFIER = "haxe:openfl";
flash.Lib.VENDOR_HTML_TAG = "data-";
flash.Lib.starttime = haxe.Timer.stamp();
flash.display._BitmapData.MinstdGenerator.a = 16807;
flash.display._BitmapData.MinstdGenerator.m = -2147483648 - 1;
flash.display.BitmapDataChannel.ALPHA = 8;
flash.display.BitmapDataChannel.BLUE = 4;
flash.display.BitmapDataChannel.GREEN = 2;
flash.display.BitmapDataChannel.RED = 1;
flash.display.Graphics.TILE_SCALE = 1;
flash.display.Graphics.TILE_ROTATION = 2;
flash.display.Graphics.TILE_RGB = 4;
flash.display.Graphics.TILE_ALPHA = 8;
flash.display.Graphics.TILE_TRANS_2x2 = 16;
flash.display.Graphics.TILE_BLEND_NORMAL = 0;
flash.display.Graphics.TILE_BLEND_ADD = 65536;
flash.display.Graphics.BMP_REPEAT = 16;
flash.display.Graphics.BMP_SMOOTH = 65536;
flash.display.Graphics.CORNER_ROUND = 0;
flash.display.Graphics.CORNER_MITER = 4096;
flash.display.Graphics.CORNER_BEVEL = 8192;
flash.display.Graphics.CURVE = 2;
flash.display.Graphics.END_NONE = 0;
flash.display.Graphics.END_ROUND = 256;
flash.display.Graphics.END_SQUARE = 512;
flash.display.Graphics.LINE = 1;
flash.display.Graphics.MOVE = 0;
flash.display.Graphics.__MAX_DIM = 5000;
flash.display.Graphics.PIXEL_HINTING = 16384;
flash.display.Graphics.RADIAL = 1;
flash.display.Graphics.SCALE_HORIZONTAL = 2;
flash.display.Graphics.SCALE_NONE = 0;
flash.display.Graphics.SCALE_NORMAL = 3;
flash.display.Graphics.SCALE_VERTICAL = 1;
flash.display.Graphics.SPREAD_REPEAT = 2;
flash.display.Graphics.SPREAD_REFLECT = 4;
flash.display.GraphicsPathCommand.LINE_TO = 2;
flash.display.GraphicsPathCommand.MOVE_TO = 1;
flash.display.GraphicsPathCommand.CURVE_TO = 3;
flash.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
flash.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
flash.display.GraphicsPathCommand.NO_OP = 0;
flash.display.GraphicsPathCommand.CUBIC_CURVE_TO = 6;
flash.events.Event.ACTIVATE = "activate";
flash.events.Event.ADDED = "added";
flash.events.Event.ADDED_TO_STAGE = "addedToStage";
flash.events.Event.CANCEL = "cancel";
flash.events.Event.CHANGE = "change";
flash.events.Event.CLOSE = "close";
flash.events.Event.COMPLETE = "complete";
flash.events.Event.CONNECT = "connect";
flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";
flash.events.Event.DEACTIVATE = "deactivate";
flash.events.Event.ENTER_FRAME = "enterFrame";
flash.events.Event.ID3 = "id3";
flash.events.Event.INIT = "init";
flash.events.Event.MOUSE_LEAVE = "mouseLeave";
flash.events.Event.OPEN = "open";
flash.events.Event.REMOVED = "removed";
flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
flash.events.Event.RENDER = "render";
flash.events.Event.RESIZE = "resize";
flash.events.Event.SCROLL = "scroll";
flash.events.Event.SELECT = "select";
flash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
flash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
flash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
flash.events.Event.UNLOAD = "unload";
flash.events.Event.SOUND_COMPLETE = "soundComplete";
flash.events.MouseEvent.CLICK = "click";
flash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
flash.events.MouseEvent.MOUSE_OUT = "mouseOut";
flash.events.MouseEvent.MOUSE_OVER = "mouseOver";
flash.events.MouseEvent.MOUSE_UP = "mouseUp";
flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
flash.events.MouseEvent.RIGHT_CLICK = "rightClick";
flash.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
flash.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
flash.events.MouseEvent.ROLL_OUT = "rollOut";
flash.events.MouseEvent.ROLL_OVER = "rollOver";
flash.display.Stage.NAME = "Stage";
flash.display.Stage.OrientationPortrait = 1;
flash.display.Stage.OrientationPortraitUpsideDown = 2;
flash.display.Stage.OrientationLandscapeRight = 3;
flash.display.Stage.OrientationLandscapeLeft = 4;
flash.display.Stage.__acceleration = { x : 0.0, y : 1.0, z : 0.0};
flash.display.Stage.DEFAULT_FRAMERATE = 0.0;
flash.display.Stage.UI_EVENTS_QUEUE_MAX = 1000;
flash.display.Stage.__mouseChanges = [flash.events.MouseEvent.MOUSE_OUT,flash.events.MouseEvent.MOUSE_OVER,flash.events.MouseEvent.ROLL_OUT,flash.events.MouseEvent.ROLL_OVER];
flash.display.Stage.__touchChanges = ["touchOut","touchOver","touchRollOut","touchRollOver"];
flash.display.StageQuality.BEST = "best";
flash.display.StageQuality.HIGH = "high";
flash.display.StageQuality.MEDIUM = "medium";
flash.display.StageQuality.LOW = "low";
flash.errors.Error.DEFAULT_TO_STRING = "Error";
flash.events.TextEvent.LINK = "link";
flash.events.TextEvent.TEXT_INPUT = "textInput";
flash.events.ErrorEvent.ERROR = "error";
flash.events.Listener.sIDs = 1;
flash.events.EventPhase.CAPTURING_PHASE = 0;
flash.events.EventPhase.AT_TARGET = 1;
flash.events.EventPhase.BUBBLING_PHASE = 2;
flash.events.FocusEvent.FOCUS_IN = "focusIn";
flash.events.FocusEvent.FOCUS_OUT = "focusOut";
flash.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
flash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
flash.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
flash.events.IOErrorEvent.IO_ERROR = "ioError";
flash.events.KeyboardEvent.KEY_DOWN = "keyDown";
flash.events.KeyboardEvent.KEY_UP = "keyUp";
flash.events.ProgressEvent.PROGRESS = "progress";
flash.events.ProgressEvent.SOCKET_DATA = "socketData";
flash.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
flash.events.TimerEvent.TIMER = "timer";
flash.events.TimerEvent.TIMER_COMPLETE = "timerComplete";
flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
flash.events.TouchEvent.TOUCH_END = "touchEnd";
flash.events.TouchEvent.TOUCH_MOVE = "touchMove";
flash.events.TouchEvent.TOUCH_OUT = "touchOut";
flash.events.TouchEvent.TOUCH_OVER = "touchOver";
flash.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
flash.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
flash.events.TouchEvent.TOUCH_TAP = "touchTap";
flash.filters.DropShadowFilter.DEGREES_FULL_RADIUS = 360.0;
flash.geom.Transform.DEG_TO_RAD = Math.PI / 180.0;
flash.media.Sound.EXTENSION_MP3 = "mp3";
flash.media.Sound.EXTENSION_OGG = "ogg";
flash.media.Sound.EXTENSION_WAV = "wav";
flash.media.Sound.EXTENSION_AAC = "aac";
flash.media.Sound.MEDIA_TYPE_MP3 = "audio/mpeg";
flash.media.Sound.MEDIA_TYPE_OGG = "audio/ogg; codecs=\"vorbis\"";
flash.media.Sound.MEDIA_TYPE_WAV = "audio/wav; codecs=\"1\"";
flash.media.Sound.MEDIA_TYPE_AAC = "audio/mp4; codecs=\"mp4a.40.2\"";
flash.net.URLRequestMethod.DELETE = "DELETE";
flash.net.URLRequestMethod.GET = "GET";
flash.net.URLRequestMethod.HEAD = "HEAD";
flash.net.URLRequestMethod.OPTIONS = "OPTIONS";
flash.net.URLRequestMethod.POST = "POST";
flash.net.URLRequestMethod.PUT = "PUT";
flash.system.ApplicationDomain.currentDomain = new flash.system.ApplicationDomain(null);
flash.system.SecurityDomain.currentDomain = new flash.system.SecurityDomain();
flash.text.AntiAliasType.ADVANCED = "advanced";
flash.text.AntiAliasType.NORMAL = "normal";
flash.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
flash.text.FontInstance.mSolidFonts = new haxe.ds.StringMap();
flash.text.TextFieldAutoSize.CENTER = "CENTER";
flash.text.TextFieldAutoSize.LEFT = "LEFT";
flash.text.TextFieldAutoSize.NONE = "NONE";
flash.text.TextFieldAutoSize.RIGHT = "RIGHT";
flash.text.TextFieldType.DYNAMIC = "DYNAMIC";
flash.text.TextFieldType.INPUT = "INPUT";
flash.ui.Keyboard.NUMBER_0 = 48;
flash.ui.Keyboard.NUMBER_1 = 49;
flash.ui.Keyboard.NUMBER_2 = 50;
flash.ui.Keyboard.NUMBER_3 = 51;
flash.ui.Keyboard.NUMBER_4 = 52;
flash.ui.Keyboard.NUMBER_5 = 53;
flash.ui.Keyboard.NUMBER_6 = 54;
flash.ui.Keyboard.NUMBER_7 = 55;
flash.ui.Keyboard.NUMBER_8 = 56;
flash.ui.Keyboard.NUMBER_9 = 57;
flash.ui.Keyboard.A = 65;
flash.ui.Keyboard.B = 66;
flash.ui.Keyboard.C = 67;
flash.ui.Keyboard.D = 68;
flash.ui.Keyboard.E = 69;
flash.ui.Keyboard.F = 70;
flash.ui.Keyboard.G = 71;
flash.ui.Keyboard.H = 72;
flash.ui.Keyboard.I = 73;
flash.ui.Keyboard.J = 74;
flash.ui.Keyboard.K = 75;
flash.ui.Keyboard.L = 76;
flash.ui.Keyboard.M = 77;
flash.ui.Keyboard.N = 78;
flash.ui.Keyboard.O = 79;
flash.ui.Keyboard.P = 80;
flash.ui.Keyboard.Q = 81;
flash.ui.Keyboard.R = 82;
flash.ui.Keyboard.S = 83;
flash.ui.Keyboard.T = 84;
flash.ui.Keyboard.U = 85;
flash.ui.Keyboard.V = 86;
flash.ui.Keyboard.W = 87;
flash.ui.Keyboard.X = 88;
flash.ui.Keyboard.Y = 89;
flash.ui.Keyboard.Z = 90;
flash.ui.Keyboard.NUMPAD_0 = 96;
flash.ui.Keyboard.NUMPAD_1 = 97;
flash.ui.Keyboard.NUMPAD_2 = 98;
flash.ui.Keyboard.NUMPAD_3 = 99;
flash.ui.Keyboard.NUMPAD_4 = 100;
flash.ui.Keyboard.NUMPAD_5 = 101;
flash.ui.Keyboard.NUMPAD_6 = 102;
flash.ui.Keyboard.NUMPAD_7 = 103;
flash.ui.Keyboard.NUMPAD_8 = 104;
flash.ui.Keyboard.NUMPAD_9 = 105;
flash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
flash.ui.Keyboard.NUMPAD_ADD = 107;
flash.ui.Keyboard.NUMPAD_ENTER = 108;
flash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
flash.ui.Keyboard.NUMPAD_DECIMAL = 110;
flash.ui.Keyboard.NUMPAD_DIVIDE = 111;
flash.ui.Keyboard.F1 = 112;
flash.ui.Keyboard.F2 = 113;
flash.ui.Keyboard.F3 = 114;
flash.ui.Keyboard.F4 = 115;
flash.ui.Keyboard.F5 = 116;
flash.ui.Keyboard.F6 = 117;
flash.ui.Keyboard.F7 = 118;
flash.ui.Keyboard.F8 = 119;
flash.ui.Keyboard.F9 = 120;
flash.ui.Keyboard.F10 = 121;
flash.ui.Keyboard.F11 = 122;
flash.ui.Keyboard.F12 = 123;
flash.ui.Keyboard.F13 = 124;
flash.ui.Keyboard.F14 = 125;
flash.ui.Keyboard.F15 = 126;
flash.ui.Keyboard.BACKSPACE = 8;
flash.ui.Keyboard.TAB = 9;
flash.ui.Keyboard.ENTER = 13;
flash.ui.Keyboard.SHIFT = 16;
flash.ui.Keyboard.CONTROL = 17;
flash.ui.Keyboard.CAPS_LOCK = 18;
flash.ui.Keyboard.ESCAPE = 27;
flash.ui.Keyboard.SPACE = 32;
flash.ui.Keyboard.PAGE_UP = 33;
flash.ui.Keyboard.PAGE_DOWN = 34;
flash.ui.Keyboard.END = 35;
flash.ui.Keyboard.HOME = 36;
flash.ui.Keyboard.LEFT = 37;
flash.ui.Keyboard.RIGHT = 39;
flash.ui.Keyboard.UP = 38;
flash.ui.Keyboard.DOWN = 40;
flash.ui.Keyboard.INSERT = 45;
flash.ui.Keyboard.DELETE = 46;
flash.ui.Keyboard.NUMLOCK = 144;
flash.ui.Keyboard.BREAK = 19;
flash.ui.Keyboard.SEMICOLON = 186;
flash.ui.Keyboard.EQUAL = 187;
flash.ui.Keyboard.COMMA = 188;
flash.ui.Keyboard.MINUS = 189;
flash.ui.Keyboard.PERIOD = 190;
flash.ui.Keyboard.SLASH = 191;
flash.ui.Keyboard.BACKQUOTE = 192;
flash.ui.Keyboard.LEFTBRACKET = 219;
flash.ui.Keyboard.BACKSLASH = 220;
flash.ui.Keyboard.RIGHTBRACKET = 221;
flash.ui.Keyboard.DOM_VK_CANCEL = 3;
flash.ui.Keyboard.DOM_VK_HELP = 6;
flash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
flash.ui.Keyboard.DOM_VK_TAB = 9;
flash.ui.Keyboard.DOM_VK_CLEAR = 12;
flash.ui.Keyboard.DOM_VK_RETURN = 13;
flash.ui.Keyboard.DOM_VK_ENTER = 14;
flash.ui.Keyboard.DOM_VK_SHIFT = 16;
flash.ui.Keyboard.DOM_VK_CONTROL = 17;
flash.ui.Keyboard.DOM_VK_ALT = 18;
flash.ui.Keyboard.DOM_VK_PAUSE = 19;
flash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
flash.ui.Keyboard.DOM_VK_ESCAPE = 27;
flash.ui.Keyboard.DOM_VK_SPACE = 32;
flash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
flash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
flash.ui.Keyboard.DOM_VK_END = 35;
flash.ui.Keyboard.DOM_VK_HOME = 36;
flash.ui.Keyboard.DOM_VK_LEFT = 37;
flash.ui.Keyboard.DOM_VK_UP = 38;
flash.ui.Keyboard.DOM_VK_RIGHT = 39;
flash.ui.Keyboard.DOM_VK_DOWN = 40;
flash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
flash.ui.Keyboard.DOM_VK_INSERT = 45;
flash.ui.Keyboard.DOM_VK_DELETE = 46;
flash.ui.Keyboard.DOM_VK_0 = 48;
flash.ui.Keyboard.DOM_VK_1 = 49;
flash.ui.Keyboard.DOM_VK_2 = 50;
flash.ui.Keyboard.DOM_VK_3 = 51;
flash.ui.Keyboard.DOM_VK_4 = 52;
flash.ui.Keyboard.DOM_VK_5 = 53;
flash.ui.Keyboard.DOM_VK_6 = 54;
flash.ui.Keyboard.DOM_VK_7 = 55;
flash.ui.Keyboard.DOM_VK_8 = 56;
flash.ui.Keyboard.DOM_VK_9 = 57;
flash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
flash.ui.Keyboard.DOM_VK_EQUALS = 61;
flash.ui.Keyboard.DOM_VK_A = 65;
flash.ui.Keyboard.DOM_VK_B = 66;
flash.ui.Keyboard.DOM_VK_C = 67;
flash.ui.Keyboard.DOM_VK_D = 68;
flash.ui.Keyboard.DOM_VK_E = 69;
flash.ui.Keyboard.DOM_VK_F = 70;
flash.ui.Keyboard.DOM_VK_G = 71;
flash.ui.Keyboard.DOM_VK_H = 72;
flash.ui.Keyboard.DOM_VK_I = 73;
flash.ui.Keyboard.DOM_VK_J = 74;
flash.ui.Keyboard.DOM_VK_K = 75;
flash.ui.Keyboard.DOM_VK_L = 76;
flash.ui.Keyboard.DOM_VK_M = 77;
flash.ui.Keyboard.DOM_VK_N = 78;
flash.ui.Keyboard.DOM_VK_O = 79;
flash.ui.Keyboard.DOM_VK_P = 80;
flash.ui.Keyboard.DOM_VK_Q = 81;
flash.ui.Keyboard.DOM_VK_R = 82;
flash.ui.Keyboard.DOM_VK_S = 83;
flash.ui.Keyboard.DOM_VK_T = 84;
flash.ui.Keyboard.DOM_VK_U = 85;
flash.ui.Keyboard.DOM_VK_V = 86;
flash.ui.Keyboard.DOM_VK_W = 87;
flash.ui.Keyboard.DOM_VK_X = 88;
flash.ui.Keyboard.DOM_VK_Y = 89;
flash.ui.Keyboard.DOM_VK_Z = 90;
flash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
flash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
flash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
flash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
flash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
flash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
flash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
flash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
flash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
flash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
flash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
flash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
flash.ui.Keyboard.DOM_VK_ADD = 107;
flash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
flash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
flash.ui.Keyboard.DOM_VK_DECIMAL = 110;
flash.ui.Keyboard.DOM_VK_DIVIDE = 111;
flash.ui.Keyboard.DOM_VK_F1 = 112;
flash.ui.Keyboard.DOM_VK_F2 = 113;
flash.ui.Keyboard.DOM_VK_F3 = 114;
flash.ui.Keyboard.DOM_VK_F4 = 115;
flash.ui.Keyboard.DOM_VK_F5 = 116;
flash.ui.Keyboard.DOM_VK_F6 = 117;
flash.ui.Keyboard.DOM_VK_F7 = 118;
flash.ui.Keyboard.DOM_VK_F8 = 119;
flash.ui.Keyboard.DOM_VK_F9 = 120;
flash.ui.Keyboard.DOM_VK_F10 = 121;
flash.ui.Keyboard.DOM_VK_F11 = 122;
flash.ui.Keyboard.DOM_VK_F12 = 123;
flash.ui.Keyboard.DOM_VK_F13 = 124;
flash.ui.Keyboard.DOM_VK_F14 = 125;
flash.ui.Keyboard.DOM_VK_F15 = 126;
flash.ui.Keyboard.DOM_VK_F16 = 127;
flash.ui.Keyboard.DOM_VK_F17 = 128;
flash.ui.Keyboard.DOM_VK_F18 = 129;
flash.ui.Keyboard.DOM_VK_F19 = 130;
flash.ui.Keyboard.DOM_VK_F20 = 131;
flash.ui.Keyboard.DOM_VK_F21 = 132;
flash.ui.Keyboard.DOM_VK_F22 = 133;
flash.ui.Keyboard.DOM_VK_F23 = 134;
flash.ui.Keyboard.DOM_VK_F24 = 135;
flash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
flash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
flash.ui.Keyboard.DOM_VK_COMMA = 188;
flash.ui.Keyboard.DOM_VK_PERIOD = 190;
flash.ui.Keyboard.DOM_VK_SLASH = 191;
flash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
flash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
flash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
flash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
flash.ui.Keyboard.DOM_VK_QUOTE = 222;
flash.ui.Keyboard.DOM_VK_META = 224;
flash.ui.Keyboard.DOM_VK_KANA = 21;
flash.ui.Keyboard.DOM_VK_HANGUL = 21;
flash.ui.Keyboard.DOM_VK_JUNJA = 23;
flash.ui.Keyboard.DOM_VK_FINAL = 24;
flash.ui.Keyboard.DOM_VK_HANJA = 25;
flash.ui.Keyboard.DOM_VK_KANJI = 25;
flash.ui.Keyboard.DOM_VK_CONVERT = 28;
flash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
flash.ui.Keyboard.DOM_VK_ACEPT = 30;
flash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
flash.ui.Keyboard.DOM_VK_SELECT = 41;
flash.ui.Keyboard.DOM_VK_PRINT = 42;
flash.ui.Keyboard.DOM_VK_EXECUTE = 43;
flash.ui.Keyboard.DOM_VK_SLEEP = 95;
flash.utils.Endian.BIG_ENDIAN = "bigEndian";
flash.utils.Endian.LITTLE_ENDIAN = "littleEndian";
flash.utils.Uuid.UID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
gakhov.moonRover.core.Global.width = 480;
gakhov.moonRover.core.Global.height = 320;
gakhov.moonRover.core.Global.scale = 1;
gakhov.moonRover.core.Global._assetsSizeScale = 1;
gakhov.moonRover.core.Global._assetsPath = "assets/";
openfl.Assets.cache = new openfl.AssetCache();
openfl.Assets.libraries = new haxe.ds.StringMap();
openfl.Assets.initialized = false;
gakhov.moonRover.utils.Utils.icelandFont = openfl.Assets.getFont("assets/fonts/Iceland-Regular.ttf");
haxe.Template.splitter = new EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()","");
haxe.Template.expr_splitter = new EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)","");
haxe.Template.expr_trim = new EReg("^[ ]*([^ ]+)[ ]*$","");
haxe.Template.expr_int = new EReg("^[0-9]+$","");
haxe.Template.expr_float = new EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$","");
haxe.Template.globals = { };
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.ds.ObjectMap.count = 0;
js.Browser.window = typeof window != "undefined" ? window : null;
js.Browser.document = typeof window != "undefined" ? window.document : null;
motion.actuators.SimpleActuator.actuators = new Array();
motion.actuators.SimpleActuator.actuatorsLength = 0;
motion.actuators.SimpleActuator.addedEvent = false;
motion.Actuate.defaultActuator = motion.actuators.SimpleActuator;
motion.Actuate.defaultEase = motion.easing.Expo.get_easeOut();
motion.Actuate.targetLibraries = new haxe.ds.ObjectMap();
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
ApplicationMain.main();
})();
