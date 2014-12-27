<?php
/**
  * Fichier de class de types vues pour le calcul
 * @author Christian Bonhomme
 * @version 1.0
 * @package Calcul11
 */

/**
 * Class de types vues pour le calcul
 */
class VCalcul
{
  /**
   * Constructeur
   * @access public
   *
   * @return none
   */
  public function __construct() {return;}

  /**
   * Destructeur
   * @access public
   *
   * @return none
   */
  public function __destruct() {return;}

  /**
   * Affiche le formulaire du calcul
   * @access public
   *
   * @return none
   */
  public function ShowForm()
  {
    echo <<<'NOW'
<br />
    <br />
            <br />
            <br />
            <br />
  <form id="calcul" class="form" action="#" method="post">
 <fieldset>
  <legend>Calculatrice</legend>
  <p>
   <label for="num1">Opérande gauche</label>
   <input id="num1" class="mandatory" name="NUM1" size="5" value="" />
   <select id="operation" name="OPERATION" size="1">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
   </select>
   <label for="num2">Opérande droite</label>
   <input id="num2" class="mandatory" name="NUM2" size="5" value="" />
   <input type="submit" value="Ok" />
  </p>
 </fieldset>
</form>
<div id="resultat">
 <p><span id="res_num1"></span> <span id="res_operation"></span> <span id="res_num2"></span> <span id="res"></span></p>
</div><!-- id="resultat" -->

NOW;

    return;

  } // ShowForm()

} // VCalcul
?>