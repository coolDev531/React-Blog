# Siren-blog-app-2.0
This website is built mainly for the purpose of blogging on various topics such as fitness, food, sports and such..
This website is built using React, with utlizing the robust capabilities of CSS preprocessor called SASS more specifically SCSS.
This project has extensively utilized the core concepts of React such as props( i.e, passing down data from parent components to children components ), 
functional components and their respective hooks such as useState(), which is used to control and manage state changes of elements on a website and
the useParams() hook provided by the React routing library react-router-dom, which helps in matching the URL with a specific data. I've also utilized the Socket-client tool for exchange of data between client-side and server-side.

On the backend this I've utilized the node based backend framework popularly known as Express, wherein I've also used Socket for emitting events for exchanging data 
between client-side and server-side, alongwith the 'fs' (File system) module for sending the json files containing the pertinent data that'll be rendered onto the screen.

Also additionally, I've utlized the Redux independent state management library for sending data across the UI(user interface) after receiving it from the backend server. Extensively implemented the hooks that are entailed by Redux, useSelector() for selecting the state and useDispatch() for dispatching the action.

## What I learnt?
1) Using react-routing with the help of react router library
  It's syntax looks something like this:
    ```
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> // paths and their respective components on that URL
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> // handling error 404 page
          </Route>
        </Routes>
      </BrowserRouter>
    ```
  
2) Usage of hooks like useState() and useParams()
    It's syntax looks something like this:
    
    i) useState()
    ```
     let [number, setNumber] = useState(0) //initialized number variable with value 0 and it'll be changed using the setNumber method.
    ```
    
    ii) useParams()
    ```
    let {id} = useParams() // id will contain the link that you've clicked on and we can use it to render content bound to a paricular link
    ```
    
3) How to emit events between client side and server-side for intermediate communication
    ```
      socket.emit("matching-string-for-listening",<data-being-sent>) // This is for emitting the event

      socket.on("matching-string-for-listening",(<data-received>)=>{ //call back function which receives the data as an argument }) //Listening for the event
    ```
4) Usage of redux library
    
   i) Reducers, which enable us to update the Store(which is our state), which then updates the user interface
    
    ```
    const initialState={
      initialValue:null
    }
 
    const reducerElement = (state=initialState,action)=>{ //This is where the state is updated before sending it to the store }
    ```
    
   ii) Actions that are dispatched to update the state through the reducers.
    ```
      let dispatch=useDispatch() //our dispatch method using useDispatch hook
      
      dispatch({
          type:"FETCH",
          payload:backendData
      })
      //Above you can see how to dispatch an action which happens to be a simple object
    ```
   iv) Connecting the store to our app
    ```
      import {legacy_createStore as createStore} from 'redux' //Import the library to create the store
      const store=createStore(reducerElement) //Create the store using the createStore() method
      import { Provider } from 'react-redux'; //Used for connecting the store to our application
      root.render(    
        <Provider store={store}>
            <App />                   //Connect the store to our application
        </Provider>
      );
    ```
    
    v) Usage of useSelector() and useDispatch() hooks of react-redux
      ```
        import { useSelector,useDispatch } from 'react-redux';  // Firstly, import them
        
        let stateElement=useSelector((state)=>{return state})  // Use useSelector() to get our state
        let dispatch=useDispatch()  // Use useDispatch() for dispatching actions to our reducer
      ```
      
    vi) How to create a server using Express.
      ```
        let express=require("express");  // Import express library
        let application=express();  // Create an express instance
        let PORT=9000;  // Port number for the server to listen to
        
        let server=application.listen(process.env.PORT || PORT) // This will be our server which will listen to port 9000 localhost locally or port after hosting
        
        application.get("/",(req,res)=>{
            res.send("Hey there!")             // API for response as we know servers filter between request and response
        })
      ```
      
# Desktop Design
![image](https://user-images.githubusercontent.com/78952955/183251396-d0e79dc3-2e53-4b4a-9810-308b44494815.png)

# Mobile Design
![image](https://user-images.githubusercontent.com/78952955/183251476-c3a3a087-1b09-4e85-a941-894d5208c146.png)

# Live URL
https://siren-two.netlify.app/

# Hosting
  1) Front-end: Netlify
  2) Back-end: Heroku

## Resources used
https://www.w3schools.com/react/react_usestate.asp
https://www.w3schools.com/react/react_router.asp#gsc.tab=0&gsc.q=usestate
https://reactrouter.com/docs/en/v6/hooks/use-params
