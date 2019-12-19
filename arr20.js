// ok
var arr = [1, 2, 5, 6, 8, 7, 11, 12, 87];//44
var n = 9;
var k = 3;
var l = 7;
var res = 0;

for (var i = 0; i < n; i++){
	if(i >= k && i <= l){
		res += arr[i];
		console.log(arr[i]);
	}
}
console.log(res);
/*Array20. Дан массив размера N и целые числа K и L (1 ≤ K ≤ L ≤ N). Найти сумму элементов массива с номерами от K до L включительно. */