const config = {
    'ime_prezime': {
        required: true,
        minlength: 5,
        maxlength: 50
    },

    'korisnicko_ime': {
        required: true,
        minlength: 5,
        maxlength: 50

    },
    'email': {
        required: true,
        email:true,
        minlength: 5,
        maxlength: 50

    },
    'broj_telefona': {
        minlength:7,
        maxlength:9
    },
    'lozinka': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'ponovi_lozinku'
    },
    'ponovi_lozinku': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'lozinka'
    },
    'zip_code': {
        minlength: 5,
        maxlength: 7
        
    }
}

let validator = new Validator(config);










/*function Osoba(first_name, last_name, phone) {
           this.first_name = first_name;
           this.last_name = last_name;
           this.phone = phone;

           this.getNameAndPhone = function () {
            console.log(`${first_name}-${phone}`)
           }

           
}

let osoba1 = new Osoba("Ivan", "Ivanovic","088723678");
osoba1.getNameAndPhone();
*/

/*class Osoba {
    constructor( first_name, last_name, phone) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;

    }
    getNameAndPhone() {
        console.log(`${this.first_name} - ${this.phone}`)
    }
}

let osoba1 = new Osoba("Mejra", "Baralija", "0823636");
let osoba2 = new Osoba("Niko", "Nikolic", "12399346")

console.log(osoba1)
osoba1.getNameAndPhone();*/
