/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import JSONModel from "sap/ui/model/json/JSONModel";
import { ApiRequests } from "./ApiRequests";
import BaseController from "./BaseController";
import UI5Event from "sap/ui/base/Event"; 

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
        const TeamId = ((this.getModel("bundesligaPlacing") as any).oData[path].teamInfoId) as number; 
        console.log(TeamId)
        const klasse = new ApiRequests();
        const matchDays = await klasse.getAllMatches();
        const matches: any[]  = [];
        const groupes: any[]  = [];
        for(const match of   matchDays){
            if(TeamId == match.team1.teamId && match.matchIsFinished == true || TeamId == match.team2.teamId && match.matchIsFinished == true
                || TeamId == match.team1.teamId && match.matchIsFinished == false || TeamId == match.team2.teamId && match.matchIsFinished == false){
                matches.push(match);
                groupes.push(match.group);
            }  
        }
        this.setModel(new JSONModel(matches), "spiele");
        console.log(groupes)
        //this.setModel(new JSONModel(groupes), "gruppe");
        
        
        //console.log(this.getOwnerComponent().getModel('spiele'));
    }
}