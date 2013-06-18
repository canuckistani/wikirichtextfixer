const data = require('sdk/self').data;

require('sdk/page-mod').PageMod({
  include: ["https://intranet.mozilla.org/*", "https://wiki.mozilla.org/*"], 
  contentScriptFile: [data.url("jquery.js"), data.url("content_script.js")],
  attachTo: ['existing', 'top']
});
