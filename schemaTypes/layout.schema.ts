import { defineField } from "sanity";

// Layout Schema
export default {
    name: 'layout',
    title: 'Layout',
    type: 'document',
    fields: [
        defineField({
            name: 'headerLogo',
            title: 'Header Logo',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'footerLogo',
            title: 'Footer Logo',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'footerText',
            title: 'Footer Text',
            type: 'text',
            validation: (Rule) => Rule.required(),
            description: 'Enter HTML content',
            options: {
                //@ts-ignore
                language: 'html', // Enables HTML syntax highlighting
            },
        }),
    ],
}