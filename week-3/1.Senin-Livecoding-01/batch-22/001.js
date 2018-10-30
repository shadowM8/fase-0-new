// Competencies: Pseudocode

// Buatlah Pseudocode untuk kasus berikut:
// Sebuah perahu layar sedang melaju dengan kecepatan 30km/jam
// Perahu tersebut dipengaruhi oleh kecepatan ombak yang berlawanan dengan arah lain

// - Jika ombak dibawah 1 meter maka kecepatan tetap.
// - Jika ombak setinggi 1 meter maka kecepatan akan berkurang sebesar 7km/jam
// - Jika ombak setinggi 2 meter maka kecepatan akan berkurang sebesar 15km/jam
// - Jika ombak lebih tinggi daripada 2 meter maka perahu akan terbalik, sehingga kecepatan menjadi 0km/jam

// Tampilkan kecepatan perahu jika di depan ada ombak setinggi x meter

/**
 * 
STORE 'KECEPATAN' WITH VALUE 30
STORE 'TINGGI OMBAK' WITH VALUE X

IF 'TINGGI OMBAK' LESS THAN 1 , THEN DO
    SET 'KECEPATAN' VALUE AS KECEPATAN TIMES 1
ELSE IF 'TINGGI OMBAK' EQUALS TO 1, THEN DO
    SET 'KECEPATAN' VALUE AS KECEPATAN - 7
ELSE IF 'TINGGI OMBAK' EQUALS TO 2, THEN DO
    SET 'KECEPATAN' VALUE AS KECEPATAN - 15
ELSE IF 'TINGGI OMBAK MORE THAN 2, THEN DO
    SET 'KECEPATAN' VALUE AS KECEPATAN TIMES 0

DISPLAY 'KECEPATAN' AND 'TINGGI OMBAK'
 */
