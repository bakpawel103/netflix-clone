import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { drive_v3, google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

declare var gapi: any;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  oauth2Client: OAuth2Client;
  drive: drive_v3.Drive;

  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      environment.CLIENT_ID,
      environment.CLIENT_SECRET,
      environment.REDIRECT_URI
    );

    this.oauth2Client.setCredentials({
      refresh_token: environment.REFRESH_TOKEN,
    });

    this.drive = google.drive({
      version: 'v3',
      auth: this.oauth2Client,
    });
  }

  public loadFiles() {
    this.drive.files.list({}).then((response) => {
      console.log(response);
    });
  }
}
