// Google Apps Script for handling review submissions
// Paste this code in Google Apps Script editor

const SHEET_ID = 'YOUR_SHEET_ID'; // Replace with your sheet ID
const SHEET_NAME = 'Reviews';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    const params = e.postData.contents;
    const data = JSON.parse(params);
    
    // Add row to sheet
    sheet.appendRow([
      new Date(),
      data.name,
      data.place,
      data.rating,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ 
      status: 'success',
      message: 'Review saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    
    // Skip header row and reverse to show newest first
    const reviews = data.slice(1).reverse().map(row => ({
      date: new Date(row[0]).toLocaleDateString(),
      name: row[1],
      place: row[2],
      rating: row[3],
      message: row[4]
    }));
    
    return ContentService.createTextOutput(JSON.stringify(reviews))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
