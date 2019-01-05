// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object      = require(appRoot + '/class/object');
// *****************************************************************************************
var form         = require(appRoot + '/class/form');
var image        = require(appRoot + '/class/image');
var input        = require(appRoot + '/class/input');
var table        = require(appRoot + '/class/table');
var button       = require(appRoot + '/class/button');
var layout       = require(appRoot + '/class/layout');
var listbox      = require(appRoot + '/class/listbox');
var combobox     = require(appRoot + '/class/combobox');
var checkbox     = require(appRoot + '/class/checkbox');
var radiobox     = require(appRoot + '/class/radiobox');
// *****************************************************************************************
module.exports = class body extends object
{
    // *************************************************************************************
    constructor (id, text) 
    {
        super(id);

        this.class  = 'class="container"';
    }
    // *************************************************************************************
    body()
    {
        return '<div ' + ((this.style.length > 0) ? this.style : '') + ' ' + this.class + ' id="' + this.id + '">' + this.value + '</div>';
    }
    // *************************************************************************************
}
// *****************************************************************************************