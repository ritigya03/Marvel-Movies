'use client'
import data from '../data'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useParams } from 'react-router-dom'

export default function InfoHandler({ open, setOpen }) {
  let { movieId } = useParams();
  let movieDetails = data.find((movie) => movie.id == movieId);

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-black text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
               
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className=" font-bold text-2xl text-white">
                    {movieDetails.name}
                  </DialogTitle>
                  <div className="mt-2">
                    <div className='flex '>
                    <h3 className='font-bold text-red-800'>Plot:</h3>
                    <p className='ml-2'>{movieDetails.plot}</p>
                    </div>
                    <div className='flex '>
                    <h3 className='font-bold text-red-800' >Year of Release:</h3>
                    <p className='ml-2'>{movieDetails.yearOfRelease}</p>
                    </div>
                    <div className='flex '>
                    <h3 className='font-bold text-red-800'>Actors:</h3>
                    <p className='ml-2'>{movieDetails.actors}</p>
                    </div>
                    <div className='flex '>
                    <h3 className='font-bold text-red-800'>Director:</h3>
                    <p className='ml-2'>{movieDetails.director}</p>
                    </div>
                    <div className='flex '>
                    <h3 className='font-bold text-red-800'>Awards:</h3>
                    <p className='ml-2'>{movieDetails.awards}</p>
                    </div>
                    <div className='flex '>
                    <h3 className='font-bold text-red-800'>IMDB Ratings:</h3>
                    <p className='ml-2'>{movieDetails.imdbRating}</p>
                    </div>
                    <div className='flex '>
                    <h3 className='font-bold text-red-800'>Box Office Collection:</h3>
                    <p className='ml-2'>{movieDetails.boxOfficeCollection}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
