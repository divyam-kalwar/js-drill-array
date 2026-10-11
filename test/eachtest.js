import {items} from "../dataset/data.js";
import each from "../project/each.js";

each(items,(ele,i,arr) => {
    console.log(`Element: ${ele}`);
    console.log(`Index: ${i}`);
    console.log(`Original Array: ${arr}`);
    console.log(`\n`);
});