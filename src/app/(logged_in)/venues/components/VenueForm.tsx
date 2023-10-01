'use client';
import axios from 'axios';
import { useCallback } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { GooglePlaceSearch } from '@/components/GooglePlaceSearch';
import { GoogleMapsPlace } from '@/types';
import { Venue } from '@/db';
import { ConfirmModal } from '@/components/ConfirmModal';

export interface VenueEditFormProps {
  venue?: Venue;
  mode: 'edit' | 'create';
}

export function VenueForm(props: VenueEditFormProps) {
  const router = useRouter();
  const form = useForm({ defaultValues: props.venue });

  const onSubmit = form.handleSubmit(async (data, event) => {
    event?.preventDefault();

    let url = '/api/venues';
    if (props.mode === 'edit') url += `/${props.venue?.id}`;

    const response = await axios.post(url, data);
    const venue = response.data;
    router.replace(`/venues/${venue.id}`);
  });

  const onDelete = useCallback(async () => {
    await axios.delete(`/api/venues/${props.venue?.id}`);
    router.replace('/venues');
  }, [props.venue?.id, router]);

  const onGooglePlaceChange = useCallback(
    function onGooglePlaceChangeCallback(place: GoogleMapsPlace | null) {
      if (!place) return;
      form.setValue('google_maps_place_id', place.place_id || null);
      form.setValue('data', place || null);
      form.setValue('name', place.name || null);
    },
    [form]
  );

  return (
    <div>
      <section className="py-4 bg-light  inner-header">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-6">
              <h4 className="mt-0 mb-0 text-dark">Create Venue</h4>
            </div>
            <div className="col-lg-6 col-md-6 text-right">
              <div className="breadcrumbs">
                <p className="mb-0">
                  <a href="#">
                    <i className="icofont-ui-home" /> Home
                  </a>{' '}
                  / <span>Blank</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-page py-5 bg-light border-top">
        <div className="container">
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
                              <label>Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                                autoComplete="off"
                                {...form.register('name', { required: true })}
                              />
                              <div className="invalid-feedback">
                                Please provide a valid name.
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <input
                              hidden
                              {...form.register('google_maps_place_id')}
                            />
                            <GooglePlaceSearch
                              place={props.venue?.data || null}
                              onChange={onGooglePlaceChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <button type="submit" className="btn btn-primary">
                              Save Changes
                            </button>
                            {props.venue && (
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
        </div>
      </section>
    </div>
  );
}
