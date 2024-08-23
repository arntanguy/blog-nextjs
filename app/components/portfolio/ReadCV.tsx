import { promises as fs } from 'fs';

// ReadCV from json file on server
export default async function ReadCV({cvName} : { cvName: string }) {
  const file = await fs.readFile(process.cwd() + '/public/portfolio/' + cvName, 'utf8');
  const data = JSON.parse(file);
  return data
}
