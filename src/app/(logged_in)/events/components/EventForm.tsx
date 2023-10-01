'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Event, Venue } from '@/db/schema';
import { ConfirmModal } from '@/components/ConfirmModal';
import { convertDateToDatetimeLocal } from '../../../../util/dates';

interface EventFormProps {
  event?: Event & { venue: Venue | null };
  venues: Venue[];
  onSubmit?: (event: Event) => void;
}

export function EventForm(props: EventFormProps) {
  const router = useRouter();
  const form = useForm({ values: props.event });

  const onSubmit = form.handleSubmit(async (data, e) => {
    e?.preventDefault();

    let url = '/api/events';
    if (props.event) url += `/${props.event.id}`;

    const { venue, created_at, ...payload } = data;
    const response = await axios.post(url, payload);
    const event = response.data;

    form.reset();
    if (props.onSubmit) props.onSubmit(event);
    if (props.event) router.refresh();
    else router.replace(`/events/${event.id}`);
  });

  const onDelete = useCallback(async () => {
    await axios.delete(`/api/events/${props.event?.id}`);
    router.replace('/events');
  }, [props.event?.id, router]);

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-md-12 mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="bg-white p-4 shadow rounded h-100">
                <div>
                  <div className="row gutter-1">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="exampleInput8">Title</label>
                        <input
                          id="exampleInput8"
                          className="form-control"
                          placeholder="Event title"
                          {...form.register('title', { required: true })}
                        />
                        <div className="invalid-feedback">
                          This field is required.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          className="form-control"
                          placeholder="Event description"
                          rows={2}
                          {...form.register('description', { required: true })}
                        />
                        <div className="invalid-feedback">
                          This field is required.
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label>Venue</label>
                        <select
                          className="form-control"
                          placeholder="Event venue"
                          {...form.register('venue_id', { required: true })}
                        >
                          <option value="">Select venue</option>
                          {props.venues.map((venue) => (
                            <option key={venue.id} value={venue.id}>
                              {venue.name}
                            </option>
                          ))}
                        </select>
                        <div className="invalid-feedback">
                          This field is required.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Date</label>
                        <input
                          type="datetime-local"
                          className="form-control"
                          placeholder="Date"
                          {...form.register('datetime', { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                      {props.event && (
                        <span className="d-inline-block ml-3">
                          <ConfirmModal
                            title="Delete"
                            message="Are you sure?"
                            onConfirm={onDelete}
                          />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
