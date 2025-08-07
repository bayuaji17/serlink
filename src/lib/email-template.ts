import escapeHtml from "escape-html";

export function verifyEmailHTML(verificationUrl: string) {
  const url = escapeHtml(verificationUrl);
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verify Your Serlink Account</title>
    <style>
      /* Base styles */
      body,
      html {
        margin: 0;
        padding: 0;
        font-family: "Arial", sans-serif;
        line-height: 1.6;
        color: #333333;
        background-color: #f5f5f5;
      }

      /* Container */
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }

      /* Card */
      .card {
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }

      /* Header */
      .header {
        background-color: #4a6bff;
        padding: 30px 20px;
        text-align: center;
      }

      .logo {
        color: #ffffff;
        font-size: 28px;
        font-weight: bold;
        text-decoration: none;
      }

      /* Content */
      .content {
        padding: 30px;
      }

      h1 {
        color: #000000;
        margin-top: 0;
        font-size: 24px;
      }

      p {
        margin-bottom: 20px;
        color: #000000;
      }

      /* Button */
      .button {
        display: inline-block;
        background-color: #4a6bff;
        color: #ffffff !important;
        text-decoration: none;
        padding: 12px 30px;
        border-radius: 4px;
        font-weight: bold;
        margin: 20px 0;
      }

      /* Verification link box */
      .verification-link {
        background-color: #f8f9fa;
        border: 1px solid #e1e4e8;
        border-radius: 4px;
        padding: 12px;
        word-break: break-all;
        font-family: monospace;
        font-size: 14px;
        margin: 20px 0;
        color: #333;
      }

      /* Footer */
      .footer {
        text-align: center;
        padding: 20px;
        font-size: 12px;
        color: #999999;
        border-top: 1px solid #eeeeee;
      }

      /* Responsive */
      @media screen and (max-width: 600px) {
        .container {
          width: 100%;
          padding: 10px;
        }

        .content {
          padding: 20px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <div class="header">
          <a href="#" class="logo" style="color: #ffffff;">SERLINK</a>
        </div>

        <div class="content">
          <h1>Verify Your Email Address</h1>

          <p>Hello,</p>

          <p>
            Thank you for creating an account with Serlink. To complete your
            registration, please verify your email address by clicking the
            button below:
          </p>
          <div
            style="
              background-color: #fff8e6;
              border-left: 4px solid #ffc107;
              padding: 12px;
              margin: 20px 0;
            "
          >
            <strong>Note:</strong> This email verification link is only valid
            for 1 hour.
          </div>

          <div style="text-align: center">
            <a href="${url}" class="button">Verify Email Address</a>
          </div>

          <p>
            If you're having trouble, try copying and pasting the following URL
            into your browser:
          </p>

          <div class="verification-link">${url}</div>

          <p>
            If you did not create an account with Serlink, please ignore this
            email or contact support if you have questions.
          </p>

          <p>Thanks,<br />Serlink Team</p>
        </div>

        <div class="footer">
          <p>&copy; 2025 Serlink. All rights reserved.</p>
          <p>
            <a href="#" style="color: #4a6bff; text-decoration: none"
              >Help Center</a
            >
            |
            <a href="#" style="color: #4a6bff; text-decoration: none"
              >Privacy Policy</a
            >
            |
            <a href="#" style="color: #4a6bff; text-decoration: none"
              >Terms of Service</a
            >
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
`;
}

export function resetPasswordHTML(verificationUrl: string) {
  const url = escapeHtml(verificationUrl);
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Serlink Password</title>
    <style>
        /* Base styles */
        body, html {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f5f5f5;
        }
        
        /* Container */
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        
        /* Card */
        .card {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        /* Header */
        .header {
            background-color: #4a6bff;
            padding: 30px 20px;
            text-align: center;
        }
        
        .logo {
            color: #ffffff;
            font-size: 28px;
            font-weight: bold;
            text-decoration: none;
        }
        
        /* Content */
        .content {
            padding: 30px;
        }
        
        h1 {
            color: #4a6bff;
            margin-top: 0;
            font-size: 24px;
        }
        
        p {
            margin-bottom: 20px;
        }
        
        /* Button */
        .button {
            display: inline-block;
            background-color: #4a6bff;
            color: #ffffff !important;
            text-decoration: none;
            padding: 12px 30px;
            border-radius: 4px;
            font-weight: bold;
            margin: 20px 0;
        }
        
        /* Verification link box */
        .verification-link {
            background-color: #f8f9fa;
            border: 1px solid #e1e4e8;
            border-radius: 4px;
            padding: 12px;
            word-break: break-all;
            font-family: monospace;
            font-size: 14px;
            margin: 20px 0;
            color: #333;
        }
        
        .warning {
            background-color: #fff8e6;
            border-left: 4px solid #ffc107;
            padding: 12px;
            margin: 20px 0;
        }
        
        /* Footer */
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #999999;
            border-top: 1px solid #eeeeee;
        }
        
        /* Responsive */
        @media screen and (max-width: 600px) {
            .container {
                width: 100%;
                padding: 10px;
            }
            
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="header">
                <a href="#" class="logo" style="color: #ffffff;">SERLINK</a>
            </div>
            
            <div class="content">
                <h1>Reset Your Password</h1>
                
                <p>Hello,</p>
                
                <p>We received a request to reset your Serlink account password. Click the button below to reset it:</p>
                
                <div style="text-align: center;">
                    <a href="${url}" class="button">Reset Password</a>
                </div>
                
                <div class="warning">
                    <p><strong>Important:</strong> This password reset link will expire in 1 hours. If you didn't request a password reset, you can safely ignore this email.</p>
                </div>
                
                <p>If you're having trouble, copy and paste the following URL into your browser:</p>
                
                <div class="verification-link">
                    ${url}
                </div>
                
                <p>If you didn't request this password reset, please secure your account as someone else may be trying to access it.</p>
                
                <p>Thanks,<br>The Serlink Team</p>
            </div>
            
            <div class="footer">
                <p>&copy; 2025 Serlink. All rights reserved.</p>
                <p>
                    <a href="#" style="color: #4a6bff; text-decoration: none;">Help Center</a> | 
                    <a href="#" style="color: #4a6bff; text-decoration: none;">Privacy Policy</a> | 
                    <a href="#" style="color: #4a6bff; text-decoration: none;">Terms of Service</a>
                </p>
            </div>
        </div>
    </div>
</body>
</html>`;
}
