'use client';
import { Event, Venue } from '@/db';
import { VenueService } from '@/services/venue.service';
import { EventForm } from './EventForm';
import { useEffect } from 'react';
import { convertDateToDatetimeLocal } from '../../../../util/dates';

interface EventEditModalProps {
  event: Event & { venue: Venue | null };
  venues: Venue[];
}

export function EventEditModal(props: EventEditModalProps) {
  function onSubmit() {
    // @ts-ignore
    $('#event-edit-modal').modal('hide');
  }

  useEffect(() => {
    console.log('EventEditModal useEffect', props.event);
  }, [props.event]);

  function parseEvent(event: EventEditModalProps['event']) {
    if (!event) return undefined;
    return {
      ...event,
      datetime: convertDateToDatetimeLocal(event.datetime as unknown as Date),
    };
  }

  return (
    <div className="d-inline-block ml-2">
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target="#event-edit-modal"
      >
        Edit <i className="fas fa-edit fa-sm ml-1" />
      </button>
      <div
        id="event-edit-modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <EventForm
              event={parseEvent(props.event)}
              venues={props.venues}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
