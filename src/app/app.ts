import { Component, signal } from '@angular/core';

interface PortfolioProject {
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  illustration: 'qr' | 'markdown' | 'picker' | 'sorting';
  artDescription: string;
  label: string;
  highlights: string[];
  url: string;
  linkLabel: string;
}

interface SkillGroup {
  name: string;
  level: string;
  items: string[];
}

interface Experience {
  role: string;
  company: string;
  dates: string;
  contributions: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly menuOpen = signal(false);
  protected readonly profile = {
    name: 'Arjun Sharma',
    role: 'Full Stack Developer / .NET Engineer',
    location: 'Noida, Uttar Pradesh, India',
    email: 'as506347@gmail.com',
    phone: '+91 99273 71875',
    phoneHref: 'tel:+919927371875',
    linkedIn: 'https://linkedin.com/in/arjun-sharma-69aa87175',
    github: 'https://github.com/Thearjunsharma-ai',
    resume: 'Arjun_Sharma.pdf',
  };

  protected readonly skillGroups: SkillGroup[] = [
    {
      name: 'Languages & frontend',
      level: 'Professional experience',
      items: ['C#', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Bootstrap', 'Razor Pages'],
    },
    {
      name: '.NET & backend',
      level: 'Professional experience',
      items: [
        '.NET Framework',
        '.NET 8',
        'ASP.NET Core',
        'ASP.NET',
        'REST APIs',
        'Entity Framework',
        'LINQ',
        'Unit testing',
      ],
    },
    {
      name: 'Data & integrations',
      level: 'Experience & project exposure',
      items: [
        'SQL Server',
        'Stored procedures',
        'Redis',
        'MongoDB',
        'API integration',
        'MCP',
        'Asynchronous messaging',
      ],
    },
    {
      name: 'Browser APIs & maps',
      level: 'Professional experience',
      items: ['JavaScript Canvas', 'Signature capture', 'Esri Maps', 'Leaflet'],
    },
    {
      name: 'Development tools',
      level: 'Professional experience',
      items: ['Visual Studio', 'Git', 'SSMS', 'Postman', 'API testing'],
    },
    {
      name: 'Exploring the ecosystem',
      level: 'Working knowledge / familiarity',
      items: [
        'React.js (working knowledge)',
        'Angular (awareness)',
        'Blazor (awareness)',
        'Azure & CI/CD (prior exposure)',
      ],
    },
  ];

  protected readonly projects: PortfolioProject[] = [
    {
      number: '01',
      name: 'TheArjunSharma.DraganQR',
      category: 'C# LIBRARY / NUGET PACKAGE',
      description:
        'A custom QR code generator built in C# and published as a reusable NuGet package.',
      tags: ['C#', '.NET', 'NuGet'],
      illustration: 'qr',
      artDescription:
        'Conceptual illustration of a C# package for QR code generation, not a scannable QR code.',
      label: 'Reusable by design',
      highlights: [
        'Built custom QR-code-generation functionality in C#.',
        'Published the library as TheArjunSharma.DraganQR on NuGet.',
      ],
      url: 'https://www.nuget.org/packages/TheArjunSharma.DraganQR/',
      linkLabel: 'View NuGet package',
    },
    {
      number: '02',
      name: 'Markdown Editor',
      category: 'DEVELOPER TOOL / LIVE DEMO',
      description:
        'An embeddable Markdown editing experience with source, preview, and inline editing modes.',
      tags: ['Markdown', 'Editing tools', 'Web'],
      illustration: 'markdown',
      artDescription: 'Conceptual Markdown document with a heading and formatted text.',
      label: 'Write. Preview. Refine.',
      highlights: [
        'Customize the editor appearance, visible sections, and toolbar.',
        'Explore independent editor instances and inline Markdown editing in the demo.',
      ],
      url: 'https://thearjunsharma-ai.github.io/Markdown-Editor/',
      linkLabel: 'Open Markdown Editor',
    },
    {
      number: '03',
      name: 'picker.js',
      category: 'UI COMPONENT / LIVE DEMO',
      description: 'A date, time, and range picker project focused on everyday input interactions.',
      tags: ['Date & time', 'Range selection', 'Web UI'],
      illustration: 'picker',
      artDescription: 'Conceptual date picker grid representing date, time, and range inputs.',
      label: 'Small interactions, considered',
      highlights: [
        'Explore date, time, and range pickers in the public demo.',
        'A focused example of reusable interface functionality.',
      ],
      url: 'https://thearjunsharma-ai.github.io/picker.js/',
      linkLabel: 'Open picker.js',
    },
    {
      number: '04',
      name: 'Sorting Visualizer',
      category: 'LEARNING TOOL / LIVE DEMO',
      description:
        'A browser-based sorting visualizer that brings an algorithm-focused learning project to the web.',
      tags: ['Algorithms', 'Visualization', 'Learning'],
      illustration: 'sorting',
      artDescription: 'Conceptual bar chart illustrating a sequence of values being sorted.',
      label: 'Make the logic visible',
      highlights: [
        'A personal project exploring sorting through a visual interface.',
        'Available as a public browser demo.',
      ],
      url: 'https://thearjunsharma-ai.github.io/Sorting-Visulizer/',
      linkLabel: 'Open Sorting Visualizer',
    },
  ];

  protected readonly experience: Experience[] = [
    {
      role: 'Product Engineer / .NET Engineer',
      company: 'SEW.AI (Smart Energy Water)',
      dates: '2025 - Present',
      contributions: [
        'Develop and maintain .NET backend services and web UI components.',
        'Work with .NET 8 REST APIs and service-layer execution of SQL Server stored procedures.',
        'Implement JSON-driven dynamic forms and configurable application statuses.',
        'Build Canvas-based signature capture and contribute to Esri and Leaflet map functionality.',
        'Resolve UI defects and maintain .NET unit tests for regression verification.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Great Developer Info Tech Pvt. Ltd.',
      dates: 'June 2022 - February 2025',
      contributions: [
        'Developed and maintained web features using C#, ASP.NET, and .NET Framework.',
        'Contributed to backend functionality, UI fixes, and application configuration.',
        'Worked on database tasks and application integrations, including SQL queries and stored procedures.',
        'Collaborated with teammates to investigate defects and deliver requested changes.',
      ],
    },
  ];

  protected readonly services = [
    {
      name: '.NET application development',
      description:
        'Build and maintain web application features with C#, ASP.NET Core, and the .NET ecosystem.',
    },
    {
      name: 'REST APIs & integrations',
      description: 'Develop and integrate backend services, APIs, and application capabilities.',
    },
    {
      name: 'Database development',
      description:
        'Work with SQL Server queries, stored procedures, and service-layer data integration.',
    },
    {
      name: 'Frontend & UI improvements',
      description: 'Implement web interfaces, configurable forms, and practical UI enhancements.',
    },
    {
      name: 'Debugging & maintenance',
      description:
        'Investigate application defects, troubleshoot behavior, and improve maintainability.',
    },
    {
      name: 'Testing & verification',
      description:
        'Write .NET unit tests and verify API behavior to support reliable application changes.',
    },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
