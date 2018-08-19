export class Appareil{
    description: string[];
    isOn: boolean;
    startTime: string;
    endTime: string;
    
    constructor(name: string){
        this.isOn = false;
        this.startTime = '';
        this.endTime = '';
    }
}