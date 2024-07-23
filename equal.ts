//Equality narrowing
//TypeScript also uses switch statements and equality checks like ===, !==, ==, and != to narrow types. For example:

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
          
//(method) String.toUpperCase(): string
    y.toLowerCase();
          
//(method) String.toLowerCase(): string
  } else {
    console.log(x);
               
//(parameter) x: string | number
    console.log(y);
               
//(parameter) y: string | boolean
  }
}
function printAll(strs: string | string[] | null) {
    if (strs !== null) {
      if (typeof strs === "object") {
        for (const s of strs) {
                         
  //(parameter) strs: string[]
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
                     
  //(parameter) strs: string
      }
    }
  }