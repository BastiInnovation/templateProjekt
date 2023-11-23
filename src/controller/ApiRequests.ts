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

    public async getNextMatchesbyTeam(teamId: string){
        const next = await fetch(this.apiUrl + `/getnextmatchbyleagueteam/4608/${teamId}`, {
            method: 'GET'
        })
        const last = await fetch(this.apiUrl + `/getlastmatchbyleagueteam/4608/${teamId}`, {
            method: 'GET'
        })

        const result = [next, last] ;
        console.log(result);
        if(next.ok){
            return result; 
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

    public async getAllMatches(){
        const matches = await fetch(this.apiUrl + '/getmatchdata/bl1/2023', {
            method: 'GET'
        })

        if(matches.ok){
           return matches.json();
        }
    }
  
    public async getPlayedMatches(team1Id: number, team2Id: number){
        const games = await fetch(this.apiUrl + `/getmatchdata/${team1Id}/${team2Id}`, {
            method: 'GET'
        })

        if(games.ok){
            return games.json();
        }
    }
}