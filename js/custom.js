$('.input-group.date.pickup').datepicker({
  todayHighlight: true,
  autoclose:true,
  startDate: new Date()
});
$('.clockpicker').clockpicker({
  placement: 'bottom',
  align: 'left',
  autoclose: true,
  'default': 'now'
});

$('.routeName').typeahead({
  source: [
    {"name": "Afghanistan", "code": "AF", "ccn0": "040"},
    {"name": "Land Islands", "code": "AX", "ccn0": "050"},
    {"name": "Albania", "code": "AL","ccn0": "060"},
    {"name": "Algeria", "code": "DZ","ccn0": "070"}
  ]
});

$('.footable').footable({
    "columns": [{
      "sortable": false
    }]
});