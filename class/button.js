// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object      = require(appRoot + '/class/object');
// *****************************************************************************************
module.exports = class button extends object
{
    // *************************************************************************************
    constructor (id, text) 
    {
        super(id);

        this.text   = ((text) ? text : '');
        this.class  = 'class="btn btn-primary btn-lg"';
    }
    // *************************************************************************************
    body()
    {
        return '<button type="button" ' + ((this.style.length > 0) ? this.style : '') + ' ' + this.class + ' id="' + this.id + '">' + this.text + '</button>';
    }
    // *************************************************************************************
}
// *****************************************************************************************