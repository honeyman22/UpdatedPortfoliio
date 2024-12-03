export interface TeamDataDto {
  id: number;
  name: string;
  shortName: string;
  image: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface FixtureDto {
  team1: TeamDataDto;
  team2: TeamDataDto;
  isFinished: boolean;
  venue: string;
  date: string;
  wonBy: string;
}
