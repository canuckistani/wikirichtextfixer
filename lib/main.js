var data = require("self").data;

require("page-mod").PageMod({
    include: ["https://intranet.mozilla.org/*", "https://wiki.mozilla.org/*"], 
    contentScriptFile: [data.url("jquery.js"), data.url("content_script.js")]
});
