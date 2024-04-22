import {Book} from "@/models.ts";
import {LoremIpsum} from "lorem-ipsum";
import shortid from "shortid";

const DATA: Array<Book> = [];

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

while (DATA.length < 100) {
  DATA.push({
    id: shortid.generate(),
    name: capitalizeFirstLetter(
     lorem.generateWords(Math.round(Math.random() * 4))
    ),
  })
}

export default DATA;
