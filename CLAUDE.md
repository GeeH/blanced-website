# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a website for a health and safety consultancy company. It is a marketing website only and is not dynamic.
It should be built using HTML/CSS using tailwindcss. 

Blanced Health and Safety Consultancy is a registered company in England and Wales. They have over 30 years of 
experience in the health and safety industry. They are Nebosh qualified and are based in Port Talbot in South
Wales, UK. 

A good reference website for this project is https://coregenic.co.uk - they are a similar company offering similar 
services.

The services offered by Blanced Health and Safety Consultancy are:
- Health and safety consultancy
- Health and safety training
- Risk Assessments

It should be a single page website with a navigation bar at the top. CLicking the nav should scroll you to the
relevant section of the page. 

Any images you need please create a prompt to generate them on ChatGPT.

You may use any javascript libraries you like if that is required, but preferably avoid JS.

## Development Commands

This is a static HTML website with no build process required.

### Setup
```bash
# No dependencies to install - this is a static HTML site
```

### Development
```bash
# Open the website in a browser
open index.html

# Or use a simple HTTP server (Python 3)
python3 -m http.server 8000
# Then visit http://localhost:8000

# Or use a simple HTTP server (Python 2)
python -m SimpleHTTPServer 8000

# Or use PHP's built-in server
php -S localhost:8000

# Or use Node's http-server (if installed globally)
npx http-server -p 8000
```

## Architecture

### Structure
This is a single-page static website built with:
- **HTML5** - Semantic markup
- **Tailwind CSS** - Styling via CDN (no build required)
- **Minimal JavaScript** - Only for mobile menu toggle functionality

### File Structure
- `index.html` - Main website file containing all sections
- `IMAGE_PROMPTS.md` - ChatGPT prompts for generating images
- `CLAUDE.md` - This file

### Page Sections
The single-page layout includes:
1. **Navigation** - Fixed header with smooth scroll links
2. **Hero** - Introduction and main call-to-action
3. **About** - Company background and credentials
4. **Services** - Three service cards (Consultancy, Training, Risk Assessments)
5. **Contact** - Contact information and location
6. **Footer** - Company info and quick links

### Design Decisions
- Uses Tailwind CSS via CDN to avoid build process
- Responsive design with mobile-first approach
- Smooth scrolling navigation using `scroll-smooth` class
- Mobile menu implemented with vanilla JavaScript
- Image placeholders included - see IMAGE_PROMPTS.md for generation instructions

## Adding Images

1. Generate images using prompts in `IMAGE_PROMPTS.md`
2. Create an `images/` directory
3. Save generated images in the `images/` directory
4. Replace placeholder divs with `<img>` tags:
   ```html
   <img src="images/hero-image.jpg" alt="Description" class="w-full h-full object-cover rounded-lg">
   ```
