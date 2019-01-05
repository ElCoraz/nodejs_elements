//******************************************************************* */
var express     = require('express');
var appRoot     = require('app-root-path');
//******************************************************************* */
var body        = require(appRoot + '/class/body');
var form        = require(appRoot + '/class/form');
var image       = require(appRoot + '/class/image');
var input       = require(appRoot + '/class/input');
var table       = require(appRoot + '/class/table');
var button      = require(appRoot + '/class/button');
var listbox     = require(appRoot + '/class/listbox');
var combobox    = require(appRoot + '/class/combobox');
var checkbox    = require(appRoot + '/class/checkbox');
var radiobox    = require(appRoot + '/class/radiobox');
//******************************************************************* */
var application = express();
//******************************************************************* */
function head()
{
    return '                                                                                                                                                                                                                \
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">        \
        <!-- Optional theme -->                                                                                                                                                                                                 \
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">  \
        <!-- Latest compiled and minified JavaScript -->                                                                                                                                                                        \
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>                                                                                                                               \
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>';
}
//******************************************************************* */
application.get('/', function (request, response) {
    
    var page_body = (new body(1));

    page_body.add(head());

    var button1 = (new button(1, 'Button 1'));
    button1.setOnClickListener('alert (\' Hello world \');');
        
    var button2 = (new button(2, 'Button 2'));
    button2.setOnClickListener('alert (\' Button 2 clicked \');');

    button1.setStyle('width:69%;');
    button2.setStyle('width:29%;');

    var input2 = (new input(1, 'newLabel', 'newText'));

    input2.setOnClickListener('alert (\' Input 1 clicked \');');

    page_body.add(button1);
    page_body.add(button2);

    page_body.add(input2);

    var table1 = (new table(1, ['nomber', 'name', 'count']));

    table1.add(['1', 'name1', 100]);
    table1.add(['2', 'name2', 200]);

    table1.remove(0);

    page_body.add(table1);

    var listbox1 = (new listbox(1, [1,2,3,4,5,6,7,8,9,0]));

    listbox1.remove(1);
    listbox1.remove(4);

    listbox1.add(11);

    page_body.add(listbox1);

    var combobox1 = (new combobox(1, 'newCombobox', [1,2,3,4,5]));

    combobox1.add(8);
    combobox1.remove(0);

    page_body.add(combobox1);

    var checkbox1 = (new checkbox(1, 'checkbox1'));

    page_body.add(checkbox1);

    var radiobox1 = (new radiobox(1, [1,2,3,4,5,6]));

    page_body.add(radiobox1);

    var image1 = (new image(1, 'https://r.mradx.net/pictures/8A/12BCFA.jpg'));

    page_body.add(image1);

    var form1 = (new form(1, '/', [(new combobox(2, 'newCombobox', [1,2,3,4,0])), (new input(1, 'newLabel1', 'newText1')), (new listbox(1, [1,2,3])) ]));

    page_body.add(form1);

    var tab = table1.toJSON();

    var tr = (new table()).fromJSON(tab);

    page_body.add(tr);
    
    response.send(page_body.render());
});
//******************************************************************* */
application.listen(3000, "127.0.0.1", function () {
    console.log('Application listening on ' + this._connectionKey);
});
//******************************************************************* */