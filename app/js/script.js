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