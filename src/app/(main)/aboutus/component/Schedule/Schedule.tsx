"use client";

import React, { useEffect } from "react";

export default function Schedule() {
	useEffect(() => {
		var MeetingsEmbedCode: any = (function (t) {
			function e(t: any) {
				return t.querySelectorAll("iframe").length > 0;
			}
			t.elementContainsIFrame = e;
			function n(t, e) {
				return t || e ? "&parentPageUrl=" + t + e : "";
			}
			t.getParentPageUrl = n;
			function o(t) {
				var e = null;
				if (document.cookie && "" !== document.cookie)
					for (
						var n = document.cookie.split(";"), o = 0;
						o < n.length;
						o++
					) {
						var r = n[o].trim(),
							a = t + "=";
						if (r.substring(0, t.length + 1) === a) {
							e = r.substring(t.length + 1);
							break;
						}
					}
				return e;
			}
			function r(t) {
				return t ? "&parentHubspotUtk=" + t : "";
			}
			t.getParentUtkParam = r;
			function a(t) {
				return t ? "&" + t.substr(1) : "";
			}
			t.getParentQueryParams = a;
			function i(t, e, n) {
				return (
					(t ? "&ab=" + t : "") +
					(e ? "&abStatus=" + e : "") +
					(n ? "&contentId=" + n : "")
				);
			}
			t.buildAbTestingParams = i;
			function s() {
				var t = new Date().getTime();
				return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
					/[xy]/g,
					function (e) {
						var n = (t + 16 * Math.random()) % 16 | 0;
						t = Math.floor(t / 16);
						return ("x" === e ? n : (3 & n) | 8).toString(16);
					}
				);
			}
			function u() {
				var t = window.crypto || window.msCrypto,
					e = new Uint16Array(8);
				t.getRandomValues(e);
				var n = function (t) {
					for (var e = t.toString(16); e.length < 4; ) e = "0" + e;
					return e;
				};
				return (
					n(e[0]) +
					n(e[1]) +
					n(e[2]) +
					n(e[3]) +
					n(e[4]) +
					n(e[5]) +
					n(e[6]) +
					n(e[7])
				);
			}
			function c() {
				var t = window.crypto || window.msCrypto;
				return void 0 !== t &&
					void 0 !== t.getRandomValues &&
					void 0 !== window.Uint16Array
					? u()
					: s();
			}
			function d() {
				var t = window.__hsUserToken || o("hubspotutk");
				if (!t) {
					var e = c();
					t = e;
					window.__hsUserToken = e;
				}
				return t;
			}
			t.getOrSetHubspotUtk = d;
			var p = [
				"https://local.hubspot.com",
				"https://local-eu1.hubspot.com",
				"https://local.hubspotqa.com",
				"https://local-eu1.hubspotqa.com",
				"https://app.hubspot.com",
				"https://app-eu1.hubspot.com",
				"https://app.hubspotqa.com",
				"https://app-eu1.hubspotqa.com",
				"https://meetings.hubspot.com",
				"https://meetings-eu1.hubspot.com",
				"https://meetings.hubspotqa.com",
				"https://meetings-eu1.hubspotqa.com",
			];
			function h(t) {
				return p.indexOf(t) > -1;
			}
			t.isHubSpotOrigin = h;
			function g(t, e) {
				var n = t[t.message ? "message" : "data"];
				(h(t.origin) || t.origin.indexOf(window.origin) > -1) &&
					n.height &&
					(e.style.height = n.height + "px");
			}
			t.resize = g;
			var m = (window._hsp = window._hsp || []);
			function l(t, e) {
				t &&
					"readyForConsentListener" === t.data &&
					m.push([
						"addPrivacyConsentListener",
						function (t) {
							var n = t.allowed,
								o = t.categories,
								r = n || o.analytics;
							e.contentWindow.postMessage(
								{
									type: "privacy-consent",
									shouldTrackAnalytics: r,
								},
								"*"
							);
						},
					]);
			}
			t.addPrivacyConsentListener = l;
			function w(n) {
				var o,
					r = document.querySelectorAll(n),
					a = [];
				for (o = 0; o < r.length; o++) {
					var i = r[o],
						s = i.dataset.src,
						u = i.dataset.title,
						c = document.createElement("iframe"),
						d = i.dataset.ab,
						p = i.dataset.abStatus,
						h = i.dataset.contentId,
						g = t.getOrSetHubspotUtk();
					i.height = "100%";
					c.src =
						s +
						t.getParentUtkParam(g) +
						t.getParentPageUrl(
							window.location.origin,
							window.location.pathname
						) +
						t.getParentQueryParams(window.location.search) +
						t.buildAbTestingParams(d, p, h);
					u && (c.title = u);
					c.width = "100%";
					c.style.minWidth = "312px";
					c.style.minHeight = "516px";
					c.style.height = "756px";
					c.style.border = "none";
					c.setAttribute("data-hs-ignore", "true");
					if (!e(i)) {
						i.appendChild(c);
						window.addEventListener("message", function (e) {
							t.resize(e, c);
						});
						window.addEventListener("message", function (e) {
							t.addPrivacyConsentListener(e, c);
						});
						a.push(c);
					}
				}
				return a;
			}
			t.createMeetingsIframe = w;
			w(".meetings-iframe-container");
			window.hbspt || (window.hbspt = {});
			window.hbspt.meetings || (window.hbspt.meetings = {});
			window.hbspt.meetings.create = w;
			"object" == typeof exports && (module.exports = t);
			return t;
		})(MeetingsEmbedCode || {});
	}, []);

	return (
		<div className="schedule">
			<div className="container">
				<div className="schedule-head">
					<h3>Get to know us more!</h3>

					<img src="/home/aboutus/get-to-know-us.svg" />
				</div>

				<div
					className="meetings-iframe-container schedule-container"
					data-src="https://meetings.hubspot.com/rohan90?embed=true"
				></div>
			</div>
		</div>
	);
}
