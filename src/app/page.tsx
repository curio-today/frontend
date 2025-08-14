import Post, { PostProps } from "@/components/ui/Post";
import styles from "./page.module.css";

export default function Home() {
    function loadPosts(): PostProps[] {
        return [
            {
                slug: "tech-trends-2025",
                image: {
                    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
                    sizes: ["300x200", "600x400"],
                    alt: "Futuristic city skyline with holograms"
                },
                title: "Tech Trends of 2025",
                subtitle: "What’s shaping the digital future",
                badge: { label: "Technology", color: "blue" },
                publishedDate: "2025-01-15"
            },
            {
                slug: "healthy-breakfast-ideas",
                image: {
                    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                    sizes: ["200x150", "500x350"],
                    alt: "Bowl of oatmeal with berries"
                },
                title: "10 Healthy Breakfast Ideas",
                subtitle: "Kickstart your mornings right",
                badge: { label: "Food", color: "green" },
                publishedDate: "2025-02-01"
            },
            {
                slug: "travel-guide-iceland",
                image: {
                    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                    sizes: ["400x250", "800x500"],
                    alt: "Waterfall in Iceland"
                },
                title: "Travel Guide: Iceland",
                subtitle: "Explore the land of fire and ice",
                badge: { label: "Travel", color: "purple" },
                publishedDate: "2025-03-10"
            },
            {
                slug: "minimalist-home-design",
                image: {
                    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                    sizes: ["250x180", "700x450"],
                    alt: "Minimalist living room"
                },
                title: "Minimalist Home Design",
                subtitle: "Less clutter, more life",
                badge: { label: "Design", color: "teal" },
                publishedDate: "2025-01-25"
            },
            {
                slug: "best-laptops-2025",
                image: {
                    src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
                    sizes: ["300x200", "600x400"],
                    alt: "Laptop on a wooden desk"
                },
                title: "Best Laptops of 2025",
                subtitle: "Performance meets style",
                badge: { label: "Tech", color: "blue" },
                publishedDate: "2025-02-20"
            },
            {
                slug: "yoga-for-beginners",
                image: {
                    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
                    sizes: ["300x200", "600x400"],
                    alt: "Person practicing yoga"
                },
                title: "Yoga for Beginners",
                subtitle: "Start your wellness journey",
                badge: { label: "Lifestyle", color: "green" },
                publishedDate: "2025-03-15"
            },
            {
                slug: "best-books-2025",
                image: {
                    src: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
                    sizes: ["200x150", "500x350"],
                    alt: "Stack of books"
                },
                title: "Best Books to Read in 2025",
                subtitle: "Stories that inspire",
                badge: { label: "Books", color: "orange" },
                publishedDate: "2025-04-01"
            },
            {
                slug: "street-food-around-world",
                image: {
                    src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
                    sizes: ["300x200", "600x400"],
                    alt: "Street food stall in Asia"
                },
                title: "Street Food Around the World",
                subtitle: "A global taste adventure",
                badge: { label: "Food", color: "green" },
                publishedDate: "2025-01-18"
            },
            {
                slug: "space-exploration-future",
                image: {
                    src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
                    sizes: ["400x250", "800x500"],
                    alt: "Astronaut floating in space"
                },
                title: "The Future of Space Exploration",
                subtitle: "Beyond our solar system",
                badge: { label: "Science", color: "purple" },
                publishedDate: "2025-02-28"
            },
            {
                slug: "coffee-brewing-guide",
                image: {
                    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
                    sizes: ["250x180", "700x450"],
                    alt: "Pour-over coffee brewing"
                },
                title: "Ultimate Coffee Brewing Guide",
                subtitle: "Brew like a barista",
                badge: { label: "Food", color: "brown" },
                publishedDate: "2025-03-20"
            },
            {
                slug: "photography-tips-pro",
                image: {
                    src: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
                    sizes: ["300x200", "600x400"],
                    alt: "Camera on tripod"
                },
                title: "Photography Tips from the Pros",
                subtitle: "Capture moments perfectly",
                badge: { label: "Photography", color: "black" },
                publishedDate: "2025-04-12"
            },
            {
                slug: "gardening-in-small-spaces",
                image: {
                    src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
                    sizes: ["300x200", "600x400"],
                    alt: "Plants in small balcony"
                },
                title: "Gardening in Small Spaces",
                subtitle: "Greenery for every home",
                badge: { label: "Lifestyle", color: "green" },
                publishedDate: "2025-01-30"
            },
            {
                slug: "artificial-intelligence-ethics",
                image: {
                    src: "https://images.unsplash.com/photo-1581090700227-4c4f50c52b25",
                    sizes: ["300x200", "600x400"],
                    alt: "AI brain concept"
                },
                title: "Ethics of Artificial Intelligence",
                subtitle: "Balancing innovation and morality",
                badge: { label: "Tech", color: "red" },
                publishedDate: "2025-02-14"
            },
            {
                slug: "fashion-trends-2025",
                image: {
                    src: "https://images.unsplash.com/photo-1495121605193-b116b5b09aaf",
                    sizes: ["300x200", "600x400"],
                    alt: "Model on runway"
                },
                title: "Fashion Trends in 2025",
                subtitle: "What’s hot this year",
                badge: { label: "Fashion", color: "pink" },
                publishedDate: "2025-03-02"
            },
            {
                slug: "hiking-trails-europe",
                image: {
                    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                    sizes: ["400x250", "800x500"],
                    alt: "Mountain hiking trail"
                },
                title: "Best Hiking Trails in Europe",
                subtitle: "Adventure awaits",
                badge: { label: "Travel", color: "green" },
                publishedDate: "2025-04-08"
            },
            {
                slug: "future-of-electric-cars",
                image: {
                    src: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
                    sizes: ["300x200", "600x400"],
                    alt: "Electric car charging"
                },
                title: "The Future of Electric Cars",
                subtitle: "Driving towards sustainability",
                badge: { label: "Automotive", color: "blue" },
                publishedDate: "2025-01-12"
            },
            {
                slug: "smart-home-guide",
                image: {
                    src: "https://images.unsplash.com/photo-1581092919535-8d5e5e6f1a5c",
                    sizes: ["250x180", "700x450"],
                    alt: "Smart home devices"
                },
                title: "Smart Home Guide",
                subtitle: "Automate your living space",
                badge: { label: "Tech", color: "purple" },
                publishedDate: "2025-02-05"
            },
            {
                slug: "mindfulness-for-stress",
                image: {
                    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                    sizes: ["300x200", "600x400"],
                    alt: "Meditating person"
                },
                title: "Mindfulness for Stress Relief",
                subtitle: "Calm your mind daily",
                badge: { label: "Health", color: "green" },
                publishedDate: "2025-03-25"
            },
            {
                slug: "vegan-recipes-2025",
                image: {
                    src: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
                    sizes: ["300x200", "600x400"],
                    alt: "Vegan dish with vegetables"
                },
                title: "Top Vegan Recipes for 2025",
                subtitle: "Plant-based and delicious",
                badge: { label: "Food", color: "green" },
                publishedDate: "2025-04-18"
            },
            {
                slug: "cryptocurrency-outlook-2025",
                image: {
                    src: "https://images.unsplash.com/photo-1620207418302-439b387441b0",
                    sizes: ["400x250", "800x500"],
                    alt: "Digital cryptocurrency coins"
                },
                title: "Cryptocurrency Outlook for 2025",
                subtitle: "Market trends and predictions",
                badge: { label: "Finance", color: "gold" },
                publishedDate: "2025-01-20"
            }
        ];
    }

    const data: PostProps[] = loadPosts();

    return (
        <div className={styles.page}>
            <header className={styles.posts}>
                <section className={styles.main}>
                    <Post {...data[0]} />
                    <Post {...data[1]} />
                </section>
                <section className={styles.main}>
                    <Post {...data[2]} />
                    <Post {...data[3]} />
                    <Post {...data[4]} />
                </section>
            </header>
        </div>
  );
}
