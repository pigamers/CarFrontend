import React from 'react';

export default function CarPhotos({
    handleFileUpload,
    frontView,
    backView,
    rearSideView1,
    rearSideView2,
    exteriorVideo,
}) {
    return (
        <>
            
            {/* Front View Field */}
            <div>
                <label htmlFor="frontView" className="block text-lg font-medium">Front Side -</label>
                <div className="mt-2">
                    <input
                        id="frontView"
                        name="frontView"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e.target.files[0], 'front')} // Handle front image upload
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                    {/* Display the uploaded front image */}
                    {frontView && <img src={frontView} alt="Front view" width="200" />}
            </div>
            </div>

            {/* Back View Field */}
            <div>
                <label htmlFor="backView" className="block text-lg font-medium">Back Side -</label>
                <div className="mt-2">
                    <input
                        id="backView"
                        name="backView"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e.target.files[0], 'back')} // Handle back image upload
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                    {/* Display the uploaded back image */}
                    {backView && <img src={backView} alt="Back view" width="200" />}
                </div>
            </div>

            {/* Rear Side 1 Field */}
            <div>
                <label htmlFor="rearSide1" className="block text-lg font-medium">Rear Side 1 -</label>
                <div className="mt-2">
                    <input
                        id="rearSide1"
                        name="rearSide1"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e.target.files[0], 'rear1')} // Handle rear side 1 image upload
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                    {/* Display the uploaded rear side 1 image */}
                    {rearSideView1 && <img src={rearSideView1} alt="Rear side 1" width="200" />}
                </div>
            </div>

            {/* Rear Side 2 Field */}
            <div>
                <label htmlFor="rearSide2" className="block text-lg font-medium">Rear Side 2 -</label>
                <div className="mt-2">
                    <input
                        id="rearSide2"
                        name="rearSide2"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e.target.files[0], 'rear2')} // Handle rear side 2 image upload
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                    {/* Display the uploaded rear side 2 image */}
                    {rearSideView2 && <img src={rearSideView2} alt="Rear side 2" width="200" />}
                </div>
            </div>

            {/* Video Field */}
            <div>
                <label htmlFor="exteriorVideo" className="block text-lg font-medium">Video -</label>
                <div className="mt-2">
                    <input
                        id="exteriorVideo"
                        name="exteriorVideo"
                        type="file"
                        accept="video/*"
                        onChange={(e) => handleFileUpload(e.target.files[0], 'video')} // Handle video upload
                        className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                    />
                    {/* Display the uploaded video */}
                    {exteriorVideo && (
                        <video width="320" height="240" controls>
                            <source src={exteriorVideo} type="video/mp4" />
                        </video>
                    )}
                </div>
            </div>
        </>
    );
}
