// src/components/Flyer.tsx
import flyerAPFITA from "@/assets/flyer/APFITA2025-Poster-update1410.png";

const Flyer = () => {
  return (
    <div className="max-w-full lg:h-max lg:max-w-3xl px-4 py-8 lg:p-12 flex justify-self-center">
      <img
        src={flyerAPFITA}
        alt="Flyer APFITA 2025"
        className="object-cover rounded-xl shadow-lg transition-shadow hover:shadow-xl"
      />
    </div>
  );
};

export default Flyer;
