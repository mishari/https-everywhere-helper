var urlmod = require("./url-mod");
 
exports["test http2https"] = function(assert) {
      assert.ok(urlmod.http2https("http://somesite/") == "https://somesite/", 
                "uri conversion works");
      assert.ok(urlmod.http2https("https://somesite/") == "https://somesite/", 
                "https remains the same");

}

exports["test empty string"] = function(assert) {
  assert.throws(function() {
          url-mod.http2https();
        },
        "empty string check works");
}

 
require("sdk/test").run(exports);