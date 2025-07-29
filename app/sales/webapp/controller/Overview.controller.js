sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
  ], function (Controller, Fragment, JSONModel, MessageToast) {  
    "use strict";
  
    return Controller.extend("com.deloitte.mdg.sales.controller.Overview", {
      onInit() {
        const oModel = new JSONModel({
    keyCombinations: [
    ]
  });

  this.getView().setModel(oModel, "KeyComboModel");
      },
  
      onCreatePress: function () {
        const view = this.getView();
  
        if (!this._oDialog) {
          Fragment.load({
            name: "com.deloitte.mdg.sales.view.fragments.CreateConditionRecord",
            controller: this
          }).then(function (oDialog) {
            view.addDependent(oDialog);
            oDialog.open();
            this._oDialog = oDialog;
          }.bind(this));
        } else {
          this._oDialog.open();
        }
      },
  
      onSubmitCreateRecord: async function () {
        const oView = this.getView();
      
        if (!this._pKeyComboDialog) {
          this._pKeyComboDialog = await Fragment.load({
            id: oView.getId(),
            name: "com.deloitte.mdg.sales.view.fragments.KeyCombination",
            controller: this
          });
          oView.addDependent(this._pKeyComboDialog);
        }
      
        this._pKeyComboDialog.open();
      },
      
      onKeyCombinationSelect: function (oEvent) {
        const oSelectedItem = oEvent.getParameter("listItem");
        const sSelectedKey = oSelectedItem.getTitle();
        console.log("User selected:", sSelectedKey);
      },
      
      onKeyComboConfirm: function () {
        this._pKeyComboDialog.close();
        // You can save the selection or proceed
      },
      
      onKeyComboCancel: function () {
        this._pKeyComboDialog.close();
      },      
  
      onCancelCondition: function () {
        this._oDialog.close();
      },
  
      onValueHelpRequest: function (oEvent) {
        MessageToast.show("F4 Help Pressed (To be implemented)");
      }
    });
  });
  