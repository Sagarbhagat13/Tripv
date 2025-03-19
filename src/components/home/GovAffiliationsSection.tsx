
import { Separator } from "@/components/ui/separator";

// Partner logos with their names
const partners = [
  {
    id: 1,
    name: "MSME",
    logo: "http://media.licdn.com/dms/image/v2/D4D12AQEU8QePOMHZHQ/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1661405886092?e=1747872000&v=beta&t=3RQxMS3cRFzl4I09ObqSPTy5fod8uHpFOtF1pqgTbgY",
  },
  {
    id: 2,
    name: "AIR INDIA",
    logo: "https://media.assettype.com/creativegaga%2F2023-08%2F7605006c-4e86-45ed-a5cd-cb00cbb32461%2FAirIndia_NewLogo.webp?w=1200&auto=format%2Ccompress&fit=max",
  },
  {
    id: 3,
    name: "GST",
    logo: "https://www.vhv.rs/dpng/d/592-5925917_from-hsn-sac-tax-central-tax-statet-ax.png",
  },
  {
    id: 4,
    name: "IDFC BANK",
    logo: "https://images.indianexpress.com/2020/03/logo-idfc-first-bank-759.jpg",
  },
  {
    id: 5,
    name: "INDIGO",
    logo: "https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo-1536x966.png",
  },
  {
    id: 6,
    name: "OTM",
    logo: "https://www.otm-india.https://media.licdn.com/dms/image/v2/C4D0BAQGfmjdTU1rzZA/company-logo_200_200/company-logo_200_200/0/1677578350492/otm_largest_b2b_outbound_travel_mart_in_india__logo?e=1747872000&v=beta&t=lDd7l6dyhHm_Elcp9Pir3c0gEqqmCNf1hmrQad2MidA/images/OTM-logo.png",
  },
  {
    id: 7,
    name: "MAHARASHTRA TOURISM",
    logo: "https://upload.wikimedia.https://www.mediainfoline.com/wp-content/uploads/2021/02/maharashtra-tourism-logo.jpg/wikipedia/commons/thumb/1/1b/Maharashtra_Tourism_Logo.svg/1200px-Maharashtra_Tourism_Logo.svg.png",
  },
  {
    id: 8,
    name: "IRCTC",
    logo: "https://upload.wikimedia.org/https://1000logos.net/wp-content/uploads/2022/02/IRCTC-logo-1536x864.png/en/thumb/5/58/Indian_Railway_Catering_and_Tourism_Corporation_logo.svg/1200px-Indian_Railway_Catering_and_Tourism_Corporation_logo.svg.png",
  },
  {
    id: 9,
    name: "STARTUP INDIA",
    logo: "https://upload.https://www.startupindia.gov.in/sih/themes/custom/startup_india/images/header-icons/DPIIT-header.png.org/wikipedia/commons/thumb/9/96/Startup_India_Logo.svg/1200px-Startup_India_Logo.svg.png",
  },
];

const GovAffiliationsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          GOV Affiliations and Partners
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex flex-col items-center p-4 rounded-lg transition-all hover:shadow-md"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="h-12 md:h-14 object-contain filter grayscale hover:grayscale-0 transition-all"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
              <span className="text-xs text-gray-500 mt-2 font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovAffiliationsSection;
