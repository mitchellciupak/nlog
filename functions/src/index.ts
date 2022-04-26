import * as functions from "firebase-functions";

// // https://firebase.google.com/docs/functions/typescript


// OneNote Integration

// Create Page
export const createOneNotePage = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// Create Section
export const createOneNoteSection = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// Add to Page
export const updateOneNotePage = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

