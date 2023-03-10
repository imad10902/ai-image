import { surpriseMePrompts } from "../constant";

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
  
    if (randomPrompt === prompt) return getRandomPrompt(prompt);
  
    return randomPrompt;
  }
  
  export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
  }
  //A fubction is supposed to return something
  //we can use this function anywhere