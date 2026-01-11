import { ChartColumn, FileText, Swords, Timer, Trophy, Users, Zap } from "lucide-react";

export const studentImages = [
  {
    url:"/images/student2.png",
  },
  {
    url: "/images/student2.png",
  },
  {
    url: "/images/student3.png",
  },
  {
    url: "/images/student4.png",
  },
  {
    url: "/images/student5.png"
  },
  {
    url: "/images/student6.png"
  },
];
export const learnMoreFeturesData = [
  {
    id: 1,
    title: "Study Wager",
    description:
      "Challenge friends. Put ₹40–₹10,000 on the line. Winner takes the bragging rights and the pot.",
    icon: "Trophy",
    iconBgColor: "bg-orange-50",
    iconColor: "text-orange-500",
    href: "/study-wager",
    learnMoreColor: "text-orange-500",
  },
  {
    id: 2,
    title: "Live Tutoring",
    description:
      "1 click rooms, screen share, and a clean whiteboard to sketch ideas fast.",
    icon: "Video",
    iconBgColor: "bg-cyan-50",
    iconColor: "text-cyan-500",
    href: "/live-tutoring",
    learnMoreColor: "text-cyan-500",
  },
  {
    id: 3,
    title: "Smart Notes",
    description:
      "Intelligent notes by subject. Add private or public notes, and search exactly what you need.",
    icon: "FileText",
    iconBgColor: "bg-emerald-50",
    iconColor: "text-emerald-500",
    href: "/smart-notes",
    learnMoreColor: "text-emerald-500",
  },
  {
    id: 4,
    title: "Progress Analytics",
    description:
      "Auto-track time spent. A clean line graph: Wager, Tutoring, Notes. Totals at a glance.",
    icon: "BarChart3",
    iconBgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    href: "/analytics",
    learnMoreColor: "text-blue-500",
  },
  {
    id: 5,
    title: "Study Wager Pro",
    description:
      "Challenge friends. Put ₹40–₹10,000 on the line. Winner takes the bragging rights and the pot.",
    icon: "Brain",
    iconBgColor: "bg-violet-50",
    iconColor: "text-violet-500",
    href: "/study-wager-pro",
    learnMoreColor: "text-violet-500",
  },
  {
    id: 6,
    title: "About StudyStakes",
    description:
      "Founded by Electrical Engineers & CS pros. Built on real pedagogy + solid tech.",
    icon: "Info",
    iconBgColor: "bg-cyan-50",
    iconColor: "text-cyan-500",
    href: "/about",
    learnMoreColor: "text-cyan-500",
  },
  {
    id: 7,
    title: "Pro Smart Notes",
    description:
      "AI-powered notes. Smart search, summaries, flashcards. SRS offline access and collaboration.",
    icon: "NotebookPen",
    iconBgColor: "bg-green-50",
    iconColor: "text-green-500",
    href: "/pro-smart-notes",
    learnMoreColor: "text-green-500",
  },
  {
    id: 8,
    title: "Brainlabs Arena",
    description:
      "Dive into educational games designed to sharpen your mind and boost learning.",
    icon: "Gamepad2",
    iconBgColor: "bg-rose-50",
    iconColor: "text-rose-500",
    href: "/brainlabs-arena",
    learnMoreColor: "text-rose-500",
  },
  {
    id: 9,
    title: "English Trivia",
    description:
      "Expand your English vocabulary with fun trivia. Challenge yourself and learn new words!",
    icon: "BookOpen",
    iconBgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    href: "/english-trivia",
    learnMoreColor: "text-blue-500",
  },
];
export const reviewsBGColor = ["#FEF3E8", "#E6F2FE", "#E8FAED"];
export const reviewsData = [
  {
    id: 1,
    image: "/avatars/avatar-1.jpg",
    name: "Ralph Edwards",
    role: "IT Student",
    rating: 4.5,
    review:
      "Taking courses on this platform has been a game-changer for my career. The instructors are highly knowledgeable, and the lessons are practical and easy to follow.",
  },
  {
    id: 2,
    image: "/avatars/avatar-2.jpg",
    name: "Jenny Wilson",
    role: "Frontend Developer",
    rating: 5,
    review:
      "The learning experience is smooth and engaging. I especially love the real-world projects and clean UI.",
  },
  {
    id: 3,
    image: "/avatars/avatar-3.jpg",
    name: "Robert Fox",
    role: "Backend Engineer",
    rating: 4.8,
    review:
      "Excellent platform for mastering backend concepts. The explanations are clear and straight to the point.",
  },
  {
    id: 4,
    image: "/avatars/avatar-4.jpg",
    name: "Esther Howard",
    role: "UI/UX Designer",
    rating: 4.6,
    review:
      "Beautifully designed lessons with a strong focus on usability. It really helped improve my design thinking.",
  },
  {
    id: 5,
    image: "/avatars/avatar-5.jpg",
    name: "Cody Fisher",
    role: "Computer Science Student",
    rating: 4.7,
    review:
      "The platform keeps me motivated with its gamified approach. Learning has never felt this rewarding.",
  },
  {
    id: 6,
    image: "/avatars/avatar-6.jpg",
    name: "Brooklyn Simmons",
    role: "Full Stack Developer",
    rating: 5,
    review:
      "From basics to advanced topics, everything is well structured. Highly recommended for serious learners.",
  },
  {
    id: 7,
    image: "/avatars/avatar-7.jpg",
    name: "Albert Flores",
    role: "Software Engineer",
    rating: 4.9,
    review:
      "Practical examples, great mentors, and excellent support. This platform truly stands out.",
  },
  {
    id: 8,
    image: "/avatars/avatar-5.jpg",
    name: "Cody Fisher",
    role: "Computer Science Student",
    rating: 4.7,
    review:
      "The platform keeps me motivated with its gamified approach. Learning has never felt this rewarding.",
  },
];

export const pricingPlans = [
  {
    id: "starter",
    title: "Starter",
    price: "$0",
    description: "Smart Notes, basic tracking",
    icon: "Zap",
    popular: false,
    features: ["Public notes & search", "Daily limits", "Basic analytics"],
    button: "Get Started",
    variant: "outline",
  },
  {
    id: "pro",
    title: "Pro",
    price: "$120/mo",
    description: "Live tutoring access + analytics",
    icon: "Crown",
    popular: true,
    badge: "Most Popular",
    features: [
      "Paywall unlock on sessions",
      "Progress Analytics",
      "Priority support",
      "AI powered notes",
      "Smart search",
      "Flashcards",
      "Offline access",
    ],
    button: "Upgrade",
    variant: "default",
  },
  {
    id: "teams",
    title: "Teams",
    price: "Custom",
    description: "Schools & study groups",
    icon: "Users",
    popular: false,
    features: [
      "Bulk seats & billing",
      "Dedicated onboarding",
      "Admin dashboard",
      "Priority support",
    ],
    button: "Talk to us",
    variant: "outline",
  },
];

export const classesData = [
  {
    subject: "Mathematics",
    instructor: "Alex Chen",
    description:
      "Calculus practice & problem solving. We'll cover derivatives and integrals.",
    joinedCount: 4,
    isLive: true,
  },
  {
    subject: "Physics",
    instructor: "Priya M.",
    description:
      "Newton's laws explained with real-world examples & exercises.",
    joinedCount: 3,
    timeAgo: "30 min",
  },
  {
    subject: "Chemistry",
    instructor: "Dr. Lee",
    description:
      "Periodic trends & bonding basics. Interactive whiteboard session.",
    joinedCount: 3,
    timeAgo: "30 min",
  },
];

export const notesData = [
  {
    id: 1,
    category: "Mathematics",
    title: "Mathematics",
    description:
      "Calculus is the study of change and motion. Understand derivatives to analyze rates and integrals to compute areas under curves.",
    visibility: "Public",
    author: "StudyStakes",
    date: "2025-12-20",
  },
  {
    id: 2,
    category: "Physics",
    title: "Physics",
    description:
      "Newton's Laws explain motion: inertia, F=ma, and action-reaction pairs form the foundation of classical mechanics.",
    visibility: "Public",
    author: "StudyStakes",
    date: "2025-12-20",
  },
  {
    id: 3,
    category: "Chemistry",
    title: "Chemistry",
    description:
      "The periodic table organizes elements by atomic number and properties, allowing predictions of chemical behavior and bonding.",
    visibility: "Public",
    author: "StudyStakes",
    date: "2025-12-20",
  },
  {
    id: 4,
    category: "Biology",
    title: "Biology",
    description:
      "Cell theory states all living things are made of cells, which are the basic unit of life, capable of metabolism and reproduction.",
    visibility: "Public",
    author: "StudyStakes",
    date: "2025-12-20",
  },
  {
    id: 5,
    category: "History",
    title: "History",
    description:
      "The Renaissance marked a rebirth of arts and science in Europe, fostering humanism and leading to modern thinking.",
    visibility: "Public",
    author: "StudyStakes",
    date: "2025-12-20",
  },
  {
    id: 6,
    category: "Computer Science",
    title: "Computer Science",
    description:
      "Algorithms are step-by-step instructions for solving problems efficiently; understanding complexity is key to performance.",
    visibility: "Public",
    author: "StudyStakes",
    date: "2025-12-20",
  },
];
export const analyticsStatData = [
  {
    id: 1,
    key: "study_wager",
    title: "Study Wager",
    value: 0,
    unit: "m",
    status: "Tracked",
    statusColor: "green",
    bgColor: "bg-green-100", // Tailwind color
  },
  {
    id: 2,
    key: "live_tutoring",
    title: "Live Tutoring",
    value: 0,
    unit: "m",
    status: "Tracked",
    statusColor: "blue",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    key: "smart_notes",
    title: "Smart Notes",
    value: 0,
    unit: "m",
    status: "Tracked",
    statusColor: "green",
    bgColor: "bg-green-200",
  },
  {
    id: 5,
    key: "all_time",
    title: "Pro smart notes",
    value: 0,
    unit: "m",
    status: "Sum Of All",
    statusColor: "gray",
    bgColor: "bg-gray-100",
  },
  {
    id: 6,
    key: "all_time",
    title: "English Trivea",
    value: 0,
    unit: "m",
    status: "Sum Of All",
    statusColor: "gray",
    bgColor: "bg-gray-200",
  },
  {
    id: 7,
    key: "all_time",
    title: "Brainlab Arena",
    value: 0,
    unit: "m",
    status: "Sum Of All",
    statusColor: "gray",
    bgColor: "bg-pink-300/20",
  },
];

export const warfareFeatures = [
  {
    id: 1,
    title: "Competitive Edge",
    description:
      "Transform boring study sessions into thrilling mental battles with your friends.",
    icon: Swords,
  },
  {
    id: 2,
    title: "Real-time Tracking",
    description:
      "Automatic timer starts when both participants are ready. Stay focused or lose.",
    icon: Timer,
  },
  {
    id: 3,
    title: "Bragging Rights",
    description:
      "Win victories, earn rewards, and prove your mental superiority.",
    icon: Trophy,
  },
  {
    id: 4,
    title: "Peak Focus",
    description:
      "When stakes are high, your brain won't dare slack off. Pure concentration.",
    icon: Zap,
  },
];
export const focusWeaponFeatures = [
  {
    icon: Users,
    title: "Challenge Friends",
    description: "Invite anyone to battle",
    color: "bg-blue-600/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Trophy,
    title: "Win Rewards",
    description: "Set optional wagers",
    color: "bg-yellow-600/20",
    iconColor: "text-yellow-400",
  },
];

export const aboutFeatures = [
  {
    icon: FileText,
    title: "Smart Notes",
    description:
      "Easily create, search, and manage your notes with advanced filters. Stay organized and efficient with AI-powered organization.",
  },
  {
    icon: ChartColumn,
    title: "Progress Analytics",
    description:
      "Track your learning progress in real time and identify areas for improvement with visual insights and detailed reports.",
  },
  {
    icon: Users,
    title: "Live Tutoring",
    description:
      "Connect with professional tutors anytime and get personalized support for your toughest subjects, 24/7.",
  },
];
export const provideFeatures = [
  {
    value: "50K",
    label: "Students",
  },
  {
    value: "1M",
    label: "Notes Created",
  },
  {
    value: "98",
    label: "Success Rate",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

export const chooseData = [
  {
    label: "Intuitive and easy-to-use platform",
  },
  {
    label: "Real-time study tracking and progress visualization",
  },
  {
    label: "Host or join competitive study sessions",
  },
  {
    label: "Built-in motivation through friendly challenges",
  },
  {
    label: "A global community of learners",
  },
];
export const tags = [
  {
    label: "english",
  },
   {
    label: "physics",
  }, {
    label: "mechanics",
  },
];

