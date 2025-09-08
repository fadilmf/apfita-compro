import { Banknote } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function PaymentDestinationCard() {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray:300 p-8 rounded-xl shadow md:shadow-xl transition-all duration-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent mb-6"
      >
        Payment Destination
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-2 pb-4">
        {/* Kartu Pembayaran Domestik */}
        <div className="w-full relative overflow-hidden p-6 shadow-xl rounded-xl bg-white transition-all duration-300 group ring-1 ring-blue-200 hover:ring-2 hover:ring-blue-300 hover:ring-offset-2">
          {/* Latar belakang dengan efek gradient dan opacity pada hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-400 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 blur-xl"></div>

          <div className="flex flex-col justify-between z-10 h-full">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white p-2 rounded-md shadow-sm">
                  <Banknote className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-blue-600 font-medium uppercase tracking-wide">
                    <p>Bank Transfer Info</p>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Domestic Payment</h3>
                </div>
              </div>
              {/* Badge Official */}
              {/* <div className="border-blue-600 border text-blue-600 transition-all duration-800 hover:bg-blue-100/30 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                Official
              </div> */}
            </div>
            <div className="grid grid-cols-[0.25fr,auto,1fr] gap-2 text-gray-700 text-sm md:text-base text-left mt-6">
              <p className="font-bold">Bank</p>
              <p className="font-bold">:</p>
              <p>Bank Negara Indonesia (BNI)</p>

              <p className="font-bold">Account Number</p>
              <p className="font-bold">:</p>
              <p>3893705</p>

              <p className="font-bold">Account Name</p>
              <p className="font-bold">:</p>
              <p>Rektor IPB C/Q Kerjasama IPB</p>
            </div>
            <p className="text-xs text-gray-500 mt-5 align-bottom">Please ensure the payment reference includes your full name and registration ID if applicable.</p>
          </div>
        </div>

        {/* Kartu Pembayaran Internasional */}
        <div className="relative overflow-hidden lg:col-span-2 p-6 shadow-xl rounded-xl bg-white transition-all duration-300 group ring-1 ring-green-200 hover:ring-2 hover:ring-green-300 hover:ring-offset-2">
          {/* Latar belakang dengan efek gradient dan opacity pada hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-400 bg-gradient-to-br from-green-100 via-green-200 to-green-300 blur-xl"></div>

          {/* Konten Kartu */}
          <div className="flex flex-col justify-between z-10 h-full">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="bg-green-600 text-white p-2 rounded-md shadow-sm">
                  <Banknote className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-green-600 font-medium uppercase tracking-wide">
                    <p>Bank Transfer Info</p>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">International Payment</h3>
                </div>
              </div>
              {/* Badge Official */}
              {/* <div className="border-green-600 border text-green-600 transition-all duration-800 hover:bg-green-100/30 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                Official
              </div> */}
            </div>
            <div className="grid grid-cols-[auto,auto,1fr] gap-2 text-gray-700 text-sm md:text-base text-left mt-6">
              <p className="font-bold">Bank</p>
              <p className="font-bold">:</p>
              <p>Bank Negara Indonesia (BNI)</p>

              <p className="font-bold">Account Number</p>
              <p className="font-bold">:</p>
              <p>3898023</p>

              <p className="font-bold">Account Name</p>
              <p className="font-bold">:</p>
              <p>Rektor IPB cq KS Dollar PTN</p>
              
              <p className="font-bold">Bank Code</p>
              <p className="font-bold">:</p>
              <p>009</p>

              <p className="font-bold">Branch Name</p>
              <p className="font-bold">:</p>
              <p>061</p>

              <p className="font-bold">SWIFT Code</p>
              <p className="font-bold">:</p>
              <p>BNINIDJABGR</p>
              
              <p className="font-bold">Bank Address</p>
              <p className="font-bold">:</p>
              <p>Jl. Ir. H. Juanda No.52, RT.01/RW.07, Paledang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16122</p>
              
              <p className="font-bold">Phone</p>
              <p className="font-bold">:</p>
              <p>0251-8311446</p>
            </div>
            <p className="text-xs text-gray-500 mt-5 align-bottom">Please ensure the payment reference includes your full name and registration ID if applicable.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
