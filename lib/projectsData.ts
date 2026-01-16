export interface Project {
    id: string;
    slug: string;
    name: string;
    description: string;
    prefix: string;
    imageCount: number;
    category?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "care",
        name: "Care Project",
        description: "A comprehensive healthcare management system",
        prefix: "care",
        imageCount: 6,
        category: "Healthcare",
    },
    {
        id: "2",
        slug: "cars",
        name: "Cars Management",
        description: "Automotive inventory and management solution",
        prefix: "cars",
        imageCount: 3,
        category: "Automotive",
    },
    {
        id: "3",
        slug: "doc",
        name: "Documentation Hub",
        description: "Centralized documentation platform",
        prefix: "doc",
        imageCount: 3,
        category: "Documentation",
    },
    {
        id: "4",
        slug: "ele",
        name: "Electrical Systems",
        description: "Smart electrical management and monitoring",
        prefix: "ele",
        imageCount: 4,
        category: "IoT",
    },
    {
        id: "5",
        slug: "gar",
        name: "Garden Gallery",
        description: "Beautiful garden design and showcase",
        prefix: "gar",
        imageCount: 5,
        category: "Design",
    },
    {
        id: "6",
        slug: "pro",
        name: "Professional Portfolio",
        description: "Professional services and portfolio management",
        prefix: "pro",
        imageCount: 6,
        category: "Professional",
    },
    {
        id: "7",
        slug: "win",
        name: "Windows Showcase",
        description: "Window design and installation showcase",
        prefix: "win",
        imageCount: 6,
        category: "Design",
    },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find((project) => project.slug === slug);
};
