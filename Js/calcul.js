/**
 * Ecrit tous les javascripts
 * @author Christian Bonhomme
 * @version 1.0
 * @package Calcul11
 */

var src = new Array();
var i=0;

src[i++] = '../Js/form.js';
src[i++] = '../Js/resultat.js';
src[i++] = '../Js/ajax.js';
src[i++] = '../Js/init.js';

for (var j = 0; j < i; ++j)
{
  document.write('<script type="text/javascript" src="'+src[j]+'"></script>');
}
