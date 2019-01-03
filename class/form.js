// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object      = require(appRoot + '/class/object');
var input       = require(appRoot + '/class/input');
var button      = require(appRoot + '/class/button');
var table       = require(appRoot + '/class/table');
var listbox     = require(appRoot + '/class/listbox');
var combobox    = require(appRoot + '/class/combobox');
var checkbox    = require(appRoot + '/class/checkbox');
var radiobox    = require(appRoot + '/class/radiobox');
var image       = require(appRoot + '/class/image');
var layout      = require(appRoot + '/class/layout');
// *****************************************************************************************
module.exports = class form extends object
{
    // *************************************************************************************
    constructor (id, action, values) 
    {
        super(id);

        this.id     = id;
        this.action = action;
        
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
            body += '<div class="form-group">' + this.values[i].render() + '</div>';
        }

       return '<form action="' + this.action + '">\
            ' + body + '\
            <button type="submit" class="btn btn-primary">OK</button>\
        </form>';
    }
    // *************************************************************************************
}
// *****************************************************************************************