'use client';

import { useState } from "react";
import { Download, ChevronDown } from "lucide-react";
import { cvDownloads } from "@/lib/portfolio-data";

export function CVDownloadButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="btn-hangar-outline gap-2"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <Download className="h-4 w-4" />
        Download CV
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 min-w-[260px] hangar-panel p-2 shadow-xl">
          {cvDownloads.map((cv) => (
            <a
              key={cv.file}
              href={encodeURI(cv.file)}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm text-muted-foreground hover:text-runway hover:bg-runway/5 rounded-sm transition-colors"
              onClick={() => setOpen(false)}
            >
              {cv.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
