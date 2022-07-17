//variables
const name = document.querySelector('.name');
const number = document.querySelector('.number');
 const addBtn = document.querySelector('#addbtn');
const bookList = document.querySelector('#book-list')
const status = document.querySelector('.status');

addBtn.addEventListener("click", function(){
    if(
    name.value =="" &&
    number.value == ""
        ){
            alert("Enter inputs.");
        } else{
            const bookListrow = document.createElement("tr");
            const deleteButton = document.createElement("button");
            deleteButton.textContent = 'Delete';
            const btnCell = document.createElement("th");

            deleteButton.style.marginLeft=('20px');
            const newTitle = document.createElement("th");
            newTitle.textContent = name.value;
            bookListrow.appendChild(newTitle);
            const newPage = document.createElement("th");
            newPage.textContent = number.value;
            bookListrow.appendChild(newPage);
            const newStatus = document.createElement("th");
            newStatus.textContent = status.value;
            bookListrow.appendChild(newStatus);
            btnCell.appendChild(deleteButton);
            bookListrow.appendChild(btnCell);
            bookList.appendChild(bookListrow);
            //delete row function
            deleteButton.addEventListener("click", function(){
            bookList.removeChild(bookListrow)
            })
            //clear input 
            name.value="";
            number.value="";
            status.value="";


        }
})






































