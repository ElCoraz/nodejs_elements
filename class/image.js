// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object       = require(appRoot + '/class/object');
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
    toJSON()
    {
        return JSON.stringify({ 
            "id" : this.id,
            "src" : this.src,
            "name" : this.constructor.name,
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
        this.src     = values.src;
        this.class   = values.class;
        this.style   = values.style;
        this.script  = values.script;

        return this;
     }
    // *************************************************************************************
}
// *****************************************************************************************