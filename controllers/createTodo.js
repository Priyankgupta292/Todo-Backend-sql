const db=require('../config/database');



exports.createTodo=async (req,res)=>{
    const {title,description}=req.body;
    sql='INSERT INTO todo1 (item,description) VALUES (?,?)';
    const values=[title,description];
    db.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).json({ "error": err });
        }
        else {
            res.status(200).json({ 'msg': 'data inserted', 'result': result });
        }
    })
}