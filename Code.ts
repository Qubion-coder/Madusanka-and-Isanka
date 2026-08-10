function setup() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  
  // Setup RSVP Sheet
  let rsvpSheet = doc.getSheetByName('RSVP');
  if (!rsvpSheet) {
    rsvpSheet = doc.insertSheet('RSVP');
    rsvpSheet.appendRow(['Timestamp', 'Name', 'Guests', 'Dietary Notes']);
    rsvpSheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    rsvpSheet.setFrozenRows(1);
  }

  // Setup Wishes Sheet
  let wishesSheet = doc.getSheetByName('Wishes');
  if (!wishesSheet) {
    wishesSheet = doc.insertSheet('Wishes');
    wishesSheet.appendRow(['Timestamp', 'Name', 'Message']);
    wishesSheet.getRange(1, 1, 1, 3).setFontWeight('bold');
    wishesSheet.setFrozenRows(1);
  }
}

function doPost(e) {
  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    
    // Support both application/x-www-form-urlencoded and application/json
    let data;
    if (e.postData && e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }
    
    const type = data.type;
    
    if (type === 'RSVP') {
      let sheet = doc.getSheetByName('RSVP');
      if (!sheet) {
        sheet = doc.insertSheet('RSVP');
        sheet.appendRow(['Timestamp', 'Name', 'Guests', 'Dietary Notes']);
        sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
        sheet.setFrozenRows(1);
      }
      
      const timestamp = new Date();
      const name = data.name || '';
      const guests = data.guests || '';
      const notes = data.dietaryNotes || '';
      
      sheet.appendRow([timestamp, name, guests, notes]);
      
    } else if (type === 'Wishes') {
      let sheet = doc.getSheetByName('Wishes');
      if (!sheet) {
        sheet = doc.insertSheet('Wishes');
        sheet.appendRow(['Timestamp', 'Name', 'Message']);
        sheet.getRange(1, 1, 1, 3).setFontWeight('bold');
        sheet.setFrozenRows(1);
      }
      
      const timestamp = new Date();
      const name = data.name || '';
      const message = data.message || '';
      
      sheet.appendRow([timestamp, name, message]);
    } else {
       throw new Error("Invalid type. Must be 'RSVP' or 'Wishes'.");
    }

    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Needed to handle CORS preflight requests if you send JSON from React
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
