/**
 * Fonctions pour le résultat du calcul
 * @author Christian Bonhomme
 * @version 1.0
 * @package Calcul10
 */

/**
 * Récupère les données du formulaire 
 * et lance la fonction changeContent pour afficher le résultat de calcul
 * @param string php programme de modification
 * @param string param paramètres de modification
 * 
 * @return none
 */
function resultatCalcul(event)
{
  // Vérifie le formulaire
  if (!verifForm (document.getElementById('calcul')))
  {
    // Stoppe l'événement
    stopEvent(event);
				
    return false;
  }
  
  // Modifie l'attribut id de l'élément id="new_res" en id="res"
  if (document.getElementById('new_res'))
  {
    document.getElementById('new_res').setAttribute('id', 'res');
  }
  
  // Récupère la valeur du champ id="num1" 
  var num1 = document.getElementById('num1').value;
  // Récupère la valeur du champ id="num1"
  var num2 = document.getElementById('num2').value;
  // Récupère la valeur du champ id="operation"
  var operation = document.getElementById('operation').value;

  // Instancie le contrôleur qui effectuera le changement du contenu de la cible
  var php = '../Php/calcul.php';
  // Instancie les paramètres du contrôleur
  var param = 'EX=calcul'+'&NUM1='+num1+'&OPERATION='+encodeURIComponent(operation)+'&NUM2='+num2;

  // Appel du programme qui effectuera renverra un objet JSON
  var res = actionForm (php, param);

  // Modifie l'élément id="res_num1" avec le membre NUM1 de l'objet res
  document.getElementById('res_num1').innerHTML = res.NUM1;
  // Modifie l'élément id="res_operation" avec le membre OPERATION de l'objet res
  document.getElementById('res_operation').innerHTML = res.OPERATION;
  // Modifie l'élément id="res_num2" avec le membre NUM2 de l'objet res
  document.getElementById('res_num2').innerHTML = res.NUM2 + ' =';
  // Modifie l'élément id="res" avec le membre RES de l'objet res
  document.getElementById('res').innerHTML = res.RES;
  
  // Modifie l'attribut id de l'élément id="res" en id="new_res"
  document.getElementById('res').setAttribute('id', 'new_res');
  
  // Stoppe l'événement
  stopEvent(event);

  return false;

} // resultatCalcul(event)
