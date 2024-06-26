// person node class
// stores the adjacencies of each node
class PersonNode {
    constructor(name, adjacent = new Set()) {
        this.name = name;
        this.adjacent = adjacent;
    }
}

//stores the individual nodes
class FriendGraph {
    constructor () {
        this.nodes = new Set();
    }
    addPerson(node){
        this.nodes.add(node);
    }
    addPeople(peopleList){
        for(let node of peopleList){
            this.addPerson(node);
        }
    }
    setFriends(person1, person2){
        person1.adjacent.add(person2);
        person2.adjacent.add(person1);
    }
    setMultipleFriends(person, friends) {
        for (let friend of friends) {
            this.setFriends(person, friend);
        }
    }
    areConnected(person1, person2) {
        let toVisitQueue = [person1];
        let seen = new Set(toVisitQueue)
        while(toVisitQueue.length){
            let currentPerson = toVisitQueue.shift();

            if(currentPerson === person2) return true;

            for (let neighbor of currentPerson.adjacent) {
                if(!seen.has(neighbor)){
                    toVisitQueue.push(neighbor);
                    seen.add(neighbor);
                }
            }
        } 
        return false;
    }
}


//creation of 2 nodes 
const homer = new PersonNode("homer simpson");
const marge = new PersonNode("marge simpson");
const maggie = new PersonNode("maggie simpson");
const lisa = new PersonNode("lisa simpson");
const grandpa = new PersonNode("grandpa simpson")

const friends = new FriendGraph();
friends.addPeople([homer, marge, maggie, lisa, grandpa]);

// ---------------------------------
//node island
const moe = new PersonNode("moe");
const barney = new PersonNode("barney");
const lennie = new PersonNode("lennie");

const friendIsland = new FriendGraph();
friendIsland.addPeople([moe, barney, lennie]);
friendIsland.setMultipleFriends(moe, [barney, lennie]);

//connection of adjacency conditions
//set multiple friends at once. 

friends.setMultipleFriends(homer, [marge, maggie, lisa]);


// now something more complex. Checking if nodes are conneced
// within a graph.

// implementation of a breadth-first search in a graph
















// implementation of a depth-first search in a graph