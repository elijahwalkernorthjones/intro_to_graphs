// person node class

class PersonNode {
    constructor(name, adjacent = new Set()) {
        this.name = name;
        this.adjacent = adjacent;
    }
}

//creation of 2 nodes 
const homer = new PersonNode("homer simpson");
const marge = new PersonNode("marge simpson");
const maggie = new PersonNode("maggie simpson");

//connection of adjacency conditions
homer.adjacent.add(marge)
homer.adjacent.add(maggie)

marge.adjacent.add(homer)
marge.adjacent.add(maggie)

maggie.adjacent.add(marge)
maggie.adjacent.add(homer)