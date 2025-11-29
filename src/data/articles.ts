import { ArticleCardProps } from "@/components/ui/article/article-card"

export const articles: (Omit<ArticleCardProps, "image"> & {
    id: string
})[] = [
    {
        id: "35676476453454365436456546",
        title: "The world’s smallest living horse: miniature therapy stallion from Germany enters Guinness World Records",
        description: "Have you ever heard of an adult horse that could easily be mistaken for a pony? One such stallion is five-year-old Pumuckel from Germany, who has recently been included in the Guinness World Records as the smallest living horse known today.",
    },

    {
        id: "1",
        title: "Breakthrough in Solar Cell Efficiency Achieved by Swiss Researchers",
        description: "A research team in Switzerland has unveiled a new solar cell design that surpasses previous efficiency records while remaining cost-effective for mass production."
    },
    {
        id: "2",
        title: "Deep Sea Expedition Discovers Over 50 New Marine Species",
        description: "Marine biologists exploring the Pacific trench have documented dozens of new species, shedding light on the unknown biodiversity of deep-sea ecosystems."
    },
    {
        id: "3",
        title: "AI System Helps Doctors Detect Early Signs of Heart Disease",
        description: "A new machine learning model can analyze medical scans with unprecedented accuracy, potentially reducing undiagnosed heart conditions worldwide."
    },
    {
        id: "4",
        title: "Urban Farming Skyrockets as Cities Embrace Green Spaces",
        description: "Vertical farms and rooftop gardens are appearing across major cities, offering fresh produce and lowering urban carbon footprints."
    },
    {
        id: "5",
        title: "New Archaeological Discovery Reveals Lost Ancient Settlement",
        description: "Archaeologists have uncovered remnants of a once-thriving civilization previously unknown to historians, offering fresh insight into early urban development."
    },
    {
        id: "6",
        title: "Scientists Decode the Genetic Map of the World’s Hardiest Plant",
        description: "A cactus species capable of surviving extreme drought has been fully sequenced, opening the door to future agricultural resilience studies."
    },
    {
        id: "7",
        title: "Massive Coral Restoration Project Shows Promising Results",
        description: "Conservationists report a significant rebound in coral growth after implementing new reef-seeding technologies in endangered marine areas."
    },
    {
        id: "8",
        title: "New Electric Aircraft Completes First Zero-Emission Test Flight",
        description: "A fully electric passenger aircraft successfully completed its first long-distance flight, marking a milestone in sustainable aviation."
    },
    {
        id: "9",
        title: "Breakthrough Battery Technology Doubles EV Range",
        description: "A new solid-state battery design promises twice the energy density of current lithium-ion cells while reducing overheating risks."
    },
    {
        id: "10",
        title: "Mathematicians Solve Decades-Old Geometric Conjecture",
        description: "A collaboration between European universities has resulted in the solution to a long-standing geometric problem once thought unsolvable."
    },
    {
        id: "11",
        title: "Rare Celestial Event Illuminates Night Sky Worldwide",
        description: "Millions witnessed an extraordinary triple-planet conjunction, a phenomenon that last occurred more than 400 years ago."
    },
    {
        id: "12",
        title: "Researchers Develop Biodegradable Alternative to Plastic Packaging",
        description: "The material, derived from algae and natural fibers, decomposes within weeks and offers similar durability to plastic."
    },
    {
        id: "13",
        title: "New Study Shows Global Decline in Air Pollution Levels",
        description: "International climate efforts and cleaner energy adoption have contributed to the most significant drop in global air pollution in 30 years."
    },
    {
        id: "14",
        title: "Revolutionary Brain-Computer Interface Helps Paralyzed Patients Move Again",
        description: "A cutting-edge neural implant has restored partial mobility to patients suffering from spinal injuries."
    },
    {
        id: "15",
        title: "Engineers Create Self-Healing Road Materials",
        description: "The innovative asphalt mixture repairs small cracks automatically, potentially saving billions in maintenance costs."
    },
    {
        id: "16",
        title: "Scientists Discover Earth-Like Exoplanet in Habitable Zone",
        description: "A newly identified exoplanet orbits within the habitable zone of a nearby star, raising hopes for signs of extraterrestrial life."
    },
    {
        id: "17",
        title: "Breakthrough Education Program Boosts Literacy Rates in Rural Areas",
        description: "A community-driven initiative has drastically improved literacy rates among children in underserved regions."
    },
    {
        id: "18",
        title: "New Ocean Cleanup Device Captures Microplastics at Record Speed",
        description: "The latest innovation in ocean-cleaning tech has proven capable of capturing even the smallest plastic particles."
    },
    {
        id: "19",
        title: "Robotic Prosthetics With Sense of Touch Enter Clinical Trials",
        description: "Patients testing new prosthetic limbs report realistic sensations thanks to advanced neural feedback systems."
    },
    {
        id: "20",
        title: "Global Wildlife Populations Show Signs of Recovery",
        description: "Conservation programs and anti-poaching efforts have resulted in a remarkable resurgence of several endangered species."
    },
    {
        id: "21",
        title: "New Study Reveals Foods Linked to Better Brain Health",
        description: "Researchers have identified specific foods that significantly improve cognitive performance and long-term brain health."
    }
];

export const imageDefault: Pick<ArticleCardProps, "image"> = {
    image: {
        src: "/example.webp",
        alt: "",
        fill: true,
    }
}
