$('#submit').on('click', function(){
    let displayname = $('#displayName').val();
    let comment = $('#comment').val();
    $('#commentBuffer').prepend('<div class="addedcomment"><div class="img"></div><div id="displaynameparent"><div id="displayname"><div>'+ displayname +'</div><div id="editDelete"><span class="edit">Edit</span><span class="delete">Delete</span></div></div><div class="realcomment"><div class="actualtext">'+ comment +'</div><div class="invisclass"><input class="commentedit" placeholder="Edit your comment" ><span class="submitedit">Submit</span></div></div></div></div>');
    $('.img').css('background-image', 'url(person.png)')
});

$('#commentBuffer').on('click', '.delete', function() {
    $(this).parents()[3].remove();
});

$('#commentBuffer').on('click', '.edit', function() {
    let disnameparent = $(this).parents()[2];
    let rcomment = $(disnameparent).children()[1];
    let rcommentchildren = $(rcomment).children()[1];
    $(rcommentchildren).toggleClass('invisclass');
});

$('#commentBuffer').on('click', '.submitedit', function() {
    let texteditparent = $(this).parents()[1];
    let finaltextedit = $(texteditparent).children()[0];
    $(finaltextedit).text($('.commentedit').val());
    let removeedit = $(this).parents()[0];
    $(removeedit).toggleClass('invisclass');
});