$(document).ready(() => {
    let checkedAmenities = {};
    $(document).on('change', "input[type='checkbox']", ()=> {
        if (this.checked) {
            checkedAmenities[$(this).data('id')] = $(this).data('name');
        } else {
            delete checkedAmenities[$(this).data('id')];
        }
        let first = Object.values(checkedAmenities);
        if (first.length > 0) {
            $('div.amenities > h4').text(Object.values(checkedAmenities).join(', '));
        } else {
            $('div.amenities > h4').html('&nbsp;');
        }
    });
});