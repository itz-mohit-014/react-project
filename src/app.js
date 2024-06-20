import React, { Suspense, lazy, useContext, useState  } from 'react';
import reactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider , Outlet, useActionData} from 'react-router-dom';

// import components...
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Body from './components/Body.jsx';
import RestaurentMenu from './components/RestaurentMenu.jsx';;
import Error from './components/Error.jsx';
import Shimmer from './components/Shimmer.jsx';
import ClassBasedUserComponent from './components/ClassBasedUserComponent.jsx';

import UserContext from './utilits/UserContext.js';

// lazy loading...component
const About = lazy( () => import('./components/About.jsx'));
const Contact = lazy( () => import('./components/Contact.jsx') )



const AppLayout = () => {

    const userDetails = useContext(UserContext);

    const [userData, setUserData] = useState(userDetails)

 return (
   <>
   <UserContext.Provider value={{userData , setUserData}}>
    {console.log(userData)}
    <Header />
    <Outlet/>
    <Footer/>

   </UserContext.Provider>
   </>
 )
}

const Layout = createBrowserRouter([
    {   path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {   path:"/",
                element:<Body></Body>
            },

            {   path:"/about",
                element:<Suspense fallback={<Shimmer/>}>
                    <About />
                </Suspense>
            },
            {   path:"/contact",
                element: <Suspense fallback={<Shimmer/>}>
                    <Contact />
                </Suspense> 
            },{
                path:"/restaurents/:resId",
                element:<RestaurentMenu />
            },{
                path:"/user",
                element:<ClassBasedUserComponent fName="Mohit" lName="Jangid"/>
            }
        ]
    },
])

const root = reactDOM.createRoot(document.getElementById('root'));

root.render(
     <React.StrictMode>
        <RouterProvider router={Layout}/>
    </React.StrictMode>
);
