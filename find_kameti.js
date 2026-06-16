const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
let index = content.indexOf('KametiLedger');
if (index !== -1) {
    console.log(content.substring(index - 500, index + 500));
} else {
    console.log("KametiLedger not found. Searching for CASE STUDY...");
    let idx2 = content.indexOf('CASE STUDY');
    if (idx2 !== -1) {
        console.log(content.substring(idx2 - 500, idx2 + 500));
    } else {
        console.log("Not found.");
    }
}
