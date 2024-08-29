import { defineField } from "sanity";

// About Us Schema
export default {
    name: 'aboutUs',
    title: 'About Us',
    type: 'document',
    // Add a custom rule to prevent multiple documents of this type
    __experimental_actions: ['update', 'publish'], // Disable creating new documents
    fields: [
        defineField({
            name: 'founders',
            title: 'Founders',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'role',
                            title: 'Role',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true, // Enables cropping and focal points
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'bio',
                            title: 'Short Bio',
                            type: 'text',
                            validation: (Rule) => Rule.max(200), // Limit bio to 200 characters
                        }),
                        defineField({
                            name: 'socialMedia',
                            title: 'Social Media Links',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'twitter',
                                    title: 'Twitter',
                                    type: 'url',
                                    validation: (Rule) => Rule.uri({
                                        scheme: ['http', 'https'],
                                    }),
                                }),
                                defineField({
                                    name: 'linkedin',
                                    title: 'LinkedIn',
                                    type: 'url',
                                    validation: (Rule) => Rule.uri({
                                        scheme: ['http', 'https'],
                                    }),
                                }),
                                defineField({
                                    name: 'instagram',
                                    title: 'Instagram',
                                    type: 'url',
                                    validation: (Rule) => Rule.uri({
                                        scheme: ['http', 'https'],
                                    }),
                                }),
                            ],
                        }),
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mission',
            title: 'Mission',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'vision',
            title: 'Vision',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
    ],
};
