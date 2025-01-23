import React from 'react';

export default function CarCondition({
    setCondition,
    setAccidentHistory,
    setServiceHistory,
    setInsuranceStatus,
    setTaxUptill
}) {
    return (
        <>
            {/* Condition field */}
            <div>
                <label htmlFor="condition" className="block text-lg font-medium">Condition -</label>
                <div className="mt-2">
                    <input
                        id="condition"
                        name="condition"
                        type="text"
                        required
                        onChange={(e) => setCondition(e.target.value)} // Pass setter function from parent
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                </div>
            </div>

            {/* Accident History field */}
            <div>
                <label htmlFor="accidentHistory" className="block text-lg font-medium">Accident History -</label>
                <div className="mt-2">
                    <input
                        id="accidentHistory"
                        name="accidentHistory"
                        type="text"
                        required
                        onChange={(e) => setAccidentHistory(e.target.value)} // Pass setter function from parent
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                </div>
            </div>

            {/* Last Service field */}
            <div>
                <label htmlFor="serviceHistory" className="block text-lg font-medium">Last Service -</label>
                <div className="mt-2">
                    <input
                        id="serviceHistory"
                        name="serviceHistory"
                        type="text"
                        required
                        onChange={(e) => setServiceHistory(e.target.value)} // Pass setter function from parent
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                </div>
            </div>

            {/* Insurance Status field */}
            <div>
                <label htmlFor="insuranceStatus" className="block text-lg font-medium">Insurance Status -</label>
                <div className="mt-2">
                    <input
                        id="insuranceStatus"
                        name="insuranceStatus"
                        type="text"
                        required
                        onChange={(e) => setInsuranceStatus(e.target.value)} // Pass setter function from parent
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                </div>
            </div>

            {/* Tax Uptill field */}
            <div>
                <label htmlFor="taxUptill" className="block text-lg font-medium">Tax uptill -</label>
                <div className="mt-2">
                    <input
                        id="taxUptill"
                        name="taxUptill"
                        type="text"
                        required
                        onChange={(e) => setTaxUptill(e.target.value)} // Pass setter function from parent
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                </div>
            </div>
        </>
    );
}
