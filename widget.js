
// Create new widget element
document.write('<div id="yourWidgetID"></div>');
var container = document.getElementById('yourWidgetID');

// Your HTML
container.innerHTML = `
<font color="red", id="clickText">Your red text here</font>
<font color="yellow", id="clickText2">Your red text here</font>
`;
document.getElementById('clickText').setAttribute("style", "background-color:blue");

async function test() {
    console.log(await window.illusion_engine.read("testid"))
}
test()

window.illusion_engine.run("testid")