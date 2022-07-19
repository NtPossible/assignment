window.location.hash = "#tags=red,blue,purple"
let coloursList = location.hash.substring(6).split(',');

if (location.hash !== "") {
    for (let i = 0; i < coloursList.length; i++) {
        addURLItem(coloursList[i])
    }
} else {
    coloursList.length = 0;
}

window.addEventListener('hashchange', function () {
    let ul = document.getElementById("colour_list");
    ul.innerHTML = '';
    for (let i = 0; i < coloursList.length; i++) {
        addURLItem(coloursList[i])
    }
}, false);

function addItem() {
    coloursList.push(document.getElementById('colour').value)
    location.hash = 'tags=' + coloursList;
}

function addURLItem(colour) {
    let ul = document.getElementById("colour_list");
    let li = document.createElement("li");
    li.setAttribute('id', colour);
    li.onclick = function () {
        li.remove()
        coloursList.pop()
        location.hash = 'tags=' + coloursList;
    }
    li.appendChild(document.createTextNode(colour));
    ul.appendChild(li);
}
