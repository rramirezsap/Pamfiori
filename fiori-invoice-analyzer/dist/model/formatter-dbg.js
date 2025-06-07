sap.ui.define([], function () {
  "use strict";

  return {
    /**
     * Devuelve el estado visual según si hay error o no
     */
    statusState: function (error) {
      return error ? "Error" : "Success";
    },

    /**
     * Devuelve un texto amigable para el estado
     */
    statusText: function (error) {
      return error ? "Con Error" : "Correcta";
    },

    /**
     * Convierte texto a mayúsculas
     */
    toUpperCase: function (value) {
      return value ? value.toUpperCase() : "";
    }
  };
});
