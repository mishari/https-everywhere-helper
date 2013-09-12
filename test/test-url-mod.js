/*
    https-everywhere-helper
    Copyright (C) 2013  Mishari A. Muqbil mishari@mishari.net

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see [http://www.gnu.org/licenses/].
*/

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