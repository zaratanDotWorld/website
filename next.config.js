module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 's3.amazonaws.com'},
      { protocol: 'https', hostname: 'd3gacl6pm59h8m.cloudfront.net'}
    ],
  },
  async redirects() {
    return [
      {
        source: '/apply',
        destination: 'https://zaratan.managebuilding.com/Resident/rental-application/new',
        permanent: true,
      },
      {
        source: '/sage',
        destination: '/houses/sage',
        permanent: true,
      },
      {
        source: '/interest',
        destination: 'https://tally.so/r/gDLPzN',
        permanent: true,
      },
    ];
  },
}
