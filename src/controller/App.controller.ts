import MessageBox from "sap/m/MessageBox";
import Controller from "sap/ui/core/mvc/Controller";
import AppComponent from "../Component";

/**
 * @namespace ifm.bs.template.templateproject.controller
 */
export default class AppController extends Controller {

	public onInit() : void {
		// apply content density mode to root view
		this.getView().addStyleClass((this.getOwnerComponent() as AppComponent).getContentDensityClass());
	}

	public sayHello() : void {
		MessageBox.show("Hello World!");
	}
}