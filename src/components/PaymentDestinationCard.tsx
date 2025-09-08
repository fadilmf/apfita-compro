"use client";
import { Copy, Check, Building2, CreditCard } from "lucide-react";
import { useState } from "react";

const CopyField = ({
  label,
  value,
  variant = "blue",
}: {
  label: string;
  value: string;
  variant?: "blue" | "green";
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        // Fallback method
        const textArea = document.createElement("textarea");
        textArea.value = value;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  const isMonospace =
    label.includes("Number") ||
    label.includes("Code") ||
    label.includes("Phone");

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 group hover:bg-gray-50/50 transition-colors duration-200">
      <div className="flex-1 min-w-0 pr-4 text-left">
        <dt className="text-sm font-medium text-gray-600 mb-1">{label}</dt>
        <dd
          className={`text-base font-semibold text-gray-900 ${
            isMonospace ? "font-mono text-sm" : ""
          } break-words`}
        >
          {value}
        </dd>
      </div>
      <button
        onClick={handleCopy}
        className={`
          flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md
          transition-all duration-200 border opacity-0 group-hover:opacity-100 focus:opacity-100
          ${
            copied
              ? variant === "blue"
                ? "bg-blue-50 text-blue-700 border-blue-200"
                : "bg-green-50 text-green-700 border-green-200"
              : variant === "blue"
              ? "bg-white hover:bg-blue-50 text-blue-600 border-blue-200 hover:border-blue-300"
              : "bg-white hover:bg-green-50 text-green-600 border-green-200 hover:border-green-300"
          }
          hover:shadow-sm active:scale-95
        `}
        disabled={copied}
      >
        {copied ? (
          <>
            <Check className="w-3 h-3" />
            <span>Copied</span>
          </>
        ) : (
          <>
            <Copy className="w-3 h-3" />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
};

export function PaymentDestinationCard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-left">
        <h1 className="text-5xl text-center md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent mb-6">
          Payment Information
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 xl:items-stretch">
        {/* Domestic Payment Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-blue-100 text-sm font-medium uppercase tracking-wide">
                  Domestic Transfer
                </div>
                <h3 className="text-white text-xl font-bold">
                  Local Payment (IDR)
                </h3>
              </div>
            </div>
          </div>

          <div className="p-8 flex-1 flex flex-col">
            <dl className="my-auto flex flex-row">
              <dl className="space-y-0 flex flex-col flex-1">
                <CopyField
                  label="Bank Name"
                  value="Bank Negara Indonesia (BNI)"
                  variant="blue"
                />
                <CopyField
                  label="Account Number"
                  value="3893705"
                  variant="blue"
                />
                <CopyField
                  label="Account Holder"
                  value="Rektor IPB C/Q Kerjasama IPB"
                  variant="blue"
                />
              </dl>
            </dl>

            <div className="pt-6">
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-blue-900 mb-1">
                      Payment Reference
                    </h4>
                    <p className="text-sm text-blue-700">
                      Include your full name and registration ID in the transfer
                      description for faster processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* International Payment Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-green-100 text-sm font-medium uppercase tracking-wide">
                  International Transfer
                </div>
                <h3 className="text-white text-xl font-bold">
                  Global Payment (USD)
                </h3>
              </div>
            </div>
          </div>

          <div className="p-8 flex-1 flex flex-col">
            <dl className="space-y-0 flex-1">
              <CopyField
                label="Bank Name"
                value="Bank Negara Indonesia (BNI)"
                variant="green"
              />
              <CopyField
                label="Account Number"
                value="3898023"
                variant="green"
              />
              <CopyField
                label="Account Holder"
                value="Rektor IPB cq KS Dollar PTN"
                variant="green"
              />
              <CopyField
                label="SWIFT Code"
                value="BNINIDJABGR"
                variant="green"
              />
              <CopyField label="Bank Code" value="009" variant="green" />
              <CopyField label="Branch Code" value="061" variant="green" />
              <CopyField
                label="Bank Address"
                value="Jl. Ir. H. Juanda No.52, RT.01/RW.07, Paledang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16122"
                variant="green"
              />
              <CopyField
                label="Phone Number"
                value="0251-8311446"
                variant="green"
              />
            </dl>

            <div className="mt-auto pt-6">
              <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-green-900 mb-1">
                      International Transfer Note
                    </h4>
                    <p className="text-sm text-green-700">
                      Ensure all correspondent banking fees are covered and
                      include your registration details in the transfer purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
