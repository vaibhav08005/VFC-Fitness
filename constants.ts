import { Discipline, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "MISSION", href: "#manifesto" },
  { label: "PROGRAMS", href: "#disciplines" },
  { label: "LOCATION", href: "#locations" },
  { label: "JOIN NOW", href: "#membership" },
];

export const DISCIPLINES: Discipline[] = [
  {
    id: "01",
    title: "CARDIO",
    description: "Advanced treadmill and elliptical stations for endurance.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "STRENGTH",
    description: "Heavy iron. Free weights and resistance machines.",
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "CROSSFIT",
    description: "Functional fitness to prepare you for life's challenges.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "PT",
    description: "Expert Personal Trainers to guide your transformation.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "05",
    title: "STEAM",
    description: "Post-workout recovery and relaxation facilities.",
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070&auto=format&fit=crop"
  }
];