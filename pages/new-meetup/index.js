//localhost:3001/new-meetup
import NewMeetUpForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'

const NewMeetUpPage = () => {
    const router = useRouter()

    async function addMeetUpHandler(enteredMeetUpData) { //trae las properties que necesitamos pasar = {title, image, address, description}
       const resp = await fetch('/api/new-meetup', {
           method: 'POST',
           body: JSON.stringify(enteredMeetUpData),
           headers: {
               'Content-Type': 'application/json'
           }
       })

       const data = await resp.json()
       console.log(data)

       router.push('/') //navegamos hasta la main page una vez terminamos
    }

    return <>
    <NewMeetUpForm onAddMeetUp={addMeetUpHandler}></NewMeetUpForm>
    </>
}

export default NewMeetUpPage