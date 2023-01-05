// select items

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");


// edit options
let editElement;
let editFlag = false;
let editId = "";

// Event Listeners
// submit form
form.addEventListener('submit', addItem);

// clear items 
clearBtn.addEventListener('click',clearItems);
// const deleteBtn = document.querySelector('.delete-btn');

// functions
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
//   console.log(grocery.value);

    const id =  new Date().getTime().toString();
    if (value && !editFlag){
        // console.log('add item to the list');
        const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
                    <div class="btn-container">
                      <!-- edit btn -->
                      <button type="button" class="edit-btn">
                        <i class="fas fa-edit"></i>
                      </button>
                      <!-- delete btn -->
                      <button type="button" class="delete-btn">
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>`;


                  const deleteBtn = element.querySelector('.delete-btn');
                  const editBtn = element.querySelector('.edit-btn');
                  deleteBtn.addEventListener('click',deleteItem);
                  editBtn.addEventListener('click',editItem);

                  // append child 
                  list.appendChild(element);
                //   display Alert
                displayAlert('item added to the list', 'success');
                // show container
                container.classList.add('show-container');
                // add to local storage
                addToLocalStorage(id,value);
                // set back to defualt
                setBackToDefualt();

    }else if(value && editFlag){
// console.log('editing');
editElement.innerHTML = value;
displayAlert('value changed', 'success');
//  edit local storage
editLocalstorage(editId, value);
setBackToDefualt();
    }
    else{
      displayAlert('please inter value', 'danger');
    }
}
// display alert
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);    
    }, 1000);
}
// clear items
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');

    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item)
        })
    }
    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    setBackToDefualt();
    // localStorage.removeItem('item');
}
// delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");

  setBackToDefualt();
  // remove from local storage
  removeFromLocalStorage(id);
}
// edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  //
  submitBtn.textContent = "edit";
}

    // set back to defualt
    function setBackToDefualt(){
        // console.log('set back to defualt');
        grocery.value = '';
        editFlag = false;
        editId = '';
        submitBtn.textContent = 'submit';
    }
    // local storage
    function addToLocalStorage(){
        console.log('added to local storage');
    }
    function removeFromLocalStorage(id){}
    function editLocalStorage(id,value){}
