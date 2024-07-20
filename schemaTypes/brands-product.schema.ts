import { defineField } from "sanity";
import { OlistIcon } from "@sanity/icons";

// Brand Schema
export default {
    name: 'brand',
    title: 'Construction Brands',
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
            name: 'price',
            title: 'Price',
            type: 'number',
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
                    { title: 'Asphalt Course', value: 'asphalt' },
                    { title: 'Bitumen', value: 'liquid' },
                    { title: 'Aggregate', value: 'construction' },
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
