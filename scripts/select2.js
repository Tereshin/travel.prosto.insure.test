$(document).ready(function() {

  var selectData = [];

  function returnSelectItem(item) {
    return {
      text: item.name,
      id: item.id
    }
  };

  $.get('https://travel.prosto.insure/api/countries-clear', function( data ) {

    data.forEach(function(item, index, array) {
      selectData.push(returnSelectItem(item));
    });

    $('select').select2({
      width: '100%',
      multiple: true,
      data: selectData   
    });

  });
});