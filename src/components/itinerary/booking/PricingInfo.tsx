
import { PricingOption } from './PricingTabs';

interface PricingInfoProps {
  activePricing: PricingOption;
  discount: number;
}

const PricingInfo = ({ activePricing, discount }: PricingInfoProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-baseline">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">Starting from</span>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-tripvidya-primary">₹{activePricing.price.toLocaleString()}</span>
            {discount > 0 && (
              <span className="text-base text-gray-500 line-through ml-2">₹{Math.round(activePricing.price / (1 - discount/100)).toLocaleString()}</span>
            )}
            {discount > 0 && (
              <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                {discount}% OFF
              </span>
            )}
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mt-2">{activePricing.description}</p>
    </div>
  );
};

export default PricingInfo;
