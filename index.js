const { StreamerbotClient } = require('@streamerbot/client');
const WebSocket = require('ws');
require('dotenv').config();

// Create a new WebSocket server for the overlay
const overlayServer = new WebSocket.Server({ port: process.env.serverWSPort });

let overlaySocket = null;

overlayServer.on('connection', (socket) => {
    overlaySocket = socket;
    console.log('Overlay connected');
});

// Create Streamerbot client
const client = new StreamerbotClient({
    host: process.env.streamerbotHost,
    port: process.env.streamerbotPort,
    autoReconnect: true,
    retries: -1,
});

// Listen for heart rate events
client.on('Pulsoid.HeartRatePulse', ({ data }) => {
    console.log(`Heart Rate: ${data.heartRate}`);

    // Send heart rate to the overlay if connected
    if (overlaySocket) {
        overlaySocket.send(JSON.stringify({ heartRate: data.heartRate }));
    }
});
