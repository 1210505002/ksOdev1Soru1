// 10000 elemanı olan 10000 sayı arasından rastgele elemanlı dizi oluşturuldu
let rastgeleSayiliDizi = [];
for (let i = 0; i < 10000; i++) {
  rastgeleSayiliDizi.push(Math.floor(Math.random() * 10000));
}
// Bubble Sort ile dizi sıralandı ve en büyük eleman döndürüldü
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Elemanları yer değiştir
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // En büyük eleman en son eleman olduğu için, son elemanı döndürdü
  return arr[n - 1];
}

// Quick Sort ile dizi sıralandı
function quicksort(dizi) {
  if (dizi.length <= 1) {
    return dizi;
  } else {
    var pivot = dizi[0];
    var solTaraf = [];
    var sagTaraf = [];
    for (var i = 1; i < dizi.length; i++) {
      if (dizi[i] < pivot) {
        solTaraf.push(dizi[i]);
      } else {
        sagTaraf.push(dizi[i]);
      }
    }
    return quicksort(solTaraf).concat(pivot, quicksort(sagTaraf));
  }
}

//quick sort süresi hesaplandı ve en büyük eleman döndürüldü
let startTime1 = new Date().getMilliseconds();
var result1 = quicksort(rastgeleSayiliDizi);
let endTime1 = new Date().getMilliseconds();
var result1 = result1[rastgeleSayiliDizi.length - 1];
console.log(
  "Quick sort fonksiyonuyla",
  (endTime1 - startTime1).toFixed(4),
  "milisaniye sürdü ve En büyük eleman",
  result1
);

//Bubble sort süresi hesaplandı ve en büyük eleman döndürüldü
var t0 = new Date().getMilliseconds();
var result2 = bubbleSort(rastgeleSayiliDizi);
var t1 = new Date().getMilliseconds();
console.log(
  "Brute Force-Bubble sort fonksiyonuyla ",
  (t1 - t0).toFixed(4),
  "milisaniye sürdü ve En büyük eleman",
  result2
);

