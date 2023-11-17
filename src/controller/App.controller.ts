
import Controller from "sap/ui/core/mvc/Controller";
import AppComponent from "../Component";
import { Formatter } from "../model/formatter";

/**
 * @namespace ifm.bs.template.templateproject.controller
 */
export default class AppController extends Controller {
	formatter = new Formatter;
	public onInit() : void {
		// apply content density mode to root view
		this.getView().addStyleClass((this.getOwnerComponent() as AppComponent).getContentDensityClass());
		console.log(this.getOwnerComponent().getModel('bundesligaPlacing')); 
		
	}

}

