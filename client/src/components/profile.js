import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


 const Profile = () => {
     const { user, isAuthenticated } = auth0();
 
     return (
         isAuthenticated && (
         <div>
             {/* this is potentially the entire app's content here postmarked as "user"? */}
            {/* {JSON.stringify(user, null, 2)}     */}

         </div>
         )
     )
 }

 export default Profile