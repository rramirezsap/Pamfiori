sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/BusyDialog"
], function (Controller, JSONModel, BusyDialog) {
    "use strict";

    return Controller.extend("invoice.analyzer.controller.App", {
        onInit: function () {
            const oModel = new JSONModel({ results: [] });
            this.getView().setModel(oModel, "resultsModel");
        },

        onUpload: function () {
            const oView = this.getView();
            const oBusyDialog = new BusyDialog({
                title: "Processing",
                text: "Processing file, please wait..."
            });

            oBusyDialog.open();

            setTimeout(function () {
                const aResults = [
                    {
                        invoiceId: "INV02288-1235996",
                        status: "Approved",
                        serviceNowCase: "CS12553456",
                        error: "tax error",
                        aiInsight: "Possible tax mismatch",
                        suggestedAction: "Review tax mapping"
                    },
                    {
                        invoiceId: "INV02288-1235998",
                        status: "Reconciled",
                        serviceNowCase: "CS12553498",
                        error: "no errors",
                        aiInsight: "No issues detected",
                        suggestedAction: "No action required"
                    }
                ];



                const oModel = oView.getModel("resultsModel");
                oModel.setProperty("/results", aResults);
                oBusyDialog.close();
            }, 5000);
        },
        onNavigateToDashboard: function () {
    const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
oRouter.navTo("Dashboard");
}
    });
});
