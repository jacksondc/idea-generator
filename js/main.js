function updateIdea() {
  $('#idea').attr('id', 'idea-old').animate({ left: '200%', right: '-200%', opacity:'0' }, function() {
    this.remove();
  });
  $('#idea-old').clone().attr('id', 'idea').appendTo('#ideas').css({left: '-200%', right: '200%', opacity:'0'
    }).animate({ left: '0%', right: '0%', opacity:'1' });
  updateIndex();
}

function updateIndex() {
  var index = Math.round( Math.pow(( Math.random() + 1 ),9) );
  $('#idea .index').text('#' + index);
}

updateIndex();