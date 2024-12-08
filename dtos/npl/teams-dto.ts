export interface TeamDataDto {
  id: number;
  name: string;
  shortName: string;
  image: string;
  primaryColor: string;
  secondaryColor: string;
  score?:string
}

export interface FixtureDto {
  id:number;
  team1: TeamDataDto;
  team2: TeamDataDto;
  isFinished: boolean;
  venue: string;
  date: string;
  wonBy: string;
}
