// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object      = require(appRoot + '/class/object');
// *****************************************************************************************
module.exports = class radiobox extends object 
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
        var body ='';

        for(var i = 0; i < this.values.length; i++)
        {
            body+= '<div class="radio">\
                <label><input type="radio" name="optradio" id="' + this.id + '_' + i + '">' + this.values[i] + '</label>\
            </div>';
        }

        return body;
    }
    // *************************************************************************************
}
// *****************************************************************************************