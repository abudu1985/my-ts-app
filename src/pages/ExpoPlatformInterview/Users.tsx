import { FC, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const initialData = [
  {
    id: 1,
    name: "Mike",
    surname: "Jonson",
    job: "Front",
    company: "Farrell, Wuckert and Bergnaum"
  },
  {
    id: 2,
    name: "Patricia",
    surname: "Lebsack",
    job: "Chief Creative Technician",
    company: "Cole, Anderson and Nikolaus"
  }
];

const Users: FC = () => {
  const [users, setUsers] = useState(initialData);
  const [time, setTime] = useState(new Date().toLocaleString("ru"));

  // function to ad a new user to the list
  const addUser = () => {
    const generateNewUser = () => ({
      id: Date.now(),
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      job: faker.name.jobTitle(),
      company: faker.company.name()
    });

    const newUsers = [...users, generateNewUser()];
    setUsers(newUsers);
  };

  const resetUser = () => setUsers(initialData);

  // prepare user data for render
  const mappedUsers = users.map((el) => ({
    id: el.id,
    name: el.name,
    surname: el.surname,
    job: el.job,
    company: el.company,
    fullName: el.name + " " + el.surname,
    fullNameLenght: (el.name + " " + el.surname).length
  }))

  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleString("ru")),
      1000
    );

    return () => clearInterval(timer);
  });

  return (
    <>
      <div>Total: {users.length}</div>
      <button onClick={addUser}>Add user</button>
      <button onClick={resetUser}>Rest user</button>
      <br />
      <div className="cards">
        {mappedUsers.map((user) => {
          return (
            <div
              className="card"
              style={{
                backgroundColor: `hsl(${user.fullNameLenght * 40}, 80%, 50%)`
              }}
              key={user.name}
            >
              <span className="nameLength">{user.fullNameLenght}</span>
              <h1 className="name">{user.fullName}</h1>
              <div className="job">{user.company}</div>
              {/* Job should be allways on the bottom of the card */}
              <h4 className="job">{user.job}</h4>
            </div>
          );
        })}
      </div>
      Time: {time}
    </>
  );
};

export default Users;
