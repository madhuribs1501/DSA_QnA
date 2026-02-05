function printHello(count = 1)
{
    if(count > 5) return;

    console.log("hello");

    printHello(count + 1);
}
printHello();

//Output:
// hello
// hello
// hello
// hello
// hello