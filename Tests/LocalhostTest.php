<?php
/**
 * Fichier de tests selenium
 * @author Christian Bonhomme
 * @version 1.0
 * @package Calcul11
 */

// Récupération de SeleniumTestCase.php
require_once('PHPUnit/Extensions/SeleniumTestCase.php');
require_once('PHPUnit/Extensions/SeleniumTestSuite.php');

/**
 * class Selenium Test Case pour tester l'application Web Calculatrice
 */
class SeleniumTest extends PHPUnit_Extensions_SeleniumTestCase
{
  /**
   * Initialisation de l'environnement de test
   */
  protected function setUp()
  {
    $this->setBrowser('*firefox');
    $this->setBrowserUrl('http://localhost');
    $this->setSleep(1);

  } // setUp()

  public function testLocalhost()
  {
    $this->open("/");
    $this->verifyTextPresent("Index of");
    
  } // testLocalhost
  
} // SeleniumTest