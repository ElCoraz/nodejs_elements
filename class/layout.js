// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object       = require(appRoot + '/class/object');
// *****************************************************************************************
var form         = require(appRoot + '/class/form');
var image        = require(appRoot + '/class/image');
var input        = require(appRoot + '/class/input');
var table        = require(appRoot + '/class/table');
var button       = require(appRoot + '/class/button');
var listbox      = require(appRoot + '/class/listbox');
var combobox     = require(appRoot + '/class/combobox');
var checkbox     = require(appRoot + '/class/checkbox');
var radiobox     = require(appRoot + '/class/radiobox');
// *****************************************************************************************
module.exports = class layout extends object
{
    // *************************************************************************************
    constructor (id, values) 
    {
        super(id);

        this.id = id;

        if(values)
        {
            this.values = values;
        }
        else
        {
            this.values = [];
        }
    }
    // *************************************************************************************
    body()
    {
        var body = '';

        for (var i = 0; i < this.values.length; i++)
        {
            body += this.values[i].render();
        }

        return '<div ' + this.class + ' ' + this.style + '>' + body + '</div>';
    }
    // *************************************************************************************
    toJSON()
    {
        return JSON.stringify({});
    }
    // *************************************************************************************
    fromJSON(json)
    {
        return null;
    }
    // *************************************************************************************
}
// *****************************************************************************************