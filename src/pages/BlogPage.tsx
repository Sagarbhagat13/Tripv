
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogTabs from "@/components/blog/BlogTabs";
import FloatingInfoButton from "@/components/FloatingInfoButton";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-wanderon-dark mb-8">Travel Blog</h1>
          <BlogTabs />
        </div>
      </div>
      <Footer />
      <FloatingInfoButton />
    </>
  );
};

export default BlogPage;
