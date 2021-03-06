import Main from './views/main.js'

export async function handler (/*req: object*/) {
  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body: Main({
      /**
       * Basic bio
       */
      fullname: 'Shunya Watanabe',
      title: 'My personal site!',
      occupation: 'Software Engineer',
      location: 'Dubai UAE',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',

      /**
       * Contact / social
       * - Comment out any item below to remove it from your page
       */
      email: 'swatanabe.me@gmail.com',
      twitter: 'ShunyaWatanabe',
      linkedin: 'shunya-watanabe-aba1a5151',
      // instagram: 'yourInsta',
      // facebook: 'your-facebook-name',

      /**
       * Layout
       */
      photographer: 'Ivana Cajina',
      service: 'Unsplash',
      credit: 'https://unsplash.com/@von_co',
      image: '_static/background.jpg'
    })
  }
}