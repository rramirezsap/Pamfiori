sap.ui.define([], function () {
  "use strict";
  return {
    parse: function (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (e) {
          try {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(sheet);
            const invoices = json.map(row => ({
              invoice: row.invoice || row.Invoice || "",
              vendor: row.vendor || row.Vendor || ""
            }));
            resolve(invoices);
          } catch (err) {
            reject(err);
          }
        };
        reader.onerror = reject;
        reader.readAsBinaryString(file);
      });
    }
  };
});
