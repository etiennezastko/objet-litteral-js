/*création d'un objet littéral 'utilisateur'. On appelle celui-ci un objet littéral car on lui donne manuellement ses propriétés, on les appelle "littéralement"*/



let utilisateur = {
    age : '25',
    nom : {
        name:'jb',
        surname:'druet',
    },
    mail : 'jb.druet@codeur.online',
    bonjour : function(){
                alert('Bonjour, je suis ' + this.nom.name + " " + 'J\'ai ' + this.age + ' ans');
                    }

                };

    console.log(utilisateur.nom.name);
                utilisateur.bonjour();

            /*âge prénom ville sont des propriétés (la propriété âge a pour valeur 25, la propriété prénom a pour valeur jb)
            la propriété bonjour est appelée une méthode car sa valeur est une fonction.
            
            Notre objet littéral 'utilisateur' est ainsi composé de 3 propriétés et d'une méthode. Les propriétés et méthodes qui composent
            un objet littéral sont appelés les "membres" de l'objet.*/





/*"user" est une variable qui contient un objet. Par abus de langage,
 *on dira que notre variable EST un objet*/

/*
let pierre = {
    nom : ['Pierre', 'Giraud'],
    age : 29,
    mail : 'pierre.giraud@edhec.com',
    
    bonjour: function(){
        alert('Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age + ' ans');
    }
};
/*On accède aux propriétés "nom" et "age" de "pierre" et on affiche leur valeur
 *dans nos deux paragraphes p id='p1' et p id='p2'.
 *A noter : "document" est en fait aussi un objet, getElementById() une méthode
 *et innerHTML une propriété de l'API "DOM"!*/
/*
document.getElementById('p1').innerHTML = 'Nom : ' + pierre.nom;
document.getElementById('p2').innerHTML = 'Age : ' + pierre.age;
//On modifie la valeur de la propriété "age" de "pierre"
pierre.age = 30;
document.getElementById('p3').innerHTML = 'Nouvel âge : ' + pierre.age;
/*On accède à la méthode "bonjour" de l'objet "pierre" qu'on exécute de la même
 *même façon qu'une fonction anonyme stockée dans une variable*/

/*Code commenté pour éviter que la fenêtre d'alerte ne s'ouvre toute seule
pierre.bonjour();
*/