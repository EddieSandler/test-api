const BASE_URL='https://hack-or-snooze-v3.herokuapp.com'

const storyId='054823b1-4448-47c7-aa3c-638806116030'
const author="Eddie"
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoZUR1ZGUyIiwiaWF0IjoxNjk1NTcxMTg0fQ.6D6GJSWdQlRsHOLS7cSeI3DXHHz2Z05yKwwS2Dl2VAk"
const storyURL="http://google.com"
const userName="theDude2"
const password="dudeabides"
const favorites=[]
const ownStories=[]




//GET STORY LIST
const storyList =  axios.get(`${BASE_URL}/stories?skip=0&limit=25`)
console.log('list of  stories',storyList)

//LOG IN
// const login = axios.post(`${BASE_URL}/login`,
// {
//   "user": {
//       "username": `${userName}`,
//       "password": `${password}`
//   }
// })
// console.log('my login',login)

//Add Story

// // const addStory= axios.post(`${BASE_URL}/stories`,
// // {
// //   "token": `${token}`,
// //   "story": {
// //       "author": `${author}`,
// //       "title": "Still testing",
// //       "url": `${storyURL}`
// //   }
// // })

// // console.log("A story I wrote",addStory)
// // // //add this to ownStories Array

 axios.delete(`${BASE_URL}/stories/${storyId}`,
 {
    "token": `${token}`

    }
)

//  console.log(`deleted ${storyId}`)

// // // console.log('deleted story with id ',`${storyId}`)
// // // //remove from my stories array

// // const killThese=['d3a5aa40-182f-4982-8164-46dcc8e098db',
// // 'e2ac0653-5443-4ee2-b781-4030cc72b27d',
// // '0d5a8437-f569-4ccb-ac9e-50a2b6116b65',
// // '5ac4f9aa-fa7f-468a-aedc-824778ef824e',
// // '5df1c88f-6480-4887-9efa-3f24b0ba20a1',
// // '1818c95f-c30e-44a5-8966-ec27862719f6' ]

// console.log(axios.delete(`${BASE_URL}/stories/${storyId}`,
// {
//   "token":`${token}`
// }))

// //  axios.delete(`${BASE_URL}/stories/${storyId}`,

// //   {
// //     "token":`${token}`
// //   })


//   const myFavorites=axios.post(`${BASE_URL}/users/${userName}/favorites/${storyId}`,
//   {
//     "token": `${token}`
// })
// console.log('my favs: ',myFavorites)


// async function delId(storyId,token){
//  await  axios.delete(`${BASE_URL}/users/${userName}/favorites/5df1c88f-6480-4887-9efa-3f24b0ba20a1`, { params: { token: token } })
//  console.log('delete', storyId,'with token', token,'user',userName)
// }
