function proxytia(nama, peran) {    
    if (nama === '') {
        console.log('nama harus diisi!');
    } else {
        if (peran === '') {
            console.log('halo ' + nama + ', pilih peranmu untuk memulai game!');
        } else {
            console.log("Selamat datang di Dunia Proxytia, " + nama);
            if (peran === 'Ksatria') {
                console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
            } else if (peran === 'Tabib') {
                console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka!');
            } else {
                console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
            }
        }
    }
}

//test case 01
proxytia('Anton', 'Ksatria')
console.log('----')
//test case 02
proxytia('','Tabib')
console.log('-----')
//test case 03
proxytia('Toni','')
console.log('-----')
//test case 04
proxytia('Dono','Tabib')
console.log('-----')