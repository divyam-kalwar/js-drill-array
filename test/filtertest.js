import {items} from "../dataset/data.js";
import filter from "../project/filter.js"

console.log(filter(items, num => num > 3));