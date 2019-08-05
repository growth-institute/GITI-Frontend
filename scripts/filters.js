$( document ).ready(function() {
    var qsRegex;
    var buttonFilter;
    var $grid = $('.filterc').isotope({
        itemSelector: '.eitem',
        layoutMode: 'fitRows',
        filter: function() {
            var $this = $(this);
            var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
            var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
            return searchResult && buttonResult;
          }
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

    // debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
      clearTimeout( timeout );
      var args = arguments;
      var _this = this;
      function delayed() {
        fn.apply( _this, args );
      }
      timeout = setTimeout( delayed, threshold );
    };
  }
});








