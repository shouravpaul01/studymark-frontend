
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

