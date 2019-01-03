// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object      = require(appRoot + '/class/object');
// *****************************************************************************************
module.exports = class image extends object 
{
    // *************************************************************************************
    constructor (id, src) 
    {
        super(id);

        this.id     = id;
        this.src    = src;

        this.class  = 'class="img-thumbnail"';
    }
    // *************************************************************************************
    body()
    {
        return '<img src="' + this.src + '" ' + this.class + ' alt="image' + this.id + '">';
    }
    // *************************************************************************************
}
// *****************************************************************************************