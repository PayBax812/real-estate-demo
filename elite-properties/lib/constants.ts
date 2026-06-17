// ============================================================
// ELITE PROPERTIES — DATA CONSTANTS
// ============================================================

export const COMPANY = {
  name: "Elite Properties",
  fullName: "Elite Properties Real Estate Consultant",
  tagline: "Premium Real Estate Consultancy",
  phone: "+91 98765 43210",
  email: "info@eliteproperties.in",
  whatsapp: "919876543210",
  address: "Office No. 12, 2nd Floor, Kapil Towers, Kothrud, Pune, Maharashtra 411038",
  googleRating: 4.9,
  googleReviews: 287,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3494497503395!2d73.80776!3d18.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKothrud%2C+Pune!5e0!3m2!1sen!2sin!4v1",
  social: {
    instagram: "https://instagram.com/eliteproperties",
    facebook: "https://facebook.com/eliteproperties",
    linkedin: "https://linkedin.com/company/eliteproperties",
    youtube: "https://youtube.com/@eliteproperties",
    twitter: "https://twitter.com/eliteproperties",
  },
  hours: "Mon – Sat: 10:00 AM – 7:00 PM | Sun: By Appointment",
};

export const STATS = [
  { value: 287, suffix: "+", label: "Google Reviews", prefix: "" },
  { value: 4.9, suffix: "★", label: "Average Rating", prefix: "", decimals: 1 },
  { value: 1000, suffix: "+", label: "Happy Clients", prefix: "" },
  { value: 500, suffix: "Cr+", label: "Property Transactions", prefix: "₹" },
];

export interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  type: "Residential" | "Commercial";
  mode: "Buy" | "Rent";
  area: string;
  bedrooms: number;
  badge?: string;
  image: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 1,
    name: "Lodha Belmondo",
    location: "Gahunje, Pune",
    price: "₹1.85 Cr",
    type: "Residential",
    mode: "Buy",
    area: "1,450 sq.ft.",
    bedrooms: 3,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    name: "VTP Pegasus",
    location: "Kharadi, Pune",
    price: "₹95 Lakh",
    type: "Residential",
    mode: "Buy",
    area: "1,100 sq.ft.",
    bedrooms: 2,
    badge: "Best Deal",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Godrej Infinity",
    location: "Keshav Nagar, Pune",
    price: "₹1.25 Cr",
    type: "Residential",
    mode: "Buy",
    area: "1,250 sq.ft.",
    bedrooms: 3,
    badge: "New",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Panchshil Towers",
    location: "Kharadi, Pune",
    price: "₹55,000/mo",
    type: "Commercial",
    mode: "Rent",
    area: "2,200 sq.ft.",
    bedrooms: 0,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Kumar Privie Sanctum",
    location: "Baner, Pune",
    price: "₹2.10 Cr",
    type: "Residential",
    mode: "Buy",
    area: "1,750 sq.ft.",
    bedrooms: 4,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Regus Business Centre",
    location: "Hinjewadi, Pune",
    price: "₹35,000/mo",
    type: "Commercial",
    mode: "Rent",
    area: "1,000 sq.ft.",
    bedrooms: 0,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
  },
];

export interface Project {
  id: number;
  builder: string;
  name: string;
  startingPrice: string;
  location: string;
  possession: string;
  image: string;
  config: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    builder: "Lodha Group",
    name: "Lodha Solitaire",
    startingPrice: "₹1.45 Cr",
    location: "Hinjewadi, Pune",
    possession: "Dec 2027",
    config: "2, 3 & 4 BHK",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    builder: "Sobha Limited",
    name: "Sobha Dream Acres",
    startingPrice: "₹89 Lakh",
    location: "Balewadi, Pune",
    possession: "Jun 2026",
    config: "1, 2 & 3 BHK",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    builder: "Godrej Properties",
    name: "Godrej Eternity",
    startingPrice: "₹1.15 Cr",
    location: "Keshav Nagar, Pune",
    possession: "Mar 2027",
    config: "2 & 3 BHK",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&h=400&fit=crop&q=80",
  },
];

export interface Area {
  name: string;
  properties: number;
  image: string;
}

export const AREAS: Area[] = [
  { name: "Kothrud", properties: 45, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop&q=80" },
  { name: "Baner", properties: 62, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&q=80" },
  { name: "Bavdhan", properties: 38, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop&q=80" },
  { name: "Wakad", properties: 54, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop&q=80" },
  { name: "Hinjewadi", properties: 71, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&q=80" },
  { name: "Balewadi", properties: 33, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop&q=80" },
  { name: "Aundh", properties: 48, image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400&h=300&fit=crop&q=80" },
  { name: "Pashan", properties: 29, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&q=80" },
];

export interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
  image: string;
  designation?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    review: "Elite Properties helped us find our dream 3BHK in Baner. Their market knowledge and transparency made the entire process seamless. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    designation: "IT Professional",
  },
  {
    id: 2,
    name: "Priya Kulkarni",
    review: "As an NRI, buying property in Pune was daunting. The team guided me through every step — legal verification, documentation, and even post-purchase support. Outstanding service!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    designation: "NRI Buyer, USA",
  },
  {
    id: 3,
    name: "Amit Deshmukh",
    review: "Invested in a commercial property in Hinjewadi on their advice. The ROI has been fantastic. Their investment advisory is truly top-notch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
    designation: "Business Owner",
  },
  {
    id: 4,
    name: "Sneha Patil",
    review: "The team at Elite Properties is incredibly professional and patient. They showed us multiple options within our budget and never pressured us. Found our perfect home in Kothrud!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    designation: "Doctor",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    review: "I sold my property through Elite Properties and got the best market price. Their negotiation skills and marketing approach are impressive.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    designation: "Retired Professional",
  },
  {
    id: 6,
    name: "Ananya Mehta",
    review: "From property search to registration, Elite Properties handled everything professionally. The 4.9 Google rating is well-deserved. Thank you for making our dream come true!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
    designation: "Software Engineer",
  },
];

export const SERVICES = [
  "Residential Property Sales",
  "Commercial Property Sales",
  "Investment Advisory",
  "New Project Consultation",
  "Property Resale",
  "Rental Services",
  "NRI Property Consultation",
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const BUDGET_OPTIONS = [
  "Under ₹50 Lakh",
  "₹50 Lakh – ₹1 Cr",
  "₹1 Cr – ₹2 Cr",
  "₹2 Cr – ₹5 Cr",
  "Above ₹5 Cr",
];

export const PROPERTY_TYPES = [
  "1 BHK Apartment",
  "2 BHK Apartment",
  "3 BHK Apartment",
  "4+ BHK Apartment",
  "Villa / Row House",
  "Commercial Office",
  "Commercial Shop",
  "Plot / Land",
];

export const LOCATIONS = [
  "Kothrud",
  "Baner",
  "Bavdhan",
  "Wakad",
  "Hinjewadi",
  "Balewadi",
  "Aundh",
  "Pashan",
  "Kharadi",
  "Viman Nagar",
];

export const TOTAL_FRAMES = 144;
export const FRAME_PATH = "/frames/";
