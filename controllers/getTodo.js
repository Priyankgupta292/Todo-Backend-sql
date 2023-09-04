const db=require('../config/database');

exports.getTodo=(req,res)=>{
    sql="SELECT * FROM todo1";
    db.query(sql,(err,result)=>{
        if(err){
            res.status(501).json({'error':err});
        }
        else{
            res.status(200).json({result});
        }
    })
}

exports.getTodoByid=(req,res)=>{
    const id=req.params.id;
    sql=`SELECT * FROM todo1 WHERE id='${id}'`;
    db.query(sql,(err,result)=>{
        if(err){
            res.status(501).json({err});
        }
        else{
            res.status(200).json({result});
        }
    })
}