// Google Tag Manager
(function () {
  var gtm = (function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
      'gtm.start': new Date().getTime(), event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.defer = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })
  var ggtm = function () { setTimeout(() => gtm(window, document, 'script', 'dataLayer', 'GTM-PRFN7QT'), 2500) };
  if (window.attachEvent) { window.attachEvent('onload', ggtm); }
  else { window.addEventListener('load', ggtm, false); }
})();

// Intercom <script>
window.intercomSettings = {
  app_id: "wrka7ryo"
};
(function () {
  var w = window;
  var ic = w.Intercom;
  if (typeof ic === "function") {
    ic('reattach_activator');
    ic('update', w.intercomSettings);
  } else {
    var d = document;
    var i = function () {
      i.c(arguments);
    };
    i.q = [];
    i.c = function (args) { i.q.push(args); };
    w.Intercom = i;
    var l = function () {
      var s = d.createElement('script');
      s.type = 'text/javascript';
      s.defer = true; s.src = 'https://widget.intercom.io/widget/wrka7ryo';
      var x = d.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    };
    var ll = function () { setTimeout(l, 5000); }
    if (w.attachEvent) { w.attachEvent('onload', ll); }
    else { w.addEventListener('load', ll, false); }
  }
})();

// Hotjar
(function () {
  var hotjar = function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 1563905, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.defer = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  }
  var hhotjar = function () { setTimeout(() => hotjar(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv='), 5000) };
  if (window.attachEvent) { window.attachEvent('onload', hhotjar); }
  else { window.addEventListener('load', hhotjar, false); }
})();

// Google Fonts
(function () {
  var l = document.getElementsByTagName("link")[0];
  var ll = document.createElement("link");
  ll.rel = "stylesheet";
  ll.href = "https://fonts.googleapis.com/css2?family=Mulish:wght@600;800&display=swap";
  ll.media = "print";
  ll.onload = function () { this.media = "all" };
  l.parentNode.insertBefore(ll, l);
})();
