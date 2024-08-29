import { defineField } from "sanity";

// Services Schema
export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    // Ensure that there can only be one document of this type
    __experimental_actions: ['update', 'publish'], // Disable creating new documents
    fields: [
        defineField({
            name: 'servicesList',
            title: 'Services List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'array',
                            of: [{ type: 'block' }],
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'link',
                            title: 'Link',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        })
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'pageDescription',
            title: 'Page Description',
            type: 'text',
            // validation: (Rule) => Rule.required(),
        }),
    ],
};
