//Partie Pratique — Niveau Débutant
// Exercice 1 : Variables & types (débutant)

// let nom = "ghita"
// let age = 22
// let estEtudiant = true
// let note1 = 17.50
// let note2 = 13

// console.log(typeof nom);
// console.log(typeof age);
// console.log(typeof estEtudiant);
// console.log(typeof note1);
// console.log(typeof note2);

// Exercice 2 : Conditions simples (débutant)

// let age = prompt("Entrez votre âge :")
// if(age>=18){
//     console.log("Majeur");
// }
// else{
//     console.log("Mineur");
// }

// Exercice 3 : Calcul simple (débutant)

// let maths = prompt("Entrez votre note de maths :")
// let pc = prompt("Entrez votre note de physique:")
// let arabe = prompt("Entrez votre note d'arabe:")

// let moyenne = (maths+pc+arabe)/3
// if(moyenne>=10){
//     console.log("admis");
// }else{
//     console.log("ajourné");
// }

// Partie Pratique  — Niveau Moyen
// Exercice 4 : Boucles (moyen)

// for(let i=1; i<=50; i++){
//     console.log(i);    
//     if(i%2==0){
//         console.log("nombre paire:", i);
//     }
// } 

// Exercice 5 : Fonctions (moyen)

// function sum(a,b){
//     return a+b;
// }
// console.log("Résultat de sum(5, 3) :", sum(5, 3));

// const sumArrow = (a,b) => a+b;
// console.log("Résultat de sumArrow(5, 3) :", sumArrow(5, 3));

// Exercice 6 : Fonction avec boucle (moyen)



// Partie Pratique — Niveau Avancé
// Exercice 7 : Manipulation avancée des tableaux

// let personne = [
//     {id: 1, nom: "ghita", age: 22},
//     {id: 2, nom: "fatna", age: 17},
//     {id: 3, nom: "salma", age: 18},
//     {id: 4, nom: "mohamed", age: 19}
// ]

// let filtre = personne.filter(n=> n.age>18);
// console.log(filtre);

// let afficheNom = personne.map(n=>n.nom);
// console.log(afficheNom);

// let moyAge = personne.reduce((acc,n) => (acc + n.age),0)/personne.length;
// console.log(moyAge);

// Exercice 8 : Objet + destructuring

// let user = {
//     nom: "ghita",
//     email: "ghita@gmail.com",
//     age: 22
// }

// const { nom, email, age } = user;
// console.log(`Username : ${nom}, Email : ${email}, Âge : ${age} ans.`);
