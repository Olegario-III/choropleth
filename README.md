# United States Educational Attainment Choropleth Map

![Choropleth Map Preview](https://via.placeholder.com/960x600.png?text=US+Educational+Attainment+Choropleth+Map)  
*(Preview of the interactive map – hover over counties to see details)*

## Description

This project is an interactive **choropleth map** built with **D3.js** that visualizes the percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014) across counties in the United States.

It fulfills the requirements of the freeCodeCamp "Visualize Data with a Choropleth Map" project in the Data Visualization certification.

### Features
- Interactive county-level map of the US
- Color-coded counties based on educational attainment levels
- Tooltip on hover showing county name, state, and percentage
- Color legend explaining the scale
- Responsive design (basic)

## Live Demo
[View the live project here](https://your-hosted-url.example.com) <!-- Replace with your actual hosted link, e.g., GitHub Pages, CodePen, etc. -->

## Technologies Used
- HTML5
- CSS3
- JavaScript
- [D3.js v7](https://d3js.org/)
- [TopoJSON v3](https://github.com/topojson/topojson)

## Data Sources
- Educational data: `https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json`
- County boundaries (TopoJSON): `https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

Source: USDA Economic Research Service

## Project Structure
├── index.html      # Main HTML file (provided in your code)
├── style.css       # Styles for layout, tooltip, and legend
├── script.js       # D3.js logic for rendering the map, colors, tooltip, and legend
└── README.md       # This file

## How to Run Locally
1. Clone or download the repository.
2. Open `index.html` in a modern browser (Chrome, Firefox, etc.).
3. The map will load automatically using the remote JSON data.

No build tools or server required – it runs purely client-side.

## freeCodeCamp User Stories Completed
- Title with `id="title"`
- Description with `id="description"`
- Counties with `class="county"` and `data-fips` / `data-education` attributes
- At least 4 differing fill colors for counties and legend
- Tooltip showing relevant data on hover
- Color legend with `id="legend"`
- All tests from the freeCodeCamp suite pass

## Screenshot
![Screenshot of the map](https://via.placeholder.com/960x600.png?text=Map+Screenshot)  
*(Replace placeholders with actual screenshots for better visuals)*

## License
MIT License – feel free to fork and modify!
