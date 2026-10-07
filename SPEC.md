# SPEC: Vaibhav Gunaga Portfolio (design source = PRD 01)

## §0 GLOBAL

TOKENS
--color-primary:#F63E04; --color-black:#0A0A0A; --color-grey:#686868; --color-white:#FFFFFF;
--color-bg:#F8F8F8; --color-blush:#F8EEEA; --color-blush-card:#F8DAD2;
--hero-from:#C6490F; --hero-mid:#E8501F; --hero-to:#F56030;
--radius-card:18px; --radius-btn:8px.

FONTS: Sora (display/headings) + Geist (body/UI). Weights 400/500/600 (700 only for hero name and footer wordmark). No other fonts. No monospace.

HEADINGS: UPPERCASE, Sora 600, letter-spacing -0.04em, line-height 0.95, TWO-TONE (black #0A0A0A + grey #686868 on the last words). H2 size clamp(40px,6vw,96px).
BODY: Geist 400, clamp(15px,1.1vw,18px), line-height 1.5. LABELS/TAGS: 11–12px uppercase, tracking .04em, Geist.

GRID: desktop frame 1600px, 12 columns, column 86px, gutter 24px, side margin 152px. Tablet (810–1199): margin 48px. Phone (<810): margin 20px. Section vertical padding 140px desktop / 72px phone.

BACKGROUND MAP (strict)
- Header + Hero: orange gradient linear-gradient(135deg,#C6490F 0%,#E8501F 45%,#F56030 100%) + 6% grain. FULL WIDTH. No dark/maroon frame, no glow streaks.
- ALL other sections: page background #F8F8F8 (light theme).
- Dark #0A0A0A is used ONLY on small cards: "Let's Talk" card, Process cards, Pricing cards, Stack "Deployment" card.
- Contact: rounded-16px orange-gradient panel (#F63E04→#FF8A5C) on the light page, with a WHITE form card inside.

MOTIFS: crosshair "+" marks; ✻ asterisk (8-point); ◆ small orange diamond before section labels; orange rounded-8 square button with white ↗ (40px); pill Tag (bg #EDEDED, orange ✻, 11px uppercase text); 1px hairline dividers #DADADA.

FORBIDDEN: dark/black full-width sections, maroon, glow streaks, monospace fonts, gradient text, glassmorphism, green status dots, "available for work" pills, "years experience" badges, extra buttons not listed, headline sentences in the hero, invented copy/stats/features/testimonials/prices/ratings.

DATA: only /content/content.ts. Allowed stats: 7 Projects completed, 3 Clients served. Label: "Early-career developer".
SAMPLE_SECTIONS: if SHOW_SAMPLE_SECTIONS=true, sections lacking real data render neutral sample text with a small grey "SAMPLE" chip at the top-right; if false they render null.

BASE COMPONENTS: Button (primary orange w/ white text, dark, outline; radius 8), ArrowSquare, Tag, SectionLabel (◆ + text), Heading (two-tone props), Chip, Marquee, Reveal (fade+translateY 24px, 0.8s, ease [.22,1,.36,1], once), CountUp. Lenis smooth scroll. Honor prefers-reduced-motion.

INTRO GATE: components/intro/IntroGate.tsx shows a full-screen scroll-morph intro (components/ui/scroll-morph-hero.tsx, light #F8F8F8 background, cards from content.ts) before the page; it lifts away to reveal the unchanged Hero. Do not modify the intro or the hero when editing other sections.

## §1 HEADER (inside the orange hero, transparent, fixed)
- Left: wordmark "Vaibhav®" (Sora 600 24px white, ® small superscript).
- Center (≥1200px): Home, About, Work (5), Services (4), Contact. White Geist Medium 16px. Counts = muted 11px superscripts (60% opacity). Active link: 1px WHITE underline. Hover underline animates left to right.
- Right: hamburger = two 2px white lines, 32px wide, 8px apart. Opens full-screen overlay: bg #0A0A0A, huge uppercase links (Sora 600 clamp(48px,8vw,120px)) with orange index numbers, socials (GitHub, LinkedIn, Instagram) and email at bottom; clip-path reveal 0.6s; body scroll lock; focus trap; Esc closes. NOTHING else on the right (no CTA button).
- After scrolling past hero: bg rgba(248,248,248,.8)+blur, text and hamburger become #0A0A0A.
- Tablet/phone: logo + hamburger only.

## §2 HERO (id=home)
- Full-width orange gradient section (aspect ≈ 4:3 desktop, min-height min(100vh, 75vw)), overflow hidden, relative.
- GRID MARKS: 1px rgba(255,255,255,.15) lines: 3 vertical (25/50/75%) and horizontal lines at ≈20/47/77/107% down; white 12px "+" at intersections and at four corners inset 40px. Decorative, pointer-events none.
- GHOST NAME: "VAIBHAV", Sora 700, clamp(120px,17vw,280px), tracking -0.05em, rgba(255,255,255,.08), left, ≈24% down, behind portrait.
- PORTRAIT: profile.images.heroPortrait transparent-PNG CUT-OUT (no card, no frame, no border), side profile, anchored bottom, centered ≈50–55% horizontally, height ≈100% of hero, over ghost name, under solid name; soft bottom fade into orange; next/image priority. If PNG missing: placeholder silhouette + TODO comment, still no card.
- TAGLINE: left ≈36–41% down; uppercase white Geist Medium 18px; max-width 340px; line-height 1.4; first line indented 40px: "I BUILD DIGITAL EXPERIENCES FROM CONCEPT TO DEPLOYMENT."
- NAME BLOCK: bottom-left starting ≈73% down. "©2026" Sora Medium 28px white; below it solid white "VAIBHAV" Sora 700 clamp(96px,14vw,230px), tracking -0.05em, line-height .85, overlapping the portrait shoulder (above portrait).
- FEATURED CARD: right side (left edge ≈80% width, right ≈96%, top ≈35%). White card ≈240×260, radius 6, padding 8. Image = projects[0].cover (radius 4). Row: orange ✻ + "SHADOWGUARD" left, "/Cybersecurity" grey right (12px). Hover: translateY(-6px) rotate(-1deg) + shadow. Links to /work/shadowguard.
- LET'S TALK CARD: bottom-right (left ≈72%, right ≈96%, top ≈76%). bg #0A0A0A, radius 6, ≈360×120, padding 12. Left 100px avatar (radius 4). Middle: "Let's Talk" (grey 14px), "Vaibhav Gunaga" (white Medium 18px), "Full-Stack Developer" (grey 14px). Top-right tiny white ✻. Bottom-right 44px white square with black ↗ → scroll to #contact.
- MOTION: load stagger (ghost fade, portrait slide-up 40px, name mask reveal, cards float in 0.15s apart); mouse parallax portrait ±12px, ghost ±24px opposite (off on touch/reduced-motion).
- Tablet: ©2026+name at top under header, portrait centered, cards stacked bottom-right. Phone: order = ©2026+name, tagline, portrait (cut-out on orange), Let's Talk card, featured card; grid lines 2×3.

## §3 TECH STRIP (replaces "Trusted by"; bg #F8F8F8; padding 56px)
Left label "BUILT WITH" (two lines, Geist Medium 16px uppercase, #0A0A0A). Marquee of text marks from content.ts stack (React, TypeScript, JavaScript, Node.js, Express, Supabase, MongoDB, Tailwind CSS, Git, GitHub, Vercel, Netlify) in #686868 Sora 500 24px separated by small ✻. No client logos.

## §4 IMPACT (id=about)
- Tag "✻ EARLY-CAREER DEVELOPER".
- Heading 3 lines: "MY WORK" (black) / "FROM CONCEPT" (black) / "TO DEPLOYMENT" (grey). Sora 600 uppercase clamp(56px,7vw,112px). Line-mask reveal.
- Large light-grey (#D9D9D9) 8-point asterisk (≈120px) rotating 20s linear infinite, center-right.
- Portrait image (≈220×300, radius 6, "+" marks at 4 corners) top-right; second image (≈280×360) lower-left, same style.
- Right text block: grey uppercase 14px bio (profile.bio) + location chip "Belagavi, Karnataka, India".
- Two white stat cards (radius 12, padding 24, 1px #EAEAEA): "7" + label "✻ PROJECTS COMPLETED"; "3" + label "✻ CLIENTS SERVED"; CountUp; Sora 600 56px numbers. Black pill button "Let's talk ↗" → #contact.

## §5 SERVICES (id=services)
- Tag "✻ OUR SERVICES". Heading starting col 4: "WHAT I" (black) / "CAN BUILD" (black) / "FOR YOU" (grey).
- 4 rows from content.ts services, separated by 1px #DADADA. 12-col grid: cols 1–2 number (01–04, grey 14px); cols 3–7 title (Sora 600 36px), description (grey 15px), Deliverables list with orange ↗ bullets, technology Chips (skip any containing "TODO_CONFIRM"); cols 9–12 SVG illustration (radius 8, bg #F8DAD2, 4:3).
- Hover: row bg white, title shifts right 8px and turns #F63E04, illustration scales 1.06, ArrowSquare appears at far right. Stagger reveal 0.1s.
- Illustrations (/public/illustrations, only #F63E04 #0A0A0A #F8DAD2 #FFFFFF, geometric): fullstack.svg (browser+server stack+database cylinder connected), uiux.svg (wireframe boxes → polished card+cursor), security.svg (shield with keyhole over file icon), deploy.svg (git branches → cloud with check).

## §6 PROJECTS (id=work)
- Tag "✻ PORTFOLIO". Heading "SELECTED" (black) / "PROJECTS." (grey).
- Masonry (12-col, radius 6, overflow hidden): row 1 large 7-col + small 4-col offset down 120px; row 2 full-width wide card (≈560px tall); row 3 small 4-col + large 6-col offset. Use the 5 projects.
- Caption under image: orange ✻ + title left; category grey right; StatusBadge only if `status` is set.
- Hover: custom cursor = 96px orange circle with white "VIEW"; image scale 1.05; caption title turns orange.
- Button "VIEW ALL PROJECTS" + orange ArrowSquare → /work.
- Routes: /work, /work/[slug] (generateStaticParams). tier "case-study" (ShadowGuard, QuantumShield, CocoCoastal, ClinicCortex) → CaseStudy template; tier "detail" (SurakshaSetu) → lighter DetailView. Each block (Overview, Problem, My role, What I built, Technologies, Evidence, Status, Learnings) renders ONLY if its field exists; otherwise show cover + summary + muted "Detailed case study coming soon."

## §7 PROCESS
- Tag "✻ MY DESIGN PROCESS". Centered heading: "DESIGN PROCESS" (black) / "THAT WORKS" (grey).
- 4 equal cards (gap 24, ≈300×300, bg #0A0A0A, radius 8, padding 24, column, justify-between). Top-left: orange ✻ icon ONLY (no numbers). Bottom: title (white Sora 600 18px uppercase) + description (#9A9A9A Geist 13px).
- Cards from content.ts process: Concept, Design, Build, Deploy. (Reference order Prototyping/Wireframing/UI Design/Improvement is replaced by these.)
- Hover: 1px #F63E04 border, ✻ rotates 90°, translateY(-6px). Stagger reveal. 2×2 tablet, 1 col phone.

## §8 RESULTS BENTO + VIDEO BANNER (id=stack)
- Tag "✻ WHY CHOOSE ME". Heading at col 4+: "FOCUSED ON" (black) / "DESIGN THAT" (black) / "DELIVERS RESULTS" (grey).
- Bento (4 cols, gap 16, radius 6):
  A white: label "✻ PROJECTS COMPLETED", big "7" (Sora 600 64px), small grey line "Built from concept to deployment."
  B white: label "✻ CLIENTS SERVED", big "3", small grey line.
  C tall (2 cols, blurred orange/white light-streak image bg): label "✻ TECH STACK" + Chips from content.ts stack (white pills). NO rating, NO "1.2k", NO stars unless real.
  D tall (orange-to-dark gradient image of the portrait silhouette): top "Vaibhav ®", bottom "FULL-STACK DEVELOPER" + tiny caption "Early-career developer."
  E white: orange bolt icon, "FAST & RELIABLE", short generic line "Built, tested and deployed with Git-based workflows."
- VIDEO BANNER (below, full container width, height 520, radius 12, warm orange portrait/streak image): centered white 64px circle with black play triangle and "Watch My Work" (white 14px); bottom-center "©2026 Vaibhav". Lightbox opens only if profile.videoUrl exists; otherwise render only when SHOW_SAMPLE_SECTIONS=true with the play button inert.
- Responsive: bento 2 cols → 1.

## §9 TESTIMONIALS (id=testimonials)
- Tag "✻ DESIGNS CLIENTS LOVE". Heading "WHAT MY" (black) / "CLIENTS SAY" (grey). Right-aligned caption (grey 11px uppercase): "CREATING THOUGHTFUL AND USER-FOCUSED DESIGNS THAT HELP BRANDS GROW."
- Full-bleed horizontal carousel; cards 340px wide, white, radius 8, padding 20, 1px #EEE; alternating layouts (A: reviewer top, stars+"+" row, quote bottom; B: quote top, stars+"+" row, reviewer bottom). Stars #F63E04. Drag/swipe snap, arrow keys, "+" expands card, autoplay 5s paused on hover.
- Data: content.ts testimonials. If empty and SHOW_SAMPLE_SECTIONS=true → 4 neutral placeholder cards ("Sample review: replace with a real client quote", "Client name", "Role") with SAMPLE chip. If empty and flag false → render null.

## §10 PRICING (id=pricing)
- Tag "✻ PRICING". Heading at col 4+: "SIMPLE PLANS" (black) / "FOR EVERY NEED" (grey). Top-right segmented toggle MONTHLY / PROJECT BASED (11px uppercase; active black bg white text).
- Two black (#0A0A0A) cards side by side, radius 8: LEFT (≈45%) chip "COMPLETE PACKAGE", title "PREMIUM DESIGN PACKAGE", rows "DELIVERY TIME" and "REVISIONS"; RIGHT (≈55%) chip "ONE-TIME PAYMENT", price, "/Project", feature list with orange ↗ bullets, "SATISFACTION GUARANTEE" note, full-width orange button "GET STARTED NOW ↗" → #contact.
- Data: content.ts plans. No real plans supplied → with SHOW_SAMPLE_SECTIONS=true show structure with "Price TBD", "TBD" and "Feature to be added" lines + SAMPLE chip; with false → render null. NEVER invent prices.

## §11 INSIGHTS (id=blog)
- Tag "✻ DESIGN INSIGHTS". Heading "LATEST DESIGN" (black) / "INSIGHTS" (grey). Right caption (grey 11px uppercase).
- Grid: 1 large card (7 cols, 16:10 image) + 2 small cards. Each: image, category chip, date, title (Sora 600), excerpt. Hover: image scale 1.04, title underline orange.
- Data: content.ts posts. Empty → sample cards ("Sample article title") with SAMPLE chip when flag true; null when false.

## §12 CONTACT (id=contact)
- Section bg #F8F8F8. ONE rounded-16 panel (padding 56) with orange gradient background (#F63E04→#FF8A5C, soft darker swirl shapes in CSS/SVG).
- Left: Tag "✻ GET IN TOUCH" (white 15% pill, Geist). Huge white heading Sora 600 uppercase clamp(56px,7vw,112px): "LET'S CREATE" / "TOGETHER". Line: "Have a project in mind? Send me a message." Then vvgunaga@gmail.com (mailto), +91 7483987523 (tel), "Belagavi, Karnataka, India", and GitHub/LinkedIn/Instagram links (white Geist 16px with line icons).
- Right: WHITE form card (radius 8, padding 28, width 420): title "Reach Out To Me" (Sora 600 20px #0A0A0A); fields Full Name, Email, Message (textarea); labels Geist Medium 12px #0A0A0A (not monospace); inputs 44px, bg #F8F8F8, border 1px #E5E5E5, radius 8, focus ring #F63E04; submit full-width orange button "SEND MESSAGE ↗". NO other fields.
- Logic: react-hook-form + zod; honeypot; Turnstile; POST /api/contact → validate → verify → rate-limit 5/hour/IP → insert into Supabase `contact_messages` (service role, server only) → optional email. aria-live success/error.

## §13 FOOTER
- bg #F8F8F8. Left: "Building digital experiences from concept to deployment." + email + phone. Columns (11px uppercase): Navigation (Home, About, Work, Services, Contact), Socials (GitHub, LinkedIn, Instagram).
- Giant wordmark "Vaibhav®": Sora 700, #0A0A0A, tracking -0.05em, fit-to-container-width (≈20vw), ® superscript in orange.
- Bottom: "© 2026 Vaibhav Gunaga. All rights reserved." grey 12px. No newsletter.
