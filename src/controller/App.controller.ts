import Event from "sap/ui/base/Event";
import Controller from "sap/ui/core/mvc/Controller";
import AppComponent from "../Component";
import { Formatter } from "../model/formatter";
import Control from "sap/ui/core/Control";
import UIComponent from "sap/ui/core/UIComponent";
import BaseController from "./BaseController";

/**
 * @namespace ifm.bs.template.templateproject.controller
 */
export default class AppController extends BaseController {
	formatter = new Formatter;
	public onInit() : void {
		// apply content density mode to root view
		/* this.getView().addStyleClass((this.getOwnerComponent() as AppComponent).getContentDensityClass());
		console.log(this.getOwnerComponent().getModel('bundesligaPlacing')); */ 
	}
		
	
	navToDetail(event: Event) {
		const id = "tes";
		
		this.getRouter().navTo("detail", { path : id })
		//(this.getOwnerComponent() as UIComponent).getRouter().navTo("detail", { path : id });
	}// eine Route mit dem Namen Detail existiert nicht
}
