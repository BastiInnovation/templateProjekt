export class Formatter {
    public sun(won: number, draw: number, lost: number ): string{
        return `${won}-${draw}-${lost}`; 
    }

    public colorChange(name: string): string{
        
        return name;
    }
}