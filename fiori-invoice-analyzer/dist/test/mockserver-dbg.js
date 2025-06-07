sap.ui.define([
    "sap/ui/core/util/MockServer"
], function (MockServer) {
    "use strict";

    return {
        init: function () {
            var oMockServer = new MockServer({
                rootUri: "http://localhost:4004/odata/v4/DocumentService/"
            });

            MockServer.config({
                autoRespond: true,
                autoRespondAfter: 1000
            });

            var sPath = jQuery.sap.getModulePath("fiori.documentreview.localService");
            oMockServer.simulate(sPath + "/metadata.xml", {
                sMockdataBaseUrl: sPath + "/mockdata",
                bGenerateMissingMockData: true
            });

            oMockServer.start();
            console.log("✅ MockServer iniciado");
        }
    };
});
