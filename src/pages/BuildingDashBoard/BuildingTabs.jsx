import React, {useState} from 'react';
import {Label, FileInput} from 'flowbite-react';
import {Tab, TabList, TabPanel, Tabs} from "@mui/joy";
import EditableProperty from "./EditableProperty.jsx";

function BuildingTabs() {

    const initialImages = [
        'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    ];

    const [selectedImage, setSelectedImage] = useState(initialImages[0]);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const [building, setBuilding] = useState({
        price: '$1500000',
        spaceType: 'Office',
        listedAs: 'For Lease OR For Sale',
        specialty: 'Financial',
        county: 'Alameda',
        buildingSize: '20000 SQFT',
        pricePerSqft: '$75',
        lotSize: '24000 SQFT',
        dateAdded: '10-12-2022',
        yearBuilt: '1978',
        listingStatus: 'Available',
        propertyDescription:
            'Home in LA with 18 bedrooms, 7 bathrooms, and an expansive backyard with a beautiful pool. ' +
            'Great location with a view of the golf course. Extra room and guesthouse with additional bathroom. ' +
            'Garage for 3 cars.',
    });

    const [activeStep, setActiveStep] = useState(0);

    function handleTextChange(event){

        const{ field, value } = event.target;

        setBuilding((prevBuilding) => ({
            ...prevBuilding,
            [field]: value,
        }));
    }

    return (
        <div>
            <Tabs aria-label="Basic tabs" defaultValue={0} value={activeStep} onChange={(event,value) => setActiveStep(value)}>
                <TabList>
                    <Tab> First </Tab>
                    <Tab> Second </Tab>
                    <Tab> Third </Tab>
                </TabList>

                <TabPanel value={0}>
                    <div>
                        <div className="space-y-6 mt-5">
                            <div className={"lg:pl-1 flex flex-wrap gap-12"}>
                                <div
                                    className="lg:max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                                    onClick={(e) => {
                                        if (!e.target.classList.contains('skip-button')){
                                            setActiveStep(1);
                                        }
                                    }}
                                >
                                    <a href="#" >
                                        <img className="rounded-t-lg"
                                             src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                                    </a>

                                    <div className="p-5">

                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                                                technology acquisitions 2021</h5>
                                        </a>

                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are
                                            the
                                            biggest enterprise technology acquisitions of 2021 so far, in reverse
                                            chronological order.</p>

                                        <a href="#"
                                           className="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 skip-button"

                                           onClick={(e) => {
                                               e.preventDefault();
                                               setActiveStep(2);
                                           }}
                                        >
                                            Add Building
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={1}>
                    <div className="scrollable-panel" style={{ overflowY: 'auto', maxHeight: '750px' }}>
                        <section className="bg-white font-poppins dark:bg-gray-800 modal.dialog.scrollable">
                            <div className="max-w-full px-4 py-4 mx-auto lg:py-8 md:px-6">
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full mb-8 md:w-1/2 md:mb-0">
                                        <div className="sticky top-0 overflow-hidden">
                                            <div className="relative mb-4 lg:h-2/4">
                                                <img
                                                    src={selectedImage}
                                                    alt=""
                                                    className="object-cover w-full rounded-lg h-56 md:h-72 lg:h-96"
                                                />
                                            </div>
                                            <div className="flex-wrap flex">
                                                {initialImages.map((imageSrc, index) => (
                                                    <div key={index} className="w-full md:w-1/2 p-1">
                                                        <a
                                                            href="#"
                                                            className={`block border ${selectedImage === imageSrc ? 'border-blue-300 hover:border-blue-300 rounded-lg' : 'border-transparent hover:border-blue-300 rounded-lg'}`}
                                                            onClick={() => handleImageClick(imageSrc)}
                                                        >
                                                            <img
                                                                src={imageSrc}
                                                                alt=""
                                                                className="object-cover rounded-lg w-full h-56 md:h-32 lg:h-56"
                                                            />
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400">
                                                <div className="flex flex-wrap items-center mt-2">
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                                <dt className="font-bold text-2xl text-gray-900"> Property Description</dt>
                                                <dd className="text-gray-700 sm:col-span-2">
                                                    <p className="max-w-md text-gray-700 dark:text-gray-400">
                                                        Home in LA with 18 bedrooms, 7 bathrooms, and an expansive
                                                        backyard with a beautiful pool. Great location with a view of the golf
                                                        course. Extra room and guesthouse with additional bathroom.
                                                        Garage for 3 cars.
                                                    </p>
                                                </dd>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="lg:pl-20">
                                            <div className="mb-8">
                                                <h2 className="max-w-xl mb-6 text-3xl font-bold dark:text-gray-400 md:text-4xl">
                                                    12345 Address Lane
                                                </h2>
                                                <div className="flex-wrap w-full gap-16">
                                                    <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                                        <span> $1500000 </span>
                                                    </p>
                                                </div>
                                                <div
                                                    className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                                                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                                                        <div
                                                            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                                            <dt className="font-bold text-2xl text-gray-900"> Space
                                                                Type
                                                            </dt>
                                                            <dd className="text-gray-800 text-xl font-medium sm:col-span-2"> Office</dd>
                                                        </div>
                                                        <div
                                                            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                                            <dt className="font-bold text-2xl text-gray-900"> Listed
                                                                As
                                                            </dt>
                                                            <dd className="text-gray-800 text-xl font-medium sm:col-span-2"> For Lease OR
                                                                For Sale
                                                            </dd>
                                                        </div>
                                                        <div
                                                            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                                            <dt className="font-bold text-2xl text-gray-900"> Specialty</dt>
                                                            <dd className="text-gray-800 text-xl font-medium sm:col-span-2"> Financial</dd>
                                                        </div>
                                                        <div
                                                            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                                            <dt className="font-bold text-2xl text-gray-900"> County</dt>
                                                            <dd className="text-gray-800 text-xl font-medium sm:col-span-2"> Alameda</dd>
                                                        </div>
                                                        <div
                                                            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                                            <dt className="font-bold text-2xl text-gray-900"> Building
                                                                Size
                                                            </dt>
                                                            <dd className="text-gray-800 text-xl font-medium sm:col-span-2"> 20000 SQFT</dd>
                                                        </div>
                                                        <div
                                                            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                                            <dt className="font-bold text-2xl text-gray-900"> Price Per
                                                                Sqft
                                                            </dt>
                                                            <dd className="text-gray-800 text-xl font-medium sm:col-span-2"> $75</dd>
                                                        </div>
                                                        <div
                                                            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                                            <dt className="font-bold text-2xl text-gray-900"> Lot Size
                                                            </dt>
                                                            <dd className="text-gray-800 text-xl font-medium sm:col-span-2"> 24000 SQFT</dd>
                                                        </div>
                                                        <div
                                                            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                                            <dt className="font-bold text-2xl text-gray-900"> Date
                                                                Added
                                                            </dt>
                                                            <dd className="text-gray-800 text-xl font-medium sm:col-span-2"> 10-12-2022</dd>
                                                        </div>
                                                        <div
                                                            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                                            <dt className="font-bold text-2xl text-gray-900"> Year
                                                                Built
                                                            </dt>
                                                            <dd className="text-gray-800 text-xl font-medium sm:col-span-2"> 1978</dd>
                                                        </div>
                                                        <div
                                                            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                                            <dt className="font-bold text-2xl text-gray-900"> Listing
                                                                Status
                                                            </dt>
                                                            <dd className="text-gray-800 text-xl font-medium sm:col-span-2"> Available</dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-4 mt-4 lg:justify-end">
                                                    <button
                                                        className="w-full p-4 bg-blue-500 rounded-md mb-8 lg:w-2/5 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700"
                                                        onClick={(e) => {
                                                            if (!e.target.classList.contains('skip-button')) {
                                                                setActiveStep(2);
                                                            }
                                                        }}
                                                    >
                                                        Add to Survey
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </TabPanel>


                <TabPanel value={2}>
                    <div className={"scrollable-panel"} style={{overflowY: 'auto', maxHeight: '750px'}}>
                        <section className="bg-white font-poppins dark:bg-gray-800 modal.dialog.scrollable">
                            <div className="max-w-full px-4 py-4 mx-auto lg:py-8 md:px-6">
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full mb-8 md:w-1/2 md:mb-0">
                                        <div className="sticky top-0 overflow-hidden">
                                            <div className="relative mb-4 lg:h-2/4">
                                                <img
                                                    src={selectedImage}
                                                    alt=""
                                                    className="object-cover w-full rounded-lg h-56 md:h-72 lg:h-96"
                                                />
                                            </div>
                                            <div className="flex-wrap flex">
                                                {initialImages.map((imageSrc, index) => (
                                                    <div key={index} className="w-full md:w-1/2 p-1">
                                                        <a
                                                            href="#"
                                                            className={`block border ${selectedImage === imageSrc ? 'border-blue-300 hover:border-blue-300 rounded-lg' : 'border-transparent hover:border-blue-300 rounded-lg'}`}
                                                            onClick={() => handleImageClick(imageSrc)}
                                                        >
                                                            <img
                                                                src={imageSrc}
                                                                alt=""
                                                                className="object-cover rounded-lg w-full h-56 md:h-32 lg:h-56"
                                                            />
                                                        </a>
                                                    </div>
                                                ))}
                                                <Label
                                                    htmlFor="dropzone-file"
                                                    className="dark:hover:bg-bray-800 flex h-56 w-full lg:h-56 md:h-32 md:mt-1.5 md:w-1/2 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                                >
                                                    <div
                                                        className="flex flex-col items-center justify-center pb-6 pt-5">
                                                        <svg
                                                            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 20 16"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                            />
                                                        </svg>
                                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                            <span className="font-semibold">Click to upload</span> or
                                                            drag and drop
                                                        </p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG,
                                                            PNG, JPG or GIF (MAX. 800x400px)</p>
                                                    </div>
                                                    <FileInput id="dropzone-file" className="hidden"/>
                                                </Label>
                                            </div>

                                            <div
                                                className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400">
                                                <div className="flex flex-wrap items-center mt-2">
                                                </div>
                                            </div>
                                            <EditableProperty
                                                label="Property Description"
                                                field={"Property Description"}
                                                placeholder="Type a description here..."
                                                value={building.propertyDescription}
                                                onChange={handleTextChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="lg:pl-20">
                                            <div className="mb-8">
                                                <h2 className="max-w-xl mb-6 text-3xl font-bold dark:text-gray-400 md:text-4xl">
                                                    12345 Address Lane
                                                </h2>
                                                <div className={"flex-wrap w-full gap-16"}>
                                                    <EditableProperty
                                                        label="Price"
                                                        field={"Price"}
                                                        value={building.price}
                                                        onChange={handleTextChange}
                                                    />
                                                </div>

                                                <div
                                                    className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                                                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                                                        <EditableProperty
                                                            label="Space Type"
                                                            field={"Space Type"}
                                                            value={building.spaceType}
                                                            onChange={handleTextChange}
                                                        />
                                                        <EditableProperty
                                                            label="Listed As"
                                                            field={"Listed As"}
                                                            value={building.listedAs}
                                                            onChange={handleTextChange}
                                                        />
                                                        <EditableProperty
                                                            label="Specialty"
                                                            field={"Specialty"}
                                                            value={building.specialty}
                                                            onChange={handleTextChange}
                                                        />
                                                        <EditableProperty
                                                            label="County"
                                                            field={"County"}
                                                            value={building.county}
                                                            onChange={handleTextChange}
                                                        />
                                                        <EditableProperty
                                                            label="Building Size"
                                                            field={"Building Size"}
                                                            value={building.buildingSize}
                                                            onChange={handleTextChange}
                                                        />
                                                        <EditableProperty
                                                            label="Price Per Sqft"
                                                            field={"Price Per Sqft"}
                                                            value={building.pricePerSqft}
                                                            onChange={handleTextChange}
                                                        />
                                                        <EditableProperty
                                                            label="Lot Size"
                                                            field={"Lot Size"}
                                                            value={building.lotSize}
                                                            onChange={handleTextChange}
                                                        />
                                                        <EditableProperty
                                                            label="Date Added"
                                                            field={"Date Added"}
                                                            value={building.dateAdded}
                                                            onChange={handleTextChange}
                                                        />
                                                        <EditableProperty
                                                            label="Year Built"
                                                            field={"Year Built"}
                                                            value={building.yearBuilt}
                                                            onChange={handleTextChange}
                                                        />
                                                        <EditableProperty
                                                            label="Listing Status"
                                                            field={"Listing Status"}
                                                            value={building.listingStatus}
                                                            onChange={handleTextChange}
                                                        />
                                                    </dl>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-4 mt-4 lg:justify-end">
                                                    <button
                                                        className="w-full p-4 bg-blue-500 rounded-md mb-8 lg:w-2/5 md:w-full dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700">
                                                        Confirm
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
}
export default BuildingTabs;