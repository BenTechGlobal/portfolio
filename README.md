# Adepoju Gbenga Festus — Personal Cybersecurity & Multidisciplinary Portfolio

A responsive, dependency-free personal portfolio built exclusively with **HTML5**, **CSS3**, and **Vanilla ES6+ JavaScript**.

## 1. Opening & Previewing in Visual Studio Code
1. Open the `portfolio-website` folder in **Visual Studio Code**.
2. Open `index.html` directly in your browser or launch via the **Live Server** extension in VS Code. No Node.js, npm, or build tools are required.

## 2. Replacing the Profile Photograph
1. Place your high-resolution portrait image inside `assets/images/` and name it **`profile-photo.jpg`**.
2. The site automatically detects `assets/images/profile-photo.jpg` and replaces the SVG placeholder.

## 3. Updating Project Statuses & GitHub Links (`js/projects.js`)
1. Open `js/projects.js`.
2. Find the project inside `CYBERSECURITY_CATEGORIES` (all 15 categories and 150 projects are listed).
3. Update `"status"` to `"completed"`, `"in-progress"`, or `"planned"`.
4. Add the repository link inside `"githubUrl": "https://github.com/BenTechGlobal/your-repo"`.
5. The top dashboard counters (`Completed`, `In Progress`, `Planned`) update automatically.

## 4. Updating Certifications (`js/certifications.js`)
1. Open `js/certifications.js` and modify `status` (`"certified"`, `"in-progress"`, `"course-completed"`, `"planned"`), `statusLabel`, and `description`.

## 5. Updating Social Links & Affiliate Brands
- **Social Links & Contact Info:** Edit `PROFILE_CONFIG` at the top of `js/main.js`.
- **Affiliated Brands Slider:** Edit or add entries inside `AFFILIATE_BRANDS` in `js/affiliates.js`.

## 6. Deploying to GitHub Pages
1. Push the contents of `portfolio-website/` to a GitHub repository under `https://github.com/BenTechGlobal`.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and click **Save**.
