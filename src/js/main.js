function cards(img, name,cooperative, Price){
    let card = `<div class="w shadow-sm mt-5 rounded-lg"><div><img class="w-100 h rounded-lg" src="src/p_img/${img}.jpg" alt="the prodact pecture"></div><div class="p-2"><div class="newTag">New</div><div><h5 class="pr-name">${name}</h5></div><div class="d-flex justify-content-between"><p class="text-secondary">${cooperative}</p><h6 class="font-weight-bold text-warning">${Price}</h6></div></div></div>`;
    document.getElementById('card-container').innerHTML = card;

}
$(document).ready(function () {
    // $('#first').change(function () {
    //     var sp = $('span[data-target="#first"]');

    // })
    // vendeur page
    let products = $('.items');
    // switch grid;
    $('#two').click(function () {
        for (let i = 0; i < products.length; i++) {
            products.children().removeClass()
            products.children().addClass("col-md-6");
        }
    });
    $('#three').click(function () {
        for (let i = 0; i < products.length; i++) {
            products.children().removeClass()
            products.children().addClass("col-md-4");
        }
    });
    $('#four').click(function () {
        for (let i = 0; i < products.length; i++) {
            products.children().removeClass()
            products.children().addClass("col-md-3");
        }
    });
});

$(".icona").click((e) => {
  $(".nav__part2").toggleClass("active");
});
$(".icona").css("cursor", "grab");

// BTN
let addSection = document.getElementById('add-collapse');
let editSection = document.getElementById('edit-collapse');
let delSection = document.getElementById('del-collapse');
//Sections
let admin_title = document.getElementById('admin-title')
let cats = document.getElementById('categories');
let prod = document.getElementById('products');
//Menu Links
let btnProd = document.getElementById('prods')
let btncats = document.getElementById('cats')

//Disable Page Reload
window.onsubmit = (e) => {
	e.preventDefault();
}

// Button Toggle Menu
let toggleBtn;
toggleBtn = () => {
	let x = document.getElementById("togl");
	if (x.textContent === ">>>") {
		x.textContent = "<<<";
	} else {
		x.textContent = ">>>";
	}
};
$(function () {
	$('#sidebarCollapse').on('click', function () {
		toggleBtn();
		$('#sidebar, #content').toggleClass('active');
		
	});
});

// Section #Products
// Add Product

$('#add-prod').on('click', function () {
	if (addSection.className.indexOf('show') === -1) {
		addSection.classList.add('show')
		editSection.classList.remove('show')
		delSection.classList.remove('show');
		
	} else {
		// addSection.classList.add('hide');
		addSection.classList.remove('show')
	}
})

// edit Product

$('#edit-prod').on('click', function () {
	if (editSection.className.indexOf('show') === -1) {
		editSection.classList.add('show');
		addSection.classList.remove('show');
		delSection.classList.remove('show');
		
	} else {
		editSection.classList.remove('show');
		
	}
})

// Delete Product

$('#del-prod').on('click', function () {
	if (delSection.className.indexOf('show') === -1) {
		delSection.classList.add('show');
		editSection.classList.remove('show');
		addSection.classList.remove('show')
	} else {
		delSection.classList.remove('show');
	}
})

btnProd.onclick = () => {
	admin_title.classList.add('hide');
	cats.classList.add('hide');
	prod.classList.remove('hide');
};

btncats.onclick = () => {
	admin_title.classList.add('hide');
	prod.classList.add('hide');
	cats.classList.remove('hide');
	
};