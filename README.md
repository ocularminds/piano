# Piano

React based piano keyboard simulator.

## How it works
When a user clicks on a white key the key is highlighted and the corresponding letter is appended to an element below the keyboard that acts as a log.
						
The text field and play button below the log element allows user to add a comma delimited string of letters. When play button is clicked, the app plays back the letters by highlighting the appropriate keys in order for one second at a time.

To test, do the following:
1. Clone the repository
2. Change to the paino directory
3. In the piano directory run:
```bash
npm install
```
4. After step 3 run:
```bash
npm start
```
5. Point your browser to http://localhost:3000

## More information
1. You can increase the number of keyboards displayed by adding more entry to *pianos* in the src\app\App.js
2. You can increase the number of octaves by adding more keys to the piano *keyPads*