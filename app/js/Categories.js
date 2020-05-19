function cards(img, name,cooperative, Price){
    let card = `<div class="w shadow-sm mt-5 rounded-lg"><div><img class="w-100 h rounded-lg" src="src/p_img/${img}.jpg" alt="the prodact pecture"></div><div class="p-2"><div class="newTag">New</div><div><h5 class="pr-name">${name}</h5></div><div class="d-flex justify-content-between"><p class="text-secondary">${cooperative}</p><h6 class="font-weight-bold text-warning">${Price}</h6></div></div></div>`;
    document.getElementById('card-container').innerHTML = card;

}