//Utilisateur() est une fonction constructeur



function Utilisateur(n, a, m){
    this.nom = n;
    this.age = a;
    this.mail = m;

    
    this.bonjour = function(){
        alert('Bonjour, je suis ' + this.nom[2] + ', j\'ai ' + this.age + ' ans');
    
        document.getElementById('p2').innerHTML = 'Prénom : ' + this.nom;
        document.getElementById('p3').innerHTML = 'Age : ' + this.age;
        document.getElementById('p4').innerHTML = 'Mail : ' +this.mail;

    }

    this.contact = function(){
        alert('Contactez-moi par mail :' + this.mail + '!');
    }
}

let pierre = new Utilisateur(['Pierre', 'Giraud'], 29, 'pierre.giraud@edhec.com', 'Giraud');
let jb = new Utilisateur(['Jb', 'Druet'], 25, 'jb.druet@codeur.online', 'Druet');
let louis = new Utilisateur('Louis', 32, 'louisdupre@gmail.com');

/*---------------------------------------
*/

/*On accède aux valeurs des propriétés de l'objet crée qu'on affiche dans
 *les paragraphes de notre fichier HTML*/



pierre.bonjour();
jb.bonjour();
louis.bonjour();
jb.contact();
pierre.bonjour();