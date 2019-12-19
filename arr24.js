// Maкс

function task24(arr) {
   var n = arr.length;
   var i = 0;
   var d = arr[i + 1] - arr[i];
   for(i; i < n; i++) {
      if (arr[i] != arr[0] + i * d) {
         console.log(0);
         return;
      }
   }
   console.log(d);
}

var arr1 = [1, 3, 5, 99, 9, 11, 13];
var arr2 = [1, 3, 5, 7, 9, 11, 13];

task24(arr1);
task24(arr2);




// частично раб - d выводит пока сохраняется прогрессия
var arr = [1, 3, 5, 99, 9, 11, 13];
var n = 7;
var d = 0;
var i  = 0;

d = arr[i + 1] - arr[i];

for(i; i < n; i++){
	if(arr[i] != arr[0] + i * d){
		console.log(0);
		break;// как не вывести d если нет везде прогрессии ???
	}
	else{
	console.log(d);
	
	}
	
	/*if(arr[i] + d == arr[i + 1]){
		
		console.log(d);
		//console.log(arr[i + 1]);
	}
	else{
		console.log(0);// всегда показывает ??? 
		break;
	}
	*/
}




/*Array24. Дан целочисленный массив размера N, не содержащий одинаковых чисел. Проверить, образуют ли его элементы арифметическую прогрессию (см. задание Array3). Если образуют, то вывести разность прогрессии, если нет — вывести 0.*/ 