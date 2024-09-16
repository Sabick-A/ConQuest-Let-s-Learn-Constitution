

const { getClient } =require('@botpress/webchat'); 

//Add your Client ID here ⬇️
const clientId = "71058166-2bdf-4d83-a869-79d0bfb19d62";

const client = getClient({ clientId })

client.on("message", (message) => {
    console.log(client);
  console.log("Received message", message); // Messages from the bot
});

async function main() {
  await client.connect(); // Initialize the client'
  await client.sendMessage("Hello, Botpress!");
}

main();