// Projects Page JavaScript

let currentFilter = 'all';
let currentView = 'grid';
let currentSort = 'newest';
let projectsPerPage = 6;
let currentPage = 1;
let filteredProjects = [];

// Initialize projects page
document.addEventListener('DOMContentLoaded', function() {
    if (typeof portfolioManager !== 'undefined') {
        loadProjects();
        updateStatistics();
    } else {
        console.error('Portfolio manager not loaded');
    }
});

// Load and display projects
function loadProjects() {
    const projects = portfolioManager.data.projects || [];
    filteredProjects = filterProjectsByCategory(projects, currentFilter);
    filteredProjects = sortProjects(filteredProjects, currentSort);
    
    displayProjects();
    updateLoadMoreButton();
}

// Filter projects by category
function filterProjectsByCategory(projects, filter) {
    if (filter === 'all') {
        return projects;
    } else if (filter === 'featured') {
        return projects.filter(project => project.featured);
    } else {
        return projects.filter(project => project.category === filter);
    }
}

// Sort projects
function sortProjects(projects, sortType) {
    switch (sortType) {
        case 'newest':
            return projects.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'oldest':
            return projects.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'featured':
            return projects.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return 0;
            });
        default:
            return projects;
    }
}

// Display projects
function displayProjects() {
    const container = document.getElementById('projectsContainer');
    const startIndex = 0;
    const endIndex = currentPage * projectsPerPage;
    const projectsToShow = filteredProjects.slice(startIndex, endIndex);
    
    if (currentView === 'grid') {
        container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
        container.innerHTML = projectsToShow.map(project => createProjectCard(project)).join('');
    } else {
        container.className = 'space-y-6';
        container.innerHTML = projectsToShow.map(project => createProjectListItem(project)).join('');
    }
}

// Create project card for grid view
function createProjectCard(project) {
    const statusBadge = getStatusBadge(project.status);
    const featuredBadge = project.featured ? '<div class="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Featured</div>' : '';
    
    return `
        <div class="project-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative" data-category="${project.category}">
            ${featuredBadge}
            <div class="relative">
                <img src="assets/img/projects/${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="absolute top-4 right-4">
                    ${statusBadge}
                </div>
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-sm text-primary font-medium">${project.category}</span>
                    <span class="text-sm text-gray-500">${project.date}</span>
                </div>
                <h3 class="text-xl font-bold mb-3 hover:text-primary cursor-pointer" onclick="openProjectModal(${project.id})">${project.title}</h3>
                <p class="text-gray-600 mb-4 line-clamp-3">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.slice(0, 3).map(tech => `<span class="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">${tech}</span>`).join('')}
                    ${project.technologies.length > 3 ? `<span class="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">+${project.technologies.length - 3}</span>` : ''}
                </div>
                <div class="flex space-x-3">
                    ${project.liveUrl && project.liveUrl !== '#' ? `<a href="${project.liveUrl}" target="_blank" class="flex-1 btn btn-primary text-sm py-2"><i class="fas fa-external-link-alt mr-2"></i>Live Demo</a>` : ''}
                    ${project.githubUrl && project.githubUrl !== '#' ? `<a href="${project.githubUrl}" target="_blank" class="flex-1 btn btn-secondary text-sm py-2"><i class="fab fa-github mr-2"></i>GitHub</a>` : ''}
                    <button onclick="openProjectModal(${project.id})" class="btn btn-secondary text-sm py-2 px-3"><i class="fas fa-info-circle"></i></button>
                </div>
            </div>
        </div>
    `;
}

// Create project list item for list view
function createProjectListItem(project) {
    const statusBadge = getStatusBadge(project.status);
    
    return `
        <div class="project-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl" data-category="${project.category}">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/3 relative">
                    <img src="assets/img/projects/${project.image}" alt="${project.title}" class="w-full h-48 md:h-full object-cover">
                    <div class="absolute top-4 right-4">
                        ${statusBadge}
                    </div>
                    ${project.featured ? '<div class="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Featured</div>' : ''}
                </div>
                <div class="md:w-2/3 p-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-sm text-primary font-medium">${project.category}</span>
                        <span class="text-sm text-gray-500">${project.date}</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-3 hover:text-primary cursor-pointer" onclick="openProjectModal(${project.id})">${project.title}</h3>
                    <p class="text-gray-600 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech => `<span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">${tech}</span>`).join('')}
                    </div>
                    <div class="flex space-x-3">
                        ${project.liveUrl && project.liveUrl !== '#' ? `<a href="${project.liveUrl}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt mr-2"></i>Live Demo</a>` : ''}
                        ${project.githubUrl && project.githubUrl !== '#' ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-secondary"><i class="fab fa-github mr-2"></i>GitHub Repo</a>` : ''}
                        <button onclick="openProjectModal(${project.id})" class="btn btn-secondary"><i class="fas fa-info-circle mr-2"></i>Details</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Get status badge
function getStatusBadge(status) {
    switch (status) {
        case 'completed':
            return '<span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Completed</span>';
        case 'in-development':
            return '<span class="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">In Development</span>';
        case 'planned':
            return '<span class="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">Planned</span>';
        default:
            return '<span class="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-medium">Unknown</span>';
    }
}

// Filter projects
function filterProjects(filter) {
    currentFilter = filter;
    currentPage = 1;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    
    loadProjects();
}

// Sort projects (called by UI)
function onSortChange() {
    const sortSelect = document.getElementById('sortSelect');
    currentSort = sortSelect.value;
    currentPage = 1;
    
    loadProjects();
}

// Toggle view
function toggleView(view) {
    currentView = view;
    
    // Update view buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(view + 'View').classList.add('active');
    
    displayProjects();
}

// Load more projects
function loadMoreProjects() {
    currentPage++;
    displayProjects();
    updateLoadMoreButton();
}

// Update load more button
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const totalShown = currentPage * projectsPerPage;
    
    if (totalShown >= filteredProjects.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// Open project modal
function openProjectModal(projectId) {
    const project = portfolioManager.data.projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    modalTitle.textContent = project.title;
    
    modalContent.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <img src="assets/img/projects/${project.image}" alt="${project.title}" class="w-full rounded-lg shadow-lg">
                <div class="mt-4 flex flex-wrap gap-2">
                    ${project.technologies.map(tech => `<span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">${tech}</span>`).join('')}
                </div>
            </div>
            <div>
                <div class="flex items-center justify-between mb-4">
                    <span class="text-lg text-primary font-medium">${project.category}</span>
                    ${getStatusBadge(project.status)}
                </div>
                <p class="text-gray-600 mb-6 leading-relaxed">${project.description}</p>
                
                <div class="space-y-4">
                    <div>
                        <h4 class="font-semibold mb-2">Project Date</h4>
                        <p class="text-gray-600">${project.date}</p>
                    </div>
                    
                    <div>
                        <h4 class="font-semibold mb-2">Technologies Used</h4>
                        <div class="flex flex-wrap gap-2">
                            ${project.technologies.map(tech => `<span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">${tech}</span>`).join('')}
                        </div>
                    </div>
                    
                    ${project.featured ? '<div class="bg-accent/10 border border-accent/20 rounded-lg p-4"><p class="text-accent font-medium"><i class="fas fa-star mr-2"></i>Featured Project</p></div>' : ''}
                </div>
                
                <div class="flex space-x-3 mt-8">
                    ${project.liveUrl && project.liveUrl !== '#' ? `<a href="${project.liveUrl}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt mr-2"></i>Live Demo</a>` : ''}
                    ${project.githubUrl && project.githubUrl !== '#' ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-secondary"><i class="fab fa-github mr-2"></i>GitHub Repository</a>` : ''}
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Update statistics
function updateStatistics() {
    const projects = portfolioManager.data.projects || [];
    
    document.getElementById('totalProjects').textContent = projects.length;
    document.getElementById('completedProjects').textContent = projects.filter(p => p.status === 'completed').length;
    document.getElementById('inDevelopment').textContent = projects.filter(p => p.status === 'in-development').length;
    document.getElementById('featuredProjects').textContent = projects.filter(p => p.featured).length;
}

// Add project management functions
function addProject(project) {
    if (typeof portfolioManager !== 'undefined') {
        portfolioManager.data.projects.push({
            id: Date.now(),
            ...project,
            dateAdded: new Date().toISOString()
        });
        portfolioManager.saveToLocalStorage();
        loadProjects();
        updateStatistics();
    }
}

function removeProject(projectId) {
    if (typeof portfolioManager !== 'undefined') {
        const index = portfolioManager.data.projects.findIndex(p => p.id === projectId);
        if (index !== -1) {
            portfolioManager.data.projects.splice(index, 1);
            portfolioManager.saveToLocalStorage();
            loadProjects();
            updateStatistics();
        }
    }
}

function updateProject(projectId, updates) {
    if (typeof portfolioManager !== 'undefined') {
        const index = portfolioManager.data.projects.findIndex(p => p.id === projectId);
        if (index !== -1) {
            portfolioManager.data.projects[index] = { ...portfolioManager.data.projects[index], ...updates };
            portfolioManager.saveToLocalStorage();
            loadProjects();
            updateStatistics();
        }
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Search functionality
function searchProjects(query) {
    const projects = portfolioManager.data.projects || [];
    if (!query) {
        filteredProjects = projects;
    } else {
        filteredProjects = projects.filter(project => 
            project.title.toLowerCase().includes(query.toLowerCase()) ||
            project.description.toLowerCase().includes(query.toLowerCase()) ||
            project.technologies.some(tech => tech.toLowerCase().includes(query.toLowerCase())) ||
            project.category.toLowerCase().includes(query.toLowerCase())
        );
    }
    
    currentPage = 1;
    displayProjects();
    updateLoadMoreButton();
}
