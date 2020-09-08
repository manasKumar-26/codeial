const nodemailer=require('../config/nodemailer');
exports.newComment=(comment,email)=>{
    let htmlString=nodemailer.renderTemplate(comment,'/commentMailers');
    nodemailer.transporter.sendMail({
        to:email,
        subject:'Commented',
        html:`${comment}`,
    },(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
        return;
    })
}