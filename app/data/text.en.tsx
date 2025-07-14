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
