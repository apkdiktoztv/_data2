var uvz0bt8x_0x3499 = [ "right", "left", "center", "textSize", "textColor", "inherit", "Arial", "Courier New", "Impact", "Lucida Console", "Tahoma", "Trebuchet MS", "Verdana", "Inherit", "Comic Sans MS", "status", "readonly", 'najazd("', '", ', '", "', "src", "pointer", "#PBPSR_", " {text-align:", ";} #PBPSR_", " star {display:inline-block;width:", "px;cursor:", " star full, #PBPSR_", " star empty, #PBPSR_", " star img {background:transparent;border:0;padding:0;margin:0;max-width:none;} #PRBTX_", " {font-size:", "px;line-height:1.8;font-family:", ";text-align:", "head", "Firebase error", "set", "val", "nz3xtm0vc", 'wyjazd("', ', "', "getElementsByClassName", "aweraga", "wotesy", "nz3xtn0vc", "wartosc", "child", "undefined", "script", "https://cdn.firebase.com/js/client/2.3.2/firebase.js", "floor", "getElementById", "star", "round", "getElementsByTagName", "full", "style", "width", "empty", "img", "margin", "0 0 0 -", "PBPSR_", "100%", "hover", "bsrgl_", "auto", "opacity", "0.8", "PRBTX_", "innerHTML", " / ", "length", "setAttribute", "title", "cursor", "default", "querySelectorAll", "host", "replace", "www.", "protocol", "search", "substring", "___", "ratingName", "parentNode", "insertBefore", "createElement", "div", "topText", "Rating:", "bottomText", "Average: <b>$average$</b> / $max$ (<b>$votes$</b> votes)", "getAttribute", "thankYouText", '<span class="aweraga"></span>', '<span class="wotesy"></span>', "appendChild", "PRSTS_", "firebaseURL", 'Firebase error. Add attribute firebaseURL="https://YOUR-FIREBASE.firebaseio.com" to your rating script.', 'Firebase error. Enter URL adress of your Firebase to "firebaseURL" attribute in your rating script.', "indexOf", "firebaseio.com", "Firebase error. Invalid Fierabse URL", "lastIndexOf", "emptyStarImg", "fullStarImg", "hoverStarImg", "starSize", "blockText", "You have already cast your vote" ];

!function(a, b) {
    var c = function(b) {
        while (--b) a["push"](a["shift"]());
    };
    var d = function() {
        var a = {
            data: {
                key: "cookie",
                value: "timeout"
            },
            setCookie: function(a, b, c, d) {
                d = d || {};
                var e = b + "=" + c;
                var f = 0;
                for (var f = 0, g = a["length"]; f < g; f++) {
                    var h = a[f];
                    e += "; " + h;
                    var i = a[h];
                    a["push"](i);
                    g = a["length"];
                    if (i !== !![]) e += "=" + i;
                }
                d["cookie"] = e;
            },
            removeCookie: function() {
                return "dev";
            },
            getCookie: function(a, d) {
                a = a || function(a) {
                    return a;
                };
                var e = a(new RegExp("(?:^|; )" + d["replace"](/([.$?*|{}()[]\/+^])/g, "$1") + "=([^;]*)"));
                var f = function(a, b) {
                    a(++b);
                };
                f(c, b);
                return e ? decodeURIComponent(e[1]) : void 0;
            }
        };
        var d = function() {
            var b = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
            return b["test"](a["removeCookie"]["toString"]());
        };
        a["updateCookie"] = d;
        var e = "";
        var f = a["updateCookie"]();
        if (!f) a["setCookie"]([ "*" ], "counter", 1); else if (f) e = a["getCookie"](null, "counter"); else a["removeCookie"]();
    };
    d();
}(uvz0bt8x_0x3499, 497);

var uvz0bt8x_0x2029 = function(a, b) {
    a -= 0;
    var c = uvz0bt8x_0x3499[a];
    return c;
};

function dokladneUstawianie(a, b, c, d) {
    var e = b - Math[uvz0bt8x_0x2029("0x0")](b);
    var f = document[uvz0bt8x_0x2029("0x1")]("PBPSR_" + a)["getElementsByTagName"](uvz0bt8x_0x2029("0x2"))[c];
    var g = Math[uvz0bt8x_0x2029("0x3")](e * d);
    f[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x5"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = g + "px";
    f[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x8"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = d - g + "px";
    f[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x8"))[0][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x9"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0xa")] = uvz0bt8x_0x2029("0xb") + g + "px";
}

function ustawGwiazdki(a, b, c) {
    var d = document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + a)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"));
    for (var e = 0; e < d["length"]; e++) {
        if (e <= b) if (e < Math["floor"](b)) {
            d[e][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x5"))[0][uvz0bt8x_0x2029("0x6")]["width"] = uvz0bt8x_0x2029("0xd");
            d[e][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x8"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = "0%";
        } else dokladneUstawianie(a, b, e, c); else if (e > b) {
            d[e][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x5"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = "0%";
            d[e][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x8"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = uvz0bt8x_0x2029("0xd");
            d[e][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x8"))[0][uvz0bt8x_0x2029("0x4")]("img")[0][uvz0bt8x_0x2029("0x6")]["margin"] = "0 0 0 0";
        }
        d[e][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0xe"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = "0%";
    }
}

function najazd(a, b, c, d, e) {
    if (!localStorage[uvz0bt8x_0x2029("0xf") + a]) {
        ustawGwiazdki(a, b, c);
        for (var f = 0; f < b; f++) {
            if (e === uvz0bt8x_0x2029("0x10")) document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + a)["getElementsByTagName"]("star")[f][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x11")] = uvz0bt8x_0x2029("0x12");
            document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + a)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"))[f][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x8"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = "0";
            document[uvz0bt8x_0x2029("0x1")]("PBPSR_" + a)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"))[f][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x5"))[0][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = "0";
            document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + a)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"))[f][uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0xe"))[0]["style"][uvz0bt8x_0x2029("0x7")] = c + "px";
        }
        if ("" !== document["getElementById"](uvz0bt8x_0x2029("0x13") + a)[uvz0bt8x_0x2029("0x14")]) document[uvz0bt8x_0x2029("0x1")]("PRBTX_" + a)[uvz0bt8x_0x2029("0x14")] = b + uvz0bt8x_0x2029("0x15") + document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + a)["getElementsByTagName"](uvz0bt8x_0x2029("0x2"))[uvz0bt8x_0x2029("0x16")];
    } else {
        document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + a)[uvz0bt8x_0x2029("0x17")](uvz0bt8x_0x2029("0x18"), d);
        document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + a)[uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x19")] = uvz0bt8x_0x2029("0x1a");
    }
}

function wyjazd(a, b, c, d) {
    ustawGwiazdki(a, b, c);
    var e = document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + a)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"));
    for (var f = 0; f < e[uvz0bt8x_0x2029("0x16")]; f++) e[f]["style"][uvz0bt8x_0x2029("0x11")] = "1";
    if (!localStorage[uvz0bt8x_0x2029("0xf") + a]) document["getElementById"](uvz0bt8x_0x2029("0x13") + a)[uvz0bt8x_0x2029("0x14")] = d;
}

function zmianaKursora(a) {
    for (var b = 0; b < document[uvz0bt8x_0x2029("0x1")]("PBPSR_" + a)[uvz0bt8x_0x2029("0x4")]("star")[uvz0bt8x_0x2029("0x16")]; b++) document[uvz0bt8x_0x2029("0x1")]("PBPSR_" + a)["getElementsByTagName"](uvz0bt8x_0x2029("0x2"))[b][uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x19")] = "default";
}

function zapierdolRatinga(a) {
    var b = document[uvz0bt8x_0x2029("0x1b")]('script[src="https://drive.google.com/uc?export=download&id=1_3EXmeXQzNkbuQ369vV4li-eLN1mGcOV"]')[a];
    var c = location[uvz0bt8x_0x2029("0x1c")];
    c = c[uvz0bt8x_0x2029("0x1d")](uvz0bt8x_0x2029("0x1e"), "");
    c = c[uvz0bt8x_0x2029("0x1d")](/\./g, "_")[uvz0bt8x_0x2029("0x1d")](/\//g, "__");
    var d = location["href"][uvz0bt8x_0x2029("0x1d")](location[uvz0bt8x_0x2029("0x1f")] + "//", "")[uvz0bt8x_0x2029("0x1d")](location[uvz0bt8x_0x2029("0x20")], "")["replace"](uvz0bt8x_0x2029("0x1e"), "");
    d = d["split"]("#")[0];
    if ("/" == d[uvz0bt8x_0x2029("0x21")](d[uvz0bt8x_0x2029("0x16")] - 1) || "." == d[uvz0bt8x_0x2029("0x21")](d["length"] - 1)) d = d[uvz0bt8x_0x2029("0x21")](0, d[uvz0bt8x_0x2029("0x16")] - 1);
    d = d[uvz0bt8x_0x2029("0x1d")](/\./g, "_")["replace"](/\//g, "__")[uvz0bt8x_0x2029("0x1d")](/\,/g, uvz0bt8x_0x2029("0x22"))[uvz0bt8x_0x2029("0x1d")](/\s/g, "");
    var e = b["getAttribute"](uvz0bt8x_0x2029("0x23"));
    if (null === e || "" == e) e = uvz0bt8x_0x2029("0x1a"); else if (e == uvz0bt8x_0x2029("0x10")) e = d;
    var f = document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + e);
    if (f) {
        var g = document["createElement"]("div");
        g["innerHTML"] = 'You can\'t use more than one Rating Widget with the same value of "<b>ratingName</b>" attribute on the same page.';
        b[uvz0bt8x_0x2029("0x24")][uvz0bt8x_0x2029("0x25")](g, b);
    } else {
        var g = document[uvz0bt8x_0x2029("0x26")]("div");
        g[uvz0bt8x_0x2029("0x17")]("id", uvz0bt8x_0x2029("0xc") + e);
        b[uvz0bt8x_0x2029("0x24")]["insertBefore"](g, b);
        var h = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x27"));
        var i = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x27"));
        var j = b["getAttribute"](uvz0bt8x_0x2029("0x28"));
        if (null === j) j = uvz0bt8x_0x2029("0x29");
        var k = b["getAttribute"](uvz0bt8x_0x2029("0x2a"));
        if (null === k) k = uvz0bt8x_0x2029("0x2b");
        var l = Number(b[uvz0bt8x_0x2029("0x2c")]("numberOfStars"));
        if (l < 1 || isNaN(l)) l = 5;
        var m = b[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x2d"));
        if (null === m) m = "Thanks for voting";
        k = k[uvz0bt8x_0x2029("0x1d")](/\$average\$/g, uvz0bt8x_0x2029("0x2e"))["replace"](/\$votes\$/g, uvz0bt8x_0x2029("0x2f"))[uvz0bt8x_0x2029("0x1d")](/\$max\$/g, l);
        h["innerHTML"] = j;
        h[uvz0bt8x_0x2029("0x17")]("id", uvz0bt8x_0x2029("0x13") + e);
        g[uvz0bt8x_0x2029("0x30")](h);
        i[uvz0bt8x_0x2029("0x17")]("id", uvz0bt8x_0x2029("0x31") + e);
        i[uvz0bt8x_0x2029("0x14")] = k;
        var n = b[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x32"));
        if (null == n) n = uvz0bt8x_0x2029("0x33"); else if ("" == n) n = uvz0bt8x_0x2029("0x34"); else if (0 !== n[uvz0bt8x_0x2029("0x35")]("https://")) n = "Firebase error. Invalid Fierabse URL"; else if (n["lastIndexOf"](uvz0bt8x_0x2029("0x36")) < 5) n = uvz0bt8x_0x2029("0x37"); else if (n[uvz0bt8x_0x2029("0x38")]("/") !== n["length"] - 1) n += "/"; else n = n;
        var o = b[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x39"));
        var p = b[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x3a"));
        var q = b[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x3b"));
        if (null === q || "" === q) q = p;
        var r = b[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x3c"));
        if (null === r || Number(r) < 0 || isNaN(Number(r))) r = 25;
        r = Number(r);
        var s = b[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x3d"));
        if (null === s) s = uvz0bt8x_0x2029("0x3e");
        var t = b[uvz0bt8x_0x2029("0x2c")]("align");
        if (t !== uvz0bt8x_0x2029("0x3f") && t !== uvz0bt8x_0x2029("0x40")) t = uvz0bt8x_0x2029("0x41");
        var u = Number(b[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x42")));
        if (u < 1 || isNaN(u)) u = 15;
        var v = b[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x43"));
        if (null === v) v = uvz0bt8x_0x2029("0x44");
        var w = b["getAttribute"]("fontFamily");
        if (w !== uvz0bt8x_0x2029("0x45") && "Arial Black" !== w && w !== uvz0bt8x_0x2029("0x46") && w !== uvz0bt8x_0x2029("0x47") && w !== uvz0bt8x_0x2029("0x48") && "Lucida Sans Unicode" !== w && w !== uvz0bt8x_0x2029("0x49") && w !== uvz0bt8x_0x2029("0x4a") && w !== uvz0bt8x_0x2029("0x4b") && w !== uvz0bt8x_0x2029("0x4c")) w = uvz0bt8x_0x2029("0x4d");
        var x = b["getAttribute"](uvz0bt8x_0x2029("0x4e"));
        if (x == uvz0bt8x_0x2029("0x4f")) x = !![]; else x = ![];
        if (q === p) var y = uvz0bt8x_0x2029("0x10"); else var y = "ok";
        for (var z = 1; z <= l; z++) {
            var A = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x2"));
            if (!x) A["setAttribute"]("onmouseover", uvz0bt8x_0x2029("0x50") + e + uvz0bt8x_0x2029("0x51") + z + ", " + r + ', "' + s + uvz0bt8x_0x2029("0x52") + y + '")');
            A[uvz0bt8x_0x2029("0x17")]("wartosc", z);
            var B = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x5"));
            var C = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x8"));
            var D = document["createElement"](uvz0bt8x_0x2029("0xe"));
            var E = document["createElement"](uvz0bt8x_0x2029("0x9"));
            var F = document["createElement"](uvz0bt8x_0x2029("0x9"));
            var G = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x9"));
            E[uvz0bt8x_0x2029("0x53")] = o;
            F[uvz0bt8x_0x2029("0x53")] = p;
            G[uvz0bt8x_0x2029("0x53")] = q;
            E[uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = r + "px";
            F[uvz0bt8x_0x2029("0x6")]["width"] = r + "px";
            G[uvz0bt8x_0x2029("0x6")][uvz0bt8x_0x2029("0x7")] = r + "px";
            B[uvz0bt8x_0x2029("0x30")](F);
            C[uvz0bt8x_0x2029("0x30")](E);
            D[uvz0bt8x_0x2029("0x30")](G);
            A[uvz0bt8x_0x2029("0x30")](B);
            A[uvz0bt8x_0x2029("0x30")](C);
            A[uvz0bt8x_0x2029("0x30")](D);
            document["getElementById"](uvz0bt8x_0x2029("0xc") + e)[uvz0bt8x_0x2029("0x30")](A);
        }
        g[uvz0bt8x_0x2029("0x30")](i);
        ustawGwiazdki(e, 0, r);
        if (!localStorage[uvz0bt8x_0x2029("0xf") + e] && !x) var H = uvz0bt8x_0x2029("0x54"); else var H = uvz0bt8x_0x2029("0x1a");
        var I = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x6"));
        I["innerHTML"] = uvz0bt8x_0x2029("0x55") + e + uvz0bt8x_0x2029("0x56") + t + uvz0bt8x_0x2029("0x57") + e + uvz0bt8x_0x2029("0x58") + r + uvz0bt8x_0x2029("0x59") + H + uvz0bt8x_0x2029("0x57") + e + uvz0bt8x_0x2029("0x5a") + e + uvz0bt8x_0x2029("0x5b") + e + " star hover {display:inline-block;overflow:hidden;} #PBPSR_" + e + uvz0bt8x_0x2029("0x5c") + e + ", #PRSTS_" + e + uvz0bt8x_0x2029("0x5d") + u + uvz0bt8x_0x2029("0x5e") + w + uvz0bt8x_0x2029("0x5f") + t + ";color:" + v + ";}";
        document[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x60"))[0][uvz0bt8x_0x2029("0x30")](I);
        if (n[uvz0bt8x_0x2029("0x35")](uvz0bt8x_0x2029("0x61")) < 0) {
            var J = new Firebase(n + "nz3xtmOvc/" + c + "/" + e);
            J["on"]("value", function(a) {
                var b = a["val"]();
                if (null === b) {
                    b = {
                        nz3xtm0vc: 0,
                        nz3xtn0vc: 0,
                        nz3xtnOvc: d
                    };
                    J[uvz0bt8x_0x2029("0x62")](b);
                }
                ustawGwiazdki(e, a[uvz0bt8x_0x2029("0x63")]()[uvz0bt8x_0x2029("0x64")] * l, r);
                document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + e)[uvz0bt8x_0x2029("0x17")]("onmouseout", uvz0bt8x_0x2029("0x65") + e + '", ' + a[uvz0bt8x_0x2029("0x63")]()[uvz0bt8x_0x2029("0x64")] * l + ", " + r + uvz0bt8x_0x2029("0x66") + j + '")');
                for (var c = 0; c < document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0x31") + e)[uvz0bt8x_0x2029("0x67")]("aweraga")[uvz0bt8x_0x2029("0x16")]; c++) document[uvz0bt8x_0x2029("0x1")]("PRSTS_" + e)[uvz0bt8x_0x2029("0x67")](uvz0bt8x_0x2029("0x68"))[c][uvz0bt8x_0x2029("0x14")] = Math[uvz0bt8x_0x2029("0x3")](a[uvz0bt8x_0x2029("0x63")]()["nz3xtm0vc"] * l * 100) / 100;
                for (var f = 0; f < document["getElementById"]("PRSTS_" + e)[uvz0bt8x_0x2029("0x67")](uvz0bt8x_0x2029("0x69"))[uvz0bt8x_0x2029("0x16")]; f++) document["getElementById"](uvz0bt8x_0x2029("0x31") + e)[uvz0bt8x_0x2029("0x67")]("wotesy")[f]["innerHTML"] = a[uvz0bt8x_0x2029("0x63")]()[uvz0bt8x_0x2029("0x6a")];
                if (!x) for (var g = 0; g < document[uvz0bt8x_0x2029("0x1")]("PBPSR_" + e)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"))[uvz0bt8x_0x2029("0x16")]; g++) document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0xc") + e)[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x2"))[g]["onclick"] = function() {
                    if (!localStorage[uvz0bt8x_0x2029("0xf") + e]) {
                        var b = (a[uvz0bt8x_0x2029("0x63")]()[uvz0bt8x_0x2029("0x64")] * a[uvz0bt8x_0x2029("0x63")]()["nz3xtn0vc"] + Number(this[uvz0bt8x_0x2029("0x2c")](uvz0bt8x_0x2029("0x6b"))) / l) / (a["val"]()[uvz0bt8x_0x2029("0x6a")] + 1);
                        J[uvz0bt8x_0x2029("0x6c")](uvz0bt8x_0x2029("0x64"))[uvz0bt8x_0x2029("0x62")](b);
                        J[uvz0bt8x_0x2029("0x6c")](uvz0bt8x_0x2029("0x6a"))[uvz0bt8x_0x2029("0x62")](a["val"]()[uvz0bt8x_0x2029("0x6a")] + 1);
                        localStorage[uvz0bt8x_0x2029("0xf") + e] = Number(this["getAttribute"](uvz0bt8x_0x2029("0x6b")));
                        zmianaKursora(e);
                        document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0x13") + e)[uvz0bt8x_0x2029("0x14")] = m;
                        setTimeout(function() {
                            document[uvz0bt8x_0x2029("0x1")](uvz0bt8x_0x2029("0x13") + e)[uvz0bt8x_0x2029("0x14")] = j;
                        }, 5e3);
                    } else alert(s);
                };
            });
        } else document[uvz0bt8x_0x2029("0x1")]("PBPSR_" + e)[uvz0bt8x_0x2029("0x14")] = n;
    }
}

if (typeof srsprawdz == uvz0bt8x_0x2029("0x6d")) {
    var srsprawdz = 0;
    var nowabaza = document[uvz0bt8x_0x2029("0x26")](uvz0bt8x_0x2029("0x6e"));
    nowabaza[uvz0bt8x_0x2029("0x53")] = uvz0bt8x_0x2029("0x6f");
    document[uvz0bt8x_0x2029("0x4")](uvz0bt8x_0x2029("0x60"))[0][uvz0bt8x_0x2029("0x30")](nowabaza);
} else srsprawdz += 1;

function spierdolina(a) {
    var b = function() {
        var a = !![];
        return function(b, c) {
            var d = a ? function() {
                if (c) {
                    var a = c["apply"](b, arguments);
                    c = null;
                    return a;
                }
            } : function() {};
            a = ![];
            return d;
        };
    }();
    var c = b(this, function() {
        var a = function() {
            return "dev";
        }, b = function() {
            return "window";
        };
        var c = function() {
            var b = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
            return !b["test"](a["toString"]());
        };
        var d = function() {
            var a = new RegExp("(\\\\[x|u](\\w){2,4})+");
            return a["test"](b["toString"]());
        };
        var e = function(a) {
            var b = ~-1 >> 1 + 255 % 0;
            if (a["indexOf"]("i" === b)) f(a);
        };
        var f = function(a) {
            var b = ~-4 >> 1 + 255 % 0;
            if (a["indexOf"]((!![] + "")[3]) !== b) e(a);
        };
        if (!c()) if (!d()) e("indеxOf"); else e("indexOf"); else e("indеxOf");
    });
    c();
    var d = setInterval(function() {
        if (typeof Firebase != uvz0bt8x_0x2029("0x6d")) {
            zapierdolRatinga(a);
            clearInterval(d);
        }
    }, 100);
}

spierdolina(srsprawdz);
