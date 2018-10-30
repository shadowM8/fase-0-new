function angkaPrima(angka) {
    for (var i = 2; i < angka; i++) { //dimulai dari 2, karena semua angka dibagi 1 pasti habis
        if (angka % i === 0) {
            return false
        }
    }
    return true
}

// TEST CASES
console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false