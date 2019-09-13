// import BST from './trees'
// import { findDisappearedNumbers } from './arrays/misc-2'
// import lengthOfLongestSubstring from './strings/longest-substring-without-repeating'
// import maxLevelSum from './trees/problems/max-level-sum'

import countLetters from './arrays/count-distinct-letters'
import minJumpsToReachEnd from './dp/min-jumps-to-reach-end'
// import Graph from './graphs'
//
// let graph = new Graph()
// graph.addVertex(5);
// graph.addVertex(2);
// graph.addVertex(6);
// graph.addVertex(7);
// graph.addEdge(2, 5);
// graph.addEdge(6, 7);
// graph.addEdge(7, 5);
// console.log('graph', graph)
// console.log(graph.getEdge(2, 5));
// console.log(graph.getEdge(6, 7));
// // graph.removeVertex(5);
// console.log(graph.getEdge(2, 5));
// console.log(graph.neighbors(6));
// console.log(graph.neighbors(5));

import MinHeap from './heaps'

// let bs = new BST()
// bs.insert(23)
// bs.insert(7)
// bs.insert(21)
// bs.insert(11)
// bs.insert(25)
// bs.insert(6)
// bs.insert(20)
// // bs.findMax()
// // bs.findMin()
// // bs.dfsInorder()
// // bs.dfsPreorder()
// // bs.dfsPostorder()
// // bs.bfs()
//
// console.log('bs', bs)
//
// let bs2 = new BST()
// bs2.insert(379)
// bs2.insert(826)
// // bs2.insert(21)
// // bs2.insert(20)
// // bs2.dfsInorder()

// let heap = new MinHeap()
// heap.insert(20)
// heap.insert(19)
// heap.insert(17)
// heap.insert(13)
// heap.insert(15)
// heap.insert(8)
// heap.insert(5)
// heap.remove(5)
let output = minJumpsToReachEnd([2,3,1,1,2,4,2,0,1,1])

export default output
