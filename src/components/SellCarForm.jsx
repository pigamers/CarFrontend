import React, { useState } from 'react';
import sellcar from '../assets/sellyourcar.jpg';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loader from './Loader';
import OwnerInfo from './OwnerInfo';
import CarInfo from './CarInfo';
import CarCondition from './CarCondition';
import CarPhotos from './CarPhotos'; // this component is for image upload

export default function SellCarForm() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [currentSection, setCurrentSection] = useState(1);
    const [loading, setLoading] = useState(false);

    // State for the uploaded images and video
    const [file, setFile] = useState(null);
    const [frontView, setFrontView] = useState(null);
    const [backView, setBackView] = useState(null);
    const [rearSideView1, setRearSideView1] = useState(null);
    const [rearSideView2, setRearSideView2] = useState(null);
    const [exteriorVideo, setExteriorVideo] = useState(null);

    const [ownerName, setOwnerName] = useState('');
    const [ownerContact, setOwnerContact] = useState('');
    const [ownerAddress, setOwnerAddress] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [makeOfCar, setMakeOfCar] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [mileage, setMileage] = useState('');
    const [color, setColor] = useState('');

    const [condition, setCondition] = useState('');
    const [accidentHistory, setAccidentHistory] = useState('');
    const [serviceHistory, setServiceHistory] = useState('');
    const [insuranceStatus, setInsuranceStatus] = useState('');
    const [taxUptill, setTaxUptill] = useState('');

    // Function to go to the next section
    const goToNextSection = () => {
        setCurrentSection(prevSection => prevSection + 1);
    };

    // Function to go to the previous section
    const goToPreviousSection = () => {
        setCurrentSection(prevSection => prevSection - 1);
    };

    const handleFileUpload = async (file, type) => {
        if (!file) return;

        const formData = new FormData();

        // Determine if it's an image or video upload
        if (type === 'video') {
            formData.append('video', file);
        } else {
            formData.append('images', file);
        }

        try {
            console.log('Uploading file for:', type);

            // Start Loading
            setLoading(true);

            const response = await axios.post(
                'http://localhost:5000/api/v1/cardetails/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        console.log(`${type} Upload Progress: ${percentCompleted}%`);
                    }
                }
            );

            if (response.data && response.data.uploadedFiles) {
                const uploadedUrl = response.data.uploadedFiles[0].url;

                // Update the corresponding state based on the type
                switch (type) {
                    case 'front':
                        setFrontView(uploadedUrl);
                        break;
                    case 'back':
                        setBackView(uploadedUrl);
                        break;
                    case 'rear1':
                        setRearSideView1(uploadedUrl);
                        break;
                    case 'rear2':
                        setRearSideView2(uploadedUrl);
                        break;
                    case 'video':
                        setExteriorVideo(uploadedUrl);
                        break;
                    default:
                        break;
                }

                toast.success(`${type} uploaded successfully`);
            }

            // Stop Loading once the upload is complete
            setLoading(false);
        } catch (error) {
            console.error('Upload error:', error);
            toast.error(error.response?.data?.message || 'File upload failed');
            setLoading(false); // Stop loading in case of an error
        }
    };

    const handleCarDetailSubmit = async (event) => {
        event.preventDefault();
    
        if (isAuthenticated) {
            try {
                // Ensure all required fields have values
                if (!frontView || !backView || !rearSideView1 || !rearSideView2 || !exteriorVideo) {
                    toast.error("All image and video fields are required!");
                    return;
                }
    
                const carData = {
                    OwnerName: ownerName,
                    OwnerContact: ownerContact,
                    OwnerAddress: ownerAddress,
                    OwnerEmail: ownerEmail,
                    MakeOfCar: makeOfCar,
                    Model: model,
                    Year: year,
                    Mileage: mileage,
                    Color: color,
                    Condition: condition,
                    AccidentHistory: accidentHistory,
                    ServiceHistory: serviceHistory,
                    InsuranceStatus: insuranceStatus,
                    TaxUptill: taxUptill,
                    FrontView: frontView,
                    BackView: backView,
                    RearSideView1: rearSideView1,
                    RearSideView2: rearSideView2,
                    ExteriorVideo: exteriorVideo
                };
    
                console.log('Sending car data:', carData); // Debug log
    
                const res = await axios.post(
                    'http://localhost:5000/api/v1/cardetails/postcar',
                    carData
                );
    
                console.log('Server response:', res.data); // Debug log
                toast.success(res.data.message);
                setCurrentSection(1);
            } catch (error) {
                console.error('Submission error:', error);
                if (error.response) {
                    toast.error(error.response.data.message || "Something went wrong!");
                } else if (error.request) {
                    toast.error("No response received from the server!");
                } else {
                    toast.error("Error in setting up the request!");
                }
            }
        } else {
            toast.error("You need to Login first!");
        }
    };    

    return (
        <>
            <Toaster />
            <div className='relative pt-24 pb-16 w-full bg-one font-graduate dark:bg-five dark:text-one flex items-center justify-center'>
                <div className="flex flex-col md:flex-row items-center justify-around w-full mx-6 md:mx-10 rounded-xl border dark:border-one">
                    <div className="hidden md:block h-[400px] w-[400px] rounded-full my-5 overflow-hidden">
                        <img
                            src={sellcar}
                            alt="Laptop"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <form
                        className="space-y-8 w-full md:w-2/5 p-5" onSubmit={handleCarDetailSubmit}
                        encType="multipart/form-data"
                    >
                        {currentSection === 1 &&
                            <OwnerInfo
                                setOwnerName={setOwnerName}
                                setOwnerContact={setOwnerContact}
                                setOwnerAddress={setOwnerAddress}
                                setOwnerEmail={setOwnerEmail}
                            />}
                        {currentSection === 2 &&
                            <CarInfo
                                setMakeOfCar={setMakeOfCar}
                                setModel={setModel}
                                setYear={setYear}
                                setMileage={setMileage}
                                setColor={setColor}
                            />}
                        {currentSection === 3 &&
                            <CarCondition
                                setCondition={setCondition}
                                setAccidentHistory={setAccidentHistory}
                                setServiceHistory={setServiceHistory}
                                setInsuranceStatus={setInsuranceStatus}
                                setTaxUptill={setTaxUptill}
                            />}
                        {currentSection === 4 &&
                            <CarPhotos
                                handleFileUpload={handleFileUpload}
                                frontView={frontView}
                                backView={backView}
                                rearSideView1={rearSideView1}
                                rearSideView2={rearSideView2}
                                exteriorVideo={exteriorVideo}
                            />}
                        
                        {/* Show the loader while uploading */}
                        {loading && <Loader />}
                        
                        <div className='flex flex-row justify-between items-center px-4'>
                            {/* Back Btn */}
                            <div className="flex justify-center mt-4">
                                <button
                                    type="button"
                                    className={`${currentSection === 1 ? "hidden" : ""} py-2 px-5 rounded border-three border hover:bg-three hover:text-one`}
                                    onClick={goToPreviousSection}
                                >
                                    Back
                                </button>
                            </div>
                            {/* Next Btn */}
                            <div className="flex justify-center mt-4">
                                <button
                                    type="button" // Should be type 'button' to prevent accidental form submission
                                    onClick={goToNextSection}
                                    className={`${currentSection === 4 ? "hidden" : ""} py-2 px-5 rounded border-three border hover:bg-three hover:text-one`}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                        {/* submit button */}
                        <div className='flex justify-center'>
                            <button
                                type='submit'
                                className={`${currentSection !== 4 ? "hidden" : ""} w-full md:w-2/3 my-2 rounded-md dark:hover:text-one border-three border hover:text-one hover:bg-three px-3 py-2 text-lg font-medium`}
                            >
                                Post Data
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
