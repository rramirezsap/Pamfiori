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
                    { label: "Reconciled", value: 8 },
                    { label: "Reconciling", value: 5 },

                ],
                insightData: [
                    { label: "Possible tax mismatch", value: 8 },
                    { label: "No issues detected", value: 3 },
                    { label: "Pending approvals", value: 5 }
                ],
                actionData: [
                    { label: "Posible escalation to Engineering", value: 3 },
                    { label: "Attempt to reproduce internally", value: 2 }
                ]
            });
            this.getView().setModel(oModel, "dashboardModel");
            

             const oView = this.getView();
            ["statusChart", "insightChart", "actionChart"].forEach(function (chartId) {
             const oChart = oView.byId(chartId);
            if (oChart) {
            oChart.setVizProperties({
            title: {
            visible: false
            }
            });
            }
            });

        }
    });
});
