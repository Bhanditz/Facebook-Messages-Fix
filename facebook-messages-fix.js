// ==UserScript==
// @name          Facebook Messages Fix
// @namespace     http://userstyles.org
// @description	  Widens Facebook messages screen and gets rid of annoying "ego" column
// @author        Drew Nutter
// @homepage      https://github.com/dnut
// @run-at        document-start
// @version       0.1.0
// ==/UserScript==
(function() {var css = "";
if (false || (new RegExp("^http(s)?://.*\\.facebook\\.com/(?!(v[0-9].[0-9]/)plugins/|Fplugins|plugins/like).*$")).test(document.location.href))
	css += [
        // Big container for all messages stuff
        "._ksg.clearfix {",
        "    width: 225% !important;",
        "    //min-width: 2222px;",
        "}",
        // Master size that _2nj and _2ak fit in.
        "._2nb {",
        "    width: 65% !important;",
        "    //min-width: 990px;",
        "}",
        // All the stuff contained within the above, must stretch to fill.
        // The one that ends with 'before' is during normal conversation, the one with 'after' is when you are loading stuff. Similar one with neither ending is when you have very few messages on the screen, ready to load more.
        "._2ak, ._2nj, .uiScrollableArea._2nc.uiScrollableAreaWithTopShadow.nofade.uiScrollableAreaWithShadow.uiScrollableAreaBottomAligned, .uiScrollableArea._2nc.uiScrollableAreaWithTopShadow.nofade.uiScrollableAreaWithShadow.uiScrollableAreaBottomAligned.contentBefore, .uiScrollableArea._2nc.uiScrollableAreaWithTopShadow.nofade.uiScrollableAreaWithShadow.uiScrollableAreaBottomAligned.contentAfter, .uiScrollableAreaWrap, .uiScrollableAreaContent, .uiScrollableAreaBody, .uiList {",
        "    width: 100% !important;",
        "}",
        // Right column must be blocked.
        ".rightCol, ._81, .webMessengerAdsStage, .pagelet_rhc_footer, .ego_column pagelet._y92._5qrt, .ego_section, ._4-u2._19ah._2ph_._4-u8, .rhcFooterBorder, .rhcFooterWrap {",
        "   display: None !important;",
        "}",
	].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
