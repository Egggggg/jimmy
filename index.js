const { default: axios } = require("axios");
const { intervalMin, intervalMax, meows } = require("./config.json");
const intervalRange = intervalMax - intervalMin;

require("dotenv").config();

async function meowfn() {
	const meow = Math.floor(Math.random() * meows.length);
	await axios.post(process.env.WEBHOOK_URL, { content: meows[meow] });

	const interval = Math.floor(Math.random() * intervalRange) + intervalMin;
	setTimeout(meowfn, interval);
}

meowfn();
