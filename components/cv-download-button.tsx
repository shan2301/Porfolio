'use client';

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function CVDownloadButton() {
  const handleDownload = () => {
    const cvPath = '/Shashank S_Senior Power Platform Developer.pdf';
    window.open(encodeURI(cvPath), '_blank');
  };

  return (
    <Button 
      size="lg" 
      variant="outline" 
      className="w-full sm:w-auto text-base px-7 h-12 rounded-md border-foreground/15 bg-white/50 hover:bg-white hover:border-primary/40 font-semibold text-foreground"
      onClick={handleDownload}
    >
      <Download className="mr-2 h-4 w-4" />
      Download CV
    </Button>
  );
}
