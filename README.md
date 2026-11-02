# WEDES5020-POE2
ST10515083, Oratilwe Masuku

# The Boys Thrive Foundation — Website

A static, multi-page website for **The Boys Thrive Foundation**, a non-profit
organisation supporting the mental health, emotional resilience, and social
development of boys and young men aged 12–25, particularly in
under-resourced communities.

> "Speak Up. Grow Strong. Thrive Together."

## BUSINESS OVERVIEW
Many young boys struggle with mental and emotional challenges but do not receive enough support. Society can sometimes teach boys that they should not show emotions or ask for help. As a result, some boys keep their problems to themselves and may turn to unhealthy behaviours such as substance abuse, violence or isolation. There is therefore a need for an organisation that provides boys with emotional support, mentorship and life skills.

## WEBSITE GOALS
The website will aim to:

1. Provide Mental Health Information
2. Encourage Boys to Talk About Their Feelings
3. Provide Access to Support
5. Promote Mentorship Programmes
6. Advertise Events and Activities
7. Provide Educational Resources
8. Recruit Volunteers and Mentors
9. Increase Awareness of the NGO
10. Encourage Donations and Partnerships
11. Create a Safe and Accessible Online Platform
12. Improve Communication

## FEATURES AND FUNCTIONALITY
1.the website will have a modern, welcoming and non-judgmental design. The language will be simple so that young people can easily understand the information.
2.The website will also work well on smartphones because many young people access the internet primarily through mobile devices.
3. Search Function: A search bar.
Functionality: Users can search for specific information, such as "stress", "mentorship", "events" or "volunteering."

## SITEMAP
1. Home Page
The homepage will introduce Boys Thrive Foundation and explain its purpose. It will include a welcoming message and links to the organisation's main services.
2. About Us
This page will explain the organisation's history, mission, vision, goals and team members.
3. Get Support
This page will provide information on how boys can seek help. It can include contact details for the NGO and links to professional support services.
4. Resources
This page will provide ways of dealing will with daily struggles
5. Contact Us
The contact page will provide an email address, telephone number, social media links and a contact form.

## REFERENCES
Reference listHeal SA. (2023). [online] HEAL SA. Available at: https://heal-sa.org.za/ [Accessed 14 Aug. 2026].Singapore Association for Mental Health (2018). Singapore Association for Mental Health : Mental wellness for all. [online] Samhealth.org.sg. Available at: https://www.samhealth.org.sg/ [Accessed 14 Aug. 2026].South African Federation for Mental Health (SAFMH). (2015). [online] Mental Health Innovation Network. Available at: https://www.mhinnovation.net/organisations/south-african-federation-mental-health-safmh [Accessed 14 Aug. 2026].Welcome - MASIVIWE - a movement for mental health. (2022). [online] MASIVIWE - A movement for mental health. Available at: https://masiviwe.org.za/ [Accessed 14 Aug. 2026].

## Project Structure(updated)

```
Web development Poe Part3/
├── public_html/              # Site root (served files)
│   ├── index.html
│   ├── About.html
│   ├── resources.html
│   ├── gallery.html
│   ├── get-support.html
│   ├── contact.html
│   ├── Style.css             # Shared stylesheet (identical copy in css/)
│   ├── css/
│   │   └── Style.css
│   └── javascript/
│       └── Js.js             # Shared script (see notes below)
├── images/
│   └── LOGO.png
├── nbproject/                # NetBeans project settings
├── test/                     # Empty test folder
├── bower.json / .bowerrc     # Bower config (no dependencies)
├── package.json              # npm metadata (no dependencies)
├── Gruntfile.js              # Empty Grunt template
└── gulpfile.js               # Empty Gulp template
```

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Landing page with a hero banner, three highlight cards (Resources, Mentorship, Community Events), and a 24/7 crisis helpline banner. |
| `About.html` | Describes the foundation's mission, vision, and the issues young men face. |
| `resources.html` | A grid of articles (stress, bullying, anger management, study tips, careers, self-esteem) plus an FAQ. |
| `get-support.html` | A form for visitors to request mentorship, group sessions, or counseling referrals. |
| `gallery.html` | A filterable image gallery of past events (mentorship, workshops, sports days). |
| `contact.html` | Contact details, an embedded map, banking details for donations, and a volunteer/mentor application form. |

## Tech Stack

- **HTML5** — semantic markup, one file per page
- **CSS3** — custom properties (CSS variables), Flexbox, CSS Grid, responsive media queries
-  Vanilla JavaScript (ES6)
- NetBeans project scaffolding (Bower, Grunt and Gulp files are unused templates)

 The site runs entirely in the browser.

## Design System

Colors and spacing are defined as CSS custom properties for consistency:

| Variable | Value | Use |
|---|---|---|
| `--primary-color` | `#1a365d` | Header, footer, headings |
| `--secondary-color` | `#2b6cb0` | Page headers, links |
| `--accent-color` | `#319795` | Highlights, buttons, hover states |
| `--light-bg` | `#f7fafc` | Page background |
| `--dark-text` | `#2d3748` | Body text |

The layout is responsive, with a breakpoint at `768px` that stacks the
navigation and hero content for mobile devices.



  
## Screenshots
<img width="1920" height="1080" alt="Screenshot 2026-09-18 202309" src="https://github.com/user-attachments/assets/efc45091-f9ef-4859-a04b-79a87e9b5232" />
<img width="739" height="1600" alt="WhatsApp Image 2026-09-18 at 20 24 11" src="https://github.com/user-attachments/assets/dbf59977-8214-4970-a0f3-c908050dcdc9" />
