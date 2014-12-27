/**
 * Fonctions utlisées pour les formulaires
 * @author Christian Bonhomme
 * @version 1.0
 * @package Calcul11
 */
/**
 * Vérification du formulaire 
 * Vérifie que les attributs de type NOT NULL soient renseignés
 * @param element frm élément de type formulaire
 * 
 * return boolean
 */
function verifForm(frm)
{
  var tabLabel = frm.getElementsByTagName('label'); // contient le tableau des éléments de tag label
  var nbLabel = tabLabel.length; // nombre d'éléments de tag label

  for (var i = 0, errors = 0, message = ''; i < nbLabel; ++i)
  {
    // Récupération de l'élément i du tableau des éléments de tag label
    var elemLabel =  tabLabel[i];

    // Recuperation dans l'élément i du contenu de l'attribut for 
    // correspondant au id de l'élément associe au label (input, select, ...)
    var atFor = elemLabel.getAttribute('for');

    if (atFor)
    {
      // Elément associe au label ayant pour id la valeur de contenu dans for
      var elemById = document.getElementById(atFor);

      // Récupération de la valeur de la classe associée à l'id récupéré
      var atClass = elemById.getAttribute('class');

      // Si la class est mandatory et l'élément input de tag label est null alors messsage
      var pattern = /(mandatory)/;
      if (pattern.test(atClass) && !elemById.value)
      {
        message += " - " + elemLabel.innerHTML + "\n";
        ++errors;
      }
    }
  }

  // Si error est true alors alerte
  if (errors)
  {
    var deb_mes = (errors > 1) ? 'Vous devez renseigner les champs suivants :' : 'Vous devez renseigner le champ suivant :';

    message = deb_mes + '\n' + message;

    window.alert(message);

    return false;
  }

  return true;

} // verifForm(frm)

/**
 * Convertion d'un événement clavier en chaîne de caractères
 * @param event événement du clavier
 * 
 * @return string le caractère frappé
 */
function key2Char(event)
{
  for (prop in event)
  {
    if ('which' == prop)
    {
      return String.fromCharCode(event.which);
    }
  }

  return String.fromCharCode(event.keyCode);

} // key2Char(event)

/**
 * Vérifie que les entrées clavier sont de type entier positif
 * @param event événement du clavier
 * @param element élément de type input
 *
 * @return string le texte valide
 */
function isInteger(event, elem)
{
  var valid = /[0-9]/;
  var speciaux = /[\x00\x08\x0D]/;

  var car = key2Char(event);
  
  if ((valid.test(car) || speciaux.test(car)))
  {	
	return true;
  }
  
  stopEvent(event);

  return false;

} // isInteger(event, elem)
