import { useState } from 'react';
import { Timeline } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import TimelineEntry from './TimelineEntry';
import TimelineModal from './TimelineModal';

const imageContext = require.context('../images', true, /\.(png|jpe?g|svg)$/);
const allImages = imageContext.keys().reduce((acc, key) => {
  const parts = key.split('/');
  if (parts.length === 3) {
    const folder = parts[1];
    if (!acc[folder]) acc[folder] = [];
    acc[folder].push(imageContext(key));
  }
  return acc;
}, {});

const timelineData = [
  {
    name: 'nlc',
    type: 'education',
    title: 'Aircraft Maintenance Engineering Diploma',
    organization: 'Northern Lights College',
    location: 'Vernon, B.C. Canada',
    startYear: 2015,
    endYear: 2016,
    paid: false,
    description: `Built a technical foundation in fixed-wing and rotary-wing aircraft. Gained hands-on experience with engines, electrical systems, tools, and maintenance projects.`,
    detailedDescription: `During my college studies, I developed a strong technical foundation in fixed-wing and rotary-wing aircraft systems. My education included comprehensive coursework on turbine and reciprocating engines, as well as the physics of mechanical systems, providing a solid understanding of aircraft operation and maintenance principles. I gained hands-on experience using a variety of hand and power tools and earned WHMIS certification, reinforcing safe and effective work practices. I also built practical skills in aircraft electrical systems, including system comprehension and basic diagnostics. Through a range of applied projects, I gained exposure to real-world maintenance tasks such as helicopter engine changes and sheet metal repairs. This combination of theoretical instruction and practical application strengthened my technical competence, attention to detail, and ability to work effectively in mechanically complex environments.`,
    skills: [],
    url: 'https://www.nlc.bc.ca/',
    images: [],
  },
  {
    name: 'kaltire',
    type: 'employment',
    title: 'Seasonal Tire Changer',
    organization: 'KalTire',
    location: 'Vernon, B.C. Canada',
    startYear: 2016,
    endYear: 2016,
    paid: true,
    description: `Seasonal Tire Changer at Kal Tire with hands-on shop experience. Performed tire changes, basic inspections, and customer support duties.`,
    detailedDescription: `Seasonal Tire Changer at Kal Tire with hands-on experience performing tire changes and basic vehicle service tasks in a fast-paced shop environment. Responsibilities included receiving customer vehicles, safely lifting them using jacks, removing and reinstalling wheels, and mounting winter tires. Regularly used tire-changing machinery to remove and install tires on rims as required. Conducted basic brake inspections during tire changes and ensured all wheels were torqued to the correct specifications before vehicle return. Also handled flat tire repairs and provided customer transportation using a company van when vehicles were being serviced. Additionally, assisted with organizing and maintaining the tire warehouse to support efficient operations. This role required attention to detail, physical stamina, and the ability to follow procedures accurately while working directly with customer vehicles.`,
    skills: [],
    url: 'https://www.kaltire.com/',
    images: [],
  },
  {
    name: 'aar',
    type: 'employment',
    title: 'AME Apprentice',
    organization: 'AAR',
    location: 'Windsor, O.N. Canada',
    startYear: 2017,
    endYear: 2018,
    paid: true,
    description: `AME Apprentice at AAR supporting aircraft interior maintenance. Performed removal and reinstallation of interior components on commercial aircraft.`,
    detailedDescription: `AME Apprentice at AAR in Windsor, Ontario, with experience working in the Interiors Department on commercial aircraft. Responsibilities included the removal of interior components during aircraft maintenance checks, including seats, overhead bins, galleys, lavatories, panels, and cockpit components. Following completion of maintenance, worked as part of the interiors team to reinstall all removed components according to established procedures. Supported maintenance activities primarily on Boeing 737, Bombardier Q400, and Embraer 195/197 aircraft. Developed strong proficiency with hand tools such as screwdrivers, ratchets, and wrenches. Ensured all components were accurately labeled and tracked during removal to support correct reinstallation. Worked collaboratively in a team-based environment, frequently during extended shifts and overtime, and adapted to physically demanding tasks and high-temperature working conditions. This role required attention to detail, manual dexterity, and the ability to follow technical instructions in an aviation maintenance setting.`,
    skills: [],
    url: 'https://www.aarcorp.com/',
    images: [],
  },
  {
    name: 'save-on',
    type: 'employment',
    title: 'Grocery Clerk',
    organization: 'Save On Foods',
    location: 'Vernon, B.C. Canada',
    startYear: 2018,
    endYear: 2018,
    paid: true,
    description: `Grocery Clerk at Savon Foods supporting daily store operations. Assisted customers, stocked shelves, and worked at checkout.`,
    detailedDescription: `Grocery Clerk at Savon Foods with experience supporting daily store operations in a retail grocery environment. Responsibilities included stocking shelves, maintaining product organization, and assisting customers with locating items throughout the store. Also worked at the checkout, processing customer purchases and supporting efficient front-end operations. Performed general grocery clerk duties as needed to support store workflow and customer service. This role required reliability, attention to detail, and the ability to assist customers in a fast-paced retail setting.`,
    skills: [],
    url: 'https://www.saveonfoods.com/',
    images: [],
  },
  {
    name: 'oc',
    type: 'education',
    title: 'Upgrading High School Math And Physics',
    organization: 'Okanagan College',
    location: 'Vernon B.C. Canada',
    startYear: 2018,
    endYear: 2019,
    paid: false,
    description: `Completed academic upgrading at Okanagan College. Achieved high grades in advanced mathematics and physics courses.`,
    detailedDescription: `Completed academic upgrading at Okanagan College to meet university entrance requirements. Enrolled in Mathematics 11 and 12 (Pre-Calculus) and Physics 11 and 12, strengthening foundational skills in mathematics and physics. Achieved consistently high academic performance, with grades typically exceeding 90 percent, and received awards recognizing academic excellence. This experience demonstrates strong analytical ability, commitment to academic improvement, and the capacity to succeed in rigorous coursework.`,
    skills: [],
    url: 'https://www.okanagancollege.ca/',
    images: [],
  },
  {
    name: 'pinnacle',
    type: 'employment',
    title: 'Laborer',
    organization: 'Pinnacle Renewable Energy',
    location: 'Lavington, B.C. Canada',
    startYear: 2018,
    endYear: 2019,
    paid: true,
    description: `Production worker at Pinnacle. Performed cleanup, rail loading, and safety-focused tasks in an industrial environment.`,
    detailedDescription: `Production and Operations Worker at Pinnacle, a wood pellet manufacturing facility producing biomass fuel for export. Initially worked weekend shifts performing site cleanup focused on fire prevention, including removing and relocating sawdust using shovels and mobile equipment. Operated industrial machinery such as skid steers, forklifts, and Genie booms to support safe and efficient facility operations. Gained experience with machine lockout procedures to ensure equipment was safely isolated during cleaning and maintenance activities. Progressed into a full-time role loading finished product into rail cars, requiring strict adherence to safety procedures related to rail operations and heavy equipment movement. Operated a rail car mover and worked in a large-scale industrial environment with extended 12-hour shifts, including both day and night schedules. Regularly worked outdoors in all weather conditions and adapted to physically demanding tasks. This role required strong safety awareness, equipment operation skills, and the ability to work reliably in a high-risk industrial setting.`,
    skills: [],
    url: '',
    images: [],
  },
  {
    name: 'newport-beach',
    type: 'employment',
    title: 'Landscaper',
    organization: 'NewPort Beach',
    location: 'Vernon B.C. Canada',
    startYear: 2021,
    endYear: 2021,
    paid: true,
    description: `Grounds and maintenance worker maintaining outdoor facilities. Operated landscaping equipment and assisted with marina setup.`,
    detailedDescription: `Grounds and Maintenance Worker responsible for maintaining a clean and well-kept outdoor environment within a trailer park setting. Operated ride-on mowers, weed whackers, and leaf blowers to perform routine groundskeeping tasks. Assisted with the seasonal installation of a floating marina by piloting pontoon boats and deploying underwater concrete anchors using a winch system to ensure secure mooring. Operated small tractors and forklifts to transport materials and support general maintenance and facility operations. This role required equipment operation skills, physical reliability, and the ability to work safely in outdoor and marine-adjacent environments.`,
    skills: [],
    url: '',
    images: [],
  },
  {
    name: 'onc',
    type: 'employment',
    title: 'Junior Software Developer',
    organization: 'Ocean Networks Canada',
    location: 'Victoria, B.C. Canada',
    startYear: 2022,
    endYear: 2022,
    paid: true,
    description: `Co-op intern at Ocean Networks Canada. Worked on automated testing and full-stack web development in an Agile environment.`,
    detailedDescription: `Completed a co-op internship at Ocean Networks Canada in Victoria, contributing to both quality assurance and full-stack development efforts. Initially focused on integration testing by designing and implementing a Selenium-based automated testing framework for a complex web application. Wrote frontend UI tests in Java and developed an abstraction layer to streamline test creation and maintenance, improving efficiency as test coverage expanded. Later transitioned into full-stack development, working with React on the frontend and Java on the backend. Collaborated with another student to implement a CSV ingestion feature that enabled structured data import into the application database. Gained experience working within a large organization using Agile practices, including regular scrum meetings and daily stand-ups. Worked within a structured deployment pipeline involving multiple QA environments. Utilized industry-standard tools such as Jira, Bitbucket, and Confluence as part of a collaborative development team. This internship provided practical experience in automated testing, full-stack web development, and professional software development workflows.`,
    skills: [
      'Java',
      'React',
      'PostgreSQL',
      'Git',
      'Selenium',
      'Jenkins',
      'Bitbucket',
      'Jira',
      'Confluence',
      'Postman',
      'Mui',
    ],
    url: 'https://www.oceannetworks.ca/',
    images: [],
  },
  {
    name: 'ta-scheduler',
    type: 'schoolProject',
    title: 'TA Scheduler',
    organization: 'University Of British Columbia',
    location: 'Kelowna, B.C. Canada',
    startYear: 2023,
    endYear: 2023,
    paid: false,
    description: `Improved an existing TA scheduling web application. Performed maintenance, feature enhancements, and data export fixes.`,
    detailedDescription: `Contributed to the enhancement of an existing Teaching Assistant scheduling web application used to manage TA applications and assignments. The system collected detailed applicant information, including academic background, course preferences, and availability, and supported the administrative process of allocating teaching assistants to courses. Focused on improving the web application layer, which was built using Laravel with Tailwind and jQuery. Responsibilities included general maintenance, feature enhancements, and bug fixes to improve reliability and usability. Implemented and repaired functionality such as CSV data export and iCal file upload to support data management and scheduling workflows. Worked within an established codebase, adapting to existing architecture and requirements while delivering incremental improvements. The project was completed as part of an academic course, and the work received strong positive feedback and a high final grade, reflecting effective problem-solving, attention to detail, and the ability to contribute productively to a production-style web application.`,
    skills: ['TailwindCSS', 'Jquery', 'Laravel', 'Git'],
    url: '',
    images: [],
  },
  {
    name: 'parrot',
    type: 'project',
    title: 'Parrot Discord Bot',
    organization: '',
    location: '',
    startYear: 2023,
    endYear: 2023,
    paid: false,
    description: `Developed an AI-powered Discord bot for voice cloning and playback. Integrated AI tools, user authentication, and payment processing.`,
    detailedDescription: `Developed the Parrot Discord Bot, an AI-powered voice cloning and playback bot for the Discord platform. The bot allowed users to add it to their servers and interact through chat commands to generate spoken audio in real time. Core functionality included selecting from preloaded cloned voices of public figures or uploading custom user voices. Users could provide direct text input or request AI-generated content, which the bot converted into speech and played by joining active Discord voice channels. Generated audio clips could be saved, replayed, and reused. Built a companion web application that enabled users to authenticate using their Discord accounts, ensuring account-linked usage tracking. Integrated Stripe payment processing to allow users to purchase additional usage credits, which were then applied within Discord. The project gained adoption across multiple Discord servers before development was discontinued due to platform limitations restricting expansion beyond 100 servers. This project demonstrates experience with AI tool integration, Discord bot development, audio processing workflows, user authentication, and monetization through web-based payment systems.`,
    skills: ['Python', 'Django', 'Bootstrap', 'Git'],
    url: 'https://github.com/Ferdinand737/voice-clone-bot',
    images: [],
  },
  {
    name: 'plume',
    type: 'employment',
    title: 'Network Traffic Analyst',
    organization: 'Plume Design Inc.',
    location: 'Remote',
    startYear: 2023,
    endYear: 2023,
    paid: true,
    description: `Developed network traffic signatures for embedded systems. Analyzed packet data and automated detection using Python and big data tools.`,
    detailedDescription: `Developed network traffic detection capabilities for an embedded C-based engine by engineering custom traffic signatures to accurately identify popular applications across a wide range of devices. Captured and analyzed real-world network packet data by configuring OpenWRT routers with OpenVPN and tcpdump to simulate diverse traffic scenarios. Utilized custom command-line tools, Python, and Wireshark to extract packet-level patterns and domain fingerprints, enabling reliable classification of challenging services. Automated portions of the signature development process by creating Python scripts that generated detection code directly from captured data, reducing manual effort and improving deployment efficiency. Conducted large-scale data analysis using PySpark within Databricks notebooks to study behavioral patterns of WiFi extender devices and identify associated child devices using mesh network datasets. This work required strong skills in networking, data analysis, automation, and working with low-level systems in data-intensive environments.`,
    skills: ['Python', 'PySpark', 'Pandas', 'Linux'],
    url: 'https://www.plume.com/',
    images: [],
  },
  {
    name: 'ubc-course-bot',
    type: 'project',
    title: 'Course Planner Discord Bot',
    organization: '',
    location: '',
    startYear: 2024,
    endYear: 2024,
    paid: false,
    description: `Built a Discord bot for UBC course planning. Generated visual prerequisite graphs using scraped course data.`,
    detailedDescription: `Developed a Course Planner Discord Bot for the University of British Columbia that enabled students to query course prerequisites through simple chat commands. The bot generated visual prerequisite graphs as images, allowing users to clearly understand course dependency structures. Supported courses from both UBC Vancouver and UBC Okanagan. Built a backend data pipeline that scraped course and prerequisite information directly from the UBC course websites using Selenium. Parsed and structured prerequisite data to construct accurate dependency graphs for each queried course. Deployed the bot within UBC-focused Discord communities, where it was actively used by students for academic planning. The project demonstrated skills in web scraping, data parsing, graph generation, and Discord bot development. Functionality was later discontinued after UBC migrated course data to Workday, which changed data accessibility.`,
    skills: ['Python', 'Pandas', 'Selenium'],
    url: 'https://github.com/Ferdinand737/UBC-Course-Bot',
    images: [],
  },
  {
    name: 'course-scheduler',
    type: 'schoolProject',
    title: 'Course Scheduler',
    organization: 'University Of British Columbia',
    location: 'Kelowna, B.C. Canada',
    startYear: 2024,
    endYear: 2024,
    paid: false,
    description: `Developed an interactive course planning web application at UBC. Visualized prerequisites and degree paths using dynamic, drag-and-drop interfaces.`,
    detailedDescription: `Completed a Directed Studies project at the University of British Columbia focused on developing an interactive course scheduling and planning web application. The project aimed to help students visualize and plan their academic pathways by selecting courses and arranging them through a drag-and-drop interface. The application displayed prerequisite relationships using connected visual elements, allowing users to clearly see which courses were required before progressing to others. A key technical challenge involved handling complex prerequisite logic, including conditional and multi-course requirements expressed in varied textual formats. To address this, implemented an AI-assisted workflow that converted prerequisite strings into a standardized JSON structure. This data was then parsed on the frontend to generate a dynamic prerequisite graph, including accurate dependency arrows and context-specific validation messages. The project demonstrated problem-solving skills in data normalization, logical modeling, and interactive UI design. The work was completed as part of a supervised academic study and received a final grade in the mid-to-high 90 percent range, reflecting strong technical execution and overall project quality.`,
    skills: [
      'NodeJs',
      'Remix',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Git',
      'Prisma',
    ],
    url: 'https://github.com/Ferdinand737/course-planner',
    images: [],
  },
  {
    name: 'thesis',
    type: 'schoolProject',
    title: 'Teaching with AI Honours Thesis',
    organization: 'University Of British Columbia',
    location: 'Kelowna, B.C. Canada',
    startYear: 2023,
    endYear: 2024,
    paid: false,
    description: `Completed an Honors Thesis enhancing a student Q&A platform. Built AI-assisted frontend features to support academic workflows.`,
    detailedDescription: `Completed an Honors Thesis focused on enhancing an existing student question-and-answer web application used by students, teaching assistants, and professors. The project integrated AI-assisted responses to help answer student questions based on course materials, while avoiding disclosure of exam or assessment answers. Built the frontend of the application, enabling students to submit questions and receive AI-generated responses supported by a retrieval-based system. Implemented community feedback features allowing students to upvote or downvote AI answers based on usefulness. Added instructor and TA workflows to verify correct AI responses, escalate unresolved questions, and manage question visibility. Developed tagging and filtering functionality so questions could be categorized by assignments, labs, exams, or other course components, and sorted by date or rating. The system was designed to reduce instructor workload by combining AI-generated responses with TA and professor oversight. This project demonstrates experience in frontend development, AI-assisted educational tools, user feedback systems, and designing interfaces that support collaborative academic workflows.`,
    skills: [
      'NodeJs',
      'NextJs',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Git',
      'NestJs',
      'PostgreSQL',
      'Docker',
      'Git',
    ],
    url: 'https://open.library.ubc.ca/soa/cIRcle/collections/undergraduateresearch/52966/items/1.0443555',
    images: [],
  },
  {
    name: 'ubc',
    type: 'education',
    title: 'BSc Computer Science with Honours',
    organization: 'University Of British Columbia',
    location: 'Kelowna, B.C. Canada',
    startYear: 2019,
    endYear: 2024,
    paid: false,
    description: ``,
    detailedDescription: ``,
    skills: [],
    url: 'https://www.ubc.ca/',
    images: [],
  },
  {
    name: 'cybird',
    type: 'freelance',
    title: 'Software Developer',
    organization: 'Cybird',
    location: 'Kelowna, B.C. Canada',
    startYear: 2024,
    endYear: 2024,
    paid: true,
    description: `Freelance software developer on a DNS-based network monitoring platform. Assisted with maintenance and feature development.`,
    detailedDescription: `Freelance Software Developer supporting the maintenance and expansion of a network monitoring platform designed to function as a DNS-based service. The platform provided a centralized dashboard that allowed users to monitor and manage network traffic across connected devices, including features such as traffic visibility and content blocking for household or organizational use. Contributed to ongoing development and maintenance efforts, working on an existing codebase to support platform functionality and feature growth. This role provided early professional experience collaborating with a non-technical founder in a startup-style environment and working on a live production system related to network services and traffic management.`,
    skills: ['NodeJs', 'Postman'],
    url: 'https://cybird.net/',
    images: [],
  },
  {
    name: 'swagfan',
    type: 'freelance',
    title: 'Software Developer',
    organization: 'Swagfan',
    location: 'Vernon B.C. Canada',
    startYear: 2024,
    endYear: 2024,
    paid: true,
    description: `Developed SwagFan, a merchandise giveaway platform. Integrated Printful and Stripe to support fulfillment and subscriptions.`,
    detailedDescription: `Developed SwagFan, a web application that enables businesses and creators to distribute branded merchandise through controlled giveaways. Built a full integration with Printful, allowing products from connected print-on-demand stores to sync directly into the platform. Implemented customizable giveaway links that recipients could use to select product options, provide shipping information, and redeem items without creating an account. Added phone number verification to ensure redemptions were completed by real users and to prevent multiple redemptions by the same individual. Developed management features for tracking redemption counts, costs, expiration dates, and per-user limits. Integrated Stripe to support a subscription-based business model with recurring billing for client organizations. The platform remains active and in use, demonstrating experience in full-stack development, third-party API integration, authentication workflows, and payment processing within a production web application.`,
    skills: ['Laravel', 'Livewire', 'Tailwind CSS', 'Git', 'MySQL', 'AlpineJs'],
    url: 'https://swagfan.com/',
    images: [],
  },
  {
    name: 'time-log-hub',
    type: 'freelance',
    title: 'Software Developer',
    organization: 'Time Log Hub',
    location: 'Remote',
    startYear: 2024,
    endYear: 2024,
    paid: true,
    description: `Freelance developer for a time-tracking platform. Built the web interface for viewing employee clock-in records.`,
    detailedDescription: `Freelance Software Developer for Time Log Hub, a time-tracking platform created for a small construction business. Contributed exclusively to the web application component, which allowed the business owner to log in and view employee clock-in records stored in a centralized database. The system displayed employee attendance data, including dates and times, providing a clear overview of workforce activity. Worked alongside an existing iOS-based clock-in application used by employees, integrating with its backend data rather than developing the mobile component. Delivered a straightforward and functional web interface focused on usability and accurate time record visibility.`,
    skills: ['NodeJs', 'NextJs', 'TypeScript', 'React', 'Tailwind CSS', 'Git'],
    url: '',
    images: [],
  },
  {
    name: 'virtulynx',
    type: 'project',
    title: 'CTO and Lead Developer',
    organization: 'Virtulynx',
    location: 'Kelowna B.C. Canada',
    startYear: 2024,
    endYear: 2025,
    paid: false,
    description: `Co-founded and built a SaaS platform for vehicle listings. Served as CTO, developing the full application and billing system.`,
    detailedDescription: `Co-founded Virtulynx, a startup focused on simplifying online vehicle listings for small used car dealerships, and served as Chief Technology Officer. Designed and built the entire application from the ground up. The platform allowed dealers to create vehicle listings by entering a VIN, automatically retrieving vehicle details, uploading photos, and generating complete listings with minimal manual input. Implemented AI-assisted description generation to help create professional vehicle listings efficiently. Developed functionality to distribute listings across multiple online marketplaces, streamlining multi-platform posting for dealers. Integrated Stripe for subscription billing and payment processing, delivering a fully functional, production-ready application. While the product did not achieve customer adoption, the project provided extensive hands-on experience in full-stack development, AI feature integration, payment systems, and building a complete SaaS platform from concept to deployment.`,
    skills: [
      'NodeJs',
      'NextJs',
      'TypeScript',
      'React',
      'Prisma',
      'PostgreSQL',
      'Docker',
      'Git',
      'Mui',
    ],
    url: '',
    images: [],
  },
  {
    name: 'jbj',
    type: 'employment',
    title: 'Computer Technician',
    organization: 'JBJ Computers',
    location: 'Vernon B.C. Canada',
    startYear: 2025,
    endYear: 2025,
    paid: true,
    description: `Computer technician providing hardware repair and technical support. Assisted customers with troubleshooting, upgrades, and data recovery.`,
    detailedDescription: `Computer Technician at JBJ Computers, a family-owned computer repair and support business. Provided direct technical support to customers, assisting with a wide range of software and hardware issues. Diagnosed and repaired laptops and desktops, including screen, fan, and hard drive replacements across various consumer devices. Performed data migrations, malware removal, and operating system troubleshooting on both Windows and macOS systems. Upgraded older machines by installing solid-state drives and additional memory to improve system performance. Delivered clear, patient, and approachable technical explanations, primarily supporting senior customers. Also supported front-of-house operations, including phone assistance, walk-in consultations, and payment processing, contributing to efficient daily store operations.`,
    skills: [],
    url: 'https://jbjcomputers.com/',
    images: [],
  },
  {
    name: 'web3-summit',
    type: 'hackathon',
    title: 'First Place winner',
    organization: 'Web Zero',
    location: 'Berlin, Germany',
    startYear: 2025,
    paid: true,
    endYear: 2025,
    description: `Won first place at a Web3 hackathon. Built a prototype cross-currency payment system using Polkadot technologies.`,
    detailedDescription: `Participated in a Web3 hackathon within the Polkadot ecosystem and, together with a partner, won first place on the main track along with multiple side bounties. Developed Nexor, a prototype cross-currency payment system designed to allow merchants to accept payments in any cryptocurrency while payers could transact using their preferred assets. Built the project under a tight three-day timeline, focusing on rapid prototyping and core concept validation. Integrated components from the Polkadot ecosystem, including Asset Hub, Hyperbridge, and ink!-based smart contracts. Implemented preliminary smart contract logic and developed a frontend to demonstrate the end-to-end user flow. Although the project remained a functional prototype rather than a production-ready system, it demonstrated the ability to quickly learn new technologies, collaborate effectively under pressure, and design blockchain-based payment concepts.`,
    skills: ['Rust', 'TypeScript'],
    url: 'https://github.com/web3summit/nexor',
    images: [],
  },
  {
    name: 'dragonfly',
    type: 'employment',
    title: 'Delivery Driver',
    organization: 'Dragonfly',
    location: 'Kamloops, B.C. Canada',
    startYear: 2025,
    endYear: 2025,
    paid: true,
    description: `Delivery driver in a fast-paced logistics environment. Handled sorting, deliveries, and returns in all weather conditions.`,
    detailedDescription: `Delivery Driver responsible for package pickup, sorting, and last-mile delivery in a fast-paced logistics environment. Loaded and organized packages within the delivery vehicle to support efficient routing, accurate deliveries, and safe handling of goods. Completed daily delivery routes while maintaining package accuracy and minimizing damage. Also handled customer return pickups as part of regular route responsibilities. Worked independently under tight schedules and performance expectations, adapting to changing delivery volumes and priorities. Regularly operated in all weather conditions, requiring reliability, physical endurance, and strong time management skills.`,
    skills: [],
    url: 'https://dragonflyshipping.ca/',
    images: [],
  },
  {
    name: 'startrek',
    type: 'project',
    title: 'Star Trek Acendancy Sim',
    organization: '',
    location: '',
    startYear: 2025,
    endYear: 2025,
    paid: false,
    description: `Built a battle simulation app to explore Firebase. Modeled probabilistic outcomes based on game rules and fleet configurations.`,
    detailedDescription: `Developed a personal simulation project to explore Firebase and probabilistic modeling by creating a space battle simulator inspired by the board game Star Trek: Ascendancy. Built an application that allowed users to input fleet configurations, including ship types, weapon levels, shield strengths, and other combat modifiers. Implemented a battle simulation engine that ran thousands of simulated engagements based on the game’s dice-driven combat rules. Displayed aggregated results to help players evaluate win probabilities and compare fleet effectiveness before in-game battles. The project focused on applying game logic, probability, and data handling within a simple interactive application.`,
    skills: ['React', 'TypeScript', 'TailwindCSS', 'Git', 'Firebase'],
    url: 'https://ascendancysim.fun/',
    images: [],
  },
  {
    name: 'profile-page',
    type: 'project',
    title: 'Profile Page',
    organization: '',
    location: '',
    startYear: 2023,
    endYear: null,
    paid: false,
    description: `Built a personal digital resume website. Showcased projects and experience with downloadable resume access.`,
    detailedDescription: `Designed and built a personal digital resume website to present professional experience and projects in a centralized, accessible format. Created a profile page showcasing career history, skills, and accomplishments, with functionality to download a complete resume. The project focused on clear presentation, usability, and providing a professional online presence.`,
    skills: ['React', 'JavaScript', 'Mui', 'Git'],
    url: 'https://ferdinand.haaben.net',
    images: [],
  },
  {
    name: 'checknix',
    type: 'freelance',
    title: 'Lead Software Developer',
    organization: 'Checknix',
    location: 'Remote',
    startYear: 2025,
    endYear: null,
    paid: true,
    description: `Lead developer of a Web3 services marketplace. Built escrow-based payments, encrypted messaging, and AI-assisted listings.`,
    detailedDescription: `Lead Developer of Checknix, an in-progress Web3 marketplace built on the Base blockchain. The platform enables users to connect a Web3 wallet, create service listings or job requests, and transact directly with other users using blockchain-based payments. Implemented a map-based search interface that allows users to discover nearby or relevant services, compare pricing, and evaluate providers through a reputation system. Designed and integrated smart contract–based escrow functionality to securely lock funds until a service is completed or canceled, ensuring trustless transactions for both parties. Supported payments using multiple ERC‑20 tokens with low transaction fees on Base. Built end-to-end encrypted user messaging, including encrypted image sharing, to enable private communication between users. Integrated AI features to assist users in generating service descriptions and job postings with minimal manual input. This project demonstrates experience with Web3 application architecture, smart contracts, escrow systems, encrypted communication, AI-assisted UX, and building a global decentralized marketplace.`,
    skills: [
      'NextJs',
      'TypeScript',
      'Mui',
      'Git',
      'Docker',
      'NodeJs',
      'Prisma',
      'PostgreSQL',
      'Solidity',
      'Linux',
    ],
    url: 'https://www.checknix.com',
    images: [],
  },
];

timelineData.forEach((item) => {
  if (item.name) {
    item.images = allImages[item.name] || [];
  }
});

const sortedTimelineData = timelineData
  .map((item, index) => ({ item, index }))
  .sort((a, b) => {
    const aEnd = a.item.endYear ?? Infinity;
    const bEnd = b.item.endYear ?? Infinity;
    if (bEnd !== aEnd) {
      return bEnd - aEnd;
    }
    return b.index - a.index;
  })
  .map(({ item }) => item);

export default function ExperienceTimeline() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <Box>
      <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          How I Got Here
        </Typography>
      </Box>

      <Timeline position="alternate">
        {sortedTimelineData.map((item, index) => (
          <TimelineEntry
            key={`${item.title}-${index}`}
            {...item}
            isLast={index === sortedTimelineData.length - 1}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </Timeline>

      <TimelineModal
        open={modalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </Box>
  );
}
