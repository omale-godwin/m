import dbConnect from '../../util/database';
import computer from '../../model/compute';


const Computer = async(req, res) => {
    const method = req.method;
    try {
        await dbConnect();
    } catch (error) {
        console.log(error);
    }
    if(method === 'POST'){
        const {title, content, id } =req.body;
        const mass = await computer.create({title: title, content: content, id: id})
        res.status(200).json({msg: "succesffully created data to masscomms", data: mass})
    }
    if(method ==='GET'){
       const massget = await computer.find({}).limit(5);
       res.status(200).json({msg: 'get he data successfully', data: massget})
    }
    
}

export default Computer;