import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') as string;
  const results = await searchPlaces(query);

  return NextResponse.json(results);
}

async function searchPlaces(query: string): Promise<void> {
  const baseURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

  try {
    const response = await axios.get(baseURL, {
      params: {
        key: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        query: query,
      },
    });

    if (response.data.status === 'OK') {
      return response.data.results;
    } else {
      console.error(`Error: ${response.data.status}`);
    }
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}
