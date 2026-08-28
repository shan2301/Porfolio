'use client';

import { Download } from "lucide-react";

export function CVDownloadButton() {
  const handleDownload = () => {
    const cvPath = '/Shashank S_Senior Power Platform Developer.pdf';
    window.open(encodeURI(cvPath), '_blank');
  };

  return (
    <button
      type="button"
      className="btn-hangar-outline gap-2"
      onClick={handleDownload}
    >
      <Download className="h-4 w-4" />
      Download CV
    </button>
  );
}
