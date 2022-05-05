let seriesPending = [
  "Breaking Bug",
  "Game of Drones",
  "Boolean 99",
  "Arrested Developer",
];

seriesPending.push("Better Call Saul");
console.log(seriesPending);

for (i = 0; i < seriesPending.length; i++) {
  console.log(`Serie #${i}: ${seriesPending[i]}`);

  if (seriesPending[i] === "Boolean 99") {
    console.log("Found it!");
  }
}

let seriesWatching = [];
let removedSeries = seriesPending.shift();
seriesWatching.push(removedSeries);
console.log(
  `seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`
);

for (i = 0; i < seriesPending.length + 1; i++) {
  let removedMoreSeries = seriesPending.shift();
  seriesWatching.push(removedMoreSeries);
  if (seriesPending[i] == undefined) {
    let removedMoreSeries = seriesPending.shift();
    seriesWatching.push(removedMoreSeries);
  }
}
console.log(
  `seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`
);

seriesWatching.splice(0, seriesWatching.length);
console.log(
  `seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`
);
