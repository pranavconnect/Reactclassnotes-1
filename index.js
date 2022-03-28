const rootElement = document.getElementById("root");
const className = "greeting";
const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Pranav", lastName: "Reddy" };
//   const element = React.createElement("h1", {
//     className: "greeting",
//     children: "Hello Pranav!!",
//   });
const element = (
  <div>
    <h1 className={className}>Hello {fullName(user)}!</h1>
    <p>Good to see you.</p>
  </div>
);
ReactDOM.render(element, rootElement);
