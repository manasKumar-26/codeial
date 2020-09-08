const nodemailer=require('../config/nodemailer');
exports.newComment=(comment,email)=>{
    let htmlString=nodemailer.renderTemplate({comment:comment},'/commentMailer/commentMailer.ejs')
    nodemailer.transporter.sendMail({
        to:email,
        subject:'Commented',
        html:htmlString,
    },(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
        return;
    })
}