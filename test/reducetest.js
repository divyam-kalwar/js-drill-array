import {items} from "../dataset/data.js";
import reduce from "../project/reduce.js"

console.log(
    reduce(items, (acc, curr) => acc + curr, 0)
);