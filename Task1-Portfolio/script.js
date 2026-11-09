/**
 * NAVINBALAJI M | ULTRA-PREMIUM MNC DESIGNER PORTFOLIO
 * Three.js Iridescent Chromatic Torus Knot, Dynamic RGB Lights, Spotlight Cards,
 * Magnetic Button Physics, Animated Counters & ATS Resume Subsystem
 */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================================
       1. CUSTOM GLOWING AURORA CURSOR TRACKER
       ========================================================================== */
    const cursorDot = document.getElementById("cursorDot");
    const cursorGlow = document.getElementById("cursorGlow");

    let mouseClientX = window.innerWidth / 2;
    let mouseClientY = window.innerHeight / 2;
    let dotX = mouseClientX;
    let dotY = mouseClientY;
    let glowX = mouseClientX;
    let glowY = mouseClientY;

    if (cursorDot && cursorGlow) {
        window.addEventListener("mousemove", (e) => {
            mouseClientX = e.clientX;
            mouseClientY = e.clientY;
        }, { passive: true });

        const updateCursor = () => {
            // Dot follows sharply
            dotX += (mouseClientX - dotX) * 0.5;
            dotY += (mouseClientY - dotY) * 0.5;
            cursorDot.style.left = `${dotX}px`;
            cursorDot.style.top = `${dotY}px`;

            // Glow follows with fluid lag
            glowX += (mouseClientX - glowX) * 0.12;
            glowY += (mouseClientY - glowY) * 0.12;
            cursorGlow.style.left = `${glowX}px`;
            cursorGlow.style.top = `${glowY}px`;

            requestAnimationFrame(updateCursor);
        };
        updateCursor();

        // Cursor scaling on interactive elements
        const interactiveTargets = document.querySelectorAll("a, button, .spotlight-card, .skill-tile, .stat-pill");
        interactiveTargets.forEach(el => {
            el.addEventListener("mouseenter", () => {
                cursorDot.style.width = "14px";
                cursorDot.style.height = "14px";
                cursorGlow.style.transform = "translate(-50%, -50%) scale(1.3)";
            });
            el.addEventListener("mouseleave", () => {
                cursorDot.style.width = "6px";
                cursorDot.style.height = "6px";
                cursorGlow.style.transform = "translate(-50%, -50%) scale(1)";
            });
        });
    }


    /* ==========================================================================
       2. THREE.JS IRIDESCENT CHROMATIC 3D WEBGL SCENE
       ========================================================================== */
    const initThreeMasterpiece = () => {
        const canvas = document.getElementById("three-canvas");
        if (!canvas || typeof THREE === "undefined") {
            console.log("Three.js not loaded or canvas missing; graceful fallback to CSS auroras.");
            return;
        }

        try {
            // 1. Scene, Camera, Renderer
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 32;

            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true,
                antialias: true,
                powerPreference: "high-performance"
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // 2. Ambient & Multi-Point Dynamic Chromatic Lights
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambientLight);

            // Orbiting Point Lights (Cyan, Magenta, Violet, Amber)
            const lightCyan = new THREE.PointLight(0x00f5ff, 3.5, 75);
            scene.add(lightCyan);

            const lightMagenta = new THREE.PointLight(0xff007f, 3.5, 75);
            scene.add(lightMagenta);

            const lightViolet = new THREE.PointLight(0x8a2be2, 3.0, 75);
            scene.add(lightViolet);

            const lightAmber = new THREE.PointLight(0xffaa00, 2.5, 65);
            scene.add(lightAmber);

            // 3. Central Masterpiece: Iridescent Fluid Torus Knot
            const knotGroup = new THREE.Group();
            knotGroup.position.set(0, 0, 4);

            const knotGeo = new THREE.TorusKnotGeometry(6.5, 1.85, 160, 32, 2, 3);
            const knotMat = new THREE.MeshPhysicalMaterial({
                color: 0x16182e,
                metalness: 0.9,
                roughness: 0.12,
                clearcoat: 1.0,
                clearcoatRoughness: 0.08,
                reflectivity: 0.95
            });
            const torusKnot = new THREE.Mesh(knotGeo, knotMat);
            knotGroup.add(torusKnot);

            // Outer Holographic Wireframe Cage
            const cageGeo = new THREE.IcosahedronGeometry(13, 1);
            const cageMat = new THREE.MeshBasicMaterial({
                color: 0x00f5ff,
                wireframe: true,
                transparent: true,
                opacity: 0.15
            });
            const cage = new THREE.Mesh(cageGeo, cageMat);
            knotGroup.add(cage);

            // Orbiting Crystal Satellites
            const satellites = [];
            const satColors = [0x00f5ff, 0xff007f, 0x8a2be2, 0x00f5a0];
            const satRadii = [10.5, 12, 11, 13.5];

            for (let i = 0; i < 4; i++) {
                const satGeo = new THREE.OctahedronGeometry(0.85);
                const satMat = new THREE.MeshStandardMaterial({
                    color: satColors[i],
                    emissive: satColors[i],
                    emissiveIntensity: 0.6,
                    metalness: 0.8,
                    roughness: 0.2
                });
                const satMesh = new THREE.Mesh(satGeo, satMat);
                satellites.push({
                    mesh: satMesh,
                    radius: satRadii[i],
                    speed: 0.6 + i * 0.2,
                    offset: (i * Math.PI) / 2
                });
                knotGroup.add(satMesh);
            }

            scene.add(knotGroup);

            // 4. Multi-Layered Chromatic Particle Field
            const particleCount = 1000;
            const particleGeo = new THREE.BufferGeometry();
            const pPositions = new Float32Array(particleCount * 3);
            const pColors = new Float32Array(particleCount * 3);

            const palette = [
                new THREE.Color(0x00f5ff), // Cyan
                new THREE.Color(0xff007f), // Magenta
                new THREE.Color(0x8a2be2), // Violet
                new THREE.Color(0x00f5a0), // Emerald
                new THREE.Color(0xffaa00)  // Amber
            ];

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                pPositions[i3] = (Math.random() - 0.5) * 140;
                pPositions[i3 + 1] = (Math.random() - 0.5) * 140;
                pPositions[i3 + 2] = (Math.random() - 0.5) * 80;

                const c = palette[Math.floor(Math.random() * palette.length)];
                pColors[i3] = c.r;
                pColors[i3 + 1] = c.g;
                pColors[i3 + 2] = c.b;
            }

            particleGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
            particleGeo.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

            // Circular Glow Texture Generator
            const createGlowTexture = () => {
                const pCanvas = document.createElement("canvas");
                pCanvas.width = 32;
                pCanvas.height = 32;
                const ctx = pCanvas.getContext("2d");
                const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
                grad.addColorStop(0, "rgba(255, 255, 255, 1)");
                grad.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
                grad.addColorStop(0.7, "rgba(255, 255, 255, 0.2)");
                grad.addColorStop(1, "rgba(0, 0, 0, 0)");
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, 32, 32);
                return new THREE.CanvasTexture(pCanvas);
            };

            const particleMat = new THREE.PointsMaterial({
                size: 1.5,
                map: createGlowTexture(),
                vertexColors: true,
                transparent: true,
                opacity: 0.85,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const particles = new THREE.Points(particleGeo, particleMat);
            scene.add(particles);

            // 5. Mouse Interaction with Inertia
            let mouseNormX = 0;
            let mouseNormY = 0;
            let targetNormX = 0;
            let targetNormY = 0;

            window.addEventListener("mousemove", (e) => {
                mouseNormX = (e.clientX / window.innerWidth) * 2 - 1;
                mouseNormY = -(e.clientY / window.innerHeight) * 2 + 1;
            }, { passive: true });

            // Handle Resize
            const onResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };
            window.addEventListener("resize", onResize);

            // 6. Animation Loop
            const clock = new THREE.Clock();

            const renderFrame = () => {
                requestAnimationFrame(renderFrame);
                const t = clock.getElapsedTime();

                // Smooth mouse interpolation
                targetNormX += (mouseNormX - targetNormX) * 0.04;
                targetNormY += (mouseNormY - targetNormY) * 0.04;

                // Orbit lights around the central knot in 3D
                lightCyan.position.set(
                    Math.cos(t * 0.9) * 16,
                    Math.sin(t * 0.8) * 14,
                    Math.sin(t * 0.7) * 12 + 6
                );
                lightMagenta.position.set(
                    Math.cos(t * 0.7 + 2) * 16,
                    Math.sin(t * 0.9 + 1) * 14,
                    Math.cos(t * 0.6) * 12 + 6
                );
                lightViolet.position.set(
                    Math.sin(t * 0.6 + 4) * 18,
                    Math.cos(t * 0.8 + 2) * 15,
                    Math.sin(t * 0.9) * 10 + 4
                );
                lightAmber.position.set(
                    Math.cos(t * 0.8 + 5) * 14,
                    Math.sin(t * 0.6 + 3) * 16,
                    Math.cos(t * 0.8) * 12 + 4
                );

                // Rotate knot smoothly with mouse tilt
                torusKnot.rotation.x = t * 0.22 + targetNormY * 0.5;
                torusKnot.rotation.y = t * 0.28 + targetNormX * 0.5;

                cage.rotation.x = -t * 0.12;
                cage.rotation.y = t * 0.15;

                // Orbit Satellites
                satellites.forEach((sat) => {
                    const angle = t * sat.speed + sat.offset;
                    sat.mesh.position.set(
                        Math.cos(angle) * sat.radius,
                        Math.sin(angle * 1.2) * (sat.radius * 0.6),
                        Math.sin(angle) * sat.radius
                    );
                    sat.mesh.rotation.x = t * 1.5;
                    sat.mesh.rotation.y = t * 2.0;
                });

                // Gentle vertical floating of knot group
                knotGroup.position.y = Math.sin(t * 0.7) * 1.2;

                // Slow rotation of particles
                particles.rotation.y = t * 0.025;
                particles.rotation.x = t * 0.015;

                // Camera drift based on cursor
                camera.position.x += (targetNormX * 12 - camera.position.x) * 0.03;
                camera.position.y += (targetNormY * 8 - camera.position.y) * 0.03;
                camera.lookAt(0, 0, 0);

                renderer.render(scene, camera);
            };

            renderFrame();

        } catch (err) {
            console.warn("WebGL visual note:", err);
        }
    };

    initThreeMasterpiece();


    /* ==========================================================================
       3. INTERACTIVE SPOTLIGHT CARD TRACKER
       ========================================================================== */
    const spotlightCards = document.querySelectorAll(".spotlight-card");

    spotlightCards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });


    /* ==========================================================================
       4. MAGNETIC BUTTON PHYSICS
       ========================================================================== */
    const magneticBtns = document.querySelectorAll(".magnetic-btn");

    magneticBtns.forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.24}px, ${y * 0.24}px)`;
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translate(0px, 0px)";
        });
    });


    /* ==========================================================================
       5. DYNAMIC TYPEWRITER CAROUSEL
       ========================================================================== */
    const roles = [
        "Java Developer",
        "FastAPI & Backend Specialist",
        "React & Full-Stack Builder",
        "AI Systems & LLM Integrator",
        "Problem Solver & DSA Enthusiast"
    ];

    const typingElement = document.getElementById("typing");
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    const runTypewriter = () => {
        if (!typingElement) return;

        const currentRole = roles[roleIdx];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
            typeSpeed = 45;
        } else {
            typingElement.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIdx === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at completed word
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            typeSpeed = 350; // Pause before next word
        }

        setTimeout(runTypewriter, typeSpeed);
    };

    runTypewriter();


    /* ==========================================================================
       6. ANIMATED COUNTER STATISTICS (Intersection Observer)
       ========================================================================== */
    const counters = document.querySelectorAll(".counter");
    let countersAnimated = false;

    const animateCounters = () => {
        counters.forEach((counter) => {
            const target = parseFloat(counter.getAttribute("data-target"));
            const decimals = parseInt(counter.getAttribute("data-decimals") || "0", 10);
            const duration = 1800; // ms
            const startTime = performance.now();

            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out expo
                const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const currentVal = easeProgress * target;

                counter.textContent = currentVal.toFixed(decimals);

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target.toFixed(decimals);
                }
            };

            requestAnimationFrame(updateCount);
        });
    };

    const metricsStrip = document.querySelector(".metrics-lux-strip");
    if (metricsStrip) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(metricsStrip);
    }


    /* ==========================================================================
       7. INTERACTIVE ATS RESUME MODAL & PRINTING
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
            clone.id = "modalClonedResume";
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

    // Native Print triggers
    const triggerPrint = () => {
        window.print();
    };

    if (printResumeBtn) printResumeBtn.addEventListener("click", triggerPrint);
    if (modalPrintBtn) modalPrintBtn.addEventListener("click", triggerPrint);


    /* ==========================================================================
       8. TOAST NOTIFICATIONS & CLIPBOARD TRIGGERS
       ========================================================================== */
    const toast = document.getElementById("toastNotification");
    const toastMessage = document.getElementById("toastMessage");
    let toastTimer;

    const showToast = (message) => {
        if (!toast || !toastMessage) return;
        toastMessage.textContent = message;
        toast.classList.add("show");

        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 3400);
    };

    // Copy Email Action
    const copyEmailBtn = document.getElementById("copyEmailBtn");
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", () => {
            const email = "navinbalaji.m@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                showToast("Email copied: " + email);
            }).catch(() => {
                showToast("Email: " + email);
            });
        });
    }

    // Copy Summary Action
    const copySummaryBtn = document.getElementById("copySummaryBtn");
    if (copySummaryBtn) {
        copySummaryBtn.addEventListener("click", () => {
            const summaryText = "Information Technology undergraduate with a solid foundation in Java, object-oriented programming, data structures, and algorithms. Project experience includes building a real-time communication alignment platform and an employability outcomes measurement system with skill-gap detection and placement forecasting. Interested in software engineering, backend development, and practical problem-solving.";
            navigator.clipboard.writeText(summaryText).then(() => {
                showToast("Resume summary copied to clipboard!");
            }).catch(() => {
                showToast("Summary copied.");
            });
        });
    }


    /* ==========================================================================
       9. SKILLS DISCIPLINE FILTER TABS
       ========================================================================== */
    const skillTabs = document.querySelectorAll(".skill-tab");
    const skillGroups = document.querySelectorAll(".skill-group");

    skillTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            skillTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const filter = tab.getAttribute("data-filter");

            skillGroups.forEach((group) => {
                const groupType = group.getAttribute("data-category");
                if (filter === "all" || groupType === filter) {
                    group.style.display = "block";
                    group.style.opacity = "1";
                    group.style.transform = "translateY(0)";
                } else {
                    group.style.display = "none";
                }
            });
        });
    });


    /* ==========================================================================
       10. NAVBAR SCROLL, ACTIVE SECTION SPY & MOBILE DRAWER
       ========================================================================== */
    const navbar = document.getElementById("navbar");
    const mobileToggle = document.getElementById("mobileToggle");
    const navLinks = document.getElementById("navLinks");
    const navAnchors = document.querySelectorAll(".nav-link");
    const backToTopBtn = document.getElementById("backToTopBtn");
    const sections = document.querySelectorAll("section[id]");

    // Mobile Drawer Toggle
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", () => {
            mobileToggle.classList.toggle("active");
            navLinks.classList.toggle("open");
        });

        navAnchors.forEach(link => {
            link.addEventListener("click", () => {
                mobileToggle.classList.remove("active");
                navLinks.classList.remove("open");
            });
        });
    }

    // Scroll Events
    window.addEventListener("scroll", () => {
        const scrollY = window.pageYOffset;

        // Navbar blur on scroll
        if (navbar) {
            if (scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }

        // Back to Top button visibility
        if (backToTopBtn) {
            if (scrollY > 400) {
                backToTopBtn.classList.add("visible");
            } else {
                backToTopBtn.classList.remove("visible");
            }
        }

        // Active Section Spy
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navAnchors.forEach(link => {
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
       11. INTERACTIVE MESSAGE TRANSMIT FORM
       ========================================================================== */
    const contactForm = document.getElementById("contactForm");
    const formSubmitBtn = document.getElementById("formSubmitBtn");

    if (contactForm && formSubmitBtn) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("senderName").value;
            const originalHTML = formSubmitBtn.innerHTML;

            formSubmitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Transmitting...</span>';
            formSubmitBtn.disabled = true;

            setTimeout(() => {
                formSubmitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>Message Transmitted!</span>';
                showToast(`Thank you, ${name}! Your inquiry has been sent to Navinbalaji.`);
                contactForm.reset();

                setTimeout(() => {
                    formSubmitBtn.innerHTML = originalHTML;
                    formSubmitBtn.disabled = false;
                }, 3200);
            }, 1200);
        });
    }

});
