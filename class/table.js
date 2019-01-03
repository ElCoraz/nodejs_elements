// *****************************************************************************************
var fs           = require('fs');
var appRoot      = require('app-root-path');
var express		 = require('express');
var bodyParser	 = require('body-parser');
// *****************************************************************************************
var object      = require(appRoot + '/class/object');
// *****************************************************************************************
module.exports = class table extends object 
{
    // *************************************************************************************
    constructor (id, columns) 
    {
        super(id);

        this.id      = id;
        this.columns = columns;

        this.class = 'class="table table-bordered"';
        this.style = 'style="cursor: pointer;"';

        this.lines = [];
    }
    // *************************************************************************************
    add(line)
    {
        this.lines.push(line);
    }
    // *************************************************************************************
    remove(index)
    {
        this.lines.splice(index, 1);
    }
    // *************************************************************************************
    head()
    {
        var body = '<tr>';
        
        for(var i = 0; i < this.columns.length; i++)
        {
            body += '<th scope="col" style="text-align: center;">' + this.columns[i] + '</th>';
        }

        body += '</tr>';

        return body;
    }
    // *************************************************************************************
    body()
    {
        var lines = '';

        for(var i = 0; i < this.lines.length; i++)
        {
            lines += '<tr>';

            for(var j = 0; j < this.lines[i].length; j++)
            {
                lines += '<th scope="col" style="text-align: center;">' + this.lines[i][j] + '</th>';
            }

            lines += '</tr>';
        }

        var body = '<table ' + this.class + ' ' + this.style + '>\
        <thead>' + this.head() + '</thead>\
        <tbody>' + lines + '</tbody>\
        </table>';

        return body;
    }
    // *************************************************************************************
}
// *****************************************************************************************