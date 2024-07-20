import { defineField } from "sanity";
import { OlistIcon } from "@sanity/icons";

// EquipmentManufacturer Schema
export default {
    name: 'equipmentManufacturer',
    title: 'Equipment Manufacturer',
    type: 'document',
    icon: OlistIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo Image',
            type: 'image',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Equipments', value: 'equipment' },
                    { title: 'Construction', value: 'construction' },
                    { title: 'Haulauges', value: 'haulauge' },
                ]
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'selected',
            title: 'Selected',
            type: 'boolean',
            hidden: true
        }),
    ],
};