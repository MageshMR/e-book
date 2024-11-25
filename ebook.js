document.addEventListener("DOMContentLoaded", function () {
    const bookshelf = document.getElementById("bookshelf");
    const main = document.querySelector("main");
    const header = document.querySelector("header");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const bookModal = document.getElementById("bookModal");
    const modalImage = document.getElementById("modalImage");
    const modalDetails = document.getElementById("modalDetails");
    const span = document.getElementsByClassName("close")[0];
    const priceDropdown = document.getElementById("priceDropdown");
    const bookData = [
        {
            "author":"Stephen Wiacek",
            "country":"America",
            "imageLink":"images/the-marvel-book.jfif",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/Marvel_Comics\n",
            "pages": 256,
            "title": "The Marvel Book",
            "year": "2019",
            "price": 10.72,
        },
        {
            "author":"Joshua Izzo",
            "country":"America",
            "imageLink":"images/avatar.jpg",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/Avatar_(2009_film)\n",
            "pages": 209,
            "title": "The World of Avatar: A Visual Exploration",
            "year": 2022,
            "price": 7.84
        },
        {
            "author":"Cowsill, Alan",
            "country":"America",
            "imageLink":"images/marvel-avengers.jpg",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/Ultimate_Comics:_Avengers\n",
            "pages": 216,
            "title": "Marvel Avengers",
            "year": 2009,
            "price": 65.00
        },
        {
            "author":"Fred Van Lente",
            "country":"America",
            "imageLink":"images/iron-man.jpg",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/Iron_Man\n",
            "pages": 267,
            "title": "MARVEL-VERSE: IRON MAN ",
            "year": 2019,
            "price": 5.2,
        },
        {
            "author":"stan lee",
            "country":"America",
            "imageLink":"images/spider man.jpg",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/The_Amazing_Spider-Man\n",
            "pages": 697,
            "title": "The Amazing Spider-Man",
            "year": 1963,
            "price": 6.7,
        },
        {
            "author":"Billy Wrecks",
            "country":"America",
            "imageLink":"images/hulk.jpg",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/Hulk\n",
            "pages": 264,
            "title": "The Incredible Hulk",
            "year": 2016,
            "price":3.2,
        },
        {
            "author":"Jed MacKay",
            "country":"America",
            "imageLink":"images/clean.jpg",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/Blood_Hunt_(Marvel_Comics)\n",
            "pages": 245,
            "title": "X-MEN: BLOOD HUNT",
            "year": 2024,
            "price":7.8,
        },
        {
            "author":"J. K. Rowling CH OBE FRSL",
            "country":"America",
            "imageLink":"images/harry-potter.jpg",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
            "pages": 309,
            "title": "HARRY POTTER AND THE CURSED CHILD",
            "year": 1997,
            "price": 4.3
        },
        {
            "author":"J. K. Rowling",
            "country":"America",
            "imageLink":"images/harry.jpg",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows\n",
            "pages": 607,
            "title": "Harry Potter and the Deathly Hallows",
            "year": 2014,
            "price": 3.2,
        },
        {
            "author":"J. K. Rowling",
            "country":"America",
            "imageLink":"images/harry-2.jpg",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince_(film)\n",
            "pages": 209,
            "title": "Harry Potter and the Half-Blood Prince",
            "year": 2014,
            "price": 3.7,
        },
        
        {
            "author":"J.K. Rowling",
            "country":"America",
            "imageLink":"images/harry-4.jpg",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets_(film)\n",
            "pages": 384,
            "title": "Harry Potter and the Chamber of Secrets",
            "year": 2014,
            "price": 3.2,
        },
        {
            "author":"J.K. Rowling",
            "country":"America",
            "imageLink":"images/harry-5.jpg",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire#:~:text=Goblet%20of%20Fire%20is%20almost,paperback%20edition%20was%20636%20pages).\n",
            "pages": 636,
            "title": "Harry Potter and the Goblet of Fire",
            "year": 2014,
            "price": 4.5
        },
        {
            "author":"Bill Finger",
            "country":"America",
            "imageLink":"images/Bat-man.jpg",
            "language":"English",
            "link": "https://www.britannica.com/topic/Batman-fictional-character\n",
            "pages": 161,
            "title": "Batman: Universe",
            "year": 2021,
            "price": 8.9
        },
        {
            "author":"varunkumar",
            "country":"india",
            "imageLink":"images/things-fall-apart.jpg",
            "language":"English",
            "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
            "pages": 209,
            "title": "Things Fall Apart",
            "year": 1958,
            "price": 20.99
        },
        
        {
            "author": "Hans Christian Andersen",
            "country": "Denmark",
            "imageLink": "images/fairy-tales.jpg",
            "language": "Danish",
            "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
            "pages": 784,
            "title": "Fairy tales",
            "year": 1836,
            "price": 50.66
        },
    ];
    const colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6",
        "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D",
        "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A",
        "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC",
        "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC",
        "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399"];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let totalCost = parseFloat(localStorage.getItem('totalCost')) || 0;

    function showBooks(filteredBooks = bookData) {
        bookshelf.innerHTML = "";
        filteredBooks.forEach((book, index) => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");
            bookElement.innerHTML = `
            <img src="${book.imageLink}" alt="${book.title}" class="book-image">
        <h4>${book.title}</h4>
        <p class="price">Price: $${book.price}</p>
        <p class="price">Price: ₹${book.price*83.50}</p>
         <button class="add-to-cart">Add to Cart</button><br>
           <button class="favorite">favorite</button>
        `;
            const style = document.createElement("style");
            style.textContent = `.book:nth-child(${index + 1}):hover .details { background-color: ${colors[index % colors.length]}; }`;
            document.head.appendChild(style);

            const addToCartButton = bookElement.querySelector(".add-to-cart");
            addToCartButton.addEventListener("click", () => {
                cart.push(book);
                totalCost += parseFloat(book.price);
                updateCartDisplay();
            });

            const favoriteButton = bookElement.querySelector(".favorite");
            favoriteButton.addEventListener("click", () => {
                toggleFavorite(book);
                updateFavoriteDisplay();
            });
            
            const bookImage = bookElement.querySelector(".book-image");
            bookImage.addEventListener("click", () => {
                showModal(book);
            });
            bookshelf.appendChild(bookElement);
        });
    }


    function showModal(book) {
        modalImage.src = book.imageLink;
        modalDetails.innerHTML = `
            <div class="details-1">
            <h2>${book.title}</h2>
            <p>By ${book.author}</p>
            <p>Year: ${book.year}</p>
            <p>Language: ${book.language}</p>
            <p>Country: ${book.country}</p>
            <p>Pages: ${book.pages}</p>
            <p>Price: $${book.price}</p>
            <p>Price: ₹${(book.price * 83.50).toFixed(2)}</p>
            <a href=${book.link} target="_blank">Link</a>
            </div>
        `;
        
            
        bookModal.style.display = "block";
    }

    span.onclick = function() {
        bookModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == bookModal) {
            bookModal.style.display = "none";
        }
    }



    function updateCartDisplay() {
        const cartItemsElement = document.getElementById("cart-items");
        const totalPriceElement = document.getElementById("total-price");
        cartItemsElement.innerHTML = "";
        cart.forEach((book, index) => {
            const cartItemElement = document.createElement("li");
            cartItemElement.innerHTML = `
            <div>
                <img src="${book.imageLink}" alt="${book.title}" width="150px">
                <h6>${book.title}</h6>
                <p>Price: $${book.price}</p>
                <p>Price: ₹${(book.price * 83.50).toFixed(2)}</p>
                
             <button class="remove-from-cart">Remove</button>
            </div>
        `;
            const removeFromCartButton = cartItemElement.querySelector(".remove-from-cart");
            removeFromCartButton.addEventListener("click", () => {
                removeFromCart(index);
                updateCartDisplay();
            });
            cartItemsElement.appendChild(cartItemElement);
        });

        totalPriceElement.textContent = `$${totalCost.toFixed(2)}`;
        //totalPriceElement.textContent = `₹${(totalCost*83.50).toFixed(2)}`;
        saveCartToStorage();

    }

    function removeFromCart(index) {
        totalCost -= parseFloat(cart[index].price);
        cart.splice(index, 1);
        saveCartToStorage();
    }

    function saveCartToStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalCost', totalCost.toString());
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    function toggleFavorite(book) {
        const index = favorites.findIndex(favorite => favorite.title === book.title);
        if (index === -1) {
            favorites.push(book);
        } else {
            favorites.splice(index, 1);
        }
    }

    function updateFavoriteDisplay() {
        const favoriteItemsElement = document.getElementById("favorite-items");
        favoriteItemsElement.innerHTML = "";

        favorites.forEach((book) => {
            const favoriteItemElement = document.createElement("li");
            favoriteItemElement.innerHTML = `
            <div>
                <img src="${book.imageLink}" alt="${book.title}" width="150px">
                <h6>${book.title}</h6>
                <p>Price: $${book.price}</p>
            <button class="remove-favorite">Remove</button>
            </div>
        `;
            const removeFavoriteButton = favoriteItemElement.querySelector(".remove-favorite");
            removeFavoriteButton.addEventListener("click", () => {
                toggleFavorite(book);
                updateFavoriteDisplay();
            });
            favoriteItemsElement.appendChild(favoriteItemElement);
        });
        saveCartToStorage();
    }

    const cartLink = document.getElementById("cartLink");
    cartLink.addEventListener("click", (event) => {
        event.preventDefault();
        main.innerHTML = "";
        const cartContainer = document.createElement("div");
        cartContainer.id = "cart";
        cartContainer.innerHTML = `
    <h2>Cart</h2>
    <ul id="cart-items"></ul>
    <p>Total: <span id="total-price">$0</span></p>
  `;
        main.appendChild(cartContainer);
        updateCartDisplay();
    });

    const booksLink = document.getElementById("booksLink");
    booksLink.addEventListener("click", function (event) {
        event.preventDefault();
        main.innerHTML = `
        <div id="bookshelf">
            <a href="index.html">Go to Home Page</a>
        </div>
    `;
        main.appendChild(bookshelf);
        header.style.display = "none";
        showBooks(); // Make sure to call showBooks here to display the books
    });

    const favoritesLink = document.getElementById("favoritesLink");
    favoritesLink.addEventListener("click", function (event) {
        event.preventDefault();
        main.innerHTML = "";

        const favoritesContainer = document.createElement("div");
        favoritesContainer.id = "favorites";
        favoritesContainer.innerHTML = `
            <h2>Favorites</h2>
            <ul id="favorite-items"></ul>
        `;

        main.appendChild(favoritesContainer);
        updateFavoriteDisplay();
    });

    searchButton.addEventListener("click", function () {
        const query = searchInput.value.toLowerCase();
        const filteredBooks = bookData.filter(book =>
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        );
        showBooks(filteredBooks);
    });
    function applyPriceFilter() {
        let filteredBooks = bookData;
        const selectedPrice = priceDropdown.value;

        if (selectedPrice === "under500") {
            filteredBooks = filteredBooks.filter(book => book.price * 83.50 < 500);
        } else if (selectedPrice === "above500") {
            filteredBooks = filteredBooks.filter(book => book.price * 83.50 >= 500);
        }

        showBooks(filteredBooks);
    }

    priceDropdown.addEventListener("change", applyPriceFilter);

    searchButton.addEventListener("click", function () {
        const selectedPrice = priceDropdown.value;
        if (selectedPrice === "under500") {
            filteredBooks = filteredBooks.filter(book => book.price * 83.50 < 500);
        } else if (selectedPrice === "above500") {
            filteredBooks = filteredBooks.filter(book => book.price * 83.50 >= 500);
        }
        showBooks(filteredBooks);
    });

    showBooks(); // Initial call to display all books
});
