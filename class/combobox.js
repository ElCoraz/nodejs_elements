// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object      = require(appRoot + '/class/object');
// *****************************************************************************************
module.exports = class combobox extends object 
{
    // *************************************************************************************
    constructor (id, name, values) 
    {
        super(id);

        this.name = name;

        if(values)
        {
            this.lines = values;
        }
        else
        {
            this.lines = [];
        }
    }
    // *************************************************************************************
    add(line)
    {
        this.lines.push(line);
    }
    // *************************************************************************************
    remove(index)
    {
        this.lines.splice(index, 1);
    }
    // *************************************************************************************
    setOnClickListener(id, value)
    {
        return '                                                            \
        <script type="text/javascript">                                     \
            $(document).ready ( function () {                               \
                $(document).on(\'click\', \'#' + id + '\', function (){     \
                    ' + '$(\'#' + this.id + '\').html(\'' + value + '\');   \
                });                                                         \
            });                                                             \
        </script>';
    }
    // *************************************************************************************
    body()
    {
        var body = '';

        for (var i = 0; i < this.lines.length; i++)
        {
            body += '<li id="combobox' + this.id + '-line-' + i + '" role="presentation">' + this.lines[i] + '</li>' + this.setOnClickListener('combobox' + this.id + '-line-' + i, this.lines[i]);
        }

        return '<div class="dropdown">\
            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">\
                <span id="' + this.id + '">' + this.name + '</span>\
                <span class="caret"></span>\
            </button>\
            <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">\
            ' + body + '\
            </ul>\
        </div>'
    }
    // *************************************************************************************
}
// *****************************************************************************************