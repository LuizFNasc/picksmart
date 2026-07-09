export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "woodworking-projects",
    name: "Woodworking Projects",
    description:
      "Step-by-step plans and inspiration for furniture, storage, and decor you can build in a weekend or over several sessions in the shop.",
  },
  {
    slug: "woodworking-tools",
    name: "Woodworking Tools",
    description:
      "Guides to hand tools and power tools, how they work, and what to look for before you add one to your shop.",
  },
  {
    slug: "buying-guides",
    name: "Buying Guides",
    description:
      "Side-by-side comparisons and research-backed recommendations to help you choose the right tool or material for your budget and skill level.",
  },
  {
    slug: "product-reviews",
    name: "Product Reviews",
    description:
      "Honest, research-driven breakdowns of woodworking tools and accessories, including where each option makes sense and where it doesn't.",
  },
  {
    slug: "beginner-woodworking",
    name: "Beginner Woodworking",
    description:
      "Foundational skills, terminology, and first-project ideas for anyone picking up woodworking for the first time.",
  },
  {
    slug: "workshop-setup",
    name: "Workshop Setup",
    description:
      "Layout, storage, dust collection, safety, and lighting advice for building a workshop that works for you, no matter the size.",
  },
  {
    slug: "diy-home-projects",
    name: "DIY Home Projects",
    description:
      "Practical woodworking-adjacent projects for the home, from shelving to repairs, for the everyday do-it-yourselfer.",
  },
  {
    slug: "wood-types-materials",
    name: "Wood Types and Materials",
    description:
      "Explanations of hardwoods, softwoods, plywood, and finishes so you can choose the right material for every project.",
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  featured?: boolean;
  editorsChoice?: boolean;
};

export const articles: Article[] = [
  {
    slug: "beginner-workbench-plans",
    title: "5 Beginner-Friendly Workbench Plans You Can Build This Weekend",
    excerpt:
      "A sturdy workbench is the foundation of every good shop. Here are five approachable builds ranked by cost, tools required, and skill level.",
    category: "Woodworking Projects",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "choosing-first-table-saw",
    title: "How to Choose Your First Table Saw Without Overspending",
    excerpt:
      "We break down the specs that actually matter for beginners, so you can compare table saws with confidence instead of guesswork.",
    category: "Buying Guides",
    readTime: "10 min read",
    editorsChoice: true,
  },
  {
    slug: "random-orbital-sanders-compared",
    title: "Random Orbital Sanders: What We Found Comparing the Top Models",
    excerpt:
      "We researched dust collection, vibration control, and ergonomics across leading random orbital sanders to help you shortlist the right one.",
    category: "Product Reviews",
    readTime: "9 min read",
  },
  {
    slug: "small-shop-layout-ideas",
    title: "Workshop Layout Ideas for Small Garages and Spare Rooms",
    excerpt:
      "You don't need a barn to have an efficient shop. These layout principles help you get the most out of a tight footprint.",
    category: "Workshop Setup",
    readTime: "7 min read",
  },
  {
    slug: "hardwood-vs-softwood",
    title: "Hardwood vs. Softwood: What Beginners Get Wrong",
    excerpt:
      "The hardwood-softwood distinction isn't about hardness at all. Here's what it really means for your next project.",
    category: "Wood Types and Materials",
    readTime: "6 min read",
  },
  {
    slug: "floating-shelves-diy",
    title: "How to Build Floating Shelves That Actually Hold Weight",
    excerpt:
      "A simple weekend project with a hidden support system so your shelves stay level and secure for years.",
    category: "DIY Home Projects",
    readTime: "8 min read",
  },
  {
    slug: "first-five-hand-tools",
    title: "The First Five Hand Tools Every Beginner Should Own",
    excerpt:
      "Before you buy a shop full of power tools, these five hand tools will teach you more about wood than any machine will.",
    category: "Beginner Woodworking",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "cordless-drill-buying-guide",
    title: "Cordless Drill Buying Guide: Voltage, Torque, and What Matters",
    excerpt:
      "Manufacturers love to advertise big numbers. We explain which specs translate into real-world performance for DIYers.",
    category: "Buying Guides",
    readTime: "9 min read",
  },
  {
    slug: "wood-finishes-explained",
    title: "Wood Finishes Explained: Oil, Polyurethane, Wax, and Shellac",
    excerpt:
      "Choosing a finish affects durability, appearance, and application time. Here's how the most common options compare.",
    category: "Wood Types and Materials",
    readTime: "8 min read",
  },
  {
    slug: "dust-collection-basics",
    title: "Dust Collection Basics for the Home Workshop",
    excerpt:
      "A practical look at shop vacuums, dust collectors, and separators, and how to decide what your shop actually needs.",
    category: "Workshop Setup",
    readTime: "7 min read",
  },
  {
    slug: "router-buying-guide",
    title: "Wood Router Buying Guide: Fixed Base vs. Plunge Base",
    excerpt:
      "Routers come in many configurations. We compare the two most common base styles to help you pick the right fit.",
    category: "Woodworking Tools",
    readTime: "9 min read",
  },
  {
    slug: "diy-picture-frame",
    title: "How to Build a Simple Picture Frame with Basic Tools",
    excerpt:
      "A forgiving first project that teaches measuring, cutting angles, and finishing without requiring a full shop.",
    category: "Beginner Woodworking",
    readTime: "6 min read",
  },
];

export const featuredReview = {
  title: "Cordless Drill Drivers: A Research-Based Comparison for DIYers",
  excerpt:
    "We compared specifications, warranty terms, and user-reported reliability across popular cordless drill drivers to help you find the right balance of power, weight, and price for home workshop use.",
  category: "Product Reviews",
  slug: "cordless-drill-drivers-comparison",
};
