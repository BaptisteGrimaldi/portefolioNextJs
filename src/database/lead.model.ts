import { Schema, models, model } from 'mongoose';

const LeadSchema = new Schema({
    gmail : {type :String, required : true},
    date : {type : String, default : () => {
        const date = new Date();
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Les mois sont indexés à partir de 0 en JavaScript
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }}
},{ collection: 'MailLead' })

const Lead = models.MailLead || model('MailLead', LeadSchema);

export default Lead;