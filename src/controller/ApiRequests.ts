export class ApiRequests{
    private apiUrl = "https://api.openligadb.de"
    public async getleagues(){
        const result = await fetch(this.apiUrl + '/getavailableleagues', {
            method: 'GET', 
        }); 

        if(result.ok){
            console.log('')
            return result.json(); 
        }


    }

    public async getNextMatchesbyTeam(teamId: string, leagueId: string){
        const result = await fetch(this.apiUrl + `/getnextmatchbyleagueteam/${leagueId}/${teamId}`, {
            method: 'GET'
        })

        if(result.ok){
            return result.json(); 
        }
    }


    public async getTable(season: string, leagueShortcut: string){
        const result = await fetch(this.apiUrl + `/getbltable/${leagueShortcut}/${season}`, {
            method: 'GET'
        })

        if(result.ok){
            return result.json(); 
        }
    }
    
}