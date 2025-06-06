'use strict';
var chalk = require('chalk');
var yeoman = require('yeoman-generator');
var util = require('util');

var Generator = module.exports = function Generator() {
  yeoman.Base.apply(this, arguments);
};


util.inherits(Generator, yeoman.Base);

Generator.prototype.deprecated = function deprecated() {
  this.log(chalk.yellow('This sub-generator is deprecated. \n'));
};