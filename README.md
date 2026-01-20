# Shashank's Portfolio

A modern portfolio website built with Next.js, TypeScript, and shadCN UI showcasing projects and experience as a Senior Power Platform Consultant.

## Features

- **Homepage**: Clean, professional landing page with headline, credentials, and CTAs
- **Projects Page**: Detailed project showcase following UK recruiter template format
- **Modern UI**: Built with shadCN UI components and Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive layouts

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadCN UI
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with navigation
│   ├── page.tsx         # Homepage
│   ├── projects/
│   │   └── page.tsx     # Projects showcase page
│   └── globals.css      # Global styles
├── components/
│   └── ui/              # shadCN UI components
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Customization

### Adding Projects

Edit `app/projects/page.tsx` and add new project objects to the `projects` array following the existing structure:

```typescript
{
  title: "Project Title",
  client: "Client Name (Location)",
  problem: "Problem description",
  solution: "Solution description",
  role: "Your role",
  techStack: ["Tech 1", "Tech 2"],
  impact: ["Impact 1", "Impact 2"]
}
```

### Updating Homepage

Edit `app/page.tsx` to update your headline, credentials, and CTAs.

### Adding CV Download

Update the CV download button in `app/page.tsx` to link to your actual CV file in the `public` folder.

## Build for Production

```bash
npm run build
npm start
```

## License

Private portfolio project.

