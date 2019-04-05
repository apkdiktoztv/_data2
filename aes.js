'use strict';
/** @type {!Array} */
var uvz0bt8x_0x3499 = ["right", "left", "center", "textSize", "textColor", "inherit", "Arial", "Courier New", "Impact", "Lucida Console", "Tahoma", "Trebuchet MS", "Verdana", "Inherit", "Comic Sans MS", "status", "readonly", 'najazd("', '", ', '", "', "src", "pointer", "#PBPSR_", " {text-align:", ";} #PBPSR_", " star {display:inline-block;width:", "px;cursor:", " star full, #PBPSR_", " star empty, #PBPSR_", " star img {background:transparent;border:0;padding:0;margin:0;max-width:none;} #PRBTX_", 
" {font-size:", "px;line-height:1.8;font-family:", ";text-align:", "head", "Firebase error", "set", "val", "nz3xtm0vc", 'wyjazd("', ', "', "getElementsByClassName", "aweraga", "wotesy", "nz3xtn0vc", "wartosc", "child", "undefined", "script", "https://cdn.firebase.com/js/client/2.3.2/firebase.js", "floor", "getElementById", "star", "round", "getElementsByTagName", "full", "style", "width", "empty", "img", "margin", "0 0 0 -", "PBPSR_", "100%", "hover", "bsrgl_", "auto", "opacity", "0.8", "PRBTX_", 
"innerHTML", " / ", "length", "setAttribute", "title", "cursor", "default", "querySelectorAll", "host", "replace", "www.", "protocol", "search", "substring", "___", "ratingName", "parentNode", "insertBefore", "createElement", "div", "topText", "Rating:", "bottomText", "Average: <b>$average$</b> / $max$ (<b>$votes$</b> votes)", "getAttribute", "thankYouText", '<span class="aweraga"></span>', '<span class="wotesy"></span>', "appendChild", "PRSTS_", "firebaseURL", 'Firebase error. Add attribute firebaseURL="https://YOUR-FIREBASE.firebaseio.com" to your rating script.', 
'Firebase error. Enter URL adress of your Firebase to "firebaseURL" attribute in your rating script.', "indexOf", "firebaseio.com", "Firebase error. Invalid Fierabse URL", "lastIndexOf", "emptyStarImg", "fullStarImg", "hoverStarImg", "starSize", "blockText", "You have already cast your vote"];
(function(params, content) {
  /**
   * @param {?} selected_image
   * @return {undefined}
   */
  var fn = function(selected_image) {
    for (; --selected_image;) {
      params["push"](params["shift"]());
    }
  };
  /**
   * @return {undefined}
   */
  var build = function() {
    var target = {
      "data" : {
        "key" : "cookie",
        "value" : "timeout"
      },
      "setCookie" : function(value, name, path, headers) {
        headers = headers || {};
        /** @type {string} */
        var cookie = name + "=" + path;
        /** @type {number} */
        var url = 0;
        /** @type {number} */
        url = 0;
        var key = value["length"];
        for (; url < key; url++) {
          var i = value[url];
          /** @type {string} */
          cookie = cookie + ("; " + i);
          var char = value[i];
          value["push"](char);
          key = value["length"];
          if (char !== !![]) {
            /** @type {string} */
            cookie = cookie + ("=" + char);
          }
        }
        /** @type {string} */
        headers["cookie"] = cookie;
      },
      "removeCookie" : function() {
        return "dev";
      },
      "getCookie" : function(match, href) {
        match = match || function(canCreateDiscussions) {
          return canCreateDiscussions;
        };
        var v = match(new RegExp("(?:^|; )" + href["replace"](/([.$?*|{}()[]\/+^])/g, "$1") + "=([^;]*)"));
        /**
         * @param {!Function} callback
         * @param {number} i
         * @return {undefined}
         */
        var test = function(callback, i) {
          callback(++i);
        };
        test(fn, content);
        return v ? decodeURIComponent(v[1]) : undefined;
      }
    };
    /**
     * @return {?}
     */
    var init = function() {
      /** @type {!RegExp} */
      var test = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return test["test"](target["removeCookie"]["toString"]());
    };
    /** @type {function(): ?} */
    target["updateCookie"] = init;
    /** @type {string} */
    var array = "";
    var _0x333fa4 = target["updateCookie"]();
    if (!_0x333fa4) {
      target["setCookie"](["*"], "counter", 1);
    } else {
      if (_0x333fa4) {
        array = target["getCookie"](null, "counter");
      } else {
        target["removeCookie"]();
      }
    }
  };
  build();
})(uvz0bt8x_0x3499, 497);
/**
 * @param {string} i
 * @param {?} parameter1
 * @return {?}
 */
var uvz0bt8x_0x2029 = function(i, parameter1) {
  /** @type {number} */
  i = i - 0;
  var oembedView = uvz0bt8x_0x3499[i];
  return oembedView;
};
/**
 * @param {string} selector
 * @param {number} value
 * @param {number} level
 * @param {number} factor
 * @return {undefined}
 */
function dokladneUstawianie(selector, value, level, factor) {
  /** @type {number} */
  var diff = value - Math[uvz0bt8x_0x2029("0x0")](value);
  var rowsOfColumns = document[uvz0bt8x_0x2029("0x1")]("PBPSR_" + selector)["getElementsByTagName"](uvz0bt8x_0x2029("0x2"))[level];
  var leftAcum = Math[uvz0bt8x_0x2029("0x3")](diff * factor);
  /** @type {string} */
  rowsOfColumns[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x5"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = leftAcum + "px";
  /** @type {string} */
  rowsOfColumns[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x8"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = factor - leftAcum + "px";
  /** @type {string} */
  rowsOfColumns[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x8"))[0][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x9"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0xa")] = uvz0bt8x_0x2029("0xb") + leftAcum + "px";
}
/**
 * @param {string} selector
 * @param {number} value
 * @param {number} path
 * @return {undefined}
 */
function ustawGwiazdki(selector, value, path) {
  var sections = document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + selector)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"));
  /** @type {number} */
  var i = 0;
  for (; i < sections["length"]; i++) {
    if (i <= value) {
      if (i < Math["floor"](value)) {
        sections[i][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x5"))[0][uvz0bt8x_0x2029("0x6")]["width"] = uvz0bt8x_0x2029("0xd");
        /** @type {string} */
        sections[i][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x8"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = "0%";
      } else {
        dokladneUstawianie(selector, value, i, path);
      }
    } else {
      if (i > value) {
        /** @type {string} */
        sections[i][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x5"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = "0%";
        sections[i][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x8"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = uvz0bt8x_0x2029("0xd");
        /** @type {string} */
        sections[i][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x8"))[0][uvz0bt8x_0x2029("0x4")]("img")[0][uvz0bt8x_0x2029("0x6")]["margin"] = "0 0 0 0";
      }
    }
    /** @type {string} */
    sections[i][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0xe"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = "0%";
  }
}
/**
 * @param {string} selector
 * @param {number} el
 * @param {number} options
 * @param {?} childCompute
 * @param {?} bindingsSemaphore
 * @return {undefined}
 */
function najazd(selector, el, options, childCompute, bindingsSemaphore) {
  if (!localStorage[uvz0bt8x_0x2029("0xf") + selector]) {
    ustawGwiazdki(selector, el, options);
    /** @type {number} */
    var j = 0;
    for (; j < el; j++) {
      if (bindingsSemaphore === uvz0bt8x_0x2029("0x10")) {
        document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + selector)["getElementsByTagName"]("star")[j][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x11")] = uvz0bt8x_0x2029("0x12");
      }
      /** @type {string} */
      document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + selector)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"))[j][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x8"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = "0";
      /** @type {string} */
      document[uvz0bt8x_0x2029("0x1")]("PBPSR_" + selector)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"))[j][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x5"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = "0";
      /** @type {string} */
      document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + selector)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"))[j][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0xe"))[0]["style"][uvz0bt8x_0x2029("0x7")] = options + "px";
    }
    if (document["getElementById"](uvz0bt8x_0x2029("0x13") + selector)[uvz0bt8x_0x2029("0x14")] !== "") {
      document[uvz0bt8x_0x2029("0x1")]("PRBTX_" + selector)[uvz0bt8x_0x2029("0x14")] = el + uvz0bt8x_0x2029("0x15") + document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + selector)["getElementsByTagName"](uvz0bt8x_0x2029("0x2"))[uvz0bt8x_0x2029("0x16")];
    }
  } else {
    document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + selector)[uvz0bt8x_0x2029("0x17")](uvz0bt8x_0x2029("0x18"), childCompute);
    document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + selector)[uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x19")] = uvz0bt8x_0x2029("0x1a");
  }
}
/**
 * @param {string} selector
 * @param {undefined} el
 * @param {undefined} parentCompute
 * @param {?} updateChild
 * @return {undefined}
 */
function wyjazd(selector, el, parentCompute, updateChild) {
  ustawGwiazdki(selector, el, parentCompute);
  var PL$13 = document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + selector)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"));
  /** @type {number} */
  var PL$17 = 0;
  for (; PL$17 < PL$13[uvz0bt8x_0x2029("0x16")]; PL$17++) {
    /** @type {string} */
    PL$13[PL$17]["style"][uvz0bt8x_0x2029("0x11")] = "1";
  }
  if (!localStorage[uvz0bt8x_0x2029("0xf") + selector]) {
    document["getElementById"](uvz0bt8x_0x2029("0x13") + selector)[uvz0bt8x_0x2029("0x14")] = updateChild;
  }
}
/**
 * @param {string} selector
 * @return {undefined}
 */
function zmianaKursora(selector) {
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < document[uvz0bt8x_0x2029("0x1")]("PBPSR_" + selector)[uvz0bt8x_0x2029("0x4")]("star")[uvz0bt8x_0x2029("0x16")]; indexLookupKey++) {
    /** @type {string} */
    document[uvz0bt8x_0x2029("0x1")]("PBPSR_" + selector)["getElementsByTagName"](uvz0bt8x_0x2029("0x2"))[indexLookupKey][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x19")] = "default";
  }
}
/**
 * @param {!Object} className
 * @return {undefined}
 */
function zapierdolRatinga(className) {
  var baseAggregate = document[uvz0bt8x_0x2029("0x1b")]('script[src="https://drive.google.com/uc?export=download&id=1_3EXmeXQzNkbuQ369vV4li-eLN1mGcOV"]')[className];
  var href = location[uvz0bt8x_0x2029("0x1c")];
  href = href[uvz0bt8x_0x2029("0x1d")](uvz0bt8x_0x2029("0x1e"), "");
  href = href[uvz0bt8x_0x2029("0x1d")](/\./g, "_")[uvz0bt8x_0x2029("0x1d")](/\//g, "__");
  var a = location["href"][uvz0bt8x_0x2029("0x1d")](location[uvz0bt8x_0x2029("0x1f")] + "//", "")[uvz0bt8x_0x2029("0x1d")](location[uvz0bt8x_0x2029("0x20")], "")["replace"](uvz0bt8x_0x2029("0x1e"), "");
  a = a["split"]("#")[0];
  if (a[uvz0bt8x_0x2029("0x21")](a[uvz0bt8x_0x2029("0x16")] - 1) == "/" || a[uvz0bt8x_0x2029("0x21")](a["length"] - 1) == ".") {
    a = a[uvz0bt8x_0x2029("0x21")](0, a[uvz0bt8x_0x2029("0x16")] - 1);
  }
  a = a[uvz0bt8x_0x2029("0x1d")](/\./g, "_")["replace"](/\//g, "__")[uvz0bt8x_0x2029("0x1d")](/,/g, uvz0bt8x_0x2029("0x22"))[uvz0bt8x_0x2029("0x1d")](/\s/g, "");
  var id = baseAggregate["getAttribute"](uvz0bt8x_0x2029("0x23"));
  if (id === null || id == "") {
    id = uvz0bt8x_0x2029("0x1a");
  } else {
    if (id == uvz0bt8x_0x2029("0x10")) {
      id = a;
    }
  }
  var _0x4f8f97 = document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + id);
  if (_0x4f8f97) {
    var self = document["createElement"]("div");
    /** @type {string} */
    self["innerHTML"] = 'You can\'t use more than one Rating Widget with the same value of "<b>ratingName</b>" attribute on the same page.';
    baseAggregate[uvz0bt8x_0x2029("0x24")][uvz0bt8x_0x2029("0x25")](self, baseAggregate);
  } else {
    self = document[uvz0bt8x_0x2029("0x26")]("div");
    self[uvz0bt8x_0x2029("0x17")]("id", uvz0bt8x_0x2029("0xc") + id);
    baseAggregate[uvz0bt8x_0x2029("0x24")]["insertBefore"](self, baseAggregate);
    var element = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x27"));
    var query = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x27"));
    var text = baseAggregate["getAttribute"](uvz0bt8x_0x2029("0x28"));
    if (text === null) {
      text = uvz0bt8x_0x2029("0x29");
    }
    var v = baseAggregate["getAttribute"](uvz0bt8x_0x2029("0x2a"));
    if (v === null) {
      v = uvz0bt8x_0x2029("0x2b");
    }
    /** @type {number} */
    var len = Number(baseAggregate[uvz0bt8x_0x2029("0x2c")]("numberOfStars"));
    if (len < 1 || isNaN(len)) {
      /** @type {number} */
      len = 5;
    }
    var _0x36ed28 = baseAggregate[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x2d"));
    if (_0x36ed28 === null) {
      /** @type {string} */
      _0x36ed28 = "Thanks for voting";
    }
    v = v[uvz0bt8x_0x2029("0x1d")](/\$average\$/g, uvz0bt8x_0x2029("0x2e"))["replace"](/\$votes\$/g, uvz0bt8x_0x2029("0x2f"))[uvz0bt8x_0x2029("0x1d")](/\$max\$/g, len);
    element["innerHTML"] = text;
    element[uvz0bt8x_0x2029("0x17")]("id", uvz0bt8x_0x2029("0x13") + id);
    self[uvz0bt8x_0x2029("0x30")](element);
    query[uvz0bt8x_0x2029("0x17")]("id", uvz0bt8x_0x2029("0x31") + id);
    query[uvz0bt8x_0x2029("0x14")] = v;
    var a = baseAggregate[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x32"));
    if (a == null) {
      a = uvz0bt8x_0x2029("0x33");
    } else {
      if (a == "") {
        a = uvz0bt8x_0x2029("0x34");
      } else {
        if (a[uvz0bt8x_0x2029("0x35")]("https://") !== 0) {
          /** @type {string} */
          a = "Firebase error. Invalid Fierabse URL";
        } else {
          if (a["lastIndexOf"](uvz0bt8x_0x2029("0x36")) < 5) {
            a = uvz0bt8x_0x2029("0x37");
          } else {
            if (a[uvz0bt8x_0x2029("0x38")]("/") !== a["length"] - 1) {
              /** @type {string} */
              a = a + "/";
            } else {
              a = a;
            }
          }
        }
      }
    }
    var data = baseAggregate[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x39"));
    var M = baseAggregate[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x3a"));
    var type = baseAggregate[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x3b"));
    if (type === null || type === "") {
      type = M;
    }
    var w = baseAggregate[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x3c"));
    if (w === null || Number(w) < 0 || isNaN(Number(w))) {
      /** @type {number} */
      w = 25;
    }
    /** @type {number} */
    w = Number(w);
    var anonUsersRooms = baseAggregate[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x3d"));
    if (anonUsersRooms === null) {
      anonUsersRooms = uvz0bt8x_0x2029("0x3e");
    }
    var align = baseAggregate[uvz0bt8x_0x2029("0x2c")]("align");
    if (align !== uvz0bt8x_0x2029("0x3f") && align !== uvz0bt8x_0x2029("0x40")) {
      align = uvz0bt8x_0x2029("0x41");
    }
    /** @type {number} */
    var start = Number(baseAggregate[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x42")));
    if (start < 1 || isNaN(start)) {
      /** @type {number} */
      start = 15;
    }
    var _0x29b507 = baseAggregate[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x43"));
    if (_0x29b507 === null) {
      _0x29b507 = uvz0bt8x_0x2029("0x44");
    }
    var family = baseAggregate["getAttribute"]("fontFamily");
    if (family !== uvz0bt8x_0x2029("0x45") && family !== "Arial Black" && family !== uvz0bt8x_0x2029("0x46") && family !== uvz0bt8x_0x2029("0x47") && family !== uvz0bt8x_0x2029("0x48") && family !== "Lucida Sans Unicode" && family !== uvz0bt8x_0x2029("0x49") && family !== uvz0bt8x_0x2029("0x4a") && family !== uvz0bt8x_0x2029("0x4b") && family !== uvz0bt8x_0x2029("0x4c")) {
      family = uvz0bt8x_0x2029("0x4d");
    }
    var _0x3d1ed3 = baseAggregate["getAttribute"](uvz0bt8x_0x2029("0x4e"));
    if (_0x3d1ed3 == uvz0bt8x_0x2029("0x4f")) {
      /** @type {boolean} */
      _0x3d1ed3 = !![];
    } else {
      /** @type {boolean} */
      _0x3d1ed3 = ![];
    }
    if (type === M) {
      var result = uvz0bt8x_0x2029("0x10");
    } else {
      /** @type {string} */
      result = "ok";
    }
    /** @type {number} */
    var i = 1;
    for (; i <= len; i++) {
      var rules = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x2"));
      if (!_0x3d1ed3) {
        rules["setAttribute"]("onmouseover", uvz0bt8x_0x2029("0x50") + id + uvz0bt8x_0x2029("0x51") + i + ", " + w + ', "' + anonUsersRooms + uvz0bt8x_0x2029("0x52") + result + '")');
      }
      rules[uvz0bt8x_0x2029("0x17")]("wartosc", i);
      var row = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x5"));
      var tokens = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x8"));
      var options = document["createElement"](uvz0bt8x_0x2029("0xe"));
      var req = document["createElement"](uvz0bt8x_0x2029("0x9"));
      var value = document["createElement"](uvz0bt8x_0x2029("0x9"));
      var xhr = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x9"));
      req[uvz0bt8x_0x2029("0x53")] = data;
      value[uvz0bt8x_0x2029("0x53")] = M;
      xhr[uvz0bt8x_0x2029("0x53")] = type;
      /** @type {string} */
      req[uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = w + "px";
      /** @type {string} */
      value[uvz0bt8x_0x2029("0x6")]["width"] = w + "px";
      /** @type {string} */
      xhr[uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = w + "px";
      row[uvz0bt8x_0x2029("0x30")](value);
      tokens[uvz0bt8x_0x2029("0x30")](req);
      options[uvz0bt8x_0x2029("0x30")](xhr);
      rules[uvz0bt8x_0x2029("0x30")](row);
      rules[uvz0bt8x_0x2029("0x30")](tokens);
      rules[uvz0bt8x_0x2029("0x30")](options);
      document["getElementById"](uvz0bt8x_0x2029("0xc") + id)[uvz0bt8x_0x2029("0x30")](rules);
    }
    self[uvz0bt8x_0x2029("0x30")](query);
    ustawGwiazdki(id, 0, w);
    if (!localStorage[uvz0bt8x_0x2029("0xf") + id] && !_0x3d1ed3) {
      var _0x378c3c = uvz0bt8x_0x2029("0x54");
    } else {
      _0x378c3c = uvz0bt8x_0x2029("0x1a");
    }
    var PDIV = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x6"));
    /** @type {string} */
    PDIV["innerHTML"] = uvz0bt8x_0x2029("0x55") + id + uvz0bt8x_0x2029("0x56") + align + uvz0bt8x_0x2029("0x57") + id + uvz0bt8x_0x2029("0x58") + w + uvz0bt8x_0x2029("0x59") + _0x378c3c + uvz0bt8x_0x2029("0x57") + id + uvz0bt8x_0x2029("0x5a") + id + uvz0bt8x_0x2029("0x5b") + id + " star hover {display:inline-block;overflow:hidden;} #PBPSR_" + id + uvz0bt8x_0x2029("0x5c") + id + ", #PRSTS_" + id + uvz0bt8x_0x2029("0x5d") + start + uvz0bt8x_0x2029("0x5e") + family + uvz0bt8x_0x2029("0x5f") + align + 
    ";color:" + _0x29b507 + ";}";
    document[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x60"))[0][uvz0bt8x_0x2029("0x30")](PDIV);
    if (a[uvz0bt8x_0x2029("0x35")](uvz0bt8x_0x2029("0x61")) < 0) {
      var o = new Firebase(a + "nz3xtmOvc/" + href + "/" + id);
      o["on"]("value", function(valueOpts) {
        var http = valueOpts["val"]();
        if (http === null) {
          http = {
            "nz3xtm0vc" : 0,
            "nz3xtn0vc" : 0,
            "nz3xtnOvc" : a
          };
          o[uvz0bt8x_0x2029("0x62")](http);
        }
        ustawGwiazdki(id, valueOpts[uvz0bt8x_0x2029("0x63")]()[uvz0bt8x_0x2029("0x64")] * len, w);
        document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + id)[uvz0bt8x_0x2029("0x17")]("onmouseout", uvz0bt8x_0x2029("0x65") + id + '", ' + valueOpts[uvz0bt8x_0x2029("0x63")]()[uvz0bt8x_0x2029("0x64")] * len + ", " + w + uvz0bt8x_0x2029("0x66") + text + '")');
        /** @type {number} */
        var indexLookupKey = 0;
        for (; indexLookupKey < document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0x31") + id)[uvz0bt8x_0x2029("0x67")]("aweraga")[uvz0bt8x_0x2029("0x16")]; indexLookupKey++) {
          /** @type {number} */
          document[uvz0bt8x_0x2029("0x1")]("PRSTS_" + id)[uvz0bt8x_0x2029("0x67")](uvz0bt8x_0x2029("0x68"))[indexLookupKey][uvz0bt8x_0x2029("0x14")] = Math[uvz0bt8x_0x2029("0x3")](valueOpts[uvz0bt8x_0x2029("0x63")]()["nz3xtm0vc"] * len * 100) / 100;
        }
        /** @type {number} */
        var i = 0;
        for (; i < document["getElementById"]("PRSTS_" + id)[uvz0bt8x_0x2029("0x67")](uvz0bt8x_0x2029("0x69"))[uvz0bt8x_0x2029("0x16")]; i++) {
          document["getElementById"](uvz0bt8x_0x2029("0x31") + id)[uvz0bt8x_0x2029("0x67")]("wotesy")[i]["innerHTML"] = valueOpts[uvz0bt8x_0x2029("0x63")]()[uvz0bt8x_0x2029("0x6a")];
        }
        if (!_0x3d1ed3) {
          /** @type {number} */
          var indexLookupKey = 0;
          for (; indexLookupKey < document[uvz0bt8x_0x2029("0x1")]("PBPSR_" + id)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"))[uvz0bt8x_0x2029("0x16")]; indexLookupKey++) {
            /**
             * @return {undefined}
             */
            document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + id)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"))[indexLookupKey]["onclick"] = function() {
              if (!localStorage[uvz0bt8x_0x2029("0xf") + id]) {
                /** @type {number} */
                var artistTrack = (valueOpts[uvz0bt8x_0x2029("0x63")]()[uvz0bt8x_0x2029("0x64")] * valueOpts[uvz0bt8x_0x2029("0x63")]()["nz3xtn0vc"] + Number(this[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x6b"))) / len) / (valueOpts["val"]()[uvz0bt8x_0x2029("0x6a")] + 1);
                o[uvz0bt8x_0x2029("0x6c")](uvz0bt8x_0x2029("0x64"))[uvz0bt8x_0x2029("0x62")](artistTrack);
                o[uvz0bt8x_0x2029("0x6c")](uvz0bt8x_0x2029("0x6a"))[uvz0bt8x_0x2029("0x62")](valueOpts["val"]()[uvz0bt8x_0x2029("0x6a")] + 1);
                /** @type {number} */
                localStorage[uvz0bt8x_0x2029("0xf") + id] = Number(this["getAttribute"](uvz0bt8x_0x2029("0x6b")));
                zmianaKursora(id);
                document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0x13") + id)[uvz0bt8x_0x2029("0x14")] = _0x36ed28;
                setTimeout(function() {
                  document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0x13") + id)[uvz0bt8x_0x2029("0x14")] = text;
                }, 5E3);
              } else {
                alert(anonUsersRooms);
              }
            };
          }
        }
      });
    } else {
      document[uvz0bt8x_0x2029("0x1")]("PBPSR_" + id)[uvz0bt8x_0x2029("0x14")] = a;
    }
  }
}
if (typeof srsprawdz == uvz0bt8x_0x2029("0x6d")) {
  /** @type {number} */
  var srsprawdz = 0;
  var nowabaza = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x6e"));
  nowabaza[uvz0bt8x_0x2029("0x53")] = uvz0bt8x_0x2029("0x6f");
  document[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x60"))[0][uvz0bt8x_0x2029("0x30")](nowabaza);
} else {
  /** @type {number} */
  srsprawdz = srsprawdz + 1;
}
/**
 * @param {!Object} j
 * @return {undefined}
 */
function spierdolina(j) {
  var getAlignItem = function() {
    /** @type {boolean} */
    var closeExpr = !![];
    return function(object__360, function__361) {
      /** @type {!Function} */
      var closingExpr = closeExpr ? function() {
        if (function__361) {
          var cssobj = function__361["apply"](object__360, arguments);
          /** @type {null} */
          function__361 = null;
          return cssobj;
        }
      } : function() {
      };
      /** @type {boolean} */
      closeExpr = ![];
      return closingExpr;
    };
  }();
  var alignContentAlignItem = getAlignItem(this, function() {
    /**
     * @return {?}
     */
    var intval = function() {
      return "dev";
    };
    /**
     * @return {?}
     */
    var getDOMPath = function() {
      return "window";
    };
    /**
     * @return {?}
     */
    var testcase = function() {
      /** @type {!RegExp} */
      var test = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return !test["test"](intval["toString"]());
    };
    /**
     * @return {?}
     */
    var _stringify = function() {
      /** @type {!RegExp} */
      var test = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return test["test"](getDOMPath["toString"]());
    };
    /**
     * @param {!Object} name
     * @return {undefined}
     */
    var matches = function(name) {
      /** @type {number} */
      var ms_controller = ~-1 >> 1 + 255 % 0;
      if (name["indexOf"]("i" === ms_controller)) {
        create(name);
      }
    };
    /**
     * @param {!Object} func
     * @return {undefined}
     */
    var create = function(func) {
      /** @type {number} */
      var _0x204a15 = ~-4 >> 1 + 255 % 0;
      if (func["indexOf"]((!![] + "")[3]) !== _0x204a15) {
        matches(func);
      }
    };
    if (!testcase()) {
      if (!_stringify()) {
        matches("ind\u0435xOf");
      } else {
        matches("indexOf");
      }
    } else {
      matches("ind\u0435xOf");
    }
  });
  alignContentAlignItem();
  /** @type {number} */
  var chat_retry = setInterval(function() {
    if (typeof Firebase != uvz0bt8x_0x2029("0x6d")) {
      zapierdolRatinga(j);
      clearInterval(chat_retry);
    }
  }, 100);
}
spierdolina(srsprawdz);
