from flask import Flask, request, jsonify
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.jaswanthikatakam@gmail.com'  # e.g., smtp.gmail.com
app.config['MAIL_PORT'] = 587  # For TLS
app.config['MAIL_USERNAME'] = 'jaswanthikatakam@gmail.com'
app.config['MAIL_PASSWORD'] = 'Jashu$93'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
mail = Mail(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    recipient_email = data.get('email')

    if recipient_email:
        try:
            # Create a confirmation email
            msg = Message('Registration Confirmed',
                          sender='jaswanthikatakam@gmail.com',
                          recipients=[recipient_email])
            msg.body = 'Thank you for registering! Your registration has been confirmed.'
            mail.send(msg)
            
            return jsonify({'message': 'Registration successful and confirmation email sent.'}), 200
        except Exception as e:
            return jsonify({'message': f'Error sending email: {str(e)}'}), 500
    else:
        return jsonify({'message': 'Email address is missing.'}), 400

if __name__ == '__main__':
    app.run(debug=True)
