- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components are stateful and allow for better state and logic management. Functional components are mainly presentational
and mostly receive state. 

- [ ] Name three lifecycle methods and their purposes.

componentDidMount(){is invoked immediately after a component is mounted. Good for async functionality such as api calls}

componentDidUpdate(){is invoked immediately after updating occurs. Not called on the initial render/mount}

componentWillUnmount(){component will never be re-rendered. Not intended to set state}

- [ ] What is the purpose of a custom hook?

The purpose of a custom hook is to make components more DRY if stateful or other logic is needed across multiple components.

- [ ] Why is it important to test our apps?

It is important to test apps because users may not utilize the app in the manner the developer intended. 