// без сортировки. 
var a = [100, 103, 106, 4, 200, 201, 202, 203, 9, 10, 11, 12, 13, 500, 402, 403, 404];//500 и 402
var n = 17; // a.length
var max = 0;

for(var i = 0; i < n; i++){
		if(max < a[i] + a[i + 1]){
			max = a[i] + a[i + 1];
			//console.log(a[i]);//500
			//console.log(a[i + 1]);//403
			var a1 = a[i];
			var a2 = a[i + 1];
		}
		//var k = max;
		
	}
//console.log(k);
console.log(a1);//500
console.log(a2);//403
/*

// с ф-цие показывает только 1ю выборку 
var arr = [100, 103, 106, 4, 200, 201, 202, 203, 9, 10, 11, 12, 13, 500, 402, 403, 404];//500 и 402
function maxA(a){
	for(var i = 0; i < n; i++){
		if(max < a[i] + a[i + 1]){
			max = a[i] + a[i + 1];
			//console.log(max);//902
			
			console.log(a[i]);
			console.log(a[i + 1]);
			return;
		}
		
	}
	
}
//console.log(maxA(arr));
maxA(arr);
*/

/*Array41. Дан массив размера N. Найти два соседних элемента, сумма которых максимальна, и вывести эти элементы в порядке возрастания их индексов.*/ 