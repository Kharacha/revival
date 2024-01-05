import { Dropdown } from 'flowbite-react';
import { Checkbox } from "@mui/joy";
import {useState} from "react";


function BuildingFilter() {

    const filters = [
        {
            Name: 'Space Type',
            subFilter: [
                'Residential',
                'Multifamily',
                'Office',
                'Retail',
                {
                    label: 'Industrial',
                    specFilters: [
                        'Warehouse',
                        'Manufacturing',
                        'Storage',
                        'Truck Terminal',
                        'Mixed Use',
                    ],
                },
                'R&D',
                'Executive Suite',
                {
                    label: 'Land (Zoned)',
                    specFilters: [
                        'Multifamily',
                        'Office',
                        'Retail',
                        'Industrial',
                        'Mobile Home Park',
                        'Residential Development',
                        'Specialty',
                        'Farm/Ranch',
                    ],
                },
                {
                    label: 'Hospitality',
                    specFilters: [
                        'Hotel',
                        'Motel',
                        'Resort',
                    ],
                },
            ],
        },

        {
            Name: 'Specialty',
            subFilter: [
                'Airport',
                'Amusement Park',
                'Bowling Alley',
                'Car Wash',
                'Casino',
                'Church',
                'Civic Center Club',
                'Funeral Home',
                'Hospital',
                'Marina',
                'Parking Lot',
                'Private School',
                'Sports Center Arena',
                'Sports Recreation',
                'Theater',
            ]
        },

        {
            Name: 'Listed As',
            subFilter: [
                'Lease',
                'Purchase',
            ]
        },

        {
            Name: 'Listing Status',
            subFilter: [
                'Available',
                'Pending',
            ]
        },
    ];

    const [checkboxStates, setCheckboxStates] = useState({});

    const handleCheckboxChange = (filterName, label, isParent = false) => {
        setCheckboxStates(prevState => {
            const newState = { ...prevState };
            newState[filterName] = { ...newState[filterName] };

            if (isParent) {
                newState[filterName][label] = !newState[filterName][label];
                handleNestedCheckbox(newState[filterName], label, newState[filterName][label]);
            } else {
                newState[filterName][label] = !newState[filterName][label];
            }

            return newState;
        });
    };

    const handleNestedCheckbox = (checkboxState, label, isChecked) => {
        const specFilters = filters.reduce((acc, item) => {
            const subItem = item.subFilter.find(sub => typeof sub === 'object' && sub.label === label);
            if (subItem) {
                acc.push(...(subItem.specFilters || []));
            }
            return acc;
        }, []);

        specFilters.forEach(specFilter => {
            checkboxState[specFilter] = isChecked;
        });
    };

    const filtersDropDown = filters.map((item, index) => (
        <div key={index} className={'mb-4'}>
            <span className="font-extrabold">{item.Name}</span>
            <div className="flex flex-wrap">
                {item.subFilter.map((subItem, subIndex) => (
                    <div key={subIndex} className="mr-4">
                        {typeof subItem === 'object' ? (
                            <div>
                                <Checkbox
                                    label={subItem.label}
                                    color="neutral"
                                    checked={checkboxStates[item.Name] && checkboxStates[item.Name][subItem.label]}
                                    onChange={() => handleCheckboxChange(item.Name, subItem.label, true)}
                                    className={'font-semibold'}
                                />
                                <div className="ml-4">
                                    {subItem.specFilters && subItem.specFilters.map((specFilter, specFilterIndex) => (
                                        <Checkbox
                                            key={specFilterIndex}
                                            label={specFilter}
                                            color="neutral"
                                            checked={checkboxStates[item.Name] && checkboxStates[item.Name][specFilter]}
                                            onChange={() => handleCheckboxChange(item.Name, specFilter)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Checkbox
                                label={subItem}
                                color="neutral"
                                checked={checkboxStates[item.Name] && checkboxStates[item.Name][subItem]}
                                onChange={() => handleCheckboxChange(item.Name, subItem)}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    ));


    return (
        <div className="flex flex-wrap gap-4 w-auto">
            <Dropdown label="Filter" placement="bottom">
                <div className="m-4 columns-3 gap-4" style={{ width: '500px', height: '600px' }}>{filtersDropDown}</div>
            </Dropdown>
        </div>
    );
}

export default BuildingFilter;