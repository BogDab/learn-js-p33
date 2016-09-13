/*Created by Nazarov*/
/**
 * Разработать логику работы калькулятора
 * Задача при n заданых чисел и при n-1 знаков, посчитать правильный результат выполнения всех операций
 * Важно соблюдать приоритетность выполнения операций
 */
var values = [243, 1232, 46, 28, 94, 11, 7];
var operators = ["+", "*", "*", "/", "-", "+"];
var result = 0;

/**
 ======================================
 YOUR CODE
 ======================================
 */

function summa(a,b)
{
	return b+a;
}
function minus(a,b){
	return a-b;
}
for(var i = 0; i < operators.length; i++)
{
		switch(operators[i])
		{
			case "*":
			var c = 0;
			for(var z = 0; z < values[i+1]; z++)
			{
				c = summa(c,values[z]);
			}
			values[i] = c;
			values.splice(i+1,1);
			operators.splice(i,1);
			i--;
			break;
			case "/":
				var b = 0;
				var resultat = 0;
				while((resultat+values[i+1]) < values[i]){
					resultat = summa(resultat,values[i+1]);
					b++;
				}
				values[i] = b;
				values.splice(i+1,1);
				operators.splice(i,1);
				i--;
				break;
		}
}
for(var j = 0;  j < operators.length; j++){
		switch(operators[j])
		{
				case "+":
				values[j] = summa(values[j],values[j+1]);
				values.splice(j+1,1);
				operators.splice(j,1);
				j--;
				break;
				case "-":
				values[j] = minus(values[j],values[j+1]);
				values.splice(j+1,1);
				operators.splice(j,1);
				j--;
				break;
		}
}

result = values[0];
console.log("Результат: " + result);