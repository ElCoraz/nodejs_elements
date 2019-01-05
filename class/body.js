// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
// *****************************************************************************************
var object       = require(appRoot + '/class/object');
// *****************************************************************************************
var form         = require(appRoot + '/class/form');
var input        = require(appRoot + '/class/input');
var table        = require(appRoot + '/class/table');
var image        = require(appRoot + '/class/image');
var layout       = require(appRoot + '/class/layout');
var button       = require(appRoot + '/class/button');
var listbox      = require(appRoot + '/class/listbox');
var combobox     = require(appRoot + '/class/combobox');
var checkbox     = require(appRoot + '/class/checkbox');
var radiobox     = require(appRoot + '/class/radiobox');
// *****************************************************************************************
module.exports = class button extends object
{
    // *************************************************************************************
    constructor (id) 
    {
        super(id);
    }
    // *************************************************************************************
    body()
    {
        return '<div ' + ((this.style.length > 0) ? this.style : '') + ' ' + this.class + ' id="' + this.id + '">' + this.body + '</div>';
    }
    // *************************************************************************************
}
// *****************************************************************************************