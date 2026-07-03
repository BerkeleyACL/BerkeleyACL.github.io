# Autonomous Controls Laboratory Website Text Inventory

This README records the text content of the static ACL Berkeley website in this repository. It is intended as a reference for researchers, academic collaborators, and maintainers who need to review the site copy without opening each HTML file. It includes page metadata, visible page copy, links, non-empty accessibility and media labels, and source TODO/template comments from the HTML files.

Generated from the repo on 2026-07-02.

## Source files covered

| File | Page |
|---|---|
| `index.html` | Home |
| `home.html` | Redirect page |
| `research.html` | Research |
| `people.html` | People |
| `publications.html` | Publications |
| `news.html` | News |
| `contact.html` | Join & Contact |
| `projects/halo.html` | Project: HALO |
| `projects/qoco.html` | Project: QOCO |
| `projects/ct-scvx.html` | Project: Continuous-Time SCvx |
| `projects/cislunar.html` | Project: Cislunar Relative Motion |
| `projects/dlcvx.html` | Project: Discrete Lossless Convexification |
| `projects/specifications.html` | Project: Temporal & Logical Specifications |

## Site-wide repeated text

These strings are repeated across the main site layout rather than duplicated under every page below.

### Header and navigation

- Skip to main content
- Autonomous Controls Laboratory
- University of California, Berkeley
- Menu
- Home
- Research
- People
- Publications
- News
- Join & Contact

### Footer

- **Autonomous Controls Laboratory**
- Department of Mechanical Engineering University of California, Berkeley Berkeley, CA 94720
- **Site**
- Research
- People
- Publications
- Join & Contact
- **Elsewhere**
- Google Scholar
- GitHub
- Former site (UW)
- © 2026 Autonomous Controls Laboratory, UC Berkeley.

### Site-wide accessibility labels

- `nav` `aria-label`: Main navigation

## Page content

### Home (`index.html`)

#### Page metadata

- Title | Autonomous Controls Laboratory, UC Berkeley
- Description | The Autonomous Controls Laboratory at UC Berkeley develops convex-optimization-based methods for trajectory planning, robust control, and autonomous decision-making. Prof. Beh?et A??kme?e leads the lab.

#### Rendered text

- Now at UC Berkeley
- **Optimization-based autonomy for aerospace systems**
- We develop convex-optimization methods for trajectory planning, robust control, and optimal recursive decision-making. The applications span planetary landers and spacecraft swarms.
- Explore our research
- Join the lab
- **About the lab**
- The Autonomous Controls Laboratory (ACL) has moved to UC Berkeley after a decade at the University of Washington. Prof. Beh?et A??kme?e leads the group. The lab connects control theory and optimization with aerospace engineering. Its flight-hardware algorithms are designed for real-time execution and include provable guarantees.
- The lab has a theory-to-flight orientation. Lossless convexification and successive convexification, both developed in this research program, have informed planetary landing guidance and reusable rocket flight. The group also maintains open-source solvers and tools used outside the lab.
- **Research themes**
- Five threads run through the lab's work. Each combines rigorous theory with algorithms designed for real-time, onboard implementation.
- **Trajectory Optimization**
- Onboard trajectory generation in real time for landing, rendezvous, and proximity operations under hard state and control constraints.
- **First-Order Optimization Algorithms**
- Custom solvers, including the QOCO quadratic-objective conic optimizer, are built for reliable embedded deployment.
- **Robust Control**
- Feedback synthesis that guarantees performance and constraint satisfaction despite uncertainty, disturbances, and model error.
- **Optimal Recursive Decision-Making**
- Sequential decision-making under uncertainty, with convex formulations that make optimal policies computationally tractable.
- **Markov Decision Processes**
- Density control and policy synthesis for large-scale stochastic systems, including swarm guidance and probabilistic safety.
- Read more about our research
- **Recent news**
- Jan 2026 Skye received the 2025 AIAA Atmospheric Flight Mechanics Best Paper Award for AutoSCvx.
- Jan 2026 Sam won the Best Paper Award in the Guidance, Navigation and Control Graduate Student Paper Competition at SciTech 2026.
- Jan 2026 Chris passed his PhD candidacy exam. Congratulations!
- Oct 2025 Abhi successfully defended his dissertation.
- All news

#### Links

- Explore our research | `research.html`
- Join the lab | `contact.html`
- Prof. Behçet Açıkmeşe | `people.html`
- Read more about our research | `research.html`
- All news | `news.html`

#### Page-specific labels and media text

- `video` `aria-label`: Animated Autonomous Controls Lab logo
- `img` `alt`: Autonomous Controls Lab logo

### Redirect page (`home.html`)

#### Page metadata

- Title | Autonomous Controls Laboratory, UC Berkeley
- Meta refresh | 0; url=index.html
- Canonical | index.html

#### Rendered text

- The home page has moved. Continue to the Autonomous Controls Laboratory home page.

#### Links

- Continue to the Autonomous Controls Laboratory home page | `index.html`

#### Source comments and TODOs

- The home page lives at index.html (the web-standard name that servers serve automatically at "/"). This file just redirects anyone who types or links to home.html.

### Research (`research.html`)

#### Page metadata

- Title | Research, Autonomous Controls Laboratory, UC Berkeley
- Description | Research at the Autonomous Controls Laboratory covers trajectory optimization; first-order optimization algorithms; robust control; optimal recursive decision-making; and Markov decision processes.

#### Rendered text

- **Research**
- Provably correct, real-time algorithms for autonomous dynamical systems.
- **Research areas**
- **Trajectory Optimization**
- We study onboard computation of optimal trajectories for systems with nonconvex dynamics and constraints. Lossless convexification shows that selected nonconvex optimal control problems can be solved exactly through convex relaxations. Examples include fuel-optimal planetary landing with minimum-thrust and pointing constraints. Successive convexification (SCvx) extends the approach to nonlinear dynamics, including recent guarantees for continuous-time constraint satisfaction.
- **First-Order Optimization Algorithms**
- Flight-grade autonomy needs solvers with predictable runtime and limited memory use. The lab designs first-order methods and conic solvers for embedded platforms. QOCO, an open-source quadratic-objective conic optimizer, is one example.
- **Robust Control**
- Real systems face disturbances, model uncertainty, and actuation limits. The lab develops feedback synthesis methods that preserve constraint satisfaction under uncertainty. One example is robust fuel-optimal trajectory planning with feedback control.
- **Optimal Recursive Decision-Making**
- Many autonomy problems are sequential. Current decisions change what will be feasible later. The lab formulates recursive decision-making problems with temporal and logical specifications, then studies convex formulations that make optimal policies computationally tractable.
- **Markov Decision Processes**
- For large-scale stochastic systems, the lab studies density control and policy synthesis on Markov decision processes. Spacecraft and vehicle swarms are the motivating cases. The goal is probabilistic guidance with safety and convergence guarantees.
- **Selected projects**
- Click any project to see details, results, and media.
- **HALO: Hazard-Aware Landing Optimization**
- Coupled perception and trajectory optimization for safe landing site selection and divert guidance on hazardous terrain.
- Learn more
- **QOCO Solver**
- An open-source quadratic-objective conic optimizer designed for real-time, embedded trajectory optimization workloads.
- Learn more
- **Continuous-Time SCvx**
- Successive convexification with continuous-time constraint satisfaction and elimination of inter-sample constraint violations.
- Learn more
- **Cislunar Relative Motion**
- Impulsive relative motion control for rendezvous and proximity operations in cislunar space missions.
- Learn more
- **Discrete Lossless Convexification**
- Extending lossless convexification to discrete-time problems with pointing constraints.
- Learn more
- **Temporal & Logical Specifications**
- Optimization-based planning under rich mission specifications expressed in temporal and propositional logic.
- Learn more
- See Publications for papers associated with each project, and our GitHub organization for open-source code.

#### Links

- QOCO | `https://github.com/qoco-org/qoco`
- HALO: Hazard-Aware Landing Optimization | `projects/halo.html`
- QOCO Solver | `projects/qoco.html`
- Continuous-Time SCvx | `projects/ct-scvx.html`
- Cislunar Relative Motion | `projects/cislunar.html`
- Discrete Lossless Convexification | `projects/dlcvx.html`
- Temporal & Logical Specifications | `projects/specifications.html`
- Publications | `publications.html`
- GitHub organization | `https://github.com/UW-ACL`

### People (`people.html`)

#### Page metadata

- Title | People, Autonomous Controls Laboratory, UC Berkeley
- Description | People of the Autonomous Controls Laboratory at UC Berkeley: Prof. Behçet Açıkmeşe, current PhD students, and alumni.

#### Rendered text

- **People**
- The researchers behind the Autonomous Controls Laboratory.
- **Principal Investigator**
- BA
- **Prof. Behçet Açıkmeşe**
- Professor, Department of Mechanical Engineering, University of California, Berkeley
- Beh?et A??kme?e joins UC Berkeley from the University of Washington, where he was a professor in the William E. Boeing Department of Aeronautics & Astronautics. Before his faculty appointment, he worked as a senior technologist at NASA's Jet Propulsion Laboratory. His JPL work included guidance and control algorithms for planetary landing. One example is the flyaway control system used in the Mars Science Laboratory and Mars 2020 sky crane landings. His research centers on convex optimization for autonomous control. His lossless convexification theory supports modern onboard rocket landing guidance. He is a Fellow of the IEEE and the AIAA.
- Google Scholar · behcet@berkeley.edu
- **Current members**
- PhD students and researchers in the lab.
- SM
- **Skye Mceowen**
- PhD Candidate
- SB
- **Samuel Buckner**
- PhD Candidate
- SU
- **Samet Uzun**
- PhD Candidate
- CH
- **Chris Hayner**
- PhD Candidate
- GC
- **Govind Chari**
- PhD Student
- NP
- **Natalia Pavlasek**
- PhD Candidate
- AM
- **Avi Mittal**
- PhD Student
- JG
- **Jake Gonzales**
- PhD Student
- FS
- **Fabio Spada**
- PhD Student
- JG
- **Justin Ganiban**
- PhD Student
- CM
- **Carlos Morales**
- PhD Student
- JZ
- **Jason Zhou**
- PhD Student
- **Incoming PhD students**
- The lab is recruiting its first Berkeley cohort. New members will be announced here. Interested in joining?
- ?
- **Announcing soon**
- Incoming PhD Student, Fall 2026
- ?
- **Announcing soon**
- Incoming PhD Student, Fall 2026
- ?
- **This could be you**
- Apply to join the lab
- **Alumni**
- Lab alumni have gone on to faculty positions and leading roles in the aerospace industry.
- A
- **Abhi [Last name]**
- PhD 2025 · Now: [position]
- T
- **Taewan [Last name]**
- PhD 2025 · Now: [position]
- D
- **Dayou [Last name]**
- PhD 2025 · Now: [position]
- K
- **Kazu [Last name]**
- PhD 2024 · Now: [position]
- D
- **Dylan [Last name]**
- PhD 2024 · Now: [position]
- P
- **Purna [Last name]**
- PhD 2024 · Now: [position]
- The complete alumni record is being migrated from the previous lab website.

#### Links

- Google Scholar | `https://scholar.google.com/citations?user=YEdJKr8AAAAJ&hl=en`
- behcet@berkeley.edu | `mailto:behcet@berkeley.edu`
- Interested in joining? | `contact.html`
- Apply to join the lab | `contact.html`
- previous lab website | `https://uwacl.com/`

#### Source comments and TODOs

- TODO | confirm Berkeley email address once assigned
- TEMPLATE | copy this block for each new student and fill in initials, name, and role. Swap the avatar div for <img class="avatar" src="..." alt=""> once you have a photo.
- TODO | fill in full names and current positions, migrating the complete list from https://uwacl.com/
- TEMPLATE | one block per alum. Fill in initials, full name, graduation year, and current position.

### Publications (`publications.html`)

#### Page metadata

- Title | Publications, Autonomous Controls Laboratory, UC Berkeley
- Description | Selected publications from the Autonomous Controls Laboratory at UC Berkeley, with links to Google Scholar and full publication lists.

#### Rendered text

- **Publications**
- Selected work from the lab. For the complete record, see Google Scholar.
- **Full publication lists**
- **Google Scholar**
- The full record of journal articles, conference papers, and preprints.
- View profile
- **arXiv**
- Preprints of recent work, available openly before formal publication.
- Browse preprints
- **Open-source code**
- Solvers, tools, and reference implementations accompanying our papers.
- GitHub organization
- **Selected publications**
- Representative work.
- Successive Convexification with Continuous-Time Constraint Satisfaction Trajectory optimization with guarantees between discretization nodes.
- QOCO: A Quadratic Objective Conic Optimizer An open-source conic solver designed for real-time, embedded use. [code]
- Robust Fuel-Optimal Trajectory Planning and Feedback Control Joint trajectory and feedback design for fuel-optimal maneuvers under uncertainty.
- Discrete Lossless Convexification for Pointing Constraints Exact convex relaxations for discrete-time optimal control with pointing constraints.
- HALO: Hazard-Aware Landing Optimization Perception-coupled landing site selection and divert trajectory optimization.
- Impulsive Relative Motion Control for Cislunar Space Missions Rendezvous and proximity operations in cislunar dynamical environments.
- Optimization with Temporal and Logical Specifications Trajectory planning under rich mission specifications.
- Lossless Convexification of Nonconvex Control Bound and Pointing Constraints of the Soft Landing Optimal Control Problem Foundational theory behind onboard, real-time planetary landing guidance.

#### Links

- View profile | `https://scholar.google.com/citations?user=YEdJKr8AAAAJ&hl=en`
- Browse preprints | `https://arxiv.org/search/math?searchtype=author&query=Acikmese,+B`
- GitHub organization | `https://github.com/UW-ACL`
- [code] | `https://github.com/qoco-org/qoco`

#### Source comments and TODOs

- TODO | replace with a curated publication list migrated from BibBase. Include authors, venue, year, and links.

### News (`news.html`)

#### Page metadata

- Title | News, Autonomous Controls Laboratory, UC Berkeley
- Description | News and announcements from the Autonomous Controls Laboratory at UC Berkeley.

#### Rendered text

- **News**
- Milestones, awards, and announcements from the lab.
- **2026**
- Jun 2026 The Autonomous Controls Laboratory is moving to the University of California, Berkeley. The lab is recruiting PhD students for the upcoming admissions cycle. Learn how to join.
- Jan 2026 Skye received the 2025 AIAA Atmospheric Flight Mechanics Best Paper Award for AutoSCvx.
- Jan 2026 Sam won the Best Paper Award in the Guidance, Navigation and Control Graduate Student Paper Competition at SciTech 2026.
- Jan 2026 Chris passed his PhD candidacy exam. Congratulations!
- **2025**
- Oct 2025 Abhi successfully defended his dissertation.
- Sep 2025 Natalia passed her PhD candidacy exam.
- Aug 2025 Taewan successfully defended his dissertation.
- Jul 2025 Dayou successfully defended his dissertation.
- Mar 2025 An article was published featuring Skye's research.
- Jan 2025 Skye was awarded Best GNC Paper at SciTech 2025.
- **2024**
- Dec 2024 Kazu successfully defended his dissertation.
- Nov 2024 Fabio passed his PhD qualifying exam, and Dylan successfully defended his dissertation.
- Jul 2024 Purna successfully defended his dissertation.
- Jun 2024 Abhi, Samet, Kazu, and Skye passed their candidacy exams; Oliver received a Teaching Excellence Award.
- Apr 2024 An article was published on the lab's onboard rocket landing guidance work.

#### Links

- Learn how to join. | `contact.html`

### Join & Contact (`contact.html`)

#### Page metadata

- Title | Join & Contact, Autonomous Controls Laboratory, UC Berkeley
- Description | How to join the Autonomous Controls Laboratory at UC Berkeley as a PhD student, postdoctoral researcher, or undergraduate researcher. The page also gives contact information.

#### Rendered text

- **Join & Contact**
- Recruiting at UC Berkeley: how to get involved.
- **Joining the lab**
- **Prospective PhD students**
- The lab welcomes PhD applicants prepared in control theory; optimization; applied mathematics; or aerospace engineering. Admission runs through UC Berkeley's graduate programs. Applicants should apply to the Department of Mechanical Engineering PhD program and name Prof. A??kme?e as a potential advisor in the statement of purpose. Competitive applicants usually have exposure to convex optimization and dynamics and control. Scientific programming experience in Python, C/C++, or Julia is also expected.
- **Postdoctoral researchers**
- Postdoctoral openings are posted as funding becomes available. Researchers whose interests match the lab should email a CV, a short statement of interest, and two or three representative papers.
- **Berkeley undergraduates**
- Berkeley undergraduates contribute to solver development and simulation. Some also work on hardware experiments. Interested students should email a short note with research interests, relevant coursework, and availability.
- **Contact**
- Email
- behcet@berkeley.edu
- Mailing address
- Autonomous Controls Laboratory Department of Mechanical Engineering University of California, Berkeley Berkeley, CA 94720
- Code & resources
- GitHub organization
- Publications
- Google Scholar profile

#### Links

- Department of Mechanical Engineering PhD program | `https://me.berkeley.edu/graduate/admissions/`
- behcet@berkeley.edu | `mailto:behcet@berkeley.edu`
- GitHub organization | `https://github.com/UW-ACL`
- Google Scholar profile | `https://scholar.google.com/citations?user=YEdJKr8AAAAJ&hl=en`

#### Source comments and TODOs

- TODO | confirm Berkeley email address once assigned
- TODO | add building and room number once assigned

### HALO project (`projects/halo.html`)

#### Page metadata

- Title | HALO: Hazard-Aware Landing Optimization, Autonomous Controls Laboratory, UC Berkeley
- Description | HALO couples landing-site selection with trajectory optimization so a vehicle can land safely on hazardous terrain.

#### Rendered text

- **HALO: Hazard-Aware Landing Optimization**
- Choosing the landing site and the trajectory in one planning problem.
- **Overview**
- Landing on rough terrain requires two coupled decisions. The vehicle must identify a safe site and determine whether it can reach that site from its current state. Boulder fields on the Moon and crater rims on Mars are typical cases. Systems that separate site selection from trajectory planning can choose a landing site the vehicle cannot reach.
- HALO (Hazard-Aware Landing Optimization) treats site selection and divert guidance as one problem. It evaluates candidate sites with terrain data from onboard perception. At the same time, it checks the feasibility and fuel cost of the trajectory to each site. The output is a safe landing site and the trajectory needed to reach it.
- This work supports precision landing for lunar and planetary missions, where late hazard detection leaves little time and fuel to react.
- **Results & media**
- Figures and videos for this project will appear here.
- Figure placeholder. Add a result plot or render here
- Caption explaining the result in plain language, with a pointer to the paper.
- Video placeholder. Add a simulation or flight clip here
- Caption describing what the clip shows.
- **Learn more**
- Find the HALO papers on arXiv
- Lab GitHub organization
- Back to Research

#### Links

- Find the HALO papers on arXiv | `https://arxiv.org/search/?searchtype=all&query=HALO+Hazard+Aware+Landing+Optimization`
- Lab GitHub organization | `https://github.com/UW-ACL`
- Back to Research | `../research.html`

#### Source comments and TODOs

- TODO | replace the placeholders below with real figures/videos. For an image: <img src="../assets/projects/halo-fig1.png" alt="..."> For a video: <video controls src="../assets/projects/halo-demo.mp4"></video>

### QOCO project (`projects/qoco.html`)

#### Page metadata

- Title | QOCO: Quadratic Objective Conic Optimizer, Autonomous Controls Laboratory, UC Berkeley
- Description | QOCO is an open-source quadratic-objective conic optimizer developed in the lab for real-time, embedded trajectory optimization.

#### Rendered text

- **QOCO: Quadratic Objective Conic Optimizer**
- An open-source conic solver built for real-time, onboard use.
- **Overview**
- Onboard trajectory optimization needs predictable runtime and modest memory use on flight-grade processors. General-purpose solvers are rarely designed for those constraints.
- QOCO is the lab's open-source solver for second-order cone programs with quadratic objectives. That problem class appears in many of the lab's trajectory optimization formulations. QOCO is written in C and has no external dependencies, which makes it easier to embed, certify, and run in real time.
- QOCO is freely available and used in the lab's own flight and simulation pipelines.
- **Results & media**
- Figures and videos for this project will appear here.
- Figure placeholder. Add a result plot or render here
- Caption explaining the result in plain language, with a pointer to the paper.
- Video placeholder. Add a simulation or flight clip here
- Caption describing what the clip shows.
- **Learn more**
- QOCO source code on GitHub
- Find the QOCO paper on arXiv
- Back to Research

#### Links

- QOCO source code on GitHub | `https://github.com/qoco-org/qoco`
- Find the QOCO paper on arXiv | `https://arxiv.org/search/?searchtype=all&query=QOCO+quadratic+objective+conic+optimizer`
- Back to Research | `../research.html`

#### Source comments and TODOs

- TODO | replace the placeholders below with real figures/videos. For an image: <img src="../assets/projects/qoco-fig1.png" alt="..."> For a video: <video controls src="../assets/projects/qoco-demo.mp4"></video>

### Continuous-Time SCvx project (`projects/ct-scvx.html`)

#### Page metadata

- Title | Continuous-Time Successive Convexification, Autonomous Controls Laboratory, UC Berkeley
- Description | Successive convexification with continuous-time constraint satisfaction eliminates inter-sample constraint violations in trajectory optimization.

#### Rendered text

- **Continuous-Time Successive Convexification**
- Trajectory optimization with guarantees between the timesteps.
- **Overview**
- Numerical trajectory optimization uses a discrete grid of time points. A flight vehicle moves between those points. A trajectory can satisfy constraints at the grid nodes and still violate them between samples, for example by clipping a glideslope, exceeding a speed limit, or grazing an obstacle mid-segment.
- This project extends successive convexification (SCvx), the lab's framework for solving nonconvex optimal control through a sequence of convex problems. The extension guarantees constraints in continuous time, not only at discretization nodes.
- The result, including the award-winning AutoSCvx line of work, is trajectory optimization that is both computationally tractable and safe at every instant of flight.
- **Results & media**
- Figures and videos for this project will appear here.
- Figure placeholder. Add a result plot or render here
- Caption explaining the result in plain language, with a pointer to the paper.
- Video placeholder. Add a simulation or flight clip here
- Caption describing what the clip shows.
- **Learn more**
- Find the papers on arXiv
- Lab GitHub organization
- Back to Research

#### Links

- Find the papers on arXiv | `https://arxiv.org/search/?searchtype=all&query=successive+convexification+continuous+time+constraint+satisfaction`
- Lab GitHub organization | `https://github.com/UW-ACL`
- Back to Research | `../research.html`

#### Source comments and TODOs

- TODO | replace the placeholders below with real figures/videos. For an image: <img src="../assets/projects/ct-scvx-fig1.png" alt="..."> For a video: <video controls src="../assets/projects/ct-scvx-demo.mp4"></video>

### Cislunar relative motion project (`projects/cislunar.html`)

#### Page metadata

- Title | Cislunar Relative Motion Control, Autonomous Controls Laboratory, UC Berkeley
- Description | Impulsive relative motion control for rendezvous and proximity operations in cislunar space missions.

#### Rendered text

- **Cislunar Relative Motion Control**
- Rendezvous and proximity operations beyond Earth orbit.
- **Overview**
- Cislunar missions operate between Earth and the Moon, including the orbits planned for the lunar Gateway. The dynamics are richer than in low Earth orbit. Three-body effects make relative motion harder to predict and control.
- This project develops impulsive control methods for relative motion in cislunar environments. The methods plan short thruster-firing sequences for rendezvous, inspection, and formation keeping. The constraints are accuracy and propellant use.
- The work supports the growing set of missions targeting near-rectilinear halo orbits and other cislunar trajectories.
- **Results & media**
- Figures and videos for this project will appear here.
- Figure placeholder. Add a result plot or render here
- Caption explaining the result in plain language, with a pointer to the paper.
- Video placeholder. Add a simulation or flight clip here
- Caption describing what the clip shows.
- **Learn more**
- Find the papers on arXiv
- Lab GitHub organization
- Back to Research

#### Links

- Find the papers on arXiv | `https://arxiv.org/search/?searchtype=all&query=impulsive+relative+motion+cislunar`
- Lab GitHub organization | `https://github.com/UW-ACL`
- Back to Research | `../research.html`

#### Source comments and TODOs

- TODO | replace the placeholders below with real figures/videos. For an image: <img src="../assets/projects/cislunar-fig1.png" alt="..."> For a video: <video controls src="../assets/projects/cislunar-demo.mp4"></video>

### Discrete lossless convexification project (`projects/dlcvx.html`)

#### Page metadata

- Title | Discrete Lossless Convexification, Autonomous Controls Laboratory, UC Berkeley
- Description | Extending lossless convexification to discrete-time optimal control problems with pointing constraints.

#### Rendered text

- **Discrete Lossless Convexification**
- Exact convex relaxations for discrete-time optimal control.
- **Overview**
- Lossless convexification is one of the lab's central results. Certain nonconvex optimal control problems can be relaxed into convex problems whose solutions remain optimal for the original problem. Fuel-optimal rocket landing with a minimum-thrust constraint is one example. This is what makes onboard real-time solution possible.
- The classical theory is set in continuous time. Flight software works in discrete time. This project extends lossless convexification to discrete-time problems with thrust pointing constraints, bringing the theory closer to implementation.
- The result is real-time-capable guidance with optimality guarantees that hold for the discretized problem the flight computer actually solves.
- **Results & media**
- Figures and videos for this project will appear here.
- Figure placeholder. Add a result plot or render here
- Caption explaining the result in plain language, with a pointer to the paper.
- Video placeholder. Add a simulation or flight clip here
- Caption describing what the clip shows.
- **Learn more**
- Find the papers on arXiv
- Lab GitHub organization
- Back to Research

#### Links

- Find the papers on arXiv | `https://arxiv.org/search/?searchtype=all&query=discrete+lossless+convexification+pointing+constraints`
- Lab GitHub organization | `https://github.com/UW-ACL`
- Back to Research | `../research.html`

#### Source comments and TODOs

- TODO | replace the placeholders below with real figures/videos. For an image: <img src="../assets/projects/dlcvx-fig1.png" alt="..."> For a video: <video controls src="../assets/projects/dlcvx-demo.mp4"></video>

### Temporal and logical specifications project (`projects/specifications.html`)

#### Page metadata

- Title | Optimization with Temporal & Logical Specifications, Autonomous Controls Laboratory, UC Berkeley
- Description | Optimization-based trajectory planning under temporal and logical mission specifications.

#### Rendered text

- **Optimization with Temporal & Logical Specifications**
- Planning trajectories that follow mission rules, not just reach a target.
- **Overview**
- Real missions impose rules beyond "get from A to B." A plan may need to visit one waypoint before another, keep an antenna pointed at Earth while transmitting, or avoid a keep-out zone until a sensor has confirmed it safe. These requirements are temporal and logical specifications.
- This project encodes those specifications directly into trajectory generation. The resulting plans satisfy mission logic by construction, rather than through checking after the plan is produced.
- The project connects formal specification languages with the convex optimization machinery the lab develops, keeping problems solvable in real time.
- **Results & media**
- Figures and videos for this project will appear here.
- Figure placeholder. Add a result plot or render here
- Caption explaining the result in plain language, with a pointer to the paper.
- Video placeholder. Add a simulation or flight clip here
- Caption describing what the clip shows.
- **Learn more**
- Find the papers on arXiv
- Lab GitHub organization
- Back to Research

#### Links

- Find the papers on arXiv | `https://arxiv.org/search/?searchtype=all&query=trajectory+optimization+temporal+logic+specifications+Acikmese`
- Lab GitHub organization | `https://github.com/UW-ACL`
- Back to Research | `../research.html`

#### Source comments and TODOs

- TODO | replace the placeholders below with real figures/videos. For an image: <img src="../assets/projects/specifications-fig1.png" alt="..."> For a video: <video controls src="../assets/projects/specifications-demo.mp4"></video>

## Repository notes

### Structure

| File or directory | Purpose |
|---|---|
| `index.html` | Home page: mission, research themes, recent news. |
| `home.html` | Redirect to `index.html`. |
| `research.html` | Research areas and selected projects. |
| `people.html` | PI bio, current members, incoming-student placeholders, alumni placeholders. |
| `publications.html` | Full publication-list links and selected publication samples. |
| `news.html` | News archive by year. |
| `contact.html` | Joining instructions and contact details. |
| `projects/*.html` | One detail page per highlighted project. |
| `assets/` | Logo files, favicon, and the logo animation. |
| `css/style.css` | Single stylesheet for layout, typography, palette, accessibility states, and responsive behavior. |
| `js/nav.js` | Mobile navigation toggle and reduced-motion video handling. |

### Publishing

- No build step and no framework are required.
- Open `index.html` directly in a browser, or host this folder as static files.
- Run `python3 -m http.server 4173` locally, then visit `http://localhost:4173`.

### Design notes

- Palette | Berkeley Blue `#003262` and California Gold `#FDB515`, with high-contrast neutrals.
- Typography | serif body text using Charter/Georgia fallbacks, with sans-serif headings and navigation.
- Accessibility | semantic landmarks and a skip link. The stylesheet defines visible focus outlines and active navigation state. It also supports high contrast, reduced motion, and navigation that works without JavaScript.
