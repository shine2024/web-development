import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";
import { url } from 'inspector';

inquirer
  .prompt([
    /* Pass your questions in here */
    {message:"What is your favorite site .......",
    name:'url',
}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    console.log(answers)
   var url=answers.url;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream("qr-code.png"));

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });