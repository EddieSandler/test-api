
async function getStories(){
const stories= await axios.get('https://hack-or-snooze-v3.herokuapp.com/stories')
console.log('story list:',stories)
return stories
}


async function login(){
const result=axios.post('https://hack-or-snooze-v3.herokuapp.com/login',
{
  "user": {
      "username": "theDude2",
      "password": "dudeabides"
  }
})
console.log('login data',result)
return result
}


async function createStory(){

  const story= await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories',{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoZUR1ZGUyIiwiaWF0IjoxNjk1NjU2Mjc3fQ.xl0M8lMQmiQRpTT_zSXakYrh4jvuM4zMW-WRGi8SfrA",
    "story": {
        "author": "Eddie Sandler",
        "title": "A Story",
        "url": "http://google.com"
    }
})
console.log(story)

}

async function deleteStory(id){
 await axios.delete(`https://hack-or-snooze-v3.herokuapp.com/stories/${id}`,{

 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoZUR1ZGUyIiwiaWF0IjoxNjk1NjU2Mjc3fQ.xl0M8lMQmiQRpTT_zSXakYrh4jvuM4zMW-WRGi8SfrA"

})

  }
