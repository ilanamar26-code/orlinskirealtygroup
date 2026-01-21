// Script to help extract Dropbox image links
// This is a helper script - you'll need to manually get the direct links

const https = require('https');

const dropboxFolderUrl = 'https://www.dropbox.com/scl/fo/lar92l05jxmzelx59u44y/AJtnVyS-NWEZQv3nFtbQ93I?rlkey=c2qqs6bpqyw690srcwcs0fapf&dl=0';

console.log('To get Dropbox direct image links:');
console.log('1. Open the Dropbox folder in your browser');
console.log('2. For each image you want to use:');
console.log('   - Right-click on the image');
console.log('   - Select "Copy link" or "Share"');
console.log('   - The link will look like: https://www.dropbox.com/s/[file_id]/[filename]?dl=0');
console.log('   - Replace ?dl=0 with ?raw=1 to get the direct image link');
console.log('   - Example: https://www.dropbox.com/s/abc123/image.jpg?raw=1');
console.log('');
console.log('Then add these links to lib/richard-orlinski-images.ts');
