
import React from 'react';
import BlogCard from './BlogCard';

interface BlogItem {
  title: string;
  description: string;
  image: string;
  category: string;
  location?: string;
  temperature?: string;
  month?: string;
  slug: string;
}

interface BlogTabContentProps {
  items: BlogItem[];
}

const BlogTabContent: React.FC<BlogTabContentProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <BlogCard key={item.slug} {...item} />
      ))}
    </div>
  );
};

export default BlogTabContent;
