/**
 * Initialisation des écouteurs
 * @author Christian Bonhomme
 * @version 1.0
 * @package Calcul11
 */

/**
 * Gestion des événements sur le formulaire de calcul id="calcul"
 */
var form_calcul = document.getElementById('calcul');
if (form_calcul)
{
  /**
   * Gestion de l'événement submit sur le formulaire de calcul id="calcul"
   */
  if (form_calcul.addEventListener)
  {
    form_calcul.addEventListener('submit', resultatCalcul, false);
  } 
  else
  {
    form_calcul.attachEvent('onsubmit', resultatCalcul);
  }

  /**
   * Gestion de l'événement change sur la boîte de sélection id="operation"
   */
  var change_operation = document.getElementById('operation');
  if (change_operation.addEventListener)
  {
    change_operation.addEventListener('change', resultatCalcul, false);
  } 
  else
  {
    change_operation.attachEvent('onchange', resultatCalcul);
  }
	  
  /**
   * Gestion de l'événement keypress sur l'input id="num1"
   */
  var keypress_num1 = document.getElementById('num1');
  if (keypress_num1.addEventListener)
  {
    keypress_num1.addEventListener('keypress', isInteger, false);
  } 
  else
  {
    keypress_num1.attachEvent('onkeypress', isInteger);
  }

  /**
   * Gestion de l'événement keypress sur l'input id="num2"
   */
  var keypress_num2 = document.getElementById('num2');
  if (keypress_num2.addEventListener)
  {
    keypress_num2.addEventListener('keypress', isInteger, false);
  } 
  else
  {
    keypress_num2.attachEvent('onkeypress', isInteger);
  }
}

/**
 * Fonction d'arrêt de la propagation d'un événement dans la phase de bouillonnement
 * @param event événement
 */
function stopEvent(event)
{
  if (event.stopPropagation)
  {
    event.stopPropagation();
  }
  else
  {
    event.cancelBubble = true;
  }
  
  if (event.preventDefault)
  {
	event.preventDefault();
  }
  else
  {
    event.returnValue = false;
  }

} // stopEvent(event)
