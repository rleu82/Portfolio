export default {
    // Computer Name
    name: 'projects',
    // visible title
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Project Title',
            type: 'string',
            description: 'Name of the Project',
        },
        {
            name: 'githubLink',
            title: 'Github Link',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'tech',
            title: 'Tech Stack',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'tech'}]}],
        },
        {
            name: 'projectDescription',
            title: 'Project Description',
            type: 'text',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            // Listed out few techs instead of all of the array
            // as recommended by sanity because it will uncessarily fetch data
            tech0: 'tech.0.name',
            tech1: 'tech.1.name',
            tech2: 'tech.2.name',
            tech3: 'tech.3.name',
            tech4: 'tech.4.name',
        },
        prepare: ({title, media, ...tech}) => {
            // filter undefined tech
            const techs = Object.values(tech).filter(Boolean);
            // return preview object for the project
            return {
                title: title,
                media: media,
                subtitle: Object.values(techs).join(', '),
            }
        },
    },
}