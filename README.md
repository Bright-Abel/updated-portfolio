useLayoutEffect(() => {
const sections = gsap.utils.toArray<HTMLElement>('.stack-section');

    sections.forEach((section, i) => {
      // Check if section is taller than the viewport
      const isTall = section.offsetHeight > window.innerHeight;

      ScrollTrigger.create({
        trigger: section,
        // If tall: start pinning when the BOTTOM of the section hits the BOTTOM of viewport
        // If short: start pinning when the TOP hits the TOP
        start: isTall ? 'bottom bottom' : 'top top',

        // It stays pinned until the NEXT section reaches the top
        // We use a large end value or pin it until the end of the page
        end: 'max',

        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };

}, []);
