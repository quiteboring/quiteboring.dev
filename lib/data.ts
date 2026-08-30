import { FiHome, FiFolder, FiUser } from "react-icons/fi";

export const discordId = "1441859003708866601";

export const sections = [
  { id: "home", label: "Home", icon: FiHome },
  { id: "about", label: "About Me", icon: FiUser },
  { id: "projects", label: "Projects", icon: FiFolder },
];

export const projects = [
  {
    title: "Cobalt",
    desc: "A free Hypixel Skyblock oriented mod for Fabric",
    tags: ["Kotlin", "Java", "Typescript", "DiscordJS", "NextJS", "Tailwind"],
  },
  {
    title: "Bloom",
    desc: "An all-in-one Hypixel SkyBlock client built for Fabric.",
    tags: ["Kotlin", "Java", "Go", "Python", "Rust"],
  },
  {
    title: "V5",
    desc: "Next-generation client Hypixel Skyblock client.",
    tags: ["Kotlin", "Java", "Javascript", "Typescript", "C#", "C++", "CMake"],
  },
  {
    title: "Zylo",
    desc: "Simple app for offline music.",
    tags: ["Javascript", "Expo", "React Native"],
  },
  {
    title: "SlayerXPOverlayFabric",
    desc: "A Fabric mod for Minecraft that overlays Slayer XP, kills per hour, and quest progress directly on your screen.",
    tags: ["Kotlin", "Java"],
  }
];
