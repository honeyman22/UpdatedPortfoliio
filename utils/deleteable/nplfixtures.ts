import { FixtureDto } from "@/dtos/npl/teams-dto";

export const nplFixtures: FixtureDto[] = [
  { id:1,
    team1: {
      id: 1,
      name: "Biratnagar Kings",
      shortName: "BIK",
      image: "/deleteable/npl/BIK.jpg",
      primaryColor: "#1A1A1A",
      secondaryColor: "#FF5733",
      score:"127"
    },
    team2: {
      id: 2,
      name: "Janakpur Bolts",
      shortName: "JAB",
      image: "/deleteable/npl/JAB.png",
      primaryColor: "#3498DB",
      secondaryColor: "#2ECC71",score:"131/2"
    },
    isFinished: true,
    venue: "TU Ground",
    date: "2024-11-30T12:00:00",
    wonBy: "Janakpur Bolts won by 8 wickets",
  },
  {  id:2,
    team1: {
      id: 3,
      name: "Kathmandu Gurkhas",
      shortName: "KAG",
      image: "/deleteable/npl/KAG.png",
      primaryColor: "#8E44AD",
      secondaryColor: "#34495E",score:"111/9"
    },
    team2: {
      id: 4,
      name: "Chitwan Rhinos",
      shortName: "CHR",
      image: "/deleteable/npl/CHR.png",
      primaryColor: "#E74C3C",
      secondaryColor: "#2C3E50",score:"114/5"
    },
    isFinished: true,
    venue: "Pokhara Stadium",
    date: "2024-12-02T09:00:00",
    wonBy: "Chitwan Rhinos won by 5 wickets",
  },
  {  id:3,
    team1: {
      id: 2,
      name: "Janakpur Bolts",
      shortName: "JAB",
      image: "/deleteable/npl/JAB.png",
      primaryColor: "#3498DB",
      secondaryColor: "#2ECC71",score:"142/2"
    },
    team2: {
      id: 5,
      name: "Karnali Yaks",
      shortName: "KAY",
      image: "/deleteable/npl/KAY.png",
      primaryColor: "#1ABC9C",
      secondaryColor: "#16A085",score:"141/7"
    },
    isFinished: true,
    venue: "Chitwan Stadium",
    date: "2024-12-02T13:00:00",
    wonBy: "Janakpur Bolts won by 8 wickets",
  },
  {
    id:4,
    team1: {
      id: 6,
      name: "Sudurpaschim Royals",
      shortName: "SPR",
      image: "/deleteable/npl/SPR.png",
      primaryColor: "#F39C12",
      secondaryColor: "#D35400",score:"182/7"
    },
    team2: {
      id: 1,
      name: "Biratnagar Kings",
      shortName: "BIK",
      image: "/deleteable/npl/BIK.jpg",
      primaryColor: "#1A1A1A",
      secondaryColor: "#FF5733",score:"92",
    },
    isFinished: true,
    venue: "Dhangadhi Stadium",
    date: "2024-12-03T09:00:00",
    wonBy: "Sudurpaschim won by 90 runs",
  },
  {
    id:5,
    team1: {
      id: 5,
      name: "Chitwan Rhinos",
      shortName: "CHR",
      image: "/deleteable/npl/CHR.png",
      primaryColor: "#1ABC9C",
      secondaryColor: "#16A085",score:"161/7"
    },
    team2: {
      id: 6,
      name: "Pokhara Avengers",
      shortName: "POA",
      image: "/deleteable/npl/POA.png",
      primaryColor: "#F39C12",
      secondaryColor: "#D35400",score:"74",
    },
    isFinished: true,
    venue: "Pokhara Stadium",
    date: "2024-12-04T13:00:00",
    wonBy: "Chitwon Rhinos won by 87 runs",
  },
  {
    id:6,
    team1: {
      id: 3,
      name: "Karnali Yaks ",
      shortName: "KAY",
      image: "/deleteable/npl/KAY.png",
      primaryColor: "#8E44AD",
      secondaryColor: "#34495E",score:"149/5"
    },
    team2: {
      id: 7,
      name: "Kathmandu Gorkhas",
      shortName: "KAG",
      image: "/deleteable/npl/KAG.png",
      primaryColor: "#C0392B",
      secondaryColor: "#ECF0F1",
    },
    isFinished: true,
    venue: "Kathmandu Stadium",
    date: "2024-12-04T09:00:00",
    wonBy: "Kathmandu wons by 3 wickets",
  },
  {
    id:7,
    team1: {
      id: 2,
      name: "Lumbini Lions",
      shortName: "LUL",
      image: "/deleteable/npl/LUL.png",
      primaryColor: "#3498DB",
      secondaryColor: "#2ECC71",score:"191/7"
    },
    team2: {
      id: 8,
      name: "Biratnagar Kings",
      shortName: "BIK",
      image: "/deleteable/npl/BIK.png",
      primaryColor: "#2980B9",
      secondaryColor: "#D35400",score:"193/8"
    },
    isFinished: true,
    venue: "Dhangadhi Stadium",
    date: "2024-12-04T13:00:00",
    wonBy: "Biratnagar wins by 2 wickets",
  },
  {
    id:8,
    team1: {
      id: 1,
      name: "Pokhara Avengers",
      shortName: "POA",
      image: "/deleteable/npl/POK.png",
      primaryColor: "#1A1A1A",
      secondaryColor: "#FF5733",score:"138/7"
    },
    team2: {
      id: 4,
      name: "Janakpur Bolts",
      shortName: "JAB",
      image: "/deleteable/npl/JAB.png",
      primaryColor: "#E74C3C",
      secondaryColor: "#2C3E50",score:"143/3"
    },
    isFinished: true,
    venue: "Biratnagar Stadium",
    date: "2024-12-05T09:00:00",
    wonBy: "Janakpur wons by 7 wickets",
  },{
    id:9,
    team1: {
      id: 1,
      name: "Sudurpaschim Royals",
      shortName: "SPR",
      image: "/deleteable/npl/SPR.png",
      primaryColor: "#1A1A1A",
      secondaryColor: "#FF5733",score:"167/6"
    },
    team2: {
      id: 2,
      name: "Kathmandu Gorkhas",
      shortName: "KAG",
      image: "/deleteable/npl/KAg.png",
      primaryColor: "#3498DB",
      secondaryColor: "#2ECC71",score:"94"
    },
    isFinished: true,
    venue: "TU Ground",
    date: "2024-11-05T13:00:00",
    wonBy:"Sudurpaschim won by 73 runs",
  },
  {
    id:10,
    team1: {
      id: 3,
      name: "Chitwan Rhinos",
      shortName: "CHR",
      image: "/deleteable/npl/CHR.png",
      primaryColor: "#8E44AD",
      secondaryColor: "#34495E",score:"130/7"
    },
    team2: {
      id: 4,
      name: "Karnali Yaks",
      shortName: "KAY",
      image: "/deleteable/npl/KAY.png",
      primaryColor: "#E74C3C",
      secondaryColor: "#2C3E50",score:"132/4"
    },
    isFinished: true,
    venue: "Pokhara Stadium",
    date: "2024-12-06T09:00:00",
    wonBy: "Karnali Yaks won by 6 wickets",
  },
  {
    id:11,
    team1: {
      id: 2,
      name: "Lumbini Lions",
      shortName: "LUL",
      image: "/deleteable/npl/LUL.png",
      primaryColor: "#3498DB",
      secondaryColor: "#2ECC71",score:"170/5"
    },
    team2: {
      id: 5,
      name: "Pokhara Avengers",
      shortName: "POA",
      image: "/deleteable/npl/POA.png",
      primaryColor: "#1ABC9C",
      secondaryColor: "#16A085",score:"176/0"
    },
    isFinished: true,
    venue: "Chitwan Stadium",
    date: "2024-12-06T13:00:00",
    wonBy: "Pokara wons by 10 wickets",
  },
  {
    id:12,
    team1: {
      id: 6,
      name: "Sudurpaschim Royals",
      shortName: "SPR",
      image: "/deleteable/npl/SPR.png",
      primaryColor: "#F39C12",
      secondaryColor: "#D35400",score:"187/4"
    },
    team2: {
      id: 1,
      name: "Lumbini Lions",
      shortName: "LUL",
      image: "/deleteable/npl/LUL.jpg",
      primaryColor: "#1A1A1A",
      secondaryColor: "#FF5733",score:"142/9"
    },
    isFinished: true,
    venue: "Dhangadhi Stadium",
    date: "2024-12-07T09:00:00",
    wonBy: "Sudurpaschim won by 45 runs",
  },
  {
    id:13,
    team1: {
      id: 5,
      name: "Karnali Yaks",
      shortName: "KAY",
      image: "/deleteable/npl/KAY.png",
      primaryColor: "#1ABC9C",
      secondaryColor: "#16A085",score:"133"
    },
    team2: {
      id: 6,
      name: "Biratnagar Kings",
      shortName: "BIK",
      image: "/deleteable/npl/BIK.jpg",
      primaryColor: "#F39C12",
      secondaryColor: "#D35400",score:"126/8"
    },
    isFinished: true,
    venue: "Pokhara Stadium",
    date: "2024-12-07T13:00:00",
    wonBy: "Karnali wons by 7 runs",
  },
  {
    id:14,
    team1: {
      id: 3,
      name: "Janakpur Bolts",
      shortName: "JAB",
      image: "/deleteable/npl/JAB.png",
      primaryColor: "#8E44AD",
      secondaryColor: "#34495E",score:"136/9"
    },
    team2: {
      id: 7,
      name: "Lumbini Lions",
      shortName: "LUL",
      image: "/deleteable/npl/LUL.png",
      primaryColor: "#C0392B",
      secondaryColor: "#ECF0F1",score:"",
    },
    isFinished: true,
    venue: "Kathmandu Stadium",
    date: "2024-12-08T09:00:00",
    wonBy: "",
  },
  {
    id:15,
    team1: {
      id: 2,
      name: "Sudurpaschim Royals",
      shortName: "SPR",
      image: "/deleteable/npl/SPR.png",
      primaryColor: "#3498DB",
      secondaryColor: "#2ECC71",
    },
    team2: {
      id: 8,
      name: "Chitwan Riders",
      shortName: "CHR",
      image: "/deleteable/npl/CHR.png",
      primaryColor: "#2980B9",
      secondaryColor: "#D35400",
    },
    isFinished: false,
    venue: "Dhangadhi Stadium",
    date: "2024-12-08T13:00:00",
    wonBy: "",
  },
  {
    id:16,
    team1: {
      id: 1,
      name: "Chitwan Rhnios",
      shortName: "CHR",
      image: "/deleteable/npl/CHR.png",
      primaryColor: "#1A1A1A",
      secondaryColor: "#FF5733",
    },
    team2: {
      id: 4,
      name: "Lumbini Lions",
      shortName: "LUL",
      image: "/deleteable/npl/LUL.png",
      primaryColor: "#E74C3C",
      secondaryColor: "#2C3E50",
    },
    isFinished: false,
    venue: "Biratnagar Stadium",
    date: "2024-12-10T09:00:00",
    wonBy: "",
  },
  { id:17,
    team1: {
      id: 1,
      name: "Karnali Yaks",
      shortName: "KAY",
      image: "/deleteable/npl/KAY.png",
      primaryColor: "#1A1A1A",
      secondaryColor: "#FF5733",
    },
    team2: {
      id: 2,
      name: "Pokhara Avengers",
      shortName: "POA",
      image: "/deleteable/npl/POA.png",
      primaryColor: "#3498DB",
      secondaryColor: "#2ECC71",
    },
    isFinished:false,
    venue: "TU Ground",
    date: "2024-12-10T13:00:00",
    wonBy: "Janakpur Bolts",
  },
  {  id:18,
    team1: {
      id: 3,
      name: "Janakpur Bolts",
      shortName: "JAB",
      image: "/deleteable/npl/JAB.png",
      primaryColor: "#8E44AD",
      secondaryColor: "#34495E",
    },
    team2: {
      id: 4,
      name: "Sudurpaschim Royals",
      shortName: "SPR",
      image: "/deleteable/npl/SPR.png",
      primaryColor: "#E74C3C",
      secondaryColor: "#2C3E50",
    },
    isFinished: false,
    venue: "Pokhara Stadium",
    date: "2024-12-11T09:00:00",
    wonBy: "Chitwan Rhinos",
  },
  {  id:19,
    team1: {
      id: 2,
      name: "Kathmandu Gorkhas",
      shortName: "KAG",
      image: "/deleteable/npl/KAg.png",
      primaryColor: "#3498DB",
      secondaryColor: "#2ECC71",
    },
    team2: {
      id: 5,
      name: "Lumbini Lions",
      shortName: "LUL",
      image: "/deleteable/npl/LUL.png",
      primaryColor: "#1ABC9C",
      secondaryColor: "#16A085",
    },
    isFinished: true,
    venue: "Chitwan Stadium",
    date: "2024-12-11T13:00:00",
    wonBy: "Janakpur Bolts",
  },
  {
    id:20,
    team1: {
      id: 6,
      name: "Pokhara Avengers",
      shortName: "POA",
      image: "/deleteable/npl/POA.png",
      primaryColor: "#F39C12",
      secondaryColor: "#D35400",
    },
    team2: {
      id: 1,
      name: "Biratnagar Kings",
      shortName: "BIK",
      image: "/deleteable/npl/BIK.jpg",
      primaryColor: "#1A1A1A",
      secondaryColor: "#FF5733",
    },
    isFinished: false,
    venue: "Dhangadhi Stadium",
    date: "2024-12-12T09:00:00",
    wonBy: "",
  },
  {
    id:21,
    team1: {
      id: 5,
      name: "Janakpur Bolts",
      shortName: "JAB",
      image: "/deleteable/npl/JAB.png",
      primaryColor: "#1ABC9C",
      secondaryColor: "#16A085",
    },
    team2: {
      id: 6,
      name: "Kathmandu Gorkhas",
      shortName: "KAG",
      image: "/deleteable/npl/KAG.png",
      primaryColor: "#F39C12",
      secondaryColor: "#D35400",
    },
    isFinished: false,
    venue: "Pokhara Stadium",
    date: "2024-12-12T13:00:00",
    wonBy: "",
  },
  {
    id:22,
    team1: {
      id: 3,
      name: "Lumbini Lions",
      shortName: "LUL",
      image: "/deleteable/npl/LUL.png",
      primaryColor: "#8E44AD",
      secondaryColor: "#34495E",
    },
    team2: {
      id: 7,
      name: "Karnali Yaks",
      shortName: "KAY",
      image: "/deleteable/npl/KAY.png",
      primaryColor: "#C0392B",
      secondaryColor: "#ECF0F1",
    },
    isFinished: false,
    venue: "Kathmandu Stadium",
    date: "2024-12-13T09:00:00",
    wonBy: "",
  },
  {
    id:23,
    team1: {
      id: 2,
      name: "Biratnagar Kings",
      shortName: "BIK",
      image: "/deleteable/npl/BIK.jpg",
      primaryColor: "#3498DB",
      secondaryColor: "#2ECC71",
    },
    team2: {
      id: 8,
      name: "Chitwan Rhinos",
      shortName: "CHR",
      image: "/deleteable/npl/CHR.png",
      primaryColor: "#2980B9",
      secondaryColor: "#D35400",
    },
    isFinished: false,
    venue: "Dhangadhi Stadium",
    date: "2024-12-13T13:00:00",
    wonBy: "",
  },
  {
    id:24,
    team1: {
      id: 1,
      name: "Pokara Avengers",
      shortName: "POA",
      image: "/deleteable/npl/POA.png",
      primaryColor: "#1A1A1A",
      secondaryColor: "#FF5733",
    },
    team2: {
      id: 4,
      name: "Kathmandu Gorkhas",
      shortName: "KAG",
      image: "/deleteable/npl/KAG.png",
      primaryColor: "#E74C3C",
      secondaryColor: "#2C3E50",
    },
    isFinished: false,
    venue: "Biratnagar Stadium",
    date: "2024-12-14T09:00:00",
    wonBy: "",
  },{
    id:25,
    team1: {
      id: 1,
      name: "Chitwan Rhinos",
      shortName: "CHR",
      image: "/deleteable/npl/CHR.png",
      primaryColor: "#1A1A1A",
      secondaryColor: "#FF5733",
    },
    team2: {
      id: 2,
      name: "Janakpur Bolts",
      shortName: "JAB",
      image: "/deleteable/npl/JAB.png",
      primaryColor: "#3498DB",
      secondaryColor: "#2ECC71",
    },
    isFinished: false,
    venue: "TU Ground",
    date: "2024-12-14T09:00:00",
    wonBy: "Janakpur Bolts",
  },
  {
    id:26,
    team1: {
      id: 3,
      name: "Biratnagar Kings",
      shortName: "BIK",
      image: "/deleteable/npl/BIK.jpb",
      primaryColor: "#8E44AD",
      secondaryColor: "#34495E",
    },
    team2: {
      id: 4,
      name: "Kathmandu Gorkhas",
      shortName: "KAG",
      image: "/deleteable/npl/KAG.png",
      primaryColor: "#E74C3C",
      secondaryColor: "#2C3E50",
    },
    isFinished: false,
    venue: "Pokhara Stadium",
    date: "2024-12-15T09:00:00",
    wonBy: "Chitwan Rhinos",
  },
  {
    id:27,
    team1: {
      id: 2,
      name: "Pokhara Avengers",
      shortName: "POA",
      image: "/deleteable/npl/POA.png",
      primaryColor: "#3498DB",
      secondaryColor: "#2ECC71",
    },
    team2: {
      id: 5,
      name: "Sudurpaschime Royals",
      shortName: "SPR",
      
      image: "/deleteable/npl/SPR.png",
      primaryColor: "#1ABC9C",
      secondaryColor: "#16A085",
    },
    isFinished: false,
    venue: "Chitwan Stadium",
    date: "2024-12-15T13:00:00",
    wonBy: "Janakpur Bolts",
  },
  {
    id:28,
    team1: {
      id: 6,
      name: "Sudurpaschim Royals",
      shortName: "SPR",
      image: "/deleteable/npl/SPR.png",
      primaryColor: "#F39C12",
      secondaryColor: "#D35400",
    },
    team2: {
      id: 1,
      name: "Karnali Yaks",
      shortName: "KAY",
      image: "/deleteable/npl/KAY.jpg",
      primaryColor: "#1A1A1A",
      secondaryColor: "#FF5733",
    },
    isFinished: false,
    venue: "Dhangadhi Stadium",
    date: "2024-12-16T09:00:00",
    wonBy: "",
  },
  {
    id:29,
    team1: {
      id: 5,
      name: "TAB",
      shortName: "TAB",
      image: "/deleteable/npl/TAB.png",
      primaryColor: "#1ABC9C",
      secondaryColor: "#16A085",
    },
    team2: {
      id: 6,
      name: "TAB",
      shortName: "TAB",
      image: "/deleteable/npl/TAB.png",
      primaryColor: "#F39C12",
      secondaryColor: "#D35400",
    },
    isFinished: false,
    venue: "Pokhara Stadium",
    date: "2024-12-18T09:00:00",
    wonBy: "",
  },
  {
    id:30,
    team1: {
      id: 3,
      name: "TAB",
      shortName: "TAB",
      image: "/deleteable/npl/TAB.png",
      primaryColor: "#8E44AD",
      secondaryColor: "#34495E",
    },
    team2: {
      id: 7,
      name: "TAB",
      shortName: "TAB",
      image: "/deleteable/npl/TAB.png",
      primaryColor: "#C0392B",
      secondaryColor: "#ECF0F1",
    },
    isFinished: false,
    venue: "Kathmandu Stadium",
    date: "2024-12-18T13:00:00",
    wonBy: "",
  },
  {
    id:31,
    team1: {
      id: 2,
      name: "TAB",
      shortName: "TAB",
      image: "/deleteable/npl/TAB.png",
      primaryColor: "#3498DB",
      secondaryColor: "#2ECC71",
    },
    team2: {
      id: 8,
      name: "TAB",
      shortName: "TAB",
      image: "/deleteable/npl/TAB.png",
      primaryColor: "#2980B9",
      secondaryColor: "#D35400",
    },
    isFinished: false,
    venue: "Dhangadhi Stadium",
    date: "2024-12-19T12:00:00",
    wonBy: "",
  },
  {
    id:32,
    team1: {
      id: 1,
      name: "TAB",
      shortName: "TAB",
      image: "/deleteable/npl/TAB.jpg",
      primaryColor: "#1A1A1A",
      secondaryColor: "#FF5733",
    },
    team2: {
      id: 4,
      name: "TAB",
      shortName: "TAB",
      image: "/deleteable/npl/TAB.png",
      primaryColor: "#E74C3C",
      secondaryColor: "#2C3E50",
    },
    isFinished: false,
    venue: "Biratnagar Stadium",
    date: "2024-12-21T12:00:00",
    wonBy: "",
  },
];
