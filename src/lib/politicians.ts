export interface PoliticianClient {
  name: string;
  role?: string;
  party?: "INC" | "BJP";
  partyName?: string;
  image: string;
  badge?: string;
  reach?: string;
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export const politicianClients: PoliticianClient[] = [
  {
    name: "Randeep Singh Surjewala",
    role: "Member of Parliament (Rajya Sabha). General Secretary, Indian National Congress. Member, CWC.",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/randeep-singh-surjewala.png",
    socials: {
      instagram: "https://www.instagram.com/rssurjewala",
    },
  },
  {
    name: "Aditya Surjewala",
    role: "MLA, Kaithal Vidhan Sabha",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/aditya-surjewala.png",
    socials: {
      instagram: "https://www.instagram.com/adityasurjewala/",
    },
  },
  {
    name: "Gurkirat Singh Kotli",
    role: "Former MLA, Khanna",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/gurkirat-singh-kotli.png",
    socials: {
      instagram: "https://www.instagram.com/gurkiratskotli",
    },
  },
  {
    name: "Shamsher Singh Gogi",
    role: "EX-MLA, Assandh",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/shamsher-singh-gogi.png",
    socials: {
      facebook: "https://www.facebook.com/ssgogiofficial",
    },
  },
  {
    name: "Bhupinder Lather",
    role: "Gharaunda Constituency",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/bhupinder-lather.png",
    socials: {
      instagram: "https://www.instagram.com/latherbhupi",
    },
  },
  {
    name: "Umesh Sharma",
    role: "Senior Leader",
    image: "/politicians/umesh-sharma.png",
    socials: {
      facebook: "https://www.facebook.com/UmeshSharmaSnp",
    },
  },
];
