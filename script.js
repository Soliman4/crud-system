
const prod = document.getElementById("prod");
const cate = document.getElementById("cate");
const price = document.getElementById("pricee");
const desc = document.getElementById("desc");

let container = []
if(localStorage.getItem('products')!=null){
    container = JSON.parse(localStorage.getItem('products'));
    displayData();
}

function addProduct(){
    let proo = {
        Product : prod.value,
        catogery : cate.value,
        price : price.value, 
        description :desc.value,
    }
    container.push(proo);
    localStorage.setItem("products", JSON.stringify(container));
    displayData();
    clearInputs();
}

// display product
function displayData(){
    
     // show on document
    let j = ``;
    for(let i = 0; i <container.length; i++){
        j += `
        <td>${i}</td>
        <td>${container[i].Product}</td>
        <td>${container[i].catogery}</td>
        <td>${container[i].price}</td>
        <td>${container[i].description}</td>
        <td><button onclick="deleteBtn(${i})" class ="btn btn-danger btn-sm" >Delete</button></td>
        <td><button onclick="updateBtn()" class ="btn btn-success btn-sm">Update</button></td>
        </tr>
        `
    }
    document.getElementById("joo").innerHTML  = j;
}
function clearInputs(){
    prod.value = ""; 
    cate.value = "";
    price.value = "";
    desc.value = "";
    
}
// delete button
function deleteBtn(index){
    container.splice(index,1);
    localStorage.setItem("products", JSON.stringify(container));
    displayData();
}
// update button
function updateBtn(index){
    container.shift(index , 1);
    localStorage.setItem("products", JSON.stringify(container));
    displayData();
}

//search 
function search(){
    var searchInput = document.getElementById('searchInput').value;
    var j2 = ``
    for(let i = 0 ; i < container.length ; i++){
        if(container[i].Product.toLowerCase().includes(searchInput.toLowerCase())){
            j2 += `
        <td>${i}</td>
        <td>${container[i].Product.replace(searchInput,`<span> ${searchInput}</span>`)}</td>
        <td>${container[i].catogery}</td>
        <td>${container[i].price}</td>
        <td>${container[i].description}</td>
        <td><button onclick="deleteBtn(${i})" class ="btn btn-danger btn-sm" >Delete</button></td>
        <td><button onclick="updateBtn()" class ="btn btn-success btn-sm">Update</button></td>
        </tr>
        `
        }
    }
    document.getElementById('joo').innerHTML = j2;
}


