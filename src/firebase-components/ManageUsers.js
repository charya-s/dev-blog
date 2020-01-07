// MANAGE USERS FUNCTION     
/**************************/          
// Inputs: User data (user), Database (firebaseDB)      
// Outputs: Admin level (admin_level)                   
// Description: Adds any first-time-login users to the  
//              database and checks the admin-level of existing 
//              users.

export const ManageUsers = async (user, firebaseDB) => {

    var admin_level = 0;

    if (user !== null) {
        var userid = user.uid;

        await firebaseDB.collection("users").doc(userid).get().then(async doc => {
            if (doc.data() === undefined) {
                console.log(`NO SUCH USER. ADDING ${user.displayName} TO DATABASE NOW.`);
                firebaseDB.collection("users").doc(userid).set({ names: user.displayName.split(" "), email: user.email }).catch(error => console.log(error));
                console.log(`USER ${user.displayName} ADDED TO DATABASE.`);
            }
            else {
                console.log(`USER ${user.displayName} FOUND. CHECKING PRIVILEGES.`);
                await firebaseDB.collection("adminUsers").doc(userid).get().then(admin_doc => {
                    if (admin_doc.data() !== undefined) {
                        admin_level = admin_doc.data().level;
                        console.log(`USER ${user.displayName} IS A LEVEL ${admin_level} ADMIN.`);
                    } else {
                        console.log(`USER ${user.displayName} IS NOT AN ADMIN.`);
                    }
                }).catch(error => console.log(error));
            }
        }).catch(error => console.log(error));
    };

    return admin_level;
}