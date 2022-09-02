# siren-blog-app
This website is built mainly for the purpose of blogging on various topics such as fitness, food, sports and such..
This website is build using React, with utlizing the robust capabilities of CSS preprocessor called SASS more specifically SCSS.
This project has extensively utilized the core concepts of React such as props( i.e, passing down data from parent components to children components ), 
functional components and their respective hooks such as useState(), which is used to control and manage state changes of elements on a website and
the useParams() hook provided by the React routing library react-router-dom, which helps in matching the URL with a specific data. 
All of the content being rendered on the screen is being pulled from the JSON files, which contains all the data.

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

# Desktop Design
![image](https://user-images.githubusercontent.com/78952955/183251396-d0e79dc3-2e53-4b4a-9810-308b44494815.png)

# Mobile Design
![image](https://user-images.githubusercontent.com/78952955/183251476-c3a3a087-1b09-4e85-a941-894d5208c146.png)

# Live URL
https://siren-blog-app.netlify.app/

## Resources used
https://www.w3schools.com/react/react_usestate.asp
https://www.w3schools.com/react/react_router.asp#gsc.tab=0&gsc.q=usestate
https://reactrouter.com/docs/en/v6/hooks/use-params
