var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D MMMM YYYY',
    firstDay: 1,
    minDate: new Date(2017, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2017,2020],
    showDaysInNextAndPreviousMonths: true,
    enableSelectionDaysInNextAndPreviousMonths: true
});
