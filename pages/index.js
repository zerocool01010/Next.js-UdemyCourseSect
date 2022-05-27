import MeetupList from "../components/meetups/MeetupList";
import React, { useState } from "react";

const dummy_data = [
    {
        id: '01',
        image: 'image',
        title: 'someimgtitle',
        address: 'someimgadr'
    },
    {
        id: '01',
        image: 'image2',
        title: 'someimgtitle2',
        address: 'someimgadr2'
    }
]

const HomePage = () => {
    const [] = useState(false)
  let timer = setTimeout(() => {
    return (
      <>
        <MeetupList />
      </>
    );
  }, 2000);
  return (
    <>
      <h1>Home Page</h1>
      <MeetupList meetups={dummy_data}/>
    </>
  );
};

export default HomePage;
