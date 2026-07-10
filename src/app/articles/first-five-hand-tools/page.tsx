import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The First Five Hand Tools Every Beginner Should Own",
  description:
    "No shop full of machines required. Here are the five hand tools worth buying first, what to look for, realistic prices, and how to keep them in good shape.",
};

const faqs = [
  {
    q: "Do I need power tools before I buy hand tools?",
    a: "No. Many woodworkers build their first several projects using only hand tools. Power tools add speed and repeatability later, but they aren't a prerequisite for learning core skills.",
  },
  {
    q: "How much should I expect to spend on my first five hand tools?",
    a: "A reasonable range for decent-quality versions of a tape measure, combination square, block plane, a small set of chisels, and a hand saw is roughly $120 to $250, depending on brand and whether you buy new or used.",
  },
  {
    q: "Is it worth buying cheap tools when I'm just starting out?",
    a: "For a few items, like a basic tape measure, an inexpensive option is fine. For tools where accuracy or edge quality matters, a combination square or chisel set, spending a bit more on a reputable brand tends to pay off in fewer frustrating, hard-to-diagnose mistakes.",
  },
  {
    q: "How do I know if a chisel or plane iron is sharp enough?",
    a: "A sharp edge should be able to shave a thin curl off end grain pine with light pressure, or slice cleanly through paper without tearing. If it crushes fibers instead of cutting them, it needs sharpening.",
  },
  {
    q: "What's the difference between a block plane and a bench plane?",
    a: "A block plane is smaller, often used one-handed, and is designed primarily for end-grain work and light trimming. Bench planes are larger, generally two-handed tools used for flattening and smoothing long grain across bigger surfaces.",
  },
  {
    q: "Can I use a combination square instead of a full try square?",
    a: "Yes, for most beginner work a combination square covers the functions of a try square, plus depth and marking gauge tasks, which is why it's often recommended as a single, versatile first purchase.",
  },
  {
    q: "How often do hand tools need maintenance?",
    a: "Edge tools like chisels and plane irons typically need touch-up sharpening every few hours of real cutting, sooner in harder woods. Saws and squares need far less maintenance, mainly occasional cleaning and rust prevention.",
  },
  {
    q: "Should I buy a full chisel set or individual chisels?",
    a: "For beginners, a small set of two to four commonly used widths (often 1/4 inch, 1/2 inch, and 3/4 inch) is usually more practical than a large set, since a few sizes cover most early projects.",
  },
  {
    q: "What safety precautions matter most when using hand tools?",
    a: "Cutting away from your body, keeping hands behind the cutting edge, and using sharp rather than dull tools are consistently emphasized in woodworking safety guidance, since dull tools require more force and are more likely to slip.",
  },
  {
    q: "Will these five tools be enough for my first project?",
    a: "For simple builds like a cutting board, small shelf, or picture frame, yes. As your projects grow more complex, you'll likely add tools gradually, but these five cover the core tasks of measuring, marking, smoothing, shaping, and cutting.",
  },
];

function Callout({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "tip" | "mistake" | "checklist" | "fact" | "reality" | "beforeBuy" | "bench";
  children: React.ReactNode;
}) {
  const toneStyles: Record<typeof tone, string> = {
    tip: "border-[var(--color-forest)] bg-[var(--color-forest)]/5",
    mistake: "border-[var(--color-wood)] bg-[var(--color-wood)]/10",
    checklist: "border-[var(--color-beige-dark)] bg-[var(--color-beige)]",
    fact: "border-[var(--color-charcoal-light)] bg-white",
    reality: "border-[var(--color-wood-dark)] bg-white",
    beforeBuy: "border-[var(--color-forest-dark)] bg-[var(--color-beige)]",
    bench: "border-[var(--color-charcoal)] bg-white",
  };
  return (
    <div className={`rounded-lg border-l-4 p-5 ${toneStyles[tone]}`}>
      <p className="font-serif font-bold text-[var(--color-forest)] mb-2">{label}</p>
      <div className="text-[var(--color-charcoal)] leading-relaxed">{children}</div>
    </div>
  );
}

const comparisonTable = [
  {
    tool: "Tape Measure",
    price: "$10 – $25",
    difficulty: "Beginner",
    essentialFor: "Accurate layout and cutting",
    priority: "Buy first",
  },
  {
    tool: "Combination Square",
    price: "$20 – $80",
    difficulty: "Beginner",
    essentialFor: "Square edges and consistent marking",
    priority: "Buy first",
  },
  {
    tool: "Block Plane",
    price: "$30 – $100+",
    difficulty: "Beginner–Intermediate",
    essentialFor: "Smoothing edges and end grain",
    priority: "Buy second",
  },
  {
    tool: "Bench Chisels",
    price: "$30 – $70",
    difficulty: "Intermediate",
    essentialFor: "Joinery and detail work",
    priority: "Buy third",
  },
  {
    tool: "Hand Saw",
    price: "$25 – $60",
    difficulty: "Beginner–Intermediate",
    essentialFor: "Clean, controlled cuts",
    priority: "Buy third",
  },
];

export default function FirstFiveHandTools() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <span className="section-label">Beginner Woodworking</span>
      <h1 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-[var(--color-forest)] leading-tight">
        The First Five Hand Tools Every Beginner Should Own
      </h1>

      <div
        className="mt-6 h-72 rounded-lg bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-beige-dark)] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/articles/hero.jpeg)" }}
        role="img"
        aria-label="Five essential hand tools for beginner woodworkers arranged on a workbench"
      />

      <div className="mt-8 space-y-5 text-[var(--color-charcoal)] leading-relaxed">
        <p>
          Walk into any woodworking forum and you'll see the same question,
          asked a dozen different ways: what tools do I actually need to get
          started?
        </p>
        <p>
          It's a fair question, and it's easy to overthink. In our{" "}
          <Link href="/articles/woodworking-for-beginners-guide" className="underline text-[var(--color-forest)]">
            complete beginner's guide
          </Link>
          , we talked about how little space and money it really takes to
          start woodworking. This time, we're getting specific.
        </p>
        <p>
          You don't need a shop full of machines. You need five hand tools,
          chosen well, and a little patience.
        </p>

        <Callout label="Did You Know?" tone="fact">
          <p>
            Woodworking predates written history. Long before power tools, or
            even metal tools in many cultures, wood was shaped almost
            entirely by hand. The five tools in this article represent
            centuries of refinement, not a modern invention.
          </p>
        </Callout>

        <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] pt-4">
          Why Hand Tools First?
        </h2>
        <p>
          Hand tools are affordable. They don't need a garage or an outlet.
          And they teach you something a power tool can't: how wood actually
          behaves.
        </p>
        <p>
          When you push a hand plane across a board, you feel the grain
          change direction. When you saw by hand, you learn what happens when
          you rush a cut. That feedback sticks with you, and it tends to make
          your later power-tool work more accurate, too.
        </p>

        <Callout label="Workshop Reality" tone="reality">
          <p>
            None of these five tools will feel effortless the first time you
            pick them up. That's normal, not a sign you're doing something
            wrong. Comfort comes from hours in hand, not from buying a better
            version of the tool.
          </p>
        </Callout>

        <p>
          Before we go tool by tool, here's the short version, a quick
          reference you can come back to once you're standing in the tool
          aisle.
        </p>

        <div
          className="h-64 rounded-lg bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-beige-dark)] bg-cover bg-center"
          style={{ backgroundImage: "url(/images/articles/support_image1.jpeg)" }}
          role="img"
          aria-label="Beginner hand tools laid out and ready for use on a workbench"
        />

        <div className="overflow-x-auto rounded-lg border border-[var(--color-beige-dark)]">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--color-forest)] text-white">
                <th className="text-left font-serif font-semibold px-4 py-3">Tool</th>
                <th className="text-left font-serif font-semibold px-4 py-3">Typical Beginner Price</th>
                <th className="text-left font-serif font-semibold px-4 py-3">Difficulty Level</th>
                <th className="text-left font-serif font-semibold px-4 py-3">Essential For</th>
                <th className="text-left font-serif font-semibold px-4 py-3">Purchase Priority</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr
                  key={row.tool}
                  className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-beige)]"}
                >
                  <td className="px-4 py-3 font-semibold text-[var(--color-charcoal)] whitespace-nowrap">{row.tool}</td>
                  <td className="px-4 py-3 text-[var(--color-charcoal-light)] whitespace-nowrap">{row.price}</td>
                  <td className="px-4 py-3 text-[var(--color-charcoal-light)] whitespace-nowrap">{row.difficulty}</td>
                  <td className="px-4 py-3 text-[var(--color-charcoal-light)]">{row.essentialFor}</td>
                  <td className="px-4 py-3 text-[var(--color-charcoal-light)] whitespace-nowrap">{row.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] pt-4">
          1. Tape Measure or Folding Rule
        </h2>
        <p>
          Every project starts with a measurement. Get this wrong, and
          nothing downstream fits the way it should.
        </p>
        <p>
          <strong>How it's used:</strong> Measuring stock length, marking cut
          lines, checking finished dimensions against your plan.
        </p>
        <p>
          <strong>What makes a good one:</strong> A 16- or 25-foot tape with
          a wide, easy-to-read blade and clear fractions down to at least
          1/16 inch. The slight wiggle in the end hook isn't a defect, it's
          designed that way so your measurement stays accurate whether you're
          pushing or pulling against an edge.
        </p>
        <p>
          <strong>Price range:</strong> $10 to $25. Stanley and Empire are
          both long-standing names you'll see on hardware store shelves in
          this range.
        </p>

        <Callout label="Common Beginner Mistake" tone="mistake">
          <p>
            Switching tape measures mid-project. Manufacturing tolerances
            vary slightly between brands, sometimes even between two tapes
            from the same brand. Pick one tape and use it for the whole
            build.
          </p>
        </Callout>

        <p>
          <strong>Keeping it in shape:</strong> Wipe the blade clean now and
          then, and don't let it snap back hard over and over, that stresses
          the internal spring. Beyond that, there's not much to maintain.
        </p>

        <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] pt-4">
          2. Combination Square
        </h2>
        <p>
          If the tape measure tells you how long, the combination square
          tells you how straight, and how square.
        </p>
        <p>
          <strong>How it's used:</strong> Checking that edges meet at 90
          degrees, marking lines parallel to an edge, setting consistent
          depths. It does the job of a try square, a marking gauge, and a
          depth gauge in one tool.
        </p>
        <p>
          <strong>What makes a good one:</strong> A machined head, not a
          stamped one, and a blade that locks tight without shifting. A
          12-inch blade covers most furniture-scale work.
        </p>
        <p>
          <strong>Price range:</strong> $20 for a solid mid-range square, up
          to $80 or more for precision-ground tools from a name like
          Starrett, which has built its reputation on measuring accuracy
          among machinists as much as woodworkers. Irwin makes reliable,
          more affordable options too.
        </p>

        <Callout label="PickSmart Tip" tone="tip">
          <p>
            Before you trust a new square, check it. Draw a line against it,
            flip the square over, and draw the line again from the same
            edge. If the two lines match, it's square. If they don't, even a
            small gap tells you the tool needs to go back.
          </p>
        </Callout>

        <p>
          <strong>Keeping it in shape:</strong> Wipe down after use to avoid
          rust, and don't drop it. A knocked head is one of the few things
          that throws off accuracy for good.
        </p>

        <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] pt-4">
          3. A Sharp Block Plane
        </h2>
        <p>
          Small, one-handed, and surprisingly satisfying to use, the block
          plane is where a lot of beginners fall in love with hand tools.
        </p>
        <p>
          <strong>How it's used:</strong> Chamfering edges, smoothing end
          grain, and fine-tuning a joint that's just a hair too tight.
        </p>
        <p>
          <strong>What makes a good one:</strong> A low-angle design, which
          handles end grain more cleanly than a standard angle. Look for a
          flat sole and an adjustable mouth, so you can control shaving
          thickness.
        </p>
        <p>
          <strong>Price range:</strong> $30 to $50 for a functional plane,
          well over $100 for premium versions. Stanley has made block planes
          for more than a century, and it's still a common starting point.
        </p>

        <Callout label="Common Beginner Mistake" tone="mistake">
          <p>
            Using a plane straight out of the box. Almost no plane, even a
            good one, arrives sharp enough to perform well. Sharpening the
            iron before first use is not optional, it's step one.
          </p>
        </Callout>

        <Callout label="Before You Buy" tone="beforeBuy">
          <p>
            A cheap plane with a good iron will outperform an expensive plane
            with a dull one. If your budget is tight, spend it on sharpening
            supplies before you spend it on the plane itself.
          </p>
        </Callout>

        <div
          className="h-64 rounded-lg bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-beige-dark)] bg-cover bg-center"
          style={{ backgroundImage: "url(/images/articles/support_image2.jpeg)" }}
          role="img"
          aria-label="Block plane smoothing the end grain of a wood board"
        />

        <p>
          <strong>Keeping it in shape:</strong> Learn a basic sharpening
          method, sandpaper on glass works fine to start, and wipe a light
          coat of oil on the sole and iron to prevent rust.
        </p>

        <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] pt-4">
          4. A Small Set of Bench Chisels
        </h2>
        <p>
          Chisels do what nothing else can: clean, precise removal of small
          amounts of wood, right where you need it.
        </p>
        <p>
          <strong>How they're used:</strong> Cleaning out joints, paring down
          to a marked line, trimming small details a saw or plane can't
          reach.
        </p>
        <p>
          <strong>What makes a good set:</strong> Two to four chisels in
          common widths, 1/4 inch, 1/2 inch, and 3/4 inch cover most early
          projects. Steel that holds an edge, and a handle that's
          comfortable under a mallet.
        </p>
        <p>
          <strong>Price range:</strong> $30 to $70 for a beginner-friendly
          set of three or four. Irwin and Stanley both sell widely available
          options in this range.
        </p>

        <Callout label="Quick Checklist" tone="checklist">
          <ul className="list-disc pl-5 space-y-1">
            <li>Chisel edge feels sharp, not dull, to a light touch test</li>
            <li>Handle sits comfortably without sliding in your grip</li>
            <li>Set includes at least a 1/4", 1/2", and 3/4" width</li>
            <li>Comes with, or you've bought, a simple edge guard for storage</li>
          </ul>
        </Callout>

        <p>
          <strong>Safety note:</strong> A dull chisel is more dangerous than
          a sharp one, not less. It takes more force to push through the
          wood, which raises the odds of a slip. This lines up with general
          hand-tool safety guidance from OSHA, which stresses keeping
          cutting edges sharp and under control rather than forcing them.
        </p>
        <p>
          <strong>Keeping them in shape:</strong> Expect to hone every few
          hours of real use, sooner in hardwoods. Store them with an edge
          guard so a reach into the drawer doesn't cost you a finger.
        </p>

        <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] pt-4">
          5. A Hand Saw Suited to Your Projects
        </h2>
        <p>
          No motor, no cord, no dust cloud, just a clean, controlled cut
          whenever you need one.
        </p>
        <p>
          <strong>How it's used:</strong> General crosscuts and rip cuts on
          smaller stock, or fine joinery if you pick up a dedicated dovetail
          saw down the line.
        </p>
        <p>
          <strong>What makes a good one:</strong> For a first saw, look for a
          panel saw around 8 to 10 points per inch, a good middle ground for
          both rip and crosscuts.
        </p>
        <p>
          <strong>Price range:</strong> $25 to $60. Irwin makes widely
          available panel and dovetail saws in this range, and Stanley's saws
          are in nearly every hardware store.
        </p>

        <Callout label="Common Beginner Mistake" tone="mistake">
          <p>
            Forcing the saw. Let the weight of the tool and a steady stroke
            do the cutting. Starting with a shallow guide stroke, rather than
            sawing at full force from the first pass, keeps the cut from
            wandering.
          </p>
        </Callout>

        <p>
          <strong>Keeping it in shape:</strong> Keep the blade dry and
          lightly oiled, and store it away from contact with other tools.
          Sharpening a saw by hand takes practice, many beginners send saws
          out for professional sharpening until they're ready to learn.
        </p>

        <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] pt-4">
          Build the Kit Gradually
        </h2>
        <p>
          Resist the urge to buy everything in one trip. Most experienced
          woodworkers build their kit one tool at a time, adding something
          new only when a project actually calls for it.
        </p>
        <p>
          Power tool brands like DeWalt, Makita, Milwaukee, and Bosch, along
          with clamp and glue makers like Bessey, Kreg, and Titebond, will
          probably find their way into your shop eventually. None of that is
          needed on day one.
        </p>
        <p>
          These five tools are enough to build something real. What you do
          with them matters far more than what's in your tool bag.
        </p>

        <Callout label="Editor's Bench" tone="bench">
          <p>
            Ask around any woodworking community and you'll hear the same
            pattern: the woodworkers with the most refined skills usually
            started with the smallest kits, not the largest. If there's one
            habit worth adopting on day one, it's this: buy less, use it
            more, and let the next tool earn its place in your shop.
          </p>
        </Callout>

        <div
          className="h-64 rounded-lg bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-beige-dark)] bg-cover bg-center"
          style={{ backgroundImage: "url(/images/articles/support_image3.jpeg)" }}
          role="img"
          aria-label="A small, well-maintained beginner hand tool kit ready for the next project"
        />

        <div className="rounded-lg border border-[var(--color-beige-dark)] bg-[var(--color-beige)] p-5 text-sm text-[var(--color-charcoal-light)]">
          <p className="font-semibold text-[var(--color-charcoal)] mb-2">Further reading</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a href="https://www.osha.gov/etools/hand-power-tools" target="_blank" rel="noopener noreferrer" className="underline">
                OSHA — hand and power tool safety guidance
              </a>
            </li>
            <li>
              <a href="https://www.cpsc.gov/" target="_blank" rel="noopener noreferrer" className="underline">
                U.S. Consumer Product Safety Commission — tool safety information
              </a>
            </li>
          </ul>
        </div>

        <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] pt-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-lg border border-[var(--color-beige-dark)] p-5">
              <p className="font-semibold text-[var(--color-charcoal)]">{item.q}</p>
              <p className="mt-2 text-[var(--color-charcoal-light)]">{item.a}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold text-[var(--color-forest)] pt-4">
          What's Next
        </h2>
        <p>
          Tools are only half the story. The other half is putting them to
          work. Once your kit is together, keep learning with{" "}
          <Link href="/articles/beginner-workbench-plans" className="underline text-[var(--color-forest)]">
            5 Beginner-Friendly Workbench Plans You Can Build This Weekend
          </Link>
          , the natural next step now that you can measure, mark, smooth, and
          cut with confidence.
        </p>
        <p>
          You can also browse our{" "}
          <Link href="/tools" className="underline text-[var(--color-forest)]">
            Woodworking Tools
          </Link>{" "}
          section for deeper dives on individual tools, or check our{" "}
          <Link href="/buying-guides" className="underline text-[var(--color-forest)]">
            Buying Guides
          </Link>{" "}
          when you're ready to add your first power tool.
        </p>
      </div>

      <div className="mt-10 pt-6 border-t border-[var(--color-beige-dark)]">
        <Link href="/beginners" className="text-sm font-semibold text-[var(--color-forest)] hover:text-[var(--color-wood-dark)]">
          &larr; Back to Beginner Woodworking
        </Link>
      </div>
    </article>
  );
}
