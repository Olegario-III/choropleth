  const svg = d3.select("svg");
    const tooltip = d3.select("#tooltip");
    const legendSvg = d3.select("#legend");
    const width = 960;
    const height = 600;

    Promise.all([
      d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"),
      d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json")
    ]).then(([us, education]) => {
      const counties = topojson.feature(us, us.objects.counties).features;
      const eduMap = new Map(education.map(d => [d.fips, d]));

      const colorScale = d3.scaleThreshold()
        .domain([10, 20, 30, 40])
        .range(["#f7fbff", "#c6dbef", "#6baed6", "#2171b5", "#08306b"]);

      svg.selectAll(".county")
        .data(counties)
        .enter()
        .append("path")
        .attr("class", "county")
        .attr("d", d3.geoPath())
        .attr("data-fips", d => d.id)
        .attr("data-education", d => eduMap.get(d.id)?.bachelorsOrHigher || 0)
        .attr("fill", d => colorScale(eduMap.get(d.id)?.bachelorsOrHigher || 0))
        .on("mouseover", function(event, d) {
          const edu = eduMap.get(d.id);
          tooltip.style("opacity", 0.9)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px")
            .html(`${edu.area_name}, ${edu.state}: ${edu.bachelorsOrHigher}%`)
            .attr("data-education", edu.bachelorsOrHigher);
        })
        .on("mouseout", () => tooltip.style("opacity", 0));

      // Legend with at least 4 colors
      const legendColors = colorScale.range();
      const legendX = d3.scaleLinear()
        .domain([0, 60])
        .range([0, 300]);

      const legendThresholds = colorScale.domain();

      legendSvg.selectAll("rect")
        .data(legendColors)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 60)
        .attr("y", 10)
        .attr("width", 60)
        .attr("height", 20)
        .attr("fill", d => d);

      legendSvg.selectAll("text")
        .data([0].concat(legendThresholds))
        .enter()
        .append("text")
        .attr("x", (d, i) => i * 60)
        .attr("y", 45)
        .text(d => d + "%")
        .style("font-size", "10px");
    });