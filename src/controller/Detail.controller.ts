/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import JSONModel from "sap/ui/model/json/JSONModel";
import { ApiRequests } from "./ApiRequests";
import BaseController from "./BaseController";
import UI5Event from "sap/ui/base/Event"; 
import { Match } from "../model/apiTypes";
import { Formatter } from "../model/formatter";
import CustomListItem from "sap/m/CustomListItem";
import Event from "sap/ui/base/Event";

/**
 * @namespace ifm.bs.template.templateproject.controller
 */

export default class Detail extends BaseController{

    formatter = new Formatter;

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
            team1Name: match.team1.shortName,
            team2Name: match.team2.shortName,
            pointsTeam1: match.matchResults.filter(result => result.resultName === "Endergebnis")[0] ? match.matchResults.filter(result => result.resultName === "Endergebnis")[0].pointsTeam1 : null,
            pointsTeam2: match.matchResults.filter(result => result.resultName === "Endergebnis")[0] ? match.matchResults.filter(result => result.resultName === "Endergebnis")[0].pointsTeam2 : null,
            time: match.matchDateTime.split("T").splice(1,1),
            date: match.matchDateTime.split("T").reverse().splice(1,1),//.split("-").reverse().toString().replace(",", "."),
            //stadium: match.location.locationStadium,
        }))
        console.log(matches)
        this.setModel(new JSONModel(matchModel), "spiele");
    }

    navToPast(event: Event) {

		//TODO: path = teamID
		const id = (event.getSource() as CustomListItem).getBindingContext("spiele").getPath(); 
		console.log(id);
		this.getRouter().navTo("past", { path : encodeURI(id.substring(1))})
		//(this.getOwnerComponent() as UIComponent).getRouter().navTo("detail", { path : id });
	}

}