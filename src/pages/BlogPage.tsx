
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogTabs from "@/components/blog/BlogTabs";
import FloatingInfoButton from "@/components/FloatingInfoButton";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-wanderon-dark mb-8">Travel Blog</h1>
            <p className="text-lg text-wanderon-gray mb-8">
              Discover travel insights, destination guides, and expert tips to make your next adventure unforgettable.
            </p>
            <BlogTabs />
          </div>
        </div>
      </div>
      <Footer />
      <FloatingInfoButton />
    </>
  );
};

export default BlogPage;
