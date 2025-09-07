// Project Detail Page JavaScript

// Enhanced project data with additional details needed for individual pages
const enhancedProjectData = {
    1: {
        problem: "The client needed a modern, mobile-responsive e-commerce website to sell handcrafted items online. They were losing potential customers due to their outdated website that wasn't optimized for mobile devices or search engines.",
        solution: "I developed a comprehensive e-commerce solution using WordPress and WooCommerce, with custom PHP scripts for enhanced functionality. Implemented Elementor for responsive design and integrated SEO best practices to improve search visibility.",
        features: [
            "Mobile-responsive design that works on all devices",
            "Secure payment gateway integration",
            "SEO optimized product pages",
            "Custom product filtering and search",
            "Admin dashboard for easy management"
        ],
        learnings: [
            "Advanced WooCommerce customization techniques",
            "Mobile-first responsive design principles",
            "SEO optimization for e-commerce sites",
            "Client communication and requirement gathering"
        ],
        screenshots: [
            "ecommerce-home.jpg",
            "ecommerce-products.jpg", 
            "ecommerce-checkout.jpg",
            "ecommerce-mobile.jpg",
            "ecommerce-admin.jpg"
        ],
        architecture: "Built on WordPress with WooCommerce plugin, using custom PHP for enhanced functionality. MySQL database for product and customer data management.",
        performance: "Achieved 40% improvement in site speed through image optimization, caching, and code minification. Mobile performance score increased from 45 to 89."
    },
    2: {
        problem: "Content creators and bloggers needed an AI-powered tool to generate high-quality article content quickly. Manual content creation was time-consuming and often lacked consistency.",
        solution: "Developed Prowriter AI using multiple AI engines to generate various types of articles including news, comparisons, how-to guides, and documentation. Built with modern JavaScript and integrated multiple AI APIs for diverse content types.",
        features: [
            "Multiple AI engines for diverse writing styles",
            "Pre-built templates for different article types",
            "Real-time content generation",
            "SEO-optimized output",
            "Export functionality for multiple formats"
        ],
        learnings: [
            "Integration with multiple AI APIs",
            "Prompt engineering for different content types",
            "Building scalable SaaS architecture",
            "User experience design for AI tools"
        ],
        screenshots: [
            "prowriter-dashboard.jpg",
            "prowriter-generator.jpg",
            "prowriter-templates.jpg",
            "prowriter-output.jpg",
            "prowriter-settings.jpg"
        ],
        architecture: "Frontend built with modern JavaScript, backend API integration with multiple AI services. Cloud hosting for scalability and performance.",
        performance: "Processes content generation requests in under 30 seconds. Handles up to 100 concurrent users with 99.9% uptime."
    },
    3: {
        problem: "College students needed an offline coding assistant for lab exams where internet access was restricted. Traditional online AI tools weren't accessible in exam environments.",
        solution: "Created Codai, an offline coding assistant using Tiny Llama GGUF model from Hugging Face. Designed to run on low-end PCs with just 4GB RAM, making it accessible for all college environments.",
        features: [
            "100% offline functionality",
            "Works on low-end hardware (4GB RAM)",
            "Portable Python implementation",
            "Code generation and debugging assistance",
            "Multiple programming language support"
        ],
        learnings: [
            "Offline AI model deployment",
            "Optimization for low-resource environments",
            "Portable application development",
            "Understanding of GGUF model formats"
        ],
        screenshots: [
            "codai-interface.jpg",
            "codai-coding.jpg",
            "codai-debug.jpg",
            "codai-portable.jpg",
            "codai-performance.jpg"
        ],
        architecture: "Standalone application using Tiny Llama model with portable Python runtime. Optimized for minimal resource usage while maintaining functionality.",
        performance: "Runs smoothly on 4GB RAM systems. Response time under 5 seconds for most coding queries. Zero network dependency."
    },
    4: {
        problem: "Users frequently needed to convert CSV files to SQL format for database imports but lacked technical expertise or proper tools for the conversion.",
        solution: "Built a web-based tool using Python and Flask that automatically converts CSV files to SQL INSERT statements. Deployed on Render.com for easy access and reliability.",
        features: [
            "Drag-and-drop CSV file upload",
            "Automatic data type detection",
            "Custom table name specification",
            "Download generated SQL file",
            "Support for large CSV files"
        ],
        learnings: [
            "File processing and manipulation in Python",
            "Flask web framework development",
            "Cloud deployment on Render.com",
            "User interface design for utility tools"
        ],
        screenshots: [
            "csv2sql-upload.jpg",
            "csv2sql-processing.jpg",
            "csv2sql-preview.jpg",
            "csv2sql-download.jpg",
            "csv2sql-mobile.jpg"
        ],
        architecture: "Python Flask backend with HTML/CSS/JavaScript frontend. File processing handled server-side with secure temporary storage.",
        performance: "Processes files up to 50MB in under 60 seconds. Handles complex CSV structures with 99% accuracy."
    },
    5: {
        problem: "Young people needed a private, secure communication platform that parents couldn't easily monitor, while ensuring safety and preventing screenshot abuse.",
        solution: "Developed a WhatsApp-clone with unique privacy features including auto-hide messages, screenshot prevention, and invite-only access. Built with full-stack technologies including React and Node.js.",
        features: [
            "60-second auto-hide messaging",
            "Screenshot prevention technology",
            "Invite-only chat rooms",
            "No data storage policy",
            "End-to-end encryption"
        ],
        learnings: [
            "Real-time communication with WebSockets",
            "Privacy and security implementation",
            "React frontend development",
            "Node.js backend architecture"
        ],
        screenshots: [
            "whatsapp-login.jpg",
            "whatsapp-chat.jpg",
            "whatsapp-invite.jpg",
            "whatsapp-security.jpg",
            "whatsapp-mobile.jpg"
        ],
        architecture: "React frontend with Node.js backend. WebSocket connections for real-time messaging. Minimal data persistence for privacy.",
        performance: "Sub-second message delivery. Supports up to 50 concurrent users per chat room. 256-bit encryption for all communications."
    },
    6: {
        problem: "Content creators struggled to write engaging YouTube scripts and needed a tool that could leverage advanced AI models for script generation.",
        solution: "Created a YouTube Script Writer using OpenAI's GPT-4.1 model accessed through GitHub Personal Access Token. This provides free access to premium AI capabilities for script writing.",
        features: [
            "Integration with GPT-4.1 via GitHub PAT",
            "Multiple script templates (tutorials, reviews, etc.)",
            "SEO-optimized title suggestions",
            "Engagement hook generation",
            "Call-to-action recommendations"
        ],
        learnings: [
            "Advanced prompt engineering for content creation",
            "GitHub API integration for AI access",
            "Content optimization techniques",
            "Building tools for content creators"
        ],
        screenshots: [
            "script-writer-home.jpg",
            "script-writer-generator.jpg",
            "script-writer-templates.jpg",
            "script-writer-output.jpg",
            "script-writer-export.jpg"
        ],
        architecture: "Frontend JavaScript application with GitHub API integration. Server-side processing for AI model communication.",
        performance: "Generates professional scripts in 30-60 seconds. Supports multiple content formats and styles."
    }
};

// Default data for projects without enhanced details
const defaultProjectData = {
    problem: "This project addressed a specific need in the market, solving challenges that users or clients were experiencing in their daily operations or business processes.",
    solution: "I implemented a comprehensive solution using modern technologies and best practices, focusing on user experience, performance, and scalability to meet all requirements.",
    features: [
        "User-friendly interface design",
        "Responsive and mobile-optimized",
        "High performance and fast loading",
        "Secure and reliable architecture",
        "Scalable for future growth"
    ],
    learnings: [
        "Technical skills in the chosen technology stack",
        "Problem-solving and analytical thinking",
        "User experience and interface design",
        "Project management and client communication"
    ],
    screenshots: [
        "placeholder-1.jpg",
        "placeholder-2.jpg",
        "placeholder-3.jpg",
        "placeholder-4.jpg",
        "placeholder-5.jpg"
    ],
    architecture: "Modern, scalable architecture following industry best practices with proper separation of concerns and maintainable code structure.",
    performance: "Optimized for high performance with fast loading times, efficient resource usage, and excellent user experience across all devices."
};

let currentProject = null;

// Initialize the project detail page
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));
    
    if (projectId && portfolioManager && portfolioManager.data.projects) {
        loadProjectDetails(projectId);
    } else {
        showError('Project not found or invalid project ID');
    }
});

// Load and display project details
function loadProjectDetails(projectId) {
    const project = portfolioManager.data.projects.find(p => p.id === projectId);
    if (!project) {
        showError('Project not found');
        return;
    }
    
    currentProject = project;
    
    // Get enhanced data or use defaults
    const enhanced = enhancedProjectData[projectId] || defaultProjectData;
    
    // Update page title
    document.getElementById('pageTitle').textContent = `${project.title} - Lucky Singh Yaduvanshi`;
    document.title = `${project.title} - Lucky Singh Yaduvanshi`;
    
    // Update basic project info
    document.getElementById('projectCategory').textContent = project.category;
    document.getElementById('projectStatus').textContent = project.status.replace('-', ' ').toUpperCase();
    document.getElementById('projectStatus').className = `px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`;
    document.getElementById('projectDate').textContent = project.date;
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDescription').textContent = project.description;
    
    // Update main image
    const mainImage = document.getElementById('projectMainImage');
    mainImage.src = `assets/img/projects/${project.image}`;
    mainImage.alt = project.title;
    
    // Show featured badge if applicable
    if (project.featured) {
        document.getElementById('featuredBadge').classList.remove('hidden');
    }
    
    // Update project links
    updateProjectLinks(project);
    
    // Update technologies
    updateTechnologies(project.technologies);
    
    // Update problem and solution
    document.getElementById('problemStatement').innerHTML = `<p>${enhanced.problem}</p>`;
    document.getElementById('solutionApproach').innerHTML = `<p>${enhanced.solution}</p>`;
    
    // Update screenshots
    updateScreenshots(enhanced.screenshots, project.title);
    
    // Update key features
    updateKeyFeatures(enhanced.features);
    
    // Update learnings
    updateLearnings(enhanced.learnings);
    
    // Update technical details
    document.getElementById('architecture').innerHTML = `<p>${enhanced.architecture}</p>`;
    document.getElementById('performance').innerHTML = `<p>${enhanced.performance}</p>`;
    
    // Update related projects
    updateRelatedProjects(project);
}

// Update project links section
function updateProjectLinks(project) {
    const linksContainer = document.getElementById('projectLinks');
    let linksHTML = '';
    
    if (project.liveUrl && project.liveUrl !== '#') {
        linksHTML += `
            <a href="${project.liveUrl}" target="_blank" class="btn btn-primary">
                🔗 Live Demo
            </a>
        `;
    }
    
    if (project.githubUrl && project.githubUrl !== '#') {
        linksHTML += `
            <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
                ⚡ GitHub Repository
            </a>
        `;
    }
    
    if (!linksHTML) {
        linksHTML = '<p class="text-gray-500">Links not available for this project</p>';
    }
    
    linksContainer.innerHTML = linksHTML;
}

// Update technologies section
function updateTechnologies(technologies) {
    const container = document.getElementById('projectTechnologies');
    const techHTML = technologies.map(tech => 
        `<span class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">${tech}</span>`
    ).join('');
    container.innerHTML = techHTML;
}

// Update screenshots section
function updateScreenshots(screenshots, projectTitle) {
    const container = document.getElementById('screenshotsGrid');
    const screenshotsHTML = screenshots.map((screenshot, index) => `
        <div class="screenshot-item">
            <img src="assets/img/projects/${screenshot}" 
                 alt="${projectTitle} Screenshot ${index + 1}" 
                 class="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                 onclick="openImageModal('assets/img/projects/${screenshot}', '${projectTitle} Screenshot ${index + 1}')"
                 onerror="this.src='assets/img/projects/placeholder.jpg'">
            <p class="text-center text-sm text-gray-600 mt-2">Screenshot ${index + 1}</p>
        </div>
    `).join('');
    container.innerHTML = screenshotsHTML;
}

// Update key features section
function updateKeyFeatures(features) {
    const container = document.getElementById('keyFeatures');
    const featuresHTML = features.map(feature => `
        <div class="feature-item bg-gray-50 p-6 rounded-lg">
            <div class="text-2xl mb-3">✨</div>
            <p class="text-gray-700">${feature}</p>
        </div>
    `).join('');
    container.innerHTML = featuresHTML;
}

// Update learnings section
function updateLearnings(learnings) {
    const container = document.getElementById('learnings');
    const learningsHTML = learnings.map(learning => `
        <div class="learning-item bg-white bg-opacity-10 p-6 rounded-lg">
            <div class="text-2xl mb-3">💡</div>
            <p class="text-white">${learning}</p>
        </div>
    `).join('');
    container.innerHTML = learningsHTML;
}

// Update related projects section
function updateRelatedProjects(currentProject) {
    const container = document.getElementById('relatedProjects');
    const allProjects = portfolioManager.data.projects || [];
    
    // Find related projects (same category, exclude current)
    const relatedProjects = allProjects
        .filter(p => p.id !== currentProject.id && p.category === currentProject.category)
        .slice(0, 3);
    
    if (relatedProjects.length === 0) {
        // If no same category, show other featured projects
        relatedProjects.push(...allProjects
            .filter(p => p.id !== currentProject.id && p.featured)
            .slice(0, 3));
    }
    
    const relatedHTML = relatedProjects.map(project => `
        <div class="related-project bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="assets/img/projects/${project.image}" 
                 alt="${project.title}" 
                 class="w-full h-48 object-cover"
                 onerror="this.src='assets/img/projects/placeholder.jpg'">
            <div class="p-4">
                <span class="text-xs text-primary font-medium">${project.category}</span>
                <h3 class="font-bold mt-1 mb-2">${project.title}</h3>
                <p class="text-sm text-gray-600 mb-3 line-clamp-3">${project.description}</p>
                <a href="project-detail.html?id=${project.id}" class="text-primary hover:text-blue-700 font-medium text-sm">
                    View Details →
                </a>
            </div>
        </div>
    `).join('');
    
    if (relatedHTML) {
        container.innerHTML = relatedHTML;
    } else {
        container.innerHTML = '<p class="text-center text-gray-500 col-span-3">No related projects found</p>';
    }
}

// Get status color class
function getStatusColor(status) {
    switch (status) {
        case 'completed':
            return 'bg-green-500 text-white';
        case 'in-development':
            return 'bg-yellow-500 text-white';
        case 'planned':
            return 'bg-blue-500 text-white';
        default:
            return 'bg-gray-500 text-white';
    }
}

// Open image modal for screenshots
function openImageModal(imageSrc, imageAlt) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="max-w-4xl max-h-full">
            <img src="${imageSrc}" alt="${imageAlt}" class="max-w-full max-h-full object-contain">
            <div class="text-center mt-4">
                <p class="text-white mb-4">${imageAlt}</p>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        class="btn bg-white text-black hover:bg-gray-200">
                    Close
                </button>
            </div>
        </div>
    `;
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    document.body.appendChild(modal);
}

// Show error message
function showError(message) {
    document.querySelector('main').innerHTML = `
        <div class="container text-center py-16">
            <h1 class="text-3xl font-bold mb-4">Project Not Found</h1>
            <p class="text-gray-600 mb-8">${message}</p>
            <a href="projects.html" class="btn btn-primary">Back to Projects</a>
        </div>
    `;
}