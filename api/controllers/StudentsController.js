const sailsHookGrunt = require("sails-hook-grunt");


/**
 * StudentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  
    create:async function (req,res)
    {
                let student = await Students.create({name: req.param('name'), course: req.param('course'), email: req.param('email')}).fetch();
                console.log(student)
                res.ok("Created sucessfully")
            },

    find:async function(req,res)
    {
                let students = await Students.find();
              
                console.log(students);
                res.ok("Record found")
             
    },
    findone:async function(req,res)
    {
                let student = await Students.find({id:req.param('id')});
              
                console.log(student);
                res.ok("Record found")
             
    },

    delete:async function (req,res)
    {
        let del = await Students.destroy({id:req.param('id')});
        console.log(del);
        res.ok("Deleted sucesfully")

    },
    update:async function (req,res)
    {
        let update = await Students.update({ id:req.param('id') })
        .set({
          name:req.param('name'),
          course:req.param('course'),
          email:req.param('email')

        });
        
        console.log(update);
        res.ok("Updated sucesfully")

    },
    
}
