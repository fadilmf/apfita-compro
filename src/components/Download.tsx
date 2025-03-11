import { FileDown, FileText, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useState, type ReactElement } from "react";

interface DownloadFile {
  title: string;
  description: string;
  size: string;
  icon: ReactElement;
  url: string;
}

export default function DownloadSection() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const files: DownloadFile[] = [
    {
      title: "Proceeding template",
      description: "E3S Web of Conferences",
      size: "32.41 KB",
      icon: <FileText />,
      url: "/templates/proceeding-template.docx",
    },
    {
      title: "Journal Template",
      description: "UJAR/ Universal Journal of Agricultural Research",
      size: "524.5 KB",
      icon: <FileText />,
      url: "/templates/journal-template.docx",
    },
  ];

  const handleDownload = async (url: string) => {
    setDownloading(url);
    try {
      // Simulate download delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Actual download logic would go here
      const link = document.createElement("a");
      link.href = url;
      link.download = url.split("/").pop() || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">Download</h1>
        <p className="text-lg text-gray-600">Download the documents you need</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {files.map((file, index) => {
          const isDownloading = downloading === file.url;

          return (
            <motion.div
              key={file.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {file.icon}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {file.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {file.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FileDown className="w-4 h-4 mr-1" />
                    Size: {file.size}
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(file.url)}
                  disabled={isDownloading}
                  className={`
                    w-full px-4 py-3 rounded-lg font-medium
                    flex items-center justify-center gap-2
                    transition-all duration-300
                    ${
                      isDownloading
                        ? "bg-amber-100 text-amber-700 cursor-wait"
                        : "bg-amber-400 text-amber-900 hover:bg-amber-500"
                    }
                  `}
                >
                  {isDownloading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-amber-700 border-t-transparent rounded-full animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download
                    </>
                  )}
                </button>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent hover:border-blue-600 rounded-xl transition-colors duration-300 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        * Please use these templates for your submissions
      </div>
    </div>
  );
}
