# Google Sheets Integration Setup Guide

## Step 1: Create Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new spreadsheet called "Himachal Yatra Reviews"
3. Rename the first sheet to "Reviews"
4. Add headers in row 1:
   - A1: Date
   - B1: Name
   - C1: Package/Destination
   - D1: Rating
   - E1: Message

5. Copy the Sheet ID from the URL:
   - URL: https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
   - Copy the SHEET_ID part

## Step 2: Create Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Create new project → name it "Himachal Reviews API"
3. Copy the code from `google-apps-script.gs` (in your project folder)
4. Replace `YOUR_SHEET_ID` with your actual Sheet ID
5. Click Deploy → New Deployment → Type: Web App
   - Execute as: Your email
   - Who has access: Anyone
6. Copy the deployment URL (you'll need this)
7. It will look like: `https://script.googleapis.com/macros/s/ABC123.../usercreator`

## Step 3: Update Website Code

Replace the review form submission code in `index.html` and `reviews.html` with the code provided below.

## Step 4: Test

1. Submit a review on your website
2. Check your Google Sheet - it should appear!
3. Edit/delete reviews directly in the sheet
4. Refresh website to see changes
