

$(document).ready(() => {
  $('body').on('mouseenter', '.result', () => {
    $(this).addClass('text-danger');
  });
  $('body').on('mouseleave', '.result', () => {
    $(this).removeClass('text-danger');
  });
  $('body').on('click', '.result', () => {
    window.open($(this).children('footer').text(), '_blank');
  });

  $('form').submit((evnt) => {
    evnt.preventDefault();
    const query = $('#search-text').val();
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=50&callback=?&search=';
    $.getJSON(url + query, (json) => {
      let res = '<div class="container rounded well"><h2>';
      res += '<small> Result for: </small>';
      res += json[0];
      res += '</h2> <dl">';
      for (let i = 0; i < json[1].length; i += 1) {
        res += `<div class="bg-info rounded result"><dt>${json[1][i]}</dt>`;
        res += '<dd>';
        res += `${json[2][i]}</dd>`;
        res += `<footer>${json[3][i]}`;
        res += '</footer></dd></div><br>';
      }
      res += '</dl></div>';
      $('#result').html(res);
    });
  });
});

