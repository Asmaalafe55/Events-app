import path from 'path';
import fs from 'fs';

function buildPath() {
  return path.join(process.cwd(), 'data', 'data.json');
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  // Access to our data
  // extract our data : AllEvents
  // res 404 if there are no AllEvents
  // to loop through them and identify the eventId
  // add the email into email_registered - write on our data
  // only if the email does not exist
  // check the format of the email if OK

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);
  if (!allEvents) {
    return res.status(404).json({ message: `Events data not found` });
  }
  if (method === 'POST') {
    const { email, eventId } = req.body;

    const newAllEvents = allEvents.map((e) => {
      if (e.id === eventId) {
        if (e.emails_registered.includes(email)) {
          res.status(401).json({
            message: `This email has already registered to this event`,
          });
          return e;
        }
        return {
          ...e,
          emails_registered: [...e.emails_registered, email],
        };
      }
      return e;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(200).json({
      message: `You have been registered succesfully with the email: ${email}, ${eventId}`,
    });
  }
}
