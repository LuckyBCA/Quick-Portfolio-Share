// Portfolio Data Configuration
// This file contains all the dynamic content for easy management

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Lucky Singh Yaduvanshi",
        title: "Web Developer | WordPress | Digital Marketing | SEO",
        email: "luckyaduvanshi5@gmail.com",
        phone: "+91-9667907515",
        location: "Jaipur, India",
        whatsapp: "919667907515",
        resume: "https://lucky.uorstudent.me/resume.pdf",
        profileImage: "https://lucky.uorstudent.me/assets/img/profile.png",
        description: "Results-driven professional with hands-on experience in WordPress and Shopify. Proficient in on-page and off-page SEO techniques. Successfully built and launched over 20 live websites, optimized for high-traffic keywords using Google Search Console (GSC) and Ahrefs. Improved website performance by 40%. Seeking a full-time role in SEO or Content Marketing to drive measurable growth.",
        linkedin: "https://www.linkedin.com/in/lucky-yaduvanshi/",
        github: "https://github.com/LuckyYaduvanshi5",
        youtube: "https://youtube.com/@Lucky_Yaduvanshi_Official",
        portfolio: "http://lucky.uorstudent.me/"
    },

    // Social Media Links
    social: {
        linkedin: "https://www.linkedin.com/in/lucky-yaduvanshi/",
        github: "https://github.com/LuckyYaduvanshi5",
        twitter: "#",
        instagram: "#",
        youtube: "https://youtube.com/@Lucky_Yaduvanshi_Official"
    },

    // Statistics
    stats: {
        experience: "2+",
        projects: "28+",
        clients: "20+",
        websites: "20+"
    },

    // Tools and Technologies with Proficiency Levels
    tools: [
        { name: 'VS Code', logo: 'vscode.png', proficiency: 95, category: 'Development' },
        { name: 'GitHub', logo: 'github.png', proficiency: 98, category: 'Version Control' },
        { name: 'Cursor', logo: 'cursor.png', proficiency: 90, category: 'Development' },
        { name: 'PowerBI', logo: 'powerbi.png', proficiency: 85, category: 'Analytics' },
        { name: 'ChatGPT', logo: 'chatgpt.png', proficiency: 90, category: 'AI Tools' },
        { name: 'GitHub Copilot', logo: 'github-copilot.png', proficiency: 95, category: 'AI Tools' },
        { name: 'Azure', logo: 'azure.png', proficiency: 85, category: 'Cloud' },
        { name: 'Google Cloud', logo: 'google.png', proficiency: 95, category: 'Cloud' },
        { name: 'Docker', logo: 'docker.png', proficiency: 80, category: 'DevOps' },
        { name: 'WordPress', logo: 'wordpress.png', proficiency: 92, category: 'CMS' }
    ],

    // Certifications and Achievements
    certifications: [
        { 
            title: 'Microsoft Azure AI Engineer Associate (AI-102)', 
            issuer: 'Microsoft', 
            logo: 'microsoft.png', 
            date: '2024',
            description: 'Microsoft Certified Azure AI Engineer Association AI-102 & AI-900 Paid. Offline Batch Paid at Rajasthan Centre of Advanced Technology (R-CAT), Jaipur',
            credentialId: 'AI-102-2024',
            verificationUrl: '#'
        },
        { 
            title: 'Microsoft Azure AI Fundamentals (AI-900)', 
            issuer: 'Microsoft', 
            logo: 'microsoft.png', 
            date: '2024',
            description: 'Microsoft Certification in AI and ML. Foundational knowledge of machine learning and AI concepts on Azure',
            credentialId: 'AI-900-2024',
            verificationUrl: '#'
        },
        { 
            title: 'Digital Marketing Certification', 
            issuer: 'Google Digital Garage', 
            logo: 'google.png', 
            date: '2023',
            description: 'Digital Marketing | Google Digital Garage | 2023. Digital Marketing Certification By Google Completed 45 Hours Course',
            credentialId: 'GOOGLE-DM-2023',
            verificationUrl: '#'
        },
        { 
            title: 'Deloitte Data Analytics Simulation', 
            issuer: 'Deloitte', 
            logo: 'deloitte.png', 
            date: '2025',
            description: 'Completed Deloitte Data Analytics Simulation with tasks in Forge data analysis and Dashboard Creation',
            credentialId: 'DELOITTE-2025',
            verificationUrl: '#'
        },
        { 
            title: 'SEO Fundamentals', 
            issuer: 'Coursera', 
            logo: 'coursera.png', 
            date: '2023',
            description: 'SEO Fundamentals | Coursera | 2023. Fundamentals of SEO comprehensive course',
            credentialId: 'COURSERA-SEO-2023',
            verificationUrl: '#'
        },
        { 
            title: 'R-CAT Quizathon Winner', 
            issuer: 'Rajasthan Center of Advanced Technology', 
            logo: 'rcat.png', 
            date: '2024',
            description: 'Crack Quizathon in RCAT and Complete Course at 70% discount. Microsoft Certified Azure AI Engineer Bootcamp (AI-102) at RCAT, Jaipur',
            credentialId: 'RCAT-QUIZ-2024',
            verificationUrl: '#'
        }
    ],

    // Skills organized by categories
    skills: {
        programming: [
            'Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'PHP', 'React.js', 'Node.js'
        ],
        web: [
            'WordPress', 'Shopify', 'Bootstrap', 'WooCommerce', 'Elementor', 'Responsive Design'
        ],
        ai: [
            'Azure AI', 'Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'PowerBI', 'Tableau', 'Excel'
        ],
        marketing: [
            'SEO', 'Google Search Console', 'Ahrefs', 'SEMRush', 'Meta Ads', 'Content Writing', 'Blogging', 'On-page/Off-page SEO', 'MS Office'
        ]
    },

    // Services offered
    services: [
        {
            icon: 'fas fa-palette',
            title: 'UI/UX Design',
            description: 'Creating intuitive, engaging, and accessible user interfaces that enhance user experience across platforms.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing']
        },
        {
            icon: 'fas fa-mobile-alt',
            title: 'Application Design',
            description: 'Developing responsive mobile and web applications with modern technologies and intuitive interfaces.',
            features: ['Mobile Apps', 'Web Apps', 'Cross-platform', 'Progressive Web Apps', 'API Integration']
        },
        {
            icon: 'fas fa-laptop-code',
            title: 'Website Design',
            description: 'Building beautiful, responsive, and high-performance websites that deliver exceptional user experiences.',
            features: ['Custom Design', 'Responsive Layout', 'Performance Optimization', 'SEO Ready', 'CMS Integration']
        }
    ],

    // Pricing packages
    packages: [
        {
            name: 'Basic Website',
            price: '₹5,000',
            features: [
                'Up to 5 Pages',
                'Responsive Design',
                'Contact Form',
                'Basic SEO Setup',
                'Domain & Hosting (1 year)*'
            ],
            popular: false
        },
        {
            name: 'Standard Website',
            price: '₹15,000',
            features: [
                'Up to 10 Pages',
                'Advanced Design',
                'Content Management System',
                'Social Media Integration',
                'Analytics Setup',
                'SSL Certificate',
                '3 Months Support'
            ],
            popular: true
        },
        {
            name: 'Premium Website',
            price: '₹30,000',
            features: [
                'Unlimited Pages',
                'Custom Design',
                'E-commerce Integration',
                'Advanced SEO',
                'Performance Optimization',
                'Maintenance (6 months)',
                'Priority Support'
            ],
            popular: false
        }
    ],

    // Timeline data for journey section
    timeline: [
        {
            year: '2025 - Present',
            title: 'MCA (Pursuing)',
            institution: 'University of Rajasthan, Jaipur',
            description: 'Master of Computer Applications - Currently pursuing advanced studies in computer science and applications',
            type: 'education'
        },
        {
            year: '2025 - Present',
            title: 'SEO Executive',
            institution: 'Brainosys, Jaipur',
            description: 'Created 30+ AI-powered blog articles with keyword targeting. Built 100+ backlinks & published content across 5+ platforms. Improved web content structure & CTR through on-page tweaks.',
            type: 'work'
        },
        {
            year: '2022 - 2025',
            title: 'BCA (Completed)',
            institution: 'University of Rajasthan, Jaipur',
            description: '76.2% - Bachelor of Computer Applications. Completed comprehensive study in programming, web development, and computer applications.',
            type: 'education'
        },
        {
            year: 'June 2024 - July 2024',
            title: 'Web Development Intern',
            institution: 'Appco Software Pvt. Ltd, Jaipur',
            description: 'A software development company specializing in web applications. Optimized Shopify site: mobile usability up 25%. Managed SEO-friendly product uploads & schema markup.',
            type: 'work'
        },
        {
            year: '2021 - 2022',
            title: 'Class XII',
            institution: 'Govt. School, Raja Park, Jaipur',
            description: '83.8% - Rajasthan Board. Strong foundation in science and mathematics.',
            type: 'education'
        }
    ],

    // Projects Portfolio
    projects: [
        {
            id: 1,
            title: 'E-commerce Website For Client (Freelance)',
            category: 'E-commerce',
            technologies: ['WordPress', 'WooCommerce', 'Elementor', 'PHP'],
            description: 'E-commerce website created for MadebyCraft.in.net. Developed a mobile-responsive WordPress e-commerce store using WooCommerce, Elementor, and custom PHP scripts. Integrated SEO best practices and improved site performance by 40%.',
            image: 'madebycraft.in.net.png',
            liveUrl: 'https://madebycraft.in.net/',
            githubUrl: '#',
            date: 'June 2024',
            featured: true,
            status: 'completed'
        },
        {
            id: 2,
            title: 'Prowriter AI Article Writer for Blog (SAAS)',
            category: 'AI/SAAS',
            technologies: ['AI APIs', 'Multiple AI Engines', 'JavaScript', 'HTML', 'CSS'],
            description: 'Write Articles and Blogs Using AI with Multiple AI Engines. Write Multiple Type of Articles Like News, Comparison, How-To, Documentation etc. Currently In Development but beta Version Launch For testing. Original Product Built by Me using AI.',
            image: 'blogpromptGenrator.png',
            liveUrl: 'https://prowriter.miniai.online/',
            githubUrl: '#',
            date: '2025 - Present',
            featured: true,
            status: 'in-development'
        },
        {
            id: 3,
            title: 'Codai A Offline Code Writer (SAAS)',
            category: 'Development Tools',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Supabase', 'Llama CPP', 'Tiny Llama gguf 4v', 'Portable Python'],
            description: 'Codai is a Offline Coding Assistant For College LAB Exam run Without Internet. 100% Work Offline in Colleges Low End PC with 4GB Ram. Tech Stack includes Tiny Llama gguf 4v Version by Hugging Face with Portable Python.',
            image: 'codai-pro.png',
            liveUrl: 'https://codai.miniai.online/',
            githubUrl: '#',
            date: 'February 2025 - March 2025',
            featured: true,
            status: 'completed'
        },
        {
            id: 4,
            title: 'CSV to MYSQL (Tools)',
            category: 'Utility Tools',
            technologies: ['Python', 'Flask', 'MySQL'],
            description: 'A tool that uses python for Converting CSV file into SQL. I faced problem in importing data from CSV to my localhost SQL workbench so I made a Python Script for that and made a GUI Interface using Flask and deployed on Render.com free tier.',
            image: 'csvtosql.png',
            liveUrl: 'https://csv2sql-wkhi.onrender.com/',
            githubUrl: '#',
            date: 'March 2025',
            featured: false,
            status: 'completed'
        },
        {
            id: 5,
            title: 'WhatsApp-clone Invite Only Chat (SAAS)',
            category: 'Social/Communication',
            technologies: ['Full Stack', 'React', 'Node.js', 'MongoDB'],
            description: 'A Full Stack Whatsapp Clone that I made because many girls chat on WhatsApp and their parents see this by mistake. Features: 60s Auto Hide Chat, Screenshot Not Allowed, Invite Only Chat, and doesn\'t save any data of user.',
            image: 'whatsapp-clone.png',
            liveUrl: 'https://whatsapp.miniai.online/',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/WhatsApp-clone',
            date: '2025 - Present',
            featured: true,
            status: 'in-development'
        },
        {
            id: 6,
            title: 'YouTube Script Writer (Tools)',
            category: 'AI Tools',
            technologies: ['OpenAI GPT4.1', 'GitHub Personal Access Token', 'JavaScript'],
            description: 'I built a tool for writing scripts using Open AI latest Model GPT4.1 using Github Personal Access Token. We can use GPT4.1 free using this. Go to my Github and see readme file and follow steps to get your PAT and start writing professional Youtube Videos Script.',
            image: 'youtube-script.png',
            liveUrl: 'https://script-writer.miniai.online/',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/',
            date: 'April 2025',
            featured: false,
            status: 'completed'
        },
        {
            id: 7,
            title: 'Pomodoro React Landing Page (Tools)',
            category: 'Productivity',
            technologies: ['React', 'Vercel AI V0'],
            description: 'Pomodoro Timer for managing time to study and enhance productivity. Built using Vercel AI V0. Must visit one time.',
            image: 'pomodoro.png',
            liveUrl: 'https://pomodoro.miniai.online/',
            githubUrl: '#',
            date: '2025',
            featured: false,
            status: 'completed'
        },
        {
            id: 8,
            title: 'MINIAI.Online (Personal)',
            category: 'Portfolio',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: 'Here I add my all projects for subdomain purposes. That is the root domain of my all projects built using HTML, CSS, JS. See more projects by visiting my portfolio.',
            image: 'miniai.png',
            liveUrl: 'https://miniai.online/',
            githubUrl: '#',
            date: '2024',
            featured: false,
            status: 'completed'
        },
        {
            id: 9,
            title: 'Portfolio Website',
            category: 'Portfolio',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            description: 'Personal portfolio website showcasing my projects, skills, and experience. Built with modern design principles and responsive layout.',
            image: 'portfolio.jpg',
            liveUrl: 'http://lucky.uorstudent.me/',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/',
            date: '2024 - 2025',
            featured: true,
            status: 'completed'
        },
        {
            id: 10,
            title: 'Kartzon E-commerce Platform',
            category: 'E-commerce',
            technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
            description: 'Multi-vendor e-commerce platform with advanced features for product management, payment integration, and user management.',
            image: 'kartzon.png',
            liveUrl: '#',
            githubUrl: '#',
            date: '2024',
            featured: false,
            status: 'completed'
        },
        {
            id: 11,
            title: 'Blog Prompt Generator',
            category: 'AI Tools',
            technologies: ['AI APIs', 'JavaScript', 'HTML', 'CSS'],
            description: 'AI-powered tool for generating creative blog prompts and content ideas for content creators and writers.',
            image: 'blogpromptGenrator.png',
            liveUrl: '#',
            githubUrl: '#',
            date: '2024',
            featured: false,
            status: 'completed'
        },
        {
            id: 12,
            title: 'Daily Notes App',
            category: 'Productivity',
            technologies: ['React', 'Local Storage', 'CSS3'],
            description: 'Simple and elegant daily notes application for organizing thoughts and tasks with local storage support.',
            image: 'dailynotes.png',
            liveUrl: '#',
            githubUrl: '#',
            date: '2024',
            featured: false,
            status: 'completed'
        },
        {
            id: 13,
            title: 'Digistore Platform',
            category: 'E-commerce',
            technologies: ['WordPress', 'Digital Downloads', 'Payment Gateway'],
            description: 'Digital store platform for selling digital products, courses, and downloadable content with secure payment processing.',
            image: 'Digistore.png',
            liveUrl: '#',
            githubUrl: '#',
            date: '2024',
            featured: false,
            status: 'completed'
        },
        {
            id: 14,
            title: 'Reels Counter Tool',
            category: 'Utility Tools',
            technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
            description: 'Tool for tracking and counting Instagram reels engagement and analytics for social media managers.',
            image: 'reelscounter.png',
            liveUrl: '#',
            githubUrl: '#',
            date: '2024',
            featured: false,
            status: 'completed'
        },
        {
            id: 15,
            title: 'Taska Project Management',
            category: 'Productivity',
            technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
            description: 'Project management and task tracking application with real-time collaboration features for teams.',
            image: 'Taska.png',
            liveUrl: '#',
            githubUrl: '#',
            date: '2024',
            featured: false,
            status: 'completed'
        },
        {
            id: 16,
            title: 'MultiCalc - Multiple Calculators Hub',
            category: 'Utility Tools',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            description: 'Multiple Calculators in One application. A comprehensive calculator hub featuring various types of calculators including scientific, basic, percentage, and specialized calculators for different use cases.',
            image: 'multicalc.png',
            liveUrl: '#',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/MultiCalc',
            date: '2025',
            featured: false,
            status: 'completed'
        },
        {
            id: 17,
            title: 'ToolsHub - Development Tools Collection',
            category: 'Development Tools',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Web APIs'],
            description: 'A comprehensive collection of web development tools and utilities. Features various tools for developers including code formatters, converters, generators, and productivity utilities.',
            image: 'toolsHub.png',
            liveUrl: '#',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/',
            date: '2025',
            featured: false,
            status: 'completed'
        },
        {
            id: 18,
            title: 'MiniAI Landing Page',
            category: 'Portfolio',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
            description: 'MiniAI-Landing Page - A modern and responsive landing page design showcasing AI services and tools. Clean design with smooth animations and modern UI elements.',
            image: 'miniai.png',
            liveUrl: 'https://miniai.online/',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/MiniAi',
            date: '2024',
            featured: false,
            status: 'completed'
        },
        {
            id: 19,
            title: 'Projector on Rent - Rental Service',
            category: 'E-commerce',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            description: 'Projector rental service website with booking system. Features include projector catalog, rental booking, pricing calculator, and customer management system.',
            image: 'projectoronrent.png',
            liveUrl: '#',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/projectoronrent',
            date: '2025',
            featured: false,
            status: 'completed'
        },
        {
            id: 20,
            title: 'Screen Recorder Tool',
            category: 'Utility Tools',
            technologies: ['JavaScript', 'WebRTC', 'HTML5', 'CSS3'],
            description: 'Web-based screen recording tool using WebRTC technology. Allows users to record their screen, capture audio, and download recordings directly from the browser.',
            image: 'ScreenRecorder.jpg',
            liveUrl: '#',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/',
            date: '2025',
            featured: false,
            status: 'completed'
        },
        {
            id: 21,
            title: 'YouTube Script Writer AI',
            category: 'AI Tools',
            technologies: ['OpenAI API', 'JavaScript', 'HTML', 'CSS'],
            description: 'Advanced YouTube script writer using OpenAI GPT models. Generates professional scripts for YouTube videos with customizable templates and AI-powered content creation.',
            image: 'YoutubeScriptWriter.png',
            liveUrl: 'https://script-writer.miniai.online/',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/',
            date: 'April 2025',
            featured: true,
            status: 'completed'
        },
        {
            id: 22,
            title: 'Prompt Writer Pro',
            category: 'AI Tools',
            technologies: ['AI APIs', 'JavaScript', 'HTML', 'CSS'],
            description: 'Professional prompt generation tool for AI models. Helps users create effective prompts for various AI applications including ChatGPT, Claude, and other language models.',
            image: 'prompt-writer.png',
            liveUrl: '#',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/',
            date: '2025',
            featured: false,
            status: 'completed'
        },
        {
            id: 23,
            title: 'ProWriter AI Enhanced',
            category: 'AI/SAAS',
            technologies: ['Multiple AI Engines', 'JavaScript', 'API Integration'],
            description: 'Enhanced version of ProWriter AI with advanced features. Supports multiple AI engines for content generation, article writing, and blog post creation with improved user interface.',
            image: 'prowriter.png',
            liveUrl: 'https://prowriter.miniai.online/',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/',
            date: '2025',
            featured: true,
            status: 'in-development'
        },
        {
            id: 24,
            title: 'Luna - Personal Assistant',
            category: 'AI Tools',
            technologies: ['AI/ML', 'Python', 'JavaScript', 'Voice Recognition'],
            description: 'AI-powered personal assistant with voice recognition and natural language processing. Features include task management, reminders, and intelligent conversation capabilities.',
            image: 'luna.png',
            liveUrl: '#',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/',
            date: '2025',
            featured: false,
            status: 'in-development'
        },
        {
            id: 25,
            title: 'VBPS - Virtual Business Process System',
            category: 'Business Tools',
            technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            description: 'Virtual Business Process System for managing business workflows, processes, and automation. Includes features for process mapping, task automation, and business analytics.',
            image: 'vbps.png',
            liveUrl: '#',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/',
            date: '2025',
            featured: false,
            status: 'completed'
        },
        {
            id: 26,
            title: 'Microsoft Azure AI-102 Lab Projects',
            category: 'AI/ML',
            technologies: ['Python', 'Azure AI', 'Machine Learning', 'Cognitive Services'],
            description: 'Collection of Microsoft Azure AI-102 certification lab projects. Includes implementations of various Azure AI services like Computer Vision, Language Understanding, and Bot Framework.',
            image: 'azure.png',
            liveUrl: '#',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/AI-102',
            date: '2024',
            featured: true,
            status: 'completed'
        },
        {
            id: 27,
            title: 'Enhanced Pomodoro Timer',
            category: 'Productivity',
            technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
            description: 'Advanced Pomodoro timer with enhanced features including task tracking, statistics, custom intervals, and productivity analytics. Built with modern React and responsive design.',
            image: 'Pomodoro.png',
            liveUrl: 'https://pomodoro.miniai.online/',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/',
            date: '2025',
            featured: false,
            status: 'completed'
        },
        {
            id: 28,
            title: 'CSV to SQL Converter Tool',
            category: 'Utility Tools',
            technologies: ['Python', 'Flask', 'Pandas', 'SQL'],
            description: 'Enhanced CSV to SQL converter with advanced features. Supports multiple database formats, data validation, and batch processing for large datasets.',
            image: 'csv2sql.png',
            liveUrl: 'https://csv2sql-wkhi.onrender.com/',
            githubUrl: 'https://github.com/LuckyYaduvanshi5/',
            date: '2025',
            featured: false,
            status: 'completed'
        }
    ]
};

// Functions to manage data
class PortfolioManager {
    constructor() {
        this.data = portfolioConfig;
    }

    // Add new certification
    addCertification(certification) {
        const newCert = {
            id: Date.now(),
            ...certification,
            dateAdded: new Date().toISOString()
        };
        this.data.certifications.push(newCert);
        this.saveToLocalStorage();
        return newCert;
    }

    // Add new tool
    addTool(tool) {
        const newTool = {
            id: Date.now(),
            ...tool,
            dateAdded: new Date().toISOString()
        };
        this.data.tools.push(newTool);
        this.saveToLocalStorage();
        return newTool;
    }

    // Remove certification
    removeCertification(index) {
        if (index >= 0 && index < this.data.certifications.length) {
            const removed = this.data.certifications.splice(index, 1);
            this.saveToLocalStorage();
            return removed[0];
        }
        return null;
    }

    // Remove tool
    removeTool(index) {
        if (index >= 0 && index < this.data.tools.length) {
            const removed = this.data.tools.splice(index, 1);
            this.saveToLocalStorage();
            return removed[0];
        }
        return null;
    }

    // Update certification
    updateCertification(index, updates) {
        if (index >= 0 && index < this.data.certifications.length) {
            this.data.certifications[index] = { ...this.data.certifications[index], ...updates };
            this.saveToLocalStorage();
            return this.data.certifications[index];
        }
        return null;
    }

    // Update tool
    updateTool(index, updates) {
        if (index >= 0 && index < this.data.tools.length) {
            this.data.tools[index] = { ...this.data.tools[index], ...updates };
            this.saveToLocalStorage();
            return this.data.tools[index];
        }
        return null;
    }

    // Get all certifications
    getCertifications() {
        return this.data.certifications;
    }

    // Get all tools
    getTools() {
        return this.data.tools;
    }

    // Get tools by category
    getToolsByCategory(category) {
        return this.data.tools.filter(tool => tool.category === category);
    }

    // Save to localStorage for persistence
    saveToLocalStorage() {
        try {
            localStorage.setItem('portfolioData', JSON.stringify(this.data));
        } catch (error) {
            console.warn('Could not save to localStorage:', error);
        }
    }

    // Load from localStorage
    loadFromLocalStorage() {
        try {
            const saved = localStorage.getItem('portfolioData');
            if (saved) {
                this.data = { ...portfolioConfig, ...JSON.parse(saved) };
            }
        } catch (error) {
            console.warn('Could not load from localStorage:', error);
        }
    }

    // Export data as JSON
    exportData() {
        return JSON.stringify(this.data, null, 2);
    }

    // Import data from JSON
    importData(jsonData) {
        try {
            const imported = JSON.parse(jsonData);
            this.data = { ...portfolioConfig, ...imported };
            this.saveToLocalStorage();
            return true;
        } catch (error) {
            console.error('Error importing data:', error);
            return false;
        }
    }

    // Generate certification HTML
    generateCertificationHTML(cert, index) {
        return `
            <div class="certification-card text-center" data-index="${index}">
                <img src="assets/img/logos/${cert.logo}" alt="${cert.issuer}" class="certification-logo mx-auto">
                <h3 class="certification-title">${cert.title}</h3>
                <p class="certification-issuer">${cert.issuer}</p>
                <p class="certification-date">${cert.date}</p>
                <p class="text-sm text-gray-600 mt-2">${cert.description}</p>
                ${cert.credentialId ? `<p class="text-xs text-gray-500 mt-1">ID: ${cert.credentialId}</p>` : ''}
                <div class="mt-4 flex justify-center space-x-2">
                    <button onclick="editCertification(${index})" class="text-blue-600 hover:text-blue-800">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteCertification(${index})" class="text-red-600 hover:text-red-800">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // Generate tool HTML
    generateToolHTML(tool, index) {
        return `
            <div class="tool-card" data-index="${index}">
                <div class="flex items-center mb-4">
                    <img src="assets/img/logos/${tool.logo}" alt="${tool.name}" class="w-12 h-12 mr-4">
                    <div class="flex-1">
                        <h3 class="font-bold">${tool.name}</h3>
                        <p class="text-xs text-gray-500">${tool.category}</p>
                    </div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${tool.proficiency}%"></div>
                </div>
                <div class="mt-2 flex justify-between items-center">
                    <span class="text-sm font-medium">${tool.proficiency}%</span>
                    <div class="space-x-2">
                        <button onclick="editTool(${index})" class="text-blue-600 hover:text-blue-800 text-sm">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="deleteTool(${index})" class="text-red-600 hover:text-red-800 text-sm">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize portfolio manager
const portfolioManager = new PortfolioManager();

// Load saved data on initialization
portfolioManager.loadFromLocalStorage();
