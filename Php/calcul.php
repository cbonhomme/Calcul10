<?php
/**
 * Travaux Pratiques : Calcul9
 * Fichier du contrôleur
 * @author Christian Bonhomme
 * @version 1.0
 * @package Calcul10
 */

// Encodage de l'application en UTF-8
header('Content-Type:text/html; charset=UTF-8');

// Récupération de l'autoload
require ('../Inc/require.inc.php');

// Récupération de la variable de contrôle
$EX = isset($_REQUEST['EX']) ? $_REQUEST['EX'] : 'form';

// Contrôleur
switch ($EX)
{
  case 'form'   : form();   break;
  case 'calcul' : calcul(); exit;
}

// Récupération de la mise en page
require('../View/layout.view.php');

/********* Fonctions de contrôle *********/

/**
 * Affiche le formulaire pour le calcul
 *
 * @return none
 */
function form()
{
  global $page;

  $page['class'] = 'VCalcul';
  $page['method'] = 'ShowForm';
  $page['arg'] = '';

} // form()

/**
 * Affiche le résultat du calcul
 *
 * @return none
 */
function calcul()
{
  $calcul = $_POST;
  $ccalcul = new CCalcul($calcul);
  $calcul['RES'] = $ccalcul->res();

  // Renvoie les données du calculau format JSON
  echo json_encode ($calcul);

} // calcul()
?>