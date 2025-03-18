const https = require('https');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Initialize express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a connection pool to the database
const db = mysql.createPool({
  host: '127.0.0.1', //127.0.0.1
  user: 'root',
  password: 'Jashu$93',
  database: 'dev_elet_db',
  waitForConnections: true,
  connectionLimit: 100,  // Maximum number of connections
  queueLimit: 5000,         // allows upto 5000 queued requests
 acquireTimeout: 30000 // Timeout after 30 seconds if a connection cannot be acquired

        // No limit to the number of queued requests
});

// Test the connection pool
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Successfully connected to MySQL');
    connection.release(); // Release the connection back to the pool
  }
});

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tech.develet@gmail.com', // Replace with your email
    pass: 'grqihiywsktgmjee'   // Replace with your email password
  }
});

// Function to send a styled thank-you email
function sendThankYouEmailAEA(toEmail, name, domain) {
  console.log('To Email:', toEmail);
  console.log('Name:', name);
  console.log('Domain:', domain); // Debugging output

  const mailOptions = {
    from: '"DevElet" <tech.develet@gmail.com>', // Replace with your email
    to: toEmail,
    subject: 'Thank you for registering with DevElet!',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; border: 2px solid #000; padding: 20px; border-radius: 10px; background-color: #f4f4f4; max-width: 600px; margin: auto;">
        <div style="text-align: center; padding-bottom: 20px;">
          <h1 style="color: blue; font-size: 24px; margin: 0;">Welcome to the AEA Program at DevElet!</h1>
          <p style="font-size: 16px; color: black;">We’re excited to have you on board, ${name}!</p>
        </div>

        <p style="font-size: 14px; color: black;">DevElet is dedicated to shaping future leaders in technology. Our AEA program is crafted to empower you with hands-on experience, industry insights, and personalized guidance.</p>
        <p style="font-size: 14px; color: blue;"><strong>Domain Registered:</strong> <span style="color: black; font-weight: bold;">${domain || 'Not Provided'}</span></p>

        <h2 style="color: red; font-size: 20px; border-bottom: 2px solid black; padding-bottom: 10px; margin-bottom: 20px;">Here’s What You’ll Gain:</h2>
        
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue; margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Advanced Training</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Build your technical skills through comprehensive sessions.</p>
        </div>

        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Exclusive 1:1 Mentoring</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Receive personalized guidance from industry experts.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Real-World Projects</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Work on projects that enhance your portfolio.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Expert Doubt-Clearing Sessions</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Get your questions resolved promptly by experts.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Practical Hands-On Experience</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Gain practical experience that aligns with industry standards.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Recognizable Certificates</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Earn certificates that validate your achievements.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Professional Resume & LinkedIn Building</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Stand out to recruiters with tailored resume and LinkedIn sessions.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Intensive Mock Interviews</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Prepare for job interviews with practical mock sessions.</p>
        </div>

        <p style="font-size: 14px; color: black;">Please allow us some time to process your application. We will be in touch soon with the next steps.</p>

        <p style="font-size: 14px; color: black;">Meanwhile, feel free to connect with us and stay updated:</p>

        <p style="font-size: 14px; color: blue;">
          <a href="https://www.linkedin.com/company/develetindia/" style="color: blue; text-decoration: none;">LinkedIn</a><br>
          <a href="https://develet.in/" style="color: blue; text-decoration: none;">Website</a><br>
          <a href="https://chat.whatsapp.com/EENMvu2CllqFLSq3hPuFvI" style="color: blue; text-decoration: none;">WhatsApp</a>
        </p>

        <p style="margin-top: 20px; font-size: 14px; color: black;">Best Regards,<br>
        <strong>Team DevElet</strong></p>
      </div>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

const PDFDocument = require('pdfkit');
const { PassThrough } = require('stream');
const internIdFilePath = path.join(__dirname, 'internId.json');

// Function to get the next intern ID
function getNextInternId(callback) {
  // Read the current intern ID from the file
  fs.readFile(internIdFilePath, 'utf8', (err, data) => {
    let lastInternId = 0; // Default ID if the file doesn't exist or is empty
    let currentMonth = new Date().getMonth() + 1; // Get the current month number
    if (!err && data) {
      const fileData = JSON.parse(data);
      lastInternId = fileData.lastInternId || 0;
      if (fileData.month !== currentMonth) {
        lastInternId = 0; // Reset the ID if the month has changed
      }
    }

    // Increment the ID and format it
    lastInternId += 1;
    const newInternId = `25K0J${currentMonth}${lastInternId.toString().padStart(3, '0')}`;

    // Write the updated ID and month back to the file
    fs.writeFile(internIdFilePath, JSON.stringify({ lastInternId, month: currentMonth }), (err) => {
      if (err) {
        console.error('Error saving intern ID:', err);
      }
      callback(newInternId);
    });
  });
}


// Function to create a PDF offer letter in memory
function createOfferLetter(name, college, domain, internId, callback) {
  const doc = new PDFDocument({ size: 'A4' });
  const stream = new PassThrough();
  const buffers = [];

  stream.on('data', buffers.push.bind(buffers));
  stream.on('end', () => {
    const pdfData = Buffer.concat(buffers);
    callback(pdfData);
  });

  doc.pipe(stream);

  const BannerimagePath = 'DevElet_Innovate_Banner_Image.png';
  const BannerimageWidth = 595; // Width of A4 page
  const BannerimageHeight = 150; // Height of the image (adjust if needed)
  const paddingTop = 20; // Padding from top of the page
  const BannerimageLeftPadding = 30; // Padding from the left side
  const BannerimageRightPadding = 30; // Padding from the right side
  const BannerimageEffectiveWidth = BannerimageWidth - BannerimageLeftPadding - BannerimageRightPadding;

  doc.image(BannerimagePath, BannerimageLeftPadding, paddingTop, { width: BannerimageEffectiveWidth });
  doc.y = BannerimageHeight; // Move down by the height of the image plus additional padding
  doc.moveDown(2);

  doc.font('Helvetica-Bold').fontSize(16);
  doc.text(`Name: ${name}`, { align: 'left' });
  doc.moveDown(0.5);
  doc.text(`Intern Id: ${internId}`, { align: 'left' });
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').fontSize(14);
  doc.text(`College Name: ${college}`, { align: 'left' });
  doc.moveDown(0.5);

  doc.font('Helvetica').fontSize(14);
  doc.moveDown(1);
  doc.text('We are pleased to extend to you an offer for Internship plus Career Development Program with DevElet. This program is designed to equip you with all the skills required to land a job in IT role and grow professional exposure.', { align: 'justify' });

  doc.moveDown(1.5);
  doc.text('This letter confirms the following details:', { align: 'left' });

  doc.moveDown(1);
  doc.font('Helvetica-Bold').fontSize(14);

  const alignmentPadding1 = ' '.repeat(21);
  const alignmentPadding2 = ' '.repeat(23);
  const alignmentPadding3 = ' '.repeat(17);
  const alignmentPadding4 = ' '.repeat(23);

  doc.text(`Start Date :${alignmentPadding1}27th April 2025`, { align: 'left', lineGap: 1.5 });
  doc.text(`Duration :${alignmentPadding2}1 Month`, { align: 'left', lineGap: 1.5 });
  doc.text(`Designation :${alignmentPadding3}${domain}`, { align: 'left', lineGap: 1.5 });
  doc.text(`Location :${alignmentPadding4}Work-From Home (Remote)`, { align: 'left', lineGap: 1.5 });

  doc.moveDown(1.5);
  doc.font('Helvetica').fontSize(14);
  doc.text('This letter is intended for academic and professional purposes and can be used as an experience letter or any future background verification with DevElet Technologies India LLP.', { align: 'justify' });

  doc.moveDown(2);
  doc.font('Helvetica-Bold').fontSize(16).text('For DevElet Technologies LLP.', { align: 'left' });
  doc.moveDown(1);

  const footerImages = ['sign1.jpeg', 'sign2.jpeg', 'csclogo.png', 'SCH_logo.jpg'];
  const footerImageWidth = 100;
  const footerImageHeight = 100;
  const xStart = 50;
  const yPosition = doc.y;
  const imageSpacing = 20;

  footerImages.forEach((imagePath, index) => {
    const xPosition = xStart + index * (footerImageWidth + imageSpacing);
    doc.image(imagePath, xPosition, yPosition, { width: footerImageWidth, height: footerImageHeight });
  });

  const labelSpacing = 20;
  const boardOfDirectorsText = 'Board of Directors';
  const textWidth = doc.widthOfString(boardOfDirectorsText);
  const centerXPosition1 = xStart + (footerImageWidth + imageSpacing) * 0.5 + (footerImageWidth + imageSpacing) / 2 - textWidth / 2;

  const recognizedByText = 'Recognized by';
  const centerXPosition2 = xStart + (footerImageWidth + imageSpacing) * 2.5 + (footerImageWidth + imageSpacing) / 2 - doc.widthOfString(recognizedByText) / 2;

  doc.font('Helvetica-Bold').fontSize(14);
  doc.text(boardOfDirectorsText, centerXPosition1, yPosition + footerImageHeight + labelSpacing);
  doc.text(recognizedByText, centerXPosition2, yPosition + footerImageHeight + labelSpacing);

  doc.end();
}

// Function to send the offer letter email
function sendThankYouEmailInnovate(toEmail, name, college, domain) {
  getNextInternId((internId) => {
    createOfferLetter(name, college, domain, internId, (pdfData) => {
      const mailOptions = {
        from: '"DevElet" <tech.develet@gmail.com>', // Replace with your email
        to: toEmail,
        subject: 'DevElet Innovate Program Registration Confirmation!',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; border: 2px solid #000; padding: 20px; border-radius: 10px; background-color: #f4f4f4; max-width: 600px; margin: auto;">
            <p style="font-size: 16px; color: black;">Dear <strong>${name}</strong>,</p>
            <p style="font-size: 14px; color: black;">
              Congratulations on successfully registering for the <strong>${domain}</strong> Internship at DevElet.
            </p>
            <p style="font-size: 14px; color: black;">
              We appreciate your interest in joining our team. We are delighted to confirm your registration and offer you a 1-month internship opportunity.
            </p>
            <p style="font-size: 14px; color: black;">
              Please find your official offer letter attached. We are excited about the prospect of having you on board and believe that your skills and enthusiasm will make valuable contributions to our projects.
            </p>
            <h2 style="color: red; font-size: 20px; border-bottom: 2px solid black; padding-bottom: 10px; margin-bottom: 20px;">Here’s What You’ll Gain:</h2>
        
        
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Real-World Projects</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Work on projects that enhance your portfolio.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Expert Doubt-Clearing Sessions</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Get your questions resolved promptly by experts.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Practical Hands-On Experience</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Gain practical experience that aligns with industry standards.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Recognizable Certificates</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Earn certificates that validate your achievements.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Professional Resume & LinkedIn Building</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Stand out to recruiters with tailored resume and LinkedIn sessions.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Intensive Mock Interviews</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Prepare for job interviews with practical mock sessions.</p>
        </div>

        <p style="font-size: 14px; color: black;">If you have any questions or need further assistance, please feel free to reach out to us. We look forward to welcoming you to the DevElet family.</p>
        <p style="font-size: 14px; color: black;">
          <span style="color: blue; text-decoration: underline; font-weight: bold;">Note:</span>
          Join our WhatsApp group to ensure you receive all communications and stay updated.
        </p>
        
        
        <p style="font-size: 14px; color: blue;">
        
          <a href="https://www.linkedin.com/company/develetindia/" style="color: blue; text-decoration: none;">LinkedIn</a><br>
          <a href="https://develet.in/" style="color: blue; text-decoration: none;">Website</a><br>
          <a href="https://chat.whatsapp.com/L3KtcCJvvu6KkRpE588lhm" style="color: blue; text-decoration: none;">WhatsApp</a>
          
        </p>

        <p style="margin-top: 20px; font-size: 14px; color: black;">Best Regards,<br>
        <strong>Team DevElet</strong></p>
      </div>
       `,

        attachments: [
          {
            filename: `${internId}_Offer_Letter.pdf`,
            content: pdfData,
            contentType: 'application/pdf'
          }
        ]
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    });
  });
}

function sendThankYouEmailHireWithUs(toEmail, name) {
  console.log('To Email:', toEmail);
  console.log('Name:', name);

  const mailOptions = {
    from: '"DevElet" <tech.develet@gmail.com>', // Replace with your email
    to: toEmail,
    subject: 'Thank You for Your Interest in DevElet - Empowering the Future Workforce',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; border: 2px solid #000; padding: 20px; border-radius: 10px; background-color: #f4f4f4; max-width: 600px; margin: auto;">
        <p style="font-size: 14px; color: black;">Dear <strong>${name}</strong>,</p>
        <p style="font-size: 14px; color: black;">Thank you for showing interest in hiring talented professionals through DevElet! We are thrilled to connect you with some of the brightest minds, trained rigorously in cutting-edge technologies.</p>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Top Talent</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Our students are trained in Full Stack Development, Cloud Computing, Machine Learning, and more.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Industry-Ready</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">They possess the skills and knowledge to contribute effectively from day one.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Why DevElet</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Our training focuses on real-world problem-solving and adaptability.</p>
        </div>
        <p style="font-size: 14px; color: black;">We’ll reach out soon with more details. Feel free to contact us with any questions.</p>
        
        <p style="font-size: 14px; color: black;">Best regards,<br>The DevElet Team</p>
      </div>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

function sendThankYouEmailItServices(toEmail, name) {
  console.log('To Email:', toEmail);
  console.log('Name:', name); // Debugging output

  const mailOptions = {
    from: '"DevElet" <tech.develet@gmail.com>', // Replace with your email
    to: toEmail,
    subject: 'Thanks for choosing DevElet IT services!',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; border: 2px solid #000; padding: 20px; border-radius: 10px; background-color: #f4f4f4; max-width: 600px; margin: auto;">
        <p style="font-size: 14px; color: black;">Dear <strong>${name}</strong>,</p>
        <p style="font-size: 14px; color: black;">We have recieved your application for <strong>IT services</strong>, thanks for your trust in DevElet.<br>We will get back to you soon with further details.<br>In the meantime, feel free to visit our website or follow us on LinkedIn to stay updated with our latest news and updates. </p>
        <p style="font-size: 14px; color: black;">Important Links:-</p>
        
          <li><a href="https://www.linkedin.com/company/develetindia/" style="color: blue; text-decoration: none;">LinkedIn</a></li>
          <li><a href="https://develet.in/" style="color: blue; text-decoration: none;">Our Website</a></li>
        
        <p style="font-size: 14px; color: black;">Best regards,<br>The DevElet Team</p>
      </div>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

function sendThankYouEmailDemoRequest(toEmail, firstName, lastName) {
  console.log('To Email:', toEmail);
  console.log('First Name:', firstName); // Debugging output
  console.log('Last Name:', lastName);   // Debugging output


  const mailOptions = {
    from: '"DevElet" <tech.develet@gmail.com>', // Replace with your email
    to: toEmail,
    subject: 'Thank You for Your Demo Request!',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; border: 2px solid #000; padding: 20px; border-radius: 10px; background-color: #f4f4f4; max-width: 600px; margin: auto;">
        <p style="font-size: 14px; color: black;">Dear <strong>${firstName} ${lastName}</strong>,</p>
        <p style="font-size: 14px; color: black;">Thank you for completing the demo request form! We appreciate your interest in exploring how DevElet can enhance your organization's upskilling efforts.<br>Our team has received your request and will review the details shortly. You will receive further communication from us via email with additional information and next steps.</p>
        <h2 style="color: red; font-size: 20px; border-bottom: 2px solid black; padding-bottom: 10px; margin-bottom: 20px;">Here’s What You’ll Gain:</h2>
        
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue; margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Advanced Training</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Build your technical skills through comprehensive sessions.</p>
        </div>

        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Exclusive 1:1 Mentoring</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Receive personalized guidance from industry experts.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Real-World Projects</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Work on projects that enhance your portfolio.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Expert Doubt-Clearing Sessions</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Get your questions resolved promptly by experts.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Practical Hands-On Experience</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Gain practical experience that aligns with industry standards.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Recognizable Certificates</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Earn certificates that validate your achievements.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Professional Resume & LinkedIn Building</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Stand out to recruiters with tailored resume and LinkedIn sessions.</p>
        </div>
        <div style="background-color: #e7f1ff; padding: 10px; border-radius: 5px; border: 2px solid blue;margin-bottom: 15px;">
          <h3 style="color: red; font-size: 16px; margin: 0; text-align: center;">Intensive Mock Interviews</h3>
          <p style="font-size: 12px; color: #333; margin-top: 5px; text-align: center;">Prepare for job interviews with practical mock sessions.</p>
        </div>

        <p style="font-size: 14px; color: black;">Please allow us some time to process your application. We will be in touch soon with the next steps.</p>

        <p style="font-size: 14px; color: black;">Meanwhile, feel free to connect with us and stay updated:</p>

        <p style="font-size: 14px; color: blue;">
          <a href="https://www.linkedin.com/company/develetindia/" style="color: blue; text-decoration: none;">LinkedIn</a><br>
          <a href="https://develet.in/" style="color: blue; text-decoration: none;">Website</a><br>
          <a href="https://wa.me/919346116602" style="color: blue; text-decoration: none;">WhatsApp</a>
        </p>

        <p style="margin-top: 20px; font-size: 14px; color: black;">Best Regards,<br>
        <strong>Team DevElet</strong></p>
      </div>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

// Define a route to handle form submissions
// Define a route to handle form submissions
app.post('/api/registrations', (req, res) => {
  const { name, email, mobile, college, year_of_passout, domain, declaration } = req.body;

  if (!name || !email || !mobile || !college || !year_of_passout || !domain || declaration === undefined) {
    return res.status(400).send({ error: 'All fields are required' });
  }

  const sql = 'INSERT INTO registrations (name, email, mobile, college, year_of_passout, domain, declaration) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection:', err);
      return res.status(500).send({ error: 'Database connection failed' });
    }
  
    connection.query(sql, [name, email, mobile, college, year_of_passout, domain, declaration], (err, result) => {
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Failed to register' });
        return;
      }
      sendThankYouEmailAEA(email, name, domain); // Send thank-you email
      res.send({ message: 'Registration successful!' });
    });
  });
});

app.post('/api/registrations_innovate', (req, res) => {
  const { name, email, mobile, college, year_of_passout, todays_date, domain, declaration } = req.body;

  // Input validation
  if (!name || !email || !mobile || !college || !year_of_passout || !todays_date || !domain || declaration === undefined) {
    return res.status(400).send({ error: 'All fields are required' });
  }

  // SQL query
  const sql = `
      INSERT INTO registrations_innovate (name, email, mobile, college, year_of_passout, todays_date, domain, declaration) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection:', err);
      return res.status(500).send({ error: 'Database connection failed' });
    }

    connection.query(sql, [name, email, mobile, college, year_of_passout, todays_date, domain, declaration], (err, result) => {
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error(err);
        return res.status(500).send({ error: 'Failed to register' });
      }
      sendThankYouEmailInnovate(email, name, college, domain); // Send thank-you email
      res.send({ message: 'Registration successful!' });
    });
  });
});

app.post('/api/it_services', (req, res) => {
  const { name, email, mobile, role, domain } = req.body;

  // Input validation
  if (!name || !email || !mobile || !role || !domain) {
    return res.status(400).send({ error: 'All fields are required' });
  }

  // SQL query
  const sql = `
    INSERT INTO it_services (name, email, mobile, role, domain) 
    VALUES (?, ?, ?, ?, ?)
  `;

  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection:', err);
      return res.status(500).send({ error: 'Database connection failed' });
    }

    connection.query(sql, [name, email, mobile, role, domain], (err, result) => {
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error('SQL Error:', err); // Log SQL errors
        return res.status(500).send({ error: 'Failed to register' });
      }
      sendThankYouEmailItServices(email, name); // Send thank-you email
      res.send({ message: 'Registration successful!' });
    });
  });
});

// Define a route to handle form submissions for 'hire_with_us'
app.post('/api/hire_with_us', (req, res) => {
  const { name, organization, email, contact, domain } = req.body;

  // Input validation
  if (!name || !organization || !email || !contact || !domain) {
    return res.status(400).send({ error: 'All fields are required' });
  }

  // SQL query to insert data into the database
  const sql = `
    INSERT INTO hire_with_us (name, organization, email, contact, domain) 
    VALUES (?, ?, ?, ?, ?)
  `;

  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection:', err);
      return res.status(500).send({ error: 'Database connection failed' });
    }

    connection.query(sql, [name, organization, email, contact, domain], (err, result) => {
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).send({ error: 'Failed to register' });
      }
      sendThankYouEmailHireWithUs(email, name); // Send thank-you email
      res.send({ message: 'Registration successful!' });
    });
  });
});

// API endpoint to handle form submission
app.post('/api/submit-demo-request', (req, res) => {
  const {
    firstName,
    lastName,
    workEmail,
    phoneNumber,
    companyLocation,
    companyName,
    companySize,
    numberOfLearners,
    jobTitle,
    jobLevel,
    trainingNeeds
  } = req.body;

  const query = `INSERT INTO business_demo_requests 
    (first_name, last_name, work_email, phone_number, company_location, 
    company_name, company_size, number_of_learners, job_title, job_level, training_needs)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection:', err);
      return res.status(500).json({ message: 'Database connection failed' });
    }

    connection.query(
      query,
      [firstName, lastName, workEmail, phoneNumber, companyLocation, companyName, companySize, numberOfLearners, jobTitle, jobLevel, trainingNeeds],
      (err, result) => {
        connection.release(); // Release the connection back to the pool

        if (err) {
          console.error('Error inserting data:', err);
          return res.status(500).json({ message: 'Failed to submit demo request.' });
        }

        // Send thank you email
        sendThankYouEmailDemoRequest(workEmail, firstName, lastName);

        res.status(200).json({ message: 'Demo request submitted successfully.' });
      }
    );
  });
});

const options = {
  key: fs.readFileSync('../../private/develet.key'),
  cert: fs.readFileSync('../../private/c20c5dd8762eac9c.crt'),
  ca: fs.readFileSync('../../private/gd_bundle-g2-g1.crt')
};

https.createServer(options, app).listen(port, () => { //https.createServer(options,app).listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
