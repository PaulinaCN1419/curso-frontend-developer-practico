// Haremos que el menu de la clase 7 aparezca y desaparezca
// Usando inactive haremos que se aparezca y desaparezca al hacer clic en el correo
//Primero lalmamos a la clase de la etiqueta html que tiene el correo (es un li)
const menuEmail = document.querySelector('.navbar-email');
// Segundo llamamos al elmento html que tiene al desktop menu, el de la clase 7
const desktopMenu = document.querySelector('.desktop-menu');

// Haremos que aparezca y desparezca el menu de la clase 8
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//Union con clase 13 product detail
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');
//8. llamamos a al etiqueta cards-container
const cardsContainer = document.querySelector('.cards-container');

//Llamamos a los addlistener
menuEmail.addEventListener('click', toogleDesktopMenu);
burgerMenu.addEventListener('click', toogleMobileMenu);
menuCarIcon.addEventListener('click', toogleCarMenu);

function toogleDesktopMenu() {
    
    // Classlist Toogl activa o desactiva el menu para que se vea, cuando hagamos clic en el correo
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    // Cuando abrimos el menu mobile y tambien el del carrito de comrpas
    //ambos estan presentes y no se cierran, hay que decirle, que mientras abrimos el uno, el otro menu se cierre
    //para ello, haremos lo siguiente:
    const isAsideClosed = shoppingCarContainer.classList.contains('inactive'); // con esto rpeguntamso si esta activa
    if(!isAsideClosed) {
        shoppingCarContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
// aside
function toogleCarMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); // con esto rpeguntamso si esta activa
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    shoppingCarContainer.classList.toggle('inactive');
}

/*
Con el siguiente código javascript haremos que se creen los prudctos sin el uso de html
para ellos primero partiremos creando un array de objetos con atributos, name, price e image
*/
const productList = [];
productList.push ({
    name: 'Bike',
    price: 120,
    // Solo para el ejemplo usaremos la misma imagen
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push ({
    name: 'Monitor',
    price: 420,
    image: 'https://www.profesionalreview.com/wp-content/uploads/2020/01/image4.jpg',
});
productList.push ({
    name: 'Ordenador',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JkZW5hZG9yJTIwZGUlMjBtZXNhfGVufDB8fDB8fHww&w=1000&q=80',
});

/*
Como paso posterior haremos una funcion para, con ayuda de un for recorrer los objetos creados en 
el array productList
*/
function renderProducts() {
    // para recorrer objetos y que presente sus atributos es con el for of
    for(product of productList){
        //Ahora empezare a crear la estructura html desde javascript
        //1. aquí con javascript vamos a crear el elemento div, para el product card
        const productCard = document.createElement('div');
       //1.1 le agrego al div productCard la lista de div denominado product-card, porque recuerda que se vana  crear varios productos y este ultimo tiene la lista de estos productos
        productCard.classList.add('product-card');
        
         // 2.aquí creamos el img para la imagen del  product
        const productImg = document.createElement('img');
        //2.1
        productImg.setAttribute('src', product.image);

        // 3.aqui creamos el div para el product info
        const productInfo = document.createElement('div');
        //3.1
        productInfo.classList.add('product-info');

        // 4. creo otro div para los datos del articulo
        const productDetailInfo = document.createElement('div');
        
        // 5. Ahora creo las etiquetas p ,del nombre y del precio del producto
        const productPrice = document.createElement('p');
        //aqui estoy cambiando el texto de productoPrice por el valor que tiene el objeto en el arry, por su atributo price
        productPrice.innerText = "$" + product.price;
        //lo mismo hago para el nombre
        const productName = document.createElement('p');
        productName.innerText = product.name;

        //6 Sigo creando el resto de la estrucutra de HTMl, ahora u figure
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        //6.1 de la imagen creada , le vamos a fijar una imagen que ya esta en el proyecto
        //para ello debemos enviarle el artibuto de src, y la url de la imgen en donde debe buscarla
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        // 7.Los siguientes pasos es para que cada etiqueta creada, se coloque dentro del contenedor de html que corresponde para ello hacemos:
        // 7.1Particularmente lo haremos partiendo desde el final, pero en el tutorial no me aprece que haya dado un orden
        productInfoFigure.appendChild(productImgCart);
        
        //7.2 insertaremos el precio y nombre creado en el div productDetailInfo
        productDetailInfo.appendChild(productPrice);
        productDetailInfo.appendChild(productName);
        // productDetailInfo.append(productPrice, productName);

        //7.3 Ahora el productInfo le colocaremos el div de details y el figure
        productInfo.appendChild(productDetailInfo);
        productInfo.appendChild(productInfoFigure);
        // productInfo.append(productDetailInfo, productInfoFigure);
        
        //7.4 Ahora en productCard voy a insertar la imagen creada y el DIV productInfo
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        //productCard.appen(productImg, productInfo);

        //8.1 Ahora agrego todo el div denominado product-card en cardContainer
        cardsContainer.appendChild(productCard);

    }
}
renderProducts(productList);