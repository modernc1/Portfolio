import { Injectable, signal } from '@angular/core';
import { Project } from '../../components/project-details/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = signal<Project[]>([
    {
      id: 9,
      title: 'Luxe Perfume — High-End E-commerce Template',
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
      category: 'Mobile Applications'
    },
    {
      id: 2,
      title: 'Timetables Pro Mobile Application',
      imageUrl: 'assets/img/timetables-pro/main.png',
      gallery: [
        'assets/img/timetables-pro/main.png',
        'assets/img/timetables-pro/generated-image-78f2d2f6-cc72-4516-9ce0-c7112f086fdb.png',
        'assets/img/timetables-pro/generated-image-de266818-d893-4075-9f63-b552ce7aa1ad.png',
      ],
      technologies: ['Flutter', 'Firebase messaging', 'Cross-Platform', 'State Management', 'Mobile UX'],
      category: 'Mobile Applications'
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
      category: 'Web Applications'
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
      category: 'Web Applications'
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
      category: 'Web Applications'
    },
    {
      id: 7,
      title: 'Car Rental Landing Page',
      imageUrl: 'assets/img/cars/Car_site_main_img.jpeg',
      gallery: [
        'assets/img/cars/Car_site_main_img.jpeg'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Animation', 'High Performance'],
      category: 'Web Applications'
    }
  ])

  constructor() { }
}
