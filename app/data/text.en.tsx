import { Instagram, Linkedin, Music, X, Youtube } from "lucide-react";

export const backGroundSlideImages: string[] = [
  "/404-image.png",
  "https://plus.unsplash.com/premium_photo-1664193516160-27a3fa05901e?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1677530604826-badbdca29b3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const services: string[] = [
  "Indoor",
  "Outdoor Plants",
  "Flowering Plants",
  "Decorative Plants",
];

export const homePageImages: string[] = [
  "/plants/1.webp",
  "/plants/2.jpeg",
  "/plants/3.jpg",
  "/plants/1.webp",
  "/plants/2.jpeg",
  "/plants/3.jpg",
];
export const heading: string = "NATURE’S COLLECTION";
export const tagLine: string = "A Curated Selection of Lush, Living Plants";
export const businessName: string = "PURE PLANTS";
export const videoUrl: string =
  "https://video-previews.elements.envatousercontent.com/h264-video-previews/34b4f82d-339a-4c07-ba47-e8a87ded3de1/2733283.mp4";

interface IMenuItem {
  label: string;
  href: string;
}

export const menuItems: IMenuItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PRODUCTS", href: "/products" },
  { label: "CONTACT", href: "/contact" },
];

interface iconsinFooterI {
  href: string;
  ariaLabel: string;
  iconComponent: JSX.Element;
}

export const iconsinFooter: iconsinFooterI[] = [
  {
    href: "#",
    ariaLabel: "Twitter",
    iconComponent: <X size={20} />,
  },
  {
    href: "#",
    ariaLabel: "Instagram",
    iconComponent: <Instagram size={20} />,
  },
  {
    href: "#",
    ariaLabel: "LinkedIn",
    iconComponent: <Linkedin size={20} />,
  },
  {
    href: "#",
    ariaLabel: "TikTok",
    iconComponent: <Music size={20} />,
  },
  {
    href: "#",
    ariaLabel: "YouTube",
    iconComponent: <Youtube size={20} />,
  },
];

export const businessIntro: string = `Welcome to ${businessName}, your green haven. Explore a lush variety of plants, elevate your garden space, and connect with nature. Contact us today for quotes`;
export const copyRightText: string = `© 2024 ${businessName}. All rights reserved`;

interface SubLinksI {
  linkName: string;
  href: string;
}
interface FooterLinksI {
  heading: string;
  subLinks: SubLinksI[];
}

export const FooterLinks: FooterLinksI[] = [
  {
    heading: "Product",
    subLinks: [
      { linkName: "Home", href: "/" },
      { linkName: "All Products", href: "/products" },
      { linkName: "Promotions", href: "#" },
    ],
  },
  {
    heading: "Company",
    subLinks: [
      { linkName: "Contact", href: "/contact" },
      { linkName: "Blog", href: "#" },
      { linkName: "FAQ", href: "#" },
    ],
  },
  {
    heading: "Catalogue",
    subLinks: [
      { linkName: "Indoor Plants", href: "#" },
      { linkName: "Outdoor Plants", href: "#" },
      { linkName: "Flowering Plants", href: "#" },
      { linkName: "Pots & Planters", href: "#" },
      { linkName: "Gardening Tools", href: "#" },
      { linkName: "Corporate Gifting", href: "#" },
    ],
  },
];

interface AllProductsImagesI {
  imageUrl: string;
  plantName: string;
  category: "Outdoor" | "Indoor" | "Flower" | "Decorative" | "Gift";
  sizesAvailable?: string[];
}

export const plantSizes: string[] = ["20*20", "19*19", "15*16", "10*8", "5*6"];
interface CategoryI {
  categoryName: string;
  availableTypes: number;
}
export const categories: CategoryI[] = [
  { categoryName: "Outdoor", availableTypes: 120 },
  { categoryName: "Indoor", availableTypes: 80 },
  { categoryName: "Flower", availableTypes: 65 },
  { categoryName: "Decorative", availableTypes: 50 },
  { categoryName: "Gift", availableTypes: 95 },
];

export const AllProductsImages: AllProductsImagesI[] = [
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    plantName: "Premium Plant",
    category: "Decorative",
    sizesAvailable: ["20*20", "19*20"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1630278381578-392f31f110c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    plantName: "Tolga",
    category: "Decorative",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1751677524360-978c93b2c0b2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    plantName: "Sea Sail",
    category: "Outdoor",
    sizesAvailable: ["20*20", "19*20", "16*32"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1643212482805-d2c7ff1cc661?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    plantName: "Sarina",
    category: "Decorative",
    sizesAvailable: ["20*20", "19*20"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1685977706328-7db7f86db70d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    plantName: "Yellow Phile",
    category: "Flower",
    sizesAvailable: ["8*8", "5*5"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1644820864412-2e08f6f7c975?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    plantName: "Evengeline",
    category: "Decorative",
    sizesAvailable: ["8*8", "10*10"],
  },
];
