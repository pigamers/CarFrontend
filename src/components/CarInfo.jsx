import React from 'react';

export default function CarInfo({
  setMakeOfCar,
  setModel,
  setYear,
  setMileage,
  setColor
}) {
  return (
    <>
      {/* Make Of Car field */}
      <div>
        <label htmlFor="makeOfCar" className="block text-lg font-medium">Make -</label>
        <div className="mt-2">
          <input
            id="makeOfCar"
            name="makeOfCar"
            type="text"
            required
            onChange={(e) => setMakeOfCar(e.target.value)} // Pass setter function from parent
            className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
          />
        </div>
      </div>

      {/* Model of Car field */}
      <div>
        <label htmlFor="model" className="block text-lg font-medium">Model -</label>
        <div className="mt-2">
          <input
            id="model"
            name="model"
            type="text"
            required
            onChange={(e) => setModel(e.target.value)} // Pass setter function from parent
            className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
          />
        </div>
      </div>

      {/* Year field */}
      <div>
        <label htmlFor="year" className="block text-lg font-medium">Year -</label>
        <div className="mt-2">
          <input
            id="year"
            name="year"
            type="number"
            min="1900"
            max="9999"
            step="1"
            required
            onChange={(e) => setYear(e.target.value)} // Pass setter function from parent
            className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
          />
        </div>
      </div>

      {/* Mileage field */}
      <div>
        <label htmlFor="mileage" className="block text-lg font-medium">Mileage -</label>
        <div className="mt-2">
          <input
            id="mileage"
            name="mileage"
            type="text"
            pattern="[0-9]*"
            inputMode='numeric'
            required
            onChange={(e) => setMileage(e.target.value)} // Pass setter function from parent
            className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
          />
        </div>
      </div>

      {/* Color field */}
      <div>
        <label htmlFor="color" className="block text-lg font-medium">Color -</label>
        <div className="mt-2">
          <input
            id="color"
            name="color"
            type="text"
            required
            onChange={(e) => setColor(e.target.value)} // Pass setter function from parent
            className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
          />
        </div>
      </div>
    </>
  );
}
