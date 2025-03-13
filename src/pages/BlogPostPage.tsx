
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingInfoButton from "@/components/FloatingInfoButton";
import { CalendarDays, MapPin, Thermometer, User, Clock, Tag } from 'lucide-react';
import { 
  monthlyDestinations, 
  travelGuides, 
  travelTips, 
  latestNews, 
  budgetDestinations, 
  offbeatPlaces 
} from '@/data/blogData';

// Combined blog data
const allBlogPosts = [
  ...monthlyDestinations,
  ...travelGuides,
  ...travelTips,
  ...latestNews,
  ...budgetDestinations,
  ...offbeatPlaces
];

interface BlogPost {
  title: string;
  description: string;
  image: string;
  category: string;
  slug: string;
  location?: string;
  temperature?: string;
  month?: string;
  content?: string;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the blog post based on the slug
    const foundPost = allBlogPosts.find(post => post.slug === slug);
    
    if (foundPost) {
      // Simulate additional content that would normally come from a backend
      const enrichedPost = {
        ...foundPost,
        content: generateDummyContent(foundPost.title, foundPost.description),
      };
      setPost(enrichedPost);
    }
    
    setLoading(false);
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-64 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-wanderon-dark mb-4">Blog Post Not Found</h1>
              <p className="text-wanderon-gray mb-6">Sorry, the blog post you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Blog header */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-tripvidya-primary text-white text-sm rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-wanderon-dark mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-wanderon-gray mb-6">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>TripVidya Team</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              
              {post.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{post.location}</span>
                </div>
              )}
              {post.temperature && (
                <div className="flex items-center gap-1">
                  <Thermometer className="h-4 w-4" />
                  <span>{post.temperature}</span>
                </div>
              )}
              {post.month && (
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{post.month}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Featured image */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
          
          {/* Blog content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-wanderon-gray mb-6">{post.description}</p>
              
              {/* Render the content sections */}
              <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
            </div>
            
            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-5 w-5 text-wanderon-gray" />
                {['travel', 'adventure', post.category.toLowerCase(), post.location?.toLowerCase() || 'destinations'].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-wanderon-gray text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingInfoButton />
    </>
  );
};

// Helper function to generate dummy content
function generateDummyContent(title: string, intro: string): string {
  return `
    <h2>Introduction</h2>
    <p>${intro}</p>
    
    <h2>What to Expect</h2>
    <p>When visiting ${title.split(' ')[0]}, travelers can expect breathtaking landscapes, rich cultural experiences, and unforgettable adventures. The region offers something for everyone, from relaxing getaways to adrenaline-pumping activities.</p>
    
    <figure>
      <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60" alt="Scenic view" class="w-full h-auto rounded-lg my-6" />
      <figcaption class="text-sm text-center text-gray-500">Beautiful scenery you'll encounter during your journey</figcaption>
    </figure>
    
    <h2>Best Time to Visit</h2>
    <p>The ideal time to visit depends on what you're looking to experience. Each season offers its own unique charm and activities:</p>
    
    <ul>
      <li><strong>Spring (March-May):</strong> Mild temperatures and blooming landscapes make this perfect for hiking and outdoor activities.</li>
      <li><strong>Summer (June-August):</strong> Warm weather ideal for water activities and exploring natural attractions.</li>
      <li><strong>Fall (September-November):</strong> Cooler temperatures and stunning foliage create a picturesque setting.</li>
      <li><strong>Winter (December-February):</strong> Perfect for winter sports enthusiasts and those seeking a snowy adventure.</li>
    </ul>
    
    <h2>Must-Visit Attractions</h2>
    <p>Don't miss these incredible sights during your visit:</p>
    
    <ol>
      <li>Scenic viewpoints offering panoramic vistas</li>
      <li>Historical monuments and cultural sites</li>
      <li>Local markets for authentic crafts and cuisine</li>
      <li>Natural wonders unique to the region</li>
    </ol>
    
    <figure>
      <img src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4" alt="Local attraction" class="w-full h-auto rounded-lg my-6" />
      <figcaption class="text-sm text-center text-gray-500">One of the many breathtaking sights you'll experience</figcaption>
    </figure>
    
    <h2>Travel Tips</h2>
    <p>Here are some essential tips to make your journey smoother:</p>
    
    <ul>
      <li>Pack appropriate clothing for the season</li>
      <li>Carry local currency for small purchases</li>
      <li>Learn a few phrases in the local language</li>
      <li>Research local customs and etiquette before your trip</li>
      <li>Book accommodations in advance, especially during peak season</li>
    </ul>
    
    <h2>Culinary Experiences</h2>
    <p>The local cuisine is a delightful aspect of any travel experience. Be sure to try these regional specialties:</p>
    
    <ul>
      <li>Traditional dishes passed down through generations</li>
      <li>Street food that locals love</li>
      <li>Seasonal delicacies only available at certain times</li>
      <li>Beverages unique to the region</li>
    </ul>
    
    <figure>
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Local cuisine" class="w-full h-auto rounded-lg my-6" />
      <figcaption class="text-sm text-center text-gray-500">Sample the delicious local cuisine during your stay</figcaption>
    </figure>
    
    <h2>Conclusion</h2>
    <p>Whether you're seeking adventure, relaxation, or cultural immersion, ${title.split(' ')[0]} offers an unforgettable experience. Plan your trip thoughtfully to make the most of this amazing destination.</p>
  `;
}

export default BlogPostPage;
