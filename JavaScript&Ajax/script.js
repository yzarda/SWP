
document.getElementById("load").addEventListener("click", function(){
    fetch('https://jsonplaceholder.typicode.com/todos').then((result)=>{
        result.json().then((data)=>{
            getHTMLForToDos(data);
            console.log(data);
        })
    })
})

let html = "<ul>";

function getHTMLForToDos(data){
    let random = (Math.random()*199)+1;
    random = parseInt(random);
    console.log(random);

    /*data.forEach(todo => {
        html += "<li>" + todo.title + "</li>"
    });*/

    data.forEach(todo => {
        if(random == todo.id){
            html += "<li>" + todo.title + "</li>"
        }
    });

    document.getElementById("content").innerHTML = html;
}

html += "</ul>";