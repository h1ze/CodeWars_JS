// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

function booleanToString(b){
    return b ? 'true' : 'false';
}

console.log(booleanToString(false));

function booleanToString2(b){
    return String(b); /* b.toString() */
}

console.log(booleanToString2(true));
