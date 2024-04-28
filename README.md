# DG Photography
Homepage for a photography website for the Frontend Developer role at Dinesh Gahlot.

## Project Structure
- **`assets/`:** Contains all frontend assets including JavaScript, Css, Scss and 3rd Party Library files.
- **`assets/media/`:** Contains media files.
- **`assets/script/`:** Contains JavaScript files.
- **`assets/styling/`:** Contains SCSS files for styling.
- **`gruntfile.js`:** Contains Grunt configuration for automation of compilation and minification.
- **`index.html`:** The main HTML file for the project.
- **`.gitignore`:** Specifies intentionally untracked files to ignore.
- **`README.md`:** The documentation file you're currently reading.

## Technologies Used
### HTML, CSS, JavaScript
- **HTML (HyperText Markup Language):** HTML is the standard markup language for creating web pages and web applications. It provides the structure for web content.
- **CSS (Cascading Style Sheets):** CSS is a stylesheet language used for describing the presentation of a document written in HTML. It controls the layout, colors, fonts, and other visual aspects of web pages, allowing for enhanced styling and design.
- **SCSS (Sassy CSS):** SCSS is a superset of CSS3's syntax, offering additional features such as variables, nesting, and mixins. It provides a more efficient and maintainable way to write CSS code, making stylesheets easier to manage and scale.
- **JavaScript:** JavaScript is a versatile programming language commonly used for adding interactivity and dynamic behavior to web pages. It enables features such as form validation, animations, event handling, and DOM manipulation, making web applications more engaging and interactive.

### Additional Libraries
- **jQuery:** A fast, small, and feature-rich JavaScript library used for simplifying the client-side scripting of HTML.
- **AOS (Animate On Scroll):** A library that allows you to animate elements as they scroll into view.
- **Slick Slider:** Utilize this library to easily set up sliders through JavaScript initialization.

### Grunt
Grunt is used as a task runner for automating repetitive tasks in the development workflow. The `gruntfile.js` contains configuration for tasks such as compiling SCSS to CSS, minifying JavaScript files, and watching for changes.

#### Grunt Tasks:
1. **Compile SCSS to CSS:** The `sass` task compiles `main.scss` to `main.css`.
2. **Minify CSS:** The `cssmin` task minifies `main.css` to `main.min.css`.
3. **Minify JavaScript:** The `uglify` task minifies `main.js` to `main.min.js`.
4. **Watch for Changes:** The `watch` task watches for changes in SCSS and JavaScript files and triggers the respective tasks automatically.

## Guidelines for Styling
I Used Icons from Material Icons, and used my own styling guideline `Pelican UI`, in the Project description you mentioned `Explicitly use components from Bootstrap 5.2.`, however I'm not so familiar with Bootstrap 5.2 as I generally prefer to use Vanilla Js and Vanilla Css, I'm familiar with Bootstrap and even have experience with it but not able to use Bootstrap 5.2. 

## Pelican UI and DG Theme
Pelican UI is a set of guidelines and a framework for crafting web user interfaces.
Developed by me `(Aakash Sisodiya)` in 2020 as an experimental purpose, it has since been utilized in numerous projects spreadheaded by Aakash Sisodiya.

### Introduction
Hey there Dinesh Gahlot team!
Welcome to the DG Theme ! I've selected this name to highlight the reflection of Dinesh Gahlot name.

### Naming Convention
To keep things consistent, I've begun all common elements and other common code with "dg". For example, in main.js. It's just a little touch to make everything look nice and tidy.

## Getting Started
1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Run Grunt tasks using the following command: `grunt watch`

## Author
Aakash Sisodiya

## Note For Nitish
I've completed the Html Developer Assessment Test, I've tried my best to complete it in a creative way, I took care of almost every aspects suggested in the both Loom video and the Document.
There are few stuffs I've either intentionally missed due to lack of my efficiency (For example: I've intentionally missed Bootstrap Components as I was habitual to use my own UI Guideline in tenure of my experience, I'm familiar and experience with the Bootstrap older version however I was not using frequently so I'm not aware about the Bootstrap 5.2, but I can easily adapt it if there is any requirements in the time of the actual work) in that aspect or because the section need to be treated in my manner (For example: I've crafted the Testimonial in my own way as the section in my mind had a background image in the banner so there is no meaning to have the testimonial with Content and Image Slider side by side, so I've simply created it with banner background with Heading Label with Description content and Feedback Slider side by side).