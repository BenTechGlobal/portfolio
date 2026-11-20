/**
 * ============================================================================
 * CYBERSECURITY (15 CATEGORIES / 150 PROJECTS) & SOFTWARE PROJECTS DATA
 * ============================================================================
 * HOW TO UPDATE ANY PROJECT:
 * 1. Locate the project by its `id` (e.g., "grc-001", "net-004", "ai-001").
 * 2. Update `status` to one of:
 *    - "completed"
 *    - "in-progress"
 *    - "planned"
 * 3. Add the live GitHub repository URL to `githubUrl` (e.g.,
 *    "https://github.com/BenTechGlobal/iso27001-gap-analysis").
 *    Leave `githubUrl` as "" to display the clean editable placeholder.
 * ============================================================================
 */

const CYBERSECURITY_CATEGORIES = [
  {
    "id": "cat-01",
    "code": "01",
    "name": "Governance, Risk and Compliance (GRC) & Information Assurance",
    "shortName": "GRC & Info Assurance",
    "description": "Strategic starting focus: enterprise risk management, regulatory compliance mapping, third-party vendor oversight, and executive governance.",
    "projects": [
      {
        "id": "grc-001",
        "title": "Simulated ISO/IEC 27001 Compliance & Gap Analysis Project",
        "status": "in-progress",
        "description": "Comprehensive simulated ISMS readiness assessment mapping Clause 4\u201310 requirements and Annex A controls against an enterprise baseline.",
        "technologies": [
          "ISO/IEC 27001",
          "ISMS",
          "Gap Analysis",
          "Risk Register"
        ],
        "githubUrl": ""
      },
      {
        "id": "grc-002",
        "title": "Simulated Third-Party Vendor Risk Assessment Project",
        "status": "in-progress",
        "description": "Structured third-party risk management (TPRM) evaluation covering vendor tiering, security questionnaires, inherent vs. residual risk scoring, and remediation tracking.",
        "technologies": [
          "TPRM",
          "Vendor Risk",
          "NIST 800-161",
          "Due Diligence"
        ],
        "githubUrl": ""
      },
      {
        "id": "grc-003",
        "title": "Enterprise Information Security Policy Suite Development",
        "status": "planned",
        "description": "Drafting modular Acceptable Use, Access Control, Data Classification, and Incident Response policies aligned with business objectives.",
        "technologies": [
          "Policy Governance",
          "ISO 27002",
          "Security Policy"
        ],
        "githubUrl": ""
      },
      {
        "id": "grc-004",
        "title": "NIST Cybersecurity Framework (CSF 2.0) Maturity Assessment",
        "status": "planned",
        "description": "Evaluating organisational posture across Govern, Identify, Protect, Detect, Respond, and Recover functions with a phased remediation roadmap.",
        "technologies": [
          "NIST CSF 2.0",
          "Maturity Modelling",
          "Governance"
        ],
        "githubUrl": ""
      },
      {
        "id": "grc-005",
        "title": "Quantitative & Qualitative Enterprise Risk Register Model",
        "status": "planned",
        "description": "Building an executive risk register calculating likelihood, business impact, risk appetite thresholds, and control treatment plans.",
        "technologies": [
          "Risk Assessment",
          "FAIR Concepts",
          "Risk Treatment"
        ],
        "githubUrl": ""
      },
      {
        "id": "grc-006",
        "title": "Business Impact Analysis (BIA) & Disaster Recovery Governance Plan",
        "status": "planned",
        "description": "Defining Recovery Time Objectives (RTO), Recovery Point Objectives (RPO), and critical asset dependencies for operational resilience.",
        "technologies": [
          "BIA",
          "BCP/DRP",
          "ISO 22301"
        ],
        "githubUrl": ""
      },
      {
        "id": "grc-007",
        "title": "Data Privacy & Regulatory Mapping (NDPR / GDPR Readiness)",
        "status": "planned",
        "description": "Mapping personal data flows, lawful processing bases, data subject rights workflows, and breach notification obligations.",
        "technologies": [
          "NDPR",
          "GDPR",
          "Data Privacy",
          "DPIA"
        ],
        "githubUrl": ""
      },
      {
        "id": "grc-008",
        "title": "Security Control Mapping Matrix (ISO 27001, SOC 2 & NIST 800-53)",
        "status": "planned",
        "description": "Creating a unified cross-framework control matrix to eliminate duplicate audit evidence collection across multiple standards.",
        "technologies": [
          "SOC 2",
          "NIST 800-53",
          "ISO 27001",
          "Compliance Mapping"
        ],
        "githubUrl": ""
      },
      {
        "id": "grc-009",
        "title": "Internal Security Audit Checklist & Evidence Collection Workbook",
        "status": "planned",
        "description": "Designing an auditor-ready evidence tracker and sampling methodology for verifying control operating effectiveness.",
        "technologies": [
          "Internal Audit",
          "Control Testing",
          "Audit Readiness"
        ],
        "githubUrl": ""
      },
      {
        "id": "grc-010",
        "title": "Board-Level Cybersecurity Risk & KRI Reporting Dashboard",
        "status": "planned",
        "description": "Translating technical vulnerabilities and compliance metrics into Key Risk Indicators (KRIs) for non-technical executive leadership.",
        "technologies": [
          "Executive Reporting",
          "KRIs",
          "Security Metrics"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-02",
    "code": "02",
    "name": "Cybersecurity Fundamentals & Core Security Practices",
    "shortName": "Security Fundamentals",
    "description": "Core defensive hygiene, cryptographic principles, hardening baselines, and foundational security architecture.",
    "projects": [
      {
        "id": "fund-001",
        "title": "CIA Triad & Defense-in-Depth Architecture Case Study",
        "status": "planned",
        "description": "Designing layered administrative, technical, and physical controls for a mid-sized enterprise network.",
        "technologies": [
          "CIA Triad",
          "Defense-in-Depth",
          "Security Architecture"
        ],
        "githubUrl": ""
      },
      {
        "id": "fund-002",
        "title": "CIS Benchmarks Endpoint Hardening Baseline (Windows & Linux)",
        "status": "planned",
        "description": "Implementing and auditing system hardening configurations across workstation and server operating systems.",
        "technologies": [
          "CIS Benchmarks",
          "OS Hardening",
          "Baseline Auditing"
        ],
        "githubUrl": ""
      },
      {
        "id": "fund-003",
        "title": "Applied Cryptography & PKI Certificate Lifecycle Lab",
        "status": "planned",
        "description": "Generating root/intermediate CAs, issuing TLS certificates, and verifying hashing, symmetric, and asymmetric encryption workflows.",
        "technologies": [
          "PKI",
          "TLS/SSL",
          "OpenSSL",
          "Cryptography"
        ],
        "githubUrl": ""
      },
      {
        "id": "fund-004",
        "title": "Password Policy, MFA & Credential Hygiene Assessment",
        "status": "planned",
        "description": "Evaluating authentication resistance against credential stuffing and brute-force attacks using NIST SP 800-63B guidelines.",
        "technologies": [
          "NIST 800-63B",
          "MFA",
          "Authentication Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "fund-005",
        "title": "Enterprise Patch & Vulnerability Lifecycle Workflow",
        "status": "planned",
        "description": "Establishing SLA-driven vulnerability prioritisation using CVSS v3.1/v4.0 scores and asset criticality.",
        "technologies": [
          "CVSS",
          "Patch Management",
          "Vulnerability Lifecycle"
        ],
        "githubUrl": ""
      },
      {
        "id": "fund-006",
        "title": "Secure File Integrity Monitoring (FIM) Deployment",
        "status": "planned",
        "description": "Configuring cryptographic hash monitoring on critical system binaries and configuration directories to detect unauthorized changes.",
        "technologies": [
          "FIM",
          "Integrity Monitoring",
          "System Hardening"
        ],
        "githubUrl": ""
      },
      {
        "id": "fund-007",
        "title": "Removable Media & Data Loss Prevention (DLP) Control Plan",
        "status": "planned",
        "description": "Designing endpoint device control policies and sensitive data egress restrictions.",
        "technologies": [
          "DLP",
          "Endpoint Controls",
          "Data Protection"
        ],
        "githubUrl": ""
      },
      {
        "id": "fund-008",
        "title": "Small-Enterprise Security Operations Runbook",
        "status": "planned",
        "description": "Documenting standard operating procedures for onboarding, offboarding, backup verification, and access reviews.",
        "technologies": [
          "SOPs",
          "Access Reviews",
          "Operational Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "fund-009",
        "title": "Secure Backup & Immutable Recovery Verification Lab",
        "status": "planned",
        "description": "Testing 3-2-1-1-0 backup architecture and simulated ransomware recovery validation.",
        "technologies": [
          "Backup Security",
          "Ransomware Resilience",
          "Recovery Testing"
        ],
        "githubUrl": ""
      },
      {
        "id": "fund-010",
        "title": "Security Control Effectiveness & Gap Remediation Tracker",
        "status": "planned",
        "description": "Tracking baseline security posture improvements across people, process, and technology domains.",
        "technologies": [
          "Security Posture",
          "Control Validation",
          "Remediation"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-03",
    "code": "03",
    "name": "Network Security & Infrastructure Protection",
    "shortName": "Network Security",
    "description": "Perimeter defense, network segmentation, traffic inspection, secure remote access, and intrusion detection.",
    "projects": [
      {
        "id": "net-001",
        "title": "Enterprise VLAN Segmentation & Zero-Trust Subnet Design",
        "status": "planned",
        "description": "Designing isolated VLANs for management, corporate workstations, guest Wi-Fi, and DMZ servers with strict ACL enforcement.",
        "technologies": [
          "VLANs",
          "Subnetting",
          "Network Segmentation",
          "ACLs"
        ],
        "githubUrl": ""
      },
      {
        "id": "net-002",
        "title": "pfSense / OPNsense Next-Generation Firewall Rulebase Lab",
        "status": "planned",
        "description": "Configuring stateful firewall policies, NAT, geo-blocking, and egress filtering in a virtualized lab environment.",
        "technologies": [
          "pfSense",
          "Firewall Rules",
          "Egress Filtering"
        ],
        "githubUrl": ""
      },
      {
        "id": "net-003",
        "title": "Snort / Suricata Intrusion Detection & Prevention (IDS/IPS) Tuning",
        "status": "planned",
        "description": "Deploying signature-based IDS rules and analysing alert fidelity against simulated network scans and exploit traffic.",
        "technologies": [
          "Suricata",
          "Snort",
          "IDS/IPS",
          "Signature Tuning"
        ],
        "githubUrl": ""
      },
      {
        "id": "net-004",
        "title": "Wireshark Packet Capture & Protocol Anomaly Investigation",
        "status": "planned",
        "description": "Inspecting PCAP files to identify ARP spoofing, DNS tunneling, cleartext credentials, and suspicious C2 beaconing.",
        "technologies": [
          "Wireshark",
          "PCAP Analysis",
          "TCP/IP",
          "Traffic Inspection"
        ],
        "githubUrl": ""
      },
      {
        "id": "net-005",
        "title": "Site-to-Site IPsec & WireGuard VPN Architecture Lab",
        "status": "planned",
        "description": "Establishing encrypted remote access and branch-to-headquarters tunnels with strong cipher suites.",
        "technologies": [
          "WireGuard",
          "IPsec VPN",
          "Encrypted Tunnels"
        ],
        "githubUrl": ""
      },
      {
        "id": "net-006",
        "title": "DNS Security & Sinkholing Implementation (Pi-hole / Unbound)",
        "status": "planned",
        "description": "Configuring DNSSEC validation, DNS-over-HTTPS/TLS, and malicious domain sinkholing to block command-and-control lookups.",
        "technologies": [
          "DNSSEC",
          "DNS Sinkhole",
          "DoH/DoT"
        ],
        "githubUrl": ""
      },
      {
        "id": "net-007",
        "title": "Wireless Network (WPA3-Enterprise / RADIUS) Security Lab",
        "status": "planned",
        "description": "Implementing 802.1X certificate-based wireless authentication and rogue access point detection.",
        "technologies": [
          "WPA3-Enterprise",
          "802.1X",
          "RADIUS",
          "Wireless Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "net-008",
        "title": "Network Access Control (NAC) & Port Security Enforcement",
        "status": "planned",
        "description": "Configuring DHCP snooping, Dynamic ARP Inspection (DAI), and 802.1X switch port security to prevent rogue device connections.",
        "technologies": [
          "Port Security",
          "DAI",
          "DHCP Snooping",
          "NAC"
        ],
        "githubUrl": ""
      },
      {
        "id": "net-009",
        "title": "DDoS Mitigation & Rate-Limiting Reverse Proxy Lab",
        "status": "planned",
        "description": "Configuring upstream rate-limiting, SYN flood protections, and resilient load-balancing architectures.",
        "technologies": [
          "DDoS Mitigation",
          "Rate Limiting",
          "Reverse Proxy"
        ],
        "githubUrl": ""
      },
      {
        "id": "net-010",
        "title": "Network Topology Discovery & Asset Inventory Mapping",
        "status": "planned",
        "description": "Conducting authorized network discovery and maintaining an accurate CMDB network diagram.",
        "technologies": [
          "Nmap",
          "Asset Discovery",
          "Network Architecture"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-04",
    "code": "04",
    "name": "Cyber Threat Intelligence & Threat Hunting",
    "shortName": "Threat Intelligence",
    "description": "Adversary tradecraft analysis, MITRE ATT&CK mapping, IOC enrichment, and hypothesis-driven threat hunting.",
    "projects": [
      {
        "id": "cti-001",
        "title": "MITRE ATT&CK Adversary Emulation & TTP Mapping Report",
        "status": "planned",
        "description": "Mapping an APT campaign's Tactics, Techniques, and Procedures (TTPs) to defensive detection coverage.",
        "technologies": [
          "MITRE ATT&CK",
          "TTP Mapping",
          "Adversary Analysis"
        ],
        "githubUrl": ""
      },
      {
        "id": "cti-002",
        "title": "Open-Source Threat Intelligence (OSINT) Collection Pipeline",
        "status": "planned",
        "description": "Aggregating and normalising Indicators of Compromise (IOCs) from reputable threat feeds using structured STIX/TAXII formats.",
        "technologies": [
          "OSINT",
          "STIX/TAXII",
          "IOC Enrichment"
        ],
        "githubUrl": ""
      },
      {
        "id": "cti-003",
        "title": "Diamond Model & Cyber Kill Chain Intrusion Analysis",
        "status": "planned",
        "description": "Deconstructing a documented breach using the Diamond Model of Intrusion Analysis to identify adversary infrastructure and capability gaps.",
        "technologies": [
          "Diamond Model",
          "Cyber Kill Chain",
          "Threat Analysis"
        ],
        "githubUrl": ""
      },
      {
        "id": "cti-004",
        "title": "MISP Threat Intelligence Sharing Platform Lab",
        "status": "planned",
        "description": "Deploying a local MISP instance to correlate threat events, attributes, and detection signatures.",
        "technologies": [
          "MISP",
          "Threat Sharing",
          "IOC Correlation"
        ],
        "githubUrl": ""
      },
      {
        "id": "cti-005",
        "title": "Hypothesis-Driven Threat Hunt: Living-off-the-Land Binaries (LOLBins)",
        "status": "planned",
        "description": "Formulating hunting hypotheses and querying endpoint telemetry for abuse of PowerShell, certutil, and mshta.",
        "technologies": [
          "Threat Hunting",
          "LOLBins",
          "Endpoint Telemetry"
        ],
        "githubUrl": ""
      },
      {
        "id": "cti-006",
        "title": "Phishing Infrastructure & Domain Lookalike Tracking",
        "status": "planned",
        "description": "Analysing typosquatted domains, certificate transparency logs, and WHOIS/DNS patterns targeting financial and enterprise brands.",
        "technologies": [
          "Brand Protection",
          "DNS Intelligence",
          "Phishing Analysis"
        ],
        "githubUrl": ""
      },
      {
        "id": "cti-007",
        "title": "YARA Rule Authoring for Malware Family Classification",
        "status": "planned",
        "description": "Writing and testing custom YARA signatures based on strings, byte sequences, and PE header characteristics.",
        "technologies": [
          "YARA",
          "Malware Classification",
          "Detection Engineering"
        ],
        "githubUrl": ""
      },
      {
        "id": "cti-008",
        "title": "Executive Strategic Threat Landscape Briefing",
        "status": "planned",
        "description": "Producing a sector-specific quarterly threat intelligence brief tailored for CISOs and risk committees.",
        "technologies": [
          "Strategic CTI",
          "Executive Briefing",
          "Risk Intelligence"
        ],
        "githubUrl": ""
      },
      {
        "id": "cti-009",
        "title": "Ransomware Group Extortion & Initial Access Trend Study",
        "status": "planned",
        "description": "Analysing initial access brokers, vulnerable edge appliances, and double-extortion tactics.",
        "technologies": [
          "Ransomware Trends",
          "Initial Access",
          "CTI Reporting"
        ],
        "githubUrl": ""
      },
      {
        "id": "cti-010",
        "title": "Threat Intelligence Driven Detection Coverage Gap Matrix",
        "status": "planned",
        "description": "Prioritising SIEM/EDR detection rules based on threat actors actively targeting the organisation's industry vertical.",
        "technologies": [
          "Detection Coverage",
          "ATT&CK Navigator",
          "CTI-Driven Defense"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-05",
    "code": "05",
    "name": "Security Operations Center (SOC) & Incident Response",
    "shortName": "SOC & Incident Response",
    "description": "Alert triage, SIEM log correlation, digital forensics fundamentals, and structured incident containment.",
    "projects": [
      {
        "id": "soc-001",
        "title": "Home SOC Lab: Wazuh SIEM & Endpoint Telemetry Deployment",
        "status": "planned",
        "description": "Deploying Wazuh manager and agents across Windows and Linux endpoints to centralize security event logs.",
        "technologies": [
          "Wazuh",
          "SIEM",
          "Log Ingestion",
          "SOC Lab"
        ],
        "githubUrl": ""
      },
      {
        "id": "soc-002",
        "title": "Windows Sysmon & Event Log Attack Detection Lab",
        "status": "planned",
        "description": "Configuring SwiftOnSecurity Sysmon baselines to detect process injection, credential dumping, and lateral movement.",
        "technologies": [
          "Sysmon",
          "Windows Event Logs",
          "Endpoint Detection"
        ],
        "githubUrl": ""
      },
      {
        "id": "soc-003",
        "title": "Sigma Rule Writing & SIEM Query Translation",
        "status": "planned",
        "description": "Authoring vendor-agnostic Sigma detection rules and converting them into SIEM search queries.",
        "technologies": [
          "Sigma Rules",
          "Detection Engineering",
          "SIEM Queries"
        ],
        "githubUrl": ""
      },
      {
        "id": "soc-004",
        "title": "Phishing Email Header & Payload Triage Playbook",
        "status": "planned",
        "description": "Analysing SPF/DKIM/DMARC authentication headers, malicious attachments, and URL redirects in a sandboxed workflow.",
        "technologies": [
          "Phishing Triage",
          "Email Headers",
          "SOAR Playbook"
        ],
        "githubUrl": ""
      },
      {
        "id": "soc-005",
        "title": "NIST SP 800-61 Incident Response Plan & Tabletop Exercise",
        "status": "planned",
        "description": "Developing an end-to-end IR lifecycle playbook (Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned).",
        "technologies": [
          "NIST 800-61",
          "Incident Response",
          "Tabletop Exercise"
        ],
        "githubUrl": ""
      },
      {
        "id": "soc-006",
        "title": "Brute-Force & Impossible Travel Alert Investigation",
        "status": "planned",
        "description": "Correlating authentication logs to distinguish benign VPN anomalies from credential compromise.",
        "technologies": [
          "Alert Triage",
          "Authentication Logs",
          "SOC Analyst"
        ],
        "githubUrl": ""
      },
      {
        "id": "soc-007",
        "title": "Memory Forensics Triage with Volatility 3",
        "status": "planned",
        "description": "Analysing a simulated compromised RAM image to identify rogue processes, network sockets, and injected DLLs.",
        "technologies": [
          "Volatility 3",
          "Memory Forensics",
          "DFIR"
        ],
        "githubUrl": ""
      },
      {
        "id": "soc-008",
        "title": "Disk & Timeline Forensics Investigation Lab",
        "status": "planned",
        "description": "Reconstructing attacker filesystem activity and persistence mechanisms using forensic timeline artifacts.",
        "technologies": [
          "Digital Forensics",
          "Timeline Analysis",
          "DFIR"
        ],
        "githubUrl": ""
      },
      {
        "id": "soc-009",
        "title": "SOAR Automated Alert Enrichment Workflow",
        "status": "planned",
        "description": "Designing automated IP/hash reputation lookups to reduce Tier-1 SOC analyst mean-time-to-triage (MTTT).",
        "technologies": [
          "SOAR",
          "Automation",
          "Alert Enrichment"
        ],
        "githubUrl": ""
      },
      {
        "id": "soc-010",
        "title": "Post-Incident Root Cause Analysis (RCA) & Executive Report",
        "status": "planned",
        "description": "Writing a formal post-mortem detailing timeline, root cause, blast radius, and corrective control recommendations.",
        "technologies": [
          "Root Cause Analysis",
          "Incident Reporting",
          "Lessons Learned"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-06",
    "code": "06",
    "name": "Vulnerability Management & Penetration Testing",
    "shortName": "Vuln Mgmt & Pentesting",
    "description": "Authorized vulnerability scanning, ethical exploitation methodology, privilege escalation analysis, and remediation reporting.",
    "projects": [
      {
        "id": "pent-001",
        "title": "Authenticated vs. Unauthenticated Vulnerability Scanning Lab",
        "status": "planned",
        "description": "Running OpenVAS/Nessus scans against intentionally vulnerable VMs and comparing false-positive rates.",
        "technologies": [
          "OpenVAS",
          "Vulnerability Scanning",
          "Credentialed Scans"
        ],
        "githubUrl": ""
      },
      {
        "id": "pent-002",
        "title": "Active Directory Lab: Enumeration & Kerberoasting Defense",
        "status": "planned",
        "description": "Building an isolated AD lab to study BloodHound attack paths, Kerberoasting, and Tier-0 administrative hardening.",
        "technologies": [
          "Active Directory",
          "BloodHound",
          "Kerberoasting"
        ],
        "githubUrl": ""
      },
      {
        "id": "pent-003",
        "title": "Linux Privilege Escalation Audit & Remediation Lab",
        "status": "planned",
        "description": "Identifying misconfigured SUID binaries, sudo permissions, and cron jobs on intentionally vulnerable Linux hosts.",
        "technologies": [
          "Linux PrivEsc",
          "LinPEAS",
          "System Hardening"
        ],
        "githubUrl": ""
      },
      {
        "id": "pent-004",
        "title": "Windows Privilege Escalation & Service Misconfiguration Lab",
        "status": "planned",
        "description": "Analysing unquoted service paths, weak registry permissions, and token privileges in a controlled lab.",
        "technologies": [
          "Windows PrivEsc",
          "WinPEAS",
          "Access Controls"
        ],
        "githubUrl": ""
      },
      {
        "id": "pent-005",
        "title": "External Attack Surface Discovery & Reconnaissance Report",
        "status": "planned",
        "description": "Conducting passive and active enumeration of subdomains, exposed services, and TLS configurations on authorized targets.",
        "technologies": [
          "Reconnaissance",
          "Attack Surface",
          "Nmap"
        ],
        "githubUrl": ""
      },
      {
        "id": "pent-006",
        "title": "PTES & OWASP Methodology Penetration Test Report",
        "status": "planned",
        "description": "Producing a professional penetration testing report featuring executive summary, risk ratings, PoC steps, and remediation guidance.",
        "technologies": [
          "PTES",
          "Pentest Reporting",
          "Remediation"
        ],
        "githubUrl": ""
      },
      {
        "id": "pent-007",
        "title": "Network Service Exploitation & Post-Exploitation Lab (HTB / THM)",
        "status": "planned",
        "description": "Documenting structured walkthroughs and defensive takeaways from TryHackMe and Hack The Box machines.",
        "technologies": [
          "TryHackMe",
          "Hack The Box",
          "Ethical Hacking"
        ],
        "githubUrl": ""
      },
      {
        "id": "pent-008",
        "title": "Wireless Security Auditing & Evil Twin Risk Demonstration",
        "status": "planned",
        "description": "Demonstrating WPA2-PSK handshake capture weaknesses and justifying WPA3/802.1X enterprise controls.",
        "technologies": [
          "Wireless Auditing",
          "WPA2/WPA3",
          "Network Defense"
        ],
        "githubUrl": ""
      },
      {
        "id": "pent-009",
        "title": "Password Cracking Resilience Benchmark (Hashcat)",
        "status": "planned",
        "description": "Testing password complexity and hashing algorithms (MD5, NTLM, bcrypt, Argon2) to demonstrate cryptographic storage strength.",
        "technologies": [
          "Hashcat",
          "Password Hashing",
          "Argon2"
        ],
        "githubUrl": ""
      },
      {
        "id": "pent-010",
        "title": "Vulnerability Remediation Verification & Retest Tracker",
        "status": "planned",
        "description": "Validating security patches and configuration fixes through structured retesting cycles.",
        "technologies": [
          "Retesting",
          "Vulnerability Management",
          "Verification"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-07",
    "code": "07",
    "name": "Application Security (AppSec) & Web Security",
    "shortName": "AppSec & Web Security",
    "description": "OWASP Top 10 vulnerability remediation, secure coding in JavaScript/Python, API security, and browser defense headers.",
    "projects": [
      {
        "id": "app-001",
        "title": "OWASP Juice Shop Vulnerability Exploitation & Code Fix Lab",
        "status": "planned",
        "description": "Identifying and remediating SQL Injection, XSS, IDOR, and Broken Access Control flaws.",
        "technologies": [
          "OWASP Top 10",
          "Burp Suite",
          "AppSec"
        ],
        "githubUrl": ""
      },
      {
        "id": "app-002",
        "title": "Cross-Site Scripting (XSS) & Content Security Policy (CSP) Hardening",
        "status": "planned",
        "description": "Implementing strict CSP headers, output encoding, and DOM sanitization in vanilla JavaScript applications.",
        "technologies": [
          "XSS Prevention",
          "CSP",
          "DOM Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "app-003",
        "title": "Secure REST API Authentication & Authorization Lab (JWT / OAuth2)",
        "status": "planned",
        "description": "Testing and mitigating broken object-level authorization (BOLA), weak JWT signing, and rate-limit bypasses.",
        "technologies": [
          "OWASP API Top 10",
          "JWT",
          "OAuth 2.0"
        ],
        "githubUrl": ""
      },
      {
        "id": "app-004",
        "title": "Static Application Security Testing (SAST) with Semgrep",
        "status": "planned",
        "description": "Integrating Semgrep rules into a code repository to catch insecure coding patterns prior to deployment.",
        "technologies": [
          "SAST",
          "Semgrep",
          "Secure Code Review"
        ],
        "githubUrl": ""
      },
      {
        "id": "app-005",
        "title": "Software Composition Analysis (SCA) & SBOM Generation",
        "status": "planned",
        "description": "Generating Software Bills of Materials (SBOM) and scanning third-party dependencies for known CVEs.",
        "technologies": [
          "SBOM",
          "SCA",
          "Supply Chain Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "app-006",
        "title": "HTTP Security Headers & TLS Configuration Auditor",
        "status": "planned",
        "description": "Auditing HSTS, X-Frame-Options, Referrer-Policy, and Permissions-Policy across web deployments.",
        "technologies": [
          "Security Headers",
          "HSTS",
          "Web Hardening"
        ],
        "githubUrl": ""
      },
      {
        "id": "app-007",
        "title": "Cross-Site Request Forgery (CSRF) & SameSite Cookie Lab",
        "status": "planned",
        "description": "Demonstrating CSRF attack mechanics and implementing anti-CSRF tokens alongside SameSite cookie attributes.",
        "technologies": [
          "CSRF",
          "Session Security",
          "Cookie Hardening"
        ],
        "githubUrl": ""
      },
      {
        "id": "app-008",
        "title": "Server-Side Request Forgery (SSRF) Prevention Architecture",
        "status": "planned",
        "description": "Implementing allow-listing, metadata service protection, and egress controls to mitigate SSRF.",
        "technologies": [
          "SSRF",
          "Cloud Metadata",
          "Input Validation"
        ],
        "githubUrl": ""
      },
      {
        "id": "app-009",
        "title": "Secure File Upload Validation & Malware Scanning Pipeline",
        "status": "planned",
        "description": "Enforcing MIME-type verification, filename sanitization, and isolated storage for user-uploaded files.",
        "technologies": [
          "File Upload Security",
          "Input Sanitization",
          "AppSec"
        ],
        "githubUrl": ""
      },
      {
        "id": "app-010",
        "title": "STRIDE Threat Modeling for a Full-Stack Web Application",
        "status": "planned",
        "description": "Conducting a data-flow diagram (DFD) threat model using STRIDE to identify architectural flaws before coding.",
        "technologies": [
          "STRIDE",
          "Threat Modeling",
          "Secure Design"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-08",
    "code": "08",
    "name": "Cloud Security & DevSecOps",
    "shortName": "Cloud & DevSecOps",
    "description": "Cloud posture management, Zero Trust cloud architecture, CI/CD pipeline security, and container hardening.",
    "projects": [
      {
        "id": "cld-001",
        "title": "Azure Zero Trust Architecture & Defender for Cloud Blueprint",
        "status": "planned",
        "description": "Applying SC-100 and AZ-500 concepts to design segmented Azure virtual networks, NSGs, and security posture baselines.",
        "technologies": [
          "Microsoft Azure",
          "AZ-500",
          "SC-100",
          "Zero Trust"
        ],
        "githubUrl": ""
      },
      {
        "id": "cld-002",
        "title": "Cloud Security Posture Management (CSPM) Audit with Prowler / ScoutSuite",
        "status": "planned",
        "description": "Scanning cloud configurations for public storage buckets, overly permissive IAM roles, and unencrypted volumes.",
        "technologies": [
          "CSPM",
          "Cloud Auditing",
          "Misconfiguration"
        ],
        "githubUrl": ""
      },
      {
        "id": "cld-003",
        "title": "GitHub Actions CI/CD DevSecOps Security Pipeline",
        "status": "planned",
        "description": "Automating secret scanning, SAST, and dependency checks on every pull request using GitHub Actions.",
        "technologies": [
          "DevSecOps",
          "GitHub Actions",
          "CI/CD Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "cld-004",
        "title": "Secret Detection & Credential Rotation Automation (Gitleaks)",
        "status": "planned",
        "description": "Scanning repository commit histories for exposed API keys and establishing secret vault hygiene.",
        "technologies": [
          "Gitleaks",
          "Secrets Management",
          "Git Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "cld-005",
        "title": "Docker Container Hardening & Trivy Image Vulnerability Scanning",
        "status": "planned",
        "description": "Building minimal non-root container images and blocking high-severity CVEs in image builds.",
        "technologies": [
          "Docker",
          "Trivy",
          "Container Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "cld-006",
        "title": "Infrastructure as Code (IaC) Security Scanning with Checkov",
        "status": "planned",
        "description": "Validating Terraform templates against CIS cloud benchmarks prior to infrastructure provisioning.",
        "technologies": [
          "Terraform",
          "Checkov",
          "IaC Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "cld-007",
        "title": "Cloud Storage Encryption, Key Vault & Access Logging Lab",
        "status": "planned",
        "description": "Enforcing customer-managed keys (CMK), private endpoints, and immutable audit logging for cloud object storage.",
        "technologies": [
          "Key Vault",
          "Encryption at Rest",
          "Cloud Logging"
        ],
        "githubUrl": ""
      },
      {
        "id": "cld-008",
        "title": "Kubernetes RBAC & Network Policy Isolation Lab",
        "status": "planned",
        "description": "Restricting pod-to-pod communication and enforcing least-privilege Role-Based Access Control in Kubernetes.",
        "technologies": [
          "Kubernetes",
          "K8s RBAC",
          "Network Policies"
        ],
        "githubUrl": ""
      },
      {
        "id": "cld-009",
        "title": "Shared Responsibility Matrix & Cloud Vendor Due Diligence",
        "status": "planned",
        "description": "Documenting security control boundaries across IaaS, PaaS, and SaaS deployments for enterprise governance.",
        "technologies": [
          "Shared Responsibility",
          "Cloud GRC",
          "SaaS Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "cld-010",
        "title": "Cloud Incident Response & Compromised Access Key Runbook",
        "status": "planned",
        "description": "Step-by-step containment playbook for revoking leaked cloud tokens and auditing CloudTrail/Activity logs.",
        "technologies": [
          "Cloud IR",
          "Token Revocation",
          "Audit Logs"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-09",
    "code": "09",
    "name": "Identity and Access Management (IAM)",
    "shortName": "Identity & Access (IAM)",
    "description": "Least privilege enforcement, federated authentication, privileged access governance, and identity lifecycle automation.",
    "projects": [
      {
        "id": "iam-001",
        "title": "Role-Based & Attribute-Based Access Control (RBAC/ABAC) Design",
        "status": "planned",
        "description": "Designing granular enterprise permission models eliminating standing administrative privileges.",
        "technologies": [
          "RBAC",
          "ABAC",
          "Least Privilege"
        ],
        "githubUrl": ""
      },
      {
        "id": "iam-002",
        "title": "Single Sign-On (SSO) Federation Lab with SAML 2.0 & OIDC",
        "status": "planned",
        "description": "Configuring an Identity Provider (Keycloak / Entra ID) to authenticate multiple web applications securely.",
        "technologies": [
          "SAML 2.0",
          "OIDC",
          "SSO",
          "Keycloak"
        ],
        "githubUrl": ""
      },
      {
        "id": "iam-003",
        "title": "Privileged Access Management (PAM) & Just-in-Time (JIT) Elevation",
        "status": "planned",
        "description": "Designing break-glass account procedures, session recording, and time-bound administrative elevation.",
        "technologies": [
          "PAM",
          "JIT Access",
          "Break-Glass Accounts"
        ],
        "githubUrl": ""
      },
      {
        "id": "iam-004",
        "title": "Conditional Access & Phishing-Resistant MFA Policy Lab",
        "status": "planned",
        "description": "Implementing device-compliance and location-aware Conditional Access rules paired with FIDO2/WebAuthn.",
        "technologies": [
          "Conditional Access",
          "FIDO2",
          "WebAuthn",
          "MFA"
        ],
        "githubUrl": ""
      },
      {
        "id": "iam-005",
        "title": "Joiner-Mover-Leaver (JML) Identity Lifecycle Governance",
        "status": "planned",
        "description": "Mapping automated provisioning and immediate deprovisioning workflows to prevent orphaned accounts.",
        "technologies": [
          "Identity Lifecycle",
          "JML",
          "Access Governance"
        ],
        "githubUrl": ""
      },
      {
        "id": "iam-006",
        "title": "Quarterly User Access Review & Toxic Combination Audit",
        "status": "planned",
        "description": "Detecting Segregation of Duties (SoD) conflicts and excessive privilege creep across business roles.",
        "technologies": [
          "Segregation of Duties",
          "Access Certification",
          "IAM Audit"
        ],
        "githubUrl": ""
      },
      {
        "id": "iam-007",
        "title": "Service Account & Non-Human Identity (NHI) Governance",
        "status": "planned",
        "description": "Inventorying API tokens, service principals, and machine identities with automated rotation policies.",
        "technologies": [
          "Non-Human Identity",
          "Service Principals",
          "Credential Hygiene"
        ],
        "githubUrl": ""
      },
      {
        "id": "iam-008",
        "title": "Active Directory Tiering Model (Tier 0 / Tier 1 / Tier 2) Blueprint",
        "status": "planned",
        "description": "Isolating domain controllers and identity infrastructure from workstation credential exposure.",
        "technologies": [
          "AD Tiering",
          "Identity Hardening",
          "Lateral Movement Defense"
        ],
        "githubUrl": ""
      },
      {
        "id": "iam-009",
        "title": "OAuth Consent Phishing & App Governance Defense",
        "status": "planned",
        "description": "Restricting third-party application consent permissions and auditing OAuth token grants.",
        "technologies": [
          "OAuth Governance",
          "Consent Phishing",
          "Cloud Identity"
        ],
        "githubUrl": ""
      },
      {
        "id": "iam-010",
        "title": "Identity Threat Detection & Response (ITDR) Use-Case Matrix",
        "status": "planned",
        "description": "Defining detection alerts for MFA fatigue, token theft, and anomalous directory role assignments.",
        "technologies": [
          "ITDR",
          "Identity Telemetry",
          "Detection Use Cases"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-10",
    "code": "10",
    "name": "AI Security, AI Governance & Emerging Tech Security",
    "shortName": "AI Security & Governance",
    "description": "Securing Large Language Models, AI risk governance (NIST AI RMF), adversarial robustness, and human-in-the-loop controls.",
    "projects": [
      {
        "id": "ai-001",
        "title": "OWASP Top 10 for Large Language Models (LLMs) Threat Assessment",
        "status": "planned",
        "description": "Evaluating LLM applications against prompt injection, insecure output handling, and sensitive data disclosure.",
        "technologies": [
          "OWASP LLM Top 10",
          "Prompt Injection",
          "AI Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "ai-002",
        "title": "NIST AI Risk Management Framework (AI RMF 1.0) Governance Profile",
        "status": "planned",
        "description": "Operationalising Govern, Map, Measure, and Manage functions for enterprise AI deployment.",
        "technologies": [
          "NIST AI RMF",
          "AI Governance",
          "Trustworthy AI"
        ],
        "githubUrl": ""
      },
      {
        "id": "ai-003",
        "title": "Prompt Injection & Jailbreak Defense Guardrail Testing Lab",
        "status": "planned",
        "description": "Testing input/output filtering, system prompt isolation, and privilege separation for AI assistants.",
        "technologies": [
          "LLM Guardrails",
          "Adversarial Prompts",
          "AI Testing"
        ],
        "githubUrl": ""
      },
      {
        "id": "ai-004",
        "title": "Retrieval-Augmented Generation (RAG) Access Control & Data Leakage Lab",
        "status": "planned",
        "description": "Preventing cross-tenant or unauthorized document retrieval in vector databases and RAG pipelines.",
        "technologies": [
          "RAG Security",
          "Vector DB",
          "Access Control"
        ],
        "githubUrl": ""
      },
      {
        "id": "ai-005",
        "title": "Enterprise Shadow AI Acceptable Use & Data Classification Policy",
        "status": "planned",
        "description": "Drafting clear governance rules regulating employee use of public generative AI tools with proprietary data.",
        "technologies": [
          "Shadow AI",
          "AI Policy",
          "Data Governance"
        ],
        "githubUrl": ""
      },
      {
        "id": "ai-006",
        "title": "AI Supply Chain & Model Provenance Verification Checklist",
        "status": "planned",
        "description": "Evaluating third-party foundation models, serialized pickle risks, and dataset integrity.",
        "technologies": [
          "AI Supply Chain",
          "Model Provenance",
          "MLSecOps"
        ],
        "githubUrl": ""
      },
      {
        "id": "ai-007",
        "title": "EU AI Act & Global AI Regulatory Readiness Mapping",
        "status": "planned",
        "description": "Categorising AI use cases by risk tier and documenting transparency and human-oversight obligations.",
        "technologies": [
          "EU AI Act",
          "AI Compliance",
          "Regulatory Mapping"
        ],
        "githubUrl": ""
      },
      {
        "id": "ai-008",
        "title": "Human-in-the-Loop (HITL) Security Decision Architecture",
        "status": "planned",
        "description": "Designing governance checkpoints ensuring AI-assisted security tools augment rather than replace human accountability.",
        "technologies": [
          "Human-in-the-Loop",
          "AI Oversight",
          "Decision Governance"
        ],
        "githubUrl": ""
      },
      {
        "id": "ai-009",
        "title": "Deepfake & AI-Enhanced Social Engineering Awareness Module",
        "status": "planned",
        "description": "Developing verification protocols and executive awareness training against voice-cloning and synthetic media fraud.",
        "technologies": [
          "Deepfake Defense",
          "Social Engineering",
          "Security Awareness"
        ],
        "githubUrl": ""
      },
      {
        "id": "ai-010",
        "title": "AI-Assisted SOC Triage Reliability & Hallucination Audit",
        "status": "planned",
        "description": "Benchmarking where AI accelerates log summarization versus where deterministic rules and human review remain mandatory.",
        "technologies": [
          "SOC Automation",
          "AI Verification",
          "Reliability Audit"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-11",
    "code": "11",
    "name": "Automotive, OT/ICS & IoT Security",
    "shortName": "Automotive, OT & IoT",
    "description": "Bridging OPSWAT ICIP certification and hands-on automotive mechanical heritage into connected vehicle, CAN bus, and industrial control security.",
    "projects": [
      {
        "id": "ot-001",
        "title": "Purdue Enterprise Reference Architecture & OT/IT Segmentation Design",
        "status": "planned",
        "description": "Applying OPSWAT ICIP principles to isolate corporate IT networks from industrial control systems via an Industrial DMZ.",
        "technologies": [
          "OPSWAT ICIP",
          "Purdue Model",
          "OT/ICS Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "ot-002",
        "title": "Automotive CAN Bus Architecture & Connected Vehicle Threat Model",
        "status": "planned",
        "description": "Leveraging practical automotive mechanical knowledge to model OBD-II, ECU, infotainment, and telematics attack surfaces.",
        "technologies": [
          "Automotive IoT",
          "CAN Bus",
          "Connected Vehicles"
        ],
        "githubUrl": ""
      },
      {
        "id": "ot-003",
        "title": "UN R155 / ISO/SAE 21434 Automotive Cybersecurity Governance Study",
        "status": "planned",
        "description": "Mapping Cybersecurity Management System (CSMS) requirements for modern software-defined vehicles.",
        "technologies": [
          "ISO/SAE 21434",
          "UN R155",
          "Automotive CSMS"
        ],
        "githubUrl": ""
      },
      {
        "id": "ot-004",
        "title": "Modbus TCP & Industrial Protocol Traffic Inspection Lab",
        "status": "planned",
        "description": "Analysing cleartext ICS protocol packets in Wireshark and defining anomaly detection baselines.",
        "technologies": [
          "Modbus TCP",
          "ICS Protocols",
          "Wireshark"
        ],
        "githubUrl": ""
      },
      {
        "id": "ot-005",
        "title": "OT Kiosk & Removable Media Sanitization Workflow",
        "status": "planned",
        "description": "Designing unidirectional gateway and multi-engine malware scanning procedures for maintenance laptops entering OT zones.",
        "technologies": [
          "OPSWAT MetaDefender",
          "Removable Media",
          "Critical Infrastructure"
        ],
        "githubUrl": ""
      },
      {
        "id": "ot-006",
        "title": "Smart Home & Enterprise IoT Device Network Isolation Lab",
        "status": "planned",
        "description": "Segmenting unmanaged IoT sensors onto restricted VLANs with strict DNS and egress firewall rules.",
        "technologies": [
          "IoT Security",
          "Network Isolation",
          "Zero Trust IoT"
        ],
        "githubUrl": ""
      },
      {
        "id": "ot-007",
        "title": "IoT Firmware Extraction & Hardcoded Credential Audit",
        "status": "planned",
        "description": "Inspecting open-source IoT firmware images with Binwalk to identify insecure services and default credentials.",
        "technologies": [
          "Firmware Analysis",
          "Binwalk",
          "Embedded Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "ot-008",
        "title": "MQTT & CoAP IoT Messaging Security Configuration Lab",
        "status": "planned",
        "description": "Securing IoT telemetry brokers using TLS mutual authentication and topic-level ACLs.",
        "technologies": [
          "MQTT",
          "TLS",
          "IoT Protocols"
        ],
        "githubUrl": ""
      },
      {
        "id": "ot-009",
        "title": "Critical Infrastructure Ransomware Tabletop Scenario (Water / Energy)",
        "status": "planned",
        "description": "Simulating an IT-to-OT incident containment exercise ensuring physical safety and operational continuity.",
        "technologies": [
          "Critical Infrastructure",
          "OT Incident Response",
          "Tabletop"
        ],
        "githubUrl": ""
      },
      {
        "id": "ot-010",
        "title": "Automotive Telematics & Fleet Data Privacy Risk Assessment",
        "status": "planned",
        "description": "Evaluating geolocation, driver telemetry, and third-party API risks in connected fleet ecosystems.",
        "technologies": [
          "Fleet Telematics",
          "Privacy Risk",
          "Connected Mobility"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-12",
    "code": "12",
    "name": "Cryptography & Privacy Engineering",
    "shortName": "Cryptography & Privacy",
    "description": "Mathematical foundations of modern cryptography, zero-knowledge concepts, data anonymization, and privacy-by-design.",
    "projects": [
      {
        "id": "cry-001",
        "title": "Mathematical Foundations of RSA & Elliptic Curve Cryptography (ECC)",
        "status": "planned",
        "description": "Connecting B.Sc. Mathematics number theory and modular arithmetic to asymmetric key exchange and digital signatures.",
        "technologies": [
          "Mathematics",
          "RSA",
          "ECC",
          "Number Theory"
        ],
        "githubUrl": ""
      },
      {
        "id": "cry-002",
        "title": "TLS 1.3 Handshake & Cipher Suite Hardening Lab",
        "status": "planned",
        "description": "Inspecting TLS 1.3 key exchange, Perfect Forward Secrecy (PFS), and eliminating deprecated protocol versions.",
        "technologies": [
          "TLS 1.3",
          "Perfect Forward Secrecy",
          "Protocol Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "cry-003",
        "title": "Cryptographic Key Management Lifecycle & Rotation Policy",
        "status": "planned",
        "description": "Designing key generation, storage, escrow, rotation, and destruction standards aligned with NIST SP 800-57.",
        "technologies": [
          "NIST 800-57",
          "Key Management",
          "KMS"
        ],
        "githubUrl": ""
      },
      {
        "id": "cry-004",
        "title": "Data Anonymization & k-Anonymity Privacy Lab in Python",
        "status": "planned",
        "description": "Applying masking, pseudonymization, and k-anonymity techniques to protect tabular datasets prior to analytics.",
        "technologies": [
          "Privacy Engineering",
          "k-Anonymity",
          "Python"
        ],
        "githubUrl": ""
      },
      {
        "id": "cry-005",
        "title": "Privacy by Design (PbD) Architecture Review Checklist",
        "status": "planned",
        "description": "Embedding data minimization, purpose limitation, and default privacy controls into software design reviews.",
        "technologies": [
          "Privacy by Design",
          "Data Minimization",
          "DPIA"
        ],
        "githubUrl": ""
      },
      {
        "id": "cry-006",
        "title": "End-to-End Encryption (E2EE) & Signal Protocol Conceptual Analysis",
        "status": "planned",
        "description": "Analysing double-ratchet key evolution, forward secrecy, and post-compromise security.",
        "technologies": [
          "E2EE",
          "Forward Secrecy",
          "Cryptographic Protocols"
        ],
        "githubUrl": ""
      },
      {
        "id": "cry-007",
        "title": "Digital Signatures & Document Integrity Verification Tool",
        "status": "planned",
        "description": "Building a lightweight verification workflow demonstrating detached cryptographic signatures for audit records.",
        "technologies": [
          "Digital Signatures",
          "SHA-256",
          "Integrity"
        ],
        "githubUrl": ""
      },
      {
        "id": "cry-008",
        "title": "Post-Quantum Cryptography (PQC) Migration Readiness Briefing",
        "status": "planned",
        "description": "Evaluating NIST PQC standards (ML-KEM / ML-DSA) and cryptographic inventory strategies for long-lived data.",
        "technologies": [
          "Post-Quantum Crypto",
          "NIST PQC",
          "Crypto Agility"
        ],
        "githubUrl": ""
      },
      {
        "id": "cry-009",
        "title": "Database Field-Level Encryption vs. Transparent Data Encryption (TDE)",
        "status": "planned",
        "description": "Comparing threat models and performance trade-offs across storage-layer and application-layer encryption.",
        "technologies": [
          "Database Encryption",
          "TDE",
          "Data Protection"
        ],
        "githubUrl": ""
      },
      {
        "id": "cry-010",
        "title": "Cryptographic Misuse Code Audit (Weak Randomness & ECB Mode)",
        "status": "planned",
        "description": "Identifying insecure PRNG usage, hardcoded IVs, and ECB block cipher flaws in sample applications.",
        "technologies": [
          "Secure Crypto",
          "Code Audit",
          "CSPRNG"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-13",
    "code": "13",
    "name": "Security Engineering, Automation & Tooling (Python / JS)",
    "shortName": "Security Automation",
    "description": "Applying software engineering and Python/JavaScript skills to build custom security utilities, parsers, and assessment tools.",
    "projects": [
      {
        "id": "eng-001",
        "title": "Custom Multi-Track Certification Exam & Assessment Simulator",
        "status": "in-progress",
        "description": "Dependency-free web simulator supporting structured question banks, timed sessions, and domain performance analytics for Security+ and Network+ prep.",
        "technologies": [
          "Vanilla JavaScript",
          "HTML5/CSS3",
          "Assessment Engine"
        ],
        "githubUrl": ""
      },
      {
        "id": "eng-002",
        "title": "Python Security Log Parser & Brute-Force Anomaly Detector",
        "status": "planned",
        "description": "Writing a Python CLI utility to parse SSH/web server logs and flag threshold-exceeding IP addresses.",
        "technologies": [
          "Python",
          "Log Analysis",
          "CLI Tooling"
        ],
        "githubUrl": ""
      },
      {
        "id": "eng-003",
        "title": "Automated Web Security Header & TLS Posture Checker",
        "status": "planned",
        "description": "Building a lightweight scanner script that inspects HTTP response headers and grades defensive configurations.",
        "technologies": [
          "Python",
          "HTTP Security",
          "Automation"
        ],
        "githubUrl": ""
      },
      {
        "id": "eng-004",
        "title": "Password Entropy & Policy Compliance Validator",
        "status": "planned",
        "description": "Developing a client-side JavaScript utility calculating mathematical password entropy and checking against NIST rules.",
        "technologies": [
          "JavaScript",
          "Entropy Math",
          "Authentication"
        ],
        "githubUrl": ""
      },
      {
        "id": "eng-005",
        "title": "CVE & NVD Feed Enrichment Script",
        "status": "planned",
        "description": "Querying public vulnerability APIs in Python to enrich asset inventories with CVSS scores and patch references.",
        "technologies": [
          "Python",
          "NVD API",
          "Vulnerability Enrichment"
        ],
        "githubUrl": ""
      },
      {
        "id": "eng-006",
        "title": "File Integrity & Baseline Diff Utility in Python",
        "status": "planned",
        "description": "Creating a SHA-256 directory snapshotter that detects added, modified, or deleted files across audits.",
        "technologies": [
          "Python",
          "SHA-256",
          "Integrity Monitoring"
        ],
        "githubUrl": ""
      },
      {
        "id": "eng-007",
        "title": "Interactive GRC Control Mapping & Risk Calculator Web App",
        "status": "planned",
        "description": "Building a browser-based risk scoring and ISO 27001 / NIST CSF control crosswalk tool.",
        "technologies": [
          "Vanilla JS",
          "GRC Tooling",
          "Risk Matrix"
        ],
        "githubUrl": ""
      },
      {
        "id": "eng-008",
        "title": "Phishing Email Header Analyzer Web Utility",
        "status": "planned",
        "description": "Client-side tool parsing Received headers, SPF/DKIM results, and authentication paths without uploading sensitive emails.",
        "technologies": [
          "JavaScript",
          "Email Forensics",
          "Privacy-First"
        ],
        "githubUrl": ""
      },
      {
        "id": "eng-009",
        "title": "Subdomain & DNS Record Enumeration Script",
        "status": "planned",
        "description": "Building an educational DNS reconnaissance utility resolving A, AAAA, MX, TXT, and NS records.",
        "technologies": [
          "Python",
          "DNS",
          "Recon Tooling"
        ],
        "githubUrl": ""
      },
      {
        "id": "eng-010",
        "title": "Automated Compliance Evidence Packager",
        "status": "planned",
        "description": "Python script organising audit screenshots, policy hashes, and timestamps into structured archive bundles.",
        "technologies": [
          "Python",
          "Audit Automation",
          "Compliance"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-14",
    "code": "14",
    "name": "Human Factor, Social Engineering & Security Awareness",
    "shortName": "Human Factor & Awareness",
    "description": "Inspired by Christopher Hadnagy and Kevin Mitnick\u2014strengthening the human layer through psychology-informed awareness and training.",
    "projects": [
      {
        "id": "hum-001",
        "title": "Social Engineering Attack Vector Taxonomy & Defense Guide",
        "status": "planned",
        "description": "Synthesising elicitation, pretexting, baiting, and tailgating frameworks into actionable organizational defenses.",
        "technologies": [
          "Social Engineering",
          "Pretexting",
          "Human Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "hum-002",
        "title": "Role-Based Security Awareness Curriculum for Non-Technical Staff",
        "status": "planned",
        "description": "Leveraging secondary school and adult teaching experience to design clear, jargon-free security training modules.",
        "technologies": [
          "Security Awareness",
          "Instructional Design",
          "Training"
        ],
        "githubUrl": ""
      },
      {
        "id": "hum-003",
        "title": "Phishing Simulation Design & Psychological Trigger Analysis",
        "status": "planned",
        "description": "Designing ethical phishing awareness templates measuring urgency, authority, and curiosity triggers without shaming users.",
        "technologies": [
          "Phishing Awareness",
          "Behavioural Security",
          "Metrics"
        ],
        "githubUrl": ""
      },
      {
        "id": "hum-004",
        "title": "Executive & Finance Team Business Email Compromise (BEC) Playbook",
        "status": "planned",
        "description": "Establishing out-of-band payment verification workflows to defeat wire-fraud and executive impersonation.",
        "technologies": [
          "BEC Defense",
          "Financial Controls",
          "Verification"
        ],
        "githubUrl": ""
      },
      {
        "id": "hum-005",
        "title": "Helpdesk & Call-Center Identity Verification Protocol",
        "status": "planned",
        "description": "Designing anti-vishing caller authentication workflows to prevent password-reset social engineering.",
        "technologies": [
          "Anti-Vishing",
          "Helpdesk Security",
          "Identity Verification"
        ],
        "githubUrl": ""
      },
      {
        "id": "hum-006",
        "title": "Physical Security & Tailgating Walk-Through Assessment",
        "status": "planned",
        "description": "Auditing badge access, visitor logs, clean-desk adherence, and shoulder-surfing exposure in office environments.",
        "technologies": [
          "Physical Security",
          "Clean Desk",
          "Visitor Management"
        ],
        "githubUrl": ""
      },
      {
        "id": "hum-007",
        "title": "Security Champion Program Blueprint for Engineering & Business Units",
        "status": "planned",
        "description": "Structuring an internal security champions network to scale security culture across departments.",
        "technologies": [
          "Security Culture",
          "Security Champions",
          "Governance"
        ],
        "githubUrl": ""
      },
      {
        "id": "hum-008",
        "title": "Incident Reporting Culture & Blame-Free Escalation Guide",
        "status": "planned",
        "description": "Lowering reporting friction so employees immediately escalate suspected phishing or lost devices.",
        "technologies": [
          "Incident Reporting",
          "Security Culture",
          "Human Factors"
        ],
        "githubUrl": ""
      },
      {
        "id": "hum-009",
        "title": "Mobile Device & Remote Work Security Hygiene Handbook",
        "status": "planned",
        "description": "Practical guidance covering public Wi-Fi risks, device encryption, SIM-swap prevention, and travel security.",
        "technologies": [
          "Remote Work Security",
          "Mobile Hygiene",
          "OPSEC"
        ],
        "githubUrl": ""
      },
      {
        "id": "hum-010",
        "title": "Security Awareness Program Effectiveness & Behavioural Metrics Report",
        "status": "planned",
        "description": "Measuring training impact through reporting rates, time-to-report, and control adoption rather than click rates alone.",
        "technologies": [
          "Awareness Metrics",
          "Behavioural Change",
          "GRC"
        ],
        "githubUrl": ""
      }
    ]
  },
  {
    "id": "cat-15",
    "code": "15",
    "name": "Capstone Cross-Domain Cybersecurity Case Studies",
    "shortName": "Capstone Case Studies",
    "description": "End-to-end multidisciplinary projects uniting GRC governance, technical architecture, incident response, and executive communication.",
    "projects": [
      {
        "id": "cap-001",
        "title": "Capstone 1: End-to-End Security Architecture & GRC Program for a FinTech Startup",
        "status": "planned",
        "description": "Designing ISO 27001 governance, cloud Zero Trust controls, API security baselines, and incident response runbooks from scratch.",
        "technologies": [
          "Capstone",
          "FinTech Security",
          "ISO 27001",
          "Architecture"
        ],
        "githubUrl": ""
      },
      {
        "id": "cap-002",
        "title": "Capstone 2: Healthcare Clinic Ransomware Resilience & Patient Data Protection Plan",
        "status": "planned",
        "description": "Combining network segmentation, immutable backups, staff phishing training, and privacy compliance.",
        "technologies": [
          "Healthcare Security",
          "Ransomware Defense",
          "Privacy"
        ],
        "githubUrl": ""
      },
      {
        "id": "cap-003",
        "title": "Capstone 3: Connected Automotive Fleet & Telematics Cybersecurity Assessment",
        "status": "planned",
        "description": "Integrating automotive mechanical expertise with ISO/SAE 21434 risk assessment and cloud API security.",
        "technologies": [
          "Connected Fleet",
          "ISO/SAE 21434",
          "IoT Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "cap-004",
        "title": "Capstone 4: Enterprise AI Adoption Governance & LLM Security Framework",
        "status": "planned",
        "description": "Uniting NIST AI RMF, OWASP LLM Top 10 guardrails, data classification, and employee acceptable use policies.",
        "technologies": [
          "AI Governance",
          "NIST AI RMF",
          "LLM Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "cap-005",
        "title": "Capstone 5: Full-Cycle Breach Simulation \u2014 From Phishing Initial Access to Board Report",
        "status": "planned",
        "description": "Executing and documenting a complete simulated intrusion timeline across detection, forensics, containment, and executive RCA.",
        "technologies": [
          "Full-Cycle Simulation",
          "SOC + GRC",
          "Executive Briefing"
        ],
        "githubUrl": ""
      },
      {
        "id": "cap-006",
        "title": "Capstone 6: Public-Sector Water Utility OT/IT Security Modernization Blueprint",
        "status": "planned",
        "description": "Applying field utility experience and OPSWAT ICIP principles to critical infrastructure protection.",
        "technologies": [
          "Critical Infrastructure",
          "OPSWAT ICIP",
          "Utility Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "cap-007",
        "title": "Capstone 7: Third-Party SaaS Ecosystem Risk & Identity Federation Overhaul",
        "status": "planned",
        "description": "Consolidating vendor risk scoring, SSO/OIDC federation, and automated offboarding governance.",
        "technologies": [
          "TPRM",
          "IAM Federation",
          "SaaS Governance"
        ],
        "githubUrl": ""
      },
      {
        "id": "cap-008",
        "title": "Capstone 8: E-Commerce Platform PCI-DSS & AppSec Hardening Initiative",
        "status": "planned",
        "description": "Aligning payment flow segmentation, OWASP Top 10 remediation, and continuous vulnerability management.",
        "technologies": [
          "PCI-DSS Concepts",
          "AppSec",
          "Segmentation"
        ],
        "githubUrl": ""
      },
      {
        "id": "cap-009",
        "title": "Capstone 9: Small-to-Medium Enterprise 90-Day Cybersecurity Transformation Roadmap",
        "status": "planned",
        "description": "Prioritising high-impact, budget-conscious security controls across CIS Implementation Group 1 (IG1).",
        "technologies": [
          "CIS IG1",
          "90-Day Roadmap",
          "SME Security"
        ],
        "githubUrl": ""
      },
      {
        "id": "cap-010",
        "title": "Capstone 10: Multidisciplinary Cybersecurity Portfolio & Knowledge Base Synthesis",
        "status": "planned",
        "description": "Consolidating lessons, methodologies, scripts, and governance templates across all 150 projects into a public reference library.",
        "technologies": [
          "Knowledge Base",
          "Portfolio Synthesis",
          "Open Documentation"
        ],
        "githubUrl": ""
      }
    ]
  }
];

const SOFTWARE_PROJECTS = [
  {
    "id": "sw-001",
    "tag": "Assessment & EdTech Tool",
    "title": "CodingHamme Multi-Track Certification Exam Simulator",
    "description": "Custom-engineered browser-based practice exam simulator built to support rigorous preparation across CompTIA Security+ (SY0-701), CompTIA Network+ (N10-009), ISC2 CC, and IT certification tracks with domain scoring and instant explanations.",
    "technologies": [
      "HTML5",
      "CSS3",
      "Vanilla ES6+ JavaScript",
      "Modular Architecture"
    ],
    "githubUrl": "https://github.com/BenTechGlobal",
    "liveUrl": "https://github.com/BenTechGlobal"
  },
  {
    "id": "sw-002",
    "tag": "Institutional Web Platform",
    "title": "CIU Labs \u2014 Laboratory & Device Inventory Web Application",
    "description": "Responsive laboratory management prototype implementing role-based interface views, laboratory module CRUD workflows, and structured hardware/device inventory tracking.",
    "technologies": [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript",
      "State Management"
    ],
    "githubUrl": "https://github.com/BenTechGlobal",
    "liveUrl": "https://github.com/BenTechGlobal"
  },
  {
    "id": "sw-003",
    "tag": "Commercial Brand Web Builds",
    "title": "Responsive Business & Service Web Prototypes (EkidamsOutfits, Ayetoro Autos, Sharxe)",
    "description": "Suite of lightweight, dependency-free responsive websites engineered for bespoke fashion, automotive services, food/retail, and creative design brands\u2014prioritising fast load speeds and clean mobile UX.",
    "technologies": [
      "Semantic HTML5",
      "Responsive CSS3",
      "Vanilla JS",
      "GitHub Pages"
    ],
    "githubUrl": "https://github.com/BenTechGlobal",
    "liveUrl": "https://github.com/BenTechGlobal"
  },
  {
    "id": "sw-004",
    "tag": "Client-Side Utility",
    "title": "Personal Expense & Financial Record Tracker",
    "description": "Client-side personal finance and budget tracking web application featuring category filtering, summary calculations, and local storage persistence without external server dependencies.",
    "technologies": [
      "HTML5",
      "CSS3",
      "Vanilla ES6+ JS",
      "LocalStorage API"
    ],
    "githubUrl": "https://github.com/BenTechGlobal",
    "liveUrl": "https://github.com/BenTechGlobal"
  }
];
