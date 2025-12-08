---
title: "Job Applications Pipeline"
description: "Automated workflow to parse job descriptions and tailor resumes/applications using n8n and Generative AI."
tags: ["n8n", "GenAI", "Automation"]
---

This project is an automated pipeline built to streamline the job application process.

**How it works:**
1.  **Ingestion**: Parses job descriptions from various sources (LinkedIn, company sites).
2.  **Analysis**: Uses LLMs (via OpenAI/Anthropic APIs) to extract key requirements and skills.
3.  **Tailoring**: Automatically adjusts my resume and generating a custom cover letter that highlights relevant experience.
4.  **Tracking**: Logs all applications in a centralized database (Airtable) for follow-up.

It leverages low-code automation (n8n) combined with powerful AI models to reduce the manual overhead of job hunting while increasing application quality.
