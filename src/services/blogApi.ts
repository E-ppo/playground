// import type { NextApiRequest, NextApiResponse } from 'next'
// import formidable from 'formidable'
// import fs from 'fs'
// import path from 'path'

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method === 'POST') {
//     const form = new formidable.IncomingForm()
//     form.uploadDir = path.join(process.cwd(), 'public/uploads')
//     form.keepExtensions = true

//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         res.status(500).json({ error: 'Upload failed' })
//         return
//       }

//       const file = files.image as formidable.File
//       const fileName = file.newFilename
//       const url = `/uploads/${fileName}`

//       res.status(200).json({ url })
//     })
//   } else {
//     res.setHeader('Allow', ['POST'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }
