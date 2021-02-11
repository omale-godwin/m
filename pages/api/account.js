import dbConnect from '../../util/database';
import accounting from '../../model/account';


const Account = async(req, res) => {
    const method = req.method;
    
    try {
        await dbConnect();

    } catch (error) {
        console.log(error)
    }
    if(method == 'POST'){
        try {
            const code = await accounting.create({});
            res.status(201).json({ data: code });
          } catch (error) {
              console.log(error)
            res.status(400).json({ error: error });
          }
        }
       
    
        if(method === 'GET'){
        
            try {
                
                const results = await accounting.find({}).limit(3);
                if(results.length > 0) {
                    
                }
                
                res.status(200).json({data: results, get: "you are performing aa get request"})
              } catch (err) {
                throw err;
              }
          
            

        }
   

}
export default Account;