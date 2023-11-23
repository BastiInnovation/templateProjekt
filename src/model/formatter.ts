export class Formatter {
    public sun(won: number, draw: number, lost: number ): string{
        return `${won}-${draw}-${lost}`; 
    }

    public versus(team1: string, team2: string): string{
        
        return `${team1} vs. ${team2}`;
    }

    public result(points1: number, points2: number, time : string){
            if(points1 !== null || points2 !== null){
                return `${points1} : ${points2}`;
            }
            else return time; 
        
    }

}