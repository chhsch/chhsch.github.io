import "./ExperiencePage.css"
import { motion } from 'framer-motion';

export default function ExperiencePage() {
    const timelineVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.3,
            },
        }),
    };

    const experiences = [
        {
            title: "Specialist Software Engineering LP",
            company: "Acuity",
            location: "Atlanta, GA",
            period: "Jul. 2025 - Present",
            details: [
                "1st Rotation: NPD team – SensorView",
"2nd Rotation: Atrius Energy and Sustainability",
            ],
        },
        {
            title: "Big Data Platform Engineer Intern",
            company: "Eviden",
            location: "Reston, VA",
            period: "Aug. 2024 - Jan. 2025",
            details: [
                "Collaborated with senior engineers to maintain and optimize the data platform while working closely with a global team. I automated real-time data pipelines using Apache NiFi and Kafka, ensuring efficient data flow and strengthening security with SIEM tools for comprehensive monitoring and event management.",
            ],
        },
        {
            title: "Graduate Research Assistant",
            company: "Virginia Tech",
            location: "Falls Church, VA",
            period: "May. 2024 - Aug. 2024",
            details: [
                "Project: Designing Social Cyber Vulnerability Measures to Protect Older Adults Online",
                "Analyzed 10 years of scammer data and streamlined real-time data processing to support the FTC in identifying and addressing online scams targeting older adults."
            ],
        },


        {
            title: "Research Assistant",
            company: "Academia Sinica",
            location: "Taipei, Taiwan",
            period: "Jun. 2021 - Aug. 2023",
            details: [
                '<a href="https://ieeexplore.ieee.org/document/10123790" target="_blank" rel="noopener noreferrer">Project: Automatic Adhesive Capsulitis Assessment Systems </a>',
                "2023 11th International IEEE/EMBS Conference on Neural Engineering (NER)",
                "Engineered a data infrastructure with wearable IMUs for clinical trials, optimized data management with Pandas, and improved model performance by 32% using SMOTE. Applied transfer learning to increase classification accuracy from 43% to 75%.",
            ],
        },
        {
            title: "Dietitian Intern",
            company: "Taipei Municipal Wanfang Hospital",
            location: "Taipei, Taiwan",
            period: "Jan 2021 - May 2021",
            details: [
                "Designed diet-control plans for patients and monitored their progress over 4 months, and supported medical public relations in market surveys of nutritional supplements.",
            ],
        },
        {
            title: "Dietitian Intern",
            company: "Cofit Healthcare Inc.",
            location: "Taipei, Taiwan",
            period: "July 2019 - June 2021",
            details: [
                "Analyzed data for the Children's Diet Project, wrote articles on health nutrition, edited promotional videos, designed personalized diets for clients, and assisted with program shoots.",
            ],
        },
        {
            title: "Medical PR Consultant Intern",
            company: "Vision Medical PR Consultants Ltd",
            location: "Taipei, Taiwan",
            period: "July 2020 - Sept 2020",
            details: [
                "Edited medical society health education videos using Premiere and Final Cut Pro, assisted with media monitoring, and supported pre-operation tasks for press conferences.",
            ],
        },
    ];

    return (

        <div id="work" className="experience-section">
            <h1 className="timeline-title">Work Experience</h1>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.2}}
                        variants={timelineVariants}
                    >
                        <div className="content">
                            <h2>{exp.title}</h2>
                            <h4>{exp.company}</h4>
                            <p className="timeline-period">{exp.location}</p>
                            <p className="timeline-period">{exp.period}</p>

                            {/* ✅ Render details with clickable links */}
                            <ul>
                                {exp.details.map((detail, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{__html: detail}}/>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
                <div className="timeline-line"></div>
                {/* Central vertical line */}
            </div>
        </div>
    );
}