import matter from 'gray-matter';
import { Buffer } from 'buffer';

declare global {
    interface Window {
        Buffer: typeof Buffer;
    }
}

// Polyfill buffer for browser environment if needed (gray-matter uses it)
if (typeof window !== 'undefined') {
    window.Buffer = window.Buffer || Buffer;
}

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    image?: string;
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
    const modules = import.meta.glob('/src/content/blog/*.md', { as: 'raw' });

    const posts: BlogPost[] = [];

    for (const path in modules) {
        const rawContent = await modules[path]();
        const { data, content } = matter(rawContent);
        const slug = path.split('/').pop()?.replace('.md', '') || '';

        posts.push({
            slug,
            title: data.title || 'Untitled',
            date: data.date || new Date().toISOString(),
            excerpt: data.excerpt || '',
            image: data.image,
            content,
        });
    }

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
    const posts = await getBlogPosts();
    return posts.find((p) => p.slug === slug) || null;
};
