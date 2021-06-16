# Async Redux
Making an asynchronous request with redux. We will connect a backend with our current project and learn how we can use fetch to pass data to our backend.

Link to our backend! 
https://github.com/Ejguzman3988/ft020121-bodega-redux-api-

---
## Vocab List: 
---
- What is CreateStore: creates a store that holds the state 
    - what arguments does it take? 
        - a function -> reducer
        - initial state
        - ehancer -> DevTools, put any middleare


- What is the Provider: Provides the store to the app. 
    - What should we give the provider to make it happen? 
        - Store



- What is connect: connects our components to the store. 
    - What does connect() returns: a function 
    - What happens when we invoke the function again what argument does it need. connect()(`exported-component-name`) 
    - What are the two areguments that go in the first connect(mapStateToProps, mapDispatchToProps)(component)



- Reducer: a function that returns the new version of the state. (Doesnt modify the state, yet) 
    - What arguments does it take? 
        - FIRST ARGUMENT: initialState
        - SECOND ARGUMENT: ACTION!!!



- Dispatch: sends the action to the reducer. 
    - What arguments does it take?
        - ACTION



- Action: an object that has `type`, `payload` (naming of type and payload is convention)
    - {
        type: "ADD_SOMETHING",
        payload: {something} --- (WHATEVER YOU WANT TO SEND TO YOUR REDUCER)
    }
    - (END OF LECTURE): How does thunk change our action?
        - gives us access to dispatch
            - allows us to dispatch a function 
        - allows us to return a function - has our dispatch
        - use async redux. 
    - Is Thunk Async?
        - its just 14 lines of code, but you can pass an async fetch request that will make the func async



---
- Out of the four vocab words above, which actually makes a state change and a triggers a re-render? 
    - <del>A. reducer</del>
    - <del>B. action</del>
    - `C. dispatch`
    - <del>D. provider</del>
---
## Deliverables
---
1. Create our rails backend
    1. Whitelist our server
    1. Seed Some data
1. Try to fetch in redux
    1. see what happens when we try to fetch using our dispatch
1. Apply middleware
    1. Take a look at thunk, and see how it affects our action
    1. make a get request to our backend using fetch
        1. get all products
    1. make a post request to our backend using fetch
        1. add a product
1. [Bonus] Create a loading screen
1. Further Review:
    1. Create an Feed Bodega Cat Button 
    1. Add some logic to our reducer that will update our state in the case we decide to feed our bodega cat
    1. if theres time make a patch request to our backend.
        1. feed our bodega cat
1. `IF BY SOME MIRACLE WE FINISH ON TIME TODAY`
    1. take 15 minutes to finish our pokemon react project. 
    1. make a way to filter pokemons
    1. make a way to remove our pokemons.
    1. give our pokemon privacy. 



# Intro to redux

Here is the node tree that we referenced in the video.
<img src="./NodeTree.png" />