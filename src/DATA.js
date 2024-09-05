const featuredProjectsArray = [
  {
    id: "1",
    name: "Pixcel OCR",
    screencap: "../src/assets/stock.jpg",
    techs: [
      "../src/assets/react.png",
      "../src/assets/openai.png",
      "../src/assets/javascript.png",
    ],
    body: "Pixcel is an AI powered mobile OCR tool made to help increase the productivity of some friends who work in supply chain management. To use it, take a picture of data with your phone with clear headers and values. Then, an AI vision model (GPT 4o-mini) extracts this data and adds it to an Excel file. At any point you can download that Excel file with your data or email it.",
    more: "view code (and more) on my GitHub!",
    customlink: "someurl",
  },
  {
    id: "2",
    name: "LLaMa-2 Chess",
    screencap: "../src/assets/chess.png",
    techs: [
      "../src/assets/react.png",
      "../src/assets/openai.png",
      "../src/assets/typescript.png",
    ],
    body: "LLaMa-2 Chess connects a custom chess platform with Meta's LLaMa-2 AI. I was interested in experimenting with LLM context, and the state of a chess game seemed like the perfect sandbox. You make a move, of which the algebraic notation is sent to LLaMa, and it returns a move in notation in response, which the board state then takes in and reflects.",

    more: "view code (and more) on my GitHub!",
    customlink: "someurl",
  },
  {
    id: "3",
    name: "Superbin",
    screencap: "../src/assets/stock.jpg",
    techs: ["../src/assets/react.png", "../src/assets/javascript.png"],
    body: "Superbin is a Chrome extension I made to help with source management when researching. It, in essence, expands your clipboard and gives it more functionality. You can now copy multiple things at once, and the app will store not only the thing you copied, but the source URL. You can then export the contents of this clipboard to a Google Doc.",
    more: "view code (and more) on my GitHub!",
    customlink: "someurl",
  },
];

export default featuredProjectsArray;
