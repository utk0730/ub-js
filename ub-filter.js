//Q - Extract agent details with kills more than 100
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
const agentKills = agents.filter((_o, idx) => _o.kills > 100);
console.log("Inbuilt -> ", agentKills);

//create own filter function  - ubFilter say
Array.prototype.ubMap = function (getName) {
  const _this = this; // refers to array
  const _newArray = [];
  for (let i = 0; i < _this.length; i++) {
    if (getKills(this[i], i, this)) {
      _newArray.push(this[i]);
    }
  }
  return _newArray;
};

function getKills(agent, idx, arr) {
  return agent.kills > 100;
}

const agentKills1 = agents.ubMap(getKills);
console.log("Hand made -> ", agentKills1);
