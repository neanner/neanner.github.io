
$('li').on('click', function(event){
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var href = $(this).find('a').attr('href');
    //get the value of the first href in the string of all of the hrefs in the anchor tags in the list items
    var section = $(href).css;
    //jQuery will search through the DOM to find all hrefs and create a jquery object signifying the section that references the hrefs
    //the sections will slide down when the section is not visiblem otherwise it will slide up
    $(href).show().siblings().hide();

    if (section == 'none'){
        $("#slide-down").slideDown();
    } else{
        $("#slide-down").slideUp();
    }

});




