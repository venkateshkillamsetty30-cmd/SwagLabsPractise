import fs from 'fs';
import {parse} from 'csv-parse/sync';

type LoginData = {
  URL: string;
  Username: string;
  Password: string;
};

export function readCSV(filePath: string) {
  const data = fs.readFileSync(filePath, 'utf8');
  return parse(data, 
    { 
    columns: true,
    skip_empty_lines: true, 
    }
) as LoginData[];
}