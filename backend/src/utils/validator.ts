import { NextFunction, Request, Response } from "express";
import { ValidationChain, body, validationResult } from "express-validator";

//validator is used to check if the information entered in the form is correct

//validationChain is a number of validations and validationChain[] is a type of data that represents array of validationchains

//When you define validation rules (e.g., body("email").isEmail()), the validator looks at specific properties of req, such as:

//body("field"): Looks for data in req.body.
//query("field"): Looks for data in req.query.
//params("field"): Looks for data in req.params.

export const validate = (validations:ValidationChain[]) =>{
    return async(req:Request,res:Response,next:NextFunction) =>{
        for (let validation of validations){
            const result = await validation.run(req)
            //if error (individual check)
            if(!result.isEmpty()){
                break;
            }           
        }
    const errors = validationResult(req) //error handle
    if (errors.isEmpty()){
        return next()
    }    
    return res.status(422).json({errors:errors.array()})
    }
}

export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is"),
    body("password").trim().isLength({ min: 5 }).withMessage("The password should be more than six characters")
]

export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator
]

export const chatCompletionValidator = [
    body("message").notEmpty().withMessage("Message is required"),
]