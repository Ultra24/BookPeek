/* 
10-08-22
Written on Umer's Macbook Pro
*/

document.querySelector("#add").onclick = function addBooksRead() {
    let booksRead = document.getElementById("books-read-name").value;
    let booksReadID = document.getElementById("books-read-name");
    let booksReadAuthor = document.getElementById("books-read-author").value;
    let booksReadAuthorID = document.getElementById("books-read-author");
    let booksReadPg = document.getElementById("books-read-pg").value;
    let booksReadPgID = document.getElementById("books-read-pg");
    let booksReadList = document.getElementById("booksReadList");

    if (booksRead === "" || booksRead.trim().length === 0 || booksReadAuthor === "" || booksReadAuthor.trim().length === 0) { // .trim() checks if string only contains spaces, if length is 0 then it only contains spaces. 
        document.getElementById("alert").style.display = "block";
        
        if (booksRead === "" || booksRead.trim().length === 0) {
            booksReadID.className = "invalid";
        } else if (booksReadAuthor === "" || booksReadAuthor.trim().length === 0) {
            booksReadAuthorID.className = "invalid"; 
        }
    } else {
        let itemRead = document.createElement("li");

        if (booksReadPg === "") {
            itemRead.innerText = booksRead + " by " +  booksReadAuthor + " - " + " ??? pages";
        } else {
            itemRead.innerText = booksRead + " by " +  booksReadAuthor + " - " + booksReadPg + " pages";
        }
        
        booksReadList.appendChild(itemRead);

        // clears input text to show placeholders when item is added
        booksReadID.value = ""; 
        booksReadAuthorID.value = "";
        booksReadPgID.value = "";

        document.getElementById("alert").style.display = "none";

        let closeBtn = document.createElement("span");
        closeBtn.innerText = "×";
        closeBtn.className = "close-btn";
        itemRead.appendChild(closeBtn);

        console.log(booksReadList);

        closeBtn.addEventListener("click", function() {
            itemRead.className = "fadeOut";
            booksReadList.removeChild(itemRead);
        })

        // mobile friendly delete 
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

            itemRead.addEventListener("click", function() {
                closeBtn.style.display = "block";
            })

            itemRead.addEventListener("dblclick", function() {
                booksReadList.removeChild(itemRead);
            })
        }
    }
} 
 

document.querySelector("#addWishlist").onclick = function addWishlist() {
    let booksWishlist = document.getElementById("books-wishlist-name").value;
    let booksWishlistID = document.getElementById("books-wishlist-name");
    let booksWishlistAuthor = document.getElementById("books-wishlist-author").value;
    let booksWishlistAuthorID = document.getElementById("books-wishlist-author");
    let booksWishlistPg = document.getElementById("books-wishlist-pg").value;
    let booksWishlistPgID = document.getElementById("books-wishlist-pg");
    let booksWishlistList = document.getElementById("booksWishlistList"); // goofy var name, ik

    if (booksWishlist === "" || booksWishlist.trim().length === 0) {
        document.getElementById("alert").style.display = "block";
        booksWishlistID.className = "invalid";
        
        if (booksWishlist === "" || booksRead.trim().length === 0) {
            booksWishlistID.className = "invalid";
        } else { booksWishlistAuthorID.className = "invalid"; }

    } else {
        let itemWish = document.createElement("li");
        booksWishlistList.appendChild(itemWish);

        if (booksWishlistPg === "") {
            itemWish.innerText = booksWishlist + " by " + booksWishlistAuthor + " - " + " ??? pages ";
        } else {
            itemWish.innerText = booksWishlist + " by " + booksWishlistAuthor + " - " + booksWishlistPg + " pages ";
        }

        // clears input text to show placeholder when item is added
        booksWishlistID.value = "";
        booksWishlistAuthorID.value = "";
        booksWishlistPgID.value = "";

        document.getElementById("alert").style.display = "none";

        let closeBtnWish = document.createElement("span");
        closeBtnWish.innerText = "×";
        closeBtnWish.className = "close-btn-wish";
        itemWish.appendChild(closeBtnWish);

        closeBtnWish.addEventListener("click", function() {
            booksWishlistList.removeChild(itemWish);
        })

        // mobile friendly delete
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            itemWish.addEventListener("click", function() {
                closeBtnWish.style.display = "block";
            })

            itemWish.addEventListener("dblclick", function() {
                booksWishlistList.removeChild(itemWish);
            })
        }
    }
}
