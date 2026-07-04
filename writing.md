# Autonomous Controls Laboratory Website Text Inventory

This file records the source copy for the static ACL Berkeley website. It tracks page metadata, major visible page copy, roster state, software categories, and repeated site text.

Generated for the PR branch on 2026-07-05.

## Files covered

- `index.html`: Home
- `research.html`: Research
- `people.html`: People
- `software.html`: Software
- `publications.html`: Publications
- `news.html`: News
- `contact.html`: Join and Contact
- `projects/halo.html`: HALO
- `projects/qoco.html`: QOCO Solver
- `projects/ct-scvx.html`: Continuous-Time SCvx
- `projects/cislunar.html`: Cislunar Relative Motion
- `projects/dlcvx.html`: Discrete Lossless Convexification
- `projects/specifications.html`: Temporal and Logical Specifications
- `people/*.html`: One profile page for each real person listed on the roster

## Site-wide repeated text

Header navigation:

- Home
- Research
- People
- Software
- Publications
- News
- Join and Contact

Footer:

- Autonomous Controls Laboratory
- Dept. of ECE
- University of California, Berkeley
- Berkeley, CA 94720
- Research
- People
- Software
- Publications
- Join and Contact
- Google Scholar
- GitHub
- Former site (UW)
- Copyright 2026 Autonomous Controls Laboratory, UC Berkeley.

## Home

Metadata:

- Title: Autonomous Controls Laboratory, UC Berkeley
- Description: The Autonomous Controls Laboratory at UC Berkeley develops convex-optimization-based methods for trajectory planning, robust control, and autonomous decision-making. Prof. Beh&ccedil;et A&ccedil;&#305;kme&#351;e leads the lab.

Hero and introduction:

- Now at UC Berkeley
- Optimization-based autonomy for aerospace systems
- We develop convex-optimization methods for trajectory planning, robust control, and optimal recursive decision-making. The applications span planetary landers and spacecraft swarms.
- Explore our research
- Join the lab
- About the lab
- The Autonomous Controls Laboratory (ACL) has moved to UC Berkeley after a decade at the University of Washington. Prof. Beh&ccedil;et A&ccedil;&#305;kme&#351;e leads the group. The lab connects control theory and optimization with aerospace engineering. Its flight-hardware algorithms are designed for real-time execution and include provable guarantees.
- The lab has a theory-to-flight orientation. Lossless convexification and successive convexification, both developed in this research program, have informed planetary landing guidance and reusable rocket flight. The group also maintains open-source solvers and tools used outside the lab.

Research themes:

- Trajectory Optimization
- Real-time, onboard trajectory generation for landing, rendezvous, and proximity operations with hard state and control constraints.
- First-Order Optimization Algorithms
- Custom solvers such as QOCO, our quadratic-objective conic optimizer, built for speed, reliability, and embedded deployment.
- Robust Control
- Feedback synthesis that guarantees performance and constraint satisfaction despite uncertainty, disturbances, and model error.
- Optimal Recursive Decision-Making
- Sequential decision-making under uncertainty, with convex formulations that make optimal policies computationally tractable.
- Markov Decision Processes
- Density control and policy synthesis for large-scale stochastic systems, including swarm guidance and probabilistic safety.

News:

- 2026: ACL joins UC Berkeley.
- 2026: Recruiting PhD students.
- 2025: QOCO solver development.
- 2025: Continuous-time SCvx results.

## Research

Metadata:

- Title: Research, Autonomous Controls Laboratory, UC Berkeley
- Description: Research areas and selected projects from the Autonomous Controls Laboratory at UC Berkeley.

Page intro:

- Research
- Research in the lab connects rigorous optimization theory with algorithms that can run onboard autonomous aerospace systems.

Research areas:

- Trajectory Optimization
- We study onboard computation of optimal trajectories for systems with nonconvex dynamics and constraints. Lossless convexification shows that selected nonconvex optimal control problems can be solved exactly through convex relaxations. Examples include fuel-optimal planetary landing with minimum-thrust and pointing constraints. Successive convexification (SCvx) extends the approach to nonlinear dynamics, including recent guarantees for continuous-time constraint satisfaction.
- First-Order Optimization Algorithms
- Flight-grade autonomy needs solvers with predictable runtime and limited memory use. The lab designs first-order methods and conic solvers for embedded platforms. QOCO, an open-source quadratic-objective conic optimizer, is one example.
- Robust Control
- Real systems face disturbances, model uncertainty, and actuation limits. The lab develops feedback synthesis methods that preserve constraint satisfaction under uncertainty. One example is robust fuel-optimal trajectory planning with feedback control.
- Optimal Recursive Decision-Making
- Many autonomy problems are sequential. Current decisions change what will be feasible later. The lab formulates recursive decision-making problems with temporal and logical specifications, then studies convex formulations that make optimal policies computationally tractable.
- Markov Decision Processes
- For large-scale stochastic systems, the lab studies density control and policy synthesis on Markov decision processes. Spacecraft and vehicle swarms are the motivating cases. The goal is probabilistic guidance with safety and convergence guarantees.

Selected projects:

- HALO: Hazard-Aware Landing Optimization
- Coupled perception and trajectory optimization for safe landing site selection and divert guidance on hazardous terrain.
- QOCO Solver
- An open-source quadratic-objective conic optimizer designed for real-time, embedded trajectory optimization workloads.
- Continuous-Time SCvx
- Successive convexification with continuous-time constraint satisfaction and elimination of inter-sample constraint violations.
- Cislunar Relative Motion
- Impulsive relative motion control for rendezvous and proximity operations in cislunar space missions.
- Discrete Lossless Convexification
- Extending lossless convexification to discrete-time problems with pointing constraints.
- Temporal and Logical Specifications
- Optimization-based planning under rich mission specifications expressed in temporal and propositional logic.
- See Publications for papers associated with each project, and Software for open-source code.

## People

Metadata:

- Title: People, Autonomous Controls Laboratory, UC Berkeley
- Description: People of the Autonomous Controls Laboratory at UC Berkeley: Prof. Beh&ccedil;et A&ccedil;&#305;kme&#351;e, current PhD students, incoming students, and alumni.

Principal Investigator:

- Prof. Beh&ccedil;et A&ccedil;&#305;kme&#351;e
- Professor, Dept. of ECE, University of California, Berkeley
- Beh&ccedil;et A&ccedil;&#305;kme&#351;e leads the lab's work on convex optimization for autonomous control, trajectory optimization, robust control, and aerospace systems.

Current members:

- Carlos Morales
- PhD Student
- Guidance and trajectory design for entry, descent, and landing.
- Fabio Spada
- PhD Student
- Uncertainty-aware trajectory planning.

Incoming PhD students:

- The lab is recruiting its first Berkeley cohort. New members will be announced here.
- Announcing soon
- Incoming PhD Student, Fall 2026
- This could be you
- Apply to join the lab

Recent UW ACL alumni:

- Skye Mceowen
- Samuel Buckner
- Samet Uzun
- Chris Hayner
- Govind Chari
- Natalia Pavlasek
- Avi Mittal
- Jake Gonzales
- Justin Ganiban
- Jason Zhou

Postdoctoral alumni:

- Ben Chung, now at JuliaHub
- Dan Calderone, Postdoc at University of New Mexico
- Selahattin Burak Sars&#305;lmaz, Assistant Professor at Utah State University
- Carlo Alberto Pascucci, now at Rocket Lab, New Zealand
- Mahmoud El Chamie, now at United Technologies Research Center
- Hossein Sartipizadeh, now at Ford Research, MI
- Xiangru Xu, Assistant Professor at University of Wisconsin-Madison
- Wei Sun, Assistant Professor at University of Oklahoma

PhD alumni:

- Abhinav Kamath, now at Amazon Prime Air
- Taewan Kim, now at SpaceX
- Dayou Luo, now at Amazon
- Kazuya Echigo, Postdoc at Caltech and JPL
- Dylan Janak, Incoming Guidance Engineer at Amentum
- Purnanand Elango, Research Scientist at MERL
- Sarah Li, Assistant Professor at Georgia Tech
- Yuanqi Mao
- Danylo Malyuta, now at SpaceX
- Yue Yu, Assistant Professor at University of Minnesota
- Adam Tahir
- Michael Szmuk, now at Amazon Prime Air
- Nazli Demirer, now at Halliburton
- Daniel Dueri, now at SpaceX
- Roman J. Shor, Assistant Professor at University of Calgary
- Matthew W. Harris, Assistant Professor at Utah State University

Master alumni:

- Oliver Sheridan, now at Blue Origin
- Aman Tiwary, PhD student at University of New Mexico
- Yoshihide Arai
- Cole Morgan, now at SpaceX
- Andrew W. Berning
- Timothy V. Lowery
- Can Pehlivanturk
- Mo Zhao, now at Apex

Profile page pattern:

- Each real person links to `people/<slug>.html`.
- Profile pages use only verified status, program, research-interest, destination, and source-record copy.
- External profile links appear only when high-confidence.
- Incoming placeholders are not clickable people profiles.

## Software

Metadata:

- Title: Software, Autonomous Controls Laboratory, UC Berkeley
- Description: Open-source solvers, interfaces, and research code from the Autonomous Controls Laboratory at UC Berkeley.

Intro:

- Software
- Open-source solvers, interfaces, demos, and research code maintained by the lab.
- The lab publishes software for sequential convex programming, conic optimization, trajectory planning, and temporal-logic specifications. This page links to the public repositories and the relevant project pages where available.

Solvers and toolboxes:

- SCPToolbox.jl
- Sequential Convex Programming Toolbox for nonconvex trajectory optimization.
- qoco
- Quadratic Objective Conic Optimizer for real-time conic optimization.
- qocogen
- Custom solver generator for quadratic-objective second-order cone programs.

Interfaces:

- qoco-python
- Python interface for the QOCO solver.
- QOCO.jl
- Julia MathOptInterface wrapper for QOCO.
- qoco-matlab
- MATLAB interface for the QOCO solver.

Trajectory optimization projects:

- ct-scvx
- Successive convexification with continuous-time constraint satisfaction.
- nmpc-ctcs
- Nonlinear model predictive control with continuous-time constraint satisfaction.
- HALO
- Hazard-aware landing optimization for perception-coupled landing guidance.
- DT-LCvx-Pointing
- Discrete-time lossless convexification for pointing constraints.
- CT-cSTC
- Sequential convex programming for powered descent guidance with compound state-triggered constraints.

Temporal logic and decision tools:

- D-GMSR
- Robust planning under signal temporal logic specifications.
- TrajOpt_CT-STL
- Trajectory optimization under continuous-time signal temporal logic constraints.

Demos and legacy tools:

- pipg-demo
- NEWTON-PIPG
- optimal-preconditioning
- prox-convex
- optgui

## Publications

Metadata:

- Title: Publications, Autonomous Controls Laboratory, UC Berkeley
- Description: Publications and open-source research outputs from the Autonomous Controls Laboratory at UC Berkeley.

Page intro:

- Publications
- Selected work from the lab. For the complete record, see Google Scholar.

Full publication lists:

- Google Scholar
- The full record of journal articles, conference papers, and preprints.
- arXiv
- Preprints of recent work, available openly before formal publication.
- Open-source code
- Solvers, tools, and reference implementations accompanying our papers.
- Software

Selected publications:

- Successive Convexification with Continuous-Time Constraint Satisfaction
- QOCO: A Quadratic Objective Conic Optimizer
- Robust Fuel-Optimal Trajectory Planning and Feedback Control
- Discrete Lossless Convexification for Pointing Constraints
- HALO: Hazard-Aware Landing Optimization
- Impulsive Relative Motion Control for Cislunar Space Missions
- Optimization with Temporal and Logical Specifications
- Lossless Convexification of Nonconvex Control Bound and Pointing Constraints of the Soft Landing Optimal Control Problem

## Contact

Metadata:

- Title: Join and Contact, Autonomous Controls Laboratory, UC Berkeley
- Description: Contact information and joining guidance for the Autonomous Controls Laboratory at UC Berkeley.

Main copy:

- Join and Contact
- The lab recruits students who want to connect control theory, optimization, and aerospace systems.
- The lab welcomes PhD applicants prepared in control theory; optimization; applied mathematics; or aerospace engineering. Admission runs through UC Berkeley's graduate programs. Applicants should apply to the ECE PhD program and name Prof. A&ccedil;&#305;kme&#351;e as a potential advisor in the statement of purpose. Competitive applicants usually have exposure to convex optimization and dynamics and control. Scientific programming experience in Python, C/C++, or Julia is also expected.

## Publication Sync Note

- Do not build live Google Scholar scraping into the site.
- The future-safe path is a separate static-generation script that uses Semantic Scholar author ID `2991808` for Beh&ccedil;et A&ccedil;&#305;kme&#351;e, preferably with an API key, then outputs static publication data.
- This PR does not implement that script.
