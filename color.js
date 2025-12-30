const PALETTES = {
  rose: {
    name: "Rose",
    colors: ["#F7CAD0", "#F2A7B5", "#FFF1F3", "#CBA0AA", "#8B6F7A"],
    refs: [
      { label: "Stationery inspiration (placeholder)", href: "#" },
      { label: "Flowers inspiration (placeholder)", href: "#" },
      { label: "Decor moodboard (placeholder)", href: "#" },
    ],
  },
  sage: {
    name: "Sage",
    colors: ["#DDE9D7", "#BFD8B8", "#F7FBF5", "#8CB08C", "#5F7D64"],
    refs: [
      { label: "Sage invitations (placeholder)", href: "#" },
      { label: "Greenery decor (placeholder)", href: "#" },
    ],
  },
  lavender: {
    name: "Lavender",
    colors: ["#E9D7FF", "#D6C2FF", "#FAF7FF", "#B8A4E3", "#7E6AA6"],
    refs: [
      { label: "Lavender palettes (placeholder)", href: "#" },
      { label: "Pastel wedding themes (placeholder)", href: "#" },
    ],
  },
  champagne: {
    name: "Champagne",
    colors: ["#FFF3E2", "#F3DEC3", "#FFFBF4", "#D6B98C", "#8E6C3B"],
    refs: [
      { label: "Warm neutrals (placeholder)", href: "#" },
      { label: "Gold details (placeholder)", href: "#" },
    ],
  },
  sky: {
    name: "Sky",
    colors: ["#D9F2FF", "#BEE7FF", "#F7FCFF", "#84BFE6", "#4C7DA3"],
    refs: [
      { label: "Blue wedding inspiration (placeholder)", href: "#" },
      { label: "Minimal airy decor (placeholder)", href: "#" },
    ],
  },
};

const params = new URLSearchParams(location.search);
const key = params.get("palette") || "rose";
const palette = PALETTES[key] || PALETTES.rose;

document.getElementById("paletteName").textContent = palette.name;

const swatchesEl = document.getElementById("swatches");
palette.colors.forEach((hex) => {
  const d = document.createElement("div");
  d.className = "swatch";
  d.style.background = hex;
  d.title = hex;
  swatchesEl.appendChild(d);
});

document.getElementById("hexList").textContent = palette.colors.join("  •  ");

const refsEl = document.getElementById("refs");
palette.refs.forEach((r) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = r.href;
  a.textContent = r.label;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  li.appendChild(a);
  refsEl.appendChild(li);
});
