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
  /** Local path under /public to a photo for this article's hero/card image. */
  image: string;
  content: string[];
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
    image: "/images/articles/beginner-workbench-plans.jpg",
    content: [
      "Every good shop starts with a good workbench. Before you build cabinets, cutting boards, or anything else, you need a stable, flat surface to work on, one that can take a beating from clamps, mallets, and the occasional dropped chisel. The good news is that a workbench doesn't need to be fancy or expensive to be useful. It just needs to be solid.",
      "Here are five workbench approaches, ordered roughly from simplest to most involved, so you can pick one that matches your budget, tools on hand, and how much time you want to spend before getting to your first real project.",
      "1. The 2x4 and plywood bench. Built from construction lumber and a sheet of plywood, this is the classic first workbench. It requires only a saw, a drill, and screws, and can be assembled in an afternoon. It won't be as rigid as hardwood options, but it's inexpensive to build and easy to replace or upgrade later.",
      "2. The torsion box bench. A torsion box top, essentially a hollow frame of ribs sandwiched between two layers of plywood, gives you a perfectly flat, lightweight surface without the cost of a solid slab. This is a good option if flatness matters more to you than sheer mass, for example if you plan to do a lot of hand-tool work.",
      "3. The Roubo-style bench. Named after the 18th-century French woodworker André Roubo, this style uses a thick slab top on sturdy leg assemblies, often joined with mortise-and-tenon joinery. It requires more woodworking skill and either hardwood stock or laminated construction lumber, but it rewards you with exceptional stability for hand-tool work like planing and chiseling.",
      "4. The knockdown bench. If your shop space is shared or temporary, a knockdown design that bolts together and can be disassembled for storage is worth considering. You trade a bit of rigidity for portability, which may be the right call in a garage that doubles as parking space.",
      "5. The assembly table with a vise. For woodworkers focused mainly on furniture assembly rather than hand-tool joinery, a simpler assembly table topped with a sacrificial layer of MDF, plus one good vise, may cover most of what you need without the complexity of a full traditional bench.",
      "Whichever option you choose, prioritize a flat, level top and a stable base over fancy joinery. You can always add vises, dog holes, or a tool tray later as your skills and needs grow. The best first workbench is the one that gets built and put to use.",
    ],
  },
  {
    slug: "choosing-first-table-saw",
    title: "How to Choose Your First Table Saw Without Overspending",
    excerpt:
      "We break down the specs that actually matter for beginners, so you can compare table saws with confidence instead of guesswork.",
    category: "Buying Guides",
    readTime: "10 min read",
    editorsChoice: true,
    image: "/images/articles/choosing-first-table-saw.jpg",
    content: [
      "A table saw is often the first major power tool investment a woodworker makes, and it's also one of the easiest purchases to overthink or overspend on. Manufacturers list dozens of specifications, but only a handful actually matter for most beginners. Here's what we found when comparing popular models on the market.",
      "Saw type. Table saws generally fall into three categories: benchtop, contractor, and cabinet saws. Benchtop saws are compact, portable, and budget-friendly, a reasonable starting point if space or budget is limited. Contractor saws offer a larger table and more power while still being movable. Cabinet saws are heavier, more powerful, and built for dedicated shop use, but come at a higher price point that's usually unnecessary for a first purchase.",
      "Motor power and blade size. Most beginner-friendly saws use a 10-inch blade and a motor in the 13-15 amp range on standard household circuits. This is enough for the vast majority of hobbyist projects, from plywood sheet goods to hardwood boards up to about 3 inches thick, depending on blade choice.",
      "Fence quality. The rip fence is arguably more important than raw power. A fence that doesn't lock parallel to the blade will produce inconsistent, frustrating cuts no matter how good the motor is. When comparing saws, look specifically at owner feedback about fence accuracy and ease of adjustment, not just the headline specs.",
      "Safety features. Modern table saws commonly include blade guards, riving knives, and anti-kickback pawls. A riving knife, which moves with the blade height and helps prevent the wood from pinching against the blade, is one of the more meaningful safety features to prioritize when comparing models.",
      "Portability vs. permanence. If you'll be moving your saw in and out of a garage or storing it between uses, a benchtop or jobsite saw with a folding stand is worth the tradeoff in rigidity. If the saw has a permanent home in a dedicated shop space, a heavier stationary saw will generally hold its settings better over time.",
      "Budget guidance. For a first table saw, we'd suggest setting a budget that covers a saw with a reliable fence and basic safety features, then resisting the urge to chase extra horsepower or cast-iron extension wings until you've outgrown the entry-level model. Many woodworkers use a solid benchtop or contractor saw for years before any real need to upgrade.",
      "As with any power tool purchase, read the included manual thoroughly, verify the saw meets your electrical setup, and confirm the return policy before your first cut, in case the fit isn't right for your shop.",
    ],
  },
  {
    slug: "random-orbital-sanders-compared",
    title: "Random Orbital Sanders: What We Found Comparing the Top Models",
    excerpt:
      "We researched dust collection, vibration control, and ergonomics across leading random orbital sanders to help you shortlist the right one.",
    category: "Product Reviews",
    readTime: "9 min read",
    image: "/images/articles/random-orbital-sanders-compared.jpg",
    content: [
      "Random orbital sanders are a workshop staple because their swirl-free sanding pattern makes them forgiving for beginners while still delivering a smooth, professional-looking finish. We compared publicly available specifications, manufacturer documentation, and aggregated user feedback across several popular models to highlight what actually differentiates them.",
      "Dust collection. This is one of the biggest differences between sanders in practice. Some models rely on a simple bag or canister, while others are designed to connect directly to a shop vacuum through a hose adapter. If you plan to sand indoors or care about air quality in your shop, prioritize a model with strong direct-to-vacuum compatibility over one that only offers a small onboard dust bag.",
      "Orbit size and speed control. Sanders vary in how far the pad moves per orbit (commonly around 3/32 inch to 3/16 inch) and whether they offer variable speed control. A larger orbit generally removes material faster but can leave slightly more visible scratch patterns, while variable speed lets you slow down for delicate work like veneers or finish sanding.",
      "Ergonomics and vibration. Because sanding often means holding a tool for extended periods, vibration-dampening designs and grip shape matter more than they might seem to on paper. User feedback across models consistently points to hand fatigue as one of the most common complaints, so we'd recommend paying attention to reported vibration levels rather than assuming all sanders feel similar in hand.",
      "Pad attachment system. Most modern sanders use a hook-and-loop system for attaching sanding discs, which makes changing grits fast. A few older or budget models still use adhesive-backed discs, which are cheaper per disc but slower to swap and less reusable.",
      "Corded vs. cordless. Cordless random orbital sanders have improved significantly, offering enough runtime for most project-sized tasks. However, corded models remain common in workshops where consistent power and lower unit cost matter more than mobility.",
      "Our overall takeaway from this comparison is that dust collection compatibility and ergonomic comfort tend to separate a sander that gets used often from one that ends up back in the box. Raw sanding speed differences between comparable mid-range models are generally smaller than marketing materials suggest.",
    ],
  },
  {
    slug: "small-shop-layout-ideas",
    title: "Workshop Layout Ideas for Small Garages and Spare Rooms",
    excerpt:
      "You don't need a barn to have an efficient shop. These layout principles help you get the most out of a tight footprint.",
    category: "Workshop Setup",
    readTime: "7 min read",
    image: "/images/articles/small-shop-layout-ideas.jpg",
    content: [
      "A cramped shop doesn't have to mean a frustrating one. Many productive workshops fit into a single-car garage, a corner of a basement, or even a large closet. The difference between a small shop that works and one that doesn't usually comes down to layout planning rather than square footage.",
      "Plan around your largest tool first. Whether that's a table saw, a workbench, or a miter saw station, decide where it lives and how much clearance it needs for infeed and outfeed material before positioning anything else. Trying to fit everything else in first and squeezing the big tool in last is a common mistake that leads to cramped, unsafe cutting paths.",
      "Think in zones, not just furniture placement. A simple shop layout usually breaks down into a cutting zone, an assembly zone, and a storage zone. Even in a small space, keeping these loosely separated, rather than mixing tool storage in with your primary work surface, keeps clutter from creeping into your workflow.",
      "Use mobile bases. Putting your table saw, workbench, or dust collector on locking caster wheels lets a single-car garage double as a shop during the day and a parking space at night. Mobile bases are inexpensive relative to the flexibility they add to a small footprint.",
      "Go vertical for storage. Pegboards, wall-mounted French cleats, and stackable bins keep hand tools, clamps, and hardware off your work surfaces without eating into floor space. A wall organized well can hold as much as a floor full of cabinets.",
      "Fold or nest where you can. Wall-mounted folding workbenches, stackable sawhorses, and nesting outfeed tables all give you full-size support when you need it and a compact footprint when you don't.",
      "Don't neglect lighting and dust collection just because the space is small. A small shop with poor lighting or no dust control feels more cramped than one that's simply well lit and clean, regardless of actual square footage.",
      "The goal isn't to fit as many tools as possible into your space. It's to build a layout that supports the projects you actually do, with clear paths to move material safely from one step to the next.",
    ],
  },
  {
    slug: "hardwood-vs-softwood",
    title: "Hardwood vs. Softwood: What Beginners Get Wrong",
    excerpt:
      "The hardwood-softwood distinction isn't about hardness at all. Here's what it really means for your next project.",
    category: "Wood Types and Materials",
    readTime: "6 min read",
    image: "/images/articles/hardwood-vs-softwood.jpg",
    content: [
      "It's a common assumption that \"hardwood\" means physically hard and \"softwood\" means physically soft. In reality, the classification is botanical, not a measure of density or durability, and understanding the real distinction will help you choose materials more accurately for your projects.",
      "Hardwoods come from deciduous trees, ones that typically lose their leaves annually, such as oak, maple, walnut, and cherry. Softwoods come from coniferous trees, which usually keep their needles year-round, such as pine, cedar, fir, and spruce. The names come from the trees' reproductive structures and general seed types, not from how the wood performs under a hand plane.",
      "This is why the classifications can be misleading. Balsa wood, famous for being extremely light and soft, is technically classified as a hardwood because it comes from a deciduous tree. Meanwhile, some softwoods like yew are dense and quite hard. Density and workability need to be evaluated wood species by wood species, not by the hardwood-softwood label alone.",
      "What actually matters for your project. Instead of relying on the hardwood-softwood distinction, consider these factors when choosing material: janka hardness rating (a standardized measure of resistance to denting), grain pattern and appearance, cost and availability in your area, and how the wood accepts stain or finish.",
      "When softwoods make sense. Pine and similar softwoods are often more affordable, lighter, and easier to cut with basic tools, which makes them a practical choice for beginner projects, shop fixtures, and painted furniture where a dense, tight grain isn't the priority.",
      "When hardwoods make sense. For furniture meant to last for decades, cutting boards, or projects where appearance and durability matter most, hardwoods like maple, oak, or walnut are usually worth the added cost and the extra effort they require to cut and finish.",
      "The bottom line for beginners: don't choose your material based on the word \"hard\" or \"soft\" alone. Look at the specific species, its properties, and whether those properties match what your project actually needs.",
    ],
  },
  {
    slug: "floating-shelves-diy",
    title: "How to Build Floating Shelves That Actually Hold Weight",
    excerpt:
      "A simple weekend project with a hidden support system so your shelves stay level and secure for years.",
    category: "DIY Home Projects",
    readTime: "8 min read",
    image: "/images/articles/floating-shelves-diy.jpg",
    content: [
      "Floating shelves look effortless on the wall, but the ones that stay level and hold real weight over time rely on a hidden support system, not just glue and hope. This project walks through the general approach for building sturdy floating shelves using a concealed steel rod or dowel support.",
      "Understand the hidden support concept. A floating shelf typically consists of a hollow wood box or a solid board with a channel routed into the back, which slides over a steel rod, angle bracket, or series of dowels anchored into wall studs. The wall hardware carries the weight; the shelf itself is really more of a sleeve.",
      "Locate your studs first. Before building anything, find the wall studs in the area where the shelf will hang. Support anchored into studs will hold dramatically more weight than anchors relying on drywall alone, especially for anything meant to hold books, decor, or kitchenware.",
      "Choose your support method. Common approaches include a length of angle iron or flat steel bar bolted into studs, a series of wood or metal dowels epoxied into the wall and into matching holes drilled in the shelf, or a purpose-built floating shelf hardware kit. Each has tradeoffs in weight capacity, installation difficulty, and how deep the shelf needs to be to conceal the hardware.",
      "Build the shelf box. If building a hollow shelf, construct a simple open-backed box from plywood or solid wood, sized to slide over your chosen support with minimal gap. Reinforce the front edge with a thicker strip of wood if you want the shelf to look thicker than the plywood alone would suggest.",
      "Level as you go. Use a level when marking your wall anchors, and dry-fit the shelf onto the support before final attachment to confirm it sits level and snug. A shelf that's slightly off level at installation will only look worse over time as weight settles.",
      "Finish before or after installation. It's usually easier to sand and finish the shelf box before sliding it onto the wall support, since working flat on a bench gives you more control than working overhead.",
      "With the weight-bearing work handled by hidden hardware anchored into studs, a floating shelf can hold books, plants, or décor confidently for years, without the visible brackets of a traditional shelf.",
    ],
  },
  {
    slug: "first-five-hand-tools",
    title: "The First Five Hand Tools Every Beginner Should Own",
    excerpt:
      "Before you buy a shop full of power tools, these five hand tools will teach you more about wood than any machine will.",
    category: "Beginner Woodworking",
    readTime: "7 min read",
    featured: true,
    image: "/images/articles/first-five-hand-tools.jpg",
    content: [
      "It's tempting to start woodworking by building a shop full of power tools, but many experienced woodworkers recommend starting with a small set of quality hand tools instead. They're less expensive, teach you to understand wood grain and joinery by feel, and they don't require dedicated shop space or electricity.",
      "1. A quality tape measure or folding rule. Precision starts with measuring accurately and consistently. A good quality measuring tool, kept dedicated to your shop rather than borrowed for household tasks, is the foundation of accurate cuts and joinery.",
      "2. A combination square. Used for marking right angles, checking that edges are square, and setting consistent depths and widths, a combination square is one of the most frequently used tools in any shop, beginner or advanced.",
      "3. A sharp block plane. A small block plane is useful for chamfering edges, smoothing end grain, and fine-tuning joints for a snug fit. Learning to keep a plane iron sharp is itself a foundational skill that pays off across every future tool you own.",
      "4. A set of bench chisels. A basic set of two to four chisels in common widths lets you clean up joints, pare wood to a line, and handle small carving or fitting tasks that power tools aren't suited for. Quality and sharpness matter more here than owning a large set.",
      "5. A hand saw suited to your projects. A general-purpose hand saw, or a dedicated dovetail or crosscut saw depending on your interests, lets you make accurate cuts without power tool noise or setup time, which is especially useful for small projects or quick trims.",
      "Why start here instead of with power tools. Hand tools force you to pay attention to grain direction, wood movement, and joint fit in a way that power tools can mask. Many woodworkers who start with hand tools find that their later power tool work is more accurate and intentional as a result.",
      "You don't need to buy the most expensive version of each tool. Focus on tools that hold an edge well and are comfortable in your hand, and plan to spend a little time learning to sharpen and maintain them. That maintenance habit will serve you for the rest of your woodworking projects.",
    ],
  },
  {
    slug: "cordless-drill-buying-guide",
    title: "Cordless Drill Buying Guide: Voltage, Torque, and What Matters",
    excerpt:
      "Manufacturers love to advertise big numbers. We explain which specs translate into real-world performance for DIYers.",
    category: "Buying Guides",
    readTime: "9 min read",
    image: "/images/articles/cordless-drill-buying-guide.jpg",
    content: [
      "Cordless drill listings are full of numbers, voltage, torque ratings, RPM ranges, and battery amp-hours, but not all of them matter equally for the average DIYer or beginning woodworker. Here's how to read the spec sheet without getting distracted by marketing.",
      "Voltage. Voltage is often the headline number, but it mainly indicates the battery platform and potential power ceiling rather than real-world performance on its own. Common consumer platforms run from around 12V for compact, light-duty drivers up to 18V or 20V for general-purpose use. For most home and workshop tasks, an 18V or 20V drill offers a good balance of power and weight.",
      "Torque. Measured in inch-pounds or newton-meters, torque describes the rotational force the drill can apply, which matters most for driving screws into dense material or using large driver bits. Higher torque isn't always better for delicate work; too much torque without a clutch can strip screws or split thin material.",
      "Clutch settings. A drill/driver with multiple clutch settings lets you limit torque for driving screws without stripping heads or overdriving into soft wood. If you plan to use the drill for both drilling holes and driving screws, prioritize a model with a usable range of clutch settings over one with only a couple of options.",
      "Battery platform compatibility. Many manufacturers sell tools across a shared battery platform, meaning a battery from a drill can also power a sander, saw, or flashlight in the same lineup. If you expect to buy more tools from the same brand over time, this compatibility can be more valuable long-term than a slightly cheaper drill on a closed or unique platform.",
      "Brushless vs. brushed motors. Brushless motors are generally more efficient, run cooler, and last longer than brushed motors, though they typically come at a higher price point. For occasional DIY use, a brushed motor is often perfectly adequate; for frequent or demanding use, the efficiency gains of brushless motors tend to pay off over time.",
      "Weight and ergonomics. A drill that's slightly less powerful but noticeably more comfortable to hold for extended periods is often the better real-world choice, particularly for overhead work or repetitive tasks like assembling furniture.",
      "In short: don't chase the highest voltage or torque number by itself. Match the drill's power, clutch flexibility, and battery ecosystem to the type of projects you actually plan to build.",
    ],
  },
  {
    slug: "wood-finishes-explained",
    title: "Wood Finishes Explained: Oil, Polyurethane, Wax, and Shellac",
    excerpt:
      "Choosing a finish affects durability, appearance, and application time. Here's how the most common options compare.",
    category: "Wood Types and Materials",
    readTime: "8 min read",
    image: "/images/articles/wood-finishes-explained.jpg",
    content: [
      "The finish you choose changes more than just the final look of a project. It affects durability, water resistance, how the piece ages, and how much maintenance it will need down the road. Here's an overview of the most common finishing options and where each tends to fit best.",
      "Oil finishes. Products like boiled linseed oil or tung oil penetrate into the wood fibers rather than forming a hard surface film. They're relatively easy to apply, even for beginners, and give a natural, low-sheen look that tends to enhance grain. The tradeoff is less water and scratch resistance compared to film-forming finishes, and periodic reapplication is usually needed to maintain protection.",
      "Polyurethane. Available in oil-based and water-based formulas, polyurethane forms a hard protective film on the wood surface. It offers strong resistance to scratches, water, and general wear, which makes it a common choice for tabletops, floors, and other high-use surfaces. Oil-based versions tend to add a warm amber tone and take longer to dry, while water-based versions dry faster and stay clearer over time, though many woodworkers find they require slightly more careful application to avoid visible brush marks.",
      "Wax finishes. Paste wax is often used as a final protective layer over another finish, or on its own for a soft, low-luster look on decorative pieces that won't see heavy use. It offers minimal protection against water and scratches on its own, and needs reapplication periodically, but it's simple to apply and repair.",
      "Shellac. A traditional finish made from a resin secreted by the lac bug, shellac dries quickly, is easy to repair, and provides a warm, classic look often associated with antique furniture. It has moderate durability and can be affected by alcohol and, to a lesser extent, water, so it's better suited to furniture and decorative pieces than surfaces exposed to spills.",
      "Choosing based on use, not just looks. For a cutting board or item that will contact food, look specifically for finishes labeled food-safe once cured, such as certain mineral oil and wax blends. For an outdoor project, look for finishes formulated with UV protection and moisture resistance. For furniture that will see daily use, a durable film finish like polyurethane is usually a safer choice than a purely penetrating oil.",
      "Whatever finish you choose, always test on a scrap piece of the same wood species first, since color response can vary significantly between species and even between boards.",
    ],
  },
  {
    slug: "dust-collection-basics",
    title: "Dust Collection Basics for the Home Workshop",
    excerpt:
      "A practical look at shop vacuums, dust collectors, and separators, and how to decide what your shop actually needs.",
    category: "Workshop Setup",
    readTime: "7 min read",
    image: "/images/articles/dust-collection-basics.jpg",
    content: [
      "Sawdust isn't just a cleanup nuisance. Fine wood dust can affect respiratory health over time and, in sufficient concentration, poses a combustion risk. A reasonable dust collection setup doesn't need to be elaborate, but it's worth understanding your options before deciding what to invest in.",
      "Shop vacuums. A general-purpose shop vacuum is often the simplest starting point, especially when connected directly to tools like sanders, routers, or track saws that have dust ports. Shop vacuums provide strong suction at the source but typically have limited airflow volume, which makes them better suited to handheld tools than high-volume stationary machines.",
      "Dust collectors. Dedicated dust collectors, whether single-stage or two-stage designs, are built for higher airflow, which matters more for tools like table saws, jointers, and planers that produce a larger volume of chips and dust. If you're running multiple stationary tools, a dust collector connected through ducting or flexible hose is generally more effective than a shop vacuum alone.",
      "Cyclone separators. A cyclone separator sits between your tool and your vacuum or collector, spinning out heavier debris before it reaches the filter or bag. This extends filter life and reduces how often you need to empty the main collection bin, which is a meaningful convenience upgrade for a shop that generates a lot of chips.",
      "Air filtration. Beyond capturing dust at the source, many shops benefit from an ambient air filtration unit that continues to clear fine airborne particles after a cut is made. This is especially relevant in smaller or less ventilated spaces where dust can linger in the air.",
      "Personal protection. Even with good dust collection, a properly rated dust mask or respirator is a reasonable addition for tasks that generate significant fine dust, such as sanding, and doesn't need to be expensive to be effective.",
      "Matching your setup to your shop. A hobbyist working primarily with hand tools and occasional sanding may only need a shop vacuum and a basic dust mask. A shop with a table saw, planer, and other stationary machinery will generally benefit more from a dedicated dust collector connected to those tools, supplemented by a shop vacuum for handheld work.",
      "Start with the setup that matches how you currently use your shop, and expand it as your tool collection and project frequency grow.",
    ],
  },
  {
    slug: "router-buying-guide",
    title: "Wood Router Buying Guide: Fixed Base vs. Plunge Base",
    excerpt:
      "Routers come in many configurations. We compare the two most common base styles to help you pick the right fit.",
    category: "Woodworking Tools",
    readTime: "9 min read",
    image: "/images/articles/router-buying-guide.jpg",
    content: [
      "A wood router is one of the most versatile tools in a shop, used for edge profiles, joinery, dadoes, and template work. Most routers are built around one of two base styles, fixed or plunge, and understanding the difference will help you choose the right setup for your projects.",
      "Fixed-base routers. In a fixed-base router, the cutting depth is set before you start the cut and stays constant throughout. This makes fixed-base routers well suited to edge routing, such as adding a decorative profile to a tabletop edge, where a consistent depth from start to finish is exactly what you want.",
      "Plunge routers. A plunge router allows you to lower the spinning bit straight down into the workpiece from above, then lock or release the depth as needed mid-cut. This makes plunge routers the better choice for tasks like cutting mortises, stopped dadoes, or any cut that starts in the middle of a board rather than at an edge.",
      "Combo kits. Many manufacturers sell a single router motor with interchangeable fixed and plunge bases, letting you swap between the two setups without buying two separate motors. This is often the most practical option for a beginner who isn't yet sure which style they'll use more.",
      "Router table use. Beyond handheld use, routers are frequently mounted underneath a router table, turning the tool into a stationary shaping station. Fixed-base routers are generally easier to mount and adjust from below a table, which is worth considering if a router table is part of your future plans.",
      "Collet size. Routers typically accept bits with either a 1/4-inch or 1/2-inch shank, and some accept both with an included collet reducer. Half-inch shank bits are generally more rigid and better suited to larger profiles or denser hardwoods, so a router that accepts both sizes offers more flexibility as your bit collection grows.",
      "Power and speed control. Router motors vary in horsepower and often include variable speed control, which matters when using larger diameter bits that need to run slower to stay safe and produce a clean cut. If you plan to use large panel-raising or profile bits, variable speed is worth prioritizing.",
      "For a first router, many woodworkers find that a combo kit strikes the best balance, giving you fixed-base control for edge work and plunge capability for joinery, without committing to only one style before you know which you'll reach for most.",
    ],
  },
  {
    slug: "diy-picture-frame",
    title: "How to Build a Simple Picture Frame with Basic Tools",
    excerpt:
      "A forgiving first project that teaches measuring, cutting angles, and finishing without requiring a full shop.",
    category: "Beginner Woodworking",
    readTime: "6 min read",
    image: "/images/articles/diy-picture-frame.jpg",
    content: [
      "A picture frame is one of the most approachable first woodworking projects because it teaches core skills, measuring, cutting accurate angles, and finishing, on a small, low-cost, low-risk scale. Here's a general approach to building a simple frame with basic tools.",
      "Tools and materials. At minimum, you'll need a miter box or miter saw, a measuring tool, wood glue, clamps (or a substitute like painter's tape and rubber bands), sandpaper, and your choice of finish. Softwood molding or simple square stock both work well for a first attempt.",
      "Measure your artwork or photo first. Decide whether the frame will sit in front of or behind the glass and mat, and measure the opening size you need accordingly, adding a small margin for the rabbet or groove that will hold the glass and backing in place.",
      "Cut accurate 45-degree miters. The most common frame corner is a 45-degree miter joint, where each of the four pieces is cut at a matching angle so they meet to form clean 90-degree corners. Cutting these accurately is the trickiest part of the project, so consider cutting a few test pieces from scrap material first to confirm your miter box or saw setup is truly square.",
      "Dry fit before gluing. Assemble all four sides without glue first, checking that opposite sides are equal in length and that all four corners close tightly. This is the point to make small adjustments before committing to glue.",
      "Glue and clamp. Apply glue to the mitered edges and clamp the corners together, using a picture-frame clamp, band clamp, or improvised corner blocks and tape if you don't have specialized clamps. Check the frame is sitting flat and square while the glue cures, since any twist at this stage will be difficult to correct later.",
      "Sand and finish. Once the glue has cured, sand the frame smooth, paying particular attention to the corner joints, then apply your chosen finish. A simple oil or wipe-on polyurethane finish works well for a first project and is forgiving to apply.",
      "Add the glass, artwork, and backing last, and secure them with small points or a backing clip system appropriate to your frame depth. This project, while simple, teaches measuring precision and joinery skills that carry directly into more complex furniture projects later on.",
    ],
  },
];

export const flagshipArticle = {
  slug: "woodworking-for-beginners-guide",
  title: "Woodworking for Beginners: The Complete 2026 Guide",
  excerpt:
    "Can you really learn woodworking with no experience? Yes. Our flagship guide covers cost, space, timelines, the 15 most common beginner mistakes, and the best first projects to start with.",
  category: "Beginner Woodworking",
  image: "/images/articles/woodworking-for-beginners-hero.jpg",
};

export const featuredReview = {
  title: "Cordless Drill Drivers: A Research-Based Comparison for DIYers",
  excerpt:
    "We compared specifications, warranty terms, and user-reported reliability across popular cordless drill drivers to help you find the right balance of power, weight, and price for home workshop use.",
  category: "Product Reviews",
  slug: "cordless-drill-drivers-comparison",
  image: "/images/articles/cordless-drill-drivers-comparison.jpg",
  content: [
    "Cordless drill drivers are one of the most-owned tools in any home workshop, and also one of the most crowded product categories to shop in. Rather than testing units ourselves, we compared publicly available specifications, manufacturer documentation, warranty terms, and aggregated user feedback across several widely available cordless drill drivers to help you evaluate your options.",
    "Power and battery platform. Most consumer drill drivers fall in the 12V to 20V range. Within that range, we found that real-world performance differences for typical DIY tasks, driving screws, drilling pilot holes, assembling furniture, are often smaller than the voltage numbers suggest. What tends to matter more is whether the drill belongs to a battery platform shared with other tools you already own or plan to buy, since batteries are often the most expensive part of the system over time.",
    "Warranty terms. Warranty length and coverage varied meaningfully across the brands we compared, from standard limited warranties in the one-to-three-year range to longer coverage on select premium lines, sometimes with registration required. If you're deciding between two similarly specced drills, warranty terms are a practical, low-risk tiebreaker worth checking directly on the manufacturer's site before purchase.",
    "User-reported reliability. Across owner reviews and forum discussion, the most common complaints we found were not about raw power but about chuck durability, clutch consistency over time, and battery lifespan after a year or more of regular use. Praise tended to cluster around comfortable grip design, useful LED work lights, and battery fuel gauges that make charge status easy to check at a glance.",
    "Weight and balance. Lighter drills are easier to use for overhead or extended work but can feel less substantial for heavier tasks. Reviewers who used their drill primarily for furniture assembly and light household repairs generally favored lighter, more compact models, while those doing more demanding work, larger hole drilling or dense hardwood, tended to prefer slightly heavier, higher-torque models.",
    "Included accessories. Kits vary widely in what's bundled, some include two batteries and a charger, others include only one battery, and some are sold as a bare tool for owners who already have compatible batteries. Comparing the actual kit contents, not just the tool's base price, is important for getting an accurate sense of total cost.",
    "Our overall research suggests that for most home and DIY use, a mid-range 18V or 20V drill driver from an established brand with good warranty terms and a battery platform shared with other tools you own (or plan to buy) will serve you well. Chasing the highest torque or voltage figures in this category tends to produce diminishing returns relative to the price increase.",
  ],
};
