
import express from "express"
import { Book } from "../models/bookModel.js";
const router = express.Router();

//Route for Save the new BOOK  
router.post('/',async(req,res) =>{
    
    try{ 
        if(!req.body.title||
            !req.body.author || 
            !req.body.publishYear  
           ){ 
            return res.status(400).send({
                message:"Enter all required Fields: title, author , publishYear ",
    
            })  
    } 
    const newaBook = {
        title:req.body.title,
        author:req.body.author,
        publishYear:req.body.publishYear,
    };
    const book = await Book.create(newaBook);
    return res.status(201).send(book);

} 
    catch(error){
       console.log(error.message);
       response.status(500).send({message:error.message});
    }
})
//Route for get the all  BOOK  
router.get('/',async(req,res)=>{
    try{
        const Books = await Book.find({});

        return res.status(200).json(
            {
                count:Books.length,
                data:Books
            }
        );

    }

    catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }

})
// Route for Get One Book from Databse by id
router.get('/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id);

        return res.status(200).json(book);

    }

    catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }

})
//Route for Update the book 
router.put('/:id',async(req,res) => {
    try{
       if(!req.body.title|| 

        !req.body.author ||

        !req.body.publishYear
       ){ 
        return res.status(400).send({

            message:"Enter all required Fields: title, author , publishYear ",

        })
       }
       const {id} = req.params;

       const result = await Book.findByIdAndUpdate(id,req.body);

       if(!result){
        return res.status(404).json({

            message:"Book not found"

        }); 
       }
        return res.status(200).send({ 

            message:"Book updated Successfully"
        })

    }
    catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message})

    } 
}) 
//Route for Delete the book 
router.delete('/:id',async(req,res) =>{
    try{
     const {id} = req.params;
       const result = await Book.findByIdAndDelete(id);
       if(!result){
          return res.status(404).json({message:"Book not founs",
            success:false,
          })
       }
      

      return res.status(200).send({message:"Book Deleted Successfully"})
    }
    catch(err){
       console.log(err.message);
       res.status(500).send({message:err.message});
    }
})

export default router;