let tier = 37;
let targetReward = 50;
let spikeRushMins = 7;
let unratedMins = 38;
let unratedXP = 4000;

//DO NOT MODIFY
let bpxp = 1372000;
let total = 0;
let start = tier + 2;
let end = targetReward + 2;
let downtime = 1.666;
let spikeRushXP = 1000; //always 1k xp DO NOT CHANGE

for (let i = start; i < end + 1; i++) 
{
    total += (i * 1000);
}
let srGames = (total / spikeRushXP);
let srMinutes = (spikeRushMins + downtime) * (total / spikeRushXP);
let srHours = (srMinutes / 60);
let uGames = (total / unratedXP);
let uMinutes = (unratedMins + downtime) * (total / unratedXP);
let uHours = (uMinutes / 60);

console.log(`--when at tier ${tier}--`)
console.log("XP left: " + total);
console.log("bp % completion: " + Math.floor(((bpxp-total)/bpxp)*10000)/100);
console.log("-----");
console.log("srGames: " + srGames);
console.log("srMinutes: " + srMinutes);
console.log("srHours: " + srHours);
console.log("-----");
console.log("uGames: " + uGames);
console.log("uMinutes: " + uMinutes);
console.log("uHours: " + uHours);
console.log("unrated rounds won: " + (total/300));
console.log("unrated rounds lost: " + (total/100));
console.log("-----");
console.log("weekly challenges: " + (total / 12000));
console.log("daily challenges: " + (total / 2000));