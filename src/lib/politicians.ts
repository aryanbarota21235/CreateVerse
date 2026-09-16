export interface PoliticianClient {
  name: string;
  role: string;
  party: "INC" | "BJP";
  partyName: string;
  image: string;
  badge: string;
  reach: string;
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export const politicianClients: PoliticianClient[] = [
  {
    name: "Randeep Singh Surjewala",
    role: "Member of Parliament (Rajya Sabha) · General Secretary AICC",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/randeep-singh-surjewala.png",
    badge: "National Leadership",
    reach: "4.2M+ Reach",
    socials: {
      instagram: "https://www.instagram.com/rssurjewala/",
      facebook: "https://www.facebook.com/rssurjewala/",
      twitter: "https://x.com/rssurjewala",
    },
  },
  {
    name: "Aditya Surjewala",
    role: "MLA Kalayat · All India Youth Congress Leader",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/aditya-surjewala.png",
    badge: "Youth Leadership",
    reach: "1.8M+ Reach",
    socials: {
      instagram: "https://www.instagram.com/adityasurjewala/",
      facebook: "https://www.facebook.com/adityasurjewala.inc/",
      twitter: "https://x.com/adityasurjewala",
    },
  },
  {
    name: "Bhupinder Lather",
    role: "Senior Leader · Campaign & Organization Strategist",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/bhupinder-lather.png",
    badge: "State Strategy",
    reach: "950K+ Reach",
    socials: {
      instagram: "https://www.instagram.com/bhupinder_lather/",
      facebook: "https://www.facebook.com/bhupinder.lather/",
    },
  },
  {
    name: "Umesh Sharma",
    role: "Senior Leader · State Executive Member",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    image: "/politicians/umesh-sharma.png",
    badge: "Constituency Lead",
    reach: "1.2M+ Reach",
    socials: {
      instagram: "https://www.instagram.com/umeshsharmabjp/",
      facebook: "https://www.facebook.com/umeshsharma.bjp/",
    },
  },
  {
    name: "Kawal Singh Dhillon",
    role: "Senior Leader · Strategic Operations",
    party: "BJP",
    partyName: "Bharatiya Janata Party",
    image: "/politicians/kawal-singh-dhillon.png",
    badge: "Regional Incharge",
    reach: "820K+ Reach",
    socials: {
      instagram: "https://www.instagram.com/kawalsinghdhillon/",
      facebook: "https://www.facebook.com/kawal.singh.dhillon/",
    },
  },
  {
    name: "Shamsher Singh Gogi",
    role: "Ex-MLA Assandh · Senior State Leader",
    party: "INC",
    partyName: "Indian National Congress",
    image: "/politicians/shamsher-singh-gogi.png",
    badge: "Grassroots Mobilizer",
    reach: "1.1M+ Reach",
    socials: {
      instagram: "https://www.instagram.com/shamsher_singh_gogi/",
      facebook: "https://www.facebook.com/shamsher.singh.gogi/",
    },
  },
];
