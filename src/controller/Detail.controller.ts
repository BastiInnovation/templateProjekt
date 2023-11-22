/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import JSONModel from "sap/ui/model/json/JSONModel";
import { ApiRequests } from "./ApiRequests";
import BaseController from "./BaseController";
import UI5Event from "sap/ui/base/Event"; 
import { Match } from "../model/apiTypes";

/**
 * @namespace ifm.bs.template.templateproject.controller
 */

export default class Detail extends BaseController{
    onInit(): void {
        this.getRouter().getRoute("detail").attachPatternMatched((event: UI5Event) => this.onObjectMatched(event), this); 
    }

    private async onObjectMatched(event: UI5Event){
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const path = decodeURIComponent(event.getParameter("arguments").path); 
        const teamId = ((this.getModel("bundesligaPlacing") as any).oData[path].teamInfoId) as number; 
        const klasse = new ApiRequests();
        const matchDays = await klasse.getAllMatches() as Match[];
        const matches = matchDays.filter(match => match.team1.teamId === teamId || match.team2.teamId === teamId)
        const matchModel = matches.map(match => ({
            groupName: match.group.groupName,
            steffan: match.team1.teamName,
        }))
        console.log(matches)
        this.setModel(new JSONModel(matchModel), "spiele");
        }
}