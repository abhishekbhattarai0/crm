import {
  CopyCheck,
  Home,
  LayoutDashboard,
  LockIcon,
  LucideWebhook,
  Clock5,
  Users2,
} from "lucide-react";
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdOutlineCelebration } from "react-icons/md";

export const sidebarCategories = [
  {
    icon: Home,
    title: "Dashboard",
    link: "dashboard",
  },
  {
    icon: LayoutDashboard,
    title: "Apps",
    link: "Apps",
  },
  {
    icon: LucideWebhook,
    title: "Uikit",
    link: "Uikit",
  },
  {
    icon: CopyCheck,
    title: "Pages",
    link: "Pages",
  },
  {
    icon: LockIcon,
    title: "Authentication",
    link: "Authentication",
  },
];

export const dashboardCategories = [
  {
    title: "Analytics",
    link: "/dashboard/analytics",
  },
  {
    title: "Crypto",
    link: "Crm",
  },
  {
    title: "Project",
    link: "",
  },
  {
    title: "Ecommerce",
    link: "",
  },
  {
    title: "Helpdesk",
    link: "",
  },
  {
    title: "Hospital",
    link: "",
  },
];

export const appsCategories = [
  {
    title: "Analytics",
    link: "",
    children: [
      {
        title: "Customers",
        link: "customers",
      },
      {
        title: "Reports",
        link: "reports",
      },
    ],
  },
  {
    title: "Crypto",
    link: "",
    children: [
      {
        title: "Exchange",
        link: "",
      },
      {
        title: "Wallet",
        link: "",
      },
      {
        title: "Crypto News",
        link: "",
      },
      {
        title: "ICO List",
        link: "",
      },
      {
        title: "Settings",
        link: "",
      },
    ],
  },
  {
    title: "crm",
    link: "",
    children: [
      {
        title: "Contacts",
        link: "contacts",
      },
      {
        title: "Opportunities",
        link: "",
      },
      {
        title: "Leads",
        link: "",
      },
      {
        title: "Customers",
        link: "",
      },
    ],
  },
  {
    title: "Projects",
    link: "",
    children: [
      {
        title: "Clients",
        link: "",
      },
      {
        title: "Team",
        link: "",
      },
      {
        title: "Project",
        link: "",
      },
      {
        title: "Task",
        link: "",
      },
    ],
  },
  {
    title: "Helpdesk",
    link: "",
  },
  {
    title: "Hospital",
    link: "",
  },
];

export const analayticsCardInfo = [
  {
    title: "Sessions",
    total: "24k",
    rate: -8.5,
    Icon: Users2,
    desc: "New Sessions Today",
  },
  {
    title: "Avg.Sessions",
    total: "24k",
    rate: 8.5,
    Icon: Clock5,
    desc: "Weekly Avg.Sessions",
  },
  {
    title: "Sessions",
    total: "24k",
    rate: 8.5,
    Icon: TbActivityHeartbeat,
    desc: "Bounce Rate Weekly",
  },
  {
    title: "Sessions",
    total: "24k",
    rate: 8.5,
    Icon: MdOutlineCelebration,
    desc: "Completions Weekly",
  },
  // {
  //     title: 'Sessions',
  //     total: '24k',
  //     rate: 8.5,
  //     Icon: IoTrendingUpOutline,
  //     desc: ''
  // },
];

export const leadReportData = [
  {
    lead: "John Carter",
    email: "john.carter@example.com",
    phoneNo: "+1 555 234 6789",
    company: "TechNova Inc.",
    status: "New",
    action: "View",
    profileUrl: "/images/profiles/john.png",
  },
  {
    lead: "Emily Watson",
    email: "emily.watson@example.com",
    phoneNo: "+44 20 7946 0958",
    company: "Bright Solutions",
    status: "Contacted",
    action: "Follow Up",
    profileUrl: "/images/profiles/emily.png",
  },
  {
    lead: "Michael Lee",
    email: "michael.lee@example.com",
    phoneNo: "+91 98765 43210",
    company: "Cloudify Labs",
    status: "Qualified",
    action: "Schedule Call",
    profileUrl: "/images/profiles/michael.png",
  },
  {
    lead: "Sophia Brown",
    email: "sophia.brown@example.com",
    phoneNo: "+61 412 345 678",
    company: "NextGen Systems",
    status: "In Progress",
    action: "Send Proposal",
    profileUrl: "/images/profiles/sophia.png",
  },
  {
    lead: "Daniel Kim",
    email: "daniel.kim@example.com",
    phoneNo: "+82 10 3456 7890",
    company: "AlphaWorks",
    status: "Closed",
    action: "Archive",
    profileUrl: "/images/profiles/daniel.png",
  },
];



export const contactsData: Contact[] = [
  {
    id: 1,
    name: "Donald Gardner",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=1",
    email: "donald@gmail.com",
    phone: "+123456789",
    leadScore: 68,
    company: "Starbucks Coffee",
    tags: ["tech", "another"]
  },
  {
    id: 2,
    name: "Matt Rosales",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=2",
    email: "matt@gmail.com",
    phone: "+123456789",
    leadScore: 112,
    company: "Mac Donald",
    tags: ["another", "marketing"]
  },
  {
    id: 3,
    name: "Michael Hill",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=3",
    email: "michael@gmail.com",
    phone: "+123456789",
    leadScore: 64,
    company: "Life Good",
    tags: ["tech", "another"]
  },
  {
    id: 4,
    name: "Nancy Flanary",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "nancy@gmail.com",
    phone: "+123456789",
    leadScore: 124,
    company: "Flipcart",
    tags: ["tech", "marketing"]
  },
  {
    id: 5,
    name: "Dorothy Key",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "dorothy@gmail.com",
    phone: "+123456789",
    leadScore: 33,
    company: "Adidas",
    tags: ["something"]
  },
  {
    id: 6,
    name: "Joseph Cross",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=6",
    email: "joseph@gmail.com",
    phone: "+123456789",
    leadScore: 84,
    company: "Reebok",
    tags: ["tech", "another", "something"]
  },
  {
    id: 7,
    name: "Sarah Johnson",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=7",
    email: "sarah@gmail.com",
    phone: "+123456789",
    leadScore: 95,
    company: "Nike",
    tags: ["marketing"]
  },
  {
    id: 8,
    name: "James Miller",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "james@gmail.com",
    phone: "+123456789",
    leadScore: 140,
    company: "Amazon",
    tags: ["tech", "cloud"]
  },
  {
    id: 9,
    name: "Emma Watson",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=9",
    email: "emma@gmail.com",
    phone: "+123456789",
    leadScore: 77,
    company: "Netflix",
    tags: ["media"]
  },
  {
    id: 10,
    name: "Daniel Smith",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "daniel@gmail.com",
    phone: "+123456789",
    leadScore: 56,
    company: "Spotify",
    tags: ["music", "tech"]
  },
  {
    id: 11,
    name: "Olivia Brown",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=11",
    email: "olivia@gmail.com",
    phone: "+123456789",
    leadScore: 101,
    company: "Apple",
    tags: ["tech", "design"]
  },
  {
    id: 12,
    name: "Liam Wilson",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "liam@gmail.com",
    phone: "+123456789",
    leadScore: 43,
    company: "Samsung",
    tags: ["hardware"]
  },
  {
    id: 13,
    name: "Sophia Lee",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=13",
    email: "sophia@gmail.com",
    phone: "+123456789",
    leadScore: 89,
    company: "LG",
    tags: ["electronics"]
  },
  {
    id: 14,
    name: "Noah Anderson",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=14",
    email: "noah@gmail.com",
    phone: "+123456789",
    leadScore: 120,
    company: "Tesla",
    tags: ["auto", "tech"]
  },
  {
    id: 15,
    name: "Ava Martinez",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "ava@gmail.com",
    phone: "+123456789",
    leadScore: 72,
    company: "Uber",
    tags: ["logistics"]
  },
  {
    id: 16,
    name: "Ethan Clark",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "ethan@gmail.com",
    phone: "+123456789",
    leadScore: 59,
    company: "Airbnb",
    tags: ["travel"]
  },
  {
    id: 17,
    name: "Mia Lewis",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=17",
    email: "mia@gmail.com",
    phone: "+123456789",
    leadScore: 110,
    company: "Booking.com",
    tags: ["travel", "marketing"]
  },
  {
    id: 18,
    name: "Lucas Walker",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=18",
    email: "lucas@gmail.com",
    phone: "+123456789",
    leadScore: 67,
    company: "Oracle",
    tags: ["enterprise"]
  },
  {
    id: 19,
    name: "Isabella Hall",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=19",
    email: "isabella@gmail.com",
    phone: "+123456789",
    leadScore: 130,
    company: "Microsoft",
    tags: ["cloud", "tech"]
  },
  {
    id: 20,
    name: "Henry Young",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "henry@gmail.com",
    phone: "+123456789",
    leadScore: 48,
    company: "Intel",
    tags: ["hardware"]
  },
  {
    id: 21,
    name: "Charlotte King",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=21",
    email: "charlotte@gmail.com",
    phone: "+123456789",
    leadScore: 92,
    company: "Dell",
    tags: ["enterprise"]
  },
  {
    id: 22,
    name: "Benjamin Wright",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=22",
    email: "benjamin@gmail.com",
    phone: "+123456789",
    leadScore: 61,
    company: "HP",
    tags: ["hardware"]
  },
  {
    id: 23,
    name: "Amelia Lopez",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=23",
    email: "amelia@gmail.com",
    phone: "+123456789",
    leadScore: 117,
    company: "PayPal",
    tags: ["finance"]
  },
  {
    id: 24,
    name: "Logan Scott",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=24",
    email: "logan@gmail.com",
    phone: "+123456789",
    leadScore: 53,
    company: "Stripe",
    tags: ["payments"]
  },
  {
    id: 25,
    name: "Harper Adams",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=25",
    email: "harper@gmail.com",
    phone: "+123456789",
    leadScore: 105,
    company: "Square",
    tags: ["finance", "tech"]
  },
  {
    id: 26,
    name: "Jack Turner",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=26",
    email: "jack@gmail.com",
    phone: "+123456789",
    leadScore: 44,
    company: "Zoom",
    tags: ["communication"]
  },
  {
    id: 27,
    name: "Ella Perez",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=27",
    email: "ella@gmail.com",
    phone: "+123456789",
    leadScore: 136,
    company: "Slack",
    tags: ["saas"]
  },
  {
    id: 28,
    name: "William Baker",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=28",
    email: "william@gmail.com",
    phone: "+123456789",
    leadScore: 58,
    company: "Atlassian",
    tags: ["saas", "dev"]
  },
  {
    id: 29,
    name: "Grace Nelson",
    isNew: true,
    avatar: "https://i.pravatar.cc/150?img=29",
    email: "grace@gmail.com",
    phone: "+123456789",
    leadScore: 99,
    company: "GitHub",
    tags: ["dev", "tech"]
  },
  {
    id: 30,
    name: "Ryan Carter",
    isNew: false,
    avatar: "https://i.pravatar.cc/150?img=30",
    email: "ryan@gmail.com",
    phone: "+123456789",
    leadScore: 71,
    company: "Vercel",
    tags: ["frontend", "saas"]
  }
];

export type Contact = {
  id: number
  name: string
  isNew: boolean
  avatar: string
  email: string
  phone: string
  leadScore: number
  company: string
  tags: string[]
}
