function sendEmail (name, time) {
    var header = 'Email kami WOW\n';
    var email = 'Ayo belanja di KlontongPedia\n';
    var footer = 'Jl. Klontongpedia 10\n';
    var sent = time + '\n';
    var recipient = name + '\n';

    console.log(header + email + footer + sent + recipient);
}

var names = [ 'Dimitri', 'Dhani', 'Icha' ];

// Email ke User
for (var i = 0; i < names.length; i++) {

    sendEmail('19.00', names[i])

}

