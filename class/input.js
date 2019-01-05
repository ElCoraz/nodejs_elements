// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object       = require(appRoot + '/class/object');
// *****************************************************************************************
module.exports = class input extends object 
{
    // *************************************************************************************
    constructor (id, label, value) 
    {
        super(id);

        this.label = label;
        this.value = value;
        
        this.class = 'class="form-control"';
    }
    // *************************************************************************************
    body()
    {
        return '<label for="' + this.id + '">' + this.label + '</label>\
        <input type="text" ' + this.class + ' id="' + this.id + '" placeholder="' + this.label + '" value="' + this.value + '" />';   
    }
    // *************************************************************************************
}
// *****************************************************************************************