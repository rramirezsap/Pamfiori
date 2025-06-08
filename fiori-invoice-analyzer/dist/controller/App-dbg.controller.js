sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/BusyDialog",
  "sap/m/MessageBox"
], function (Controller, JSONModel, BusyDialog, MessageBox) {
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
    },

    
onAskAI: function () {
var sQuestion = this.getView().byId("aiInput").getValue();

if (!sQuestion) {
 sap.m.MessageBox.warning("Please enter a question.");
 return;
 }

 fetch("https://invoice-ai-agent.cfapps.us10-001.hana.ondemand.com/ask", {
 method: "POST",
headers: {
"Content-Type": "application/json"
 },
 body: JSON.stringify({ question: sQuestion })
 })
 .then(response => {
 if (!response.ok) {
 throw new Error("Server response error");
 }
 return response.json();
 })
 .then(data => {
 sap.m.MessageBox.information("AI Response:\n" + data.answer);
 })
 .catch(error => {
 sap.m.MessageBox.error("Error contacting AI service:\n" + error.message);

        });
    }
  });
});
