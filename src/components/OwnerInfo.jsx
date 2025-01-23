import React from 'react';

export default function OwnerInfo({
    setOwnerName,
    setOwnerContact,
    setOwnerAddress,
    setOwnerEmail
}) {
    return (
        <>
            {/* Owner Name field */}
            <div>
                <label htmlFor="ownerName" className="block text-lg font-medium">Owner's Name -</label>
                <div className="mt-2">
                    <input
                        id="ownerName"
                        name="ownerName"
                        type="text"
                        required
                        onChange={(e) => setOwnerName(e.target.value)} // Use the setter passed from parent
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                </div>
            </div>

            {/* Owner Contact field */}
            <div>
                <label htmlFor="ownerContact" className="block text-lg font-medium">Owner's Contact -</label>
                <div className="mt-2">
                    <input
                        id="ownerContact"
                        name="ownerContact"
                        type="tel"
                        required
                        onChange={(e) => setOwnerContact(e.target.value)} // Use the setter passed from parent
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                </div>
            </div>

            {/* Owner Address field */}
            <div>
                <label htmlFor="ownerAddress" className="block text-lg font-medium">Owner's Address -</label>
                <div className="mt-2">
                    <textarea
                        id="ownerAddress"
                        name="ownerAddress"
                        required
                        onChange={(e) => setOwnerAddress(e.target.value)} // Use the setter passed from parent
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                </div>
            </div>

            {/* Owner Email field */}
            <div>
                <label htmlFor="ownerEmail" className="block text-lg font-medium">Owner's Email -</label>
                <div className="mt-2">
                    <input
                        id="ownerEmail"
                        name="ownerEmail"
                        type="email" // Set type to 'email' for validation
                        required
                        onChange={(e) => setOwnerEmail(e.target.value)} // Use the setter passed from parent
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                </div>
            </div>
        </>
    );
}
