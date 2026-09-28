// express imports 
import express, { Request, Response, Router } from "express";



// create router to map url requests to correct methods


//mock data for crud

interface Exercise{
    id: number,
    name: string
};

let exercises :{id: number;name:string}[] =[
    {id: 1, name: 'squats'},
    {id: 2, name: 'rope jumping'},
    {id: 3, name: 'jogging'},
    {id: 4, name: 'volleyball'}
]

const router: Router = express.Router();



router.get('/' ,  (req: Request, res: Response): Response<any,Record<string,any>> => {
    return res.status(200).json({msg: 'get request recieved'})
});

router.post('/', (req: Request, res: Response):void => {
    if(!req.body){
        res.status(400).json({err: 'invalid request body' });
    }
    exercises.push(req.body);


    
    res.status(201).json(); //201 means a resource was created

});


router.put('/:id' , (req: Request , res: Response) => {
    const index: number = exercises.findIndex(e => e.id.toString() == req.params.id);

    if(index == -1){
        return res.status(404).json({ err: 'Exercise Not found'})
    }

    exercises[index].name = req.body.name;
    return res.status(204).json({msg: 'exercise updated' });



})


router.delete('/:id', (req: Request, res: Response) => {
    const index: number = exercises.findIndex(e => e.id.toString() == req.params.id);


    // start the if method
    if (index === -1) {
        //throw a 404
        //show message not found
        return res.status(404).json({ err: 'Exercise not found' });
    }


    //slice starts here

    exercises.splice(index, 1);

    //return a 200 if its deleted scuesffull

    return res.status(200).json({ msg: 'Exercise deleted successfully' });

});



module.exports=router;
