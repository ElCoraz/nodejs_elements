// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object      = require(appRoot + '/class/object');
// *****************************************************************************************
module.exports = class listbox extends object 
{
    // *************************************************************************************
    constructor (id, values) 
    {
        super(id);

        this.id = id;

        this.class = 'class="list-group"';

        if (values)
        {
            this.lines = values;
        }
        else
        {
            this.lines = [];
        }
    }
    // *************************************************************************************
    add(value)
    {
        this.lines.push(value);
    }
    // *************************************************************************************
    remove(index)
    {
        this.lines.splice(index, 1);
    }
    // *************************************************************************************
    body()
    {
        var body = '<ul ' + this.class + '>';

        for (var i = 0; i < this.lines.length; i++)
        {
            body += '<li class="list-group-item">' + this.lines[i] + '</li>';
        }

        body += '</ul>';

        return body;
    }
    // *************************************************************************************
}
// *****************************************************************************************