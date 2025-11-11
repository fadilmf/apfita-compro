import flyerAPFITA from "@/assets/flyer/APFITA2025-Poster-update1011.png";

const Flyer = () => {
  return (
    <div className="w-full flex justify-center py-8 lg:py-12 px-4">
      <a
        href={flyerAPFITA}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={flyerAPFITA}
          alt="Flyer APFITA 2025"
          className="rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer max-w-full lg:max-w-3xl object-contain"
        />
      </a>
    </div>
  );
};

export default Flyer;
