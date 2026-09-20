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
    role: "MP (Rajya Sabha). General Secretary, INC",
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
    name: "Kewal Singh Dhillon",
    slug: "kewal-singh-dhillon",
    href: "/clients/kewal-singh-dhillon",
    role: "BJP President, Punjab",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    image: "/politicians/kewal-singh-dhillon.webp",
    socials: {
      facebook: "https://www.facebook.com/kewalsinghdhillon/",
    },
  },
  {
    name: "Gurkirat Singh Kotli",
    slug: "gurkirat-singh-kotli",
    href: "/clients/gurkirat-singh-kotli",
    role: "Former MLA, Khanna",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/gurkirat-singh-kotli.webp",
    socials: {
      instagram: "https://www.instagram.com/gurkiratskotli",
      facebook: "https://www.facebook.com/gurkiratskotliofficial",
    },
  },
  {
    name: "Shamsher Singh Gogi",
    slug: "shamsher-singh-gogi",
    href: "/clients/shamsher-singh-gogi",
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
    name: "Rajiv Mamuram Gonder",
    slug: "rajiv-mamuram-gonder",
    href: "/clients/rajiv-mamuram-gonder",
    role: "Public Representative & Leader, Nilokheri",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/rajiv-mamuram-gonder.webp",
    socials: {
      facebook: "https://www.facebook.com/RajivGondarOfficial",
      instagram: "https://www.instagram.com/rajivgonderofficial",
      twitter: "https://x.com/RajivMGonder",
    },
  },
  {
    name: "Umesh Sharma",
    slug: "umesh-sharma",
    href: "/clients/umesh-sharma",
    role: "Senior Political Leader & Social Worker",
    image: "/politicians/umesh-sharma.webp",
    socials: {
      facebook: "https://www.facebook.com/UmeshSharmaSnp",
    },
  },
  {
    name: "Subhash Sudha",
    slug: "subhash-sudha",
    href: "/subhash-sudha",
    role: "Former Minister of State | Former MLA, Thanesar",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    image: "/politicians/subhash-sudha.webp",
    socials: {
      facebook: "https://www.facebook.com/SubhashSudhaOfficial/",
      instagram: "https://www.instagram.com/officialsubhashsudha/",
      twitter: "https://x.com/subashsudha3",
    },
  },
];
