import { Client, NoAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
const client = new Client({ authStrategy: new NoAuth() });

export const whatsapp = () => {
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", () => {
    console.log("Client is ready!");
  });

  client.initialize();
};
