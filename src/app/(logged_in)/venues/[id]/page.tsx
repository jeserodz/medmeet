import { eq } from 'drizzle-orm';
import { db, venues } from '@/db';
import { VenueForm } from '../components/VenueForm';

export interface VenueDetailsPageProps {
  params: { id: string };
}

export default async function VenueDetailsPage(props: VenueDetailsPageProps) {
  console.log(props);

  const result = await db
    .select()
    .from(venues)
    .where(eq(venues.id, props.params.id));

  const venue = result[0];

  return <VenueForm venue={venue} mode="edit" />;
}
