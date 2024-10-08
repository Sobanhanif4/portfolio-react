import React, { useEffect } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import "../../styles/Globe.css"; 

const Globe = () => {
  useEffect(() => {
    const config = {
      rotationDelay: 0,
      scaleFactor: 0.75,
      degPerSec: 6,
      angles: { x: -100, y: -20, z: 0 },
      colors: {
        water: "#24262f",
        land: "#424447",
        pakistan: "#00FF00", 
        hover: "#eee",
      },
    };

    const state = {
      currentCountry: null,
      lastTime: d3.now(),
      degPerMs: config.degPerSec / 1000,
      isDragging: false,
      startX: 0,
      startY: 0,
      pakistan: null,
    };

    const elements = {
      countryLabel: d3.select("#countryLabel"),
      canvas: d3.select("#globe"),
      context: d3.select("#globe").node().getContext("2d"),
    };

    const projection = d3.geoOrthographic().precision(0.1);
    const path = d3.geoPath(projection).context(elements.context);
    let autorotate, land, countries, countryList;

    const setAngles = () => {
      const rotation = projection.rotate();
      rotation[0] = config.angles.x;
      rotation[1] = config.angles.y;
      rotation[2] = config.angles.z;
      projection.rotate(rotation);
    };

    const scale = () => {
      const width = document.documentElement.clientWidth * config.scaleFactor;
      const height = document.documentElement.clientHeight * config.scaleFactor;
      elements.canvas.attr("width", width).attr("height", height);
      projection
        .scale(Math.min(width, height) / 2)
        .translate([width / 2, height / 2]);
      render();
    };

    const startRotation = (delay) => {
      autorotate.restart(rotate, delay || 0);
    };

    const dragstarted = (event) => {
      state.isDragging = true;
      state.startX = event.x;
      state.startY = event.y;
      autorotate.stop();
    };

    const dragged = (event) => {
      if (!state.isDragging) return;

      const sensitivity = 0.25; // Adjust the sensitivity of rotation
      const dx = (event.x - state.startX) * sensitivity;
      const dy = (event.y - state.startY) * sensitivity;
      state.startX = event.x;
      state.startY = event.y;

      const rotation = projection.rotate();
      rotation[0] += dx;
      rotation[1] -= dy;
      projection.rotate(rotation);

      render();
    };

    const dragended = () => {
      state.isDragging = false;
      startRotation(config.rotationDelay);
    };

    const render = () => {
      const { context } = elements;
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      context.clearRect(0, 0, width, height);
      fill({ type: "Sphere" }, config.colors.water);
      fill(land, config.colors.land);

      if (state.pakistan) {
        elements.countryLabel.style("color", config.colors.pakistan);
        fill(state.pakistan, config.colors.pakistan);
      }

      if (state.currentCountry && state.currentCountry !== state.pakistan) {
        elements.countryLabel.style("color", "white");
        fill(state.currentCountry, config.colors.hover);
      }
    };

    const fill = (obj, color) => {
      elements.context.beginPath();
      path(obj);
      elements.context.fillStyle = color;
      elements.context.fill();
    };

    const rotate = (elapsed) => {
      const now = d3.now();
      const diff = now - state.lastTime;
      if (diff < elapsed) {
        const rotation = projection.rotate();
        rotation[0] += diff * state.degPerMs;
        projection.rotate(rotation);
        render();
      }
      state.lastTime = now;
    };

    const loadData = async (cb) => {
      const world = await d3.json(
        "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
      );
      let countryNames = await d3.tsv(
        "https://gist.githubusercontent.com/mbostock/4090846/raw/07e73f3c2d21558489604a0bc434b3a5cf41a867/world-country-names.tsv"
      );
      cb(world, countryNames);
    };

    const getCountry = (event) => {
      const pos = projection.invert(d3.pointer(event));
      return countries.features.find((f) =>
        f.geometry.coordinates.find(
          (c1) =>
            d3.polygonContains(c1, pos) ||
            c1.some((c2) => d3.polygonContains(c2, pos))
        )
      );
    };

    const mousemove = (event) => {
      const country = getCountry(event);
      if (!country) {
        if (state.currentCountry) {
          leave(state.currentCountry);
          state.currentCountry = null;
          render();
        }
        return;
      }
      if (country === state.currentCountry) return;
      state.currentCountry = country;
      render();
      enter(country);
    };

    const enter = (country) => {
      const name =
        countryList.find((c) => parseInt(c.id) === parseInt(country.id))
          ?.name || "";
      elements.countryLabel.text(name);
    };

    const leave = (country) => {
      elements.countryLabel.text("");
    };

    const init = () => {
      setAngles();
      elements.canvas
        .call(
          d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        )
        .on("mousemove", mousemove)
        .on("touchmove", mousemove);

      loadData((world, cList) => {
        land = topojson.feature(world, world.objects.land);
        countries = topojson.feature(world, world.objects.countries);
        countryList = cList;

        state.pakistan = countries.features.find((country) => {
          const countryData = countryList.find(
            (c) => parseInt(c.id, 10) === parseInt(country.id, 10)
          );
          return countryData && countryData.name === "Pakistan";
        });

        window.addEventListener("resize", scale);
        scale();
        autorotate = d3.timer(rotate);
      });
    };

    init();

    return () => {
      window.removeEventListener("resize", scale);
      if (autorotate) autorotate.stop();
    };
  }, []);

  return (
    <>
      
      <div className="globe-main">
        {/* <div id="countryLabel" className="countryLabel"></div> */}
        <canvas id="globe" className="globe"></canvas>
      </div>
    </>
  );
};

export default Globe;
