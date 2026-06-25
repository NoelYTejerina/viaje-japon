document.addEventListener('DOMContentLoaded', () => {
    const level1Menu = document.getElementById('level1-menu');
    const level2Menu = document.getElementById('level2-menu');
    const contentArea = document.getElementById('sections-container');
    const heroImage = document.getElementById('hero-image');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const currentDestination = document.getElementById('current-destination');

    let currentDestKey = null;

    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
    });

    // Scroll Arrows Logic
    function setupScrollArrows(containerId, leftBtnId, rightBtnId) {
        const container = document.getElementById(containerId);
        const leftBtn = document.getElementById(leftBtnId);
        const rightBtn = document.getElementById(rightBtnId);

        const updateArrows = () => {
            if (!container) return;
            const canScrollLeft = container.scrollLeft > 0;
            const canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth - 1);
            
            leftBtn.style.display = canScrollLeft ? 'block' : 'none';
            rightBtn.style.display = canScrollRight ? 'block' : 'none';
        };

        if (container && leftBtn && rightBtn) {
            container.addEventListener('scroll', updateArrows);
            window.addEventListener('resize', updateArrows);
            
            // Initial check after a short delay to allow rendering
            setTimeout(updateArrows, 100);

            leftBtn.addEventListener('click', () => {
                container.scrollBy({ left: -200, behavior: 'smooth' });
            });
            rightBtn.addEventListener('click', () => {
                container.scrollBy({ left: 200, behavior: 'smooth' });
            });
        }
        return updateArrows;
    }

    const updateL1Arrows = setupScrollArrows('nav-l1-container', 'l1-left', 'l1-right');
    const updateL2Arrows = setupScrollArrows('nav-l2-container', 'l2-left', 'l2-right');

    // Initialization
    function init() {
        if (!window.appData || Object.keys(window.appData).length === 0) {
            contentArea.innerHTML = '<p style="color:white;text-align:center;padding:2rem;">Cargando datos...</p>';
            return;
        }
        renderLevel1();
        // Load default destination (Japón)
        const firstDest = Object.keys(window.appData)[0];
        selectDestination(firstDest);
    }

    // Render horizontal menu
    function renderLevel1() {
        level1Menu.innerHTML = '';
        Object.entries(window.appData).forEach(([key, dest]) => {
            const li = document.createElement('li');
            li.textContent = dest.name;
            li.dataset.key = key;
            li.addEventListener('click', () => selectDestination(key));
            level1Menu.appendChild(li);
        });
    }

    // Handle destination selection
    function selectDestination(key) {
        if (currentDestKey === key) return;
        currentDestKey = key;

        // Update active class on level 1
        Array.from(level1Menu.children).forEach(child => {
            child.classList.toggle('active', child.dataset.key === key);
        });

        const destData = window.appData[key];
        
        // Update hero section
        heroTitle.textContent = destData.name;
        heroSubtitle.textContent = destData.subtitle || '';
        
        // Render Image with instruction if missing
        if (destData.heroImage) {
            heroImage.src = destData.heroImage;
        } else {
            heroImage.src = '';
            // Will add instruction in content
        }

        currentDestination.textContent = destData.name;

        renderLevel2(destData.sections);
        renderContent(destData.sections, destData);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Render vertical menu
    function renderLevel2(sections) {
        level2Menu.innerHTML = '';
        sections.forEach((sec, index) => {
            const li = document.createElement('li');
            li.textContent = sec.title;
            li.dataset.index = index;
            if (index === 0) li.classList.add('active');
            
            li.addEventListener('click', () => {
                // Update active state
                Array.from(level2Menu.children).forEach(c => c.classList.remove('active'));
                li.classList.add('active');
                
                // Scroll to section
                const sectionEl = document.getElementById(`section-${index}`);
                if (sectionEl) {
                    const headerOffset = 80;
                    const elementPosition = sectionEl.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            });
            level2Menu.appendChild(li);
        });
    }

    // Render content sections
    function renderContent(sections, destData) {
        contentArea.innerHTML = '';
        
        // Removed image instruction HTML injection as requested

        sections.forEach((sec, index) => {
            const sectionEl = document.createElement('div');
            sectionEl.className = 'content-section fade-in';
            sectionEl.id = `section-${index}`;
            sectionEl.style.animationDelay = `${index * 0.1}s`;

            // Title
            const titleEl = document.createElement('h2');
            titleEl.className = 'section-title';
            titleEl.textContent = sec.title;
            sectionEl.appendChild(titleEl);

            // Text Content (HTML allowed)
            if (sec.content) {
                const contentDiv = document.createElement('div');
                contentDiv.innerHTML = sec.content;
                sectionEl.appendChild(contentDiv);
            }

            // Cards (Restaurantes, Templos, etc)
            if (sec.items && sec.items.length > 0) {
                const gridEl = document.createElement('div');
                gridEl.className = 'cards-grid';

                sec.items.forEach(item => {
                    const cardEl = document.createElement('div');
                    cardEl.className = 'card';

                    let imgHtml = '';
                    if (item.image) {
                        imgHtml = `<img src="${item.image}" alt="${item.name}" class="card-img" onerror="this.src=''; this.style.display='none';">`;
                    }
                    // Removed image instruction from cards as well

                    const mapHtml = item.mapLink ? `<a href="${item.mapLink}" target="_blank" class="map-link">📍 Ver en Maps</a>` : '';
                    const priceHtml = item.price ? `<span class="price-tag">${item.price}</span>` : '';
                    const metaHtml = (mapHtml || priceHtml) ? `<div class="card-meta">${priceHtml}${mapHtml}</div>` : '';

                    cardEl.innerHTML = `
                        ${imgHtml}
                        <div class="card-content">
                            <h3 class="card-title">${item.name}</h3>
                            <p class="card-desc">${item.description}</p>
                            ${metaHtml}
                        </div>
                    `;
                    gridEl.appendChild(cardEl);
                });
                sectionEl.appendChild(gridEl);
            }

            contentArea.appendChild(sectionEl);
        });
    }

    // Update active nav on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('.content-section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        if (current) {
            const index = current.split('-')[1];
            Array.from(level2Menu.children).forEach(li => {
                li.classList.remove('active');
                if (li.dataset.index === index) {
                    li.classList.add('active');
                }
            });
        }
    });

    // Run init
    init();
});
