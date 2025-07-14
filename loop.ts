const outerArray = [
  {
    name: "A1",
    elements: ["e1", "e2", "e3", "e4"],
  },
  {
    name: "A2",
    elements: ["e5", "e6", "e7", "e8"],
  },
  {
    name: "A3",
    elements: ["e9", "e10", "e11", "e12"],
  },
  {
    name: "A4",
    elements: ["e13", "e14", "e15", "e16"],
  },
  {
    name: "A5",
    elements: ["e17", "e18", "e19", "e20"],
  },
];

for (const el of outerArray) {
  console.log("A name", el.name);
  for (const elementName of el.elements) {
    console.log(elementName);
  }
}
