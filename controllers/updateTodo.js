const db=require('../config/database')

exports.updateTodo=(req,res)=>{
    const id=req.params.id;
    const {title,description}=req.body;
    sql=`UPDATE todo1 SET item='${title}',description='${description}' WHERE id='${id}'`;
    db.query(sql,(err,result)=>{
        if(err){
            res.status(501).json({err});
        }
        else{
            res.status(200).json({result});
        }
    })
}