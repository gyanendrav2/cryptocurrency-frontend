(function () {
  let ref;
  if (!/^https?:\/\/(www\.)(google|duckduckgo|bing|qwant).[a-z]{2,3}\//.test(document.referrer))
    ref = (/\?(.+&)?ref=([A-Za-z0-9]{3,10})(&|$)/.exec(window.location.search || window.location.hash) || [])[2];
  if (window.location.href.startsWith("https://coinmetro.com/se")) ref = "trade";
  if (ref) document.cookie = `coinmetroAmbassador={"refId":"${ref}","referrer":"${document.referrer}"}; expires=${new Date(Date.now() + 30 * 86400 * 1000).toUTCString()}; path=/; domain=.coinmetro.com`;
})();
