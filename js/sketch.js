// parse data from montoyamoraga.yaml

//store yaml data
let info = null;
//store keys from the yaml data
let keys = null;

//setup() runs once
//p5.js 2.x has no preload(), files are loaded with await inside async setup()
async function setup() {
  //load yaml file, parsed with js-yaml
  let respuesta = await fetch("./data/montoyamoraga.yaml");
  info = jsyaml.load(await respuesta.text());

  noCanvas();

  //retrieve keys from yaml
  keys = Object.keys(info)

  //retrieve menu
  let menu = document.getElementById("selectMenu");
  let text = document.getElementById("currentQuery");

  //iterate through keys
  for (let i = 0; i < keys.length; i++) {

    //populate the menu
    //create a new option
    let option = document.createElement("option");
    //make the text be the key
    option.text = keys[i];
    //add the option to the menu
    menu.add(option);
  }
}

// function triggered when an item is selected on the menu
function selectChange(selector) {
  //text(selector + ": " + info[selector], width/2, height/2)

  // reset index
  let index = null;

  // find the index for the selector
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] == selector) {
      console.log("selector: " + selector);
      index = i;
      break;
    }
  }

  // reset innerHTML of currentQuery
  currentQuery.innerHTML = "";

  //skip this step if index is null
  //index is null when menu is on item "choose"
  if (index != null) {
    // retrieve keys of the selector
    auxKeys = Object.keys(info[keys[index]])
    // append selector text to innerHTML of currentQuery
    for (let i = 0; i < auxKeys.length; i++) {
      // console.log(auxKeys[i]);
      currentQuery.innerHTML += auxKeys[i] + ": " + info[keys[index]][auxKeys[i]] + "<br />";
    }
  }


  //special case for cicatrices
  //TODO: automate
  if (keys[index] == "cicatrices") {
    currentQuery.innerHTML += "cicatriz_0: <br/>";
    currentQuery.innerHTML += imagen("./media/scars/scar0.webp")
    currentQuery.innerHTML += "<br />"

    currentQuery.innerHTML += "cicatriz_1: <br/>";
    currentQuery.innerHTML += imagen("./media/scars/scar1.webp")
    currentQuery.innerHTML += "<br />"

    currentQuery.innerHTML += "cicatriz_2: <br/>";
    currentQuery.innerHTML += imagen("./media/scars/scar2.webp")
    currentQuery.innerHTML += "<br />"
  }
  //special case for salud-física
  //TODO: automate
  if (keys[index] == "salud-física") {
    currentQuery.innerHTML += "examen-de-rutina-0-página-0: <br/>";
    currentQuery.innerHTML += imagen("./media/health-physical/routinepanel0-page0.webp")
    currentQuery.innerHTML += "<br />"

    currentQuery.innerHTML += "examen-de-rutina-0-página-1: <br/>";
    currentQuery.innerHTML += imagen("./media/health-physical/routinepanel0-page1.webp")
    currentQuery.innerHTML += "<br />"

    currentQuery.innerHTML += "examen-de-rutina-0-página-2: <br/>";
    currentQuery.innerHTML += imagen("./media/health-physical/routinepanel0-page2.webp")
    currentQuery.innerHTML += "<br />"
  }

}

//returns the html for an image in media/
//lazy loading and decoding in the background so the menu stays responsive
function imagen(ruta) {
  return "<img src='" + ruta + "' width=50% loading='lazy' decoding='async'>";
}

//draw() runs in a loop, after setup()
function draw() {

}
