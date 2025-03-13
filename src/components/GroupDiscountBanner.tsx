
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const GroupDiscountBanner = () => {
  return (
    <section className="py-8 px-4 md:px-8 w-full">
      <div className="container mx-auto">
        <div 
          className="rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80")', 
            backgroundPosition: 'center',
          }}
        >
          <div className="w-full h-full backdrop-blur-sm bg-black/30 py-8">
            <div className="flex flex-col items-center gap-4 text-center px-6 md:px-12">
              <div className="bg-tripvidya-secondary/20 p-3 rounded-full backdrop-blur-sm">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Group Discount</h3>
                <p className="text-base text-white/90 mb-4 max-w-lg mx-auto">Groups of 5+ get special pricing and a dedicated trip captain!</p>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
                  size="default"
                >
                  Inquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupDiscountBanner;
