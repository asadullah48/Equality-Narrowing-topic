//Equality narrowing
//TypeScript also uses switch statements and equality checks like ===, !==, ==, and != to narrow types. For example:
function forUexample(x, y) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        //(method) String.toUpperCase(): string
        y.toLowerCase();
        //(method) String.toLowerCase(): string
    }
    else {
        console.log(x);
        //(parameter) x: string | number
        console.log(y);
        //(parameter) y: string | boolean
    }
}
function forUprintAll(strs) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                //(parameter) strs: string[]
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
            //(parameter) strs: string
        }
    }
}
