//Q - Extract names of agents in an array
const agents = [
  {
    name: "John Wick",
    kills: 300,
  },
  {
    name: "James Bond",
    kills: 150,
  },
  {
    name: "Ethan Hunt",
    kills: 100,
  },
  {
    name: "Batman",
    kills: 0,
  },
];

//native implementation - existing es6 map function
const agentNames = agents.map((_o, idx) => _o.name);
const agentKills = agents.map((_o, idx) => _o.kills);
console.log("Inbuilt -> ", agentNames);
console.log("Inbuilt -> ", agentKills);

//create own map function  - ubMap say
Array.prototype.ubMap = function (getName) {
  const _this = this; // refers to array
  const _newArray = [];
  for (let i = 0; i < _this.length; i++) {
    _newArray.push(getName(this[i], i, this));
  }
  return _newArray;
};

function getName(agent, idx, arr) {
  return agent.name;
}
function getKills(agent, idx, arr) {
  return agent.kills;
}
const agentNames1 = agents.ubMap(getName);
const agentKills1 = agents.ubMap(getKills);
console.log("Hand made -> ", agentNames1);
console.log("Hand made -> ", agentKills1);
