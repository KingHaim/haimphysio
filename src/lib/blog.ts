export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    image?: string;
}

const parseFrontmatter = (fileContent: string) => {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---\s*([\s\S]*)/;
    const match = frontmatterRegex.exec(fileContent);

    if (!match) {
        return {
            data: {} as any,
            content: fileContent,
        };
    }

    const frontmatterBlock = match[1];
    const content = match[2];

    const data: Record<string, string> = {};
    frontmatterBlock.split('\n').forEach((line) => {
        const [key, ...value] = line.split(':');
        if (key && value) {
            // Remove quotes and whitespace
            data[key.trim()] = value.join(':').trim().replace(/^['"](.*)['"]$/, '$1');
        }
    });

    return { data, content };
};

export const getBlogPosts = async (lang: string = 'en'): Promise<BlogPost[]> => {
    // Vite's import.meta.glob with absolute paths starting from project root works best
    const modules = import.meta.glob('/src/content/blog/**/*.md', { query: '?raw', import: 'default' });

    const posts: BlogPost[] = [];

    for (const path in modules) {
        // Paths from import.meta.glob for absolute paths look like: /src/content/blog/en/post.md
        // We match exactly the language folder
        if (!path.includes(`/src/content/blog/${lang}/`)) continue;

        const rawContent: string = (await modules[path]()) as string;
        const { data, content } = parseFrontmatter(rawContent);
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

export const getBlogPost = async (slug: string, lang: string = 'en'): Promise<BlogPost | null> => {
    const posts = await getBlogPosts(lang);
    return posts.find((p) => p.slug === slug) || null;
};
