'use client';

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function CVDownloadButton() {
  const handleDownload = () => {
    // Open CV in new tab for download
    const cvPath = '/Shashank Sundar_NewCV.pdf';
    window.open(cvPath, '_blank');
  };

  return (
    <Button 
      size="lg" 
      variant="outline" 
      className="w-full sm:w-auto text-base px-8 h-14 border-primary/30 hover:bg-primary/5 hover:border-primary/50 rounded-none font-medium text-foreground"
      onClick={handleDownload}
    >
      <Download className="mr-2 h-4 w-4" />
      Download CV
    </Button>
  );
}

