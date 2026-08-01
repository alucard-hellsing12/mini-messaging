import messages from "../db.js"
function indexController(req,res){
    res.render("index", {title : "mini messagingBoard", messages : messages})
}

export {indexController}