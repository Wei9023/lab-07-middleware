'use strict';

/**
 * Current date and time for all the routes
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const requestTime = (req, res, next) => {
  req.body.date = new Date();
  next();
};

/**
 *  takes a number as a parameter, squares it, and and sets that value on the request object in a property called number
 * @param {*} number 
 */
const squaredNumber = (number) => {
  let newNumber = number * number;
  return (req, res, next) =>{
    req.body = {num: newNumber};
    next();
  };
};

/**
 * handle all the body objects changes
 * @param {*} req 
 * @param {*} res 
 */
const handleAll = (req, res) => {
  res.status(200).send(req.body);
};
/**
 * Random number for routes /b
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const randomNumber = (req,res,next) => {
  req.body = {randomNum : Math.random()};
  next();
};
  
/**
   * raises an error using next
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
const raiseNextError = (req,res,next) => {
  console.log('raiseNextError'); 
  next('not allowed');
};

module.exports = {requestTime, squaredNumber, randomNumber, raiseNextError, handleAll};