/* 
10-08-22
Written on Umer's Macbook Pro
*/

document.querySelector("#add").onclick = function addBooksRead() {
    let booksRead = document.getElementById("books-read").value;
    let booksReadID = document.getElementById("books-read");
    let booksReadList = document.getElementById("booksReadList");
     
    // if user doesn't input any text, display an error 
    if (booksRead === "" || booksRead.trim().length === 0) { // .trim() checks if string only contains spaces, if length is 0 then it only contains spaces. 
        document.getElementById("alert").style.display = "block";
        booksReadID.className = "invalid";
    } else { // otherwise, accept input as valid and create items in list.
        let itemRead = document.createElement("li");
        itemRead.innerText = booksRead;
        booksReadList.appendChild(itemRead);

        booksReadID.value = ""; // clears input text
        document.getElementById("alert").style.display = "none"; // alert doesn't show up
          
        // adding close button next to each list item
        let closeBtn = document.createElement("span"); 
        closeBtn.innerText = "×";
        closeBtn.className = "close-btn";
        itemRead.appendChild(closeBtn);
     
        // function for deleting item on click of delete button
        closeBtn.addEventListener("click", function() {
            booksReadList.removeChild(itemRead);
        })

        // mobile friendly delete function
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            itemRead.addEventListener("click", function() {
                booksReadList.removeChild(itemRead);
            })
        }
    }
}
