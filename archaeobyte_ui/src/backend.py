from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv

load_dotenv()


app = Flask(__name__)

# Send a thank-you email function
def send_thank_you_email(recipient):
    sender_email = os.getenv('SENDER_EMAIL')
    password = os.getenv('EMAIL_PASSWORD')

    subject = "Thank You for Registering!"
    body = f"""
    Dear {recipient.split('@')[0].title()},

    Thank you for registering with our program. We are excited to have you with us!

    Best regards,
    DevElet Team
    """

    msg = MIMEText(body, 'html')
    msg['Subject'] = subject
    msg['From'] = sender_email
    msg['To'] = recipient

    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(sender_email, password)
            server.sendmail(sender_email, recipient, msg.as_string())
        print(f"Thank you email sent to {recipient}")
    except Exception as e:
        print(f"Failed to send thank you email to {recipient}. Error: {e}")

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    print(f"Received registration data: {data}")
    return jsonify({"message": "Registration successful"}), 200

@app.route('/send-thank-you-email', methods=['POST'])
def send_email():
    data = request.json
    recipient_email = data.get('email')
    
    if recipient_email:
        send_thank_you_email(recipient_email)
        return jsonify({"message": "Thank you email sent"}), 200
    else:
        return jsonify({"error": "Email address is missing"}), 400

if __name__ == '__main__':
    app.run(port=3001, debug=True)
