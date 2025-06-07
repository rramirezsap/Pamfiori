sap.ui.define([
  "sap/ui/core/util/MockServer",
  "sap/base/Log"
], function(MockServer, Log) {
  "use strict";

  return {
    init: function() {
      var oMockServer = new MockServer({
        rootUri: "/odata/v4/DocumentService/"
      });

      var sPath = "/localService";

      oMockServer.simulate(sPath + "/metadata.xml", {
        sMockdataBaseUrl: sPath,
        bGenerateMissingMockData: true
      });

      oMockServer.start();
      Log.info("MockServer started at " + sPath);
    }
  };
});
