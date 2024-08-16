import { Edit } from "lucide-react";
import { Key } from "lucide-react";
import { MessageCircle } from "lucide-react";

export const features = [
  {
    title: "Real-Time Editing",
    description:
      "Collaborate seamlessly with your team by editing documents simultaneously. See changes in real-time, ensuring everyone stays aligned and up-to-date.",
    icon: <Edit className="w-6 h-6 text-primary-foreground" />,
    image: "/realtimeediting.png",
  },
  {
    title: "Advanced Permissions",
    description:
      "Control who can view or edit your documents with flexible permission settings. Share confidently, knowing your information is secure.",
    icon: <Key className="w-6 h-6 text-primary-foreground" />,
    image: "/permission.png",
  },
  {
    title: "In-Document Comments",
    description:
      "Enhance communication by adding comments directly to specific parts of the document. Start conversations, suggest edits, and resolve issues without leaving the document.",
    icon: <MessageCircle className="w-6 h-6 text-primary-foreground" />,
    image: "/comments.png",
  },
];

export const pricing = [
  {
    title: "Basic",
    price: "$9",
    features: [
      "Real-Time Editing",
      "Advanced Permissions",
      "In-Document Comments",
    ],
    benefits: ["Unlimited collaborators", "Document history"],
    cta: "Get Started",
  },
  {
    title: "Professional",
    price: "$29",
    features: [
      "Real-Time Editing",
      "Advanced Permissions",
      "In-Document Comments",
      "Collaboration tools",
      "Document sharing",
      "Project management",
    ],
    benefits: [
      "Unlimited collaborators",
      "Document history",
      "Customizable templates",
    ],
    cta: "Comming soon",
  },
];
