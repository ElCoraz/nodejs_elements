// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object      = require(appRoot + '/class/object');
// *****************************************************************************************
module.exports = class checkbox extends object 
{
    // *************************************************************************************
    constructor (id, label) 
    {
        super(id);

        this.id     = id;
        this.label  = label;
  
        this.class = 'class="tcustom-control custom-checkbox"';
    }
    // *************************************************************************************
    body()
    {
        return '<div class="' + this.class + '">\
        <input type="checkbox" class="custom-control-input" id="' + this.id + '"/>\
        <label class="custom-control-label" for="defaultUnchecked">' + this.label + '</label></div>';
    }
    // *************************************************************************************
}
// *****************************************************************************************