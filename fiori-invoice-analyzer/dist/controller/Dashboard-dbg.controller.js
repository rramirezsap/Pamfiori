sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("invoice.analyzer.controller.Dashboard", {
        onInit: function () {
            const oModel = new JSONModel({
                statusData: [
                    { label: "Approved", value: 3 },
                    { label: "Reconciled", value: 2 }
                ],
                insightData: [
                    { label: "Possible tax mismatch", value: 3 },
                    { label: "No issues detected", value: 2 }
                ],
                actionData: [
                    { label: "Escalate to ServiceNow", value: 3 },
                    { label: "No action required", value: 2 }
                ]
            });
            this.getView().setModel(oModel, "dashboardModel");
        }
    });
});
