// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
module.exports = class object 
{
    // *************************************************************************************
    constructor (id) 
    {
        this.id     = this.constructor.name + id;

        this.class  = '';
        this.style  = '';
        this.script = '';
    }
    // *************************************************************************************
    getId()
    {
        return this.id;
    }
    // *************************************************************************************
    setClass(value)
    {
        this.class = 'class="' + value + '"';
    }
    // *************************************************************************************
    setStyle(value)
    {
        this.style = 'style="' + value + '"';
    }
    // *************************************************************************************
    setOnClickListener(value)
    {
        this.script ='                                                      \
        <script type="text/javascript">                                     \
            $(document).ready ( function () {                               \
                $(document).on(\'click\', \'#' + this.id + '\', function (){\
                    ' + value + '                                           \
                });                                                         \
            });                                                             \
        </script>';
    }
    // *************************************************************************************
    body()
    {
        return '';
    }
    // *************************************************************************************
    render()
    {
        return ((this.script.length > 0) ? this.script : '') + this.body();
    }
    // *************************************************************************************
}
// *****************************************************************************************