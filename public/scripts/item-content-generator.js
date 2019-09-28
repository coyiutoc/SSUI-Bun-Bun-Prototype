$( document ).ready(function() {

  var id = FLAVOR;
  var name = BUN_DATA[id].name;
  var img_url = BUN_DATA[id].img;
  var price = BUN_DATA[id].price;
  var description = BUN_DATA[id].description;
  var quantity = 1;
  var total = parseFloat(price.substring(1)).toFixed(2);

  let rating_string = get_star_string(BUN_DATA[id].rating);

  let html = `
      <div class = "img-container">
        <img src=${img_url}></img>
      </div>
      <div class = "item-content">
        <div style="padding-bottom: 2vh">
          ${rating_string}
        </div>
        <h2>${name}</h2>
        <span class="price">${price}/pc</span>
        <br><br>
        <p>${description}</p>
        <div class="form-group">
          <label for="quantity">Select quantity:</label>
          <select class="form-control" id="quantity">
            <option>1</option>
            <option>2</option>
            <option>6</option>
            <option>12</option>
          </select>
        </div>
        <div class="form-group">
          <label for="glazing">Select glazing:</label>
          <select class="form-control" id="glazing">
            <option>None</option>
            <option>Sugar-milk</option>
            <option>Vanilla-milk</option>
            <option>Double chocolate</option>
          </select>
        </div>
        <div id = "total">
          <h3><b>TOTAL:</b> ${price}</h3>
        </div>
      </div>
      <div class="item-buttons">
        <button style="float: left" type="button" class="btn btn-outline-danger" onclick="location.href='/browse'">Back to Browsing</button>
        <span style="float:right">
          <button type="button" class="btn btn-success" data-toggle="modal" data-target="#cartModal">Add to Cart</button>
        </span>
      </div>
  `;

  $("#item-grid").append(html);
  
  // LISTENERS
  $('#quantity').change(function(){ 
    quantity = $(this).val();
    total = (parseFloat(quantity) * parseFloat(price.substring(1))).toFixed(2);

    let string = `<h3><b>TOTAL:</b> $${total}</h3>`;
    $('#total').html(string);
  });

  $('#cartModal').on('show.bs.modal', function (event) {

    let glazing = $('#glazing option:selected').text();
    let html = `
      <h3><u>${name} Cinnamon Roll(s)</u></h3>
      <b>Quantity:</b> ${quantity}
      <br>
      <b>Glazing: </b> ${glazing}
      <br>
      <b>Total Price: </b> $${total}
    `;

    $('#item-summary').html(html);
    // var button = $(event.relatedTarget) // Button that triggered the modal
    // var recipient = button.data('whatever') // Extract info from data-* attributes
    // // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    // var modal = $(this)
    // modal.find('.modal-title').text('New message to ' + recipient)
    // modal.find('.modal-body input').val(recipient)
  })

});
