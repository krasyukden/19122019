// ok
var a = [100, 101, 99, 4, 200, 6, 25, 8, 9, 10];
var n = 10; // a.length
var i = 1;
var max = 0;


for(i; i < n; i++){
	if(a[i - 1] < a [i] && a[i] > a [i + 1]){
		//console.log(a[i]); работает
		
		if(max < a[i]){
			max = a[i];	
		}
	}
	
}
console.log(max);








/*Array35. Дан массив размера N. Найти минимальный из его локальных максимумов (определение локального максимума дано в задании Array33). */