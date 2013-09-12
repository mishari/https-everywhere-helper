var url = require("sdk/url");

exports.http2https = function(a) {

  my_url = url.URL(a.replace(/^http:/,"https:"));
  return my_url.toString();

}
