import { Injectable, signal } from '@angular/core';
import { Project } from '../../components/project-details/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = signal<Project[]>([
    {
      id: 8,
      title: 'ResumeAI Builder & Analyzer',
      imageUrl: 'assets/img/resume-ai/1.png',
      gallery: [
        'assets/img/resume-ai/1.png',
        'assets/img/resume-ai/2.png',
        'assets/img/resume-ai/3.png',
        'assets/img/resume-ai/4.png',
        'assets/img/resume-ai/5.png',
      ],
      technologies: ['Flutter', 'AI Integration', 'File Processing', 'PDF Generation', 'Modern UI'],
      category: 'Mobile Applications',
      marketingTagline: 'AI-Powered Precision for Career Success',
      description: `
<strong>Resume AI Builder: CV Maker</strong> is an AI-powered resume refactoring and PDF generation app. It helps users analyze, build, update, and optimize their resumes using AI, with ATS-optimized templates and instant PDF export.<br><br>
<strong>Core Features:</strong><ul>
<li><strong>AI Resume Analysis:</strong> Upload a resume (PDF) and receive a refactored resume with actionable suggestions & explanation for improvement.</li>
<li><strong>Smart Resume Builder:</strong> Section-by-section editor for personal info, work experience, education, skills, projects, and more.</li>
<li><strong>Completely Reordered Resume sections & subsections:</strong> Reorder main sections like projects, education, skills and sub-sections like re-ordering projects.</li>
<li><strong>ATS-Optimized Templates:</strong> 15+ professional templates designed to pass Applicant Tracking Systems.</li>
<li><strong>AI Career Chatbot:</strong> Chat with AI for personalized career advice, bullet point brainstorming, and resume writing help.</li>
<li><strong>Multi-language Support:</strong> Generate resumes in English, German, French, and more.</li>
<li><strong>Instant PDF Export:</strong> Download a print-ready, professional PDF instantly.</li>
<li><strong>Credit & Subscription Model:</strong> Hybrid monetization—users can buy credits or get unlimited access.</li>
</ul>
<strong>Target Audience:</strong> Job seekers, professionals, students, and global users needing resumes in multiple languages and formats.<br><br>
<strong>Unique Selling Points:</strong> AI-driven actionable feedback, ATS compatibility, integrated AI chat, fast and intuitive experience.<br><br>
<strong>Monetization:</strong> In-app purchases for credits, subscription for unlimited access (ResumeAI Pro).<br><br>
<strong>Links:</strong><br>
<a href="https://apps.apple.com/eg/app/resume-ai-builder-cv-maker/id6758414884" target="_blank">App Store</a> | <a href="https://play.google.com/store/apps/details?id=com.resumeaianalyzer.app" target="_blank">Google Play</a><br>
Contact: <a href="mailto:resumeaibsupport@gmail.com">resumeaibsupport@gmail.com</a> | <a href="https://www.facebook.com/profile.php?id=61568004440867" target="_blank">Facebook</a>
`,
      liveUrl: 'https://apps.apple.com/eg/app/resume-ai-builder-cv-maker/id6758414884',
    },
    {
      id: 2,
      title: 'TimetablesPro Teacher App',
      imageUrl: 'assets/img/timetables-pro/main.png',
      gallery: [
        'assets/img/timetables-pro/main.png',
        'assets/img/timetables-pro/generated-image-78f2d2f6-cc72-4516-9ce0-c7112f086fdb.png',
        'assets/img/timetables-pro/generated-image-de266818-d893-4075-9f63-b552ce7aa1ad.png',
      ],
      technologies: ['Flutter', 'Firebase messaging', 'Cross-Platform', 'State Management', 'Mobile UX'],
      category: 'Mobile Applications',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.timetablespro.teacher_app',
      marketingTagline: 'Master Your Schedule with Professional Precision',
      description: `
<strong>TimetablesPro Teacher App</strong> is a Flutter application designed for teachers whose schools are subscribed to <a href="https://timetablespro.net" target="_blank">TimetablesPro.net</a>, a SaaS platform for automated school timetable generation and teacher management.<br><br>
<strong>Overview:</strong> The app allows teachers to securely log in and access their personalized schedules, notifications, and daily tasks. It connects directly to the TimetablesPro SaaS backend, providing real-time updates and management features for teachers.<br><br>
<strong>Key Features:</strong><ul>
  <li><strong>Secure Login:</strong> Teachers authenticate using credentials provided by their school.</li>
  <li><strong>Personalized Timetable:</strong> View daily and weekly schedules, including classes, periods, and coverage assignments.</li>
  <li><strong>Notifications:</strong> Receive important announcements and push notifications from the school administration.</li>
  <li><strong>Daily Tasks:</strong> Access and manage daily teaching tasks and responsibilities.</li>
  <li><strong>Multi-language Support:</strong> The app supports multiple languages for a localized experience.</li>
  <li><strong>Offline Handling:</strong> Graceful handling of network connectivity issues, with caching for critical data.</li>
  <li><strong>Device Registration:</strong> Secure device registration for push notifications and enhanced security.</li>
</ul>
<strong>Intended Users:</strong> Teachers in schools that are subscribed to TimetablesPro.net, and school administrators managing teacher schedules and communications.<br><br>
<strong>Links:</strong> <a href="https://play.google.com/store/apps/details?id=com.timetablespro.teacher_app" target="_blank">TimetablesPro.net</a><br>
Contact: <a href="mailto:support@timetablespro.net">support@timetablespro.net</a>
`,
    },
    {
      id: 9,
      title: 'Luxe Perfume High-End E-commerce Template',
      imageUrl: 'assets/img/luxe-perfume/main.jpeg',
      gallery: [
        'assets/img/luxe-perfume/main.jpeg',
        'assets/img/luxe-perfume/collection.jpeg',
        'assets/img/luxe-perfume/boutiques.jpeg',
        'assets/img/luxe-perfume/checkout.jpeg',
        'assets/img/luxe-perfume/cart.png',
      ],
      liveUrl: 'https://luxeperfumer.netlify.app/',
      technologies: ['Angular 20', 'Signals', 'CSS Variables', 'Responsive Design'],
      challenge: 'Creating a high-performance e-commerce experience with smooth transitions and real-time state management using Signals.',
      solution: 'Leveraged Angular Signals for reactivity and CSS Variables for a dynamic, high-end theme setup.',
      role: 'Full Stack Lead',
      duration: '2 Weeks',
      category: 'Web Applications',
      marketingTagline: 'Defining the Future of High-End E-Commerce'
    },
    {
      id: 7,
      title: 'HealthCare Clinic – High-Conversion Medical Landing Page',
      imageUrl: 'assets/img/healthcare-clinic/main.jpeg',
      gallery: [
        'assets/img/healthcare-clinic/main.jpeg',
        'assets/img/healthcare-clinic/hero.png',
        'assets/img/healthcare-clinic/about.png',
        'assets/img/healthcare-clinic/review.png',
        'assets/img/healthcare-clinic/contact.png',
      ],
      liveUrl: 'https://heartfelt-muffin-1ad8e9.netlify.app/',
      technologies: ['Angular 20', 'Signals', 'JavaScript', 'Responsive Design', 'Landing Page Optimization'],
      category: 'Web Applications',
      marketingTagline: 'Precision Medical Solutions with High-Conversion Flow'
    },
    {
      id: 4,
      title: 'Responsive Shoes E-Commerce Web-Application',
      imageUrl: 'assets/img/shoes-store/main.jpeg',
      gallery: [
        'assets/img/shoes-store/main.jpeg',
        'assets/img/shoes-store/dashboard.jpeg',
        'assets/img/shoes-store/whishlist.jpeg',
        'assets/img/shoes-store/shoe-details.jpeg',
      ],
      technologies: ['Angular', 'ASP .NET Core', 'SCSS', 'Cart Logic', 'Dashboard UI'],
      category: 'Web Applications',
      marketingTagline: 'Responsive E-Commerce Architecture Redigitized'
    },
    
    {
      id: 3,
      title: 'Responsive Real Estate Web Application',
      imageUrl: 'assets/img/real-estate/real-estate-main-img.jpeg',
      gallery: [
        'assets/img/real-estate/real-estate-main-img.jpeg',
        'assets/img/real-estate/auth.jpeg',
        'assets/img/real-estate/admin-employee-management.jpeg',
        'assets/img/real-estate/clients-request.jpeg',
        'assets/img/real-estate/admin-listing.jpeg',
        'assets/img/real-estate/admin-add-property.jpeg',
        'assets/img/real-estate/properties_listing.jpeg',
        'assets/img/real-estate/admin-previousWork.jpeg'
      ],
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Auth Systems', 'Admin Dashboard'],
      category: 'Web Applications',
      marketingTagline: 'Modern Real Estate Management Simplified'
    },

    {
      id: 5,
      title: 'Responsive Electronics E-Commerce Web-Application',
      imageUrl: 'assets/img/e-store/e-storemain-image.png',
      gallery: [
        'assets/img/e-store/e-storemain-image.png',
        'assets/img/e-store/order-details.png',
        'assets/img/e-store/product-details.png',
        'assets/img/e-store/features.png',
        'assets/img/e-store/cart.png',
        'assets/img/e-store/payment.png'
      ],
      technologies: ['ASP .NET MVC', '', 'Node.js/ASP.NET', 'Payment Integration'],
      category: 'Web Applications',
      marketingTagline: 'The Ultimate High-Tech Shopping Experience'
    },
    {
      id: 6,
      title: 'Responsive Medical Blog Web-Application',
      imageUrl: 'assets/img/medical-blog/medical-blog-main-img.png',
      gallery: [
        'assets/img/medical-blog/medical-blog-main-img.png',
        'assets/img/medical-blog/admin.png',
        'assets/img/medical-blog/details.png',
        'assets/img/medical-blog/content-management.png',
        'assets/img/medical-blog/responsive-phone.png'
      ],
      technologies: ['Angular', 'TypeScript', 'Content Management', 'Responsive Design'],
      category: 'Web Applications',
      marketingTagline: 'Empowering Health through Digital Knowledge'
    },
    {
      id: 7,
      title: 'Car Rental Landing Page',
      imageUrl: 'assets/img/cars/Car_site_main_img.jpeg',
      gallery: [
        'assets/img/cars/Car_site_main_img.jpeg'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Animation', 'High Performance'],
      category: 'Web Applications',
      marketingTagline: 'Seamless Mobility at Your Fingertips'
    }
  ])

  constructor() { }
}
