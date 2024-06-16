import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contacts) {
  return (
    <Card
      id={contacts.id}
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.licdn.com/dms/image/C4D03AQHq9Ge-PYvV-A/profile-displayphoto-shrink_200_200/0/1582127800717?e=2147483647&v=beta&t=7Uatwv4aKz35n4vZh7DyQZY_Ehci1-pt4gPijsqZSBU" />
      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
