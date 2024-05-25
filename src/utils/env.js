import dotenv from 'dotenv';

dotenv.config();

export function env(name, defaultValue) {
  const value = process.env[name];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
}


// mongodb+srv://maldim1972:Nn0We1YFpDKjlokP@cluster0.6urc7he.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0