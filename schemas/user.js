export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'userName',
        title: 'UserName',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        Options: {
          hotspot: true,
        },
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'reward',
        title: 'Reward',
        type: 'reference',
        to: { type: 'reward' },
      }
    ],
  };