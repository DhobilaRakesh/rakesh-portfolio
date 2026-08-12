import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, QueryList, ViewChildren } from '@angular/core';

interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

interface NavLink {
  id: string;
  label: string;
}

interface SkillGroup {
  title: string;
  items: string[];
}

interface Project {
  title: string;
  subtitle: string;
  image: string;
  status: string;
  description: string;
  tech: string[];
}

interface Experience {
  role: string;
  company: string;
  client: string;
  period: string;
}

interface Education {
  degree: string;
  university: string;
}

interface Language {
  name: string;
  level: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  profile = {
    name: 'Rakesh Dhobila',
    role: 'Angular | Node | MEAN Stack Developer',
    subtitle: 'Angular • TypeScript',
    location: 'Hyderabad, India',
    email: 'rakeshdhobila006@gmail.com',
    // website: 'https://lnkd.in/dursZpFf',
    website: 'https://lnkd.in/ghK3yN3Q',
    phone: '+91 8639822946',
    whatsapp: 'https://wa.me/918639822946',
    photo: 'assets/rakesh1.jpeg',
    resume: 'assets/Rakesh_Resume.pdf',
    coverLetter: 'assets/Rakesh_Cover_Letter.pdf'
  };

  navLinks: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  activeSection = 'home';
  navOpen = false;
  scrollProgress = 0;
  showBackToTop = false;

  socialLinks: SocialLink[] = [
    { label: 'LinkedIn', icon: 'in', url: 'https://www.linkedin.com/in/rakesh-dhobila-a34523222/' },
    { label: 'GitHub', icon: 'GH', url: 'https://github.com/DhobilaRakesh' },
    { label: 'Email', icon: '✉', url: 'mailto:rakeshdhobila006@gmail.com' }
  ];

  /** Lines rendered inside the hero "code editor" panel — the page's signature element. */
  terminalLines = [
    { key: 'const', text: "developer.name = 'Rakesh Dhobila';" },
    { key: 'const', text: "developer.stack = ['Angular', 'TypeScript', 'JavaScript', 'Node.js', MongoDB];" },
    { key: 'const', text: 'developer.experience = "3+ years";' },
    { key: 'fn', text: 'developer.buildSomethingGreat();' }
  ];

  techIcons = ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'jQuery', 'HTML5', 'CSS3', 'React', 'JavaScript', 'REST APIs'];

  summaryPoints = [
    '3+ years of professional experience in frontend web application development using Angular, TypeScript, HTML5, CSS3, SCSS, Bootstrap, and RxJS.',
    '1 year of hands-on experience in backend development using Node.js, Express.js, and MongoDB for building RESTful APIs and server-side applications.',
    'Strong expertise in Angular, TypeScript, RxJS, HTML5, CSS3, Bootstrap, PrimeNG, and building scalable, maintainable frontend applications.',
    'Experience in designing, developing, and consuming RESTful APIs using Node.js and Express.js.',
    'Hands-on experience with MongoDB, including schema design, CRUD operations, queries, and aggregation pipelines.',
    'Good experience integrating Angular applications with backend APIs using HttpClient, services, and RxJS.',
    'Strong understanding of Angular concepts such as components, modules, routing, lazy loading, reactive forms, directives, pipes, dependency injection, and state management.',
    'Experience in improving application performance through code optimization, lazy loading, efficient change detection, and responsive UI development.',
    'Worked on debugging, troubleshooting, and resolving issues across frontend, backend, and database layers.',
    'Hands-on experience with Git, GitHub, and GitLab for version control and collaborative development.',
    'Experience using Postman for API development, testing, and validation.',
    'Recognized for delivering enterprise and government digital transformation projects with clean, reusable, and maintainable code following industry best practices.'
  ];

  skills: SkillGroup[] = [
    {
      title: 'Frontend',
      items: ['Angular (v10-v20)', 'TypeScript', 'RxJS', 'Signals', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'PrimeNG']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'REST API']
    },
    {
      title: 'Database & Cloud',
      items: ['MongoDB', 'Query Optimization']
    },
    {
      title: 'Security & Tools',
      items: ['JWT', 'OAuth', 'MSAL', 'Git', 'Postman', 'PowerShell', 'Swagger']
    }
  ];

  achievements = [
    'Delivered multiple enterprise applications with improved user experience and faster business processing.',
    'Received appreciation certificates from clients and project stakeholders.'
  ];

  education: Education[] = [
    { degree: 'M.Sc Computer Science', university: 'Satavahana University' },
    { degree: 'B.Sc Computer Science', university: 'Satavahana University' }
  ];

  languages: Language[] = [
    { name: 'Telugu', level: 'Native Speaker' },
    { name: 'English', level: 'Professional' },
    { name: 'Hindi', level: 'Professional' }
  ];

  hobbies = ['Net Browsing', 'Cooking', 'Playing Games'];

  projects: Project[] = [
    {
      title: 'Digital Healthcare Services',
      subtitle: 'ABDM integrated healthcare platform',
      image: 'assets/abha1.png',
      status: 'Current',
      description: 'Developed a healthcare portal for ABHA, HFR, HPR, and EMR OP/IP modules. The application supports patient registration, digital health profile management, healthcare professional and facility records, outpatient visits, inpatient admission, clinical records, prescriptions, and discharge summary workflows.',
      tech: ['Angular', 'TypeScript', 'JavaScript', 'REST API', 'Node.js', 'MongoDB']
    },
    {
      title: 'Workflow Approval System',
      subtitle: 'ABDM approval',
      image: 'assets/Suv_Technosoft.png',
      status: 'Completed',
      description: 'Received the official Integration Completion Certificate from the National Health Authority (NHA) for successfully implementing the Ayushman Bharat Digital Mission (ABDM) M1, M2 & M3 milestones while contributing to enterprise healthcare solutions.',
      tech: ['Angular', 'TypeScript', 'JavaScript', 'REST API', 'Node.js', 'MongoDB']
    }
  ];

  experiences: Experience[] = [
    {
      role: 'MEAN Stack Developer',
      company: 'Suvarna Technosoft Pvt Ltd.',
      client: 'ABDM Digital Healthcare Services Portal',
      period: 'May 2025 - Present'
    },
    {
      role: 'Angular Developer',
      company: 'Suvarna Technosoft Pvt Ltd.',
      client: 'ABDM Digital Healthcare Services Portal',
      period: 'May 2023 - Present'
    }
  ];

  currentYear = new Date().getFullYear();

  @ViewChildren('revealEl') revealElements!: QueryList<ElementRef<HTMLElement>>;
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    this.revealElements.forEach((el) => this.observer?.observe(el.nativeElement));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleNav(): void {
    this.navOpen = !this.navOpen;
  }

  closeNav(): void {
    this.navOpen = false;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const doc = document.documentElement;
    const scrollTop = window.scrollY;
    const height = doc.scrollHeight - doc.clientHeight;
    this.scrollProgress = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0;
    this.showBackToTop = scrollTop > 480;

    let current = this.navLinks[0].id;
    for (const link of this.navLinks) {
      const section = document.getElementById(link.id);
      if (section && section.getBoundingClientRect().top <= 140) {
        current = link.id;
      }
    }
    this.activeSection = current;
  }
}
