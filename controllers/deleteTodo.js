const db=require('../config/database')

exports.deleteTodo=(req,res)=>{
    const id=req.params.id;
    sql=`DELETE FROM todo1 WHERE id='${id}'`;
    db.query(sql,(err,result)=>{
        if(err){
            res.status(501).json(err);
        }
        else{
            res.status(200).json(result);
        }
    })
}