const path = require('path');
const pdfDoc = require('pdfkit');
const fs = require('fs');

class InvoiceController{
    async createFile(req,res){
        try {
            
            const invoiceName = req.body.name + '.pdf';
            const invoicePath = path.join("pdfs",invoiceName);
            const doc = new pdfDoc();
            res.setHeader('Content-Type','application/pdf')
            doc.pipe(fs.createWriteStream(invoicePath))
            doc.pipe(res)
            doc.text('uploading files api in nodejs. files as in images in different format and pdf');
            doc.end()
            res.satus(201).json({message:"pdf generated"})
        } catch (error) {
            res.satus(400).json({message:'could not generate'})
        }
       
    }
 
}

module.exports  =  new InvoiceController();