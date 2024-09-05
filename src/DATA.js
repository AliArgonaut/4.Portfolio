const featuredProjectsArray = [
  {
    id: "1",
    name: "Pixcel OCR",
    screencap: "someurl",
    techs: "somearrayofimages",
    body: "Pixcel is an AI powered OCR tool made to help increase the productivity of some friends of mine who work in supply chain management. It is custom built to work with the kind of data they use, but I am interested in making it more data agnostic. To use it, take a picture of the data you wish to input into excel. Then, an AI vision model (GPT 4o-mini) extracts headers and texts and adds it to an excel file. At any point you can retrieve that excel file with your data and download or email it.",
    more: "see it (and more) on github!",
    customlink: "someurl",
  },
  {
    id: "2",
    name: "llama chess",
    screencap: "someurl",
    techs: "somearrayofimages",
    body: "Llama Chess is a simple app I made that connects a chess platform with Meta's LLaMa-2 AI. I was interested in experimenting with LLM context, and the state of a chess game seemed like the perfect sandbox. You make a move, of which the algebraic notation is sent to LLaMa, and it returns a move in notation in response, which the board state then takes in and reflects.",
    more: "see it (and more) on github!",
    customlink: "someurl",
  },
  {
    id: "3",
    name: "Superbin",
    screencap: "someurl",
    techs: "somearrayofimages",
    body: "Superbin (super bin) is a chrome extension I made to help with source management when researching. It, in essence, expands your clipboard and gives it more functionality. You can now copy multiple things at once, and the app will store not only the thing you copied, but the source URL. You can then export the contents of this clipboard (called a bin) to a text document or Google Doc.",
    more: "see it (and more) on github!",
    customlink: "someurl",
  },
];

export default featuredProjectsArray;
