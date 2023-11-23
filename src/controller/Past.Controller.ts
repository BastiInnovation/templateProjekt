/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import JSONModel from "sap/ui/model/json/JSONModel";
import { ApiRequests } from "./ApiRequests";
import BaseController from "./BaseController";
import UI5Event from "sap/ui/base/Event"; 
import { Match } from "../model/apiTypes";
import { Formatter } from "../model/formatter";

/**
 * @namespace ifm.bs.template.templateproject.controller
 */

export default class Past extends BaseController{
    formatter = new Formatter;

    onInit(): void {
        this.getRouter().getRoute("past").attachPatternMatched((event: UI5Event) => this.onMatched(event), this);
    }

    private onMatched(event: UI5Event){
        const path = decodeURIComponent(event.getParameter("arguments").path); 
        const team1Id = ((this.getModel("bundesligaPlacing") as any).oData[path].teamInfoId) as number; 
        const timeId = ((this.getModel("spiele") as any).oData[path].matchDateTime) as number; 
        console.log( team1Id, timeId);
    }




}   

