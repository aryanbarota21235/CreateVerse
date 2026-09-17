export interface PoliticianClient {
  name: string;
  slug?: string;
  href?: string;
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
    slug: "randeep-singh-surjewala",
    href: "/clients/randeep-singh-surjewala",
    role: "Member of Parliament (Rajya Sabha). General Secretary, INC",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/randeep-singh-surjewala.webp",
    socials: {
      facebook: "https://www.facebook.com/rssurjewala",
      instagram: "https://www.instagram.com/rssurjewala",
      twitter: "https://x.com/rssurjewala",
    },
  },
  {
    name: "Aditya Surjewala",
    slug: "aditya-surjewala",
    href: "/clients/aditya-surjewala",
    role: "MLA, Kaithal Vidhan Sabha",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/aditya-surjewala.webp",
    socials: {
      facebook: "https://www.facebook.com/AdityaSurjewala",
      instagram: "https://www.instagram.com/adityasurjewala/",
      twitter: "https://x.com/adityasurjewala",
    },
  },
  {
    name: "Gurkirat Singh Kotli",
    role: "Former MLA, Khanna",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/gurkirat-singh-kotli.webp",
    socials: {
      instagram: "https://www.instagram.com/gurkiratskotli",
    },
  },
  {
    name: "Shamsher Singh Gogi",
    role: "EX-MLA, Assandh",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/shamsher-singh-gogi.webp",
    socials: {
      facebook: "https://www.facebook.com/ssgogiofficial",
    },
  },
  {
    name: "Bhupinder Lather",
    slug: "bhupinder-lather",
    href: "/clients/bhupinder-lather",
    role: "Political Leader & Social Worker, Karnal",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/bhupinder-lather.webp",
    socials: {
      instagram: "https://www.instagram.com/latherbhupi",
    },
  },
  {
    name: "Kewal Singh Dhillon",
    role: "BJP President, Punjab",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    image: "/politicians/kewal-singh-dhillon.webp",
    socials: {},
  },
  {
    name: "Umesh Sharma",
    role: "Senior Leader",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    image: "/politicians/umesh-sharma.webp",
    socials: {
      facebook: "https://www.facebook.com/UmeshSharmaSnp",
    },
  },
];
