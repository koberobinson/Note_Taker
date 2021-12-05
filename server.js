var express = require('express')
var path = require('path')
var fs = require('fs')
var util = require('util')

var app = express()
var PORT = process.env.PORT || 3000