"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { completePaymentAction } from "@/actions/application-actions";
import { AlertCircle, CreditCard, ShieldCheck, HelpCircle } from "lucide-react";

interface PaymentViewProps {
  jobId: string;
  applicationId: string;
  amount: number;
  razorpayKey: string;
  phone: string;
}

export default function PaymentView({
  jobId,
  applicationId,
  amount,
  razorpayKey,
  phone,
}: PaymentViewProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isPlaceholderKey = !razorpayKey || razorpayKey.includes("placeholder");

  // Handle Mock payment (test mode bypass)
  const handleMockPayment = async () => {
    setIsLoading(true);
    setError(null);

    const res = await completePaymentAction(applicationId, "PAID");
    setIsLoading(false);

    if (res.success) {
      router.push(`/apply/${jobId}/confirmation`);
    } else {
      setError(res.error || "Failed to finalize mock payment.");
    }
  };

  // Handle actual Razorpay checkout
  const handleRazorpayCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Load Razorpay script dynamically
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = async () => {
        const options = {
          key: razorpayKey,
          amount: amount * 100, // Amount in paise
          currency: "INR",
          name: "HinduSwad Onboarding",
          description: `Verification & Exam Fee for App ID: ${applicationId.slice(-6).toUpperCase()}`,
          handler: async function (response: any) {
            // Verify payment on server
            setIsLoading(true);
            const res = await completePaymentAction(applicationId, "PAID");
            setIsLoading(false);

            if (res.success) {
              router.push(`/apply/${jobId}/confirmation`);
            } else {
              setError("Payment verified failed on server.");
            }
          },
          prefill: {
            contact: phone,
          },
          theme: {
            color: "#FF6B35",
          },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.on("payment.failed", function (resp: any) {
          setError(resp.error.description || "Payment failed.");
          setIsLoading(false);
        });
        rzp.open();
      };

      script.onerror = () => {
        setError("Failed to load Razorpay checkout script.");
        setIsLoading(false);
      };
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="border border-zinc-200 rounded-3xl p-6 bg-zinc-50/50 flex flex-col items-center text-center space-y-4">
        <div className="h-14 w-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center">
          <CreditCard size={28} />
        </div>
        <div>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
            Amount Due
          </span>
          <span className="text-4xl font-extrabold text-zinc-950 mt-1 block">
            ₹{amount}
          </span>
        </div>
        <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
          This payment covers your background verification, profile validation, and examination slot scheduling.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
          Payment Method
        </h3>
        
        {isPlaceholderKey ? (
          <div className="bg-amber-50 border border-amber-200/60 p-5 rounded-2xl space-y-3">
            <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
              ⚠️ Developer Bypass Active
            </h4>
            <p className="text-xs text-amber-700 leading-relaxed">
              No live Razorpay keys detected in `.env`. You can use the mock checkout bypass below to instantly pay and test the entire candidate flow (assessment, dashboard status).
            </p>
            <Button
              onClick={handleMockPayment}
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-6 text-sm font-semibold flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
            >
              {isLoading ? "Processing..." : "Mock Checkout (Test Bypass)"}
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleRazorpayCheckout}
            disabled={isLoading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-6 text-sm font-semibold flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
          >
            {isLoading ? "Loading Razorpay..." : "Pay with Razorpay"}
          </Button>
        )}
      </div>

      <div className="h-px bg-zinc-150" />

      <div className="flex gap-2.5 text-xs text-zinc-500 justify-center items-center">
        <ShieldCheck size={16} className="text-emerald-500" />
        <span>Secure transaction backed by HinduSwad Logistics Network.</span>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 text-xs px-4 py-3 rounded-2xl flex items-center gap-2 border border-red-100 animate-fade-in">
          <AlertCircle size={16} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
