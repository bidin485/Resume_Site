// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navigation functionality
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default for anchor links with #
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                // Remove active class from all links and sections
                navLinks.forEach(l => l.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                // Show corresponding section
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            }
        });
    });

    // Certificates: Load images from images/certificates/
    const certificatesGrid = document.getElementById('certificatesGrid');
    if (certificatesGrid) {
        // List of certificate image filenames (user should update this list to match their files)
        const certificateImages = [
            'WhatsApp Image 2025-07-21 at 08.43.15.jpeg',
            'WhatsApp Image 2025-07-21 at 08.43.16 (1).jpeg',
            'WhatsApp Image 2025-07-21 at 08.43.16 (10).jpeg',
            'WhatsApp Image 2025-07-21 at 08.43.16 (2).jpeg',
            'WhatsApp Image 2025-07-21 at 08.43.16 (3).jpeg',
            'WhatsApp Image 2025-07-21 at 08.43.16 (4).jpeg',
            'WhatsApp Image 2025-07-21 at 08.43.16 (5).jpeg',
            'WhatsApp Image 2025-07-21 at 08.43.16 (6).jpeg',
            'WhatsApp Image 2025-07-21 at 08.43.16 (7).jpeg',
            'WhatsApp Image 2025-07-21 at 08.43.16 (8).jpeg',
            'WhatsApp Image 2025-07-21 at 08.43.16 (9).jpeg',
            'WhatsApp Image 2025-07-21 at 08.43.16.jpeg',
            'Innovation_Hub.jpeg',
            
        ];
        // Dynamically add images
        certificateImages.forEach(filename => {
            const certificateItem = document.createElement('div');
            certificateItem.className = 'certificate-item';
            certificateItem.innerHTML = `
                <div class="certificate-image">
                    <img src="images/certificates/${filename}" alt="Certificate" style="max-width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
                </div>
            `;
            // Click to view full size
            certificateItem.addEventListener('click', function() {
                showImageModal(`images/certificates/${filename}`, filename);
            });
            certificatesGrid.appendChild(certificateItem);
        });
    }
});

// Create certificate item
function createCertificateItem(imageSrc, fileName) {
    const certificateItem = document.createElement('div');
    certificateItem.className = 'certificate-item';
    
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long'
    });
    
    certificateItem.innerHTML = `
        <div class="certificate-image">
            <img src="${imageSrc}" alt="${fileName}" style="max-width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
        </div>
        <div class="certificate-info">
            <h4>${fileName.replace(/\.[^/.]+$/, '')}</h4>
            <p>Certificate</p>
            <p class="certificate-date">Uploaded: ${currentDate}</p>
        </div>
    `;
    
    // Add click functionality to view image in full size
    certificateItem.addEventListener('click', function() {
        showImageModal(imageSrc, fileName);
    });
    
    return certificateItem;
}

// Image modal functionality
function showImageModal(imageSrc, fileName) {
    
    const existingModal = document.querySelector('.image-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        position: relative;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = fileName;
    img.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 8px;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 0;
        width: 40px;
        height: 40px;
    `;
    
    modalContent.appendChild(img);
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeModal = () => modal.remove();
    modal.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Resume download functionality
function downloadResume() {
    // Create a simple PDF-like content
    const resumeContent = `
        <html>
        <head>
            <title>Resume</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                h1 { color: #2563eb; }
                h2 { color: #1e293b; margin-top: 20px; }
                .section { margin-bottom: 20px; }
                .contact { margin-bottom: 30px; }
            </style>
        </head>
        <body>
            <h1>Your Name</h1>
            <p>Professional Title</p>
            <div class="contact">
                <p>Email: email@example.com</p>
                <p>Phone: +1 234 567 890</p>
                <p>Location: City, Country</p>
            </div>
            
            <div class="section">
                <h2>Education</h2>
                <h3>Degree Name</h3>
                <p>University Name • 2020-2024</p>
                <p>Relevant coursework and achievements</p>
            </div>
            
            <div class="section">
                <h2>Experience</h2>
                <h3>Job Title</h3>
                <p>Company Name • 2022-Present</p>
                <ul>
                    <li>Key achievement or responsibility</li>
                    <li>Another important contribution</li>
                    <li>Notable project or skill</li>
                </ul>
            </div>
            
            <div class="section">
                <h2>Skills</h2>
                <p>HTML/CSS, JavaScript, Python, React, Node.js, Git</p>
            </div>
        </body>
        </html>
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Resume print functionality
function printResume() {
    const resumeSection = document.querySelector('#resume');
    const originalDisplay = resumeSection.style.display;
    
    // Show only resume section for printing
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    resumeSection.style.display = 'block';
    
    // Hide navigation and other elements
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
    
    // Print
    window.print();
    
    // Restore original display
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = '';
    });
    resumeSection.style.display = originalDisplay;
    document.querySelector('.navbar').style.display = '';
    document.querySelector('.footer').style.display = '';
}

// Add some CSS for print styles
const printStyles = document.createElement('style');
printStyles.textContent = `
    @media print {
        body { margin: 0; }
        .navbar, .footer, .resume-actions { display: none !important; }
        .resume-container { box-shadow: none; border: 1px solid #ccc; }
    }
`;
document.head.appendChild(printStyles); 