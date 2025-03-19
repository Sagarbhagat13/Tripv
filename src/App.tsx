
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ItineraryPage from "./pages/ItineraryPage";
import DayItineraryPage from "./pages/DayItineraryPage";
import CustomizedTripPage from "./pages/CustomizedTripPage";
import SuggestedItineraryPage from "./pages/SuggestedItineraryPage";
import CategoryPage from "./pages/CategoryPage";
import BackpackingPage from "./pages/BackpackingPage";
import FloatingInfoButton from "./components/FloatingInfoButton";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

const queryClient = new QueryClient();

const FloatingButtonWrapper = () => {
  const location = useLocation();
  const showOnPaths = ['/', '/contact'];
  
  if (!showOnPaths.includes(location.pathname)) {
    return null;
  }
  
  return <FloatingInfoButton />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/trip/:id" element={<ItineraryPage />} />
          <Route path="/suggested-trip/:id" element={<SuggestedItineraryPage />} />
          <Route path="/day-itinerary/:tripId" element={<DayItineraryPage />} />
          <Route path="/custom-trip/:tripId" element={<CustomizedTripPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/backpacking" element={<BackpackingPage />} />
          
          {/* India routes */}
          <Route path="/india" element={<CategoryPage />} />
          <Route path="/india/:state" element={<CategoryPage />} />
          
          {/* World routes */}
          <Route path="/world" element={<CategoryPage />} />
          <Route path="/world/:country" element={<CategoryPage />} />
          
          {/* Category pages - using the same component but for different routes */}
          <Route path="/popular-trips" element={<CategoryPage />} />
          <Route path="/off-beat-trips" element={<CategoryPage />} />
          <Route path="/short-trips" element={<CategoryPage />} />
          <Route path="/long-weekend-trips" element={<CategoryPage />} />
          <Route path="/international-tours" element={<CategoryPage />} />
          <Route path="/family-tours" element={<CategoryPage />} />
          <Route path="/ladakh-trips" element={<CategoryPage />} />
          <Route path="/regional-tours" element={<CategoryPage />} />
          <Route path="/honeymoon-packages" element={<CategoryPage />} />
          <Route path="/monthly-packages" element={<CategoryPage />} />
          
          {/* Dynamic category/subcategory routes */}
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/family-tours/:categoryId" element={<CategoryPage />} />
          <Route path="/regional-tours/:categoryId" element={<CategoryPage />} />
          <Route path="/ladakh-trips/:categoryId" element={<CategoryPage />} />
          <Route path="/off-beat/:tripId" element={<ItineraryPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingButtonWrapper />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
