import {Note} from "@/models.ts";
import {LoremIpsum} from "lorem-ipsum";
import shortid from "shortid";

const NOTES: Array<Note> = [];

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const capitalizeFirstLetter = ([first, ...rest]: string) => {
  return first.toLocaleUpperCase() + rest.join('');
};

while (NOTES.length < 100) {
  NOTES.push({
    id: shortid.generate(),
    title: capitalizeFirstLetter(
     lorem.generateWords(Math.round(Math.random() * 10) + 2)
    ),
    body: capitalizeFirstLetter(lorem.generateParagraphs(Math.round(Math.random() * 50) + 1))
  })
}

export default NOTES;
