import Header from "@/components/Header";
import ConferencePricing from "@/components/PricingList";
import PaymentGuidelines from "@/components/PaymentGuidelines";

const ConferencePrice = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50">
        <ConferencePricing />
      </div>
      <div className="bg-gray-50">
        <PaymentGuidelines />
      </div>
    </>
  );
};

export default ConferencePrice;
