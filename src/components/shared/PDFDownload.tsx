"use client";

import { useState } from "react";
import { Download } from "lucide-react";

interface PDFDownloadProps {
  title: string;
  contentId?: string;
}

export function PDFDownload({ title, contentId = "calc-pdf-content" }: PDFDownloadProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const element = document.getElementById(contentId);
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 1.5,
        useCORS: true,
        backgroundColor: "#FAFAF8",
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pW = pdf.internal.pageSize.getWidth();
      const pH = pdf.internal.pageSize.getHeight();

      // Header bar
      pdf.setFillColor(13, 27, 42);
      pdf.rect(0, 0, pW, 22, "F");
      pdf.setFontSize(13);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(255, 107, 53);
      pdf.text("RupeeMath", 10, 14);
      pdf.setFontSize(7);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(180, 180, 200);
      pdf.text("rupeemath.co.in", pW - 10, 14, { align: "right" });

      // Title
      pdf.setTextColor(13, 27, 42);
      pdf.setFontSize(15);
      pdf.setFont("helvetica", "bold");
      pdf.text(title, 10, 34);

      // Date
      pdf.setFontSize(8);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(120, 120, 120);
      pdf.text(
        `Generated: ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`,
        10, 41
      );

      // Divider
      pdf.setDrawColor(255, 107, 53);
      pdf.setLineWidth(0.5);
      pdf.line(10, 44, pW - 10, 44);

      // Calculator screenshot
      const imgW = pW - 20;
      const imgH = (canvas.height * imgW) / canvas.width;
      const maxH = pH - 68;
      const finalH = Math.min(imgH, maxH);
      pdf.addImage(imgData, "PNG", 10, 48, imgW, finalH);

      // Footer
      pdf.setFillColor(245, 245, 242);
      pdf.rect(0, pH - 12, pW, 12, "F");
      pdf.setFontSize(6.5);
      pdf.setTextColor(140, 140, 140);
      pdf.text(
        "For informational purposes only. Not financial advice. Always consult a qualified advisor. © RupeeMath — rupeemath.co.in",
        pW / 2,
        pH - 4,
        { align: "center" }
      );

      pdf.save(`rupeemath-${title.toLowerCase().replace(/\s+/g, "-")}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 flex justify-end">
      <button
        onClick={handleDownload}
        disabled={loading}
        className="flex items-center gap-2 rounded-xl border border-orange-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 shadow-sm transition-all hover:border-primary hover:text-primary disabled:opacity-50"
      >
        <Download className="h-4 w-4" />
        {loading ? "Generating PDF…" : "Download PDF Report"}
      </button>
    </div>
  );
}
