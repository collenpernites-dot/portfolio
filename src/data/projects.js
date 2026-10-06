import loginSystem from '../assets/projects/login-system.svg'
import socialMedia from '../assets/projects/social-media.svg'
import graphicDesign from '../assets/projects/graphic-design.svg'
import dataEntry from '../assets/projects/data-entry.svg'
import uiuxProjects from '../assets/projects/uiux-projects.svg'
import adminWork from '../assets/projects/admin-work.svg'

export const projects = [
  {
    title: 'Visual Login & Data Entry System',
    category: 'UI/UX',
    image: loginSystem,
    role: 'UI/UX Designer · Photographer · Visual Designer',
    description:
      'A user-focused interface concept designed to improve the login and data-entry experience through clear visual hierarchy, structured forms, and intuitive interaction.',
    tools: ['Figma', 'Photoshop', 'Canva'],
  },
  {
    title: 'Social Media Design Campaign',
    category: 'Social Media',
    image: socialMedia,
    role: 'Social Media Manager · Graphic Designer',
    description: 'A content series of branded posts, stories, and campaign graphics built for consistent voice and audience engagement.',
    tools: ['Canva', 'CapCut', 'Meta Business Suite'],
  },
  {
    title: 'Brand Graphics Bundle',
    category: 'Graphic Design',
    image: graphicDesign,
    role: 'Graphic Designer',
    description: 'Marketing materials, presentation decks, and promotional visuals produced with a consistent brand identity.',
    tools: ['Canva', 'Photoshop', 'Illustrator'],
  },
  {
    title: 'Data Entry & Records Project',
    category: 'Data Entry',
    image: dataEntry,
    role: 'Data Entry Specialist',
    description: 'Organized raw records into clean, validated spreadsheets with consistent formatting and accuracy checks.',
    tools: ['Excel', 'Google Sheets', 'Airtable'],
  },
  {
    title: 'UI/UX Concept Screens',
    category: 'UI/UX',
    image: uiuxProjects,
    role: 'UI/UX Designer',
    description: 'Wireframes and high-fidelity screens exploring clean layouts, accessible forms, and intuitive navigation.',
    tools: ['Figma', 'FigJam'],
  },
  {
    title: 'Administrative Support Workflow',
    category: 'Development',
    image: adminWork,
    role: 'Virtual Assistant',
    description: 'Documentation workflows and organized admin systems that keep day-to-day business tasks on track.',
    tools: ['Notion', 'Google Workspace', 'Trello'],
  },
]

export const projectCategories = ['All', 'UI/UX', 'Graphic Design', 'Social Media', 'Data Entry', 'Development']
