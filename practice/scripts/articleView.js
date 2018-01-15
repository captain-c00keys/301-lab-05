'use strict';

let articleView = {};

articleView.populateFilters = () => {//popluate filters for the empty array of articleView
    $('article').each(function() {//taking article tag and running an iteration of the articleView array with a funciton of...
        if (!$(this).hasClass('template')) { //if not the article tag with a class of template, then ...
            let val = $(this).find('address a').text();//finds text of "address a" in the tag article
            let optionTag = `<option value="${val}">${val}</option>`;
            

            if ($(`#author-filter option[value="${val}"]`).length ===0) {
                $('#author-filter').append(otpionTag);
            }

            console.log(typeof $(`#author-filter option[value="Tob"]`));
            val = $(this).attr('data-category');
            optionTag = `<option value="${val}">${val}</option>`;
            if($(`#category-filter option[value="${val}"]`).length === 0) {
                $('#category-filter').append(optionTag);
            }
        }
    });
};

articleView.handleAuthorFilter = () => {
    $('#author-filter').on('change', function() {
        if($(this).val()) {
            $('article').hide();
            $(`article[data-author="${$(this).val()}"]`).fadeIn();
        } else {
            $('article').fadeIn();
            $('article.template').hide();
        }
        $('#author-filter').val('');
    });
};

articleView.handleMainNav = () => {
    
}