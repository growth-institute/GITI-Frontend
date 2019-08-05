$( document ).ready(function() {
    var $grid = $('.filterc').isotope({
        itemSelector: '.eitem',
        layoutMode: 'fitRows'
      });
    console.log( "ready2!" );
   
    $("#btn1").on( 'click',  function() {
    // console.log("boton click1");
    //  $grid.isotope({ filter: '.metal' });
    });
    // bind filter button click
    $('button').on( 'click', function() {
        console.log("boton click3");
      var filterValue = $( this ).attr('data-filter');
        console.log(filterValue);
        // use filterFn if matches value
        //   filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
        });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        console.log("boton click2");
    var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });
});

// init Isotope
// var $grid = $('.grid').isotope({
//   itemSelector: '.element-item',
//   layoutMode: 'fitRows'
// });
// filter functions
// var filterFns = {
//   // show if number is greater than 50
//   numberGreaterThan50: function() {
//     var number = $(this).find('.number').text();
//     return parseInt( number, 10 ) > 50;
//   },
//   // show if name ends with -ium
//   ium: function() {
//     var name = $(this).find('.name').text();
//     return name.match( /ium$/ );
//   }
// };







