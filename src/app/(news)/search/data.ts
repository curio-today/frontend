import { Article } from "@/types/content/article";

export const ARTICLES: Article[] = [
    {
        id: "1",
        slug: "future-of-artificial-intelligence",
        _status: "published",
        updatedAt: "2024-10-28T14:32:00Z",
        createdAt: "2024-10-15T09:20:00Z",
        title: "The Future of Artificial Intelligence in Healthcare",
        subtitle: "How AI is revolutionizing medical diagnosis and patient care",
        source: "Tech Health Journal",
        badge: {
            label: "Technology",
            variant: "primary",
            icon: "cpu"
        },
        cover: {
            url: "https://example.com/images/ai-healthcare.jpg",
            alt: "AI in Healthcare",
            width: 1200,
            height: 800,
            focal: { x: 0.5, y: 0.3 }
        },
        content: {
            root: {
                children: [],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "root",
                version: 1
            }
        }
    },
    {
        id: "2",
        slug: "sustainable-living-guide-2024",
        _status: "published",
        updatedAt: "2024-10-25T11:15:00Z",
        createdAt: "2024-10-20T08:45:00Z",
        title: "Complete Guide to Sustainable Living in 2024",
        subtitle: "Simple changes you can make today for a greener tomorrow",
        source: "Eco Warriors",
        badge: {
            label: "Lifestyle",
            variant: "success",
            icon: "leaf"
        },
        cover: {
            url: "https://example.com/images/sustainable-living.jpg",
            alt: "Sustainable Living",
            width: 1200,
            height: 800,
            focal: { x: 0.6, y: 0.5 }
        },
        content: {
            root: {
                children: [],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "root",
                version: 1
            }
        }
    },
    {
        id: "3",
        slug: "quantum-computing-breakthrough",
        _status: "draft",
        updatedAt: "2024-10-30T16:22:00Z",
        createdAt: "2024-10-29T13:10:00Z",
        title: "Major Breakthrough in Quantum Computing",
        subtitle: "Scientists achieve 99.9% qubit stability at room temperature",
        source: "Science Daily",
        badge: {
            label: "Science",
            variant: "info",
            icon: "atom"
        },
        cover: {
            url: "https://example.com/images/quantum-computer.jpg",
            alt: "Quantum Computer",
            width: 1200,
            height: 800,
            focal: { x: 0.4, y: 0.4 }
        },
        content: {
            root: {
                children: [],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "root",
                version: 1
            }
        }
    },
    {
        id: "4",
        slug: "cryptocurrency-market-analysis",
        _status: "published",
        updatedAt: "2024-10-27T10:05:00Z",
        createdAt: "2024-10-22T07:30:00Z",
        title: "Cryptocurrency Market Analysis Q4 2024",
        subtitle: "Bitcoin hits new all-time high as institutional adoption grows",
        source: "Crypto Insider",
        badge: {
            label: "Finance",
            variant: "warning",
            icon: "trending-up"
        },
        cover: {
            url: "https://example.com/images/crypto-market.jpg",
            alt: "Cryptocurrency Market",
            width: 1200,
            height: 800,
            focal: { x: 0.5, y: 0.5 }
        },
        content: {
            root: {
                children: [],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "root",
                version: 1
            }
        }
    },
    {
        id: "5",
        slug: "mars-colony-progress-update",
        _status: "published",
        updatedAt: "2024-10-26T12:40:00Z",
        createdAt: "2024-10-18T14:20:00Z",
        title: "Mars Colony Project: 2024 Progress Update",
        subtitle: "SpaceX announces successful habitat module testing",
        source: "Space Exploration News",
        badge: {
            label: "Space",
            variant: "secondary",
            icon: "rocket"
        },
        cover: {
            url: "https://example.com/images/mars-colony.jpg",
            alt: "Mars Colony Concept",
            width: 1200,
            height: 800,
            focal: { x: 0.7, y: 0.3 }
        },
        content: {
            root: {
                children: [],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "root",
                version: 1
            }
        }
    },
    {
        id: "6",
        slug: "mental-health-workplace-strategies",
        _status: "published",
        updatedAt: "2024-10-24T09:18:00Z",
        createdAt: "2024-10-16T11:55:00Z",
        title: "Mental Health in the Workplace: Practical Strategies",
        subtitle: "Creating a supportive work environment for employee wellbeing",
        source: "Workplace Wellness Today",
        badge: {
            label: "Health",
            variant: "danger",
            icon: "heart"
        },
        cover: {
            url: "https://example.com/images/mental-health-workplace.jpg",
            alt: "Mental Health at Work",
            width: 1200,
            height: 800,
            focal: { x: 0.5, y: 0.6 }
        },
        content: {
            root: {
                children: [],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "root",
                version: 1
            }
        }
    },
    {
        id: "7",
        slug: "electric-vehicle-revolution",
        _status: "published",
        updatedAt: "2024-10-29T15:30:00Z",
        createdAt: "2024-10-23T10:12:00Z",
        title: "The Electric Vehicle Revolution: What's Next?",
        subtitle: "New battery technology promises 1000-mile range",
        source: "Auto Tech Review",
        badge: {
            label: "Automotive",
            variant: "primary",
            icon: "zap"
        },
        cover: {
            url: "https://example.com/images/electric-car.jpg",
            alt: "Electric Vehicle",
            width: 1200,
            height: 800,
            focal: { x: 0.3, y: 0.5 }
        },
        content: {
            root: {
                children: [],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "root",
                version: 1
            }
        }
    },
    {
        id: "8",
        slug: "climate-change-solutions",
        _status: "published",
        updatedAt: "2024-10-28T08:45:00Z",
        createdAt: "2024-10-19T06:30:00Z",
        title: "Innovative Solutions to Combat Climate Change",
        subtitle: "From carbon capture to renewable energy breakthroughs",
        source: "Environmental Science Today",
        badge: {
            label: "Environment",
            variant: "success",
            icon: "globe"
        },
        cover: {
            url: "https://example.com/images/climate-solutions.jpg",
            alt: "Climate Change Solutions",
            width: 1200,
            height: 800,
            focal: { x: 0.5, y: 0.4 }
        },
        content: {
            root: {
                children: [],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "root",
                version: 1
            }
        }
    },
    {
        id: "9",
        slug: "web3-decentralized-internet",
        _status: "draft",
        updatedAt: "2024-10-30T17:55:00Z",
        createdAt: "2024-10-28T12:20:00Z",
        title: "Understanding Web3: The Decentralized Internet",
        subtitle: "How blockchain technology is reshaping the digital landscape",
        source: "Digital Frontier Magazine",
        badge: {
            label: "Web3",
            variant: "info",
            icon: "network"
        },
        cover: {
            url: "https://example.com/images/web3-concept.jpg",
            alt: "Web3 Concept",
            width: 1200,
            height: 800,
            focal: { x: 0.6, y: 0.4 }
        },
        content: {
            root: {
                children: [],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "root",
                version: 1
            }
        }
    },
    {
        id: "10",
        slug: "future-of-remote-work",
        _status: "published",
        updatedAt: "2024-10-27T13:25:00Z",
        createdAt: "2024-10-21T09:40:00Z",
        title: "The Future of Remote Work: Trends and Predictions",
        subtitle: "How hybrid models are transforming corporate culture",
        source: "Business Innovation Weekly",
        badge: {
            label: "Business",
            variant: "warning",
            icon: "briefcase"
        },
        cover: {
            url: "https://example.com/images/remote-work.jpg",
            alt: "Remote Work Setup",
            width: 1200,
            height: 800,
            focal: { x: 0.4, y: 0.6 }
        },
        content: {
            root: {
                children: [],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "root",
                version: 1
            }
        }
    }
];