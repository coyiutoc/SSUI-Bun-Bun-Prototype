$( document ).ready(function() {

    let keys = Object.keys(BUN_DATA);

    for (let key of keys) {
    	let id = key;
    	let name = BUN_DATA[key].name;
    	let img_url = BUN_DATA[key].img;
    	let price = BUN_DATA[key].price;
    	let rating = BUN_DATA[key].rating;
    	let total_rating = BUN_DATA[key].total_rating;
    	let star_string = get_star_string(rating);
    	let style = BUN_DATA[key].style_position;

    	let html = `
    		<div id = "${id}" class = "browse-item" style = "${style}" onclick="location.href='/item/${id}'">
	          <img src=${img_url}>
	          <div class = "content">
	            <h3>${name}</h3>
	            <br>
	            <span class="item-price">${price}/pc</span>
	            <br>
	            ${star_string}
	            <span class="reviews">(${total_rating} reviews)</span>
	          </div>
       		</div> 
    	`;

    	$("#browse-grid").append(html);
    }
	
});

function get_star_string(rating) {
	const MAX = 5;
	let string = "";
	let star = `<i class="fas fa-star"></i>`;
	let no_star = `<i class="far fa-star"></i>`;

	for (let i = 0; i < MAX; i++) {
		if (rating > 0) {
			string += star;
		} else {
			string += no_star;
		}
		rating -= 1;
	}

	return string;
}