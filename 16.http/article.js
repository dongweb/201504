exports.add = function(req,res,args){
    res.end('add article '+args[0]+' '+args[1]+' successfully');
},
exports.delete = function(req,res,args){
    res.end('delete article '+args[0]+' successfully');
}