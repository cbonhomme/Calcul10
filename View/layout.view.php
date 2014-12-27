<?php
/**
 * Fichier de mise en page
 * @author Christian Bonhomme
 * @version 1.0
 * @package Calcul11
 */

global $page;
$vpage = new $page['class'];
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="fr">
<head>
 <meta charset="utf-8" />
 <title>Calculatrice 11</title>
 <link rel="stylesheet" type="text/css" href="../Css/calcul.css" />
 </head>

<body>

<div id="content">
 <?php $vpage->$page['method']($page['arg']) ?>
</div><!-- id="content" -->

<script src="../Js/calcul.js"></script>

</body>
</html>
