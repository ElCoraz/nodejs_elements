// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object       = require(appRoot + '/class/object');
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
    toJSON()
    {
        return JSON.stringify({ 
            "id" : this.id,
            "name" : this.constructor.name,
            "lines" : this.lines,
            "class" : this.class,
            "style" : this.style,
            "script" : this.script
        });
     }
    // *************************************************************************************
    fromJSON(json)
    {
        var values = JSON.parse(json);

        if(values.name !== this.constructor.name)
        {
            return null;
        }

        this.id      = values.id;
        this.lines   = values.lines;
        this.class   = values.class;
        this.style   = values.style;
        this.script  = values.script;

        return this;
     }
    // *************************************************************************************
}
// *****************************************************************************************