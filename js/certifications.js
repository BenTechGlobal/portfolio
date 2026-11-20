/**
 * ============================================================================
 * CERTIFICATIONS & PROFESSIONAL CREDENTIALS DATA
 * ============================================================================
 * HOW TO UPDATE:
 * - Allowed status values:
 *   "certified"         -> Displays "Certified"
 *   "in-progress"       -> Displays "In Progress"
 *   "course-completed"  -> Displays "Course Completed – Certification Pending"
 *   "planned"           -> Displays "Planned"
 * ============================================================================
 */

const CERTIFICATIONS_DATA = [
  {
    id: "cert-opswat-icip",
    title: "OPSWAT Industrial Cybersecurity Protection (ICIP)",
    issuer: "OPSWAT Academy",
    status: "certified",
    statusLabel: "Certified",
    date: "2026",
    description:
      "Awarded certification validating foundational knowledge in critical infrastructure protection, OT/ICS security concepts, and industrial cyber defense principles.",
    verificationNote: "Verified on LinkedIn profile."
  },
  {
    id: "cert-comptia-secplus",
    title: "CompTIA Security+ (SY0-701)",
    issuer: "CompTIA",
    status: "course-completed",
    statusLabel: "Course Completed – Certification Pending",
    date: "2026",
    description:
      "Completed full SY0-701 syllabus study and achieved strong practice exam performance across Pearson Test Prep, Sybex/Wiley, and a custom-built exam simulator. Seeking exam sponsorship to sit for the official voucher exam.",
    verificationNote: "Study syllabus completed; exam sitting pending funding/voucher."
  },
  {
    id: "cert-comptia-netplus",
    title: "CompTIA Network+ (N10-009)",
    issuer: "CompTIA",
    status: "in-progress",
    statusLabel: "In Progress",
    date: "2026",
    description:
      "Finalising preparation across OSI/TCP-IP networking, routing, switching, subnetting, network security, and troubleshooting using structured practice exams. Seeking exam sponsorship.",
    verificationNote: "Active final exam preparation."
  },
  {
    id: "cert-isc2-cc",
    title: "ISC2 Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    status: "in-progress",
    statusLabel: "In Progress (Pre-Assessment Completed)",
    date: "2026",
    description:
      "Completed the official ISC2 CC pre-assessment and actively preparing to schedule and sit for the certification examination.",
    verificationNote: "Pre-assessment completed."
  },
  {
    id: "cert-ms-az500",
    title: "Microsoft Certified: Azure Security Engineer Associate (AZ-500)",
    issuer: "Microsoft",
    status: "course-completed",
    statusLabel: "Course & Pre-Assessment Completed",
    date: "Mid-2026",
    description:
      "Completed the AZ-500 training course and passed the official Microsoft pre-assessment examination covering Azure identity, platform protection, and security operations. Official certification exam not yet taken.",
    verificationNote: "Course & pre-assessment evidenced on LinkedIn."
  },
  {
    id: "cert-ms-sc100",
    title: "Microsoft Certified: Cybersecurity Architect Expert (SC-100)",
    issuer: "Microsoft",
    status: "course-completed",
    statusLabel: "Course & Pre-Assessment Completed",
    date: "Mid-2026",
    description:
      "Completed the SC-100 architectural training course and passed the pre-assessment covering Zero Trust strategy, governance, and cloud security posture. Official certification exam not yet taken.",
    verificationNote: "Course & pre-assessment evidenced on LinkedIn."
  },
  {
    id: "cert-offensive-future",
    title: "CPENT & OSCP (Offensive Security Track)",
    issuer: "EC-Council / OffSec",
    status: "planned",
    statusLabel: "Planned",
    date: "Future Roadmap",
    description:
      "Long-term offensive security career target following hands-on Capture The Flag (CTF) lab execution on TryHackMe (THM) and Hack The Box (HTB).",
    verificationNote: "Future professional development goal."
  }
];
