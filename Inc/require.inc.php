<?php
/**
 * Boîtes à outils
 * @author Christian Bonhomme
 * @version 1.0
 * @package Calcul5
 */

/**
 * Chargement automatique des class
 * @param string class appelée
 *
 * @return none;
 */
function __autoload($class)
{
  switch ($class[0])
  {
    case 'V' : require_once('../View/'.$class.'.view.php');
               break;
    case 'C' : require_once('../Class/'.$class.'.class.php');
               break;
  }

  return;

} // __autoload($class)
?>