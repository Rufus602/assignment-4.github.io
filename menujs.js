function search() {
  var buttonSound = document.getElementById('buttonSound');
  buttonSound.play();

  
  // Получаем введенный текст из поля ввода
  var searchText = document.getElementById('searchInput').value.toLowerCase();

  // Получаем все карточки с элементами на странице
  var cards = document.getElementsByClassName('card');

  // Перебираем карточки и скрываем те, которые не соответствуют введенному тексту
  for (var i = 0; i < cards.length; i++) {
    var title = cards[i].getElementsByClassName('card-title')[0].innerText.toLowerCase();

    if (title.includes(searchText)) {
      cards[i].style.display = 'block';
    } else {
      cards[i].style.display = 'none';
    }
  }
}

var cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
      card.addEventListener('mouseover', function() {
        card.style.backgroundColor = 'lightgray';
      });

      card.addEventListener('mouseout', function() {
        card.style.backgroundColor = '';
      });
    });

    var heading = document.getElementById('zavtraki');

    heading.addEventListener('mouseover', function() {
      heading.style.color = 'red';
    });

    heading.addEventListener('mouseout', function() {
      heading.style.color = '';
    });

    
    // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}