// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}
wrapGifts(gifts);

const writeCards = (namesArray, eventName) => {
  const thankYouMessages = [];
  for (let i = 0; i < namesArray.length; i++) {
    thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankYouMessages;
};

const names = ["Jack", "Justine", "Jordan"];
const event = "birthday party";

const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}

countDown(10);