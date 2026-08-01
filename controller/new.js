import messages from "../db.js";

function getNew(req,res){
    res.render("form");
}
function postNew(req,res){
    const user = req.body.user;
    const text = req.body.text;
    const added = new Date();

    messages.push({user,text,added});
    res.redirect("/");
}
export {getNew,postNew}