/*
Задача вводить слово, и после нажатия ок, искать все совпадения
считать сколько слово повторяется раз, и выводить все эти слова списком
 */

var worlds = "Lorem Ipsum is simply dummy text of the " +
    "printing and typesetting industry. " +
    "Lorem Ipsum has been the industry's standard dummy " +
    "text ever since the 1500s, " +
    "when an unknown printer took a galley of " +
    "type and scrambled it to make a type specimen book. " +
    "It has survived not only five centuries, " +
    "but also the leap into electronic typesetting, " +
    "remaining essentially unchanged. " +
    "It was popularised in the 1960s with " +
    "the release of Letraset sheets containing " +
    "Lorem Ipsum passages, and more recently " +
    "with desktop publishing software like " +
    "Aldus PageMaker including versions of Lorem Ipsum";

var slog = prompt("Введите слово: ");

var spisok = [];
var c = 0;
var slovo = '';
for(var i = 0; i < worlds.length; i++){

    if(worlds[i] != ' '){
        slovo = slovo + worlds[i];
    }
    else{
        var sovp = slovo.toUpperCase().indexOf(slog.toUpperCase(),0);
   
    if(sovp !== -1){
    
        spisok[spisok.length] = slovo;
        c++;
                    }
    
        slovo = '';
    }
}
console.log(spisok);
console.log("Повторяется " + c + " раз.");