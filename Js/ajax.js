/**
 * Fonctions javascript utilisant les appels aux serveur http
 * @author Christian Bonhomme
 * @version 1.0
 * @package Calcul11
 */
/**
 *  Connexion au serveur http
 *
 *  @return string Connexion
 */
function getXhr()
{
  var xhr;
  if (window.XMLHttpRequest)         // Firefox et autres
  {
    xhr = new XMLHttpRequest();
  }
  else if (window.ActiveXObject)     // Internet Explorer
  {
    try
    {
      xhr = new ActiveXObject("Msxml2.XMLHTTP"); // IE version > 5
    }
    catch (e)
    {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
  else // XMLHttpRequest non supporté par le navigateur
  {
    alert("Votre navigateur ne supporte pas les objets XMLHttpRequest !");
    xhr = false;
  }

  return xhr;

} // getXhr ()

/**
 * Modification du contenu d'un élément en mode asynchrone
 * @param string id identifiant de l'élément à modifier
 * @param string php programme de modification
 * @param string param paramètres de modification
 * @param string callback : programme d'appel après la modification
 *  
 * @return none
 */
function changeContent(id, php, param, callback)
{
  // Récupère l'élément cible dont l'identifiant vaut id
  var c = document.getElementById(id);

  //Récupère la connexion au serveur http
  var xhr = getXhr();

  // Ouvre la connexion en mode asynchrone avec le serveur http avec comme url php
  xhr.open('POST', php, true);

  // Envoie des entêtes pour l'encodage
  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

 //Envoie les paramètres param
  xhr.send(param); 

  // Exécution en mode asynchrone de la fonction dès que l'on obtient une réponse du serveur http
  xhr.onreadystatechange = function() 
  {
    // Si on a tout reçu (4) et que le serveur est ok (200)
    // Modifie l'élément ayant pour identificateur id suivant le programme php
    if (xhr.readyState == 4 && xhr.status == 200)
    {
      c.innerHTML = xhr.responseText;

      //Test s'il y a une callback 
      if (callback != null)
      {
    	// Exécution du script contenu dans la callback
        window.eval(callback);
      }

      // Si on a du javascript dans le nouveau contenu on identifie les scripts et on force la valuation avec eval()
      var allscript = c.getElementsByTagName('script');
      for (var i = 0; i < allscript.length; ++i)
      {
    	// Exécution du script
        window.eval(allscript[i].text);
      }
    }
  };
  
  return;

} // changeContent(id, php, param, callback)

/**
 * Récupération d'une action (d'un formulaire) en mode synchrone au format json
 * @param string php programme de modification
 * @param string param paramètres de modification
 *  
 * @return string json
 */
function actionForm(php, param)
{
  // Récupère la connexion au serveur http
  var xhr = getXhr ();

  //Ouvre la connexion en mode synchrone avec le serveur http avec comme url php
  xhr.open('POST', php, false);

  // Envoie des entêtes pour l'encodage
  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

  //Envoie les paramètres param
  xhr.send(param);

  // Teste s'il ya une réponse du serveur
  if (xhr.responseText)
  {
	// Retour avec l'évalution de la réponse  au format json devient un objet json
    return window.eval('(' +  xhr.responseText + ')');
  }
  else
  {
    return;
  }

} // actionForm(php, param)
