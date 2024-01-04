import { Dropdown } from 'flowbite-react';
import { Checkbox } from "@mui/joy";

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
                    ]
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
                    ]
                },
                {
                    label: 'Hospitality',
                    specFilters: ['Hotel', 'Motel', 'Resort']
                },
            ]
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

    const filtersDropDown = filters.map((item, index) => (
        <div key={index}>
            <span>{item.Name}</span>
            <div className="flex flex-wrap">
                {item.subFilter.map((subItem, subIndex) => (
                    <div key={subIndex} className="mr-4">
                        {typeof subItem === 'object' ? (
                            <div>
                                <Checkbox label={subItem.label} color="neutral" />
                                <div className="ml-4">
                                    {subItem.specFilters && subItem.specFilters.map((specFilter, specFilterIndex) => (
                                        <Checkbox key={specFilterIndex} label={specFilter} color="neutral" />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Checkbox label={subItem} color="neutral" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    ));

    return (
        <div className="flex flex-wrap gap-4 w-auto">
            <Dropdown label="Filter" placement="bottom">
                <div className="m-4 grid grid-cols-3 gap-4" style={{ width: '500px', height: '800px' }}>{filtersDropDown}</div>
            </Dropdown>
        </div>
    );
}

export default BuildingFilter;
