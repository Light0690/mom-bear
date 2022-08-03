function generate(){
      let quotes = {
        "Даниил Наумов" : '"Не грусти"',
        "Мама Мишка" : '"Люблю тебя"',
        "Котеночек" : '"Все будет тути-фрути"',
        "Солнышко" : '"Не вешай нос"'
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];
    
    let quote = quotes[author];

   document.getElementById("quote").innerHTML = quote;
   document.getElementById("author").innerHTML = author;
}