const { google } = require('googleapis')

const CLIENT_ID = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;
const CLIENT_SECRET = process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = process.env.REACT_APP_GOOGLE_DRIVE_REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
})


function getFileList() {
    console.log()
}

async function generatePublicUrl() {
    try {
      const fileId = 'YOUR FILE ID';
      await drive.permissions.create({
        fileId: fileId,
        requestBody: {
          role: 'reader',
          type: 'anyone',
        },
      });
  
      /* 
      webViewLink: View the file in browser
      webContentLink: Direct download link 
      */
      const result = await drive.files.get({
        fileId: fileId,
        fields: 'webViewLink, webContentLink',
      });
      console.log(result.data);
    } catch (error) {
      console.log(error.message);
    }
  }
