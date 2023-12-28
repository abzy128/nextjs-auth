import { dbClient } from "./mongo";
export default async function handler(req, res) {
  if (req.method === "GET") {
    var status = await testConnection();
    if (status) {
      res.status(200).json("Connection successful!");
    } else {
      res.status(500).json("Connection failed!");
    }
  }
}
async function testConnection() {
  var canConnect = false;
  try {
    await dbClient.connect();
    await dbClient.db("userdb").command({ ping: 1 });
    canConnect = true;
  } catch (e) {
    canConnect = false;
  } finally {
    await dbClient.close();
  }
  return canConnect;
}
