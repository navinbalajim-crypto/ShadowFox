/**
 * NAVINBALAJI M | PORTFOLIO SCRIPT
 * Three.js 3D WebGL Graphics, ATS Resume Modal, 3D Card Tilt, Typewriter & Micro-Interactions
 */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================================
       1. THREE.JS 3D PROCEDURAL WEBGL GRAPHICS
       ========================================================================== */
    const initThreeScene = () => {
        const canvas = document.getElementById("three-canvas");
        if (!canvas || typeof THREE === "undefined") {
            console.log("Three.js not loaded or canvas missing; skipping 3D background.");
            return;
        }

        try {
            // Scene, Camera, Renderer
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 35;

            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true,
                antialias: true,
                powerPreference: "high-performance"
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Ambient Lights
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
            scene.add(ambientLight);

            const pointLight1 = new THREE.PointLight(0x38bdf8, 2.5, 80);
            pointLight1.position.set(20, 20, 20);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0x818cf8, 2, 80);
            pointLight2.position.set(-20, -20, 10);
            scene.add(pointLight2);

            // 1) 3D Particle Constellation
            const particleCount = 750;
            const particleGeometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            const scales = new Float32Array(particleCount);

            for (let i = 0; i < particleCount * 3; i += 3) {
                positions[i] = (Math.random() - 0.5) * 120;
                positions[i + 1] = (Math.random() - 0.5) * 120;
                positions[i + 2] = (Math.random() - 0.5) * 80;
                scales[i / 3] = Math.random() * 1.5 + 0.5;
            }

            particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
            particleGeometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

            // Create Canvas Particle Texture
            const createParticleTexture = () => {
                const canvas = document.createElement("canvas");
                canvas.width = 32;
                canvas.height = 32;
                const ctx = canvas.getContext("2d");
                const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
                gradient.addColorStop(0, "rgba(56, 189, 248, 1)");
                gradient.addColorStop(0.3, "rgba(99, 102, 241, 0.7)");
                gradient.addColorStop(0.8, "rgba(168, 85, 247, 0.2)");
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, 32, 32);
                return new THREE.CanvasTexture(canvas);
            };

            const particleMaterial = new THREE.PointsMaterial({
                size: 1.4,
                map: createParticleTexture(),
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const particles = new THREE.Points(particleGeometry, particleMaterial);
            scene.add(particles);

            // 2) Hero 3D Geometric Floating Core
            const coreGroup = new THREE.Group();
            coreGroup.position.set(0, 0, 5);

            // Wireframe Icosahedron
            const icoGeo = new THREE.IcosahedronGeometry(7.5, 1);
            const icoMat = new THREE.MeshStandardMaterial({
                color: 0x38bdf8,
                wireframe: true,
                transparent: true,
                opacity: 0.25,
                emissive: 0x0284c7,
                emissiveIntensity: 0.3
            });
            const icosahedron = new THREE.Mesh(icoGeo, icoMat);
            coreGroup.add(icosahedron);

            // Inner Glowing Sphere
            const innerGeo = new THREE.SphereGeometry(3.5, 24, 24);
            const innerMat = new THREE.MeshBasicMaterial({
                color: 0x818cf8,
                wireframe: true,
                transparent: true,
                opacity: 0.2
            });
            const innerSphere = new THREE.Mesh(innerGeo, innerMat);
            coreGroup.add(innerSphere);

            // Orbital Ring
            const ringGeo = new THREE.TorusGeometry(11, 0.08, 16, 100);
            const ringMat = new THREE.MeshBasicMaterial({
                color: 0x38bdf8,
                transparent: true,
                opacity: 0.35
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = Math.PI / 3;
            coreGroup.add(ring);

            scene.add(coreGroup);

            // Mouse Tracking with Inertia
            let mouseX = 0;
            let mouseY = 0;
            let targetX = 0;
            let targetY = 0;
            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;

            document.addEventListener("mousemove", (event) => {
                mouseX = (event.clientX - windowHalfX) * 0.001;
                mouseY = (event.clientY - windowHalfY) * 0.001;
            }, { passive: true });

            // Handle Resize
            const onResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };
            window.addEventListener("resize", onResize);

            // Animation Loop
            let clock = new THREE.Clock();
            const animate = () => {
                requestAnimationFrame(animate);
                const elapsedTime = clock.getElapsedTime();

                // Smooth mouse interpolation
                targetX += (mouseX - targetX) * 0.05;
                targetY += (mouseY - targetY) * 0.05;

                // Subtle camera drift based on cursor
                camera.position.x += (targetX * 25 - camera.position.x) * 0.05;
                camera.position.y += (-targetY * 25 - camera.position.y) * 0.05;
                camera.lookAt(scene.position);

                // Rotate particles slowly
                particles.rotation.y = elapsedTime * 0.03;
                particles.rotation.x = elapsedTime * 0.015;

                // Rotate floating 3D geometric core
                icosahedron.rotation.x = elapsedTime * 0.18;
                icosahedron.rotation.y = elapsedTime * 0.22;
                innerSphere.rotation.x = -elapsedTime * 0.25;
                innerSphere.rotation.y = -elapsedTime * 0.3;
                ring.rotation.z = elapsedTime * 0.12;

                // Float core up and down gently
                coreGroup.position.y = Math.sin(elapsedTime * 0.8) * 1.5;

                renderer.render(scene, camera);
            };

            animate();

        } catch (e) {
            console.warn("WebGL initialization note:", e);
        }
    };

    initThreeScene();


    /* ==========================================================================
       2. DYNAMIC TYPEWRITER EFFECT
       ========================================================================== */
    const roles = [
        "Java Developer",
        "FastAPI & Backend Specialist",
        "React & Full-Stack Builder",
        "AI Systems & LLM Integrator",
        "Problem Solver & DSA Enthusiast"
    ];

    const typingElement = document.getElementById("typing");
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const typeRoles = () => {
        if (!typingElement) return;

        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 110;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1800; // Pause at full word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 400; // Pause before next word
        }

        setTimeout(typeRoles, typingSpeed);
    };

    typeRoles();


    /* ==========================================================================
       3. 3D CARD TILT EFFECT (Vanilla Physics)
       ========================================================================== */
    const tiltCards = document.querySelectorAll(".tilt-card");

    tiltCards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -6; // Max 6 deg
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
        });
    });


    /* ==========================================================================
       4. INTERACTIVE RESUME MODAL & PRINTING
       ========================================================================== */
    const resumeModal = document.getElementById("resumeModal");
    const openResumeModalBtn = document.getElementById("openResumeModalBtn");
    const openModalBtnSecondary = document.getElementById("openModalBtnSecondary");
    const navResumeBtn = document.getElementById("navResumeBtn");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalResumeContent = document.getElementById("modalResumeContent");
    const printableResumeArea = document.getElementById("printableResumeArea");
    const printResumeBtn = document.getElementById("printResumeBtn");
    const modalPrintBtn = document.getElementById("modalPrintBtn");

    const openResumeModal = () => {
        if (!resumeModal || !printableResumeArea || !modalResumeContent) return;

        // Clone resume sheet into modal body if empty
        if (!modalResumeContent.hasChildNodes() || modalResumeContent.children.length === 0) {
            const clone = printableResumeArea.cloneNode(true);
            clone.id = "modalPrintableArea";
            modalResumeContent.appendChild(clone);
        }

        resumeModal.classList.add("open");
        document.body.style.overflow = "hidden";
    };

    const closeResumeModal = () => {
        if (!resumeModal) return;
        resumeModal.classList.remove("open");
        document.body.style.overflow = "";
    };

    if (openResumeModalBtn) openResumeModalBtn.addEventListener("click", openResumeModal);
    if (openModalBtnSecondary) openModalBtnSecondary.addEventListener("click", openResumeModal);
    if (navResumeBtn) {
        navResumeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openResumeModal();
        });
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeResumeModal);

    // Close on overlay click
    if (resumeModal) {
        resumeModal.addEventListener("click", (e) => {
            if (e.target === resumeModal) closeResumeModal();
        });
    }

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && resumeModal && resumeModal.classList.contains("open")) {
            closeResumeModal();
        }
    });

    // Print / Save as PDF handlers
    const handlePrint = () => {
        window.print();
    };

    if (printResumeBtn) printResumeBtn.addEventListener("click", handlePrint);
    if (modalPrintBtn) modalPrintBtn.addEventListener("click", handlePrint);


    /* ==========================================================================
       5. CLIPBOARD COPY & TOAST NOTIFICATION
       ========================================================================== */
    const toast = document.getElementById("toastNotification");
    const toastMessage = document.getElementById("toastMessage");
    let toastTimeout;

    const showToast = (message) => {
        if (!toast || !toastMessage) return;
        toastMessage.textContent = message;
        toast.classList.add("show");

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove("show");
        }, 3200);
    };

    // Copy Email
    const copyEmailBtn = document.getElementById("copyEmailBtn");
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", () => {
            const email = "navinbalaji.m@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                showToast("Email copied to clipboard: " + email);
            }).catch(() => {
                showToast("Email: " + email);
            });
        });
    }

    // Copy Summary
    const copySummaryBtn = document.getElementById("copySummaryBtn");
    if (copySummaryBtn) {
        copySummaryBtn.addEventListener("click", () => {
            const summaryText = "Information Technology undergraduate with a foundation in Java, object-oriented programming, data structures, and algorithms. Project experience includes building a real-time communication alignment platform and an employability outcomes measurement system with skill-gap detection and placement forecasting. Interested in software engineering, backend development, and practical problem-solving.";
            navigator.clipboard.writeText(summaryText).then(() => {
                showToast("Resume summary copied to clipboard!");
            }).catch(() => {
                showToast("Could not copy summary.");
            });
        });
    }


    /* ==========================================================================
       6. SKILL FILTERING TABS
       ========================================================================== */
    const filterBtns = document.querySelectorAll(".filter-btn");
    const skillCategories = document.querySelectorAll(".skill-category");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");

            skillCategories.forEach((cat) => {
                const categoryType = cat.getAttribute("data-category");
                if (filter === "all" || categoryType === filter) {
                    cat.style.display = "block";
                    cat.style.animation = "fadeIn 0.4s ease";
                } else {
                    cat.style.display = "none";
                }
            });
        });
    });


    /* ==========================================================================
       7. NAVBAR SCROLL, ACTIVE SECTIONS & MOBILE DRAWER
       ========================================================================== */
    const navbar = document.getElementById("navbar");
    const mobileToggle = document.getElementById("mobileToggle");
    const navLinks = document.getElementById("navLinks");
    const allNavAnchors = document.querySelectorAll(".nav-link");
    const backToTopBtn = document.getElementById("backToTopBtn");
    const sections = document.querySelectorAll("section[id]");

    // Mobile Drawer
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", () => {
            mobileToggle.classList.toggle("active");
            navLinks.classList.toggle("open");
        });

        // Close when clicking any nav item
        allNavAnchors.forEach(link => {
            link.addEventListener("click", () => {
                mobileToggle.classList.remove("active");
                navLinks.classList.remove("open");
            });
        });
    }

    // Window Scroll Events
    window.addEventListener("scroll", () => {
        const scrollY = window.pageYOffset;

        // Navbar blur on scroll
        if (navbar) {
            if (scrollY > 60) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }

        // Back to Top Visibility
        if (backToTopBtn) {
            if (scrollY > 400) {
                backToTopBtn.classList.add("visible");
            } else {
                backToTopBtn.classList.remove("visible");
            }
        }

        // Active Section Indicator
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 140;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        allNavAnchors.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    }, { passive: true });

    // Back to top click
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    /* ==========================================================================
       8. INTERACTIVE CONTACT FORM HANDLER
       ========================================================================== */
    const contactForm = document.getElementById("contactForm");
    const formSubmitBtn = document.getElementById("formSubmitBtn");

    if (contactForm && formSubmitBtn) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("senderName").value;
            const originalText = formSubmitBtn.innerHTML;

            formSubmitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            formSubmitBtn.disabled = true;

            setTimeout(() => {
                formSubmitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message Sent!';
                showToast(`Thank you, ${name}! Your message has been sent to Navinbalaji.`);
                contactForm.reset();

                setTimeout(() => {
                    formSubmitBtn.innerHTML = originalText;
                    formSubmitBtn.disabled = false;
                }, 3000);
            }, 1000);
        });
    }

});
